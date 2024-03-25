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

    let friendly = ["Yes, this monster is friendly towards you", 
                     "No, this monster is not really friendly at all.", 
                     "It is undetermined as of yet if this monster is actually friendly.",
                     "Reluctantly.", 
                     "Only while it remains a convenience."];
    let f = randomNum(); //gets a number for the freiendly array

    let defence = ["Speed", "Stelth", "Size", "Cunning", "Cuteness" ];
    let d = randomNum(); 

    //button that performes random number assignments
var TravelingCompanion = new Monster("Traveling Companion");

console.log(TravelingCompanion);

document.getElementById("m1").innerHTML = TravelingCompanion;

    let outputAttack = attack[a];
    let outputType=type[t];
    let outputFriendly=friendly[f];
    let outputDefence=defence[d];
    
 console.log(a);
 console.log(t);
 console.log(f);
 console.log(d);



/*
document.getElementById("m1").innerHTML = "This Monster's main attack is to " + outputAttack;
document.getElementById("m2").innerHTML = "Your traveling companion is a " + outputType;
document.getElementById("m3").innerHTML = "This Monster's main attack is to " + outputAttack;
document.getElementById("m4").innerHTML = "This Monster's main attack is to " + outputAttack;*/
   
});
//Place that shows the stats of the new Monster