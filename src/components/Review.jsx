export default function Review({
  questions,
  answers,
  onRestart,
  onBackToResults,
}) {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
        <div>
          <h3 className="h5 mb-1">Review</h3>
          <div className="text-muted small">
            Correct answer, your choice, and explanation are shown below.
          </div>
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-secondary"
            onClick={onBackToResults}
            type="button"
          >
            Back to Results
          </button>
          <button className="btn btn-primary" onClick={onRestart} type="button">
            Retry Section
          </button>
        </div>
      </div>

      <hr />

      <div className="d-grid gap-3">
        {questions.map((q, idx) => {
          const a = answers[idx];
          const correctText = q.options[q.answerIndex];
          const chosenText =
            a.chosen === null ? "Not answered" : q.options[a.chosen];

          const isCorrect = a.isCorrect === true;
          const badgeClass =
            a.chosen === null
              ? "text-bg-secondary"
              : isCorrect
              ? "text-bg-success"
              : "text-bg-danger";

          return (
            <div className="card border rounded-3" key={q.id}>
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                  <div className="fw-semibold">
                    Q{idx + 1}. {q.question}
                  </div>
                  <span className={`badge ${badgeClass} align-self-start`}>
                    {a.chosen === null
                      ? "Skipped"
                      : isCorrect
                      ? "Correct"
                      : "Wrong"}
                  </span>
                </div>

                <div className="mt-3">
                  <div className="row g-2">
                    <div className="col-12 col-md-6">
                      <div className="p-2 bg-light border rounded">
                        <div className="small text-muted">Your Answer</div>
                        <div className="fw-semibold">{chosenText}</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="p-2 bg-light border rounded">
                        <div className="small text-muted">Correct Answer</div>
                        <div className="fw-semibold">{correctText}</div>
                      </div>
                    </div>
                  </div>

                  <div className="alert alert-info mt-3 mb-0">
                    <strong>Explanation:</strong> {q.explanation}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
