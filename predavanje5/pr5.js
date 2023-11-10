// let dolzinananiza = Number(prompt('vnesi dolzina na niza'));
// let niza = [];
// for(i=0;i<dolzinananiza;i++){
//   let broj =  Number(prompt('vnesi broj'));
//   // niza[i]=Number(prompt('vnesi broj'));//niza[i]=broj;
//   niza.push(broj);
// }
// console.log(niza);

// let zbir = 0;
// for (i=0;i<niza.length;i++){
//   if(niza[i]%2==0){
//     zbir+=niza[i];
//   } 
// }
// console.log(zbir);

///vesuvame broevi vo niza dodeka vnesime karakter

// let broj = prompt('vnesi broj');
// // console.log(isNaN(broj));
// let niza =[];

// // if(isNaN(broj)){
// //   console.log('vnesovte karakter');
// // }
// // else{
//   while(!isNaN(broj)){
//     niza.push(Number(broj));
//     broj = prompt('vnesi broj');
//   }
// // }
// console.log(niza);


// /// da se prikazat dvata najgolemi broevi od nizata
// var max1 = niza[0];
//   var max2 = niza[1];
//   // debugger;
// // if(max2>max1){
// //   let pomosna = max1;
// //   max1 = max2;
// //   max2 = pomosna;
// // }
// if(niza.length>2){  
//   for(let i = 1;i<niza.length;i++){    
//     if(niza[i]>[max1]){
//      max2 = max1;
//       max1 = niza[i];

//     }
//     else if(niza[i]>max2 && niza[i]<max1){
//       max2 = niza[i];
//     }
//   }
// }

// console.log(max1,max2);


// niza.sort();
// console.log(niza[niza.length-1],niza[niza.length-2]);






// for(i=0;i<2;i++){
//   for(j=0;j<10;j++){
//     console.log(i,j);
//   }
// }


// let fruits = [['banana','orange'],'apple','mango','kivi',['lemon','strawberry']];
// for(let i =0; i<fruits.length;i++){
//   if(Array.isArray(fruits[i])){///dali e prviot element vo nizata e niza
//     let niza2 = fruits[i];
//     for(j = 0;j<niza2.length;j++){
//       console.log(niza2[j]);
//     }
//   }
// }
