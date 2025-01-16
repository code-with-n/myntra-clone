import { useState } from "react";
import Footer from "./components/footer/footer";
import Head from "./components/header/head/head";
import Hero from "./components/hero/hero";
import Main from "./components/hero/hero";
import Section from "./components/section/section";
import Container from "./container";
import Bag from "./components/bag/bag";
import { Outlet } from "react-router-dom";

function App() {

 const click = false;
  return (
    <>
      <Head></Head>
      {/* <Main></Main> */}

      {/* <Container>
        <Hero />

        <Section></Section>
     

      </Container> */}
      {/* <Container></Container> */}
        <Outlet/>
        
        <Footer></Footer>
    </>
  );
}

export default App;
