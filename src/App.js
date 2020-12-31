import React from 'react';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Social from './components/socialNav';
import About from './components/aboutme';
import Me from './components/me';
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
    </div>
  );
}

export default App;
