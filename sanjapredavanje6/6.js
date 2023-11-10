// 3 4 7 9 10 12    //3 4 7 9 10 12
// i = 0; j=(1,2,3,4,5);
// i=1; j =(2,3,4,5);
// i = 2;j = (3,4,5);
// i = 3; j(4,5);
// i = 4; j(5)
// let niza = [10,12,4,7,9,3];

// for(i = 0;i<niza.length;i++){
// 	for(j = i+1;j<niza.length;j++){
// 			if(niza[i]>niza[j]){
// 				let pomosna = niza[i];
// 				niza[i] = niza[j];
// 				niza[j] = pomosna;
// 			}
// 	}
// }

// console.log(niza)

// let person = {ime:"Sanja",prezime:"Tashkovska",godini:27};
// console.log(person.ime);
// console.log(person["ime"]);
// console.log(Object.keys(person));//niza od klucevi
// console.log(Object.values(person));//niza od vrednosti

// person.email = "Sanja@semos";//na ovoj nacin se dodava novo svojstvo
// console.log(person);
// delete person.email;//go brishe svojstvoto (key-value parot)

// console.log(person);

// let kola = {motor:"2.2",proizvoditel:"mercedes",godina:2020,model:"S500",boja:"crna"};
//kluc:vredonst

// let kluchevi = Object.keys(kola);
// console.log(kluchevi.length);

// for(i=0;i<kluchevi.length;i++){
// 	let kluc = kluchevi[i];
// 	console.log(kluc+":"+kola[kluc]);
// }

// kola.patnici = ["p1","p2"];

// let iminjaPatnici = kola.patnici;
// iminjaPatnici.push("p3");
// //Ime, zanr, akteri

// console.log(kola);

// //for za nizi niza[i]
// let niza = [10,12,4,7,9,3];
// for(elementi of niza){
// 	console.log(elementi);
// }

// //for za objekti
// let kola = {motor:"2.2",proizvoditel:"mercedes",godina:2020,model:"S500",boja:"crna"};
// for(kluc in kola){
// 	console.log(kluc+"="+kola[kluc]);
// }

//eden objekt treba da ima ime i poeni
//niza testovi