import { useMemo, useState } from "react";
import { questionBank } from "../data/questionBank";
import SectionPills from "./SectionPills";
import QuizShell from "./QuizShell";

export default function CategoryTabs() {
  const categories = useMemo(() => Object.entries(questionBank), []);
  const [activeCategoryKey, setActiveCategoryKey] = useState(categories[0][0]);

  const activeCategory = questionBank[activeCategoryKey];
  const sectionEntries = Object.entries(activeCategory.sections);
  const [activeSectionKey, setActiveSectionKey] = useState(
    sectionEntries[0][0]
  );

  // Reset section when category changes
  function changeCategory(catKey) {
    setActiveCategoryKey(catKey);
    const firstSectionKey = Object.keys(questionBank[catKey].sections)[0];
    setActiveSectionKey(firstSectionKey);
  }

  const activeSection = activeCategory.sections[activeSectionKey];

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-3">
              <div>
                <h1 className="h4 mb-1">Section-wise Tech Quiz</h1>
                <p className="text-muted mb-0">
                  Choose a technology tab and then a section to start.
                </p>
              </div>
              <div className="text-muted small">
                Tip: Focus on one section per session.
              </div>
            </div>

            <hr className="my-3" />

            {/* Category Tabs */}
            <ul className="nav nav-tabs">
              {categories.map(([key, cat]) => (
                <li className="nav-item" key={key}>
                  <button
                    className={`nav-link ${
                      key === activeCategoryKey ? "active" : ""
                    }`}
                    onClick={() => changeCategory(key)}
                    type="button"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <SectionPills
                sections={activeCategory.sections}
                activeSectionKey={activeSectionKey}
                onSelect={setActiveSectionKey}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Area */}
      <div className="col-12">
        <QuizShell
          categoryTitle={activeCategory.title}
          sectionTitle={activeSection.title}
          questions={activeSection.questions}
        />
      </div>
    </div>
  );
}
