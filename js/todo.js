'use strict';

////////// VARIABLES //////////
///////////////////////////////

// Target the UL
let ul = document.getElementsByClassName("ul")[0];
let addButton = document.getElementsByClassName("addButton")[0];
addButton.onclick = add;


// Darkmode
let i = 0;
let y = 0;
let dark = document.getElementsByClassName("darkmode")[0];
let datastyle = document.getElementsByClassName("data")[0].style;
let body = document.getElementsByClassName("body")[0].style;
dark.onclick = darkmode;


////////// FUNCTIONS //////////
///////////////////////////////
function upper(str){
	str = str.split("");
	return str[0] = str[0].toUpperCase() + str.splice(1).join("");
};

function redField(){
	datastyle.backgroundColor = "rgb(255, 55, 55)";
	//li.style.backgroundColor = "rgb(255, 55, 55)"; 
	return setTimeout( () => datastyle.backgroundColor = (i==0) ? "rgba(170, 170, 170, 0.9)" : "rgba(230, 230, 230, 0.9)", 500);
};

function add(){

	let newLi = document.createElement("li"); 
	let lis = document.getElementsByTagName("li");
	let data = document.body.getElementsByClassName("data")[0].value;
	if (data == "" || data == undefined){
		return redField();
	}
	
	data = upper(data);
	newLi.textContent = data;
	
	for(let li of lis){ 
		if( newLi.textContent == li.textContent){
			return redField();
		}
	}

	newLi.onclick = function(){
		if(y == 0){
			newLi.style.textDecoration = "line-through";
			y++;
		}else{
			newLi.style.textDecoration = "none";
			y--;
		}
		// newLi.style.color = "rgba(0, 0, 0, 0.6)";
	}

      	// newLi.insertAdjacentHTML("afterbegin", '<button class="remove">X</button>');	
	// newLi.firstChild.onclick = () => newLi.remove();
	ul.appendChild(newLi);
};

// function fadein(){
// 	newLi.style.textDecoration = "line-through";
// 	(i == 1) ? newLi.style.color = "rgba(0, 0 , 0, 0.1)" : newLi.style.color = "rgba(255, 255, 255, 1)";	
// }

function darkmode(){
	if(i == 1){ 	// DARK
		body.backgroundColor = "#222222";
		body.color = "#fff";
		datastyle.backgroundColor = "rgba(170, 170, 170, 0.9)";
		datastyle.color = "#fff";
		datastyle.textShadow = "1px 1px #000";
		datastyle.borderBottom = "solid 1px #fff";
		dark.value = "Darkmode [OFF]";
		i--;
	}else{		// LIGHT
		body.backgroundColor = "#fff";
		body.color = "#000";	
		datastyle.backgroundColor = "rgba(230, 230, 230, 0.9)";
		datastyle.color = "#000";
		datastyle.textShadow = "1px 1px #fff";
		datastyle.borderBottom = "solid 1px #000";
		dark.value = "Darkmode [ON]";
		i++;
	}
};


///////////// EVENT ////////////
///////////////////////////////
// dataKey.onkeypress = function(event) {
// 	if(event.keyCode == 13){
// 		event.preventDefault();
// 		addButton.click();
// 	}
// 	return;
// }
