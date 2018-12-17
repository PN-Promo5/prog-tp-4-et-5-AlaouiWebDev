//exo 1
let character = ["goku", "vegeta", "piccolo", "trunks", "krillin"] // tableau chaîne

function characterdisplay(sequence) { //tableau
  let i = 0 // déclaration variable intermédiaire
  let currentElement // déclaration élèment courant
  while (i < character.length) { // parcours du tableau en partant de la fin
    currentElement = sequence[i] // élèment actuel est égal à un élèment du tableau
    i = i + 1 // ou i++ // incrémentation
    console.log(currentElement) //affichage
  }
}
// characterdisplay(character)


//exo 2
let letter = ["a", "b", "c", "d", "e", "f", "g"] // tableau de chaine

function displayFirstTenElements(sequence) { // tableau
  console.log("exo 2") // affichage
  let i = 0 // déclaration variable intermédiaire
  let currentElement // déclaration élèment courant
  while (i < 10) { // parcours les élèments
    currentElement = sequence[i] // élèment actuel est égal à un élèment du tableau
    i = i + 1 // incrémentation
    if (currentElement == undefined) { //pour vérifier si l'élèment courant est vide ou pas
      return // met fin à la fonction
    }
  }
}
displayFirstTenElements(letter) //


//exo 3
let letter2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]

function displayLastTenElements(sequence) {
  let i = sequence.length - 1 // i est égal l'index du dernier élèment -1 vu que l'on part de 0
  let currentElement
  while (i > sequence.length - 11) { // parcours le tableau à l'envers
    currentElement = sequence[i]
    i = i - 1
    if (currentElement == undefined) {
      return
    }
  }
}
console.log(displayLastTenElements(letter2)) // affichage


//exo 4
// let number = [1, 2, 3, 4, 5]

function numberDisplay(sequence) {
  let i = 0
  let currentElement
  let sequence2 = []
  while (i < sequence.length) {
    currentElement = sequence[i]
    sequence2.push(currentElement+1) // rajoute à la fin du tableau actuel +1
    i = i + 1
  }
  return sequence2 // met fin a la fonction et renvoi le tableau
}

//console.log(numberDisplay(number))

//exo 5
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numberEvenOddDisplay(sequence) {
  let i = 0
  let currentElement
  while (i < sequence.length) {
    currentElement = sequence[i]
    i = i + 1
    if (currentElement % 2 == 0){ // verifie si le chifre est pair
      console.log(currentElement +" pair") // si oui affiche si le chiffre esr pair
    }
    else{
      console.log(currentElement+" impair")
    }
  }
}

numberEvenOddDisplay(number)

//exo 6

function sumNumberDisplay(sequence) {
  let i = 0
  let currentElement
  let sum = 0 // stocker la somme des valeurs
  while (i <sequence.length) {
    currentElement = sequence[i]
    i = i + 1
    sum +=currentElement // rajoute valeur actuel a la somme
  }
  return sum // renvoi la somme
}

console.log(sumNumberDisplay(number))

//exo 7

function numberevenelements(sequence) {
  let i = 0
  let currentElement
  let number = 0
  while (i <sequence.length) {
    currentElement = sequence[i]
    i = i + 1
    if (currentElement % 2 == 0){ // verifie si le nb est pair
    number =number+1
    }
  }
  return number // renvoi le nombre
}

console.log(numberevenelements(number))


//exo 8

function maximumValue(sequence) {
  let i = 0
  let currentElement
  let max = 0 //
  while (i <sequence.length) {
    currentElement = sequence[i]
    i = i + 1
    if (currentElement>max) // si l'élèment courant supérieur aux maximum
    {
      max=currentElement; // remplace macimum par l'élèment courant
    }
  }
  return max // renvoi au max
}

console.log(maximumValue(number))

//exo 9

function maximumAndMinimumValue (sequence) {
  let i = 0
  let currentElement
  let max = 0
  let min = 0 //
  while (i <sequence.length) {
    currentElement = sequence[i]
    i = i + 1
    if (currentElement>max)
    {
      max=currentElement;
    }
    if (currentElement<min) // si inférieur à élèment courant
    {
      min=currentElement; // minimum égal élèment courant
    }
  }
  return min + ' ' + max // renvoi la concaténation du min et du max
}

console.log(maximumAndMinimumValue(number))


//exo 10

let number2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function order (sequence) {
  let i = 1
  let growing = true // booléen croissant ou pas
  let currentElement
  let previousElement = sequence[0]
  while (i <sequence.length) { // parcours le tableau
    currentElement = sequence [i]
    i = i + 1
    if ( currentElement<previousElement)
    {
      growing=false // croissant passe à faux
    }
    previousElement = currentElement // élèment précèdent est égal à élèment courant
  }
  return growing // renvoi croissant
}

console.log(order(number2))


//exo 11

//exo 12
function reversenumber (sequence) {
  let i = sequence.length -1
  let currentElement
  let array = [] // déclaration tableau intermédiaire
  while (i >= 0) {
    currentElement = sequence[i]
    i = i - 1 // décrémentation de -1
    array.push(currentElement) // rajoute l'élèment courant au tableau intermédiaire
    }
  return array // renvoi le tableau intermédiaire
}

console.log(reversenumber(number))

//exo 13

function mergeTable (sequence,sequence2) {
  let i = 0
  let currentElement
  let array = sequence
  while (i < sequence2.length) {
    currentElement = sequence2[i]
    i = i + 1
    array.push(currentElement)
    }
  return array
}

console.log(mergeTable(number,number2))

//exo 14

function vowell (sequence) {
  let i = 0
  let currentElement
  let array = []
  while (i <sequence.length) {
    currentElement = sequence[i]
    i = i + 1
    if (currentElement[0]== "a" || currentElement[0]== "e" || currentElement[0]== "i" || currentElement[0]== "o" ||
    currentElement[0]== "u" || currentElement[0]== "y") // verifie si élèment courant commence par une voyelle
    {
      array.push(currentElement) // ajoute él courant au tableau
    }
    }
  return array
}

console.log(vowell(letter))

// exo 15

function palindrome(sequence){
    let i = sequence.length -1 // initialise la variable intermédiare
    let currentElement
    let string = "" // déclare une chaine vide
    while (i >= 0) {
      currentElement = sequence[i]
      i = i - 1
      string+=currentElement // rajoute element courant à la chaine vide
      }
    if (sequence==string){
    return true // renvoi vrai
    }

    else {
    return false // renvoi faux
  }
  }

  console.log(palindrome("radar"))
