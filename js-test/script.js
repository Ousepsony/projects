// function isLeap(year) {
    
//     /**************Don't change the code above****************/    
        
//         //Write your code here.    
//     if(year%4 === 0 && year%100!=0){
//         console.log("leap year");
//     }
//     else if (year %100&&year%400==0){
//         console.log("not leap")
//     }
//     else{
//         console.log("not leap")
//     }
    
        
    
//     /**************Don't change the code below****************/    
    
//     }
//     isLeap(2020)


//arrays
// var array1 = ["one","two","three","four","five"];
// var i=0
// for (i = 0; i < array1.length; i++){
//   console.log((i+1) + ": " + array1[i]);}
i=1;

while (i<=100){
    if(i%3==0 || i%5==0){
        if (i%3==0 && i%5==0){
            console.log("fizzBuzz")
        }
        else if(i%3==0){
            console.log("fizz")
        }
        else if(i%5==0){
            console.log("Buzz")
        }
    }
    else{
        console.log(i)
    }
    i++
}