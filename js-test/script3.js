function BellBoy(name, age, salary, experience){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.experience =  experience;
    this.welcome = function(){
        console.log(`welcome ${name} `)
    }
}

var bellBoy1 = new BellBoy("Joseph",23,12314,5)
bellBoy1.welcome();