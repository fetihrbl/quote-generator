import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";


function App() {

  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, [])

  const fetchAdvice = () => {
    axios
        .get("https://api.adviceslip.com/advice")
        .then((response) => {
          const {advice} = response.data.slip;
          setAdvice(advice)
        })
        .catch((error) => {
          console.log(error);
        })
  };

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
          <button className="button" onClick={fetchAdvice}>
              <span>Give Me Advice</span>
          </button>
      </div>
    </div>
  );
}

export default App;
