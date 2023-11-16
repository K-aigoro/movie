import Header from "./pages/header";
import "swiper/css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./pages/Banner";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import BackToTopBtn from "./component/BackToTopBtn";
import React, { useState, useEffect } from 'react';



function App() {
const [scroll, setScroll] = useState(0);

useEffect(( )=> {
  window.addEventListener('scroll', () =>{
    setScroll(window.scrollY);
  });
  return () => {
    window.removeEventListener('scroll', () => {
      setScroll(window.scrollY)
    });
  };
}, [scroll]);
  return (
    <>
      <Header scroll={scroll} />
      <Banner />
      <Main />
      <Footer />
      <BackToTopBtn  scroll={scroll}/>
    </>
  );
}

export default App;
