// buat object {}, key:value
const user = {
  nama: "Ziyad",
  umur: 22,
  jurusan: "Informatika",
};

console.log(user.nama);
console.log(user["jurusan"]);

// looping data object
for (const kunci in user) {
  console.log(` Key : ${kunci} Value : ${user[kunci]} `);
}
