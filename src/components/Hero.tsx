// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { Github, Linkedin, Mail, Phone } from "lucide-react";

// // // // // // // // // // // const Hero = () => {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
// // // // // // // // // // //       {/* Animated background elements */}
// // // // // // // // // // //       <div className="absolute inset-0 overflow-hidden">
// // // // // // // // // // //         <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float" />
// // // // // // // // // // //         <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-hero-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
// // // // // // // // // // //         <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <div className="container mx-auto text-center relative z-10">
// // // // // // // // // // //         <div className="animate-fade-in">
// // // // // // // // // // //           <h1 className="text-5xl md:text-7xl font-bold text-hero-text mb-6">
// // // // // // // // // // //             Thomas Jose
// // // // // // // // // // //           </h1>
// // // // // // // // // // //           <div className="h-1 w-24 bg-hero-accent mx-auto mb-8 animate-glow" />
// // // // // // // // // // //           <p className="text-xl md:text-2xl text-hero-text/80 mb-4">
// // // // // // // // // // //             Web Developer & Tech Enthusiast
// // // // // // // // // // //           </p>
// // // // // // // // // // //           <p className="text-lg text-hero-text/60 mb-8 max-w-2xl mx-auto">
// // // // // // // // // // //             Passionate about building responsive web applications with React, Next.js, and modern technologies. 
// // // // // // // // // // //             6 months of experience delivering user-centric solutions.
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Contact Info */}
// // // // // // // // // // //         <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-in-left">
// // // // // // // // // // //           <a 
// // // // // // // // // // //             href="tel:+918304909105" 
// // // // // // // // // // //             className="flex items-center gap-2 text-hero-text/80 hover:text-hero-accent transition-colors duration-300"
// // // // // // // // // // //           >
// // // // // // // // // // //             <Phone size={20} />
// // // // // // // // // // //             +91 8304909105
// // // // // // // // // // //           </a>
// // // // // // // // // // //           <a 
// // // // // // // // // // //             href="mailto:thomasjose22@gmail.com" 
// // // // // // // // // // //             className="flex items-center gap-2 text-hero-text/80 hover:text-hero-accent transition-colors duration-300"
// // // // // // // // // // //           >
// // // // // // // // // // //             <Mail size={20} />
// // // // // // // // // // //             thomasjose22@gmail.com
// // // // // // // // // // //           </a>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Action Buttons */}
// // // // // // // // // // //         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
// // // // // // // // // // //           <Button 
// // // // // // // // // // //             variant="default" 
// // // // // // // // // // //             size="lg" 
// // // // // // // // // // //             className="bg-hero-accent text-hero-bg hover:bg-hero-accent/90 shadow-glow"
// // // // // // // // // // //             onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // //           >
// // // // // // // // // // //             View My Work
// // // // // // // // // // //           </Button>
// // // // // // // // // // //           <Button 
// // // // // // // // // // //             variant="outline" 
// // // // // // // // // // //             size="lg" 
// // // // // // // // // // //             className="border-hero-text/30 text-hero-text hover:bg-hero-text/10"
// // // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // //           >
// // // // // // // // // // //             Get In Touch
// // // // // // // // // // //           </Button>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Social Links */}
// // // // // // // // // // //         <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
// // // // // // // // // // //           <a 
// // // // // // // // // // //             href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //             target="_blank" 
// // // // // // // // // // //             rel="noopener noreferrer"
// // // // // // // // // // //             className="p-3 rounded-full bg-hero-text/10 text-hero-text hover:bg-hero-accent hover:text-hero-bg transition-all duration-300 hover:scale-110"
// // // // // // // // // // //           >
// // // // // // // // // // //             <Github size={24} />
// // // // // // // // // // //           </a>
// // // // // // // // // // //           <a 
// // // // // // // // // // //             href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //             target="_blank" 
// // // // // // // // // // //             rel="noopener noreferrer"
// // // // // // // // // // //             className="p-3 rounded-full bg-hero-text/10 text-hero-text hover:bg-hero-accent hover:text-hero-bg transition-all duration-300 hover:scale-110"
// // // // // // // // // // //           >
// // // // // // // // // // //             <Linkedin size={24} />
// // // // // // // // // // //           </a>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Scroll indicator */}
// // // // // // // // // // //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// // // // // // // // // // //         <div className="w-6 h-10 border-2 border-hero-text/30 rounded-full flex justify-center">
// // // // // // // // // // //           <div className="w-1 h-3 bg-hero-text/50 rounded-full mt-2 animate-pulse" />
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Hero;
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { Github, Linkedin, Mail, Phone } from "lucide-react";

// // // // // // // // // // // const Hero = () => {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <section className="min-h-[calc(100vh-4rem)] bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
// // // // // // // // // // //       {/* Animated background elements */}
// // // // // // // // // // //       <div className="absolute inset-0 overflow-hidden">
// // // // // // // // // // //         <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float" />
// // // // // // // // // // //         <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-hero-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
// // // // // // // // // // //         <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <div className="container mx-auto text-center relative z-10">
// // // // // // // // // // //         <div className="animate-fade-in">
// // // // // // // // // // //           <h1 className="text-5xl md:text-7xl font-bold text-hero-text mb-6">
// // // // // // // // // // //             Thomas Jose
// // // // // // // // // // //           </h1>
// // // // // // // // // // //           <div className="h-1 w-24 bg-hero-accent mx-auto mb-8 animate-glow" />
// // // // // // // // // // //           <p className="text-xl md:text-2xl text-hero-text/80 mb-4">
// // // // // // // // // // //             Web Developer & Tech Enthusiast
// // // // // // // // // // //           </p>
// // // // // // // // // // //           <p className="text-lg text-hero-text/60 mb-8 max-w-2xl mx-auto">
// // // // // // // // // // //             Passionate about building responsive web applications with React, Next.js, and modern technologies. 
// // // // // // // // // // //             6 months of experience delivering user-centric solutions.
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Contact Info */}
// // // // // // // // // // //         <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-in-left">
// // // // // // // // // // //           <a 
// // // // // // // // // // //             href="tel:+918304909105" 
// // // // // // // // // // //             className="flex items-center gap-2 text-hero-text/80 hover:text-hero-accent transition-colors duration-300"
// // // // // // // // // // //           >
// // // // // // // // // // //             <Phone size={20} />
// // // // // // // // // // //             +91 8304909105
// // // // // // // // // // //           </a>
// // // // // // // // // // //           <a 
// // // // // // // // // // //             href="mailto:thomasjose22@gmail.com" 
// // // // // // // // // // //             className="flex items-center gap-2 text-hero-text/80 hover:text-hero-accent transition-colors duration-300"
// // // // // // // // // // //           >
// // // // // // // // // // //             <Mail size={20} />
// // // // // // // // // // //             thomasjose22@gmail.com
// // // // // // // // // // //           </a>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Action Buttons */}
// // // // // // // // // // //         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
// // // // // // // // // // //           <Button 
// // // // // // // // // // //             variant="default" 
// // // // // // // // // // //             size="lg" 
// // // // // // // // // // //             className="bg-hero-accent text-hero-bg hover:bg-hero-accent/90 shadow-glow"
// // // // // // // // // // //             onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // //           >
// // // // // // // // // // //             View My Work
// // // // // // // // // // //           </Button>
// // // // // // // // // // //           <Button 
// // // // // // // // // // //             variant="outline" 
// // // // // // // // // // //             size="lg" 
// // // // // // // // // // //             className="border-hero-text/30 text-hero-text hover:bg-hero-text/10"
// // // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // //           >
// // // // // // // // // // //             Get In Touch
// // // // // // // // // // //           </Button>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Social Links */}
// // // // // // // // // // //         <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
// // // // // // // // // // //           <a 
// // // // // // // // // // //             href="https://github.com/Thomasjose-tech" 
// // // // // // // // // // //             target="_blank" 
// // // // // // // // // // //             rel="noopener noreferrer"
// // // // // // // // // // //             className="p-3 rounded-full bg-hero-text/10 text-hero-text hover:bg-hero-accent hover:text-hero-bg transition-all duration-300 hover:scale-110"
// // // // // // // // // // //           >
// // // // // // // // // // //             <Github size={24} />
// // // // // // // // // // //           </a>
// // // // // // // // // // //           <a 
// // // // // // // // // // //             href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // // //             target="_blank" 
// // // // // // // // // // //             rel="noopener noreferrer"
// // // // // // // // // // //             className="p-3 rounded-full bg-hero-text/10 text-hero-text hover:bg-hero-accent hover:text-hero-bg transition-all duration-300 hover:scale-110"
// // // // // // // // // // //           >
// // // // // // // // // // //             <Linkedin size={24} />
// // // // // // // // // // //           </a>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Scroll indicator */}
// // // // // // // // // // //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// // // // // // // // // // //         <div className="w-6 h-10 border-2 border-hero-text/30 rounded-full flex justify-center">
// // // // // // // // // // //           <div className="w-1 h-3 bg-hero-text/50 rounded-full mt-2 animate-pulse" />
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Hero;
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // import { Github, Linkedin, Mail, Phone, ArrowDown, Code, Sparkles } from "lucide-react";
// // // // // // // // // // import { useState, useEffect } from "react";

// // // // // // // // // // const PremiumHomepage = () => {
// // // // // // // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // // // // // // //   const slides = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Crafting Digital Experiences",
// // // // // // // // // //       subtitle: "Web Developer & Creative Technologist",
// // // // // // // // // //       description: "Transforming ideas into beautiful, functional web applications with precision and passion."
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Modern Web Solutions",
// // // // // // // // // //       subtitle: "React • Next.js • TypeScript",
// // // // // // // // // //       description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "User-Centric Design",
// // // // // // // // // //       subtitle: "Performance Meets Aesthetics",
// // // // // // // // // //       description: "Creating seamless user experiences that blend functionality with elegant design principles."
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     setIsVisible(true);
// // // // // // // // // //     const interval = setInterval(() => {
// // // // // // // // // //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// // // // // // // // // //     }, 4000);

// // // // // // // // // //     return () => clearInterval(interval);
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
// // // // // // // // // //       {/* Animated Background */}
// // // // // // // // // //       <div className="absolute inset-0">
// // // // // // // // // //         {/* Gradient Orbs */}
// // // // // // // // // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" 
// // // // // // // // // //              style={{ animationDuration: '4s' }} />
// // // // // // // // // //         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" 
// // // // // // // // // //              style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
// // // // // // // // // //         {/* Floating Particles */}
// // // // // // // // // //         {[...Array(20)].map((_, i) => (
// // // // // // // // // //           <div
// // // // // // // // // //             key={i}
// // // // // // // // // //             className="absolute w-2 h-2 bg-white/10 rounded-full"
// // // // // // // // // //             style={{
// // // // // // // // // //               left: `${Math.random() * 100}%`,
// // // // // // // // // //               top: `${Math.random() * 100}%`,
// // // // // // // // // //               animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
// // // // // // // // // //               animationDelay: `${Math.random() * 2}s`
// // // // // // // // // //             }}
// // // // // // // // // //           />
// // // // // // // // // //         ))}
        
// // // // // // // // // //         {/* Grid Pattern */}
// // // // // // // // // //         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Navigation */}
// // // // // // // // // //       <nav className="relative z-50 p-6">
// // // // // // // // // //         <div className="flex justify-between items-center">
// // // // // // // // // //           <div className="text-2xl font-bold text-white">
// // // // // // // // // //             <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">TJ</span>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="hidden md:flex space-x-8 text-white/70">
// // // // // // // // // //             <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
// // // // // // // // // //             <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
// // // // // // // // // //             <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
// // // // // // // // // //             <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </nav>

// // // // // // // // // //       {/* Main Content */}
// // // // // // // // // //       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
// // // // // // // // // //         <div className="max-w-4xl mx-auto text-center">
// // // // // // // // // //           {/* Slideshow Content */}
// // // // // // // // // //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // // //             <div className="mb-6">
// // // // // // // // // //               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
// // // // // // // // // //                 <Sparkles className="w-4 h-4 text-purple-400" />
// // // // // // // // // //                 <span className="text-white/80 text-sm">Available for freelance projects</span>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             <h1 className="text-7xl md:text-8xl font-light text-white mb-6 tracking-tight">
// // // // // // // // // //               <span className="block font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
// // // // // // // // // //                 Thomas Jose
// // // // // // // // // //               </span>
// // // // // // // // // //             </h1>

// // // // // // // // // //             {/* Slideshow */}
// // // // // // // // // //             <div className="relative h-32 overflow-hidden">
// // // // // // // // // //               {slides.map((slide, index) => (
// // // // // // // // // //                 <div
// // // // // // // // // //                   key={index}
// // // // // // // // // //                   className={`absolute inset-0 transition-all duration-1000 ${
// // // // // // // // // //                     index === currentSlide
// // // // // // // // // //                       ? 'opacity-100 transform translate-y-0'
// // // // // // // // // //                       : 'opacity-0 transform translate-y-full'
// // // // // // // // // //                   }`}
// // // // // // // // // //                 >
// // // // // // // // // //                   <h2 className="text-3xl md:text-4xl font-light text-purple-200 mb-2">
// // // // // // // // // //                     {slide.title}
// // // // // // // // // //                   </h2>
// // // // // // // // // //                   <h3 className="text-xl text-white/60 mb-4 font-mono">
// // // // // // // // // //                     {slide.subtitle}
// // // // // // // // // //                   </h3>
// // // // // // // // // //                   <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
// // // // // // // // // //                     {slide.description}
// // // // // // // // // //                   </p>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Slide Indicators */}
// // // // // // // // // //             <div className="flex justify-center gap-2 mt-8 mb-12">
// // // // // // // // // //               {slides.map((_, index) => (
// // // // // // // // // //                 <button
// // // // // // // // // //                   key={index}
// // // // // // // // // //                   onClick={() => setCurrentSlide(index)}
// // // // // // // // // //                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
// // // // // // // // // //                     index === currentSlide
// // // // // // // // // //                       ? 'bg-purple-400 w-8'
// // // // // // // // // //                       : 'bg-white/30 hover:bg-white/50'
// // // // // // // // // //                   }`}
// // // // // // // // // //                 />
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Contact Information */}
// // // // // // // // // //           <div className={`transition-all duration-1000 delay-300 ${
// // // // // // // // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// // // // // // // // // //           }`}>
// // // // // // // // // //             <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12 text-white/70">
// // // // // // // // // //               <a 
// // // // // // // // // //                 href="mailto:thomasjose22@gmail.com" 
// // // // // // // // // //                 className="flex items-center gap-3 hover:text-purple-400 transition-all duration-300 group"
// // // // // // // // // //               >
// // // // // // // // // //                 <div className="p-2 rounded-full bg-white/10 group-hover:bg-purple-500/20 transition-colors duration-300">
// // // // // // // // // //                   <Mail size={20} />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <span className="font-mono text-sm">thomasjose22@gmail.com</span>
// // // // // // // // // //               </a>
// // // // // // // // // //               <a 
// // // // // // // // // //                 href="tel:+918304909105" 
// // // // // // // // // //                 className="flex items-center gap-3 hover:text-purple-400 transition-all duration-300 group"
// // // // // // // // // //               >
// // // // // // // // // //                 <div className="p-2 rounded-full bg-white/10 group-hover:bg-purple-500/20 transition-colors duration-300">
// // // // // // // // // //                   <Phone size={20} />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <span className="font-mono text-sm">+91 8304909105</span>
// // // // // // // // // //               </a>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Action Buttons */}
// // // // // // // // // //             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
// // // // // // // // // //               <Button 
// // // // // // // // // //                 size="lg"
// // // // // // // // // //                 className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // // //                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // //               >
// // // // // // // // // //                 <Code className="w-5 h-5 mr-2" />
// // // // // // // // // //                 View Projects
// // // // // // // // // //               </Button>
// // // // // // // // // //               <Button 
// // // // // // // // // //                 variant="outline"
// // // // // // // // // //                 size="lg"
// // // // // // // // // //                 className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
// // // // // // // // // //                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // //               >
// // // // // // // // // //                 Let's Connect
// // // // // // // // // //               </Button>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Social Links */}
// // // // // // // // // //             <div className="flex justify-center gap-6">
// // // // // // // // // //               <a 
// // // // // // // // // //                 href="https://github.com/Thomasjose-tech" 
// // // // // // // // // //                 target="_blank" 
// // // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // // //                 className="group p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:bg-purple-500/10"
// // // // // // // // // //               >
// // // // // // // // // //                 <Github className="w-6 h-6 text-white/70 group-hover:text-purple-400 transition-colors duration-300" />
// // // // // // // // // //               </a>
// // // // // // // // // //               <a 
// // // // // // // // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // // //                 target="_blank" 
// // // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // // //                 className="group p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:bg-blue-500/10"
// // // // // // // // // //               >
// // // // // // // // // //                 <Linkedin className="w-6 h-6 text-white/70 group-hover:text-blue-400 transition-colors duration-300" />
// // // // // // // // // //               </a>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Scroll Indicator */}
// // // // // // // // // //       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
// // // // // // // // // //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
// // // // // // // // // //       }`}>
// // // // // // // // // //         <div className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 cursor-pointer"
// // // // // // // // // //              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
// // // // // // // // // //           <span className="text-xs font-mono tracking-wider">SCROLL</span>
// // // // // // // // // //           <div className="animate-bounce">
// // // // // // // // // //             <ArrowDown size={20} />
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>


// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default PremiumHomepage;
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { Github, Linkedin, Mail, Phone, ArrowDown, Code, Sparkles } from "lucide-react";
// // // // // // // // // import { useState, useEffect } from "react";

// // // // // // // // // const PremiumHomepage = () => {
// // // // // // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // // // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // // // // // //   const slides = [
// // // // // // // // //     {
// // // // // // // // //       title: "Crafting Digital Experiences",
// // // // // // // // //       subtitle: "Web Developer & Creative Technologist",
// // // // // // // // //       description: "Transforming ideas into beautiful, functional web applications with precision and passion."
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Modern Web Solutions",
// // // // // // // // //       subtitle: "React • Next.js • TypeScript",
// // // // // // // // //       description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "User-Centric Design",
// // // // // // // // //       subtitle: "Performance Meets Aesthetics",
// // // // // // // // //       description: "Creating seamless user experiences that blend functionality with elegant design principles."
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     setIsVisible(true);
// // // // // // // // //     const interval = setInterval(() => {
// // // // // // // // //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// // // // // // // // //     }, 4000);

// // // // // // // // //     return () => clearInterval(interval);
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 relative overflow-hidden">
// // // // // // // // //       {/* Animated Background */}
// // // // // // // // //       <div className="absolute inset-0">
// // // // // // // // //         {/* Gradient Orbs */}
// // // // // // // // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse" 
// // // // // // // // //              style={{ animationDuration: '4s' }} />
// // // // // // // // //         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-3xl animate-pulse" 
// // // // // // // // //              style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
// // // // // // // // //         {/* Floating Particles */}
// // // // // // // // //         {[...Array(20)].map((_, i) => (
// // // // // // // // //           <div
// // // // // // // // //             key={i}
// // // // // // // // //             className="absolute w-2 h-2 bg-slate-800/10 dark:bg-white/10 rounded-full"
// // // // // // // // //             style={{
// // // // // // // // //               left: `${Math.random() * 100}%`,
// // // // // // // // //               top: `${Math.random() * 100}%`,
// // // // // // // // //               animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
// // // // // // // // //               animationDelay: `${Math.random() * 2}s`
// // // // // // // // //             }}
// // // // // // // // //           />
// // // // // // // // //         ))}
        
// // // // // // // // //         {/* Grid Pattern */}
// // // // // // // // //         <div
// // // // // // // // //           className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'0.03\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.03\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}
// // // // // // // // //         />
// // // // // // // // //       </div>

// // // // // // // // //       {/* Logo/Brand */}
// // // // // // // // //       <div className="relative z-50 p-6">
// // // // // // // // //         <div className="text-2xl font-bold">
// // // // // // // // //           <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">TJ</span>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Main Content */}
// // // // // // // // //       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
// // // // // // // // //         <div className="max-w-4xl mx-auto text-center">
// // // // // // // // //           {/* Slideshow Content */}
// // // // // // // // //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // //             <div className="mb-6">
// // // // // // // // //               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-full border border-slate-800/20 dark:border-white/20 mb-8">
// // // // // // // // //                 <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
// // // // // // // // //                 <span className="text-slate-700 dark:text-white/80 text-sm">Available for freelance projects</span>
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             <h1 className="text-7xl md:text-8xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
// // // // // // // // //               <span className="block font-bold bg-gradient-to-r from-slate-900 via-purple-700 to-pink-700 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent">
// // // // // // // // //                 Thomas Jose
// // // // // // // // //               </span>
// // // // // // // // //             </h1>

// // // // // // // // //             {/* Slideshow */}
// // // // // // // // //             <div className="relative h-32 overflow-hidden">
// // // // // // // // //               {slides.map((slide, index) => (
// // // // // // // // //                 <div
// // // // // // // // //                   key={index}
// // // // // // // // //                   className={`absolute inset-0 transition-all duration-1000 ${
// // // // // // // // //                     index === currentSlide
// // // // // // // // //                       ? 'opacity-100 transform translate-y-0'
// // // // // // // // //                       : 'opacity-0 transform translate-y-full'
// // // // // // // // //                   }`}
// // // // // // // // //                 >
// // // // // // // // //                   <h2 className="text-3xl md:text-4xl font-light text-purple-700 dark:text-purple-200 mb-2">
// // // // // // // // //                     {slide.title}
// // // // // // // // //                   </h2>
// // // // // // // // //                   <h3 className="text-xl text-slate-600 dark:text-white/60 mb-4 font-mono">
// // // // // // // // //                     {slide.subtitle}
// // // // // // // // //                   </h3>
// // // // // // // // //                   <p className="text-lg text-slate-700 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
// // // // // // // // //                     {slide.description}
// // // // // // // // //                   </p>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}
// // // // // // // // //             </div>

// // // // // // // // //             {/* Slide Indicators */}
// // // // // // // // //             <div className="flex justify-center gap-2 mt-8 mb-12">
// // // // // // // // //               {slides.map((_, index) => (
// // // // // // // // //                 <button
// // // // // // // // //                   key={index}
// // // // // // // // //                   onClick={() => setCurrentSlide(index)}
// // // // // // // // //                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
// // // // // // // // //                     index === currentSlide
// // // // // // // // //                       ? 'bg-purple-600 dark:bg-purple-400 w-8'
// // // // // // // // //                       : 'bg-slate-800/30 dark:bg-white/30 hover:bg-slate-800/50 dark:hover:bg-white/50'
// // // // // // // // //                   }`}
// // // // // // // // //                 />
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Contact Information */}
// // // // // // // // //           <div className={`transition-all duration-1000 delay-300 ${
// // // // // // // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// // // // // // // // //           }`}>
// // // // // // // // //             <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12 text-slate-600 dark:text-white/70">
// // // // // // // // //               <a 
// // // // // // // // //                 href="mailto:thomasjose22@gmail.com" 
// // // // // // // // //                 className="flex items-center gap-3 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group"
// // // // // // // // //               >
// // // // // // // // //                 <div className="p-2 rounded-full bg-slate-800/10 dark:bg-white/10 group-hover:bg-purple-500/20 dark:group-hover:bg-purple-500/20 transition-colors duration-300">
// // // // // // // // //                   <Mail size={20} />
// // // // // // // // //                 </div>
// // // // // // // // //                 <span className="font-mono text-sm">thomasjose22@gmail.com</span>
// // // // // // // // //               </a>
// // // // // // // // //               <a 
// // // // // // // // //                 href="tel:+918304909105" 
// // // // // // // // //                 className="flex items-center gap-3 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group"
// // // // // // // // //               >
// // // // // // // // //                 <div className="p-2 rounded-full bg-slate-800/10 dark:bg-white/10 group-hover:bg-purple-500/20 dark:group-hover:bg-purple-500/20 transition-colors duration-300">
// // // // // // // // //                   <Phone size={20} />
// // // // // // // // //                 </div>
// // // // // // // // //                 <span className="font-mono text-sm">+91 8304909105</span>
// // // // // // // // //               </a>
// // // // // // // // //             </div>

// // // // // // // // //             {/* Action Buttons */}
// // // // // // // // //             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
// // // // // // // // //               <Button 
// // // // // // // // //                 size="lg"
// // // // // // // // //                 className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // // //                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // //               >
// // // // // // // // //                 <Code className="w-5 h-5 mr-2" />
// // // // // // // // //                 View Projects
// // // // // // // // //               </Button>
// // // // // // // // //               <Button 
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="lg"
// // // // // // // // //                 className="border-slate-800/30 dark:border-white/30 text-slate-800 dark:text-white hover:bg-slate-800/10 dark:hover:bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
// // // // // // // // //                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // //               >
// // // // // // // // //                 Let's Connect
// // // // // // // // //               </Button>
// // // // // // // // //             </div>

// // // // // // // // //             {/* Social Links */}
// // // // // // // // //             <div className="flex justify-center gap-6">
// // // // // // // // //               <a 
// // // // // // // // //                 href="https://github.com/Thomasjose-tech" 
// // // // // // // // //                 target="_blank" 
// // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // //                 className="group p-4 rounded-full bg-slate-800/5 dark:bg-white/5 backdrop-blur-sm border border-slate-800/10 dark:border-white/10 hover:border-purple-400/50 dark:hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:bg-purple-500/10 dark:hover:bg-purple-500/10"
// // // // // // // // //               >
// // // // // // // // //                 <Github className="w-6 h-6 text-slate-600 dark:text-white/70 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
// // // // // // // // //               </a>
// // // // // // // // //               <a 
// // // // // // // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // // //                 target="_blank" 
// // // // // // // // //                 rel="noopener noreferrer"
// // // // // // // // //                 className="group p-4 rounded-full bg-slate-800/5 dark:bg-white/5 backdrop-blur-sm border border-slate-800/10 dark:border-white/10 hover:border-blue-400/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:bg-blue-500/10 dark:hover:bg-blue-500/10"
// // // // // // // // //               >
// // // // // // // // //                 <Linkedin className="w-6 h-6 text-slate-600 dark:text-white/70 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
// // // // // // // // //               </a>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Scroll Indicator */}
// // // // // // // // //       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
// // // // // // // // //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
// // // // // // // // //       }`}>
// // // // // // // // //         <div className="flex flex-col items-center gap-2 text-slate-500 dark:text-white/40 hover:text-slate-700 dark:hover:text-white/70 transition-colors duration-300 cursor-pointer"
// // // // // // // // //              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
// // // // // // // // //           <span className="text-xs font-mono tracking-wider">SCROLL</span>
// // // // // // // // //           <div className="animate-bounce">
// // // // // // // // //             <ArrowDown size={20} />
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>


// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default PremiumHomepage;
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import { Github, Linkedin, Mail, Phone, ArrowDown, Code, Sparkles } from "lucide-react";
// // // // // // // // import { useState, useEffect } from "react";

// // // // // // // // const PremiumHomepage = () => {
// // // // // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // // // // //   const slides = [
// // // // // // // //     {
// // // // // // // //       title: "Crafting Digital Experiences",
// // // // // // // //       subtitle: "Web Developer & Creative Technologist",
// // // // // // // //       description: "Transforming ideas into beautiful, functional web applications with precision and passion."
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Modern Web Solutions",
// // // // // // // //       subtitle: "React • Next.js • TypeScript",
// // // // // // // //       description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "User-Centric Design",
// // // // // // // //       subtitle: "Performance Meets Aesthetics",
// // // // // // // //       description: "Creating seamless user experiences that blend functionality with elegant design principles."
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   useEffect(() => {
// // // // // // // //     setIsVisible(true);
// // // // // // // //     const interval = setInterval(() => {
// // // // // // // //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// // // // // // // //     }, 4000);

// // // // // // // //     return () => clearInterval(interval);
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
// // // // // // // //       {/* Animated Background */}
// // // // // // // //       <div className="absolute inset-0">
// // // // // // // //         {/* Gradient Orbs */}
// // // // // // // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl animate-pulse" 
// // // // // // // //              style={{ animationDuration: '6s' }} />
// // // // // // // //         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse" 
// // // // // // // //              style={{ animationDuration: '8s', animationDelay: '3s' }} />
        
// // // // // // // //         {/* Floating Particles */}
// // // // // // // //         {[...Array(15)].map((_, i) => (
// // // // // // // //           <div
// // // // // // // //             key={i}
// // // // // // // //             className="absolute w-1 h-1 bg-slate-400/20 dark:bg-blue-400/20 rounded-full"
// // // // // // // //             style={{
// // // // // // // //               left: `${Math.random() * 100}%`,
// // // // // // // //               top: `${Math.random() * 100}%`,
// // // // // // // //               animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
// // // // // // // //               animationDelay: `${Math.random() * 3}s`
// // // // // // // //             }}
// // // // // // // //           />
// // // // // // // //         ))}
        
// // // // // // // //         {/* Grid Pattern */}
// // // // // // // //         <div
// // // // // // // //           className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}
// // // // // // // //         />
// // // // // // // //       </div>

// // // // // // // //       {/* Logo/Brand */}
// // // // // // // //       <div className="relative z-50 p-6">
// // // // // // // //         <div className="text-2xl font-bold">
// // // // // // // //           <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">TJ</span>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Main Content */}
// // // // // // // //       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
// // // // // // // //         <div className="max-w-4xl mx-auto text-center">
// // // // // // // //           {/* Slideshow Content */}
// // // // // // // //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // //             <div className="mb-6">
// // // // // // // //               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-slate-200/50 dark:border-slate-700/50 mb-8">
// // // // // // // //                 <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
// // // // // // // //                 <span className="text-slate-700 dark:text-slate-300 text-sm">Available for freelance projects</span>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             <h1 className="text-7xl md:text-8xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
// // // // // // // //               <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
// // // // // // // //                 Thomas Jose
// // // // // // // //               </span>
// // // // // // // //             </h1>

// // // // // // // //             {/* Slideshow */}
// // // // // // // //             <div className="relative h-32 overflow-hidden">
// // // // // // // //               {slides.map((slide, index) => (
// // // // // // // //                 <div
// // // // // // // //                   key={index}
// // // // // // // //                   className={`absolute inset-0 transition-all duration-1000 ${
// // // // // // // //                     index === currentSlide
// // // // // // // //                       ? 'opacity-100 transform translate-y-0'
// // // // // // // //                       : 'opacity-0 transform translate-y-full'
// // // // // // // //                   }`}
// // // // // // // //                 >
// // // // // // // //                   <h2 className="text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-200 mb-2">
// // // // // // // //                     {slide.title}
// // // // // // // //                   </h2>
// // // // // // // //                   <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-4 font-mono">
// // // // // // // //                     {slide.subtitle}
// // // // // // // //                   </h3>
// // // // // // // //                   <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
// // // // // // // //                     {slide.description}
// // // // // // // //                   </p>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>

// // // // // // // //             {/* Slide Indicators */}
// // // // // // // //             <div className="flex justify-center gap-2 mt-8 mb-12">
// // // // // // // //               {slides.map((_, index) => (
// // // // // // // //                 <button
// // // // // // // //                   key={index}
// // // // // // // //                   onClick={() => setCurrentSlide(index)}
// // // // // // // //                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
// // // // // // // //                     index === currentSlide
// // // // // // // //                       ? 'bg-blue-600 dark:bg-blue-400 w-8'
// // // // // // // //                       : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
// // // // // // // //                   }`}
// // // // // // // //                 />
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Contact Information */}
// // // // // // // //           <div className={`transition-all duration-1000 delay-300 ${
// // // // // // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// // // // // // // //           }`}>
// // // // // // // //             <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12 text-slate-600 dark:text-slate-400">
// // // // // // // //               <a 
// // // // // // // //                 href="mailto:thomasjose22@gmail.com" 
// // // // // // // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
// // // // // // // //               >
// // // // // // // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
// // // // // // // //                   <Mail size={20} />
// // // // // // // //                 </div>
// // // // // // // //                 <span className="font-mono text-sm">thomasjose22@gmail.com</span>
// // // // // // // //               </a>
// // // // // // // //               <a 
// // // // // // // //                 href="tel:+918304909105" 
// // // // // // // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
// // // // // // // //               >
// // // // // // // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
// // // // // // // //                   <Phone size={20} />
// // // // // // // //                 </div>
// // // // // // // //                 <span className="font-mono text-sm">+91 8304909105</span>
// // // // // // // //               </a>
// // // // // // // //             </div>

// // // // // // // //             {/* Action Buttons */}
// // // // // // // //             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
// // // // // // // //               <Button 
// // // // // // // //                 size="lg"
// // // // // // // //                 className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-8 py-3 rounded-full shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // // //                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // //               >
// // // // // // // //                 <Code className="w-5 h-5 mr-2" />
// // // // // // // //                 View Projects
// // // // // // // //               </Button>
// // // // // // // //               <Button 
// // // // // // // //                 variant="outline"
// // // // // // // //                 size="lg"
// // // // // // // //                 className="border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
// // // // // // // //                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // //               >
// // // // // // // //                 Let's Connect
// // // // // // // //               </Button>
// // // // // // // //             </div>

// // // // // // // //             {/* Social Links */}
// // // // // // // //             <div className="flex justify-center gap-6">
// // // // // // // //               <a 
// // // // // // // //                 href="https://github.com/Thomasjose-tech" 
// // // // // // // //                 target="_blank" 
// // // // // // // //                 rel="noopener noreferrer"
// // // // // // // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700"
// // // // // // // //               >
// // // // // // // //                 <Github className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300" />
// // // // // // // //               </a>
// // // // // // // //               <a 
// // // // // // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // // //                 target="_blank" 
// // // // // // // //                 rel="noopener noreferrer"
// // // // // // // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
// // // // // // // //               >
// // // // // // // //                 <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
// // // // // // // //               </a>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Scroll Indicator */}
// // // // // // // //       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
// // // // // // // //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
// // // // // // // //       }`}>
// // // // // // // //         <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 cursor-pointer"
// // // // // // // //              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
// // // // // // // //           <span className="text-xs font-mono tracking-wider">SCROLL</span>
// // // // // // // //           <div className="animate-bounce">
// // // // // // // //             <ArrowDown size={20} />
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>


// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default PremiumHomepage;
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Github, Linkedin, Mail, Phone, ArrowDown, Code } from "lucide-react";
// // // // // // // import { useState, useEffect } from "react";

// // // // // // // const PremiumHomepage = () => {
// // // // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // // // //   const slides = [
// // // // // // //     {
// // // // // // //       title: "Crafting Digital Experiences",
// // // // // // //       subtitle: "Web Developer & Creative Technologist",
// // // // // // //       description: "Transforming ideas into beautiful, functional web applications with precision and passion."
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Modern Web Solutions",
// // // // // // //       subtitle: "React • Next.js • TypeScript",
// // // // // // //       description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "User-Centric Design",
// // // // // // //       subtitle: "Performance Meets Aesthetics",
// // // // // // //       description: "Creating seamless user experiences that blend functionality with elegant design principles."
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   useEffect(() => {
// // // // // // //     setIsVisible(true);
// // // // // // //     const interval = setInterval(() => {
// // // // // // //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// // // // // // //     }, 4000);

// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
// // // // // // //       {/* Animated Background */}
// // // // // // //       <div className="absolute inset-0">
// // // // // // //         {/* Gradient Orbs */}
// // // // // // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl animate-pulse" 
// // // // // // //              style={{ animationDuration: '6s' }} />
// // // // // // //         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse" 
// // // // // // //              style={{ animationDuration: '8s', animationDelay: '3s' }} />
        
// // // // // // //         {/* Floating Particles */}
// // // // // // //         {[...Array(15)].map((_, i) => (
// // // // // // //           <div
// // // // // // //             key={i}
// // // // // // //             className="absolute w-1 h-1 bg-slate-400/20 dark:bg-blue-400/20 rounded-full"
// // // // // // //             style={{
// // // // // // //               left: `${Math.random() * 100}%`,
// // // // // // //               top: `${Math.random() * 100}%`,
// // // // // // //               animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
// // // // // // //               animationDelay: `${Math.random() * 3}s`
// // // // // // //             }}
// // // // // // //           />
// // // // // // //         ))}
        
// // // // // // //         {/* Grid Pattern */}
// // // // // // //         <div
// // // // // // //           className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}
// // // // // // //         />
// // // // // // //       </div>

// // // // // // //       {/* Logo/Brand */}
// // // // // // //       <div className="relative z-50 p-6">
// // // // // // //         <div className="text-2xl font-bold">
// // // // // // //           <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">TJ</span>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Main Content */}
// // // // // // //       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
// // // // // // //         <div className="max-w-4xl mx-auto text-center">
// // // // // // //           {/* Slideshow Content */}
// // // // // // //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // //             <h1 className="text-7xl md:text-8xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
// // // // // // //               <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
// // // // // // //                 Thomas Jose
// // // // // // //               </span>
// // // // // // //             </h1>

// // // // // // //             {/* Slideshow */}
// // // // // // //             <div className="relative h-32 overflow-hidden">
// // // // // // //               {slides.map((slide, index) => (
// // // // // // //                 <div
// // // // // // //                   key={index}
// // // // // // //                   className={`absolute inset-0 transition-all duration-1000 ${
// // // // // // //                     index === currentSlide
// // // // // // //                       ? 'opacity-100 transform translate-y-0'
// // // // // // //                       : 'opacity-0 transform translate-y-full'
// // // // // // //                   }`}
// // // // // // //                 >
// // // // // // //                   <h2 className="text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-200 mb-2">
// // // // // // //                     {slide.title}
// // // // // // //                   </h2>
// // // // // // //                   <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-4 font-mono">
// // // // // // //                     {slide.subtitle}
// // // // // // //                   </h3>
// // // // // // //                   <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
// // // // // // //                     {slide.description}
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>

// // // // // // //             {/* Slide Indicators */}
// // // // // // //             <div className="flex justify-center gap-2 mt-8 mb-12">
// // // // // // //               {slides.map((_, index) => (
// // // // // // //                 <button
// // // // // // //                   key={index}
// // // // // // //                   onClick={() => setCurrentSlide(index)}
// // // // // // //                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
// // // // // // //                     index === currentSlide
// // // // // // //                       ? 'bg-blue-600 dark:bg-blue-400 w-8'
// // // // // // //                       : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
// // // // // // //                   }`}
// // // // // // //                 />
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Contact Information */}
// // // // // // //           <div className={`transition-all duration-1000 delay-300 ${
// // // // // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// // // // // // //           }`}>
// // // // // // //             <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12 text-slate-600 dark:text-slate-400">
// // // // // // //               <a 
// // // // // // //                 href="mailto:thomasjose22@gmail.com" 
// // // // // // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
// // // // // // //               >
// // // // // // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
// // // // // // //                   <Mail size={20} />
// // // // // // //                 </div>
// // // // // // //                 <span className="font-mono text-sm">thomasjose22@gmail.com</span>
// // // // // // //               </a>
// // // // // // //               <a 
// // // // // // //                 href="tel:+918304909105" 
// // // // // // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
// // // // // // //               >
// // // // // // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
// // // // // // //                   <Phone size={20} />
// // // // // // //                 </div>
// // // // // // //                 <span className="font-mono text-sm">+91 8304909105</span>
// // // // // // //               </a>
// // // // // // //             </div>

// // // // // // //             {/* Action Buttons */}
// // // // // // //             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
// // // // // // //               <Button 
// // // // // // //                 size="lg"
// // // // // // //                 className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-8 py-3 rounded-full shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // // //                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // //               >
// // // // // // //                 <Code className="w-5 h-5 mr-2" />
// // // // // // //                 View Projects
// // // // // // //               </Button>
// // // // // // //               <Button 
// // // // // // //                 variant="outline"
// // // // // // //                 size="lg"
// // // // // // //                 className="border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
// // // // // // //                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // //               >
// // // // // // //                 Let's Connect
// // // // // // //               </Button>
// // // // // // //             </div>

// // // // // // //             {/* Social Links - Only visible on small screens */}
// // // // // // //             <div className="flex justify-center gap-6 sm:hidden">
// // // // // // //               <a 
// // // // // // //                 href="https://github.com/Thomasjose-tech" 
// // // // // // //                 target="_blank" 
// // // // // // //                 rel="noopener noreferrer"
// // // // // // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700"
// // // // // // //               >
// // // // // // //                 <Github className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300" />
// // // // // // //               </a>
// // // // // // //               <a 
// // // // // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // // //                 target="_blank" 
// // // // // // //                 rel="noopener noreferrer"
// // // // // // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
// // // // // // //               >
// // // // // // //                 <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Scroll Indicator */}
// // // // // // //       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
// // // // // // //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
// // // // // // //       }`}>
// // // // // // //         <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 cursor-pointer"
// // // // // // //              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
// // // // // // //           <span className="text-xs font-mono tracking-wider">SCROLL</span>
// // // // // // //           <div className="animate-bounce">
// // // // // // //             <ArrowDown size={20} />
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PremiumHomepage;
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Github, Linkedin, Mail, Phone, ArrowDown, Code } from "lucide-react";
// // // // // // import { useState, useEffect } from "react";

// // // // // // const PremiumHomepage = () => {
// // // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // // //   const slides = [
// // // // // //     {
// // // // // //       title: "Crafting Digital Experiences",
// // // // // //       subtitle: "Web Developer & Creative Technologist",
// // // // // //       description: "Transforming ideas into beautiful, functional web applications with precision and passion."
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Modern Web Solutions",
// // // // // //       subtitle: "React • Next.js • TypeScript",
// // // // // //       description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
// // // // // //     },
// // // // // //     {
// // // // // //       title: "User-Centric Design",
// // // // // //       subtitle: "Performance Meets Aesthetics",
// // // // // //       description: "Creating seamless user experiences that blend functionality with elegant design principles."
// // // // // //     }
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     setIsVisible(true);
// // // // // //     const interval = setInterval(() => {
// // // // // //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// // // // // //     }, 4000);

// // // // // //     return () => clearInterval(interval);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
// // // // // //       {/* Animated Background */}
// // // // // //       <div className="absolute inset-0">
// // // // // //         {/* Gradient Orbs */}
// // // // // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl animate-pulse" 
// // // // // //              style={{ animationDuration: '6s' }} />
// // // // // //         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse" 
// // // // // //              style={{ animationDuration: '8s', animationDelay: '3s' }} />
        
// // // // // //         {/* Floating Particles */}
// // // // // //         {[...Array(15)].map((_, i) => (
// // // // // //           <div
// // // // // //             key={i}
// // // // // //             className="absolute w-1 h-1 bg-slate-400/20 dark:bg-blue-400/20 rounded-full"
// // // // // //             style={{
// // // // // //               left: `${Math.random() * 100}%`,
// // // // // //               top: `${Math.random() * 100}%`,
// // // // // //               animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
// // // // // //               animationDelay: `${Math.random() * 3}s`
// // // // // //             }}
// // // // // //           />
// // // // // //         ))}
        
// // // // // //         {/* Grid Pattern */}
// // // // // //         <div
// // // // // //           className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}
// // // // // //         />
// // // // // //       </div>

// // // // // //       {/* Logo/Brand */}
// // // // // //       <div className="relative z-50 p-6">
// // // // // //         <div className="text-2xl font-bold">
// // // // // //           <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">TJ</span>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Main Content */}
// // // // // //       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
// // // // // //         <div className="max-w-4xl mx-auto text-center">
// // // // // //           {/* Slideshow Content */}
// // // // // //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // //             <h1 className="text-7xl md:text-8xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
// // // // // //               <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
// // // // // //                 Thomas Jose
// // // // // //               </span>
// // // // // //             </h1>

// // // // // //             {/* Slideshow */}
// // // // // //             <div className="relative h-32 overflow-hidden">
// // // // // //               {slides.map((slide, index) => (
// // // // // //                 <div
// // // // // //                   key={index}
// // // // // //                   className={`absolute inset-0 transition-all duration-1000 ${
// // // // // //                     index === currentSlide
// // // // // //                       ? 'opacity-100 transform translate-y-0'
// // // // // //                       : 'opacity-0 transform translate-y-full'
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   <h2 className="text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-200 mb-2">
// // // // // //                     {slide.title}
// // // // // //                   </h2>
// // // // // //                   <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-4 font-mono">
// // // // // //                     {slide.subtitle}
// // // // // //                   </h3>
// // // // // //                   <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
// // // // // //                     {slide.description}
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             {/* Slide Indicators */}
// // // // // //             <div className="flex justify-center gap-2 mt-8 mb-12">
// // // // // //               {slides.map((_, index) => (
// // // // // //                 <button
// // // // // //                   key={index}
// // // // // //                   onClick={() => setCurrentSlide(index)}
// // // // // //                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
// // // // // //                     index === currentSlide
// // // // // //                       ? 'bg-blue-600 dark:bg-blue-400 w-8'
// // // // // //                       : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
// // // // // //                   }`}
// // // // // //                 />
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Contact Information */}
// // // // // //           <div className={`transition-all duration-1000 delay-300 ${
// // // // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// // // // // //           }`}>
// // // // // //             <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12 text-slate-600 dark:text-slate-400">
// // // // // //               <a 
// // // // // //                 href="mailto:thomasjose22@gmail.com" 
// // // // // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
// // // // // //               >
// // // // // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
// // // // // //                   <Mail size={20} />
// // // // // //                 </div>
// // // // // //                 <span className="font-mono text-sm">thomasjose22@gmail.com</span>
// // // // // //               </a>
// // // // // //               <a 
// // // // // //                 href="tel:+918304909105" 
// // // // // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
// // // // // //               >
// // // // // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
// // // // // //                   <Phone size={20} />
// // // // // //                 </div>
// // // // // //                 <span className="font-mono text-sm">+91 8304909105</span>
// // // // // //               </a>
// // // // // //             </div>

// // // // // //             {/* Action Buttons */}
// // // // // //             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
// // // // // //               <Button 
// // // // // //                 size="lg"
// // // // // //                 className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-8 py-3 rounded-full shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
// // // // // //                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // //               >
// // // // // //                 <Code className="w-5 h-5 mr-2" />
// // // // // //                 View Projects
// // // // // //               </Button>
// // // // // //               <Button 
// // // // // //                 variant="outline"
// // // // // //                 size="lg"
// // // // // //                 className="border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
// // // // // //                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // //               >
// // // // // //                 Let's Connect
// // // // // //               </Button>
// // // // // //             </div>

// // // // // //             {/* Social Links - Only visible on small screens */}
// // // // // //             <div className="flex justify-center gap-6 sm:hidden">
// // // // // //               <a 
// // // // // //                 href="https://github.com/Thomasjose-tech" 
// // // // // //                 target="_blank" 
// // // // // //                 rel="noopener noreferrer"
// // // // // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700"
// // // // // //               >
// // // // // //                 <Github className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300" />
// // // // // //               </a>
// // // // // //               <a 
// // // // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // // //                 target="_blank" 
// // // // // //                 rel="noopener noreferrer"
// // // // // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
// // // // // //               >
// // // // // //                 <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
// // // // // //               </a>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Scroll Indicator */}
// // // // // //       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
// // // // // //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
// // // // // //       }`}>
// // // // // //         <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 cursor-pointer"
// // // // // //              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
// // // // // //           <span className="text-xs font-mono tracking-wider">SCROLL</span>
// // // // // //           <div className="animate-bounce">
// // // // // //             <ArrowDown size={20} />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PremiumHomepage;
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Github, Linkedin, Mail, Phone, ArrowDown, Code } from "lucide-react";
// // // // // import { useState, useEffect } from "react";

// // // // // const PremiumHomepage = () => {
// // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // //   const slides = [
// // // // //     {
// // // // //       title: "Crafting Digital Experiences",
// // // // //       subtitle: "Web Developer & Creative Technologist",
// // // // //       description: "Transforming ideas into beautiful, functional web applications with precision and passion."
// // // // //     },
// // // // //     {
// // // // //       title: "Modern Web Solutions",
// // // // //       subtitle: "React • Next.js • TypeScript",
// // // // //       description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
// // // // //     },
// // // // //     {
// // // // //       title: "User-Centric Design",
// // // // //       subtitle: "Performance Meets Aesthetics",
// // // // //       description: "Creating seamless user experiences that blend functionality with elegant design principles."
// // // // //     }
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     setIsVisible(true);
// // // // //     const interval = setInterval(() => {
// // // // //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// // // // //     }, 4000);

// // // // //     return () => clearInterval(interval);
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
// // // // //       {/* Animated Background */}
// // // // //       <div className="absolute inset-0">
// // // // //         {/* Gradient Orbs */}
// // // // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl animate-pulse" 
// // // // //              style={{ animationDuration: '6s' }} />
// // // // //         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse" 
// // // // //              style={{ animationDuration: '8s', animationDelay: '3s' }} />
        
// // // // //         {/* Floating Particles */}
// // // // //         {[...Array(15)].map((_, i) => (
// // // // //           <div
// // // // //             key={i}
// // // // //             className="absolute w-1 h-1 bg-slate-400/20 dark:bg-blue-400/20 rounded-full"
// // // // //             style={{
// // // // //               left: `${Math.random() * 100}%`,
// // // // //               top: `${Math.random() * 100}%`,
// // // // //               animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
// // // // //               animationDelay: `${Math.random() * 3}s`
// // // // //             }}
// // // // //           />
// // // // //         ))}
        
// // // // //         {/* Grid Pattern */}
// // // // //         <div
// // // // //           className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}
// // // // //         />
// // // // //       </div>

// // // // //       {/* Logo/Brand */}
// // // // //       <div className="relative z-50 p-6">
// // // // //         <div className="text-2xl font-bold">
// // // // //           <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"></span>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Main Content */}
// // // // //       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
// // // // //         <div className="max-w-4xl mx-auto text-center">
// // // // //           {/* Slideshow Content */}
// // // // //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // //             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
// // // // //               <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
// // // // //                 Thomas Jose
// // // // //               </span>
// // // // //             </h1>

// // // // //             {/* Slideshow - Made responsive */}
// // // // //             <div className="relative min-h-[140px] sm:min-h-[120px] md:min-h-[128px] overflow-hidden">
// // // // //               {slides.map((slide, index) => (
// // // // //                 <div
// // // // //                   key={index}
// // // // //                   className={`absolute inset-0 transition-all duration-1000 ${
// // // // //                     index === currentSlide
// // // // //                       ? 'opacity-100 transform translate-y-0'
// // // // //                       : 'opacity-0 transform translate-y-full'
// // // // //                   }`}
// // // // //                 >
// // // // //                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-200 mb-2">
// // // // //                     {slide.title}
// // // // //                   </h2>
// // // // //                   <h3 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mb-4 font-mono">
// // // // //                     {slide.subtitle}
// // // // //                   </h3>
// // // // //                   <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
// // // // //                     {slide.description}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* Slide Indicators */}
// // // // //             <div className="flex justify-center gap-2 mt-8 mb-12">
// // // // //               {slides.map((_, index) => (
// // // // //                 <button
// // // // //                   key={index}
// // // // //                   onClick={() => setCurrentSlide(index)}
// // // // //                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
// // // // //                     index === currentSlide
// // // // //                       ? 'bg-blue-600 dark:bg-blue-400 w-8'
// // // // //                       : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
// // // // //                   }`}
// // // // //                 />
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Contact Information */}
// // // // //           <div className={`transition-all duration-1000 delay-300 ${
// // // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// // // // //           }`}>
// // // // //             <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-12 text-slate-600 dark:text-slate-400">
// // // // //               <a 
// // // // //                 href="mailto:thomasjose22@gmail.com" 
// // // // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
// // // // //               >
// // // // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
// // // // //                   <Mail size={20} />
// // // // //                 </div>
// // // // //                 <span className="font-mono text-sm break-all">thomasjose22@gmail.com</span>
// // // // //               </a>
// // // // //               <a 
// // // // //                 href="tel:+918304909105" 
// // // // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
// // // // //               >
// // // // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
// // // // //                   <Phone size={20} />
// // // // //                 </div>
// // // // //                 <span className="font-mono text-sm">+91 8304909105</span>
// // // // //               </a>
// // // // //             </div>

// // // // //             {/* Action Buttons */}
// // // // //             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 px-4">
// // // // //               <Button 
// // // // //                 size="lg"
// // // // //                 className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-8 py-3 rounded-full shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
// // // // //                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// // // // //               >
// // // // //                 <Code className="w-5 h-5 mr-2" />
// // // // //                 View Projects
// // // // //               </Button>
// // // // //               <Button 
// // // // //                 variant="outline"
// // // // //                 size="lg"
// // // // //                 className="border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
// // // // //                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // //               >
// // // // //                 Let's Connect
// // // // //               </Button>
// // // // //             </div>

// // // // //             {/* Social Links - Only visible on small screens */}
// // // // //             <div className="flex justify-center gap-6 sm:hidden">
// // // // //               <a 
// // // // //                 href="https://github.com/Thomasjose-tech" 
// // // // //                 target="_blank" 
// // // // //                 rel="noopener noreferrer"
// // // // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700"
// // // // //               >
// // // // //                 <Github className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300" />
// // // // //               </a>
// // // // //               <a 
// // // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // // //                 target="_blank" 
// // // // //                 rel="noopener noreferrer"
// // // // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
// // // // //               >
// // // // //                 <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
// // // // //               </a>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Scroll Indicator */}
// // // // //       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
// // // // //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
// // // // //       }`}>
// // // // //         <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 cursor-pointer"
// // // // //              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
// // // // //           <span className="text-xs font-mono tracking-wider">SCROLL</span>
// // // // //           <div className="animate-bounce">
// // // // //             <ArrowDown size={20} />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <style jsx>{`
// // // // //         @keyframes float {
// // // // //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// // // // //           50% { transform: translateY(-20px) rotate(180deg); }
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PremiumHomepage;
// // // // import { Button } from "@/components/ui/button";
// // // // import { Github, Linkedin, Mail, Phone, ArrowDown, Code, Download } from "lucide-react";
// // // // import { useState, useEffect } from "react";

// // // // const PremiumHomepage = () => {
// // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // //   const [isVisible, setIsVisible] = useState(false);
// // // //   const [isOpening, setIsOpening] = useState(true);

// // // //   const slides = [
// // // //     {
// // // //       title: "Crafting Digital Experiences",
// // // //       subtitle: "Web Developer & Creative Technologist",
// // // //       description: "Transforming ideas into beautiful, functional web applications with precision and passion."
// // // //     },
// // // //     {
// // // //       title: "Modern Web Solutions",
// // // //       subtitle: "React • Next.js • TypeScript",
// // // //       description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
// // // //     },
// // // //     {
// // // //       title: "User-Centric Design",
// // // //       subtitle: "Performance Meets Aesthetics",
// // // //       description: "Creating seamless user experiences that blend functionality with elegant design principles."
// // // //     }
// // // //   ];

// // // //   useEffect(() => {
// // // //     // Opening animation sequence - faster timing
// // // //     const openingTimer = setTimeout(() => {
// // // //       setIsOpening(false);
// // // //     }, 800);

// // // //     const visibilityTimer = setTimeout(() => {
// // // //       setIsVisible(true);
// // // //     }, 1000);

// // // //     const interval = setInterval(() => {
// // // //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// // // //     }, 4000);

// // // //     return () => {
// // // //       clearTimeout(openingTimer);
// // // //       clearTimeout(visibilityTimer);
// // // //       clearInterval(interval);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
// // // //       {/* Animated Background */}
// // // //       <div className="absolute inset-0">
// // // //         {/* Gradient Orbs */}
// // // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl animate-pulse" 
// // // //              style={{ animationDuration: '6s' }} />
// // // //         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse" 
// // // //              style={{ animationDuration: '8s', animationDelay: '3s' }} />
        
// // // //         {/* Floating Particles */}
// // // //         {[...Array(15)].map((_, i) => (
// // // //           <div
// // // //             key={i}
// // // //             className="absolute w-1 h-1 bg-slate-400/20 dark:bg-blue-400/20 rounded-full"
// // // //             style={{
// // // //               left: `${Math.random() * 100}%`,
// // // //               top: `${Math.random() * 100}%`,
// // // //               animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
// // // //               animationDelay: `${Math.random() * 3}s`
// // // //             }}
// // // //           />
// // // //         ))}
        
// // // //         {/* Grid Pattern */}
// // // //         <div
// // // //           className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}
// // // //         />
// // // //       </div>

// // // //       {/* Logo/Brand */}
// // // //       <div className="relative z-50 p-6">
// // // //         <div className="text-2xl font-bold">
// // // //           <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"></span>
// // // //         </div>
// // // //       </div>

// // // //       {/* Main Content */}
// // // //       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
// // // //         <div className="max-w-4xl mx-auto text-center">
// // // //           {/* Slideshow Content */}
// // // //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // //             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
// // // //               <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
// // // //                 Thomas Jose
// // // //               </span>
// // // //             </h1>

// // // //             {/* Slideshow - Made responsive */}
// // // //             <div className="relative min-h-[140px] sm:min-h-[120px] md:min-h-[128px] overflow-hidden">
// // // //               {slides.map((slide, index) => (
// // // //                 <div
// // // //                   key={index}
// // // //                   className={`absolute inset-0 transition-all duration-1000 ${
// // // //                     index === currentSlide
// // // //                       ? 'opacity-100 transform translate-y-0'
// // // //                       : 'opacity-0 transform translate-y-full'
// // // //                   }`}
// // // //                 >
// // // //                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-200 mb-2">
// // // //                     {slide.title}
// // // //                   </h2>
// // // //                   <h3 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mb-4 font-mono">
// // // //                     {slide.subtitle}
// // // //                   </h3>
// // // //                   <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
// // // //                     {slide.description}
// // // //                   </p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             {/* Slide Indicators */}
// // // //             <div className="flex justify-center gap-2 mt-8 mb-12">
// // // //               {slides.map((_, index) => (
// // // //                 <button
// // // //                   key={index}
// // // //                   onClick={() => setCurrentSlide(index)}
// // // //                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
// // // //                     index === currentSlide
// // // //                       ? 'bg-blue-600 dark:bg-blue-400 w-8'
// // // //                       : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
// // // //                   }`}
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Contact Information */}
// // // //           <div className={`transition-all duration-1000 delay-300 ${
// // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// // // //           }`}>
// // // //             <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-12 text-slate-600 dark:text-slate-400">
// // // //               <a 
// // // //                 href="mailto:thomasjose22@gmail.com" 
// // // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
// // // //               >
// // // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
// // // //                   <Mail size={20} />
// // // //                 </div>
// // // //                 <span className="font-mono text-sm break-all">thomasjose22@gmail.com</span>
// // // //               </a>
// // // //               <a 
// // // //                 href="tel:+918304909105" 
// // // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
// // // //               >
// // // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
// // // //                   <Phone size={20} />
// // // //                 </div>
// // // //                 <span className="font-mono text-sm">+91 8304909105</span>
// // // //               </a>
// // // //             </div>

// // // //             {/* Action Buttons */}
// // // //             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 px-4">
// // // //               <Button 
// // // //                 size="lg"
// // // //                 className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-8 py-3 rounded-full shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
// // // //                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// // // //               >
// // // //                 <Code className="w-5 h-5 mr-2" />
// // // //                 View Projects
// // // //               </Button>
// // // //               <Button 
// // // //                 size="lg"
// // // //                 className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 px-8 py-3 rounded-full shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
// // // //                 onClick={() => {
// // // //                   const link = document.createElement('a');
// // // //                   link.href = '/assets/certificates/Resume.pdf';
// // // //                   link.download = 'Thomas_Jose_Resume.pdf';
// // // //                   link.click();
// // // //                 }}
// // // //               >
// // // //                 <Download className="w-5 h-5 mr-2" />
// // // //                 Download Resume
// // // //               </Button>
// // // //               <Button 
// // // //                 variant="outline"
// // // //                 size="lg"
// // // //                 className="border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
// // // //                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // //               >
// // // //                 Let's Connect
// // // //               </Button>
// // // //             </div>

// // // //             {/* Social Links - Only visible on small screens */}
// // // //             <div className="flex justify-center gap-6 sm:hidden">
// // // //               <a 
// // // //                 href="https://github.com/Thomasjose-tech" 
// // // //                 target="_blank" 
// // // //                 rel="noopener noreferrer"
// // // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700"
// // // //               >
// // // //                 <Github className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300" />
// // // //               </a>
// // // //               <a 
// // // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // // //                 target="_blank" 
// // // //                 rel="noopener noreferrer"
// // // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
// // // //               >
// // // //                 <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
// // // //               </a>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Scroll Indicator */}
// // // //       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
// // // //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
// // // //       }`}>
// // // //         <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 cursor-pointer"
// // // //              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
// // // //           <span className="text-xs font-mono tracking-wider">SCROLL</span>
// // // //           <div className="animate-bounce">
// // // //             <ArrowDown size={20} />
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <style jsx>{`
// // // //         @keyframes float {
// // // //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// // // //           50% { transform: translateY(-20px) rotate(180deg); }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PremiumHomepage;
// // // import { Button } from "@/components/ui/button";
// // // import { Github, Linkedin, Mail, Phone, ArrowDown, Code, Download } from "lucide-react";
// // // import { useState, useEffect } from "react";

// // // const PremiumHomepage = () => {
// // //   const [currentSlide, setCurrentSlide] = useState(0);
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const [isOpening, setIsOpening] = useState(true);

// // //   const slides = [
// // //     {
// // //       title: "Crafting Digital Experiences",
// // //       subtitle: "Web Developer & Creative Technologist",
// // //       description: "Transforming ideas into beautiful, functional web applications with precision and passion."
// // //     },
// // //     {
// // //       title: "Modern Web Solutions",
// // //       subtitle: "React • Next.js • TypeScript",
// // //       description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
// // //     },
// // //     {
// // //       title: "User-Centric Design",
// // //       subtitle: "Performance Meets Aesthetics",
// // //       description: "Creating seamless user experiences that blend functionality with elegant design principles."
// // //     }
// // //   ];

// // //   useEffect(() => {
// // //     // Opening animation sequence - faster timing
// // //     const openingTimer = setTimeout(() => {
// // //       setIsOpening(false);
// // //     }, 800);

// // //     const visibilityTimer = setTimeout(() => {
// // //       setIsVisible(true);
// // //     }, 900);

// // //     const interval = setInterval(() => {
// // //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// // //     }, 4000);

// // //     return () => {
// // //       clearTimeout(openingTimer);
// // //       clearTimeout(visibilityTimer);
// // //       clearInterval(interval);
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
// // //       {/* Opening Curtain Animation */}
// // //       <div className={`fixed inset-0 z-[100] pointer-events-none transition-all duration-500 ${
// // //         isOpening ? 'opacity-100' : 'opacity-0'
// // //       }`}>
// // //         {/* Left Curtain */}
// // //         <div className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-slate-900 to-slate-800 transition-transform duration-800 ease-in-out ${
// // //           isOpening ? 'translate-x-0' : '-translate-x-full'
// // //         }`} />
        
// // //         {/* Right Curtain */}
// // //         <div className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-slate-900 to-slate-800 transition-transform duration-800 ease-in-out ${
// // //           isOpening ? 'translate-x-0' : 'translate-x-full'
// // //         }`} />
        
// // //         {/* Center Logo/Text Reveal */}
// // //         <div className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${
// // //           isOpening ? 'opacity-100 scale-100' : 'opacity-0 scale-150'
// // //         }`}>
// // //           <div className="text-center">
// // //             <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
// // //               TJ
// // //             </div>
// // //             <div className="text-xl md:text-2xl text-slate-300 font-light tracking-widest">
// // //               Portfolio
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Animated Background */}
// // //       <div className="absolute inset-0">
// // //         {/* Gradient Orbs */}
// // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl animate-pulse" 
// // //              style={{ animationDuration: '6s' }} />
// // //         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse" 
// // //              style={{ animationDuration: '8s', animationDelay: '3s' }} />
        
// // //         {/* Floating Particles */}
// // //         {[...Array(15)].map((_, i) => (
// // //           <div
// // //             key={i}
// // //             className="absolute w-1 h-1 bg-slate-400/20 dark:bg-blue-400/20 rounded-full"
// // //             style={{
// // //               left: `${Math.random() * 100}%`,
// // //               top: `${Math.random() * 100}%`,
// // //               animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
// // //               animationDelay: `${Math.random() * 3}s`
// // //             }}
// // //           />
// // //         ))}
        
// // //         {/* Grid Pattern */}
// // //         <div
// // //           className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}
// // //         />
// // //       </div>

// // //       {/* Logo/Brand */}
// // //       <div className="relative z-50 p-6">
// // //         <div className="text-2xl font-bold">
// // //           <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"></span>
// // //         </div>
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
// // //         <div className="max-w-4xl mx-auto text-center">
// // //           {/* Slideshow Content */}
// // //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
// // //               <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
// // //                 Thomas Jose
// // //               </span>
// // //             </h1>

// // //             {/* Slideshow - Made responsive */}
// // //             <div className="relative min-h-[140px] sm:min-h-[120px] md:min-h-[128px] overflow-hidden">
// // //               {slides.map((slide, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className={`absolute inset-0 transition-all duration-1000 ${
// // //                     index === currentSlide
// // //                       ? 'opacity-100 transform translate-y-0'
// // //                       : 'opacity-0 transform translate-y-full'
// // //                   }`}
// // //                 >
// // //                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-200 mb-2">
// // //                     {slide.title}
// // //                   </h2>
// // //                   <h3 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mb-4 font-mono">
// // //                     {slide.subtitle}
// // //                   </h3>
// // //                   <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
// // //                     {slide.description}
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Slide Indicators */}
// // //             <div className="flex justify-center gap-2 mt-8 mb-12">
// // //               {slides.map((_, index) => (
// // //                 <button
// // //                   key={index}
// // //                   onClick={() => setCurrentSlide(index)}
// // //                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
// // //                     index === currentSlide
// // //                       ? 'bg-blue-600 dark:bg-blue-400 w-8'
// // //                       : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
// // //                   }`}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Contact Information */}
// // //           <div className={`transition-all duration-1000 delay-300 ${
// // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// // //           }`}>
// // //             <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-12 text-slate-600 dark:text-slate-400">
// // //               <a 
// // //                 href="mailto:thomasjose22@gmail.com" 
// // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
// // //               >
// // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
// // //                   <Mail size={20} />
// // //                 </div>
// // //                 <span className="font-mono text-sm break-all">thomasjose22@gmail.com</span>
// // //               </a>
// // //               <a 
// // //                 href="tel:+918304909105" 
// // //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
// // //               >
// // //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
// // //                   <Phone size={20} />
// // //                 </div>
// // //                 <span className="font-mono text-sm">+91 8304909105</span>
// // //               </a>
// // //             </div>

// // //             {/* Action Buttons */}
// // //             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 px-4">
// // //               <Button 
// // //                 size="lg"
// // //                 className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-8 py-3 rounded-full shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
// // //                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// // //               >
// // //                 <Code className="w-5 h-5 mr-2" />
// // //                 View Projects
// // //               </Button>
// // //               <Button 
// // //                 size="lg"
// // //                 className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 px-8 py-3 rounded-full shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
// // //                 onClick={() => {
// // //                   const link = document.createElement('a');
// // //                   link.href = '/assets/certificates/Resume.pdf';
// // //                   link.download = 'Thomas_Jose_Resume.pdf';
// // //                   link.click();
// // //                 }}
// // //               >
// // //                 <Download className="w-5 h-5 mr-2" />
// // //                 Download Resume
// // //               </Button>
// // //               <Button 
// // //                 variant="outline"
// // //                 size="lg"
// // //                 className="border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-200 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
// // //                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // //               >
// // //                 Let's Connect
// // //               </Button>
// // //             </div>

// // //             {/* Social Links - Only visible on small screens */}
// // //             <div className="flex justify-center gap-6 sm:hidden">
// // //               <a 
// // //                 href="https://github.com/Thomasjose-tech" 
// // //                 target="_blank" 
// // //                 rel="noopener noreferrer"
// // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700"
// // //               >
// // //                 <Github className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300" />
// // //               </a>
// // //               <a 
// // //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// // //                 target="_blank" 
// // //                 rel="noopener noreferrer"
// // //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
// // //               >
// // //                 <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Scroll Indicator */}
// // //       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
// // //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
// // //       }`}>
// // //         <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 cursor-pointer"
// // //              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
// // //           <span className="text-xs font-mono tracking-wider">SCROLL</span>
// // //           <div className="animate-bounce">
// // //             <ArrowDown size={20} />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         @keyframes float {
// // //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// // //           50% { transform: translateY(-20px) rotate(180deg); }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default PremiumHomepage;
// // import { Button } from "@/components/ui/button";
// // import { Github, Linkedin, Mail, Phone, ArrowDown, Code, Download } from "lucide-react";
// // import { useState, useEffect } from "react";

// // const PremiumHomepage = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [isOpening, setIsOpening] = useState(true);

// //   const slides = [
// //     {
// //       title: "Crafting Digital Experiences",
// //       subtitle: "Web Developer & Creative Technologist",
// //       description: "Transforming ideas into beautiful, functional web applications with precision and passion."
// //     },
// //     {
// //       title: "Modern Web Solutions",
// //       subtitle: "React • Next.js • TypeScript",
// //       description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
// //     },
// //     {
// //       title: "User-Centric Design",
// //       subtitle: "Performance Meets Aesthetics",
// //       description: "Creating seamless user experiences that blend functionality with elegant design principles."
// //     }
// //   ];

// //   useEffect(() => {
// //     // Opening animation sequence - faster timing
// //     const openingTimer = setTimeout(() => {
// //       setIsOpening(false);
// //     }, 800);

// //     const visibilityTimer = setTimeout(() => {
// //       setIsVisible(true);
// //     }, 1000);

// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 4000);

// //     return () => {
// //       clearTimeout(openingTimer);
// //       clearTimeout(visibilityTimer);
// //       clearInterval(interval);
// //     };
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
// //       {/* Opening Curtain Animation */}
// //       <div className={`fixed inset-0 z-[100] pointer-events-none transition-all duration-500 ${
// //         isOpening ? 'opacity-100' : 'opacity-0'
// //       }`}>
// //         {/* Left Curtain */}
// //         <div className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-slate-900 to-slate-800 transition-transform duration-800 ease-in-out ${
// //           isOpening ? 'translate-x-0' : '-translate-x-full'
// //         }`} />
        
// //         {/* Right Curtain */}
// //         <div className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-slate-900 to-slate-800 transition-transform duration-800 ease-in-out ${
// //           isOpening ? 'translate-x-0' : 'translate-x-full'
// //         }`} />
        
// //         {/* Center Logo/Text Reveal */}
// //         <div className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${
// //           isOpening ? 'opacity-100 scale-100' : 'opacity-0 scale-150'
// //         }`}>
// //           <div className="text-center">
// //             <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
// //               TJ
// //             </div>
// //             <div className="text-xl md:text-2xl text-slate-300 font-light tracking-widest">
// //               Portfolio
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Animated Background */}
// //       <div className="absolute inset-0">
// //         {/* Gradient Orbs */}
// //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl animate-pulse" 
// //              style={{ animationDuration: '6s' }} />
// //         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse" 
// //              style={{ animationDuration: '8s', animationDelay: '3s' }} />
        
// //         {/* Floating Particles */}
// //         {[...Array(15)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="absolute w-1 h-1 bg-slate-400/20 dark:bg-blue-400/20 rounded-full"
// //             style={{
// //               left: `${Math.random() * 100}%`,
// //               top: `${Math.random() * 100}%`,
// //               animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
// //               animationDelay: `${Math.random() * 3}s`
// //             }}
// //           />
// //         ))}
        
// //         {/* Grid Pattern */}
// //         <div
// //           className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}
// //         />
// //       </div>

// //       {/* Logo/Brand */}
// //       <div className="relative z-50 p-6">
// //         <div className="text-2xl font-bold">
// //           <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"></span>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
// //         <div className="max-w-4xl mx-auto text-center">
// //           {/* Slideshow Content */}
// //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
// //               <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
// //                 Thomas Jose
// //               </span>
// //             </h1>

// //             {/* Slideshow - Made responsive */}
// //             <div className="relative min-h-[140px] sm:min-h-[120px] md:min-h-[128px] overflow-hidden">
// //               {slides.map((slide, index) => (
// //                 <div
// //                   key={index}
// //                   className={`absolute inset-0 transition-all duration-1000 ${
// //                     index === currentSlide
// //                       ? 'opacity-100 transform translate-y-0'
// //                       : 'opacity-0 transform translate-y-full'
// //                   }`}
// //                 >
// //                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-200 mb-2">
// //                     {slide.title}
// //                   </h2>
// //                   <h3 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mb-4 font-mono">
// //                     {slide.subtitle}
// //                   </h3>
// //                   <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
// //                     {slide.description}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Slide Indicators */}
// //             <div className="flex justify-center gap-2 mt-8 mb-12">
// //               {slides.map((_, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => setCurrentSlide(index)}
// //                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
// //                     index === currentSlide
// //                       ? 'bg-blue-600 dark:bg-blue-400 w-8'
// //                       : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
// //                   }`}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Contact Information */}
// //           <div className={`transition-all duration-1000 delay-300 ${
// //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// //           }`}>
// //             <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-12 text-slate-600 dark:text-slate-400">
// //               <a 
// //                 href="mailto:thomasjose22@gmail.com" 
// //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
// //               >
// //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
// //                   <Mail size={20} />
// //                 </div>
// //                 <span className="font-mono text-sm break-all">thomasjose22@gmail.com</span>
// //               </a>
// //               <a 
// //                 href="tel:+918304909105" 
// //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
// //               >
// //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
// //                   <Phone size={20} />
// //                 </div>
// //                 <span className="font-mono text-sm">+91 8304909105</span>
// //               </a>
// //             </div>

// //             {/* Action Buttons */}
// //             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 px-4">
// //               <div className="group w-full sm:w-auto">
// //                 <Button 
// //                   size="lg"
// //                   className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 backdrop-blur-sm border-2 border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-300 hover:border-blue-400 dark:hover:border-blue-500 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 w-full"
// //                   onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// //                 >
// //                   <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
// //                   <span className="relative flex items-center justify-center">
// //                     <Code className="w-5 h-5 mr-2" />
// //                     View Projects
// //                   </span>
// //                 </Button>
// //               </div>
// //               <div className="group w-full sm:w-auto">
// //                 <Button 
// //                   size="lg"
// //                   className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 backdrop-blur-sm border-2 border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-300 hover:border-blue-400 dark:hover:border-blue-500 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 w-full"
// //                   onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// //                 >
// //                   <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
// //                   <span className="relative flex items-center justify-center">
// //                     <Code className="w-5 h-5 mr-2" />
// //                     View Projects
// //                   </span>
// //                 </Button>
// //               </div>
// //               <div className="group w-full sm:w-auto">
// //                 <Button 
// //                   size="lg"
// //                   className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 backdrop-blur-sm border-2 border-emerald-300 dark:border-emerald-600 text-emerald-600 dark:text-emerald-300 hover:border-emerald-400 dark:hover:border-emerald-500 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 w-full"
// //                   onClick={() => {
// //                     const link = document.createElement('a');
// //                     link.href = '/assets/certificates/Resume.pdf';
// //                     link.download = 'Thomas_Jose_Resume.pdf';
// //                     link.click();
// //                   }}
// //                 >
// //                   <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
// //                   <span className="relative flex items-center justify-center">
// //                     <Download className="w-5 h-5 mr-2" />
// //                     Download Resume
// //                   </span>
// //                 </Button>
// //               </div>
// //               <div className="group w-full sm:w-auto">
// //                 <Button 
// //                   size="lg"
// //                   className="relative overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 backdrop-blur-sm border-2 border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-300 hover:border-purple-400 dark:hover:border-purple-500 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 w-full"
// //                   onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// //                 >
// //                   <span className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-rose-400/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
// //                   <span className="relative flex items-center justify-center">
// //                     Let's Connect
// //                   </span>
// //                 </Button>
// //               </div>
// //             </div>

// //             {/* Social Links - Only visible on small screens */}
// //             <div className="flex justify-center gap-6 sm:hidden">
// //               <a 
// //                 href="https://github.com/Thomasjose-tech" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700"
// //               >
// //                 <Github className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300" />
// //               </a>
// //               <a 
// //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
// //               >
// //                 <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Scroll Indicator */}
// //       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
// //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
// //       }`}>
// //         <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 cursor-pointer"
// //              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
// //           <span className="text-xs font-mono tracking-wider">SCROLL</span>
// //           <div className="animate-bounce">
// //             <ArrowDown size={20} />
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(-20px) rotate(180deg); }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default PremiumHomepage;
// // import { Button } from "@/components/ui/button";
// // import { Github, Linkedin, Mail, Phone, ArrowDown, Code, Download } from "lucide-react";
// // import { useState, useEffect } from "react";

// // const PremiumHomepage = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [isOpening, setIsOpening] = useState(true);

// //   const slides = [
// //     {
// //       title: "Crafting Digital Experiences",
// //       subtitle: "Web Developer & Creative Technologist",
// //       description: "Transforming ideas into beautiful, functional web applications with precision and passion."
// //     },
// //     {
// //       title: "Modern Web Solutions",
// //       subtitle: "React • Next.js • TypeScript",
// //       description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
// //     },
// //     {
// //       title: "User-Centric Design",
// //       subtitle: "Performance Meets Aesthetics",
// //       description: "Creating seamless user experiences that blend functionality with elegant design principles."
// //     }
// //   ];

// //   useEffect(() => {
// //     // Opening animation sequence - faster timing
// //     const openingTimer = setTimeout(() => {
// //       setIsOpening(false);
// //     }, 800);

// //     const visibilityTimer = setTimeout(() => {
// //       setIsVisible(true);
// //     }, 1000);

// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 4000);

// //     return () => {
// //       clearTimeout(openingTimer);
// //       clearTimeout(visibilityTimer);
// //       clearInterval(interval);
// //     };
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
// //       {/* Opening Curtain Animation */}
// //       <div className={`fixed inset-0 z-[100] pointer-events-none transition-all duration-500 ${
// //         isOpening ? 'opacity-100' : 'opacity-0'
// //       }`}>
// //         {/* Left Curtain */}
// //         <div className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-slate-900 to-slate-800 transition-transform duration-800 ease-in-out ${
// //           isOpening ? 'translate-x-0' : '-translate-x-full'
// //         }`} />
        
// //         {/* Right Curtain */}
// //         <div className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-slate-900 to-slate-800 transition-transform duration-800 ease-in-out ${
// //           isOpening ? 'translate-x-0' : 'translate-x-full'
// //         }`} />
        
// //         {/* Center Logo/Text Reveal */}
// //         <div className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${
// //           isOpening ? 'opacity-100 scale-100' : 'opacity-0 scale-150'
// //         }`}>
// //           <div className="text-center">
// //             <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
// //               TJ
// //             </div>
// //             <div className="text-xl md:text-2xl text-slate-300 font-light tracking-widest">
// //               Portfolio
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Animated Background */}
// //       <div className="absolute inset-0">
// //         {/* Gradient Orbs */}
// //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl animate-pulse" 
// //              style={{ animationDuration: '6s' }} />
// //         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse" 
// //              style={{ animationDuration: '8s', animationDelay: '3s' }} />
        
// //         {/* Floating Particles */}
// //         {[...Array(15)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="absolute w-1 h-1 bg-slate-400/20 dark:bg-blue-400/20 rounded-full"
// //             style={{
// //               left: `${Math.random() * 100}%`,
// //               top: `${Math.random() * 100}%`,
// //               animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
// //               animationDelay: `${Math.random() * 3}s`
// //             }}
// //           />
// //         ))}
        
// //         {/* Grid Pattern */}
// //         <div
// //           className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}
// //         />
// //       </div>

// //       {/* Logo/Brand */}
// //       <div className="relative z-50 p-6">
// //         <div className="text-2xl font-bold">
// //           <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"></span>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
// //         <div className="max-w-4xl mx-auto text-center">
// //           {/* Slideshow Content */}
// //           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
// //               <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
// //                 Thomas Jose
// //               </span>
// //             </h1>

// //             {/* Slideshow - Made responsive */}
// //             <div className="relative min-h-[140px] sm:min-h-[120px] md:min-h-[128px] overflow-hidden">
// //               {slides.map((slide, index) => (
// //                 <div
// //                   key={index}
// //                   className={`absolute inset-0 transition-all duration-1000 ${
// //                     index === currentSlide
// //                       ? 'opacity-100 transform translate-y-0'
// //                       : 'opacity-0 transform translate-y-full'
// //                   }`}
// //                 >
// //                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-200 mb-2">
// //                     {slide.title}
// //                   </h2>
// //                   <h3 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mb-4 font-mono">
// //                     {slide.subtitle}
// //                   </h3>
// //                   <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
// //                     {slide.description}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Slide Indicators */}
// //             <div className="flex justify-center gap-2 mt-8 mb-12">
// //               {slides.map((_, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => setCurrentSlide(index)}
// //                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
// //                     index === currentSlide
// //                       ? 'bg-blue-600 dark:bg-blue-400 w-8'
// //                       : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
// //                   }`}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Contact Information */}
// //           <div className={`transition-all duration-1000 delay-300 ${
// //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// //           }`}>
// //             <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-12 text-slate-600 dark:text-slate-400">
// //               <a 
// //                 href="mailto:thomasjose22@gmail.com" 
// //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
// //               >
// //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
// //                   <Mail size={20} />
// //                 </div>
// //                 <span className="font-mono text-sm break-all">thomasjose22@gmail.com</span>
// //               </a>
// //               <a 
// //                 href="tel:+918304909105" 
// //                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
// //               >
// //                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
// //                   <Phone size={20} />
// //                 </div>
// //                 <span className="font-mono text-sm">+91 8304909105</span>
// //               </a>
// //             </div>

// //             {/* Action Buttons */}
// //             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 px-4">
// //               <div className="group w-full sm:w-auto">
// //                 <Button 
// //                   size="lg"
// //                   className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 backdrop-blur-sm border-2 border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-300 hover:border-blue-400 dark:hover:border-blue-500 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 w-full"
// //                   onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
// //                 >
// //                   <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 transition-none opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_0.7s_ease-out_forwards]"></span>
// //                   <span className="relative flex items-center justify-center">
// //                     <Code className="w-5 h-5 mr-2" />
// //                     View Projects
// //                   </span>
// //                 </Button>
// //               </div>
// //               <div className="group w-full sm:w-auto">
// //                 <Button 
// //                   size="lg"
// //                   className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 backdrop-blur-sm border-2 border-emerald-300 dark:border-emerald-600 text-emerald-600 dark:text-emerald-300 hover:border-emerald-400 dark:hover:border-emerald-500 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 w-full"
// //                   onClick={() => {
// //                     const link = document.createElement('a');
// //                     link.href = '/assets/certificates/Resume.pdf';
// //                     link.download = 'Thomas_Jose_Resume.pdf';
// //                     link.click();
// //                   }}
// //                 >
// //                   <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 transition-none opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_0.7s_ease-out_forwards]"></span>
// //                   <span className="relative flex items-center justify-center">
// //                     <Download className="w-5 h-5 mr-2" />
// //                     Download Resume
// //                   </span>
// //                 </Button>
// //               </div>
// //               <div className="group w-full sm:w-auto">
// //                 <Button 
// //                   size="lg"
// //                   className="relative overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 backdrop-blur-sm border-2 border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-300 hover:border-purple-400 dark:hover:border-purple-500 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 w-full"
// //                   onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// //                 >
// //                   <span className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-rose-400/30 transition-none opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_0.7s_ease-out_forwards]"></span>
// //                   <span className="relative flex items-center justify-center">
// //                     Let's Connect
// //                   </span>
// //                 </Button>
// //               </div>
// //             </div>

// //             {/* Social Links - Only visible on small screens */}
// //             <div className="flex justify-center gap-6 sm:hidden">
// //               <a 
// //                 href="https://github.com/Thomasjose-tech" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700"
// //               >
// //                 <Github className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300" />
// //               </a>
// //               <a 
// //                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
// //               >
// //                 <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Scroll Indicator */}
// //       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
// //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
// //       }`}>
// //         <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 cursor-pointer"
// //              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
// //           <span className="text-xs font-mono tracking-wider">SCROLL</span>
// //           <div className="animate-bounce">
// //             <ArrowDown size={20} />
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(-20px) rotate(180deg); }
// //         }
        
// //         @keyframes sweep {
// //           0% { transform: translateX(-100%); }
// //           100% { transform: translateX(100%); }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default PremiumHomepage;
// import { Button } from "@/components/ui/button";
// import { Github, Linkedin, Mail, Phone, ArrowDown, Code, Download } from "lucide-react";
// import { useState, useEffect } from "react";

// const PremiumHomepage = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isOpening, setIsOpening] = useState(true);

//   const slides = [
//     {
//       title: "Crafting Digital Experiences",
//       subtitle: "Web Developer & Creative Technologist",
//       description: "Transforming ideas into beautiful, functional web applications with precision and passion."
//     },
//     {
//       title: "Modern Web Solutions",
//       subtitle: "React • Next.js • TypeScript",
//       description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
//     },
//     {
//       title: "User-Centric Design",
//       subtitle: "Performance Meets Aesthetics",
//       description: "Creating seamless user experiences that blend functionality with elegant design principles."
//     }
//   ];

//   useEffect(() => {
//     // Opening animation sequence - faster timing
//     const openingTimer = setTimeout(() => {
//       setIsOpening(false);
//     }, 800);

//     const visibilityTimer = setTimeout(() => {
//       setIsVisible(true);
//     }, 1000);

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);

//     return () => {
//       clearTimeout(openingTimer);
//       clearTimeout(visibilityTimer);
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-x-hidden overflow-y-auto">
//       {/* Opening Curtain Animation */}
//       <div className={`fixed inset-0 z-[100] pointer-events-none transition-all duration-500 ${
//         isOpening ? 'opacity-100' : 'opacity-0'
//       }`}>
//         {/* Left Curtain */}
//         <div className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-slate-900 to-slate-800 transition-transform duration-800 ease-in-out ${
//           isOpening ? 'translate-x-0' : '-translate-x-full'
//         }`} />
        
//         {/* Right Curtain */}
//         <div className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-slate-900 to-slate-800 transition-transform duration-800 ease-in-out ${
//           isOpening ? 'translate-x-0' : 'translate-x-full'
//         }`} />
        
//         {/* Center Logo/Text Reveal */}
//         <div className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${
//           isOpening ? 'opacity-100 scale-100' : 'opacity-0 scale-150'
//         }`}>
//           <div className="text-center">
//             <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
//               TJ
//             </div>
//             <div className="text-xl md:text-2xl text-slate-300 font-light tracking-widest">
//               Portfolio
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Gradient Orbs */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl animate-pulse" 
//              style={{ animationDuration: '6s' }} />
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse" 
//              style={{ animationDuration: '8s', animationDelay: '3s' }} />
        
//         {/* Floating Particles */}
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-slate-400/20 dark:bg-blue-400/20 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 3}s`
//             }}
//           />
//         ))}
        
//         {/* Grid Pattern */}
//         <div
//           className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M20 20h20v20H20V20zm-20 0h20v20H0V20z\\'/ %3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}
//         />
//       </div>

//       {/* Logo/Brand */}
//       <div className="relative z-50 p-6">
//         <div className="text-2xl font-bold">
//           <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"></span>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6 overflow-x-hidden">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Slideshow Content */}
//           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
//               <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
//                 Thomas Jose
//               </span>
//             </h1>

//             {/* Slideshow - Made responsive */}
//             <div className="relative min-h-[140px] sm:min-h-[120px] md:min-h-[128px] overflow-hidden">
//               {slides.map((slide, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 transition-all duration-1000 ${
//                     index === currentSlide
//                       ? 'opacity-100 transform translate-y-0'
//                       : 'opacity-0 transform translate-y-full'
//                   }`}
//                 >
//                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-200 mb-2">
//                     {slide.title}
//                   </h2>
//                   <h3 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mb-4 font-mono">
//                     {slide.subtitle}
//                   </h3>
//                   <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
//                     {slide.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Slide Indicators */}
//             <div className="flex justify-center gap-2 mt-8 mb-12">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === currentSlide
//                       ? 'bg-blue-600 dark:bg-blue-400 w-8'
//                       : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className={`transition-all duration-1000 delay-300 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}>
//             <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-12 text-slate-600 dark:text-slate-400">
//               <a 
//                 href="mailto:thomasjose22@gmail.com" 
//                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
//               >
//                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
//                   <Mail size={20} />
//                 </div>
//                 <span className="font-mono text-sm break-all">thomasjose22@gmail.com</span>
//               </a>
//               <a 
//                 href="tel:+918304909105" 
//                 className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
//               >
//                 <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
//                   <Phone size={20} />
//                 </div>
//                 <span className="font-mono text-sm">+91 8304909105</span>
//               </a>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 px-4">
//               <div className="group w-full sm:w-auto">
//                 <Button 
//                   size="lg"
//                   className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 backdrop-blur-sm border-2 border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-300 hover:border-blue-400 dark:hover:border-blue-500 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 w-full"
//                   onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
//                 >
//                   <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 transition-none opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_0.7s_ease-out_forwards]"></span>
//                   <span className="relative flex items-center justify-center">
//                     <Code className="w-5 h-5 mr-2" />
//                     View Projects
//                   </span>
//                 </Button>
//               </div>
//               <div className="group w-full sm:w-auto">
//                 <Button 
//                   size="lg"
//                   className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 backdrop-blur-sm border-2 border-emerald-300 dark:border-emerald-600 text-emerald-600 dark:text-emerald-300 hover:border-emerald-400 dark:hover:border-emerald-500 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 w-full"
//                   onClick={() => {
//                     const link = document.createElement('a');
//                     link.href = '/assets/certificates/Resume.pdf';
//                     link.download = 'Thomas_Jose_Resume.pdf';
//                     link.click();
//                   }}
//                 >
//                   <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 transition-none opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_0.7s_ease-out_forwards]"></span>
//                   <span className="relative flex items-center justify-center">
//                     <Download className="w-5 h-5 mr-2" />
//                     Download Resume
//                   </span>
//                 </Button>
//               </div>
//               <div className="group w-full sm:w-auto">
//                 <Button 
//                   size="lg"
//                   className="relative overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 backdrop-blur-sm border-2 border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-300 hover:border-purple-400 dark:hover:border-purple-500 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 w-full"
//                   onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//                 >
//                   <span className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-rose-400/30 transition-none opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_0.7s_ease-out_forwards]"></span>
//                   <span className="relative flex items-center justify-center">
//                     Let's Connect
//                   </span>
//                 </Button>
//               </div>
//             </div>

//             {/* Social Links - Only visible on small screens */}
//             <div className="flex justify-center gap-6 sm:hidden">
//               <a 
//                 href="https://github.com/Thomasjose-tech" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-700"
//               >
//                 <Github className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300" />
//               </a>
//               <a 
//                 href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="group p-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
//               >
//                 <Linkedin className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
//       }`}>
//         <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 cursor-pointer"
//              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
//           <span className="text-xs font-mono tracking-wider">SCROLL</span>
//           <div className="animate-bounce">
//             <ArrowDown size={20} />
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
        
//         @keyframes sweep {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PremiumHomepage;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star, Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Gauge, ExternalLink, Github, Linkedin, Mail, Phone, ArrowDown, Download, FileText } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Add global styles to prevent horizontal scroll
const GlobalStyles = () => (
  <style jsx global>{`
    /* Prevent horizontal scroll on all pages */
    html, body {
      overflow-x: hidden;
      max-width: 100vw;
    }
    
    #root {
      overflow-x: hidden;
      max-width: 100vw;
    }
    
    * {
      box-sizing: border-box;
    }
  `}</style>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpening, setIsOpening] = useState(true);

  const slides = [
    {
      title: "Crafting Digital Experiences",
      subtitle: "Web Developer & Creative Technologist",
      description: "Transforming ideas into beautiful, functional web applications with precision and passion."
    },
    {
      title: "Modern Web Solutions",
      subtitle: "React • Next.js • TypeScript",
      description: "Building responsive, scalable applications with cutting-edge technologies and best practices."
    },
    {
      title: "User-Centric Design",
      subtitle: "Performance Meets Aesthetics",
      description: "Creating seamless user experiences that blend functionality with elegant design principles."
    }
  ];

  useEffect(() => {
    const openingTimer = setTimeout(() => {
      setIsOpening(false);
    }, 800);

    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => {
      clearTimeout(openingTimer);
      clearTimeout(visibilityTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden w-full">
      <GlobalStyles />
      
      {/* Opening Curtain Animation */}
      <div className={`fixed inset-0 z-[100] pointer-events-none transition-all duration-500 ${
        isOpening ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-slate-900 to-slate-800 transition-transform duration-800 ease-in-out ${
          isOpening ? 'translate-x-0' : '-translate-x-full'
        }`} />
        
        <div className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-slate-900 to-slate-800 transition-transform duration-800 ease-in-out ${
          isOpening ? 'translate-x-0' : 'translate-x-full'
        }`} />
        
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${
          isOpening ? 'opacity-100 scale-100' : 'opacity-0 scale-150'
        }`}>
          <div className="text-center">
            <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
              TJ
            </div>
            <div className="text-xl md:text-2xl text-slate-300 font-light tracking-widest">
              Portfolio
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background - Contained */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s', animationDelay: '3s' }} />
        
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-slate-400/20 dark:bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content - Fixed overflow */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4 sm:px-6 w-full overflow-hidden">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
              <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                Thomas Jose
              </span>
            </h1>

            <div className="relative min-h-[140px] sm:min-h-[120px] md:min-h-[128px] overflow-hidden w-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentSlide
                      ? 'opacity-100 transform translate-y-0'
                      : 'opacity-0 transform translate-y-full'
                  }`}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-200 mb-2">
                    {slide.title}
                  </h2>
                  <h3 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mb-4 font-mono">
                    {slide.subtitle}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8 mb-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 dark:bg-blue-400 w-8'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-12 text-slate-600 dark:text-slate-400">
              <a 
                href="mailto:thomasjose22@gmail.com" 
                className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
              >
                <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <span className="font-mono text-sm break-all">thomasjose22@gmail.com</span>
              </a>
              <a 
                href="tel:+918304909105" 
                className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group justify-center sm:justify-start"
              >
                <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <span className="font-mono text-sm">+91 8304909105</span>
              </a>
            </div>

            {/* Fixed button container width */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 px-4 max-w-3xl mx-auto">
              <Button 
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-2 border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-300 hover:border-blue-400 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button 
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 border-2 border-emerald-300 dark:border-emerald-600 text-emerald-600 dark:text-emerald-300 hover:border-emerald-400 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 border-2 border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-300 hover:border-purple-400 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>

            <div className="flex justify-center gap-6 sm:hidden">
              <a 
                href="https://github.com/Thomasjose-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:scale-110 transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/thomas-jose-98b97b220" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:scale-110 transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
      }`}>
        <div className="flex flex-col items-center gap-2 text-slate-400 cursor-pointer"
             onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <div className="animate-bounce">
            <ArrowDown size={20} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <GlobalStyles />
      <Hero />
      
    </div>
  );
};

export default App;