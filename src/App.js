import React, { useState } from 'react'

function App() {
  const [text, setText] = useState(null);
  const [city, setCity] = useState(null);

  return (
    <div className="box">
      <div className="inputData">
        <input className="inputField"
          type="text"
          onChange={(event) => {

          }} />
      </div>

      <div className="info">
        <h2 className="location">
          <i class="fas fa-street-view">{text}</i>
        </h2>
        <p id="date"> </p>
        <h1 className="temp"></h1>
        <h3 className="tempmin_max"> </h3>
      </div>

      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>

      <div id="weathercon">
        <i class="fa"></i>
      </div>

    </div>

  );
}

export default App;
