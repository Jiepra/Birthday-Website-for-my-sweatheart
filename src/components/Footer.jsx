import React from 'react';
import { Heart } from 'lucide-react';
import { content } from '../data/content';

function Footer() {
  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-[#FFF0EC] to-[#FFE4DE] border-t border-romantic-secondary/15 text-center relative overflow-hidden">
      <div className="max-w-md mx-auto relative z-10">
        {/* Decorative branding */}
        <div className="flex justify-center items-center gap-1.5 text-romantic-primary mb-4">
          <Heart className="w-5 h-5 fill-romantic-primary text-romantic-primary animate-pulse" />
          <span className="font-script text-2xl select-none">Forever & Always</span>
          <Heart className="w-5 h-5 fill-romantic-primary text-romantic-primary animate-pulse" />
        </div>

        <h3 className="text-base md:text-lg font-serif-elegant font-bold text-romantic-text mb-2">
          {content.girlfriendNickname} & {content.fromName}
        </h3>

        <p className="text-xs md:text-sm text-romantic-text/60 font-sans font-medium mb-6">
          {content.closingText}
        </p>

        <div className="text-[10px] uppercase tracking-widest text-romantic-text/40 font-bold font-sans">
          © 2026 • Made with love by {content.fromName}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
