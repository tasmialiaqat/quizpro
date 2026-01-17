export default function SectionPills({ sections, activeSectionKey, onSelect }) {
  const entries = Object.entries(sections);

  return (
    <div className="d-flex flex-wrap gap-2">
      {entries.map(([key, sec]) => (
        <button
          key={key}
          type="button"
          className={`btn btn-sm ${
            key === activeSectionKey ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => onSelect(key)}
        >
          {sec.title}
          <span className="badge text-bg-light ms-2">
            {sec.questions.length}
          </span>
        </button>
      ))}
    </div>
  );
}
