import { useState } from "react";

const content = [
  [" Why React?", "Core Features", " Related Resources", "React vs JS"],
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="main">
      <header>
        <img src="favicon.svg" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          {content[0].map((item, i) => (
            <button
              className={activeTab == i ? "active" : ""}
              key={i}
              value={i}
              onClick={(e) =>
                e.target.value != activeTab && setActiveTab(+e.target.value)
              }
            >
              {item}
            </button>
          ))}
        </menu>

        <div id="tab-content">
          <ul>
            {content[activeTab + 1]?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
