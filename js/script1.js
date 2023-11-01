let names = ['Jonas', 'Andrius','Ieva','Karolis']; //masyvas

names = names.join(','); // names tampa stringu 

names = names.split(',');

names.push('Giedrius'); // prideda i gala

names.pop(); //pasalina is glao

names.unshift('Kristina'); //prideda i prieki

names.shift(); // pasalina is priekio

names.splice(3,0,"Gintaras") // prideda pasirenkamoj vietoj

console.log(names); // isvedimas