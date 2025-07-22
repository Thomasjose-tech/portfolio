// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { Menu, X, Github, Linkedin } from "lucide-react";

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '#hero' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Certifications', href: '#certifications' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//       isScrolled 
//         ? 'bg-background/90 backdrop-blur-xl shadow-elegant border-b border-border/50' 
//         : 'bg-transparent'
//     }`}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="font-bold text-xl text-primary transition-all duration-300 hover:scale-105 cursor-pointer">
           
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.href)}
//                 className="text-foreground/80 hover:text-primary transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg hover:bg-accent/30"
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2" />
//               </button>
//             ))}
//           </div>

//           {/* Social Links, Theme Toggle & CTA */}
//           <div className="hidden md:flex items-center space-x-3">
//             <a 
//               href="https://github.com/Thomasjose-tech" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30 group"
//             >
//               <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
//             </a>
//             <a 
//               href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30 group"
//             >
//               <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
//             </a>
//             <ThemeToggle />
//             <Button 
//               variant="default" 
//               size="sm"
//               onClick={() => scrollToSection('#contact')}
//               className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 border-0"
//             >
//               Hire Me
//             </Button>
//           </div>

//           {/* Mobile Menu Button & Theme Toggle */}
//           <div className="md:hidden flex items-center space-x-2">
//             <ThemeToggle />
//             <button
//               className="text-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
//             <div className="px-4 py-6 space-y-2">
//               {navItems.map((item, index) => (
//                 <button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   className="block w-full text-left text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-accent/30 font-medium"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {item.name}
//                 </button>
//               ))}
              
//               <div className="flex items-center justify-between pt-4 border-t border-border/30">
//                 <div className="flex space-x-2">
//                   <a 
//                     href="https://github.com/Thomasjose-tech" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
//                   >
//                     <Github size={20} />
//                   </a>
//                   <a 
//                     href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
//                   >
//                     <Linkedin size={20} />
//                   </a>
//                 </div>
//                 <Button 
//                   variant="default" 
//                   size="sm"
//                   onClick={() => scrollToSection('#contact')}
//                   className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
//                 >
//                   Hire Me
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { Menu, X, Github, Linkedin } from "lucide-react";

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '#hero' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Certifications', href: '#certifications' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//       isScrolled 
//         ? 'bg-background/95 backdrop-blur-xl shadow-elegant border-b border-border/50' 
//         : 'bg-background/90 backdrop-blur-md'
//     }`}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="font-bold text-xl text-primary transition-all duration-300 hover:scale-105 cursor-pointer">
           
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.href)}
//                 className="text-foreground/80 hover:text-primary transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg hover:bg-accent/30"
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2" />
//               </button>
//             ))}
//           </div>

//           {/* Social Links, Theme Toggle & CTA */}
//           <div className="hidden md:flex items-center space-x-3">
//             <a 
//               href="https://github.com/Thomasjose-tech" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30 group"
//             >
//               <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
//             </a>
//             <a 
//               href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30 group"
//             >
//               <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
//             </a>
//             <ThemeToggle />
//             <Button 
//               variant="default" 
//               size="sm"
//               onClick={() => scrollToSection('#contact')}
//               className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 border-0"
//             >
//               Hire Me
//             </Button>
//           </div>

//           {/* Mobile Menu Button & Theme Toggle */}
//           <div className="md:hidden flex items-center space-x-2">
//             <ThemeToggle />
//             <button
//               className="text-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
//             <div className="px-4 py-6 space-y-2">
//               {navItems.map((item, index) => (
//                 <button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   className="block w-full text-left text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-accent/30 font-medium"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {item.name}
//                 </button>
//               ))}
              
//               <div className="flex items-center justify-between pt-4 border-t border-border/30">
//                 <div className="flex space-x-2">
//                   <a 
//                     href="https://github.com/Thomasjose-tech" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
//                   >
//                     <Github size={20} />
//                   </a>
//                   <a 
//                     href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
//                   >
//                     <Linkedin size={20} />
//                   </a>
//                 </div>
//                 <Button 
//                   variant="default" 
//                   size="sm"
//                   onClick={() => scrollToSection('#contact')}
//                   className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
//                 >
//                   Hire Me
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          const sectionId = section.getAttribute('id');
          if (sectionId) {
            setActiveSection(sectionId);
          }
          break;
        }
      }

      // If at the very top, set home as active
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
        : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-pointer">
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300 transform -translate-x-1/2 ${
                  activeSection === item.id
                    ? 'w-8'
                    : 'w-0 group-hover:w-8'
                }`} />
              </button>
            ))}
          </div>

          {/* Social Links, Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://github.com/Thomasjose-tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
            >
              <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <button
              onClick={toggleTheme}
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 group"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left transition-all duration-300 py-3 px-4 rounded-lg font-medium ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/30 dark:border-slate-700/30">
                <div className="flex space-x-2">
                  <a 
                    href="https://github.com/Thomasjose-tech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
                <Button 
                  size="sm"
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;