import React from 'react';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Social from './components/socialNav';
import About from './components/aboutme';
import Me from './components/me';
import MyCity from './components/myCity';
import ImgSlider from './components/slider';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <Banner/>
      <Social/>
      <About/>
      <Me/>
      <hr className="bg-dark"/>
      <MyCity/>
      <hr className="bg-dark "/>
      <div className=" container-fluid mt-5 mb-5 p-5 carousel body">
        <h1 className="title mt-5">Projects</h1>
        <ImgSlider/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
