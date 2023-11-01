let knyguKatalogas = 
   {
      grozineLiteratura: [
         {
            isbm: 'GR1236K',
            leidimoMetai: 2018,
            pavadinimas: "Mano mintys debesyse",
            puslapiuSkaicius: 350         
         },{
            isbm: 'GR1555K',
            leidimoMetai: 1933,
            pavadinimas: "Altoriu seselyje",
            puslapiuSkaicius: 200
         }, {
            isbm: 'GR999K',
            leidimoMetai: 2023,
            pavadinimas: "Apie kazka grazaus",
            puslapiuSkaicius: 170
         }, {
            isbm: 'GR9ASDAF',
            leidimoMetai: 1950,
            pavadinimas: "Titanikas",
            puslapiuSkaicius: 800
         }
      ],
      fantastineLiteratura: [
         {
            isbm: 'wC9954',
            leidimoMetai: 2015,
            pavadinimas: "Witcher",
            puslapiuSkaicius: 400
         }, {
            isbm: 'GRASASDK',
            leidimoMetai: 2023,
            pavadinimas: "Harris poteris",
            puslapiuSkaicius: 500
         }, {
            isbm: 'GRSDASD',
            leidimoMetai: 2000,
            pavadinimas: "Avataras",
            puslapiuSkaicius: 650
         }
      ],
      mokymosiLiteratura: [
         {
            isbm: 'ASDGASD',
            leidimoMetai: 2020,
            pavadinimas: "12 Gyvenimo taisykliu",
            puslapiuSkaicius: 450
         }, {
            isbm: 'ASD15152',
            leidimoMetai: 2017,
            pavadinimas: "Rich dad poor dad",
            puslapiuSkaicius: 350
         }, {
            isbm: 'G122248',
            leidimoMetai: 2020,
            pavadinimas: "Save kuriancios smegenys",
            puslapiuSkaicius: 650
         }, {
            isbm: 'SA22SD28',
            leidimoMetai: 2023,
            pavadinimas: "Penkios meiles kalbos",
            puslapiuSkaicius: 300
         }, {
            isbm: 'SVE54856',
            leidimoMetai: 2018,
            pavadinimas: "Sveikas kunas",
            puslapiuSkaicius: 250
         }
      ]
   };

console.log('Knygu katalogas');

// for(let knyga in knyguKatalogas){
//    if(knyga === 'grozineLiteratura'){
//       console.log(`Grozine Literatura (${(knyguKatalogas[knyga]).length}) knygos`);
//       // console.log((knyguKatalogas[knyga]).length);
//    } else if (knyga === 'fantastineLiteratura') {
//       console.log(`Fantastine Literatura (${(knyguKatalogas[knyga]).length}) knygos` );
//       // console.log((knyguKatalogas[knyga]).length);
//    }else if (knyga === 'mokymosiLiteratura'){
//       console.log(`Mokimoksi Literatura (${(knyguKatalogas[knyga]).length}) knygos`);
//       // console.log((knyguKatalogas[knyga]).length);
//    }
// }

// for(let knyga in knyguKatalogas){
//    console.log((knyguKatalogas[knyga]).length);
//    console.log(knyga);
// }


// ============== geras============
function knyguIsvedimas(norimaKnyga) {
   for (let knyga of norimaKnyga) {
      console.log('--------');
      for (let knygosInfo in knyga) {
         if (knygosInfo === 'isbm') {
            console.log(`ISBM : ${knyga[knygosInfo]}`);
         } else if (knygosInfo === 'leidimoMetai') {
            if (knyga[knygosInfo] === 2023) {
               console.log(`Leidimo metai : ${knyga[knygosInfo]} (nauja knyga)`);
            } else {
               console.log(`Leidimo metai : ${knyga[knygosInfo]}`);
            }
         } else if (knygosInfo === 'pavadinimas') {
            console.log(`Pavadinimas : ${knyga[knygosInfo]}`);
         } else if (knygosInfo === 'puslapiuSkaicius') {
            console.log(`Puslapiu skaicius : ${knyga[knygosInfo]}`);
         }
      }
   }
}

function knyguZanras(zanras) {
   for (let knyga in zanras) {
      if (knyga === 'grozineLiteratura') {
         console.log('======================');
         console.log(`Grozine Literatura (${(zanras[knyga]).length}) knygos`);
         knyguIsvedimas(knyguKatalogas.grozineLiteratura);
         
      } else if (knyga === 'fantastineLiteratura') {
         console.log('======================');
         console.log(`Fantastine Literatura (${(zanras[knyga]).length}) knygos`);
         knyguIsvedimas(knyguKatalogas.fantastineLiteratura);
         
      } else if (knyga === 'mokymosiLiteratura') {
         console.log('======================');
         console.log(`Mokimoksi Literatura (${(zanras[knyga]).length}) knygos`);
         knyguIsvedimas(knyguKatalogas.mokymosiLiteratura);
      }
   }
}

console.log(knyguZanras(knyguKatalogas));


// console.log(knyguIsvedimas(knyguKatalogas.grozineLiteratura));
// console.log(knyguIsvedimas(knyguKatalogas.fantastineLiteratura));
// console.log(knyguIsvedimas(knyguKatalogas.mokymosiLiteratura));

