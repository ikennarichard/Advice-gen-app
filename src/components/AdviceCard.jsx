export default function AdviceCard() {
  return (
  <div className="container">
    <h1 className="heading">ADVICE #<span id="advice_id">117</span></h1>
    <p className="advice_text">"Poverty is not a lack of character, poverty is a lack of cash."</p>
    <picture>
      <source media="(min-width:800px)" srcSet="./images/pattern-divider-desktop.svg"/>
      <img src="./src/images/pattern-divider-mobile.svg" alt="" className="divider"/>
    </picture>
    <button className="dice_button"><img src="./src/images/icon-dice.svg" alt="" className="dice_image"/></button>
  </div>
  );
}