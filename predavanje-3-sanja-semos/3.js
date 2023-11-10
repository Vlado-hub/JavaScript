// while, do-while, for
// while(uslov){// naredbite se izvrsuvaat dodeka uslovot e tocen
// 	naredbi;
// }

// let i = 0;

// while(i<=10){
// 	console.log(i);
//  i++;
// }
//0,1..10;

// let i = 1;
// let zbir = 0;

// while(i<=10){
// 	zbir+=i;
// 	i++;
// }

// console.log(zbir);
// let i = 0;
// while(i<=10){
// 	if(i%2==0){
		// console.log(i)
	// }
// 		i++;
// }

let i = 0;
let zbir = 0;
let N = Number(prompt("vnesi broj"))
while(i<=N){
	if(i%2==1){
		zbir+=i;
	}
	i++;
}

console.log(zbir);