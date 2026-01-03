
//ARRAY

// elenco Frutta
let Frutta = ["Mela", "Banana", "Arancia", "Pera"];

console.log(`Frutta disponibile: ${Frutta}`);

//Rimozione dell'ulitmo elemento e aggiunta di un nuovo frutto
Frutta.pop();

Frutta.push("Kiwi");

console.log(`Aggiornamento frutta, la frutta disponibile è: ${Frutta}`);

// Sostituzione del primo frutto con fragola
Frutta.shift();

Frutta.unshift("Fragola");

console.log(`Aggiornamento frutta, la frutta disponibile è: ${Frutta}`);

//Rimozione del primo ed ultimo frutto, aggiunta di 3 nuovi frutti

Frutta.shift();

Frutta.pop();

Frutta.unshift("Ananas", "Avocado", "Mandarino");


console.log(`Aggiornamento frutta, la frutta disponibile è: ${Frutta}`);

// dichiarazione di quanto è lungo il gruppo FRUTTA, e descrizione del gruppo.

console.log(`Ora in questo momento ho a dispozione questi frutti: ${Frutta} ed la lunghezza del gruppo frutta e di: ${Frutta.length} Frutti`)

// Funzioni

function somma(a, b) {
    console.log(a + b);
    return (a + b);
}

function meno(a, b) {
    console.log(a - b);

}

function X(a, b) {
    console.log(a * b);
}

function divisione(a, b) {
    console.log(a / b);
}



somma(10, 5);
meno(10, 5);
X(10, 5);
divisione(10, 5)


let c = somma(25, 19)

console.log(c)

//CONSOLE RESET
console.clear()
//CONSOLE RESET

//PROVA RETURN
function VitaPlayer(VitaDelGiocatore) {
    return (100);
}

let Player = VitaPlayer();

console.log(`La partita è cominciata, la vita iniziale del Player è di: ${Player}`)

// return con promt e somma

function SommaPrompt(a, b) {
    return (a + b);
}

//let numero1 = parseInt (prompt ("Inserisci un numero da sommare"));

//let numero2 = parseInt (prompt ("Inserisci un altro numero da sommare"));

//let risultato = SommaPrompt (numero1, numero2);

//console.log (`La somma dei due numeri è: ${risultato}`)

console.clear

//NUMERI RANDOM & PARI E DISPARI

//GENERE NUMERO RANDOM
function pescaUnNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

for (let index = 0; index < 10; index++) {
    console.log(pescaUnNumeroRandom(0, 100))
}

//Pari E Dispari

function pari(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let numeroUtente = parseInt(prompt("Inserisci un numero per verificare se è pari o dispari"));

if (pari(numeroUtente)) {
    console.log(`Il numero ${numeroUtente} è pari`);

} else {
    console.log(`Il numero ${numeroUtente} è dispari`);
}
