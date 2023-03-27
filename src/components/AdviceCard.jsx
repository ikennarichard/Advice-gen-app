import { useState } from 'react';
import Button from "./Button";

export default function AdviceCard() {
  const [advice, setAdvice] = useState("Poverty is not a lack of character, poverty is a lack of cash.");
  const [adviceId, setAdviceId] = useState('117');

  async function displayAdvice() {
    let advice = await fetch('https://api.adviceslip.com/advice');

    if (!advice.ok) {
		throw new Error(`HTTP error! status: ${advice.status}`);
	}

    let response = await advice.json();
    setAdvice(`"${response.slip.advice}"`);
    setAdviceId(response.slip.id);
};

  return (
  <div className="container">
    <h1 className="heading">ADVICE #<span id="advice_id">{adviceId}</span></h1>
    <p className="advice_text">{advice}</p>
    <picture>
      <source media="(min-width:800px)" srcSet="/assets/pattern-divider-desktop.svg"/>
      <img src="/assets/pattern-divider-mobile.svg" alt="" className="divider"/>
    </picture>
    <Button displayAdvice={displayAdvice}/>
  </div>
  );
}