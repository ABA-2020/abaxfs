import React, { useState } from 'react';
import { 
  Shield, 
  Brain, 
  Users, 
  Zap, 
  Target, 
  TrendingUp, 
  Award, 
  BarChart3, 
  Lock, 
  Cpu, 
  Share2,
  CheckCircle2,
  ArrowRightCircle,
  Lightbulb
} from 'lucide-react';

const FSTechDashboard = () => {
  const [activeSection, setActiveSection] = useState('strategy');

  // Dati estratti dal report "Skill Gap" per creare contesto e urgenza
  const marketInsights = [
    { 
      metric: "71%", 
      label: "Gap Cybersecurity", 
      desc: "Della carenza totale IT riguarda la sicurezza. Un rischio critico per infrastrutture strategiche.",
      icon: <Lock className="text-red-500" />,
      color: "border-red-500 bg-red-50"
    },
    { 
      metric: "54%", 
      label: "Digital Mismatch", 
      desc: "Della forza lavoro non possiede competenze digitali di base. Necessario reskilling massivo.",
      icon: <Users className="text-amber-500" />,
      color: "border-amber-500 bg-amber-50"
    },
    { 
      metric: "AI & Data", 
      label: "Priorità Strategica", 
      desc: "Necessità di E-Leadership e Data Governance per gestire la transizione AI.",
      icon: <Brain className="text-blue-500" />,
      color: "border-blue-500 bg-blue-50"
    }
  ];

  const methodologySteps = [
    {
      title: "Peer-to-Peer Learning",
      subtitle: "Apprendimento Collaborativo",
      desc: "Superamento della lezione frontale. I dipendenti imparano risolvendo problemi complessi in team, replicando le dinamiche reali dei progetti IT.",
      icon: <Share2 className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI-Driven Delivery",
      subtitle: "Piattaforme Adattive",
      desc: "Utilizzo di sistemi AI per valutare il codice in tempo reale e personalizzare il percorso di apprendimento sul singolo dipendente.",
      icon: <Cpu className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Gamification & Mastery",
      subtitle: "Ingaggio Costante",
      desc: "Sistemi a livelli e punti esperienza (XP) che garantiscono tassi di completamento superiori all'85% (vs 20% e-learning classico).",
      icon: <Target className="w-6 h-6 text-white" />,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const tracks = [
    {
      id: "cyber",
      title: "Cyber Resilience",
      target: "FS Security & Ops",
      icon: <Shield size={24} />,
      items: ["Ethical Hacking", "Infrastructure Protection", "Compliance & Risk"],
      usp: "Scenario-based training su attacchi reali."
    },
    {
      id: "ai",
      title: "AI & Data Science",
      target: "Data Analysts & PM",
      icon: <Brain size={24} />,
      items: ["Predictive Maintenance", "Data Governance", "GenAI for Business"],
      usp: "Focus su 'Ethical AI' e bias reduction."
    },
    {
      id: "dev",
      title: "Full Stack & Cloud",
      target: "Nuovi Assunti / Reskilling",
      icon: <Zap size={24} />,
      items: ["Modern Cloud Arch", "DevOps Culture", "Agile Methodology"],
      usp: "Produzione di codice 'production-ready' dal giorno 1."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* HEADER STRATEGICO */}
      <header className="bg-slate-900 text-white relative overflow-hidden pb-12">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-900/40 to-transparent"></div>
        <div className="w-full px-6 py-8 md:px-12 relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="bg-red-600 p-1.5 rounded text-white font-bold tracking-tighter">FS</div>
              <span className="text-slate-400">×</span>
              <span className="font-bold text-xl tracking-wide">Aba2020</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-mono text-cyan-300 border border-cyan-500/30">
              RESKILLING INTELLIGENCE UNIT
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Trasformare il Capitale Umano <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  in Asset Tecnologico
                </span>
              </h1>
              <p className="text-slate-300 text-lg max-w-xl mb-8 leading-relaxed">
                Una proposta per colmare il <strong>Digital Skill Gap</strong> di FS Tech attraverso metodologie proprietarie, peer-learning e tecnologie AI-Driven.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setActiveSection('strategy')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center ${activeSection === 'strategy' ? 'bg-red-600 text-white shadow-lg shadow-red-900/50' : 'bg-white/5 hover:bg-white/10 text-slate-300'}`}
                >
                  <BarChart3 className="mr-2 w-5 h-5" />
                  Scenario & Gap
                </button>
                <button 
                  onClick={() => setActiveSection('solution')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center ${activeSection === 'solution' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'bg-white/5 hover:bg-white/10 text-slate-300'}`}
                >
                  <Lightbulb className="mr-2 w-5 h-5" />
                  La Soluzione Aba
                </button>
              </div>
            </div>

            {/* Insight Card Hero */}
            <div className="hidden md:block">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl relative">
                <div className="absolute -top-4 -left-4 bg-yellow-500 text-slate-900 px-4 py-1 rounded font-bold text-sm shadow-lg">
                  ALERT DI MERCATO
                </div>
                <p className="text-slate-300 italic mb-4">
                  "Il 71% della carenza di competenze riguarda la Cybersecurity. Il costo del mismatch può arrivare al 10% del PIL globale."
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full px-6 md:px-12 py-10 -mt-10 relative z-20">
        
        {/* SECTION 1: CONTEXT & URGENCY (Visible if Strategy active) */}
        {activeSection === 'strategy' && (
          <div className="animate-fadeIn">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {marketInsights.map((item, idx) => (
                <div key={idx} className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${item.color} hover:-translate-y-1 transition-transform`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-4xl font-extrabold text-slate-800 mb-1">{item.metric}</h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* The Problem Statement */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Perché la formazione tradizionale fallisce</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 min-w-[20px] h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3 text-xs font-bold">X</div>
                    <p className="text-slate-600 text-sm"><strong>Obsolescenza rapida:</strong> I corsi standard sono già vecchi quando vengono erogati.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 min-w-[20px] h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3 text-xs font-bold">X</div>
                    <p className="text-slate-600 text-sm"><strong>Teoria vs Pratica:</strong> I dipendenti studiano ma non sanno applicare ("Knowledge-Action Gap").</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 min-w-[20px] h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3 text-xs font-bold">X</div>
                    <p className="text-slate-600 text-sm"><strong>Basso Ingaggio:</strong> Tassi di abbandono elevati nei corsi online passivi.</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-slate-900 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">La Risposta Aba2020</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Non vendiamo corsi, costruiamo <strong>ecosistemi di apprendimento</strong>. 
                    Il nostro modello unisce il rigore accademico (Network Universitario) con l'agilità delle coding factory.
                  </p>
                  <button 
                    onClick={() => setActiveSection('solution')}
                    className="text-sm font-bold underline decoration-cyan-400 underline-offset-4 hover:text-cyan-400 transition-colors"
                  >
                    Scopri la metodologia &rarr;
                  </button>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10">
                  <Cpu size={120} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: SOLUTION & METHODOLOGY (Visible if Solution active) */}
        {activeSection === 'solution' && (
          <div className="animate-fadeIn">
            
            {/* The Unique Methodology */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800">Metodologia Disruptive</h2>
                <p className="text-slate-500 max-w-2xl mx-auto mt-2">
                  Un approccio pedagogico unico sul mercato, derivato dalle migliori pratiche internazionali e ottimizzato per l'Corporate Reskilling.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {methodologySteps.map((step, idx) => (
                  <div key={idx} className="group relative bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className={`h-2 w-full bg-gradient-to-r ${step.gradient}`}></div>
                    <div className="p-8">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{step.title}</h3>
                      <p className={`text-xs font-bold uppercase tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r ${step.gradient}`}>
                        {step.subtitle}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Tracks */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <Award className="mr-3 text-yellow-400" />
                  Percorsi Formativi Verticali
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {tracks.map((track) => (
                    <div key={track.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
                          {track.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase bg-slate-800 px-2 py-1 rounded text-slate-300">
                          {track.target}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">{track.title}</h3>
                      <ul className="space-y-3 mb-6">
                        {track.items.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-xs text-cyan-200 font-medium">
                          <span className="text-white font-bold">Aba Advantage:</span> {track.usp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Closing / Trust */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold text-slate-600 mb-6">Track Record & Fiducia</h3>
              <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center space-x-2 font-bold text-xl text-slate-800">
                  <span className="bg-black text-white px-2 py-1 rounded">42</span>
                  <span>Network</span>
                </div>
                <div className="flex items-center space-x-2 font-bold text-xl text-slate-800">
                  <span className="bg-blue-900 text-white px-2 py-1 rounded">LUISS</span>
                  <span>Guido Carli</span>
                </div>
                <div className="flex items-center space-x-2 font-bold text-xl text-slate-800">
                  <span className="text-green-700">Campus</span>
                  <span>Bio-Medico</span>
                </div>
                <div className="flex items-center space-x-2 font-bold text-xl text-slate-800">
                  <span className="bg-red-700 text-white px-2 py-1 rounded">NYFA</span>
                  <span>Hollywood</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
};

export default FSTechDashboard;