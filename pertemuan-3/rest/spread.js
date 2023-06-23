// Bikin array
const mente = ["Hasna", "Alifah"];
// array 2 spread
const newMente = [...mente, "Yuyun", "Diva"];

console.log(newMente);

// buat objek
const user = {
  name: "Ziyad",
  age: 22,
  major: "Informatika",
};

const newUser = {
  ...user,
  hobby: "read",
};

console.log(newUser);
