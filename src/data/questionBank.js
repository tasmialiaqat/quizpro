export const questionBank = {
  javascript: {
    title: "JavaScript",
    sections: {
      basics: {
        title: "Basics",
        questions: [
          {
            id: "js-b-1",
            question: "What is the output of: console.log(typeof null)?",
            options: ["null", "object", "undefined", "number"],
            answerIndex: 1,
            explanation:
              "In JavaScript, typeof null is a long-standing quirk: it returns 'object'.",
          },
          {
            id: "js-b-2",
            question: "Which statement about 'let' is correct?",
            options: [
              "It is function-scoped",
              "It is block-scoped",
              "It is hoisted and initialized to a value",
              "It cannot be reassigned",
            ],
            answerIndex: 1,
            explanation:
              "let is block-scoped. It is hoisted but remains in the temporal dead zone until initialized.",
          },
          {
            id: "js-b-3",
            question: "What does Array.prototype.map return?",
            options: [
              "A new array",
              "The original array mutated",
              "A boolean",
              "A single aggregated value",
            ],
            answerIndex: 0,
            explanation:
              "map returns a new array of the same length after applying a transform function.",
          },
        ],
      },
      intermediate: {
        title: "Intermediate",
        questions: [
          {
            id: "js-i-1",
            question: "What is the main difference between == and === ?",
            options: [
              "No difference",
              "=== does type coercion, == does not",
              "== does type coercion, === does not",
              "== is faster always",
            ],
            answerIndex: 2,
            explanation:
              "== allows coercion; === is strict equality (no coercion).",
          },
          {
            id: "js-i-2",
            question: "Which is true about JavaScript promises?",
            options: [
              "They can be resolved multiple times",
              "They are always synchronous",
              "They represent a single eventual value",
              "They block the main thread",
            ],
            answerIndex: 2,
            explanation:
              "A promise represents a single eventual outcome (fulfilled/rejected).",
          },
        ],
      },
      advanced: {
        title: "Advanced",
        questions: [
          {
            id: "js-a-1",
            question:
              "In the event loop, what is the correct order (typical) for execution priority?",
            options: [
              "macrotask queue > microtask queue",
              "microtask queue > macrotask queue",
              "rendering always before microtasks",
              "timers always before microtasks",
            ],
            answerIndex: 1,
            explanation:
              "Microtasks (e.g., promise callbacks) generally run before the next macrotask.",
          },
          {
            id: "js-a-2",
            question: "What does 'this' refer to in an arrow function?",
            options: [
              "The object calling the function",
              "The global object always",
              "Lexically inherited from enclosing scope",
              "It depends on bind()",
            ],
            answerIndex: 2,
            explanation:
              "Arrow functions do not have their own 'this'; they capture it from the outer scope.",
          },
        ],
      },
    },
  },

  react: {
    title: "React",
    sections: {
      basics: {
        title: "Basics",
        questions: [
          {
            id: "r-b-1",
            question: "What is the primary purpose of React?",
            options: [
              "Database management",
              "Building user interfaces",
              "Server-side routing",
              "Operating system development",
            ],
            answerIndex: 1,
            explanation: "React is a library for building component-based UIs.",
          },
          {
            id: "r-b-2",
            question: "What does useState return?",
            options: [
              "Only state value",
              "Only setter function",
              "An array: [state, setState]",
              "An object with state fields",
            ],
            answerIndex: 2,
            explanation: "useState returns a tuple: current state and updater.",
          },
        ],
      },
      intermediate: {
        title: "Intermediate",
        questions: [
          {
            id: "r-i-1",
            question: "When does useEffect run (default)?",
            options: [
              "Only before render",
              "After every render",
              "Only once at app start",
              "Only on unmount",
            ],
            answerIndex: 1,
            explanation:
              "By default, useEffect runs after every render. Dependency array changes that.",
          },
          {
            id: "r-i-2",
            question: "What is the key purpose of the 'key' prop in lists?",
            options: [
              "To apply CSS styles",
              "To make items clickable",
              "To help React reconcile list changes efficiently",
              "To prevent re-renders entirely",
            ],
            answerIndex: 2,
            explanation:
              "Keys help React track items, improving reconciliation and correctness.",
          },
        ],
      },
      advanced: {
        title: "Advanced",
        questions: [
          {
            id: "r-a-1",
            question: "What problem does useMemo primarily solve?",
            options: [
              "Network caching",
              "Memoizing expensive computations between renders",
              "Creating global state",
              "Replacing useEffect",
            ],
            answerIndex: 1,
            explanation:
              "useMemo caches the result of expensive computations based on dependencies.",
          },
          {
            id: "r-a-2",
            question: "What does React StrictMode do in development?",
            options: [
              "Speeds up production build",
              "Runs effects twice to help detect side effects",
              "Disables hooks",
              "Enables SSR automatically",
            ],
            answerIndex: 1,
            explanation:
              "In development, StrictMode intentionally double-invokes some lifecycles/effects to surface issues.",
          },
        ],
      },
    },
  },

  sql: {
    title: "SQL",
    sections: {
      basics: {
        title: "Basics",
        questions: [
          {
            id: "sql-b-1",
            question: "Which SQL clause is used to filter rows?",
            options: ["GROUP BY", "WHERE", "ORDER BY", "HAVING"],
            answerIndex: 1,
            explanation: "WHERE filters rows before grouping.",
          },
          {
            id: "sql-b-2",
            question: "What does INNER JOIN return?",
            options: [
              "All rows from left table",
              "All rows from both tables",
              "Only matching rows from both tables",
              "Only non-matching rows",
            ],
            answerIndex: 2,
            explanation:
              "INNER JOIN returns only rows with matches in both tables.",
          },
        ],
      },
      intermediate: {
        title: "Intermediate",
        questions: [
          {
            id: "sql-i-1",
            question: "When do you use HAVING instead of WHERE?",
            options: [
              "To filter columns",
              "To filter aggregated/grouped results",
              "To sort results",
              "To create indexes",
            ],
            answerIndex: 1,
            explanation:
              "HAVING filters after GROUP BY, typically on aggregates.",
          },
          {
            id: "sql-i-2",
            question: "What is a primary key?",
            options: [
              "A key that can be null",
              "A unique identifier for a row",
              "A key used only for sorting",
              "A duplicate field",
            ],
            answerIndex: 1,
            explanation:
              "Primary key uniquely identifies each row and typically cannot be null.",
          },
        ],
      },
      advanced: {
        title: "Advanced",
        questions: [
          {
            id: "sql-a-1",
            question: "What does a window function do?",
            options: [
              "Groups rows into one row",
              "Operates across a set of rows related to the current row",
              "Deletes duplicates",
              "Encrypts columns",
            ],
            answerIndex: 1,
            explanation:
              "Window functions compute values across related rows without collapsing result rows.",
          },
        ],
      },
    },
  },

  nosql: {
    title: "NoSQL",
    sections: {
      basics: {
        title: "Basics",
        questions: [
          {
            id: "nosql-b-1",
            question: "Which is a common NoSQL database model?",
            options: ["Relational", "Document", "Spreadsheet", "Assembly"],
            answerIndex: 1,
            explanation:
              "Document databases (e.g., MongoDB) store JSON-like documents.",
          },
          {
            id: "nosql-b-2",
            question: "In document databases, schema is typically:",
            options: [
              "Fixed and rigid",
              "Optional / flexible",
              "Not allowed",
              "Compiled",
            ],
            answerIndex: 1,
            explanation:
              "Many NoSQL systems allow flexible schema per document/record.",
          },
        ],
      },
      intermediate: {
        title: "Intermediate",
        questions: [
          {
            id: "nosql-i-1",
            question:
              "CAP theorem says a distributed system can strongly provide:",
            options: [
              "All three always",
              "Only 2 of Consistency, Availability, Partition tolerance",
              "Only Consistency always",
              "Only Availability always",
            ],
            answerIndex: 1,
            explanation:
              "Under partition, you generally choose between Consistency and Availability.",
          },
        ],
      },
      advanced: {
        title: "Advanced",
        questions: [
          {
            id: "nosql-a-1",
            question: "What is an example of denormalization benefit in NoSQL?",
            options: [
              "More joins",
              "Faster reads by embedding related data",
              "Strict foreign keys",
              "Reduced storage always",
            ],
            answerIndex: 1,
            explanation:
              "Embedding avoids joins and improves read performance in many NoSQL designs.",
          },
        ],
      },
    },
  },

  graphql: {
    title: "GraphQL",
    sections: {
      basics: {
        title: "Basics",
        questions: [
          {
            id: "gql-b-1",
            question: "In GraphQL, what is a 'query'?",
            options: [
              "A write operation only",
              "A read operation",
              "A database index",
              "A server deployment",
            ],
            answerIndex: 1,
            explanation: "Queries are used to fetch/read data.",
          },
          {
            id: "gql-b-2",
            question: "What is the main advantage of GraphQL over REST?",
            options: [
              "Always faster",
              "Clients can request exactly the fields they need",
              "No authentication required",
              "No server needed",
            ],
            answerIndex: 1,
            explanation:
              "GraphQL allows clients to specify exactly what data they want.",
          },
        ],
      },
      intermediate: {
        title: "Intermediate",
        questions: [
          {
            id: "gql-i-1",
            question: "What are GraphQL resolvers?",
            options: [
              "CSS helpers",
              "Functions that fetch data for schema fields",
              "A database table",
              "A network protocol",
            ],
            answerIndex: 1,
            explanation:
              "Resolvers return the data for the fields defined in your GraphQL schema.",
          },
        ],
      },
      advanced: {
        title: "Advanced",
        questions: [
          {
            id: "gql-a-1",
            question:
              "What is a common solution to the N+1 problem in GraphQL?",
            options: [
              "SSR",
              "DataLoader batching/caching",
              "Using more mutations",
              "JWT tokens",
            ],
            answerIndex: 1,
            explanation:
              "Batching and caching (e.g., DataLoader) reduces repeated DB calls per nested field.",
          },
        ],
      },
    },
  },
};
