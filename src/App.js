import React from 'react';
import './App.scss';
import Hero from './components/hero/Hero';
import Instagram from './components/instagram/Instagram';
import Namaste from './components/namaste/Namaste';
import Retreatinfo from './components/retreatinfo/Retreatinfo';
import Info from './components/info/Info';
import Breathe from './components/breathe/Breathe';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import Cours from './components/cours/Cours';
import Podcast from './components/podcast/Podcast';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import ContactForm from './components/contact/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Breathe/>
      <Namaste/>
      <Cours/>
      <Info/>
      <Retreatinfo/>
      <Slider/>
      <Gallery/>
      <Instagram/>
      <Podcast/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
