let students = [
   /*
   Parasykite programa, kurios pagalba galima atlikti stundetu paieska pagal varda. Issokusiam prompt lange ivedamas studento vardas.
   Jeigu studentas surandamas, cionsole isvedami jo duomenys.
   Jeigu nerandamas, isvedamas uzrasas: Tokio studento nera. 
   Paieskai realizuoti galite naudoti Js funkcija includes
   */
   
   {
      id:1,
      firstName:"Tadas",
      lastName: "Tadauskas",
      email: "tadas.tadauskas@stud.kitm.lt",
      group:"students",
      marks:[
         {
            subject: 'Programing',
            mark:8
         },
         {
            subject: 'It',
            mark: 4
         },
         {
            subject: 'Math',
            mark: 7
         }
      ]
   },
   {
      id: 2,
      firstName: "Ieva",
      lastName: "Ievaite",
      email: "ieva.ievaite@stud.kitm.lt",
      group: "students",
      marks: [
         {
            subject: 'Programing',
            mark: 8
         },
         {
            subject: 'It',
            mark: 4
         },
         {
            subject: 'Math',
            mark: 7
         }
      ]
   }, {
      id: 3,
      firstName: "Migle",
      lastName: "Miglaite",
      email: "migle.miglaite@stud.kitm.lt",
      group: "students",
      marks: [
         {
            subject: 'Programing',
            mark: 7
         },
         {
            subject: 'It',
            mark: 4
         },
         {
            subject: 'Math',
            mark: 6
         }
      ]
   }, {
      id: 4,
      firstName: "Vardenis",
      lastName: "Vardauskas",
      email: "vardenis.vardauskas@stud.kitm.lt",
      group: "students",
      marks: [
         {
            subject: 'Programing',
            mark: 10
         },
         {
            subject: 'It',
            mark: 7
         },
         {
            subject: 'Math',
            mark: 4
         }
      ]
   }, {
      id: 5,
      firstName: "Tomas",
      lastName: "Tomauskas",
      email: "tomas.tomauskas@stud.kitm.lt",
      group: "students",
      marks: [
         {
            subject: 'Programing',
            mark: 9
         },
         {
            subject: 'It',
            mark: 5
         },
         {
            subject: 'Math',
            mark: 6
         }
      ]
   },
]

/* Isvesti studentus tokiu budu
Studentai:
----------------
Rokas
Rakauskas
rokas.rakauskas@stud.kitm.lt
Grupe: students
-----------------
...kitas studentas
*/
console.log('Studentu sarasas');
for( let student of students){
   console.log('----------------');
   for(let studentData in student){
      if(studentData ==='group'){
         console.log(`Grupe :${student[studentData]}`);
      }else{
         if(studentData=='marks'){
            console.log('Ivertinimai: ');
            for(marks of student[studentData]){
               console.log(`${marks.subject}:${marks.mark}`)
            }
         }
         console.log(student[studentData]);
      }
   }
}
