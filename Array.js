
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

console.log(`Ora in questo momento ho a dispozione questi frutti: ${Frutta} ed la lunghezza del gruppo frutta e di: ${Frutta.length}`)

// Funzioni

function somma(a, b) {
    console.log(a + b);
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

