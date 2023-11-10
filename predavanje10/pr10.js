//sto se klasi - zbir na kluch vrednost zbirovi
//objektite se istanci od klasi,
//primer za ova se zgradi
//dolzina na strani na triagolnik
// so prototip funkcii array string abjects map
// this - se naogjate vo istiot objekt 


// function Rabbit(type,color){
//      this.type = type;
//      this.color = color;
// }
// Rabbit.prototype.speak=function(phrase){
//   console.log('the '+ this.type+'rabbit who is ' +this.color+ ' says ' +phrase);
// }
// let zajak = new Rabbit('polar','white');//se kreira istanca
// console.log(zajak);

// zajak.speak('zdravo');

// // let zajak = {kluc:vrednost}

// function Person (firstName, LastName, age, profession){
//         this.ime = firstName;
//         this.prezime = LastName;
//         this.godini = age;
//         this.profesija = profession;
// }

// Person.prototype.speak = function(phrase){
//   console.log(this.ime+ ':' + phrase);
// }
// let covek = new Person('vlado','machkovski',27,"student");
// covek.speak('chao');
// console.log(covek.ime);

///// klasi

// class Avtobus {
//   constructor(marka,boja,registracija,godina){
//     this.marka = marka;
//     this.boja = boja;
//     this.registracija = registracija;
//     this.godina = godina;
//   }
//   pecati(){
//     console.log('Avtobusot so ' +this.marka+ ' so '+this.boja+' boj ima tablica' + this.registracija);
//   }
// }

// let jsp = new Avtobus('A','crvena',123,2000)
// jsp.pecati();

///// ova e celosno
// class Location{
//   constructor(city){
//     this.city = city;
//   }
//   temperature(){
    
// fetch("http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&appid=6e544f43f93521aaf59ed9255598a323&units=metric")
// .then(response=>response.json())
// .then(json=>{
// 	// console.log(json);
// 	console.log(Math.round(json.main.temp));
// })

//   }
// }

// let Skopje = new Location('Skopje');
// Skopje.temperature();


// class Person {
//   constructor(ime,prezime,profesija){
//     this.ime= ime;
//     this.prezime = prezime;
//     this.profesij = profesija;
//     this.nagradi = [];
//     this.location = new Location();
//   }
//   pecati(){
//     console.log(this.ime+' '+this.prezime+' '+this.profesija);
//   }
// }

// let users = [];
// let brojNakorisnici = 1;

// for(let i =0;i<brojNakorisnici;i++){
//   let ime = prompt('vnesi ime');
//   let prezime = prompt('vnesi prezime');
//   let profesija = prompt('vnesi profesija');
//   let grad = prompt('vnesi grad');
//   let nagrada = prompt('vnesi nagrada');

//   let korisnik = new Person(ime,prezime,profesija);
//   korisnik.location=new Location(grad);
//   korisnik.nagradi.push(nagrada);
//   users.push(korisnik);
// }

// for (user of users){
//   user.pecati();
//   user.location.temperature();
// }
//////////////////////////////////////////////////////////////////////////////////////////

class EmpLoyee {
  constructor(name,age,salary,task){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.tasks = tasks;
  }
  work(){
    let task = this.tasks.shift();
    console.log(this.name+"works on "+this.task);
  }
  callectSalary(){
    console.log("the salary is "+this.salary);
  }
}
class Senior extends EmpLoyee{
  constructor(name,age,salary,tasks,projects){
    super(name,age,salary,tasks);
    this.projects = projects;
  }
  getProjects(){
    return this.projects;
  }
}

let senior = new Senior ('sanja',27,100);
senior.collectSalary();
senior.projects = [];
senior.projects.push('nekoj task');
console.log(senior.getProjects());