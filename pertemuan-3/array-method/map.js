// bikin array
const keluarga = ["Rahman", "Laili", "Ziyad"];

// tambahin kata2 bapak/ibu
const edit = keluarga.map(function (nama) {
  return `Bapak/Ibu ${nama}`;
});

console.log(edit);
console.log(keluarga);
