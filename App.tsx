
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { HeroScene } from './components/PortfolioScene';
import { SkillMatrix, ExperienceTimeline, ProjectArchitectureDetail } from './components/PortfolioComponents';
import { ScrollingDecorations } from './components/ScrollingDecorations';
import { ArrowDown, Menu, X, MapPin, Linkedin, Github, Code2, Info, Cpu, Gamepad2, Tv, Languages, Music, Keyboard, Mail, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string; 
  subtitle: string; 
  description: string; 
  isSelected: boolean;
  onClick: () => void;
  tech?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  subtitle, 
  description, 
  isSelected,
  onClick,
  tech 
}) => {
  return (
    <motion.div 
      onClick={onClick}
      whileHover={{ y: -5 }}
      className={`flex flex-col cursor-pointer p-8 rounded-xl border transition-all duration-300 w-full h-full relative overflow-hidden ${
        isSelected 
        ? 'bg-stone-900 border-nobel-gold shadow-xl' 
        : 'bg-white border-stone-200 shadow-sm hover:shadow-md hover:border-nobel-gold/50'
      }`}
    >
      <h3 className={`font-serif text-2xl mb-2 ${isSelected ? 'text-white' : 'text-stone-900'}`}>{title}</h3>
      <p className="text-xs text-nobel-gold font-bold uppercase tracking-widest mb-4">{subtitle}</p>
      <div className={`w-12 h-0.5 mb-4 transition-all duration-500 ${isSelected ? 'bg-nobel-gold w-full' : 'bg-stone-100 group-hover:w-full'}`}></div>
      <p className={`text-sm leading-relaxed mb-6 ${isSelected ? 'text-stone-400' : 'text-stone-600'}`}>{description}</p>
      
      {tech && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map(t => (
            <span key={t} className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
              isSelected ? 'bg-stone-800 text-stone-500' : 'bg-stone-50 text-stone-400'
            }`}>
              {t}
            </span>
          ))}
        </div>
      )}
      
      {isSelected && (
        <motion.div 
          layoutId="active-indicator"
          className="absolute top-4 right-4 text-nobel-gold"
        >
          <div className="flex items-center gap-1">
             <span className="text-[10px] font-bold uppercase tracking-tighter">Deep Dive</span>
             <div className="bg-nobel-gold/10 p-1 rounded-full"><Info size={14} /></div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string>('chat2graph');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
  };

  const projectData = [
    {
        id: 'chat2graph',
        title: "Chat2Graph",
        subtitle: "Clinical NLP & Graphs",
        description: "Mapping clinical dialogue to Neo4j knowledge graphs using local LLMs for evidence-based medical research.",
        tech: ["Neo4j", "Ollama", "Python"]
    },
    {
        id: 'vivy-ai',
        title: "Vivy.ai",
        subtitle: "Verbal AI Companion",
        description: "A verbal AI ecosystem leveraging AssemblyAI and GPT-3 for responsive Discord voice conversations.",
        tech: ["GPT-3", "AssemblyAI", "Node.js", "Discord.js"]
    },
    {
        id: 'mazefinder',
        title: "MazeFinder",
        subtitle: "High-Performance C",
        description: "Genetic algorithm solver optimized with custom Pthread pools and memory-safe synchronization in C.",
        tech: ["C", "Pthreads", "Genetic Algos"]
    },
    {
        id: 'gryphon-gaming',
        title: "Gryphon Gaming Hub",
        subtitle: "eSports Full Stack",
        description: "A production-grade hub handling stats and merch for eSports, with a 500% boost in user engagement.",
        tech: ["Next.js", "MongoDB", "Stripe", "OAuth2"]
    },
    {
        id: 'scheduler',
        title: "OS Scheduler",
        subtitle: "Kernel Simulation",
        description: "In-depth simulation of core kernel algorithms, exploring SJF and Round Robin resource management.",
        tech: ["Java", "OS Internals"]
    },
    {
        id: 'checkers',
        title: "Multiplayer Checkers",
        subtitle: "3D Unity Engine",
        description: "Real-time 3D board game sync across browsers using Unity WebGL and WebSocket communication.",
        tech: ["C#", "Unity", "WebSockets"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white relative">
      <ScrollingDecorations />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-nobel-gold rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm pb-1">P</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              PASAN <span className="font-normal text-stone-500">UNDUGODAGE</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Experience</a>
            <a href="#projects" onClick={scrollToSection('projects')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Projects</a>
            <a href="#toolkit" onClick={scrollToSection('toolkit')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Toolkit</a>
            <a href="#hobbies" onClick={scrollToSection('hobbies')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Hobbies</a>
            <a href="mailto:pasan.und@gmail.com" className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm cursor-pointer">Contact</a>
          </div>
          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors uppercase">About</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-nobel-gold transition-colors uppercase">Experience</a>
            <a href="#projects" onClick={scrollToSection('projects')} className="hover:text-nobel-gold transition-colors uppercase">Projects</a>
            <a href="#toolkit" onClick={scrollToSection('toolkit')} className="hover:text-nobel-gold transition-colors uppercase">Toolkit</a>
            <a href="#hobbies" onClick={scrollToSection('hobbies')} className="hover:text-nobel-gold transition-colors uppercase">Hobbies</a>
            <a href="mailto:pasan.und@gmail.com" onClick={() => setMenuOpen(false)} className="px-6 py-3 bg-stone-900 text-white rounded-full shadow-lg">Contact</a>
        </div>
      )}

      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30">
            Computer Science Graduate • AI R&D • Collaborative Problem Solver
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight md:leading-[0.9] mb-8 text-stone-900 drop-shadow-sm">
            Pasan <br/><span className="italic font-normal text-stone-600 text-3xl md:text-5xl block mt-4 underline decoration-nobel-gold/30 decoration-8 underline-offset-8">Undugodage</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-stone-600 font-light">
             <span className="flex items-center gap-2"><MapPin size={16} className="text-nobel-gold"/> Waterloo, ON</span>
             <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-stone-300"></span>
             <div className="flex gap-4">
                <a href="mailto:pasan.und@gmail.com" className="hover:text-nobel-gold transition-colors"><Mail size={20}/></a>
                <a href="https://linkedin.com/in/pasanu" target="_blank" className="hover:text-nobel-gold transition-colors"><Linkedin size={20}/></a>
                <a href="https://github.com/pasanishere" target="_blank" className="hover:text-nobel-gold transition-colors"><Github size={20}/></a>
             </div>
          </div>
          <div className="flex justify-center">
             <a href="#about" onClick={scrollToSection('about')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>EXPLORE</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main className="relative z-20">
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Profile</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">Learn, Answer, and Share</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
            </div>
            <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed">
              <p>
                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">I</span> am a Canadian software developer and Computer Science graduate who thrives on the cycle of learning, solving, and sharing. I love software development because it allows me to tackle complex problems alongside some of the smartest people I know. For me, it is about growing together to build cool things that make a real impact. Whether I am orchestrating AI pipelines or diving into system internals, I am always looking for the next challenge that pushes our boundaries and allows us to build something meaningful together.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 bg-[#F9F8F4] border-y border-stone-100">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                        <Code2 size={14}/> PROFESSIONAL JOURNEY
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Experience & Academic Path</h2>
                </div>
                <ExperienceTimeline />
            </div>
        </section>

        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">TECHNICAL PORTFOLIO</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">Featured Projects</h2>
                    <p className="text-stone-500">Select a project below to see its detailed architecture and core engineering insights.</p>
                </div>

                <div className="mb-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedProjectId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ProjectArchitectureDetail id={selectedProjectId} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectData.map(proj => (
                        <ProjectCard 
                            key={proj.id}
                            id={proj.id}
                            {...proj}
                            isSelected={selectedProjectId === proj.id}
                            onClick={() => handleProjectSelect(proj.id)}
                        />
                    ))}
                </div>
            </div>
        </section>

        <section id="toolkit" className="py-24 bg-stone-900 text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6">The Toolkit</h2>
                    <p className="text-lg text-stone-400 leading-relaxed font-light">
                      Always eager to expand my toolkit, but here's what I've worked with so far.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <SkillMatrix />
                </div>
            </div>
        </section>

        <section id="hobbies" className="py-32 bg-[#F9F8F4] relative">
            <div className="container mx-auto px-6 relative z-10">
                 <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">PERSONAL PURSUITS</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">Interests & Hobbies</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Hardware */}
                    <div className="p-10 bg-white border border-stone-200 rounded-2xl group transition-all duration-500 hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                             <div className="p-3 bg-stone-50 rounded-xl text-nobel-gold shadow-sm"><Cpu size={24}/></div>
                             <h4 className="font-serif text-2xl">Hardware R&D</h4>
                        </div>
                        <p className="text-sm text-stone-600 mb-8 leading-relaxed">Getting into small hardware projects with Arduinos, recently working on custom music players and Tomodachi-style virtual pets.</p>
                        <div className="flex gap-2">
                             <span className="px-3 py-1 bg-stone-100 text-[10px] font-bold text-stone-400 rounded-full uppercase">Arduino</span>
                             <span className="px-3 py-1 bg-stone-100 text-[10px] font-bold text-stone-400 rounded-full uppercase">C++</span>
                        </div>
                    </div>

                    {/* Gaming */}
                    <div className="p-10 bg-white border border-stone-200 rounded-2xl group transition-all duration-500 hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                             <div className="p-3 bg-stone-50 rounded-xl text-nobel-gold shadow-sm"><Gamepad2 size={24}/></div>
                             <h4 className="font-serif text-2xl">Gaming</h4>
                        </div>
                        <p className="text-sm text-stone-600 mb-6 leading-relaxed">Currently obsessed with Teamfight Tactics and SWORN. I love diving into strategy and competitive mechanics.</p>
                    </div>

                    {/* Languages */}
                    <div className="p-10 bg-white border border-stone-200 rounded-2xl group transition-all duration-500 hover:shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                             <div className="p-3 bg-stone-50 rounded-xl text-nobel-gold shadow-sm"><Languages size={24}/></div>
                             <h4 className="font-serif text-2xl">Learning Chinese</h4>
                        </div>
                        <p className="text-sm text-stone-600 leading-relaxed mb-4">
                            我在学汉语 (I am learning Chinese), but my tones are still questionable 😅.
                        </p>
                    </div>

                    {/* Music */}
                    <div className="p-10 bg-white border border-stone-200 rounded-2xl group transition-all duration-500 hover:shadow-xl">
                        <a href="https://www.last.fm/user/XShadew" target="_blank" className="block h-full no-underline">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-stone-50 rounded-xl text-nobel-gold shadow-sm transition-colors group-hover:bg-nobel-gold/10"><Music size={24}/></div>
                                <h4 className="font-serif text-2xl flex items-center gap-2">Music <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></h4>
                            </div>
                            <p className="text-sm text-stone-600 mb-8 leading-relaxed">See what is on repeat for me over on Last.fm!</p>
                        </a>
                    </div>

                    {/* Typing */}
                    <div className="p-10 bg-white border border-stone-200 rounded-2xl group transition-all duration-500 hover:shadow-xl">
                        <a href="https://monkeytype.com/profile/xshadew" target="_blank" className="block h-full no-underline">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-stone-50 rounded-xl text-nobel-gold shadow-sm transition-colors group-hover:bg-nobel-gold/10"><Keyboard size={24}/></div>
                                <h4 className="font-serif text-2xl flex items-center gap-2">Typing Speed <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></h4>
                            </div>
                            <p className="text-sm text-stone-600 mb-8 leading-relaxed">Trying to hit 150 WPM 🏎️! Track my progress on Monkeytype.</p>
                        </a>
                    </div>

                    {/* Anime */}
                    <div className="p-10 bg-white border border-stone-200 rounded-2xl group transition-all duration-500 hover:shadow-xl">
                        <a href="https://anilist.co/user/XShadew/" target="_blank" className="block h-full no-underline">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-stone-50 rounded-xl text-nobel-gold shadow-sm transition-colors group-hover:bg-nobel-gold/10"><Tv size={24}/></div>
                                <h4 className="font-serif text-2xl flex items-center gap-2">Anime <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></h4>
                            </div>
                            <p className="text-sm text-stone-600 mb-8 leading-relaxed">Check out my watchlist on AniList for what I am currently following.</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-20 border-t border-stone-800 z-30">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-3xl mb-3 tracking-tight">Pasan Undugodage</div>
                <p className="text-sm text-stone-500">Software Engineer | AI R&D | System Architect</p>
            </div>
            <div className="flex gap-8">
                <a href="mailto:pasan.und@gmail.com" className="hover:text-nobel-gold transition-all text-stone-300">Email</a>
                <a href="https://linkedin.com/in/pasanu" target="_blank" className="hover:text-nobel-gold transition-all text-stone-300">LinkedIn</a>
                <a href="https://github.com/pasanishere" target="_blank" className="hover:text-nobel-gold transition-all text-stone-300">Github</a>
            </div>
        </div>
        <div className="text-center mt-20 text-[10px] text-stone-700 font-bold uppercase tracking-[0.5em]">
            &copy; 2025 PASAN UNDUGODAGE • WATERLOO, ON
        </div>
      </footer>
    </div>
  );
};

export default App;
