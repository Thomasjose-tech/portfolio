// import { useState, useEffect } from "react";
// import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail } from "lucide-react";

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');
//   const [isDark, setIsDark] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const navItems = [
//     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
//     { name: 'About', href: '#about', id: 'about', icon: User },
//     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
//     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
//     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
//     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < lastScrollY || currentScrollY < 80) {
//         setIsVisible(true);
//       } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
//         setIsVisible(false);
//         setIsMobileMenuOpen(false);
//       }
//       setLastScrollY(currentScrollY);
//       setIsScrolled(currentScrollY > 30);

//       const sections = navItems.map(i => document.querySelector(i.href)).filter(Boolean);
//       const sp = currentScrollY + 100;
//       for (let i = sections.length - 1; i >= 0; i--) {
//         const s = sections[i];
//         if (s && s.offsetTop <= sp) { setActiveSection(s.getAttribute('id') || 'hero'); break; }
//       }
//       if (currentScrollY < 100) setActiveSection('hero');
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   // Lock body scroll while the mobile drawer is open
//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
//     return () => { document.body.style.overflow = ''; };
//   }, [isMobileMenuOpen]);

//   const scrollToSection = (href) => {
//     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMobileMenuOpen(false);
//   };

//   const toggleTheme = () => {
//     setIsDark(d => !d);
//     document.documentElement.classList.toggle('dark');
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap');

//         *, *::before, *::after { box-sizing: border-box; }

//         .nv-outer {
//           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
//           padding: 0 28px 0;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           pointer-events: none;
//           display: flex;
//           align-items: flex-start;
//           justify-content: center;
//           background: transparent;
//           transition: padding 0.5s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s ease;
//         }
//         .nv-outer.scrolled { padding-top: 0; }
//         .nv-outer.hidden {
//           transform: translateY(-120%);
//           opacity: 0;
//           pointer-events: none;
//         }
//         .nv-outer > * { pointer-events: auto; }

//         /* Desktop: nav sits flush with the very top edge of the page */
//         @media (min-width: 1001px) {
//           .nv-outer { padding: 0 28px 0; background: transparent; }
//           .nv-outer.scrolled { padding-top: 0; }
//         }

//         .pill-base {
//           border-radius: 0 0 24px 24px;
//           border: 1px solid rgba(255,255,255,0.85);
//           border-top: none;
//           background: rgba(255,255,255,0.72);
//           backdrop-filter: blur(40px) saturate(210%);
//           -webkit-backdrop-filter: blur(40px) saturate(210%);
//           box-shadow:
//             0 2px 4px rgba(0,0,0,0.03),
//             0 10px 40px rgba(0,0,0,0.08),
//             0 1px 0 rgba(255,255,255,1) inset,
//             0 -1px 0 rgba(0,0,0,0.03) inset;
//           transition: all 0.5s cubic-bezier(.4,0,.2,1);
//           position: relative; overflow: hidden;
//         }
//         .dark .pill-base {
//           background: rgba(9,12,26,0.84);
//           border: 1px solid rgba(255,255,255,0.07);
//           border-top: none;
//           box-shadow: 0 4px 10px rgba(0,0,0,0.45), 0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset;
//         }
//         .nv-outer.scrolled .pill-base {
//           border-radius: 0 0 18px 18px;
//           box-shadow: 0 6px 14px rgba(0,0,0,0.07), 0 24px 64px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,1) inset;
//         }
//         .pill-base::before {
//           content: ''; position: absolute; top: 0; left: 6%; right: 6%; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 65%, transparent);
//           pointer-events: none;
//         }

//         .nv-pill { flex-shrink: 0; }

//         .nv-row {
//           display: flex; align-items: center;
//           height: 68px;
//           padding: 0 10px;
//           gap: 10px;
//         }

//         .nv-links {
//           display: flex; align-items: center; gap: 2px;
//           background: rgba(241,245,249,0.75);
//           border: 1px solid rgba(226,232,240,0.88);
//           border-radius: 18px;
//           padding: 6px;
//         }
//         .dark .nv-links { background: rgba(30,41,59,0.55); border-color: rgba(51,65,85,0.78); }

//         .nv-link {
//           position: relative; font-size: 14px; font-weight: 500;
//           padding: 9px 16px;
//           border-radius: 12px; color: #64748b;
//           border: none; background: transparent; cursor: pointer;
//           transition: all 0.22s ease; letter-spacing: -0.01em; white-space: nowrap;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .dark .nv-link { color: #94a3b8; }
//         .nv-link:hover { color: #334155; background: rgba(255,255,255,0.92); }
//         .dark .nv-link:hover { color: #cbd5e1; background: rgba(51,65,85,0.72); }
//         .nv-link.active {
//           color: #4f46e5; background: #fff; font-weight: 600;
//           box-shadow: 0 1px 6px rgba(0,0,0,0.09), 0 3px 14px rgba(99,102,241,0.15);
//         }
//         .dark .nv-link.active {
//           color: #818cf8; background: rgba(99,102,241,0.18);
//           box-shadow: 0 1px 6px rgba(0,0,0,0.35), 0 3px 14px rgba(99,102,241,0.25);
//         }
//         .nv-link.active::after {
//           content: ''; position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%);
//           width: 4px; height: 4px; border-radius: 50%; background: #6366f1;
//         }
//         .dark .nv-link.active::after { background: #818cf8; }

//         .nv-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

//         .nv-ibtn {
//           width: 40px; height: 40px; border-radius: 50%;
//           border: none;
//           background: rgba(255,255,255,0.85);
//           color: #64748b;
//           cursor: pointer; display: flex; align-items: center; justify-content: center;
//           transition: color 0.25s ease, transform 0.25s cubic-bezier(.4,0,.2,1);
//           flex-shrink: 0;
//           position: relative;
//           box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05);
//         }
//         .dark .nv-ibtn {
//           background: rgba(30,41,59,0.7);
//           color: #94a3b8;
//           box-shadow: 0 1px 3px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.25);
//         }

//         .nv-ibtn::before {
//           content: '';
//           position: absolute;
//           inset: -2px;
//           border-radius: 50%;
//           padding: 2px;
//           background: rgba(226,232,240,0.9);
//           -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           transition: opacity 0.25s ease;
//         }
//         .dark .nv-ibtn::before { background: rgba(255,255,255,0.1); }

//         .nv-ibtn::after {
//           content: '';
//           position: absolute;
//           inset: -2px;
//           border-radius: 50%;
//           padding: 2px;
//           background: conic-gradient(
//             from 0deg,
//             #6366f1, #8b5cf6, #ec4899, #f43f5e,
//             #f97316, #eab308, #22c55e, #06b6d4,
//             #3b82f6, #6366f1
//           );
//           -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           opacity: 0;
//           animation: spin-ring 1.2s linear infinite;
//           transition: opacity 0.3s ease;
//         }

//         @keyframes spin-ring {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }

//         .nv-ibtn:hover::before { opacity: 0; }
//         .nv-ibtn:hover::after  { opacity: 1; }
//         .nv-ibtn:hover {
//           color: #4f46e5;
//           transform: translateY(-2px) scale(1.08);
//           background: rgba(255,255,255,1);
//           box-shadow: 0 4px 16px rgba(99,102,241,0.18), 0 8px 28px rgba(99,102,241,0.1);
//         }
//         .dark .nv-ibtn:hover {
//           color: #818cf8;
//           background: rgba(30,41,59,0.9);
//           box-shadow: 0 4px 16px rgba(99,102,241,0.3), 0 8px 28px rgba(99,102,241,0.2);
//         }
//         .nv-ibtn:active { transform: translateY(0) scale(0.97); }

//         .nv-ibtn-hire {
//           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%) !important;
//           color: #fff !important;
//           box-shadow: 0 3px 10px rgba(99,102,241,0.45), 0 6px 20px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.24) !important;
//         }
//         .nv-ibtn-hire:hover {
//           color: #fff !important;
//           background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%) !important;
//           box-shadow: 0 5px 18px rgba(99,102,241,0.54), 0 10px 32px rgba(99,102,241,0.3) !important;
//         }
//         .dark .nv-ibtn-hire {
//           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%) !important;
//           color: #fff !important;
//         }

//         /* Mobile trigger row: theme toggle + hamburger, each its own standalone
//            circle (not a shared pill) so the header reads clearly in both
//            light and dark mode. Light mode = white circles with a soft border
//            and shadow; dark mode = dark circles, mirroring the desktop icon
//            buttons. */
//         .nv-mob {
//           display: none; align-items: center; gap: 10px;
//           background: transparent;
//           border: none;
//           box-shadow: none;
//           padding: 0;
//         }

//         .nv-mob-btn {
//           width: 40px; height: 40px;
//           border-radius: 50%;
//           border: 1px solid rgba(226,232,240,0.9);
//           background: #ffffff;
//           color: #475569;
//           cursor: pointer; display: flex; align-items: center; justify-content: center;
//           transition: color 0.2s ease, transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
//           flex-shrink: 0;
//           box-shadow: 0 1px 3px rgba(0,0,0,0.07), 0 4px 14px rgba(0,0,0,0.09);
//         }
//         .nv-mob-btn:hover { background: #ffffff; color: #4f46e5; transform: scale(1.06); box-shadow: 0 2px 6px rgba(0,0,0,0.09), 0 6px 18px rgba(99,102,241,0.18); }
//         .nv-mob-btn:active { transform: scale(0.94); }

//         .dark .nv-mob-btn {
//           background: rgba(30,41,59,0.95);
//           border: 1px solid rgba(255,255,255,0.18);
//           color: #f1f5f9;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.4);
//         }
//         .dark .nv-mob-btn:hover { background: rgba(51,65,85,1); border-color: rgba(129,140,248,0.4); color: #a5b4fc; }

//         /* Close button - adapts to the overlay's current theme */
//         .nv-overlay-close {
//           width: 42px; height: 42px;
//           border-radius: 50%;
//           border: 1px solid rgba(15,23,42,0.12);
//           background: rgba(15,23,42,0.05);
//           color: #334155;
//           cursor: pointer; display: flex; align-items: center; justify-content: center;
//           transition: background 0.2s ease, transform 0.2s ease, color 0.2s ease, border-color 0.2s ease;
//           flex-shrink: 0;
//         }
//         .nv-overlay-close:hover { background: rgba(15,23,42,0.09); transform: scale(1.06); }
//         .nv-overlay-close:active { transform: scale(0.94); }
//         .dark .nv-overlay-close {
//           border: 1px solid rgba(255,255,255,0.14);
//           background: rgba(255,255,255,0.08);
//           color: #fff;
//         }
//         .dark .nv-overlay-close:hover { background: rgba(255,255,255,0.16); }

//         /* Full-screen mobile menu overlay - covers the entire viewport, and
//            follows the site's current light/dark theme rather than always
//            being dark. */
//         .nv-mobile-overlay {
//           position: fixed; inset: 0; z-index: 200;
//           background: #f8fafc;
//           display: flex; flex-direction: column;
//           opacity: 0; visibility: hidden; pointer-events: none;
//           transition: opacity 0.35s ease, background 0.3s ease;
//         }
//         .dark .nv-mobile-overlay { background: #0b0f1f; }
//         .nv-mobile-overlay.open {
//           opacity: 1; visibility: visible; pointer-events: auto;
//         }
//         .nv-mobile-overlay-header {
//           display: flex; justify-content: flex-end; align-items: center;
//           padding: 20px 20px 0;
//           flex-shrink: 0;
//         }
//         .nv-mobile-overlay-body {
//           flex: 1 1 auto;
//           overflow-y: auto;
//           -webkit-overflow-scrolling: touch;
//           padding: 12px 22px 28px;
//           display: flex; flex-direction: column;
//           gap: 6px;
//         }
//         .nv-mlink {
//           display: flex; align-items: center; gap: 15px;
//           width: 100%; padding: 15px 16px; border-radius: 14px;
//           border: none; background: transparent; color: #334155;
//           font-size: 17px; font-weight: 500; cursor: pointer; text-align: left;
//           font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s ease;
//           transform: translateX(-8px); opacity: 0;
//         }
//         .dark .nv-mlink { color: #cbd5e1; }
//         .nv-mobile-overlay.open .nv-mlink { transform: translateX(0); opacity: 1; }
//         .nv-mlink:hover, .nv-mlink.active { background: rgba(99,102,241,0.10); color: #4f46e5; }
//         .dark .nv-mlink:hover, .dark .nv-mlink.active { background: rgba(99,102,241,0.16); color: #818cf8; }
//         .nv-mfooter {
//           display: flex; align-items: center; justify-content: center;
//           flex-wrap: wrap; gap: 12px;
//           padding-top: 20px; margin-top: 14px; border-top: 1px solid rgba(15,23,42,0.1);
//         }
//         .dark .nv-mfooter { border-top: 1px solid rgba(148,163,184,0.18); }
//         /* In dark mode, tone the footer icon buttons down to match the dark
//            overlay (light mode uses the default white .nv-ibtn styling). */
//         .dark .nv-mfooter .nv-ibtn {
//           background: rgba(255,255,255,0.06);
//           color: #cbd5e1;
//           box-shadow: none;
//         }
//         .dark .nv-mfooter .nv-ibtn::before { background: rgba(255,255,255,0.12); }
//         .dark .nv-mfooter .nv-ibtn:hover { background: rgba(255,255,255,0.14); color: #fff; }

//         /* Tablet / touch breakpoint: switch to hamburger.
//            The header now gets a visible bar (translucent fill + bottom
//            lining) instead of floating buttons with nothing behind them,
//            and extra top padding so the buttons sit lower from the edge. */
//         @media (max-width: 1000px) {
//           .nv-desktop { display: none !important; }
//           .nv-mob { display: flex !important; }
//           .nv-outer {
//             justify-content: flex-end;
//             padding: 18px 18px 14px;
//             background: rgba(255,255,255,0.66);
//             backdrop-filter: blur(24px) saturate(180%);
//             -webkit-backdrop-filter: blur(24px) saturate(180%);
//             border-bottom: 1px solid rgba(15,23,42,0.08);
//             box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px rgba(15,23,42,0.05);
//           }
//           .nv-outer.scrolled { padding: 14px 18px 12px; }
//           .dark .nv-outer {
//             background: rgba(9,12,26,0.62);
//             border-bottom: 1px solid rgba(255,255,255,0.08);
//             box-shadow: 0 1px 0 rgba(255,255,255,0.04) inset, 0 6px 24px rgba(0,0,0,0.4);
//           }
//         }
//         @media (min-width: 1001px) {
//           .nv-desktop { display: flex !important; }
//           .nv-mob { display: none !important; }
//           .nv-mobile-overlay { display: none !important; }
//         }

//         /* Phones: tighten outer spacing so the pill never crowds the edges */
//         @media (max-width: 640px) {
//           .pill-base { max-width: 100%; }
//           .nv-outer { padding: 16px 12px 12px; }
//           .nv-outer.scrolled { padding: 13px 12px 10px; }
//           .nv-row { height: 60px; padding: 0 8px; gap: 6px; }
//           .nv-mob-btn, .nv-overlay-close { width: 38px; height: 38px; }
//           .nv-mlink { padding: 13px 14px; font-size: 16px; }
//         }

//         /* Very small phones */
//         @media (max-width: 380px) {
//           .nv-outer { padding: 14px 8px 10px; }
//           .nv-outer.scrolled { padding: 11px 8px 9px; }
//           .nv-row { height: 56px; padding: 0 6px; gap: 4px; }
//           .nv-mob-btn, .nv-overlay-close { width: 36px; height: 36px; }
//         }

//         /* Respect reduced-motion preferences */
//         @media (prefers-reduced-motion: reduce) {
//           .nv-outer, .pill-base, .nv-link, .nv-ibtn, .nv-mob-btn, .nv-overlay-close, .nv-mobile-overlay, .nv-mlink {
//             transition-duration: 0.01ms !important;
//             animation-duration: 0.01ms !important;
//           }
//         }
//       `}</style>

//       <nav
//         className={`nv-outer ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}
//         style={{ background: 'transparent' }}
//       >

//         <div className="pill-base nv-pill nv-desktop">
//           <div className="nv-row">

//             <div className="nv-links">
//               {navItems.map(item => (
//                 <button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   className={`nv-link ${activeSection === item.id ? 'active' : ''}`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>

//             <div className="nv-right">
//               <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
//                 <button className="nv-ibtn" title="GitHub"><Github size={18} /></button>
//               </a>
//               <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
//                 <button className="nv-ibtn" title="LinkedIn"><Linkedin size={18} /></button>
//               </a>
//               <button className="nv-ibtn" onClick={toggleTheme} title={isDark ? 'Light mode' : 'Dark mode'}>
//                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
//               </button>
//               <button className="nv-ibtn nv-ibtn-hire" onClick={() => scrollToSection('#contact')} title="Hire Me">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="12" cy="8" r="3.5" fill="currentColor" opacity="0.95"/>
//                   <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                   <circle cx="19" cy="7" r="4" fill="#22c55e"/>
//                   <text x="19" y="10.2" textAnchor="middle" fontSize="6" fontWeight="800" fill="white" fontFamily="sans-serif">✓</text>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile: theme toggle + hamburger, now two separate circular buttons
//             (white in light mode, dark in dark mode) instead of one shared pill,
//             so they stay visible against any hero background. */}
//         <div className="nv-mob">
//           <button
//             className="nv-mob-btn"
//             onClick={toggleTheme}
//             aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
//             title={isDark ? 'Light mode' : 'Dark mode'}
//           >
//             {isDark ? <Sun size={19} /> : <Moon size={19} />}
//           </button>
//           <button
//             className="nv-mob-btn"
//             onClick={() => setIsMobileMenuOpen(true)}
//             aria-label="Open menu"
//             aria-expanded={isMobileMenuOpen}
//           >
//             <Menu size={22} />
//           </button>
//         </div>
//       </nav>

//       {/* Full-screen mobile menu - covers the viewport edge to edge, top to bottom */}
//       <div className={`nv-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
//         <div className="nv-mobile-overlay-header">
//           {/* Theme toggle intentionally omitted here - only the close action lives in the open menu */}
//           <button
//             className="nv-overlay-close"
//             onClick={() => setIsMobileMenuOpen(false)}
//             aria-label="Close menu"
//           >
//             <X size={24} />
//           </button>
//         </div>
//         <div className="nv-mobile-overlay-body">
//           {navItems.map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.href)}
//                 className={`nv-mlink ${activeSection === item.id ? 'active' : ''}`}
//                 style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
//               >
//                 <Icon size={20} />
//                 {item.name}
//               </button>
//             );
//           })}
//           <div className="nv-mfooter">
//             <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
//               <button className="nv-ibtn"><Github size={19} /></button>
//             </a>
//             <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
//               <button className="nv-ibtn"><Linkedin size={19} /></button>
//             </a>
//             <button className="nv-ibtn nv-ibtn-hire" onClick={() => scrollToSection('#contact')} title="Hire Me">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="12" cy="8" r="3.5" fill="currentColor" opacity="0.95"/>
//                 <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 <circle cx="19" cy="7" r="4" fill="#22c55e"/>
//                 <text x="19" y="10.2" textAnchor="middle" fontSize="6" fontWeight="800" fill="white" fontFamily="sans-serif">✓</text>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navigation;
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail, Eye } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(false);
  const [isEyeComfort, setIsEyeComfort] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero', icon: Home },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 30);

      const sections = navItems.map(i => document.querySelector(i.href)).filter(Boolean);
      const sp = currentScrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= sp) { setActiveSection(s.getAttribute('id') || 'hero'); break; }
      }
      if (currentScrollY < 100) setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(d => !d);
    document.documentElement.classList.toggle('dark');
  };

  // Eye comfort mode: applies a warm, low-blue-light filter over the whole
  // page (similar idea to f.lux / night-light modes), independent of the
  // light/dark theme toggle.
  const toggleEyeComfort = () => {
    setIsEyeComfort(e => !e);
    document.documentElement.classList.toggle('eye-comfort');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        /* Eye comfort mode: warm, dimmed filter applied to the whole page */
        html.eye-comfort {
          filter: sepia(0.28) saturate(0.86) brightness(0.97) hue-rotate(-6deg);
        }

        .nv-outer {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 28px 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          pointer-events: none;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background: transparent;
          transition: padding 0.5s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s ease;
        }
        .nv-outer.scrolled { padding-top: 0; }
        .nv-outer.hidden {
          transform: translateY(-120%);
          opacity: 0;
          pointer-events: none;
        }
        .nv-outer > * { pointer-events: auto; }

        /* Desktop: nav sits flush with the very top edge of the page */
        @media (min-width: 1001px) {
          .nv-outer { padding: 0 28px 0; background: transparent; }
          .nv-outer.scrolled { padding-top: 0; }
        }

        .pill-base {
          border-radius: 0 0 24px 24px;
          border: 1px solid rgba(255,255,255,0.85);
          border-top: none;
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(40px) saturate(210%);
          -webkit-backdrop-filter: blur(40px) saturate(210%);
          box-shadow:
            0 2px 4px rgba(0,0,0,0.03),
            0 10px 40px rgba(0,0,0,0.08),
            0 1px 0 rgba(255,255,255,1) inset,
            0 -1px 0 rgba(0,0,0,0.03) inset;
          transition: all 0.5s cubic-bezier(.4,0,.2,1);
          position: relative; overflow: hidden;
        }
        .dark .pill-base {
          background: rgba(9,12,26,0.84);
          border: 1px solid rgba(255,255,255,0.07);
          border-top: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.45), 0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset;
        }
        .nv-outer.scrolled .pill-base {
          border-radius: 0 0 18px 18px;
          box-shadow: 0 6px 14px rgba(0,0,0,0.07), 0 24px 64px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,1) inset;
        }
        .pill-base::before {
          content: ''; position: absolute; top: 0; left: 6%; right: 6%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 65%, transparent);
          pointer-events: none;
        }

        .nv-pill { flex-shrink: 0; }

        .nv-row {
          display: flex; align-items: center;
          height: 68px;
          padding: 0 10px;
          gap: 10px;
        }

        .nv-links {
          display: flex; align-items: center; gap: 2px;
          background: rgba(241,245,249,0.75);
          border: 1px solid rgba(226,232,240,0.88);
          border-radius: 18px;
          padding: 6px;
        }
        .dark .nv-links { background: rgba(30,41,59,0.55); border-color: rgba(51,65,85,0.78); }

        .nv-link {
          position: relative; font-size: 14px; font-weight: 500;
          padding: 9px 16px;
          border-radius: 12px; color: #64748b;
          border: none; background: transparent; cursor: pointer;
          transition: all 0.22s ease; letter-spacing: -0.01em; white-space: nowrap;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .dark .nv-link { color: #94a3b8; }
        .nv-link:hover { color: #334155; background: rgba(255,255,255,0.92); }
        .dark .nv-link:hover { color: #cbd5e1; background: rgba(51,65,85,0.72); }
        .nv-link.active {
          color: #4f46e5; background: #fff; font-weight: 600;
          box-shadow: 0 1px 6px rgba(0,0,0,0.09), 0 3px 14px rgba(99,102,241,0.15);
        }
        .dark .nv-link.active {
          color: #818cf8; background: rgba(99,102,241,0.18);
          box-shadow: 0 1px 6px rgba(0,0,0,0.35), 0 3px 14px rgba(99,102,241,0.25);
        }
        .nv-link.active::after {
          content: ''; position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%);
          width: 4px; height: 4px; border-radius: 50%; background: #6366f1;
        }
        .dark .nv-link.active::after { background: #818cf8; }

        .nv-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

        .nv-ibtn {
          width: 40px; height: 40px; border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.85);
          color: #64748b;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: color 0.25s ease, transform 0.25s cubic-bezier(.4,0,.2,1);
          flex-shrink: 0;
          position: relative;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05);
        }
        .dark .nv-ibtn {
          background: rgba(30,41,59,0.7);
          color: #94a3b8;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.25);
        }

        .nv-ibtn::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          padding: 2px;
          background: rgba(226,232,240,0.9);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          transition: opacity 0.25s ease;
        }
        .dark .nv-ibtn::before { background: rgba(255,255,255,0.1); }

        .nv-ibtn::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          padding: 2px;
          background: conic-gradient(
            from 0deg,
            #6366f1, #8b5cf6, #ec4899, #f43f5e,
            #f97316, #eab308, #22c55e, #06b6d4,
            #3b82f6, #6366f1
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          animation: spin-ring 1.2s linear infinite;
          transition: opacity 0.3s ease;
        }

        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .nv-ibtn:hover::before { opacity: 0; }
        .nv-ibtn:hover::after  { opacity: 1; }
        .nv-ibtn:hover {
          color: #4f46e5;
          transform: translateY(-2px) scale(1.08);
          background: rgba(255,255,255,1);
          box-shadow: 0 4px 16px rgba(99,102,241,0.18), 0 8px 28px rgba(99,102,241,0.1);
        }
        .dark .nv-ibtn:hover {
          color: #818cf8;
          background: rgba(30,41,59,0.9);
          box-shadow: 0 4px 16px rgba(99,102,241,0.3), 0 8px 28px rgba(99,102,241,0.2);
        }
        .nv-ibtn:active { transform: translateY(0) scale(0.97); }

        .nv-ibtn-hire {
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%) !important;
          color: #fff !important;
          box-shadow: 0 3px 10px rgba(99,102,241,0.45), 0 6px 20px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.24) !important;
        }
        .nv-ibtn-hire:hover {
          color: #fff !important;
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%) !important;
          box-shadow: 0 5px 18px rgba(99,102,241,0.54), 0 10px 32px rgba(99,102,241,0.3) !important;
        }
        .dark .nv-ibtn-hire {
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%) !important;
          color: #fff !important;
        }

        /* Eye comfort toggle button - shares the exact .nv-ibtn ring/hover
           behaviour as GitHub/LinkedIn, plus a persistent warm glow while
           active so you can tell it's on without hovering. */
        .nv-ibtn-comfort.active {
          background: linear-gradient(135deg, #fde68a 0%, #f59e0b 60%, #ea580c 100%) !important;
          color: #fff !important;
          box-shadow: 0 3px 10px rgba(245,158,11,0.45), 0 6px 20px rgba(245,158,11,0.25), inset 0 1px 0 rgba(255,255,255,0.28) !important;
        }
        .nv-ibtn-comfort.active:hover {
          color: #fff !important;
          background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%) !important;
          box-shadow: 0 5px 18px rgba(245,158,11,0.54), 0 10px 32px rgba(245,158,11,0.3) !important;
        }
        .dark .nv-ibtn-comfort.active {
          background: linear-gradient(135deg, #fde68a 0%, #f59e0b 60%, #ea580c 100%) !important;
          color: #fff !important;
        }

        /* Mobile trigger row: theme toggle + hamburger, each its own standalone
           circle (not a shared pill) so the header reads clearly in both
           light and dark mode. Light mode = white circles with a soft border
           and shadow; dark mode = dark circles, mirroring the desktop icon
           buttons. */
        .nv-mob {
          display: none; align-items: center; gap: 10px;
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
        }

        .nv-mob-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(226,232,240,0.9);
          background: #ffffff;
          color: #475569;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: color 0.2s ease, transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
          flex-shrink: 0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.07), 0 4px 14px rgba(0,0,0,0.09);
        }
        .nv-mob-btn:hover { background: #ffffff; color: #4f46e5; transform: scale(1.06); box-shadow: 0 2px 6px rgba(0,0,0,0.09), 0 6px 18px rgba(99,102,241,0.18); }
        .nv-mob-btn:active { transform: scale(0.94); }

        .dark .nv-mob-btn {
          background: rgba(30,41,59,0.95);
          border: 1px solid rgba(255,255,255,0.18);
          color: #f1f5f9;
          box-shadow: 0 2px 8px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.4);
        }
        .dark .nv-mob-btn:hover { background: rgba(51,65,85,1); border-color: rgba(129,140,248,0.4); color: #a5b4fc; }

        /* Close button - adapts to the overlay's current theme */
        .nv-overlay-close {
          width: 42px; height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(15,23,42,0.12);
          background: rgba(15,23,42,0.05);
          color: #334155;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease, color 0.2s ease, border-color 0.2s ease;
          flex-shrink: 0;
        }
        .nv-overlay-close:hover { background: rgba(15,23,42,0.09); transform: scale(1.06); }
        .nv-overlay-close:active { transform: scale(0.94); }
        .dark .nv-overlay-close {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.08);
          color: #fff;
        }
        .dark .nv-overlay-close:hover { background: rgba(255,255,255,0.16); }

        /* Full-screen mobile menu overlay - covers the entire viewport, and
           follows the site's current light/dark theme rather than always
           being dark. */
        .nv-mobile-overlay {
          position: fixed; inset: 0; z-index: 200;
          background: #f8fafc;
          display: flex; flex-direction: column;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.35s ease, background 0.3s ease;
        }
        .dark .nv-mobile-overlay { background: #0b0f1f; }
        .nv-mobile-overlay.open {
          opacity: 1; visibility: visible; pointer-events: auto;
        }
        .nv-mobile-overlay-header {
          display: flex; justify-content: flex-end; align-items: center;
          padding: 20px 20px 0;
          flex-shrink: 0;
        }
        .nv-mobile-overlay-body {
          flex: 1 1 auto;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          padding: 12px 22px 28px;
          display: flex; flex-direction: column;
          gap: 6px;
        }
        .nv-mlink {
          display: flex; align-items: center; gap: 15px;
          width: 100%; padding: 15px 16px; border-radius: 14px;
          border: none; background: transparent; color: #334155;
          font-size: 17px; font-weight: 500; cursor: pointer; text-align: left;
          font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s ease;
          transform: translateX(-8px); opacity: 0;
        }
        .dark .nv-mlink { color: #cbd5e1; }
        .nv-mobile-overlay.open .nv-mlink { transform: translateX(0); opacity: 1; }
        .nv-mlink:hover, .nv-mlink.active { background: rgba(99,102,241,0.10); color: #4f46e5; }
        .dark .nv-mlink:hover, .dark .nv-mlink.active { background: rgba(99,102,241,0.16); color: #818cf8; }
        .nv-mfooter {
          display: flex; align-items: center; justify-content: center;
          flex-wrap: wrap; gap: 12px;
          padding-top: 20px; margin-top: 14px; border-top: 1px solid rgba(15,23,42,0.1);
        }
        .dark .nv-mfooter { border-top: 1px solid rgba(148,163,184,0.18); }
        /* In dark mode, tone the footer icon buttons down to match the dark
           overlay (light mode uses the default white .nv-ibtn styling). */
        .dark .nv-mfooter .nv-ibtn {
          background: rgba(255,255,255,0.06);
          color: #cbd5e1;
          box-shadow: none;
        }
        .dark .nv-mfooter .nv-ibtn::before { background: rgba(255,255,255,0.12); }
        .dark .nv-mfooter .nv-ibtn:hover { background: rgba(255,255,255,0.14); color: #fff; }

        /* Tablet / touch breakpoint: switch to hamburger.
           The header now gets a visible bar (translucent fill + bottom
           lining) instead of floating buttons with nothing behind them,
           and extra top padding so the buttons sit lower from the edge. */
        @media (max-width: 1000px) {
          .nv-desktop { display: none !important; }
          .nv-mob { display: flex !important; }
          .nv-outer {
            justify-content: flex-end;
            padding: 18px 18px 14px;
            background: rgba(255,255,255,0.66);
            backdrop-filter: blur(24px) saturate(180%);
            -webkit-backdrop-filter: blur(24px) saturate(180%);
            border-bottom: 1px solid rgba(15,23,42,0.08);
            box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 24px rgba(15,23,42,0.05);
          }
          .nv-outer.scrolled { padding: 14px 18px 12px; }
          .dark .nv-outer {
            background: rgba(9,12,26,0.62);
            border-bottom: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 1px 0 rgba(255,255,255,0.04) inset, 0 6px 24px rgba(0,0,0,0.4);
          }
        }
        @media (min-width: 1001px) {
          .nv-desktop { display: flex !important; }
          .nv-mob { display: none !important; }
          .nv-mobile-overlay { display: none !important; }
        }

        /* Phones: tighten outer spacing so the pill never crowds the edges */
        @media (max-width: 640px) {
          .pill-base { max-width: 100%; }
          .nv-outer { padding: 16px 12px 12px; }
          .nv-outer.scrolled { padding: 13px 12px 10px; }
          .nv-row { height: 60px; padding: 0 8px; gap: 6px; }
          .nv-mob-btn, .nv-overlay-close { width: 38px; height: 38px; }
          .nv-mlink { padding: 13px 14px; font-size: 16px; }
        }

        /* Very small phones */
        @media (max-width: 380px) {
          .nv-outer { padding: 14px 8px 10px; }
          .nv-outer.scrolled { padding: 11px 8px 9px; }
          .nv-row { height: 56px; padding: 0 6px; gap: 4px; }
          .nv-mob-btn, .nv-overlay-close { width: 36px; height: 36px; }
        }

        /* Respect reduced-motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .nv-outer, .pill-base, .nv-link, .nv-ibtn, .nv-mob-btn, .nv-overlay-close, .nv-mobile-overlay, .nv-mlink {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <nav
        className={`nv-outer ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}
        style={{ background: 'transparent' }}
      >

        <div className="pill-base nv-pill nv-desktop">
          <div className="nv-row">

            <div className="nv-links">
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`nv-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="nv-right">
              <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
                <button className="nv-ibtn" title="GitHub"><Github size={18} /></button>
              </a>
              <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
                <button className="nv-ibtn" title="LinkedIn"><Linkedin size={18} /></button>
              </a>
              <button
                className={`nv-ibtn nv-ibtn-comfort ${isEyeComfort ? 'active' : ''}`}
                onClick={toggleEyeComfort}
                title={isEyeComfort ? 'Disable eye comfort mode' : 'Eye comfort mode'}
              >
                <Eye size={18} />
              </button>
              <button className="nv-ibtn" onClick={toggleTheme} title={isDark ? 'Light mode' : 'Dark mode'}>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="nv-ibtn nv-ibtn-hire" onClick={() => scrollToSection('#contact')} title="Hire Me">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="3.5" fill="currentColor" opacity="0.95"/>
                  <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="19" cy="7" r="4" fill="#22c55e"/>
                  <text x="19" y="10.2" textAnchor="middle" fontSize="6" fontWeight="800" fill="white" fontFamily="sans-serif">✓</text>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: theme toggle + hamburger, now two separate circular buttons
            (white in light mode, dark in dark mode) instead of one shared pill,
            so they stay visible against any hero background. */}
        <div className="nv-mob">
          <button
            className="nv-mob-btn"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            className="nv-mob-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu - covers the viewport edge to edge, top to bottom */}
      <div className={`nv-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="nv-mobile-overlay-header">
          {/* Theme toggle intentionally omitted here - only the close action lives in the open menu */}
          <button
            className="nv-overlay-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="nv-mobile-overlay-body">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`nv-mlink ${activeSection === item.id ? 'active' : ''}`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
              >
                <Icon size={20} />
                {item.name}
              </button>
            );
          })}
          <div className="nv-mfooter">
            <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
              <button className="nv-ibtn"><Github size={19} /></button>
            </a>
            <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
              <button className="nv-ibtn"><Linkedin size={19} /></button>
            </a>
            <button className="nv-ibtn nv-ibtn-hire" onClick={() => scrollToSection('#contact')} title="Hire Me">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="3.5" fill="currentColor" opacity="0.95"/>
                <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="19" cy="7" r="4" fill="#22c55e"/>
                <text x="19" y="10.2" textAnchor="middle" fontSize="6" fontWeight="800" fill="white" fontFamily="sans-serif">✓</text>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;