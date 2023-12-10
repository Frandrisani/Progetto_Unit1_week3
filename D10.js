/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log("JS Basic, ES. A: ", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 20 + 1);
console.log("JS Basic, ES. B: ", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  nome: "Francesco",
  surname: "Andrisani",
  age: 22,
};
console.log("JS Basic, ES. C: ", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("JS Basic, ES. D: ", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript", "HTML", "CSS"];
console.log("JS Basic, ES. E: ", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("python");
console.log("JS Basic, ES. F: ", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log("JS Basic, ES. G: ", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  let numRandom = Math.floor(Math.random() * 6 + 1);
  return numRandom;
};
console.log("Funzioni, ES. 1: ", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "num1=num2";
  }
};
console.log("Funzioni, ES. 2: ", whoIsBigger(3, 4));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function (string) {
  let parole = string.split(" ");
  return parole;
};
console.log("Funzioni, ES. 3: ", splitMe("Ciao mi chiamo Francesco"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (string, boolean) {
  let stringaFinale;
  if (boolean === true) {
    return (stringaFinale = string.slice(1));
  } else if (boolean === false) {
    return (stringaFinale = string.slice(0, 3));
  }
};
console.log("Funzioni, ES. 4: ", deleteOne("Ciao", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function (string) {
  //Con una ricerca online ho scoperto l'espressione regolare "/\d/g", dove \d indica tutti i numeri da 0 a 1 e g indica global
  const numeriInStringa = /\d/g;

  const stringaSenzaNumeri = string.replace(numeriInStringa, "");

  return stringaSenzaNumeri;
};
console.log("Funzioni, ES. 5: ", onlyLetters("Ciao 4 a tutti"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (string) {
  const stringa = string;
  if (
    stringa.includes("@") === true &&
    stringa.split("@")[1].includes(".") === true
  ) {
    //ho aggiunto "split("@")[1].includes(".")' come ulteriore controllo, verificando che ci sia anche un punto dopo la chiocciola. Utilizzando split(), ho diviso la stringa in due parti: la prima parte prima della chiocciola e la seconda dopo la chiocciola. Successivamente, utilizzando includes(".") ho richiesto se nella SECONDA PARTE ci fosse un punto.
    return true;
  } else {
    return false;
  }
};
console.log("Funzioni, ES. 6: ", isThisAnEmail("Ciao@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  const now = new Date();
  const dayNames = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const indice = now.getDay();
  const oggi = dayNames[indice];
  return oggi;
};
console.log("Funzioni, ES. 7: ", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = function (num) {
  const ritorna = {
    sum: 0,
    values: [],
  };
  for (let i = 0; i < num; i++) {
    const numeroGenerato = dice();
    ritorna.sum += numeroGenerato;
    ritorna.values.push(numeroGenerato);
  }
  return ritorna;
};
console.log("Funzioni, ES. 8: ", rollTheDices(2));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (data) {
  const now = new Date();

  const dataFornita = new Date(data).getTime();
  const dataAttuale = now.getTime();

  const differenza = dataAttuale - dataFornita;
  const differenzaInGiorni = Math.floor(differenza / (1000 * 60 * 60 * 24)); //la formula per ritornare da millisecondi a secondi è la seguente: 1000 millisecondi rappresentano 1 secondo, 60 secondi formano 1 minuto, 60 minuti formano 1 ora, 24 ore formano 1 giorno.

  return differenzaInGiorni;
};
console.log("Funzioni, ES. 9: ", howManyDays("2023-12-08"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function () {
  const now = new Date();
  if (now === "Aug 16") {
    return true;
  } else {
    return false;
  }
};
console.log(
  "Funzioni, ES. 10: ",
  "E' il mio compleanno oggi?",
  isTodayMyBirthday()
);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = function (oggetto, stringa) {
  delete oggetto[stringa];
  return oggetto;
};
console.log(
  "Arrays & Oggetti, ES. 11: ",
  deleteProp({ nome: "franco", cognome: "andrisani" }, "cognome")
);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function (ArrayFilm) {
  let ilPiurecente = ArrayFilm[0];
  for (let xyz = 0; xyz < ArrayFilm.length; xyz++) {
    if (ilPiurecente.Year < ArrayFilm[xyz].Year) {
      ilPiurecente = ArrayFilm[xyz];
    }
  }
  return ilPiurecente;
};

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function (ArrayFilm) {
  let numeroFilm = ArrayFilm.length;
  return numeroFilm;
};

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function (ArrayFilm) {
  let anniFilm = [];
  for (let e = 0; e < ArrayFilm.length; e++) {
    anniFilm.push(ArrayFilm[e].Year);
  }
  return anniFilm;
};

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function (ArrayFilm) {
  let millenniumFilm = [];
  for (let i = 0; i < ArrayFilm.length; i++) {
    if (ArrayFilm[i].Year < 1999 && ArrayFilm[i].Year > 1899) {
      millenniumFilm.push(ArrayFilm[i]);
    }
  }
  return millenniumFilm;
};

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function (ArrayMovie) {
  let sommaAnni = 0;
  for (let i = 0; i < ArrayMovie.length; i++) {
    sommaAnni += parseInt(ArrayMovie[i].Year);
  }
  return sommaAnni;
};

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (ArrayMovie, string) {
  let filmTrovati = [];
  ArrayMovie.forEach((elemento) => {
    if (elemento.Title.includes(string)) {
      filmTrovati.push(elemento);
    }
  });
  return filmTrovati;
};

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (ArrayMovie, string) {
  const filmTrovati = {
    match: [],
    unmatch: [],
  };
  ArrayMovie.forEach((elemento) => {
    if (elemento.Title.includes(string)) {
      filmTrovati.match.push(elemento);
    } else {
      filmTrovati.unmatch.push(elemento);
    }
  });

  return filmTrovati;
};

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (num, ArrayFilm) {
  delete ArrayFilm.splice(num, 1);
  return ArrayFilm;
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selezioneIdContainer = function () {
  return (container = document.getElementById("container"));
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selezioneTagTd = function () {
  return (td = document.getElementsByTagName("td"));
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const tdText = function () {
  const td = document.getElementsByTagName("td");

  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const backgroundRed = function () {
  const links = document.getElementsByTagName("a");

  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const newElementList = function () {
  const newLi = document.createElement("li");
  newLi.textContent = "Nuovo elemento della lista";
  document.getElementById("myList").appendChild(newLi);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuotaLista = function () {
  const lista = document.getElementById("myList");
  lista.innerHTML = "";
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const newClassCss = function () {
  const tr = document.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add("test");
  }
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = function (num) {
  let albero = " \n"; //creiamo la stringa "genitore" che conterrà le varie righe --> \n serve per andare a capo così il primo asterisco non mi appare accanto a "ES. 27"
  for (let i = 1; i <= num; i++) {
    let riga = ""; //qui creiamo le le righe in base al numero inserito dall'utente
    for (let j = 1; j <= i; j++) {
      riga += "*"; //qui aggiungiamo tanti asterischi in base alle righe
    }
    albero += riga + "\n"; //qui aggiungiamo la riga all'albero con un \n per andare a capo per ogni riga creata
  }
  return albero;
};

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = function (num) {
  let albero = " \n";
  for (let i = 1; i <= num; i++) {
    let riga = "";
    for (let j = 1; j <= i * 2 - 1; j++) {
      riga += "*";
    }
    albero += riga + "\n";
  }
  return albero;
};

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = function (num) {
  // Per prima cosa domandiamo se il numero inserito è minore o uguale a 1. In questo caso, se vero, il numero non potrà essere un numero primo, e quindi, restituiamo false.
  if (num <= 1) {
    return false;
  }

  // Andiamo avanti, creiamo un ciclo: questo ci servirà ad avanzare di +1 (partendo dal valore di 2) per i numeri che andremo ad utilizzare come divisore della divisione, fino ad arrivare al numero inserito. A cosa serve questo? Tramite questa divisione verifichiamo che --> se num è divisibile per i (= resto 0), allora non è primo.
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; //
    }
  }

  // Se non è divisibile per nessun numero, è primo
  return true;
};

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
console.log("Arrays & Oggetti, ES. 12: ", newestMovie(movies));
console.log("Arrays & Oggetti, ES. 13: ", countMovies(movies));
console.log("Arrays & Oggetti, ES. 14: ", onlyTheYears(movies));
console.log("Arrays & Oggetti, ES. 15: ", onlyInLastMillennium(movies));
console.log("Arrays & Oggetti, ES. 16: ", sumAllTheYears(movies));
console.log("Arrays & Oggetti, ES. 17: ", searchByTitle(movies, "Lords"));
console.log("Arrays & Oggetti, ES. 18: ", searchAndDivide(movies, "Lords"));
console.log("Arrays & Oggetti, ES. 19: ", removeIndex(2, movies));
console.log(
  "- Gli esercizi dal 20 al 26 non sono verificati tramite console.log, è stata solamente creata la funzione"
);
console.log("EXTRA, ES. 27: ", halfTree(6));
console.log("EXTRA, ES. 28: ", tree(3));

console.log("EXTRA, ES. 29: ", isItPrime(2));
