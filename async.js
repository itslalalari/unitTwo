
async function chase(){ 
     //create two new variables called runner1 and runner2, both set to false  
var runner1 = false;
var runner2 = false; 
    //create a loser variable set to an empty string
var loser = "";
     //create promise w/resolve and setTimeout, set loser to runner# and resolve as true
var runner1Go = new Promise(function(resolve, reject){
    setTimeout(()=> {loser=runner1; resolve(true)}, 2000);    
        });
var runner2Go = new Promise(function(resolve, reject){
    setTimeout(()=> {loser=runner2; resolve(true)}, 3000);    
        });
    //Part C = return promises and loser in an array
return[await runner1Go, await runner2Go, loser]
};
    /*call async and then clause to run a function; 
    consol log 'loser' or 3rd position in array.*/ 

chase().then(function(param){
    console.log(param[2])});
    //loser=false bc loser=runner#=false

    /*I don't understand why it needs to be written this way, 
    could param anything?*/

  






/* saving this so I remember how I tested if promises worked

  runner1Go.then(function(result){        //put the result in a function so that it can be called to be logged(?)
    console.log("runner1Go is resolved: " + result); //proof of working code
    });


   // runner2Go.then(function(result){        //put the result in a function so that it can be called to be logged(?)
   //    console.log("runner2Go is resolved: " + result); //proof of working code
       
    //});           
setTimeout(()=>console.log("loser = " + loser), 6000); //needs to be function, otherwise it doesn't process the var
*/
