var ime;
ime = 'vlado'
// var ime = "vlado";
let a = 'a';
const b = 1

console.log(ime);
console.log(5);

/*padtochni tipovi:string, character, integer(cel broj), 
float ,double, boolean(true/false)*/

let Ime = 'ana'
console.log(Ime);
/* imeto na promenlivata ne smee da zapochni na broj*/ 
let _123ab = 'neshto'; 
console.log(_123ab);

// +, -, /, *, += , -=, *=, /=, %=, ++, --
//  >, <, <=, =>, == , ===, !, !=, ||(or)  logichki operatori
// so = edna vrednost
// so ==
// (5>6) ||(5>4)
// t||t ->t
// t||f ->t
// f||t ->t
// f||f ->f

// t&&t t
// t&&f f
// f&&t f
// f&&f F

let broj1 = 10;
// broj1 = broj1 + 10;
// broj1+=10;
console.log(broj1+10);  
console.log(++broj1);
console.log('5'==5);  /*sporeduva spored vrednost*/    
console.log('5'===5);  /*sporeduva spored podatochen tip*/ 
//'5'===5 ke bide falce zosto '5'e string a 5 number




let broj = 10;
console.log(broj%3); 
//za dobivanje na ostatok koga 10 go delime so 3

let n1 = "50";
let n2 = 50;
console.log(n1==n2 && n1===n2);
//ako prvata funkcija e tochna togash ja proveruva narednata
//ako prfata e greshna togash ne proveruva natamu zs rezultatot e falce
console.log(n1===n2 &  n1++); 
//se izvrshuvaat i ostanatite naredbi
console.log(n1);

let broj = 10;
console.log(broj++); //ke go ispecati brojot pa ke go zgolemi
console.log(++broj); //ke go zgolemi pa ke go izpechati

let a = "10";
console.log(++a); // vaka moze
let a = 10;
console.log(++a); //vaka ne moze ova vazi za ++ i --
//ako sobirame string so broj rezultatot e string so iskluchok na ++ ako stringot e broj
 let ime = 'vlado';
 let prezime = 'machkovski';
 let imeiprezime = ime+" "+ prezime ;

 console.log(imeiprezime+" "+27);
 alert('zdravo')
 alert(imeiprezime);


let ime = prompt("What is your name");
console.log(ime);

let godini = prompt('vnesi godini');
// godini = Number(godini);
godini = parseInt(godini);
console.log(godini);
console.log(parseInt(10.5));

let flag = true;
console.log(!flag);


let x = 3;
let y = 4;
console.log(x + y);