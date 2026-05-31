import React, { useState } from 'react';
import { Mail, MailOpen, Heart } from 'lucide-react';
import { content } from '../data/content';

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="love-letter" className="py-24 px-4 bg-gradient-to-b from-[#FFE4DE] to-[#FFF7F3] relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-romantic-secondary/20 rounded-full text-romantic-primary mb-4">
            <Heart className="w-6 h-6 fill-romantic-primary" />
          </div>
          <h2 className="font-serif-elegant text-3xl md:text-5xl font-bold text-romantic-text mb-4">
            Surat Cinta untuk {content.girlfriendNickname} 💌
          </h2>
          <p className="text-sm md:text-base text-romantic-text/70 max-w-md mx-auto font-medium">
            Sebuah pesan tulus yang kutulis khusus untukmu dari lubuk hatiku.
          </p>
        </div>

        {/* Envelope Container */}
        <div className="relative max-w-xl mx-auto">
          {!isOpen ? (
            /* Closed Envelope Card */
            <div 
              onClick={() => setIsOpen(true)}
              className="cursor-pointer bg-white border border-romantic-secondary/30 rounded-3xl p-8 md:p-12 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center group relative overflow-hidden"
            >
              {/* Decorative stripes like classic letters */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-romantic-primary via-romantic-secondary to-romantic-accent"></div>
              
              <div className="w-20 h-20 bg-romantic-bg rounded-full flex items-center justify-center text-romantic-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10" />
              </div>
              
              <h3 className="font-serif-elegant text-2xl font-bold text-romantic-text mb-2">
                Sebuah Surat Menantimu
              </h3>
              <p className="text-sm text-romantic-text/70 mb-8 font-medium">
                Klik untuk membuka amplop dan membaca pesan di dalamnya.
              </p>
              
              <button 
                className="bg-romantic-primary hover:bg-[#d85c78] text-white px-6 py-3 rounded-full font-bold text-sm md:text-base shadow-sm transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Buka Surat</span>
                <Heart className="w-4 h-4 fill-white text-white animate-pulse" />
              </button>
            </div>
          ) : (
            /* Open Letter Card */
            <div 
              className="bg-[#FCF9F6] border border-romantic-secondary/20 rounded-3xl p-8 md:p-12 shadow-lg relative text-left transition-all duration-500 animate-fade-in"
            >
              {/* Decorative top strip */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-romantic-primary via-romantic-secondary to-romantic-accent rounded-t-3xl"></div>

              {/* Envelope header */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-romantic-secondary/30">
                <div className="flex items-center gap-2 text-romantic-primary">
                  <MailOpen className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-bold font-sans">Surat Terbuka</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="text-xs text-romantic-primary font-bold hover:underline cursor-pointer"
                >
                  Tutup Surat
                </button>
              </div>

              {/* Letter content */}
              <div className="font-sans text-romantic-text/95 text-sm md:text-base leading-relaxed space-y-6 font-medium whitespace-pre-line">
                {content.loveLetter}
              </div>

              {/* Closing / Signature */}
              <div className="mt-12 pt-6 border-t border-romantic-secondary/20 flex flex-col items-end">
                <span className="text-xs text-romantic-text/50 font-semibold mb-1">Tertanda,</span>
                <span className="font-script text-3xl md:text-4xl text-romantic-primary">{content.fromName}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default LoveLetter;
