// console.dir(document.getElementById("title"));
// console.log([0]);
// let blockElements = document.getElementsByClassName('block')
// let firstBlockElement = blockElements[0];
// firstBlockElement.innerText = "hello";
// console.dir(firstBlockElement);

// let links = document.getElementsByTagName("a");
// let link = links[0];
// link.attributes[0].value="https://www.google.com";
// console.dir(link.attributes[0]);

// document.getElementById("title").setAttribute("class","some_class");
// link.setAttribute("href","https://www.yahoo.com");

// document.getElementsByClassName("block")[0].classList.add("some_class");
// document.getElementById("title").id = "sanja";


// console.dir(document.querySelector("#sanja"));
// console.log(document.querySelectorAll(".block"));

// document.getElementById("button").addEventListener("click",function(){
// 	document.getElementById("result").innerHTML = new Date();
// })

// let btn = document.getElementById("button");
// let divv = document.getElementById("result");

// btn.addEventListener('click',function(){
// 	divv.innerHTML = Date();
// })

// function showdate (){
// 	divv.innerHTML = Date();
// }

// function lighton(){
// 	document.getElementById("light").setAttribute
// 	("src","https://www.w3schools.com/js/pic_bulbon.gif")
// }
// function lightoff(){
// 	document.getElementById("light").setAttribute
// 	("src","https://www.w3schools.com/js/pic_bulboff.gif")
// }

// let btn1 = document.getElementById("light_on");
// let btn2 = document.getElementById('light_off');
// let light = document.getElementById('light');
// btn1.addEventListener('click',function(){
// 			light.setAttribute('src',"https://www.w3schools.com/js/pic_bulbon.gif")
// })
// btn2.addEventListener('click',function(){
// 	light.setAttribute('src',"https://www.w3schools.com/js/pic_bulboff.gif")
// })


// let div = document.createElement("div");
// div.id = "firstDiv";
// div.innerHTML=`<p>Ova e paragraf</p>
// <h1>Naslov</h1>`;

// div.style.color = "white";
// div.style.height = "100px";
// div.style.width = "100px";
// div.style.background = "black";

// document.body.appendChild(div);



// let ucenici =[
// 	{ime:"Emilija",prezime:"Stamenkovska",email:"email1"},
// 	{ime:"Vladimir",prezime:"Machkovski",email:"vlado2"},
// 	{ime:"Metodija",prezime:"Mitovski",email:"mete3"},
//   ]

// function createTable(niza,naslov ){
// 	let tabela = document.createElement("table");
// 	let caption = document.createElement("caption");
// 	caption.innerText = naslov;
// 	tabela.appendChild(caption);
// 	let tr = document.createElement("tr");

// 	for(key in ucenici[0]){
// 		let th = document.createElement("th");
// 		th.innerText = key;
// 		tr.appendChild(th);
//   	}
   
// 	tabela.appendChild(tr);
// 	for(element of ucenici){
// 		let tr = document.createElement("tr");
// 		for(kluc in element){
// 			let td = document.createElement("td");
// 			td.innerText = element[kluc];
// 			tr.appendChild(td);		
//     }

// 		tabela.appendChild(tr);	
//   }

// 	tabela.setAttribute("border","1px");
// 	document.body.appendChild(tabela);}

// createTable(ucenici,"ucenici");