
// dice button 
const dice = document.querySelector('.dice_button');

//dice image
const diceImage = document.querySelector('.dice_image')

// advice text
const advice_text = document.querySelector('.advice_text');

// advice id
const advice_id = document.querySelector('#advice_id');

dice.addEventListener('click', displayAdvice);


async function displayAdvice() {

    let advice = await fetch('https://api.adviceslip.com/advice', {cache: "no-cache"})

    if (!advice.ok) {
		throw new Error(`HTTP error! status: ${advice.status}`);
	}

    let response = await advice.json();



    //display advice
    advice_text.innerText = `"${response.slip.advice}"`;

    advice_id.innerText = response.slip.id
};

