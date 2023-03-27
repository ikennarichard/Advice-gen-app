export default function Button({displayAdvice}) {
  function handleClick(){
    displayAdvice()
  }
  return (
    <button className="dice_button"><img src="./src/images/icon-dice.svg" alt="" className="dice_image" onClick={handleClick}/></button>
  );
}