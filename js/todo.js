'use strict';

// Target the UL with his class
let ul = document.body.getElementsByClassName("ul")[0];

// Function for create a new li
let newLi = document.createElement("li"); 

// Target the input with his class
let input = document.querySelector("input");

// Add the newLi with the text "Cheese"
newLi.innerHTML = "Cheese";

function add(){
	ul.appendChild(newLi);
}


	
