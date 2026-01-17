export default function QuestionCard({
  question,
  index,
  total,
  selectedIndex,
  onSelect,
}) {
  return (
    <div className="card border rounded-3">
      <div className="card-body">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
          <div className="fw-semibold">
            Q{index + 1}. {question.question}
          </div>
          <span className="badge text-bg-light align-self-start">
            {index + 1}/{total}
          </span>
        </div>

        <div className="list-group mt-3">
          {question.options.map((opt, i) => {
            const active = selectedIndex === i;
            return (
              <button
                key={i}
                type="button"
                className={`list-group-item list-group-item-action d-flex align-items-start gap-2 ${
                  active ? "active" : ""
                }`}
                onClick={() => onSelect(i)}
              >
                <span
                  className={`badge ${
                    active ? "text-bg-light" : "text-bg-primary"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-start">{opt}</span>
              </button>
            );
          })}
        </div>

        <div className="text-muted small mt-3">
          Choose one option and click <strong>Submit & Next</strong>.
        </div>
      </div>
    </div>
  );
}
