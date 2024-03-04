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
            var divMoves = document.querySelector (".moves");  //this should select the move div
            for( var moreMoves of outputMoves ) {
                const para = document.createElement("p"); //for each move create a p
                para.textContent = "Possible Move: " + moreMoves; 
                //I don't understand why textContent works but making a textnode doesn't
                divMoves.append(para);
            }
        }
    }
}
var divMoves2 = document.querySelector(".moves");    
var player = funChar("Lari", 9, "Hit", "Kick", "Smack", "Hide", "Scamper Away"); // give stats to player

//use function to pull in char name
para = document.createElement("p");
para.textContent = "Player Name: "+ player.getName();
divMoves2.append(para);

//use function to pull in HP
para = document.createElement("p");
para.textContent = "Hit Points: " + player.getHP();
divMoves2.append(para);

//use function to pull in moves from loop
player.getMoves();