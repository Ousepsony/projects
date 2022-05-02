// // var message ="in global";
// // console.log("global:mesage = " + message)

// // function a (){
// //     var message = "inside a";
// //     console.log("a: message = " + message);
// //     b();
// // }
// // function b (){
// //     console.log("b: message = " + message);
// // }
// // a();

// // //data types
// // var boolval=true;
// // var nullval=null;
// // var undefinedval;
// // var numval= 8;
// // var stringval= "noice";
// // console.log(boolval);
// // console.log(nullval);
// // console.log(undefinedval);
// // console.log(stringval);
// // console.log(numval);

// // //test
// // var test1;
// // test1=5;
// // if (test1==undefined){
// //     console.log("x is undefined");
// // }


// // else{
// //     console.log("x is defiend");
// // }

// // /////


// // var string="Hello";
// // string += " World";
// // console.log(string +"!");

// // ///math ops

// // //precedence of parnathesis

// // console.log((5/2)*5/2);
// // console.log(undefined/2);


// // function test11(a){
// //     console.log(a/5);
// // }
// // test11();
// // test11(6238756);

// // //equality

// // var x=4, y=4;
// // if (x == y) {
// //     console.log("equal without quotes")
// // }
// // y="4"//string
// // if (x==y){
// //     console.log(" equal even when one with quotes ");
// // }


// // //strict equality
// // console.log("strict equality");
// // if (x===y){
// //     console.log("sttict: x=4 is equal to y= string(4)")
// // }
// // else{
// //     console.log("strict: x=4 is not equal to y=(string)4")
// // }

// // if (false || null || "" || 0 || NaN ||undefined) {
// //     //this wont execute because js considers all the above as a false value
// //     console.log("this wont execute")
// // }
// // else{
// //     console.log("above given if statement regarding what js considers true did not work")
// // }


// // if (true && "noice" && "false" && 1 && -1){
// //     console.log("all conditions are ture so u see this")
// // }


// // //difference betweeen new line and the same line

// // function trialfunction1()
// // {
// //      return
// //      {
// //          name:"Jospeh"
// //      }
// // }

// // function trialfunction2(){
// //     return{
// //         name:"also Joseph"
// //     }
// // }
// // console.log(trialfunction1);
// // console.log(trialfunction2);

// // //for loop
// // var sum=0;
// // for (var i=0; i<10; i++){
// //     console.log(i);
// //     sum=sum+i;
// // }
// // console.log("the sum of the nuber sform 0 to 9 is" + sum);


// // for (i=0;i<5;i++){
// //     console.log("random line "+ i)
// // }

// // //fuction default value handling
// // function orderChickenWith(sidedish){
// //     // if (sidedish === undefined){
// //     //     sidedish="nothing";
// //     // }
// //     //insteed,
// //     sidedish=sidedish || "Nothing"
// //     console.log("Chicken with " + sidedish);
// // }

// // orderChickenWith("noodles");
// // orderChickenWith();

// // //assignment
// // // var x = 10;
// // // if ( (null) || (console.log("Hello")) || x > 5 ) {
// // //   console.log("Hello");
// // // }


// ///OBJECTS

// var company= new Object();
// company.name="facebook";
// console.log(company);
// console.log(company.name);
// company.ceo=new Object();
// company.ceo.firstname="Mark";
// console.log(company.ceo.firstname);

// console.log(company);
// company.ceo.favColor="blue";
// console.log("CEO " + company.ceo.firstname + "'s Favourite Color is " + company.ceo.favColor);

// console.log(company["ceo"]["firstname"]);

// company["stock price"] = 190;
// console.log(company);
// console.log(company["stock price"]);

// better way to create objects

// var facebook={
//     name:"Facebook",
//     ceo:{
//         firstName:"Mark",
//         favColor:"blue"
//     },
//     "stock of company":190
// };
// console.log(facebook);
// console.log(facebook["stock of company"]);

// FUNCTIONS

// function multiply(x,y){
//     return x*y;
// };

// multiply.version="v1.0.0";
// console.log(multiply.version);

// //trial functions
// var multiplierfunc=function(multiplier){
//     var myfunction =function(x) {
//         return multiplier*x 
//     }
//     return myfunction;
// };

// var multiplyby3= multiplierfunc(3);
// console.log(multiplyby3(10));
// console.log(multiplierfunc(3)(10000));

// //passing fucntoins as argunments

// function doOperationOn(x,operation){
//     return operation(x);
// };
// console.log(doOperationOn(3,multiplyby3))


// var a=90;
// var b=a;
// var a=95;
// console.log("a"+a);
// console.log("b"+ b);

// var aobj={
//     a:99
// }
// var bobj=aobj;
// bobj.a=100;
// console.log(aobj.a);
// console.log(bobj.a);


// passing by reference and value in fucntions

// function changePrimitive(primval){
//     console.log("change in primitive|||||");
//     console.log("before");
//     console.log(primval);

//     primval=5;
//     console.log("after");
//     console.log(primval);
// };

// console.log("BEFORE EXECUTION");
// var value=7;
// changePrimitive(value);
// console.log("AFTER FUNCTION EXECUTON");
// console.log("value variable after change in fucntoin");
// console.log(value);

// console.log("INIT");
// function changeObject(objVal){
//     console.log("Before Change IN fucntion");
//     console.log(objVal);
//     objVal.x=5;
//     console.log("After change IN fucntion");
//     console.log(objVal);
// }

// console.log("Before Calling function");
// var value={
//     x:7
// }
// changeObject(value);
// console.log("After calling Function")
// console.log(value);


// function constructos

// function Circle(radius){    //useing capitals for others to knoiw that it is a fucntion construction( generally);
//     // console.log(this);
//     this.radius= radius; //radius part of the fucntion argument

// };

// Circle.prototype.getArea= function(){
//     return( Math.PI * Math.pow(this.radius,2))
    
// };

// var myCircle = new Circle(10);  //New object named circle   
// console.log(myCircle.getArea());


// var otherCircle = new Circle(200);
// console.log(otherCircle.getArea());



// making my own fucntoin constructor  //test1

// function Cuboid(length,breadth,height){
//     // console.log(this);
//     this.length=length;
//     this.breadth=breadth;
//     this.height=height;

//     console.log(this.volume())
// };
// Cuboid.prototype.volume = function(){
//     return  this.length*this.breadth*this.height + " Cm^3"
// };

// cuboid1 =  new Cuboid(100,100,100);

// cuboid2 =  new Cuboid(10900,100,100);



// test 2 fucntions constructior
// to find whether a number is prime or not

// function Number(integer){
//     this.integer=integer;
//     console.log(integer + " " +this.isPrime());
// }
// Number.prototype.isPrime =  function(){
//     var n=this.integer;
//     var returnedVal="Is Not Prime";
//     var primeNumber=0;
//     var t=1;
//     for (t;t<n;t++){
//         if ((t != 1)&&(n%t==0)){
//             primeNumber+=1;

//         }
//         else{
//             primeNumber=primeNumber;
//         }
        
//     }
//     if(primeNumber==0){
//         returnedVal="Is Prime";
//         return returnedVal;
//     }
//     else{
//         returnedVal="Is Not Prime";
//         return returnedVal;
//     }
// }

// isitprime = new Number(100151);


// obhject literal and this kw

// var literalCircle = {
//     radius:10,

//     getArea:function(){
//         console.log(this);
//         return Math.PI * Math.pow(this.radius,2)
//     }
// }

// console.log(literalCircle.getArea())

// var cubeVolume = {
//     length:10,
//     breadth:10,
//     height:10,

//     getVolume: function(){
//         return this.length * this.height * this.breadth
//     },
//     giveVolume : function(){
//         console.log(this.getVolume())
//     },

// }

// cubeVolume.giveVolume();



//sample
// var literalCircle = {
//     radius : 10 ,
    
//     getArea:function (){
//         var self = this;
//         console.log(this)
//         return Math.PI*Math.pow(self.radius,2)}
// }

// console.log(literalCircle.getArea());

// var array = new Array();
// array[0]="this is a string";
// array[1]=1;
// array[2]={name:"object",place:"inside array",animal:0,thing:{object:"another object"}};
// array[3]= function(argument){
//     console.log("I was told to put '"+argument+"' inside the console.");
// }
// array[3]("nothing");
// array[3]();
// array[3](array[0]);
// array[3](array[2].place);


//shorthand method for creating arrays
// array = [1,"second is a string",{also:'then an object'}];
// console.log(array.length);

// var names = ["Jack","Jill"];
// console.log(names.length)
// for (var i=0;i<names.length;i++){
//     console.log(names[i]+" went up the hill.")
// }

// names.objProperty = "test string";


// for(i in names){
//     console.log(i +" : "+ names[i])
// }


// var object1 = {
//     one:1,
//     two:2,
//     three:3,
// }
// for(i in object1){
//     console.log(i + object1[i])
// }

// function makeMultiplier(multiplier) {
//     return(
//         function(x){
//            return multiplier * x;
//         }
//     );
// };

// var doubleAll =makeMultiplier(2);
// console.log(doubleAll(10));

// console.log(makeMultiplier(2)(9))



// this is part of 3 files script2.js and script3.js
// var name1={
//     name:"Joseph",
//     greeter: function(){
//         console.log("Ayo, " + name1.name)
//     }
// }


//immidietly invoked function expression
var lmao = "lmao";
console.log("before "+ lmao)
var trialfunc = (function (a){
    a.lmao="what";
    console.log("while "+ lmao)
})(window);

console.log("after "+ lmao);