// buat objek
const user = {
  name: "Ziyad",
  age: 22,
  major: "Informatika",
};

// simpen ke variable menggunakan destruct
const { age, major, name } = user;

console.log(age, name, major);
