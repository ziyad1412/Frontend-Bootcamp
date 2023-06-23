// panggil data pake import
import users from "./data.mjs";

// bikin fungsi index
const index = function () {
  console.log(users);
};

// bikin fungsi tambah data
const store = function (user) {
  users.push(user);
};

// kirim data menggunakan export
export { index, store };
