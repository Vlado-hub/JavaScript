// let person = {
//   ime: 'vlado',
//   prezime: 'machkovski',
//   godini: 27,
// }
// console.log(person);
// console.log(person['ime']);
// console.log(Object.keys(person));/// gi prikazuva klucevite
// console.log(Object.values(person));// site elementi gi pechati

// person.email = 'vlado@gmail';// na ovaj nachin se dodava novo svojstvo
// console.log(person);

// delete person.email;
// console.log(person);


// console.log(person['godini']);

let kola = {motor:['2.2'],proizvoditel:'mercedes',godina:2020,model:'s500',boja:'crna'};
// let kluchevi = Object.keys(kola);

// for(i=0;i<kluchevi.length;i++){
//   let kluc = kluchevi[i];
//   console.log(kluc+':'+kola[kluc]);
//   console.log(kluc);
 
// }


// let film = {
//   NameofFilm:'matrix',
//   type:'Sci-fi/Action',
//   actors: ['Keanu Reeves','Laurence Fishburne','Carrie-Anne Moss'],
// }
// film.actors.push('vlado');
// console.log(film);



// let niza = [10,12,4,7,9,3];


// for(element of niza){///za pechatenje na niza
//   console.log(element);
// }


// for(kluc in kola){/// za pechatenje na objekt
//   console.log(kluc+'='+kola[kluc]);
// }


//da napravime niza od objekti koi ke sodrzi ime i poeni
//niza testovi 
//kolku e prosecha otsenka na testot


// let students = [{ime:'vlado',poeni:5},{ime:'mile',poeni:2}];
// let zbir = 0;
// for(test of students){
//   zbir+=test.poeni;
// }
// console.log(zbir/students.length);

// let student0 = {
//   firstname: 'vlado',
//   lastname: 'machkovski',
//   age: 27
// }

// let student1 = {
//   fistname: 'kikac',
//   lastname: 'murgovski',
//   age: 26
// }

// let sutdent2 = {
//   fistname: 'laki',
//   lastname: 'tranjov',
//   age:28
// }



// studenti.push(student0);
// console.log(studenti);


// let students = [];
// function student (first,last,age){
//     this.fistname = first;
//     this.lastname = last;
//     this.age = age;
//     this.greeting = function(){
//       return 'zdravo jas sum ' + this.fistname + ' i imam ' + this.age + ' godini ';
      
//     }
// }

// students.push(new student('vlado','machkovski',27) );
// students.push(new student('laki','trajkov',28));
// students.push(new student('kikac','murgoski',26));

// for(var index = 0; index < students.length; index++){
//   var student = students[index];
//   console.log(student.greeting());
// }



// var bankBalance = 500;
// function makeTransaction (priceOfSale){
// if(priceOfSale <= bankBalance){
//   bankBalance -= priceOfSale;
//   console.log('Purchase Succssful');
// }
// else {
//   console.log('Insafficient Funds');
// }
// }

// makeTransaction(79);
// makeTransaction(2.32);
// makeTransaction(10.45);

// console.log(bankBalance);
// makeTransaction(420);
// console.log(bankBalance);

// var transaction = function(priceOfSale)




