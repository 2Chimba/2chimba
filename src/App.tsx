import { Carts } from "./components/carts";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Interrior } from "./components/interrior";
import { Opening } from "./components/opening";
import { Video } from "./components/video";

function App() {
  return (
    <>
      <Header />
      <Video />
      <main className="flex flex-col w-full overflow-hidden items-center">
        <section className="flex flex-col items-center w-full max-w-440 px-[10%]">
          <Opening />
        </section>
        <Interrior />
        <Carts />
      </main>
      <Footer />  
    </>
  );
}

export default App;

