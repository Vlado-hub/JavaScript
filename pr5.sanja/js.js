//prva zadaca
// let i = 1;
// let proizvod = 1;
// while(i<=10){
// 	if(i%2==0){
// 		proizvod*=i;
// 	}
// 	i++;
// }
// console.log(proizvod);
// let broj = Number(prompt("vnesi broj"));
// let broevi = ["zero","one","two","three","four","five","six","seven","eight","nine"];
// // let edinici = broj%10;
// // // let desetki = parseInt(broj/10);
// // let desetki = Math.floor(broj/10);
// // console.log(edinici+" "+desetki);
// //89
// let brojCopy = broj;
// let brojString = ""
// while(brojCopy>0){
// 	let edinici = brojCopy%10;
// 	brojString=broevi[edinici]+" "+brojString;//devet ;osum devet 
// 	brojCopy = parseInt(brojCopy/10);
// }
​
// console.log(broj+" = "+brojString);
​
//treta zadaca x^n y = x*x*x; 1*2*2*2 = 8;
​
// let x = Number(prompt("Vnesi x"));
// let n = Number(prompt("vnesi stepen"));
// let y = 1;
​
// let i = 1;//brojac za toa kolku pati sme go pomnozile x sam so sebe
// while(i<=n){
// 	y*=x;
// 	i++;
// }
​
// console.log(y);
​
// 5! = 1*2*3*4*5;
​
// let broj = Number(prompt("vnesi broj"));
// let rezultat = 1;
// let i = 1;
// while(i<=broj){
// 	rezultat*=i;
// 	i++;
// }
// console.log(rezultat);
​
// while(broj>0){
// 	rezultat*=broj;
// 	broj--;
// }
​
​
//koga go koristite samiot brojac;
//koga ne go koristite brojacot za da napravite operacija
​
​
// do{
// 	naredbi;
// }
// while(uslov);
​
​
// let i = 1;
// let zbir = 0;
​
// do{
// 	zbir+=i;
// 	i++;
// }
// while(i>10);
​
// console.log(zbir);
​
// while(i>10){
// 	zbir+=i;
// }
// console.log(zbir);
​
// for(inicijalizacija(let i = 0);uslov(i<10);inkerement/dekrement(i++,i--,i+=10)){
// 	naredbi;
// }
​
​
// for(let i = 0;i<=10;i++){
// 	console.log(i);
// }
​
// let zbir = 0;
// let zbir = 0;
​
// for(i = 1, zbir = 0; i<=10; i++){
// 	zbir+=i;
// }
​
// console.log(zbir);
​
// let x = 2;
// let n = 3;
// let y = 1;
​
// for(i = 0; i<n;i++){
// 	y*=x;
// }
​
// console.log(y);
​
// let niza = [1,2,3,5,10,20];
// ​
// for(i = 0; i<niza.length;i++){
// 	console.log(niza[i]);
// }






	// let kolkuElementiTrebaDaImaNizata = Number(prompt("Vnesi dolzina na niza"));//broj pr.5
// let niza = [];
​
// for(i = 0; i<dolzinaNaNiza; i++){//0,1,2,3,4,5
// 	let broj = Number(prompt("vnesi broj"));
// 	// niza[i] = broj;
// 	niza.push(broj);
// }
​
// console.log(niza);
​
// let zbir = 0;
// for(i = 0; i<niza.length;i++){
// 	if(niza[i]%2==1){
// 		zbir+=niza[i];
// 	}
// }
​
// console.log(zbir);
​
//vnesuvajte brevi vo nizata se dodeka ne vnesete karater koj ne e broj
​
// let broj = prompt('Vnesi broj');//10
// console.log(isNaN(broj));
// let niza = [];//10,1
​
// if(isNaN(broj)){
// 	console.log("Vnesovte karater");
// }else{
// 	while(!isNaN(broj)){
// 		niza.push(Number(broj));
// 		broj = prompt("Vnesi broj");//1,a
// 	}
// }
//5 3 2 10 6 4
// m1 = 5, m2 = 3; 
// console.log(niza);
// da se prikazat dvata najgolemi broevi od nizata
// niza = [5,2,3,10]
// var max1 = niza[0];
// var max2 = niza[1];
// if(max2>max1){
// 	let pomosna = max1;
// 	max1 = max2;
// 	max2 = pomosna;
// }
​
// if(niza.length>2){
// 	for(let i = 2;i<niza.length;i++){
// 		if(niza[i]>max1){
// 			max2 = max1;
// 			max1 = niza[i];
// 		}
// 		else if(niza[i]>max2 && niza[i]<max1){
// 			max2 = niza[i];
// 		}
// 	}
// 	console.log(max1, max2);
// }
​
// console.log(niza.sort());
// console.log(niza[niza.length-1],niza[niza.length-2]);
​
// for(i = 0; i<10;i++){
// 	for(j = 0; j<10;j++){
// 		console.log(i,j);	
// 	}
// }
​
let fruits = [["Banana","Orange"],"Apple","Mango","Kiwi",["Lemon","Strawberry"]];
​
for(let i = 0;i<fruits.length;i++){
	// console.log(fruits[i]);
	if(Array.isArray(fruits[i])){
		let niza2 = fruits[i];
		for(j = 0; j<niza2.length;j++){
			console.log(niza2[j]);
		}
	}
}