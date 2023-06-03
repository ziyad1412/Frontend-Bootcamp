// fungsi expression
const cekUmur = function (lahir = 2003) {
  const year = 2023;
  const age = year - lahir;

  return age;
};

// arrow function
// const cekUmur = (lahir) => {
//   return 2023 - lahir;
// };

// const cekUmur = (lahir) => 2023 - lahir;

console.log(cekUmur());
console.log(cekUmur(2001));
