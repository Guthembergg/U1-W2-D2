/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let es1num1 = 1;
let es1num2 = 3;
if (es1num1 > es1num2) {
  console.log("es1num1 è più grande");
} else {
  console.log("es1num2 è più grande");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let equal = 6;
if (equal !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let es3 = 15;
if (es3 % 5 == 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let es4num1 = 10;
let es4num2 = 2;
if (es4num1 === 8 || es1num2 === 8) {
  console.log("uno dei numeri è uguale a 8");
} else if (es4num1 + es4num2 === 8) {
  console.log("la loro somma è uguale a 8");
} else if (es4num1 - es4num2 === 8) {
  console.log("la loro sottrazione è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 30;
if (totalShoppingCart > 50) {
  console.log("hai diritto alla spedizione gratutita");
} else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log(
    "aggiunta spesa di spedizioe, il tuo totale risulta:",
    totalShoppingCart
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = 20;
if (totalShoppingCart * 0.8 > 50) {
  console.log("hai diritto alla spedizione gratutita");
} else {
  totalShoppingCart = totalShoppingCart * 0.8 + 10;
  console.log(
    "aggiunta spesa di spedizioe, il tuo totale risulta:",
    totalShoppingCart
  );
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 4000;
let b = 6000000;
let c = 300000;

if (a > b) {
  if (b > c) {
    console.log(a, b, c);
  } else if (a > c) {
    console.log(a, c, b);
  } else {
    console.log(c, a, b);
  }
} else {
  if (b > c) {
    if (a < c) {
      console.log(b, c, a);
    } else {
      console.log(b, a, c);
    }
  } else {
    console.log(c, b, a);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let es8 = 13;

if (typeof es8 === "number") {
  console.log("è un numero");
} else {
  console.log("non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let es9 = 6;
if (es9 % 2 == 0) {
  console.log("pari");
} else {
  console.log("dispari");
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 6;
if (val < 10) {
  if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Meno di 10 ma maggiore di 5");
  }
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
  city: "Toronto",
};

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myarray = [];
myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myarray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myarray[9] = 100;
console.log(myarray);
