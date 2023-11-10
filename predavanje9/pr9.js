function pecati(message){
  console.log(message);
}
function pecatiCatch(message){
  console.log('ova e proverka vo catch' + message);
}
let p = new Promise((resolve,reject)=>{
let a = 10;
if (a==10){
  resolve('success');
}
else{
  reject('failed');
}
});
// /// vo then se praka funkcijata za resolve
// /// dodeka vo catch se praka funkcijata za reject
p.then(pecati).catch(pecatiCatch);


///xmlhttpsrequest
// let req = new XMLHttpRequest();
// req.open('GET','file.txt',false);
// req.send();

// function get(url){
//   return new Promise((resolve,reject)=>{
//     let req = new XMLHttpRequest();
//     req.open('GET','file.txt',false);
//     req.send();
//     req.addEventListener('load',()=>{
//       if(req.status<400){
//         resolve(req.responseText);
//       }
//       else{
//         reject('error');
//       }
//     })
//     req.addEventListener('error',()=>{
//       reject(new Error('Network error'));
//     })
//   })
// }

// get('test.json').then((response)=>{
//   console.log(JSON.parse(response));
//   return 'a';
// }).then((param)=>{
//   console.log(param);
// }).catch((error)=>{
//   console.log(error);
// })

// let p1 = new Promise((resolve,reject)=>{
//   resolve('p1');
// })

// let p2 = new Promise((resolve)=>{
//   resolve('p2')
// })
// let p3 = new Promise((resolve)=>{
//   resolve('p3')
// })

// Promise.all([p1,p2,p3]).then((message)=>{console.log(message)});


//za zemanje na podatoci od API
fetch('https://randomuser.me/api/?results=10')
.then(response=>response.json())
.then(json=>{
  // console.log(json);
  let users = json.results;
  console.log(users);
  for (user of users){
    console.log(user.name);
  }
})





// async  function fetchWeather(){
//   const result = await fetch ('https://api')
//   const data = await result.json();
// }
// fetchWeather()


