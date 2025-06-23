// const date = new Date();
// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth());

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback(){
//     console.log("Some time has passed.");
// }

// // setTimeout(callback, 3000);

// setTimeoutPromisified(3000).then(callback);

// setTimeoutPromisified(3000).then(function () {
//     console.log("5 second passed");
// });

// function waitFor3s(resolve){
//     setTimeout(resolve, 3000);
// }

// function main(){
//     console.log("main is called");
// }
// waitFor3s(main);

// callback hell
// setTimeout(function () {
//     console.log("Hi");
//     setTimeout(function () {
//         console.log("hlo");
//         setTimeout(function () {
//             console.log("hello");
//         }, 5000);
//     }, 3000);
// }, 1000);

// function random(resolve) {
//     setTimeout(resolve, 3000);
// }
// function callback(){
//     console.log("promise successful");
// }

// let p = new Promise(random);
// // console.log(p);
// p.then(callback);

// promisified file operatio

// const fs = require("fs");
// function cleanFile(filePath, cb){
//     return new Promise(function (resolve){
//         fs.readFile(filePath, "utf-8", function(err, data){
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             data = data.trim();
//             fs.writeFile(filePath, data, function(){
//                 resolve();
//             });
//         });
//     });
// }

// async function main() {
//   await cleanFile("./a.txt");
//   console.log("Done cleaning file");
// }

// main();

// const fs = require("fs");

// function readTheFile(doItHere){
//     fs.readFile("./04_promises/a.txt", "utf-8", function (err, data) {
//         doItHere(data);
//     })
// }

// function readFile(){
//     return new Promise(readTheFile);
// }

// const p = readFile();

// function callback(contents) {
//     console.log(contents);
// }

// p.then(callback)

