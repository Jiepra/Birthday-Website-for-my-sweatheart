import React from 'react';
import Hero from './components/Hero';
import BirthdayMessage from './components/BirthdayMessage';
import Gallery from './components/Gallery';
import LoveLetter from './components/LoveLetter';
import Surprise from './components/Surprise';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Birthday Message Section */}
      <BirthdayMessage />

      {/* 3. Gallery Section */}
      <Gallery />

      {/* 4. Love Letter Section */}
      <LoveLetter />

      {/* 5. Surprise Section */}
      <Surprise />

      {/* 6. Footer Section */}
      <Footer />

      {/* Background Floating Music Player */}
      <MusicPlayer />
    </div>
  );
}

export default App;
