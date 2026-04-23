// // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { ThemeToggle } from "@/components/ThemeToggle";
// // // // // // // // // // // import { Menu, X, Github, Linkedin } from "lucide-react";

// // // // // // // // // // // const Navigation = () => {
// // // // // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // //       setIsScrolled(window.scrollY > 50);
// // // // // // // // // // //     };

// // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const navItems = [
// // // // // // // // // // //     { name: 'Home', href: '#hero' },
// // // // // // // // // // //     { name: 'About', href: '#about' },
// // // // // // // // // // //     { name: 'Projects', href: '#projects' },
// // // // // // // // // // //     { name: 'Experience', href: '#experience' },
// // // // // // // // // // //     { name: 'Certifications', href: '#certifications' },
// // // // // // // // // // //     { name: 'Contact', href: '#contact' }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const scrollToSection = (href: string) => {
// // // // // // // // // // //     const element = document.querySelector(href);
// // // // // // // // // // //     if (element) {
// // // // // // // // // // //       element.scrollIntoView({ behavior: 'smooth' });
// // // // // // // // // // //     }
// // // // // // // // // // //     setIsMobileMenuOpen(false);
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// // // // // // // // // // //       isScrolled 
// // // // // // // // // // //         ? 'bg-background/90 backdrop-blur-xl shadow-elegant border-b border-border/50' 
// // // // // // // // // // //         : 'bg-transparent'
// // // // // // // // // // //     }`}>
// // // // // // // // // // //       <div className="container mx-auto px-4">
// // // // // // // // // // //         <div className="flex items-center justify-between h-16">
// // // // // // // // // // //           {/* Logo */}
// // // // // // // // // // //           <div className="font-bold text-xl text-primary transition-all duration-300 hover:scale-105 cursor-pointer">
           
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Desktop Navigation */}
// // // // // // // // // // //           <div className="hidden md:flex items-center space-x-8">
// // // // // // // // // // //             {navItems.map((item) => (
// // // // // // // // // // //               <button
// // // // // // // // // // //                 key={item.name}
// // // // // // // // // // //                 onClick={() => scrollToSection(item.href)}
// // // // // // // // // // //                 className="text-foreground/80 hover:text-primary transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg hover:bg-accent/30"
// // // // // // // // // // //               >
// // // // // // // // // // //                 {item.name}
// // // // // // // // // // //                 <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2" />
// // // // // // // // // // //               </button>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Social Links, Theme Toggle & CTA */}
// // // // // // // // // // //           <div className="hidden md:flex items-center space-x-3">
// // // // // // // // // // //             <a 
// // // // // // // // // // //               href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //               target="_blank" 
// // // // // // // // // // //               rel="noopener noreferrer"
// // // // // // // // // // //               className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30 group"
// // // // // // // // // // //             >
// // // // // // // // // // //               <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // // //             </a>
// // // // // // // // // // //             <a 
// // // // // // // // // // //               href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //               target="_blank" 
// // // // // // // // // // //               rel="noopener noreferrer"
// // // // // // // // // // //               className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30 group"
// // // // // // // // // // //             >
// // // // // // // // // // //               <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // // //             </a>
// // // // // // // // // // //             <ThemeToggle />
// // // // // // // // // // //             <Button 
// // // // // // // // // // //               variant="default" 
// // // // // // // // // // //               size="sm"
// // // // // // // // // // //               onClick={() => scrollToSection('#contact')}
// // // // // // // // // // //               className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 border-0"
// // // // // // // // // // //             >
// // // // // // // // // // //               Hire Me
// // // // // // // // // // //             </Button>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Mobile Menu Button & Theme Toggle */}
// // // // // // // // // // //           <div className="md:hidden flex items-center space-x-2">
// // // // // // // // // // //             <ThemeToggle />
// // // // // // // // // // //             <button
// // // // // // // // // // //               className="text-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
// // // // // // // // // // //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // // // // // // // //             >
// // // // // // // // // // //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Mobile Menu */}
// // // // // // // // // // //         {isMobileMenuOpen && (
// // // // // // // // // // //           <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
// // // // // // // // // // //             <div className="px-4 py-6 space-y-2">
// // // // // // // // // // //               {navItems.map((item, index) => (
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   key={item.name}
// // // // // // // // // // //                   onClick={() => scrollToSection(item.href)}
// // // // // // // // // // //                   className="block w-full text-left text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-accent/30 font-medium"
// // // // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {item.name}
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               ))}
              
// // // // // // // // // // //               <div className="flex items-center justify-between pt-4 border-t border-border/30">
// // // // // // // // // // //                 <div className="flex space-x-2">
// // // // // // // // // // //                   <a 
// // // // // // // // // // //                     href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //                     target="_blank" 
// // // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // // //                     className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Github size={20} />
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                   <a 
// // // // // // // // // // //                     href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //                     target="_blank" 
// // // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // // //                     className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Linkedin size={20} />
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <Button 
// // // // // // // // // // //                   variant="default" 
// // // // // // // // // // //                   size="sm"
// // // // // // // // // // //                   onClick={() => scrollToSection('#contact')}
// // // // // // // // // // //                   className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Hire Me
// // // // // // // // // // //                 </Button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </nav>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Navigation;
// // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { ThemeToggle } from "@/components/ThemeToggle";
// // // // // // // // // // // import { Menu, X, Github, Linkedin } from "lucide-react";

// // // // // // // // // // // const Navigation = () => {
// // // // // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // //       setIsScrolled(window.scrollY > 50);
// // // // // // // // // // //     };

// // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const navItems = [
// // // // // // // // // // //     { name: 'Home', href: '#hero' },
// // // // // // // // // // //     { name: 'About', href: '#about' },
// // // // // // // // // // //     { name: 'Projects', href: '#projects' },
// // // // // // // // // // //     { name: 'Experience', href: '#experience' },
// // // // // // // // // // //     { name: 'Certifications', href: '#certifications' },
// // // // // // // // // // //     { name: 'Contact', href: '#contact' }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const scrollToSection = (href: string) => {
// // // // // // // // // // //     const element = document.querySelector(href);
// // // // // // // // // // //     if (element) {
// // // // // // // // // // //       element.scrollIntoView({ behavior: 'smooth' });
// // // // // // // // // // //     }
// // // // // // // // // // //     setIsMobileMenuOpen(false);
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// // // // // // // // // // //       isScrolled 
// // // // // // // // // // //         ? 'bg-background/95 backdrop-blur-xl shadow-elegant border-b border-border/50' 
// // // // // // // // // // //         : 'bg-background/90 backdrop-blur-md'
// // // // // // // // // // //     }`}>
// // // // // // // // // // //       <div className="container mx-auto px-4">
// // // // // // // // // // //         <div className="flex items-center justify-between h-16">
// // // // // // // // // // //           {/* Logo */}
// // // // // // // // // // //           <div className="font-bold text-xl text-primary transition-all duration-300 hover:scale-105 cursor-pointer">
           
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Desktop Navigation */}
// // // // // // // // // // //           <div className="hidden md:flex items-center space-x-8">
// // // // // // // // // // //             {navItems.map((item) => (
// // // // // // // // // // //               <button
// // // // // // // // // // //                 key={item.name}
// // // // // // // // // // //                 onClick={() => scrollToSection(item.href)}
// // // // // // // // // // //                 className="text-foreground/80 hover:text-primary transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg hover:bg-accent/30"
// // // // // // // // // // //               >
// // // // // // // // // // //                 {item.name}
// // // // // // // // // // //                 <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2" />
// // // // // // // // // // //               </button>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Social Links, Theme Toggle & CTA */}
// // // // // // // // // // //           <div className="hidden md:flex items-center space-x-3">
// // // // // // // // // // //             <a 
// // // // // // // // // // //               href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //               target="_blank" 
// // // // // // // // // // //               rel="noopener noreferrer"
// // // // // // // // // // //               className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30 group"
// // // // // // // // // // //             >
// // // // // // // // // // //               <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // // //             </a>
// // // // // // // // // // //             <a 
// // // // // // // // // // //               href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //               target="_blank" 
// // // // // // // // // // //               rel="noopener noreferrer"
// // // // // // // // // // //               className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30 group"
// // // // // // // // // // //             >
// // // // // // // // // // //               <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // // //             </a>
// // // // // // // // // // //             <ThemeToggle />
// // // // // // // // // // //             <Button 
// // // // // // // // // // //               variant="default" 
// // // // // // // // // // //               size="sm"
// // // // // // // // // // //               onClick={() => scrollToSection('#contact')}
// // // // // // // // // // //               className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 border-0"
// // // // // // // // // // //             >
// // // // // // // // // // //               Hire Me
// // // // // // // // // // //             </Button>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Mobile Menu Button & Theme Toggle */}
// // // // // // // // // // //           <div className="md:hidden flex items-center space-x-2">
// // // // // // // // // // //             <ThemeToggle />
// // // // // // // // // // //             <button
// // // // // // // // // // //               className="text-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
// // // // // // // // // // //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // // // // // // // //             >
// // // // // // // // // // //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Mobile Menu */}
// // // // // // // // // // //         {isMobileMenuOpen && (
// // // // // // // // // // //           <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
// // // // // // // // // // //             <div className="px-4 py-6 space-y-2">
// // // // // // // // // // //               {navItems.map((item, index) => (
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   key={item.name}
// // // // // // // // // // //                   onClick={() => scrollToSection(item.href)}
// // // // // // // // // // //                   className="block w-full text-left text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-accent/30 font-medium"
// // // // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {item.name}
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               ))}
              
// // // // // // // // // // //               <div className="flex items-center justify-between pt-4 border-t border-border/30">
// // // // // // // // // // //                 <div className="flex space-x-2">
// // // // // // // // // // //                   <a 
// // // // // // // // // // //                     href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //                     target="_blank" 
// // // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // // //                     className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Github size={20} />
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                   <a 
// // // // // // // // // // //                     href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //                     target="_blank" 
// // // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // // //                     className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Linkedin size={20} />
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <Button 
// // // // // // // // // // //                   variant="default" 
// // // // // // // // // // //                   size="sm"
// // // // // // // // // // //                   onClick={() => scrollToSection('#contact')}
// // // // // // // // // // //                   className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Hire Me
// // // // // // // // // // //                 </Button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </nav>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Navigation;
// // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";

// // // // // // // // // // // const Navigation = () => {
// // // // // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // // // // // // //   const [activeSection, setActiveSection] = useState('home');
// // // // // // // // // // //   const [isDark, setIsDark] = useState(false);

// // // // // // // // // // //   const navItems = [
// // // // // // // // // // //     { name: 'Home', href: '#hero', id: 'hero' },
// // // // // // // // // // //     { name: 'About', href: '#about', id: 'about' },
// // // // // // // // // // //     { name: 'Projects', href: '#projects', id: 'projects' },
// // // // // // // // // // //     { name: 'Experience', href: '#experience', id: 'experience' },
// // // // // // // // // // //     { name: 'Certifications', href: '#certifications', id: 'certifications' },
// // // // // // // // // // //     { name: 'Contact', href: '#contact', id: 'contact' }
// // // // // // // // // // //   ];

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // //       setIsScrolled(window.scrollY > 50);
      
// // // // // // // // // // //       // Active section detection
// // // // // // // // // // //       const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
// // // // // // // // // // //       const scrollPosition = window.scrollY + 100; // Offset for better detection

// // // // // // // // // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // // // // // // // // //         const section = sections[i];
// // // // // // // // // // //         if (section && section.offsetTop <= scrollPosition) {
// // // // // // // // // // //           const sectionId = section.getAttribute('id');
// // // // // // // // // // //           if (sectionId) {
// // // // // // // // // // //             setActiveSection(sectionId);
// // // // // // // // // // //           }
// // // // // // // // // // //           break;
// // // // // // // // // // //         }
// // // // // // // // // // //       }

// // // // // // // // // // //       // If at the very top, set home as active
// // // // // // // // // // //       if (window.scrollY < 100) {
// // // // // // // // // // //         setActiveSection('hero');
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // //     handleScroll(); // Call once to set initial state
    
// // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const scrollToSection = (href: string) => {
// // // // // // // // // // //     const element = document.querySelector(href);
// // // // // // // // // // //     if (element) {
// // // // // // // // // // //       element.scrollIntoView({ behavior: 'smooth' });
// // // // // // // // // // //     }
// // // // // // // // // // //     setIsMobileMenuOpen(false);
// // // // // // // // // // //   };

// // // // // // // // // // //   const toggleTheme = () => {
// // // // // // // // // // //     setIsDark(!isDark);
// // // // // // // // // // //     document.documentElement.classList.toggle('dark');
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// // // // // // // // // // //       isScrolled 
// // // // // // // // // // //         ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
// // // // // // // // // // //         : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md'
// // // // // // // // // // //     }`}>
// // // // // // // // // // //       <div className="container mx-auto px-4">
// // // // // // // // // // //         <div className="flex items-center justify-between h-16">
// // // // // // // // // // //           {/* Logo */}
// // // // // // // // // // //           <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-pointer">
            
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Desktop Navigation */}
// // // // // // // // // // //           <div className="hidden md:flex items-center space-x-8">
// // // // // // // // // // //             {navItems.map((item) => (
// // // // // // // // // // //               <button
// // // // // // // // // // //                 key={item.name}
// // // // // // // // // // //                 onClick={() => scrollToSection(item.href)}
// // // // // // // // // // //                 className={`transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg ${
// // // // // // // // // // //                   activeSection === item.id
// // // // // // // // // // //                     ? 'text-blue-600 dark:text-blue-400'
// // // // // // // // // // //                     : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // // // //                 }`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 {item.name}
// // // // // // // // // // //                 <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300 transform -translate-x-1/2 ${
// // // // // // // // // // //                   activeSection === item.id
// // // // // // // // // // //                     ? 'w-8'
// // // // // // // // // // //                     : 'w-0 group-hover:w-8'
// // // // // // // // // // //                 }`} />
// // // // // // // // // // //               </button>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Social Links, Theme Toggle & CTA */}
// // // // // // // // // // //           <div className="hidden md:flex items-center space-x-3">
// // // // // // // // // // //             <a 
// // // // // // // // // // //               href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //               target="_blank" 
// // // // // // // // // // //               rel="noopener noreferrer"
// // // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
// // // // // // // // // // //             >
// // // // // // // // // // //               <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // // //             </a>
// // // // // // // // // // //             <a 
// // // // // // // // // // //               href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //               target="_blank" 
// // // // // // // // // // //               rel="noopener noreferrer"
// // // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
// // // // // // // // // // //             >
// // // // // // // // // // //               <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // // //             </a>
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={toggleTheme}
// // // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
// // // // // // // // // // //             >
// // // // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // // // //             </button>
// // // // // // // // // // //             <Button 
// // // // // // // // // // //               size="sm"
// // // // // // // // // // //               onClick={() => scrollToSection('#contact')}
// // // // // // // // // // //               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // // // //             >
// // // // // // // // // // //               Hire Me
// // // // // // // // // // //             </Button>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Mobile Menu Button & Theme Toggle */}
// // // // // // // // // // //           <div className="md:hidden flex items-center space-x-2">
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={toggleTheme}
// // // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //             >
// // // // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // // // //             </button>
// // // // // // // // // // //             <button
// // // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // // // // // // // //             >
// // // // // // // // // // //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Mobile Menu */}
// // // // // // // // // // //         {isMobileMenuOpen && (
// // // // // // // // // // //           <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50">
// // // // // // // // // // //             <div className="px-4 py-6 space-y-2">
// // // // // // // // // // //               {navItems.map((item, index) => (
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   key={item.name}
// // // // // // // // // // //                   onClick={() => scrollToSection(item.href)}
// // // // // // // // // // //                   className={`block w-full text-left transition-all duration-300 py-3 px-4 rounded-lg font-medium ${
// // // // // // // // // // //                     activeSection === item.id
// // // // // // // // // // //                       ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
// // // // // // // // // // //                       : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // // // //                   }`}
// // // // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {item.name}
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               ))}
              
// // // // // // // // // // //               <div className="flex items-center justify-between pt-4 border-t border-slate-200/30 dark:border-slate-700/30">
// // // // // // // // // // //                 <div className="flex space-x-2">
// // // // // // // // // // //                   <a 
// // // // // // // // // // //                     href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //                     target="_blank" 
// // // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Github size={20} />
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                   <a 
// // // // // // // // // // //                     href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //                     target="_blank" 
// // // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Linkedin size={20} />
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <Button 
// // // // // // // // // // //                   size="sm"
// // // // // // // // // // //                   onClick={() => scrollToSection('#contact')}
// // // // // // // // // // //                   className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Hire Me
// // // // // // // // // // //                 </Button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </nav>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Navigation;
// // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail } from "lucide-react";

// // // // // // // // // // // const Navigation = () => {
// // // // // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // // // // // // //   const [activeSection, setActiveSection] = useState('home');
// // // // // // // // // // //   const [isDark, setIsDark] = useState(false);
// // // // // // // // // // //   const [currentTime, setCurrentTime] = useState(new Date());

// // // // // // // // // // //   const navItems = [
// // // // // // // // // // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // // // // // // // // // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // // // // // // // // // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // // // // // // // // // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // // // // // // // // // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // // // // // // // // // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail }
// // // // // // // // // // //   ];

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     // Clock timer
// // // // // // // // // // //     const timer = setInterval(() => {
// // // // // // // // // // //       setCurrentTime(new Date());
// // // // // // // // // // //     }, 1000);

// // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // //       setIsScrolled(window.scrollY > 50);
      
// // // // // // // // // // //       // Active section detection
// // // // // // // // // // //       const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
// // // // // // // // // // //       const scrollPosition = window.scrollY + 100; // Offset for better detection

// // // // // // // // // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // // // // // // // // //         const section = sections[i];
// // // // // // // // // // //         if (section && section.offsetTop <= scrollPosition) {
// // // // // // // // // // //           const sectionId = section.getAttribute('id');
// // // // // // // // // // //           if (sectionId) {
// // // // // // // // // // //             setActiveSection(sectionId);
// // // // // // // // // // //           }
// // // // // // // // // // //           break;
// // // // // // // // // // //         }
// // // // // // // // // // //       }

// // // // // // // // // // //       // If at the very top, set home as active
// // // // // // // // // // //       if (window.scrollY < 100) {
// // // // // // // // // // //         setActiveSection('hero');
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // //     handleScroll(); // Call once to set initial state
    
// // // // // // // // // // //     return () => {
// // // // // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // //       clearInterval(timer);
// // // // // // // // // // //     };
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const scrollToSection = (href) => {
// // // // // // // // // // //     const element = document.querySelector(href);
// // // // // // // // // // //     if (element) {
// // // // // // // // // // //       element.scrollIntoView({ behavior: 'smooth' });
// // // // // // // // // // //     }
// // // // // // // // // // //     setIsMobileMenuOpen(false);
// // // // // // // // // // //   };

// // // // // // // // // // //   const toggleTheme = () => {
// // // // // // // // // // //     setIsDark(!isDark);
// // // // // // // // // // //     document.documentElement.classList.toggle('dark');
// // // // // // // // // // //   };

// // // // // // // // // // //   const formatTime = (date) => {
// // // // // // // // // // //     return date.toLocaleTimeString('en-US', { 
// // // // // // // // // // //       hour: '2-digit', 
// // // // // // // // // // //       minute: '2-digit',
// // // // // // // // // // //       second: '2-digit',
// // // // // // // // // // //       hour12: true 
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// // // // // // // // // // //       isScrolled 
// // // // // // // // // // //         ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
// // // // // // // // // // //         : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md'
// // // // // // // // // // //     }`}>
// // // // // // // // // // //       <div className="container mx-auto px-4">
// // // // // // // // // // //         <div className="flex items-center justify-between h-16">
// // // // // // // // // // //           {/* Logo */}
// // // // // // // // // // //           <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-pointer">
            
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Clock - Desktop */}
// // // // // // // // // // //           <div className="hidden lg:flex items-center">
// // // // // // // // // // //             <div className="text-sm font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
// // // // // // // // // // //               {formatTime(currentTime)}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Desktop Navigation */}
// // // // // // // // // // //           <div className="hidden md:flex items-center space-x-8">
// // // // // // // // // // //             {navItems.map((item) => (
// // // // // // // // // // //               <button
// // // // // // // // // // //                 key={item.name}
// // // // // // // // // // //                 onClick={() => scrollToSection(item.href)}
// // // // // // // // // // //                 className={`transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg ${
// // // // // // // // // // //                   activeSection === item.id
// // // // // // // // // // //                     ? 'text-blue-600 dark:text-blue-400'
// // // // // // // // // // //                     : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // // // //                 }`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 {item.name}
// // // // // // // // // // //                 <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300 transform -translate-x-1/2 ${
// // // // // // // // // // //                   activeSection === item.id
// // // // // // // // // // //                     ? 'w-8'
// // // // // // // // // // //                     : 'w-0 group-hover:w-8'
// // // // // // // // // // //                 }`} />
// // // // // // // // // // //               </button>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Social Links, Theme Toggle & CTA */}
// // // // // // // // // // //           <div className="hidden md:flex items-center space-x-3">
// // // // // // // // // // //             <div className="relative group">
// // // // // // // // // // //               <a 
// // // // // // // // // // //                 href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //                 target="_blank" 
// // // // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // // // //                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // // //               </a>
// // // // // // // // // // //               <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
// // // // // // // // // // //                 GitHub
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <div className="relative group">
// // // // // // // // // // //               <a 
// // // // // // // // // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //                 target="_blank" 
// // // // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // // // //                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // // //               </a>
// // // // // // // // // // //               <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
// // // // // // // // // // //                 LinkedIn
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={toggleTheme}
// // // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
// // // // // // // // // // //             >
// // // // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // // // //             </button>
// // // // // // // // // // //             <Button 
// // // // // // // // // // //               size="sm"
// // // // // // // // // // //               onClick={() => scrollToSection('#contact')}
// // // // // // // // // // //               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // // // //             >
// // // // // // // // // // //               Hire Me
// // // // // // // // // // //             </Button>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Mobile Menu Button & Theme Toggle */}
// // // // // // // // // // //           <div className="md:hidden flex items-center space-x-2">
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={toggleTheme}
// // // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //             >
// // // // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // // // //             </button>
// // // // // // // // // // //             <button
// // // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // // // // // // // //             >
// // // // // // // // // // //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Mobile Menu */}
// // // // // // // // // // //         {isMobileMenuOpen && (
// // // // // // // // // // //           <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50">
// // // // // // // // // // //             <div className="px-4 py-6 space-y-2">
// // // // // // // // // // //               {/* Clock - Mobile */}
// // // // // // // // // // //               <div className="mb-4 flex justify-center">
// // // // // // // // // // //                 <div className="text-sm font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
// // // // // // // // // // //                   {formatTime(currentTime)}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
              
// // // // // // // // // // //               {navItems.map((item, index) => {
// // // // // // // // // // //                 const Icon = item.icon;
// // // // // // // // // // //                 return (
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     key={item.name}
// // // // // // // // // // //                     onClick={() => scrollToSection(item.href)}
// // // // // // // // // // //                     className={`flex items-center gap-3 w-full text-left transition-all duration-300 py-3 px-4 rounded-lg font-medium ${
// // // // // // // // // // //                       activeSection === item.id
// // // // // // // // // // //                         ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
// // // // // // // // // // //                         : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // // // //                     }`}
// // // // // // // // // // //                     style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Icon size={20} />
// // // // // // // // // // //                     {item.name}
// // // // // // // // // // //                   </button>
// // // // // // // // // // //                 );
// // // // // // // // // // //               })}
              
// // // // // // // // // // //               <div className="flex items-center justify-between pt-4 border-t border-slate-200/30 dark:border-slate-700/30">
// // // // // // // // // // //                 <div className="flex space-x-2">
// // // // // // // // // // //                   <a 
// // // // // // // // // // //                     href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //                     target="_blank" 
// // // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Github size={20} />
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                   <a 
// // // // // // // // // // //                     href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //                     target="_blank" 
// // // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Linkedin size={20} />
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <Button 
// // // // // // // // // // //                   size="sm"
// // // // // // // // // // //                   onClick={() => scrollToSection('#contact')}
// // // // // // // // // // //                   className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Hire Me
// // // // // // // // // // //                 </Button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </nav>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Navigation;
// // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail } from "lucide-react";

// // // // // // // // // // // const Navigation = () => {
// // // // // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // // // // // // //   const [activeSection, setActiveSection] = useState('home');
// // // // // // // // // // //   const [isDark, setIsDark] = useState(false);
// // // // // // // // // // //   const [currentTime, setCurrentTime] = useState(new Date());

// // // // // // // // // // //   const navItems = [
// // // // // // // // // // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // // // // // // // // // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // // // // // // // // // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // // // // // // // // // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // // // // // // // // // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // // // // // // // // // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail }
// // // // // // // // // // //   ];

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     // Clock timer
// // // // // // // // // // //     const timer = setInterval(() => {
// // // // // // // // // // //       setCurrentTime(new Date());
// // // // // // // // // // //     }, 1000);

// // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // //       setIsScrolled(window.scrollY > 50);
      
// // // // // // // // // // //       // Active section detection
// // // // // // // // // // //       const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
// // // // // // // // // // //       const scrollPosition = window.scrollY + 100;

// // // // // // // // // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // // // // // // // // //         const section = sections[i];
// // // // // // // // // // //         if (section && section.offsetTop <= scrollPosition) {
// // // // // // // // // // //           const sectionId = section.getAttribute('id');
// // // // // // // // // // //           if (sectionId) {
// // // // // // // // // // //             setActiveSection(sectionId);
// // // // // // // // // // //           }
// // // // // // // // // // //           break;
// // // // // // // // // // //         }
// // // // // // // // // // //       }

// // // // // // // // // // //       if (window.scrollY < 100) {
// // // // // // // // // // //         setActiveSection('hero');
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // //     handleScroll();
    
// // // // // // // // // // //     return () => {
// // // // // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // //       clearInterval(timer);
// // // // // // // // // // //     };
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const scrollToSection = (href) => {
// // // // // // // // // // //     const element = document.querySelector(href);
// // // // // // // // // // //     if (element) {
// // // // // // // // // // //       element.scrollIntoView({ behavior: 'smooth' });
// // // // // // // // // // //     }
// // // // // // // // // // //     setIsMobileMenuOpen(false);
// // // // // // // // // // //   };

// // // // // // // // // // //   const toggleTheme = () => {
// // // // // // // // // // //     setIsDark(!isDark);
// // // // // // // // // // //     document.documentElement.classList.toggle('dark');
// // // // // // // // // // //   };

// // // // // // // // // // //   const formatTime = (date) => {
// // // // // // // // // // //     return date.toLocaleTimeString('en-US', { 
// // // // // // // // // // //       hour: '2-digit', 
// // // // // // // // // // //       minute: '2-digit',
// // // // // // // // // // //       second: '2-digit',
// // // // // // // // // // //       hour12: true 
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// // // // // // // // // // //       isScrolled 
// // // // // // // // // // //         ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
// // // // // // // // // // //         : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md'
// // // // // // // // // // //     }`}>
// // // // // // // // // // //       <div className="container mx-auto px-4">
// // // // // // // // // // //         <div className="flex items-center justify-between h-16">
// // // // // // // // // // //           {/* Logo */}
// // // // // // // // // // //           <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-pointer">
// // // // // // // // // // //             Portfolio
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Premium Clock - Desktop */}
// // // // // // // // // // //           <div className="hidden lg:flex items-center">
// // // // // // // // // // //             <div className="relative group">
// // // // // // // // // // //               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
// // // // // // // // // // //               <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 px-5 py-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all duration-300">
// // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // //                   <div className="flex flex-col">
// // // // // // // // // // //                     <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase">Local Time</span>
// // // // // // // // // // //                     <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tabular-nums">
// // // // // // // // // // //                       {formatTime(currentTime)}
// // // // // // // // // // //                     </span>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
// // // // // // // // // // //                   <div className="flex flex-col items-center">
// // // // // // // // // // //                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
// // // // // // // // // // //                     <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 mt-1">LIVE</span>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Desktop Navigation */}
// // // // // // // // // // //           <div className="hidden md:flex items-center space-x-8">
// // // // // // // // // // //             {navItems.map((item) => (
// // // // // // // // // // //               <button
// // // // // // // // // // //                 key={item.name}
// // // // // // // // // // //                 onClick={() => scrollToSection(item.href)}
// // // // // // // // // // //                 className={`transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg ${
// // // // // // // // // // //                   activeSection === item.id
// // // // // // // // // // //                     ? 'text-blue-600 dark:text-blue-400'
// // // // // // // // // // //                     : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // // // //                 }`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 {item.name}
// // // // // // // // // // //                 <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300 transform -translate-x-1/2 ${
// // // // // // // // // // //                   activeSection === item.id
// // // // // // // // // // //                     ? 'w-8'
// // // // // // // // // // //                     : 'w-0 group-hover:w-8'
// // // // // // // // // // //                 }`} />
// // // // // // // // // // //               </button>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Social Links, Theme Toggle & CTA */}
// // // // // // // // // // //           <div className="hidden md:flex items-center space-x-3">
// // // // // // // // // // //             <div className="relative group">
// // // // // // // // // // //               <a 
// // // // // // // // // // //                 href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //                 target="_blank" 
// // // // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // // // //                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // // //               </a>
// // // // // // // // // // //               <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
// // // // // // // // // // //                 GitHub
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <div className="relative group">
// // // // // // // // // // //               <a 
// // // // // // // // // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //                 target="_blank" 
// // // // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // // // //                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // // //               </a>
// // // // // // // // // // //               <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
// // // // // // // // // // //                 LinkedIn
// // // // // // // // // // //               </span>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={toggleTheme}
// // // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
// // // // // // // // // // //             >
// // // // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // // // //             </button>
// // // // // // // // // // //             <Button 
// // // // // // // // // // //               size="sm"
// // // // // // // // // // //               onClick={() => scrollToSection('#contact')}
// // // // // // // // // // //               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // // // //             >
// // // // // // // // // // //               Hire Me
// // // // // // // // // // //             </Button>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Mobile Menu Button & Theme Toggle */}
// // // // // // // // // // //           <div className="md:hidden flex items-center space-x-2">
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={toggleTheme}
// // // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //             >
// // // // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // // // //             </button>
// // // // // // // // // // //             <button
// // // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // // // // // // // //             >
// // // // // // // // // // //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Mobile Menu with Smooth Animation */}
// // // // // // // // // // //         <div 
// // // // // // // // // // //           className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
// // // // // // // // // // //             isMobileMenuOpen 
// // // // // // // // // // //               ? 'max-h-[600px] opacity-100' 
// // // // // // // // // // //               : 'max-h-0 opacity-0'
// // // // // // // // // // //           }`}
// // // // // // // // // // //         >
// // // // // // // // // // //           <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50">
// // // // // // // // // // //             <div className="px-4 py-6 space-y-2">
// // // // // // // // // // //               {/* Premium Clock - Mobile */}
// // // // // // // // // // //               <div className={`mb-4 flex justify-center transition-all duration-700 delay-100 ${
// // // // // // // // // // //                 isMobileMenuOpen 
// // // // // // // // // // //                   ? 'translate-y-0 opacity-100' 
// // // // // // // // // // //                   : '-translate-y-4 opacity-0'
// // // // // // // // // // //               }`}>
// // // // // // // // // // //                 <div className="relative group">
// // // // // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-lg"></div>
// // // // // // // // // // //                   <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 px-6 py-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-lg">
// // // // // // // // // // //                     <div className="flex items-center gap-3">
// // // // // // // // // // //                       <div className="flex flex-col">
// // // // // // // // // // //                         <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase">Local Time</span>
// // // // // // // // // // //                         <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tabular-nums">
// // // // // // // // // // //                           {formatTime(currentTime)}
// // // // // // // // // // //                         </span>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div className="h-10 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
// // // // // // // // // // //                       <div className="flex flex-col items-center">
// // // // // // // // // // //                         <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
// // // // // // // // // // //                         <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 mt-1">LIVE</span>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
              
// // // // // // // // // // //               {navItems.map((item, index) => {
// // // // // // // // // // //                 const Icon = item.icon;
// // // // // // // // // // //                 return (
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     key={item.name}
// // // // // // // // // // //                     onClick={() => scrollToSection(item.href)}
// // // // // // // // // // //                     className={`flex items-center gap-3 w-full text-left transition-all duration-500 py-3 px-4 rounded-lg font-medium ${
// // // // // // // // // // //                       activeSection === item.id
// // // // // // // // // // //                         ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
// // // // // // // // // // //                         : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // // // //                     } ${
// // // // // // // // // // //                       isMobileMenuOpen 
// // // // // // // // // // //                         ? 'translate-x-0 opacity-100' 
// // // // // // // // // // //                         : '-translate-x-4 opacity-0'
// // // // // // // // // // //                     }`}
// // // // // // // // // // //                     style={{ 
// // // // // // // // // // //                       transitionDelay: isMobileMenuOpen ? `${(index + 1) * 100 + 200}ms` : '0ms'
// // // // // // // // // // //                     }}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Icon size={20} />
// // // // // // // // // // //                     {item.name}
// // // // // // // // // // //                   </button>
// // // // // // // // // // //                 );
// // // // // // // // // // //               })}
              
// // // // // // // // // // //               <div className={`flex items-center justify-between pt-4 border-t border-slate-200/30 dark:border-slate-700/30 transition-all duration-700 ${
// // // // // // // // // // //                 isMobileMenuOpen 
// // // // // // // // // // //                   ? 'translate-y-0 opacity-100' 
// // // // // // // // // // //                   : 'translate-y-4 opacity-0'
// // // // // // // // // // //               }`}
// // // // // // // // // // //               style={{ 
// // // // // // // // // // //                 transitionDelay: isMobileMenuOpen ? `${(navItems.length + 1) * 100 + 200}ms` : '0ms'
// // // // // // // // // // //               }}>
// // // // // // // // // // //                 <div className="flex space-x-2">
// // // // // // // // // // //                   <a 
// // // // // // // // // // //                     href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //                     target="_blank" 
// // // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Github size={20} />
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                   <a 
// // // // // // // // // // //                     href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //                     target="_blank" 
// // // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Linkedin size={20} />
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <Button 
// // // // // // // // // // //                   size="sm"
// // // // // // // // // // //                   onClick={() => scrollToSection('#contact')}
// // // // // // // // // // //                   className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Hire Me
// // // // // // // // // // //                 </Button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </nav>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Navigation;
// // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail } from "lucide-react";

// // // // // // // // // // const Navigation = () => {
// // // // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // // // // // //   const [activeSection, setActiveSection] = useState('home');
// // // // // // // // // //   const [isDark, setIsDark] = useState(false);
// // // // // // // // // //   const [currentTime, setCurrentTime] = useState(new Date());

// // // // // // // // // //   const navItems = [
// // // // // // // // // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // // // // // // // // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // // // // // // // // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // // // // // // // // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // // // // // // // // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // // // // // // // // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail }
// // // // // // // // // //   ];

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     // Clock timer
// // // // // // // // // //     const timer = setInterval(() => {
// // // // // // // // // //       setCurrentTime(new Date());
// // // // // // // // // //     }, 1000);

// // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // //       setIsScrolled(window.scrollY > 50);
      
// // // // // // // // // //       // Active section detection
// // // // // // // // // //       const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
// // // // // // // // // //       const scrollPosition = window.scrollY + 100;

// // // // // // // // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // // // // // // // //         const section = sections[i];
// // // // // // // // // //         if (section && section.offsetTop <= scrollPosition) {
// // // // // // // // // //           const sectionId = section.getAttribute('id');
// // // // // // // // // //           if (sectionId) {
// // // // // // // // // //             setActiveSection(sectionId);
// // // // // // // // // //           }
// // // // // // // // // //           break;
// // // // // // // // // //         }
// // // // // // // // // //       }

// // // // // // // // // //       if (window.scrollY < 100) {
// // // // // // // // // //         setActiveSection('hero');
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // //     handleScroll();
    
// // // // // // // // // //     return () => {
// // // // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // // // //       clearInterval(timer);
// // // // // // // // // //     };
// // // // // // // // // //   }, []);

// // // // // // // // // //   const scrollToSection = (href) => {
// // // // // // // // // //     const element = document.querySelector(href);
// // // // // // // // // //     if (element) {
// // // // // // // // // //       element.scrollIntoView({ behavior: 'smooth' });
// // // // // // // // // //     }
// // // // // // // // // //     setIsMobileMenuOpen(false);
// // // // // // // // // //   };

// // // // // // // // // //   const toggleTheme = () => {
// // // // // // // // // //     setIsDark(!isDark);
// // // // // // // // // //     document.documentElement.classList.toggle('dark');
// // // // // // // // // //   };

// // // // // // // // // //   const formatTime = (date) => {
// // // // // // // // // //     return date.toLocaleTimeString('en-US', { 
// // // // // // // // // //       hour: '2-digit', 
// // // // // // // // // //       minute: '2-digit',
// // // // // // // // // //       second: '2-digit',
// // // // // // // // // //       hour12: true 
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// // // // // // // // // //       isScrolled 
// // // // // // // // // //         ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
// // // // // // // // // //         : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md'
// // // // // // // // // //     }`}>
// // // // // // // // // //       <div className="container mx-auto px-4">
// // // // // // // // // //         <div className="flex items-center justify-between h-16">
// // // // // // // // // //           {/* Logo - Empty Space */}
// // // // // // // // // //           <div className="w-24"></div>

// // // // // // // // // //           {/* Premium Clock - Desktop */}
// // // // // // // // // //           <div className="hidden lg:flex items-center">
// // // // // // // // // //             <div className="relative group">
// // // // // // // // // //               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
// // // // // // // // // //               <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 px-4 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all duration-300">
// // // // // // // // // //                 <div className="flex items-center gap-2.5">
// // // // // // // // // //                   <div className="flex flex-col">
// // // // // // // // // //                     <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase">Local Time</span>
// // // // // // // // // //                     <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tabular-nums">
// // // // // // // // // //                       {formatTime(currentTime)}
// // // // // // // // // //                     </span>
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <div className="h-6 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
// // // // // // // // // //                   <div className="flex flex-col items-center">
// // // // // // // // // //                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
// // // // // // // // // //                     <span className="text-[9px] font-medium text-slate-400 dark:text-slate-500 mt-0.5">LIVE</span>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Desktop Navigation */}
// // // // // // // // // //           <div className="hidden md:flex items-center space-x-8">
// // // // // // // // // //             {navItems.map((item) => (
// // // // // // // // // //               <button
// // // // // // // // // //                 key={item.name}
// // // // // // // // // //                 onClick={() => scrollToSection(item.href)}
// // // // // // // // // //                 className={`transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg ${
// // // // // // // // // //                   activeSection === item.id
// // // // // // // // // //                     ? 'text-blue-600 dark:text-blue-400'
// // // // // // // // // //                     : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // // //                 }`}
// // // // // // // // // //               >
// // // // // // // // // //                 {item.name}
// // // // // // // // // //                 <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300 transform -translate-x-1/2 ${
// // // // // // // // // //                   activeSection === item.id
// // // // // // // // // //                     ? 'w-8'
// // // // // // // // // //                     : 'w-0 group-hover:w-8'
// // // // // // // // // //                 }`} />
// // // // // // // // // //               </button>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Social Links, Theme Toggle & CTA */}
// // // // // // // // // //           <div className="hidden md:flex items-center space-x-3">
// // // // // // // // // //             <div className="relative group">
// // // // // // // // // //               <a 
// // // // // // // // // //                 href="https://github.com/Thomasjose-tech" 
// // // // // // // // // //                 target="_blank" 
// // // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // // //                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
// // // // // // // // // //               >
// // // // // // // // // //                 <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // //               </a>
// // // // // // // // // //               <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
// // // // // // // // // //                 GitHub
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div className="relative group">
// // // // // // // // // //               <a 
// // // // // // // // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // //                 target="_blank" 
// // // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // // //                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
// // // // // // // // // //               >
// // // // // // // // // //                 <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // // //               </a>
// // // // // // // // // //               <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
// // // // // // // // // //                 LinkedIn
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={toggleTheme}
// // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
// // // // // // // // // //             >
// // // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // // //             </button>
// // // // // // // // // //             <Button 
// // // // // // // // // //               size="sm"
// // // // // // // // // //               onClick={() => scrollToSection('#contact')}
// // // // // // // // // //               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // // //             >
// // // // // // // // // //               Hire Me
// // // // // // // // // //             </Button>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Mobile Menu Button & Theme Toggle */}
// // // // // // // // // //           <div className="md:hidden flex items-center space-x-2">
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={toggleTheme}
// // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // //             >
// // // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // // //             </button>
// // // // // // // // // //             <button
// // // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // // // // // // //             >
// // // // // // // // // //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Mobile Menu with Smooth Animation */}
// // // // // // // // // //         <div 
// // // // // // // // // //           className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
// // // // // // // // // //             isMobileMenuOpen 
// // // // // // // // // //               ? 'max-h-[600px] opacity-100' 
// // // // // // // // // //               : 'max-h-0 opacity-0'
// // // // // // // // // //           }`}
// // // // // // // // // //         >
// // // // // // // // // //           <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50">
// // // // // // // // // //             <div className="px-4 py-6 space-y-2">
// // // // // // // // // //               {/* Premium Clock - Mobile */}
// // // // // // // // // //               <div className={`mb-4 flex justify-center transition-all duration-700 delay-100 ${
// // // // // // // // // //                 isMobileMenuOpen 
// // // // // // // // // //                   ? 'translate-y-0 opacity-100' 
// // // // // // // // // //                   : '-translate-y-4 opacity-0'
// // // // // // // // // //               }`}>
// // // // // // // // // //                 <div className="relative group">
// // // // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg blur-lg"></div>
// // // // // // // // // //                   <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 px-5 py-2 rounded-lg border border-slate-200/60 dark:border-slate-700/60 shadow-lg">
// // // // // // // // // //                     <div className="flex items-center gap-2.5">
// // // // // // // // // //                       <div className="flex flex-col">
// // // // // // // // // //                         <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase">Local Time</span>
// // // // // // // // // //                         <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tabular-nums">
// // // // // // // // // //                           {formatTime(currentTime)}
// // // // // // // // // //                         </span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <div className="h-7 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
// // // // // // // // // //                       <div className="flex flex-col items-center">
// // // // // // // // // //                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
// // // // // // // // // //                         <span className="text-[9px] font-medium text-slate-400 dark:text-slate-500 mt-0.5">LIVE</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
              
// // // // // // // // // //               {navItems.map((item, index) => {
// // // // // // // // // //                 const Icon = item.icon;
// // // // // // // // // //                 return (
// // // // // // // // // //                   <button
// // // // // // // // // //                     key={item.name}
// // // // // // // // // //                     onClick={() => scrollToSection(item.href)}
// // // // // // // // // //                     className={`flex items-center gap-3 w-full text-left transition-all duration-500 py-3 px-4 rounded-lg font-medium ${
// // // // // // // // // //                       activeSection === item.id
// // // // // // // // // //                         ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
// // // // // // // // // //                         : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // // //                     } ${
// // // // // // // // // //                       isMobileMenuOpen 
// // // // // // // // // //                         ? 'translate-x-0 opacity-100' 
// // // // // // // // // //                         : '-translate-x-4 opacity-0'
// // // // // // // // // //                     }`}
// // // // // // // // // //                     style={{ 
// // // // // // // // // //                       transitionDelay: isMobileMenuOpen ? `${(index + 1) * 100 + 200}ms` : '0ms'
// // // // // // // // // //                     }}
// // // // // // // // // //                   >
// // // // // // // // // //                     <Icon size={20} />
// // // // // // // // // //                     {item.name}
// // // // // // // // // //                   </button>
// // // // // // // // // //                 );
// // // // // // // // // //               })}
              
// // // // // // // // // //               <div className={`flex items-center justify-between pt-4 border-t border-slate-200/30 dark:border-slate-700/30 transition-all duration-700 ${
// // // // // // // // // //                 isMobileMenuOpen 
// // // // // // // // // //                   ? 'translate-y-0 opacity-100' 
// // // // // // // // // //                   : 'translate-y-4 opacity-0'
// // // // // // // // // //               }`}
// // // // // // // // // //               style={{ 
// // // // // // // // // //                 transitionDelay: isMobileMenuOpen ? `${(navItems.length + 1) * 100 + 200}ms` : '0ms'
// // // // // // // // // //               }}>
// // // // // // // // // //                 <div className="flex space-x-2">
// // // // // // // // // //                   <a 
// // // // // // // // // //                     href="https://github.com/Thomasjose-tech" 
// // // // // // // // // //                     target="_blank" 
// // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // //                   >
// // // // // // // // // //                     <Github size={20} />
// // // // // // // // // //                   </a>
// // // // // // // // // //                   <a 
// // // // // // // // // //                     href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // //                     target="_blank" 
// // // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // // //                   >
// // // // // // // // // //                     <Linkedin size={20} />
// // // // // // // // // //                   </a>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <Button 
// // // // // // // // // //                   size="sm"
// // // // // // // // // //                   onClick={() => scrollToSection('#contact')}
// // // // // // // // // //                   className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // // //                 >
// // // // // // // // // //                   Hire Me
// // // // // // // // // //                 </Button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </nav>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Navigation;
// // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail } from "lucide-react";

// // // // // // // // // const Navigation = () => {
// // // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // // // // //   const [activeSection, setActiveSection] = useState('home');
// // // // // // // // //   const [isDark, setIsDark] = useState(false);
// // // // // // // // //   const [currentTime, setCurrentTime] = useState(new Date());

// // // // // // // // //   const navItems = [
// // // // // // // // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // // // // // // // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // // // // // // // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // // // // // // // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // // // // // // // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // // // // // // // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail }
// // // // // // // // //   ];

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     // Clock timer
// // // // // // // // //     const timer = setInterval(() => {
// // // // // // // // //       setCurrentTime(new Date());
// // // // // // // // //     }, 1000);

// // // // // // // // //     const handleScroll = () => {
// // // // // // // // //       setIsScrolled(window.scrollY > 50);
      
// // // // // // // // //       // Active section detection
// // // // // // // // //       const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
// // // // // // // // //       const scrollPosition = window.scrollY + 100;

// // // // // // // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // // // // // // //         const section = sections[i];
// // // // // // // // //         if (section && section.offsetTop <= scrollPosition) {
// // // // // // // // //           const sectionId = section.getAttribute('id');
// // // // // // // // //           if (sectionId) {
// // // // // // // // //             setActiveSection(sectionId);
// // // // // // // // //           }
// // // // // // // // //           break;
// // // // // // // // //         }
// // // // // // // // //       }

// // // // // // // // //       if (window.scrollY < 100) {
// // // // // // // // //         setActiveSection('hero');
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // //     handleScroll();
    
// // // // // // // // //     return () => {
// // // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // // //       clearInterval(timer);
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   const scrollToSection = (href) => {
// // // // // // // // //     const element = document.querySelector(href);
// // // // // // // // //     if (element) {
// // // // // // // // //       element.scrollIntoView({ behavior: 'smooth' });
// // // // // // // // //     }
// // // // // // // // //     setIsMobileMenuOpen(false);
// // // // // // // // //   };

// // // // // // // // //   const toggleTheme = () => {
// // // // // // // // //     setIsDark(!isDark);
// // // // // // // // //     document.documentElement.classList.toggle('dark');
// // // // // // // // //   };

// // // // // // // // //   const formatTime = (date) => {
// // // // // // // // //     return date.toLocaleTimeString('en-US', { 
// // // // // // // // //       hour: '2-digit', 
// // // // // // // // //       minute: '2-digit',
// // // // // // // // //       second: '2-digit',
// // // // // // // // //       hour12: true 
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// // // // // // // // //       isScrolled 
// // // // // // // // //         ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
// // // // // // // // //         : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md'
// // // // // // // // //     }`}>
// // // // // // // // //       <div className="container mx-auto px-4">
// // // // // // // // //         <div className="flex items-center justify-between h-16">
// // // // // // // // //           {/* Desktop Navigation */}
// // // // // // // // //           <div className="hidden md:flex items-center space-x-8">
// // // // // // // // //             <div className="relative group">
// // // // // // // // //               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
// // // // // // // // //               <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 px-4 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all duration-300">
// // // // // // // // //                 <div className="flex items-center gap-2.5">
// // // // // // // // //                   <div className="flex flex-col">
// // // // // // // // //                     <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase">Local Time</span>
// // // // // // // // //                     <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tabular-nums">
// // // // // // // // //                       {formatTime(currentTime)}
// // // // // // // // //                     </span>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="h-6 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
// // // // // // // // //                   <div className="flex flex-col items-center">
// // // // // // // // //                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
// // // // // // // // //                     <span className="text-[9px] font-medium text-slate-400 dark:text-slate-500 mt-0.5">LIVE</span>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Desktop Navigation */}
// // // // // // // // //           <div className="hidden md:flex items-center space-x-8">
// // // // // // // // //             {navItems.map((item) => (
// // // // // // // // //               <button
// // // // // // // // //                 key={item.name}
// // // // // // // // //                 onClick={() => scrollToSection(item.href)}
// // // // // // // // //                 className={`transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg ${
// // // // // // // // //                   activeSection === item.id
// // // // // // // // //                     ? 'text-blue-600 dark:text-blue-400'
// // // // // // // // //                     : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // //                 }`}
// // // // // // // // //               >
// // // // // // // // //                 {item.name}
// // // // // // // // //                 <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300 transform -translate-x-1/2 ${
// // // // // // // // //                   activeSection === item.id
// // // // // // // // //                     ? 'w-8'
// // // // // // // // //                     : 'w-0 group-hover:w-8'
// // // // // // // // //                 }`} />
// // // // // // // // //               </button>
// // // // // // // // //             ))}
// // // // // // // // //           </div>

// // // // // // // // //           {/* Social Links, Theme Toggle & CTA */}
// // // // // // // // //           <div className="hidden md:flex items-center space-x-3">
// // // // // // // // //             <div className="relative group">
// // // // // // // // //               <a 
// // // // // // // // //                 href="https://github.com/Thomasjose-tech" 
// // // // // // // // //                 target="_blank" 
// // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // //                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
// // // // // // // // //               >
// // // // // // // // //                 <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // //               </a>
// // // // // // // // //               <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
// // // // // // // // //                 GitHub
// // // // // // // // //               </span>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="relative group">
// // // // // // // // //               <a 
// // // // // // // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // //                 target="_blank" 
// // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // //                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
// // // // // // // // //               >
// // // // // // // // //                 <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // //               </a>
// // // // // // // // //               <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
// // // // // // // // //                 LinkedIn
// // // // // // // // //               </span>
// // // // // // // // //             </div>
// // // // // // // // //             <button
// // // // // // // // //               onClick={toggleTheme}
// // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
// // // // // // // // //             >
// // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // //             </button>
// // // // // // // // //             <Button 
// // // // // // // // //               size="sm"
// // // // // // // // //               onClick={() => scrollToSection('#contact')}
// // // // // // // // //               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // //             >
// // // // // // // // //               Hire Me
// // // // // // // // //             </Button>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Mobile Menu Button & Theme Toggle */}
// // // // // // // // //           <div className="md:hidden flex items-center space-x-2">
// // // // // // // // //             <button
// // // // // // // // //               onClick={toggleTheme}
// // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // //             >
// // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // //             </button>
// // // // // // // // //             <button
// // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // // // // // //             >
// // // // // // // // //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // // // // // // // //             </button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Mobile Menu with Smooth Animation */}
// // // // // // // // //         <div 
// // // // // // // // //           className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
// // // // // // // // //             isMobileMenuOpen 
// // // // // // // // //               ? 'max-h-[600px] opacity-100' 
// // // // // // // // //               : 'max-h-0 opacity-0'
// // // // // // // // //           }`}
// // // // // // // // //         >
// // // // // // // // //           <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50">
// // // // // // // // //             <div className="px-4 py-6 space-y-2">
              
// // // // // // // // //               {navItems.map((item, index) => {
// // // // // // // // //                 const Icon = item.icon;
// // // // // // // // //                 return (
// // // // // // // // //                   <button
// // // // // // // // //                     key={item.name}
// // // // // // // // //                     onClick={() => scrollToSection(item.href)}
// // // // // // // // //                     className={`flex items-center gap-3 w-full text-left transition-all duration-500 py-3 px-4 rounded-lg font-medium ${
// // // // // // // // //                       activeSection === item.id
// // // // // // // // //                         ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
// // // // // // // // //                         : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // //                     } ${
// // // // // // // // //                       isMobileMenuOpen 
// // // // // // // // //                         ? 'translate-x-0 opacity-100' 
// // // // // // // // //                         : '-translate-x-4 opacity-0'
// // // // // // // // //                     }`}
// // // // // // // // //                     style={{ 
// // // // // // // // //                       transitionDelay: isMobileMenuOpen ? `${(index + 1) * 100}ms` : '0ms'
// // // // // // // // //                     }}
// // // // // // // // //                   >
// // // // // // // // //                     <Icon size={20} />
// // // // // // // // //                     {item.name}
// // // // // // // // //                   </button>
// // // // // // // // //                 );
// // // // // // // // //               })}
              
// // // // // // // // //               <div className={`flex items-center justify-between pt-4 border-t border-slate-200/30 dark:border-slate-700/30 transition-all duration-700 ${
// // // // // // // // //                 isMobileMenuOpen 
// // // // // // // // //                   ? 'translate-y-0 opacity-100' 
// // // // // // // // //                   : 'translate-y-4 opacity-0'
// // // // // // // // //               }`}
// // // // // // // // //               style={{ 
// // // // // // // // //                 transitionDelay: isMobileMenuOpen ? `${(navItems.length + 1) * 100}ms` : '0ms'
// // // // // // // // //               }}>
// // // // // // // // //                 <div className="flex space-x-2">
// // // // // // // // //                   <a 
// // // // // // // // //                     href="https://github.com/Thomasjose-tech" 
// // // // // // // // //                     target="_blank" 
// // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // //                   >
// // // // // // // // //                     <Github size={20} />
// // // // // // // // //                   </a>
// // // // // // // // //                   <a 
// // // // // // // // //                     href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // //                     target="_blank" 
// // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // //                   >
// // // // // // // // //                     <Linkedin size={20} />
// // // // // // // // //                   </a>
// // // // // // // // //                 </div>
// // // // // // // // //                 <Button 
// // // // // // // // //                   size="sm"
// // // // // // // // //                   onClick={() => scrollToSection('#contact')}
// // // // // // // // //                   className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // //                 >
// // // // // // // // //                   Hire Me
// // // // // // // // //                 </Button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </nav>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Navigation;
// // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail } from "lucide-react";

// // // // // // // // // const Navigation = () => {
// // // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // // // // //   const [activeSection, setActiveSection] = useState('home');
// // // // // // // // //   const [isDark, setIsDark] = useState(false);
// // // // // // // // //   const [currentTime, setCurrentTime] = useState(new Date());

// // // // // // // // //   const navItems = [
// // // // // // // // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // // // // // // // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // // // // // // // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // // // // // // // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // // // // // // // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // // // // // // // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail }
// // // // // // // // //   ];

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     // Clock timer
// // // // // // // // //     const timer = setInterval(() => {
// // // // // // // // //       setCurrentTime(new Date());
// // // // // // // // //     }, 1000);

// // // // // // // // //     const handleScroll = () => {
// // // // // // // // //       setIsScrolled(window.scrollY > 50);
      
// // // // // // // // //       // Active section detection
// // // // // // // // //       const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
// // // // // // // // //       const scrollPosition = window.scrollY + 100;

// // // // // // // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // // // // // // //         const section = sections[i];
// // // // // // // // //         if (section && section.offsetTop <= scrollPosition) {
// // // // // // // // //           const sectionId = section.getAttribute('id');
// // // // // // // // //           if (sectionId) {
// // // // // // // // //             setActiveSection(sectionId);
// // // // // // // // //           }
// // // // // // // // //           break;
// // // // // // // // //         }
// // // // // // // // //       }

// // // // // // // // //       if (window.scrollY < 100) {
// // // // // // // // //         setActiveSection('hero');
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // //     handleScroll();
    
// // // // // // // // //     return () => {
// // // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // // //       clearInterval(timer);
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   const scrollToSection = (href) => {
// // // // // // // // //     const element = document.querySelector(href);
// // // // // // // // //     if (element) {
// // // // // // // // //       element.scrollIntoView({ behavior: 'smooth' });
// // // // // // // // //     }
// // // // // // // // //     setIsMobileMenuOpen(false);
// // // // // // // // //   };

// // // // // // // // //   const toggleTheme = () => {
// // // // // // // // //     setIsDark(!isDark);
// // // // // // // // //     document.documentElement.classList.toggle('dark');
// // // // // // // // //   };

// // // // // // // // //   const formatTime = (date) => {
// // // // // // // // //     return date.toLocaleTimeString('en-US', { 
// // // // // // // // //       hour: '2-digit', 
// // // // // // // // //       minute: '2-digit',
// // // // // // // // //       second: '2-digit',
// // // // // // // // //       hour12: true 
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// // // // // // // // //       isScrolled 
// // // // // // // // //         ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
// // // // // // // // //         : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md'
// // // // // // // // //     }`}>
// // // // // // // // //       <div className="container mx-auto px-4">
// // // // // // // // //         <div className="flex items-center justify-between h-16">
// // // // // // // // //           {/* Desktop Navigation */}
// // // // // // // // //           <div className="hidden md:flex items-center space-x-8">
// // // // // // // // //             <div className="relative group">
// // // // // // // // //               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
// // // // // // // // //               <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 px-4 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all duration-300">
// // // // // // // // //                 <div className="flex items-center gap-2.5">
// // // // // // // // //                   <div className="flex flex-col">
// // // // // // // // //                     <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase">Local Time</span>
// // // // // // // // //                     <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tabular-nums">
// // // // // // // // //                       {formatTime(currentTime)}
// // // // // // // // //                     </span>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="h-6 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
// // // // // // // // //                   <div className="flex flex-col items-center">
// // // // // // // // //                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
// // // // // // // // //                     <span className="text-[9px] font-medium text-slate-400 dark:text-slate-500 mt-0.5">LIVE</span>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Desktop Navigation */}
// // // // // // // // //           <div className="hidden md:flex items-center space-x-8">
// // // // // // // // //             {navItems.map((item) => (
// // // // // // // // //               <button
// // // // // // // // //                 key={item.name}
// // // // // // // // //                 onClick={() => scrollToSection(item.href)}
// // // // // // // // //                 className={`transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg ${
// // // // // // // // //                   activeSection === item.id
// // // // // // // // //                     ? 'text-blue-600 dark:text-blue-400'
// // // // // // // // //                     : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // //                 }`}
// // // // // // // // //               >
// // // // // // // // //                 {item.name}
// // // // // // // // //                 <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300 transform -translate-x-1/2 ${
// // // // // // // // //                   activeSection === item.id
// // // // // // // // //                     ? 'w-8'
// // // // // // // // //                     : 'w-0 group-hover:w-8'
// // // // // // // // //                 }`} />
// // // // // // // // //               </button>
// // // // // // // // //             ))}
// // // // // // // // //           </div>

// // // // // // // // //           {/* Social Links, Theme Toggle & CTA */}
// // // // // // // // //           <div className="hidden md:flex items-center space-x-3">
// // // // // // // // //             <div className="relative group">
// // // // // // // // //               <a 
// // // // // // // // //                 href="https://github.com/Thomasjose-tech" 
// // // // // // // // //                 target="_blank" 
// // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // //                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
// // // // // // // // //               >
// // // // // // // // //                 <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // //               </a>
// // // // // // // // //               <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
// // // // // // // // //                 GitHub
// // // // // // // // //               </span>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="relative group">
// // // // // // // // //               <a 
// // // // // // // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // //                 target="_blank" 
// // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // //                 className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center"
// // // // // // // // //               >
// // // // // // // // //                 <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
// // // // // // // // //               </a>
// // // // // // // // //               <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
// // // // // // // // //                 LinkedIn
// // // // // // // // //               </span>
// // // // // // // // //             </div>
// // // // // // // // //             <button
// // // // // // // // //               onClick={toggleTheme}
// // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
// // // // // // // // //             >
// // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // //             </button>
// // // // // // // // //             <Button 
// // // // // // // // //               size="sm"
// // // // // // // // //               onClick={() => scrollToSection('#contact')}
// // // // // // // // //               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // //             >
// // // // // // // // //               Hire Me
// // // // // // // // //             </Button>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Mobile Menu Button & Theme Toggle */}
// // // // // // // // //           <div className="md:hidden flex items-center space-x-2 ml-auto">
// // // // // // // // //             <button
// // // // // // // // //               onClick={toggleTheme}
// // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // //             >
// // // // // // // // //               {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // // // //             </button>
// // // // // // // // //             <button
// // // // // // // // //               className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // // // // // //             >
// // // // // // // // //               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // // // // // // // //             </button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Mobile Menu with Smooth Animation */}
// // // // // // // // //         <div 
// // // // // // // // //           className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
// // // // // // // // //             isMobileMenuOpen 
// // // // // // // // //               ? 'max-h-[600px] opacity-100' 
// // // // // // // // //               : 'max-h-0 opacity-0'
// // // // // // // // //           }`}
// // // // // // // // //         >
// // // // // // // // //           <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50">
// // // // // // // // //             <div className="px-4 py-6 space-y-2">
              
// // // // // // // // //               {navItems.map((item, index) => {
// // // // // // // // //                 const Icon = item.icon;
// // // // // // // // //                 return (
// // // // // // // // //                   <button
// // // // // // // // //                     key={item.name}
// // // // // // // // //                     onClick={() => scrollToSection(item.href)}
// // // // // // // // //                     className={`flex items-center gap-3 w-full text-left transition-all duration-500 py-3 px-4 rounded-lg font-medium ${
// // // // // // // // //                       activeSection === item.id
// // // // // // // // //                         ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
// // // // // // // // //                         : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
// // // // // // // // //                     } ${
// // // // // // // // //                       isMobileMenuOpen 
// // // // // // // // //                         ? 'translate-x-0 opacity-100' 
// // // // // // // // //                         : '-translate-x-4 opacity-0'
// // // // // // // // //                     }`}
// // // // // // // // //                     style={{ 
// // // // // // // // //                       transitionDelay: isMobileMenuOpen ? `${(index + 1) * 100}ms` : '0ms'
// // // // // // // // //                     }}
// // // // // // // // //                   >
// // // // // // // // //                     <Icon size={20} />
// // // // // // // // //                     {item.name}
// // // // // // // // //                   </button>
// // // // // // // // //                 );
// // // // // // // // //               })}
              
// // // // // // // // //               <div className={`flex items-center justify-between pt-4 border-t border-slate-200/30 dark:border-slate-700/30 transition-all duration-700 ${
// // // // // // // // //                 isMobileMenuOpen 
// // // // // // // // //                   ? 'translate-y-0 opacity-100' 
// // // // // // // // //                   : 'translate-y-4 opacity-0'
// // // // // // // // //               }`}
// // // // // // // // //               style={{ 
// // // // // // // // //                 transitionDelay: isMobileMenuOpen ? `${(navItems.length + 1) * 100}ms` : '0ms'
// // // // // // // // //               }}>
// // // // // // // // //                 <div className="flex space-x-2">
// // // // // // // // //                   <a 
// // // // // // // // //                     href="https://github.com/Thomasjose-tech" 
// // // // // // // // //                     target="_blank" 
// // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // //                   >
// // // // // // // // //                     <Github size={20} />
// // // // // // // // //                   </a>
// // // // // // // // //                   <a 
// // // // // // // // //                     href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // //                     target="_blank" 
// // // // // // // // //                     rel="noopener noreferrer"
// // // // // // // // //                     className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
// // // // // // // // //                   >
// // // // // // // // //                     <Linkedin size={20} />
// // // // // // // // //                   </a>
// // // // // // // // //                 </div>
// // // // // // // // //                 <Button 
// // // // // // // // //                   size="sm"
// // // // // // // // //                   onClick={() => scrollToSection('#contact')}
// // // // // // // // //                   className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // //                 >
// // // // // // // // //                   Hire Me
// // // // // // // // //                 </Button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </nav>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Navigation;
// // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail } from "lucide-react";

// // // // // // // // // const Navigation = () => {
// // // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // // // // //   const [activeSection, setActiveSection] = useState('home');
// // // // // // // // //   const [isDark, setIsDark] = useState(false);
// // // // // // // // //   const [currentTime, setCurrentTime] = useState(new Date());

// // // // // // // // //   const navItems = [
// // // // // // // // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // // // // // // // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // // // // // // // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // // // // // // // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // // // // // // // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // // // // // // // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail }
// // // // // // // // //   ];

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const timer = setInterval(() => {
// // // // // // // // //       setCurrentTime(new Date());
// // // // // // // // //     }, 1000);

// // // // // // // // //     const handleScroll = () => {
// // // // // // // // //       setIsScrolled(window.scrollY > 30);

// // // // // // // // //       const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
// // // // // // // // //       const scrollPosition = window.scrollY + 100;

// // // // // // // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // // // // // // //         const section = sections[i];
// // // // // // // // //         if (section && section.offsetTop <= scrollPosition) {
// // // // // // // // //           const sectionId = section.getAttribute('id');
// // // // // // // // //           if (sectionId) setActiveSection(sectionId);
// // // // // // // // //           break;
// // // // // // // // //         }
// // // // // // // // //       }

// // // // // // // // //       if (window.scrollY < 100) setActiveSection('hero');
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // //     handleScroll();

// // // // // // // // //     return () => {
// // // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // // //       clearInterval(timer);
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   const scrollToSection = (href) => {
// // // // // // // // //     const element = document.querySelector(href);
// // // // // // // // //     if (element) element.scrollIntoView({ behavior: 'smooth' });
// // // // // // // // //     setIsMobileMenuOpen(false);
// // // // // // // // //   };

// // // // // // // // //   const toggleTheme = () => {
// // // // // // // // //     setIsDark(!isDark);
// // // // // // // // //     document.documentElement.classList.toggle('dark');
// // // // // // // // //   };

// // // // // // // // //   const formatTime = (date) => {
// // // // // // // // //     return date.toLocaleTimeString('en-US', {
// // // // // // // // //       hour: '2-digit',
// // // // // // // // //       minute: '2-digit',
// // // // // // // // //       second: '2-digit',
// // // // // // // // //       hour12: true
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <style>{`
// // // // // // // // //         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@600;700&display=swap');

// // // // // // // // //         .nav-float {
// // // // // // // // //           font-family: 'DM Sans', sans-serif;
// // // // // // // // //           position: fixed;
// // // // // // // // //           top: 0;
// // // // // // // // //           left: 0;
// // // // // // // // //           right: 0;
// // // // // // // // //           z-index: 50;
// // // // // // // // //           /* Key: gives top breathing room */
// // // // // // // // //           padding: 14px 20px 0;
// // // // // // // // //           transition: padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // // // // //         }

// // // // // // // // //         .nav-float.scrolled {
// // // // // // // // //           padding-top: 10px;
// // // // // // // // //         }

// // // // // // // // //         .nav-pill {
// // // // // // // // //           max-width: 1100px;
// // // // // // // // //           margin: 0 auto;
// // // // // // // // //           border-radius: 18px;
// // // // // // // // //           background: rgba(255, 255, 255, 0.78);
// // // // // // // // //           backdrop-filter: blur(24px) saturate(180%);
// // // // // // // // //           -webkit-backdrop-filter: blur(24px) saturate(180%);
// // // // // // // // //           border: 1px solid rgba(255, 255, 255, 0.9);
// // // // // // // // //           box-shadow:
// // // // // // // // //             0 4px 6px -1px rgba(0,0,0,0.04),
// // // // // // // // //             0 10px 40px -8px rgba(0,0,0,0.10),
// // // // // // // // //             0 0 0 1px rgba(148, 163, 184, 0.12),
// // // // // // // // //             inset 0 1px 0 rgba(255,255,255,0.8);
// // // // // // // // //           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // // // // //         }

// // // // // // // // //         .dark .nav-pill {
// // // // // // // // //           background: rgba(15, 23, 42, 0.82);
// // // // // // // // //           border: 1px solid rgba(255, 255, 255, 0.07);
// // // // // // // // //           box-shadow:
// // // // // // // // //             0 4px 6px -1px rgba(0,0,0,0.3),
// // // // // // // // //             0 10px 40px -8px rgba(0,0,0,0.5),
// // // // // // // // //             0 0 0 1px rgba(255,255,255,0.04),
// // // // // // // // //             inset 0 1px 0 rgba(255,255,255,0.05);
// // // // // // // // //         }

// // // // // // // // //         .nav-float.scrolled .nav-pill {
// // // // // // // // //           border-radius: 14px;
// // // // // // // // //           box-shadow:
// // // // // // // // //             0 8px 20px -4px rgba(0,0,0,0.12),
// // // // // // // // //             0 20px 60px -12px rgba(0,0,0,0.14),
// // // // // // // // //             0 0 0 1px rgba(148, 163, 184, 0.18),
// // // // // // // // //             inset 0 1px 0 rgba(255,255,255,0.9);
// // // // // // // // //         }

// // // // // // // // //         .nav-inner {
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           justify-content: space-between;
// // // // // // // // //           height: 58px;
// // // // // // // // //           padding: 0 20px;
// // // // // // // // //         }

// // // // // // // // //         /* Live clock pill */
// // // // // // // // //         .clock-pill {
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           gap: 10px;
// // // // // // // // //           background: linear-gradient(135deg, rgba(241,245,249,0.9) 0%, rgba(226,232,240,0.6) 100%);
// // // // // // // // //           border: 1px solid rgba(203, 213, 225, 0.6);
// // // // // // // // //           border-radius: 12px;
// // // // // // // // //           padding: 6px 12px;
// // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // //         }

// // // // // // // // //         .dark .clock-pill {
// // // // // // // // //           background: linear-gradient(135deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.6) 100%);
// // // // // // // // //           border: 1px solid rgba(71, 85, 105, 0.5);
// // // // // // // // //         }

// // // // // // // // //         .clock-label {
// // // // // // // // //           font-size: 9px;
// // // // // // // // //           font-weight: 600;
// // // // // // // // //           letter-spacing: 0.08em;
// // // // // // // // //           text-transform: uppercase;
// // // // // // // // //           color: #94a3b8;
// // // // // // // // //         }

// // // // // // // // //         .clock-time {
// // // // // // // // //           font-family: 'Syne', sans-serif;
// // // // // // // // //           font-size: 15px;
// // // // // // // // //           font-weight: 700;
// // // // // // // // //           background: linear-gradient(135deg, #3b82f6, #6366f1);
// // // // // // // // //           -webkit-background-clip: text;
// // // // // // // // //           -webkit-text-fill-color: transparent;
// // // // // // // // //           background-clip: text;
// // // // // // // // //           letter-spacing: -0.02em;
// // // // // // // // //           font-variant-numeric: tabular-nums;
// // // // // // // // //         }

// // // // // // // // //         .live-dot {
// // // // // // // // //           width: 7px;
// // // // // // // // //           height: 7px;
// // // // // // // // //           border-radius: 50%;
// // // // // // // // //           background: #22c55e;
// // // // // // // // //           box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
// // // // // // // // //           animation: pulse-live 2s ease-in-out infinite;
// // // // // // // // //         }

// // // // // // // // //         @keyframes pulse-live {
// // // // // // // // //           0%, 100% { opacity: 1; transform: scale(1); }
// // // // // // // // //           50% { opacity: 0.7; transform: scale(0.85); }
// // // // // // // // //         }

// // // // // // // // //         /* Nav links */
// // // // // // // // //         .nav-links {
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           gap: 2px;
// // // // // // // // //         }

// // // // // // // // //         .nav-link {
// // // // // // // // //           position: relative;
// // // // // // // // //           font-size: 14px;
// // // // // // // // //           font-weight: 500;
// // // // // // // // //           padding: 7px 14px;
// // // // // // // // //           border-radius: 10px;
// // // // // // // // //           color: #475569;
// // // // // // // // //           border: none;
// // // // // // // // //           background: transparent;
// // // // // // // // //           cursor: pointer;
// // // // // // // // //           transition: all 0.25s ease;
// // // // // // // // //           letter-spacing: -0.01em;
// // // // // // // // //         }

// // // // // // // // //         .dark .nav-link {
// // // // // // // // //           color: #94a3b8;
// // // // // // // // //         }

// // // // // // // // //         .nav-link:hover {
// // // // // // // // //           color: #1e293b;
// // // // // // // // //           background: rgba(241, 245, 249, 0.8);
// // // // // // // // //         }

// // // // // // // // //         .dark .nav-link:hover {
// // // // // // // // //           color: #e2e8f0;
// // // // // // // // //           background: rgba(30, 41, 59, 0.8);
// // // // // // // // //         }

// // // // // // // // //         .nav-link.active {
// // // // // // // // //           color: #3b82f6;
// // // // // // // // //           background: rgba(59, 130, 246, 0.08);
// // // // // // // // //         }

// // // // // // // // //         .dark .nav-link.active {
// // // // // // // // //           color: #60a5fa;
// // // // // // // // //           background: rgba(96, 165, 250, 0.1);
// // // // // // // // //         }

// // // // // // // // //         .nav-link-indicator {
// // // // // // // // //           position: absolute;
// // // // // // // // //           bottom: 4px;
// // // // // // // // //           left: 50%;
// // // // // // // // //           transform: translateX(-50%);
// // // // // // // // //           height: 2px;
// // // // // // // // //           border-radius: 99px;
// // // // // // // // //           background: linear-gradient(90deg, #3b82f6, #6366f1);
// // // // // // // // //           transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // // // // // // // //           width: 0;
// // // // // // // // //         }

// // // // // // // // //         .nav-link.active .nav-link-indicator,
// // // // // // // // //         .nav-link:hover .nav-link-indicator {
// // // // // // // // //           width: 20px;
// // // // // // // // //         }

// // // // // // // // //         /* Right side actions */
// // // // // // // // //         .nav-actions {
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           gap: 4px;
// // // // // // // // //         }

// // // // // // // // //         .icon-btn {
// // // // // // // // //           width: 36px;
// // // // // // // // //           height: 36px;
// // // // // // // // //           border-radius: 10px;
// // // // // // // // //           border: none;
// // // // // // // // //           background: transparent;
// // // // // // // // //           color: #64748b;
// // // // // // // // //           cursor: pointer;
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           justify-content: center;
// // // // // // // // //           transition: all 0.2s ease;
// // // // // // // // //         }

// // // // // // // // //         .dark .icon-btn {
// // // // // // // // //           color: #94a3b8;
// // // // // // // // //         }

// // // // // // // // //         .icon-btn:hover {
// // // // // // // // //           background: rgba(241, 245, 249, 0.9);
// // // // // // // // //           color: #3b82f6;
// // // // // // // // //           transform: translateY(-1px);
// // // // // // // // //         }

// // // // // // // // //         .dark .icon-btn:hover {
// // // // // // // // //           background: rgba(30, 41, 59, 0.9);
// // // // // // // // //           color: #60a5fa;
// // // // // // // // //         }

// // // // // // // // //         .divider {
// // // // // // // // //           width: 1px;
// // // // // // // // //           height: 20px;
// // // // // // // // //           background: linear-gradient(to bottom, transparent, rgba(148, 163, 184, 0.3), transparent);
// // // // // // // // //           margin: 0 4px;
// // // // // // // // //         }

// // // // // // // // //         .hire-btn {
// // // // // // // // //           background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
// // // // // // // // //           color: white;
// // // // // // // // //           border: none;
// // // // // // // // //           border-radius: 11px;
// // // // // // // // //           padding: 8px 18px;
// // // // // // // // //           font-size: 13.5px;
// // // // // // // // //           font-weight: 600;
// // // // // // // // //           cursor: pointer;
// // // // // // // // //           letter-spacing: -0.01em;
// // // // // // // // //           box-shadow: 0 2px 12px rgba(99, 102, 241, 0.35);
// // // // // // // // //           transition: all 0.25s ease;
// // // // // // // // //           font-family: 'DM Sans', sans-serif;
// // // // // // // // //         }

// // // // // // // // //         .hire-btn:hover {
// // // // // // // // //           transform: translateY(-1px);
// // // // // // // // //           box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
// // // // // // // // //           filter: brightness(1.05);
// // // // // // // // //         }

// // // // // // // // //         .hire-btn:active {
// // // // // // // // //           transform: translateY(0);
// // // // // // // // //         }

// // // // // // // // //         /* Mobile menu */
// // // // // // // // //         .mobile-drawer {
// // // // // // // // //           overflow: hidden;
// // // // // // // // //           max-height: 0;
// // // // // // // // //           opacity: 0;
// // // // // // // // //           transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
// // // // // // // // //         }

// // // // // // // // //         .mobile-drawer.open {
// // // // // // // // //           max-height: 520px;
// // // // // // // // //           opacity: 1;
// // // // // // // // //         }

// // // // // // // // //         .mobile-drawer-inner {
// // // // // // // // //           border-top: 1px solid rgba(226, 232, 240, 0.5);
// // // // // // // // //           padding: 12px 16px 16px;
// // // // // // // // //         }

// // // // // // // // //         .dark .mobile-drawer-inner {
// // // // // // // // //           border-top-color: rgba(51, 65, 85, 0.5);
// // // // // // // // //         }

// // // // // // // // //         .mobile-nav-link {
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           gap: 12px;
// // // // // // // // //           width: 100%;
// // // // // // // // //           padding: 11px 14px;
// // // // // // // // //           border-radius: 12px;
// // // // // // // // //           border: none;
// // // // // // // // //           background: transparent;
// // // // // // // // //           color: #475569;
// // // // // // // // //           font-size: 14px;
// // // // // // // // //           font-weight: 500;
// // // // // // // // //           cursor: pointer;
// // // // // // // // //           text-align: left;
// // // // // // // // //           transition: all 0.2s ease;
// // // // // // // // //           font-family: 'DM Sans', sans-serif;
// // // // // // // // //           transform: translateX(-8px);
// // // // // // // // //           opacity: 0;
// // // // // // // // //         }

// // // // // // // // //         .dark .mobile-nav-link {
// // // // // // // // //           color: #94a3b8;
// // // // // // // // //         }

// // // // // // // // //         .mobile-drawer.open .mobile-nav-link {
// // // // // // // // //           transform: translateX(0);
// // // // // // // // //           opacity: 1;
// // // // // // // // //         }

// // // // // // // // //         .mobile-nav-link:hover,
// // // // // // // // //         .mobile-nav-link.active {
// // // // // // // // //           background: rgba(241, 245, 249, 0.9);
// // // // // // // // //           color: #3b82f6;
// // // // // // // // //         }

// // // // // // // // //         .dark .mobile-nav-link:hover,
// // // // // // // // //         .dark .mobile-nav-link.active {
// // // // // // // // //           background: rgba(30, 41, 59, 0.9);
// // // // // // // // //           color: #60a5fa;
// // // // // // // // //         }

// // // // // // // // //         .mobile-nav-link.active {
// // // // // // // // //           background: rgba(59, 130, 246, 0.08);
// // // // // // // // //         }

// // // // // // // // //         .mobile-footer {
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           justify-content: space-between;
// // // // // // // // //           padding-top: 12px;
// // // // // // // // //           margin-top: 8px;
// // // // // // // // //           border-top: 1px solid rgba(226, 232, 240, 0.4);
// // // // // // // // //         }

// // // // // // // // //         .dark .mobile-footer {
// // // // // // // // //           border-top-color: rgba(51, 65, 85, 0.4);
// // // // // // // // //         }

// // // // // // // // //         @media (max-width: 768px) {
// // // // // // // // //           .desktop-only { display: none !important; }
// // // // // // // // //           .mobile-only { display: flex !important; }
// // // // // // // // //         }
// // // // // // // // //         @media (min-width: 769px) {
// // // // // // // // //           .desktop-only { display: flex !important; }
// // // // // // // // //           .mobile-only { display: none !important; }
// // // // // // // // //         }
// // // // // // // // //       `}</style>

// // // // // // // // //       <nav className={`nav-float ${isScrolled ? 'scrolled' : ''}`}>
// // // // // // // // //         <div className="nav-pill">
// // // // // // // // //           <div className="nav-inner">

// // // // // // // // //             {/* Clock — desktop */}
// // // // // // // // //             <div className="clock-pill desktop-only">
// // // // // // // // //               <div>
// // // // // // // // //                 <div className="clock-label">Local Time</div>
// // // // // // // // //                 <div className="clock-time">{formatTime(currentTime)}</div>
// // // // // // // // //               </div>
// // // // // // // // //               <div style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, transparent, rgba(148,163,184,0.3), transparent)' }} />
// // // // // // // // //               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
// // // // // // // // //                 <div className="live-dot" />
// // // // // // // // //                 <span className="clock-label">Live</span>
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             {/* Nav links — desktop */}
// // // // // // // // //             <div className="nav-links desktop-only">
// // // // // // // // //               {navItems.map((item) => (
// // // // // // // // //                 <button
// // // // // // // // //                   key={item.name}
// // // // // // // // //                   onClick={() => scrollToSection(item.href)}
// // // // // // // // //                   className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
// // // // // // // // //                 >
// // // // // // // // //                   {item.name}
// // // // // // // // //                   <span className="nav-link-indicator" />
// // // // // // // // //                 </button>
// // // // // // // // //               ))}
// // // // // // // // //             </div>

// // // // // // // // //             {/* Actions — desktop */}
// // // // // // // // //             <div className="nav-actions desktop-only">
// // // // // // // // //               <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // // // // // // //                 <button className="icon-btn"><Github size={17} /></button>
// // // // // // // // //               </a>
// // // // // // // // //               <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // // // // // // //                 <button className="icon-btn"><Linkedin size={17} /></button>
// // // // // // // // //               </a>
// // // // // // // // //               <div className="divider" />
// // // // // // // // //               <button className="icon-btn" onClick={toggleTheme}>
// // // // // // // // //                 {isDark ? <Sun size={17} /> : <Moon size={17} />}
// // // // // // // // //               </button>
// // // // // // // // //               <div className="divider" />
// // // // // // // // //               <button className="hire-btn" onClick={() => scrollToSection('#contact')}>Hire Me</button>
// // // // // // // // //             </div>

// // // // // // // // //             {/* Mobile controls */}
// // // // // // // // //             <div className="mobile-only" style={{ alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
// // // // // // // // //               <button className="icon-btn" onClick={toggleTheme}>
// // // // // // // // //                 {isDark ? <Sun size={17} /> : <Moon size={17} />}
// // // // // // // // //               </button>
// // // // // // // // //               <button className="icon-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
// // // // // // // // //                 {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Mobile drawer */}
// // // // // // // // //           <div className={`mobile-drawer mobile-only ${isMobileMenuOpen ? 'open' : ''}`} style={{ flexDirection: 'column' }}>
// // // // // // // // //             <div className="mobile-drawer-inner">
// // // // // // // // //               {navItems.map((item, i) => {
// // // // // // // // //                 const Icon = item.icon;
// // // // // // // // //                 return (
// // // // // // // // //                   <button
// // // // // // // // //                     key={item.name}
// // // // // // // // //                     onClick={() => scrollToSection(item.href)}
// // // // // // // // //                     className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
// // // // // // // // //                     style={{ transitionDelay: isMobileMenuOpen ? `${i * 55}ms` : '0ms' }}
// // // // // // // // //                   >
// // // // // // // // //                     <Icon size={18} />
// // // // // // // // //                     {item.name}
// // // // // // // // //                   </button>
// // // // // // // // //                 );
// // // // // // // // //               })}
// // // // // // // // //               <div className="mobile-footer">
// // // // // // // // //                 <div style={{ display: 'flex', gap: '4px' }}>
// // // // // // // // //                   <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // // // // // // //                     <button className="icon-btn"><Github size={18} /></button>
// // // // // // // // //                   </a>
// // // // // // // // //                   <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // // // // // // //                     <button className="icon-btn"><Linkedin size={18} /></button>
// // // // // // // // //                   </a>
// // // // // // // // //                 </div>
// // // // // // // // //                 <button className="hire-btn" onClick={() => scrollToSection('#contact')}>Hire Me</button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </nav>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Navigation;
// // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail, Sparkles } from "lucide-react";

// // // // // // // // const Navigation = () => {
// // // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // // // //   const [activeSection, setActiveSection] = useState('hero');
// // // // // // // //   const [isDark, setIsDark] = useState(false);
// // // // // // // //   const [currentTime, setCurrentTime] = useState(new Date());

// // // // // // // //   const navItems = [
// // // // // // // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // // // // // // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // // // // // // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // // // // // // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // // // // // // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // // // // // // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
// // // // // // // //   ];

// // // // // // // //   useEffect(() => {
// // // // // // // //     const timer = setInterval(() => setCurrentTime(new Date()), 1000);

// // // // // // // //     const handleScroll = () => {
// // // // // // // //       setIsScrolled(window.scrollY > 30);
// // // // // // // //       const sections = navItems.map(i => document.querySelector(i.href)).filter(Boolean);
// // // // // // // //       const sp = window.scrollY + 100;
// // // // // // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // // // // // //         const s = sections[i];
// // // // // // // //         if (s && s.offsetTop <= sp) { setActiveSection(s.getAttribute('id') || 'hero'); break; }
// // // // // // // //       }
// // // // // // // //       if (window.scrollY < 100) setActiveSection('hero');
// // // // // // // //     };

// // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // //     handleScroll();
// // // // // // // //     return () => { window.removeEventListener('scroll', handleScroll); clearInterval(timer); };
// // // // // // // //   }, []);

// // // // // // // //   const scrollToSection = (href) => {
// // // // // // // //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
// // // // // // // //     setIsMobileMenuOpen(false);
// // // // // // // //   };

// // // // // // // //   const toggleTheme = () => {
// // // // // // // //     setIsDark(d => !d);
// // // // // // // //     document.documentElement.classList.toggle('dark');
// // // // // // // //   };

// // // // // // // //   const formatTime = (d) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
// // // // // // // //   const formatDate = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <style>{`
// // // // // // // //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');

// // // // // // // //         *, *::before, *::after { box-sizing: border-box; }

// // // // // // // //         .nv-wrap {
// // // // // // // //           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
// // // // // // // //           padding: 16px 24px 0;
// // // // // // // //           transition: padding 0.5s cubic-bezier(.4,0,.2,1);
// // // // // // // //           font-family: 'Inter', sans-serif;
// // // // // // // //           pointer-events: none;
// // // // // // // //         }
// // // // // // // //         .nv-wrap.scrolled { padding-top: 10px; }
// // // // // // // //         .nv-wrap > * { pointer-events: auto; }

// // // // // // // //         .nv-pill {
// // // // // // // //           max-width: 1160px; margin: 0 auto;
// // // // // // // //           border-radius: 20px;
// // // // // // // //           border: 1px solid rgba(255,255,255,0.8);
// // // // // // // //           background: rgba(255,255,255,0.68);
// // // // // // // //           backdrop-filter: blur(36px) saturate(200%);
// // // // // // // //           -webkit-backdrop-filter: blur(36px) saturate(200%);
// // // // // // // //           box-shadow:
// // // // // // // //             0 2px 4px rgba(0,0,0,0.03),
// // // // // // // //             0 8px 32px rgba(0,0,0,0.08),
// // // // // // // //             0 1px 0 rgba(255,255,255,1) inset,
// // // // // // // //             0 -1px 0 rgba(0,0,0,0.03) inset;
// // // // // // // //           transition: all 0.5s cubic-bezier(.4,0,.2,1);
// // // // // // // //           position: relative; overflow: hidden;
// // // // // // // //         }
// // // // // // // //         .dark .nv-pill {
// // // // // // // //           background: rgba(10,14,28,0.82);
// // // // // // // //           border: 1px solid rgba(255,255,255,0.07);
// // // // // // // //           box-shadow: 0 4px 8px rgba(0,0,0,0.4), 0 16px 48px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.06) inset;
// // // // // // // //         }
// // // // // // // //         .nv-wrap.scrolled .nv-pill {
// // // // // // // //           border-radius: 16px;
// // // // // // // //           box-shadow: 0 4px 10px rgba(0,0,0,0.06), 0 20px 56px rgba(0,0,0,0.11), 0 1px 0 rgba(255,255,255,1) inset;
// // // // // // // //         }
// // // // // // // //         /* Shimmer top edge */
// // // // // // // //         .nv-pill::before {
// // // // // // // //           content: ''; position: absolute; top: 0; left: 8%; right: 8%; height: 1px;
// // // // // // // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.95) 60%, transparent);
// // // // // // // //         }

// // // // // // // //         .nv-row {
// // // // // // // //           display: flex; align-items: center; justify-content: space-between;
// // // // // // // //           height: 64px; padding: 0 8px; gap: 8px; position: relative;
// // // // // // // //         }

// // // // // // // //         /* Brand */
// // // // // // // //         .nv-brand {
// // // // // // // //           display: flex; align-items: center; gap: 10px;
// // // // // // // //           border: none; background: none; cursor: pointer;
// // // // // // // //           padding: 6px 10px; border-radius: 14px;
// // // // // // // //           transition: background 0.2s ease; flex-shrink: 0;
// // // // // // // //           text-align: left;
// // // // // // // //         }
// // // // // // // //         .nv-brand:hover { background: rgba(99,102,241,0.06); }
// // // // // // // //         .nv-logo {
// // // // // // // //           width: 36px; height: 36px; border-radius: 11px;
// // // // // // // //           background: linear-gradient(135deg, #6366f1 0%, #3b82f6 60%, #06b6d4 100%);
// // // // // // // //           display: flex; align-items: center; justify-content: center;
// // // // // // // //           font-family: 'Space Grotesk', sans-serif; font-size: 14px; font-weight: 700; color: #fff;
// // // // // // // //           box-shadow: 0 4px 14px rgba(99,102,241,0.45), inset 0 1px 0 rgba(255,255,255,0.28);
// // // // // // // //           flex-shrink: 0; letter-spacing: -0.5px;
// // // // // // // //         }
// // // // // // // //         .nv-brand-name {
// // // // // // // //           font-family: 'Space Grotesk', sans-serif; font-size: 14.5px; font-weight: 600;
// // // // // // // //           color: #1e293b; letter-spacing: -0.3px; line-height: 1;
// // // // // // // //         }
// // // // // // // //         .dark .nv-brand-name { color: #f1f5f9; }
// // // // // // // //         .nv-brand-role {
// // // // // // // //           font-size: 10px; font-weight: 500; color: #94a3b8;
// // // // // // // //           letter-spacing: 0.06em; text-transform: uppercase; margin-top: 3px; line-height: 1;
// // // // // // // //         }

// // // // // // // //         /* Nav pills group */
// // // // // // // //         .nv-links {
// // // // // // // //           display: flex; align-items: center; gap: 1px;
// // // // // // // //           background: rgba(241,245,249,0.7); border: 1px solid rgba(226,232,240,0.8);
// // // // // // // //           border-radius: 14px; padding: 4px;
// // // // // // // //         }
// // // // // // // //         .dark .nv-links { background: rgba(30,41,59,0.5); border-color: rgba(51,65,85,0.7); }
// // // // // // // //         .nv-link {
// // // // // // // //           position: relative; font-size: 13.5px; font-weight: 500;
// // // // // // // //           padding: 6.5px 13px; border-radius: 10px; color: #64748b;
// // // // // // // //           border: none; background: transparent; cursor: pointer;
// // // // // // // //           transition: all 0.22s ease; letter-spacing: -0.01em; white-space: nowrap;
// // // // // // // //         }
// // // // // // // //         .dark .nv-link { color: #94a3b8; }
// // // // // // // //         .nv-link:hover { color: #334155; background: rgba(255,255,255,0.85); }
// // // // // // // //         .dark .nv-link:hover { color: #cbd5e1; background: rgba(51,65,85,0.65); }
// // // // // // // //         .nv-link.active {
// // // // // // // //           color: #4f46e5; background: #fff; font-weight: 600;
// // // // // // // //           box-shadow: 0 1px 5px rgba(0,0,0,0.09), 0 2px 10px rgba(99,102,241,0.13);
// // // // // // // //         }
// // // // // // // //         .dark .nv-link.active {
// // // // // // // //           color: #818cf8; background: rgba(99,102,241,0.16);
// // // // // // // //           box-shadow: 0 1px 5px rgba(0,0,0,0.3), 0 2px 10px rgba(99,102,241,0.22);
// // // // // // // //         }
// // // // // // // //         .nv-link.active::after {
// // // // // // // //           content: ''; position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
// // // // // // // //           width: 4px; height: 4px; border-radius: 50%; background: #6366f1;
// // // // // // // //         }
// // // // // // // //         .dark .nv-link.active::after { background: #818cf8; }

// // // // // // // //         /* Right side */
// // // // // // // //         .nv-right { display: flex; align-items: center; gap: 3px; flex-shrink: 0; }

// // // // // // // //         /* Clock */
// // // // // // // //         .nv-clock {
// // // // // // // //           display: flex; flex-direction: column; align-items: flex-end;
// // // // // // // //           padding: 5px 12px;
// // // // // // // //           background: rgba(241,245,249,0.75); border: 1px solid rgba(226,232,240,0.8);
// // // // // // // //           border-radius: 13px; margin-right: 4px; cursor: default;
// // // // // // // //         }
// // // // // // // //         .dark .nv-clock { background: rgba(30,41,59,0.65); border-color: rgba(51,65,85,0.7); }
// // // // // // // //         .nv-clock-time {
// // // // // // // //           font-family: 'Space Grotesk', sans-serif; font-size: 14px; font-weight: 600;
// // // // // // // //           color: #1e293b; letter-spacing: -0.03em; line-height: 1; font-variant-numeric: tabular-nums;
// // // // // // // //         }
// // // // // // // //         .dark .nv-clock-time { color: #e2e8f0; }
// // // // // // // //         .nv-clock-date {
// // // // // // // //           font-size: 9.5px; font-weight: 500; color: #94a3b8;
// // // // // // // //           letter-spacing: 0.02em; margin-top: 2.5px; line-height: 1;
// // // // // // // //           display: flex; align-items: center; gap: 4px;
// // // // // // // //         }
// // // // // // // //         .nv-live-dot {
// // // // // // // //           width: 5px; height: 5px; border-radius: 50%; background: #22c55e;
// // // // // // // //           box-shadow: 0 0 6px rgba(34,197,94,0.7); flex-shrink: 0;
// // // // // // // //           animation: blink 2s ease-in-out infinite;
// // // // // // // //         }
// // // // // // // //         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.35} }

// // // // // // // //         /* Icon buttons */
// // // // // // // //         .nv-ibtn {
// // // // // // // //           width: 36px; height: 36px; border-radius: 10px;
// // // // // // // //           border: none; background: transparent; color: #64748b;
// // // // // // // //           cursor: pointer; display: flex; align-items: center; justify-content: center;
// // // // // // // //           transition: all 0.2s ease; flex-shrink: 0;
// // // // // // // //         }
// // // // // // // //         .dark .nv-ibtn { color: #94a3b8; }
// // // // // // // //         .nv-ibtn:hover { background: rgba(241,245,249,0.9); color: #4f46e5; transform: translateY(-1px); }
// // // // // // // //         .dark .nv-ibtn:hover { background: rgba(30,41,59,0.9); color: #818cf8; }

// // // // // // // //         .nv-sep { width: 1px; height: 22px; margin: 0 3px; background: linear-gradient(to bottom, transparent, rgba(148,163,184,0.25), transparent); }

// // // // // // // //         /* CTA button */
// // // // // // // //         .nv-cta {
// // // // // // // //           position: relative; overflow: hidden;
// // // // // // // //           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%);
// // // // // // // //           color: white; border: none; border-radius: 12px;
// // // // // // // //           padding: 0 18px; height: 38px;
// // // // // // // //           font-size: 13.5px; font-weight: 600; cursor: pointer;
// // // // // // // //           letter-spacing: -0.01em; font-family: 'Inter', sans-serif;
// // // // // // // //           box-shadow: 0 2px 8px rgba(99,102,241,0.42), 0 4px 18px rgba(99,102,241,0.22), inset 0 1px 0 rgba(255,255,255,0.22);
// // // // // // // //           transition: all 0.25s ease;
// // // // // // // //           display: flex; align-items: center; gap: 6px; white-space: nowrap;
// // // // // // // //         }
// // // // // // // //         .nv-cta::before {
// // // // // // // //           content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
// // // // // // // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
// // // // // // // //           transform: skewX(-20deg);
// // // // // // // //           transition: left 0.5s ease;
// // // // // // // //         }
// // // // // // // //         .nv-cta:hover::before { left: 160%; }
// // // // // // // //         .nv-cta:hover {
// // // // // // // //           transform: translateY(-2px);
// // // // // // // //           box-shadow: 0 4px 14px rgba(99,102,241,0.5), 0 8px 28px rgba(99,102,241,0.28);
// // // // // // // //         }
// // // // // // // //         .nv-cta:active { transform: translateY(0); }

// // // // // // // //         /* Mobile */
// // // // // // // //         .nv-mob { display: none; align-items: center; gap: 6px; margin-left: auto; }
// // // // // // // //         .nv-drawer { display: none; flex-direction: column; overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.45s cubic-bezier(.4,0,.2,1), opacity 0.3s ease; }
// // // // // // // //         .nv-drawer.open { max-height: 580px; opacity: 1; }
// // // // // // // //         .nv-drawer-body { border-top: 1px solid rgba(226,232,240,0.5); padding: 12px 14px 16px; }
// // // // // // // //         .dark .nv-drawer-body { border-top-color: rgba(51,65,85,0.5); }
// // // // // // // //         .nv-mlink {
// // // // // // // //           display: flex; align-items: center; gap: 12px;
// // // // // // // //           width: 100%; padding: 11px 14px; border-radius: 12px;
// // // // // // // //           border: none; background: transparent; color: #475569;
// // // // // // // //           font-size: 14px; font-weight: 500; cursor: pointer; text-align: left;
// // // // // // // //           font-family: 'Inter', sans-serif; transition: all 0.2s ease;
// // // // // // // //           transform: translateX(-8px); opacity: 0;
// // // // // // // //         }
// // // // // // // //         .dark .nv-mlink { color: #94a3b8; }
// // // // // // // //         .nv-drawer.open .nv-mlink { transform: translateX(0); opacity: 1; }
// // // // // // // //         .nv-mlink:hover,.nv-mlink.active { background: rgba(241,245,249,0.9); color: #4f46e5; }
// // // // // // // //         .dark .nv-mlink:hover,.dark .nv-mlink.active { background: rgba(30,41,59,0.9); color: #818cf8; }
// // // // // // // //         .nv-mfooter {
// // // // // // // //           display: flex; align-items: center; justify-content: space-between;
// // // // // // // //           padding-top: 12px; margin-top: 8px; border-top: 1px solid rgba(226,232,240,0.4);
// // // // // // // //         }
// // // // // // // //         .dark .nv-mfooter { border-top-color: rgba(51,65,85,0.4); }

// // // // // // // //         @media (max-width: 900px) {
// // // // // // // //           .nv-desktop { display: none !important; }
// // // // // // // //           .nv-mob { display: flex !important; }
// // // // // // // //           .nv-drawer { display: flex !important; }
// // // // // // // //         }
// // // // // // // //         @media (min-width: 901px) {
// // // // // // // //           .nv-desktop { display: flex !important; }
// // // // // // // //           .nv-mob { display: none !important; }
// // // // // // // //           .nv-drawer { display: none !important; }
// // // // // // // //         }
// // // // // // // //       `}</style>

// // // // // // // //       <nav className={`nv-wrap ${isScrolled ? 'scrolled' : ''}`}>
// // // // // // // //         <div className="nv-pill">
// // // // // // // //           <div className="nv-row">

// // // // // // // //             {/* Brand */}
// // // // // // // //             <button className="nv-brand" onClick={() => scrollToSection('#hero')}>
// // // // // // // //               <div className="nv-logo">TJ</div>
// // // // // // // //               <div style={{ display: 'flex', flexDirection: 'column' }}>
// // // // // // // //                 <span className="nv-brand-name">Thomas Jose</span>
// // // // // // // //                 <span className="nv-brand-role">Full Stack Dev</span>
// // // // // // // //               </div>
// // // // // // // //             </button>

// // // // // // // //             {/* Nav links — desktop */}
// // // // // // // //             <div className="nv-links nv-desktop">
// // // // // // // //               {navItems.map(item => (
// // // // // // // //                 <button
// // // // // // // //                   key={item.name}
// // // // // // // //                   onClick={() => scrollToSection(item.href)}
// // // // // // // //                   className={`nv-link ${activeSection === item.id ? 'active' : ''}`}
// // // // // // // //                 >
// // // // // // // //                   {item.name}
// // // // // // // //                 </button>
// // // // // // // //               ))}
// // // // // // // //             </div>

// // // // // // // //             {/* Right — desktop */}
// // // // // // // //             <div className="nv-right nv-desktop">
// // // // // // // //               <div className="nv-clock">
// // // // // // // //                 <span className="nv-clock-time">{formatTime(currentTime)}</span>
// // // // // // // //                 <span className="nv-clock-date">
// // // // // // // //                   <span className="nv-live-dot" />
// // // // // // // //                   {formatDate(currentTime)}
// // // // // // // //                 </span>
// // // // // // // //               </div>
// // // // // // // //               <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // // // // // //                 <button className="nv-ibtn" title="GitHub"><Github size={17} /></button>
// // // // // // // //               </a>
// // // // // // // //               <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // // // // // //                 <button className="nv-ibtn" title="LinkedIn"><Linkedin size={17} /></button>
// // // // // // // //               </a>
// // // // // // // //               <div className="nv-sep" />
// // // // // // // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // // // // // // //                 {isDark ? <Sun size={17} /> : <Moon size={17} />}
// // // // // // // //               </button>
// // // // // // // //               <div className="nv-sep" />
// // // // // // // //               <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // // // // // // //                 <Sparkles size={13} />
// // // // // // // //                 Hire Me
// // // // // // // //               </button>
// // // // // // // //             </div>

// // // // // // // //             {/* Mobile controls */}
// // // // // // // //             <div className="nv-mob">
// // // // // // // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // // // // // // //                 {isDark ? <Sun size={17} /> : <Moon size={17} />}
// // // // // // // //               </button>
// // // // // // // //               <button className="nv-ibtn" onClick={() => setIsMobileMenuOpen(o => !o)}>
// // // // // // // //                 {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Mobile drawer */}
// // // // // // // //           <div className={`nv-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
// // // // // // // //             <div className="nv-drawer-body">
// // // // // // // //               {navItems.map((item, i) => {
// // // // // // // //                 const Icon = item.icon;
// // // // // // // //                 return (
// // // // // // // //                   <button
// // // // // // // //                     key={item.name}
// // // // // // // //                     onClick={() => scrollToSection(item.href)}
// // // // // // // //                     className={`nv-mlink ${activeSection === item.id ? 'active' : ''}`}
// // // // // // // //                     style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
// // // // // // // //                   >
// // // // // // // //                     <Icon size={17} />
// // // // // // // //                     {item.name}
// // // // // // // //                   </button>
// // // // // // // //                 );
// // // // // // // //               })}
// // // // // // // //               <div className="nv-mfooter">
// // // // // // // //                 <div style={{ display: 'flex', gap: '4px' }}>
// // // // // // // //                   <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // // // // // //                     <button className="nv-ibtn"><Github size={18} /></button>
// // // // // // // //                   </a>
// // // // // // // //                   <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // // // // // //                     <button className="nv-ibtn"><Linkedin size={18} /></button>
// // // // // // // //                   </a>
// // // // // // // //                 </div>
// // // // // // // //                 <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // // // // // // //                   <Sparkles size={13} /> Hire Me
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </nav>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Navigation;
// // // // // // // import { useState, useEffect } from "react";
// // // // // // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail, Sparkles } from "lucide-react";

// // // // // // // const Navigation = () => {
// // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // // //   const [activeSection, setActiveSection] = useState('hero');
// // // // // // //   const [isDark, setIsDark] = useState(false);
// // // // // // //   const [currentTime, setCurrentTime] = useState(new Date());

// // // // // // //   const navItems = [
// // // // // // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // // // // // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // // // // // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // // // // // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // // // // // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // // // // // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
// // // // // // //   ];

// // // // // // //   useEffect(() => {
// // // // // // //     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
// // // // // // //     const handleScroll = () => {
// // // // // // //       setIsScrolled(window.scrollY > 30);
// // // // // // //       const sections = navItems.map(i => document.querySelector(i.href)).filter(Boolean);
// // // // // // //       const sp = window.scrollY + 100;
// // // // // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // // // // //         const s = sections[i];
// // // // // // //         if (s && s.offsetTop <= sp) { setActiveSection(s.getAttribute('id') || 'hero'); break; }
// // // // // // //       }
// // // // // // //       if (window.scrollY < 100) setActiveSection('hero');
// // // // // // //     };
// // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // //     handleScroll();
// // // // // // //     return () => { window.removeEventListener('scroll', handleScroll); clearInterval(timer); };
// // // // // // //   }, []);

// // // // // // //   const scrollToSection = (href) => {
// // // // // // //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
// // // // // // //     setIsMobileMenuOpen(false);
// // // // // // //   };

// // // // // // //   const toggleTheme = () => {
// // // // // // //     setIsDark(d => !d);
// // // // // // //     document.documentElement.classList.toggle('dark');
// // // // // // //   };

// // // // // // //   const formatTime = (d) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
// // // // // // //   const formatDate = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <style>{`
// // // // // // //         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap');

// // // // // // //         *, *::before, *::after { box-sizing: border-box; }

// // // // // // //         .nv-wrap {
// // // // // // //           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
// // // // // // //           padding: 20px 28px 0;
// // // // // // //           transition: padding 0.5s cubic-bezier(.4,0,.2,1);
// // // // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // // // //           pointer-events: none;
// // // // // // //         }
// // // // // // //         .nv-wrap.scrolled { padding-top: 12px; }
// // // // // // //         .nv-wrap > * { pointer-events: auto; }

// // // // // // //         /* Outer pill */
// // // // // // //         .nv-pill {
// // // // // // //           max-width: 1220px; margin: 0 auto;
// // // // // // //           border-radius: 24px;
// // // // // // //           border: 1px solid rgba(255,255,255,0.85);
// // // // // // //           background: rgba(255,255,255,0.72);
// // // // // // //           backdrop-filter: blur(40px) saturate(210%);
// // // // // // //           -webkit-backdrop-filter: blur(40px) saturate(210%);
// // // // // // //           box-shadow:
// // // // // // //             0 2px 4px rgba(0,0,0,0.03),
// // // // // // //             0 10px 40px rgba(0,0,0,0.08),
// // // // // // //             0 1px 0 rgba(255,255,255,1) inset,
// // // // // // //             0 -1px 0 rgba(0,0,0,0.03) inset;
// // // // // // //           transition: all 0.5s cubic-bezier(.4,0,.2,1);
// // // // // // //           position: relative; overflow: hidden;
// // // // // // //         }
// // // // // // //         .dark .nv-pill {
// // // // // // //           background: rgba(9,12,26,0.84);
// // // // // // //           border: 1px solid rgba(255,255,255,0.07);
// // // // // // //           box-shadow: 0 4px 10px rgba(0,0,0,0.45), 0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset;
// // // // // // //         }
// // // // // // //         .nv-wrap.scrolled .nv-pill {
// // // // // // //           border-radius: 18px;
// // // // // // //           box-shadow: 0 6px 14px rgba(0,0,0,0.07), 0 24px 64px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,1) inset;
// // // // // // //         }
// // // // // // //         .nv-pill::before {
// // // // // // //           content: ''; position: absolute; top: 0; left: 6%; right: 6%; height: 1px;
// // // // // // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 65%, transparent);
// // // // // // //           pointer-events: none;
// // // // // // //         }

// // // // // // //         /* Main row — tall outer bar */
// // // // // // //         .nv-row {
// // // // // // //           display: flex; align-items: center; justify-content: space-between;
// // // // // // //           height: 80px;
// // // // // // //           padding: 0 14px;
// // // // // // //           gap: 10px; position: relative;
// // // // // // //         }

// // // // // // //         /* Brand */
// // // // // // //         .nv-brand {
// // // // // // //           display: flex; align-items: center; gap: 12px;
// // // // // // //           border: none; background: none; cursor: pointer;
// // // // // // //           padding: 8px 12px; border-radius: 16px;
// // // // // // //           transition: background 0.2s ease; flex-shrink: 0; text-align: left;
// // // // // // //         }
// // // // // // //         .nv-brand:hover { background: rgba(99,102,241,0.07); }
// // // // // // //         .nv-logo {
// // // // // // //           width: 44px; height: 44px; border-radius: 14px;
// // // // // // //           background: linear-gradient(135deg, #6366f1 0%, #3b82f6 55%, #06b6d4 100%);
// // // // // // //           display: flex; align-items: center; justify-content: center;
// // // // // // //           font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 800; color: #fff;
// // // // // // //           box-shadow: 0 5px 18px rgba(99,102,241,0.5), inset 0 1px 0 rgba(255,255,255,0.3);
// // // // // // //           flex-shrink: 0; letter-spacing: -0.5px;
// // // // // // //         }
// // // // // // //         .nv-brand-name {
// // // // // // //           font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 700;
// // // // // // //           color: #1e293b; letter-spacing: -0.4px; line-height: 1;
// // // // // // //         }
// // // // // // //         .dark .nv-brand-name { color: #f1f5f9; }
// // // // // // //         .nv-brand-role {
// // // // // // //           font-size: 11px; font-weight: 500; color: #94a3b8;
// // // // // // //           letter-spacing: 0.07em; text-transform: uppercase; margin-top: 4px; line-height: 1;
// // // // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // // // //         }

// // // // // // //         /* Inner nav pill */
// // // // // // //         .nv-links {
// // // // // // //           display: flex; align-items: center; gap: 2px;
// // // // // // //           background: rgba(241,245,249,0.75);
// // // // // // //           border: 1px solid rgba(226,232,240,0.88);
// // // // // // //           border-radius: 18px;
// // // // // // //           padding: 6px;
// // // // // // //         }
// // // // // // //         .dark .nv-links { background: rgba(30,41,59,0.55); border-color: rgba(51,65,85,0.78); }

// // // // // // //         .nv-link {
// // // // // // //           position: relative; font-size: 14px; font-weight: 500;
// // // // // // //           padding: 9px 16px;
// // // // // // //           border-radius: 12px; color: #64748b;
// // // // // // //           border: none; background: transparent; cursor: pointer;
// // // // // // //           transition: all 0.22s ease; letter-spacing: -0.01em; white-space: nowrap;
// // // // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // // // //         }
// // // // // // //         .dark .nv-link { color: #94a3b8; }
// // // // // // //         .nv-link:hover { color: #334155; background: rgba(255,255,255,0.92); }
// // // // // // //         .dark .nv-link:hover { color: #cbd5e1; background: rgba(51,65,85,0.72); }
// // // // // // //         .nv-link.active {
// // // // // // //           color: #4f46e5; background: #fff; font-weight: 600;
// // // // // // //           box-shadow: 0 1px 6px rgba(0,0,0,0.09), 0 3px 14px rgba(99,102,241,0.15);
// // // // // // //         }
// // // // // // //         .dark .nv-link.active {
// // // // // // //           color: #818cf8; background: rgba(99,102,241,0.18);
// // // // // // //           box-shadow: 0 1px 6px rgba(0,0,0,0.35), 0 3px 14px rgba(99,102,241,0.25);
// // // // // // //         }
// // // // // // //         .nv-link.active::after {
// // // // // // //           content: ''; position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%);
// // // // // // //           width: 4px; height: 4px; border-radius: 50%; background: #6366f1;
// // // // // // //         }
// // // // // // //         .dark .nv-link.active::after { background: #818cf8; }

// // // // // // //         /* Right cluster */
// // // // // // //         .nv-right { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }

// // // // // // //         /* Clock badge */
// // // // // // //         .nv-clock {
// // // // // // //           display: flex; flex-direction: column; align-items: flex-end;
// // // // // // //           padding: 8px 15px;
// // // // // // //           background: rgba(241,245,249,0.8); border: 1px solid rgba(226,232,240,0.88);
// // // // // // //           border-radius: 15px; margin-right: 5px; cursor: default;
// // // // // // //         }
// // // // // // //         .dark .nv-clock { background: rgba(30,41,59,0.7); border-color: rgba(51,65,85,0.78); }
// // // // // // //         .nv-clock-time {
// // // // // // //           font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 700;
// // // // // // //           color: #1e293b; letter-spacing: -0.03em; line-height: 1;
// // // // // // //           font-variant-numeric: tabular-nums;
// // // // // // //         }
// // // // // // //         .dark .nv-clock-time { color: #e2e8f0; }
// // // // // // //         .nv-clock-date {
// // // // // // //           font-size: 10px; font-weight: 500; color: #94a3b8;
// // // // // // //           letter-spacing: 0.02em; margin-top: 3px; line-height: 1;
// // // // // // //           display: flex; align-items: center; gap: 5px;
// // // // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // // // //         }
// // // // // // //         .nv-live-dot {
// // // // // // //           width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
// // // // // // //           box-shadow: 0 0 8px rgba(34,197,94,0.75); flex-shrink: 0;
// // // // // // //           animation: blink 2s ease-in-out infinite;
// // // // // // //         }
// // // // // // //         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

// // // // // // //         /* Icon buttons */
// // // // // // //         .nv-ibtn {
// // // // // // //           width: 42px; height: 42px; border-radius: 12px;
// // // // // // //           border: none; background: transparent; color: #64748b;
// // // // // // //           cursor: pointer; display: flex; align-items: center; justify-content: center;
// // // // // // //           transition: all 0.2s ease; flex-shrink: 0;
// // // // // // //         }
// // // // // // //         .dark .nv-ibtn { color: #94a3b8; }
// // // // // // //         .nv-ibtn:hover { background: rgba(241,245,249,0.95); color: #4f46e5; transform: translateY(-1px); }
// // // // // // //         .dark .nv-ibtn:hover { background: rgba(30,41,59,0.95); color: #818cf8; }

// // // // // // //         .nv-sep { width: 1px; height: 26px; margin: 0 3px; background: linear-gradient(to bottom, transparent, rgba(148,163,184,0.3), transparent); }

// // // // // // //         /* CTA button */
// // // // // // //         .nv-cta {
// // // // // // //           position: relative; overflow: hidden;
// // // // // // //           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%);
// // // // // // //           color: white; border: none; border-radius: 14px;
// // // // // // //           padding: 0 24px; height: 44px;
// // // // // // //           font-size: 14.5px; font-weight: 700; cursor: pointer;
// // // // // // //           letter-spacing: -0.01em; font-family: 'Outfit', sans-serif;
// // // // // // //           box-shadow: 0 3px 10px rgba(99,102,241,0.45), 0 6px 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.24);
// // // // // // //           transition: all 0.25s ease;
// // // // // // //           display: flex; align-items: center; gap: 7px; white-space: nowrap;
// // // // // // //         }
// // // // // // //         .nv-cta::before {
// // // // // // //           content: ''; position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
// // // // // // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
// // // // // // //           transform: skewX(-20deg); transition: left 0.55s ease;
// // // // // // //         }
// // // // // // //         .nv-cta:hover::before { left: 160%; }
// // // // // // //         .nv-cta:hover {
// // // // // // //           transform: translateY(-2px);
// // // // // // //           box-shadow: 0 5px 18px rgba(99,102,241,0.54), 0 10px 32px rgba(99,102,241,0.3);
// // // // // // //         }
// // // // // // //         .nv-cta:active { transform: translateY(0); }

// // // // // // //         /* Mobile */
// // // // // // //         .nv-mob { display: none; align-items: center; gap: 6px; margin-left: auto; }
// // // // // // //         .nv-drawer { display: none; flex-direction: column; overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.45s cubic-bezier(.4,0,.2,1), opacity 0.3s ease; }
// // // // // // //         .nv-drawer.open { max-height: 620px; opacity: 1; }
// // // // // // //         .nv-drawer-body { border-top: 1px solid rgba(226,232,240,0.5); padding: 14px 18px 20px; }
// // // // // // //         .dark .nv-drawer-body { border-top-color: rgba(51,65,85,0.5); }
// // // // // // //         .nv-mlink {
// // // // // // //           display: flex; align-items: center; gap: 13px;
// // // // // // //           width: 100%; padding: 13px 16px; border-radius: 13px;
// // // // // // //           border: none; background: transparent; color: #475569;
// // // // // // //           font-size: 15px; font-weight: 500; cursor: pointer; text-align: left;
// // // // // // //           font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s ease;
// // // // // // //           transform: translateX(-8px); opacity: 0;
// // // // // // //         }
// // // // // // //         .dark .nv-mlink { color: #94a3b8; }
// // // // // // //         .nv-drawer.open .nv-mlink { transform: translateX(0); opacity: 1; }
// // // // // // //         .nv-mlink:hover,.nv-mlink.active { background: rgba(241,245,249,0.9); color: #4f46e5; }
// // // // // // //         .dark .nv-mlink:hover,.dark .nv-mlink.active { background: rgba(30,41,59,0.9); color: #818cf8; }
// // // // // // //         .nv-mfooter {
// // // // // // //           display: flex; align-items: center; justify-content: space-between;
// // // // // // //           padding-top: 14px; margin-top: 10px; border-top: 1px solid rgba(226,232,240,0.4);
// // // // // // //         }
// // // // // // //         .dark .nv-mfooter { border-top-color: rgba(51,65,85,0.4); }

// // // // // // //         @media (max-width: 1000px) {
// // // // // // //           .nv-desktop { display: none !important; }
// // // // // // //           .nv-mob { display: flex !important; }
// // // // // // //           .nv-drawer { display: flex !important; }
// // // // // // //         }
// // // // // // //         @media (min-width: 1001px) {
// // // // // // //           .nv-desktop { display: flex !important; }
// // // // // // //           .nv-mob { display: none !important; }
// // // // // // //           .nv-drawer { display: none !important; }
// // // // // // //         }
// // // // // // //       `}</style>

// // // // // // //       <nav className={`nv-wrap ${isScrolled ? 'scrolled' : ''}`}>
// // // // // // //         <div className="nv-pill">
// // // // // // //           <div className="nv-row">

// // // // // // //             {/* Brand */}
// // // // // // //             <button className="nv-brand" onClick={() => scrollToSection('#hero')}>
// // // // // // //               <div className="nv-logo">TJ</div>
// // // // // // //               <div style={{ display: 'flex', flexDirection: 'column' }}>
// // // // // // //                 <span className="nv-brand-name">Thomas Jose</span>
// // // // // // //                 <span className="nv-brand-role">Full Stack Dev</span>
// // // // // // //               </div>
// // // // // // //             </button>

// // // // // // //             {/* Nav links — desktop */}
// // // // // // //             <div className="nv-links nv-desktop">
// // // // // // //               {navItems.map(item => (
// // // // // // //                 <button
// // // // // // //                   key={item.name}
// // // // // // //                   onClick={() => scrollToSection(item.href)}
// // // // // // //                   className={`nv-link ${activeSection === item.id ? 'active' : ''}`}
// // // // // // //                 >
// // // // // // //                   {item.name}
// // // // // // //                 </button>
// // // // // // //               ))}
// // // // // // //             </div>

// // // // // // //             {/* Right — desktop */}
// // // // // // //             <div className="nv-right nv-desktop">
// // // // // // //               <div className="nv-clock">
// // // // // // //                 <span className="nv-clock-time">{formatTime(currentTime)}</span>
// // // // // // //                 <span className="nv-clock-date">
// // // // // // //                   <span className="nv-live-dot" />
// // // // // // //                   {formatDate(currentTime)}
// // // // // // //                 </span>
// // // // // // //               </div>
// // // // // // //               <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // // // // //                 <button className="nv-ibtn" title="GitHub"><Github size={18} /></button>
// // // // // // //               </a>
// // // // // // //               <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // // // // //                 <button className="nv-ibtn" title="LinkedIn"><Linkedin size={18} /></button>
// // // // // // //               </a>
// // // // // // //               <div className="nv-sep" />
// // // // // // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // // // // // //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // //               </button>
// // // // // // //               <div className="nv-sep" />
// // // // // // //               <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // // // // // //                 <Sparkles size={14} />
// // // // // // //                 Hire Me
// // // // // // //               </button>
// // // // // // //             </div>

// // // // // // //             {/* Mobile controls */}
// // // // // // //             <div className="nv-mob">
// // // // // // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // // // // // //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // // //               </button>
// // // // // // //               <button className="nv-ibtn" onClick={() => setIsMobileMenuOpen(o => !o)}>
// // // // // // //                 {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Mobile drawer */}
// // // // // // //           <div className={`nv-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
// // // // // // //             <div className="nv-drawer-body">
// // // // // // //               {navItems.map((item, i) => {
// // // // // // //                 const Icon = item.icon;
// // // // // // //                 return (
// // // // // // //                   <button
// // // // // // //                     key={item.name}
// // // // // // //                     onClick={() => scrollToSection(item.href)}
// // // // // // //                     className={`nv-mlink ${activeSection === item.id ? 'active' : ''}`}
// // // // // // //                     style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
// // // // // // //                   >
// // // // // // //                     <Icon size={18} />
// // // // // // //                     {item.name}
// // // // // // //                   </button>
// // // // // // //                 );
// // // // // // //               })}
// // // // // // //               <div className="nv-mfooter">
// // // // // // //                 <div style={{ display: 'flex', gap: '4px' }}>
// // // // // // //                   <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // // // // //                     <button className="nv-ibtn"><Github size={19} /></button>
// // // // // // //                   </a>
// // // // // // //                   <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // // // // //                     <button className="nv-ibtn"><Linkedin size={19} /></button>
// // // // // // //                   </a>
// // // // // // //                 </div>
// // // // // // //                 <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // // // // // //                   <Sparkles size={13} /> Hire Me
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </nav>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navigation;
// // // // // // import { useState, useEffect } from "react";
// // // // // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail, Sparkles } from "lucide-react";

// // // // // // const Navigation = () => {
// // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // //   const [activeSection, setActiveSection] = useState('hero');
// // // // // //   const [isDark, setIsDark] = useState(false);
// // // // // //   const [currentTime, setCurrentTime] = useState(new Date());
// // // // // //   const [isVisible, setIsVisible] = useState(true);
// // // // // //   const [lastScrollY, setLastScrollY] = useState(0);

// // // // // //   const navItems = [
// // // // // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // // // // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // // // // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // // // // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // // // // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // // // // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     const timer = setInterval(() => setCurrentTime(new Date()), 1000);

// // // // // //     const handleScroll = () => {
// // // // // //       const currentScrollY = window.scrollY;

// // // // // //       // Hide on scroll up, show on scroll down
// // // // // //       if (currentScrollY < lastScrollY || currentScrollY < 80) {
// // // // // //         setIsVisible(true);
// // // // // //       } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
// // // // // //         setIsVisible(false);
// // // // // //         setIsMobileMenuOpen(false);
// // // // // //       }
// // // // // //       setLastScrollY(currentScrollY);

// // // // // //       setIsScrolled(currentScrollY > 30);

// // // // // //       const sections = navItems.map(i => document.querySelector(i.href)).filter(Boolean);
// // // // // //       const sp = currentScrollY + 100;
// // // // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // // // //         const s = sections[i];
// // // // // //         if (s && s.offsetTop <= sp) { setActiveSection(s.getAttribute('id') || 'hero'); break; }
// // // // // //       }
// // // // // //       if (currentScrollY < 100) setActiveSection('hero');
// // // // // //     };

// // // // // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // // // // //     handleScroll();
// // // // // //     return () => { window.removeEventListener('scroll', handleScroll); clearInterval(timer); };
// // // // // //   }, [lastScrollY]);

// // // // // //   const scrollToSection = (href) => {
// // // // // //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
// // // // // //     setIsMobileMenuOpen(false);
// // // // // //   };

// // // // // //   const toggleTheme = () => {
// // // // // //     setIsDark(d => !d);
// // // // // //     document.documentElement.classList.toggle('dark');
// // // // // //   };

// // // // // //   const formatTime = (d) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
// // // // // //   const formatDate = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

// // // // // //   return (
// // // // // //     <>
// // // // // //       <style>{`
// // // // // //         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap');

// // // // // //         *, *::before, *::after { box-sizing: border-box; }

// // // // // //         .nv-outer {
// // // // // //           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
// // // // // //           padding: 20px 28px 0;
// // // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // // //           pointer-events: none;
// // // // // //           display: flex;
// // // // // //           align-items: flex-start;
// // // // // //           justify-content: center;
// // // // // //           gap: 14px;
// // // // // //           transition: padding 0.5s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s ease;
// // // // // //         }
// // // // // //         .nv-outer.scrolled { padding-top: 12px; }
// // // // // //         .nv-outer.hidden {
// // // // // //           transform: translateY(-120%);
// // // // // //           opacity: 0;
// // // // // //           pointer-events: none;
// // // // // //         }
// // // // // //         .nv-outer > * { pointer-events: auto; }

// // // // // //         .pill-base {
// // // // // //           border-radius: 24px;
// // // // // //           border: 1px solid rgba(255,255,255,0.85);
// // // // // //           background: rgba(255,255,255,0.72);
// // // // // //           backdrop-filter: blur(40px) saturate(210%);
// // // // // //           -webkit-backdrop-filter: blur(40px) saturate(210%);
// // // // // //           box-shadow:
// // // // // //             0 2px 4px rgba(0,0,0,0.03),
// // // // // //             0 10px 40px rgba(0,0,0,0.08),
// // // // // //             0 1px 0 rgba(255,255,255,1) inset,
// // // // // //             0 -1px 0 rgba(0,0,0,0.03) inset;
// // // // // //           transition: all 0.5s cubic-bezier(.4,0,.2,1);
// // // // // //           position: relative; overflow: hidden;
// // // // // //         }
// // // // // //         .dark .pill-base {
// // // // // //           background: rgba(9,12,26,0.84);
// // // // // //           border: 1px solid rgba(255,255,255,0.07);
// // // // // //           box-shadow: 0 4px 10px rgba(0,0,0,0.45), 0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset;
// // // // // //         }
// // // // // //         .nv-outer.scrolled .pill-base {
// // // // // //           border-radius: 18px;
// // // // // //           box-shadow: 0 6px 14px rgba(0,0,0,0.07), 0 24px 64px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,1) inset;
// // // // // //         }
// // // // // //         .pill-base::before {
// // // // // //           content: ''; position: absolute; top: 0; left: 6%; right: 6%; height: 1px;
// // // // // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 65%, transparent);
// // // // // //           pointer-events: none;
// // // // // //         }

// // // // // //         .nv-pill {
// // // // // //           flex-shrink: 0;
// // // // // //         }

// // // // // //         .nv-row {
// // // // // //           display: flex; align-items: center; justify-content: space-between;
// // // // // //           height: 68px;
// // // // // //           padding: 0 10px;
// // // // // //           gap: 8px;
// // // // // //         }

// // // // // //         /* Nav links group */
// // // // // //         .nv-links {
// // // // // //           display: flex; align-items: center; gap: 2px;
// // // // // //           background: rgba(241,245,249,0.75);
// // // // // //           border: 1px solid rgba(226,232,240,0.88);
// // // // // //           border-radius: 18px;
// // // // // //           padding: 6px;
// // // // // //         }
// // // // // //         .dark .nv-links { background: rgba(30,41,59,0.55); border-color: rgba(51,65,85,0.78); }

// // // // // //         .nv-link {
// // // // // //           position: relative; font-size: 14px; font-weight: 500;
// // // // // //           padding: 9px 16px;
// // // // // //           border-radius: 12px; color: #64748b;
// // // // // //           border: none; background: transparent; cursor: pointer;
// // // // // //           transition: all 0.22s ease; letter-spacing: -0.01em; white-space: nowrap;
// // // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // // //         }
// // // // // //         .dark .nv-link { color: #94a3b8; }
// // // // // //         .nv-link:hover { color: #334155; background: rgba(255,255,255,0.92); }
// // // // // //         .dark .nv-link:hover { color: #cbd5e1; background: rgba(51,65,85,0.72); }
// // // // // //         .nv-link.active {
// // // // // //           color: #4f46e5; background: #fff; font-weight: 600;
// // // // // //           box-shadow: 0 1px 6px rgba(0,0,0,0.09), 0 3px 14px rgba(99,102,241,0.15);
// // // // // //         }
// // // // // //         .dark .nv-link.active {
// // // // // //           color: #818cf8; background: rgba(99,102,241,0.18);
// // // // // //           box-shadow: 0 1px 6px rgba(0,0,0,0.35), 0 3px 14px rgba(99,102,241,0.25);
// // // // // //         }
// // // // // //         .nv-link.active::after {
// // // // // //           content: ''; position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%);
// // // // // //           width: 4px; height: 4px; border-radius: 50%; background: #6366f1;
// // // // // //         }
// // // // // //         .dark .nv-link.active::after { background: #818cf8; }

// // // // // //         .nv-right { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }

// // // // // //         .nv-ibtn {
// // // // // //           width: 42px; height: 42px; border-radius: 12px;
// // // // // //           border: none; background: transparent; color: #64748b;
// // // // // //           cursor: pointer; display: flex; align-items: center; justify-content: center;
// // // // // //           transition: all 0.2s ease; flex-shrink: 0;
// // // // // //         }
// // // // // //         .dark .nv-ibtn { color: #94a3b8; }
// // // // // //         .nv-ibtn:hover { background: rgba(241,245,249,0.95); color: #4f46e5; transform: translateY(-1px); }
// // // // // //         .dark .nv-ibtn:hover { background: rgba(30,41,59,0.95); color: #818cf8; }

// // // // // //         .nv-sep { width: 1px; height: 26px; margin: 0 3px; background: linear-gradient(to bottom, transparent, rgba(148,163,184,0.3), transparent); }

// // // // // //         .nv-cta {
// // // // // //           position: relative; overflow: hidden;
// // // // // //           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%);
// // // // // //           color: white; border: none; border-radius: 14px;
// // // // // //           padding: 0 24px; height: 44px;
// // // // // //           font-size: 14.5px; font-weight: 700; cursor: pointer;
// // // // // //           letter-spacing: -0.01em; font-family: 'Outfit', sans-serif;
// // // // // //           box-shadow: 0 3px 10px rgba(99,102,241,0.45), 0 6px 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.24);
// // // // // //           transition: all 0.25s ease;
// // // // // //           display: flex; align-items: center; gap: 7px; white-space: nowrap;
// // // // // //         }
// // // // // //         .nv-cta::before {
// // // // // //           content: ''; position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
// // // // // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
// // // // // //           transform: skewX(-20deg); transition: left 0.55s ease;
// // // // // //         }
// // // // // //         .nv-cta:hover::before { left: 160%; }
// // // // // //         .nv-cta:hover {
// // // // // //           transform: translateY(-2px);
// // // // // //           box-shadow: 0 5px 18px rgba(99,102,241,0.54), 0 10px 32px rgba(99,102,241,0.3);
// // // // // //         }
// // // // // //         .nv-cta:active { transform: translateY(0); }

// // // // // //         /* Time box */
// // // // // //         .nv-timebox {
// // // // // //           flex-shrink: 0;
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           padding: 0 22px;
// // // // // //           height: 68px;
// // // // // //           min-width: 160px;
// // // // // //           gap: 4px;
// // // // // //         }

// // // // // //         .nv-timebox-label {
// // // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // // //           font-size: 9.5px; font-weight: 600;
// // // // // //           letter-spacing: 0.1em; text-transform: uppercase;
// // // // // //           color: #94a3b8;
// // // // // //           line-height: 1;
// // // // // //         }

// // // // // //         .nv-timebox-time {
// // // // // //           font-family: 'Outfit', sans-serif;
// // // // // //           font-size: 20px; font-weight: 800;
// // // // // //           color: #1e293b;
// // // // // //           letter-spacing: -0.04em;
// // // // // //           line-height: 1;
// // // // // //           font-variant-numeric: tabular-nums;
// // // // // //           background: linear-gradient(135deg, #4f46e5, #3b82f6);
// // // // // //           -webkit-background-clip: text;
// // // // // //           -webkit-text-fill-color: transparent;
// // // // // //           background-clip: text;
// // // // // //         }

// // // // // //         .nv-timebox-date {
// // // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // // //           font-size: 10px; font-weight: 500;
// // // // // //           color: #94a3b8; letter-spacing: 0.02em;
// // // // // //           line-height: 1;
// // // // // //           display: flex; align-items: center; gap: 5px;
// // // // // //         }

// // // // // //         .nv-live-dot {
// // // // // //           width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
// // // // // //           box-shadow: 0 0 8px rgba(34,197,94,0.75); flex-shrink: 0;
// // // // // //           animation: blink 2s ease-in-out infinite;
// // // // // //         }
// // // // // //         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

// // // // // //         /* Mobile drawer */
// // // // // //         .nv-mob { display: none; align-items: center; gap: 6px; margin-left: auto; }
// // // // // //         .nv-drawer { overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.45s cubic-bezier(.4,0,.2,1), opacity 0.3s ease; }
// // // // // //         .nv-drawer.open { max-height: 620px; opacity: 1; }
// // // // // //         .nv-drawer-body { border-top: 1px solid rgba(226,232,240,0.5); padding: 14px 18px 20px; }
// // // // // //         .dark .nv-drawer-body { border-top-color: rgba(51,65,85,0.5); }
// // // // // //         .nv-mlink {
// // // // // //           display: flex; align-items: center; gap: 13px;
// // // // // //           width: 100%; padding: 13px 16px; border-radius: 13px;
// // // // // //           border: none; background: transparent; color: #475569;
// // // // // //           font-size: 15px; font-weight: 500; cursor: pointer; text-align: left;
// // // // // //           font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s ease;
// // // // // //           transform: translateX(-8px); opacity: 0;
// // // // // //         }
// // // // // //         .dark .nv-mlink { color: #94a3b8; }
// // // // // //         .nv-drawer.open .nv-mlink { transform: translateX(0); opacity: 1; }
// // // // // //         .nv-mlink:hover,.nv-mlink.active { background: rgba(241,245,249,0.9); color: #4f46e5; }
// // // // // //         .dark .nv-mlink:hover,.dark .nv-mlink.active { background: rgba(30,41,59,0.9); color: #818cf8; }
// // // // // //         .nv-mfooter {
// // // // // //           display: flex; align-items: center; justify-content: space-between;
// // // // // //           padding-top: 14px; margin-top: 10px; border-top: 1px solid rgba(226,232,240,0.4);
// // // // // //         }
// // // // // //         .dark .nv-mfooter { border-top-color: rgba(51,65,85,0.4); }

// // // // // //         @media (max-width: 1000px) {
// // // // // //           .nv-desktop { display: none !important; }
// // // // // //           .nv-mob { display: flex !important; }
// // // // // //           .nv-timebox { display: none !important; }
// // // // // //         }
// // // // // //         @media (min-width: 1001px) {
// // // // // //           .nv-desktop { display: flex !important; }
// // // // // //           .nv-mob { display: none !important; }
// // // // // //           .nv-timebox { display: flex !important; }
// // // // // //         }
// // // // // //       `}</style>

// // // // // //       <nav className={`nv-outer ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}>

// // // // // //         {/* Main nav pill */}
// // // // // //         <div className="pill-base nv-pill">
// // // // // //           <div className="nv-row">

// // // // // //             {/* Nav links — desktop */}
// // // // // //             <div className="nv-links nv-desktop">
// // // // // //               {navItems.map(item => (
// // // // // //                 <button
// // // // // //                   key={item.name}
// // // // // //                   onClick={() => scrollToSection(item.href)}
// // // // // //                   className={`nv-link ${activeSection === item.id ? 'active' : ''}`}
// // // // // //                 >
// // // // // //                   {item.name}
// // // // // //                 </button>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             {/* Right actions — desktop */}
// // // // // //             <div className="nv-right nv-desktop">
// // // // // //               <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // // // //                 <button className="nv-ibtn" title="GitHub"><Github size={18} /></button>
// // // // // //               </a>
// // // // // //               <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // // // //                 <button className="nv-ibtn" title="LinkedIn"><Linkedin size={18} /></button>
// // // // // //               </a>
// // // // // //               <div className="nv-sep" />
// // // // // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // // // // //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // //               </button>
// // // // // //               <div className="nv-sep" />
// // // // // //               <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // // // // //                 <Sparkles size={14} />
// // // // // //                 Hire Me
// // // // // //               </button>
// // // // // //             </div>

// // // // // //             {/* Mobile controls */}
// // // // // //             <div className="nv-mob">
// // // // // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // // // // //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // // //               </button>
// // // // // //               <button className="nv-ibtn" onClick={() => setIsMobileMenuOpen(o => !o)}>
// // // // // //                 {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Mobile drawer */}
// // // // // //           <div className={`nv-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
// // // // // //             <div className="nv-drawer-body">
// // // // // //               {navItems.map((item, i) => {
// // // // // //                 const Icon = item.icon;
// // // // // //                 return (
// // // // // //                   <button
// // // // // //                     key={item.name}
// // // // // //                     onClick={() => scrollToSection(item.href)}
// // // // // //                     className={`nv-mlink ${activeSection === item.id ? 'active' : ''}`}
// // // // // //                     style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
// // // // // //                   >
// // // // // //                     <Icon size={18} />
// // // // // //                     {item.name}
// // // // // //                   </button>
// // // // // //                 );
// // // // // //               })}
// // // // // //               <div className="nv-mfooter">
// // // // // //                 <div style={{ display: 'flex', gap: '4px' }}>
// // // // // //                   <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // // // //                     <button className="nv-ibtn"><Github size={19} /></button>
// // // // // //                   </a>
// // // // // //                   <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // // // //                     <button className="nv-ibtn"><Linkedin size={19} /></button>
// // // // // //                   </a>
// // // // // //                 </div>
// // // // // //                 <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // // // // //                   <Sparkles size={13} /> Hire Me
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Standalone time box */}
// // // // // //         <div className="pill-base nv-timebox">
// // // // // //           <span className="nv-timebox-label">Local Time</span>
// // // // // //           <span className="nv-timebox-time">{formatTime(currentTime)}</span>
// // // // // //           <span className="nv-timebox-date">
// // // // // //             <span className="nv-live-dot" />
// // // // // //             {formatDate(currentTime)}
// // // // // //           </span>
// // // // // //         </div>

// // // // // //       </nav>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default Navigation;
// // // // // import { useState, useEffect } from "react";
// // // // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail, Sparkles } from "lucide-react";

// // // // // const Navigation = () => {
// // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // //   const [activeSection, setActiveSection] = useState('hero');
// // // // //   const [isDark, setIsDark] = useState(false);
// // // // //   const [currentTime, setCurrentTime] = useState(new Date());
// // // // //   const [isVisible, setIsVisible] = useState(true);
// // // // //   const [lastScrollY, setLastScrollY] = useState(0);

// // // // //   const navItems = [
// // // // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // // // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // // // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // // // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // // // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // // // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     const timer = setInterval(() => setCurrentTime(new Date()), 1000);

// // // // //     const handleScroll = () => {
// // // // //       const currentScrollY = window.scrollY;

// // // // //       // Hide on scroll up, show on scroll down
// // // // //       if (currentScrollY < lastScrollY || currentScrollY < 80) {
// // // // //         setIsVisible(true);
// // // // //       } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
// // // // //         setIsVisible(false);
// // // // //         setIsMobileMenuOpen(false);
// // // // //       }
// // // // //       setLastScrollY(currentScrollY);

// // // // //       setIsScrolled(currentScrollY > 30);

// // // // //       const sections = navItems.map(i => document.querySelector(i.href)).filter(Boolean);
// // // // //       const sp = currentScrollY + 100;
// // // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // // //         const s = sections[i];
// // // // //         if (s && s.offsetTop <= sp) { setActiveSection(s.getAttribute('id') || 'hero'); break; }
// // // // //       }
// // // // //       if (currentScrollY < 100) setActiveSection('hero');
// // // // //     };

// // // // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // // // //     handleScroll();
// // // // //     return () => { window.removeEventListener('scroll', handleScroll); clearInterval(timer); };
// // // // //   }, [lastScrollY]);

// // // // //   const scrollToSection = (href) => {
// // // // //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
// // // // //     setIsMobileMenuOpen(false);
// // // // //   };

// // // // //   const toggleTheme = () => {
// // // // //     setIsDark(d => !d);
// // // // //     document.documentElement.classList.toggle('dark');
// // // // //   };

// // // // //   const formatTime = (d) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
// // // // //   const formatDate = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

// // // // //   return (
// // // // //     <>
// // // // //       <style>{`
// // // // //         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap');

// // // // //         *, *::before, *::after { box-sizing: border-box; }

// // // // //         .nv-outer {
// // // // //           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
// // // // //           padding: 20px 28px 0;
// // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // //           pointer-events: none;
// // // // //           display: flex;
// // // // //           align-items: flex-start;
// // // // //           justify-content: center;
// // // // //           gap: 14px;
// // // // //           transition: padding 0.5s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s ease;
// // // // //         }
// // // // //         .nv-outer.scrolled { padding-top: 12px; }
// // // // //         .nv-outer.hidden {
// // // // //           transform: translateY(-120%);
// // // // //           opacity: 0;
// // // // //           pointer-events: none;
// // // // //         }
// // // // //         .nv-outer > * { pointer-events: auto; }

// // // // //         .pill-base {
// // // // //           border-radius: 24px;
// // // // //           border: 1px solid rgba(255,255,255,0.85);
// // // // //           background: rgba(255,255,255,0.72);
// // // // //           backdrop-filter: blur(40px) saturate(210%);
// // // // //           -webkit-backdrop-filter: blur(40px) saturate(210%);
// // // // //           box-shadow:
// // // // //             0 2px 4px rgba(0,0,0,0.03),
// // // // //             0 10px 40px rgba(0,0,0,0.08),
// // // // //             0 1px 0 rgba(255,255,255,1) inset,
// // // // //             0 -1px 0 rgba(0,0,0,0.03) inset;
// // // // //           transition: all 0.5s cubic-bezier(.4,0,.2,1);
// // // // //           position: relative; overflow: hidden;
// // // // //         }
// // // // //         .dark .pill-base {
// // // // //           background: rgba(9,12,26,0.84);
// // // // //           border: 1px solid rgba(255,255,255,0.07);
// // // // //           box-shadow: 0 4px 10px rgba(0,0,0,0.45), 0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset;
// // // // //         }
// // // // //         .nv-outer.scrolled .pill-base {
// // // // //           border-radius: 18px;
// // // // //           box-shadow: 0 6px 14px rgba(0,0,0,0.07), 0 24px 64px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,1) inset;
// // // // //         }
// // // // //         .pill-base::before {
// // // // //           content: ''; position: absolute; top: 0; left: 6%; right: 6%; height: 1px;
// // // // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 65%, transparent);
// // // // //           pointer-events: none;
// // // // //         }

// // // // //         .nv-pill {
// // // // //           flex-shrink: 0;
// // // // //         }

// // // // //         .nv-row {
// // // // //           display: flex; align-items: center; justify-content: space-between;
// // // // //           height: 68px;
// // // // //           padding: 0 10px;
// // // // //           gap: 8px;
// // // // //         }

// // // // //         /* Nav links group */
// // // // //         .nv-links {
// // // // //           display: flex; align-items: center; gap: 2px;
// // // // //           background: rgba(241,245,249,0.75);
// // // // //           border: 1px solid rgba(226,232,240,0.88);
// // // // //           border-radius: 18px;
// // // // //           padding: 6px;
// // // // //         }
// // // // //         .dark .nv-links { background: rgba(30,41,59,0.55); border-color: rgba(51,65,85,0.78); }

// // // // //         .nv-link {
// // // // //           position: relative; font-size: 14px; font-weight: 500;
// // // // //           padding: 9px 16px;
// // // // //           border-radius: 12px; color: #64748b;
// // // // //           border: none; background: transparent; cursor: pointer;
// // // // //           transition: all 0.22s ease; letter-spacing: -0.01em; white-space: nowrap;
// // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // //         }
// // // // //         .dark .nv-link { color: #94a3b8; }
// // // // //         .nv-link:hover { color: #334155; background: rgba(255,255,255,0.92); }
// // // // //         .dark .nv-link:hover { color: #cbd5e1; background: rgba(51,65,85,0.72); }
// // // // //         .nv-link.active {
// // // // //           color: #4f46e5; background: #fff; font-weight: 600;
// // // // //           box-shadow: 0 1px 6px rgba(0,0,0,0.09), 0 3px 14px rgba(99,102,241,0.15);
// // // // //         }
// // // // //         .dark .nv-link.active {
// // // // //           color: #818cf8; background: rgba(99,102,241,0.18);
// // // // //           box-shadow: 0 1px 6px rgba(0,0,0,0.35), 0 3px 14px rgba(99,102,241,0.25);
// // // // //         }
// // // // //         .nv-link.active::after {
// // // // //           content: ''; position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%);
// // // // //           width: 4px; height: 4px; border-radius: 50%; background: #6366f1;
// // // // //         }
// // // // //         .dark .nv-link.active::after { background: #818cf8; }

// // // // //         .nv-right { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }

// // // // //         .nv-ibtn {
// // // // //           width: 40px; height: 40px; border-radius: 50%;
// // // // //           border: 1px solid rgba(226,232,240,0.9);
// // // // //           background: rgba(255,255,255,0.85);
// // // // //           color: #64748b;
// // // // //           cursor: pointer; display: flex; align-items: center; justify-content: center;
// // // // //           transition: all 0.25s cubic-bezier(.4,0,.2,1); flex-shrink: 0;
// // // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9);
// // // // //         }
// // // // //         .dark .nv-ibtn {
// // // // //           background: rgba(30,41,59,0.7);
// // // // //           border: 1px solid rgba(255,255,255,0.09);
// // // // //           color: #94a3b8;
// // // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06);
// // // // //         }
// // // // //         .nv-ibtn:hover {
// // // // //           background: rgba(255,255,255,1);
// // // // //           border-color: rgba(99,102,241,0.35);
// // // // //           color: #4f46e5;
// // // // //           transform: translateY(-2px) scale(1.07);
// // // // //           box-shadow: 0 2px 8px rgba(99,102,241,0.18), 0 8px 24px rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,1);
// // // // //         }
// // // // //         .dark .nv-ibtn:hover {
// // // // //           background: rgba(99,102,241,0.15);
// // // // //           border-color: rgba(129,140,248,0.4);
// // // // //           color: #818cf8;
// // // // //           box-shadow: 0 2px 8px rgba(99,102,241,0.3), 0 8px 24px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.08);
// // // // //         }
// // // // //         .nv-ibtn:active { transform: translateY(0) scale(0.97); }

// // // // //         .nv-sep { width: 1px; height: 26px; margin: 0 3px; background: linear-gradient(to bottom, transparent, rgba(148,163,184,0.3), transparent); }

// // // // //         .nv-cta {
// // // // //           position: relative; overflow: hidden;
// // // // //           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%);
// // // // //           color: white; border: none; border-radius: 14px;
// // // // //           padding: 0 24px; height: 44px;
// // // // //           font-size: 14.5px; font-weight: 700; cursor: pointer;
// // // // //           letter-spacing: -0.01em; font-family: 'Outfit', sans-serif;
// // // // //           box-shadow: 0 3px 10px rgba(99,102,241,0.45), 0 6px 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.24);
// // // // //           transition: all 0.25s ease;
// // // // //           display: flex; align-items: center; gap: 7px; white-space: nowrap;
// // // // //         }
// // // // //         .nv-cta::before {
// // // // //           content: ''; position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
// // // // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
// // // // //           transform: skewX(-20deg); transition: left 0.55s ease;
// // // // //         }
// // // // //         .nv-cta:hover::before { left: 160%; }
// // // // //         .nv-cta:hover {
// // // // //           transform: translateY(-2px);
// // // // //           box-shadow: 0 5px 18px rgba(99,102,241,0.54), 0 10px 32px rgba(99,102,241,0.3);
// // // // //         }
// // // // //         .nv-cta:active { transform: translateY(0); }

// // // // //         /* Time box */
// // // // //         .nv-timebox {
// // // // //           flex-shrink: 0;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           padding: 0 22px;
// // // // //           height: 68px;
// // // // //           min-width: 160px;
// // // // //           gap: 4px;
// // // // //         }

// // // // //         .nv-timebox-label {
// // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // //           font-size: 9.5px; font-weight: 600;
// // // // //           letter-spacing: 0.1em; text-transform: uppercase;
// // // // //           color: #94a3b8;
// // // // //           line-height: 1;
// // // // //         }

// // // // //         .nv-timebox-time {
// // // // //           font-family: 'Outfit', sans-serif;
// // // // //           font-size: 20px; font-weight: 800;
// // // // //           color: #1e293b;
// // // // //           letter-spacing: -0.04em;
// // // // //           line-height: 1;
// // // // //           font-variant-numeric: tabular-nums;
// // // // //           background: linear-gradient(135deg, #4f46e5, #3b82f6);
// // // // //           -webkit-background-clip: text;
// // // // //           -webkit-text-fill-color: transparent;
// // // // //           background-clip: text;
// // // // //         }

// // // // //         .nv-timebox-date {
// // // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // // //           font-size: 10px; font-weight: 500;
// // // // //           color: #94a3b8; letter-spacing: 0.02em;
// // // // //           line-height: 1;
// // // // //           display: flex; align-items: center; gap: 5px;
// // // // //         }

// // // // //         .nv-live-dot {
// // // // //           width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
// // // // //           box-shadow: 0 0 8px rgba(34,197,94,0.75); flex-shrink: 0;
// // // // //           animation: blink 2s ease-in-out infinite;
// // // // //         }
// // // // //         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

// // // // //         /* Mobile drawer */
// // // // //         .nv-mob { display: none; align-items: center; gap: 6px; margin-left: auto; }
// // // // //         .nv-drawer { overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.45s cubic-bezier(.4,0,.2,1), opacity 0.3s ease; }
// // // // //         .nv-drawer.open { max-height: 620px; opacity: 1; }
// // // // //         .nv-drawer-body { border-top: 1px solid rgba(226,232,240,0.5); padding: 14px 18px 20px; }
// // // // //         .dark .nv-drawer-body { border-top-color: rgba(51,65,85,0.5); }
// // // // //         .nv-mlink {
// // // // //           display: flex; align-items: center; gap: 13px;
// // // // //           width: 100%; padding: 13px 16px; border-radius: 13px;
// // // // //           border: none; background: transparent; color: #475569;
// // // // //           font-size: 15px; font-weight: 500; cursor: pointer; text-align: left;
// // // // //           font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s ease;
// // // // //           transform: translateX(-8px); opacity: 0;
// // // // //         }
// // // // //         .dark .nv-mlink { color: #94a3b8; }
// // // // //         .nv-drawer.open .nv-mlink { transform: translateX(0); opacity: 1; }
// // // // //         .nv-mlink:hover,.nv-mlink.active { background: rgba(241,245,249,0.9); color: #4f46e5; }
// // // // //         .dark .nv-mlink:hover,.dark .nv-mlink.active { background: rgba(30,41,59,0.9); color: #818cf8; }
// // // // //         .nv-mfooter {
// // // // //           display: flex; align-items: center; justify-content: space-between;
// // // // //           padding-top: 14px; margin-top: 10px; border-top: 1px solid rgba(226,232,240,0.4);
// // // // //         }
// // // // //         .dark .nv-mfooter { border-top-color: rgba(51,65,85,0.4); }

// // // // //         @media (max-width: 1000px) {
// // // // //           .nv-desktop { display: none !important; }
// // // // //           .nv-mob { display: flex !important; }
// // // // //           .nv-timebox { display: none !important; }
// // // // //         }
// // // // //         @media (min-width: 1001px) {
// // // // //           .nv-desktop { display: flex !important; }
// // // // //           .nv-mob { display: none !important; }
// // // // //           .nv-timebox { display: flex !important; }
// // // // //         }
// // // // //       `}</style>

// // // // //       <nav className={`nv-outer ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}>

// // // // //         {/* Main nav pill */}
// // // // //         <div className="pill-base nv-pill">
// // // // //           <div className="nv-row">

// // // // //             {/* Nav links — desktop */}
// // // // //             <div className="nv-links nv-desktop">
// // // // //               {navItems.map(item => (
// // // // //                 <button
// // // // //                   key={item.name}
// // // // //                   onClick={() => scrollToSection(item.href)}
// // // // //                   className={`nv-link ${activeSection === item.id ? 'active' : ''}`}
// // // // //                 >
// // // // //                   {item.name}
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* Right actions — desktop */}
// // // // //             <div className="nv-right nv-desktop">
// // // // //               <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // // //                 <button className="nv-ibtn" title="GitHub"><Github size={18} /></button>
// // // // //               </a>
// // // // //               <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // // //                 <button className="nv-ibtn" title="LinkedIn"><Linkedin size={18} /></button>
// // // // //               </a>
// // // // //               <div className="nv-sep" />
// // // // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // // // //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // //               </button>
// // // // //               <div className="nv-sep" />
// // // // //               <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // // // //                 <Sparkles size={14} />
// // // // //                 Hire Me
// // // // //               </button>
// // // // //             </div>

// // // // //             {/* Mobile controls */}
// // // // //             <div className="nv-mob">
// // // // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // // // //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // // //               </button>
// // // // //               <button className="nv-ibtn" onClick={() => setIsMobileMenuOpen(o => !o)}>
// // // // //                 {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Mobile drawer */}
// // // // //           <div className={`nv-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
// // // // //             <div className="nv-drawer-body">
// // // // //               {navItems.map((item, i) => {
// // // // //                 const Icon = item.icon;
// // // // //                 return (
// // // // //                   <button
// // // // //                     key={item.name}
// // // // //                     onClick={() => scrollToSection(item.href)}
// // // // //                     className={`nv-mlink ${activeSection === item.id ? 'active' : ''}`}
// // // // //                     style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
// // // // //                   >
// // // // //                     <Icon size={18} />
// // // // //                     {item.name}
// // // // //                   </button>
// // // // //                 );
// // // // //               })}
// // // // //               <div className="nv-mfooter">
// // // // //                 <div style={{ display: 'flex', gap: '4px' }}>
// // // // //                   <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // // //                     <button className="nv-ibtn"><Github size={19} /></button>
// // // // //                   </a>
// // // // //                   <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // // //                     <button className="nv-ibtn"><Linkedin size={19} /></button>
// // // // //                   </a>
// // // // //                 </div>
// // // // //                 <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // // // //                   <Sparkles size={13} /> Hire Me
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Standalone time box */}
// // // // //         <div className="pill-base nv-timebox">
// // // // //           <span className="nv-timebox-label">Local Time</span>
// // // // //           <span className="nv-timebox-time">{formatTime(currentTime)}</span>
// // // // //           <span className="nv-timebox-date">
// // // // //             <span className="nv-live-dot" />
// // // // //             {formatDate(currentTime)}
// // // // //           </span>
// // // // //         </div>

// // // // //       </nav>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Navigation;
// // // // import { useState, useEffect } from "react";
// // // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail, Sparkles } from "lucide-react";

// // // // const Navigation = () => {
// // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // //   const [activeSection, setActiveSection] = useState('hero');
// // // //   const [isDark, setIsDark] = useState(false);
// // // //   const [currentTime, setCurrentTime] = useState(new Date());
// // // //   const [isVisible, setIsVisible] = useState(true);
// // // //   const [lastScrollY, setLastScrollY] = useState(0);

// // // //   const navItems = [
// // // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
// // // //   ];

// // // //   useEffect(() => {
// // // //     const timer = setInterval(() => setCurrentTime(new Date()), 1000);

// // // //     const handleScroll = () => {
// // // //       const currentScrollY = window.scrollY;

// // // //       // Hide on scroll up, show on scroll down
// // // //       if (currentScrollY < lastScrollY || currentScrollY < 80) {
// // // //         setIsVisible(true);
// // // //       } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
// // // //         setIsVisible(false);
// // // //         setIsMobileMenuOpen(false);
// // // //       }
// // // //       setLastScrollY(currentScrollY);

// // // //       setIsScrolled(currentScrollY > 30);

// // // //       const sections = navItems.map(i => document.querySelector(i.href)).filter(Boolean);
// // // //       const sp = currentScrollY + 100;
// // // //       for (let i = sections.length - 1; i >= 0; i--) {
// // // //         const s = sections[i];
// // // //         if (s && s.offsetTop <= sp) { setActiveSection(s.getAttribute('id') || 'hero'); break; }
// // // //       }
// // // //       if (currentScrollY < 100) setActiveSection('hero');
// // // //     };

// // // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // // //     handleScroll();
// // // //     return () => { window.removeEventListener('scroll', handleScroll); clearInterval(timer); };
// // // //   }, [lastScrollY]);

// // // //   const scrollToSection = (href) => {
// // // //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
// // // //     setIsMobileMenuOpen(false);
// // // //   };

// // // //   const toggleTheme = () => {
// // // //     setIsDark(d => !d);
// // // //     document.documentElement.classList.toggle('dark');
// // // //   };

// // // //   const formatTime = (d) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
// // // //   const formatDate = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

// // // //   return (
// // // //     <>
// // // //       <style>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap');

// // // //         *, *::before, *::after { box-sizing: border-box; }

// // // //         .nv-outer {
// // // //           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
// // // //           padding: 20px 28px 0;
// // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // //           pointer-events: none;
// // // //           display: flex;
// // // //           align-items: flex-start;
// // // //           justify-content: center;
// // // //           gap: 14px;
// // // //           transition: padding 0.5s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s ease;
// // // //         }
// // // //         .nv-outer.scrolled { padding-top: 12px; }
// // // //         .nv-outer.hidden {
// // // //           transform: translateY(-120%);
// // // //           opacity: 0;
// // // //           pointer-events: none;
// // // //         }
// // // //         .nv-outer > * { pointer-events: auto; }

// // // //         .pill-base {
// // // //           border-radius: 24px;
// // // //           border: 1px solid rgba(255,255,255,0.85);
// // // //           background: rgba(255,255,255,0.72);
// // // //           backdrop-filter: blur(40px) saturate(210%);
// // // //           -webkit-backdrop-filter: blur(40px) saturate(210%);
// // // //           box-shadow:
// // // //             0 2px 4px rgba(0,0,0,0.03),
// // // //             0 10px 40px rgba(0,0,0,0.08),
// // // //             0 1px 0 rgba(255,255,255,1) inset,
// // // //             0 -1px 0 rgba(0,0,0,0.03) inset;
// // // //           transition: all 0.5s cubic-bezier(.4,0,.2,1);
// // // //           position: relative; overflow: hidden;
// // // //         }
// // // //         .dark .pill-base {
// // // //           background: rgba(9,12,26,0.84);
// // // //           border: 1px solid rgba(255,255,255,0.07);
// // // //           box-shadow: 0 4px 10px rgba(0,0,0,0.45), 0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset;
// // // //         }
// // // //         .nv-outer.scrolled .pill-base {
// // // //           border-radius: 18px;
// // // //           box-shadow: 0 6px 14px rgba(0,0,0,0.07), 0 24px 64px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,1) inset;
// // // //         }
// // // //         .pill-base::before {
// // // //           content: ''; position: absolute; top: 0; left: 6%; right: 6%; height: 1px;
// // // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 65%, transparent);
// // // //           pointer-events: none;
// // // //         }

// // // //         .nv-pill {
// // // //           flex-shrink: 0;
// // // //         }

// // // //         .nv-row {
// // // //           display: flex; align-items: center; justify-content: space-between;
// // // //           height: 68px;
// // // //           padding: 0 10px;
// // // //           gap: 8px;
// // // //         }

// // // //         /* Nav links group */
// // // //         .nv-links {
// // // //           display: flex; align-items: center; gap: 2px;
// // // //           background: rgba(241,245,249,0.75);
// // // //           border: 1px solid rgba(226,232,240,0.88);
// // // //           border-radius: 18px;
// // // //           padding: 6px;
// // // //         }
// // // //         .dark .nv-links { background: rgba(30,41,59,0.55); border-color: rgba(51,65,85,0.78); }

// // // //         .nv-link {
// // // //           position: relative; font-size: 14px; font-weight: 500;
// // // //           padding: 9px 16px;
// // // //           border-radius: 12px; color: #64748b;
// // // //           border: none; background: transparent; cursor: pointer;
// // // //           transition: all 0.22s ease; letter-spacing: -0.01em; white-space: nowrap;
// // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // //         }
// // // //         .dark .nv-link { color: #94a3b8; }
// // // //         .nv-link:hover { color: #334155; background: rgba(255,255,255,0.92); }
// // // //         .dark .nv-link:hover { color: #cbd5e1; background: rgba(51,65,85,0.72); }
// // // //         .nv-link.active {
// // // //           color: #4f46e5; background: #fff; font-weight: 600;
// // // //           box-shadow: 0 1px 6px rgba(0,0,0,0.09), 0 3px 14px rgba(99,102,241,0.15);
// // // //         }
// // // //         .dark .nv-link.active {
// // // //           color: #818cf8; background: rgba(99,102,241,0.18);
// // // //           box-shadow: 0 1px 6px rgba(0,0,0,0.35), 0 3px 14px rgba(99,102,241,0.25);
// // // //         }
// // // //         .nv-link.active::after {
// // // //           content: ''; position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%);
// // // //           width: 4px; height: 4px; border-radius: 50%; background: #6366f1;
// // // //         }
// // // //         .dark .nv-link.active::after { background: #818cf8; }

// // // //         .nv-right { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }

// // // //         .nv-ibtn {
// // // //           width: 40px; height: 40px; border-radius: 50%;
// // // //           border: none;
// // // //           background: rgba(255,255,255,0.85);
// // // //           color: #64748b;
// // // //           cursor: pointer; display: flex; align-items: center; justify-content: center;
// // // //           transition: color 0.25s ease, transform 0.25s cubic-bezier(.4,0,.2,1); flex-shrink: 0;
// // // //           position: relative;
// // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05);
// // // //         }
// // // //         .dark .nv-ibtn {
// // // //           background: rgba(30,41,59,0.7);
// // // //           color: #94a3b8;
// // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.25);
// // // //         }

// // // //         /* Static ring via pseudo-element */
// // // //         .nv-ibtn::before {
// // // //           content: '';
// // // //           position: absolute;
// // // //           inset: -2px;
// // // //           border-radius: 50%;
// // // //           padding: 2px;
// // // //           background: rgba(226,232,240,0.9);
// // // //           -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
// // // //           -webkit-mask-composite: xor;
// // // //           mask-composite: exclude;
// // // //           transition: opacity 0.25s ease;
// // // //         }
// // // //         .dark .nv-ibtn::before {
// // // //           background: rgba(255,255,255,0.1);
// // // //         }

// // // //         /* Spinning rainbow ring on hover via ::after */
// // // //         .nv-ibtn::after {
// // // //           content: '';
// // // //           position: absolute;
// // // //           inset: -2px;
// // // //           border-radius: 50%;
// // // //           padding: 2px;
// // // //           background: conic-gradient(
// // // //             from 0deg,
// // // //             #6366f1,
// // // //             #8b5cf6,
// // // //             #ec4899,
// // // //             #f43f5e,
// // // //             #f97316,
// // // //             #eab308,
// // // //             #22c55e,
// // // //             #06b6d4,
// // // //             #3b82f6,
// // // //             #6366f1
// // // //           );
// // // //           -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
// // // //           -webkit-mask-composite: xor;
// // // //           mask-composite: exclude;
// // // //           opacity: 0;
// // // //           animation: spin-ring 1.2s linear infinite;
// // // //           transition: opacity 0.3s ease;
// // // //         }

// // // //         @keyframes spin-ring {
// // // //           from { transform: rotate(0deg); }
// // // //           to   { transform: rotate(360deg); }
// // // //         }

// // // //         .nv-ibtn:hover::before { opacity: 0; }
// // // //         .nv-ibtn:hover::after  { opacity: 1; }
// // // //         .nv-ibtn:hover {
// // // //           color: #4f46e5;
// // // //           transform: translateY(-2px) scale(1.08);
// // // //           background: rgba(255,255,255,1);
// // // //           box-shadow: 0 4px 16px rgba(99,102,241,0.18), 0 8px 28px rgba(99,102,241,0.1);
// // // //         }
// // // //         .dark .nv-ibtn:hover {
// // // //           color: #818cf8;
// // // //           background: rgba(30,41,59,0.9);
// // // //           box-shadow: 0 4px 16px rgba(99,102,241,0.3), 0 8px 28px rgba(99,102,241,0.2);
// // // //         }
// // // //         .nv-ibtn:active { transform: translateY(0) scale(0.97); }

// // // //         .nv-sep { width: 1px; height: 26px; margin: 0 3px; background: linear-gradient(to bottom, transparent, rgba(148,163,184,0.3), transparent); }

// // // //         .nv-cta {
// // // //           position: relative; overflow: hidden;
// // // //           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%);
// // // //           color: white; border: none; border-radius: 14px;
// // // //           padding: 0 24px; height: 44px;
// // // //           font-size: 14.5px; font-weight: 700; cursor: pointer;
// // // //           letter-spacing: -0.01em; font-family: 'Outfit', sans-serif;
// // // //           box-shadow: 0 3px 10px rgba(99,102,241,0.45), 0 6px 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.24);
// // // //           transition: all 0.25s ease;
// // // //           display: flex; align-items: center; gap: 7px; white-space: nowrap;
// // // //         }
// // // //         .nv-cta::before {
// // // //           content: ''; position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
// // // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
// // // //           transform: skewX(-20deg); transition: left 0.55s ease;
// // // //         }
// // // //         .nv-cta:hover::before { left: 160%; }
// // // //         .nv-cta:hover {
// // // //           transform: translateY(-2px);
// // // //           box-shadow: 0 5px 18px rgba(99,102,241,0.54), 0 10px 32px rgba(99,102,241,0.3);
// // // //         }
// // // //         .nv-cta:active { transform: translateY(0); }

// // // //         /* Time box */
// // // //         .nv-timebox {
// // // //           flex-shrink: 0;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           padding: 0 22px;
// // // //           height: 68px;
// // // //           min-width: 160px;
// // // //           gap: 4px;
// // // //         }

// // // //         .nv-timebox-label {
// // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // //           font-size: 9.5px; font-weight: 600;
// // // //           letter-spacing: 0.1em; text-transform: uppercase;
// // // //           color: #94a3b8;
// // // //           line-height: 1;
// // // //         }

// // // //         .nv-timebox-time {
// // // //           font-family: 'Outfit', sans-serif;
// // // //           font-size: 20px; font-weight: 800;
// // // //           color: #1e293b;
// // // //           letter-spacing: -0.04em;
// // // //           line-height: 1;
// // // //           font-variant-numeric: tabular-nums;
// // // //           background: linear-gradient(135deg, #4f46e5, #3b82f6);
// // // //           -webkit-background-clip: text;
// // // //           -webkit-text-fill-color: transparent;
// // // //           background-clip: text;
// // // //         }

// // // //         .nv-timebox-date {
// // // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // // //           font-size: 10px; font-weight: 500;
// // // //           color: #94a3b8; letter-spacing: 0.02em;
// // // //           line-height: 1;
// // // //           display: flex; align-items: center; gap: 5px;
// // // //         }

// // // //         .nv-live-dot {
// // // //           width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
// // // //           box-shadow: 0 0 8px rgba(34,197,94,0.75); flex-shrink: 0;
// // // //           animation: blink 2s ease-in-out infinite;
// // // //         }
// // // //         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

// // // //         /* Mobile drawer */
// // // //         .nv-mob { display: none; align-items: center; gap: 6px; margin-left: auto; }
// // // //         .nv-drawer { overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.45s cubic-bezier(.4,0,.2,1), opacity 0.3s ease; }
// // // //         .nv-drawer.open { max-height: 620px; opacity: 1; }
// // // //         .nv-drawer-body { border-top: 1px solid rgba(226,232,240,0.5); padding: 14px 18px 20px; }
// // // //         .dark .nv-drawer-body { border-top-color: rgba(51,65,85,0.5); }
// // // //         .nv-mlink {
// // // //           display: flex; align-items: center; gap: 13px;
// // // //           width: 100%; padding: 13px 16px; border-radius: 13px;
// // // //           border: none; background: transparent; color: #475569;
// // // //           font-size: 15px; font-weight: 500; cursor: pointer; text-align: left;
// // // //           font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s ease;
// // // //           transform: translateX(-8px); opacity: 0;
// // // //         }
// // // //         .dark .nv-mlink { color: #94a3b8; }
// // // //         .nv-drawer.open .nv-mlink { transform: translateX(0); opacity: 1; }
// // // //         .nv-mlink:hover,.nv-mlink.active { background: rgba(241,245,249,0.9); color: #4f46e5; }
// // // //         .dark .nv-mlink:hover,.dark .nv-mlink.active { background: rgba(30,41,59,0.9); color: #818cf8; }
// // // //         .nv-mfooter {
// // // //           display: flex; align-items: center; justify-content: space-between;
// // // //           padding-top: 14px; margin-top: 10px; border-top: 1px solid rgba(226,232,240,0.4);
// // // //         }
// // // //         .dark .nv-mfooter { border-top-color: rgba(51,65,85,0.4); }

// // // //         @media (max-width: 1000px) {
// // // //           .nv-desktop { display: none !important; }
// // // //           .nv-mob { display: flex !important; }
// // // //           .nv-timebox { display: none !important; }
// // // //         }
// // // //         @media (min-width: 1001px) {
// // // //           .nv-desktop { display: flex !important; }
// // // //           .nv-mob { display: none !important; }
// // // //           .nv-timebox { display: flex !important; }
// // // //         }
// // // //       `}</style>

// // // //       <nav className={`nv-outer ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}>

// // // //         {/* Main nav pill */}
// // // //         <div className="pill-base nv-pill">
// // // //           <div className="nv-row">

// // // //             {/* Nav links — desktop */}
// // // //             <div className="nv-links nv-desktop">
// // // //               {navItems.map(item => (
// // // //                 <button
// // // //                   key={item.name}
// // // //                   onClick={() => scrollToSection(item.href)}
// // // //                   className={`nv-link ${activeSection === item.id ? 'active' : ''}`}
// // // //                 >
// // // //                   {item.name}
// // // //                 </button>
// // // //               ))}
// // // //             </div>

// // // //             {/* Right actions — desktop */}
// // // //             <div className="nv-right nv-desktop">
// // // //               <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // //                 <button className="nv-ibtn" title="GitHub"><Github size={18} /></button>
// // // //               </a>
// // // //               <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // //                 <button className="nv-ibtn" title="LinkedIn"><Linkedin size={18} /></button>
// // // //               </a>
// // // //               <div className="nv-sep" />
// // // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // // //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // //               </button>
// // // //               <div className="nv-sep" />
// // // //               <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // // //                 <Sparkles size={14} />
// // // //                 Hire Me
// // // //               </button>
// // // //             </div>

// // // //             {/* Mobile controls */}
// // // //             <div className="nv-mob">
// // // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // // //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // // //               </button>
// // // //               <button className="nv-ibtn" onClick={() => setIsMobileMenuOpen(o => !o)}>
// // // //                 {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Mobile drawer */}
// // // //           <div className={`nv-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
// // // //             <div className="nv-drawer-body">
// // // //               {navItems.map((item, i) => {
// // // //                 const Icon = item.icon;
// // // //                 return (
// // // //                   <button
// // // //                     key={item.name}
// // // //                     onClick={() => scrollToSection(item.href)}
// // // //                     className={`nv-mlink ${activeSection === item.id ? 'active' : ''}`}
// // // //                     style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
// // // //                   >
// // // //                     <Icon size={18} />
// // // //                     {item.name}
// // // //                   </button>
// // // //                 );
// // // //               })}
// // // //               <div className="nv-mfooter">
// // // //                 <div style={{ display: 'flex', gap: '4px' }}>
// // // //                   <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // // //                     <button className="nv-ibtn"><Github size={19} /></button>
// // // //                   </a>
// // // //                   <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // // //                     <button className="nv-ibtn"><Linkedin size={19} /></button>
// // // //                   </a>
// // // //                 </div>
// // // //                 <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // // //                   <Sparkles size={13} /> Hire Me
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Standalone time box */}
// // // //         <div className="pill-base nv-timebox">
// // // //           <span className="nv-timebox-label">Local Time</span>
// // // //           <span className="nv-timebox-time">{formatTime(currentTime)}</span>
// // // //           <span className="nv-timebox-date">
// // // //             <span className="nv-live-dot" />
// // // //             {formatDate(currentTime)}
// // // //           </span>
// // // //         </div>

// // // //       </nav>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Navigation;
// // // import { useState, useEffect } from "react";
// // // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail, Sparkles } from "lucide-react";

// // // const Navigation = () => {
// // //   const [isScrolled, setIsScrolled] = useState(false);
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //   const [activeSection, setActiveSection] = useState('hero');
// // //   const [isDark, setIsDark] = useState(false);
// // //   const [currentTime, setCurrentTime] = useState(new Date());
// // //   const [isVisible, setIsVisible] = useState(true);
// // //   const [lastScrollY, setLastScrollY] = useState(0);

// // //   const navItems = [
// // //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// // //     { name: 'About', href: '#about', id: 'about', icon: User },
// // //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// // //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// // //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// // //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
// // //   ];

// // //   useEffect(() => {
// // //     const timer = setInterval(() => setCurrentTime(new Date()), 1000);

// // //     const handleScroll = () => {
// // //       const currentScrollY = window.scrollY;

// // //       // Hide on scroll up, show on scroll down
// // //       if (currentScrollY < lastScrollY || currentScrollY < 80) {
// // //         setIsVisible(true);
// // //       } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
// // //         setIsVisible(false);
// // //         setIsMobileMenuOpen(false);
// // //       }
// // //       setLastScrollY(currentScrollY);

// // //       setIsScrolled(currentScrollY > 30);

// // //       const sections = navItems.map(i => document.querySelector(i.href)).filter(Boolean);
// // //       const sp = currentScrollY + 100;
// // //       for (let i = sections.length - 1; i >= 0; i--) {
// // //         const s = sections[i];
// // //         if (s && s.offsetTop <= sp) { setActiveSection(s.getAttribute('id') || 'hero'); break; }
// // //       }
// // //       if (currentScrollY < 100) setActiveSection('hero');
// // //     };

// // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // //     handleScroll();
// // //     return () => { window.removeEventListener('scroll', handleScroll); clearInterval(timer); };
// // //   }, [lastScrollY]);

// // //   const scrollToSection = (href) => {
// // //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
// // //     setIsMobileMenuOpen(false);
// // //   };

// // //   const toggleTheme = () => {
// // //     setIsDark(d => !d);
// // //     document.documentElement.classList.toggle('dark');
// // //   };

// // //   const formatTime = (d) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
// // //   const formatDate = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

// // //   return (
// // //     <>
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap');

// // //         *, *::before, *::after { box-sizing: border-box; }

// // //         .nv-outer {
// // //           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
// // //           padding: 20px 28px 0;
// // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // //           pointer-events: none;
// // //           display: flex;
// // //           align-items: flex-start;
// // //           justify-content: center;
// // //           gap: 14px;
// // //           transition: padding 0.5s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s ease;
// // //         }
// // //         .nv-outer.scrolled { padding-top: 12px; }
// // //         .nv-outer.hidden {
// // //           transform: translateY(-120%);
// // //           opacity: 0;
// // //           pointer-events: none;
// // //         }
// // //         .nv-outer > * { pointer-events: auto; }

// // //         .pill-base {
// // //           border-radius: 24px;
// // //           border: 1px solid rgba(255,255,255,0.85);
// // //           background: rgba(255,255,255,0.72);
// // //           backdrop-filter: blur(40px) saturate(210%);
// // //           -webkit-backdrop-filter: blur(40px) saturate(210%);
// // //           box-shadow:
// // //             0 2px 4px rgba(0,0,0,0.03),
// // //             0 10px 40px rgba(0,0,0,0.08),
// // //             0 1px 0 rgba(255,255,255,1) inset,
// // //             0 -1px 0 rgba(0,0,0,0.03) inset;
// // //           transition: all 0.5s cubic-bezier(.4,0,.2,1);
// // //           position: relative; overflow: hidden;
// // //         }
// // //         .dark .pill-base {
// // //           background: rgba(9,12,26,0.84);
// // //           border: 1px solid rgba(255,255,255,0.07);
// // //           box-shadow: 0 4px 10px rgba(0,0,0,0.45), 0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset;
// // //         }
// // //         .nv-outer.scrolled .pill-base {
// // //           border-radius: 18px;
// // //           box-shadow: 0 6px 14px rgba(0,0,0,0.07), 0 24px 64px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,1) inset;
// // //         }
// // //         .pill-base::before {
// // //           content: ''; position: absolute; top: 0; left: 6%; right: 6%; height: 1px;
// // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 65%, transparent);
// // //           pointer-events: none;
// // //         }

// // //         .nv-pill {
// // //           flex-shrink: 0;
// // //         }

// // //         .nv-row {
// // //           display: flex; align-items: center; justify-content: space-between;
// // //           height: 68px;
// // //           padding: 0 10px;
// // //           gap: 8px;
// // //         }

// // //         /* Nav links group */
// // //         .nv-links {
// // //           display: flex; align-items: center; gap: 2px;
// // //           background: rgba(241,245,249,0.75);
// // //           border: 1px solid rgba(226,232,240,0.88);
// // //           border-radius: 18px;
// // //           padding: 6px;
// // //         }
// // //         .dark .nv-links { background: rgba(30,41,59,0.55); border-color: rgba(51,65,85,0.78); }

// // //         .nv-link {
// // //           position: relative; font-size: 14px; font-weight: 500;
// // //           padding: 9px 16px;
// // //           border-radius: 12px; color: #64748b;
// // //           border: none; background: transparent; cursor: pointer;
// // //           transition: all 0.22s ease; letter-spacing: -0.01em; white-space: nowrap;
// // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // //         }
// // //         .dark .nv-link { color: #94a3b8; }
// // //         .nv-link:hover { color: #334155; background: rgba(255,255,255,0.92); }
// // //         .dark .nv-link:hover { color: #cbd5e1; background: rgba(51,65,85,0.72); }
// // //         .nv-link.active {
// // //           color: #4f46e5; background: #fff; font-weight: 600;
// // //           box-shadow: 0 1px 6px rgba(0,0,0,0.09), 0 3px 14px rgba(99,102,241,0.15);
// // //         }
// // //         .dark .nv-link.active {
// // //           color: #818cf8; background: rgba(99,102,241,0.18);
// // //           box-shadow: 0 1px 6px rgba(0,0,0,0.35), 0 3px 14px rgba(99,102,241,0.25);
// // //         }
// // //         .nv-link.active::after {
// // //           content: ''; position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%);
// // //           width: 4px; height: 4px; border-radius: 50%; background: #6366f1;
// // //         }
// // //         .dark .nv-link.active::after { background: #818cf8; }

// // //         .nv-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

// // //         .nv-ibtn {
// // //           width: 40px; height: 40px; border-radius: 50%;
// // //           border: none;
// // //           background: rgba(255,255,255,0.85);
// // //           color: #64748b;
// // //           cursor: pointer; display: flex; align-items: center; justify-content: center;
// // //           transition: color 0.25s ease, transform 0.25s cubic-bezier(.4,0,.2,1); flex-shrink: 0;
// // //           position: relative;
// // //           box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05);
// // //         }
// // //         .dark .nv-ibtn {
// // //           background: rgba(30,41,59,0.7);
// // //           color: #94a3b8;
// // //           box-shadow: 0 1px 3px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.25);
// // //         }

// // //         /* Static ring via pseudo-element */
// // //         .nv-ibtn::before {
// // //           content: '';
// // //           position: absolute;
// // //           inset: -2px;
// // //           border-radius: 50%;
// // //           padding: 2px;
// // //           background: rgba(226,232,240,0.9);
// // //           -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
// // //           -webkit-mask-composite: xor;
// // //           mask-composite: exclude;
// // //           transition: opacity 0.25s ease;
// // //         }
// // //         .dark .nv-ibtn::before {
// // //           background: rgba(255,255,255,0.1);
// // //         }

// // //         /* Spinning rainbow ring on hover via ::after */
// // //         .nv-ibtn::after {
// // //           content: '';
// // //           position: absolute;
// // //           inset: -2px;
// // //           border-radius: 50%;
// // //           padding: 2px;
// // //           background: conic-gradient(
// // //             from 0deg,
// // //             #6366f1,
// // //             #8b5cf6,
// // //             #ec4899,
// // //             #f43f5e,
// // //             #f97316,
// // //             #eab308,
// // //             #22c55e,
// // //             #06b6d4,
// // //             #3b82f6,
// // //             #6366f1
// // //           );
// // //           -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
// // //           -webkit-mask-composite: xor;
// // //           mask-composite: exclude;
// // //           opacity: 0;
// // //           animation: spin-ring 1.2s linear infinite;
// // //           transition: opacity 0.3s ease;
// // //         }

// // //         @keyframes spin-ring {
// // //           from { transform: rotate(0deg); }
// // //           to   { transform: rotate(360deg); }
// // //         }

// // //         .nv-ibtn:hover::before { opacity: 0; }
// // //         .nv-ibtn:hover::after  { opacity: 1; }
// // //         .nv-ibtn:hover {
// // //           color: #4f46e5;
// // //           transform: translateY(-2px) scale(1.08);
// // //           background: rgba(255,255,255,1);
// // //           box-shadow: 0 4px 16px rgba(99,102,241,0.18), 0 8px 28px rgba(99,102,241,0.1);
// // //         }
// // //         .dark .nv-ibtn:hover {
// // //           color: #818cf8;
// // //           background: rgba(30,41,59,0.9);
// // //           box-shadow: 0 4px 16px rgba(99,102,241,0.3), 0 8px 28px rgba(99,102,241,0.2);
// // //         }
// // //         .nv-ibtn:active { transform: translateY(0) scale(0.97); }

// // //         .nv-sep { width: 1px; height: 26px; margin: 0 3px; background: linear-gradient(to bottom, transparent, rgba(148,163,184,0.3), transparent); }

// // //         .nv-cta {
// // //           position: relative; overflow: hidden;
// // //           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%);
// // //           color: white; border: none; border-radius: 14px;
// // //           padding: 0 24px; height: 44px;
// // //           font-size: 14.5px; font-weight: 700; cursor: pointer;
// // //           letter-spacing: -0.01em; font-family: 'Outfit', sans-serif;
// // //           box-shadow: 0 3px 10px rgba(99,102,241,0.45), 0 6px 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.24);
// // //           transition: all 0.25s ease;
// // //           display: flex; align-items: center; gap: 7px; white-space: nowrap;
// // //         }
// // //         .nv-cta::before {
// // //           content: ''; position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
// // //           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
// // //           transform: skewX(-20deg); transition: left 0.55s ease;
// // //         }
// // //         .nv-cta:hover::before { left: 160%; }
// // //         .nv-cta:hover {
// // //           transform: translateY(-2px);
// // //           box-shadow: 0 5px 18px rgba(99,102,241,0.54), 0 10px 32px rgba(99,102,241,0.3);
// // //         }
// // //         .nv-cta:active { transform: translateY(0); }

// // //         /* Time box */
// // //         .nv-timebox {
// // //           flex-shrink: 0;
// // //           display: flex;
// // //           flex-direction: column;
// // //           align-items: center;
// // //           justify-content: center;
// // //           padding: 0 22px;
// // //           height: 68px;
// // //           min-width: 160px;
// // //           gap: 4px;
// // //         }

// // //         .nv-timebox-label {
// // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // //           font-size: 9.5px; font-weight: 600;
// // //           letter-spacing: 0.1em; text-transform: uppercase;
// // //           color: #94a3b8;
// // //           line-height: 1;
// // //         }

// // //         .nv-timebox-time {
// // //           font-family: 'Outfit', sans-serif;
// // //           font-size: 20px; font-weight: 800;
// // //           color: #1e293b;
// // //           letter-spacing: -0.04em;
// // //           line-height: 1;
// // //           font-variant-numeric: tabular-nums;
// // //           background: linear-gradient(135deg, #4f46e5, #3b82f6);
// // //           -webkit-background-clip: text;
// // //           -webkit-text-fill-color: transparent;
// // //           background-clip: text;
// // //         }

// // //         .nv-timebox-date {
// // //           font-family: 'Plus Jakarta Sans', sans-serif;
// // //           font-size: 10px; font-weight: 500;
// // //           color: #94a3b8; letter-spacing: 0.02em;
// // //           line-height: 1;
// // //           display: flex; align-items: center; gap: 5px;
// // //         }

// // //         .nv-live-dot {
// // //           width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
// // //           box-shadow: 0 0 8px rgba(34,197,94,0.75); flex-shrink: 0;
// // //           animation: blink 2s ease-in-out infinite;
// // //         }
// // //         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

// // //         /* Mobile drawer */
// // //         .nv-mob { display: none; align-items: center; gap: 6px; margin-left: auto; }
// // //         .nv-drawer { overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.45s cubic-bezier(.4,0,.2,1), opacity 0.3s ease; }
// // //         .nv-drawer.open { max-height: 620px; opacity: 1; }
// // //         .nv-drawer-body { border-top: 1px solid rgba(226,232,240,0.5); padding: 14px 18px 20px; }
// // //         .dark .nv-drawer-body { border-top-color: rgba(51,65,85,0.5); }
// // //         .nv-mlink {
// // //           display: flex; align-items: center; gap: 13px;
// // //           width: 100%; padding: 13px 16px; border-radius: 13px;
// // //           border: none; background: transparent; color: #475569;
// // //           font-size: 15px; font-weight: 500; cursor: pointer; text-align: left;
// // //           font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s ease;
// // //           transform: translateX(-8px); opacity: 0;
// // //         }
// // //         .dark .nv-mlink { color: #94a3b8; }
// // //         .nv-drawer.open .nv-mlink { transform: translateX(0); opacity: 1; }
// // //         .nv-mlink:hover,.nv-mlink.active { background: rgba(241,245,249,0.9); color: #4f46e5; }
// // //         .dark .nv-mlink:hover,.dark .nv-mlink.active { background: rgba(30,41,59,0.9); color: #818cf8; }
// // //         .nv-mfooter {
// // //           display: flex; align-items: center; justify-content: space-between;
// // //           padding-top: 14px; margin-top: 10px; border-top: 1px solid rgba(226,232,240,0.4);
// // //         }
// // //         .dark .nv-mfooter { border-top-color: rgba(51,65,85,0.4); }

// // //         @media (max-width: 1000px) {
// // //           .nv-desktop { display: none !important; }
// // //           .nv-mob { display: flex !important; }
// // //           .nv-timebox { display: none !important; }
// // //         }
// // //         @media (min-width: 1001px) {
// // //           .nv-desktop { display: flex !important; }
// // //           .nv-mob { display: none !important; }
// // //           .nv-timebox { display: flex !important; }
// // //         }
// // //       `}</style>

// // //       <nav className={`nv-outer ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}>

// // //         {/* Main nav pill */}
// // //         <div className="pill-base nv-pill">
// // //           <div className="nv-row">

// // //             {/* Nav links — desktop */}
// // //             <div className="nv-links nv-desktop">
// // //               {navItems.map(item => (
// // //                 <button
// // //                   key={item.name}
// // //                   onClick={() => scrollToSection(item.href)}
// // //                   className={`nv-link ${activeSection === item.id ? 'active' : ''}`}
// // //                 >
// // //                   {item.name}
// // //                 </button>
// // //               ))}
// // //             </div>

// // //             {/* Right actions — desktop */}
// // //             <div className="nv-right nv-desktop">
// // //               <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // //                 <button className="nv-ibtn" title="GitHub"><Github size={18} /></button>
// // //               </a>
// // //               <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // //                 <button className="nv-ibtn" title="LinkedIn"><Linkedin size={18} /></button>
// // //               </a>
// // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // //               </button>
// // //               <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // //                 <Sparkles size={14} />
// // //                 Hire Me
// // //               </button>
// // //             </div>

// // //             {/* Mobile controls */}
// // //             <div className="nv-mob">
// // //               <button className="nv-ibtn" onClick={toggleTheme}>
// // //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// // //               </button>
// // //               <button className="nv-ibtn" onClick={() => setIsMobileMenuOpen(o => !o)}>
// // //                 {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Mobile drawer */}
// // //           <div className={`nv-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
// // //             <div className="nv-drawer-body">
// // //               {navItems.map((item, i) => {
// // //                 const Icon = item.icon;
// // //                 return (
// // //                   <button
// // //                     key={item.name}
// // //                     onClick={() => scrollToSection(item.href)}
// // //                     className={`nv-mlink ${activeSection === item.id ? 'active' : ''}`}
// // //                     style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
// // //                   >
// // //                     <Icon size={18} />
// // //                     {item.name}
// // //                   </button>
// // //                 );
// // //               })}
// // //               <div className="nv-mfooter">
// // //                 <div style={{ display: 'flex', gap: '4px' }}>
// // //                   <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// // //                     <button className="nv-ibtn"><Github size={19} /></button>
// // //                   </a>
// // //                   <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// // //                     <button className="nv-ibtn"><Linkedin size={19} /></button>
// // //                   </a>
// // //                 </div>
// // //                 <button className="nv-cta" onClick={() => scrollToSection('#contact')}>
// // //                   <Sparkles size={13} /> Hire Me
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Standalone time box */}
// // //         <div className="pill-base nv-timebox">
// // //           <span className="nv-timebox-label">Local Time</span>
// // //           <span className="nv-timebox-time">{formatTime(currentTime)}</span>
// // //           <span className="nv-timebox-date">
// // //             <span className="nv-live-dot" />
// // //             {formatDate(currentTime)}
// // //           </span>
// // //         </div>

// // //       </nav>
// // //     </>
// // //   );
// // // };

// // // export default Navigation;
// // import { useState, useEffect } from "react";
// // import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail, Sparkles } from "lucide-react";

// // const Navigation = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [activeSection, setActiveSection] = useState('hero');
// //   const [isDark, setIsDark] = useState(false);
// //   const [currentTime, setCurrentTime] = useState(new Date());
// //   const [isVisible, setIsVisible] = useState(true);
// //   const [lastScrollY, setLastScrollY] = useState(0);

// //   const navItems = [
// //     { name: 'Home', href: '#hero', id: 'hero', icon: Home },
// //     { name: 'About', href: '#about', id: 'about', icon: User },
// //     { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
// //     { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
// //     { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
// //     { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
// //   ];

// //   useEffect(() => {
// //     const timer = setInterval(() => setCurrentTime(new Date()), 1000);

// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;

// //       // Hide on scroll up, show on scroll down
// //       if (currentScrollY < lastScrollY || currentScrollY < 80) {
// //         setIsVisible(true);
// //       } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
// //         setIsVisible(false);
// //         setIsMobileMenuOpen(false);
// //       }
// //       setLastScrollY(currentScrollY);

// //       setIsScrolled(currentScrollY > 30);

// //       const sections = navItems.map(i => document.querySelector(i.href)).filter(Boolean);
// //       const sp = currentScrollY + 100;
// //       for (let i = sections.length - 1; i >= 0; i--) {
// //         const s = sections[i];
// //         if (s && s.offsetTop <= sp) { setActiveSection(s.getAttribute('id') || 'hero'); break; }
// //       }
// //       if (currentScrollY < 100) setActiveSection('hero');
// //     };

// //     window.addEventListener('scroll', handleScroll, { passive: true });
// //     handleScroll();
// //     return () => { window.removeEventListener('scroll', handleScroll); clearInterval(timer); };
// //   }, [lastScrollY]);

// //   const scrollToSection = (href) => {
// //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
// //     setIsMobileMenuOpen(false);
// //   };

// //   const toggleTheme = () => {
// //     setIsDark(d => !d);
// //     document.documentElement.classList.toggle('dark');
// //   };

// //   const formatTime = (d) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
// //   const formatDate = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap');

// //         *, *::before, *::after { box-sizing: border-box; }

// //         .nv-outer {
// //           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
// //           padding: 20px 28px 0;
// //           font-family: 'Plus Jakarta Sans', sans-serif;
// //           pointer-events: none;
// //           display: flex;
// //           align-items: flex-start;
// //           justify-content: center;
// //           gap: 14px;
// //           transition: padding 0.5s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s ease;
// //         }
// //         .nv-outer.scrolled { padding-top: 12px; }
// //         .nv-outer.hidden {
// //           transform: translateY(-120%);
// //           opacity: 0;
// //           pointer-events: none;
// //         }
// //         .nv-outer > * { pointer-events: auto; }

// //         .pill-base {
// //           border-radius: 24px;
// //           border: 1px solid rgba(255,255,255,0.85);
// //           background: rgba(255,255,255,0.72);
// //           backdrop-filter: blur(40px) saturate(210%);
// //           -webkit-backdrop-filter: blur(40px) saturate(210%);
// //           box-shadow:
// //             0 2px 4px rgba(0,0,0,0.03),
// //             0 10px 40px rgba(0,0,0,0.08),
// //             0 1px 0 rgba(255,255,255,1) inset,
// //             0 -1px 0 rgba(0,0,0,0.03) inset;
// //           transition: all 0.5s cubic-bezier(.4,0,.2,1);
// //           position: relative; overflow: hidden;
// //         }
// //         .dark .pill-base {
// //           background: rgba(9,12,26,0.84);
// //           border: 1px solid rgba(255,255,255,0.07);
// //           box-shadow: 0 4px 10px rgba(0,0,0,0.45), 0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset;
// //         }
// //         .nv-outer.scrolled .pill-base {
// //           border-radius: 18px;
// //           box-shadow: 0 6px 14px rgba(0,0,0,0.07), 0 24px 64px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,1) inset;
// //         }
// //         .pill-base::before {
// //           content: ''; position: absolute; top: 0; left: 6%; right: 6%; height: 1px;
// //           background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 65%, transparent);
// //           pointer-events: none;
// //         }

// //         .nv-pill {
// //           flex-shrink: 0;
// //         }

// //         .nv-row {
// //           display: flex; align-items: center; justify-content: space-between;
// //           height: 68px;
// //           padding: 0 10px;
// //           gap: 8px;
// //         }

// //         /* Nav links group */
// //         .nv-links {
// //           display: flex; align-items: center; gap: 2px;
// //           background: rgba(241,245,249,0.75);
// //           border: 1px solid rgba(226,232,240,0.88);
// //           border-radius: 18px;
// //           padding: 6px;
// //         }
// //         .dark .nv-links { background: rgba(30,41,59,0.55); border-color: rgba(51,65,85,0.78); }

// //         .nv-link {
// //           position: relative; font-size: 14px; font-weight: 500;
// //           padding: 9px 16px;
// //           border-radius: 12px; color: #64748b;
// //           border: none; background: transparent; cursor: pointer;
// //           transition: all 0.22s ease; letter-spacing: -0.01em; white-space: nowrap;
// //           font-family: 'Plus Jakarta Sans', sans-serif;
// //         }
// //         .dark .nv-link { color: #94a3b8; }
// //         .nv-link:hover { color: #334155; background: rgba(255,255,255,0.92); }
// //         .dark .nv-link:hover { color: #cbd5e1; background: rgba(51,65,85,0.72); }
// //         .nv-link.active {
// //           color: #4f46e5; background: #fff; font-weight: 600;
// //           box-shadow: 0 1px 6px rgba(0,0,0,0.09), 0 3px 14px rgba(99,102,241,0.15);
// //         }
// //         .dark .nv-link.active {
// //           color: #818cf8; background: rgba(99,102,241,0.18);
// //           box-shadow: 0 1px 6px rgba(0,0,0,0.35), 0 3px 14px rgba(99,102,241,0.25);
// //         }
// //         .nv-link.active::after {
// //           content: ''; position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%);
// //           width: 4px; height: 4px; border-radius: 50%; background: #6366f1;
// //         }
// //         .dark .nv-link.active::after { background: #818cf8; }

// //         .nv-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

// //         .nv-ibtn {
// //           width: 40px; height: 40px; border-radius: 50%;
// //           border: none;
// //           background: rgba(255,255,255,0.85);
// //           color: #64748b;
// //           cursor: pointer; display: flex; align-items: center; justify-content: center;
// //           transition: color 0.25s ease, transform 0.25s cubic-bezier(.4,0,.2,1); flex-shrink: 0;
// //           position: relative;
// //           box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05);
// //         }
// //         .dark .nv-ibtn {
// //           background: rgba(30,41,59,0.7);
// //           color: #94a3b8;
// //           box-shadow: 0 1px 3px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.25);
// //         }

// //         /* Static ring via pseudo-element */
// //         .nv-ibtn::before {
// //           content: '';
// //           position: absolute;
// //           inset: -2px;
// //           border-radius: 50%;
// //           padding: 2px;
// //           background: rgba(226,232,240,0.9);
// //           -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
// //           -webkit-mask-composite: xor;
// //           mask-composite: exclude;
// //           transition: opacity 0.25s ease;
// //         }
// //         .dark .nv-ibtn::before {
// //           background: rgba(255,255,255,0.1);
// //         }

// //         /* Spinning rainbow ring on hover via ::after */
// //         .nv-ibtn::after {
// //           content: '';
// //           position: absolute;
// //           inset: -2px;
// //           border-radius: 50%;
// //           padding: 2px;
// //           background: conic-gradient(
// //             from 0deg,
// //             #6366f1,
// //             #8b5cf6,
// //             #ec4899,
// //             #f43f5e,
// //             #f97316,
// //             #eab308,
// //             #22c55e,
// //             #06b6d4,
// //             #3b82f6,
// //             #6366f1
// //           );
// //           -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
// //           -webkit-mask-composite: xor;
// //           mask-composite: exclude;
// //           opacity: 0;
// //           animation: spin-ring 1.2s linear infinite;
// //           transition: opacity 0.3s ease;
// //         }

// //         @keyframes spin-ring {
// //           from { transform: rotate(0deg); }
// //           to   { transform: rotate(360deg); }
// //         }

// //         .nv-ibtn:hover::before { opacity: 0; }
// //         .nv-ibtn:hover::after  { opacity: 1; }
// //         .nv-ibtn:hover {
// //           color: #4f46e5;
// //           transform: translateY(-2px) scale(1.08);
// //           background: rgba(255,255,255,1);
// //           box-shadow: 0 4px 16px rgba(99,102,241,0.18), 0 8px 28px rgba(99,102,241,0.1);
// //         }
// //         .dark .nv-ibtn:hover {
// //           color: #818cf8;
// //           background: rgba(30,41,59,0.9);
// //           box-shadow: 0 4px 16px rgba(99,102,241,0.3), 0 8px 28px rgba(99,102,241,0.2);
// //         }
// //         .nv-ibtn:active { transform: translateY(0) scale(0.97); }

// //         .nv-ibtn-hire {
// //           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%) !important;
// //           color: #fff !important;
// //           box-shadow: 0 3px 10px rgba(99,102,241,0.45), 0 6px 20px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.24) !important;
// //         }
// //         .nv-ibtn-hire:hover {
// //           color: #fff !important;
// //           background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%) !important;
// //           box-shadow: 0 5px 18px rgba(99,102,241,0.54), 0 10px 32px rgba(99,102,241,0.3) !important;
// //         }
// //         .dark .nv-ibtn-hire {
// //           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%) !important;
// //           color: #fff !important;
// //         }

// //         .nv-sep { width: 1px; height: 26px; margin: 0 3px; background: linear-gradient(to bottom, transparent, rgba(148,163,184,0.3), transparent); }

// //         .nv-cta {
// //           position: relative; overflow: hidden;
// //           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%);
// //           color: white; border: none; border-radius: 14px;
// //           padding: 0 24px; height: 44px;
// //           font-size: 14.5px; font-weight: 700; cursor: pointer;
// //           letter-spacing: -0.01em; font-family: 'Outfit', sans-serif;
// //           box-shadow: 0 3px 10px rgba(99,102,241,0.45), 0 6px 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.24);
// //           transition: all 0.25s ease;
// //           display: flex; align-items: center; gap: 7px; white-space: nowrap;
// //         }
// //         .nv-cta::before {
// //           content: ''; position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
// //           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
// //           transform: skewX(-20deg); transition: left 0.55s ease;
// //         }
// //         .nv-cta:hover::before { left: 160%; }
// //         .nv-cta:hover {
// //           transform: translateY(-2px);
// //           box-shadow: 0 5px 18px rgba(99,102,241,0.54), 0 10px 32px rgba(99,102,241,0.3);
// //         }
// //         .nv-cta:active { transform: translateY(0); }

// //         /* Time box */
// //         .nv-timebox {
// //           flex-shrink: 0;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           justify-content: center;
// //           padding: 0 22px;
// //           height: 68px;
// //           min-width: 160px;
// //           gap: 4px;
// //         }

// //         .nv-timebox-label {
// //           font-family: 'Plus Jakarta Sans', sans-serif;
// //           font-size: 9.5px; font-weight: 600;
// //           letter-spacing: 0.1em; text-transform: uppercase;
// //           color: #94a3b8;
// //           line-height: 1;
// //         }

// //         .nv-timebox-time {
// //           font-family: 'Outfit', sans-serif;
// //           font-size: 20px; font-weight: 800;
// //           color: #1e293b;
// //           letter-spacing: -0.04em;
// //           line-height: 1;
// //           font-variant-numeric: tabular-nums;
// //           background: linear-gradient(135deg, #4f46e5, #3b82f6);
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           background-clip: text;
// //         }

// //         .nv-timebox-date {
// //           font-family: 'Plus Jakarta Sans', sans-serif;
// //           font-size: 10px; font-weight: 500;
// //           color: #94a3b8; letter-spacing: 0.02em;
// //           line-height: 1;
// //           display: flex; align-items: center; gap: 5px;
// //         }

// //         .nv-live-dot {
// //           width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
// //           box-shadow: 0 0 8px rgba(34,197,94,0.75); flex-shrink: 0;
// //           animation: blink 2s ease-in-out infinite;
// //         }
// //         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

// //         /* Mobile drawer */
// //         .nv-mob { display: none; align-items: center; gap: 6px; margin-left: auto; }
// //         .nv-drawer { overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.45s cubic-bezier(.4,0,.2,1), opacity 0.3s ease; }
// //         .nv-drawer.open { max-height: 620px; opacity: 1; }
// //         .nv-drawer-body { border-top: 1px solid rgba(226,232,240,0.5); padding: 14px 18px 20px; }
// //         .dark .nv-drawer-body { border-top-color: rgba(51,65,85,0.5); }
// //         .nv-mlink {
// //           display: flex; align-items: center; gap: 13px;
// //           width: 100%; padding: 13px 16px; border-radius: 13px;
// //           border: none; background: transparent; color: #475569;
// //           font-size: 15px; font-weight: 500; cursor: pointer; text-align: left;
// //           font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s ease;
// //           transform: translateX(-8px); opacity: 0;
// //         }
// //         .dark .nv-mlink { color: #94a3b8; }
// //         .nv-drawer.open .nv-mlink { transform: translateX(0); opacity: 1; }
// //         .nv-mlink:hover,.nv-mlink.active { background: rgba(241,245,249,0.9); color: #4f46e5; }
// //         .dark .nv-mlink:hover,.dark .nv-mlink.active { background: rgba(30,41,59,0.9); color: #818cf8; }
// //         .nv-mfooter {
// //           display: flex; align-items: center; justify-content: space-between;
// //           padding-top: 14px; margin-top: 10px; border-top: 1px solid rgba(226,232,240,0.4);
// //         }
// //         .dark .nv-mfooter { border-top-color: rgba(51,65,85,0.4); }

// //         @media (max-width: 1000px) {
// //           .nv-desktop { display: none !important; }
// //           .nv-mob { display: flex !important; }
// //           .nv-timebox { display: none !important; }
// //         }
// //         @media (min-width: 1001px) {
// //           .nv-desktop { display: flex !important; }
// //           .nv-mob { display: none !important; }
// //           .nv-timebox { display: flex !important; }
// //         }
// //       `}</style>

// //       <nav className={`nv-outer ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}>

// //         {/* Main nav pill */}
// //         <div className="pill-base nv-pill">
// //           <div className="nv-row">

// //             {/* Nav links — desktop */}
// //             <div className="nv-links nv-desktop">
// //               {navItems.map(item => (
// //                 <button
// //                   key={item.name}
// //                   onClick={() => scrollToSection(item.href)}
// //                   className={`nv-link ${activeSection === item.id ? 'active' : ''}`}
// //                 >
// //                   {item.name}
// //                 </button>
// //               ))}
// //             </div>

// //             {/* Right actions — desktop */}
// //             <div className="nv-right nv-desktop">
// //               <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// //                 <button className="nv-ibtn" title="GitHub"><Github size={18} /></button>
// //               </a>
// //               <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// //                 <button className="nv-ibtn" title="LinkedIn"><Linkedin size={18} /></button>
// //               </a>
// //               <button className="nv-ibtn" onClick={toggleTheme}>
// //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// //               </button>
// //               <button className="nv-ibtn nv-ibtn-hire" onClick={() => scrollToSection('#contact')} title="Hire Me">
// //                 <Sparkles size={18} />
// //               </button>
// //             </div>

// //             {/* Mobile controls */}
// //             <div className="nv-mob">
// //               <button className="nv-ibtn" onClick={toggleTheme}>
// //                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
// //               </button>
// //               <button className="nv-ibtn" onClick={() => setIsMobileMenuOpen(o => !o)}>
// //                 {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
// //               </button>
// //             </div>
// //           </div>

// //           {/* Mobile drawer */}
// //           <div className={`nv-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
// //             <div className="nv-drawer-body">
// //               {navItems.map((item, i) => {
// //                 const Icon = item.icon;
// //                 return (
// //                   <button
// //                     key={item.name}
// //                     onClick={() => scrollToSection(item.href)}
// //                     className={`nv-mlink ${activeSection === item.id ? 'active' : ''}`}
// //                     style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
// //                   >
// //                     <Icon size={18} />
// //                     {item.name}
// //                   </button>
// //                 );
// //               })}
// //               <div className="nv-mfooter">
// //                 <div style={{ display: 'flex', gap: '4px' }}>
// //                   <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
// //                     <button className="nv-ibtn"><Github size={19} /></button>
// //                   </a>
// //                   <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
// //                     <button className="nv-ibtn"><Linkedin size={19} /></button>
// //                   </a>
// //                 </div>
// //                 <button className="nv-ibtn nv-ibtn-hire" onClick={() => scrollToSection('#contact')} title="Hire Me">
// //                   <Sparkles size={18} />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Standalone time box */}
// //         <div className="pill-base nv-timebox">
// //           <span className="nv-timebox-label">Local Time</span>
// //           <span className="nv-timebox-time">{formatTime(currentTime)}</span>
// //           <span className="nv-timebox-date">
// //             <span className="nv-live-dot" />
// //             {formatDate(currentTime)}
// //           </span>
// //         </div>

// //       </nav>
// //     </>
// //   );
// // };

// // export default Navigation;
// import { useState, useEffect } from "react";
// import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail, Sparkles } from "lucide-react";

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');
//   const [isDark, setIsDark] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());
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
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Hide on scroll up, show on scroll down
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
//     return () => { window.removeEventListener('scroll', handleScroll); clearInterval(timer); };
//   }, [lastScrollY]);

//   const scrollToSection = (href) => {
//     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMobileMenuOpen(false);
//   };

//   const toggleTheme = () => {
//     setIsDark(d => !d);
//     document.documentElement.classList.toggle('dark');
//   };

//   const formatTime = (d) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
//   const formatDate = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap');

//         *, *::before, *::after { box-sizing: border-box; }

//         .nv-outer {
//           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
//           padding: 20px 28px 0;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           pointer-events: none;
//           display: flex;
//           align-items: flex-start;
//           justify-content: center;
//           gap: 14px;
//           transition: padding 0.5s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s ease;
//         }
//         .nv-outer.scrolled { padding-top: 12px; }
//         .nv-outer.hidden {
//           transform: translateY(-120%);
//           opacity: 0;
//           pointer-events: none;
//         }
//         .nv-outer > * { pointer-events: auto; }

//         .pill-base {
//           border-radius: 24px;
//           border: 1px solid rgba(255,255,255,0.85);
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
//           box-shadow: 0 4px 10px rgba(0,0,0,0.45), 0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset;
//         }
//         .nv-outer.scrolled .pill-base {
//           border-radius: 18px;
//           box-shadow: 0 6px 14px rgba(0,0,0,0.07), 0 24px 64px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,1) inset;
//         }
//         .pill-base::before {
//           content: ''; position: absolute; top: 0; left: 6%; right: 6%; height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 65%, transparent);
//           pointer-events: none;
//         }

//         .nv-pill {
//           flex-shrink: 0;
//         }

//         .nv-row {
//           display: flex; align-items: center; justify-content: space-between;
//           height: 68px;
//           padding: 0 10px;
//           gap: 8px;
//         }

//         /* Nav links group */
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
//           transition: color 0.25s ease, transform 0.25s cubic-bezier(.4,0,.2,1); flex-shrink: 0;
//           position: relative;
//           box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05);
//         }
//         .dark .nv-ibtn {
//           background: rgba(30,41,59,0.7);
//           color: #94a3b8;
//           box-shadow: 0 1px 3px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.25);
//         }

//         /* Static ring via pseudo-element */
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
//         .dark .nv-ibtn::before {
//           background: rgba(255,255,255,0.1);
//         }

//         /* Spinning rainbow ring on hover via ::after */
//         .nv-ibtn::after {
//           content: '';
//           position: absolute;
//           inset: -2px;
//           border-radius: 50%;
//           padding: 2px;
//           background: conic-gradient(
//             from 0deg,
//             #6366f1,
//             #8b5cf6,
//             #ec4899,
//             #f43f5e,
//             #f97316,
//             #eab308,
//             #22c55e,
//             #06b6d4,
//             #3b82f6,
//             #6366f1
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

//         .nv-sep { width: 1px; height: 26px; margin: 0 3px; background: linear-gradient(to bottom, transparent, rgba(148,163,184,0.3), transparent); }

//         .nv-cta {
//           position: relative; overflow: hidden;
//           background: linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #3b82f6 100%);
//           color: white; border: none; border-radius: 14px;
//           padding: 0 24px; height: 44px;
//           font-size: 14.5px; font-weight: 700; cursor: pointer;
//           letter-spacing: -0.01em; font-family: 'Outfit', sans-serif;
//           box-shadow: 0 3px 10px rgba(99,102,241,0.45), 0 6px 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.24);
//           transition: all 0.25s ease;
//           display: flex; align-items: center; gap: 7px; white-space: nowrap;
//         }
//         .nv-cta::before {
//           content: ''; position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
//           transform: skewX(-20deg); transition: left 0.55s ease;
//         }
//         .nv-cta:hover::before { left: 160%; }
//         .nv-cta:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 5px 18px rgba(99,102,241,0.54), 0 10px 32px rgba(99,102,241,0.3);
//         }
//         .nv-cta:active { transform: translateY(0); }

//         /* Time box */
//         .nv-timebox {
//           flex-shrink: 0;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: 0 22px;
//           height: 68px;
//           min-width: 160px;
//           gap: 4px;
//         }

//         .nv-timebox-label {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 9.5px; font-weight: 600;
//           letter-spacing: 0.1em; text-transform: uppercase;
//           color: #94a3b8;
//           line-height: 1;
//         }

//         .nv-timebox-time {
//           font-family: 'Outfit', sans-serif;
//           font-size: 20px; font-weight: 800;
//           color: #1e293b;
//           letter-spacing: -0.04em;
//           line-height: 1;
//           font-variant-numeric: tabular-nums;
//           background: linear-gradient(135deg, #4f46e5, #3b82f6);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .nv-timebox-date {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 10px; font-weight: 500;
//           color: #94a3b8; letter-spacing: 0.02em;
//           line-height: 1;
//           display: flex; align-items: center; gap: 5px;
//         }

//         .nv-live-dot {
//           width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
//           box-shadow: 0 0 8px rgba(34,197,94,0.75); flex-shrink: 0;
//           animation: blink 2s ease-in-out infinite;
//         }
//         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

//         /* Mobile drawer */
//         .nv-mob { display: none; align-items: center; gap: 6px; margin-left: auto; }
//         .nv-drawer { overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.45s cubic-bezier(.4,0,.2,1), opacity 0.3s ease; }
//         .nv-drawer.open { max-height: 620px; opacity: 1; }
//         .nv-drawer-body { border-top: 1px solid rgba(226,232,240,0.5); padding: 14px 18px 20px; }
//         .dark .nv-drawer-body { border-top-color: rgba(51,65,85,0.5); }
//         .nv-mlink {
//           display: flex; align-items: center; gap: 13px;
//           width: 100%; padding: 13px 16px; border-radius: 13px;
//           border: none; background: transparent; color: #475569;
//           font-size: 15px; font-weight: 500; cursor: pointer; text-align: left;
//           font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s ease;
//           transform: translateX(-8px); opacity: 0;
//         }
//         .dark .nv-mlink { color: #94a3b8; }
//         .nv-drawer.open .nv-mlink { transform: translateX(0); opacity: 1; }
//         .nv-mlink:hover,.nv-mlink.active { background: rgba(241,245,249,0.9); color: #4f46e5; }
//         .dark .nv-mlink:hover,.dark .nv-mlink.active { background: rgba(30,41,59,0.9); color: #818cf8; }
//         .nv-mfooter {
//           display: flex; align-items: center; justify-content: space-between;
//           padding-top: 14px; margin-top: 10px; border-top: 1px solid rgba(226,232,240,0.4);
//         }
//         .dark .nv-mfooter { border-top-color: rgba(51,65,85,0.4); }

//         @media (max-width: 1000px) {
//           .nv-desktop { display: none !important; }
//           .nv-mob { display: flex !important; }
//           .nv-timebox { display: none !important; }
//         }
//         @media (min-width: 1001px) {
//           .nv-desktop { display: flex !important; }
//           .nv-mob { display: none !important; }
//           .nv-timebox { display: flex !important; }
//         }
//       `}</style>

//       <nav className={`nv-outer ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}>

//         {/* Main nav pill */}
//         <div className="pill-base nv-pill">
//           <div className="nv-row">

//             {/* Nav links — desktop */}
//             <div className="nv-links nv-desktop">
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

//             {/* Right actions — desktop */}
//             <div className="nv-right nv-desktop">
//               <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
//                 <button className="nv-ibtn" title="GitHub"><Github size={18} /></button>
//               </a>
//               <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
//                 <button className="nv-ibtn" title="LinkedIn"><Linkedin size={18} /></button>
//               </a>
//               <button className="nv-ibtn" onClick={toggleTheme}>
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

//             {/* Mobile controls */}
//             <div className="nv-mob">
//               <button className="nv-ibtn" onClick={toggleTheme}>
//                 {isDark ? <Sun size={18} /> : <Moon size={18} />}
//               </button>
//               <button className="nv-ibtn" onClick={() => setIsMobileMenuOpen(o => !o)}>
//                 {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile drawer */}
//           <div className={`nv-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
//             <div className="nv-drawer-body">
//               {navItems.map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <button
//                     key={item.name}
//                     onClick={() => scrollToSection(item.href)}
//                     className={`nv-mlink ${activeSection === item.id ? 'active' : ''}`}
//                     style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
//                   >
//                     <Icon size={18} />
//                     {item.name}
//                   </button>
//                 );
//               })}
//               <div className="nv-mfooter">
//                 <div style={{ display: 'flex', gap: '4px' }}>
//                   <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
//                     <button className="nv-ibtn"><Github size={19} /></button>
//                   </a>
//                   <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
//                     <button className="nv-ibtn"><Linkedin size={19} /></button>
//                   </a>
//                 </div>
//                 <button className="nv-ibtn nv-ibtn-hire" onClick={() => scrollToSection('#contact')} title="Hire Me">
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <circle cx="12" cy="8" r="3.5" fill="currentColor" opacity="0.95"/>
//                     <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                     <circle cx="19" cy="7" r="4" fill="#22c55e"/>
//                     <text x="19" y="10.2" textAnchor="middle" fontSize="6" fontWeight="800" fill="white" fontFamily="sans-serif">✓</text>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Standalone time box */}
//         <div className="pill-base nv-timebox">
//           <span className="nv-timebox-label">Local Time</span>
//           <span className="nv-timebox-time">{formatTime(currentTime)}</span>
//           <span className="nv-timebox-date">
//             <span className="nv-live-dot" />
//             {formatDate(currentTime)}
//           </span>
//         </div>

//       </nav>
//     </>
//   );
// };

// export default Navigation;
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Sun, Moon, Home, User, FolderGit2, Briefcase, Award, Mail } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(false);
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

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(d => !d);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .nv-outer {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 20px 28px 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          pointer-events: none;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          transition: padding 0.5s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s ease;
        }
        .nv-outer.scrolled { padding-top: 12px; }
        .nv-outer.hidden {
          transform: translateY(-120%);
          opacity: 0;
          pointer-events: none;
        }
        .nv-outer > * { pointer-events: auto; }

        .pill-base {
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.85);
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
          box-shadow: 0 4px 10px rgba(0,0,0,0.45), 0 20px 60px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset;
        }
        .nv-outer.scrolled .pill-base {
          border-radius: 18px;
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

        .nv-mob { display: none; align-items: center; gap: 6px; margin-left: auto; }
        .nv-drawer { overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.45s cubic-bezier(.4,0,.2,1), opacity 0.3s ease; }
        .nv-drawer.open { max-height: 620px; opacity: 1; }
        .nv-drawer-body { border-top: 1px solid rgba(226,232,240,0.5); padding: 14px 18px 20px; }
        .dark .nv-drawer-body { border-top-color: rgba(51,65,85,0.5); }
        .nv-mlink {
          display: flex; align-items: center; gap: 13px;
          width: 100%; padding: 13px 16px; border-radius: 13px;
          border: none; background: transparent; color: #475569;
          font-size: 15px; font-weight: 500; cursor: pointer; text-align: left;
          font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s ease;
          transform: translateX(-8px); opacity: 0;
        }
        .dark .nv-mlink { color: #94a3b8; }
        .nv-drawer.open .nv-mlink { transform: translateX(0); opacity: 1; }
        .nv-mlink:hover, .nv-mlink.active { background: rgba(241,245,249,0.9); color: #4f46e5; }
        .dark .nv-mlink:hover, .dark .nv-mlink.active { background: rgba(30,41,59,0.9); color: #818cf8; }
        .nv-mfooter {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; margin-top: 10px; border-top: 1px solid rgba(226,232,240,0.4);
        }
        .dark .nv-mfooter { border-top-color: rgba(51,65,85,0.4); }

        @media (max-width: 1000px) {
          .nv-desktop { display: none !important; }
          .nv-mob { display: flex !important; }
        }
        @media (min-width: 1001px) {
          .nv-desktop { display: flex !important; }
          .nv-mob { display: none !important; }
        }
      `}</style>

      <nav className={`nv-outer ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}>

        <div className="pill-base nv-pill">
          <div className="nv-row">

            <div className="nv-links nv-desktop">
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

            <div className="nv-right nv-desktop">
              <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
                <button className="nv-ibtn" title="GitHub"><Github size={18} /></button>
              </a>
              <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
                <button className="nv-ibtn" title="LinkedIn"><Linkedin size={18} /></button>
              </a>
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

            <div className="nv-mob">
              <button className="nv-ibtn" onClick={toggleTheme}>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="nv-ibtn" onClick={() => setIsMobileMenuOpen(o => !o)}>
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          <div className={`nv-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="nv-drawer-body">
              {navItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`nv-mlink ${activeSection === item.id ? 'active' : ''}`}
                    style={{ transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms' }}
                  >
                    <Icon size={18} />
                    {item.name}
                  </button>
                );
              })}
              <div className="nv-mfooter">
                <div style={{ display: 'flex', gap: '8px' }}>
                  <a href="https://github.com/Thomasjose-tech" target="_blank" rel="noopener noreferrer">
                    <button className="nv-ibtn"><Github size={19} /></button>
                  </a>
                  <a href="https://www.linkedin.com/in/thomas-jose-98b97b220" target="_blank" rel="noopener noreferrer">
                    <button className="nv-ibtn"><Linkedin size={19} /></button>
                  </a>
                </div>
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
        </div>

      </nav>
    </>
  );
};

export default Navigation;