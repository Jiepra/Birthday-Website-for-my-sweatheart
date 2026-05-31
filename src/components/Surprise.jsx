import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Heart } from 'lucide-react';
import { content } from '../data/content';

function Surprise() {
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpenSurprise = () => {
    setHasOpened(true);

    // Blast romantic colors confetti
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#E76F8A', '#F7B7C3', '#D4A373']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#E76F8A', '#F7B7C3', '#D4A373']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <section id="surprise" className="py-24 px-4 bg-gradient-to-b from-[#FFF7F3] to-[#FFF0EC] text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto z-10 relative">
        {/* Title */}
        <h2 className="font-serif-elegant text-3xl md:text-5xl font-bold text-romantic-text mb-6">
          Kejutan Kecil untuk {content.girlfriendNickname} 🎁
        </h2>
        <p className="text-sm md:text-base text-romantic-text/70 mb-12 max-w-md mx-auto font-medium">
          Aku punya kejutan kecil yang kusiapkan untukmu. Klik tombol di bawah untuk membukanya!
        </p>

        {/* Surprise Interaction box */}
        <div className="min-h-[250px] flex items-center justify-center">
          {!hasOpened ? (
            /* Closed Box Button */
            <button
              onClick={handleOpenSurprise}
              className="btn-breathe bg-romantic-primary hover:bg-[#d85c78] text-white p-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-3 cursor-pointer border-4 border-white/50 w-48 h-48"
            >
              <Gift className="w-12 h-12 animate-bounce" />
              <span className="font-bold text-sm tracking-wider uppercase font-sans">Buka Kado</span>
            </button>
          ) : (
            /* Surprise Content Revealed */
            <div className="bg-white/80 backdrop-blur-md border border-romantic-secondary/30 p-8 md:p-12 rounded-3xl shadow-xl max-w-xl mx-auto animate-fade-in relative overflow-hidden transition-all duration-500">
              {/* Floating Hearts background */}
              <div className="absolute top-2 left-2 text-romantic-primary/10 animate-pulse text-2xl select-none">❤️</div>
              <div className="absolute bottom-2 right-2 text-romantic-primary/10 animate-pulse text-2xl select-none">❤️</div>

              <div className="w-16 h-16 bg-romantic-secondary/20 rounded-full flex items-center justify-center text-romantic-primary mx-auto mb-6">
                <Heart className="w-8 h-8 fill-romantic-primary text-romantic-primary" />
              </div>

              <h3 className="font-serif-elegant text-2xl md:text-3xl font-bold text-romantic-primary mb-4">
                Surprise! ✨💖
              </h3>
              
              <p className="text-base md:text-lg text-romantic-text/90 leading-relaxed font-semibold italic mb-8 px-2">
                "{content.surpriseMessage}"
              </p>

              {/* Re-celebrate button */}
              <button 
                onClick={handleOpenSurprise}
                className="bg-romantic-secondary/30 hover:bg-romantic-secondary/50 text-romantic-primary px-5 py-2.5 rounded-full font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Rayakan Lagi 🎉
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Surprise;
