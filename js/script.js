
//Seleziono il bottone
const playBtnElement = document.querySelector("button.play");
console.log(playBtnElement);

//Click sul bottone genera nuova griglia
playBtnElement.addEventListener("click", function() {
    
    gridWrapperElement.innerHTML = "";

    
    for (let i = 1 ; i <= 100 ; i++){
        //genero cella
        const currentSquare = generateSquare();
        //popolo cella con numeri
        const squareContent = i;
        currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        gridWrapperElement.appendChild(currentSquare);
        
        currentSquare.addEventListener("click", function(){
            this.classList.toggle('bg-light-blue');
            console.log(squareContent);
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