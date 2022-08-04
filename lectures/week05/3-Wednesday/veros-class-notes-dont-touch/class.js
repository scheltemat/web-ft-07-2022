

// const someFun = () => {
    
//     console.log(`I'm inside of the function`);

//     //long running algo
// }

// console.log('one');

// someFun()
// console.log('one');

// console.log('first');

// let a = 0;

// setTimeout(()=>{
//     a = 4 + 5
// }, 8000)


// a = a + 1

// console.log(a);

// console.log('third');

// setTimeout(()=>{

//     setTimeout(()=>{

//         setTimeout(()=>{
//             console.log('third print statment');
//         }, 1000)
//         console.log('second print statement');
//     }, 0)

//     console.log('first print statment');
// },0)

// console.log('synch code');


// const myFirstPromise = new Promise((resolve, reject)=>{

//     // we write our asynch code

//     if(false){
//         resolve('I have been resolved')
//     }
//     else{
//         reject(`I'm rejected`)
//     }
// })
// .then((response)=>{

//     console.log(response);
// })
// .catch((error)=>{

//     console.log(error);
// })

// setTimeout(()=>{
//     if (true){
//         resolve('success')
//     }
//     else{
//         reject('error')
//     }
// }, 1000)


// console.log('received api data');
// console.log('data was not retrieved');


// let promise = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         if (false){
//             resolve('success')
//         }
//         else{
//             reject('error')
//         }
//     }, 1000)
// })
// .then((result)=>{

//     console.log(`your data was ${result}`);
// })
// .catch((error)=>{

//     console.log(`your data did not arrive successfully  ${error}`);
// })

// let dataString = `
// {
//     "events": [
//          {"location" : "Houston, TX", "date" : "Sept 2", "map" : "img/map-hou.png"},
//          {"location" : "Houston, TX", "date" : "Sept 2", "map" : "img/map-hou.png"},
//          {"location" : "Houston, TX", "date" : "Sept 2", "map" : "img/map-hou.png"}
//     ]
//   }
// `

// let dataObj = JSON.parse(dataString)

// console.log(dataObj);


// let dataObj = {
//     events: [
//       { location: 'Houston, TX', date: 'Sept 2', map: 'img/map-hou.png' },
//       { location: 'Houston, TX', date: 'Sept 2', map: 'img/map-hou.png' },
//       { location: 'Houston, TX', date: 'Sept 2', map: 'img/map-hou.png' }
//     ]
// }

// let dataJSON = JSON.stringify(dataObj)

// console.log(dataJSON);

// https://api.openweathermap.org/data/2.5/weather?lat=95&lon=96&appid=e67df4bbb11a8a4f0a25d01f564b8b44

// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e67df4bbb11a8a4f0a25d01f564b8b44


// https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=e67df4bbb11a8a4f0a25d01f564b8b44