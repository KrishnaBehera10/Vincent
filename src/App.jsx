import css from "../src/App.module.css";
import Design from "./components/Design";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className={css.main}>
      <Nav />
      <Header />
      <Design />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
