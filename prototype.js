1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype


ans:


let firstParent = {
    calculateAge(){
        console.log(`My name is ${this.fName} ${this.mName} ${this.lName} and age [${2022 - this.bYear}]`);
    }
}
let firstObj = Object.create(firstParent);
firstObj.fName = "Akash";
firstObj.mName = "Kumar";
firstObj.lName = "Biswas";
firstObj.bYear = 1998;
firstObj.calculateAge();

let childObj = Object.create(firstParent);
childObj.fName = "Pijush";
childObj.mName = "Chandra"
childObj.lName = "Nath";
childObj.bYear = 1997;
childObj.calculateAge();



3. Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

ans:

function arraySum(){
    let sum=0;
    for(let i in array.length) { 
        sum += [i];
    }
    return sum;
}
let array = []; 
 arraySum(array);



4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.



ans:

function me( first, middle, last, hight, weight) {
    this.firstName = first;
    this.middleName = middle;
    this.lastName = last;
    this.hight = hight;
    this.weight = weight;
}
me.prototype.nationality = "Indian";
const myFather = new me("Akash","Kumar", "Biswas", "5.9 cm", 72);
console.log(myFather);
console.log("The nationality of my father is " + myFather.nationality);


2.  Write code to explain prototype chaining

ans:

let firstPerson = {
    profile(){
    console.log(`My name is ${this.name} ,location is ${this.location} and current age is ${2022 - this.dob}.`);
    },
    initialise(name,location,dob){
    this.name = name;
    this.location = location;
    this.dob = dob;
    }
    }
    let Kisan = Object.create(firstPerson);
    Kisan.initialise("Kisan","Kolkata",1997);
    Kisan.profile();
    console.log(Kisan);
    
    let KisanPrototype = Object.create(firstPerson);
    KisanPrototype.initial = function (name,location,dob) {
    firstPerson.initialise.call(KisanPrototype,name,location,dob); 
    }
    
    KisanPrototype.introduce = function(){
        console.log(`Student name is ${this.name} and location  ${this.location}.`);
    }
    
    
    let newPrototype = Object.create(KisanPrototype);
    newPrototype.initial("Eshaan","Kolkata",1995);
    newPrototype.introduce();
    newPrototype.profile();






























