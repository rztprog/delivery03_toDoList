'use strict';

// Target the UL with his class
let ul = document.body.getElementsByClassName("ul")[0];
let addButton = document.getElementsByClassName("addButton")[0];
addButton.onclick = add;


// Darkmode
let i = 0;
let dark = document.getElementsByClassName("darkmode")[0];
document.body.style.backgroundColor = "#222222";
document.body.style.color = "#fff";
dark.onclick = darkmode;



//// FUNCTIONS ////
function add(){

	let newLi = document.createElement("li"); 
	let lis = document.getElementsByTagName("li");
	let data = document.body.getElementsByClassName("data")[0].value;
	if ( data == "" || data == undefined){
		return alert("DONT PUSH this button when he's empty, everything could EXPLODE !");
	}
	
	function upper(str){
		let newStr = str.split("");
		newStr[0] = newStr[0].toUpperCase();
		return newStr.join("");
	}

	data = upper(data);
	newLi.textContent = data;
	
	for(let li of lis){
		if( newLi.textContent == li.innerHTML ){
			return alert("This items is already-in");
		}
	}

	ul.appendChild(newLi);
};

function darkmode(){
	if(i == 1){ 	// DARK
		document.body.style.backgroundColor = "#222222";
		document.body.style.color = "#fff";
		document.getElementsByClassName("data")[0].style.backgroundColor = "rgba(170, 170, 170, 200)";
		document.getElementsByClassName("data")[0].style.color = "#fff";
		document.getElementsByClassName("data")[0].style.textShadow = "1px 1px #000";
		dark.value = "Darkmode [ON]";
		i--;
	}else{		// LIGHT
		document.body.style.backgroundColor = "#fff";
		document.body.style.color = "#000";	
		document.getElementsByClassName("data")[0].style.backgroundColor = "rgba(240, 240, 240, 200)";
		document.getElementsByClassName("data")[0].style.color = "#000";
		document.getElementsByClassName("data")[0].style.textShadow = "1px 1px #fff";
		dark.value = "Darkmode [OFF]";
		i++;
	}
};

