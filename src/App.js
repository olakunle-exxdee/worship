import "./App.css";
import Basement from "./components/basement/Basement";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Inter from "./components/intersect/Inter";
import Merch from "./components/merch/Merch";
import Navbar from "./components/navbar/Navbar";
import Resource from "./components/resources/Resource";
import "./normalize.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Inter />
      <Merch />
      <Basement />
      <Resource />
      <Footer />
    </div>
  );
}

export default App;
