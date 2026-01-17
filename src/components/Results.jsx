export default function Results({
  total,
  score,
  attempted,
  onRestart,
  onReview,
}) {
  const percent = Math.round((score / total) * 100);

  let tone = "text-bg-danger";
  let message = "Needs improvement. Focus on fundamentals and practice daily.";
  if (percent >= 70) {
    tone = "text-bg-success";
    message = "Strong performance. Review explanations to lock in details.";
  } else if (percent >= 50) {
    tone = "text-bg-warning text-dark";
    message = "Decent base. Review weak areas and retry this section.";
  }

  return (
    <div className="text-center py-3">
      <span className={`badge ${tone} px-3 py-2 mb-3`}>Result</span>

      <h3 className="h4 mb-2">
        Your Score: {score} / {total}
      </h3>
      <div className="text-muted mb-3">
        Attempted: {attempted} • Accuracy: {percent}%
      </div>

      <div
        className="alert alert-light border mx-auto"
        style={{ maxWidth: 720 }}
      >
        {message}
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
        <button className="btn btn-primary" onClick={onRestart} type="button">
          Restart Section
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={onReview}
          type="button"
        >
          Review Answers
        </button>
      </div>
    </div>
  );
}
