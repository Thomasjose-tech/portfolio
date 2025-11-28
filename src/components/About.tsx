
// // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { 
// // // // // //   Code, 
// // // // // //   Database, 
// // // // // //   Globe, 
// // // // // //   Wrench, 
// // // // // //   Users, 
// // // // // //   TestTube, 
// // // // // //   ChevronLeft, 
// // // // // //   ChevronRight,
// // // // // //   Target,
// // // // // //   CheckCircle,
// // // // // //   Zap,
// // // // // //   Server,
// // // // // //   Monitor,
// // // // // //   Brain,
// // // // // //   Clock,
// // // // // //   Send,
// // // // // //   Shield
// // // // // // } from "lucide-react";
// // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // const About = () => {
// // // // // //   const [currentSection, setCurrentSection] = useState(0);
// // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // // //   const [startX, setStartX] = useState(0);
// // // // // //   const [translateX, setTranslateX] = useState(0);
// // // // // //   const cardRef = useRef(null);
  
// // // // // //   useEffect(() => {
// // // // // //     // Trigger animations after component mounts
// // // // // //     const timer = setTimeout(() => {
// // // // // //       setIsVisible(true);
// // // // // //     }, 100);
    
// // // // // //     return () => clearTimeout(timer);
// // // // // //   }, []);
  
// // // // // //   const sections = [
// // // // // //     {
// // // // // //       title: "Professional Summary",
// // // // // //       content: (
// // // // // //         <div className="space-y-4">
// // // // // //           {/* Mobile and Tablet version (sm and md screens) */}
// // // // // //           <div className="block lg:hidden">
// // // // // //             <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
// // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in React, 
// // // // // //               Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful 
// // // // // //               digital experiences, and building responsive, user-centric solutions. Focused on 
// // // // // //               performance, accessibility, and modern web standards to deliver scalable, 
// // // // // //               maintainable, and future-ready applications.
// // // // // //             </p>
// // // // // //           </div>
          
// // // // // //           {/* Desktop version (lg screens and above) */}
// // // // // //           <div className="hidden lg:block space-y-4">
// // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building 
// // // // // //               responsive web applications using React, Tailwind CSS, and Next.js. Proficient in 
// // // // // //               developing clean, maintainable code and delivering user-centric solutions.
// // // // // //             </p>
// // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // //               Strong team collaborator with a focus on performance, accessibility, and modern web 
// // // // // //               standards to support scalable and efficient development.
// // // // // //             </p>
// // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // //               My journey in web development has been driven by a passion for problem-solving and 
// // // // // //               creating meaningful digital experiences. I thrive in collaborative environments where 
// // // // // //               innovation meets practical implementation, consistently delivering projects that exceed 
// // // // // //               client expectations.
// // // // // //             </p>
// // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // //               I believe in staying current with emerging technologies and industry best practices, 
// // // // // //               ensuring that every solution I develop is not only functional but also future-ready 
// // // // // //               and maintainable.
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Key Strengths",
// // // // // //       content: (
// // // // // //         <div>
// // // // // //           <ul className="space-y-3 text-muted-foreground">
// // // // // //             <li className="flex items-start gap-3">
// // // // // //               <span className="text-primary mt-1">•</span>
// // // // // //               <span className="text-sm sm:text-base">Decision-making skills and team leadership</span>
// // // // // //             </li>
// // // // // //             <li className="flex items-start gap-3">
// // // // // //               <span className="text-primary mt-1">•</span>
// // // // // //               <span className="text-sm sm:text-base">Performance optimization and accessibility focus</span>
// // // // // //             </li>
// // // // // //             <li className="flex items-start gap-3">
// // // // // //               <span className="text-primary mt-1">•</span>
// // // // // //               <span className="text-sm sm:text-base">Clean, maintainable code practices</span>
// // // // // //             </li>
// // // // // //             <li className="flex items-start gap-3">
// // // // // //               <span className="text-primary mt-1">•</span>
// // // // // //               <span className="text-sm sm:text-base">Timely project delivery</span>
// // // // // //             </li>
// // // // // //             <li className="flex items-start gap-3">
// // // // // //               <span className="text-primary mt-1">•</span>
// // // // // //               <span className="text-sm sm:text-base">Continuous learning and adaptation to new technologies</span>
// // // // // //             </li>
// // // // // //             <li className="flex items-start gap-3">
// // // // // //               <span className="text-primary mt-1">•</span>
// // // // // //               <span className="text-sm sm:text-base">User experience optimization and responsive design</span>
// // // // // //             </li>
// // // // // //           </ul>
// // // // // //         </div>
// // // // // //       )
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Development Philosophy",
// // // // // //       content: (
// // // // // //         <div>
// // // // // //           <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
// // // // // //             I approach every project with a user-first mindset, ensuring that technical excellence 
// // // // // //             translates into intuitive and engaging user experiences. My goal is to bridge the gap 
// // // // // //             between complex functionality and seamless usability.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       )
// // // // // //     }
// // // // // //   ];

// // // // // //   const skills = {
// // // // // //     languages: [
// // // // // //       { name: "Python", icon: "🐍" },
// // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // //       { name: "HTML", icon: "🌐" },
// // // // // //       { name: "CSS", icon: "🎨" }
// // // // // //     ],
// // // // // //     frameworks: [
// // // // // //       { name: "Next.js", icon: "▲" },
// // // // // //       { name: "React", icon: "⚛️" },
// // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // //     ],
// // // // // //     databases: [
// // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // //     ],
// // // // // //     tools: [
// // // // // //       { name: "VS Code", icon: "💻" },
// // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // //       { name: "Postman", icon: "📮" }
// // // // // //     ]
// // // // // //   };

// // // // // //   const additionalSkills = [
// // // // // //     {
// // // // // //       title: "Team Leadership",
// // // // // //       icon: Users,
// // // // // //       items: [
// // // // // //         { 
// // // // // //           name: "Decision-making skills", 
// // // // // //           icon: Brain, 
// // // // // //           iconColor: "text-purple-600",
// // // // // //           bgColor: "bg-purple-100 dark:bg-purple-900/20"
// // // // // //         },
// // // // // //         { 
// // // // // //           name: "Ensuring timely project delivery", 
// // // // // //           icon: Clock, 
// // // // // //           iconColor: "text-green-600",
// // // // // //           bgColor: "bg-green-100 dark:bg-green-900/20"
// // // // // //         }
// // // // // //       ],
// // // // // //       color: "bg-red-500/10 text-red-700",
// // // // // //       displayIcon: Target
// // // // // //     },
// // // // // //     {
// // // // // //       title: "API Testing",
// // // // // //       icon: TestTube,
// // // // // //       items: [
// // // // // //         { 
// // // // // //           name: "Postman API Testing", 
// // // // // //           icon: Send, 
// // // // // //           iconColor: "text-orange-600",
// // // // // //           bgColor: "bg-orange-100 dark:bg-orange-900/20"
// // // // // //         },
// // // // // //         { 
// // // // // //           name: "REST API Validation", 
// // // // // //           icon: Shield, 
// // // // // //           iconColor: "text-blue-600",
// // // // // //           bgColor: "bg-blue-100 dark:bg-blue-900/20"
// // // // // //         }
// // // // // //       ],
// // // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // // //       displayIcon: Server
// // // // // //     }
// // // // // //   ];

// // // // // //   const skillCategories = [
// // // // // //     {
// // // // // //       title: "Languages & Scripting",
// // // // // //       icon: Code,
// // // // // //       items: skills.languages,
// // // // // //       color: "bg-blue-500/10 text-blue-700"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Frameworks & Libraries",
// // // // // //       icon: Globe,
// // // // // //       items: skills.frameworks,
// // // // // //       color: "bg-green-500/10 text-green-700"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Databases",
// // // // // //       icon: Database,
// // // // // //       items: skills.databases,
// // // // // //       color: "bg-purple-500/10 text-purple-700"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Development Tools",
// // // // // //       icon: Wrench,
// // // // // //       items: skills.tools,
// // // // // //       color: "bg-orange-500/10 text-orange-700"
// // // // // //     }
// // // // // //   ];

// // // // // //   // Touch event handlers
// // // // // //   const handleTouchStart = (e) => {
// // // // // //     if (window.innerWidth >= 1024) return; // Only enable on mobile/tablet
// // // // // //     setIsDragging(true);
// // // // // //     setStartX(e.touches[0].clientX);
// // // // // //     setTranslateX(0);
// // // // // //   };

// // // // // //   const handleTouchMove = (e) => {
// // // // // //     if (!isDragging || window.innerWidth >= 1024) return;
    
// // // // // //     const currentX = e.touches[0].clientX;
// // // // // //     const diffX = currentX - startX;
// // // // // //     setTranslateX(diffX);
// // // // // //   };

// // // // // //   const handleTouchEnd = () => {
// // // // // //     if (!isDragging || window.innerWidth >= 1024) return;
    
// // // // // //     setIsDragging(false);
// // // // // //     const threshold = 50;
    
// // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // //       setCurrentSection(currentSection - 1);
// // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // //       setCurrentSection(currentSection + 1);
// // // // // //     }
    
// // // // // //     setTranslateX(0);
// // // // // //   };

// // // // // //   // Mouse event handlers for desktop
// // // // // //   const handleMouseDown = (e) => {
// // // // // //     if (window.innerWidth < 1024) return; // Only enable on desktop
// // // // // //     setIsDragging(true);
// // // // // //     setStartX(e.clientX);
// // // // // //     setTranslateX(0);
// // // // // //     e.preventDefault();
// // // // // //   };

// // // // // //   const handleMouseMove = (e) => {
// // // // // //     if (!isDragging || window.innerWidth < 1024) return;
    
// // // // // //     const currentX = e.clientX;
// // // // // //     const diffX = currentX - startX;
// // // // // //     setTranslateX(diffX);
// // // // // //   };

// // // // // //   const handleMouseUp = () => {
// // // // // //     if (!isDragging || window.innerWidth < 1024) return;
    
// // // // // //     setIsDragging(false);
// // // // // //     const threshold = 50;
    
// // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // //       setCurrentSection(currentSection - 1);
// // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // //       setCurrentSection(currentSection + 1);
// // // // // //     }
    
// // // // // //     setTranslateX(0);
// // // // // //   };

// // // // // //   // Add mouse event listeners
// // // // // //   useEffect(() => {
// // // // // //     if (isDragging && window.innerWidth >= 1024) {
// // // // // //       document.addEventListener('mousemove', handleMouseMove);
// // // // // //       document.addEventListener('mouseup', handleMouseUp);
      
// // // // // //       return () => {
// // // // // //         document.removeEventListener('mousemove', handleMouseMove);
// // // // // //         document.removeEventListener('mouseup', handleMouseUp);
// // // // // //       };
// // // // // //     }
// // // // // //   }, [isDragging, startX]);

// // // // // //   return (
// // // // // //     <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 bg-background min-h-screen">
// // // // // //       <style jsx>{`
// // // // // //         @keyframes fadeInUp {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateY(30px);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateY(0);
// // // // // //           }
// // // // // //         }
        
// // // // // //         @keyframes slideInLeft {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateX(-50px);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateX(0);
// // // // // //           }
// // // // // //         }
        
// // // // // //         @keyframes slideInRight {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateX(50px);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateX(0);
// // // // // //           }
// // // // // //         }
        
// // // // // //         .animate-fade-up {
// // // // // //           animation: fadeInUp 0.8s ease-out forwards;
// // // // // //         }
        
// // // // // //         .animate-slide-left {
// // // // // //           animation: slideInLeft 0.8s ease-out forwards;
// // // // // //         }
        
// // // // // //         .animate-slide-right {
// // // // // //           animation: slideInRight 0.8s ease-out forwards;
// // // // // //         }
        
// // // // // //         .animate-delay-1 { animation-delay: 0.2s; }
// // // // // //         .animate-delay-2 { animation-delay: 0.4s; }
// // // // // //         .animate-delay-3 { animation-delay: 0.6s; }
// // // // // //         .animate-delay-4 { animation-delay: 0.8s; }
// // // // // //         .animate-delay-5 { animation-delay: 1.0s; }
// // // // // //         .animate-delay-6 { animation-delay: 1.2s; }
        
// // // // // //         .swipe-container {
// // // // // //           touch-action: pan-y pinch-zoom;
// // // // // //           user-select: none;
// // // // // //         }
// // // // // //       `}</style>
      
// // // // // //       <div className="container mx-auto max-w-6xl">
// // // // // //         <div className={`text-center mb-12 lg:mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
// // // // // //           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">About Me</h2>
// // // // // //           <div className="h-1 w-16 sm:w-20 lg:w-24 bg-primary mx-auto mb-6 lg:mb-8" />
// // // // // //         </div>

// // // // // //         <div className={`${isVisible ? 'animate-slide-left animate-delay-1' : 'opacity-0'}`}>
// // // // // //           {/* Professional Summary Box with Navigation */}
// // // // // //           <div className="relative mb-12 lg:mb-16">
// // // // // //             <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 rounded-2xl lg:rounded-3xl overflow-hidden max-w-5xl mx-auto">
// // // // // //               <CardContent className="p-6 sm:p-8 lg:p-12">
// // // // // //                 <div className="flex items-center justify-between mb-6">
// // // // // //                   {/* Desktop Navigation Arrows */}
// // // // // //                   <Button
// // // // // //                     variant="ghost"
// // // // // //                     size="sm"
// // // // // //                     onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // // // //                     disabled={currentSection === 0}
// // // // // //                     className="hidden lg:flex text-primary hover:bg-primary/10 rounded-full p-2 sm:p-3"
// // // // // //                   >
// // // // // //                     <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
// // // // // //                   </Button>
                  
// // // // // //                   {/* Mobile: Just show the content without arrows */}
// // // // // //                   <div className="lg:hidden w-full">
// // // // // //                     <div className="text-center">
// // // // // //                       <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">
// // // // // //                         {sections[currentSection].title}
// // // // // //                       </h3>
// // // // // //                       <div className="flex justify-center gap-2 mt-4">
// // // // // //                         {sections.map((_, index) => (
// // // // // //                           <div
// // // // // //                             key={index}
// // // // // //                             className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // // // // //                               index === currentSection ? 'bg-primary' : 'bg-primary/30'
// // // // // //                             }`}
// // // // // //                           />
// // // // // //                         ))}
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>
                  
// // // // // //                   {/* Desktop: Show title with arrows */}
// // // // // //                   <div className="hidden lg:block text-center flex-1 px-2 sm:px-4">
// // // // // //                     <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">
// // // // // //                       {sections[currentSection].title}
// // // // // //                     </h3>
// // // // // //                     <div className="flex justify-center gap-2 mt-4">
// // // // // //                       {sections.map((_, index) => (
// // // // // //                         <div
// // // // // //                           key={index}
// // // // // //                           className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // // // // //                             index === currentSection ? 'bg-primary' : 'bg-primary/30'
// // // // // //                           }`}
// // // // // //                         />
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   </div>
                  
// // // // // //                   <Button
// // // // // //                     variant="ghost"
// // // // // //                     size="sm"
// // // // // //                     onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // // // //                     disabled={currentSection === sections.length - 1}
// // // // // //                     className="hidden lg:flex text-primary hover:bg-primary/10 rounded-full p-2 sm:p-3"
// // // // // //                   >
// // // // // //                     <ChevronRight size={16} className="sm:w-5 sm:h-5" />
// // // // // //                   </Button>
// // // // // //                 </div>
                
// // // // // //                 <div 
// // // // // //                   className="min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center swipe-container"
// // // // // //                   ref={cardRef}
// // // // // //                   onTouchStart={handleTouchStart}
// // // // // //                   onTouchMove={handleTouchMove}
// // // // // //                   onTouchEnd={handleTouchEnd}
// // // // // //                   onMouseDown={handleMouseDown}
// // // // // //                 >
// // // // // //                   <div 
// // // // // //                     className="w-full transition-all duration-500 ease-in-out"
// // // // // //                     style={{
// // // // // //                       transform: `translateX(${translateX}px)`,
// // // // // //                       transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     {sections[currentSection].content}
// // // // // //                   </div>
// // // // // //                 </div>
                
// // // // // //                 {/* Mobile swipe hint */}
// // // // // //                 <div className="lg:hidden text-center mt-4">
                  
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>
// // // // // //           </div>

// // // // // //           {/* Skills & Proficiency Section */}
// // // // // //           <div className={`${isVisible ? 'animate-slide-right animate-delay-2' : 'opacity-0'}`}>
// // // // // //             <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">Skills & Proficiency</h3>
            
// // // // // //             {/* First Row: Languages & Frameworks */}
// // // // // //             <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6 lg:grid-cols-2">
// // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-3' : 'opacity-0'}`}>
// // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 text-blue-700 flex-shrink-0">
// // // // // //                       <Code size={16} className="sm:w-5 sm:h-5" />
// // // // // //                     </div>
// // // // // //                     <span className="min-w-0">Languages & Scripting</span>
// // // // // //                   </CardTitle>
// // // // // //                 </CardHeader>
// // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // //                     {skills.languages.map((skill, skillIndex) => (
// // // // // //                       <Badge 
// // // // // //                         key={`languages-${skillIndex}`}
// // // // // //                         variant="secondary" 
// // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // //                       >
// // // // // //                         <span>{skill.icon}</span>
// // // // // //                         {skill.name}
// // // // // //                       </Badge>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </CardContent>
// // // // // //               </Card>

// // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-4' : 'opacity-0'}`}>
// // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-green-500/10 text-green-700 flex-shrink-0">
// // // // // //                       <Globe size={16} className="sm:w-5 sm:h-5" />
// // // // // //                     </div>
// // // // // //                     <span className="min-w-0">Frameworks & Libraries</span>
// // // // // //                   </CardTitle>
// // // // // //                 </CardHeader>
// // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // //                     {skills.frameworks.map((skill, skillIndex) => (
// // // // // //                       <Badge 
// // // // // //                         key={`frameworks-${skillIndex}`}
// // // // // //                         variant="secondary" 
// // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // //                       >
// // // // // //                         <span>{skill.icon}</span>
// // // // // //                         {skill.name}
// // // // // //                       </Badge>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             </div>

// // // // // //             {/* Second Row: Databases & Development Tools */}
// // // // // //             <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6 lg:grid-cols-2">
// // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-5' : 'opacity-0'}`}>
// // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/10 text-purple-700 flex-shrink-0">
// // // // // //                       <Database size={16} className="sm:w-5 sm:h-5" />
// // // // // //                     </div>
// // // // // //                     <span className="min-w-0">Databases</span>
// // // // // //                   </CardTitle>
// // // // // //                 </CardHeader>
// // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // //                     {skills.databases.map((skill, skillIndex) => (
// // // // // //                       <Badge 
// // // // // //                         key={`databases-${skillIndex}`}
// // // // // //                         variant="secondary" 
// // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // //                       >
// // // // // //                         <span>{skill.icon}</span>
// // // // // //                         {skill.name}
// // // // // //                       </Badge>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </CardContent>
// // // // // //               </Card>

// // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-6' : 'opacity-0'}`}>
// // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-orange-500/10 text-orange-700 flex-shrink-0">
// // // // // //                       <Wrench size={16} className="sm:w-5 sm:h-5" />
// // // // // //                     </div>
// // // // // //                     <span className="min-w-0">Development Tools</span>
// // // // // //                   </CardTitle>
// // // // // //                 </CardHeader>
// // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // //                     {skills.tools.map((skill, skillIndex) => (
// // // // // //                       <Badge 
// // // // // //                         key={`tools-${skillIndex}`}
// // // // // //                         variant="secondary" 
// // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // //                       >
// // // // // //                         <span>{skill.icon}</span>
// // // // // //                         {skill.name}
// // // // // //                       </Badge>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             </div>

// // // // // //             {/* Third Row: Team Leadership & API Testing */}
// // // // // //             <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
// // // // // //               {additionalSkills.map((category, index) => (
// // // // // //                 <Card 
// // // // // //                   key={category.title} 
// // // // // //                   className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? `animate-fade-up animate-delay-${5 + index}` : 'opacity-0'}`}
// // // // // //                 >
// // // // // //                   <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // //                     <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // //                       <div className={`p-1.5 sm:p-2 rounded-lg ${category.color} flex-shrink-0`}>
// // // // // //                         <category.icon size={16} className="sm:w-5 sm:h-5" />
// // // // // //                       </div>
// // // // // //                       <span className="min-w-0">{category.title}</span>
// // // // // //                     </CardTitle>
// // // // // //                   </CardHeader>
// // // // // //                   <CardContent className="p-4 sm:p-6 pt-0">
// // // // // //                     <div className="flex flex-col gap-3">
// // // // // //                       {category.items.map((skill, skillIndex) => (
// // // // // //                         <div
// // // // // //                           key={`${category.title}-${skillIndex}`}
// // // // // //                           className="flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
// // // // // //                         >
// // // // // //                           <div className={`p-1.5 rounded-full ${skill.bgColor} flex-shrink-0`}>
// // // // // //                             <skill.icon size={12} className={`sm:w-3.5 sm:h-3.5 ${skill.iconColor}`} />
// // // // // //                           </div>
// // // // // //                           <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 min-w-0">
// // // // // //                             {skill.name}
// // // // // //                           </span>
// // // // // //                         </div>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   </CardContent>
// // // // // //                 </Card>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default About;
// // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // import { Badge } from "@/components/ui/badge";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { 
// // // // //   Code, 
// // // // //   Database, 
// // // // //   Globe, 
// // // // //   Wrench, 
// // // // //   Users, 
// // // // //   TestTube, 
// // // // //   ChevronLeft, 
// // // // //   ChevronRight,
// // // // //   Target,
// // // // //   CheckCircle,
// // // // //   Zap,
// // // // //   Server,
// // // // //   Monitor,
// // // // //   Brain,
// // // // //   Clock,
// // // // //   Send,
// // // // //   Shield,
// // // // //   User,
// // // // //   Heart,
// // // // //   Star
// // // // // } from "lucide-react";
// // // // // import { useState, useEffect, useRef } from "react";

// // // // // const About = () => {
// // // // //   const [currentSection, setCurrentSection] = useState(0);
// // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // //   const [startX, setStartX] = useState(0);
// // // // //   const [translateX, setTranslateX] = useState(0);
// // // // //   const cardRef = useRef(null);
  
// // // // //   useEffect(() => {
// // // // //     // Trigger animations after component mounts
// // // // //     const timer = setTimeout(() => {
// // // // //       setIsVisible(true);
// // // // //     }, 100);
    
// // // // //     return () => clearTimeout(timer);
// // // // //   }, []);
  
// // // // //   const sections = [
// // // // //     {
// // // // //       title: "Professional Summary",
// // // // //       icon: User,
// // // // //       content: (
// // // // //         <div className="space-y-4">
// // // // //           {/* Mobile and Tablet version (sm and md screens) */}
// // // // //           <div className="block lg:hidden">
// // // // //             <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
// // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in React, 
// // // // //               Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful 
// // // // //               digital experiences, and building responsive, user-centric solutions. Focused on 
// // // // //               performance, accessibility, and modern web standards to deliver scalable, 
// // // // //               maintainable, and future-ready applications.
// // // // //             </p>
// // // // //           </div>
          
// // // // //           {/* Desktop version (lg screens and above) */}
// // // // //           <div className="hidden lg:block space-y-4">
// // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building 
// // // // //               responsive web applications using React, Tailwind CSS, and Next.js. Proficient in 
// // // // //               developing clean, maintainable code and delivering user-centric solutions.
// // // // //             </p>
// // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // //               Strong team collaborator with a focus on performance, accessibility, and modern web 
// // // // //               standards to support scalable and efficient development.
// // // // //             </p>
// // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // //               My journey in web development has been driven by a passion for problem-solving and 
// // // // //               creating meaningful digital experiences. I thrive in collaborative environments where 
// // // // //               innovation meets practical implementation, consistently delivering projects that exceed 
// // // // //               client expectations.
// // // // //             </p>
// // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // //               I believe in staying current with emerging technologies and industry best practices, 
// // // // //               ensuring that every solution I develop is not only functional but also future-ready 
// // // // //               and maintainable.
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       )
// // // // //     },
// // // // //     {
// // // // //       title: "Key Strengths",
// // // // //       icon: Star,
// // // // //       content: (
// // // // //         <div>
// // // // //           <ul className="space-y-3 text-muted-foreground">
// // // // //             <li className="flex items-start gap-3">
// // // // //               <span className="text-primary mt-1">•</span>
// // // // //               <span className="text-sm sm:text-base">Decision-making skills and team leadership</span>
// // // // //             </li>
// // // // //             <li className="flex items-start gap-3">
// // // // //               <span className="text-primary mt-1">•</span>
// // // // //               <span className="text-sm sm:text-base">Performance optimization and accessibility focus</span>
// // // // //             </li>
// // // // //             <li className="flex items-start gap-3">
// // // // //               <span className="text-primary mt-1">•</span>
// // // // //               <span className="text-sm sm:text-base">Clean, maintainable code practices</span>
// // // // //             </li>
// // // // //             <li className="flex items-start gap-3">
// // // // //               <span className="text-primary mt-1">•</span>
// // // // //               <span className="text-sm sm:text-base">Timely project delivery</span>
// // // // //             </li>
// // // // //             <li className="flex items-start gap-3">
// // // // //               <span className="text-primary mt-1">•</span>
// // // // //               <span className="text-sm sm:text-base">Continuous learning and adaptation to new technologies</span>
// // // // //             </li>
// // // // //             <li className="flex items-start gap-3">
// // // // //               <span className="text-primary mt-1">•</span>
// // // // //               <span className="text-sm sm:text-base">User experience optimization and responsive design</span>
// // // // //             </li>
// // // // //           </ul>
// // // // //         </div>
// // // // //       )
// // // // //     },
// // // // //     {
// // // // //       title: "Development Philosophy",
// // // // //       icon: Heart,
// // // // //       content: (
// // // // //         <div>
// // // // //           <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
// // // // //             I approach every project with a user-first mindset, ensuring that technical excellence 
// // // // //             translates into intuitive and engaging user experiences. My goal is to bridge the gap 
// // // // //             between complex functionality and seamless usability.
// // // // //           </p>
// // // // //         </div>
// // // // //       )
// // // // //     }
// // // // //   ];

// // // // //   const skills = {
// // // // //     languages: [
// // // // //       { name: "Python", icon: "🐍" },
// // // // //       { name: "JavaScript", icon: "⚡" },
// // // // //       { name: "HTML", icon: "🌐" },
// // // // //       { name: "CSS", icon: "🎨" }
// // // // //     ],
// // // // //     frameworks: [
// // // // //       { name: "Next.js", icon: "▲" },
// // // // //       { name: "React", icon: "⚛️" },
// // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // //     ],
// // // // //     databases: [
// // // // //       { name: "MongoDB", icon: "🍃" },
// // // // //       { name: "MySQL", icon: "🐬" }
// // // // //     ],
// // // // //     tools: [
// // // // //       { name: "VS Code", icon: "💻" },
// // // // //       { name: "Eclipse", icon: "🌙" },
// // // // //       { name: "Postman", icon: "📮" }
// // // // //     ]
// // // // //   };

// // // // //   const additionalSkills = [
// // // // //     {
// // // // //       title: "Team Leadership",
// // // // //       icon: Users,
// // // // //       items: [
// // // // //         { 
// // // // //           name: "Decision-making skills", 
// // // // //           icon: Brain, 
// // // // //           iconColor: "text-purple-600",
// // // // //           bgColor: "bg-purple-100 dark:bg-purple-900/20"
// // // // //         },
// // // // //         { 
// // // // //           name: "Ensuring timely project delivery", 
// // // // //           icon: Clock, 
// // // // //           iconColor: "text-green-600",
// // // // //           bgColor: "bg-green-100 dark:bg-green-900/20"
// // // // //         }
// // // // //       ],
// // // // //       color: "bg-red-500/10 text-red-700",
// // // // //       displayIcon: Target
// // // // //     },
// // // // //     {
// // // // //       title: "API Testing",
// // // // //       icon: TestTube,
// // // // //       items: [
// // // // //         { 
// // // // //           name: "Postman API Testing", 
// // // // //           icon: Send, 
// // // // //           iconColor: "text-orange-600",
// // // // //           bgColor: "bg-orange-100 dark:bg-orange-900/20"
// // // // //         },
// // // // //         { 
// // // // //           name: "REST API Validation", 
// // // // //           icon: Shield, 
// // // // //           iconColor: "text-blue-600",
// // // // //           bgColor: "bg-blue-100 dark:bg-blue-900/20"
// // // // //         }
// // // // //       ],
// // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // //       displayIcon: Server
// // // // //     }
// // // // //   ];

// // // // //   const skillCategories = [
// // // // //     {
// // // // //       title: "Languages & Scripting",
// // // // //       icon: Code,
// // // // //       items: skills.languages,
// // // // //       color: "bg-blue-500/10 text-blue-700"
// // // // //     },
// // // // //     {
// // // // //       title: "Frameworks & Libraries",
// // // // //       icon: Globe,
// // // // //       items: skills.frameworks,
// // // // //       color: "bg-green-500/10 text-green-700"
// // // // //     },
// // // // //     {
// // // // //       title: "Databases",
// // // // //       icon: Database,
// // // // //       items: skills.databases,
// // // // //       color: "bg-purple-500/10 text-purple-700"
// // // // //     },
// // // // //     {
// // // // //       title: "Development Tools",
// // // // //       icon: Wrench,
// // // // //       items: skills.tools,
// // // // //       color: "bg-orange-500/10 text-orange-700"
// // // // //     }
// // // // //   ];

// // // // //   // Touch event handlers
// // // // //   const handleTouchStart = (e) => {
// // // // //     setIsDragging(true);
// // // // //     setStartX(e.touches[0].clientX);
// // // // //     setTranslateX(0);
// // // // //   };

// // // // //   const handleTouchMove = (e) => {
// // // // //     if (!isDragging) return;
    
// // // // //     const currentX = e.touches[0].clientX;
// // // // //     const diffX = currentX - startX;
// // // // //     setTranslateX(diffX);
// // // // //   };

// // // // //   const handleTouchEnd = () => {
// // // // //     if (!isDragging) return;
    
// // // // //     setIsDragging(false);
// // // // //     const threshold = 50;
    
// // // // //     if (translateX > threshold && currentSection > 0) {
// // // // //       setCurrentSection(currentSection - 1);
// // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // //       setCurrentSection(currentSection + 1);
// // // // //     }
    
// // // // //     setTranslateX(0);
// // // // //   };

// // // // //   // Mouse event handlers for desktop
// // // // //   const handleMouseDown = (e) => {
// // // // //     if (window.innerWidth < 1024) return; // Only enable on desktop
// // // // //     setIsDragging(true);
// // // // //     setStartX(e.clientX);
// // // // //     setTranslateX(0);
// // // // //     e.preventDefault();
// // // // //   };

// // // // //   const handleMouseMove = (e) => {
// // // // //     if (!isDragging || window.innerWidth < 1024) return;
    
// // // // //     const currentX = e.clientX;
// // // // //     const diffX = currentX - startX;
// // // // //     setTranslateX(diffX);
// // // // //   };

// // // // //   const handleMouseUp = () => {
// // // // //     if (!isDragging || window.innerWidth < 1024) return;
    
// // // // //     setIsDragging(false);
// // // // //     const threshold = 50;
    
// // // // //     if (translateX > threshold && currentSection > 0) {
// // // // //       setCurrentSection(currentSection - 1);
// // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // //       setCurrentSection(currentSection + 1);
// // // // //     }
    
// // // // //     setTranslateX(0);
// // // // //   };

// // // // //   // Add mouse event listeners
// // // // //   useEffect(() => {
// // // // //     if (isDragging && window.innerWidth >= 1024) {
// // // // //       document.addEventListener('mousemove', handleMouseMove);
// // // // //       document.addEventListener('mouseup', handleMouseUp);
      
// // // // //       return () => {
// // // // //         document.removeEventListener('mousemove', handleMouseMove);
// // // // //         document.removeEventListener('mouseup', handleMouseUp);
// // // // //       };
// // // // //     }
// // // // //   }, [isDragging, startX]);

// // // // //   return (
// // // // //     <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 bg-background min-h-screen">
// // // // //       <style jsx>{`
// // // // //         @keyframes fadeInUp {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: translateY(30px);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: translateY(0);
// // // // //           }
// // // // //         }
        
// // // // //         @keyframes slideInLeft {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: translateX(-50px);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: translateX(0);
// // // // //           }
// // // // //         }
        
// // // // //         @keyframes slideInRight {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: translateX(50px);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: translateX(0);
// // // // //           }
// // // // //         }
        
// // // // //         .animate-fade-up {
// // // // //           animation: fadeInUp 0.8s ease-out forwards;
// // // // //         }
        
// // // // //         .animate-slide-left {
// // // // //           animation: slideInLeft 0.8s ease-out forwards;
// // // // //         }
        
// // // // //         .animate-slide-right {
// // // // //           animation: slideInRight 0.8s ease-out forwards;
// // // // //         }
        
// // // // //         .animate-delay-1 { animation-delay: 0.2s; }
// // // // //         .animate-delay-2 { animation-delay: 0.4s; }
// // // // //         .animate-delay-3 { animation-delay: 0.6s; }
// // // // //         .animate-delay-4 { animation-delay: 0.8s; }
// // // // //         .animate-delay-5 { animation-delay: 1.0s; }
// // // // //         .animate-delay-6 { animation-delay: 1.2s; }
// // // // //         .animate-delay-7 { animation-delay: 1.4s; }
// // // // //         .animate-delay-8 { animation-delay: 1.6s; }
        
// // // // //         .swipe-container {
// // // // //           touch-action: pan-y pinch-zoom;
// // // // //           user-select: none;
// // // // //         }
// // // // //       `}</style>
      
// // // // //       <div className="container mx-auto max-w-6xl">
// // // // //         <div className={`text-center mb-12 lg:mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
// // // // //           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">About Me</h2>
// // // // //           <div className="h-1 w-16 sm:w-20 lg:w-24 bg-primary mx-auto mb-6 lg:mb-8" />
// // // // //         </div>

// // // // //         <div className={`${isVisible ? 'animate-slide-left animate-delay-1' : 'opacity-0'}`}>
// // // // //           {/* Mobile View: Single Swipeable Box */}
// // // // //           <div className="lg:hidden mb-12">
// // // // //             <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 rounded-2xl overflow-hidden max-w-2xl mx-auto">
// // // // //               <CardContent className="p-4 sm:p-6">
// // // // //                 {/* Mobile Header with Navigation Dots */}
// // // // //                 <div className="text-center mb-6">
// // // // //                   <div className="flex items-center justify-center gap-3 mb-4">
// // // // //                     <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
// // // // //                       {(() => {
// // // // //                         const Icon = sections[currentSection].icon;
// // // // //                         return <Icon size={18} className="sm:w-5 sm:h-5" />;
// // // // //                       })()}
// // // // //                     </div>
// // // // //                     <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // // //                       {sections[currentSection].title}
// // // // //                     </h3>
// // // // //                   </div>
// // // // //                   <div className="flex justify-center gap-2">
// // // // //                     {sections.map((_, index) => (
// // // // //                       <div
// // // // //                         key={index}
// // // // //                         className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // // // //                           index === currentSection ? 'bg-primary' : 'bg-primary/30'
// // // // //                         }`}
// // // // //                       />
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </div>
                
// // // // //                 {/* Mobile Swipeable Content */}
// // // // //                 <div 
// // // // //                   className="min-h-[200px] sm:min-h-[250px] flex items-center justify-center swipe-container"
// // // // //                   onTouchStart={handleTouchStart}
// // // // //                   onTouchMove={handleTouchMove}
// // // // //                   onTouchEnd={handleTouchEnd}
// // // // //                 >
// // // // //                   <div 
// // // // //                     className="w-full transition-all duration-500 ease-in-out"
// // // // //                     style={{
// // // // //                       transform: `translateX(${translateX}px)`,
// // // // //                       transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
// // // // //                     }}
// // // // //                   >
// // // // //                     {sections[currentSection].content}
// // // // //                   </div>
// // // // //                 </div>
                
// // // // //                 {/* Mobile swipe hint */}
// // // // //                 <div className="text-center mt-4">
                  
// // // // //                 </div>
// // // // //               </CardContent>
// // // // //             </Card>
// // // // //           </div>

// // // // //           {/* Desktop View: Single Swipeable Box with Navigation */}
// // // // //           <div className="hidden lg:block relative mb-12 lg:mb-16">
// // // // //             <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 rounded-2xl lg:rounded-3xl overflow-hidden max-w-5xl mx-auto">
// // // // //               <CardContent className="p-6 sm:p-8 lg:p-12">
// // // // //                 <div className="flex items-center justify-between mb-6">
// // // // //                   {/* Desktop Navigation Arrows */}
// // // // //                   <Button
// // // // //                     variant="ghost"
// // // // //                     size="sm"
// // // // //                     onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // // //                     disabled={currentSection === 0}
// // // // //                     className="flex text-primary hover:bg-primary/10 rounded-full p-2 sm:p-3"
// // // // //                   >
// // // // //                     <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
// // // // //                   </Button>
                  
// // // // //                   {/* Desktop: Show title with arrows */}
// // // // //                   <div className="text-center flex-1 px-2 sm:px-4">
// // // // //                     <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">
// // // // //                       {sections[currentSection].title}
// // // // //                     </h3>
// // // // //                     <div className="flex justify-center gap-2 mt-4">
// // // // //                       {sections.map((_, index) => (
// // // // //                         <div
// // // // //                           key={index}
// // // // //                           className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // // // //                             index === currentSection ? 'bg-primary' : 'bg-primary/30'
// // // // //                           }`}
// // // // //                         />
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </div>
                  
// // // // //                   <Button
// // // // //                     variant="ghost"
// // // // //                     size="sm"
// // // // //                     onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // // //                     disabled={currentSection === sections.length - 1}
// // // // //                     className="flex text-primary hover:bg-primary/10 rounded-full p-2 sm:p-3"
// // // // //                   >
// // // // //                     <ChevronRight size={16} className="sm:w-5 sm:h-5" />
// // // // //                   </Button>
// // // // //                 </div>
                
// // // // //                 <div 
// // // // //                   className="min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center swipe-container"
// // // // //                   ref={cardRef}
// // // // //                   onMouseDown={handleMouseDown}
// // // // //                 >
// // // // //                   <div 
// // // // //                     className="w-full transition-all duration-500 ease-in-out"
// // // // //                     style={{
// // // // //                       transform: `translateX(${translateX}px)`,
// // // // //                       transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
// // // // //                     }}
// // // // //                   >
// // // // //                     {sections[currentSection].content}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </CardContent>
// // // // //             </Card>
// // // // //           </div>

// // // // //           {/* Skills & Proficiency Section */}
// // // // //           <div className={`${isVisible ? 'animate-slide-right animate-delay-2' : 'opacity-0'}`}>
// // // // //             <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">Skills & Proficiency</h3>
            
// // // // //             {/* First Row: Languages & Frameworks */}
// // // // //             <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6 lg:grid-cols-2">
// // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-6' : 'opacity-0'}`}>
// // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 text-blue-700 flex-shrink-0">
// // // // //                       <Code size={16} className="sm:w-5 sm:h-5" />
// // // // //                     </div>
// // // // //                     <span className="min-w-0">Languages & Scripting</span>
// // // // //                   </CardTitle>
// // // // //                 </CardHeader>
// // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // //                   <div className="flex flex-wrap gap-2">
// // // // //                     {skills.languages.map((skill, skillIndex) => (
// // // // //                       <Badge 
// // // // //                         key={`languages-${skillIndex}`}
// // // // //                         variant="secondary" 
// // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // //                       >
// // // // //                         <span>{skill.icon}</span>
// // // // //                         {skill.name}
// // // // //                       </Badge>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>

// // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-7' : 'opacity-0'}`}>
// // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-green-500/10 text-green-700 flex-shrink-0">
// // // // //                       <Globe size={16} className="sm:w-5 sm:h-5" />
// // // // //                     </div>
// // // // //                     <span className="min-w-0">Frameworks & Libraries</span>
// // // // //                   </CardTitle>
// // // // //                 </CardHeader>
// // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // //                   <div className="flex flex-wrap gap-2">
// // // // //                     {skills.frameworks.map((skill, skillIndex) => (
// // // // //                       <Badge 
// // // // //                         key={`frameworks-${skillIndex}`}
// // // // //                         variant="secondary" 
// // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // //                       >
// // // // //                         <span>{skill.icon}</span>
// // // // //                         {skill.name}
// // // // //                       </Badge>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             </div>

// // // // //             {/* Second Row: Databases & Development Tools */}
// // // // //             <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6 lg:grid-cols-2">
// // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-8' : 'opacity-0'}`}>
// // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/10 text-purple-700 flex-shrink-0">
// // // // //                       <Database size={16} className="sm:w-5 sm:h-5" />
// // // // //                     </div>
// // // // //                     <span className="min-w-0">Databases</span>
// // // // //                   </CardTitle>
// // // // //                 </CardHeader>
// // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // //                   <div className="flex flex-wrap gap-2">
// // // // //                     {skills.databases.map((skill, skillIndex) => (
// // // // //                       <Badge 
// // // // //                         key={`databases-${skillIndex}`}
// // // // //                         variant="secondary" 
// // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // //                       >
// // // // //                         <span>{skill.icon}</span>
// // // // //                         {skill.name}
// // // // //                       </Badge>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>

// // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-8' : 'opacity-0'}`}>
// // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-orange-500/10 text-orange-700 flex-shrink-0">
// // // // //                       <Wrench size={16} className="sm:w-5 sm:h-5" />
// // // // //                     </div>
// // // // //                     <span className="min-w-0">Development Tools</span>
// // // // //                   </CardTitle>
// // // // //                 </CardHeader>
// // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // //                   <div className="flex flex-wrap gap-2">
// // // // //                     {skills.tools.map((skill, skillIndex) => (
// // // // //                       <Badge 
// // // // //                         key={`tools-${skillIndex}`}
// // // // //                         variant="secondary" 
// // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // //                       >
// // // // //                         <span>{skill.icon}</span>
// // // // //                         {skill.name}
// // // // //                       </Badge>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             </div>

// // // // //             {/* Third Row: Team Leadership & API Testing */}
// // // // //             <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
// // // // //               {additionalSkills.map((category, index) => (
// // // // //                 <Card 
// // // // //                   key={category.title} 
// // // // //                   className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? `animate-fade-up animate-delay-${8 + index}` : 'opacity-0'}`}
// // // // //                 >
// // // // //                   <CardHeader className="pb-3 p-4 sm:p-6">
// // // // //                     <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // //                       <div className={`p-1.5 sm:p-2 rounded-lg ${category.color} flex-shrink-0`}>
// // // // //                         <category.icon size={16} className="sm:w-5 sm:h-5" />
// // // // //                       </div>
// // // // //                       <span className="min-w-0">{category.title}</span>
// // // // //                     </CardTitle>
// // // // //                   </CardHeader>
// // // // //                   <CardContent className="p-4 sm:p-6 pt-0">
// // // // //                     <div className="flex flex-col gap-3">
// // // // //                       {category.items.map((skill, skillIndex) => (
// // // // //                         <div
// // // // //                           key={`${category.title}-${skillIndex}`}
// // // // //                           className="flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
// // // // //                         >
// // // // //                           <div className={`p-1.5 rounded-full ${skill.bgColor} flex-shrink-0`}>
// // // // //                             <skill.icon size={12} className={`sm:w-3.5 sm:h-3.5 ${skill.iconColor}`} />
// // // // //                           </div>
// // // // //                           <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 min-w-0">
// // // // //                             {skill.name}
// // // // //                           </span>
// // // // //                         </div>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </CardContent>
// // // // //                 </Card>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default About;
// // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Badge } from "@/components/ui/badge";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star } from "lucide-react";
// // // // import { useState, useEffect, useRef } from "react";

// // // // const About = () => {
// // // //   const [currentSection, setCurrentSection] = useState(0);
// // // //   const [isVisible, setIsVisible] = useState(false);
// // // //   const [isDragging, setIsDragging] = useState(false);
// // // //   const [startX, setStartX] = useState(0);
// // // //   const [translateX, setTranslateX] = useState(0);
// // // //   const cardRef = useRef(null);

// // // //   useEffect(() => {
// // // //     // Trigger animations after component mounts
// // // //     const timer = setTimeout(() => {
// // // //       setIsVisible(true);
// // // //     }, 100);

// // // //     return () => clearTimeout(timer);
// // // //   }, []);

// // // //   const sections = [
// // // //     {
// // // //       title: "Professional Summary",
// // // //       icon: User,
// // // //       content: (
// // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // //           {/* Mobile and Tablet version (sm and md screens) */}
// // // //           <p className="lg:hidden text-gray-700 dark:text-gray-300">
// // // //             Web Developer with 6 months of experience at Webgeon Results, skilled in React, Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful digital experiences, and building responsive, user-centric solutions. Focused on performance, accessibility, and modern web standards to deliver scalable, maintainable, and future-ready applications.
// // // //           </p>
          
// // // //           {/* Desktop version (lg screens and above) */}
// // // //           <div className="hidden lg:block space-y-4">
// // // //             <p className="text-gray-700 dark:text-gray-300">
// // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js. Proficient in developing clean, maintainable code and delivering user-centric solutions.
// // // //             </p>
// // // //             <p className="text-gray-700 dark:text-gray-300">
// // // //               Strong team collaborator with a focus on performance, accessibility, and modern web standards to support scalable and efficient development.
// // // //             </p>
// // // //             <p className="text-gray-700 dark:text-gray-300">
// // // //               My journey in web development has been driven by a passion for problem-solving and creating meaningful digital experiences. I thrive in collaborative environments where innovation meets practical implementation, consistently delivering projects that exceed client expectations.
// // // //             </p>
// // // //             <p className="text-gray-700 dark:text-gray-300">
// // // //               I believe in staying current with emerging technologies and industry best practices, ensuring that every solution I develop is not only functional but also future-ready and maintainable.
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       )
// // // //     },
// // // //     {
// // // //       title: "Key Strengths",
// // // //       icon: Star,
// // // //       content: (
// // // //         <div className="space-y-3 text-base sm:text-lg">
// // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // //             <span className="text-gray-700 dark:text-gray-300">Decision-making skills and team leadership</span>
// // // //           </div>
// // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // //             <span className="text-gray-700 dark:text-gray-300">Performance optimization and accessibility focus</span>
// // // //           </div>
// // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // //             <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code practices</span>
// // // //           </div>
// // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // //             <span className="text-gray-700 dark:text-gray-300">Timely project delivery</span>
// // // //           </div>
// // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // //             <span className="text-gray-700 dark:text-gray-300">Continuous learning and adaptation to new technologies</span>
// // // //           </div>
// // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // //             <span className="text-gray-700 dark:text-gray-300">User experience optimization and responsive design</span>
// // // //           </div>
// // // //         </div>
// // // //       )
// // // //     },
// // // //     {
// // // //       title: "Development Philosophy",
// // // //       icon: Heart,
// // // //       content: (
// // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // //           <p className="text-gray-700 dark:text-gray-300">
// // // //             I approach every project with a user-first mindset, ensuring that technical excellence translates into intuitive and engaging user experiences. My goal is to bridge the gap between complex functionality and seamless usability.
// // // //           </p>
// // // //         </div>
// // // //       )
// // // //     }
// // // //   ];

// // // //   const skills = {
// // // //     languages: [
// // // //       { name: "Python", icon: "🐍" },
// // // //       { name: "JavaScript", icon: "⚡" },
// // // //       { name: "HTML", icon: "🌐" },
// // // //       { name: "CSS", icon: "🎨" }
// // // //     ],
// // // //     frameworks: [
// // // //       { name: "Next.js", icon: "▲" },
// // // //       { name: "React", icon: "⚛️" },
// // // //       { name: "Tailwind CSS", icon: "💨" }
// // // //     ],
// // // //     databases: [
// // // //       { name: "MongoDB", icon: "🍃" },
// // // //       { name: "MySQL", icon: "🐬" }
// // // //     ],
// // // //     tools: [
// // // //       { name: "VS Code", icon: "💻" },
// // // //       { name: "Eclipse", icon: "🌙" },
// // // //       { name: "Postman", icon: "📮" }
// // // //     ]
// // // //   };

// // // //   const additionalSkills = [
// // // //     {
// // // //       title: "Team Leadership",
// // // //       icon: Users,
// // // //       items: [
// // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // //       ],
// // // //       color: "bg-red-500/10 text-red-700",
// // // //       displayIcon: Target
// // // //     },
// // // //     {
// // // //       title: "API Testing",
// // // //       icon: TestTube,
// // // //       items: [
// // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // //       ],
// // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // //       displayIcon: Server
// // // //     }
// // // //   ];

// // // //   // Touch event handlers
// // // //   const handleTouchStart = (e) => {
// // // //     setIsDragging(true);
// // // //     setStartX(e.touches[0].clientX);
// // // //     setTranslateX(0);
// // // //   };

// // // //   const handleTouchMove = (e) => {
// // // //     if (!isDragging) return;
// // // //     const currentX = e.touches[0].clientX;
// // // //     const diffX = currentX - startX;
// // // //     setTranslateX(diffX);
// // // //   };

// // // //   const handleTouchEnd = () => {
// // // //     if (!isDragging) return;
// // // //     setIsDragging(false);
    
// // // //     const threshold = 50;
// // // //     if (translateX > threshold && currentSection > 0) {
// // // //       setCurrentSection(currentSection - 1);
// // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // //       setCurrentSection(currentSection + 1);
// // // //     }
// // // //     setTranslateX(0);
// // // //   };

// // // //   // Mouse event handlers for desktop
// // // //   const handleMouseDown = (e) => {
// // // //     if (window.innerWidth < 1024) return; // Only enable on desktop
// // // //     setIsDragging(true);
// // // //     setStartX(e.clientX);
// // // //     setTranslateX(0);
// // // //     e.preventDefault();
// // // //   };

// // // //   const handleMouseMove = (e) => {
// // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // //     const currentX = e.clientX;
// // // //     const diffX = currentX - startX;
// // // //     setTranslateX(diffX);
// // // //   };

// // // //   const handleMouseUp = () => {
// // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // //     setIsDragging(false);
    
// // // //     const threshold = 50;
// // // //     if (translateX > threshold && currentSection > 0) {
// // // //       setCurrentSection(currentSection - 1);
// // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // //       setCurrentSection(currentSection + 1);
// // // //     }
// // // //     setTranslateX(0);
// // // //   };

// // // //   // Add mouse event listeners
// // // //   useEffect(() => {
// // // //     if (isDragging && window.innerWidth >= 1024) {
// // // //       document.addEventListener('mousemove', handleMouseMove);
// // // //       document.addEventListener('mouseup', handleMouseUp);
      
// // // //       return () => {
// // // //         document.removeEventListener('mousemove', handleMouseMove);
// // // //         document.removeEventListener('mouseup', handleMouseUp);
// // // //       };
// // // //     }
// // // //   }, [isDragging, startX]);

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // //       <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
// // // //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
// // // //             About Me
// // // //           </h1>
// // // //         </div>

// // // //         {/* Mobile View: Single Swipeable Box */}
// // // //         <div className="lg:hidden w-full">
// // // //           {/* Mobile Header with Navigation Dots */}
// // // //           <Card className="mb-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 w-full max-w-full">
// // // //             <CardHeader className="text-center pb-4">
// // // //               <div className="flex items-center justify-center mb-3">
// // // //                 {(() => {
// // // //                   const Icon = sections[currentSection].icon;
// // // //                   return <Icon className="w-10 h-10 text-primary" />;
// // // //                 })()}
// // // //               </div>
// // // //               <CardTitle className="text-2xl font-bold text-primary">
// // // //                 {sections[currentSection].title}
// // // //               </CardTitle>
// // // //               <div className="flex justify-center gap-2 mt-4">
// // // //                 {sections.map((_, index) => (
// // // //                   <button
// // // //                     key={index}
// // // //                     onClick={() => setCurrentSection(index)}
// // // //                     className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
// // // //                       index === currentSection 
// // // //                         ? 'w-8 bg-primary' 
// // // //                         : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // //                     }`}
// // // //                   />
// // // //                 ))}
// // // //               </div>
// // // //             </CardHeader>
// // // //             {/* Mobile Swipeable Content */}
// // // //             <CardContent
// // // //               ref={cardRef}
// // // //               onTouchStart={handleTouchStart}
// // // //               onTouchMove={handleTouchMove}
// // // //               onTouchEnd={handleTouchEnd}
// // // //               className="relative overflow-hidden touch-pan-y active:cursor-grabbing active:scale-[0.98] transition-transform hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // //               style={{
// // // //                 transform: `translateX(${translateX}px)`,
// // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // //               }}
// // // //             >
// // // //               {sections[currentSection].content}
// // // //             </CardContent>
// // // //             {/* Mobile swipe hint */}
// // // //             <div className="text-center pb-4 text-sm text-gray-500 dark:text-gray-400">
// // // //               Swipe to navigate
// // // //             </div>
// // // //           </Card>
// // // //         </div>

// // // //         {/* Desktop View: Single Swipeable Box with Navigation */}
// // // //         <div className="hidden lg:block w-full">
// // // //           <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 select-none w-full max-w-full">
// // // //             {/* Desktop Navigation Arrows */}
// // // //             <CardHeader className="relative pb-6">
// // // //               <div className="flex items-center justify-between gap-4">
// // // //                 <Button
// // // //                   variant="ghost"
// // // //                   size="icon"
// // // //                   onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // //                   disabled={currentSection === 0}
// // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // //                 >
// // // //                   <ChevronLeft className="w-6 h-6" />
// // // //                 </Button>
                
// // // //                 {/* Desktop: Show title with arrows */}
// // // //                 <div className="flex-1 text-center">
// // // //                   <CardTitle className="text-3xl font-bold text-primary mb-4">
// // // //                     {sections[currentSection].title}
// // // //                   </CardTitle>
// // // //                   <div className="flex justify-center gap-2">
// // // //                     {sections.map((_, index) => (
// // // //                       <button
// // // //                         key={index}
// // // //                         onClick={() => setCurrentSection(index)}
// // // //                         className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
// // // //                           index === currentSection 
// // // //                             ? 'w-12 bg-primary' 
// // // //                             : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // //                         }`}
// // // //                       />
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
                
// // // //                 <Button
// // // //                   variant="ghost"
// // // //                   size="icon"
// // // //                   onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // //                   disabled={currentSection === sections.length - 1}
// // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // //                 >
// // // //                   <ChevronRight className="w-6 h-6" />
// // // //                 </Button>
// // // //               </div>
// // // //             </CardHeader>
            
// // // //             <CardContent
// // // //               ref={cardRef}
// // // //               onMouseDown={handleMouseDown}
// // // //               className="relative overflow-hidden cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // //               style={{
// // // //                 transform: `translateX(${translateX}px)`,
// // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // //               }}
// // // //             >
// // // //               {sections[currentSection].content}
// // // //             </CardContent>
// // // //           </Card>
// // // //         </div>

// // // //         {/* Skills & Proficiency Section */}
// // // //         <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // //           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // //             Skills & Proficiency
// // // //           </h2>
          
// // // //           {/* First Row: Languages & Frameworks */}
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 w-full max-w-full">
// // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500 w-full max-w-full`}>
// // // //               <CardHeader>
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div className={`p-3 rounded-lg bg-blue-500/10 text-blue-700`}>
// // // //                     <Code className="w-6 h-6" />
// // // //                   </div>
// // // //                   <CardTitle className="text-xl sm:text-2xl">Languages & Scripting</CardTitle>
// // // //                 </div>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <div className="flex flex-wrap gap-3">
// // // //                   {skills.languages.map((skill, skillIndex) => (
// // // //                     <Badge 
// // // //                       key={skillIndex} 
// // // //                       variant="secondary" 
// // // //                       className="text-base sm:text-lg px-4 py-2 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // //                     >
// // // //                       <span className="mr-2">{skill.icon}</span>
// // // //                       {skill.name}
// // // //                     </Badge>
// // // //                   ))}
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>

// // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500 w-full max-w-full`}>
// // // //               <CardHeader>
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div className={`p-3 rounded-lg bg-green-500/10 text-green-700`}>
// // // //                     <Globe className="w-6 h-6" />
// // // //                   </div>
// // // //                   <CardTitle className="text-xl sm:text-2xl">Frameworks & Libraries</CardTitle>
// // // //                 </div>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <div className="flex flex-wrap gap-3">
// // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // //                     <Badge 
// // // //                       key={skillIndex} 
// // // //                       variant="secondary" 
// // // //                       className="text-base sm:text-lg px-4 py-2 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // //                     >
// // // //                       <span className="mr-2">{skill.icon}</span>
// // // //                       {skill.name}
// // // //                     </Badge>
// // // //                   ))}
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </div>

// // // //           {/* Second Row: Databases & Development Tools */}
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 w-full max-w-full">
// // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-purple-500 w-full max-w-full`}>
// // // //               <CardHeader>
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div className={`p-3 rounded-lg bg-purple-500/10 text-purple-700`}>
// // // //                     <Database className="w-6 h-6" />
// // // //                   </div>
// // // //                   <CardTitle className="text-xl sm:text-2xl">Databases</CardTitle>
// // // //                 </div>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <div className="flex flex-wrap gap-3">
// // // //                   {skills.databases.map((skill, skillIndex) => (
// // // //                     <Badge 
// // // //                       key={skillIndex} 
// // // //                       variant="secondary" 
// // // //                       className="text-base sm:text-lg px-4 py-2 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // //                     >
// // // //                       <span className="mr-2">{skill.icon}</span>
// // // //                       {skill.name}
// // // //                     </Badge>
// // // //                   ))}
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>

// // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-orange-500 w-full max-w-full`}>
// // // //               <CardHeader>
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div className={`p-3 rounded-lg bg-orange-500/10 text-orange-700`}>
// // // //                     <Wrench className="w-6 h-6" />
// // // //                   </div>
// // // //                   <CardTitle className="text-xl sm:text-2xl">Development Tools</CardTitle>
// // // //                 </div>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <div className="flex flex-wrap gap-3">
// // // //                   {skills.tools.map((skill, skillIndex) => (
// // // //                     <Badge 
// // // //                       key={skillIndex} 
// // // //                       variant="secondary" 
// // // //                       className="text-base sm:text-lg px-4 py-2 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // //                     >
// // // //                       <span className="mr-2">{skill.icon}</span>
// // // //                       {skill.name}
// // // //                     </Badge>
// // // //                   ))}
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </div>

// // // //           {/* Third Row: Team Leadership & API Testing */}
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-full">
// // // //             {additionalSkills.map((category, index) => (
// // // //               <Card 
// // // //                 key={index} 
// // // //                 className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 ${
// // // //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// // // //                 } w-full max-w-full`}
// // // //               >
// // // //                 <CardHeader>
// // // //                   <div className="flex items-center gap-3">
// // // //                     <div className={`p-3 rounded-lg ${category.color}`}>
// // // //                       {(() => {
// // // //                         const Icon = category.displayIcon;
// // // //                         return <Icon className="w-6 h-6" />;
// // // //                       })()}
// // // //                     </div>
// // // //                     <CardTitle className="text-xl sm:text-2xl">{category.title}</CardTitle>
// // // //                   </div>
// // // //                 </CardHeader>
// // // //                 <CardContent>
// // // //                   <div className="space-y-3">
// // // //                     {category.items.map((skill, skillIndex) => (
// // // //                       <div 
// // // //                         key={skillIndex} 
// // // //                         className={`flex items-center gap-3 p-3 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // //                       >
// // // //                         {(() => {
// // // //                           const SkillIcon = skill.icon;
// // // //                           return <SkillIcon className={`w-5 h-5 ${skill.iconColor}`} />;
// // // //                         })()}
// // // //                         <span className="text-base sm:text-lg font-medium">{skill.name}</span>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default About;
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";
// // // import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star } from "lucide-react";
// // // import { useState, useEffect, useRef } from "react";

// // // const About = () => {
// // //   const [currentSection, setCurrentSection] = useState(0);
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const [isDragging, setIsDragging] = useState(false);
// // //   const [startX, setStartX] = useState(0);
// // //   const [translateX, setTranslateX] = useState(0);
// // //   const cardRef = useRef(null);

// // //   useEffect(() => {
// // //     // Trigger animations after component mounts
// // //     const timer = setTimeout(() => {
// // //       setIsVisible(true);
// // //     }, 100);

// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   const sections = [
// // //     {
// // //       title: "Professional Summary",
// // //       icon: User,
// // //       content: (
// // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // //           {/* Mobile and Tablet version (sm and md screens) */}
// // //           <p className="lg:hidden text-gray-700 dark:text-gray-300">
// // //             Web Developer with 6 months of experience at Webgeon Results, skilled in React, Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful digital experiences, and building responsive, user-centric solutions. Focused on performance, accessibility, and modern web standards to deliver scalable, maintainable, and future-ready applications.
// // //           </p>
          
// // //           {/* Desktop version (lg screens and above) */}
// // //           <div className="hidden lg:block space-y-4">
// // //             <p className="text-gray-700 dark:text-gray-300">
// // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js. Proficient in developing clean, maintainable code and delivering user-centric solutions.
// // //             </p>
// // //             <p className="text-gray-700 dark:text-gray-300">
// // //               Strong team collaborator with a focus on performance, accessibility, and modern web standards to support scalable and efficient development.
// // //             </p>
// // //             <p className="text-gray-700 dark:text-gray-300">
// // //               My journey in web development has been driven by a passion for problem-solving and creating meaningful digital experiences. I thrive in collaborative environments where innovation meets practical implementation, consistently delivering projects that exceed client expectations.
// // //             </p>
// // //             <p className="text-gray-700 dark:text-gray-300">
// // //               I believe in staying current with emerging technologies and industry best practices, ensuring that every solution I develop is not only functional but also future-ready and maintainable.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       )
// // //     },
// // //     {
// // //       title: "Key Strengths",
// // //       icon: Star,
// // //       content: (
// // //         <div className="space-y-3 text-base sm:text-lg">
// // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // //             <span className="text-gray-700 dark:text-gray-300">Decision-making skills and team leadership</span>
// // //           </div>
// // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // //             <span className="text-gray-700 dark:text-gray-300">Performance optimization and accessibility focus</span>
// // //           </div>
// // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // //             <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code practices</span>
// // //           </div>
// // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // //             <span className="text-gray-700 dark:text-gray-300">Timely project delivery</span>
// // //           </div>
// // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // //             <span className="text-gray-700 dark:text-gray-300">Continuous learning and adaptation to new technologies</span>
// // //           </div>
// // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // //             <span className="text-gray-700 dark:text-gray-300">User experience optimization and responsive design</span>
// // //           </div>
// // //         </div>
// // //       )
// // //     },
// // //     {
// // //       title: "Development Philosophy",
// // //       icon: Heart,
// // //       content: (
// // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // //           <p className="text-gray-700 dark:text-gray-300">
// // //             I approach every project with a user-first mindset, ensuring that technical excellence translates into intuitive and engaging user experiences. My goal is to bridge the gap between complex functionality and seamless usability.
// // //           </p>
// // //         </div>
// // //       )
// // //     }
// // //   ];

// // //   const skills = {
// // //     languages: [
// // //       { name: "Python", icon: "🐍" },
// // //       { name: "JavaScript", icon: "⚡" },
// // //       { name: "HTML", icon: "🌐" },
// // //       { name: "CSS", icon: "🎨" }
// // //     ],
// // //     frameworks: [
// // //       { name: "Next.js", icon: "▲" },
// // //       { name: "React", icon: "⚛️" },
// // //       { name: "Tailwind CSS", icon: "💨" }
// // //     ],
// // //     databases: [
// // //       { name: "MongoDB", icon: "🍃" },
// // //       { name: "MySQL", icon: "🐬" }
// // //     ],
// // //     tools: [
// // //       { name: "VS Code", icon: "💻" },
// // //       { name: "Eclipse", icon: "🌙" },
// // //       { name: "Postman", icon: "📮" }
// // //     ]
// // //   };

// // //   const additionalSkills = [
// // //     {
// // //       title: "Team Leadership",
// // //       icon: Users,
// // //       items: [
// // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // //       ],
// // //       color: "bg-red-500/10 text-red-700",
// // //       displayIcon: Target
// // //     },
// // //     {
// // //       title: "API Testing",
// // //       icon: TestTube,
// // //       items: [
// // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // //       ],
// // //       color: "bg-indigo-500/10 text-indigo-700",
// // //       displayIcon: Server
// // //     }
// // //   ];

// // //   // Touch event handlers
// // //   const handleTouchStart = (e) => {
// // //     setIsDragging(true);
// // //     setStartX(e.touches[0].clientX);
// // //     setTranslateX(0);
// // //   };

// // //   const handleTouchMove = (e) => {
// // //     if (!isDragging) return;
// // //     const currentX = e.touches[0].clientX;
// // //     const diffX = currentX - startX;
// // //     setTranslateX(diffX);
// // //   };

// // //   const handleTouchEnd = () => {
// // //     if (!isDragging) return;
// // //     setIsDragging(false);
    
// // //     const threshold = 50;
// // //     if (translateX > threshold && currentSection > 0) {
// // //       setCurrentSection(currentSection - 1);
// // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // //       setCurrentSection(currentSection + 1);
// // //     }
// // //     setTranslateX(0);
// // //   };

// // //   // Mouse event handlers for desktop
// // //   const handleMouseDown = (e) => {
// // //     if (window.innerWidth < 1024) return; // Only enable on desktop
// // //     setIsDragging(true);
// // //     setStartX(e.clientX);
// // //     setTranslateX(0);
// // //     e.preventDefault();
// // //   };

// // //   const handleMouseMove = (e) => {
// // //     if (!isDragging || window.innerWidth < 1024) return;
// // //     const currentX = e.clientX;
// // //     const diffX = currentX - startX;
// // //     setTranslateX(diffX);
// // //   };

// // //   const handleMouseUp = () => {
// // //     if (!isDragging || window.innerWidth < 1024) return;
// // //     setIsDragging(false);
    
// // //     const threshold = 50;
// // //     if (translateX > threshold && currentSection > 0) {
// // //       setCurrentSection(currentSection - 1);
// // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // //       setCurrentSection(currentSection + 1);
// // //     }
// // //     setTranslateX(0);
// // //   };

// // //   // Add mouse event listeners
// // //   useEffect(() => {
// // //     if (isDragging && window.innerWidth >= 1024) {
// // //       document.addEventListener('mousemove', handleMouseMove);
// // //       document.addEventListener('mouseup', handleMouseUp);
      
// // //       return () => {
// // //         document.removeEventListener('mousemove', handleMouseMove);
// // //         document.removeEventListener('mouseup', handleMouseUp);
// // //       };
// // //     }
// // //   }, [isDragging, startX]);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
// // //             About Me
// // //           </h1>
// // //         </div>

// // //         {/* Mobile View: Single Swipeable Box */}
// // //         <div className="lg:hidden w-full">
// // //           {/* Mobile Header with Navigation Dots */}
// // //           <Card className="mb-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 w-full max-w-full">
// // //             <CardHeader className="text-center pb-4">
// // //               <div className="flex items-center justify-center mb-3">
// // //                 {(() => {
// // //                   const Icon = sections[currentSection].icon;
// // //                   return <Icon className="w-10 h-10 text-primary" />;
// // //                 })()}
// // //               </div>
// // //               <CardTitle className="text-2xl font-bold text-primary">
// // //                 {sections[currentSection].title}
// // //               </CardTitle>
// // //               <div className="flex justify-center gap-2 mt-4">
// // //                 {sections.map((_, index) => (
// // //   <button
// // //     key={index}
// // //     onClick={() => setCurrentSection(index)}
// // //     className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-1 dark:focus:ring-1 ${
// // //       index === currentSection ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // //     }`}
// // //   />
// // // ))}
// // //               </div>
// // //             </CardHeader>
// // //             {/* Mobile Swipeable Content */}
// // //             <CardContent
// // //               ref={cardRef}
// // //               onTouchStart={handleTouchStart}
// // //               onTouchMove={handleTouchMove}
// // //               onTouchEnd={handleTouchEnd}
// // //               className="relative overflow-hidden touch-pan-y active:cursor-grabbing active:scale-[0.98] transition-transform hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // //               style={{
// // //                 transform: `translateX(${translateX}px)`,
// // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // //               }}
// // //             >
// // //               {sections[currentSection].content}
// // //             </CardContent>
// // //             {/* Mobile swipe hint */}
// // //             <div className="text-center pb-4 text-sm text-gray-500 dark:text-gray-400">
// // //               Swipe to navigate
// // //             </div>
// // //           </Card>
// // //         </div>

// // //         {/* Desktop View: Single Swipeable Box with Navigation */}
// // //         <div className="hidden lg:block">
// // //           <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 select-none">
// // //             {/* Desktop Navigation Arrows */}
// // //             <CardHeader className="relative pb-6">
// // //               <div className="flex items-center justify-between gap-4">
// // //                 <Button
// // //                   variant="ghost"
// // //                   size="icon"
// // //                   onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // //                   disabled={currentSection === 0}
// // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // //                 >
// // //                   <ChevronLeft className="w-6 h-6" />
// // //                 </Button>
                
// // //                 {/* Desktop: Show title with arrows */}
// // //                 <div className="flex-1 text-center">
// // //                   <CardTitle className="text-3xl font-bold text-primary mb-4">
// // //                     {sections[currentSection].title}
// // //                   </CardTitle>
// // //                   <div className="flex justify-center gap-2">
// // //                     {sections.map((_, index) => (
// // //                       <button
// // //                         key={index}
// // //                         onClick={() => setCurrentSection(index)}
// // //                         className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
// // //                           index === currentSection 
// // //                             ? 'w-12 bg-primary' 
// // //                             : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // //                         }`}
// // //                       />
// // //                     ))}
// // //                   </div>
// // //                 </div>
                
// // //                 <Button
// // //                   variant="ghost"
// // //                   size="icon"
// // //                   onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // //                   disabled={currentSection === sections.length - 1}
// // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // //                 >
// // //                   <ChevronRight className="w-6 h-6" />
// // //                 </Button>
// // //               </div>
// // //             </CardHeader>
            
// // //             <CardContent
// // //               ref={cardRef}
// // //               onMouseDown={handleMouseDown}
// // //               className="relative overflow-hidden cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // //               style={{
// // //                 transform: `translateX(${translateX}px)`,
// // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // //               }}
// // //             >
// // //               {sections[currentSection].content}
// // //             </CardContent>
// // //           </Card>
// // //         </div>

// // //         {/* Skills & Proficiency Section */}
// // //         <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // //             Skills & Proficiency
// // //           </h2>
          
// // //           {/* First Row: Languages & Frameworks */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500`}>
// // //               <CardHeader className="pb-3">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className={`p-2 rounded-lg bg-blue-500/10 text-blue-700`}>
// // //                     <Code className="w-5 h-5" />
// // //                   </div>
// // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // //                 </div>
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <div className="flex flex-wrap gap-2">
// // //                   {skills.languages.map((skill, skillIndex) => (
// // //                     <Badge 
// // //                       key={skillIndex} 
// // //                       variant="secondary" 
// // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // //                     >
// // //                       <span className="mr-2">{skill.icon}</span>
// // //                       {skill.name}
// // //                     </Badge>
// // //                   ))}
// // //                 </div>
// // //               </CardContent>
// // //             </Card>

// // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500`}>
// // //               <CardHeader className="pb-3">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className={`p-2 rounded-lg bg-green-500/10 text-green-700`}>
// // //                     <Globe className="w-5 h-5" />
// // //                   </div>
// // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // //                 </div>
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <div className="flex flex-wrap gap-2">
// // //                   {skills.frameworks.map((skill, skillIndex) => (
// // //                     <Badge 
// // //                       key={skillIndex} 
// // //                       variant="secondary" 
// // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // //                     >
// // //                       <span className="mr-2">{skill.icon}</span>
// // //                       {skill.name}
// // //                     </Badge>
// // //                   ))}
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           </div>

// // //           {/* Second Row: Databases & Development Tools */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-purple-500`}>
// // //               <CardHeader className="pb-3">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className={`p-2 rounded-lg bg-purple-500/10 text-purple-700`}>
// // //                     <Database className="w-5 h-5" />
// // //                   </div>
// // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // //                 </div>
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <div className="flex flex-wrap gap-2">
// // //                   {skills.databases.map((skill, skillIndex) => (
// // //                     <Badge 
// // //                       key={skillIndex} 
// // //                       variant="secondary" 
// // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // //                     >
// // //                       <span className="mr-2">{skill.icon}</span>
// // //                       {skill.name}
// // //                     </Badge>
// // //                   ))}
// // //                 </div>
// // //               </CardContent>
// // //             </Card>

// // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-orange-500`}>
// // //               <CardHeader className="pb-3">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className={`p-2 rounded-lg bg-orange-500/10 text-orange-700`}>
// // //                     <Wrench className="w-5 h-5" />
// // //                   </div>
// // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // //                 </div>
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <div className="flex flex-wrap gap-2">
// // //                   {skills.tools.map((skill, skillIndex) => (
// // //                     <Badge 
// // //                       key={skillIndex} 
// // //                       variant="secondary" 
// // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // //                     >
// // //                       <span className="mr-2">{skill.icon}</span>
// // //                       {skill.name}
// // //                     </Badge>
// // //                   ))}
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           </div>

// // //           {/* Third Row: Team Leadership & API Testing */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // //             {additionalSkills.map((category, index) => (
// // //               <Card 
// // //                 key={index} 
// // //                 className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 ${
// // //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// // //                 }`}
// // //               >
// // //                 <CardHeader className="pb-3">
// // //                   <div className="flex items-center gap-3">
// // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // //                       {(() => {
// // //                         const Icon = category.displayIcon;
// // //                         return <Icon className="w-5 h-5" />;
// // //                       })()}
// // //                     </div>
// // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // //                   </div>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <div className="space-y-2">
// // //                     {category.items.map((skill, skillIndex) => (
// // //                       <div 
// // //                         key={skillIndex} 
// // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // //                       >
// // //                         {(() => {
// // //                           const SkillIcon = skill.icon;
// // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // //                         })()}
// // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default About;
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star } from "lucide-react";
// // import { useState, useEffect, useRef } from "react";

// // const About = () => {
// //   const [currentSection, setCurrentSection] = useState(0);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [startX, setStartX] = useState(0);
// //   const [translateX, setTranslateX] = useState(0);
// //   const cardRef = useRef(null);

// //   useEffect(() => {
// //     // Trigger animations after component mounts
// //     const timer = setTimeout(() => {
// //       setIsVisible(true);
// //     }, 100);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   const sections = [
// //     {
// //       title: "Professional Summary",
// //       icon: User,
// //       content: (
// //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// //           {/* Mobile and Tablet version (sm and md screens) */}
// //           <p className="lg:hidden text-gray-700 dark:text-gray-300">
// //             Web Developer with 6 months of experience at Webgeon Results, skilled in React, Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful digital experiences, and building responsive, user-centric solutions. Focused on performance, accessibility, and modern web standards to deliver scalable, maintainable, and future-ready applications.
// //           </p>
          
// //           {/* Desktop version (lg screens and above) */}
// //           <div className="hidden lg:block space-y-4">
// //             <p className="text-gray-700 dark:text-gray-300">
// //               Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js. Proficient in developing clean, maintainable code and delivering user-centric solutions.
// //             </p>
// //             <p className="text-gray-700 dark:text-gray-300">
// //               Strong team collaborator with a focus on performance, accessibility, and modern web standards to support scalable and efficient development.
// //             </p>
// //             <p className="text-gray-700 dark:text-gray-300">
// //               My journey in web development has been driven by a passion for problem-solving and creating meaningful digital experiences. I thrive in collaborative environments where innovation meets practical implementation, consistently delivering projects that exceed client expectations.
// //             </p>
// //             <p className="text-gray-700 dark:text-gray-300">
// //               I believe in staying current with emerging technologies and industry best practices, ensuring that every solution I develop is not only functional but also future-ready and maintainable.
// //             </p>
// //           </div>
// //         </div>
// //       )
// //     },
// //     {
// //       title: "Key Strengths",
// //       icon: Star,
// //       content: (
// //         <div className="space-y-3 text-base sm:text-lg">
// //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// //             <span className="text-gray-700 dark:text-gray-300">Decision-making skills and team leadership</span>
// //           </div>
// //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// //             <span className="text-gray-700 dark:text-gray-300">Performance optimization and accessibility focus</span>
// //           </div>
// //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// //             <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code practices</span>
// //           </div>
// //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// //             <span className="text-gray-700 dark:text-gray-300">Timely project delivery</span>
// //           </div>
// //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// //             <span className="text-gray-700 dark:text-gray-300">Continuous learning and adaptation to new technologies</span>
// //           </div>
// //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// //             <span className="text-gray-700 dark:text-gray-300">User experience optimization and responsive design</span>
// //           </div>
// //         </div>
// //       )
// //     },
// //     {
// //       title: "Development Philosophy",
// //       icon: Heart,
// //       content: (
// //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// //           <p className="text-gray-700 dark:text-gray-300">
// //             I approach every project with a user-first mindset, ensuring that technical excellence translates into intuitive and engaging user experiences. My goal is to bridge the gap between complex functionality and seamless usability.
// //           </p>
// //         </div>
// //       )
// //     }
// //   ];

// //   const skills = {
// //     languages: [
// //       { name: "Python", icon: "🐍" },
// //       { name: "JavaScript", icon: "⚡" },
// //       { name: "HTML", icon: "🌐" },
// //       { name: "CSS", icon: "🎨" }
// //     ],
// //     frameworks: [
// //       { name: "Next.js", icon: "▲" },
// //       { name: "React", icon: "⚛️" },
// //       { name: "Tailwind CSS", icon: "💨" }
// //     ],
// //     databases: [
// //       { name: "MongoDB", icon: "🍃" },
// //       { name: "MySQL", icon: "🐬" }
// //     ],
// //     tools: [
// //       { name: "VS Code", icon: "💻" },
// //       { name: "Eclipse", icon: "🌙" },
// //       { name: "Postman", icon: "📮" }
// //     ]
// //   };

// //   const additionalSkills = [
// //     {
// //       title: "Team Leadership",
// //       icon: Users,
// //       items: [
// //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// //       ],
// //       color: "bg-red-500/10 text-red-700",
// //       displayIcon: Target
// //     },
// //     {
// //       title: "API Testing",
// //       icon: TestTube,
// //       items: [
// //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// //       ],
// //       color: "bg-indigo-500/10 text-indigo-700",
// //       displayIcon: Server
// //     }
// //   ];

// //   // Touch event handlers
// //   const handleTouchStart = (e) => {
// //     setIsDragging(true);
// //     setStartX(e.touches[0].clientX);
// //     setTranslateX(0);
// //   };

// //   const handleTouchMove = (e) => {
// //     if (!isDragging) return;
// //     const currentX = e.touches[0].clientX;
// //     const diffX = currentX - startX;
// //     setTranslateX(diffX);
// //   };

// //   const handleTouchEnd = () => {
// //     if (!isDragging) return;
// //     setIsDragging(false);
    
// //     const threshold = 50;
// //     if (translateX > threshold && currentSection > 0) {
// //       setCurrentSection(currentSection - 1);
// //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// //       setCurrentSection(currentSection + 1);
// //     }
// //     setTranslateX(0);
// //   };

// //   // Mouse event handlers for desktop
// //   const handleMouseDown = (e) => {
// //     if (window.innerWidth < 1024) return; // Only enable on desktop
// //     setIsDragging(true);
// //     setStartX(e.clientX);
// //     setTranslateX(0);
// //     e.preventDefault();
// //   };

// //   const handleMouseMove = (e) => {
// //     if (!isDragging || window.innerWidth < 1024) return;
// //     const currentX = e.clientX;
// //     const diffX = currentX - startX;
// //     setTranslateX(diffX);
// //   };

// //   const handleMouseUp = () => {
// //     if (!isDragging || window.innerWidth < 1024) return;
// //     setIsDragging(false);
    
// //     const threshold = 50;
// //     if (translateX > threshold && currentSection > 0) {
// //       setCurrentSection(currentSection - 1);
// //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// //       setCurrentSection(currentSection + 1);
// //     }
// //     setTranslateX(0);
// //   };

// //   // Add mouse event listeners
// //   useEffect(() => {
// //     if (isDragging && window.innerWidth >= 1024) {
// //       document.addEventListener('mousemove', handleMouseMove);
// //       document.addEventListener('mouseup', handleMouseUp);
      
// //       return () => {
// //         document.removeEventListener('mousemove', handleMouseMove);
// //         document.removeEventListener('mouseup', handleMouseUp);
// //       };
// //     }
// //   }, [isDragging, startX]);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
// //             About Me
// //           </h1>
// //         </div>

// //         {/* Mobile View: Single Swipeable Box */}
// //         <div className="lg:hidden w-full">
// //           {/* Mobile Header with Navigation Dots */}
// //           <Card className="mb-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 w-full max-w-full">
// //             <CardHeader className="text-center pb-4">
// //               <div className="flex items-center justify-center mb-3">
// //                 {(() => {
// //                   const Icon = sections[currentSection].icon;
// //                   return <Icon className="w-10 h-10 text-primary" />;
// //                 })()}
// //               </div>
// //               <CardTitle className="text-2xl font-bold text-primary">
// //                 {sections[currentSection].title}
// //               </CardTitle>
// //               <div className="flex justify-center gap-2 mt-4">
// //                 {sections.map((_, index) => (
// //                   <button
// //                     key={index}
// //                     onClick={() => setCurrentSection(index)}
// //                     className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-black ${
// //                       index === currentSection ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// //                     }`}
// //                   />
// //                 ))}
// //               </div>
// //             </CardHeader>
// //             {/* Mobile Swipeable Content */}
// //             <CardContent
// //               ref={cardRef}
// //               onTouchStart={handleTouchStart}
// //               onTouchMove={handleTouchMove}
// //               onTouchEnd={handleTouchEnd}
// //               className="relative overflow-hidden touch-pan-y active:cursor-grabbing active:scale-[0.98] transition-transform hover:bg-gray-50 dark:hover:bg-gray-800/50"
// //               style={{
// //                 transform: `translateX(${translateX}px)`,
// //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// //               }}
// //             >
// //               {sections[currentSection].content}
// //             </CardContent>
// //             {/* Mobile swipe hint */}
// //             <div className="text-center pb-4 text-sm text-gray-500 dark:text-gray-400">
// //               Swipe to navigate
// //             </div>
// //           </Card>
// //         </div>

// //         {/* Desktop View: Single Swipeable Box with Navigation */}
// //         <div className="hidden lg:block">
// //           <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 select-none">
// //             {/* Desktop Navigation Arrows */}
// //             <CardHeader className="relative pb-6">
// //               <div className="flex items-center justify-between gap-4">
// //                 <Button
// //                   variant="ghost"
// //                   size="icon"
// //                   onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// //                   disabled={currentSection === 0}
// //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// //                 >
// //                   <ChevronLeft className="w-6 h-6" />
// //                 </Button>
                
// //                 {/* Desktop: Show title with arrows */}
// //                 <div className="flex-1 text-center">
// //                   <CardTitle className="text-3xl font-bold text-primary mb-4">
// //                     {sections[currentSection].title}
// //                   </CardTitle>
// //                   <div className="flex justify-center gap-2">
// //                     {sections.map((_, index) => (
// //                       <button
// //                         key={index}
// //                         onClick={() => setCurrentSection(index)}
// //                         className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-black ${
// //                           index === currentSection 
// //                             ? 'w-12 bg-primary' 
// //                             : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// //                         }`}
// //                       />
// //                     ))}
// //                   </div>
// //                 </div>
                
// //                 <Button
// //                   variant="ghost"
// //                   size="icon"
// //                   onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// //                   disabled={currentSection === sections.length - 1}
// //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// //                 >
// //                   <ChevronRight className="w-6 h-6" />
// //                 </Button>
// //               </div>
// //             </CardHeader>
            
// //             <CardContent
// //               ref={cardRef}
// //               onMouseDown={handleMouseDown}
// //               className="relative overflow-hidden cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
// //               style={{
// //                 transform: `translateX(${translateX}px)`,
// //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// //               }}
// //             >
// //               {sections[currentSection].content}
// //             </CardContent>
// //           </Card>
// //         </div>

// //         {/* Skills & Proficiency Section */}
// //         <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// //             Skills & Proficiency
// //           </h2>
          
// //           {/* First Row: Languages & Frameworks */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500`}>
// //               <CardHeader className="pb-3">
// //                 <div className="flex items-center gap-3">
// //                   <div className={`p-2 rounded-lg bg-blue-500/10 text-blue-700`}>
// //                     <Code className="w-5 h-5" />
// //                   </div>
// //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// //                 </div>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="flex flex-wrap gap-2">
// //                   {skills.languages.map((skill, skillIndex) => (
// //                     <Badge 
// //                       key={skillIndex} 
// //                       variant="secondary" 
// //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// //                     >
// //                       <span className="mr-2">{skill.icon}</span>
// //                       {skill.name}
// //                     </Badge>
// //                   ))}
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500`}>
// //               <CardHeader className="pb-3">
// //                 <div className="flex items-center gap-3">
// //                   <div className={`p-2 rounded-lg bg-green-500/10 text-green-700`}>
// //                     <Globe className="w-5 h-5" />
// //                   </div>
// //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// //                 </div>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="flex flex-wrap gap-2">
// //                   {skills.frameworks.map((skill, skillIndex) => (
// //                     <Badge 
// //                       key={skillIndex} 
// //                       variant="secondary" 
// //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// //                     >
// //                       <span className="mr-2">{skill.icon}</span>
// //                       {skill.name}
// //                     </Badge>
// //                   ))}
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Second Row: Databases & Development Tools */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-purple-500`}>
// //               <CardHeader className="pb-3">
// //                 <div className="flex items-center gap-3">
// //                   <div className={`p-2 rounded-lg bg-purple-500/10 text-purple-700`}>
// //                     <Database className="w-5 h-5" />
// //                   </div>
// //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// //                 </div>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="flex flex-wrap gap-2">
// //                   {skills.databases.map((skill, skillIndex) => (
// //                     <Badge 
// //                       key={skillIndex} 
// //                       variant="secondary" 
// //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// //                     >
// //                       <span className="mr-2">{skill.icon}</span>
// //                       {skill.name}
// //                     </Badge>
// //                   ))}
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-orange-500`}>
// //               <CardHeader className="pb-3">
// //                 <div className="flex items-center gap-3">
// //                   <div className={`p-2 rounded-lg bg-orange-500/10 text-orange-700`}>
// //                     <Wrench className="w-5 h-5" />
// //                   </div>
// //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// //                 </div>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="flex flex-wrap gap-2">
// //                   {skills.tools.map((skill, skillIndex) => (
// //                     <Badge 
// //                       key={skillIndex} 
// //                       variant="secondary" 
// //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// //                     >
// //                       <span className="mr-2">{skill.icon}</span>
// //                       {skill.name}
// //                     </Badge>
// //                   ))}
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Third Row: Team Leadership & API Testing */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// //             {additionalSkills.map((category, index) => (
// //               <Card 
// //                 key={index} 
// //                 className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 ${
// //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// //                 }`}
// //               >
// //                 <CardHeader className="pb-3">
// //                   <div className="flex items-center gap-3">
// //                     <div className={`p-2 rounded-lg ${category.color}`}>
// //                       {(() => {
// //                         const Icon = category.displayIcon;
// //                         return <Icon className="w-5 h-5" />;
// //                       })()}
// //                     </div>
// //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// //                   </div>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="space-y-2">
// //                     {category.items.map((skill, skillIndex) => (
// //                       <div 
// //                         key={skillIndex} 
// //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// //                       >
// //                         {(() => {
// //                           const SkillIcon = skill.icon;
// //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// //                         })()}
// //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default About;
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star } from "lucide-react";
// import { useState, useEffect, useRef } from "react";

// const About = () => {
//   const [currentSection, setCurrentSection] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [translateX, setTranslateX] = useState(0);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     // Trigger animations after component mounts
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   const sections = [
//     {
//       title: "Professional Summary",
//       icon: User,
//       content: (
//         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
//           {/* Mobile and Tablet version (sm and md screens) */}
//           <p className="lg:hidden text-gray-700 dark:text-gray-300">
//             Web Developer with 6 months of experience at Webgeon Results, skilled in React, Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful digital experiences, and building responsive, user-centric solutions. Focused on performance, accessibility, and modern web standards to deliver scalable, maintainable, and future-ready applications.
//           </p>
          
//           {/* Desktop version (lg screens and above) */}
//           <div className="hidden lg:block space-y-4">
//             <p className="text-gray-700 dark:text-gray-300">
//               Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js. Proficient in developing clean, maintainable code and delivering user-centric solutions.
//             </p>
//             <p className="text-gray-700 dark:text-gray-300">
//               Strong team collaborator with a focus on performance, accessibility, and modern web standards to support scalable and efficient development.
//             </p>
//             <p className="text-gray-700 dark:text-gray-300">
//               My journey in web development has been driven by a passion for problem-solving and creating meaningful digital experiences. I thrive in collaborative environments where innovation meets practical implementation, consistently delivering projects that exceed client expectations.
//             </p>
//             <p className="text-gray-700 dark:text-gray-300">
//               I believe in staying current with emerging technologies and industry best practices, ensuring that every solution I develop is not only functional but also future-ready and maintainable.
//             </p>
//           </div>
//         </div>
//       )
//     },
//     {
//       title: "Key Strengths",
//       icon: Star,
//       content: (
//         <div className="space-y-3 text-base sm:text-lg">
//           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
//             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
//             <span className="text-gray-700 dark:text-gray-300">Decision-making skills and team leadership</span>
//           </div>
//           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
//             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
//             <span className="text-gray-700 dark:text-gray-300">Performance optimization and accessibility focus</span>
//           </div>
//           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
//             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
//             <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code practices</span>
//           </div>
//           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
//             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
//             <span className="text-gray-700 dark:text-gray-300">Timely project delivery</span>
//           </div>
//           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
//             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
//             <span className="text-gray-700 dark:text-gray-300">Continuous learning and adaptation to new technologies</span>
//           </div>
//           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
//             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
//             <span className="text-gray-700 dark:text-gray-300">User experience optimization and responsive design</span>
//           </div>
//         </div>
//       )
//     },
//     {
//       title: "Development Philosophy",
//       icon: Heart,
//       content: (
//         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
//           <p className="text-gray-700 dark:text-gray-300">
//             I approach every project with a user-first mindset, ensuring that technical excellence translates into intuitive and engaging user experiences. My goal is to bridge the gap between complex functionality and seamless usability.
//           </p>
//         </div>
//       )
//     }
//   ];

//   const skills = {
//     languages: [
//       { name: "Python", icon: "🐍" },
//       { name: "JavaScript", icon: "⚡" },
//       { name: "HTML", icon: "🌐" },
//       { name: "CSS", icon: "🎨" }
//     ],
//     frameworks: [
//       { name: "Next.js", icon: "▲" },
//       { name: "React", icon: "⚛️" },
//       { name: "Tailwind CSS", icon: "💨" }
//     ],
//     databases: [
//       { name: "MongoDB", icon: "🍃" },
//       { name: "MySQL", icon: "🐬" }
//     ],
//     tools: [
//       { name: "VS Code", icon: "💻" },
//       { name: "Eclipse", icon: "🌙" },
//       { name: "Postman", icon: "📮" }
//     ]
//   };

//   const additionalSkills = [
//     {
//       title: "Team Leadership",
//       icon: Users,
//       items: [
//         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
//         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
//       ],
//       color: "bg-red-500/10 text-red-700",
//       displayIcon: Target
//     },
//     {
//       title: "API Testing",
//       icon: TestTube,
//       items: [
//         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
//         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
//       ],
//       color: "bg-indigo-500/10 text-indigo-700",
//       displayIcon: Server
//     }
//   ];

//   // Touch event handlers
//   const handleTouchStart = (e) => {
//     setIsDragging(true);
//     setStartX(e.touches[0].clientX);
//     setTranslateX(0);
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;
//     const currentX = e.touches[0].clientX;
//     const diffX = currentX - startX;
//     setTranslateX(diffX);
//   };

//   const handleTouchEnd = () => {
//     if (!isDragging) return;
//     setIsDragging(false);
    
//     const threshold = 50;
//     if (translateX > threshold && currentSection > 0) {
//       setCurrentSection(currentSection - 1);
//     } else if (translateX < -threshold && currentSection < sections.length - 1) {
//       setCurrentSection(currentSection + 1);
//     }
//     setTranslateX(0);
//   };

//   // Mouse event handlers for desktop
//   const handleMouseDown = (e) => {
//     if (window.innerWidth < 1024) return; // Only enable on desktop
//     setIsDragging(true);
//     setStartX(e.clientX);
//     setTranslateX(0);
//     e.preventDefault();
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging || window.innerWidth < 1024) return;
//     const currentX = e.clientX;
//     const diffX = currentX - startX;
//     setTranslateX(diffX);
//   };

//   const handleMouseUp = () => {
//     if (!isDragging || window.innerWidth < 1024) return;
//     setIsDragging(false);
    
//     const threshold = 50;
//     if (translateX > threshold && currentSection > 0) {
//       setCurrentSection(currentSection - 1);
//     } else if (translateX < -threshold && currentSection < sections.length - 1) {
//       setCurrentSection(currentSection + 1);
//     }
//     setTranslateX(0);
//   };

//   // Add mouse event listeners
//   useEffect(() => {
//     if (isDragging && window.innerWidth >= 1024) {
//       document.addEventListener('mousemove', handleMouseMove);
//       document.addEventListener('mouseup', handleMouseUp);
      
//       return () => {
//         document.removeEventListener('mousemove', handleMouseMove);
//         document.removeEventListener('mouseup', handleMouseUp);
//       };
//     }
//   }, [isDragging, startX]);

//   return (
//     <div id="about" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
//         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
//           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             About Me
//           </h1>
//         </div>

//         {/* Mobile View: Single Swipeable Box */}
//         <div className="lg:hidden w-full">
//           {/* Mobile Header with Navigation Dots */}
//           <Card className="mb-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 w-full max-w-full">
//             <CardHeader className="text-center pb-4">
//               <div className="flex items-center justify-center mb-3">
//                 {(() => {
//                   const Icon = sections[currentSection].icon;
//                   return <Icon className="w-10 h-10 text-primary" />;
//                 })()}
//               </div>
//               <CardTitle className="text-2xl font-bold text-primary">
//                 {sections[currentSection].title}
//               </CardTitle>
//               <div className="flex justify-center gap-2 mt-4">
//                 {sections.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSection(index)}
//                     className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-2 dark:focus:ring-black ${
//                       index === currentSection ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </CardHeader>
//             {/* Mobile Swipeable Content */}
//             <CardContent
//               ref={cardRef}
//               onTouchStart={handleTouchStart}
//               onTouchMove={handleTouchMove}
//               onTouchEnd={handleTouchEnd}
//               className="relative overflow-hidden touch-pan-y active:cursor-grabbing active:scale-[0.98] transition-transform hover:bg-gray-50 dark:hover:bg-gray-800/50"
//               style={{
//                 transform: `translateX(${translateX}px)`,
//                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
//               }}
//             >
//               {sections[currentSection].content}
//             </CardContent>
//             {/* Mobile swipe hint */}
//             <div className="text-center pb-4 text-sm text-gray-500 dark:text-gray-400">
//               Swipe to navigate
//             </div>
//           </Card>
//         </div>

//         {/* Desktop View: Single Swipeable Box with Navigation */}
//         <div className="hidden lg:block">
//           <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 select-none">
//             {/* Desktop Navigation Arrows */}
//             <CardHeader className="relative pb-6">
//               <div className="flex items-center justify-between gap-4">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
//                   disabled={currentSection === 0}
//                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
//                 >
//                   <ChevronLeft className="w-6 h-6" />
//                 </Button>
                
//                 {/* Desktop: Show title with arrows */}
//                 <div className="flex-1 text-center">
//                   <CardTitle className="text-3xl font-bold text-primary mb-4">
//                     {sections[currentSection].title}
//                   </CardTitle>
//                   <div className="flex justify-center gap-2">
//                     {sections.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setCurrentSection(index)}
//                         className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-2 dark:focus:ring-black ${
//                           index === currentSection 
//                             ? 'w-12 bg-primary' 
//                             : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
                
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
//                   disabled={currentSection === sections.length - 1}
//                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
//                 >
//                   <ChevronRight className="w-6 h-6" />
//                 </Button>
//               </div>
//             </CardHeader>
            
//             <CardContent
//               ref={cardRef}
//               onMouseDown={handleMouseDown}
//               className="relative overflow-hidden cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
//               style={{
//                 transform: `translateX(${translateX}px)`,
//                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
//               }}
//             >
//               {sections[currentSection].content}
//             </CardContent>
//           </Card>
//         </div>

//         {/* Skills & Proficiency Section */}
//         <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Skills & Proficiency
//           </h2>
          
//           {/* First Row: Languages & Frameworks */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500`}>
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-3">
//                   <div className={`p-2 rounded-lg bg-blue-500/10 text-blue-700`}>
//                     <Code className="w-5 h-5" />
//                   </div>
//                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {skills.languages.map((skill, skillIndex) => (
//                     <Badge 
//                       key={skillIndex} 
//                       variant="secondary" 
//                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
//                     >
//                       <span className="mr-2">{skill.icon}</span>
//                       {skill.name}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500`}>
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-3">
//                   <div className={`p-2 rounded-lg bg-green-500/10 text-green-700`}>
//                     <Globe className="w-5 h-5" />
//                   </div>
//                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {skills.frameworks.map((skill, skillIndex) => (
//                     <Badge 
//                       key={skillIndex} 
//                       variant="secondary" 
//                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
//                     >
//                       <span className="mr-2">{skill.icon}</span>
//                       {skill.name}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Second Row: Databases & Development Tools */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-purple-500`}>
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-3">
//                   <div className={`p-2 rounded-lg bg-purple-500/10 text-purple-700`}>
//                     <Database className="w-5 h-5" />
//                   </div>
//                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {skills.databases.map((skill, skillIndex) => (
//                     <Badge 
//                       key={skillIndex} 
//                       variant="secondary" 
//                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
//                     >
//                       <span className="mr-2">{skill.icon}</span>
//                       {skill.name}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-orange-500`}>
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-3">
//                   <div className={`p-2 rounded-lg bg-orange-500/10 text-orange-700`}>
//                     <Wrench className="w-5 h-5" />
//                   </div>
//                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {skills.tools.map((skill, skillIndex) => (
//                     <Badge 
//                       key={skillIndex} 
//                       variant="secondary" 
//                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
//                     >
//                       <span className="mr-2">{skill.icon}</span>
//                       {skill.name}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Third Row: Team Leadership & API Testing */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//             {additionalSkills.map((category, index) => (
//               <Card 
//                 key={index} 
//                 className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 ${
//                   index === 0 ? 'border-red-500' : 'border-indigo-500'
//                 }`}
//               >
//                 <CardHeader className="pb-3">
//                   <div className="flex items-center gap-3">
//                     <div className={`p-2 rounded-lg ${category.color}`}>
//                       {(() => {
//                         const Icon = category.displayIcon;
//                         return <Icon className="w-5 h-5" />;
//                       })()}
//                     </div>
//                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-2">
//                     {category.items.map((skill, skillIndex) => (
//                       <div 
//                         key={skillIndex} 
//                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
//                       >
//                         {(() => {
//                           const SkillIcon = skill.icon;
//                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
//                         })()}
//                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  // Intersection Observer for main section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Intersection Observer for skills section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          } else {
            setSkillsVisible(false);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px"
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const sections = [
    {
      title: "Professional Summary",
      icon: User,
      content: (
        <div className="space-y-4 text-base sm:text-lg leading-relaxed">
          {/* Mobile and Tablet version (sm and md screens) */}
          <p className="lg:hidden text-gray-700 dark:text-gray-300">
            Web Developer with 6 months of experience at Webgeon Results, skilled in React, Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful digital experiences, and building responsive, user-centric solutions. Focused on performance, accessibility, and modern web standards to deliver scalable, maintainable, and future-ready applications.
          </p>
          
          {/* Desktop version (lg screens and above) */}
          <div className="hidden lg:block space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js. Proficient in developing clean, maintainable code and delivering user-centric solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Strong team collaborator with a focus on performance, accessibility, and modern web standards to support scalable and efficient development.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              My journey in web development has been driven by a passion for problem-solving and creating meaningful digital experiences. I thrive in collaborative environments where innovation meets practical implementation, consistently delivering projects that exceed client expectations.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I believe in staying current with emerging technologies and industry best practices, ensuring that every solution I develop is not only functional but also future-ready and maintainable.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Key Strengths",
      icon: Star,
      content: (
        <div className="space-y-3 text-base sm:text-lg">
          <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-gray-700 dark:text-gray-300">Decision-making skills and team leadership</span>
          </div>
          <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-gray-700 dark:text-gray-300">Performance optimization and accessibility focus</span>
          </div>
          <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code practices</span>
          </div>
          <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-gray-700 dark:text-gray-300">Timely project delivery</span>
          </div>
          <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-gray-700 dark:text-gray-300">Continuous learning and adaptation to new technologies</span>
          </div>
          <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-gray-700 dark:text-gray-300">User experience optimization and responsive design</span>
          </div>
        </div>
      )
    },
    {
      title: "Development Philosophy",
      icon: Heart,
      content: (
        <div className="space-y-4 text-base sm:text-lg leading-relaxed">
          <p className="text-gray-700 dark:text-gray-300">
            I approach every project with a user-first mindset, ensuring that technical excellence translates into intuitive and engaging user experiences. My goal is to bridge the gap between complex functionality and seamless usability.
          </p>
        </div>
      )
    }
  ];

  const skills = {
    languages: [
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "⚡" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" }
    ],
    frameworks: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "💨" }
    ],
    databases: [
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" }
    ],
    tools: [
      { name: "VS Code", icon: "💻" },
      { name: "Eclipse", icon: "🌙" },
      { name: "Postman", icon: "📮" }
    ]
  };

  const additionalSkills = [
    {
      title: "Team Leadership",
      icon: Users,
      items: [
        { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
        { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
      ],
      color: "bg-red-500/10 text-red-700",
      displayIcon: Target
    },
    {
      title: "API Testing",
      icon: TestTube,
      items: [
        { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
        { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
      ],
      color: "bg-indigo-500/10 text-indigo-700",
      displayIcon: Server
    }
  ];

  // Touch event handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setTranslateX(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    setTranslateX(diffX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (translateX > threshold && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else if (translateX < -threshold && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
    setTranslateX(0);
  };

  // Mouse event handlers for desktop
  const handleMouseDown = (e) => {
    if (window.innerWidth < 1024) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setTranslateX(0);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || window.innerWidth < 1024) return;
    const currentX = e.clientX;
    const diffX = currentX - startX;
    setTranslateX(diffX);
  };

  const handleMouseUp = () => {
    if (!isDragging || window.innerWidth < 1024) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (translateX > threshold && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else if (translateX < -threshold && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
    setTranslateX(0);
  };

  // Add mouse event listeners
  useEffect(() => {
    if (isDragging && window.innerWidth >= 1024) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startX]);

  return (
    <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Header with fade in */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
        </div>

        {/* Mobile View: Single Swipeable Box with fade in */}
        <div className={`lg:hidden w-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="mb-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 w-full max-w-full">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-3">
                {(() => {
                  const Icon = sections[currentSection].icon;
                  return <Icon className="w-10 h-10 text-primary" />;
                })()}
              </div>
              <CardTitle className="text-2xl font-bold text-primary">
                {sections[currentSection].title}
              </CardTitle>
              <div className="flex justify-center gap-2 mt-4">
                {sections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-2 dark:focus:ring-black ${
                      index === currentSection ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent
              ref={cardRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative overflow-hidden touch-pan-y active:cursor-grabbing active:scale-[0.98] transition-transform hover:bg-gray-50 dark:hover:bg-gray-800/50"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              {sections[currentSection].content}
            </CardContent>
            <div className="text-center pb-4 text-sm text-gray-500 dark:text-gray-400">
              Swipe to navigate
            </div>
          </Card>
        </div>

        {/* Desktop View: Single Swipeable Box with Navigation and fade in */}
        <div className={`hidden lg:block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 select-none">
            <CardHeader className="relative pb-6">
              <div className="flex items-center justify-between gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  disabled={currentSection === 0}
                  className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                
                <div className="flex-1 text-center">
                  <CardTitle className="text-3xl font-bold text-primary mb-4">
                    {sections[currentSection].title}
                  </CardTitle>
                  <div className="flex justify-center gap-2">
                    {sections.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSection(index)}
                        className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-2 dark:focus:ring-black ${
                          index === currentSection 
                            ? 'w-12 bg-primary' 
                            : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                  disabled={currentSection === sections.length - 1}
                  className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent
              ref={cardRef}
              onMouseDown={handleMouseDown}
              className="relative overflow-hidden cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              {sections[currentSection].content}
            </CardContent>
          </Card>
        </div>

        {/* Skills & Proficiency Section with fade in */}
        <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Proficiency
          </h2>
          
          {/* First Row: Languages & Frameworks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-blue-500/10 text-blue-700`}>
                    <Code className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-green-500/10 text-green-700`}>
                    <Globe className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row: Databases & Development Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-purple-500/10 text-purple-700`}>
                    <Database className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-orange-500/10 text-orange-700`}>
                    <Wrench className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Third Row: Team Leadership & API Testing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {additionalSkills.map((category, index) => (
              <Card 
                key={index} 
                className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
                  index === 0 ? 'border-red-500' : 'border-indigo-500'
                } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay: `${500 + index * 100}ms`}}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      {(() => {
                        const Icon = category.displayIcon;
                        return <Icon className="w-5 h-5" />;
                      })()}
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.items.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
                      >
                        {(() => {
                          const SkillIcon = skill.icon;
                          return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
                        })()}
                        <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;