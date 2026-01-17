export default function ProgressInfo({ currentIndex, total }) {
  const percent = Math.round(((currentIndex + 1) / total) * 100);

  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between small text-muted mb-1">
        <span>
          Question {currentIndex + 1} of {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
