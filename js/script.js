
//Seleziono il bottone
const playBtnElement = document.querySelector("button.play");
console.log(playBtnElement);

//Click sul bottone genera nuova griglia
playBtnElement.addEventListener("click", function() {
    
    gridWrapperElement.innerHTML = "";
    
    //Per cambiare numbero bombe qui!
    const bombs = generateBombsArray(16);
    console.log(bombs);
    
    let finalScore = 0;

    for (let i = 1 ; i <= 100 ; i++){
        
        const currentSquare = generateSquare();
        
        const squareContent = i;
        currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        gridWrapperElement.appendChild(currentSquare);
        
        currentSquare.addEventListener("click", function(){

            if (finalScore === 100 - bombs) {
                alert(`You won! Your score is ${finalScore}`);
            } else if (bombs.includes(squareContent)) {
                this.classList.add("bg-red");
                alert(`game over! Your score is ${finalScore}`);
            } else {
                this.classList.add('bg-light-blue');
                console.log(squareContent);
                finalScore += 1;
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





// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//Funzione che mi genera un array con 16 numeri random non ripetuti
//mi creo un array vuoto
//finché la lunghezza dell'array è minore del numero di bombe desiderato (per noi 16)
    //mi genero un numero random da 1 a 100
    //se bombsArray NON include il numero generato
        //lo aggiungo


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

