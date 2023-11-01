// Funkcijos deklaravimas
function syHi(a){
   return a*2;
}

// Funkcijos call'inimas

console.log(syHi(5));

//Anonime
const calc = function(...numbers){
   return numbers.reduce((prev, current)=>prev*current)
}

console.log(calc());