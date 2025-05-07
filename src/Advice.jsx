import { useState } from 'react';
import "./Advicestyle.css";

const Advice = () => {
  const [advice, setAdvice] = useState("Click the button to get advice!");
  const [count, setCount] = useState(0);

  async function getadvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
      setAdvice("Failed to fetch advice. Please try again.");
    }
  }

  return (
    <div className='glass'>
      <h3>{advice}</h3>
      <button onClick={getadvice}>Get Advice</button>
      <p>Read: <b>{count}</b></p>
    </div>
  );
};

export default Advice;