import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { content } from '../data/content';

function BirthdayMessage() {
  return (
    <section id="message" className="py-24 px-4 bg-gradient-to-b from-[#FFE4DE] to-[#FFF7F3] relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Floating Sparkles and Hearts */}
        <div className="flex justify-center items-center gap-2 mb-6 text-romantic-primary">
          <Sparkles className="w-5 h-5 animate-pulse text-romantic-accent" />
          <Heart className="w-8 h-8 fill-romantic-primary text-romantic-primary animate-bounce" />
          <Sparkles className="w-5 h-5 animate-pulse text-romantic-accent" />
        </div>

        <h2 className="font-serif-elegant text-3xl md:text-5xl font-bold text-romantic-text mb-6">
          Selamat Hari Lahir, Sayang! 🎂
        </h2>

        {/* Message Card Container */}
        <div className="bg-white/60 backdrop-blur-md border border-romantic-secondary/30 p-8 md:p-12 rounded-3xl shadow-sm relative hover:shadow-md transition-shadow duration-500 max-w-2xl mx-auto">
          {/* Card borders/decors */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-romantic-primary/30 rounded-tl-md"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-romantic-primary/30 rounded-tr-md"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-romantic-primary/30 rounded-bl-md"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-romantic-primary/30 rounded-br-md"></div>

          <p className="font-sans text-romantic-text/90 text-base md:text-lg leading-relaxed font-medium">
            "{content.shortMessage}"
          </p>

          <div className="mt-8 font-script text-3xl md:text-4xl text-romantic-primary select-none">
            — {content.fromName}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BirthdayMessage;
