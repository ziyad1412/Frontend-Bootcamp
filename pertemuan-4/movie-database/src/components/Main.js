import Hello from "./Hello";
/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */
const Main = () => {
  return (
    <main>
      {/**
       * Mengirim props ke component Hello.
       * nama props: name
       */}
      <Hello name="Aufa" />
      <Hello name="Asnur" />
      <Hello name="Ziyad" />
      <Hello name="Eka" />
      <Hello name="Sabiq" />
    </main>
  );
};

export default Main;
