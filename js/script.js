
//Seleziono il bottone
const playBtnElement = document.querySelector("button.play");
console.log(playBtnElement);

//Click sul bottone genera nuova griglia
playBtnElement.addEventListener("click", function() {
    
    gridWrapperElement.innerHTML = "";

    const bombs = generateBombsArray(16);
    console.log(bombs);

    
    for (let i = 1 ; i <= 100 ; i++){
        //genero cella
        const currentSquare = generateSquare();
        //popolo cella con numeri
        const squareContent = i;
        currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        gridWrapperElement.appendChild(currentSquare);
        
        currentSquare.addEventListener("click", function(){
            if (bombs.includes(squareContent)) {
                this.classList.add("bg-red");
            } else {
                this.classList.add('bg-light-blue');
                console.log(squareContent);
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

//Funzione che mi genera un array con 16 numeri random

function generateBombsArray(bombsNumber) {
    //mi creo un array vuoto
    const bombsArray = [];

    //finché la lunghezza dell'array è minore del numero di bombe desiderato (per noi 16)
        //mi genero un numero random da 1 a 100
        //se bombsArray NON include il numero generato
            //lo aggiungo

    while (bombsArray.length < bombsNumber) {
        const newBomb = getRandomNumber(1, 100);

        if (!bombsArray.includes(newBomb)) {
            bombsArray.push(newBomb);
        }
    }
    return bombsArray;
}

