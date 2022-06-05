// for(i =1;i<=100;i++){
//     if (i%3==0 && i%5==0){
//         console.log("fizzBuzz")
//     }
//     else if(i%3==0){
//         console.log("fizz")
//     }
//     else if(i%5==0){
//         console.log("Buzz")
//     }
//     else{
//     console.log(i)
//     }
// }

//fibonacci sequence generator

function fibonacci(number){
    num=0;lastNum=1;secondLastNum=0;
    for(i=0; i<=number;i++ ){
        secondLastNum = lastNum;
        lastNum = num;
        console.log(num)
        num = lastNum +secondLastNum;
    }
}