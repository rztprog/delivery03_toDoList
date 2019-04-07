'use strict';


// Target the UL with his class
let ul = document.body.getElementsByClassName("ul")[0];
let newLi = document.createElement("li"); 
let addButton = document.getElementsByClassName("addButton")[0];
// newLi.textContent = "Cheese";
newLi.innerHTML = "Cheese";
addButton.onclick = add;

// Darkmode
let i = 0;
let dark = document.getElementsByClassName("darkmode")[0];
dark.onclick = darkmode;



//// FUNCTIONS ////
function add(){
	ul.appendChild(newLi);
};


function darkmode(){
	if(i == 0){
		document.body.style.backgroundColor = "#222222";
		document.body.style.color = "#fff";
		i--;
	}else{
		document.body.style.backgroundColor = "#fff";
		document.body.style.color = "#000";	
		i++;
	}
};

