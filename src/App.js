import { useEffect, useRef } from "react";
import "./App.css";
import Basement from "./components/basement/Basement";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Inter from "./components/intersect/Inter";
import Merch from "./components/merch/Merch";
import Navbar from "./components/navbar/Navbar";
import Resource from "./components/resources/Resource";
import "./normalize.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const appRef = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    const element = appRef.current;

    tl.from(element.querySelector(".heading"), {
      opacity: 0,
      x: 200,
      duration: 0.8,
    })
      .from(element.querySelector(".hero-items"), {
        opacity: 0,
        y: -200,
        duration: 0.5,
      })
      .from(element.querySelector(".hero-wrapper2"), {
        opacity: 0,
        y: 200,
        duration: 0.5,
      });
  }, []);

  useEffect(() => {
    const element = appRef.current;
    tl.from(element.querySelectorAll(".inter-box"), {
      opacity: 0,
      y: 200,
      duration: 2,
      stagger: 0.4,
    });
  }, []);

  return (
    <div className="app" ref={appRef}>
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
