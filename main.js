
/* initialize varaible to count*/
let count = 0;

/* create function to count number of times button is clicked*/
function buttonClicked() {
	console.log("button was clicked");

	/* increase count each time button is clicked*/
	count += 1

	/* change button division text */
	let newText = "Button was clicked:";

	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText + count;
};


