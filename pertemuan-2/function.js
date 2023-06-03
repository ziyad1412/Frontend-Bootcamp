function cekUmur(lahir) {
  const year = 2023;
  const age = year - lahir;

  return age;
}

// panggil fungsi
console.log(cekUmur(2001));
console.log(cekUmur(2003));
