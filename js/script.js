// CLICK BOTTONE START GIOCO IN BASE AL VALUE INSERITO
// GENERA TABELLA 
// OGNI CELLA NUMERO PROGRESSIVO DA 1 A MAX NUMERO CELLE
// QUANDO PREMO SULLA CELLA IN CONSOLE MI STAMPA IL SUO NUMERO E SI COLORA DI AZZURRO
const container = document.querySelector('.container');
const difficolta = document.querySelector('select');
const play = document.querySelector('#start');



play.addEventListener('click', startGame)
// BOTTONE PLAY CHE DA INIZIO AL MIO GIOCO
function startGame (){
  container.innerHTML = '';
  let numeroRighe = difficolta.value;
  innerTable(numeroRighe);
}


// INNERTABLE SERVE PER CREARE IL NUMERO DEI QUADRATI CHE MI OCCORRONO
/**
 * 
 * @param {number} nRighe 
 */
function innerTable(nRighe){
  const totalSquare = Math.pow(nRighe, 2);
  for(let i = 0; i < totalSquare; i++ ){
    createSquare(i);
  }
  
}


// CREATESQUARE è COLLEGATA A INNERTABLE E MI GENERA IL QUADRATO STESSO, in cui aggiungo lo style in line al tag per far si che la griglia sia sempre calcolata nel modo giusto.
/**
 * 
 * @param {number} nSquare 
 */
function createSquare(nSquare){
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `calc(100% / ${difficolta.value})`;
  square.innerText = nSquare + 1;
  container.append(square);
  square.idNumberSquare = nSquare + 1;
  square.addEventListener('click', nameSquare)
  console.log(square);
}


// AL CLICK SUL QUADRATO MI STAMPA IL SUO "NUMERO" IN CONSOLE, ASSEGNATOGLI NELLA CREAZIONE DI ESSO, E AGGIUNGE IL BG ALLO SQUARE
function nameSquare(event){
  let idSquare = this.idNumberSquare;
  this.classList.add('bg-square');
  console.log(idSquare);
}





