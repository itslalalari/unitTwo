function funChar(inputName, inputHP, ...inputMoves){ 
var outputName = inputName;
var outputHp = inputHP;
var outputMoves = inputMoves;

return{
        getHP(){
            return outputHp;},
        getName(){
            return outputName;}, 
        getMoves(){
            var divMoves = document.querySelector (".moves")  //this should select the move div
            for(const namedMoves of outputMoves ) {
                p = document.createElement("p"); //for each move create a p
                const namedMoves = document.createTextNode(outputMoves); //create a textnode for each named moved
                p.appendChild(divMoves); //append the p for output move
                //now I have a function that puts the named moves into p
                
                
                //const firstP = document.querySelector("p"); //this needs to be here idk why
                //const parent = firstP.parentNode;

                //parent.insertBefore(p, firstP.nextElementSibling);
                //i don't know if these is needed here
            }
        }
    }
}
    
var player = funChar("Lari", 9, "hit", "kick", "smack"); // give stats to player

p = document.createElement("p");
outputMoves.appendChild("p");

player.getMoves();