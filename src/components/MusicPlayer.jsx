import React, { useState, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showErrorTips, setShowErrorTips] = useState(false);
  const audioRef = useRef(null);

  // Path default lagu romantis
  const musicPath = "/music/love-song.mp3";

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasError(false);
          setShowErrorTips(false);
        })
        .catch((err) => {
          console.warn("Gagal memutar audio. Pastikan file love-song.mp3 sudah ditaruh di folder public/music/", err);
          setHasError(true);
          setShowErrorTips(true);
          // Matikan tips setelah beberapa detik agar tidak mengganggu
          setTimeout(() => setShowErrorTips(false), 8000);
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 select-none">
      {/* Tooltip bantuan */}
      <span className="hidden sm:inline-block bg-white/90 backdrop-blur-md text-romantic-text text-xs font-semibold px-3 py-1.5 rounded-full border border-romantic-secondary/35 shadow-md">
        {isPlaying ? "Mendengarkan Musik 🎵" : "Putar Lagu Romantis? 💌"}
      </span>

      {/* Tag Audio Tersembunyi */}
      <audio
        ref={audioRef}
        src={musicPath}
        loop
        onError={() => {
          setHasError(true);
        }}
      />

      {/* Tombol Kontrol Musik */}
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-lg transition-all duration-500 cursor-pointer transform active:scale-90 ${
          isPlaying 
            ? 'bg-romantic-primary text-white animate-spin [animation-duration:8s]' 
            : 'bg-white text-romantic-primary hover:bg-romantic-bg'
        }`}
        title={isPlaying ? "Jeda Musik" : "Putar Musik"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5 text-romantic-primary" />
        )}
      </button>

      {/* Petunjuk pop-up jika file musik belum dimasukkan */}
      {showErrorTips && (
        <div className="absolute right-0 bottom-16 bg-white border border-romantic-secondary/30 rounded-2xl p-4 shadow-2xl w-64 text-left animate-fade-in z-50">
          <button 
            onClick={() => setShowErrorTips(false)}
            className="absolute top-2 right-2 text-romantic-text/40 hover:text-romantic-text font-bold text-xs"
          >
            ✕
          </button>
          <p className="text-xs text-romantic-text font-bold mb-1.5 flex items-center gap-1.5">
            <Music className="w-4 h-4 text-romantic-primary" />
            Tips Musik Latar:
          </p>
          <p className="text-[10px] leading-relaxed text-romantic-text/80 font-medium">
            Taruh file lagu berformat <strong>.mp3</strong> Anda di dalam folder <code>public/music/</code> dan beri nama <code>love-song.mp3</code> untuk mengaktifkan pemutar musik ini! ❤️
          </p>
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
