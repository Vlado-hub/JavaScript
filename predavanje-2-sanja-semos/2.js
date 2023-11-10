// if(uslov){

// }

// let broj = 10;
// if(broj>=10){
// 	console.log("Brojot e pogolem od 10");
// }

// let broj1 = Number(prompt("Vnesi broj"));

// if((broj1%2)==0){
// 	console.log("Brojot shto go vnesovte e paren");
// }

// let ime = "Semos";
// if(ime == "semos"){
// 	console.log("imeto e "+ime);
// }

// if(ime != "semos"){
// 	console.log("imeto ne e semos");
// }

// console.log(ime!="semos");
// console.log(5!=="5");

// if(ime == "semos"){
// 	console.log("imeto e ednakvo na semos");
// }
// else{
// 	console.log("imeto ne e ednakvo na semos");
// }

// if(ime == "semos"){
// 	console.log("imeto e ednakvo na semos");
// }
// else if(ime =="Semos"){
// 	console.log("imeto e Semos");
// }
// else{
// 	console.log("imeto ne e nitu semos nitu Semos");
// }
// let subject = "Javascript";
// let book = "javascript";


// if(subject == "Php"){
// 	console.log("predmetot e PHP");
// }
// else if(subject == "Java" && book =="Java"){
// 	console.log("Knigata za java e dostapna");
// }
// else if(subject == "Javascript" && (book =="Javascript" || book =="javascript")){
// 	console.log("Knigata za javascript e dostapna");
// 	let subject = 100;	
// 	console.log(subject);
// }
// else{
// 	console.log("Knigata ne e dostapna");
// }
// console.log(subject);


let ocena = 3;

switch(ocena){
	case 1:
		console.log("dobivte 1");
		break;
	case 2:
	console.log("dobivte 2");
	break;
	default: console.log("dobivte 3");
}



let color = "purple";
let fruits = new Array("apple", "orange","banana","strawberry");//ne sekoristi
let colors = ["red", "green", "blue",color];
let empty = [];

let idx = 3;
console.log(fruits);
console.log(colors[2]);
console.log(colors[idx]);

// console.dir(colors);
// console.log(colors.length);//ja pecatime dolzinata na nizata

// colors.push("white");//dodava na kraj na listata
// console.log(colors);
// let lastElement = colors.pop();//go brisheme posledniot element od nizata i go smestuvame vo lastElement
// console.log(colors);
// let firstElement = colors.shift();//go brishe prviot element od nizata
// console.log(colors);
// colors.unshift("black");//dodava na pochetok na nizata
// console.log(colors);