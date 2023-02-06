

let count = 0 
function buttonClicked() {
	console.log("button was clicked");

	count += 1

	let newText = "Button was clicked:";

	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText + count;
}


