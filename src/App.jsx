import React, { useRef, useState } from "react";

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="h-screen w-full bg-[url('/catto.png')] bg-cover flex items-center justify-center">

      <div className="bg-black/40 backdrop-blur-md rounded-3xl w-[1200px] border border-white/20 overflow-hidden">

        {/* 🔥 HEADER */}
        <div className="relative p-6 flex items-center justify-center overflow-hidden">

          {/* GIF (ARTIK PEMBE DEĞİL) */}
          <img
            src="/pinksparkles.gif"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />

          {/* TEXT */}
          <h1 className="relative text-xl font-pixel text-white tracking-wider z-10 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
            DILAN TOK
          </h1>

          <div className="absolute right-4 top-4 z-10 text-xl">
            🍊
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 grid grid-cols-3 gap-6 text-white">

          {/* LEFT */}
          <div className="flex flex-col gap-6">

            {/* NAV */}
            <div className="bg-white/10 p-4 rounded-xl transition duration-300 hover:shadow-[0_0_20px_rgba(255,105,180,0.4)] hover:-translate-y-1">
              <h2 className="font-bold mb-3">Navigation</h2>

              <div className="flex flex-col gap-2">
                <button className="bg-white/10 p-2 rounded-lg transition hover:shadow-[0_0_12px_rgba(255,105,180,0.6)] hover:scale-105">🏠 Home</button>
                <button className="bg-pink-300/30 p-2 rounded-lg transition hover:shadow-[0_0_12px_rgba(255,105,180,0.6)] hover:scale-105">❤️ About</button>
                <button className="bg-white/10 p-2 rounded-lg transition hover:shadow-[0_0_12px_rgba(255,105,180,0.6)] hover:scale-105">📁 Projects</button>
                <button className="bg-white/10 p-2 rounded-lg transition hover:shadow-[0_0_12px_rgba(255,105,180,0.6)] hover:scale-105">📄 Resume</button>
                <button className="bg-white/10 p-2 rounded-lg transition hover:shadow-[0_0_12px_rgba(255,105,180,0.6)] hover:scale-105">📬 Contact</button>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="bg-white/10 p-4 rounded-xl transition duration-300 hover:shadow-[0_0_20px_rgba(255,105,180,0.4)] hover:-translate-y-1">
              <h2 className="font-bold mb-3">Socials</h2>

              <div className="flex flex-col gap-2 text-sm">
                <a href="https://github.com/dilantok">GitHub</a>
                <a href="https://www.linkedin.com/in/dilan-t-6bb922293/">LinkedIn</a>
                <a href="https://www.pixilart.com/ddln">Pixilart</a>
              </div>
            </div>

          </div>

          {/* CENTER */}
          <div className="flex flex-col gap-6">

            <div className="bg-white/10 p-4 rounded-xl transition duration-300 hover:shadow-[0_0_20px_rgba(255,105,180,0.4)]">
              <h2 className="font-bold mb-2">About Me</h2>
              <p className="text-sm text-gray-200">
                Computer Science & AI student passionate about robotics and intelligent systems.
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl h-[250px] overflow-y-auto transition duration-300 hover:shadow-[0_0_20px_rgba(255,105,180,0.4)]">
              <h2 className="font-bold mb-2">Technical Skills</h2>

              <p className="text-sm text-gray-200">
                <span className="text-pink-300">Programming:</span><br />
                Python, C++, Java, SQL <br /><br />

                <span className="text-pink-300">Embedded:</span><br />
                Arduino, ESP32, OLED Displays <br /><br />

                <span className="text-pink-300">Tools:</span><br />
                Unity, Git
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            <div className="bg-white/10 p-4 rounded-xl h-[250px] overflow-y-auto transition duration-300 hover:shadow-[0_0_20px_rgba(255,105,180,0.4)]">
              <h2 className="font-bold mb-2">Currently</h2>

              <ul className="text-sm space-y-2">
                <li>• Second Year Computer Science and AI student</li>
                <li>• Learning Italian 🇮🇹 & Japanese 🇯🇵</li>
                <li>• I practice pixel art  and traditional art.</li>
                <li>• Building small robots for fun, trying to be better at robotics. ⚙️</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-xl flex justify-center">
              <img
                src="/music.png"
                onClick={toggleMusic}
                className={`w-32 h-32 rounded-xl cursor-pointer transition duration-300
                hover:scale-110 hover:shadow-[0_0_25px_rgba(255,105,180,0.7)]
                ${isPlaying ? "ring-2 ring-pink-400 shadow-[0_0_30px_rgba(255,105,180,0.9)]" : ""}
                `}
              />
            </div>

          </div>

        </div>

        <audio ref={audioRef} src="/music.mp3" />

      </div>

    </div>
  );
};

export default App;