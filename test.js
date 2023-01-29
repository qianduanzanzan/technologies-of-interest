// console.log(eval(`
//     function aaa(val){
//         console.log(val)
//     }
// `))

const console = require("console")

// aaa(123)
// try{
//     eval(`
//         console.log(a)
//     `)
// }catch(e){
//     console.log(e)
// }

// console.log(2)

// var a = 123

// const c = {
//     a: 333
// }

// window.a = 555

// b()
// console.log(b)

// const a = {
//     a:1,
//     b:2,
//     c:3
// }

// const b = new Function('a',`with(a){console.log(a)}`)
// b(a)
// const a = new Function('console.log(arguments)')

// a(123)

// async function async1() {
//     console.log('async1 start',2);
//     await async2();
//     console.log('async1 end',4);
// }
// async function async2() {
//     console.log('async2',3);
// }
// console.log('script start',1);
// setTimeout(function() {
//     console.log('setTimeout',7);
// }, 0)
// async1();
// new Promise(function(resolve) {
//     console.log('promise1',5);
//     resolve();
// }).then(function() {
//     console.log('promise2',8);
// });
// console.log('script end',6);


// let b = 10;
// (function b(){
//     let b = 20;
//     console.log(b); 
// })();

// var a = {
//     a: 1,
//     toString(){
//         return this.a++
//     }
// };
// if(a == 1 && a == 2 && a == 3){
//  	console.log(1);
// }

// var a = 10;
// (function () {
//     console.log(a)
//     a = 5
//     console.log(window.a)
//     var a = 20;
//     console.log(a)
// })()

// const sleep1 = (time) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, time);
//     })
// }

// async function sleep(time){
//     await sleep1(time)
// }

// (async function(){
//     console.log(1)
//     await sleep(1000)
//     console.log(2)
// })()

// console.log([3, 15, 8, 29, 102, 22].sort())

// var obj = {
//     '2': 3,
//     '3': 4,
//     'length': 2,
//     'splice': Array.prototype.splice,
//     'push': Array.prototype.push
// }
// obj.push(1)
// obj.push(2)
// console.log(obj)
// var a = {n: 1};
// var b = a;
// a.x = a = {n: 2};

// console.log(a.x) 	
// console.log(b.x)
// const a = {1:222, 2:123, 5:888}
// const arr = []

// for (let index = 1; index <= 12; index++) {
//     arr.push(a[index] || null)
// }

// console.log(arr)

// function changeObjProperty(o) {
//     o.siteUrl = "http://www.baidu.com"
//     o = new Object()
//     o.siteUrl = "http://www.google.com"
//   } 
//   let webSite = new Object();
//   changeObjProperty(webSite);
//   console.log(webSite);

function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();
