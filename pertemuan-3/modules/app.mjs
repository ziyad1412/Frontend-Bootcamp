// panggil data pake import
import { index, store } from "./controller.mjs";

const main = function () {
  const user = { name: "Ziyad", age: 22 };

  store(user);
  index();
};

main();
