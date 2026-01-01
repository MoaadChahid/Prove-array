
//ARRAY


let Frutta = ["Mela", "Banana", "Arancia", "Pera"];

console.log(`Frutta disponibile: ${Frutta}`);

Frutta.pop();

console.log(`Aggiornamento frutta, la frutta disponibile è: ${Frutta}`);

Frutta.push("Kiwi");


console.log(`Aggiornamento frutta, la frutta disponibile è: ${Frutta}`);

Frutta.shift();

Frutta.unshift("Fragola");

console.log(`Aggiornamento frutta, la frutta disponibile è: ${Frutta}`);

Frutta.shift();

Frutta.pop();

Frutta.unshift("Ananas", "Avocado", "Mandarino");


console.log(`Aggiornamento frutta, la frutta disponibile è: ${Frutta}`);

console.log(`La lunghezza del gruppo frutta cioè: ${Frutta} e di: ${Frutta.length}`)

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

