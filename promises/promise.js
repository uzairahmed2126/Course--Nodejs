// function fn1(){
//     console.log('fn1')
//     async function sp(){
//         console.log('sp')
//         await 1;
//         console.log('after await')
//         return 1
//     }
//     const val = sp ()
//     console.log(val)
// }
// function fn2(){
//     console.log('fn2')
// }
// function fn3(){
//     console.log('fn3')
// }

// fn1()
// fn2()
// fn3()

// on easy way we can understand with this code
// console.log('one')//first execution
// setTimeout(()=>{
//     console.log('tow from time out')//last execution
// },3000)

// async function sp(){
//     console.log('my name is promise before await')
//     await 1;
//     console.log('my name is promise after await two')
// }
// sp()+'tow'
// console.log('three')//second execution

// let promise = new Promise((resolve,reject)=>{
//     console.log('hey im a promise')
// })

// let p1 =new Promise((resolve,reject)=>{
//     console.log('Promise is pending')
//     setTimeout(()=>{
//         console.log('Im a promise and I am rejected')
//         reject(new Error('error from reject'))
//     },2000)
//     return 1;
// })

// let p2 =new Promise((resolve,reject)=>{
//     console.log('Promise is pending')
//     setTimeout(()=>{
//         console.log('Im a promise and I am resolve')
//         resolve(true)
//     },2000)
//     return 1;
// })
// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// function fn1() {
//   console.log('before await')
//   async function sp() {
//     console.log('sp') //micro task queue
//     await 1 // promise
//     console.log("and i'm after await")
//   }
//   const val = sp()
//   console.log(val)
// }

// function fn2() {
//   console.log('fn2')
// }

// function fn3() {
//   console.log('fn3')
// }
// fn1()
// fn2()
// fn3()

// console.log(__dirname)
// console.log(__filename)





// console.log('first')
// setTimeout(() => {
//   console.log('two')
// }, 3000)

// console.log('three')




// promise has a state
// promise will execute in the background
// when it's done to execute then notify from with .then and .catch
// when promise is fullfilled then promise will be execute other wise reject

let pr =new Promise((res,rej)=>{
  console.log("promise is pending")
  setTimeout(() => {  
    console.log("promise is reject")      
    // res(true)
    rej(new Error("promise is reject "))
  }, 5000);
})

