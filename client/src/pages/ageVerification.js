import React, { useState } from "react";
import Landing from "./landing";

function AgeVerification() {
  const [isOver21, setIsOver21] = useState(false);
  const [state, setState] = useState("");
  const states = [
    "California",
    "Florida",
    "Washington"
  ];

  if (!isOver21 || !state) {
    return (
      <div>
        <h1>Are you 21 years or older?</h1>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isOver21}
              onChange={() => setIsOver21(!isOver21)}
            />
            Yes, I am 21 or older
          </label>
        </div>
        {isOver21 && (
          <div>
            <h2>What state are you in?</h2>
            <select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">Please select a state</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  }

  return <Landing />;
}

export default AgeVerification;