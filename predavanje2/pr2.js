// if(uslov){

// }
// let broj = 10;
// if(broj>=10){
//   console.log('brojot e pogolem od 10');
// }
// let broj1 = Number(prompt("Vnesi broj")); //so ovaa naredba pravime string da e vo number
// if((broj1%2)==0){
//   console.log('Brojot sto go vnesovte e paren');
// }
// let ime = "Semos";
// if (ime == 'Semos'){
//   console.log('Imeto e' +ime);
// }

// if(ime != "semos"){
//   console.log('imeto ne e semos');
// }

// console.log(ime!="semos");

// if(ime == 'semos'){
//   console.log('imeto e ednakvo na semos');
// }

// else {
//   console.log('imeto ne e ednakvo na semos');
// }

// if(ime == "semos"){
//   console.log('imeto e ednakvo na semos');
// }
// else if(ime == 'Semos'){
//   console.log('Imeto e Semos');
// }


// let n1 = Number(prompt("Vnesi broj"));
// if(n1 >= 18){
//   console.log('Smeete da polagate za vozachka');
// }
// else {
//   console.log("ne smeete da polagate za vozachka");
// }

// let n1 = 10;
// let n2 = 10;
// if(n1 > n2){
//   console.log('n1 e pogolem');
// }
// else if(n1==n2){
// console.log('broevite se isti');
// }
// else {
//   console.log('n2 e pogolem');
// }

// let subject = "Javascript";
// let book = "javascript";
// if(subject == 'Php'){
//   console.log('predmetot e PHP');
// }
// else if (subject == "Java" && book == "Java"){
//   console.log("knigata za java e dostapna");
// }
// else if(subject == "Javascript" && (book == "Javascript" || book == "javascript")){
//   console.log('knigata za java scrip e dostapna');
// let subject = 100;
//  console.log(subject);
 
// }
// else {
//   console.log('knigata ne e dostapna');
// }
// console.log(subject);
// // vo ovaj sluchaj ke iskopira Javascriprt! 
// // a ako na mestoto na let ima var ke kopira celo vreme 100;



// let ocena = 3;

// switch(ocena){
//   case 1:
//     console.log('dobivte 1');
//     break;
//     case 2:
//       console.log('dobivte 2');
//       break;
//       default: console.log('dobivte 3');
// }


// let color = 'purple';
// let fruits = new Array('apple', "orange","banana", "strowberry");
// let colors = ["red", 'green', 'blue', color];
// let empty = [];
// console.log(fruits);

// console.log(colors[2]);//da tispechati koj broj od nizata
// console.log(colors[3]);

// console.dir(colors);//site svojstva
// console.log(colors.length);//ja pechatime dolzhinata na listata


// colors.push('white');//dodava na kraj na listata
// console.log(colors);
// let lastElement = colors.pop();//go brishime posledniot element od nizata i go smestuvame vo lastelement
// console.log(colors);
// let fistselements = colors.shift();//go brishe prviot element od nizata
// console.log(colors);
// colors.unshift('black');//dodava na pochetok na nizata
// console.log(colors);
// console.log(color.slice(1,3));//gi pechati od eden do 3 bez 3
// console.log(colors);
// console.log(colors.splice(1,2));// gi brise 1 i 2 elementi
// //ako mu dades colors.splice(2,3)gi brise 2 3 i 4

// colors.splice(1,0,'red','green','aqua');//dodava elementi pomegju 1 i 2 pa 2 stanuva posleden element

// console.log(colors);
// console.log(colors.indexOf('red'));//prviot index na koj se naogja elementot
// console.log(colors.includes('nesto'));//proveruva dali postoi elementot 'nesto'
// console.log(colors.sort());
// console.log(colors.toString());//pechati niza so zapirki
// console.log(colors.join());//ja pechati niza so prostor megju elementi
// console.log(colors.reverse());

// let novaNiza = colors.concat(fruits);
// console.log(novaNiza);


// let niza1 = colors;
// niza1.push('test');
// console.log(colors);//nizi ne se kopiraat edna vo druga



// n = 1000*3000;
// start = + new Date();
// a = Array(n);
// b = Array(n);
// i = a.lenght;
// while(i--) b[i] = a[i];
// console.log(new Date() - start);

// n = 1000*1000;
// start = + new Date();
// a = Array(n); 
// b = a.slice();
// console.log(new Date() - start);

// Array.prototype.clone = function(){
//   return this.map(e => Array.isArray(e) ? e.clone() :e);
// }

// var arr = [1,2,3,4, [1,2, [1,2,3,],4,5],6],
// brr = arr.clone();
// brr [4][2][1] = 'two';
// console.log(JSON.stringify(arr));
// console.log(JSON.stringify(brr));



let niza = ['vlado','kikac','laki','filip','ilcho','kolo'];
console.log(niza);

niza.splice(3,1,'pesho')
console.log(niza);