import React, { useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;

const links = [
  { label: "Resume", href: "#summary" },
  { label: "GitHub", href: "https://github.com/dilantok" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dilan-t-6bb922293/" },
  { label: "Pixilart", href: "https://www.pixilart.com/ddln" },
];

const skills = ["Python", "C++", "Java", "SQL", "Arduino", "ESP32", "Unity", "Git", "Pixel Art"];
const tabs = ["About Me", "Projects"];

const projects = [
  {
    title: "Study Companion Robot",
    meta: "ESP32, SH1106 OLED, Bluetooth, C/C++",
    text: "A small embedded study buddy built with an ESP32 and OLED display. I designed the menu navigation, button input, Pomodoro-style timer, Bluetooth timer control, and a playful fortune-telling mode for exam questions.",
    skills: ["Embedded C/C++", "Hardware prototyping", "Menu logic"],
  },
  {
    title: "Digital Cluedo Game",
    meta: "Unity, C#, team project",
    text: "A digital version of Cluedo built with a small team in Unity. I focused on the menu system, UI navigation, screen transitions, and player interaction flows while coordinating with teammates working on game logic and assets.",
    skills: ["Unity UI", "C# interactions", "Teamwork"],
  },
  {
    title: "Algshion",
    meta: "Hult Prize, sustainability, team lead",
    text: "An algae-based textile sustainability project focused on reducing textile waste through alternative materials. I co-founded and led the team, helped refine the pitch and business case, won the Ankara University round, and I am proud that we were selected among the top 6 teams at the Hult Prize Dubai Summit.",
    skills: ["Pitching", "Research", "Leadership"],
  },
  {
    title: "Raspberry Pi Cyberdeck",
    meta: "Raspberry Pi 3B+, hardware project",
    text: "A custom cyberdeck project I recently started to learn more about Raspberry Pi and portable hardware builds. So far, I have been getting comfortable with the Linux interface, learning how to write and run code on the Raspberry Pi, and setting up the display for the cyberdeck.",
    skills: ["Linux basics", "Raspberry Pi coding", "Display setup"],
  },
];

const App = () => {
  const audioRef = useRef(null);
  const sparkleRef = useRef(null);
  const sparkleTimeoutRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("About Me");

  const playSparkle = () => {
    if (!sparkleRef.current) return;

    window.clearTimeout(sparkleTimeoutRef.current);
    sparkleRef.current.pause();
    sparkleRef.current.currentTime = 1;
    sparkleRef.current.volume = 0.45;
    sparkleRef.current.play().catch(() => {});

    sparkleTimeoutRef.current = window.setTimeout(() => {
      if (!sparkleRef.current) return;
      sparkleRef.current.pause();
      sparkleRef.current.currentTime = 1;
    }, 1200);
  };

  const switchTab = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      playSparkle();
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const renderProjects = () => (
    <section className="project-scene">
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p className="project-meta">{project.meta}</p>
            <p>{project.text}</p>
            <div className="project-skills" aria-label={`${project.title} skills`}>
              {project.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  const renderHome = () => (
    <div className="portfolio-grid home-layout">
      <aside className="side-stack">
        <button
          className={`profile-player ${isPlaying ? "is-playing" : ""}`}
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <img src={`${BASE}music.png`} alt="Dilan profile" />
          <span>{isPlaying ? "playing" : "click me"}</span>
        </button>

        <section className="y2k-card skills-card">
          <h2>Technical Skills</h2>
          <p>
            <span className="skill-label">Programming:</span>
            <br />
            Python, C++, Java, SQL
          </p>
          <p>
            <span className="skill-label">Embedded:</span>
            <br />
            Arduino, ESP32, OLED Displays
          </p>
          <p>
            <span className="skill-label">Tools:</span>
            <br />
            Unity, Git
          </p>
        </section>
      </aside>

      <section className="content-stack">
        <section className="y2k-card wide-card" id="summary">
          <h2>Summary</h2>
          <p>
            Hi, I'm Dilan. I live and study in the UK, and I love building and creating things. Whether it's sketching,
            working with hardware, or exploring new technologies, I enjoy learning by making. I'm always curious and like
            taking on projects that help me develop new skills.
          </p>
          <p>
            Lately, I've also been learning the fundamentals of AI and studying new languages. Right now, I'm focusing on
            Italian and Japanese.
          </p>

        </section>

        <section className="y2k-card wide-card">
          <h2>Currently</h2>
          <p>
            I recently started building a cyberdeck to learn more about the Raspberry Pi. It began as a way to explore
            the hardware, but honestly, I also wanted an excuse to build one because I think they're incredibly cool. It's
            been a fun project that's taught me a lot so far.
          </p>
        </section>
      </section>

      <aside className="side-stack socials-stack">
        <nav className="main-links" aria-label="Portfolio links">
          <span className="socials-title">Socials</span>
          {links.filter((link) => link.label !== "Resume").map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <section className="y2k-card status-card">
          <img className="status-emoji" src={`${BASE}status-girl.png`} alt="" aria-hidden="true" />
          <h2>Status</h2>
          <p>
            <span className="skill-label">Mode:</span> I am learning, building, and sketching my way through new ideas.
          </p>
          <p>
            <span className="skill-label">Focus:</span> Right now I am especially interested in AI foundations and embedded systems.
          </p>
          <p>
            <span className="skill-label">Next:</span> I want to keep improving my cyberdeck and document the process as I go.
          </p>
        </section>
      </aside>
    </div>
  );

  return (
    <main className="sea-desktop">
      <div className="sparkle-overlay" />
      <div className="sticker starfish starfish-left" />
      <div className="sticker starfish starfish-right" />

      <section className="browser-window" aria-label="Dilan Tok portfolio">
        <div className="browser-tabs">
          <div className="traffic-lights" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active-tab" : ""}`}
              type="button"
              onClick={() => switchTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="browser-toolbar" aria-hidden="true">
          <span className="toolbar-arrow">←</span>
          <span className="toolbar-arrow">→</span>
          <span className="toolbar-refresh">↻</span>
          <div className="address-bar">https://dilantok.github.io/Portfolio/</div>
          <span className="toolbar-sparkle">✧</span>
        </div>

        <div className="browser-page">
          <header className="site-header">
            <h1>{activeTab === "Projects" ? "Projects" : "Dilan's Portfolio"}</h1>
          </header>

          {activeTab === "Projects" ? renderProjects() : renderHome()}
        </div>
      </section>

      <audio ref={audioRef} src={`${BASE}music.mp3`} onEnded={() => setIsPlaying(false)} />
      <audio ref={sparkleRef} src={`${BASE}star-sparkle.mp3`} preload="auto" />
    </main>
  );
};

export default App;
