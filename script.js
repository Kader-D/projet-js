//inverser une chaine
/*
.split(''): convertit la chaine en tableau.
.reverse(): inverse l'ordre des éléments.
.join(): joint les éléments.
*/ 
function manip(a) {
    return a.split('').reverse().join('');
}
let inv = manip("BIENVENUE!");
console.log(inv); 

//compter les caractères

function compte(a) {
    return a.length;
}
console.log(compte("bienvenue"))

//mettre les mots en majuscule

function maj(a) {
    return a.toUpperCase();
}
console.log(maj("merci"))

//recherche max 

function findMax(array1) {
    return Math.max(...array1);
}
const array1 = [1, 3, 2];
console.log(findMax(array1));

//recherche min

function findMin(array2) {
    return Math.min(...array2);
}
const array2 = [6, 4, 5];
console.log(findMin(array2))

//somme du tableau

function somme(array) {
    return array[0]+array[1]+array[2]+array[3]
}
let array = [3,8,9,4]
console.log(somme(array))

//filtrer le tableau

function filtre(arr) {
    return arr.filter(element => element > 10);
}
let tab = [23, 12, 5, 32, 6, 4]
let arrayFiltre = filtre(tab)
console.log(arrayFiltre)

//fonction pour factorielle

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(2))








