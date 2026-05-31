import React, { useEffect, useState } from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import { content } from '../data/content';

function Hero() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now() + Math.random();
      const newHeart = {
        id,
        left: Math.random() * 100 + '%',
        size: Math.random() * 20 + 10 + 'px',
        duration: Math.random() * 3 + 4 + 's',
      };
      setHearts((prev) => [...prev.slice(-15), newHeart]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('message');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-b from-[#FFF7F3] via-[#FFF0EC] to-[#FFE4DE]">
      {/* Background Floating Hearts */}
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart text-romantic-primary opacity-60"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDuration: h.duration,
          }}
        >
          ❤️
        </span>
      ))}

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-romantic-accent/40 animate-pulse font-script text-3xl select-none hidden md:block">
        {content.girlfriendNickname} ✨
      </div>
      <div className="absolute bottom-24 right-10 text-romantic-accent/40 animate-pulse font-script text-3xl select-none hidden md:block">
        {content.birthdayDate} 🌹
      </div>

      <div className="z-10 max-w-4xl flex flex-col items-center">
        {/* Date badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-romantic-secondary/30 text-xs md:text-sm font-semibold text-romantic-primary shadow-sm mb-6 animate-pulse">
          <Heart className="w-4 h-4 fill-romantic-primary text-romantic-primary" />
          <span>{content.birthdayDate}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif-elegant text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-romantic-text leading-tight mb-6">
          <span className="block text-romantic-text opacity-90">Happy Birthday,</span>
          <span className="block mt-2 font-script text-romantic-primary text-6xl md:text-8xl lg:text-9xl px-2">
            {content.girlfriendName}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-romantic-text/80 font-sans font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          {content.heroSubtitle}
        </p>

        {/* Breathing CTA Button */}
        <button
          onClick={handleScrollDown}
          className="btn-breathe inline-flex items-center gap-2.5 bg-romantic-primary hover:bg-[#d85c78] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 transform active:scale-95 group text-sm md:text-base cursor-pointer"
        >
          <span>Open Your Gift</span>
          <Heart className="w-4 h-4 fill-white text-white group-hover:scale-125 transition-transform duration-300" />
        </button>
      </div>

      {/* Bounce scroll down button */}
      <div
        className="absolute bottom-6 flex flex-col items-center gap-1 cursor-pointer animate-bounce text-romantic-primary opacity-80"
        onClick={handleScrollDown}
      >
        <span className="text-xs uppercase tracking-widest font-bold font-sans">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}

export default Hero;
