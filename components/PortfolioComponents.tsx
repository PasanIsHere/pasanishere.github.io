
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cpu, Code, Database, Globe, Layers, Server, Search, MessageSquare, Share2, Shield, HardDrive, Smartphone, GitBranch, Github, ExternalLink, ChevronRight, Users, BookOpen, Terminal, Radio, Palette, Boxes, Headphones, Send } from 'lucide-react';

// --- SKILL MATRIX ---
export const SkillMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Languages');

  const skills = [
    { name: 'Java', category: 'Languages', icon: 'java/java-original.svg' },
    { name: 'Python', category: 'Languages', icon: 'python/python-original.svg' },
    { name: 'C', category: 'Languages', icon: 'c/c-original.svg' },
    { name: 'JavaScript', category: 'Languages', icon: 'javascript/javascript-original.svg' },
    { name: 'TypeScript', category: 'Languages', icon: 'typescript/typescript-original.svg' },
    { name: 'C#', category: 'Languages', icon: 'csharp/csharp-original.svg' },
    { name: 'Fortran', category: 'Languages', icon: 'fortran/fortran-original.svg' },
    { name: 'COBOL', category: 'Languages', icon: 'cobol/cobol-original.svg' },
    { name: 'Ada', category: 'Languages', icon: 'ada/ada-original.svg' },
    
    { name: 'Spring Boot', category: 'Frameworks', icon: 'spring/spring-original.svg' },
    { name: 'Next.js', category: 'Frameworks', icon: 'nextjs/nextjs-original.svg' },
    { name: 'React', category: 'Frameworks', icon: 'react/react-original.svg' },
    { name: 'Node.js', category: 'Frameworks', icon: 'nodejs/nodejs-original.svg' },
    { name: 'Unity', category: 'Frameworks', icon: 'unity/unity-original.svg' },
    { name: 'Angular', category: 'Frameworks', icon: 'angularjs/angularjs-original.svg' },

    { name: 'AWS', category: 'Tools', icon: 'amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Neo4j', category: 'Tools', icon: 'neo4j/neo4j-original.svg' },
    { name: 'Docker', category: 'Tools', icon: 'docker/docker-original.svg' },
    { name: 'MongoDB', category: 'Tools', icon: 'mongodb/mongodb-original.svg' },
    { name: 'SolidWorks', category: 'Tools', icon: 'solidworks/solidworks-original.svg' },
  ];

  const categories = Array.from(new Set(skills.map(s => s.category)));
  const iconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

  return (
    <div className="flex flex-col items-center p-8 lg:p-12 bg-stone-800/40 rounded-3xl shadow-2xl border border-stone-700/50 my-8 backdrop-blur-md overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-nobel-gold/5 blur-[120px] pointer-events-none"></div>
      
      <div className="flex gap-2 mb-12 overflow-x-auto w-full justify-center scrollbar-hide">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)} 
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
              activeCategory === cat ? 'bg-nobel-gold text-white border-nobel-gold shadow-lg shadow-nobel-gold/20' : 'bg-stone-800/50 text-stone-500 border-stone-700 hover:border-stone-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
        <AnimatePresence mode="popLayout">
          {skills.filter(s => s.category === activeCategory).map((skill, index) => (
            <motion.div 
              key={skill.name} 
              initial={{ opacity: 0, scale: 0.8, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.8, y: -20 }} 
              transition={{ delay: index * 0.05 }} 
              className="flex flex-col items-center justify-center p-6 bg-stone-900/60 rounded-2xl border border-stone-800 hover:border-nobel-gold/30 hover:bg-stone-900 transition-all group shadow-sm"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                 <img 
                    src={`${iconBaseUrl}${skill.icon}`} 
                    alt={`${skill.name} logo`} 
                    className="w-full h-full object-contain transition-all grayscale-[0.2] group-hover:grayscale-0" 
                    onError={(e) => { (e.target as any).src = `https://ui-avatars.com/api/?name=${skill.name}&background=1a1a1a&color=C5A059&bold=true`; }} 
                 />
              </div>
              <span className="font-serif text-sm text-stone-300 group-hover:text-white transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// --- EXPERIENCE TIMELINE ---
export const ExperienceTimeline: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Cloud SynApps",
      location: "Toronto, ON",
      period: "Feb 2024 to May 2025",
      points: [
        "Led R&D AI Initiative, delivering POC solutions using OCR and LLMs to secure executive buy-in and $1M+ CAD in public sector contracts.",
        "Built AWS Textract pipeline for IDs and contracts, reducing manual intake effort by 70% or more.",
        "Engineered AI powered agents (OCR + LLM) that reduced manual document processing steps by 3x and improved throughput by 50%.",
        "Optimized system scalability by resolving CPU, heap, and DML runtime limits.",
        "Authored 200+ automated tests, increasing system coverage from 67% to 99.99%."
      ]
    },
    {
      title: "Full Stack Java Development Trainee",
      company: "Wiley Edge",
      location: "Montreal, QC (Remote)",
      period: "April 2023 to August 2023",
      points: [
        "Managed complex codebases in Java, MySQL, and Spring Boot with JDBC, integrating Angular for high performance frontends.",
        "Developed 'Wiley Clinic', a dynamic web application for managing medical appointments and secure scheduling.",
        "Integrated payment gateways, social media logins, and data visualization tools via third party APIs.",
        "Collaborated across Canada and the US to deliver streamlined product updates using Git/GitHub."
      ]
    },
    {
      title: "Software Engineer (Freelance / Volunteer)",
      company: "Gryphon Gaming (University Club)",
      location: "Guelph, ON",
      period: "January 2022 to April 2023",
      points: [
        "Volunteered as a freelance developer for the University of Guelph eSports community to build a full stack statistics and merchandising ecosystem.",
        "Collaborated in a team of 5 using Agile processes to deliver production grade software features.",
        "Integrated OAuth2 and Stripe APIs, helping drive community engagement through stats and merch sync."
      ]
    },
    {
      title: "Game Development Counselor",
      company: "Brick Works Academy",
      location: "Waterloo, ON",
      period: "June 2017 to September 2017",
      points: [
        "Instructed classes of 10-20 students in foundational programming and game design principles.",
        "Fostered collaboration via student led coding projects, achieving a 30% rise in student engagement.",
        "Guiding students through regular technical feedback loops and OOP fundamentals."
      ]
    },
    {
      title: "Robotics Team Member",
      company: "FRC 3683 Team Dave",
      location: "Waterloo, ON",
      period: "Sept 2015 to May 2018",
      points: [
        "My high school origin story: sparked a love for building things by writing controls for robot movement.",
        "Got hands on with soldering circuit boards and designing mechanical parts like gearboxes in SolidWorks.",
        "Plotted strategy as a 2017 FRC World Championship semi finalist: we were in the Top 1% of teams globally!"
      ]
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto space-y-12">
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2 hidden md:block" />
      {experiences.map((exp, idx) => (
        <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
          <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-nobel-gold border-4 border-[#F9F8F4] -translate-x-1/2 z-10 hidden md:block" />
          <div className="flex-1 w-full">
            <div className={`p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
               <span className="text-[10px] font-bold text-nobel-gold tracking-widest uppercase mb-2 block">{exp.period}</span>
               <h3 className="font-serif text-2xl text-stone-900 mb-1">{exp.title}</h3>
               <p className="text-stone-500 font-medium mb-1">{exp.company}</p>
               <p className="text-stone-400 text-xs italic mb-4">{exp.location}</p>
               <ul className={`text-sm text-stone-600 space-y-2 font-light ${idx % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                  {exp.points.map((p, i) => <li key={i} className="flex gap-2 items-start"><span className="text-nobel-gold">•</span> {p}</li>)}
               </ul>
            </div>
          </div>
          <div className="flex-1 hidden md:block" />
        </div>
      ))}
    </div>
  );
};

// --- PROJECT ARCHITECTURE DETAIL ---
export const ProjectArchitectureDetail: React.FC<{ id: string }> = ({ id }) => {
  const archData: Record<string, {
    title: string,
    description: string,
    steps: { icon: React.ReactNode, label: string, desc: string }[],
    extraInfo: string
  }> = {
    'chat2graph': {
        title: "Chat2Graph Engine",
        description: "Innovative mapping of clinical dialogue to Neo4j knowledge graphs to detect symptom correlations via local LLM analysis.",
        steps: [
            { icon: <MessageSquare size={24}/>, label: "Dialogue Feed", desc: "Local NLP Ingest" },
            { icon: <GitBranch size={24}/>, label: "Extraction", desc: "Entity Identification" },
            { icon: <Share2 size={24}/>, label: "Graph Logic", desc: "Relation Mapping" },
            { icon: <Database size={24}/>, label: "Neo4j Sync", desc: "Insight Persistence" },
        ],
        extraInfo: "Employs local LLM processing to maintain medical data privacy while generating structured relational insights for mental health professionals."
    },
    'vivy-ai': {
        title: "Vivy.ai Pipeline",
        description: "A verbal AI ecosystem converting user voice to intelligent synthesis using a multi service cloud pipeline.",
        steps: [
            { icon: <Headphones size={24}/>, label: "WAV Capture", desc: "Discord Voice Ingest" },
            { icon: <Activity size={24}/>, label: "AssemblyAI", desc: "STT Engine Processing" },
            { icon: <Cpu size={24}/>, label: "GPT 3 Logic", desc: "Contextual Response" },
            { icon: <Send size={24}/>, label: "MP3 Synthesis", desc: "Google TTS Playback" },
        ],
        extraInfo: "Successfully bridged Discord's audio stream with state of the art STT and LLM services to provide a low latency verbal companion experience."
    },
    'mazefinder': {
        title: "Genetic Solver Engine",
        description: "High performance genetic algorithm in C for solving complex mazes with multithreading and custom thread pools.",
        steps: [
            { icon: <Terminal size={24}/>, label: "C Logic", desc: "Memory Optimized" },
            { icon: <Cpu size={24}/>, label: "Pthread Pool", desc: "Parallel Search" },
            { icon: <Shield size={24}/>, label: "Mutex Locks", desc: "Race Protection" },
            { icon: <Activity size={24}/>, label: "Evaluation", desc: "Performance optimization achieved through shared genetic state management." },
        ],
        extraInfo: "Mastered low level concurrency through the use of mutexes and conditional variables to manage shared genetic state across threads."
    },
    'gryphon-gaming': {
        title: "eSports Ecosystem",
        description: "Full stack application for the University of Guelph eSports community managing registrations, stats, and payments.",
        steps: [
            { icon: <Users size={24}/>, label: "Coordination", desc: "Freelance contribution" },
            { icon: <Shield size={24}/>, label: "OAuth2", desc: "Discord Login Auth" },
            { icon: <Palette size={24}/>, label: "Stripe", desc: "Merch Processing" },
            { icon: <Database size={24}/>, label: "MongoDB", desc: "Dynamic Stat Tracking" },
        ],
        extraInfo: "Integrating Stripe and OAuth2 drove engagement gains, while the coordination efforts improved team delivery timelines by 15%."
    },
    'scheduler': {
        title: "Kernel Simulation",
        description: "Detailed simulation of operating system task scheduling and resource allocation algorithms.",
        steps: [
            { icon: <Layers size={24}/>, label: "SJF/FIFO", desc: "Priority Handling" },
            { icon: <Radio size={24}/>, label: "Round Robin", desc: "Quantum Timing" },
            { icon: <BookOpen size={24}/>, label: "OS Logic", desc: "Starvation Prevention" },
            { icon: <Cpu size={24}/>, label: "Scheduler", desc: "Kernel Efficiency" },
        ],
        extraInfo: "Explored kernel preemption and fair resource distribution through simulated priority counters and data structures."
    },
    'checkers': {
        title: "Unity 3D Multiplayer",
        description: "Real time 3D checkers game deployed via WebGL with custom WebSocket synchronization.",
        steps: [
            { icon: <Boxes size={24}/>, label: "Unity 3D", desc: "Spatial Rendering" },
            { icon: <Radio size={24}/>, label: "WebSockets", desc: "State Sync" },
            { icon: <Smartphone size={24}/>, label: "Interaction", desc: "3D UI/UX" },
            { icon: <Globe size={24}/>, label: "WebGL", desc: "Browser Port" },
        ],
        extraInfo: "Successfully bridged Unity's rendering engine with low latency client server state for a browser based board game."
    }
  };

  const activeData = archData[id] || archData['chat2graph'];

  return (
    <div className="flex flex-col gap-12 p-8 lg:p-16 bg-stone-900 text-white rounded-3xl border border-stone-800 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-nobel-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="z-10 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                ARCHITECTURE INSIGHTS
            </div>
            <h3 className="font-serif text-3xl md:text-5xl mb-6 text-white">{activeData.title}</h3>
            <p className="text-lg text-stone-400 mb-8 leading-relaxed">{activeData.description}</p>
        </div>
      </div>
      <div className="z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {activeData.steps.map((s, i) => (
                <div key={i} className="relative group">
                    <div className="p-8 bg-stone-950/50 rounded-2xl border border-stone-800 group-hover:border-nobel-gold/30 transition-all h-full">
                        <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-700 flex items-center justify-center text-nobel-gold mb-6 group-hover:scale-110 transition-transform">
                            {s.icon}
                        </div>
                        <h4 className="text-nobel-gold text-xs font-bold uppercase tracking-widest mb-2">{s.label}</h4>
                        <p className="text-sm text-stone-400 leading-snug">{s.desc}</p>
                    </div>
                    {i < activeData.steps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-stone-700">
                            <ChevronRight size={24} />
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
      <div className="z-10 p-6 bg-stone-800/30 rounded-2xl border border-stone-800/50">
          <p className="text-sm text-stone-400 italic flex items-start gap-3">
              <span className="text-nobel-gold font-serif text-2xl leading-none">“</span>
              <span>{activeData.extraInfo}</span>
          </p>
      </div>
    </div>
  );
};
