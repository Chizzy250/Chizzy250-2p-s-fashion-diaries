/* assigning a variable name to the text by using its Id */

let myDiv = document.getElementById("myDiv");

function hidetext() {
	myDiv.style.display = "none";
}

/* defining the function to display text when button is clicked */

function display() {
	if(myDiv.style.display = "none") {
		myDiv.style.display = "block"; /* and then the text appears */
		
		/* setting a timeout function to hide the text after 5 seconds (5000 milliseconds) */
    myVar = setTimeout(hide, 5000);
    }
}

/* define function to hide d text after timeout */
function hide() {
	myDiv.style.display = "none";
}
