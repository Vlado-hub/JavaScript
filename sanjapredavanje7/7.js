// function prvaFunkcija(){
// 	console.log("Hello World");
// 	console.log("Zdravo");
// 	console.log("Hello");
// }

// prvaFunkcija();

// function greeting(name, age){
// 	console.log("Hello, my name is"+name+" and I am "+age);
// }

// greeting("Alen",19);
// greeting("Sandra", 23);
// greeting("Sanja",27);

// function greetingEnterValues(){
// 	let name = prompt("Vnesi ime");
// 	let age = prompt("Vnesi godini");
// 	console.log("Hello, my name is"+name+" and I am "+age);
// }

// greetingEnterValues();
// greetingEnterValues();

// function zbir(x,y){
// 	return x+y;
// }
// let rezultat = zbir(5,3);
// console.log(rezultat);

// //anonimni fukncii

// let f = function(a,b){
// 	return a*b;
// }

// console.log(f(2,3));

// function faktoriel(broj){
// 	if(broj<0) return "greshka";
// 	else if(broj == 0 || broj==1){
// 		return 1;
// 	}
// 	else{
// 		return broj*faktoriel(broj-1);//5*faktoriel(4)->5*4*faktoriel(3)->5*4*3*faktoriel(2)->5*4*3*2*1;
// 	}
// }

// console.log(faktoriel(6));

// for(i = 1; i<=6;i++){
// 	console.log(faktoriel(i));
// }


// let f = ()=>{
// 	console.log("zdravo");
// 	console.log("Hello");
// };//prv nachin kade sto se definiraat zagradite, bez parametar
// f();

// let zbirBroj10 = a=>a+10;//2 nacin, eden parametar i edna naredba
// console.log(zbirBroj10(10));

// let zbir = (a,b)=>console.log(a+b);//3 nacin poveke od 1 parametar, edna naredba
// zbir(5,3);

// let proizvod = (a,b)=>{
// 	console.log("proizvodod na dvata broja e");
// 	return a*b;
// }

// console.log(proizvod(2,3));


// function greeting(){
// 	console.log("hi");
// }

// function bye(){
// 	console.log("Bye");
// }

// function test(number,callback1,callback2){
// 	if(number%2==0){
// 		callback1();
// 	}else{
// 		callback2();
// 	}
// }
// test(3,greeting,bye);

// let interval = setInterval(()=>{
// 	alert("interval");
// },2000)


// let a = ()=>{
// 	clearInterval(interval);
// 	alert("Hi")
// }
// //po istekot na vremeto se povikuva funkcijata
// setTimeout(a,5000);

// let niza = [5,4,1,2,1,5];

// niza.forEach((e, i)=>{
// 	console.log("Na "+i+" pozicija se naogja "+e);
// })

// console.log(niza);
// let niza2 = niza.map(element=>element*2);
// console.log(niza2);
// // let niza2= [];
// // for(i = 0;i<niza.length;i++){
// // 	niza2[i]=niza[i]*2;
// // 	// niza2.push(niza[i]*2);
// // }

// let filteredArray = niza.filter(x=>x%2==0);

// console.log(filteredArray);

// let sum = niza.reduce((acc,curr)=>acc*curr);
// console.log(sum);

// let finalResult = niza.map(x=>x*2).filter(y=>y>5).reduce((acc,curr)=>{return acc+curr});
// console.log(finalResult);





