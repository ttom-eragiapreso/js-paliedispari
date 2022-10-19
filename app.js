console.log("App loaded")

// *Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.




// PALINDROMA

// Chiediamo all'utente di scriverci una parola
let userWord = prompt("Scrivi una parola");

function isPalindroma(word){

  // Se la parola scritta dall'utente ha una sola lettera non può essere controllata se è palindroma
  if(word.length === 1) 
  return alert("Devi scegliere una parola di almeno due lettere")

  // Inizializziamo un idice al valore della lunghezza della parola -1
  let index = word.length -1;
  // Inizializziamo un array vuoto che conterrà la parola al contrario
  let reverseWord = [];

  // Inizializziamo un while loop che continuerà fino a che l'indice non sarà andato dal suo valore iniziale a 0. Ad ogni ciclo andiamo a pushare la lettera all'indice attuale della parola inserita dall'utente nel nostro array. 
  while(index >= 0){
    reverseWord.push(word[index])
    index--
  }

  // Convertiamo l'array contenente la parola al contrario con il metodo join, così facendo eliminiamo anche la virgola che altrimenti rimarrebbe tra una lettera e l'altra.
  reverseWord = reverseWord.join("");
  console.log(`La parola che hai scritto al contrario si legge ${reverseWord}`);

  // Infine controlliamo che la parola invertita sia identica alla parola inizialmente passata come argomento della funzione. Se è identica ritorno true altrimenti false.
  if(reverseWord === word){
    console.log("La parola che hai inserito è palindroma")
    return true
  }
    console.log("La parola che hai inserito non è palindroma")
    return false;
}

console.log(isPalindroma(userWord));


// Pari e Dispari 





function oddEven(){

  let userOddEven = prompt("Vuoi essere pari o dispari?");
  // Non mi piace mettere un if qui, ma altrimenti la funzione chiederà di scegliere un numero anche se l'utente ha scritto qualcosa di diverso da pari o dispari e solo dopo uscirà dalla funzione.
  if(userOddEven.toLowerCase() !== "pari" && userOddEven !== "dispari") {
    alert("devi scegliere o pari o dispari");
    return;
  }
  let userNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));
  let aiNumber = Math.ceil(Math.random() * 5);
  let sum = aiNumber + userNumber;
  let winner = "";
  
  // Usiamo la nostra utility per storare il risultato finale
  const risultatoFinale = isEvenOdd(sum);
  
  // Se la scelta dell'utente è uguale al risultato della funzione che determina la parità o disparità della somma allora l'utente vince, altrimenti vince AI.
  if(userOddEven === risultatoFinale){
    winner = "user"
  }else {
    winner = "AI"
  }

  console.log(`il computer ha scelto il numero ${aiNumber}, tu hai scelto di essere ${userOddEven}, la somma è ${sum} quindi il vincitore è ${winner}`);
}

oddEven();

// Creaiamo una utility function che ci serve solo a definire se un numero è dispari o pari.
function isEvenOdd(num){
  if(num % 2 === 0) return "pari"
  return "dispari";
}