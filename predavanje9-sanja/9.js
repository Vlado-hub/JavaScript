// function pecati(){
// 	console.log("message");
// }

// function pecatiCatch(message){
// 	console.log("Ova e  poraka vo catch "+message);
// }


// let p = new Promise((resolve,reject)=>{

// 	let a = 10;
// 	if(a == 10){
// 		resolve();
// 	}
// 	else{
// 		reject("Failed");
// 	}
// });

// //vo then se praka funkcijata za resolve
// //vo catch se praka funkcijata za reject

// p.then(pecati).catch(pecatiCatch);



// function get(url){
// 	return new Promise((resolve,reject)=>{
// 		let req = new XMLHttpRequest();
// 		req.open("GET",url,false);
// 		req.send();

// 		req.addEventListener("load",()=>{
// 			if(req.status<400){
// 				resolve(req.responseText);
// 			}
// 			else{
// 				reject("error");
// 			}
// 		})

// 		req.addEventListener("error",()=>{
// 			reject(new Error("Network error"));
// 		})
// 	})
// }


// get("test.json").then((response)=>{
// 	console.log(JSON.parse(response));
// 	return "a";
// }).then((param)=>{
// 	console.log(para);
// }).catch((error)=>{
// 	console.log(error);
// })

// let p1 = new Promise((resolve,reject)=>{
// 	resolve("p1");
// });

// let p2 = new Promise((resolve)=>{
// 	resolve("p2");
// });

// let p3 = new Promise((resolve)=>{
// 	resolve("p3");
// })

// Promise.all([p1,p2,p3]).then((message)=>{console.log(message)});

// fetch("https://randomuser.me/api/?results=10")
// .then(response=>response.json())
// .then(json=>{
// 	// console.log(json);
// 	let users = json.results;
// 	console.log(users);

// 	let zbir = 0;
// 	for(user of users){
// 		zbir+=user.dob.age;
// 	}
// 	console.log(zbir/users.length);
// })


fetch("http://api.openweathermap.org/data/2.5/weather?q=Skopje&appid=6e544f43f93521aaf59ed9255598a323&units=metric")
.then(response=>response.json())
.then(json=>{
	console.log(json);
	console.log(Math.round(json.main.temp));
})

async function fetchWeather(){
	const result  = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Skopje&appid=&units=metric");
	const data = await result.json();
	console.log(data);
}

// fetchWeather();

/// async await e za da ne nastatne hell so promises
/// taa funkcija so vrakja  promises i se pise await