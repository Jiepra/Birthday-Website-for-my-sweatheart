import React from 'react';
import { Camera } from 'lucide-react';
import { galleryItems } from '../data/gallery';

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 bg-gradient-to-b from-[#FFF7F3] to-[#FFF0EC]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-romantic-secondary/20 rounded-full text-romantic-primary mb-4">
            <Camera className="w-6 h-6" />
          </div>
          <h2 className="font-serif-elegant text-3xl md:text-5xl font-bold text-romantic-text mb-4">
            Galeri Kenangan Kita 📸
          </h2>
          <p className="text-sm md:text-base text-romantic-text/70 max-w-md mx-auto">
            Setiap gambar menyimpan ribuan tawa, cerita, dan kebahagiaan yang kita ukir bersama.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-romantic-secondary/15 flex flex-col transform hover:-translate-y-2"
            >
              {/* Photo Container */}
              <div className="relative overflow-hidden aspect-[4/3] bg-romantic-bg">
                <img
                  src={item.image}
                  alt={item.caption || "Kenangan Indah"}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-xs font-semibold tracking-wider font-sans">
                    Memory #{idx + 1}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex-grow flex items-center justify-center text-center bg-white">
                <p className="text-sm md:text-base text-romantic-text/80 font-medium leading-relaxed italic">
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
