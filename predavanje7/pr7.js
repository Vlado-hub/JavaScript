// function prvafunkcija (x,y){
//   console.log('Hello world');
  
// }
// prvafunkcija(5,2);


// function greeting(name,age){
//   console.log('hello , my name is' + name + 'and i am ' + age);
// }

// greeting('alen',19);
// greeting('vlado',27)

// function greetingEnterValues(){
//   let name = Number(prompt('vnesi ime'));
//   let age = Number(prompt('vnesi godini'));
//   console.log('hello , my name is' + name +  'and i am  ' + age);
// }

// greetingEnterValues();
// greetingEnterValues();


// function zbir(x,y){
//   return x + y;
// }

// console.log(zbir(4,5));


// function proizvod (a,b){
//   return a * b}
  ///anonimni

//   let f = function(a,b){
//     return a *b;
//   }

//   console.log(f);

//   // let x = Number(prompt('vrednost za x'));
//   // let n = Number(prompt('vrednost za n'));



/// rekurzii
// function faktoriel(broj){
//  if(broj<0)return 'greska';
//   else if(broj == 0 || broj ==1){
//     return 1;
//   }
//   else{
//     return broj * faktoriel(broj-1);///5*faktoriel(4)->5*4*faktoriel(3)
//   }
// }
// console.log(faktoriel(4));

// for(i=0;i<=6;i++){
//   console.log(faktoriel(i));
// }

///hetero funkcii
// prv nachin kade sto se definiraat zagradite ,bez parametar
// let f = ()=>{
//   console.log('zdravo');
//   console.log(5*5);
// }
// f();
// // vtor nachin eden parametar i edna naredba
// let zbirbroj10 = a=>a+10;
// console.log(zbirbroj10(10));
// // tret nachin poveke od 1 parametar i edna naredba
// let zbir = (a,b) =>a+b;
// console.log(zbir(5,3));

// let proizvod = (a,b)=>{
//   console.log('proizvodot na dvata broja e');
//   return a*b;
// }
// console.log(proizvod(3,2));







// console.log(y);

// function stepen (x,n){ 
// let counter = 1;
// let y = 1;
//   while(counter <= n){
//     y *= x;
//     counter++;
//   }
//   return y
// }
// console.log(stepen(5,4));



///callback funkcii


// function greeting(){
//   console.log('hi');
// }

// function bye(){
//   console.log('bye');
// }

// function test(number,a,b){
// if(number%2 ==0){
//   a();
// }else {
//   b();
// }
// }
// test(3,greeting,bye);


// za istekot na vremeto se povikuva funkcijata
// let a = ()=>{
//   alert ('hi')
//   // clearInterval(interval);
// };
// setTimeout(a,5000);

// setTimeout(()=>{
//   alert ('aa')
// },3000);

// let niza = [5,4,1,2,1];

// niza.forEach((e,i)=>{
// console.log('na '+i+'pozicija se naogja ' +e);
// })


// let niza2 = niza.map(element=>element*2);
// console.log(niza);
// console.log(niza2);

// let filteredArray = niza.filter(x=>x%2==0);
// console.log(filteredArray );

// let sum = niza.reduce((a,b)=>a+b);
// console.log(sum);



// let finalArray = niza.map(x=>x+2).filter(y=>y>5).reduce((acc,curr)=>acc+curr);
// console.log(finalArray);


