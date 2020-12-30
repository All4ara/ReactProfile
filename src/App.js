import React from 'react';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Social from './components/socialNav';
import About from './components/aboutme';

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <Banner/>
      <Social/>
      <About/>

    </div>
  );
}

export default App;
