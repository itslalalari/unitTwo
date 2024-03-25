/*Event listener: clicking toggles text in and out of view and 
utilize an anon fuction when event is triggered 
-click event causes text to fade in and out of view*/
$(document).ready(function(){ 
    $("#p2").click(()=>{
            $("#p1").fadeToggle();
        });
  
//picks a random number between 0 and 4  
 function randomNum() {
 return Math.floor((Math.random() * 5));};

 //class that creates a monster with random params
class Monster{
    constructor(relationship){
        this.relationship = relationship;

    };  
};

//create arrays and variables
    let attack = ["Slash", "Bite", "Stomp", "Hit", "Gouge"];
    let a = randomNum(); //gets a number for the attack array 

    let type = ["Cat", "Dog", "Bird", "Lizard", "Behemoth"];
    let t = randomNum(); //gets a number for the type array

    let friendly = ["Yes, this monster is friendly towards you.", 
                     "No, this monster is not really friendly at all.", 
                     "It is undetermined as of yet if this monster is actually friendly.",
                     "Reluctantly.", 
                     "Only while it remains a convenience."];
    let f = randomNum(); //gets a number for the freiendly array

    let defence = ["Speed", "Stelth", "Size", "Cunning", "Cuteness" ];
    let d = randomNum(); //gets a number for the defence array

    let action = ["as you robbed a bank.",
                  "while fleeing town in the same direction.", 
                  "when you made eye coontact from accross a crowded bar.",
                  "at a niche movie screening.",
                  "while bathing in a river."];
    let r = randomNum(); //gets random number for the realtionship
    relationship = action[r];

var creature = new Monster(); //creates monster

creature.relationship = action[r]; //gives param a value from the array
    
//Set random array selection to a var
let outputAttack = attack[a];
let outputType=type[t];
let outputFriendly=friendly[f];
let outputDefence=defence[d];
 
//log variables to check that random number generator is working
 console.log(a);
 console.log(t);
 console.log(f);
 console.log(d);
 console.log(r);

document.getElementById("m1").innerHTML = "This monster's main attack is to " + outputAttack.toLowerCase() + ".";
document.getElementById("m2").innerHTML = "This monster is a " + outputType.toLowerCase() + ".";
document.getElementById("m3").innerHTML = "Is this monster friendly? " +outputFriendly;
document.getElementById("m4").innerHTML = "This monster's main defencse is its " + outputDefence.toLowerCase() + ".";
document.getElementById("m5").innerHTML = "You met this monster  " + creature.relationship; //method that calls object
   
});