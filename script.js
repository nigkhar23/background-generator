var csscodedisplay = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//default color code display when page first loads
csscodedisplay.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"  + ";";

//to display the css code of bg color CHOSEN on screen
function DisplayColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	csscodedisplay.textContent = body.style.background + ";"; 
}


//generate a random color code
function generateRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }


function assignColor(){
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();

	//after assigning color, do as usual...print on screen...so we call DisplayColor functn.

	DisplayColor();
}

//make button to generate random color code
var randomButton = document.getElementById("Random");
randomButton.addEventListener("click", assignColor); //add event listener to button and call the suitable functn when clicked

color1.addEventListener("input", DisplayColor);

color2.addEventListener("input", DisplayColor);