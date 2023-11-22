
//Seleziono il bottone
const playBtnElement = document.querySelector("button.play");
const selectDifficultyEl = document.querySelector("select#select-difficulty")

//messaggio "have fun!" -> current score
const message = document.createElement("p")
const sectionGame = document.querySelector("section.minefield-game")
message.innerHTML= "Have fun!";
sectionGame.appendChild(message);


//Al click sul bottone genero nuova griglia
playBtnElement.addEventListener("click", function() {
    
    gridWrapperElement.innerHTML = "";
    message.innerHTML= "Have fun!";
    
    //Per cambiare numbero bombe QUI!
    const bombs = generateBombsArray(16);
    console.log(`bombs position: ${bombs}`);
    
    //Livello difficoltà
    const difficulty = selectDifficultyEl.value
    console.log(difficulty);
    let cellsPerRow = Math.sqrt(difficulty);

    //Punteggio di partenza   
    let finalScore = 0;

    for (let i = 1 ; i <= difficulty ; i++){
        
        const currentSquare = generateSquare();
        
        const squareContent = i;
        currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        gridWrapperElement.appendChild(currentSquare);

        currentSquare.style.width = `calc(100% / ${cellsPerRow})`;
        currentSquare.style.height = `calc(100% / ${cellsPerRow})`;

        
        currentSquare.addEventListener("click", function(){

            if (finalScore = difficulty - bombs - 2) {
                message.innerHTML = `You won! Your score is ${finalScore}`;
            } else if (bombs.includes(squareContent)) {
                this.classList.add("bg-red");
                message.innerHTML = `game over! Your score is ${finalScore}`;
            } else if (currentSquare.classList.contains("point-given")) {
                message.innerHTML = `Your current score is: ${finalScore}`;
            } else {
                this.classList.add("bg-light-blue", "point-given");
                console.log(squareContent);
                finalScore += 1;
                message.innerHTML = `Your current score is: ${finalScore}`;
            }
        });
    }
});

const gridWrapperElement = document.querySelector("div.grid-wrapper");





// Funzioni
function generateSquare() {
    const generateSquareElement = document.createElement("article");
    generateSquareElement.classList.add("square");
    return generateSquareElement;
}


function getRandomNumber(minNumber, maxNumber){
    return Math.floor( Math.random() *(maxNumber - minNumber + 1) + minNumber);
}


function generateBombsArray(bombsNumber) {
    const bombsArray = [];

    while (bombsArray.length < bombsNumber) {
        const newBomb = getRandomNumber(1, 100);

        if (!bombsArray.includes(newBomb)) {
            bombsArray.push(newBomb);
        }
    }
    return bombsArray;
}

