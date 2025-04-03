const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// const specificClass = students.find ((item)=>{
//   return (item.id === 1)
// }).class;
// console.log(specificClass)

// forma abbreviata
// const specificClass = students.find(item => item.name === 'Marco Lanci').class;

// console.log(specificClass)

const specificClass = students.find((item) => {
  return item.name == `Marco Lanci`
})

console.log(specificClass.class);