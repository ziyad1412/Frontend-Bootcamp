// Buat array data berupa object
const mentes = [
  {
    nama: "Ziyad",
    age: 22,
  },
  {
    nama: "Alifah",
    age: 19,
  },
  {
    nama: "Hasna",
    age: 20,
  },
];
// tampilin data berdasarkan kondisi
const foundMente = mentes.find(function (mente) {
  return mente.age > 19;
});

const filterMente = mentes.filter(function (mente) {
  return mente.age > 19;
});

// console.log(foundMente);
console.log(filterMente);
