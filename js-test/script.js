function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
    if(year%4 === 0 && year%100!=0){
        console.log("leap year");
    }
    else if (year %100&&year%400==0){
        console.log("not leap")
    }
    else{
        console.log("not leap")
    }
    
        
    
    /**************Don't change the code below****************/    
    
    }
    isLeap(2020)