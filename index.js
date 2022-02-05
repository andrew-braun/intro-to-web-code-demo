/* Select the "click me" button by using querySelector to grab the ID */
const button = document.querySelector("#click-me");

/* Function to fire when "click me" is clicked */
function handleButtonClick(event) {
	alert(event);
	button.style.background = "purple";
	button.classList.toggle("active");
}

/* Add an event listener that will detect when the button is clicked and call the named function */
button.addEventListener("click", handleButtonClick);

/* Select the color blocks by grabbing all elements with that class */
const colorBlocks = document.querySelectorAll(".color-block");

/* Select the "Red or Blue?" button by grabbing the ID */
const gameButton = document.querySelector("#game-button");

/* Store game record */
const resultList = [];

/* Function that selects a random color to display and hides the other one */
function playGame() {
	/* Reset game state by removing the class */
	const currentColor = document.querySelector(".current-game-selection");
	if (currentColor) {
		currentColor.classList.remove("current-game-selection");	
	}
	
	/* Select random number between 0 and 1 */
	const randomNumber = Math.floor(Math.random() * 2);
	
	resultList.push(randomNumber);
	console.log(resultList);
	
	/* Color the new block */
	colorBlocks[randomNumber].classList.add("current-game-selection");
}

/* Listen for game play on button push */
gameButton.addEventListener("click", playGame);