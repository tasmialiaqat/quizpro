import { useEffect, useMemo, useState } from "react";
import ProgressInfo from "./ProgressInfo";
import QuestionCard from "./QuestionCard";
import Results from "./Results";
import Review from "./Review";

const DEFAULT_SECONDS = 90; // per section (adjust)

export default function QuizShell({ categoryTitle, sectionTitle, questions }) {
  const total = questions.length;

  const [mode, setMode] = useState("quiz"); // quiz | results | review
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [answers, setAnswers] = useState(() =>
    questions.map(() => ({ chosen: null, isCorrect: null }))
  );

  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_SECONDS);

  // reset when questions change (category/section changed)
  useEffect(() => {
    setMode("quiz");
    setIndex(0);
    setSelectedIndex(null);
    setAnswers(questions.map(() => ({ chosen: null, isCorrect: null })));
    setSecondsLeft(DEFAULT_SECONDS);
  }, [questions]);

  const current = questions[index];

  const score = useMemo(
    () => answers.filter((a) => a.isCorrect === true).length,
    [answers]
  );

  const attempted = useMemo(
    () => answers.filter((a) => a.chosen !== null).length,
    [answers]
  );

  // Timer
  useEffect(() => {
    if (mode !== "quiz") return;
    if (secondsLeft <= 0) {
      setMode("results");
      return;
    }
    const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [secondsLeft, mode]);

  function chooseOption(optIndex) {
    setSelectedIndex(optIndex);
  }

  function submitAndNext() {
    if (selectedIndex === null) return;

    const isCorrect = selectedIndex === current.answerIndex;

    setAnswers((prev) => {
      const copy = [...prev];
      copy[index] = { chosen: selectedIndex, isCorrect };
      return copy;
    });

    setSelectedIndex(null);

    if (index + 1 < total) setIndex((i) => i + 1);
    else setMode("results");
  }

  function skip() {
    if (index + 1 < total) setIndex((i) => i + 1);
    else setMode("results");
    setSelectedIndex(null);
  }

  function restart() {
    setMode("quiz");
    setIndex(0);
    setSelectedIndex(null);
    setAnswers(questions.map(() => ({ chosen: null, isCorrect: null })));
    setSecondsLeft(DEFAULT_SECONDS);
  }

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-2">
          <div>
            <h2 className="h5 mb-1">
              {categoryTitle} <span className="text-muted">/</span>{" "}
              {sectionTitle}
            </h2>
            <div className="text-muted small">
              Answer carefully. Explanations available in Review.
            </div>
          </div>

          <div className="d-flex flex-wrap gap-2">
            <span className="badge text-bg-secondary">
              Attempted: {attempted}/{total}
            </span>
            <span className="badge text-bg-success">Score: {score}</span>
            <span className="badge text-bg-warning text-dark">
              Time: {secondsLeft}s
            </span>
          </div>
        </div>

        <hr className="my-3" />

        {mode === "quiz" && (
          <>
            <ProgressInfo currentIndex={index} total={total} />

            <QuestionCard
              key={current.id}
              question={current}
              index={index}
              total={total}
              selectedIndex={selectedIndex}
              onSelect={chooseOption}
            />

            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-end mt-3">
              <button
                className="btn btn-outline-secondary"
                onClick={skip}
                type="button"
              >
                Skip
              </button>

              <button
                className="btn btn-primary"
                onClick={submitAndNext}
                type="button"
                disabled={selectedIndex === null}
              >
                {index + 1 === total ? "Finish Quiz" : "Submit & Next"}
              </button>
            </div>
          </>
        )}

        {mode === "results" && (
          <Results
            total={total}
            score={score}
            attempted={attempted}
            onRestart={restart}
            onReview={() => setMode("review")}
          />
        )}

        {mode === "review" && (
          <Review
            questions={questions}
            answers={answers}
            onRestart={restart}
            onBackToResults={() => setMode("results")}
          />
        )}
      </div>
    </div>
  );
}
