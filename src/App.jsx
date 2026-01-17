import Navbar from "./components/Navbar";
import CategoryTabs from "./components/CategoryTabs";

export default function App() {
  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <main className="container py-4">
        <CategoryTabs />
        <footer className="text-center text-muted small mt-4">
          Built with React + Bootstrap • Section-wise quizzes (JS, React, SQL,
          NoSQL, GraphQL)
        </footer>
      </main>
    </div>
  );
}
