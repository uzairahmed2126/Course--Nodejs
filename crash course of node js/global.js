setTimeout(() => {
    console.log('from time out')
    clearInterval(int)
}, 1000);
 
const int = setInterval(() => {
    console.log('from set intervel')
}, 3000);
