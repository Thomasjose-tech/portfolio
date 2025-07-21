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
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl shadow-elegant border-b border-border/50' 
        : 'bg-background/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-primary transition-all duration-300 hover:scale-105 cursor-pointer">
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 relative group font-medium px-3 py-2 rounded-lg hover:bg-accent/30"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2" />
              </button>
            ))}
          </div>

          {/* Social Links, Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://github.com/Thomasjose-tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30 group"
            >
              <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30 group"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <ThemeToggle />
            <Button 
              variant="default" 
              size="sm"
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 border-0"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground/80 hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-accent/30 font-medium"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div className="flex space-x-2">
                  <a 
                    href="https://github.com/Thomasjose-tech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/30"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
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