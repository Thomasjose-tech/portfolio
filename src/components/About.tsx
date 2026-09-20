
// // // // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // // // import { 
// // // // // // // // // // // // // // // //   Code, 
// // // // // // // // // // // // // // // //   Database, 
// // // // // // // // // // // // // // // //   Globe, 
// // // // // // // // // // // // // // // //   Wrench, 
// // // // // // // // // // // // // // // //   Users, 
// // // // // // // // // // // // // // // //   TestTube, 
// // // // // // // // // // // // // // // //   ChevronLeft, 
// // // // // // // // // // // // // // // //   ChevronRight,
// // // // // // // // // // // // // // // //   Target,
// // // // // // // // // // // // // // // //   CheckCircle,
// // // // // // // // // // // // // // // //   Zap,
// // // // // // // // // // // // // // // //   Server,
// // // // // // // // // // // // // // // //   Monitor,
// // // // // // // // // // // // // // // //   Brain,
// // // // // // // // // // // // // // // //   Clock,
// // // // // // // // // // // // // // // //   Send,
// // // // // // // // // // // // // // // //   Shield
// // // // // // // // // // // // // // // // } from "lucide-react";
// // // // // // // // // // // // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // // // // // // // // // // // const About = () => {
// // // // // // // // // // // // // // // //   const [currentSection, setCurrentSection] = useState(0);
// // // // // // // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // // // // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // // // // // // // // // // // // //   const [startX, setStartX] = useState(0);
// // // // // // // // // // // // // // // //   const [translateX, setTranslateX] = useState(0);
// // // // // // // // // // // // // // // //   const cardRef = useRef(null);
  
// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     // Trigger animations after component mounts
// // // // // // // // // // // // // // // //     const timer = setTimeout(() => {
// // // // // // // // // // // // // // // //       setIsVisible(true);
// // // // // // // // // // // // // // // //     }, 100);
    
// // // // // // // // // // // // // // // //     return () => clearTimeout(timer);
// // // // // // // // // // // // // // // //   }, []);
  
// // // // // // // // // // // // // // // //   const sections = [
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Professional Summary",
// // // // // // // // // // // // // // // //       content: (
// // // // // // // // // // // // // // // //         <div className="space-y-4">
// // // // // // // // // // // // // // // //           {/* Mobile and Tablet version (sm and md screens) */}
// // // // // // // // // // // // // // // //           <div className="block lg:hidden">
// // // // // // // // // // // // // // // //             <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
// // // // // // // // // // // // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in React, 
// // // // // // // // // // // // // // // //               Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful 
// // // // // // // // // // // // // // // //               digital experiences, and building responsive, user-centric solutions. Focused on 
// // // // // // // // // // // // // // // //               performance, accessibility, and modern web standards to deliver scalable, 
// // // // // // // // // // // // // // // //               maintainable, and future-ready applications.
// // // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // // //           </div>
          
// // // // // // // // // // // // // // // //           {/* Desktop version (lg screens and above) */}
// // // // // // // // // // // // // // // //           <div className="hidden lg:block space-y-4">
// // // // // // // // // // // // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // // // // // // // // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building 
// // // // // // // // // // // // // // // //               responsive web applications using React, Tailwind CSS, and Next.js. Proficient in 
// // // // // // // // // // // // // // // //               developing clean, maintainable code and delivering user-centric solutions.
// // // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // // // // // // // // // // // //               Strong team collaborator with a focus on performance, accessibility, and modern web 
// // // // // // // // // // // // // // // //               standards to support scalable and efficient development.
// // // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // // // // // // // // // // // //               My journey in web development has been driven by a passion for problem-solving and 
// // // // // // // // // // // // // // // //               creating meaningful digital experiences. I thrive in collaborative environments where 
// // // // // // // // // // // // // // // //               innovation meets practical implementation, consistently delivering projects that exceed 
// // // // // // // // // // // // // // // //               client expectations.
// // // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // // // // // // // // // // // //               I believe in staying current with emerging technologies and industry best practices, 
// // // // // // // // // // // // // // // //               ensuring that every solution I develop is not only functional but also future-ready 
// // // // // // // // // // // // // // // //               and maintainable.
// // // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       )
// // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Key Strengths",
// // // // // // // // // // // // // // // //       content: (
// // // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // // //           <ul className="space-y-3 text-muted-foreground">
// // // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">Decision-making skills and team leadership</span>
// // // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">Performance optimization and accessibility focus</span>
// // // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">Clean, maintainable code practices</span>
// // // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">Timely project delivery</span>
// // // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">Continuous learning and adaptation to new technologies</span>
// // // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">User experience optimization and responsive design</span>
// // // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // // //           </ul>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       )
// // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Development Philosophy",
// // // // // // // // // // // // // // // //       content: (
// // // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // // //           <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
// // // // // // // // // // // // // // // //             I approach every project with a user-first mindset, ensuring that technical excellence 
// // // // // // // // // // // // // // // //             translates into intuitive and engaging user experiences. My goal is to bridge the gap 
// // // // // // // // // // // // // // // //             between complex functionality and seamless usability.
// // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       )
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // // //   const skills = {
// // // // // // // // // // // // // // // //     languages: [
// // // // // // // // // // // // // // // //       { name: "Python", icon: "🐍" },
// // // // // // // // // // // // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // // // // // // // // // // // //       { name: "HTML", icon: "🌐" },
// // // // // // // // // // // // // // // //       { name: "CSS", icon: "🎨" }
// // // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // // //     frameworks: [
// // // // // // // // // // // // // // // //       { name: "Next.js", icon: "▲" },
// // // // // // // // // // // // // // // //       { name: "React", icon: "⚛️" },
// // // // // // // // // // // // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // // //     databases: [
// // // // // // // // // // // // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // // // // // // // // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // // //     tools: [
// // // // // // // // // // // // // // // //       { name: "VS Code", icon: "💻" },
// // // // // // // // // // // // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // // // // // // // // // // // //       { name: "Postman", icon: "📮" }
// // // // // // // // // // // // // // // //     ]
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   const additionalSkills = [
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Team Leadership",
// // // // // // // // // // // // // // // //       icon: Users,
// // // // // // // // // // // // // // // //       items: [
// // // // // // // // // // // // // // // //         { 
// // // // // // // // // // // // // // // //           name: "Decision-making skills", 
// // // // // // // // // // // // // // // //           icon: Brain, 
// // // // // // // // // // // // // // // //           iconColor: "text-purple-600",
// // // // // // // // // // // // // // // //           bgColor: "bg-purple-100 dark:bg-purple-900/20"
// // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // //         { 
// // // // // // // // // // // // // // // //           name: "Ensuring timely project delivery", 
// // // // // // // // // // // // // // // //           icon: Clock, 
// // // // // // // // // // // // // // // //           iconColor: "text-green-600",
// // // // // // // // // // // // // // // //           bgColor: "bg-green-100 dark:bg-green-900/20"
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // //       color: "bg-red-500/10 text-red-700",
// // // // // // // // // // // // // // // //       displayIcon: Target
// // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "API Testing",
// // // // // // // // // // // // // // // //       icon: TestTube,
// // // // // // // // // // // // // // // //       items: [
// // // // // // // // // // // // // // // //         { 
// // // // // // // // // // // // // // // //           name: "Postman API Testing", 
// // // // // // // // // // // // // // // //           icon: Send, 
// // // // // // // // // // // // // // // //           iconColor: "text-orange-600",
// // // // // // // // // // // // // // // //           bgColor: "bg-orange-100 dark:bg-orange-900/20"
// // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // //         { 
// // // // // // // // // // // // // // // //           name: "REST API Validation", 
// // // // // // // // // // // // // // // //           icon: Shield, 
// // // // // // // // // // // // // // // //           iconColor: "text-blue-600",
// // // // // // // // // // // // // // // //           bgColor: "bg-blue-100 dark:bg-blue-900/20"
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // // // // // // // // // // // // //       displayIcon: Server
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // // //   const skillCategories = [
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Languages & Scripting",
// // // // // // // // // // // // // // // //       icon: Code,
// // // // // // // // // // // // // // // //       items: skills.languages,
// // // // // // // // // // // // // // // //       color: "bg-blue-500/10 text-blue-700"
// // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Frameworks & Libraries",
// // // // // // // // // // // // // // // //       icon: Globe,
// // // // // // // // // // // // // // // //       items: skills.frameworks,
// // // // // // // // // // // // // // // //       color: "bg-green-500/10 text-green-700"
// // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Databases",
// // // // // // // // // // // // // // // //       icon: Database,
// // // // // // // // // // // // // // // //       items: skills.databases,
// // // // // // // // // // // // // // // //       color: "bg-purple-500/10 text-purple-700"
// // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Development Tools",
// // // // // // // // // // // // // // // //       icon: Wrench,
// // // // // // // // // // // // // // // //       items: skills.tools,
// // // // // // // // // // // // // // // //       color: "bg-orange-500/10 text-orange-700"
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // // //   // Touch event handlers
// // // // // // // // // // // // // // // //   const handleTouchStart = (e) => {
// // // // // // // // // // // // // // // //     if (window.innerWidth >= 1024) return; // Only enable on mobile/tablet
// // // // // // // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // // // // // // //     setStartX(e.touches[0].clientX);
// // // // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   const handleTouchMove = (e) => {
// // // // // // // // // // // // // // // //     if (!isDragging || window.innerWidth >= 1024) return;
    
// // // // // // // // // // // // // // // //     const currentX = e.touches[0].clientX;
// // // // // // // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   const handleTouchEnd = () => {
// // // // // // // // // // // // // // // //     if (!isDragging || window.innerWidth >= 1024) return;
    
// // // // // // // // // // // // // // // //     setIsDragging(false);
// // // // // // // // // // // // // // // //     const threshold = 50;
    
// // // // // // // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // // // // // // //     }
    
// // // // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   // Mouse event handlers for desktop
// // // // // // // // // // // // // // // //   const handleMouseDown = (e) => {
// // // // // // // // // // // // // // // //     if (window.innerWidth < 1024) return; // Only enable on desktop
// // // // // // // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // // // // // // //     setStartX(e.clientX);
// // // // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   const handleMouseMove = (e) => {
// // // // // // // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
    
// // // // // // // // // // // // // // // //     const currentX = e.clientX;
// // // // // // // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   const handleMouseUp = () => {
// // // // // // // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
    
// // // // // // // // // // // // // // // //     setIsDragging(false);
// // // // // // // // // // // // // // // //     const threshold = 50;
    
// // // // // // // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // // // // // // //     }
    
// // // // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   // Add mouse event listeners
// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     if (isDragging && window.innerWidth >= 1024) {
// // // // // // // // // // // // // // // //       document.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // // // // // //       document.addEventListener('mouseup', handleMouseUp);
      
// // // // // // // // // // // // // // // //       return () => {
// // // // // // // // // // // // // // // //         document.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // // // // // //         document.removeEventListener('mouseup', handleMouseUp);
// // // // // // // // // // // // // // // //       };
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   }, [isDragging, startX]);

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 bg-background min-h-screen">
// // // // // // // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // // // // // // //         @keyframes fadeInUp {
// // // // // // // // // // // // // // // //           from {
// // // // // // // // // // // // // // // //             opacity: 0;
// // // // // // // // // // // // // // // //             transform: translateY(30px);
// // // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // // //           to {
// // // // // // // // // // // // // // // //             opacity: 1;
// // // // // // // // // // // // // // // //             transform: translateY(0);
// // // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // // //         @keyframes slideInLeft {
// // // // // // // // // // // // // // // //           from {
// // // // // // // // // // // // // // // //             opacity: 0;
// // // // // // // // // // // // // // // //             transform: translateX(-50px);
// // // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // // //           to {
// // // // // // // // // // // // // // // //             opacity: 1;
// // // // // // // // // // // // // // // //             transform: translateX(0);
// // // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // // //         @keyframes slideInRight {
// // // // // // // // // // // // // // // //           from {
// // // // // // // // // // // // // // // //             opacity: 0;
// // // // // // // // // // // // // // // //             transform: translateX(50px);
// // // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // // //           to {
// // // // // // // // // // // // // // // //             opacity: 1;
// // // // // // // // // // // // // // // //             transform: translateX(0);
// // // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // // //         .animate-fade-up {
// // // // // // // // // // // // // // // //           animation: fadeInUp 0.8s ease-out forwards;
// // // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // // //         .animate-slide-left {
// // // // // // // // // // // // // // // //           animation: slideInLeft 0.8s ease-out forwards;
// // // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // // //         .animate-slide-right {
// // // // // // // // // // // // // // // //           animation: slideInRight 0.8s ease-out forwards;
// // // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // // //         .animate-delay-1 { animation-delay: 0.2s; }
// // // // // // // // // // // // // // // //         .animate-delay-2 { animation-delay: 0.4s; }
// // // // // // // // // // // // // // // //         .animate-delay-3 { animation-delay: 0.6s; }
// // // // // // // // // // // // // // // //         .animate-delay-4 { animation-delay: 0.8s; }
// // // // // // // // // // // // // // // //         .animate-delay-5 { animation-delay: 1.0s; }
// // // // // // // // // // // // // // // //         .animate-delay-6 { animation-delay: 1.2s; }
        
// // // // // // // // // // // // // // // //         .swipe-container {
// // // // // // // // // // // // // // // //           touch-action: pan-y pinch-zoom;
// // // // // // // // // // // // // // // //           user-select: none;
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //       `}</style>
      
// // // // // // // // // // // // // // // //       <div className="container mx-auto max-w-6xl">
// // // // // // // // // // // // // // // //         <div className={`text-center mb-12 lg:mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
// // // // // // // // // // // // // // // //           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">About Me</h2>
// // // // // // // // // // // // // // // //           <div className="h-1 w-16 sm:w-20 lg:w-24 bg-primary mx-auto mb-6 lg:mb-8" />
// // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // //         <div className={`${isVisible ? 'animate-slide-left animate-delay-1' : 'opacity-0'}`}>
// // // // // // // // // // // // // // // //           {/* Professional Summary Box with Navigation */}
// // // // // // // // // // // // // // // //           <div className="relative mb-12 lg:mb-16">
// // // // // // // // // // // // // // // //             <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 rounded-2xl lg:rounded-3xl overflow-hidden max-w-5xl mx-auto">
// // // // // // // // // // // // // // // //               <CardContent className="p-6 sm:p-8 lg:p-12">
// // // // // // // // // // // // // // // //                 <div className="flex items-center justify-between mb-6">
// // // // // // // // // // // // // // // //                   {/* Desktop Navigation Arrows */}
// // // // // // // // // // // // // // // //                   <Button
// // // // // // // // // // // // // // // //                     variant="ghost"
// // // // // // // // // // // // // // // //                     size="sm"
// // // // // // // // // // // // // // // //                     onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // // // // // // // // // // // // // //                     disabled={currentSection === 0}
// // // // // // // // // // // // // // // //                     className="hidden lg:flex text-primary hover:bg-primary/10 rounded-full p-2 sm:p-3"
// // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // //                     <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // // //                   </Button>
                  
// // // // // // // // // // // // // // // //                   {/* Mobile: Just show the content without arrows */}
// // // // // // // // // // // // // // // //                   <div className="lg:hidden w-full">
// // // // // // // // // // // // // // // //                     <div className="text-center">
// // // // // // // // // // // // // // // //                       <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">
// // // // // // // // // // // // // // // //                         {sections[currentSection].title}
// // // // // // // // // // // // // // // //                       </h3>
// // // // // // // // // // // // // // // //                       <div className="flex justify-center gap-2 mt-4">
// // // // // // // // // // // // // // // //                         {sections.map((_, index) => (
// // // // // // // // // // // // // // // //                           <div
// // // // // // // // // // // // // // // //                             key={index}
// // // // // // // // // // // // // // // //                             className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // // // // // // // // // // // // // // //                               index === currentSection ? 'bg-primary' : 'bg-primary/30'
// // // // // // // // // // // // // // // //                             }`}
// // // // // // // // // // // // // // // //                           />
// // // // // // // // // // // // // // // //                         ))}
// // // // // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                   </div>
                  
// // // // // // // // // // // // // // // //                   {/* Desktop: Show title with arrows */}
// // // // // // // // // // // // // // // //                   <div className="hidden lg:block text-center flex-1 px-2 sm:px-4">
// // // // // // // // // // // // // // // //                     <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">
// // // // // // // // // // // // // // // //                       {sections[currentSection].title}
// // // // // // // // // // // // // // // //                     </h3>
// // // // // // // // // // // // // // // //                     <div className="flex justify-center gap-2 mt-4">
// // // // // // // // // // // // // // // //                       {sections.map((_, index) => (
// // // // // // // // // // // // // // // //                         <div
// // // // // // // // // // // // // // // //                           key={index}
// // // // // // // // // // // // // // // //                           className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // // // // // // // // // // // // // // //                             index === currentSection ? 'bg-primary' : 'bg-primary/30'
// // // // // // // // // // // // // // // //                           }`}
// // // // // // // // // // // // // // // //                         />
// // // // // // // // // // // // // // // //                       ))}
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                   </div>
                  
// // // // // // // // // // // // // // // //                   <Button
// // // // // // // // // // // // // // // //                     variant="ghost"
// // // // // // // // // // // // // // // //                     size="sm"
// // // // // // // // // // // // // // // //                     onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // // // // // // // // // // // // // //                     disabled={currentSection === sections.length - 1}
// // // // // // // // // // // // // // // //                     className="hidden lg:flex text-primary hover:bg-primary/10 rounded-full p-2 sm:p-3"
// // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // //                     <ChevronRight size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // // // //                 <div 
// // // // // // // // // // // // // // // //                   className="min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center swipe-container"
// // // // // // // // // // // // // // // //                   ref={cardRef}
// // // // // // // // // // // // // // // //                   onTouchStart={handleTouchStart}
// // // // // // // // // // // // // // // //                   onTouchMove={handleTouchMove}
// // // // // // // // // // // // // // // //                   onTouchEnd={handleTouchEnd}
// // // // // // // // // // // // // // // //                   onMouseDown={handleMouseDown}
// // // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // // //                   <div 
// // // // // // // // // // // // // // // //                     className="w-full transition-all duration-500 ease-in-out"
// // // // // // // // // // // // // // // //                     style={{
// // // // // // // // // // // // // // // //                       transform: `translateX(${translateX}px)`,
// // // // // // // // // // // // // // // //                       transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
// // // // // // // // // // // // // // // //                     }}
// // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // //                     {sections[currentSection].content}
// // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // // // //                 {/* Mobile swipe hint */}
// // // // // // // // // // // // // // // //                 <div className="lg:hidden text-center mt-4">
                  
// // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // // // //           {/* Skills & Proficiency Section */}
// // // // // // // // // // // // // // // //           <div className={`${isVisible ? 'animate-slide-right animate-delay-2' : 'opacity-0'}`}>
// // // // // // // // // // // // // // // //             <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">Skills & Proficiency</h3>
            
// // // // // // // // // // // // // // // //             {/* First Row: Languages & Frameworks */}
// // // // // // // // // // // // // // // //             <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6 lg:grid-cols-2">
// // // // // // // // // // // // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-3' : 'opacity-0'}`}>
// // // // // // // // // // // // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // // // // // // // // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // // // // // // // // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 text-blue-700 flex-shrink-0">
// // // // // // // // // // // // // // // //                       <Code size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                     <span className="min-w-0">Languages & Scripting</span>
// // // // // // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // // // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // // //                     {skills.languages.map((skill, skillIndex) => (
// // // // // // // // // // // // // // // //                       <Badge 
// // // // // // // // // // // // // // // //                         key={`languages-${skillIndex}`}
// // // // // // // // // // // // // // // //                         variant="secondary" 
// // // // // // // // // // // // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // // //                         <span>{skill.icon}</span>
// // // // // // // // // // // // // // // //                         {skill.name}
// // // // // // // // // // // // // // // //                       </Badge>
// // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // // // // // //               </Card>

// // // // // // // // // // // // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-4' : 'opacity-0'}`}>
// // // // // // // // // // // // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // // // // // // // // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // // // // // // // // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-green-500/10 text-green-700 flex-shrink-0">
// // // // // // // // // // // // // // // //                       <Globe size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                     <span className="min-w-0">Frameworks & Libraries</span>
// // // // // // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // // // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // // //                     {skills.frameworks.map((skill, skillIndex) => (
// // // // // // // // // // // // // // // //                       <Badge 
// // // // // // // // // // // // // // // //                         key={`frameworks-${skillIndex}`}
// // // // // // // // // // // // // // // //                         variant="secondary" 
// // // // // // // // // // // // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // // //                         <span>{skill.icon}</span>
// // // // // // // // // // // // // // // //                         {skill.name}
// // // // // // // // // // // // // // // //                       </Badge>
// // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // // // // // //               </Card>
// // // // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // // // //             {/* Second Row: Databases & Development Tools */}
// // // // // // // // // // // // // // // //             <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6 lg:grid-cols-2">
// // // // // // // // // // // // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-5' : 'opacity-0'}`}>
// // // // // // // // // // // // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // // // // // // // // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // // // // // // // // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/10 text-purple-700 flex-shrink-0">
// // // // // // // // // // // // // // // //                       <Database size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                     <span className="min-w-0">Databases</span>
// // // // // // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // // // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // // //                     {skills.databases.map((skill, skillIndex) => (
// // // // // // // // // // // // // // // //                       <Badge 
// // // // // // // // // // // // // // // //                         key={`databases-${skillIndex}`}
// // // // // // // // // // // // // // // //                         variant="secondary" 
// // // // // // // // // // // // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // // //                         <span>{skill.icon}</span>
// // // // // // // // // // // // // // // //                         {skill.name}
// // // // // // // // // // // // // // // //                       </Badge>
// // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // // // // // //               </Card>

// // // // // // // // // // // // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-6' : 'opacity-0'}`}>
// // // // // // // // // // // // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // // // // // // // // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // // // // // // // // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-orange-500/10 text-orange-700 flex-shrink-0">
// // // // // // // // // // // // // // // //                       <Wrench size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                     <span className="min-w-0">Development Tools</span>
// // // // // // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // // // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // // //                     {skills.tools.map((skill, skillIndex) => (
// // // // // // // // // // // // // // // //                       <Badge 
// // // // // // // // // // // // // // // //                         key={`tools-${skillIndex}`}
// // // // // // // // // // // // // // // //                         variant="secondary" 
// // // // // // // // // // // // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // // //                         <span>{skill.icon}</span>
// // // // // // // // // // // // // // // //                         {skill.name}
// // // // // // // // // // // // // // // //                       </Badge>
// // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // // // // // //               </Card>
// // // // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // // // //             {/* Third Row: Team Leadership & API Testing */}
// // // // // // // // // // // // // // // //             <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
// // // // // // // // // // // // // // // //               {additionalSkills.map((category, index) => (
// // // // // // // // // // // // // // // //                 <Card 
// // // // // // // // // // // // // // // //                   key={category.title} 
// // // // // // // // // // // // // // // //                   className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? `animate-fade-up animate-delay-${5 + index}` : 'opacity-0'}`}
// // // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // // //                   <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // // // // // // // // // // // //                     <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // // // // // // // // // // // //                       <div className={`p-1.5 sm:p-2 rounded-lg ${category.color} flex-shrink-0`}>
// // // // // // // // // // // // // // // //                         <category.icon size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // // // // //                       <span className="min-w-0">{category.title}</span>
// // // // // // // // // // // // // // // //                     </CardTitle>
// // // // // // // // // // // // // // // //                   </CardHeader>
// // // // // // // // // // // // // // // //                   <CardContent className="p-4 sm:p-6 pt-0">
// // // // // // // // // // // // // // // //                     <div className="flex flex-col gap-3">
// // // // // // // // // // // // // // // //                       {category.items.map((skill, skillIndex) => (
// // // // // // // // // // // // // // // //                         <div
// // // // // // // // // // // // // // // //                           key={`${category.title}-${skillIndex}`}
// // // // // // // // // // // // // // // //                           className="flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
// // // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // // //                           <div className={`p-1.5 rounded-full ${skill.bgColor} flex-shrink-0`}>
// // // // // // // // // // // // // // // //                             <skill.icon size={12} className={`sm:w-3.5 sm:h-3.5 ${skill.iconColor}`} />
// // // // // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // // // // //                           <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 min-w-0">
// // // // // // // // // // // // // // // //                             {skill.name}
// // // // // // // // // // // // // // // //                           </span>
// // // // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // // // //                       ))}
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                   </CardContent>
// // // // // // // // // // // // // // // //                 </Card>
// // // // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //     </section>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default About;
// // // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // // import { 
// // // // // // // // // // // // // // //   Code, 
// // // // // // // // // // // // // // //   Database, 
// // // // // // // // // // // // // // //   Globe, 
// // // // // // // // // // // // // // //   Wrench, 
// // // // // // // // // // // // // // //   Users, 
// // // // // // // // // // // // // // //   TestTube, 
// // // // // // // // // // // // // // //   ChevronLeft, 
// // // // // // // // // // // // // // //   ChevronRight,
// // // // // // // // // // // // // // //   Target,
// // // // // // // // // // // // // // //   CheckCircle,
// // // // // // // // // // // // // // //   Zap,
// // // // // // // // // // // // // // //   Server,
// // // // // // // // // // // // // // //   Monitor,
// // // // // // // // // // // // // // //   Brain,
// // // // // // // // // // // // // // //   Clock,
// // // // // // // // // // // // // // //   Send,
// // // // // // // // // // // // // // //   Shield,
// // // // // // // // // // // // // // //   User,
// // // // // // // // // // // // // // //   Heart,
// // // // // // // // // // // // // // //   Star
// // // // // // // // // // // // // // // } from "lucide-react";
// // // // // // // // // // // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // // // // // // // // // // const About = () => {
// // // // // // // // // // // // // // //   const [currentSection, setCurrentSection] = useState(0);
// // // // // // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // // // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // // // // // // // // // // // //   const [startX, setStartX] = useState(0);
// // // // // // // // // // // // // // //   const [translateX, setTranslateX] = useState(0);
// // // // // // // // // // // // // // //   const cardRef = useRef(null);
  
// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     // Trigger animations after component mounts
// // // // // // // // // // // // // // //     const timer = setTimeout(() => {
// // // // // // // // // // // // // // //       setIsVisible(true);
// // // // // // // // // // // // // // //     }, 100);
    
// // // // // // // // // // // // // // //     return () => clearTimeout(timer);
// // // // // // // // // // // // // // //   }, []);
  
// // // // // // // // // // // // // // //   const sections = [
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Professional Summary",
// // // // // // // // // // // // // // //       icon: User,
// // // // // // // // // // // // // // //       content: (
// // // // // // // // // // // // // // //         <div className="space-y-4">
// // // // // // // // // // // // // // //           {/* Mobile and Tablet version (sm and md screens) */}
// // // // // // // // // // // // // // //           <div className="block lg:hidden">
// // // // // // // // // // // // // // //             <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
// // // // // // // // // // // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in React, 
// // // // // // // // // // // // // // //               Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful 
// // // // // // // // // // // // // // //               digital experiences, and building responsive, user-centric solutions. Focused on 
// // // // // // // // // // // // // // //               performance, accessibility, and modern web standards to deliver scalable, 
// // // // // // // // // // // // // // //               maintainable, and future-ready applications.
// // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // //           </div>
          
// // // // // // // // // // // // // // //           {/* Desktop version (lg screens and above) */}
// // // // // // // // // // // // // // //           <div className="hidden lg:block space-y-4">
// // // // // // // // // // // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // // // // // // // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building 
// // // // // // // // // // // // // // //               responsive web applications using React, Tailwind CSS, and Next.js. Proficient in 
// // // // // // // // // // // // // // //               developing clean, maintainable code and delivering user-centric solutions.
// // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // // // // // // // // // // //               Strong team collaborator with a focus on performance, accessibility, and modern web 
// // // // // // // // // // // // // // //               standards to support scalable and efficient development.
// // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // // // // // // // // // // //               My journey in web development has been driven by a passion for problem-solving and 
// // // // // // // // // // // // // // //               creating meaningful digital experiences. I thrive in collaborative environments where 
// // // // // // // // // // // // // // //               innovation meets practical implementation, consistently delivering projects that exceed 
// // // // // // // // // // // // // // //               client expectations.
// // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // //             <p className="text-muted-foreground leading-relaxed">
// // // // // // // // // // // // // // //               I believe in staying current with emerging technologies and industry best practices, 
// // // // // // // // // // // // // // //               ensuring that every solution I develop is not only functional but also future-ready 
// // // // // // // // // // // // // // //               and maintainable.
// // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       )
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Key Strengths",
// // // // // // // // // // // // // // //       icon: Star,
// // // // // // // // // // // // // // //       content: (
// // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // //           <ul className="space-y-3 text-muted-foreground">
// // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">Decision-making skills and team leadership</span>
// // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">Performance optimization and accessibility focus</span>
// // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">Clean, maintainable code practices</span>
// // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">Timely project delivery</span>
// // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">Continuous learning and adaptation to new technologies</span>
// // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // //             <li className="flex items-start gap-3">
// // // // // // // // // // // // // // //               <span className="text-primary mt-1">•</span>
// // // // // // // // // // // // // // //               <span className="text-sm sm:text-base">User experience optimization and responsive design</span>
// // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // //           </ul>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       )
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Development Philosophy",
// // // // // // // // // // // // // // //       icon: Heart,
// // // // // // // // // // // // // // //       content: (
// // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // //           <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
// // // // // // // // // // // // // // //             I approach every project with a user-first mindset, ensuring that technical excellence 
// // // // // // // // // // // // // // //             translates into intuitive and engaging user experiences. My goal is to bridge the gap 
// // // // // // // // // // // // // // //             between complex functionality and seamless usability.
// // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       )
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // //   const skills = {
// // // // // // // // // // // // // // //     languages: [
// // // // // // // // // // // // // // //       { name: "Python", icon: "🐍" },
// // // // // // // // // // // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // // // // // // // // // // //       { name: "HTML", icon: "🌐" },
// // // // // // // // // // // // // // //       { name: "CSS", icon: "🎨" }
// // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // //     frameworks: [
// // // // // // // // // // // // // // //       { name: "Next.js", icon: "▲" },
// // // // // // // // // // // // // // //       { name: "React", icon: "⚛️" },
// // // // // // // // // // // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // //     databases: [
// // // // // // // // // // // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // // // // // // // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // // //     tools: [
// // // // // // // // // // // // // // //       { name: "VS Code", icon: "💻" },
// // // // // // // // // // // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // // // // // // // // // // //       { name: "Postman", icon: "📮" }
// // // // // // // // // // // // // // //     ]
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const additionalSkills = [
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Team Leadership",
// // // // // // // // // // // // // // //       icon: Users,
// // // // // // // // // // // // // // //       items: [
// // // // // // // // // // // // // // //         { 
// // // // // // // // // // // // // // //           name: "Decision-making skills", 
// // // // // // // // // // // // // // //           icon: Brain, 
// // // // // // // // // // // // // // //           iconColor: "text-purple-600",
// // // // // // // // // // // // // // //           bgColor: "bg-purple-100 dark:bg-purple-900/20"
// // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // //         { 
// // // // // // // // // // // // // // //           name: "Ensuring timely project delivery", 
// // // // // // // // // // // // // // //           icon: Clock, 
// // // // // // // // // // // // // // //           iconColor: "text-green-600",
// // // // // // // // // // // // // // //           bgColor: "bg-green-100 dark:bg-green-900/20"
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // //       color: "bg-red-500/10 text-red-700",
// // // // // // // // // // // // // // //       displayIcon: Target
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "API Testing",
// // // // // // // // // // // // // // //       icon: TestTube,
// // // // // // // // // // // // // // //       items: [
// // // // // // // // // // // // // // //         { 
// // // // // // // // // // // // // // //           name: "Postman API Testing", 
// // // // // // // // // // // // // // //           icon: Send, 
// // // // // // // // // // // // // // //           iconColor: "text-orange-600",
// // // // // // // // // // // // // // //           bgColor: "bg-orange-100 dark:bg-orange-900/20"
// // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // //         { 
// // // // // // // // // // // // // // //           name: "REST API Validation", 
// // // // // // // // // // // // // // //           icon: Shield, 
// // // // // // // // // // // // // // //           iconColor: "text-blue-600",
// // // // // // // // // // // // // // //           bgColor: "bg-blue-100 dark:bg-blue-900/20"
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // // // // // // // // // // // //       displayIcon: Server
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // //   const skillCategories = [
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Languages & Scripting",
// // // // // // // // // // // // // // //       icon: Code,
// // // // // // // // // // // // // // //       items: skills.languages,
// // // // // // // // // // // // // // //       color: "bg-blue-500/10 text-blue-700"
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Frameworks & Libraries",
// // // // // // // // // // // // // // //       icon: Globe,
// // // // // // // // // // // // // // //       items: skills.frameworks,
// // // // // // // // // // // // // // //       color: "bg-green-500/10 text-green-700"
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Databases",
// // // // // // // // // // // // // // //       icon: Database,
// // // // // // // // // // // // // // //       items: skills.databases,
// // // // // // // // // // // // // // //       color: "bg-purple-500/10 text-purple-700"
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Development Tools",
// // // // // // // // // // // // // // //       icon: Wrench,
// // // // // // // // // // // // // // //       items: skills.tools,
// // // // // // // // // // // // // // //       color: "bg-orange-500/10 text-orange-700"
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // //   // Touch event handlers
// // // // // // // // // // // // // // //   const handleTouchStart = (e) => {
// // // // // // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // // // // // //     setStartX(e.touches[0].clientX);
// // // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleTouchMove = (e) => {
// // // // // // // // // // // // // // //     if (!isDragging) return;
    
// // // // // // // // // // // // // // //     const currentX = e.touches[0].clientX;
// // // // // // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleTouchEnd = () => {
// // // // // // // // // // // // // // //     if (!isDragging) return;
    
// // // // // // // // // // // // // // //     setIsDragging(false);
// // // // // // // // // // // // // // //     const threshold = 50;
    
// // // // // // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // // // // // //     }
    
// // // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   // Mouse event handlers for desktop
// // // // // // // // // // // // // // //   const handleMouseDown = (e) => {
// // // // // // // // // // // // // // //     if (window.innerWidth < 1024) return; // Only enable on desktop
// // // // // // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // // // // // //     setStartX(e.clientX);
// // // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleMouseMove = (e) => {
// // // // // // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
    
// // // // // // // // // // // // // // //     const currentX = e.clientX;
// // // // // // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleMouseUp = () => {
// // // // // // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
    
// // // // // // // // // // // // // // //     setIsDragging(false);
// // // // // // // // // // // // // // //     const threshold = 50;
    
// // // // // // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // // // // // //     }
    
// // // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   // Add mouse event listeners
// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     if (isDragging && window.innerWidth >= 1024) {
// // // // // // // // // // // // // // //       document.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // // // // //       document.addEventListener('mouseup', handleMouseUp);
      
// // // // // // // // // // // // // // //       return () => {
// // // // // // // // // // // // // // //         document.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // // // // //         document.removeEventListener('mouseup', handleMouseUp);
// // // // // // // // // // // // // // //       };
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   }, [isDragging, startX]);

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 bg-background min-h-screen">
// // // // // // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // // // // // //         @keyframes fadeInUp {
// // // // // // // // // // // // // // //           from {
// // // // // // // // // // // // // // //             opacity: 0;
// // // // // // // // // // // // // // //             transform: translateY(30px);
// // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // //           to {
// // // // // // // // // // // // // // //             opacity: 1;
// // // // // // // // // // // // // // //             transform: translateY(0);
// // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // //         @keyframes slideInLeft {
// // // // // // // // // // // // // // //           from {
// // // // // // // // // // // // // // //             opacity: 0;
// // // // // // // // // // // // // // //             transform: translateX(-50px);
// // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // //           to {
// // // // // // // // // // // // // // //             opacity: 1;
// // // // // // // // // // // // // // //             transform: translateX(0);
// // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // //         @keyframes slideInRight {
// // // // // // // // // // // // // // //           from {
// // // // // // // // // // // // // // //             opacity: 0;
// // // // // // // // // // // // // // //             transform: translateX(50px);
// // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // //           to {
// // // // // // // // // // // // // // //             opacity: 1;
// // // // // // // // // // // // // // //             transform: translateX(0);
// // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // //         .animate-fade-up {
// // // // // // // // // // // // // // //           animation: fadeInUp 0.8s ease-out forwards;
// // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // //         .animate-slide-left {
// // // // // // // // // // // // // // //           animation: slideInLeft 0.8s ease-out forwards;
// // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // //         .animate-slide-right {
// // // // // // // // // // // // // // //           animation: slideInRight 0.8s ease-out forwards;
// // // // // // // // // // // // // // //         }
        
// // // // // // // // // // // // // // //         .animate-delay-1 { animation-delay: 0.2s; }
// // // // // // // // // // // // // // //         .animate-delay-2 { animation-delay: 0.4s; }
// // // // // // // // // // // // // // //         .animate-delay-3 { animation-delay: 0.6s; }
// // // // // // // // // // // // // // //         .animate-delay-4 { animation-delay: 0.8s; }
// // // // // // // // // // // // // // //         .animate-delay-5 { animation-delay: 1.0s; }
// // // // // // // // // // // // // // //         .animate-delay-6 { animation-delay: 1.2s; }
// // // // // // // // // // // // // // //         .animate-delay-7 { animation-delay: 1.4s; }
// // // // // // // // // // // // // // //         .animate-delay-8 { animation-delay: 1.6s; }
        
// // // // // // // // // // // // // // //         .swipe-container {
// // // // // // // // // // // // // // //           touch-action: pan-y pinch-zoom;
// // // // // // // // // // // // // // //           user-select: none;
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //       `}</style>
      
// // // // // // // // // // // // // // //       <div className="container mx-auto max-w-6xl">
// // // // // // // // // // // // // // //         <div className={`text-center mb-12 lg:mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
// // // // // // // // // // // // // // //           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">About Me</h2>
// // // // // // // // // // // // // // //           <div className="h-1 w-16 sm:w-20 lg:w-24 bg-primary mx-auto mb-6 lg:mb-8" />
// // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // //         <div className={`${isVisible ? 'animate-slide-left animate-delay-1' : 'opacity-0'}`}>
// // // // // // // // // // // // // // //           {/* Mobile View: Single Swipeable Box */}
// // // // // // // // // // // // // // //           <div className="lg:hidden mb-12">
// // // // // // // // // // // // // // //             <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 rounded-2xl overflow-hidden max-w-2xl mx-auto">
// // // // // // // // // // // // // // //               <CardContent className="p-4 sm:p-6">
// // // // // // // // // // // // // // //                 {/* Mobile Header with Navigation Dots */}
// // // // // // // // // // // // // // //                 <div className="text-center mb-6">
// // // // // // // // // // // // // // //                   <div className="flex items-center justify-center gap-3 mb-4">
// // // // // // // // // // // // // // //                     <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
// // // // // // // // // // // // // // //                       {(() => {
// // // // // // // // // // // // // // //                         const Icon = sections[currentSection].icon;
// // // // // // // // // // // // // // //                         return <Icon size={18} className="sm:w-5 sm:h-5" />;
// // // // // // // // // // // // // // //                       })()}
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                     <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // // // // // // // // // // // // //                       {sections[currentSection].title}
// // // // // // // // // // // // // // //                     </h3>
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                   <div className="flex justify-center gap-2">
// // // // // // // // // // // // // // //                     {sections.map((_, index) => (
// // // // // // // // // // // // // // //                       <div
// // // // // // // // // // // // // // //                         key={index}
// // // // // // // // // // // // // // //                         className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // // // // // // // // // // // // // //                           index === currentSection ? 'bg-primary' : 'bg-primary/30'
// // // // // // // // // // // // // // //                         }`}
// // // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // // //                 {/* Mobile Swipeable Content */}
// // // // // // // // // // // // // // //                 <div 
// // // // // // // // // // // // // // //                   className="min-h-[200px] sm:min-h-[250px] flex items-center justify-center swipe-container"
// // // // // // // // // // // // // // //                   onTouchStart={handleTouchStart}
// // // // // // // // // // // // // // //                   onTouchMove={handleTouchMove}
// // // // // // // // // // // // // // //                   onTouchEnd={handleTouchEnd}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   <div 
// // // // // // // // // // // // // // //                     className="w-full transition-all duration-500 ease-in-out"
// // // // // // // // // // // // // // //                     style={{
// // // // // // // // // // // // // // //                       transform: `translateX(${translateX}px)`,
// // // // // // // // // // // // // // //                       transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
// // // // // // // // // // // // // // //                     }}
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     {sections[currentSection].content}
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // // //                 {/* Mobile swipe hint */}
// // // // // // // // // // // // // // //                 <div className="text-center mt-4">
                  
// // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // // //           {/* Desktop View: Single Swipeable Box with Navigation */}
// // // // // // // // // // // // // // //           <div className="hidden lg:block relative mb-12 lg:mb-16">
// // // // // // // // // // // // // // //             <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 rounded-2xl lg:rounded-3xl overflow-hidden max-w-5xl mx-auto">
// // // // // // // // // // // // // // //               <CardContent className="p-6 sm:p-8 lg:p-12">
// // // // // // // // // // // // // // //                 <div className="flex items-center justify-between mb-6">
// // // // // // // // // // // // // // //                   {/* Desktop Navigation Arrows */}
// // // // // // // // // // // // // // //                   <Button
// // // // // // // // // // // // // // //                     variant="ghost"
// // // // // // // // // // // // // // //                     size="sm"
// // // // // // // // // // // // // // //                     onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // // // // // // // // // // // // //                     disabled={currentSection === 0}
// // // // // // // // // // // // // // //                     className="flex text-primary hover:bg-primary/10 rounded-full p-2 sm:p-3"
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // //                   </Button>
                  
// // // // // // // // // // // // // // //                   {/* Desktop: Show title with arrows */}
// // // // // // // // // // // // // // //                   <div className="text-center flex-1 px-2 sm:px-4">
// // // // // // // // // // // // // // //                     <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">
// // // // // // // // // // // // // // //                       {sections[currentSection].title}
// // // // // // // // // // // // // // //                     </h3>
// // // // // // // // // // // // // // //                     <div className="flex justify-center gap-2 mt-4">
// // // // // // // // // // // // // // //                       {sections.map((_, index) => (
// // // // // // // // // // // // // // //                         <div
// // // // // // // // // // // // // // //                           key={index}
// // // // // // // // // // // // // // //                           className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // // // // // // // // // // // // // //                             index === currentSection ? 'bg-primary' : 'bg-primary/30'
// // // // // // // // // // // // // // //                           }`}
// // // // // // // // // // // // // // //                         />
// // // // // // // // // // // // // // //                       ))}
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                   </div>
                  
// // // // // // // // // // // // // // //                   <Button
// // // // // // // // // // // // // // //                     variant="ghost"
// // // // // // // // // // // // // // //                     size="sm"
// // // // // // // // // // // // // // //                     onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // // // // // // // // // // // // //                     disabled={currentSection === sections.length - 1}
// // // // // // // // // // // // // // //                     className="flex text-primary hover:bg-primary/10 rounded-full p-2 sm:p-3"
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     <ChevronRight size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // // //                 <div 
// // // // // // // // // // // // // // //                   className="min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center swipe-container"
// // // // // // // // // // // // // // //                   ref={cardRef}
// // // // // // // // // // // // // // //                   onMouseDown={handleMouseDown}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   <div 
// // // // // // // // // // // // // // //                     className="w-full transition-all duration-500 ease-in-out"
// // // // // // // // // // // // // // //                     style={{
// // // // // // // // // // // // // // //                       transform: `translateX(${translateX}px)`,
// // // // // // // // // // // // // // //                       transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
// // // // // // // // // // // // // // //                     }}
// // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // //                     {sections[currentSection].content}
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // // //           {/* Skills & Proficiency Section */}
// // // // // // // // // // // // // // //           <div className={`${isVisible ? 'animate-slide-right animate-delay-2' : 'opacity-0'}`}>
// // // // // // // // // // // // // // //             <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">Skills & Proficiency</h3>
            
// // // // // // // // // // // // // // //             {/* First Row: Languages & Frameworks */}
// // // // // // // // // // // // // // //             <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6 lg:grid-cols-2">
// // // // // // // // // // // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-6' : 'opacity-0'}`}>
// // // // // // // // // // // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // // // // // // // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // // // // // // // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 text-blue-700 flex-shrink-0">
// // // // // // // // // // // // // // //                       <Code size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                     <span className="min-w-0">Languages & Scripting</span>
// // // // // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // //                     {skills.languages.map((skill, skillIndex) => (
// // // // // // // // // // // // // // //                       <Badge 
// // // // // // // // // // // // // // //                         key={`languages-${skillIndex}`}
// // // // // // // // // // // // // // //                         variant="secondary" 
// // // // // // // // // // // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // //                         <span>{skill.icon}</span>
// // // // // // // // // // // // // // //                         {skill.name}
// // // // // // // // // // // // // // //                       </Badge>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // // // // //               </Card>

// // // // // // // // // // // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-7' : 'opacity-0'}`}>
// // // // // // // // // // // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // // // // // // // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // // // // // // // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-green-500/10 text-green-700 flex-shrink-0">
// // // // // // // // // // // // // // //                       <Globe size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                     <span className="min-w-0">Frameworks & Libraries</span>
// // // // // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // //                     {skills.frameworks.map((skill, skillIndex) => (
// // // // // // // // // // // // // // //                       <Badge 
// // // // // // // // // // // // // // //                         key={`frameworks-${skillIndex}`}
// // // // // // // // // // // // // // //                         variant="secondary" 
// // // // // // // // // // // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // //                         <span>{skill.icon}</span>
// // // // // // // // // // // // // // //                         {skill.name}
// // // // // // // // // // // // // // //                       </Badge>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // // // // //               </Card>
// // // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // // //             {/* Second Row: Databases & Development Tools */}
// // // // // // // // // // // // // // //             <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6 lg:grid-cols-2">
// // // // // // // // // // // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-8' : 'opacity-0'}`}>
// // // // // // // // // // // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // // // // // // // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // // // // // // // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/10 text-purple-700 flex-shrink-0">
// // // // // // // // // // // // // // //                       <Database size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                     <span className="min-w-0">Databases</span>
// // // // // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // //                     {skills.databases.map((skill, skillIndex) => (
// // // // // // // // // // // // // // //                       <Badge 
// // // // // // // // // // // // // // //                         key={`databases-${skillIndex}`}
// // // // // // // // // // // // // // //                         variant="secondary" 
// // // // // // // // // // // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // //                         <span>{skill.icon}</span>
// // // // // // // // // // // // // // //                         {skill.name}
// // // // // // // // // // // // // // //                       </Badge>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // // // // //               </Card>

// // // // // // // // // // // // // // //               <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-8' : 'opacity-0'}`}>
// // // // // // // // // // // // // // //                 <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // // // // // // // // // // //                   <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // // // // // // // // // // //                     <div className="p-1.5 sm:p-2 rounded-lg bg-orange-500/10 text-orange-700 flex-shrink-0">
// // // // // // // // // // // // // // //                       <Wrench size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                     <span className="min-w-0">Development Tools</span>
// // // // // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // // // // // //                 <CardContent className="p-4 sm:p-6 pt-0">
// // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // //                     {skills.tools.map((skill, skillIndex) => (
// // // // // // // // // // // // // // //                       <Badge 
// // // // // // // // // // // // // // //                         key={`tools-${skillIndex}`}
// // // // // // // // // // // // // // //                         variant="secondary" 
// // // // // // // // // // // // // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
// // // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // // //                         <span>{skill.icon}</span>
// // // // // // // // // // // // // // //                         {skill.name}
// // // // // // // // // // // // // // //                       </Badge>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // // // // //               </Card>
// // // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // // //             {/* Third Row: Team Leadership & API Testing */}
// // // // // // // // // // // // // // //             <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
// // // // // // // // // // // // // // //               {additionalSkills.map((category, index) => (
// // // // // // // // // // // // // // //                 <Card 
// // // // // // // // // // // // // // //                   key={category.title} 
// // // // // // // // // // // // // // //                   className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? `animate-fade-up animate-delay-${8 + index}` : 'opacity-0'}`}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   <CardHeader className="pb-3 p-4 sm:p-6">
// // // // // // // // // // // // // // //                     <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
// // // // // // // // // // // // // // //                       <div className={`p-1.5 sm:p-2 rounded-lg ${category.color} flex-shrink-0`}>
// // // // // // // // // // // // // // //                         <category.icon size={16} className="sm:w-5 sm:h-5" />
// // // // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // // // //                       <span className="min-w-0">{category.title}</span>
// // // // // // // // // // // // // // //                     </CardTitle>
// // // // // // // // // // // // // // //                   </CardHeader>
// // // // // // // // // // // // // // //                   <CardContent className="p-4 sm:p-6 pt-0">
// // // // // // // // // // // // // // //                     <div className="flex flex-col gap-3">
// // // // // // // // // // // // // // //                       {category.items.map((skill, skillIndex) => (
// // // // // // // // // // // // // // //                         <div
// // // // // // // // // // // // // // //                           key={`${category.title}-${skillIndex}`}
// // // // // // // // // // // // // // //                           className="flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
// // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // //                           <div className={`p-1.5 rounded-full ${skill.bgColor} flex-shrink-0`}>
// // // // // // // // // // // // // // //                             <skill.icon size={12} className={`sm:w-3.5 sm:h-3.5 ${skill.iconColor}`} />
// // // // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // // // //                           <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 min-w-0">
// // // // // // // // // // // // // // //                             {skill.name}
// // // // // // // // // // // // // // //                           </span>
// // // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // // //                       ))}
// // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // //                   </CardContent>
// // // // // // // // // // // // // // //                 </Card>
// // // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </section>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default About;
// // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star } from "lucide-react";
// // // // // // // // // // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // // // // // // // // // const About = () => {
// // // // // // // // // // // // // //   const [currentSection, setCurrentSection] = useState(0);
// // // // // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // // // // // // // // // // //   const [startX, setStartX] = useState(0);
// // // // // // // // // // // // // //   const [translateX, setTranslateX] = useState(0);
// // // // // // // // // // // // // //   const cardRef = useRef(null);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     // Trigger animations after component mounts
// // // // // // // // // // // // // //     const timer = setTimeout(() => {
// // // // // // // // // // // // // //       setIsVisible(true);
// // // // // // // // // // // // // //     }, 100);

// // // // // // // // // // // // // //     return () => clearTimeout(timer);
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   const sections = [
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Professional Summary",
// // // // // // // // // // // // // //       icon: User,
// // // // // // // // // // // // // //       content: (
// // // // // // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // // // // // //           {/* Mobile and Tablet version (sm and md screens) */}
// // // // // // // // // // // // // //           <p className="lg:hidden text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // // //             Web Developer with 6 months of experience at Webgeon Results, skilled in React, Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful digital experiences, and building responsive, user-centric solutions. Focused on performance, accessibility, and modern web standards to deliver scalable, maintainable, and future-ready applications.
// // // // // // // // // // // // // //           </p>
          
// // // // // // // // // // // // // //           {/* Desktop version (lg screens and above) */}
// // // // // // // // // // // // // //           <div className="hidden lg:block space-y-4">
// // // // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js. Proficient in developing clean, maintainable code and delivering user-centric solutions.
// // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // // //               Strong team collaborator with a focus on performance, accessibility, and modern web standards to support scalable and efficient development.
// // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // // //               My journey in web development has been driven by a passion for problem-solving and creating meaningful digital experiences. I thrive in collaborative environments where innovation meets practical implementation, consistently delivering projects that exceed client expectations.
// // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // // //               I believe in staying current with emerging technologies and industry best practices, ensuring that every solution I develop is not only functional but also future-ready and maintainable.
// // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       )
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Key Strengths",
// // // // // // // // // // // // // //       icon: Star,
// // // // // // // // // // // // // //       content: (
// // // // // // // // // // // // // //         <div className="space-y-3 text-base sm:text-lg">
// // // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Decision-making skills and team leadership</span>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Performance optimization and accessibility focus</span>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code practices</span>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Timely project delivery</span>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Continuous learning and adaptation to new technologies</span>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">User experience optimization and responsive design</span>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       )
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Development Philosophy",
// // // // // // // // // // // // // //       icon: Heart,
// // // // // // // // // // // // // //       content: (
// // // // // // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // // // // // //           <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // // //             I approach every project with a user-first mindset, ensuring that technical excellence translates into intuitive and engaging user experiences. My goal is to bridge the gap between complex functionality and seamless usability.
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       )
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // //   const skills = {
// // // // // // // // // // // // // //     languages: [
// // // // // // // // // // // // // //       { name: "Python", icon: "🐍" },
// // // // // // // // // // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // // // // // // // // // //       { name: "HTML", icon: "🌐" },
// // // // // // // // // // // // // //       { name: "CSS", icon: "🎨" }
// // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // //     frameworks: [
// // // // // // // // // // // // // //       { name: "Next.js", icon: "▲" },
// // // // // // // // // // // // // //       { name: "React", icon: "⚛️" },
// // // // // // // // // // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // //     databases: [
// // // // // // // // // // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // // // // // // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // // // // // // // // // //     ],
// // // // // // // // // // // // // //     tools: [
// // // // // // // // // // // // // //       { name: "VS Code", icon: "💻" },
// // // // // // // // // // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // // // // // // // // // //       { name: "Postman", icon: "📮" }
// // // // // // // // // // // // // //     ]
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const additionalSkills = [
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Team Leadership",
// // // // // // // // // // // // // //       icon: Users,
// // // // // // // // // // // // // //       items: [
// // // // // // // // // // // // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // // // // // // // // // // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //       color: "bg-red-500/10 text-red-700",
// // // // // // // // // // // // // //       displayIcon: Target
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "API Testing",
// // // // // // // // // // // // // //       icon: TestTube,
// // // // // // // // // // // // // //       items: [
// // // // // // // // // // // // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // // // // // // // // // // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // // // // // // // // // // //       displayIcon: Server
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // //   // Touch event handlers
// // // // // // // // // // // // // //   const handleTouchStart = (e) => {
// // // // // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // // // // //     setStartX(e.touches[0].clientX);
// // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleTouchMove = (e) => {
// // // // // // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // // // // // //     const currentX = e.touches[0].clientX;
// // // // // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleTouchEnd = () => {
// // // // // // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // // // // // //     const threshold = 50;
// // // // // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Mouse event handlers for desktop
// // // // // // // // // // // // // //   const handleMouseDown = (e) => {
// // // // // // // // // // // // // //     if (window.innerWidth < 1024) return; // Only enable on desktop
// // // // // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // // // // //     setStartX(e.clientX);
// // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleMouseMove = (e) => {
// // // // // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // // // // // //     const currentX = e.clientX;
// // // // // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleMouseUp = () => {
// // // // // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // // // // // //     const threshold = 50;
// // // // // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Add mouse event listeners
// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     if (isDragging && window.innerWidth >= 1024) {
// // // // // // // // // // // // // //       document.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // // // //       document.addEventListener('mouseup', handleMouseUp);
      
// // // // // // // // // // // // // //       return () => {
// // // // // // // // // // // // // //         document.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // // // //         document.removeEventListener('mouseup', handleMouseUp);
// // // // // // // // // // // // // //       };
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   }, [isDragging, startX]);

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // // // // // // // // // // // //       <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
// // // // // // // // // // // // // //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // // // // // // // // // // // //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
// // // // // // // // // // // // // //             About Me
// // // // // // // // // // // // // //           </h1>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Mobile View: Single Swipeable Box */}
// // // // // // // // // // // // // //         <div className="lg:hidden w-full">
// // // // // // // // // // // // // //           {/* Mobile Header with Navigation Dots */}
// // // // // // // // // // // // // //           <Card className="mb-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 w-full max-w-full">
// // // // // // // // // // // // // //             <CardHeader className="text-center pb-4">
// // // // // // // // // // // // // //               <div className="flex items-center justify-center mb-3">
// // // // // // // // // // // // // //                 {(() => {
// // // // // // // // // // // // // //                   const Icon = sections[currentSection].icon;
// // // // // // // // // // // // // //                   return <Icon className="w-10 h-10 text-primary" />;
// // // // // // // // // // // // // //                 })()}
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //               <CardTitle className="text-2xl font-bold text-primary">
// // // // // // // // // // // // // //                 {sections[currentSection].title}
// // // // // // // // // // // // // //               </CardTitle>
// // // // // // // // // // // // // //               <div className="flex justify-center gap-2 mt-4">
// // // // // // // // // // // // // //                 {sections.map((_, index) => (
// // // // // // // // // // // // // //                   <button
// // // // // // // // // // // // // //                     key={index}
// // // // // // // // // // // // // //                     onClick={() => setCurrentSection(index)}
// // // // // // // // // // // // // //                     className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
// // // // // // // // // // // // // //                       index === currentSection 
// // // // // // // // // // // // // //                         ? 'w-8 bg-primary' 
// // // // // // // // // // // // // //                         : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // // // // // //                     }`}
// // // // // // // // // // // // // //                   />
// // // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </CardHeader>
// // // // // // // // // // // // // //             {/* Mobile Swipeable Content */}
// // // // // // // // // // // // // //             <CardContent
// // // // // // // // // // // // // //               ref={cardRef}
// // // // // // // // // // // // // //               onTouchStart={handleTouchStart}
// // // // // // // // // // // // // //               onTouchMove={handleTouchMove}
// // // // // // // // // // // // // //               onTouchEnd={handleTouchEnd}
// // // // // // // // // // // // // //               className="relative overflow-hidden touch-pan-y active:cursor-grabbing active:scale-[0.98] transition-transform hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // // // // // //               style={{
// // // // // // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // // // // // //               }}
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // // // // // //             </CardContent>
// // // // // // // // // // // // // //             {/* Mobile swipe hint */}
// // // // // // // // // // // // // //             <div className="text-center pb-4 text-sm text-gray-500 dark:text-gray-400">
// // // // // // // // // // // // // //               Swipe to navigate
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           </Card>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Desktop View: Single Swipeable Box with Navigation */}
// // // // // // // // // // // // // //         <div className="hidden lg:block w-full">
// // // // // // // // // // // // // //           <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 select-none w-full max-w-full">
// // // // // // // // // // // // // //             {/* Desktop Navigation Arrows */}
// // // // // // // // // // // // // //             <CardHeader className="relative pb-6">
// // // // // // // // // // // // // //               <div className="flex items-center justify-between gap-4">
// // // // // // // // // // // // // //                 <Button
// // // // // // // // // // // // // //                   variant="ghost"
// // // // // // // // // // // // // //                   size="icon"
// // // // // // // // // // // // // //                   onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // // // // // // // // // // // //                   disabled={currentSection === 0}
// // // // // // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   <ChevronLeft className="w-6 h-6" />
// // // // // // // // // // // // // //                 </Button>
                
// // // // // // // // // // // // // //                 {/* Desktop: Show title with arrows */}
// // // // // // // // // // // // // //                 <div className="flex-1 text-center">
// // // // // // // // // // // // // //                   <CardTitle className="text-3xl font-bold text-primary mb-4">
// // // // // // // // // // // // // //                     {sections[currentSection].title}
// // // // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // // // //                   <div className="flex justify-center gap-2">
// // // // // // // // // // // // // //                     {sections.map((_, index) => (
// // // // // // // // // // // // // //                       <button
// // // // // // // // // // // // // //                         key={index}
// // // // // // // // // // // // // //                         onClick={() => setCurrentSection(index)}
// // // // // // // // // // // // // //                         className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
// // // // // // // // // // // // // //                           index === currentSection 
// // // // // // // // // // // // // //                             ? 'w-12 bg-primary' 
// // // // // // // // // // // // // //                             : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // // // // // //                         }`}
// // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // // //                 <Button
// // // // // // // // // // // // // //                   variant="ghost"
// // // // // // // // // // // // // //                   size="icon"
// // // // // // // // // // // // // //                   onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // // // // // // // // // // // //                   disabled={currentSection === sections.length - 1}
// // // // // // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // //                   <ChevronRight className="w-6 h-6" />
// // // // // // // // // // // // // //                 </Button>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </CardHeader>
            
// // // // // // // // // // // // // //             <CardContent
// // // // // // // // // // // // // //               ref={cardRef}
// // // // // // // // // // // // // //               onMouseDown={handleMouseDown}
// // // // // // // // // // // // // //               className="relative overflow-hidden cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // // // // // //               style={{
// // // // // // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // // // // // //               }}
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // // // // // //             </CardContent>
// // // // // // // // // // // // // //           </Card>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Skills & Proficiency Section */}
// // // // // // // // // // // // // //         <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // // // // // // //           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // // // // // // // // //             Skills & Proficiency
// // // // // // // // // // // // // //           </h2>
          
// // // // // // // // // // // // // //           {/* First Row: Languages & Frameworks */}
// // // // // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 w-full max-w-full">
// // // // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500 w-full max-w-full`}>
// // // // // // // // // // // // // //               <CardHeader>
// // // // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // // // //                   <div className={`p-3 rounded-lg bg-blue-500/10 text-blue-700`}>
// // // // // // // // // // // // // //                     <Code className="w-6 h-6" />
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                   <CardTitle className="text-xl sm:text-2xl">Languages & Scripting</CardTitle>
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // // // //                 <div className="flex flex-wrap gap-3">
// // // // // // // // // // // // // //                   {skills.languages.map((skill, skillIndex) => (
// // // // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // // // //                       className="text-base sm:text-lg px-4 py-2 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // //             </Card>

// // // // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500 w-full max-w-full`}>
// // // // // // // // // // // // // //               <CardHeader>
// // // // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // // // //                   <div className={`p-3 rounded-lg bg-green-500/10 text-green-700`}>
// // // // // // // // // // // // // //                     <Globe className="w-6 h-6" />
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                   <CardTitle className="text-xl sm:text-2xl">Frameworks & Libraries</CardTitle>
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // // // //                 <div className="flex flex-wrap gap-3">
// // // // // // // // // // // // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // // // //                       className="text-base sm:text-lg px-4 py-2 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           {/* Second Row: Databases & Development Tools */}
// // // // // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 w-full max-w-full">
// // // // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-purple-500 w-full max-w-full`}>
// // // // // // // // // // // // // //               <CardHeader>
// // // // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // // // //                   <div className={`p-3 rounded-lg bg-purple-500/10 text-purple-700`}>
// // // // // // // // // // // // // //                     <Database className="w-6 h-6" />
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                   <CardTitle className="text-xl sm:text-2xl">Databases</CardTitle>
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // // // //                 <div className="flex flex-wrap gap-3">
// // // // // // // // // // // // // //                   {skills.databases.map((skill, skillIndex) => (
// // // // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // // // //                       className="text-base sm:text-lg px-4 py-2 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // //             </Card>

// // // // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-orange-500 w-full max-w-full`}>
// // // // // // // // // // // // // //               <CardHeader>
// // // // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // // // //                   <div className={`p-3 rounded-lg bg-orange-500/10 text-orange-700`}>
// // // // // // // // // // // // // //                     <Wrench className="w-6 h-6" />
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                   <CardTitle className="text-xl sm:text-2xl">Development Tools</CardTitle>
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // // // //                 <div className="flex flex-wrap gap-3">
// // // // // // // // // // // // // //                   {skills.tools.map((skill, skillIndex) => (
// // // // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // // // //                       className="text-base sm:text-lg px-4 py-2 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           {/* Third Row: Team Leadership & API Testing */}
// // // // // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-full">
// // // // // // // // // // // // // //             {additionalSkills.map((category, index) => (
// // // // // // // // // // // // // //               <Card 
// // // // // // // // // // // // // //                 key={index} 
// // // // // // // // // // // // // //                 className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 ${
// // // // // // // // // // // // // //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// // // // // // // // // // // // // //                 } w-full max-w-full`}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <CardHeader>
// // // // // // // // // // // // // //                   <div className="flex items-center gap-3">
// // // // // // // // // // // // // //                     <div className={`p-3 rounded-lg ${category.color}`}>
// // // // // // // // // // // // // //                       {(() => {
// // // // // // // // // // // // // //                         const Icon = category.displayIcon;
// // // // // // // // // // // // // //                         return <Icon className="w-6 h-6" />;
// // // // // // // // // // // // // //                       })()}
// // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // //                     <CardTitle className="text-xl sm:text-2xl">{category.title}</CardTitle>
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // // // // //                 <CardContent>
// // // // // // // // // // // // // //                   <div className="space-y-3">
// // // // // // // // // // // // // //                     {category.items.map((skill, skillIndex) => (
// // // // // // // // // // // // // //                       <div 
// // // // // // // // // // // // // //                         key={skillIndex} 
// // // // // // // // // // // // // //                         className={`flex items-center gap-3 p-3 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // // // // // // // // // // // //                       >
// // // // // // // // // // // // // //                         {(() => {
// // // // // // // // // // // // // //                           const SkillIcon = skill.icon;
// // // // // // // // // // // // // //                           return <SkillIcon className={`w-5 h-5 ${skill.iconColor}`} />;
// // // // // // // // // // // // // //                         })()}
// // // // // // // // // // // // // //                         <span className="text-base sm:text-lg font-medium">{skill.name}</span>
// // // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // // // //               </Card>
// // // // // // // // // // // // // //             ))}
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default About;
// // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star } from "lucide-react";
// // // // // // // // // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // // // // // // // // const About = () => {
// // // // // // // // // // // // //   const [currentSection, setCurrentSection] = useState(0);
// // // // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // // // // // // // // // //   const [startX, setStartX] = useState(0);
// // // // // // // // // // // // //   const [translateX, setTranslateX] = useState(0);
// // // // // // // // // // // // //   const cardRef = useRef(null);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     // Trigger animations after component mounts
// // // // // // // // // // // // //     const timer = setTimeout(() => {
// // // // // // // // // // // // //       setIsVisible(true);
// // // // // // // // // // // // //     }, 100);

// // // // // // // // // // // // //     return () => clearTimeout(timer);
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   const sections = [
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "Professional Summary",
// // // // // // // // // // // // //       icon: User,
// // // // // // // // // // // // //       content: (
// // // // // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // // // // //           {/* Mobile and Tablet version (sm and md screens) */}
// // // // // // // // // // // // //           <p className="lg:hidden text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // //             Web Developer with 6 months of experience at Webgeon Results, skilled in React, Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful digital experiences, and building responsive, user-centric solutions. Focused on performance, accessibility, and modern web standards to deliver scalable, maintainable, and future-ready applications.
// // // // // // // // // // // // //           </p>
          
// // // // // // // // // // // // //           {/* Desktop version (lg screens and above) */}
// // // // // // // // // // // // //           <div className="hidden lg:block space-y-4">
// // // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js. Proficient in developing clean, maintainable code and delivering user-centric solutions.
// // // // // // // // // // // // //             </p>
// // // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // //               Strong team collaborator with a focus on performance, accessibility, and modern web standards to support scalable and efficient development.
// // // // // // // // // // // // //             </p>
// // // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // //               My journey in web development has been driven by a passion for problem-solving and creating meaningful digital experiences. I thrive in collaborative environments where innovation meets practical implementation, consistently delivering projects that exceed client expectations.
// // // // // // // // // // // // //             </p>
// // // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // //               I believe in staying current with emerging technologies and industry best practices, ensuring that every solution I develop is not only functional but also future-ready and maintainable.
// // // // // // // // // // // // //             </p>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "Key Strengths",
// // // // // // // // // // // // //       icon: Star,
// // // // // // // // // // // // //       content: (
// // // // // // // // // // // // //         <div className="space-y-3 text-base sm:text-lg">
// // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Decision-making skills and team leadership</span>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Performance optimization and accessibility focus</span>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code practices</span>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Timely project delivery</span>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Continuous learning and adaptation to new technologies</span>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">User experience optimization and responsive design</span>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "Development Philosophy",
// // // // // // // // // // // // //       icon: Heart,
// // // // // // // // // // // // //       content: (
// // // // // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // // // // //           <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // // //             I approach every project with a user-first mindset, ensuring that technical excellence translates into intuitive and engaging user experiences. My goal is to bridge the gap between complex functionality and seamless usability.
// // // // // // // // // // // // //           </p>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   ];

// // // // // // // // // // // // //   const skills = {
// // // // // // // // // // // // //     languages: [
// // // // // // // // // // // // //       { name: "Python", icon: "🐍" },
// // // // // // // // // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // // // // // // // // //       { name: "HTML", icon: "🌐" },
// // // // // // // // // // // // //       { name: "CSS", icon: "🎨" }
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //     frameworks: [
// // // // // // // // // // // // //       { name: "Next.js", icon: "▲" },
// // // // // // // // // // // // //       { name: "React", icon: "⚛️" },
// // // // // // // // // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //     databases: [
// // // // // // // // // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // // // // // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //     tools: [
// // // // // // // // // // // // //       { name: "VS Code", icon: "💻" },
// // // // // // // // // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // // // // // // // // //       { name: "Postman", icon: "📮" }
// // // // // // // // // // // // //     ]
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const additionalSkills = [
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "Team Leadership",
// // // // // // // // // // // // //       icon: Users,
// // // // // // // // // // // // //       items: [
// // // // // // // // // // // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // // // // // // // // // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // // // // // // // // // // //       ],
// // // // // // // // // // // // //       color: "bg-red-500/10 text-red-700",
// // // // // // // // // // // // //       displayIcon: Target
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "API Testing",
// // // // // // // // // // // // //       icon: TestTube,
// // // // // // // // // // // // //       items: [
// // // // // // // // // // // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // // // // // // // // // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // // // // // // // // // // //       ],
// // // // // // // // // // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // // // // // // // // // //       displayIcon: Server
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   ];

// // // // // // // // // // // // //   // Touch event handlers
// // // // // // // // // // // // //   const handleTouchStart = (e) => {
// // // // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // // // //     setStartX(e.touches[0].clientX);
// // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleTouchMove = (e) => {
// // // // // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // // // // //     const currentX = e.touches[0].clientX;
// // // // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleTouchEnd = () => {
// // // // // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // // // // //     const threshold = 50;
// // // // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Mouse event handlers for desktop
// // // // // // // // // // // // //   const handleMouseDown = (e) => {
// // // // // // // // // // // // //     if (window.innerWidth < 1024) return; // Only enable on desktop
// // // // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // // // //     setStartX(e.clientX);
// // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleMouseMove = (e) => {
// // // // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // // // // //     const currentX = e.clientX;
// // // // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleMouseUp = () => {
// // // // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // // // // //     const threshold = 50;
// // // // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Add mouse event listeners
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     if (isDragging && window.innerWidth >= 1024) {
// // // // // // // // // // // // //       document.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // // //       document.addEventListener('mouseup', handleMouseUp);
      
// // // // // // // // // // // // //       return () => {
// // // // // // // // // // // // //         document.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // // //         document.removeEventListener('mouseup', handleMouseUp);
// // // // // // // // // // // // //       };
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }, [isDragging, startX]);

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // // // // // // // // // // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // // // // // // // // // // // //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // // // // // // // // // // //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
// // // // // // // // // // // // //             About Me
// // // // // // // // // // // // //           </h1>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Mobile View: Single Swipeable Box */}
// // // // // // // // // // // // //         <div className="lg:hidden w-full">
// // // // // // // // // // // // //           {/* Mobile Header with Navigation Dots */}
// // // // // // // // // // // // //           <Card className="mb-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 w-full max-w-full">
// // // // // // // // // // // // //             <CardHeader className="text-center pb-4">
// // // // // // // // // // // // //               <div className="flex items-center justify-center mb-3">
// // // // // // // // // // // // //                 {(() => {
// // // // // // // // // // // // //                   const Icon = sections[currentSection].icon;
// // // // // // // // // // // // //                   return <Icon className="w-10 h-10 text-primary" />;
// // // // // // // // // // // // //                 })()}
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //               <CardTitle className="text-2xl font-bold text-primary">
// // // // // // // // // // // // //                 {sections[currentSection].title}
// // // // // // // // // // // // //               </CardTitle>
// // // // // // // // // // // // //               <div className="flex justify-center gap-2 mt-4">
// // // // // // // // // // // // //                 {sections.map((_, index) => (
// // // // // // // // // // // // //   <button
// // // // // // // // // // // // //     key={index}
// // // // // // // // // // // // //     onClick={() => setCurrentSection(index)}
// // // // // // // // // // // // //     className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-1 dark:focus:ring-1 ${
// // // // // // // // // // // // //       index === currentSection ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // // // // //     }`}
// // // // // // // // // // // // //   />
// // // // // // // // // // // // // ))}
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </CardHeader>
// // // // // // // // // // // // //             {/* Mobile Swipeable Content */}
// // // // // // // // // // // // //             <CardContent
// // // // // // // // // // // // //               ref={cardRef}
// // // // // // // // // // // // //               onTouchStart={handleTouchStart}
// // // // // // // // // // // // //               onTouchMove={handleTouchMove}
// // // // // // // // // // // // //               onTouchEnd={handleTouchEnd}
// // // // // // // // // // // // //               className="relative overflow-hidden touch-pan-y active:cursor-grabbing active:scale-[0.98] transition-transform hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // // // // //               style={{
// // // // // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // // // // //               }}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // // // // //             </CardContent>
// // // // // // // // // // // // //             {/* Mobile swipe hint */}
// // // // // // // // // // // // //             <div className="text-center pb-4 text-sm text-gray-500 dark:text-gray-400">
// // // // // // // // // // // // //               Swipe to navigate
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </Card>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Desktop View: Single Swipeable Box with Navigation */}
// // // // // // // // // // // // //         <div className="hidden lg:block">
// // // // // // // // // // // // //           <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 select-none">
// // // // // // // // // // // // //             {/* Desktop Navigation Arrows */}
// // // // // // // // // // // // //             <CardHeader className="relative pb-6">
// // // // // // // // // // // // //               <div className="flex items-center justify-between gap-4">
// // // // // // // // // // // // //                 <Button
// // // // // // // // // // // // //                   variant="ghost"
// // // // // // // // // // // // //                   size="icon"
// // // // // // // // // // // // //                   onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // // // // // // // // // // //                   disabled={currentSection === 0}
// // // // // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <ChevronLeft className="w-6 h-6" />
// // // // // // // // // // // // //                 </Button>
                
// // // // // // // // // // // // //                 {/* Desktop: Show title with arrows */}
// // // // // // // // // // // // //                 <div className="flex-1 text-center">
// // // // // // // // // // // // //                   <CardTitle className="text-3xl font-bold text-primary mb-4">
// // // // // // // // // // // // //                     {sections[currentSection].title}
// // // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // // //                   <div className="flex justify-center gap-2">
// // // // // // // // // // // // //                     {sections.map((_, index) => (
// // // // // // // // // // // // //                       <button
// // // // // // // // // // // // //                         key={index}
// // // // // // // // // // // // //                         onClick={() => setCurrentSection(index)}
// // // // // // // // // // // // //                         className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
// // // // // // // // // // // // //                           index === currentSection 
// // // // // // // // // // // // //                             ? 'w-12 bg-primary' 
// // // // // // // // // // // // //                             : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // // // // //                         }`}
// // // // // // // // // // // // //                       />
// // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // // //                 <Button
// // // // // // // // // // // // //                   variant="ghost"
// // // // // // // // // // // // //                   size="icon"
// // // // // // // // // // // // //                   onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // // // // // // // // // // //                   disabled={currentSection === sections.length - 1}
// // // // // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <ChevronRight className="w-6 h-6" />
// // // // // // // // // // // // //                 </Button>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </CardHeader>
            
// // // // // // // // // // // // //             <CardContent
// // // // // // // // // // // // //               ref={cardRef}
// // // // // // // // // // // // //               onMouseDown={handleMouseDown}
// // // // // // // // // // // // //               className="relative overflow-hidden cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // // // // //               style={{
// // // // // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // // // // //               }}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // // // // //             </CardContent>
// // // // // // // // // // // // //           </Card>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Skills & Proficiency Section */}
// // // // // // // // // // // // //         <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // // // // // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // // // // // // // //             Skills & Proficiency
// // // // // // // // // // // // //           </h2>
          
// // // // // // // // // // // // //           {/* First Row: Languages & Frameworks */}
// // // // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500`}>
// // // // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-blue-500/10 text-blue-700`}>
// // // // // // // // // // // // //                     <Code className="w-5 h-5" />
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // //                   {skills.languages.map((skill, skillIndex) => (
// // // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // //             </Card>

// // // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500`}>
// // // // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-green-500/10 text-green-700`}>
// // // // // // // // // // // // //                     <Globe className="w-5 h-5" />
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           {/* Second Row: Databases & Development Tools */}
// // // // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-purple-500`}>
// // // // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-purple-500/10 text-purple-700`}>
// // // // // // // // // // // // //                     <Database className="w-5 h-5" />
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // //                   {skills.databases.map((skill, skillIndex) => (
// // // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // //             </Card>

// // // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-orange-500`}>
// // // // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-orange-500/10 text-orange-700`}>
// // // // // // // // // // // // //                     <Wrench className="w-5 h-5" />
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // //                   {skills.tools.map((skill, skillIndex) => (
// // // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // // //                     >
// // // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           {/* Third Row: Team Leadership & API Testing */}
// // // // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // // // // // // // // // // // //             {additionalSkills.map((category, index) => (
// // // // // // // // // // // // //               <Card 
// // // // // // // // // // // // //                 key={index} 
// // // // // // // // // // // // //                 className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 ${
// // // // // // // // // // // // //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// // // // // // // // // // // // //                 }`}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <CardHeader className="pb-3">
// // // // // // // // // // // // //                   <div className="flex items-center gap-3">
// // // // // // // // // // // // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // // // // // // // // // // // //                       {(() => {
// // // // // // // // // // // // //                         const Icon = category.displayIcon;
// // // // // // // // // // // // //                         return <Icon className="w-5 h-5" />;
// // // // // // // // // // // // //                       })()}
// // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // // // //                 <CardContent>
// // // // // // // // // // // // //                   <div className="space-y-2">
// // // // // // // // // // // // //                     {category.items.map((skill, skillIndex) => (
// // // // // // // // // // // // //                       <div 
// // // // // // // // // // // // //                         key={skillIndex} 
// // // // // // // // // // // // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // // // // // // // // // // //                       >
// // // // // // // // // // // // //                         {(() => {
// // // // // // // // // // // // //                           const SkillIcon = skill.icon;
// // // // // // // // // // // // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // // // // // // // // // // // //                         })()}
// // // // // // // // // // // // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // // //               </Card>
// // // // // // // // // // // // //             ))}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default About;
// // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star } from "lucide-react";
// // // // // // // // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // // // // // // // const About = () => {
// // // // // // // // // // // //   const [currentSection, setCurrentSection] = useState(0);
// // // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // // // // // // // // //   const [startX, setStartX] = useState(0);
// // // // // // // // // // // //   const [translateX, setTranslateX] = useState(0);
// // // // // // // // // // // //   const cardRef = useRef(null);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     // Trigger animations after component mounts
// // // // // // // // // // // //     const timer = setTimeout(() => {
// // // // // // // // // // // //       setIsVisible(true);
// // // // // // // // // // // //     }, 100);

// // // // // // // // // // // //     return () => clearTimeout(timer);
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   const sections = [
// // // // // // // // // // // //     {
// // // // // // // // // // // //       title: "Professional Summary",
// // // // // // // // // // // //       icon: User,
// // // // // // // // // // // //       content: (
// // // // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // // // //           {/* Mobile and Tablet version (sm and md screens) */}
// // // // // // // // // // // //           <p className="lg:hidden text-gray-700 dark:text-gray-300">
// // // // // // // // // // // //             Web Developer with 6 months of experience at Webgeon Results, skilled in React, Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful digital experiences, and building responsive, user-centric solutions. Focused on performance, accessibility, and modern web standards to deliver scalable, maintainable, and future-ready applications.
// // // // // // // // // // // //           </p>
          
// // // // // // // // // // // //           {/* Desktop version (lg screens and above) */}
// // // // // // // // // // // //           <div className="hidden lg:block space-y-4">
// // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js. Proficient in developing clean, maintainable code and delivering user-centric solutions.
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // //               Strong team collaborator with a focus on performance, accessibility, and modern web standards to support scalable and efficient development.
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // //               My journey in web development has been driven by a passion for problem-solving and creating meaningful digital experiences. I thrive in collaborative environments where innovation meets practical implementation, consistently delivering projects that exceed client expectations.
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // //               I believe in staying current with emerging technologies and industry best practices, ensuring that every solution I develop is not only functional but also future-ready and maintainable.
// // // // // // // // // // // //             </p>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       title: "Key Strengths",
// // // // // // // // // // // //       icon: Star,
// // // // // // // // // // // //       content: (
// // // // // // // // // // // //         <div className="space-y-3 text-base sm:text-lg">
// // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Decision-making skills and team leadership</span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Performance optimization and accessibility focus</span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code practices</span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Timely project delivery</span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Continuous learning and adaptation to new technologies</span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">User experience optimization and responsive design</span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       title: "Development Philosophy",
// // // // // // // // // // // //       icon: Heart,
// // // // // // // // // // // //       content: (
// // // // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // // // //           <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // // //             I approach every project with a user-first mindset, ensuring that technical excellence translates into intuitive and engaging user experiences. My goal is to bridge the gap between complex functionality and seamless usability.
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )
// // // // // // // // // // // //     }
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   const skills = {
// // // // // // // // // // // //     languages: [
// // // // // // // // // // // //       { name: "Python", icon: "🐍" },
// // // // // // // // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // // // // // // // //       { name: "HTML", icon: "🌐" },
// // // // // // // // // // // //       { name: "CSS", icon: "🎨" }
// // // // // // // // // // // //     ],
// // // // // // // // // // // //     frameworks: [
// // // // // // // // // // // //       { name: "Next.js", icon: "▲" },
// // // // // // // // // // // //       { name: "React", icon: "⚛️" },
// // // // // // // // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // // // // // // // //     ],
// // // // // // // // // // // //     databases: [
// // // // // // // // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // // // // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // // // // // // // //     ],
// // // // // // // // // // // //     tools: [
// // // // // // // // // // // //       { name: "VS Code", icon: "💻" },
// // // // // // // // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // // // // // // // //       { name: "Postman", icon: "📮" }
// // // // // // // // // // // //     ]
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const additionalSkills = [
// // // // // // // // // // // //     {
// // // // // // // // // // // //       title: "Team Leadership",
// // // // // // // // // // // //       icon: Users,
// // // // // // // // // // // //       items: [
// // // // // // // // // // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // // // // // // // // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // // // // // // // // // //       ],
// // // // // // // // // // // //       color: "bg-red-500/10 text-red-700",
// // // // // // // // // // // //       displayIcon: Target
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       title: "API Testing",
// // // // // // // // // // // //       icon: TestTube,
// // // // // // // // // // // //       items: [
// // // // // // // // // // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // // // // // // // // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // // // // // // // // // //       ],
// // // // // // // // // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // // // // // // // // //       displayIcon: Server
// // // // // // // // // // // //     }
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   // Touch event handlers
// // // // // // // // // // // //   const handleTouchStart = (e) => {
// // // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // // //     setStartX(e.touches[0].clientX);
// // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleTouchMove = (e) => {
// // // // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // // // //     const currentX = e.touches[0].clientX;
// // // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleTouchEnd = () => {
// // // // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // // // //     const threshold = 50;
// // // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // // //     }
// // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Mouse event handlers for desktop
// // // // // // // // // // // //   const handleMouseDown = (e) => {
// // // // // // // // // // // //     if (window.innerWidth < 1024) return; // Only enable on desktop
// // // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // // //     setStartX(e.clientX);
// // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleMouseMove = (e) => {
// // // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // // // //     const currentX = e.clientX;
// // // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleMouseUp = () => {
// // // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // // // //     const threshold = 50;
// // // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // // //     }
// // // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Add mouse event listeners
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (isDragging && window.innerWidth >= 1024) {
// // // // // // // // // // // //       document.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // //       document.addEventListener('mouseup', handleMouseUp);
      
// // // // // // // // // // // //       return () => {
// // // // // // // // // // // //         document.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // // // //         document.removeEventListener('mouseup', handleMouseUp);
// // // // // // // // // // // //       };
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [isDragging, startX]);

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // // // // // // // // // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // // // // // // // // // // //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // // // // // // // // // //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
// // // // // // // // // // // //             About Me
// // // // // // // // // // // //           </h1>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Mobile View: Single Swipeable Box */}
// // // // // // // // // // // //         <div className="lg:hidden w-full">
// // // // // // // // // // // //           {/* Mobile Header with Navigation Dots */}
// // // // // // // // // // // //           <Card className="mb-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 w-full max-w-full">
// // // // // // // // // // // //             <CardHeader className="text-center pb-4">
// // // // // // // // // // // //               <div className="flex items-center justify-center mb-3">
// // // // // // // // // // // //                 {(() => {
// // // // // // // // // // // //                   const Icon = sections[currentSection].icon;
// // // // // // // // // // // //                   return <Icon className="w-10 h-10 text-primary" />;
// // // // // // // // // // // //                 })()}
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //               <CardTitle className="text-2xl font-bold text-primary">
// // // // // // // // // // // //                 {sections[currentSection].title}
// // // // // // // // // // // //               </CardTitle>
// // // // // // // // // // // //               <div className="flex justify-center gap-2 mt-4">
// // // // // // // // // // // //                 {sections.map((_, index) => (
// // // // // // // // // // // //                   <button
// // // // // // // // // // // //                     key={index}
// // // // // // // // // // // //                     onClick={() => setCurrentSection(index)}
// // // // // // // // // // // //                     className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-black ${
// // // // // // // // // // // //                       index === currentSection ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // // // //                     }`}
// // // // // // // // // // // //                   />
// // // // // // // // // // // //                 ))}
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </CardHeader>
// // // // // // // // // // // //             {/* Mobile Swipeable Content */}
// // // // // // // // // // // //             <CardContent
// // // // // // // // // // // //               ref={cardRef}
// // // // // // // // // // // //               onTouchStart={handleTouchStart}
// // // // // // // // // // // //               onTouchMove={handleTouchMove}
// // // // // // // // // // // //               onTouchEnd={handleTouchEnd}
// // // // // // // // // // // //               className="relative overflow-hidden touch-pan-y active:cursor-grabbing active:scale-[0.98] transition-transform hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // // // //               style={{
// // // // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // // // //               }}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // // // //             </CardContent>
// // // // // // // // // // // //             {/* Mobile swipe hint */}
// // // // // // // // // // // //             <div className="text-center pb-4 text-sm text-gray-500 dark:text-gray-400">
// // // // // // // // // // // //               Swipe to navigate
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </Card>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Desktop View: Single Swipeable Box with Navigation */}
// // // // // // // // // // // //         <div className="hidden lg:block">
// // // // // // // // // // // //           <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 select-none">
// // // // // // // // // // // //             {/* Desktop Navigation Arrows */}
// // // // // // // // // // // //             <CardHeader className="relative pb-6">
// // // // // // // // // // // //               <div className="flex items-center justify-between gap-4">
// // // // // // // // // // // //                 <Button
// // // // // // // // // // // //                   variant="ghost"
// // // // // // // // // // // //                   size="icon"
// // // // // // // // // // // //                   onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // // // // // // // // // //                   disabled={currentSection === 0}
// // // // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   <ChevronLeft className="w-6 h-6" />
// // // // // // // // // // // //                 </Button>
                
// // // // // // // // // // // //                 {/* Desktop: Show title with arrows */}
// // // // // // // // // // // //                 <div className="flex-1 text-center">
// // // // // // // // // // // //                   <CardTitle className="text-3xl font-bold text-primary mb-4">
// // // // // // // // // // // //                     {sections[currentSection].title}
// // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // //                   <div className="flex justify-center gap-2">
// // // // // // // // // // // //                     {sections.map((_, index) => (
// // // // // // // // // // // //                       <button
// // // // // // // // // // // //                         key={index}
// // // // // // // // // // // //                         onClick={() => setCurrentSection(index)}
// // // // // // // // // // // //                         className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-black ${
// // // // // // // // // // // //                           index === currentSection 
// // // // // // // // // // // //                             ? 'w-12 bg-primary' 
// // // // // // // // // // // //                             : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // // // //                         }`}
// // // // // // // // // // // //                       />
// // // // // // // // // // // //                     ))}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
                
// // // // // // // // // // // //                 <Button
// // // // // // // // // // // //                   variant="ghost"
// // // // // // // // // // // //                   size="icon"
// // // // // // // // // // // //                   onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // // // // // // // // // //                   disabled={currentSection === sections.length - 1}
// // // // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   <ChevronRight className="w-6 h-6" />
// // // // // // // // // // // //                 </Button>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </CardHeader>
            
// // // // // // // // // // // //             <CardContent
// // // // // // // // // // // //               ref={cardRef}
// // // // // // // // // // // //               onMouseDown={handleMouseDown}
// // // // // // // // // // // //               className="relative overflow-hidden cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // // // //               style={{
// // // // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // // // //               }}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // // // //             </CardContent>
// // // // // // // // // // // //           </Card>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Skills & Proficiency Section */}
// // // // // // // // // // // //         <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // // // // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // // // // // // //             Skills & Proficiency
// // // // // // // // // // // //           </h2>
          
// // // // // // // // // // // //           {/* First Row: Languages & Frameworks */}
// // // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500`}>
// // // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-blue-500/10 text-blue-700`}>
// // // // // // // // // // // //                     <Code className="w-5 h-5" />
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // // //                   {skills.languages.map((skill, skillIndex) => (
// // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // //                     >
// // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // //             </Card>

// // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500`}>
// // // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-green-500/10 text-green-700`}>
// // // // // // // // // // // //                     <Globe className="w-5 h-5" />
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // //                     >
// // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // //             </Card>
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* Second Row: Databases & Development Tools */}
// // // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-purple-500`}>
// // // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-purple-500/10 text-purple-700`}>
// // // // // // // // // // // //                     <Database className="w-5 h-5" />
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // // //                   {skills.databases.map((skill, skillIndex) => (
// // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // //                     >
// // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // //             </Card>

// // // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-orange-500`}>
// // // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-orange-500/10 text-orange-700`}>
// // // // // // // // // // // //                     <Wrench className="w-5 h-5" />
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </CardHeader>
// // // // // // // // // // // //               <CardContent>
// // // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // // //                   {skills.tools.map((skill, skillIndex) => (
// // // // // // // // // // // //                     <Badge 
// // // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // // //                     >
// // // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // // //                       {skill.name}
// // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // //             </Card>
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* Third Row: Team Leadership & API Testing */}
// // // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // // // // // // // // // // //             {additionalSkills.map((category, index) => (
// // // // // // // // // // // //               <Card 
// // // // // // // // // // // //                 key={index} 
// // // // // // // // // // // //                 className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 ${
// // // // // // // // // // // //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// // // // // // // // // // // //                 }`}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <CardHeader className="pb-3">
// // // // // // // // // // // //                   <div className="flex items-center gap-3">
// // // // // // // // // // // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // // // // // // // // // // //                       {(() => {
// // // // // // // // // // // //                         const Icon = category.displayIcon;
// // // // // // // // // // // //                         return <Icon className="w-5 h-5" />;
// // // // // // // // // // // //                       })()}
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // // //                 <CardContent>
// // // // // // // // // // // //                   <div className="space-y-2">
// // // // // // // // // // // //                     {category.items.map((skill, skillIndex) => (
// // // // // // // // // // // //                       <div 
// // // // // // // // // // // //                         key={skillIndex} 
// // // // // // // // // // // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // // // // // // // // // //                       >
// // // // // // // // // // // //                         {(() => {
// // // // // // // // // // // //                           const SkillIcon = skill.icon;
// // // // // // // // // // // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // // // // // // // // // // //                         })()}
// // // // // // // // // // // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// // // // // // // // // // // //                       </div>
// // // // // // // // // // // //                     ))}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // //               </Card>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default About;
// // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star } from "lucide-react";
// // // // // // // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // // // // // // const About = () => {
// // // // // // // // // // //   const [currentSection, setCurrentSection] = useState(0);
// // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // // // // // // // //   const [startX, setStartX] = useState(0);
// // // // // // // // // // //   const [translateX, setTranslateX] = useState(0);
// // // // // // // // // // //   const cardRef = useRef(null);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     // Trigger animations after component mounts
// // // // // // // // // // //     const timer = setTimeout(() => {
// // // // // // // // // // //       setIsVisible(true);
// // // // // // // // // // //     }, 100);

// // // // // // // // // // //     return () => clearTimeout(timer);
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const sections = [
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Professional Summary",
// // // // // // // // // // //       icon: User,
// // // // // // // // // // //       content: (
// // // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // // //           {/* Mobile and Tablet version (sm and md screens) */}
// // // // // // // // // // //           <p className="lg:hidden text-gray-700 dark:text-gray-300">
// // // // // // // // // // //             Web Developer with 6 months of experience at Webgeon Results, skilled in React, Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful digital experiences, and building responsive, user-centric solutions. Focused on performance, accessibility, and modern web standards to deliver scalable, maintainable, and future-ready applications.
// // // // // // // // // // //           </p>
          
// // // // // // // // // // //           {/* Desktop version (lg screens and above) */}
// // // // // // // // // // //           <div className="hidden lg:block space-y-4">
// // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js. Proficient in developing clean, maintainable code and delivering user-centric solutions.
// // // // // // // // // // //             </p>
// // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // //               Strong team collaborator with a focus on performance, accessibility, and modern web standards to support scalable and efficient development.
// // // // // // // // // // //             </p>
// // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // //               My journey in web development has been driven by a passion for problem-solving and creating meaningful digital experiences. I thrive in collaborative environments where innovation meets practical implementation, consistently delivering projects that exceed client expectations.
// // // // // // // // // // //             </p>
// // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // //               I believe in staying current with emerging technologies and industry best practices, ensuring that every solution I develop is not only functional but also future-ready and maintainable.
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Key Strengths",
// // // // // // // // // // //       icon: Star,
// // // // // // // // // // //       content: (
// // // // // // // // // // //         <div className="space-y-3 text-base sm:text-lg">
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Decision-making skills and team leadership</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Performance optimization and accessibility focus</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code practices</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Timely project delivery</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Continuous learning and adaptation to new technologies</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">User experience optimization and responsive design</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Development Philosophy",
// // // // // // // // // // //       icon: Heart,
// // // // // // // // // // //       content: (
// // // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // // //           <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // //             I approach every project with a user-first mindset, ensuring that technical excellence translates into intuitive and engaging user experiences. My goal is to bridge the gap between complex functionality and seamless usability.
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const skills = {
// // // // // // // // // // //     languages: [
// // // // // // // // // // //       { name: "Python", icon: "🐍" },
// // // // // // // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // // // // // // //       { name: "HTML", icon: "🌐" },
// // // // // // // // // // //       { name: "CSS", icon: "🎨" }
// // // // // // // // // // //     ],
// // // // // // // // // // //     frameworks: [
// // // // // // // // // // //       { name: "Next.js", icon: "▲" },
// // // // // // // // // // //       { name: "React", icon: "⚛️" },
// // // // // // // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // // // // // // //     ],
// // // // // // // // // // //     databases: [
// // // // // // // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // // // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // // // // // // //     ],
// // // // // // // // // // //     tools: [
// // // // // // // // // // //       { name: "VS Code", icon: "💻" },
// // // // // // // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // // // // // // //       { name: "Postman", icon: "📮" }
// // // // // // // // // // //     ]
// // // // // // // // // // //   };

// // // // // // // // // // //   const additionalSkills = [
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Team Leadership",
// // // // // // // // // // //       icon: Users,
// // // // // // // // // // //       items: [
// // // // // // // // // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // // // // // // // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // // // // // // // // //       ],
// // // // // // // // // // //       color: "bg-red-500/10 text-red-700",
// // // // // // // // // // //       displayIcon: Target
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "API Testing",
// // // // // // // // // // //       icon: TestTube,
// // // // // // // // // // //       items: [
// // // // // // // // // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // // // // // // // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // // // // // // // // //       ],
// // // // // // // // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // // // // // // // //       displayIcon: Server
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   // Touch event handlers
// // // // // // // // // // //   const handleTouchStart = (e) => {
// // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // //     setStartX(e.touches[0].clientX);
// // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleTouchMove = (e) => {
// // // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // // //     const currentX = e.touches[0].clientX;
// // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleTouchEnd = () => {
// // // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // // //     const threshold = 50;
// // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // //     }
// // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // //   };

// // // // // // // // // // //   // Mouse event handlers for desktop
// // // // // // // // // // //   const handleMouseDown = (e) => {
// // // // // // // // // // //     if (window.innerWidth < 1024) return; // Only enable on desktop
// // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // //     setStartX(e.clientX);
// // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleMouseMove = (e) => {
// // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // // //     const currentX = e.clientX;
// // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleMouseUp = () => {
// // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // // //     const threshold = 50;
// // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // //     }
// // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // //   };

// // // // // // // // // // //   // Add mouse event listeners
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (isDragging && window.innerWidth >= 1024) {
// // // // // // // // // // //       document.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // // //       document.addEventListener('mouseup', handleMouseUp);
      
// // // // // // // // // // //       return () => {
// // // // // // // // // // //         document.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // // //         document.removeEventListener('mouseup', handleMouseUp);
// // // // // // // // // // //       };
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [isDragging, startX]);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div id="about" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // // // // // // // // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // // // // // // // // // //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // // // // // // // // //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
// // // // // // // // // // //             About Me
// // // // // // // // // // //           </h1>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Mobile View: Single Swipeable Box */}
// // // // // // // // // // //         <div className="lg:hidden w-full">
// // // // // // // // // // //           {/* Mobile Header with Navigation Dots */}
// // // // // // // // // // //           <Card className="mb-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 w-full max-w-full">
// // // // // // // // // // //             <CardHeader className="text-center pb-4">
// // // // // // // // // // //               <div className="flex items-center justify-center mb-3">
// // // // // // // // // // //                 {(() => {
// // // // // // // // // // //                   const Icon = sections[currentSection].icon;
// // // // // // // // // // //                   return <Icon className="w-10 h-10 text-primary" />;
// // // // // // // // // // //                 })()}
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <CardTitle className="text-2xl font-bold text-primary">
// // // // // // // // // // //                 {sections[currentSection].title}
// // // // // // // // // // //               </CardTitle>
// // // // // // // // // // //               <div className="flex justify-center gap-2 mt-4">
// // // // // // // // // // //                 {sections.map((_, index) => (
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     key={index}
// // // // // // // // // // //                     onClick={() => setCurrentSection(index)}
// // // // // // // // // // //                     className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-2 dark:focus:ring-black ${
// // // // // // // // // // //                       index === currentSection ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // // //                     }`}
// // // // // // // // // // //                   />
// // // // // // // // // // //                 ))}
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </CardHeader>
// // // // // // // // // // //             {/* Mobile Swipeable Content */}
// // // // // // // // // // //             <CardContent
// // // // // // // // // // //               ref={cardRef}
// // // // // // // // // // //               onTouchStart={handleTouchStart}
// // // // // // // // // // //               onTouchMove={handleTouchMove}
// // // // // // // // // // //               onTouchEnd={handleTouchEnd}
// // // // // // // // // // //               className="relative overflow-hidden touch-pan-y active:cursor-grabbing active:scale-[0.98] transition-transform hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // // //               style={{
// // // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // // //               }}
// // // // // // // // // // //             >
// // // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // // //             </CardContent>
// // // // // // // // // // //             {/* Mobile swipe hint */}
// // // // // // // // // // //             <div className="text-center pb-4 text-sm text-gray-500 dark:text-gray-400">
// // // // // // // // // // //               Swipe to navigate
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </Card>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Desktop View: Single Swipeable Box with Navigation */}
// // // // // // // // // // //         <div className="hidden lg:block">
// // // // // // // // // // //           <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 select-none">
// // // // // // // // // // //             {/* Desktop Navigation Arrows */}
// // // // // // // // // // //             <CardHeader className="relative pb-6">
// // // // // // // // // // //               <div className="flex items-center justify-between gap-4">
// // // // // // // // // // //                 <Button
// // // // // // // // // // //                   variant="ghost"
// // // // // // // // // // //                   size="icon"
// // // // // // // // // // //                   onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // // // // // // // // //                   disabled={currentSection === 0}
// // // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <ChevronLeft className="w-6 h-6" />
// // // // // // // // // // //                 </Button>
                
// // // // // // // // // // //                 {/* Desktop: Show title with arrows */}
// // // // // // // // // // //                 <div className="flex-1 text-center">
// // // // // // // // // // //                   <CardTitle className="text-3xl font-bold text-primary mb-4">
// // // // // // // // // // //                     {sections[currentSection].title}
// // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // //                   <div className="flex justify-center gap-2">
// // // // // // // // // // //                     {sections.map((_, index) => (
// // // // // // // // // // //                       <button
// // // // // // // // // // //                         key={index}
// // // // // // // // // // //                         onClick={() => setCurrentSection(index)}
// // // // // // // // // // //                         className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-2 dark:focus:ring-black ${
// // // // // // // // // // //                           index === currentSection 
// // // // // // // // // // //                             ? 'w-12 bg-primary' 
// // // // // // // // // // //                             : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // // //                         }`}
// // // // // // // // // // //                       />
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
                
// // // // // // // // // // //                 <Button
// // // // // // // // // // //                   variant="ghost"
// // // // // // // // // // //                   size="icon"
// // // // // // // // // // //                   onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // // // // // // // // //                   disabled={currentSection === sections.length - 1}
// // // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <ChevronRight className="w-6 h-6" />
// // // // // // // // // // //                 </Button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </CardHeader>
            
// // // // // // // // // // //             <CardContent
// // // // // // // // // // //               ref={cardRef}
// // // // // // // // // // //               onMouseDown={handleMouseDown}
// // // // // // // // // // //               className="relative overflow-hidden cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // // //               style={{
// // // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // // //               }}
// // // // // // // // // // //             >
// // // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // // //             </CardContent>
// // // // // // // // // // //           </Card>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Skills & Proficiency Section */}
// // // // // // // // // // //         <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // // // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // // // // // //             Skills & Proficiency
// // // // // // // // // // //           </h2>
          
// // // // // // // // // // //           {/* First Row: Languages & Frameworks */}
// // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500`}>
// // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-blue-500/10 text-blue-700`}>
// // // // // // // // // // //                     <Code className="w-5 h-5" />
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                   {skills.languages.map((skill, skillIndex) => (
// // // // // // // // // // //                     <Badge 
// // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // //                       {skill.name}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>

// // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500`}>
// // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-green-500/10 text-green-700`}>
// // // // // // // // // // //                     <Globe className="w-5 h-5" />
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // // // // // // // // //                     <Badge 
// // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // //                       {skill.name}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Second Row: Databases & Development Tools */}
// // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-purple-500`}>
// // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-purple-500/10 text-purple-700`}>
// // // // // // // // // // //                     <Database className="w-5 h-5" />
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                   {skills.databases.map((skill, skillIndex) => (
// // // // // // // // // // //                     <Badge 
// // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // //                       {skill.name}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>

// // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-orange-500`}>
// // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-orange-500/10 text-orange-700`}>
// // // // // // // // // // //                     <Wrench className="w-5 h-5" />
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                   {skills.tools.map((skill, skillIndex) => (
// // // // // // // // // // //                     <Badge 
// // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // //                       {skill.name}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Third Row: Team Leadership & API Testing */}
// // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // // // // // // // // // //             {additionalSkills.map((category, index) => (
// // // // // // // // // // //               <Card 
// // // // // // // // // // //                 key={index} 
// // // // // // // // // // //                 className={`shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 ${
// // // // // // // // // // //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// // // // // // // // // // //                 }`}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <CardHeader className="pb-3">
// // // // // // // // // // //                   <div className="flex items-center gap-3">
// // // // // // // // // // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // // // // // // // // // //                       {(() => {
// // // // // // // // // // //                         const Icon = category.displayIcon;
// // // // // // // // // // //                         return <Icon className="w-5 h-5" />;
// // // // // // // // // // //                       })()}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // //                 <CardContent>
// // // // // // // // // // //                   <div className="space-y-2">
// // // // // // // // // // //                     {category.items.map((skill, skillIndex) => (
// // // // // // // // // // //                       <div 
// // // // // // // // // // //                         key={skillIndex} 
// // // // // // // // // // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // // // // // // // // //                       >
// // // // // // // // // // //                         {(() => {
// // // // // // // // // // //                           const SkillIcon = skill.icon;
// // // // // // // // // // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // // // // // // // // // //                         })()}
// // // // // // // // // // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </CardContent>
// // // // // // // // // // //               </Card>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default About;
// // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star } from "lucide-react";
// // // // // // // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // // // // // // const About = () => {
// // // // // // // // // // //   const [currentSection, setCurrentSection] = useState(0);
// // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // // // // // // // //   const [startX, setStartX] = useState(0);
// // // // // // // // // // //   const [translateX, setTranslateX] = useState(0);
// // // // // // // // // // //   const [skillsVisible, setSkillsVisible] = useState(false);
// // // // // // // // // // //   const cardRef = useRef(null);
// // // // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // // // //   const skillsRef = useRef(null);

// // // // // // // // // // //   // Intersection Observer for main section
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // //       (entries) => {
// // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // //             setIsVisible(true);
// // // // // // // // // // //           } else {
// // // // // // // // // // //             setIsVisible(false);
// // // // // // // // // // //           }
// // // // // // // // // // //         });
// // // // // // // // // // //       },
// // // // // // // // // // //       { 
// // // // // // // // // // //         threshold: 0.1,
// // // // // // // // // // //         rootMargin: "0px"
// // // // // // // // // // //       }
// // // // // // // // // // //     );

// // // // // // // // // // //     if (sectionRef.current) {
// // // // // // // // // // //       observer.observe(sectionRef.current);
// // // // // // // // // // //     }

// // // // // // // // // // //     return () => {
// // // // // // // // // // //       if (sectionRef.current) {
// // // // // // // // // // //         observer.unobserve(sectionRef.current);
// // // // // // // // // // //       }
// // // // // // // // // // //     };
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   // Intersection Observer for skills section
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // //       (entries) => {
// // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // //             setSkillsVisible(true);
// // // // // // // // // // //           } else {
// // // // // // // // // // //             setSkillsVisible(false);
// // // // // // // // // // //           }
// // // // // // // // // // //         });
// // // // // // // // // // //       },
// // // // // // // // // // //       { 
// // // // // // // // // // //         threshold: 0.1,
// // // // // // // // // // //         rootMargin: "0px"
// // // // // // // // // // //       }
// // // // // // // // // // //     );

// // // // // // // // // // //     if (skillsRef.current) {
// // // // // // // // // // //       observer.observe(skillsRef.current);
// // // // // // // // // // //     }

// // // // // // // // // // //     return () => {
// // // // // // // // // // //       if (skillsRef.current) {
// // // // // // // // // // //         observer.unobserve(skillsRef.current);
// // // // // // // // // // //       }
// // // // // // // // // // //     };
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const sections = [
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Professional Summary",
// // // // // // // // // // //       icon: User,
// // // // // // // // // // //       content: (
// // // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // // //           {/* Mobile and Tablet version (sm and md screens) */}
// // // // // // // // // // //           <p className="lg:hidden text-gray-700 dark:text-gray-300">
// // // // // // // // // // //             Web Developer with 6 months of experience at Webgeon Results, skilled in React, Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful digital experiences, and building responsive, user-centric solutions. Focused on performance, accessibility, and modern web standards to deliver scalable, maintainable, and future-ready applications.
// // // // // // // // // // //           </p>
          
// // // // // // // // // // //           {/* Desktop version (lg screens and above) */}
// // // // // // // // // // //           <div className="hidden lg:block space-y-4">
// // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js. Proficient in developing clean, maintainable code and delivering user-centric solutions.
// // // // // // // // // // //             </p>
// // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // //               Strong team collaborator with a focus on performance, accessibility, and modern web standards to support scalable and efficient development.
// // // // // // // // // // //             </p>
// // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // //               My journey in web development has been driven by a passion for problem-solving and creating meaningful digital experiences. I thrive in collaborative environments where innovation meets practical implementation, consistently delivering projects that exceed client expectations.
// // // // // // // // // // //             </p>
// // // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // //               I believe in staying current with emerging technologies and industry best practices, ensuring that every solution I develop is not only functional but also future-ready and maintainable.
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Key Strengths",
// // // // // // // // // // //       icon: Star,
// // // // // // // // // // //       content: (
// // // // // // // // // // //         <div className="space-y-3 text-base sm:text-lg">
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Decision-making skills and team leadership</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Performance optimization and accessibility focus</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code practices</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Timely project delivery</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Continuous learning and adaptation to new technologies</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">User experience optimization and responsive design</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Development Philosophy",
// // // // // // // // // // //       icon: Heart,
// // // // // // // // // // //       content: (
// // // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // // //           <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // // //             I approach every project with a user-first mindset, ensuring that technical excellence translates into intuitive and engaging user experiences. My goal is to bridge the gap between complex functionality and seamless usability.
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const skills = {
// // // // // // // // // // //     languages: [
// // // // // // // // // // //       { name: "Python", icon: "🐍" },
// // // // // // // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // // // // // // //       { name: "HTML", icon: "🌐" },
// // // // // // // // // // //       { name: "CSS", icon: "🎨" }
// // // // // // // // // // //     ],
// // // // // // // // // // //     frameworks: [
// // // // // // // // // // //       { name: "Next.js", icon: "▲" },
// // // // // // // // // // //       { name: "React", icon: "⚛️" },
// // // // // // // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // // // // // // //     ],
// // // // // // // // // // //     databases: [
// // // // // // // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // // // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // // // // // // //     ],
// // // // // // // // // // //     tools: [
// // // // // // // // // // //       { name: "VS Code", icon: "💻" },
// // // // // // // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // // // // // // //       { name: "Postman", icon: "📮" }
// // // // // // // // // // //     ]
// // // // // // // // // // //   };

// // // // // // // // // // //   const additionalSkills = [
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Team Leadership",
// // // // // // // // // // //       icon: Users,
// // // // // // // // // // //       items: [
// // // // // // // // // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // // // // // // // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // // // // // // // // //       ],
// // // // // // // // // // //       color: "bg-red-500/10 text-red-700",
// // // // // // // // // // //       displayIcon: Target
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "API Testing",
// // // // // // // // // // //       icon: TestTube,
// // // // // // // // // // //       items: [
// // // // // // // // // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // // // // // // // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // // // // // // // // //       ],
// // // // // // // // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // // // // // // // //       displayIcon: Server
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   // Touch event handlers
// // // // // // // // // // //   const handleTouchStart = (e) => {
// // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // //     setStartX(e.touches[0].clientX);
// // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleTouchMove = (e) => {
// // // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // // //     const currentX = e.touches[0].clientX;
// // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleTouchEnd = () => {
// // // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // // //     const threshold = 50;
// // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // //     }
// // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // //   };

// // // // // // // // // // //   // Mouse event handlers for desktop
// // // // // // // // // // //   const handleMouseDown = (e) => {
// // // // // // // // // // //     if (window.innerWidth < 1024) return;
// // // // // // // // // // //     setIsDragging(true);
// // // // // // // // // // //     setStartX(e.clientX);
// // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleMouseMove = (e) => {
// // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // // //     const currentX = e.clientX;
// // // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleMouseUp = () => {
// // // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // // //     const threshold = 50;
// // // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // // //     }
// // // // // // // // // // //     setTranslateX(0);
// // // // // // // // // // //   };

// // // // // // // // // // //   // Add mouse event listeners
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (isDragging && window.innerWidth >= 1024) {
// // // // // // // // // // //       document.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // // //       document.addEventListener('mouseup', handleMouseUp);
      
// // // // // // // // // // //       return () => {
// // // // // // // // // // //         document.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // // //         document.removeEventListener('mouseup', handleMouseUp);
// // // // // // // // // // //       };
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [isDragging, startX]);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // // // // // // // // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // // // // // // // // // //         {/* Header with fade in */}
// // // // // // // // // // //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // // // // // // // // //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
// // // // // // // // // // //             About Me
// // // // // // // // // // //           </h1>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Mobile View: Single Swipeable Box with fade in */}
// // // // // // // // // // //         <div className={`lg:hidden w-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // // // //           <Card className="mb-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 w-full max-w-full">
// // // // // // // // // // //             <CardHeader className="text-center pb-4">
// // // // // // // // // // //               <div className="flex items-center justify-center mb-3">
// // // // // // // // // // //                 {(() => {
// // // // // // // // // // //                   const Icon = sections[currentSection].icon;
// // // // // // // // // // //                   return <Icon className="w-10 h-10 text-primary" />;
// // // // // // // // // // //                 })()}
// // // // // // // // // // //               </div>
// // // // // // // // // // //               <CardTitle className="text-2xl font-bold text-primary">
// // // // // // // // // // //                 {sections[currentSection].title}
// // // // // // // // // // //               </CardTitle>
// // // // // // // // // // //               <div className="flex justify-center gap-2 mt-4">
// // // // // // // // // // //                 {sections.map((_, index) => (
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     key={index}
// // // // // // // // // // //                     onClick={() => setCurrentSection(index)}
// // // // // // // // // // //                     className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-2 dark:focus:ring-black ${
// // // // // // // // // // //                       index === currentSection ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // // //                     }`}
// // // // // // // // // // //                   />
// // // // // // // // // // //                 ))}
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </CardHeader>
// // // // // // // // // // //             <CardContent
// // // // // // // // // // //               ref={cardRef}
// // // // // // // // // // //               onTouchStart={handleTouchStart}
// // // // // // // // // // //               onTouchMove={handleTouchMove}
// // // // // // // // // // //               onTouchEnd={handleTouchEnd}
// // // // // // // // // // //               className="relative overflow-hidden touch-pan-y active:cursor-grabbing active:scale-[0.98] transition-transform hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // // //               style={{
// // // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // // //               }}
// // // // // // // // // // //             >
// // // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // // //             </CardContent>
// // // // // // // // // // //             <div className="text-center pb-4 text-sm text-gray-500 dark:text-gray-400">
// // // // // // // // // // //               Swipe to navigate
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </Card>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Desktop View: Single Swipeable Box with Navigation and fade in */}
// // // // // // // // // // //         <div className={`hidden lg:block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // // // //           <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 select-none">
// // // // // // // // // // //             <CardHeader className="relative pb-6">
// // // // // // // // // // //               <div className="flex items-center justify-between gap-4">
// // // // // // // // // // //                 <Button
// // // // // // // // // // //                   variant="ghost"
// // // // // // // // // // //                   size="icon"
// // // // // // // // // // //                   onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // // // // // // // // //                   disabled={currentSection === 0}
// // // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <ChevronLeft className="w-6 h-6" />
// // // // // // // // // // //                 </Button>
                
// // // // // // // // // // //                 <div className="flex-1 text-center">
// // // // // // // // // // //                   <CardTitle className="text-3xl font-bold text-primary mb-4">
// // // // // // // // // // //                     {sections[currentSection].title}
// // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // //                   <div className="flex justify-center gap-2">
// // // // // // // // // // //                     {sections.map((_, index) => (
// // // // // // // // // // //                       <button
// // // // // // // // // // //                         key={index}
// // // // // // // // // // //                         onClick={() => setCurrentSection(index)}
// // // // // // // // // // //                         className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-2 dark:focus:ring-black ${
// // // // // // // // // // //                           index === currentSection 
// // // // // // // // // // //                             ? 'w-12 bg-primary' 
// // // // // // // // // // //                             : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // // //                         }`}
// // // // // // // // // // //                       />
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
                
// // // // // // // // // // //                 <Button
// // // // // // // // // // //                   variant="ghost"
// // // // // // // // // // //                   size="icon"
// // // // // // // // // // //                   onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // // // // // // // // //                   disabled={currentSection === sections.length - 1}
// // // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <ChevronRight className="w-6 h-6" />
// // // // // // // // // // //                 </Button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </CardHeader>
            
// // // // // // // // // // //             <CardContent
// // // // // // // // // // //               ref={cardRef}
// // // // // // // // // // //               onMouseDown={handleMouseDown}
// // // // // // // // // // //               className="relative overflow-hidden cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // // //               style={{
// // // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // // //               }}
// // // // // // // // // // //             >
// // // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // // //             </CardContent>
// // // // // // // // // // //           </Card>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Skills & Proficiency Section with fade in */}
// // // // // // // // // // //         <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // // // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // // // // // //             Skills & Proficiency
// // // // // // // // // // //           </h2>
          
// // // // // // // // // // //           {/* First Row: Languages & Frameworks */}
// // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
// // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-blue-500/10 text-blue-700`}>
// // // // // // // // // // //                     <Code className="w-5 h-5" />
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                   {skills.languages.map((skill, skillIndex) => (
// // // // // // // // // // //                     <Badge 
// // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // //                       {skill.name}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>

// // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
// // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-green-500/10 text-green-700`}>
// // // // // // // // // // //                     <Globe className="w-5 h-5" />
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // // // // // // // // //                     <Badge 
// // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // //                       {skill.name}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Second Row: Databases & Development Tools */}
// // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
// // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-purple-500/10 text-purple-700`}>
// // // // // // // // // // //                     <Database className="w-5 h-5" />
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                   {skills.databases.map((skill, skillIndex) => (
// // // // // // // // // // //                     <Badge 
// // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // //                       {skill.name}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>

// // // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
// // // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // // //                   <div className={`p-2 rounded-lg bg-orange-500/10 text-orange-700`}>
// // // // // // // // // // //                     <Wrench className="w-5 h-5" />
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                   {skills.tools.map((skill, skillIndex) => (
// // // // // // // // // // //                     <Badge 
// // // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // // //                       {skill.name}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Third Row: Team Leadership & API Testing */}
// // // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // // // // // // // // // //             {additionalSkills.map((category, index) => (
// // // // // // // // // // //               <Card 
// // // // // // // // // // //                 key={index} 
// // // // // // // // // // //                 className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
// // // // // // // // // // //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// // // // // // // // // // //                 } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // // // // // // // // // //                 style={{transitionDelay: `${500 + index * 100}ms`}}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <CardHeader className="pb-3">
// // // // // // // // // // //                   <div className="flex items-center gap-3">
// // // // // // // // // // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // // // // // // // // // //                       {(() => {
// // // // // // // // // // //                         const Icon = category.displayIcon;
// // // // // // // // // // //                         return <Icon className="w-5 h-5" />;
// // // // // // // // // // //                       })()}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // //                 <CardContent>
// // // // // // // // // // //                   <div className="space-y-2">
// // // // // // // // // // //                     {category.items.map((skill, skillIndex) => (
// // // // // // // // // // //                       <div 
// // // // // // // // // // //                         key={skillIndex} 
// // // // // // // // // // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // // // // // // // // //                       >
// // // // // // // // // // //                         {(() => {
// // // // // // // // // // //                           const SkillIcon = skill.icon;
// // // // // // // // // // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // // // // // // // // // //                         })()}
// // // // // // // // // // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </CardContent>
// // // // // // // // // // //               </Card>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default About;
// // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight, Target, CheckCircle, Zap, Server, Monitor, Brain, Clock, Send, Shield, User, Heart, Star, GraduationCap, Rocket, Briefcase } from "lucide-react";
// // // // // // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // // // // // const About = () => {
// // // // // // // // // //   const [currentSection, setCurrentSection] = useState(0);
// // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // // // // // // //   const [startX, setStartX] = useState(0);
// // // // // // // // // //   const [translateX, setTranslateX] = useState(0);
// // // // // // // // // //   const [skillsVisible, setSkillsVisible] = useState(false);
// // // // // // // // // //   const [journeyVisible, setJourneyVisible] = useState(false);
// // // // // // // // // //   const cardRef = useRef(null);
// // // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // // //   const skillsRef = useRef(null);
// // // // // // // // // //   const journeyRef = useRef(null);

// // // // // // // // // //   // Intersection Observer for main section
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // //       (entries) => {
// // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // //             setIsVisible(true);
// // // // // // // // // //           } else {
// // // // // // // // // //             setIsVisible(false);
// // // // // // // // // //           }
// // // // // // // // // //         });
// // // // // // // // // //       },
// // // // // // // // // //       { 
// // // // // // // // // //         threshold: 0.1,
// // // // // // // // // //         rootMargin: "0px"
// // // // // // // // // //       }
// // // // // // // // // //     );

// // // // // // // // // //     if (sectionRef.current) {
// // // // // // // // // //       observer.observe(sectionRef.current);
// // // // // // // // // //     }

// // // // // // // // // //     return () => {
// // // // // // // // // //       if (sectionRef.current) {
// // // // // // // // // //         observer.unobserve(sectionRef.current);
// // // // // // // // // //       }
// // // // // // // // // //     };
// // // // // // // // // //   }, []);

// // // // // // // // // //   // Intersection Observer for journey section
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // //       (entries) => {
// // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // //             setJourneyVisible(true);
// // // // // // // // // //           }
// // // // // // // // // //         });
// // // // // // // // // //       },
// // // // // // // // // //       { 
// // // // // // // // // //         threshold: 0.15,
// // // // // // // // // //         rootMargin: "0px"
// // // // // // // // // //       }
// // // // // // // // // //     );

// // // // // // // // // //     if (journeyRef.current) {
// // // // // // // // // //       observer.observe(journeyRef.current);
// // // // // // // // // //     }

// // // // // // // // // //     return () => {
// // // // // // // // // //       if (journeyRef.current) {
// // // // // // // // // //         observer.unobserve(journeyRef.current);
// // // // // // // // // //       }
// // // // // // // // // //     };
// // // // // // // // // //   }, []);

// // // // // // // // // //   // Intersection Observer for skills section
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // //       (entries) => {
// // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // //             setSkillsVisible(true);
// // // // // // // // // //           } else {
// // // // // // // // // //             setSkillsVisible(false);
// // // // // // // // // //           }
// // // // // // // // // //         });
// // // // // // // // // //       },
// // // // // // // // // //       { 
// // // // // // // // // //         threshold: 0.1,
// // // // // // // // // //         rootMargin: "0px"
// // // // // // // // // //       }
// // // // // // // // // //     );

// // // // // // // // // //     if (skillsRef.current) {
// // // // // // // // // //       observer.observe(skillsRef.current);
// // // // // // // // // //     }

// // // // // // // // // //     return () => {
// // // // // // // // // //       if (skillsRef.current) {
// // // // // // // // // //         observer.unobserve(skillsRef.current);
// // // // // // // // // //       }
// // // // // // // // // //     };
// // // // // // // // // //   }, []);

// // // // // // // // // //   const sections = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Professional Summary",
// // // // // // // // // //       icon: User,
// // // // // // // // // //       content: (
// // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // //           {/* Mobile and Tablet version (sm and md screens) */}
// // // // // // // // // //           <p className="lg:hidden text-gray-700 dark:text-gray-300">
// // // // // // // // // //             Web Developer with 6 months of experience at Webgeon Results, skilled in React, Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful digital experiences, and building responsive, user-centric solutions. Focused on performance, accessibility, and modern web standards to deliver scalable, maintainable, and future-ready applications.
// // // // // // // // // //           </p>
          
// // // // // // // // // //           {/* Desktop version (lg screens and above) */}
// // // // // // // // // //           <div className="hidden lg:block space-y-4">
// // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // //               Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js. Proficient in developing clean, maintainable code and delivering user-centric solutions.
// // // // // // // // // //             </p>
// // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // //               Strong team collaborator with a focus on performance, accessibility, and modern web standards to support scalable and efficient development.
// // // // // // // // // //             </p>
// // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // //               My journey in web development has been driven by a passion for problem-solving and creating meaningful digital experiences. I thrive in collaborative environments where innovation meets practical implementation, consistently delivering projects that exceed client expectations.
// // // // // // // // // //             </p>
// // // // // // // // // //             <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // //               I believe in staying current with emerging technologies and industry best practices, ensuring that every solution I develop is not only functional but also future-ready and maintainable.
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Key Strengths",
// // // // // // // // // //       icon: Star,
// // // // // // // // // //       content: (
// // // // // // // // // //         <div className="space-y-3 text-base sm:text-lg">
// // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Decision-making skills and team leadership</span>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Performance optimization and accessibility focus</span>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code practices</span>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Timely project delivery</span>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">Continuous learning and adaptation to new technologies</span>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex items-start gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-200">
// // // // // // // // // //             <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
// // // // // // // // // //             <span className="text-gray-700 dark:text-gray-300">User experience optimization and responsive design</span>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Development Philosophy",
// // // // // // // // // //       icon: Heart,
// // // // // // // // // //       content: (
// // // // // // // // // //         <div className="space-y-4 text-base sm:text-lg leading-relaxed">
// // // // // // // // // //           <p className="text-gray-700 dark:text-gray-300">
// // // // // // // // // //             I approach every project with a user-first mindset, ensuring that technical excellence translates into intuitive and engaging user experiences. My goal is to bridge the gap between complex functionality and seamless usability.
// // // // // // // // // //           </p>
// // // // // // // // // //         </div>
// // // // // // // // // //       )
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   // Career journey (edit the text freely)
// // // // // // // // // //   const journey = [
// // // // // // // // // //     {
// // // // // // // // // //       company: "Emertxe",
// // // // // // // // // //       role: "Full Stack Development & DSA",
// // // // // // // // // //       period: "7-month course",
// // // // // // // // // //       description:
// // // // // // // // // //         "Joined Emertxe to build a strong engineering base, learning full stack development end to end alongside data structures and algorithms.",
// // // // // // // // // //       tags: ["Full Stack", "DSA", "Problem Solving"],
// // // // // // // // // //       icon: GraduationCap,
// // // // // // // // // //       accent: "from-blue-500 to-cyan-500",
// // // // // // // // // //       glow: "shadow-blue-500/30",
// // // // // // // // // //       ring: "ring-blue-500/30",
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       company: "Amazon",
// // // // // // // // // //       role: "ML Data Associate",
// // // // // // // // // //       period: "Next step",
// // // // // // // // // //       description:
// // // // // // // // // //         "Worked with data that powers machine learning systems, building attention to detail, accuracy and quality at scale.",
// // // // // // // // // //       tags: ["Machine Learning", "Data Quality"],
// // // // // // // // // //       icon: Brain,
// // // // // // // // // //       accent: "from-purple-500 to-pink-500",
// // // // // // // // // //       glow: "shadow-purple-500/30",
// // // // // // // // // //       ring: "ring-purple-500/30",
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       company: "Accenture",
// // // // // // // // // //       role: "Placed",
// // // // // // // // // //       period: "The journey begins",
// // // // // // // // // //       description:
// // // // // // // // // //         "Placed at Accenture, where the next chapter starts: real-world delivery, bigger teams and bigger problems to solve.",
// // // // // // // // // //       tags: ["Placed", "New Chapter"],
// // // // // // // // // //       icon: Rocket,
// // // // // // // // // //       accent: "from-amber-400 to-orange-500",
// // // // // // // // // //       glow: "shadow-orange-500/40",
// // // // // // // // // //       ring: "ring-orange-400/40",
// // // // // // // // // //       highlight: true,
// // // // // // // // // //     },
// // // // // // // // // //   ];

// // // // // // // // // //   const skills = {
// // // // // // // // // //     languages: [
// // // // // // // // // //       { name: "Python", icon: "🐍" },
// // // // // // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // // // // // //       { name: "HTML", icon: "🌐" },
// // // // // // // // // //       { name: "CSS", icon: "🎨" }
// // // // // // // // // //     ],
// // // // // // // // // //     frameworks: [
// // // // // // // // // //       { name: "Next.js", icon: "▲" },
// // // // // // // // // //       { name: "React", icon: "⚛️" },
// // // // // // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // // // // // //     ],
// // // // // // // // // //     databases: [
// // // // // // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // // // // // //     ],
// // // // // // // // // //     tools: [
// // // // // // // // // //       { name: "VS Code", icon: "💻" },
// // // // // // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // // // // // //       { name: "Postman", icon: "📮" }
// // // // // // // // // //     ]
// // // // // // // // // //   };

// // // // // // // // // //   const additionalSkills = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Team Leadership",
// // // // // // // // // //       icon: Users,
// // // // // // // // // //       items: [
// // // // // // // // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // // // // // // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // // // // // // // //       ],
// // // // // // // // // //       color: "bg-red-500/10 text-red-700",
// // // // // // // // // //       displayIcon: Target
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "API Testing",
// // // // // // // // // //       icon: TestTube,
// // // // // // // // // //       items: [
// // // // // // // // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // // // // // // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // // // // // // // //       ],
// // // // // // // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // // // // // // //       displayIcon: Server
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   // Touch event handlers
// // // // // // // // // //   const handleTouchStart = (e) => {
// // // // // // // // // //     setIsDragging(true);
// // // // // // // // // //     setStartX(e.touches[0].clientX);
// // // // // // // // // //     setTranslateX(0);
// // // // // // // // // //   };

// // // // // // // // // //   const handleTouchMove = (e) => {
// // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // //     const currentX = e.touches[0].clientX;
// // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // //   };

// // // // // // // // // //   const handleTouchEnd = () => {
// // // // // // // // // //     if (!isDragging) return;
// // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // //     const threshold = 50;
// // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // //     }
// // // // // // // // // //     setTranslateX(0);
// // // // // // // // // //   };

// // // // // // // // // //   // Mouse event handlers for desktop
// // // // // // // // // //   const handleMouseDown = (e) => {
// // // // // // // // // //     if (window.innerWidth < 1024) return;
// // // // // // // // // //     setIsDragging(true);
// // // // // // // // // //     setStartX(e.clientX);
// // // // // // // // // //     setTranslateX(0);
// // // // // // // // // //     e.preventDefault();
// // // // // // // // // //   };

// // // // // // // // // //   const handleMouseMove = (e) => {
// // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // //     const currentX = e.clientX;
// // // // // // // // // //     const diffX = currentX - startX;
// // // // // // // // // //     setTranslateX(diffX);
// // // // // // // // // //   };

// // // // // // // // // //   const handleMouseUp = () => {
// // // // // // // // // //     if (!isDragging || window.innerWidth < 1024) return;
// // // // // // // // // //     setIsDragging(false);
    
// // // // // // // // // //     const threshold = 50;
// // // // // // // // // //     if (translateX > threshold && currentSection > 0) {
// // // // // // // // // //       setCurrentSection(currentSection - 1);
// // // // // // // // // //     } else if (translateX < -threshold && currentSection < sections.length - 1) {
// // // // // // // // // //       setCurrentSection(currentSection + 1);
// // // // // // // // // //     }
// // // // // // // // // //     setTranslateX(0);
// // // // // // // // // //   };

// // // // // // // // // //   // Add mouse event listeners
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (isDragging && window.innerWidth >= 1024) {
// // // // // // // // // //       document.addEventListener('mousemove', handleMouseMove);
// // // // // // // // // //       document.addEventListener('mouseup', handleMouseUp);
      
// // // // // // // // // //       return () => {
// // // // // // // // // //         document.removeEventListener('mousemove', handleMouseMove);
// // // // // // // // // //         document.removeEventListener('mouseup', handleMouseUp);
// // // // // // // // // //       };
// // // // // // // // // //     }
// // // // // // // // // //   }, [isDragging, startX]);

// // // // // // // // // //   return (
// // // // // // // // // //     <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // // // // // // // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // // // // // // // // //         {/* Header with fade in */}
// // // // // // // // // //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // // // // // // // //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
// // // // // // // // // //             About Me
// // // // // // // // // //           </h1>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Mobile View: Single Swipeable Box with fade in */}
// // // // // // // // // //         <div className={`lg:hidden w-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // // //           <Card className="mb-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 w-full max-w-full">
// // // // // // // // // //             <CardHeader className="text-center pb-4">
// // // // // // // // // //               <div className="flex items-center justify-center mb-3">
// // // // // // // // // //                 {(() => {
// // // // // // // // // //                   const Icon = sections[currentSection].icon;
// // // // // // // // // //                   return <Icon className="w-10 h-10 text-primary" />;
// // // // // // // // // //                 })()}
// // // // // // // // // //               </div>
// // // // // // // // // //               <CardTitle className="text-2xl font-bold text-primary">
// // // // // // // // // //                 {sections[currentSection].title}
// // // // // // // // // //               </CardTitle>
// // // // // // // // // //               <div className="flex justify-center gap-2 mt-4">
// // // // // // // // // //                 {sections.map((_, index) => (
// // // // // // // // // //                   <button
// // // // // // // // // //                     key={index}
// // // // // // // // // //                     onClick={() => setCurrentSection(index)}
// // // // // // // // // //                     className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-2 dark:focus:ring-black ${
// // // // // // // // // //                       index === currentSection ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // //                     }`}
// // // // // // // // // //                   />
// // // // // // // // // //                 ))}
// // // // // // // // // //               </div>
// // // // // // // // // //             </CardHeader>
// // // // // // // // // //             <CardContent
// // // // // // // // // //               ref={cardRef}
// // // // // // // // // //               onTouchStart={handleTouchStart}
// // // // // // // // // //               onTouchMove={handleTouchMove}
// // // // // // // // // //               onTouchEnd={handleTouchEnd}
// // // // // // // // // //               className="relative overflow-hidden touch-pan-y active:cursor-grabbing active:scale-[0.98] transition-transform hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // //               style={{
// // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // //               }}
// // // // // // // // // //             >
// // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // //             </CardContent>
// // // // // // // // // //             <div className="text-center pb-4 text-sm text-gray-500 dark:text-gray-400">
// // // // // // // // // //               Swipe to navigate
// // // // // // // // // //             </div>
// // // // // // // // // //           </Card>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Desktop View: Single Swipeable Box with Navigation and fade in */}
// // // // // // // // // //         <div className={`hidden lg:block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // // //           <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300 select-none">
// // // // // // // // // //             <CardHeader className="relative pb-6">
// // // // // // // // // //               <div className="flex items-center justify-between gap-4">
// // // // // // // // // //                 <Button
// // // // // // // // // //                   variant="ghost"
// // // // // // // // // //                   size="icon"
// // // // // // // // // //                   onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // // // // // // // //                   disabled={currentSection === 0}
// // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // //                 >
// // // // // // // // // //                   <ChevronLeft className="w-6 h-6" />
// // // // // // // // // //                 </Button>
                
// // // // // // // // // //                 <div className="flex-1 text-center">
// // // // // // // // // //                   <CardTitle className="text-3xl font-bold text-primary mb-4">
// // // // // // // // // //                     {sections[currentSection].title}
// // // // // // // // // //                   </CardTitle>
// // // // // // // // // //                   <div className="flex justify-center gap-2">
// // // // // // // // // //                     {sections.map((_, index) => (
// // // // // // // // // //                       <button
// // // // // // // // // //                         key={index}
// // // // // // // // // //                         onClick={() => setCurrentSection(index)}
// // // // // // // // // //                         className={`h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-2 dark:focus:ring-black ${
// // // // // // // // // //                           index === currentSection 
// // // // // // // // // //                             ? 'w-12 bg-primary' 
// // // // // // // // // //                             : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
// // // // // // // // // //                         }`}
// // // // // // // // // //                       />
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
                
// // // // // // // // // //                 <Button
// // // // // // // // // //                   variant="ghost"
// // // // // // // // // //                   size="icon"
// // // // // // // // // //                   onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // // // // // // // //                   disabled={currentSection === sections.length - 1}
// // // // // // // // // //                   className="flex text-primary hover:bg-primary/10 hover:scale-110 rounded-full p-2 sm:p-3 transition-all duration-200"
// // // // // // // // // //                 >
// // // // // // // // // //                   <ChevronRight className="w-6 h-6" />
// // // // // // // // // //                 </Button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </CardHeader>
            
// // // // // // // // // //             <CardContent
// // // // // // // // // //               ref={cardRef}
// // // // // // // // // //               onMouseDown={handleMouseDown}
// // // // // // // // // //               className="relative overflow-hidden cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50"
// // // // // // // // // //               style={{
// // // // // // // // // //                 transform: `translateX(${translateX}px)`,
// // // // // // // // // //                 transition: isDragging ? 'none' : 'transform 0.3s ease-out'
// // // // // // // // // //               }}
// // // // // // // // // //             >
// // // // // // // // // //               {sections[currentSection].content}
// // // // // // // // // //             </CardContent>
// // // // // // // // // //           </Card>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* ============ My Journey (Timeline) ============ */}
// // // // // // // // // //         <div ref={journeyRef} className="pt-4 sm:pt-8">
// // // // // // // // // //           <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 motion-reduce:transition-none ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
// // // // // // // // // //             <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // // // // //               My Journey
// // // // // // // // // //             </h2>
// // // // // // // // // //             <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
// // // // // // // // // //               From learning the fundamentals to landing at Accenture, one step at a time.
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="relative">
// // // // // // // // // //             {/* Base line */}
// // // // // // // // // //             <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
// // // // // // // // // //             {/* Line that draws itself down once */}
// // // // // // // // // //             <div
// // // // // // // // // //               className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 transition-[height] duration-[2200ms] ease-out motion-reduce:transition-none"
// // // // // // // // // //               style={{ height: journeyVisible ? '100%' : '0%' }}
// // // // // // // // // //             />

// // // // // // // // // //             <div className="space-y-10 sm:space-y-14">
// // // // // // // // // //               {journey.map((step, index) => {
// // // // // // // // // //                 const Icon = step.icon;
// // // // // // // // // //                 const isLeft = index % 2 === 0;
// // // // // // // // // //                 return (
// // // // // // // // // //                   <div
// // // // // // // // // //                     key={step.company}
// // // // // // // // // //                     className={`relative pl-16 md:pl-0 md:w-1/2 transition-all duration-700 motion-reduce:transition-none ${
// // // // // // // // // //                       isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'
// // // // // // // // // //                     } ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
// // // // // // // // // //                     style={{ transitionDelay: `${400 + index * 600}ms` }}
// // // // // // // // // //                   >
// // // // // // // // // //                     {/* Node */}
// // // // // // // // // //                     <div
// // // // // // // // // //                       className={`absolute top-6 left-0 ${isLeft ? 'md:left-auto md:-right-6' : 'md:-left-6'} w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-lg ${step.glow} ring-4 ring-white dark:ring-gray-900 z-10`}
// // // // // // // // // //                     >
// // // // // // // // // //                       {step.highlight && (
// // // // // // // // // //                         <span className="absolute inset-0 rounded-full bg-orange-400/60 animate-ping motion-reduce:hidden" />
// // // // // // // // // //                       )}
// // // // // // // // // //                       <Icon className="relative w-5 h-5 md:w-6 md:h-6" />
// // // // // // // // // //                     </div>

// // // // // // // // // //                     {/* Card */}
// // // // // // // // // //                     <div className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${step.highlight ? step.accent : 'from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800'} ${step.highlight ? `shadow-xl ${step.glow}` : 'shadow-md'} hover:-translate-y-1 transition-transform duration-300`}>
// // // // // // // // // //                       <div className="rounded-[14px] bg-white/90 dark:bg-gray-900/90 backdrop-blur p-5 sm:p-6">
// // // // // // // // // //                         <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
// // // // // // // // // //                           <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
// // // // // // // // // //                             {step.period}
// // // // // // // // // //                           </span>
// // // // // // // // // //                           {step.highlight && (
// // // // // // // // // //                             <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
// // // // // // // // // //                               <Briefcase className="w-3 h-3 mr-1" />
// // // // // // // // // //                               Latest
// // // // // // // // // //                             </Badge>
// // // // // // // // // //                           )}
// // // // // // // // // //                         </div>
// // // // // // // // // //                         <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
// // // // // // // // // //                           {step.company}
// // // // // // // // // //                         </h3>
// // // // // // // // // //                         <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-0.5">
// // // // // // // // // //                           {step.role}
// // // // // // // // // //                         </p>
// // // // // // // // // //                         <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
// // // // // // // // // //                           {step.description}
// // // // // // // // // //                         </p>
// // // // // // // // // //                         <div className="mt-4 flex flex-wrap gap-2">
// // // // // // // // // //                           {step.tags.map((tag) => (
// // // // // // // // // //                             <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
// // // // // // // // // //                               {tag}
// // // // // // // // // //                             </Badge>
// // // // // // // // // //                           ))}
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 );
// // // // // // // // // //               })}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Skills & Proficiency Section with fade in */}
// // // // // // // // // //         <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // // // // //             Skills & Proficiency
// // // // // // // // // //           </h2>
          
// // // // // // // // // //           {/* First Row: Languages & Frameworks */}
// // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
// // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // //                   <div className={`p-2 rounded-lg bg-blue-500/10 text-blue-700`}>
// // // // // // // // // //                     <Code className="w-5 h-5" />
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardHeader>
// // // // // // // // // //               <CardContent>
// // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // //                   {skills.languages.map((skill, skillIndex) => (
// // // // // // // // // //                     <Badge 
// // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // //                       variant="secondary" 
// // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // //                     >
// // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // //                       {skill.name}
// // // // // // // // // //                     </Badge>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardContent>
// // // // // // // // // //             </Card>

// // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
// // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // //                   <div className={`p-2 rounded-lg bg-green-500/10 text-green-700`}>
// // // // // // // // // //                     <Globe className="w-5 h-5" />
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardHeader>
// // // // // // // // // //               <CardContent>
// // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // // // // // // // //                     <Badge 
// // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // //                       variant="secondary" 
// // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // //                     >
// // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // //                       {skill.name}
// // // // // // // // // //                     </Badge>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardContent>
// // // // // // // // // //             </Card>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Second Row: Databases & Development Tools */}
// // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
// // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // //                   <div className={`p-2 rounded-lg bg-purple-500/10 text-purple-700`}>
// // // // // // // // // //                     <Database className="w-5 h-5" />
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardHeader>
// // // // // // // // // //               <CardContent>
// // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // //                   {skills.databases.map((skill, skillIndex) => (
// // // // // // // // // //                     <Badge 
// // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // //                       variant="secondary" 
// // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // //                     >
// // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // //                       {skill.name}
// // // // // // // // // //                     </Badge>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardContent>
// // // // // // // // // //             </Card>

// // // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
// // // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // // //                   <div className={`p-2 rounded-lg bg-orange-500/10 text-orange-700`}>
// // // // // // // // // //                     <Wrench className="w-5 h-5" />
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardHeader>
// // // // // // // // // //               <CardContent>
// // // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // // //                   {skills.tools.map((skill, skillIndex) => (
// // // // // // // // // //                     <Badge 
// // // // // // // // // //                       key={skillIndex} 
// // // // // // // // // //                       variant="secondary" 
// // // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // // //                     >
// // // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // // //                       {skill.name}
// // // // // // // // // //                     </Badge>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardContent>
// // // // // // // // // //             </Card>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Third Row: Team Leadership & API Testing */}
// // // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // // // // // // // // //             {additionalSkills.map((category, index) => (
// // // // // // // // // //               <Card 
// // // // // // // // // //                 key={index} 
// // // // // // // // // //                 className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
// // // // // // // // // //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// // // // // // // // // //                 } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // // // // // // // // //                 style={{transitionDelay: `${500 + index * 100}ms`}}
// // // // // // // // // //               >
// // // // // // // // // //                 <CardHeader className="pb-3">
// // // // // // // // // //                   <div className="flex items-center gap-3">
// // // // // // // // // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // // // // // // // // //                       {(() => {
// // // // // // // // // //                         const Icon = category.displayIcon;
// // // // // // // // // //                         return <Icon className="w-5 h-5" />;
// // // // // // // // // //                       })()}
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </CardHeader>
// // // // // // // // // //                 <CardContent>
// // // // // // // // // //                   <div className="space-y-2">
// // // // // // // // // //                     {category.items.map((skill, skillIndex) => (
// // // // // // // // // //                       <div 
// // // // // // // // // //                         key={skillIndex} 
// // // // // // // // // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // // // // // // // //                       >
// // // // // // // // // //                         {(() => {
// // // // // // // // // //                           const SkillIcon = skill.icon;
// // // // // // // // // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // // // // // // // // //                         })()}
// // // // // // // // // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </CardContent>
// // // // // // // // // //               </Card>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default About;
// // // // // // // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // import { Code, Database, Globe, Wrench, Users, TestTube, Target, Server, Brain, Clock, Send, Shield, GraduationCap, Rocket, Briefcase, Laptop } from "lucide-react";
// // // // // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // // // // const About = () => {
// // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // //   const [skillsVisible, setSkillsVisible] = useState(false);
// // // // // // // // //   const [journeyVisible, setJourneyVisible] = useState(false);
// // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // //   const skillsRef = useRef(null);
// // // // // // // // //   const journeyRef = useRef(null);

// // // // // // // // //   // Intersection Observer for main section
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // //       (entries) => {
// // // // // // // // //         entries.forEach((entry) => setIsVisible(entry.isIntersecting));
// // // // // // // // //       },
// // // // // // // // //       { threshold: 0.1, rootMargin: "0px" }
// // // // // // // // //     );
// // // // // // // // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // // // // // // // //     return () => {
// // // // // // // // //       if (sectionRef.current) observer.unobserve(sectionRef.current);
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   // Intersection Observer for journey section
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // //       (entries) => {
// // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // //           if (entry.isIntersecting) setJourneyVisible(true);
// // // // // // // // //         });
// // // // // // // // //       },
// // // // // // // // //       { threshold: 0.15, rootMargin: "0px" }
// // // // // // // // //     );
// // // // // // // // //     if (journeyRef.current) observer.observe(journeyRef.current);
// // // // // // // // //     return () => {
// // // // // // // // //       if (journeyRef.current) observer.unobserve(journeyRef.current);
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   // Intersection Observer for skills section
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // //       (entries) => {
// // // // // // // // //         entries.forEach((entry) => setSkillsVisible(entry.isIntersecting));
// // // // // // // // //       },
// // // // // // // // //       { threshold: 0.1, rootMargin: "0px" }
// // // // // // // // //     );
// // // // // // // // //     if (skillsRef.current) observer.observe(skillsRef.current);
// // // // // // // // //     return () => {
// // // // // // // // //       if (skillsRef.current) observer.unobserve(skillsRef.current);
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   // Career journey (edit the text freely)
// // // // // // // // //   const journey = [
// // // // // // // // //     {
// // // // // // // // //       company: "Webgeon Results",
// // // // // // // // //       role: "Web Development Intern",
// // // // // // // // //       period: "7-month internship",
// // // // // // // // //       description:
// // // // // // // // //         "Started my professional journey building responsive, user-centric web applications with React, Next.js and Tailwind CSS, focusing on clean code, performance and accessibility while working with the team.",
// // // // // // // // //       tags: ["React", "Next.js", "Tailwind CSS"],
// // // // // // // // //       icon: Laptop,
// // // // // // // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0kIv9iZakWszgmLcYlcgcaF1cCjS8GdIyyx9mbUZmg&s=10",
// // // // // // // // //       accent: "from-emerald-500 to-teal-500",
// // // // // // // // //       glow: "shadow-emerald-500/30",
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       company: "Emertxe",
// // // // // // // // //       role: "Full Stack Development & DSA",
// // // // // // // // //       period: "7-month course",
// // // // // // // // //       description:
// // // // // // // // //         "Joined Emertxe to build a strong engineering base, learning full stack development end to end alongside data structures and algorithms.",
// // // // // // // // //       tags: ["Full Stack", "DSA", "Problem Solving"],
// // // // // // // // //       icon: GraduationCap,
// // // // // // // // //       logo: "https://yt3.googleusercontent.com/NInLpoH9WwO8uFcAJK_s0I80JYSJ8rG1K-26LcFH4lei69Gpb_cf9KUDlgFAuA-sInxFDpCidA=s900-c-k-c0x00ffffff-no-rj",
// // // // // // // // //       accent: "from-blue-500 to-cyan-500",
// // // // // // // // //       glow: "shadow-blue-500/30",
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       company: "Amazon",
// // // // // // // // //       role: "ML Data Associate",
// // // // // // // // //       period: "Next step",
// // // // // // // // //       description:
// // // // // // // // //         "Worked with data that powers machine learning systems, building attention to detail, accuracy and quality at scale.",
// // // // // // // // //       tags: ["Machine Learning", "Data Quality"],
// // // // // // // // //       icon: Brain,
// // // // // // // // //       logo: "https://assets.qz.com/media/what-is-amazon-entity-qz.jpg",
// // // // // // // // //       accent: "from-purple-500 to-pink-500",
// // // // // // // // //       glow: "shadow-purple-500/30",
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       company: "Accenture",
// // // // // // // // //       role: "Placed",
// // // // // // // // //       period: "The journey begins",
// // // // // // // // //       description:
// // // // // // // // //         "Placed at Accenture, where the next chapter starts: real-world delivery, bigger teams and bigger problems to solve.",
// // // // // // // // //       tags: ["Placed", "New Chapter"],
// // // // // // // // //       icon: Rocket,
// // // // // // // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu6gNzg9YjY49DUxUOSgGJYqYklmQwmdD3_EefnUg4w&s=10",
// // // // // // // // //       accent: "from-amber-400 to-orange-500",
// // // // // // // // //       glow: "shadow-orange-500/40",
// // // // // // // // //       highlight: true,
// // // // // // // // //     },
// // // // // // // // //   ];

// // // // // // // // //   const skills = {
// // // // // // // // //     languages: [
// // // // // // // // //       { name: "Python", icon: "🐍" },
// // // // // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // // // // //       { name: "HTML", icon: "🌐" },
// // // // // // // // //       { name: "CSS", icon: "🎨" }
// // // // // // // // //     ],
// // // // // // // // //     frameworks: [
// // // // // // // // //       { name: "Next.js", icon: "▲" },
// // // // // // // // //       { name: "React", icon: "⚛️" },
// // // // // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // // // // //     ],
// // // // // // // // //     databases: [
// // // // // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // // // // //     ],
// // // // // // // // //     tools: [
// // // // // // // // //       { name: "VS Code", icon: "💻" },
// // // // // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // // // // //       { name: "Postman", icon: "📮" }
// // // // // // // // //     ]
// // // // // // // // //   };

// // // // // // // // //   const additionalSkills = [
// // // // // // // // //     {
// // // // // // // // //       title: "Team Leadership",
// // // // // // // // //       items: [
// // // // // // // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // // // // // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // // // // // // //       ],
// // // // // // // // //       color: "bg-red-500/10 text-red-700",
// // // // // // // // //       displayIcon: Target
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "API Testing",
// // // // // // // // //       items: [
// // // // // // // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // // // // // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // // // // // // //       ],
// // // // // // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // // // // // //       displayIcon: Server
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // // // // // // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // // // // // // // //         {/* Header with fade in */}
// // // // // // // // //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // // // // // // //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
// // // // // // // // //             About Me
// // // // // // // // //           </h1>
// // // // // // // // //         </div>

// // // // // // // // //         {/* ============ My Journey (Timeline) ============ */}
// // // // // // // // //         <div ref={journeyRef} className="pt-2 sm:pt-4">
// // // // // // // // //           <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 motion-reduce:transition-none ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
// // // // // // // // //             <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // // // //               My Journey
// // // // // // // // //             </h2>
// // // // // // // // //             <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
// // // // // // // // //               From learning the fundamentals to landing at Accenture, one step at a time.
// // // // // // // // //             </p>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="relative">
// // // // // // // // //             {/* Base line */}
// // // // // // // // //             <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
// // // // // // // // //             {/* Line that draws itself down once */}
// // // // // // // // //             <div
// // // // // // // // //               className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-orange-500 transition-[height] duration-[2800ms] ease-out motion-reduce:transition-none"
// // // // // // // // //               style={{ height: journeyVisible ? '100%' : '0%' }}
// // // // // // // // //             />

// // // // // // // // //             <div className="space-y-10 sm:space-y-14">
// // // // // // // // //               {journey.map((step, index) => {
// // // // // // // // //                 const Icon = step.icon;
// // // // // // // // //                 const isLeft = index % 2 === 0;
// // // // // // // // //                 return (
// // // // // // // // //                   <div
// // // // // // // // //                     key={step.company}
// // // // // // // // //                     className={`relative pl-16 md:pl-0 md:w-1/2 transition-all duration-700 motion-reduce:transition-none ${
// // // // // // // // //                       isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'
// // // // // // // // //                     } ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
// // // // // // // // //                     style={{ transitionDelay: `${400 + index * 600}ms` }}
// // // // // // // // //                   >
// // // // // // // // //                     {/* Node */}
// // // // // // // // //                     <div
// // // // // // // // //                       className={`absolute top-6 left-0 ${isLeft ? 'md:left-auto md:-right-6' : 'md:-left-6'} w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-lg ${step.glow} ring-4 ring-white dark:ring-gray-900 z-10`}
// // // // // // // // //                     >
// // // // // // // // //                       {step.highlight && (
// // // // // // // // //                         <span className="absolute inset-0 rounded-full bg-orange-400/60 animate-ping motion-reduce:hidden" />
// // // // // // // // //                       )}
// // // // // // // // //                       <Icon className="relative w-5 h-5 md:w-6 md:h-6" />
// // // // // // // // //                     </div>

// // // // // // // // //                     {/* Card */}
// // // // // // // // //                     <div className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${step.highlight ? step.accent : 'from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800'} ${step.highlight ? `shadow-xl ${step.glow}` : 'shadow-md'} hover:-translate-y-1 transition-transform duration-300`}>
// // // // // // // // //                       <div className="rounded-[14px] bg-white/90 dark:bg-gray-900/90 backdrop-blur p-5 sm:p-6">
// // // // // // // // //                         <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
// // // // // // // // //                           <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
// // // // // // // // //                             {step.period}
// // // // // // // // //                           </span>
// // // // // // // // //                           {step.highlight && (
// // // // // // // // //                             <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
// // // // // // // // //                               <Briefcase className="w-3 h-3 mr-1" />
// // // // // // // // //                               Latest
// // // // // // // // //                             </Badge>
// // // // // // // // //                           )}
// // // // // // // // //                         </div>
// // // // // // // // //                         <div className="flex items-center gap-4">
// // // // // // // // //                           <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-white border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
// // // // // // // // //                             <img
// // // // // // // // //                               src={step.logo}
// // // // // // // // //                               alt={`${step.company} logo`}
// // // // // // // // //                               loading="lazy"
// // // // // // // // //                               referrerPolicy="no-referrer"
// // // // // // // // //                               onError={(e) => { e.currentTarget.style.display = 'none'; }}
// // // // // // // // //                               className="w-full h-full object-contain"
// // // // // // // // //                             />
// // // // // // // // //                           </div>
// // // // // // // // //                           <div className="min-w-0">
// // // // // // // // //                             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
// // // // // // // // //                               {step.company}
// // // // // // // // //                             </h3>
// // // // // // // // //                             <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-0.5">
// // // // // // // // //                               {step.role}
// // // // // // // // //                             </p>
// // // // // // // // //                           </div>
// // // // // // // // //                         </div>
// // // // // // // // //                         <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
// // // // // // // // //                           {step.description}
// // // // // // // // //                         </p>
// // // // // // // // //                         <div className="mt-4 flex flex-wrap gap-2">
// // // // // // // // //                           {step.tags.map((tag) => (
// // // // // // // // //                             <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
// // // // // // // // //                               {tag}
// // // // // // // // //                             </Badge>
// // // // // // // // //                           ))}
// // // // // // // // //                         </div>
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 );
// // // // // // // // //               })}
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Skills & Proficiency Section with fade in */}
// // // // // // // // //         <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // // // //             Skills & Proficiency
// // // // // // // // //           </h2>
          
// // // // // // // // //           {/* First Row: Languages & Frameworks */}
// // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
// // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // //                   <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700">
// // // // // // // // //                     <Code className="w-5 h-5" />
// // // // // // // // //                   </div>
// // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // // // // // // // //                 </div>
// // // // // // // // //               </CardHeader>
// // // // // // // // //               <CardContent>
// // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // //                   {skills.languages.map((skill, skillIndex) => (
// // // // // // // // //                     <Badge 
// // // // // // // // //                       key={skillIndex} 
// // // // // // // // //                       variant="secondary" 
// // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // //                     >
// // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // //                       {skill.name}
// // // // // // // // //                     </Badge>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </CardContent>
// // // // // // // // //             </Card>

// // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
// // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // //                   <div className="p-2 rounded-lg bg-green-500/10 text-green-700">
// // // // // // // // //                     <Globe className="w-5 h-5" />
// // // // // // // // //                   </div>
// // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // // // // // // // //                 </div>
// // // // // // // // //               </CardHeader>
// // // // // // // // //               <CardContent>
// // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // // // // // // //                     <Badge 
// // // // // // // // //                       key={skillIndex} 
// // // // // // // // //                       variant="secondary" 
// // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // //                     >
// // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // //                       {skill.name}
// // // // // // // // //                     </Badge>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </CardContent>
// // // // // // // // //             </Card>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Second Row: Databases & Development Tools */}
// // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
// // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // //                   <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700">
// // // // // // // // //                     <Database className="w-5 h-5" />
// // // // // // // // //                   </div>
// // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // // // // // // // //                 </div>
// // // // // // // // //               </CardHeader>
// // // // // // // // //               <CardContent>
// // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // //                   {skills.databases.map((skill, skillIndex) => (
// // // // // // // // //                     <Badge 
// // // // // // // // //                       key={skillIndex} 
// // // // // // // // //                       variant="secondary" 
// // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // //                     >
// // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // //                       {skill.name}
// // // // // // // // //                     </Badge>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </CardContent>
// // // // // // // // //             </Card>

// // // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
// // // // // // // // //               <CardHeader className="pb-3">
// // // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // // //                   <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700">
// // // // // // // // //                     <Wrench className="w-5 h-5" />
// // // // // // // // //                   </div>
// // // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // // // // // // // //                 </div>
// // // // // // // // //               </CardHeader>
// // // // // // // // //               <CardContent>
// // // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // // //                   {skills.tools.map((skill, skillIndex) => (
// // // // // // // // //                     <Badge 
// // // // // // // // //                       key={skillIndex} 
// // // // // // // // //                       variant="secondary" 
// // // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // // //                     >
// // // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // // //                       {skill.name}
// // // // // // // // //                     </Badge>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </CardContent>
// // // // // // // // //             </Card>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Third Row: Team Leadership & API Testing */}
// // // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // // // // // // // //             {additionalSkills.map((category, index) => (
// // // // // // // // //               <Card 
// // // // // // // // //                 key={index} 
// // // // // // // // //                 className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
// // // // // // // // //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// // // // // // // // //                 } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // // // // // // // //                 style={{transitionDelay: `${500 + index * 100}ms`}}
// // // // // // // // //               >
// // // // // // // // //                 <CardHeader className="pb-3">
// // // // // // // // //                   <div className="flex items-center gap-3">
// // // // // // // // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // // // // // // // //                       {(() => {
// // // // // // // // //                         const Icon = category.displayIcon;
// // // // // // // // //                         return <Icon className="w-5 h-5" />;
// // // // // // // // //                       })()}
// // // // // // // // //                     </div>
// // // // // // // // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // // // // // // // //                   </div>
// // // // // // // // //                 </CardHeader>
// // // // // // // // //                 <CardContent>
// // // // // // // // //                   <div className="space-y-2">
// // // // // // // // //                     {category.items.map((skill, skillIndex) => (
// // // // // // // // //                       <div 
// // // // // // // // //                         key={skillIndex} 
// // // // // // // // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // // // // // // //                       >
// // // // // // // // //                         {(() => {
// // // // // // // // //                           const SkillIcon = skill.icon;
// // // // // // // // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // // // // // // // //                         })()}
// // // // // // // // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                     ))}
// // // // // // // // //                   </div>
// // // // // // // // //                 </CardContent>
// // // // // // // // //               </Card>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default About;
// // // // // // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // import { Code, Database, Globe, Wrench, Users, TestTube, Target, Server, Brain, Clock, Send, Shield, GraduationCap, Rocket, Briefcase, Laptop } from "lucide-react";
// // // // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // // // const About = () => {
// // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // //   const [skillsVisible, setSkillsVisible] = useState(false);
// // // // // // // //   const [journeyVisible, setJourneyVisible] = useState(false);
// // // // // // // //   const sectionRef = useRef(null);
// // // // // // // //   const skillsRef = useRef(null);
// // // // // // // //   const journeyRef = useRef(null);

// // // // // // // //   // Intersection Observer for main section
// // // // // // // //   useEffect(() => {
// // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // //       (entries) => {
// // // // // // // //         entries.forEach((entry) => setIsVisible(entry.isIntersecting));
// // // // // // // //       },
// // // // // // // //       { threshold: 0.1, rootMargin: "0px" }
// // // // // // // //     );
// // // // // // // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // // // // // // //     return () => {
// // // // // // // //       if (sectionRef.current) observer.unobserve(sectionRef.current);
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   // Intersection Observer for journey section
// // // // // // // //   useEffect(() => {
// // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // //       (entries) => {
// // // // // // // //         entries.forEach((entry) => {
// // // // // // // //           if (entry.isIntersecting) setJourneyVisible(true);
// // // // // // // //         });
// // // // // // // //       },
// // // // // // // //       { threshold: 0.15, rootMargin: "0px" }
// // // // // // // //     );
// // // // // // // //     if (journeyRef.current) observer.observe(journeyRef.current);
// // // // // // // //     return () => {
// // // // // // // //       if (journeyRef.current) observer.unobserve(journeyRef.current);
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   // Intersection Observer for skills section
// // // // // // // //   useEffect(() => {
// // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // //       (entries) => {
// // // // // // // //         entries.forEach((entry) => setSkillsVisible(entry.isIntersecting));
// // // // // // // //       },
// // // // // // // //       { threshold: 0.1, rootMargin: "0px" }
// // // // // // // //     );
// // // // // // // //     if (skillsRef.current) observer.observe(skillsRef.current);
// // // // // // // //     return () => {
// // // // // // // //       if (skillsRef.current) observer.unobserve(skillsRef.current);
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   // Career journey (edit the text freely)
// // // // // // // //   const journey = [
// // // // // // // //     {
// // // // // // // //       company: "Webgeon Results",
// // // // // // // //       role: "Web Development Intern",
// // // // // // // //       period: "7-month internship",
// // // // // // // //       description:
// // // // // // // //         "Started my professional journey building responsive, user-centric web applications with React, Next.js and Tailwind CSS, focusing on clean code, performance and accessibility while working with the team.",
// // // // // // // //       tags: ["React", "Next.js", "Tailwind CSS"],
// // // // // // // //       icon: Laptop,
// // // // // // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0kIv9iZakWszgmLcYlcgcaF1cCjS8GdIyyx9mbUZmg&s=10",
// // // // // // // //       accent: "from-emerald-500 to-teal-500",
// // // // // // // //       glow: "shadow-emerald-500/30",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       company: "Emertxe",
// // // // // // // //       role: "Full Stack Development & DSA",
// // // // // // // //       period: "7-month course",
// // // // // // // //       description:
// // // // // // // //         "Joined Emertxe to build a strong engineering base, learning full stack development end to end alongside data structures and algorithms.",
// // // // // // // //       tags: ["Full Stack", "DSA", "Problem Solving"],
// // // // // // // //       icon: GraduationCap,
// // // // // // // //       logo: "https://yt3.googleusercontent.com/NInLpoH9WwO8uFcAJK_s0I80JYSJ8rG1K-26LcFH4lei69Gpb_cf9KUDlgFAuA-sInxFDpCidA=s900-c-k-c0x00ffffff-no-rj",
// // // // // // // //       accent: "from-blue-500 to-cyan-500",
// // // // // // // //       glow: "shadow-blue-500/30",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       company: "Amazon",
// // // // // // // //       role: "ML Data Associate",
// // // // // // // //       period: "Next step",
// // // // // // // //       description:
// // // // // // // //         "Worked with data that powers machine learning systems, building attention to detail, accuracy and quality at scale.",
// // // // // // // //       tags: ["Machine Learning", "Data Quality"],
// // // // // // // //       icon: Brain,
// // // // // // // //       logo: "https://assets.qz.com/media/what-is-amazon-entity-qz.jpg",
// // // // // // // //       accent: "from-purple-500 to-pink-500",
// // // // // // // //       glow: "shadow-purple-500/30",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       company: "Accenture",
// // // // // // // //       role: "Placed",
// // // // // // // //       period: "The journey begins",
// // // // // // // //       description:
// // // // // // // //         "Placed at Accenture, where the next chapter starts: real-world delivery, bigger teams and bigger problems to solve.",
// // // // // // // //       tags: ["Placed", "New Chapter"],
// // // // // // // //       icon: Rocket,
// // // // // // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu6gNzg9YjY49DUxUOSgGJYqYklmQwmdD3_EefnUg4w&s=10",
// // // // // // // //       accent: "from-amber-400 to-orange-500",
// // // // // // // //       glow: "shadow-orange-500/40",
// // // // // // // //       highlight: true,
// // // // // // // //     },
// // // // // // // //   ];

// // // // // // // //   const skills = {
// // // // // // // //     languages: [
// // // // // // // //       { name: "Python", icon: "🐍" },
// // // // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // // // //       { name: "HTML", icon: "🌐" },
// // // // // // // //       { name: "CSS", icon: "🎨" }
// // // // // // // //     ],
// // // // // // // //     frameworks: [
// // // // // // // //       { name: "Next.js", icon: "▲" },
// // // // // // // //       { name: "React", icon: "⚛️" },
// // // // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // // // //     ],
// // // // // // // //     databases: [
// // // // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // // // //     ],
// // // // // // // //     tools: [
// // // // // // // //       { name: "VS Code", icon: "💻" },
// // // // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // // // //       { name: "Postman", icon: "📮" }
// // // // // // // //     ]
// // // // // // // //   };

// // // // // // // //   const additionalSkills = [
// // // // // // // //     {
// // // // // // // //       title: "Team Leadership",
// // // // // // // //       items: [
// // // // // // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // // // // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // // // // // //       ],
// // // // // // // //       color: "bg-red-500/10 text-red-700",
// // // // // // // //       displayIcon: Target
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "API Testing",
// // // // // // // //       items: [
// // // // // // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // // // // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // // // // // //       ],
// // // // // // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // // // // // //       displayIcon: Server
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // // // // // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // // // // // // //         {/* Header with fade in */}
// // // // // // // //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // // // // // //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
// // // // // // // //             About Me
// // // // // // // //           </h1>
// // // // // // // //           <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
// // // // // // // //             I'm a B.Tech graduate in Electronics and Communication Engineering from FISAT (2021–2025 batch), and I turned a curiosity for how technology works into a career in software. Along the way I've learned by building: a 7-month web development internship at Webgeon Results, an intensive full stack and DSA program at Emertxe, hands-on experience with machine learning data at Amazon, and now a place at Accenture. I love solving problems, writing clean and scalable code, and creating digital experiences that feel simple for the people who use them.
// // // // // // // //           </p>
// // // // // // // //           <div className="mt-5 flex flex-wrap justify-center gap-2">
// // // // // // // //             <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-3 py-1.5 text-sm">
// // // // // // // //               <GraduationCap className="w-4 h-4 mr-1.5" />
// // // // // // // //               B.Tech in ECE, FISAT
// // // // // // // //             </Badge>
// // // // // // // //             <Badge variant="secondary" className="px-3 py-1.5 text-sm">2021 to 2025 batch</Badge>
// // // // // // // //             <Badge variant="secondary" className="px-3 py-1.5 text-sm">Full Stack Developer</Badge>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* ============ My Journey (Timeline) ============ */}
// // // // // // // //         <div ref={journeyRef} className="pt-2 sm:pt-4">
// // // // // // // //           <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 motion-reduce:transition-none ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
// // // // // // // //             <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // // //               My Journey
// // // // // // // //             </h2>
// // // // // // // //             <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
// // // // // // // //               From learning the fundamentals to landing at Accenture, one step at a time.
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           <div className="relative">
// // // // // // // //             {/* Base line */}
// // // // // // // //             <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
// // // // // // // //             {/* Line that draws itself down once */}
// // // // // // // //             <div
// // // // // // // //               className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-orange-500 transition-[height] duration-[2800ms] ease-out motion-reduce:transition-none"
// // // // // // // //               style={{ height: journeyVisible ? '100%' : '0%' }}
// // // // // // // //             />

// // // // // // // //             <div className="space-y-10 sm:space-y-14">
// // // // // // // //               {journey.map((step, index) => {
// // // // // // // //                 const Icon = step.icon;
// // // // // // // //                 const isLeft = index % 2 === 0;
// // // // // // // //                 return (
// // // // // // // //                   <div
// // // // // // // //                     key={step.company}
// // // // // // // //                     className={`relative pl-16 md:pl-0 md:w-1/2 transition-all duration-700 motion-reduce:transition-none ${
// // // // // // // //                       isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'
// // // // // // // //                     } ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
// // // // // // // //                     style={{ transitionDelay: `${400 + index * 600}ms` }}
// // // // // // // //                   >
// // // // // // // //                     {/* Node */}
// // // // // // // //                     <div
// // // // // // // //                       className={`absolute top-6 left-0 ${isLeft ? 'md:left-auto md:-right-6' : 'md:-left-6'} w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-lg ${step.glow} ring-4 ring-white dark:ring-gray-900 z-10`}
// // // // // // // //                     >
// // // // // // // //                       {step.highlight && (
// // // // // // // //                         <span className="absolute inset-0 rounded-full bg-orange-400/60 animate-ping motion-reduce:hidden" />
// // // // // // // //                       )}
// // // // // // // //                       <Icon className="relative w-5 h-5 md:w-6 md:h-6" />
// // // // // // // //                     </div>

// // // // // // // //                     {/* Card */}
// // // // // // // //                     <div className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${step.highlight ? step.accent : 'from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800'} ${step.highlight ? `shadow-xl ${step.glow}` : 'shadow-md'} hover:-translate-y-1 transition-transform duration-300`}>
// // // // // // // //                       <div className="rounded-[14px] bg-white/90 dark:bg-gray-900/90 backdrop-blur p-5 sm:p-6">
// // // // // // // //                         <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
// // // // // // // //                           <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
// // // // // // // //                             {step.period}
// // // // // // // //                           </span>
// // // // // // // //                           {step.highlight && (
// // // // // // // //                             <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
// // // // // // // //                               <Briefcase className="w-3 h-3 mr-1" />
// // // // // // // //                               Latest
// // // // // // // //                             </Badge>
// // // // // // // //                           )}
// // // // // // // //                         </div>
// // // // // // // //                         <div className="flex items-center gap-4">
// // // // // // // //                           <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-white border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
// // // // // // // //                             <img
// // // // // // // //                               src={step.logo}
// // // // // // // //                               alt={`${step.company} logo`}
// // // // // // // //                               loading="lazy"
// // // // // // // //                               referrerPolicy="no-referrer"
// // // // // // // //                               onError={(e) => { e.currentTarget.style.display = 'none'; }}
// // // // // // // //                               className="w-full h-full object-contain"
// // // // // // // //                             />
// // // // // // // //                           </div>
// // // // // // // //                           <div className="min-w-0">
// // // // // // // //                             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
// // // // // // // //                               {step.company}
// // // // // // // //                             </h3>
// // // // // // // //                             <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-0.5">
// // // // // // // //                               {step.role}
// // // // // // // //                             </p>
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                         <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
// // // // // // // //                           {step.description}
// // // // // // // //                         </p>
// // // // // // // //                         <div className="mt-4 flex flex-wrap gap-2">
// // // // // // // //                           {step.tags.map((tag) => (
// // // // // // // //                             <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
// // // // // // // //                               {tag}
// // // // // // // //                             </Badge>
// // // // // // // //                           ))}
// // // // // // // //                         </div>
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 );
// // // // // // // //               })}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Skills & Proficiency Section with fade in */}
// // // // // // // //         <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // // // // // // //             Skills & Proficiency
// // // // // // // //           </h2>
          
// // // // // // // //           {/* First Row: Languages & Frameworks */}
// // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
// // // // // // // //               <CardHeader className="pb-3">
// // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // //                   <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700">
// // // // // // // //                     <Code className="w-5 h-5" />
// // // // // // // //                   </div>
// // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // // // // // // //                 </div>
// // // // // // // //               </CardHeader>
// // // // // // // //               <CardContent>
// // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // //                   {skills.languages.map((skill, skillIndex) => (
// // // // // // // //                     <Badge 
// // // // // // // //                       key={skillIndex} 
// // // // // // // //                       variant="secondary" 
// // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // //                     >
// // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // //                       {skill.name}
// // // // // // // //                     </Badge>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </CardContent>
// // // // // // // //             </Card>

// // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
// // // // // // // //               <CardHeader className="pb-3">
// // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // //                   <div className="p-2 rounded-lg bg-green-500/10 text-green-700">
// // // // // // // //                     <Globe className="w-5 h-5" />
// // // // // // // //                   </div>
// // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // // // // // // //                 </div>
// // // // // // // //               </CardHeader>
// // // // // // // //               <CardContent>
// // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // // // // // //                     <Badge 
// // // // // // // //                       key={skillIndex} 
// // // // // // // //                       variant="secondary" 
// // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // //                     >
// // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // //                       {skill.name}
// // // // // // // //                     </Badge>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </CardContent>
// // // // // // // //             </Card>
// // // // // // // //           </div>

// // // // // // // //           {/* Second Row: Databases & Development Tools */}
// // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
// // // // // // // //               <CardHeader className="pb-3">
// // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // //                   <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700">
// // // // // // // //                     <Database className="w-5 h-5" />
// // // // // // // //                   </div>
// // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // // // // // // //                 </div>
// // // // // // // //               </CardHeader>
// // // // // // // //               <CardContent>
// // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // //                   {skills.databases.map((skill, skillIndex) => (
// // // // // // // //                     <Badge 
// // // // // // // //                       key={skillIndex} 
// // // // // // // //                       variant="secondary" 
// // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // //                     >
// // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // //                       {skill.name}
// // // // // // // //                     </Badge>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </CardContent>
// // // // // // // //             </Card>

// // // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
// // // // // // // //               <CardHeader className="pb-3">
// // // // // // // //                 <div className="flex items-center gap-3">
// // // // // // // //                   <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700">
// // // // // // // //                     <Wrench className="w-5 h-5" />
// // // // // // // //                   </div>
// // // // // // // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // // // // // // //                 </div>
// // // // // // // //               </CardHeader>
// // // // // // // //               <CardContent>
// // // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // // //                   {skills.tools.map((skill, skillIndex) => (
// // // // // // // //                     <Badge 
// // // // // // // //                       key={skillIndex} 
// // // // // // // //                       variant="secondary" 
// // // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // // //                     >
// // // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // // //                       {skill.name}
// // // // // // // //                     </Badge>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </CardContent>
// // // // // // // //             </Card>
// // // // // // // //           </div>

// // // // // // // //           {/* Third Row: Team Leadership & API Testing */}
// // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // // // // // // //             {additionalSkills.map((category, index) => (
// // // // // // // //               <Card 
// // // // // // // //                 key={index} 
// // // // // // // //                 className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
// // // // // // // //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// // // // // // // //                 } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // // // // // // //                 style={{transitionDelay: `${500 + index * 100}ms`}}
// // // // // // // //               >
// // // // // // // //                 <CardHeader className="pb-3">
// // // // // // // //                   <div className="flex items-center gap-3">
// // // // // // // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // // // // // // //                       {(() => {
// // // // // // // //                         const Icon = category.displayIcon;
// // // // // // // //                         return <Icon className="w-5 h-5" />;
// // // // // // // //                       })()}
// // // // // // // //                     </div>
// // // // // // // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // // // // // // //                   </div>
// // // // // // // //                 </CardHeader>
// // // // // // // //                 <CardContent>
// // // // // // // //                   <div className="space-y-2">
// // // // // // // //                     {category.items.map((skill, skillIndex) => (
// // // // // // // //                       <div 
// // // // // // // //                         key={skillIndex} 
// // // // // // // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // // // // // //                       >
// // // // // // // //                         {(() => {
// // // // // // // //                           const SkillIcon = skill.icon;
// // // // // // // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // // // // // // //                         })()}
// // // // // // // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// // // // // // // //                       </div>
// // // // // // // //                     ))}
// // // // // // // //                   </div>
// // // // // // // //                 </CardContent>
// // // // // // // //               </Card>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default About;
// // // // // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // import { Code, Database, Globe, Wrench, Users, TestTube, Target, Server, Brain, Clock, Send, Shield, GraduationCap, Rocket, Briefcase, Laptop } from "lucide-react";
// // // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // // const About = () => {
// // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // //   const [skillsVisible, setSkillsVisible] = useState(false);
// // // // // // //   const [journeyVisible, setJourneyVisible] = useState(false);
// // // // // // //   const sectionRef = useRef(null);
// // // // // // //   const skillsRef = useRef(null);
// // // // // // //   const journeyRef = useRef(null);

// // // // // // //   // Intersection Observer for main section
// // // // // // //   useEffect(() => {
// // // // // // //     const observer = new IntersectionObserver(
// // // // // // //       (entries) => {
// // // // // // //         entries.forEach((entry) => setIsVisible(entry.isIntersecting));
// // // // // // //       },
// // // // // // //       { threshold: 0.1, rootMargin: "0px" }
// // // // // // //     );
// // // // // // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // // // // // //     return () => {
// // // // // // //       if (sectionRef.current) observer.unobserve(sectionRef.current);
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   // Intersection Observer for journey section
// // // // // // //   useEffect(() => {
// // // // // // //     const observer = new IntersectionObserver(
// // // // // // //       (entries) => {
// // // // // // //         entries.forEach((entry) => {
// // // // // // //           if (entry.isIntersecting) setJourneyVisible(true);
// // // // // // //         });
// // // // // // //       },
// // // // // // //       { threshold: 0.15, rootMargin: "0px" }
// // // // // // //     );
// // // // // // //     if (journeyRef.current) observer.observe(journeyRef.current);
// // // // // // //     return () => {
// // // // // // //       if (journeyRef.current) observer.unobserve(journeyRef.current);
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   // Intersection Observer for skills section
// // // // // // //   useEffect(() => {
// // // // // // //     const observer = new IntersectionObserver(
// // // // // // //       (entries) => {
// // // // // // //         entries.forEach((entry) => setSkillsVisible(entry.isIntersecting));
// // // // // // //       },
// // // // // // //       { threshold: 0.1, rootMargin: "0px" }
// // // // // // //     );
// // // // // // //     if (skillsRef.current) observer.observe(skillsRef.current);
// // // // // // //     return () => {
// // // // // // //       if (skillsRef.current) observer.unobserve(skillsRef.current);
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   // Career journey (edit the text freely)
// // // // // // //   const journey = [
// // // // // // //     {
// // // // // // //       company: "Webgeon Results",
// // // // // // //       role: "Web Development Intern",
// // // // // // //       period: "7-month internship",
// // // // // // //       description:
// // // // // // //         "Started my professional journey building responsive, user-centric web applications with React, Next.js and Tailwind CSS, focusing on clean code, performance and accessibility while working with the team.",
// // // // // // //       tags: ["React", "Next.js", "Tailwind CSS"],
// // // // // // //       icon: Laptop,
// // // // // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0kIv9iZakWszgmLcYlcgcaF1cCjS8GdIyyx9mbUZmg&s=10",
// // // // // // //       accent: "from-emerald-500 to-teal-500",
// // // // // // //       glow: "shadow-emerald-500/30",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       company: "Emertxe",
// // // // // // //       role: "Full Stack Development & DSA",
// // // // // // //       period: "7-month course",
// // // // // // //       description:
// // // // // // //         "Joined Emertxe to build a strong engineering base, learning full stack development end to end alongside data structures and algorithms.",
// // // // // // //       tags: ["Full Stack", "DSA", "Problem Solving"],
// // // // // // //       icon: GraduationCap,
// // // // // // //       logo: "https://yt3.googleusercontent.com/NInLpoH9WwO8uFcAJK_s0I80JYSJ8rG1K-26LcFH4lei69Gpb_cf9KUDlgFAuA-sInxFDpCidA=s900-c-k-c0x00ffffff-no-rj",
// // // // // // //       accent: "from-blue-500 to-cyan-500",
// // // // // // //       glow: "shadow-blue-500/30",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       company: "Amazon",
// // // // // // //       role: "ML Data Associate",
// // // // // // //       period: "Next step",
// // // // // // //       description:
// // // // // // //         "Worked with data that powers machine learning systems, building attention to detail, accuracy and quality at scale.",
// // // // // // //       tags: ["Machine Learning", "Data Quality"],
// // // // // // //       icon: Brain,
// // // // // // //       logo: "https://assets.qz.com/media/what-is-amazon-entity-qz.jpg",
// // // // // // //       accent: "from-purple-500 to-pink-500",
// // // // // // //       glow: "shadow-purple-500/30",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       company: "Accenture",
// // // // // // //       role: "Placed",
// // // // // // //       period: "The journey begins",
// // // // // // //       description:
// // // // // // //         "Placed at Accenture, where the next chapter starts: real-world delivery, bigger teams and bigger problems to solve.",
// // // // // // //       tags: ["Placed", "New Chapter"],
// // // // // // //       icon: Rocket,
// // // // // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu6gNzg9YjY49DUxUOSgGJYqYklmQwmdD3_EefnUg4w&s=10",
// // // // // // //       accent: "from-amber-400 to-orange-500",
// // // // // // //       glow: "shadow-orange-500/40",
// // // // // // //       highlight: true,
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   const skills = {
// // // // // // //     languages: [
// // // // // // //       { name: "Python", icon: "🐍" },
// // // // // // //       { name: "JavaScript", icon: "⚡" },
// // // // // // //       { name: "HTML", icon: "🌐" },
// // // // // // //       { name: "CSS", icon: "🎨" }
// // // // // // //     ],
// // // // // // //     frameworks: [
// // // // // // //       { name: "Next.js", icon: "▲" },
// // // // // // //       { name: "React", icon: "⚛️" },
// // // // // // //       { name: "Tailwind CSS", icon: "💨" }
// // // // // // //     ],
// // // // // // //     databases: [
// // // // // // //       { name: "MongoDB", icon: "🍃" },
// // // // // // //       { name: "MySQL", icon: "🐬" }
// // // // // // //     ],
// // // // // // //     tools: [
// // // // // // //       { name: "VS Code", icon: "💻" },
// // // // // // //       { name: "Eclipse", icon: "🌙" },
// // // // // // //       { name: "Postman", icon: "📮" }
// // // // // // //     ]
// // // // // // //   };

// // // // // // //   const additionalSkills = [
// // // // // // //     {
// // // // // // //       title: "Team Leadership",
// // // // // // //       items: [
// // // // // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // // // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // // // // //       ],
// // // // // // //       color: "bg-red-500/10 text-red-700 dark:bg-red-400/20 dark:text-red-300",
// // // // // // //       displayIcon: Target
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "API Testing",
// // // // // // //       items: [
// // // // // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // // // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // // // // //       ],
// // // // // // //       color: "bg-indigo-500/10 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-300",
// // // // // // //       displayIcon: Server
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // // // // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // // // // // //         {/* Header with fade in */}
// // // // // // //         <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // // // // //           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
// // // // // // //             About Me
// // // // // // //           </h1>
// // // // // // //           <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
// // // // // // //             I'm a B.Tech graduate in Electronics and Communication Engineering from FISAT (2021–2025 batch), and I turned a curiosity for how technology works into a career in software. Along the way I've learned by building: a 7-month web development internship at Webgeon Results, an intensive full stack and DSA program at Emertxe, hands-on experience with machine learning data at Amazon, and now a place at Accenture. I love solving problems, writing clean and scalable code, and creating digital experiences that feel simple for the people who use them.
// // // // // // //           </p>
// // // // // // //           <div className="mt-5 flex flex-wrap justify-center gap-2">
// // // // // // //             <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-3 py-1.5 text-sm">
// // // // // // //               <GraduationCap className="w-4 h-4 mr-1.5" />
// // // // // // //               B.Tech in ECE, FISAT
// // // // // // //             </Badge>
// // // // // // //             <Badge variant="secondary" className="px-3 py-1.5 text-sm">2021 to 2025 batch</Badge>
// // // // // // //             <Badge variant="secondary" className="px-3 py-1.5 text-sm">Full Stack Developer</Badge>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* ============ My Journey (Timeline) ============ */}
// // // // // // //         <div ref={journeyRef} className="pt-2 sm:pt-4">
// // // // // // //           <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 motion-reduce:transition-none ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
// // // // // // //             <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// // // // // // //               My Journey
// // // // // // //             </h2>
// // // // // // //             <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
// // // // // // //               From learning the fundamentals to landing at Accenture, one step at a time.
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           <div className="relative">
// // // // // // //             {/* Base line */}
// // // // // // //             <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700/70 rounded-full" />
// // // // // // //             {/* Line that draws itself down once */}
// // // // // // //             <div
// // // // // // //               className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-orange-500 transition-[height] duration-[2800ms] ease-out motion-reduce:transition-none"
// // // // // // //               style={{ height: journeyVisible ? '100%' : '0%' }}
// // // // // // //             />

// // // // // // //             <div className="space-y-10 sm:space-y-14">
// // // // // // //               {journey.map((step, index) => {
// // // // // // //                 const Icon = step.icon;
// // // // // // //                 const isLeft = index % 2 === 0;
// // // // // // //                 return (
// // // // // // //                   <div
// // // // // // //                     key={step.company}
// // // // // // //                     className={`relative pl-16 md:pl-0 md:w-1/2 transition-all duration-700 motion-reduce:transition-none ${
// // // // // // //                       isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'
// // // // // // //                     } ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
// // // // // // //                     style={{ transitionDelay: `${400 + index * 600}ms` }}
// // // // // // //                   >
// // // // // // //                     {/* Node */}
// // // // // // //                     <div
// // // // // // //                       className={`absolute top-6 left-0 ${isLeft ? 'md:left-auto md:-right-6' : 'md:-left-6'} w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-lg ${step.glow} ring-4 ring-white dark:ring-gray-800 z-10`}
// // // // // // //                     >
// // // // // // //                       {step.highlight && (
// // // // // // //                         <span className="absolute inset-0 rounded-full bg-orange-400/60 animate-ping motion-reduce:hidden" />
// // // // // // //                       )}
// // // // // // //                       <Icon className="relative w-5 h-5 md:w-6 md:h-6" />
// // // // // // //                     </div>

// // // // // // //                     {/* Card */}
// // // // // // //                     <div className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${step.highlight ? step.accent : 'from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800'} ${step.highlight ? `shadow-xl ${step.glow}` : 'shadow-md dark:shadow-black/40'} hover:-translate-y-1 transition-transform duration-300`}>
// // // // // // //                       <div className="rounded-[14px] bg-white/90 dark:bg-gray-900/95 backdrop-blur p-5 sm:p-6">
// // // // // // //                         <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
// // // // // // //                           <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
// // // // // // //                             {step.period}
// // // // // // //                           </span>
// // // // // // //                           {step.highlight && (
// // // // // // //                             <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
// // // // // // //                               <Briefcase className="w-3 h-3 mr-1" />
// // // // // // //                               Latest
// // // // // // //                             </Badge>
// // // // // // //                           )}
// // // // // // //                         </div>
// // // // // // //                         <div className="flex items-center gap-4">
// // // // // // //                           <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-white border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
// // // // // // //                             <img
// // // // // // //                               src={step.logo}
// // // // // // //                               alt={`${step.company} logo`}
// // // // // // //                               loading="lazy"
// // // // // // //                               referrerPolicy="no-referrer"
// // // // // // //                               onError={(e) => { e.currentTarget.style.display = 'none'; }}
// // // // // // //                               className="w-full h-full object-contain"
// // // // // // //                             />
// // // // // // //                           </div>
// // // // // // //                           <div className="min-w-0">
// // // // // // //                             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
// // // // // // //                               {step.company}
// // // // // // //                             </h3>
// // // // // // //                             <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-0.5">
// // // // // // //                               {step.role}
// // // // // // //                             </p>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                         <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
// // // // // // //                           {step.description}
// // // // // // //                         </p>
// // // // // // //                         <div className="mt-4 flex flex-wrap gap-2">
// // // // // // //                           {step.tags.map((tag) => (
// // // // // // //                             <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
// // // // // // //                               {tag}
// // // // // // //                             </Badge>
// // // // // // //                           ))}
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 );
// // // // // // //               })}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Skills & Proficiency Section with fade in */}
// // // // // // //         <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// // // // // // //             Skills & Proficiency
// // // // // // //           </h2>
          
// // // // // // //           {/* First Row: Languages & Frameworks */}
// // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
// // // // // // //               <CardHeader className="pb-3">
// // // // // // //                 <div className="flex items-center gap-3">
// // // // // // //                   <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700 dark:bg-blue-400/20 dark:text-blue-300">
// // // // // // //                     <Code className="w-5 h-5" />
// // // // // // //                   </div>
// // // // // // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // // // // // //                 </div>
// // // // // // //               </CardHeader>
// // // // // // //               <CardContent>
// // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // //                   {skills.languages.map((skill, skillIndex) => (
// // // // // // //                     <Badge 
// // // // // // //                       key={skillIndex} 
// // // // // // //                       variant="secondary" 
// // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // //                     >
// // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // //                       {skill.name}
// // // // // // //                     </Badge>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </CardContent>
// // // // // // //             </Card>

// // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
// // // // // // //               <CardHeader className="pb-3">
// // // // // // //                 <div className="flex items-center gap-3">
// // // // // // //                   <div className="p-2 rounded-lg bg-green-500/10 text-green-700 dark:bg-green-400/20 dark:text-green-300">
// // // // // // //                     <Globe className="w-5 h-5" />
// // // // // // //                   </div>
// // // // // // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // // // // // //                 </div>
// // // // // // //               </CardHeader>
// // // // // // //               <CardContent>
// // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // // // // //                     <Badge 
// // // // // // //                       key={skillIndex} 
// // // // // // //                       variant="secondary" 
// // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // //                     >
// // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // //                       {skill.name}
// // // // // // //                     </Badge>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </CardContent>
// // // // // // //             </Card>
// // // // // // //           </div>

// // // // // // //           {/* Second Row: Databases & Development Tools */}
// // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
// // // // // // //               <CardHeader className="pb-3">
// // // // // // //                 <div className="flex items-center gap-3">
// // // // // // //                   <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700 dark:bg-purple-400/20 dark:text-purple-300">
// // // // // // //                     <Database className="w-5 h-5" />
// // // // // // //                   </div>
// // // // // // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // // // // // //                 </div>
// // // // // // //               </CardHeader>
// // // // // // //               <CardContent>
// // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // //                   {skills.databases.map((skill, skillIndex) => (
// // // // // // //                     <Badge 
// // // // // // //                       key={skillIndex} 
// // // // // // //                       variant="secondary" 
// // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // //                     >
// // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // //                       {skill.name}
// // // // // // //                     </Badge>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </CardContent>
// // // // // // //             </Card>

// // // // // // //             <Card className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
// // // // // // //               <CardHeader className="pb-3">
// // // // // // //                 <div className="flex items-center gap-3">
// // // // // // //                   <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300">
// // // // // // //                     <Wrench className="w-5 h-5" />
// // // // // // //                   </div>
// // // // // // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // // // // // //                 </div>
// // // // // // //               </CardHeader>
// // // // // // //               <CardContent>
// // // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // // //                   {skills.tools.map((skill, skillIndex) => (
// // // // // // //                     <Badge 
// // // // // // //                       key={skillIndex} 
// // // // // // //                       variant="secondary" 
// // // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // // //                     >
// // // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // // //                       {skill.name}
// // // // // // //                     </Badge>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </CardContent>
// // // // // // //             </Card>
// // // // // // //           </div>

// // // // // // //           {/* Third Row: Team Leadership & API Testing */}
// // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // // // // // //             {additionalSkills.map((category, index) => (
// // // // // // //               <Card 
// // // // // // //                 key={index} 
// // // // // // //                 className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
// // // // // // //                   index === 0 ? 'border-red-500' : 'border-indigo-500'
// // // // // // //                 } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // // // // // //                 style={{transitionDelay: `${500 + index * 100}ms`}}
// // // // // // //               >
// // // // // // //                 <CardHeader className="pb-3">
// // // // // // //                   <div className="flex items-center gap-3">
// // // // // // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // // // // // //                       {(() => {
// // // // // // //                         const Icon = category.displayIcon;
// // // // // // //                         return <Icon className="w-5 h-5" />;
// // // // // // //                       })()}
// // // // // // //                     </div>
// // // // // // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // // // // // //                   </div>
// // // // // // //                 </CardHeader>
// // // // // // //                 <CardContent>
// // // // // // //                   <div className="space-y-2">
// // // // // // //                     {category.items.map((skill, skillIndex) => (
// // // // // // //                       <div 
// // // // // // //                         key={skillIndex} 
// // // // // // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // // // // //                       >
// // // // // // //                         {(() => {
// // // // // // //                           const SkillIcon = skill.icon;
// // // // // // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // // // // // //                         })()}
// // // // // // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// // // // // // //                       </div>
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default About;
// // // // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // import { Code, Database, Globe, Wrench, Users, TestTube, Target, Server, Brain, Clock, Send, Shield, GraduationCap, Rocket, Briefcase, Laptop } from "lucide-react";
// // // // // // import { useState, useEffect, useRef } from "react";

// // // // // // const About = () => {
// // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // //   const [skillsVisible, setSkillsVisible] = useState(false);
// // // // // //   const [journeyVisible, setJourneyVisible] = useState(false);
// // // // // //   const sectionRef = useRef(null);
// // // // // //   const skillsRef = useRef(null);
// // // // // //   const journeyRef = useRef(null);

// // // // // //   // Intersection Observer for main section
// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => setIsVisible(entry.isIntersecting));
// // // // // //       },
// // // // // //       { threshold: 0.1, rootMargin: "0px" }
// // // // // //     );
// // // // // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // // // // //     return () => {
// // // // // //       if (sectionRef.current) observer.unobserve(sectionRef.current);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   // Intersection Observer for journey section
// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => {
// // // // // //           if (entry.isIntersecting) setJourneyVisible(true);
// // // // // //         });
// // // // // //       },
// // // // // //       { threshold: 0.15, rootMargin: "0px" }
// // // // // //     );
// // // // // //     if (journeyRef.current) observer.observe(journeyRef.current);
// // // // // //     return () => {
// // // // // //       if (journeyRef.current) observer.unobserve(journeyRef.current);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   // Intersection Observer for skills section
// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => setSkillsVisible(entry.isIntersecting));
// // // // // //       },
// // // // // //       { threshold: 0.1, rootMargin: "0px" }
// // // // // //     );
// // // // // //     if (skillsRef.current) observer.observe(skillsRef.current);
// // // // // //     return () => {
// // // // // //       if (skillsRef.current) observer.unobserve(skillsRef.current);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   // Career journey (edit the text freely)
// // // // // //   const journey = [
// // // // // //     {
// // // // // //       company: "Webgeon Results",
// // // // // //       role: "Web Development Intern",
// // // // // //       period: "7-month internship",
// // // // // //       description:
// // // // // //         "Started my professional journey building responsive, user-centric web applications with React, Next.js and Tailwind CSS, focusing on clean code, performance and accessibility while working with the team.",
// // // // // //       tags: ["React", "Next.js", "Tailwind CSS"],
// // // // // //       icon: Laptop,
// // // // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0kIv9iZakWszgmLcYlcgcaF1cCjS8GdIyyx9mbUZmg&s=10",
// // // // // //       accent: "from-emerald-500 to-teal-500",
// // // // // //       glow: "shadow-emerald-500/30",
// // // // // //       ring: "ring-emerald-400/40",
// // // // // //     },
// // // // // //     {
// // // // // //       company: "Emertxe",
// // // // // //       role: "Full Stack Development & DSA",
// // // // // //       period: "7-month course",
// // // // // //       description:
// // // // // //         "Joined Emertxe to build a strong engineering base, learning full stack development end to end alongside data structures and algorithms.",
// // // // // //       tags: ["Full Stack", "DSA", "Problem Solving"],
// // // // // //       icon: GraduationCap,
// // // // // //       logo: "https://yt3.googleusercontent.com/NInLpoH9WwO8uFcAJK_s0I80JYSJ8rG1K-26LcFH4lei69Gpb_cf9KUDlgFAuA-sInxFDpCidA=s900-c-k-c0x00ffffff-no-rj",
// // // // // //       accent: "from-blue-500 to-cyan-500",
// // // // // //       glow: "shadow-blue-500/30",
// // // // // //       ring: "ring-blue-400/40",
// // // // // //     },
// // // // // //     {
// // // // // //       company: "Amazon",
// // // // // //       role: "ML Data Associate",
// // // // // //       period: "Next step",
// // // // // //       description:
// // // // // //         "Worked with data that powers machine learning systems, building attention to detail, accuracy and quality at scale.",
// // // // // //       tags: ["Machine Learning", "Data Quality"],
// // // // // //       icon: Brain,
// // // // // //       logo: "https://assets.qz.com/media/what-is-amazon-entity-qz.jpg",
// // // // // //       accent: "from-purple-500 to-pink-500",
// // // // // //       glow: "shadow-purple-500/30",
// // // // // //       ring: "ring-purple-400/40",
// // // // // //     },
// // // // // //     {
// // // // // //       company: "Accenture",
// // // // // //       role: "Placed",
// // // // // //       period: "The journey begins",
// // // // // //       description:
// // // // // //         "Placed at Accenture, where the next chapter starts: real-world delivery, bigger teams and bigger problems to solve.",
// // // // // //       tags: ["Placed", "New Chapter"],
// // // // // //       icon: Rocket,
// // // // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu6gNzg9YjY49DUxUOSgGJYqYklmQwmdD3_EefnUg4w&s=10",
// // // // // //       accent: "from-amber-400 to-orange-500",
// // // // // //       glow: "shadow-orange-500/40",
// // // // // //       ring: "ring-orange-400/50",
// // // // // //       highlight: true,
// // // // // //     },
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
// // // // // //       items: [
// // // // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // // // //       ],
// // // // // //       color: "bg-red-500/10 text-red-700 dark:bg-red-400/20 dark:text-red-300",
// // // // // //       displayIcon: Target
// // // // // //     },
// // // // // //     {
// // // // // //       title: "API Testing",
// // // // // //       items: [
// // // // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // // // //       ],
// // // // // //       color: "bg-indigo-500/10 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-300",
// // // // // //       displayIcon: Server
// // // // // //     }
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // // // //       <style>{`
// // // // // //         @keyframes aboutShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
// // // // // //         @keyframes aboutFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
// // // // // //         .about-border { background-size: 200% 200%; animation: aboutShift 8s ease infinite; }
// // // // // //         .about-float { animation: aboutFloat 4s ease-in-out infinite; }
// // // // // //         @media (prefers-reduced-motion: reduce) { .about-border, .about-float { animation: none; } }
// // // // // //       `}</style>
// // // // // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // // // // //         {/* Header with fade in */}
// // // // // //         <div className={`transition-all duration-1000 motion-reduce:transition-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // // // //           <div className="text-center">
// // // // // //             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent pb-2">
// // // // // //               About Me
// // // // // //             </h1>
// // // // // //             <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">
// // // // // //               Engineer by degree, developer by choice.
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           {/* Animated gradient border wrapper */}
// // // // // //           <div className="about-border mt-8 rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300">
// // // // // //             <div className="rounded-[22px] bg-white/95 dark:bg-gray-900/95 backdrop-blur p-6 sm:p-8 lg:p-10 grid gap-8 lg:grid-cols-5 lg:gap-10 items-center">
// // // // // //               {/* Story */}
// // // // // //               <div className="lg:col-span-3 space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
// // // // // //                 <p>
// // // // // //                   I'm a B.Tech graduate in Electronics and Communication Engineering from FISAT, class of 2025. What began as curiosity about how technology works became a real passion for building software people enjoy using.
// // // // // //                 </p>
// // // // // //                 <p>
// // // // // //                   I learn best by doing. A 7-month web development internship at Webgeon Results, a full stack and DSA program at Emertxe, and machine learning data work at Amazon each sharpened a different skill, and now I'm starting my next chapter at Accenture.
// // // // // //                 </p>
// // // // // //                 <p>
// // // // // //                   I care about clean, scalable code, thoughtful design and solving problems the right way.
// // // // // //                 </p>
// // // // // //                 <div className="flex flex-wrap gap-2 pt-1">
// // // // // //                   <Badge variant="secondary" className="px-3 py-1.5 text-sm">Full Stack Developer</Badge>
// // // // // //                   <Badge variant="secondary" className="px-3 py-1.5 text-sm">Problem Solver</Badge>
// // // // // //                   <Badge variant="secondary" className="px-3 py-1.5 text-sm">Fast Learner</Badge>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Education highlight */}
// // // // // //               <div className="lg:col-span-2">
// // // // // //                 <div
// // // // // //                   tabIndex={0}
// // // // // //                   className="group rounded-2xl border border-blue-200 dark:border-blue-400/30 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 p-6 text-center outline-none transition-all duration-300 hover:-translate-y-1 hover:ring-4 hover:ring-blue-500/30 focus-visible:ring-4 focus-visible:ring-blue-500/40"
// // // // // //                 >
// // // // // //                   <div className="about-float mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
// // // // // //                     <GraduationCap className="w-8 h-8" />
// // // // // //                   </div>
// // // // // //                   <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
// // // // // //                     B.Tech, Electronics & Communication
// // // // // //                   </h3>
// // // // // //                   <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">FISAT</p>
// // // // // //                   <p className="text-sm text-gray-500 dark:text-gray-400">2021 to 2025</p>
// // // // // //                   <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300">
// // // // // //                     <span className="relative flex h-2.5 w-2.5">
// // // // // //                       <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping motion-reduce:hidden" />
// // // // // //                       <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
// // // // // //                     </span>
// // // // // //                     Joining Accenture
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* ============ My Journey (Timeline) ============ */}
// // // // // //         <div ref={journeyRef} className="pt-2 sm:pt-4">
// // // // // //           <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 motion-reduce:transition-none ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
// // // // // //             <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// // // // // //               My Journey
// // // // // //             </h2>
// // // // // //             <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
// // // // // //               From learning the fundamentals to landing at Accenture, one step at a time.
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           <div className="relative">
// // // // // //             {/* Base line */}
// // // // // //             <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700/70 rounded-full" />
// // // // // //             {/* Line that draws itself down once */}
// // // // // //             <div
// // // // // //               className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-orange-500 transition-[height] duration-[2800ms] ease-out motion-reduce:transition-none"
// // // // // //               style={{ height: journeyVisible ? '100%' : '0%' }}
// // // // // //             />

// // // // // //             <div className="space-y-10 sm:space-y-14">
// // // // // //               {journey.map((step, index) => {
// // // // // //                 const Icon = step.icon;
// // // // // //                 const isLeft = index % 2 === 0;
// // // // // //                 return (
// // // // // //                   <div
// // // // // //                     key={step.company}
// // // // // //                     className={`group relative pl-16 md:pl-0 md:w-1/2 transition-all duration-700 motion-reduce:transition-none ${
// // // // // //                       isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'
// // // // // //                     } ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
// // // // // //                     style={{ transitionDelay: `${400 + index * 600}ms` }}
// // // // // //                   >
// // // // // //                     {/* Node */}
// // // // // //                     <div
// // // // // //                       className={`absolute top-6 left-0 ${isLeft ? 'md:left-auto md:-right-6' : 'md:-left-6'} w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-lg ${step.glow} ring-4 ring-white dark:ring-gray-800 z-10 transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110`}
// // // // // //                     >
// // // // // //                       {step.highlight && (
// // // // // //                         <span className="absolute inset-0 rounded-full bg-orange-400/60 animate-ping motion-reduce:hidden" />
// // // // // //                       )}
// // // // // //                       <Icon className="relative w-5 h-5 md:w-6 md:h-6" />
// // // // // //                     </div>

// // // // // //                     {/* Card */}
// // // // // //                     <div tabIndex={0} className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${step.highlight ? step.accent : 'from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800'} ${step.highlight ? `shadow-xl ${step.glow}` : 'shadow-md dark:shadow-black/40'} outline-none hover:-translate-y-1 hover:ring-4 focus-visible:ring-4 ${step.ring} transition-all duration-300`}>
// // // // // //                       <div className="rounded-[14px] bg-white/90 dark:bg-gray-900/95 backdrop-blur p-5 sm:p-6">
// // // // // //                         <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
// // // // // //                           <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
// // // // // //                             {step.period}
// // // // // //                           </span>
// // // // // //                           {step.highlight && (
// // // // // //                             <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
// // // // // //                               <Briefcase className="w-3 h-3 mr-1" />
// // // // // //                               Latest
// // // // // //                             </Badge>
// // // // // //                           )}
// // // // // //                         </div>
// // // // // //                         <div className="flex items-center gap-4">
// // // // // //                           <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-white border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
// // // // // //                             <img
// // // // // //                               src={step.logo}
// // // // // //                               alt={`${step.company} logo`}
// // // // // //                               loading="lazy"
// // // // // //                               referrerPolicy="no-referrer"
// // // // // //                               onError={(e) => { e.currentTarget.style.display = 'none'; }}
// // // // // //                               className="w-full h-full object-contain"
// // // // // //                             />
// // // // // //                           </div>
// // // // // //                           <div className="min-w-0">
// // // // // //                             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
// // // // // //                               {step.company}
// // // // // //                             </h3>
// // // // // //                             <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-0.5">
// // // // // //                               {step.role}
// // // // // //                             </p>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                         <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
// // // // // //                           {step.description}
// // // // // //                         </p>
// // // // // //                         <div className="mt-4 flex flex-wrap gap-2">
// // // // // //                           {step.tags.map((tag) => (
// // // // // //                             <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
// // // // // //                               {tag}
// // // // // //                             </Badge>
// // // // // //                           ))}
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 );
// // // // // //               })}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Skills & Proficiency Section with fade in */}
// // // // // //         <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// // // // // //             Skills & Proficiency
// // // // // //           </h2>
          
// // // // // //           {/* First Row: Languages & Frameworks */}
// // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 outline-none hover:ring-2 focus-visible:ring-2 ring-blue-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
// // // // // //               <CardHeader className="pb-3">
// // // // // //                 <div className="flex items-center gap-3">
// // // // // //                   <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700 dark:bg-blue-400/20 dark:text-blue-300">
// // // // // //                     <Code className="w-5 h-5" />
// // // // // //                   </div>
// // // // // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // // // // //                 </div>
// // // // // //               </CardHeader>
// // // // // //               <CardContent>
// // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // //                   {skills.languages.map((skill, skillIndex) => (
// // // // // //                     <Badge 
// // // // // //                       key={skillIndex} 
// // // // // //                       variant="secondary" 
// // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // //                     >
// // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // //                       {skill.name}
// // // // // //                     </Badge>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>

// // // // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 outline-none hover:ring-2 focus-visible:ring-2 ring-green-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
// // // // // //               <CardHeader className="pb-3">
// // // // // //                 <div className="flex items-center gap-3">
// // // // // //                   <div className="p-2 rounded-lg bg-green-500/10 text-green-700 dark:bg-green-400/20 dark:text-green-300">
// // // // // //                     <Globe className="w-5 h-5" />
// // // // // //                   </div>
// // // // // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // // // // //                 </div>
// // // // // //               </CardHeader>
// // // // // //               <CardContent>
// // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // // // //                     <Badge 
// // // // // //                       key={skillIndex} 
// // // // // //                       variant="secondary" 
// // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // //                     >
// // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // //                       {skill.name}
// // // // // //                     </Badge>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>
// // // // // //           </div>

// // // // // //           {/* Second Row: Databases & Development Tools */}
// // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 outline-none hover:ring-2 focus-visible:ring-2 ring-purple-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
// // // // // //               <CardHeader className="pb-3">
// // // // // //                 <div className="flex items-center gap-3">
// // // // // //                   <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700 dark:bg-purple-400/20 dark:text-purple-300">
// // // // // //                     <Database className="w-5 h-5" />
// // // // // //                   </div>
// // // // // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // // // // //                 </div>
// // // // // //               </CardHeader>
// // // // // //               <CardContent>
// // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // //                   {skills.databases.map((skill, skillIndex) => (
// // // // // //                     <Badge 
// // // // // //                       key={skillIndex} 
// // // // // //                       variant="secondary" 
// // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // //                     >
// // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // //                       {skill.name}
// // // // // //                     </Badge>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>

// // // // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 outline-none hover:ring-2 focus-visible:ring-2 ring-orange-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
// // // // // //               <CardHeader className="pb-3">
// // // // // //                 <div className="flex items-center gap-3">
// // // // // //                   <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300">
// // // // // //                     <Wrench className="w-5 h-5" />
// // // // // //                   </div>
// // // // // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // // // // //                 </div>
// // // // // //               </CardHeader>
// // // // // //               <CardContent>
// // // // // //                 <div className="flex flex-wrap gap-2">
// // // // // //                   {skills.tools.map((skill, skillIndex) => (
// // // // // //                     <Badge 
// // // // // //                       key={skillIndex} 
// // // // // //                       variant="secondary" 
// // // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // // //                     >
// // // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // // //                       {skill.name}
// // // // // //                     </Badge>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>
// // // // // //           </div>

// // // // // //           {/* Third Row: Team Leadership & API Testing */}
// // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // // // // //             {additionalSkills.map((category, index) => (
// // // // // //               <Card 
// // // // // //                 key={index} 
// // // // // //                 tabIndex={0}
// // // // // //                 className={`shadow-lg outline-none hover:ring-2 focus-visible:ring-2 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
// // // // // //                   index === 0 ? 'border-red-500 ring-red-500/50' : 'border-indigo-500 ring-indigo-500/50'
// // // // // //                 } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // // // // //                 style={{transitionDelay: `${500 + index * 100}ms`}}
// // // // // //               >
// // // // // //                 <CardHeader className="pb-3">
// // // // // //                   <div className="flex items-center gap-3">
// // // // // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // // // // //                       {(() => {
// // // // // //                         const Icon = category.displayIcon;
// // // // // //                         return <Icon className="w-5 h-5" />;
// // // // // //                       })()}
// // // // // //                     </div>
// // // // // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // // // // //                   </div>
// // // // // //                 </CardHeader>
// // // // // //                 <CardContent>
// // // // // //                   <div className="space-y-2">
// // // // // //                     {category.items.map((skill, skillIndex) => (
// // // // // //                       <div 
// // // // // //                         key={skillIndex} 
// // // // // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // // // //                       >
// // // // // //                         {(() => {
// // // // // //                           const SkillIcon = skill.icon;
// // // // // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // // // // //                         })()}
// // // // // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// // // // // //                       </div>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default About;
// // // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // import { Badge } from "@/components/ui/badge";
// // // // // import { Code, Database, Globe, Wrench, Users, TestTube, Target, Server, Brain, Clock, Send, Shield, GraduationCap, Rocket, Briefcase, Laptop } from "lucide-react";
// // // // // import { useState, useEffect, useRef } from "react";

// // // // // const About = () => {
// // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // //   const [skillsVisible, setSkillsVisible] = useState(false);
// // // // //   const [journeyVisible, setJourneyVisible] = useState(false);
// // // // //   const sectionRef = useRef(null);
// // // // //   const skillsRef = useRef(null);
// // // // //   const journeyRef = useRef(null);

// // // // //   // Intersection Observer for main section
// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((entry) => setIsVisible(entry.isIntersecting));
// // // // //       },
// // // // //       { threshold: 0.1, rootMargin: "0px" }
// // // // //     );
// // // // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // // // //     return () => {
// // // // //       if (sectionRef.current) observer.unobserve(sectionRef.current);
// // // // //     };
// // // // //   }, []);

// // // // //   // Intersection Observer for journey section
// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((entry) => {
// // // // //           if (entry.isIntersecting) setJourneyVisible(true);
// // // // //         });
// // // // //       },
// // // // //       { threshold: 0.15, rootMargin: "0px" }
// // // // //     );
// // // // //     if (journeyRef.current) observer.observe(journeyRef.current);
// // // // //     return () => {
// // // // //       if (journeyRef.current) observer.unobserve(journeyRef.current);
// // // // //     };
// // // // //   }, []);

// // // // //   // Intersection Observer for skills section
// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((entry) => setSkillsVisible(entry.isIntersecting));
// // // // //       },
// // // // //       { threshold: 0.1, rootMargin: "0px" }
// // // // //     );
// // // // //     if (skillsRef.current) observer.observe(skillsRef.current);
// // // // //     return () => {
// // // // //       if (skillsRef.current) observer.unobserve(skillsRef.current);
// // // // //     };
// // // // //   }, []);

// // // // //   // Career journey (edit the text freely)
// // // // //   const journey = [
// // // // //     {
// // // // //       company: "Webgeon Results",
// // // // //       role: "Web Development Intern",
// // // // //       period: "7-month internship",
// // // // //       description:
// // // // //         "Started my professional journey building responsive, user-centric web applications with React, Next.js and Tailwind CSS, focusing on clean code, performance and accessibility while working with the team.",
// // // // //       tags: ["React", "Next.js", "Tailwind CSS"],
// // // // //       icon: Laptop,
// // // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0kIv9iZakWszgmLcYlcgcaF1cCjS8GdIyyx9mbUZmg&s=10",
// // // // //       accent: "from-emerald-500 to-teal-500",
// // // // //       glow: "shadow-emerald-500/30",
// // // // //       ring: "ring-emerald-400/40",
// // // // //     },
// // // // //     {
// // // // //       company: "Emertxe",
// // // // //       role: "Full Stack Development & DSA",
// // // // //       period: "7-month course",
// // // // //       description:
// // // // //         "Joined Emertxe to build a strong engineering base, learning full stack development end to end alongside data structures and algorithms.",
// // // // //       tags: ["Full Stack", "DSA", "Problem Solving"],
// // // // //       icon: GraduationCap,
// // // // //       logo: "https://yt3.googleusercontent.com/NInLpoH9WwO8uFcAJK_s0I80JYSJ8rG1K-26LcFH4lei69Gpb_cf9KUDlgFAuA-sInxFDpCidA=s900-c-k-c0x00ffffff-no-rj",
// // // // //       accent: "from-blue-500 to-cyan-500",
// // // // //       glow: "shadow-blue-500/30",
// // // // //       ring: "ring-blue-400/40",
// // // // //     },
// // // // //     {
// // // // //       company: "Amazon",
// // // // //       role: "ML Data Associate",
// // // // //       period: "Next step",
// // // // //       description:
// // // // //         "Worked with data that powers machine learning systems, building attention to detail, accuracy and quality at scale.",
// // // // //       tags: ["Machine Learning", "Data Quality"],
// // // // //       icon: Brain,
// // // // //       logo: "https://assets.qz.com/media/what-is-amazon-entity-qz.jpg",
// // // // //       accent: "from-purple-500 to-pink-500",
// // // // //       glow: "shadow-purple-500/30",
// // // // //       ring: "ring-purple-400/40",
// // // // //     },
// // // // //     {
// // // // //       company: "Accenture",
// // // // //       role: "Placed",
// // // // //       period: "The journey begins",
// // // // //       description:
// // // // //         "Placed at Accenture, where the next chapter starts: real-world delivery, bigger teams and bigger problems to solve.",
// // // // //       tags: ["Placed", "New Chapter"],
// // // // //       icon: Rocket,
// // // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu6gNzg9YjY49DUxUOSgGJYqYklmQwmdD3_EefnUg4w&s=10",
// // // // //       accent: "from-amber-400 to-orange-500",
// // // // //       glow: "shadow-orange-500/40",
// // // // //       ring: "ring-orange-400/50",
// // // // //       highlight: true,
// // // // //     },
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
// // // // //       items: [
// // // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // // //       ],
// // // // //       color: "bg-red-500/10 text-red-700 dark:bg-red-400/20 dark:text-red-300",
// // // // //       displayIcon: Target
// // // // //     },
// // // // //     {
// // // // //       title: "API Testing",
// // // // //       items: [
// // // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // // //       ],
// // // // //       color: "bg-indigo-500/10 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-300",
// // // // //       displayIcon: Server
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // // //       <style>{`
// // // // //         @keyframes aboutShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
// // // // //         @keyframes aboutFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
// // // // //         .about-border { background-size: 200% 200%; animation: aboutShift 8s ease infinite; }
// // // // //         .about-float { animation: aboutFloat 4s ease-in-out infinite; }
// // // // //         @media (prefers-reduced-motion: reduce) { .about-border, .about-float { animation: none; } }
// // // // //       `}</style>
// // // // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // // // //         {/* Header with fade in */}
// // // // //         <div className={`transition-all duration-1000 motion-reduce:transition-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // // //           <div className="text-center">
// // // // //             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent pb-2">
// // // // //               About Me
// // // // //             </h1>
// // // // //             <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">
// // // // //               Engineer by degree, developer by choice.
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Open layout, no box */}
// // // // //           <div className="mt-10 grid gap-10 lg:grid-cols-5 lg:gap-12 items-center">
// // // // //             {/* Story */}
// // // // //             <div className="lg:col-span-3 space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
// // // // //               <p>
// // // // //                 I'm a B.Tech graduate in Electronics and Communication Engineering from FISAT, class of 2025. What began as curiosity about how technology works became a real passion for building software people enjoy using.
// // // // //               </p>
// // // // //               <p>
// // // // //                 I learn best by doing. A 7-month web development internship at Webgeon Results, a full stack and DSA program at Emertxe, and machine learning data work at Amazon each sharpened a different skill, and now I'm starting my next chapter at Accenture.
// // // // //               </p>
// // // // //               <p>
// // // // //                 I care about clean, scalable code, thoughtful design and solving problems the right way.
// // // // //               </p>
// // // // //               <div className="flex flex-wrap gap-2 pt-1">
// // // // //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm">Full Stack Developer</Badge>
// // // // //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm">Problem Solver</Badge>
// // // // //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm">Fast Learner</Badge>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Education highlight */}
// // // // //             <div className="lg:col-span-2 text-center lg:text-left lg:border-l lg:border-gray-200 dark:lg:border-gray-700 lg:pl-10">
// // // // //               <div className="about-float mx-auto lg:mx-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
// // // // //                 <GraduationCap className="w-8 h-8" />
// // // // //               </div>
// // // // //               <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
// // // // //                 B.Tech, Electronics & Communication
// // // // //               </h3>
// // // // //               <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">FISAT</p>
// // // // //               <p className="text-sm text-gray-500 dark:text-gray-400">2021 to 2025</p>
// // // // //               <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
// // // // //                 <span className="relative flex h-2.5 w-2.5">
// // // // //                   <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping motion-reduce:hidden" />
// // // // //                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
// // // // //                 </span>
// // // // //                 Joining Accenture
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* ============ My Journey (Timeline) ============ */}
// // // // //         <div ref={journeyRef} className="pt-2 sm:pt-4">
// // // // //           <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 motion-reduce:transition-none ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
// // // // //             <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// // // // //               My Journey
// // // // //             </h2>
// // // // //             <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
// // // // //               From learning the fundamentals to landing at Accenture, one step at a time.
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="relative">
// // // // //             {/* Base line */}
// // // // //             <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700/70 rounded-full" />
// // // // //             {/* Line that draws itself down once */}
// // // // //             <div
// // // // //               className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-orange-500 transition-[height] duration-[2800ms] ease-out motion-reduce:transition-none"
// // // // //               style={{ height: journeyVisible ? '100%' : '0%' }}
// // // // //             />

// // // // //             <div className="space-y-10 sm:space-y-14">
// // // // //               {journey.map((step, index) => {
// // // // //                 const Icon = step.icon;
// // // // //                 const isLeft = index % 2 === 0;
// // // // //                 return (
// // // // //                   <div
// // // // //                     key={step.company}
// // // // //                     className={`group relative pl-16 md:pl-0 md:w-1/2 transition-all duration-700 motion-reduce:transition-none ${
// // // // //                       isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'
// // // // //                     } ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
// // // // //                     style={{ transitionDelay: `${400 + index * 600}ms` }}
// // // // //                   >
// // // // //                     {/* Node */}
// // // // //                     <div
// // // // //                       className={`absolute top-6 left-0 ${isLeft ? 'md:left-auto md:-right-6' : 'md:-left-6'} w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-lg ${step.glow} ring-4 ring-white dark:ring-gray-800 z-10 transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110`}
// // // // //                     >
// // // // //                       {step.highlight && (
// // // // //                         <span className="absolute inset-0 rounded-full bg-orange-400/60 animate-ping motion-reduce:hidden" />
// // // // //                       )}
// // // // //                       <Icon className="relative w-5 h-5 md:w-6 md:h-6" />
// // // // //                     </div>

// // // // //                     {/* Card */}
// // // // //                     <div tabIndex={0} className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${step.highlight ? step.accent : 'from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800'} ${step.highlight ? `shadow-xl ${step.glow}` : 'shadow-md dark:shadow-black/40'} outline-none hover:-translate-y-1 hover:ring-2 focus-visible:ring-2 ${step.ring} transition-all duration-300`}>
// // // // //                       <div className="rounded-[14px] bg-white/90 dark:bg-gray-900/95 backdrop-blur p-5 sm:p-6">
// // // // //                         <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
// // // // //                           <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
// // // // //                             {step.period}
// // // // //                           </span>
// // // // //                           {step.highlight && (
// // // // //                             <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
// // // // //                               <Briefcase className="w-3 h-3 mr-1" />
// // // // //                               Latest
// // // // //                             </Badge>
// // // // //                           )}
// // // // //                         </div>
// // // // //                         <div className="flex items-center gap-4">
// // // // //                           <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-white border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
// // // // //                             <img
// // // // //                               src={step.logo}
// // // // //                               alt={`${step.company} logo`}
// // // // //                               loading="lazy"
// // // // //                               referrerPolicy="no-referrer"
// // // // //                               onError={(e) => { e.currentTarget.style.display = 'none'; }}
// // // // //                               className="w-full h-full object-contain"
// // // // //                             />
// // // // //                           </div>
// // // // //                           <div className="min-w-0">
// // // // //                             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
// // // // //                               {step.company}
// // // // //                             </h3>
// // // // //                             <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-0.5">
// // // // //                               {step.role}
// // // // //                             </p>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                         <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
// // // // //                           {step.description}
// // // // //                         </p>
// // // // //                         <div className="mt-4 flex flex-wrap gap-2">
// // // // //                           {step.tags.map((tag) => (
// // // // //                             <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
// // // // //                               {tag}
// // // // //                             </Badge>
// // // // //                           ))}
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 );
// // // // //               })}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Skills & Proficiency Section with fade in */}
// // // // //         <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// // // // //             Skills & Proficiency
// // // // //           </h2>
          
// // // // //           {/* First Row: Languages & Frameworks */}
// // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 outline-none hover:ring-1 focus-visible:ring-1 ring-blue-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
// // // // //               <CardHeader className="pb-3">
// // // // //                 <div className="flex items-center gap-3">
// // // // //                   <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700 dark:bg-blue-400/20 dark:text-blue-300">
// // // // //                     <Code className="w-5 h-5" />
// // // // //                   </div>
// // // // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // // // //                 </div>
// // // // //               </CardHeader>
// // // // //               <CardContent>
// // // // //                 <div className="flex flex-wrap gap-2">
// // // // //                   {skills.languages.map((skill, skillIndex) => (
// // // // //                     <Badge 
// // // // //                       key={skillIndex} 
// // // // //                       variant="secondary" 
// // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // //                     >
// // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // //                       {skill.name}
// // // // //                     </Badge>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </CardContent>
// // // // //             </Card>

// // // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 outline-none hover:ring-1 focus-visible:ring-1 ring-green-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
// // // // //               <CardHeader className="pb-3">
// // // // //                 <div className="flex items-center gap-3">
// // // // //                   <div className="p-2 rounded-lg bg-green-500/10 text-green-700 dark:bg-green-400/20 dark:text-green-300">
// // // // //                     <Globe className="w-5 h-5" />
// // // // //                   </div>
// // // // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // // // //                 </div>
// // // // //               </CardHeader>
// // // // //               <CardContent>
// // // // //                 <div className="flex flex-wrap gap-2">
// // // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // // //                     <Badge 
// // // // //                       key={skillIndex} 
// // // // //                       variant="secondary" 
// // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // //                     >
// // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // //                       {skill.name}
// // // // //                     </Badge>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </CardContent>
// // // // //             </Card>
// // // // //           </div>

// // // // //           {/* Second Row: Databases & Development Tools */}
// // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 outline-none hover:ring-1 focus-visible:ring-1 ring-purple-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
// // // // //               <CardHeader className="pb-3">
// // // // //                 <div className="flex items-center gap-3">
// // // // //                   <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700 dark:bg-purple-400/20 dark:text-purple-300">
// // // // //                     <Database className="w-5 h-5" />
// // // // //                   </div>
// // // // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // // // //                 </div>
// // // // //               </CardHeader>
// // // // //               <CardContent>
// // // // //                 <div className="flex flex-wrap gap-2">
// // // // //                   {skills.databases.map((skill, skillIndex) => (
// // // // //                     <Badge 
// // // // //                       key={skillIndex} 
// // // // //                       variant="secondary" 
// // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // //                     >
// // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // //                       {skill.name}
// // // // //                     </Badge>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </CardContent>
// // // // //             </Card>

// // // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 outline-none hover:ring-1 focus-visible:ring-1 ring-orange-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
// // // // //               <CardHeader className="pb-3">
// // // // //                 <div className="flex items-center gap-3">
// // // // //                   <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300">
// // // // //                     <Wrench className="w-5 h-5" />
// // // // //                   </div>
// // // // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // // // //                 </div>
// // // // //               </CardHeader>
// // // // //               <CardContent>
// // // // //                 <div className="flex flex-wrap gap-2">
// // // // //                   {skills.tools.map((skill, skillIndex) => (
// // // // //                     <Badge 
// // // // //                       key={skillIndex} 
// // // // //                       variant="secondary" 
// // // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // // //                     >
// // // // //                       <span className="mr-2">{skill.icon}</span>
// // // // //                       {skill.name}
// // // // //                     </Badge>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </CardContent>
// // // // //             </Card>
// // // // //           </div>

// // // // //           {/* Third Row: Team Leadership & API Testing */}
// // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // // // //             {additionalSkills.map((category, index) => (
// // // // //               <Card 
// // // // //                 key={index} 
// // // // //                 tabIndex={0}
// // // // //                 className={`shadow-lg outline-none hover:ring-1 focus-visible:ring-1 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
// // // // //                   index === 0 ? 'border-red-500 ring-red-500/50' : 'border-indigo-500 ring-indigo-500/50'
// // // // //                 } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // // // //                 style={{transitionDelay: `${500 + index * 100}ms`}}
// // // // //               >
// // // // //                 <CardHeader className="pb-3">
// // // // //                   <div className="flex items-center gap-3">
// // // // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // // // //                       {(() => {
// // // // //                         const Icon = category.displayIcon;
// // // // //                         return <Icon className="w-5 h-5" />;
// // // // //                       })()}
// // // // //                     </div>
// // // // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // // // //                   </div>
// // // // //                 </CardHeader>
// // // // //                 <CardContent>
// // // // //                   <div className="space-y-2">
// // // // //                     {category.items.map((skill, skillIndex) => (
// // // // //                       <div 
// // // // //                         key={skillIndex} 
// // // // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // // //                       >
// // // // //                         {(() => {
// // // // //                           const SkillIcon = skill.icon;
// // // // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // // // //                         })()}
// // // // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default About;
// // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Badge } from "@/components/ui/badge";
// // // // import { Code, Database, Globe, Wrench, Users, TestTube, Target, Server, Brain, Clock, Send, Shield, GraduationCap, Rocket, Briefcase, Laptop } from "lucide-react";
// // // // import { useState, useEffect, useRef } from "react";

// // // // const About = () => {
// // // //   const [isVisible, setIsVisible] = useState(false);
// // // //   const [skillsVisible, setSkillsVisible] = useState(false);
// // // //   const [journeyVisible, setJourneyVisible] = useState(false);
// // // //   const sectionRef = useRef(null);
// // // //   const skillsRef = useRef(null);
// // // //   const journeyRef = useRef(null);

// // // //   // Intersection Observer for main section
// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => setIsVisible(entry.isIntersecting));
// // // //       },
// // // //       { threshold: 0.1, rootMargin: "0px" }
// // // //     );
// // // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // // //     return () => {
// // // //       if (sectionRef.current) observer.unobserve(sectionRef.current);
// // // //     };
// // // //   }, []);

// // // //   // Intersection Observer for journey section
// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) setJourneyVisible(true);
// // // //         });
// // // //       },
// // // //       { threshold: 0.15, rootMargin: "0px" }
// // // //     );
// // // //     if (journeyRef.current) observer.observe(journeyRef.current);
// // // //     return () => {
// // // //       if (journeyRef.current) observer.unobserve(journeyRef.current);
// // // //     };
// // // //   }, []);

// // // //   // Intersection Observer for skills section
// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => setSkillsVisible(entry.isIntersecting));
// // // //       },
// // // //       { threshold: 0.1, rootMargin: "0px" }
// // // //     );
// // // //     if (skillsRef.current) observer.observe(skillsRef.current);
// // // //     return () => {
// // // //       if (skillsRef.current) observer.unobserve(skillsRef.current);
// // // //     };
// // // //   }, []);

// // // //   // Career journey (edit the text freely)
// // // //   const journey = [
// // // //     {
// // // //       company: "Webgeon Results",
// // // //       role: "Web Development Intern",
// // // //       period: "7-month internship",
// // // //       description:
// // // //         "Started my professional journey building responsive, user-centric web applications with React, Next.js and Tailwind CSS, focusing on clean code, performance and accessibility while working with the team.",
// // // //       tags: ["React", "Next.js", "Tailwind CSS"],
// // // //       icon: Laptop,
// // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0kIv9iZakWszgmLcYlcgcaF1cCjS8GdIyyx9mbUZmg&s=10",
// // // //       accent: "from-emerald-500 to-teal-500",
// // // //       glow: "shadow-emerald-500/30",
// // // //       ring: "ring-emerald-400/40",
// // // //     },
// // // //     {
// // // //       company: "Emertxe",
// // // //       role: "Full Stack Development & DSA",
// // // //       period: "7-month course",
// // // //       description:
// // // //         "Joined Emertxe to build a strong engineering base, learning full stack development end to end alongside data structures and algorithms.",
// // // //       tags: ["Full Stack", "DSA", "Problem Solving"],
// // // //       icon: GraduationCap,
// // // //       logo: "https://yt3.googleusercontent.com/NInLpoH9WwO8uFcAJK_s0I80JYSJ8rG1K-26LcFH4lei69Gpb_cf9KUDlgFAuA-sInxFDpCidA=s900-c-k-c0x00ffffff-no-rj",
// // // //       accent: "from-blue-500 to-cyan-500",
// // // //       glow: "shadow-blue-500/30",
// // // //       ring: "ring-blue-400/40",
// // // //     },
// // // //     {
// // // //       company: "Amazon",
// // // //       role: "ML Data Associate",
// // // //       period: "Next step",
// // // //       description:
// // // //         "Worked with data that powers machine learning systems, building attention to detail, accuracy and quality at scale.",
// // // //       tags: ["Machine Learning", "Data Quality"],
// // // //       icon: Brain,
// // // //       logo: "https://assets.qz.com/media/what-is-amazon-entity-qz.jpg",
// // // //       accent: "from-purple-500 to-pink-500",
// // // //       glow: "shadow-purple-500/30",
// // // //       ring: "ring-purple-400/40",
// // // //     },
// // // //     {
// // // //       company: "Accenture",
// // // //       role: "Placed",
// // // //       period: "The journey begins",
// // // //       description:
// // // //         "Placed at Accenture, where the next chapter starts: real-world delivery, bigger teams and bigger problems to solve.",
// // // //       tags: ["Placed", "New Chapter"],
// // // //       icon: Rocket,
// // // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu6gNzg9YjY49DUxUOSgGJYqYklmQwmdD3_EefnUg4w&s=10",
// // // //       accent: "from-amber-400 to-orange-500",
// // // //       glow: "shadow-orange-500/40",
// // // //       ring: "ring-orange-400/50",
// // // //       highlight: true,
// // // //     },
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
// // // //       items: [
// // // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // // //       ],
// // // //       color: "bg-red-500/10 text-red-700 dark:bg-red-400/20 dark:text-red-300",
// // // //       displayIcon: Target
// // // //     },
// // // //     {
// // // //       title: "API Testing",
// // // //       items: [
// // // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // // //       ],
// // // //       color: "bg-indigo-500/10 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-300",
// // // //       displayIcon: Server
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // // //       <style>{`
// // // //         @keyframes aboutShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
// // // //         @keyframes aboutFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
// // // //         .about-border { background-size: 200% 200%; animation: aboutShift 8s ease infinite; }
// // // //         .about-float { animation: aboutFloat 4s ease-in-out infinite; }
// // // //         @media (prefers-reduced-motion: reduce) { .about-border, .about-float { animation: none; } }
// // // //       `}</style>
// // // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // // //         {/* Header with fade in */}
// // // //         <div className={`transition-all duration-1000 motion-reduce:transition-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // // //           <div className="text-center">
// // // //             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent pb-2">
// // // //               About Me
// // // //             </h1>
// // // //             <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">
// // // //               Engineer by degree, developer by choice.
// // // //             </p>
// // // //           </div>

// // // //           {/* Open layout, no box */}
// // // //           <div className="mt-10 grid gap-10 lg:grid-cols-5 lg:gap-12 items-center">
// // // //             {/* Story */}
// // // //             <div className="lg:col-span-3 lg:order-2 space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
// // // //               <p>
// // // //                 I'm a B.Tech graduate in Electronics and Communication Engineering from FISAT, class of 2025. What began as curiosity about how technology works became a real passion for building software people enjoy using.
// // // //               </p>
// // // //               <p>
// // // //                 I learn best by doing. A 7-month web development internship at Webgeon Results, a full stack and DSA program at Emertxe, and machine learning data work at Amazon each sharpened a different skill, and now I'm starting my next chapter at Accenture.
// // // //               </p>
// // // //               <p>
// // // //                 I care about clean, scalable code, thoughtful design and solving problems the right way.
// // // //               </p>
// // // //               <div className="flex flex-wrap gap-2 pt-1">
// // // //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm">Full Stack Developer</Badge>
// // // //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm">Problem Solver</Badge>
// // // //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm">Fast Learner</Badge>
// // // //               </div>
// // // //             </div>

// // // //             {/* Education highlight */}
// // // //             <div className="lg:col-span-2 lg:order-1 text-center lg:text-left lg:border-r lg:border-gray-200 dark:lg:border-gray-700 lg:pr-10">
// // // //               <div className="about-float mx-auto lg:mx-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
// // // //                 <GraduationCap className="w-8 h-8" />
// // // //               </div>
// // // //               <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
// // // //                 B.Tech, Electronics & Communication
// // // //               </h3>
// // // //               <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">FISAT</p>
// // // //               <p className="text-sm text-gray-500 dark:text-gray-400">2021 to 2025</p>
// // // //               <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
// // // //                 <span className="relative flex h-2.5 w-2.5">
// // // //                   <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping motion-reduce:hidden" />
// // // //                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
// // // //                 </span>
// // // //                 Joining Accenture
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* ============ My Journey (Timeline) ============ */}
// // // //         <div ref={journeyRef} className="pt-2 sm:pt-4">
// // // //           <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 motion-reduce:transition-none ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
// // // //             <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// // // //               My Journey
// // // //             </h2>
// // // //             <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
// // // //               From learning the fundamentals to landing at Accenture, one step at a time.
// // // //             </p>
// // // //           </div>

// // // //           <div className="relative">
// // // //             {/* Base line */}
// // // //             <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700/70 rounded-full" />
// // // //             {/* Line that draws itself down once */}
// // // //             <div
// // // //               className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-orange-500 transition-[height] duration-[2800ms] ease-out motion-reduce:transition-none"
// // // //               style={{ height: journeyVisible ? '100%' : '0%' }}
// // // //             />

// // // //             <div className="space-y-10 sm:space-y-14">
// // // //               {journey.map((step, index) => {
// // // //                 const Icon = step.icon;
// // // //                 const isLeft = index % 2 === 0;
// // // //                 return (
// // // //                   <div
// // // //                     key={step.company}
// // // //                     className={`group relative pl-16 md:pl-0 md:w-1/2 transition-all duration-700 motion-reduce:transition-none ${
// // // //                       isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'
// // // //                     } ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
// // // //                     style={{ transitionDelay: `${400 + index * 600}ms` }}
// // // //                   >
// // // //                     {/* Node */}
// // // //                     <div
// // // //                       className={`absolute top-6 left-0 ${isLeft ? 'md:left-auto md:-right-6' : 'md:-left-6'} w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-lg ${step.glow} ring-4 ring-white dark:ring-gray-800 z-10 transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110`}
// // // //                     >
// // // //                       {step.highlight && (
// // // //                         <span className="absolute inset-0 rounded-full bg-orange-400/60 animate-ping motion-reduce:hidden" />
// // // //                       )}
// // // //                       <Icon className="relative w-5 h-5 md:w-6 md:h-6" />
// // // //                     </div>

// // // //                     {/* Card */}
// // // //                     <div tabIndex={0} className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${step.highlight ? step.accent : 'from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800'} ${step.highlight ? `shadow-xl ${step.glow}` : 'shadow-md dark:shadow-black/40'} outline-none hover:-translate-y-1 hover:ring-2 focus-visible:ring-2 ${step.ring} transition-all duration-300`}>
// // // //                       <div className="rounded-[14px] bg-white/90 dark:bg-gray-900/95 backdrop-blur p-5 sm:p-6">
// // // //                         <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
// // // //                           <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
// // // //                             {step.period}
// // // //                           </span>
// // // //                           {step.highlight && (
// // // //                             <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
// // // //                               <Briefcase className="w-3 h-3 mr-1" />
// // // //                               Latest
// // // //                             </Badge>
// // // //                           )}
// // // //                         </div>
// // // //                         <div className="flex items-center gap-4">
// // // //                           <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-white border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
// // // //                             <img
// // // //                               src={step.logo}
// // // //                               alt={`${step.company} logo`}
// // // //                               loading="lazy"
// // // //                               referrerPolicy="no-referrer"
// // // //                               onError={(e) => { e.currentTarget.style.display = 'none'; }}
// // // //                               className="w-full h-full object-contain"
// // // //                             />
// // // //                           </div>
// // // //                           <div className="min-w-0">
// // // //                             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
// // // //                               {step.company}
// // // //                             </h3>
// // // //                             <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-0.5">
// // // //                               {step.role}
// // // //                             </p>
// // // //                           </div>
// // // //                         </div>
// // // //                         <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
// // // //                           {step.description}
// // // //                         </p>
// // // //                         <div className="mt-4 flex flex-wrap gap-2">
// // // //                           {step.tags.map((tag) => (
// // // //                             <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
// // // //                               {tag}
// // // //                             </Badge>
// // // //                           ))}
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 );
// // // //               })}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Skills & Proficiency Section with fade in */}
// // // //         <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// // // //             Skills & Proficiency
// // // //           </h2>
          
// // // //           {/* First Row: Languages & Frameworks */}
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 outline-none hover:ring-1 focus-visible:ring-1 ring-blue-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
// // // //               <CardHeader className="pb-3">
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700 dark:bg-blue-400/20 dark:text-blue-300">
// // // //                     <Code className="w-5 h-5" />
// // // //                   </div>
// // // //                   <CardTitle className="text-lg sm:text-xl">Languages & Scripting</CardTitle>
// // // //                 </div>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <div className="flex flex-wrap gap-2">
// // // //                   {skills.languages.map((skill, skillIndex) => (
// // // //                     <Badge 
// // // //                       key={skillIndex} 
// // // //                       variant="secondary" 
// // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // //                     >
// // // //                       <span className="mr-2">{skill.icon}</span>
// // // //                       {skill.name}
// // // //                     </Badge>
// // // //                   ))}
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>

// // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 outline-none hover:ring-1 focus-visible:ring-1 ring-green-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
// // // //               <CardHeader className="pb-3">
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div className="p-2 rounded-lg bg-green-500/10 text-green-700 dark:bg-green-400/20 dark:text-green-300">
// // // //                     <Globe className="w-5 h-5" />
// // // //                   </div>
// // // //                   <CardTitle className="text-lg sm:text-xl">Frameworks & Libraries</CardTitle>
// // // //                 </div>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <div className="flex flex-wrap gap-2">
// // // //                   {skills.frameworks.map((skill, skillIndex) => (
// // // //                     <Badge 
// // // //                       key={skillIndex} 
// // // //                       variant="secondary" 
// // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
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
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 outline-none hover:ring-1 focus-visible:ring-1 ring-purple-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
// // // //               <CardHeader className="pb-3">
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700 dark:bg-purple-400/20 dark:text-purple-300">
// // // //                     <Database className="w-5 h-5" />
// // // //                   </div>
// // // //                   <CardTitle className="text-lg sm:text-xl">Databases</CardTitle>
// // // //                 </div>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <div className="flex flex-wrap gap-2">
// // // //                   {skills.databases.map((skill, skillIndex) => (
// // // //                     <Badge 
// // // //                       key={skillIndex} 
// // // //                       variant="secondary" 
// // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
// // // //                     >
// // // //                       <span className="mr-2">{skill.icon}</span>
// // // //                       {skill.name}
// // // //                     </Badge>
// // // //                   ))}
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>

// // // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 outline-none hover:ring-1 focus-visible:ring-1 ring-orange-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
// // // //               <CardHeader className="pb-3">
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300">
// // // //                     <Wrench className="w-5 h-5" />
// // // //                   </div>
// // // //                   <CardTitle className="text-lg sm:text-xl">Development Tools</CardTitle>
// // // //                 </div>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <div className="flex flex-wrap gap-2">
// // // //                   {skills.tools.map((skill, skillIndex) => (
// // // //                     <Badge 
// // // //                       key={skillIndex} 
// // // //                       variant="secondary" 
// // // //                       className="text-sm sm:text-base px-3 py-1.5 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
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
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
// // // //             {additionalSkills.map((category, index) => (
// // // //               <Card 
// // // //                 key={index} 
// // // //                 tabIndex={0}
// // // //                 className={`shadow-lg outline-none hover:ring-1 focus-visible:ring-1 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
// // // //                   index === 0 ? 'border-red-500 ring-red-500/50' : 'border-indigo-500 ring-indigo-500/50'
// // // //                 } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // // //                 style={{transitionDelay: `${500 + index * 100}ms`}}
// // // //               >
// // // //                 <CardHeader className="pb-3">
// // // //                   <div className="flex items-center gap-3">
// // // //                     <div className={`p-2 rounded-lg ${category.color}`}>
// // // //                       {(() => {
// // // //                         const Icon = category.displayIcon;
// // // //                         return <Icon className="w-5 h-5" />;
// // // //                       })()}
// // // //                     </div>
// // // //                     <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
// // // //                   </div>
// // // //                 </CardHeader>
// // // //                 <CardContent>
// // // //                   <div className="space-y-2">
// // // //                     {category.items.map((skill, skillIndex) => (
// // // //                       <div 
// // // //                         key={skillIndex} 
// // // //                         className={`flex items-center gap-3 p-2.5 rounded-lg ${skill.bgColor} hover:scale-105 transition-all duration-200 cursor-pointer`}
// // // //                       >
// // // //                         {(() => {
// // // //                           const SkillIcon = skill.icon;
// // // //                           return <SkillIcon className={`w-4 h-4 ${skill.iconColor}`} />;
// // // //                         })()}
// // // //                         <span className="text-sm sm:text-base font-medium">{skill.name}</span>
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
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Code, Database, Globe, Wrench, Users, TestTube, Target, Server, Brain, Clock, Send, Shield, GraduationCap, Rocket, Briefcase, Laptop } from "lucide-react";
// // // import { useState, useEffect, useRef } from "react";

// // // const About = () => {
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const [skillsVisible, setSkillsVisible] = useState(false);
// // //   const [journeyVisible, setJourneyVisible] = useState(false);
// // //   const sectionRef = useRef(null);
// // //   const skillsRef = useRef(null);
// // //   const journeyRef = useRef(null);

// // //   // Intersection Observer for main section
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => setIsVisible(entry.isIntersecting));
// // //       },
// // //       { threshold: 0.1, rootMargin: "0px" }
// // //     );
// // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // //     return () => {
// // //       if (sectionRef.current) observer.unobserve(sectionRef.current);
// // //     };
// // //   }, []);

// // //   // Intersection Observer for journey section
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) setJourneyVisible(true);
// // //         });
// // //       },
// // //       { threshold: 0.15, rootMargin: "0px" }
// // //     );
// // //     if (journeyRef.current) observer.observe(journeyRef.current);
// // //     return () => {
// // //       if (journeyRef.current) observer.unobserve(journeyRef.current);
// // //     };
// // //   }, []);

// // //   // Intersection Observer for skills section
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => setSkillsVisible(entry.isIntersecting));
// // //       },
// // //       { threshold: 0.1, rootMargin: "0px" }
// // //     );
// // //     if (skillsRef.current) observer.observe(skillsRef.current);
// // //     return () => {
// // //       if (skillsRef.current) observer.unobserve(skillsRef.current);
// // //     };
// // //   }, []);

// // //   // Career journey (edit the text freely)
// // //   const journey = [
// // //     {
// // //       company: "Webgeon Results",
// // //       role: "Web Development Intern",
// // //       period: "7-month internship",
// // //       description:
// // //         "Started my professional journey building responsive, user-centric web applications with React, Next.js and Tailwind CSS, focusing on clean code, performance and accessibility while working with the team.",
// // //       tags: ["React", "Next.js", "Tailwind CSS"],
// // //       icon: Laptop,
// // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0kIv9iZakWszgmLcYlcgcaF1cCjS8GdIyyx9mbUZmg&s=10",
// // //       accent: "from-emerald-500 to-teal-500",
// // //       glow: "shadow-emerald-500/30",
// // //       ring: "ring-emerald-400/40",
// // //     },
// // //     {
// // //       company: "Emertxe",
// // //       role: "Full Stack Development & DSA",
// // //       period: "7-month course",
// // //       description:
// // //         "Joined Emertxe to build a strong engineering base, learning full stack development end to end alongside data structures and algorithms.",
// // //       tags: ["Full Stack", "DSA", "Problem Solving"],
// // //       icon: GraduationCap,
// // //       logo: "https://yt3.googleusercontent.com/NInLpoH9WwO8uFcAJK_s0I80JYSJ8rG1K-26LcFH4lei69Gpb_cf9KUDlgFAuA-sInxFDpCidA=s900-c-k-c0x00ffffff-no-rj",
// // //       accent: "from-blue-500 to-cyan-500",
// // //       glow: "shadow-blue-500/30",
// // //       ring: "ring-blue-400/40",
// // //     },
// // //     {
// // //       company: "Amazon",
// // //       role: "ML Data Associate",
// // //       period: "Next step",
// // //       description:
// // //         "Worked with data that powers machine learning systems, building attention to detail, accuracy and quality at scale.",
// // //       tags: ["Machine Learning", "Data Quality"],
// // //       icon: Brain,
// // //       logo: "https://assets.qz.com/media/what-is-amazon-entity-qz.jpg",
// // //       accent: "from-purple-500 to-pink-500",
// // //       glow: "shadow-purple-500/30",
// // //       ring: "ring-purple-400/40",
// // //     },
// // //     {
// // //       company: "Accenture",
// // //       role: "Placed",
// // //       period: "The journey begins",
// // //       description:
// // //         "Placed at Accenture, where the next chapter starts: real-world delivery, bigger teams and bigger problems to solve.",
// // //       tags: ["Placed", "New Chapter"],
// // //       icon: Rocket,
// // //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu6gNzg9YjY49DUxUOSgGJYqYklmQwmdD3_EefnUg4w&s=10",
// // //       accent: "from-amber-400 to-orange-500",
// // //       glow: "shadow-orange-500/40",
// // //       ring: "ring-orange-400/50",
// // //       highlight: true,
// // //     },
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
// // //       items: [
// // //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// // //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// // //       ],
// // //       color: "bg-red-500/10 text-red-700 dark:bg-red-400/20 dark:text-red-300",
// // //       displayIcon: Target
// // //     },
// // //     {
// // //       title: "API Testing",
// // //       items: [
// // //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// // //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// // //       ],
// // //       color: "bg-indigo-500/10 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-300",
// // //       displayIcon: Server
// // //     }
// // //   ];

// // //   return (
// // //     <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// // //       <style>{`
// // //         @keyframes aboutShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
// // //         .about-border { background-size: 200% 200%; animation: aboutShift 8s ease infinite; }
// // //                 @media (prefers-reduced-motion: reduce) { .about-border { animation: none; } }
// // //       `}</style>
// // //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// // //         {/* Header with fade in */}
// // //         <div className={`transition-all duration-1000 motion-reduce:transition-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// // //           <div className="text-center">
// // //             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent pb-2">
// // //               About Me
// // //             </h1>
// // //             <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">
// // //               Engineer by degree, developer by choice.
// // //             </p>
// // //           </div>

// // //           {/* Open layout, no box */}
// // //           <div className="mt-10 grid gap-10 lg:grid-cols-5 lg:gap-12 items-center">
// // //             {/* Story */}
// // //             <div className="lg:col-span-3 lg:order-2 space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
// // //               <p>
// // //                 I'm a B.Tech graduate in Electronics and Communication Engineering from FISAT, class of 2025. What began as curiosity about how technology works became a real passion for building software people enjoy using.
// // //               </p>
// // //               <p>
// // //                 I learn best by doing. A 7-month web development internship at Webgeon Results, a full stack and DSA program at Emertxe, and machine learning data work at Amazon each sharpened a different skill, and now I'm starting my next chapter at Accenture.
// // //               </p>
// // //               <p>
// // //                 I care about clean, scalable code, thoughtful design and solving problems the right way.
// // //               </p>
// // //               <div className="flex flex-wrap gap-2 pt-1">
// // //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Full Stack Developer</Badge>
// // //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Problem Solver</Badge>
// // //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Fast Learner</Badge>
// // //               </div>
// // //             </div>

// // //             {/* Education highlight */}
// // //             <div className="lg:col-span-2 lg:order-1 text-center lg:text-left lg:border-r lg:border-gray-200 dark:lg:border-gray-700 lg:pr-10">
// // //               <div className="mx-auto lg:mx-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
// // //                 <GraduationCap className="w-8 h-8" />
// // //               </div>
// // //               <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
// // //                 B.Tech, Electronics & Communication
// // //               </h3>
// // //               <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">FISAT</p>
// // //               <p className="text-sm text-gray-500 dark:text-gray-400">2021 to 2025</p>
// // //               <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
// // //                 <span className="relative flex h-2.5 w-2.5">
// // //                   <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping motion-reduce:hidden" />
// // //                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
// // //                 </span>
// // //                 Joining Accenture
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* ============ My Journey (Timeline) ============ */}
// // //         <div ref={journeyRef} className="pt-2 sm:pt-4">
// // //           <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 motion-reduce:transition-none ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
// // //             <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// // //               My Journey
// // //             </h2>
// // //             <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
// // //               From learning the fundamentals to landing at Accenture, one step at a time.
// // //             </p>
// // //           </div>

// // //           <div className="relative">
// // //             {/* Base line */}
// // //             <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700/70 rounded-full" />
// // //             {/* Line that draws itself down once */}
// // //             <div
// // //               className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-orange-500 transition-[height] duration-[2800ms] ease-out motion-reduce:transition-none"
// // //               style={{ height: journeyVisible ? '100%' : '0%' }}
// // //             />

// // //             <div className="space-y-10 sm:space-y-14">
// // //               {journey.map((step, index) => {
// // //                 const Icon = step.icon;
// // //                 const isLeft = index % 2 === 0;
// // //                 return (
// // //                   <div
// // //                     key={step.company}
// // //                     className={`group relative pl-16 md:pl-0 md:w-1/2 transition-all duration-700 motion-reduce:transition-none ${
// // //                       isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'
// // //                     } ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
// // //                     style={{ transitionDelay: `${400 + index * 600}ms` }}
// // //                   >
// // //                     {/* Node */}
// // //                     <div
// // //                       className={`absolute top-6 left-0 ${isLeft ? 'md:left-auto md:-right-6' : 'md:-left-6'} w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-lg ${step.glow} ring-4 ring-white dark:ring-gray-800 z-10 transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110`}
// // //                     >
// // //                       {step.highlight && (
// // //                         <span className="absolute inset-0 rounded-full bg-orange-400/60 animate-ping motion-reduce:hidden" />
// // //                       )}
// // //                       <Icon className="relative w-5 h-5 md:w-6 md:h-6" />
// // //                     </div>

// // //                     {/* Card */}
// // //                     <div tabIndex={0} className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${step.highlight ? step.accent : 'from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800'} ${step.highlight ? `shadow-xl ${step.glow}` : 'shadow-md dark:shadow-black/40'} outline-none hover:-translate-y-1 hover:ring-2 focus-visible:ring-2 ${step.ring} transition-all duration-300`}>
// // //                       <div className="rounded-[14px] bg-white/90 dark:bg-gray-900/95 backdrop-blur p-5 sm:p-6">
// // //                         <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
// // //                           <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
// // //                             {step.period}
// // //                           </span>
// // //                           {step.highlight && (
// // //                             <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
// // //                               <Briefcase className="w-3 h-3 mr-1" />
// // //                               Latest
// // //                             </Badge>
// // //                           )}
// // //                         </div>
// // //                         <div className="flex items-center gap-4">
// // //                           <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-white border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
// // //                             <img
// // //                               src={step.logo}
// // //                               alt={`${step.company} logo`}
// // //                               loading="lazy"
// // //                               referrerPolicy="no-referrer"
// // //                               onError={(e) => { e.currentTarget.style.display = 'none'; }}
// // //                               className="w-full h-full object-contain"
// // //                             />
// // //                           </div>
// // //                           <div className="min-w-0">
// // //                             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
// // //                               {step.company}
// // //                             </h3>
// // //                             <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-0.5">
// // //                               {step.role}
// // //                             </p>
// // //                           </div>
// // //                         </div>
// // //                         <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
// // //                           {step.description}
// // //                         </p>
// // //                         <div className="mt-4 flex flex-wrap gap-2">
// // //                           {step.tags.map((tag) => (
// // //                             <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
// // //                               {tag}
// // //                             </Badge>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Skills & Proficiency Section with fade in */}
// // //         <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// // //             Skills & Proficiency
// // //           </h2>
          
// // //           {/* First Row: Languages & Frameworks */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 outline-none hover:ring-1 focus-visible:ring-1 ring-blue-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
// // //               <CardHeader className="pb-3">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700 dark:bg-blue-400/20 dark:text-blue-300">
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

// // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 outline-none hover:ring-1 focus-visible:ring-1 ring-green-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
// // //               <CardHeader className="pb-3">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="p-2 rounded-lg bg-green-500/10 text-green-700 dark:bg-green-400/20 dark:text-green-300">
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
// // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 outline-none hover:ring-1 focus-visible:ring-1 ring-purple-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
// // //               <CardHeader className="pb-3">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700 dark:bg-purple-400/20 dark:text-purple-300">
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

// // //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 outline-none hover:ring-1 focus-visible:ring-1 ring-orange-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
// // //               <CardHeader className="pb-3">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300">
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
// // //                 tabIndex={0}
// // //                 className={`shadow-lg outline-none hover:ring-1 focus-visible:ring-1 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
// // //                   index === 0 ? 'border-red-500 ring-red-500/50' : 'border-indigo-500 ring-indigo-500/50'
// // //                 } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // //                 style={{transitionDelay: `${500 + index * 100}ms`}}
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
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Code, Database, Globe, Wrench, Users, TestTube, Target, Server, Brain, Clock, Send, Shield, GraduationCap, Rocket, Briefcase, Laptop } from "lucide-react";
// // import { useState, useEffect, useRef } from "react";

// // const About = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [skillsVisible, setSkillsVisible] = useState(false);
// //   const [journeyVisible, setJourneyVisible] = useState(false);
// //   const sectionRef = useRef(null);
// //   const skillsRef = useRef(null);
// //   const journeyRef = useRef(null);

// //   // Intersection Observer for main section
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => setIsVisible(entry.isIntersecting));
// //       },
// //       { threshold: 0.1, rootMargin: "0px" }
// //     );
// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => {
// //       if (sectionRef.current) observer.unobserve(sectionRef.current);
// //     };
// //   }, []);

// //   // Intersection Observer for journey section
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) setJourneyVisible(true);
// //         });
// //       },
// //       { threshold: 0.15, rootMargin: "0px" }
// //     );
// //     if (journeyRef.current) observer.observe(journeyRef.current);
// //     return () => {
// //       if (journeyRef.current) observer.unobserve(journeyRef.current);
// //     };
// //   }, []);

// //   // Intersection Observer for skills section
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => setSkillsVisible(entry.isIntersecting));
// //       },
// //       { threshold: 0.1, rootMargin: "0px" }
// //     );
// //     if (skillsRef.current) observer.observe(skillsRef.current);
// //     return () => {
// //       if (skillsRef.current) observer.unobserve(skillsRef.current);
// //     };
// //   }, []);

// //   // Career journey (edit the text freely)
// //   const journey = [
// //     {
// //       company: "Webgeon Results",
// //       role: "Web Development Intern",
// //       period: "7-month internship",
// //       description:
// //         "Started my professional journey building responsive, user-centric web applications with React, Next.js and Tailwind CSS, focusing on clean code, performance and accessibility while working with the team.",
// //       tags: ["React", "Next.js", "Tailwind CSS"],
// //       icon: Laptop,
// //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0kIv9iZakWszgmLcYlcgcaF1cCjS8GdIyyx9mbUZmg&s=10",
// //       accent: "from-emerald-500 to-teal-500",
// //       glow: "shadow-emerald-500/30",
// //       ring: "ring-emerald-400/40",
// //     },
// //     {
// //       company: "Emertxe",
// //       role: "Full Stack Development & DSA",
// //       period: "7-month course",
// //       description:
// //         "Joined Emertxe to build a strong engineering base, learning full stack development end to end alongside data structures and algorithms.",
// //       tags: ["Full Stack", "DSA", "Problem Solving"],
// //       icon: GraduationCap,
// //       logo: "https://yt3.googleusercontent.com/NInLpoH9WwO8uFcAJK_s0I80JYSJ8rG1K-26LcFH4lei69Gpb_cf9KUDlgFAuA-sInxFDpCidA=s900-c-k-c0x00ffffff-no-rj",
// //       accent: "from-blue-500 to-cyan-500",
// //       glow: "shadow-blue-500/30",
// //       ring: "ring-blue-400/40",
// //     },
// //     {
// //       company: "Amazon",
// //       role: "ML Data Associate",
// //       period: "Next step",
// //       description:
// //         "Worked with data that powers machine learning systems, building attention to detail, accuracy and quality at scale.",
// //       tags: ["Machine Learning", "Data Quality"],
// //       icon: Brain,
// //       logo: "https://assets.qz.com/media/what-is-amazon-entity-qz.jpg",
// //       accent: "from-purple-500 to-pink-500",
// //       glow: "shadow-purple-500/30",
// //       ring: "ring-purple-400/40",
// //     },
// //     {
// //       company: "Accenture",
// //       role: "Placed",
// //       period: "The journey begins",
// //       description:
// //         "Placed at Accenture, where the next chapter starts: real-world delivery, bigger teams and bigger problems to solve.",
// //       tags: ["Placed", "New Chapter"],
// //       icon: Rocket,
// //       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu6gNzg9YjY49DUxUOSgGJYqYklmQwmdD3_EefnUg4w&s=10",
// //       accent: "from-amber-400 to-orange-500",
// //       glow: "shadow-orange-500/40",
// //       ring: "ring-orange-400/50",
// //       highlight: true,
// //     },
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
// //       items: [
// //         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
// //         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
// //       ],
// //       color: "bg-red-500/10 text-red-700 dark:bg-red-400/20 dark:text-red-300",
// //       displayIcon: Target
// //     },
// //     {
// //       title: "API Testing",
// //       items: [
// //         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
// //         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
// //       ],
// //       color: "bg-indigo-500/10 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-300",
// //       displayIcon: Server
// //     }
// //   ];

// //   return (
// //     <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
// //       <style>{`
// //         @keyframes aboutShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
// //         .about-border { background-size: 200% 200%; animation: aboutShift 8s ease infinite; }
// //                 @media (prefers-reduced-motion: reduce) { .about-border { animation: none; } }
// //       `}</style>
// //       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
// //         {/* Header with fade in */}
// //         <div className={`transition-all duration-1000 motion-reduce:transition-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// //           <div className="text-center">
// //             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent pb-2">
// //               About Me
// //             </h1>
// //             <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">
// //               Engineer by degree, developer by choice.
// //             </p>
// //           </div>

// //           {/* Open layout, no box */}
// //           <div className="mt-10 grid gap-10 lg:grid-cols-5 lg:gap-12 items-center">
// //             {/* Story */}
// //             <div className="lg:col-span-3 lg:order-2 space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
// //               <p>
// //                 I'm a B.Tech graduate in Electronics and Communication Engineering from FISAT, class of 2025. What began as curiosity about how technology works became a real passion for building software people enjoy using.
// //               </p>
// //               <p>
// //                 I learn best by doing. A 7-month web development internship at Webgeon Results, a full stack and DSA program at Emertxe, and machine learning data work at Amazon each sharpened a different skill, and now I'm starting my next chapter at Accenture.
// //               </p>
// //               <p>
// //                 I care about clean, scalable code, thoughtful design and solving problems the right way.
// //               </p>
// //               <div className="flex flex-wrap gap-2 pt-1">
// //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Full Stack Developer</Badge>
// //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Problem Solver</Badge>
// //                 <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Fast Learner</Badge>
// //               </div>
// //             </div>

// //             {/* Education highlight */}
// //             <div className="lg:col-span-2 lg:order-1 text-center lg:text-left rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
// //               <div className="mx-auto lg:mx-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white hidden md:flex items-center justify-center shadow-lg shadow-blue-500/30">
// //                 <GraduationCap className="w-8 h-8" />
// //               </div>
// //               <h3 className="md:mt-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
// //                 B.Tech, Electronics & Communication
// //               </h3>
// //               <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">FISAT</p>
// //               <p className="text-sm text-gray-500 dark:text-gray-400">2021 to 2025</p>
// //               <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
// //                 <span className="relative flex h-2.5 w-2.5">
// //                   <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping motion-reduce:hidden" />
// //                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
// //                 </span>
// //                 Joining Accenture
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ============ My Journey (Timeline) ============ */}
// //         <div ref={journeyRef} className="pt-2 sm:pt-4">
// //           <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 motion-reduce:transition-none ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
// //             <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// //               My Journey
// //             </h2>
// //             <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
// //               From learning the fundamentals to landing at Accenture, one step at a time.
// //             </p>
// //           </div>

// //           <div className="relative">
// //             {/* Base line */}
// //             <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700/70 rounded-full" />
// //             {/* Line that draws itself down once */}
// //             <div
// //               className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-orange-500 transition-[height] duration-[2800ms] ease-out motion-reduce:transition-none"
// //               style={{ height: journeyVisible ? '100%' : '0%' }}
// //             />

// //             <div className="space-y-10 sm:space-y-14">
// //               {journey.map((step, index) => {
// //                 const Icon = step.icon;
// //                 const isLeft = index % 2 === 0;
// //                 return (
// //                   <div
// //                     key={step.company}
// //                     className={`group relative pl-16 md:pl-0 md:w-1/2 transition-all duration-700 motion-reduce:transition-none ${
// //                       isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'
// //                     } ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
// //                     style={{ transitionDelay: `${400 + index * 600}ms` }}
// //                   >
// //                     {/* Node */}
// //                     <div
// //                       className={`absolute top-6 left-0 ${isLeft ? 'md:left-auto md:-right-6' : 'md:-left-6'} w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-lg ${step.glow} ring-4 ring-white dark:ring-gray-800 z-10 transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110`}
// //                     >
// //                       {step.highlight && (
// //                         <span className="absolute inset-0 rounded-full bg-orange-400/60 animate-ping motion-reduce:hidden" />
// //                       )}
// //                       <Icon className="relative w-5 h-5 md:w-6 md:h-6" />
// //                     </div>

// //                     {/* Card */}
// //                     <div tabIndex={0} className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${step.highlight ? step.accent : 'from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800'} ${step.highlight ? `shadow-xl ${step.glow}` : 'shadow-md dark:shadow-black/40'} outline-none hover:-translate-y-1 hover:ring-2 focus-visible:ring-2 ${step.ring} transition-all duration-300`}>
// //                       <div className="rounded-[14px] bg-white/90 dark:bg-gray-900/95 backdrop-blur p-5 sm:p-6">
// //                         <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
// //                           <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
// //                             {step.period}
// //                           </span>
// //                           {step.highlight && (
// //                             <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
// //                               <Briefcase className="w-3 h-3 mr-1" />
// //                               Latest
// //                             </Badge>
// //                           )}
// //                         </div>
// //                         <div className="flex items-center gap-4">
// //                           <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-white border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
// //                             <img
// //                               src={step.logo}
// //                               alt={`${step.company} logo`}
// //                               loading="lazy"
// //                               referrerPolicy="no-referrer"
// //                               onError={(e) => { e.currentTarget.style.display = 'none'; }}
// //                               className="w-full h-full object-contain"
// //                             />
// //                           </div>
// //                           <div className="min-w-0">
// //                             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
// //                               {step.company}
// //                             </h3>
// //                             <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-0.5">
// //                               {step.role}
// //                             </p>
// //                           </div>
// //                         </div>
// //                         <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
// //                           {step.description}
// //                         </p>
// //                         <div className="mt-4 flex flex-wrap gap-2">
// //                           {step.tags.map((tag) => (
// //                             <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
// //                               {tag}
// //                             </Badge>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Skills & Proficiency Section with fade in */}
// //         <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
// //             Skills & Proficiency
// //           </h2>
          
// //           {/* First Row: Languages & Frameworks */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
// //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 outline-none hover:ring-1 focus-visible:ring-1 ring-blue-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
// //               <CardHeader className="pb-3">
// //                 <div className="flex items-center gap-3">
// //                   <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700 dark:bg-blue-400/20 dark:text-blue-300">
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

// //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 outline-none hover:ring-1 focus-visible:ring-1 ring-green-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
// //               <CardHeader className="pb-3">
// //                 <div className="flex items-center gap-3">
// //                   <div className="p-2 rounded-lg bg-green-500/10 text-green-700 dark:bg-green-400/20 dark:text-green-300">
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
// //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 outline-none hover:ring-1 focus-visible:ring-1 ring-purple-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
// //               <CardHeader className="pb-3">
// //                 <div className="flex items-center gap-3">
// //                   <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700 dark:bg-purple-400/20 dark:text-purple-300">
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

// //             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 outline-none hover:ring-1 focus-visible:ring-1 ring-orange-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
// //               <CardHeader className="pb-3">
// //                 <div className="flex items-center gap-3">
// //                   <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300">
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
// //                 tabIndex={0}
// //                 className={`shadow-lg outline-none hover:ring-1 focus-visible:ring-1 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
// //                   index === 0 ? 'border-red-500 ring-red-500/50' : 'border-indigo-500 ring-indigo-500/50'
// //                 } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// //                 style={{transitionDelay: `${500 + index * 100}ms`}}
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
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Code, Database, Globe, Wrench, Users, TestTube, Target, Server, Brain, Clock, Send, Shield, GraduationCap, Rocket, Briefcase, Laptop } from "lucide-react";
// import { useState, useEffect, useRef } from "react";

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [skillsVisible, setSkillsVisible] = useState(false);
//   const [journeyVisible, setJourneyVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const skillsRef = useRef(null);
//   const journeyRef = useRef(null);

//   // Intersection Observer for main section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => setIsVisible(entry.isIntersecting));
//       },
//       { threshold: 0.1, rootMargin: "0px" }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   // Intersection Observer for journey section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setJourneyVisible(true);
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px" }
//     );
//     if (journeyRef.current) observer.observe(journeyRef.current);
//     return () => {
//       if (journeyRef.current) observer.unobserve(journeyRef.current);
//     };
//   }, []);

//   // Intersection Observer for skills section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => setSkillsVisible(entry.isIntersecting));
//       },
//       { threshold: 0.1, rootMargin: "0px" }
//     );
//     if (skillsRef.current) observer.observe(skillsRef.current);
//     return () => {
//       if (skillsRef.current) observer.unobserve(skillsRef.current);
//     };
//   }, []);

//   // Career journey (edit the text freely)
//   const journey = [
//     {
//       company: "Webgeon Results",
//       role: "Web Development Intern",
//       period: "7-month internship",
//       description:
//         "Started my professional journey building responsive, user-centric web applications with React, Next.js and Tailwind CSS, focusing on clean code, performance and accessibility while working with the team.",
//       tags: ["React", "Next.js", "Tailwind CSS"],
//       icon: Laptop,
//       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0kIv9iZakWszgmLcYlcgcaF1cCjS8GdIyyx9mbUZmg&s=10",
//       accent: "from-emerald-500 to-teal-500",
//       glow: "shadow-emerald-500/30",
//       ring: "ring-emerald-400/40",
//     },
//     {
//       company: "Emertxe",
//       role: "Full Stack Development & DSA",
//       period: "7-month course",
//       description:
//         "Joined Emertxe to build a strong engineering base, learning full stack development end to end alongside data structures and algorithms.",
//       tags: ["Full Stack", "DSA", "Problem Solving"],
//       icon: GraduationCap,
//       logo: "https://yt3.googleusercontent.com/NInLpoH9WwO8uFcAJK_s0I80JYSJ8rG1K-26LcFH4lei69Gpb_cf9KUDlgFAuA-sInxFDpCidA=s900-c-k-c0x00ffffff-no-rj",
//       accent: "from-blue-500 to-cyan-500",
//       glow: "shadow-blue-500/30",
//       ring: "ring-blue-400/40",
//     },
//     {
//       company: "Amazon",
//       role: "ML Data Associate",
//       period: "Next step",
//       description:
//         "Worked with data that powers machine learning systems, building attention to detail, accuracy and quality at scale.",
//       tags: ["Machine Learning", "Data Quality"],
//       icon: Brain,
//       logo: "https://assets.qz.com/media/what-is-amazon-entity-qz.jpg",
//       accent: "from-purple-500 to-pink-500",
//       glow: "shadow-purple-500/30",
//       ring: "ring-purple-400/40",
//     },
//     {
//       company: "Accenture",
//       role: "Placed",
//       period: "The journey begins",
//       description:
//         "Placed at Accenture, where the next chapter starts: real-world delivery, bigger teams and bigger problems to solve.",
//       tags: ["Placed", "New Chapter"],
//       icon: Rocket,
//       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu6gNzg9YjY49DUxUOSgGJYqYklmQwmdD3_EefnUg4w&s=10",
//       accent: "from-amber-400 to-orange-500",
//       glow: "shadow-orange-500/40",
//       ring: "ring-orange-400/50",
//       highlight: true,
//     },
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
//       items: [
//         { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
//         { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
//       ],
//       color: "bg-red-500/10 text-red-700 dark:bg-red-400/20 dark:text-red-300",
//       displayIcon: Target
//     },
//     {
//       title: "API Testing",
//       items: [
//         { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
//         { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
//       ],
//       color: "bg-indigo-500/10 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-300",
//       displayIcon: Server
//     }
//   ];

//   return (
//     <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
//       <style>{`
//         @keyframes aboutShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
//         .about-border { background-size: 200% 200%; animation: aboutShift 8s ease infinite; }
//                 @media (prefers-reduced-motion: reduce) { .about-border { animation: none; } }
//       `}</style>
//       <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
//         {/* Header with fade in */}
//         <div className={`transition-all duration-1000 motion-reduce:transition-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
//           <div className="text-center">
//             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent pb-2">
//               About Me
//             </h1>
//             <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">
//               Engineer by degree, developer by choice.
//             </p>
//           </div>

//           {/* Open layout, no box */}
//           <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_auto_3fr] lg:gap-10 items-center">
//             {/* Story */}
//             <div className="lg:order-3 space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
//               <p>
//                 I'm a B.Tech graduate in Electronics and Communication Engineering from FISAT, class of 2025. What began as curiosity about how technology works became a real passion for building software people enjoy using.
//               </p>
//               <p>
//                 I learn best by doing. A 7-month web development internship at Webgeon Results, a full stack and DSA program at Emertxe, and machine learning data work at Amazon each sharpened a different skill, and now I'm starting my next chapter at Accenture.
//               </p>
//               <p>
//                 I care about clean, scalable code, thoughtful design and solving problems the right way.
//               </p>
//               <div className="flex flex-wrap gap-2 pt-1">
//                 <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Full Stack Developer</Badge>
//                 <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Problem Solver</Badge>
//                 <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Fast Learner</Badge>
//               </div>
//             </div>

//             {/* Education highlight */}
//             <div className="hidden md:block lg:order-1 text-center lg:text-left rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
//               <div className="mx-auto lg:mx-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white hidden md:flex items-center justify-center shadow-lg shadow-blue-500/30">
//                 <GraduationCap className="w-8 h-8" />
//               </div>
//               <h3 className="md:mt-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
//                 B.Tech, Electronics & Communication
//               </h3>
//               <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">FISAT</p>
//               <p className="text-sm text-gray-500 dark:text-gray-400">2021 to 2025</p>
//               <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping motion-reduce:hidden" />
//                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
//                 </span>
//                 Joining Accenture
//               </div>
//             </div>

//             {/* Vertical separator */}
//             <div className="hidden lg:block lg:order-2 self-stretch w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
//           </div>
//         </div>

//         {/* ============ My Journey (Timeline) ============ */}
//         <div ref={journeyRef} className="pt-2 sm:pt-4">
//           <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 motion-reduce:transition-none ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
//             <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
//               My Journey
//             </h2>
//             <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
//               From learning the fundamentals to landing at Accenture, one step at a time.
//             </p>
//           </div>

//           <div className="relative">
//             {/* Base line */}
//             <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700/70 rounded-full" />
//             {/* Line that draws itself down once */}
//             <div
//               className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-orange-500 transition-[height] duration-[2800ms] ease-out motion-reduce:transition-none"
//               style={{ height: journeyVisible ? '100%' : '0%' }}
//             />

//             <div className="space-y-10 sm:space-y-14">
//               {journey.map((step, index) => {
//                 const Icon = step.icon;
//                 const isLeft = index % 2 === 0;
//                 return (
//                   <div
//                     key={step.company}
//                     className={`group relative pl-16 md:pl-0 md:w-1/2 transition-all duration-700 motion-reduce:transition-none ${
//                       isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'
//                     } ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//                     style={{ transitionDelay: `${400 + index * 600}ms` }}
//                   >
//                     {/* Node */}
//                     <div
//                       className={`absolute top-6 left-0 ${isLeft ? 'md:left-auto md:-right-6' : 'md:-left-6'} w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-lg ${step.glow} ring-4 ring-white dark:ring-gray-800 z-10 transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110`}
//                     >
//                       {step.highlight && (
//                         <span className="absolute inset-0 rounded-full bg-orange-400/60 animate-ping motion-reduce:hidden" />
//                       )}
//                       <Icon className="relative w-5 h-5 md:w-6 md:h-6" />
//                     </div>

//                     {/* Card */}
//                     <div tabIndex={0} className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${step.highlight ? step.accent : 'from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800'} ${step.highlight ? `shadow-xl ${step.glow}` : 'shadow-md dark:shadow-black/40'} outline-none hover:-translate-y-1 hover:ring-2 focus-visible:ring-2 ${step.ring} transition-all duration-300`}>
//                       <div className="rounded-[14px] bg-white/90 dark:bg-gray-900/95 backdrop-blur p-5 sm:p-6">
//                         <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
//                           <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
//                             {step.period}
//                           </span>
//                           {step.highlight && (
//                             <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
//                               <Briefcase className="w-3 h-3 mr-1" />
//                               Latest
//                             </Badge>
//                           )}
//                         </div>
//                         <div className="flex items-center gap-4">
//                           <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-white border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
//                             <img
//                               src={step.logo}
//                               alt={`${step.company} logo`}
//                               loading="lazy"
//                               referrerPolicy="no-referrer"
//                               onError={(e) => { e.currentTarget.style.display = 'none'; }}
//                               className="w-full h-full object-contain"
//                             />
//                           </div>
//                           <div className="min-w-0">
//                             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
//                               {step.company}
//                             </h3>
//                             <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-0.5">
//                               {step.role}
//                             </p>
//                           </div>
//                         </div>
//                         <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
//                           {step.description}
//                         </p>
//                         <div className="mt-4 flex flex-wrap gap-2">
//                           {step.tags.map((tag) => (
//                             <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
//                               {tag}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Skills & Proficiency Section with fade in */}
//         <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
//             Skills & Proficiency
//           </h2>
          
//           {/* First Row: Languages & Frameworks */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
//             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 outline-none hover:ring-1 focus-visible:ring-1 ring-blue-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700 dark:bg-blue-400/20 dark:text-blue-300">
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

//             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 outline-none hover:ring-1 focus-visible:ring-1 ring-green-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-lg bg-green-500/10 text-green-700 dark:bg-green-400/20 dark:text-green-300">
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
//             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 outline-none hover:ring-1 focus-visible:ring-1 ring-purple-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700 dark:bg-purple-400/20 dark:text-purple-300">
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

//             <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 outline-none hover:ring-1 focus-visible:ring-1 ring-orange-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300">
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
//                 tabIndex={0}
//                 className={`shadow-lg outline-none hover:ring-1 focus-visible:ring-1 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
//                   index === 0 ? 'border-red-500 ring-red-500/50' : 'border-indigo-500 ring-indigo-500/50'
//                 } ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//                 style={{transitionDelay: `${500 + index * 100}ms`}}
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench, Users, TestTube, Target, Server, Brain, Clock, Send, Shield, GraduationCap, Rocket, Briefcase, Laptop } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);
  const journeyRef = useRef(null);
  const stepRefs = useRef([]);
  const [visibleSteps, setVisibleSteps] = useState({});

  // Intersection Observer for main section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.1, rootMargin: "0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Intersection Observer for journey section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setJourneyVisible(entry.isIntersecting));
      },
      { threshold: 0.15, rootMargin: "0px" }
    );
    if (journeyRef.current) observer.observe(journeyRef.current);
    return () => {
      if (journeyRef.current) observer.unobserve(journeyRef.current);
    };
  }, []);

  // Per-step observer: each timeline step animates in every time it enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.index);
          setVisibleSteps((prev) => ({ ...prev, [idx]: entry.isIntersecting }));
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Intersection Observer for skills section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setSkillsVisible(entry.isIntersecting));
      },
      { threshold: 0.1, rootMargin: "0px" }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  // Career journey (edit the text freely)
  const journey = [
    {
      company: "Webgeon Results",
      role: "Web Development Intern",
      period: "7-month internship",
      description:
        "Started my professional journey building responsive, user-centric web applications with React, Next.js and Tailwind CSS, focusing on clean code, performance and accessibility while working with the team.",
      tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "MongoDB"],
      icon: Laptop,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0kIv9iZakWszgmLcYlcgcaF1cCjS8GdIyyx9mbUZmg&s=10",
      accent: "from-emerald-500 to-teal-500",
      glow: "shadow-emerald-500/30",
      ring: "ring-emerald-400/40",
    },
    {
      company: "Emertxe",
      role: "Full Stack Development & DSA",
      period: "7-month course",
      description:
        "Joined Emertxe to build a strong engineering base, learning full stack development end to end alongside data structures and algorithms.",
      tags: ["Full Stack", "DSA", "Problem Solving"],
      icon: GraduationCap,
      logo: "https://yt3.googleusercontent.com/NInLpoH9WwO8uFcAJK_s0I80JYSJ8rG1K-26LcFH4lei69Gpb_cf9KUDlgFAuA-sInxFDpCidA=s900-c-k-c0x00ffffff-no-rj",
      accent: "from-blue-500 to-cyan-500",
      glow: "shadow-blue-500/30",
      ring: "ring-blue-400/40",
    },
    {
      company: "Amazon",
      role: "ML Data Associate",
      period: "Next step",
      description:
        "Worked with data that powers machine learning systems, building attention to detail, accuracy and quality at scale.",
      tags: ["Machine Learning", "Data Quality", "Data Annotation", "Data Labeling"],
      icon: Brain,
      logo: "https://assets.qz.com/media/what-is-amazon-entity-qz.jpg",
      accent: "from-purple-500 to-pink-500",
      glow: "shadow-purple-500/30",
      ring: "ring-purple-400/40",
    },
    {
      company: "Accenture",
      role: "Front End Engineering with React",
      period: "Training in progress",
      description:
        "Placed at Accenture and currently in training in the Front End Engineering stream, focusing on React and building production-ready user interfaces.",
      tags: ["Placed", "Training Ongoing", "Front End Engineering", "React"],
      icon: Rocket,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu6gNzg9YjY49DUxUOSgGJYqYklmQwmdD3_EefnUg4w&s=10",
      accent: "from-amber-400 to-orange-500",
      glow: "shadow-orange-500/40",
      ring: "ring-orange-400/50",
      highlight: true,
    },
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
      items: [
        { name: "Decision-making skills", icon: Brain, iconColor: "text-purple-600", bgColor: "bg-purple-100 dark:bg-purple-900/20" },
        { name: "Ensuring timely project delivery", icon: Clock, iconColor: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/20" }
      ],
      color: "bg-red-500/10 text-red-700 dark:bg-red-400/20 dark:text-red-300",
      displayIcon: Target
    },
    {
      title: "API Testing",
      items: [
        { name: "Postman API Testing", icon: Send, iconColor: "text-orange-600", bgColor: "bg-orange-100 dark:bg-orange-900/20" },
        { name: "REST API Validation", icon: Shield, iconColor: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/20" }
      ],
      color: "bg-indigo-500/10 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-300",
      displayIcon: Server
    }
  ];

  return (
    <div id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes aboutShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .about-border { background-size: 200% 200%; animation: aboutShift 8s ease infinite; }
                @media (prefers-reduced-motion: reduce) { .about-border { animation: none; } }
      `}</style>
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Header with fade in */}
        <div className={`transition-all duration-1000 motion-reduce:transition-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent pb-2">
              About Me
            </h1>
            <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Engineer by degree, developer by choice.
            </p>
          </div>

          {/* Open layout, no box */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_auto_3fr] lg:gap-10 items-center">
            {/* Story */}
            <div className="lg:order-3 space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                I'm a B.Tech graduate in Electronics and Communication Engineering from FISAT, class of 2025. What began as curiosity about how technology works became a real passion for building software people enjoy using.
              </p>
              <p>
                I learn best by doing. A 7-month web development internship at Webgeon Results, a full stack and DSA program at Emertxe, and machine learning data work at Amazon each sharpened a different skill, and now I'm starting my next chapter at Accenture.
              </p>
              <p>
                I care about clean, scalable code, thoughtful design and solving problems the right way.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Full Stack Developer</Badge>
                <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Problem Solver</Badge>
                <Badge variant="secondary" className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:bg-gray-800/70">Fast Learner</Badge>
              </div>
            </div>

            {/* Education highlight */}
            <div className="hidden md:block lg:order-1 text-center lg:text-left rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <div className="mx-auto lg:mx-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white hidden md:flex items-center justify-center shadow-lg shadow-blue-500/30">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="md:mt-4 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                B.Tech, Electronics & Communication
              </h3>
              <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">FISAT</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2021 to 2025</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping motion-reduce:hidden" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                </span>
                Training at Accenture
              </div>
            </div>

            {/* Vertical separator */}
            <div className="hidden lg:block lg:order-2 self-stretch w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
          </div>
        </div>

        {/* ============ My Journey (Timeline) ============ */}
        <div ref={journeyRef} className="pt-2 sm:pt-4">
          <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 motion-reduce:transition-none ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              My Journey
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              From learning the fundamentals to landing at Accenture, one step at a time.
            </p>
          </div>

          <div className="relative">
            {/* Base line */}
            <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700/70 rounded-full" />
            {/* Line that draws itself down once */}
            <div
              className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 w-0.5 rounded-full bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-orange-500 transition-[height] duration-[1800ms] ease-out motion-reduce:transition-none"
              style={{ height: journeyVisible ? '100%' : '0%' }}
            />

            <div className="space-y-10 sm:space-y-14">
              {journey.map((step, index) => {
                const Icon = step.icon;
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={step.company}
                    ref={(el) => (stepRefs.current[index] = el)}
                    data-index={index}
                    className={`group relative pl-16 md:pl-0 md:w-1/2 transition-all duration-700 ease-out motion-reduce:transition-none ${
                      isLeft ? 'md:pr-14' : 'md:ml-auto md:pl-14'
                    } ${visibleSteps[index] ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 translate-y-10 ${isLeft ? 'md:-translate-x-12' : 'md:translate-x-12'}`}`}
                  >
                    {/* Node */}
                    <div
                      className={`absolute top-6 left-0 ${isLeft ? 'md:left-auto md:-right-6' : 'md:-left-6'} w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-lg ${step.glow} ring-4 ring-white dark:ring-gray-800 z-10 transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110`}
                    >
                      {step.highlight && (
                        <span className="absolute inset-0 rounded-full bg-orange-400/60 animate-ping motion-reduce:hidden" />
                      )}
                      <Icon className="relative w-5 h-5 md:w-6 md:h-6" />
                    </div>

                    {/* Card */}
                    <div tabIndex={0} className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${step.highlight ? step.accent : 'from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800'} ${step.highlight ? `shadow-xl ${step.glow}` : 'shadow-md dark:shadow-black/40'} outline-none hover:-translate-y-1 hover:ring-2 focus-visible:ring-2 ${step.ring} transition-all duration-300`}>
                      <div className="rounded-[14px] bg-white/90 dark:bg-gray-900/95 backdrop-blur p-5 sm:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
                            {step.period}
                          </span>
                          {step.highlight && (
                            <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
                              <Briefcase className="w-3 h-3 mr-1" />
                              Latest
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-white border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
                            <img
                              src={step.logo}
                              alt={`${step.company} logo`}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                              {step.company}
                            </h3>
                            <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-0.5">
                              {step.role}
                            </p>
                          </div>
                        </div>
                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                          {step.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills & Proficiency Section with fade in */}
        <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Proficiency
          </h2>
          
          {/* First Row: Languages & Frameworks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 outline-none hover:ring-1 focus-visible:ring-1 ring-blue-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '100ms'}}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700 dark:bg-blue-400/20 dark:text-blue-300">
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

            <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 outline-none hover:ring-1 focus-visible:ring-1 ring-green-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '200ms'}}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10 text-green-700 dark:bg-green-400/20 dark:text-green-300">
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
            <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-purple-500 outline-none hover:ring-1 focus-visible:ring-1 ring-purple-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '300ms'}}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700 dark:bg-purple-400/20 dark:text-purple-300">
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

            <Card tabIndex={0} className={`shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 outline-none hover:ring-1 focus-visible:ring-1 ring-orange-500/50 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300">
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
                tabIndex={0}
                className={`shadow-lg outline-none hover:ring-1 focus-visible:ring-1 hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 ${
                  index === 0 ? 'border-red-500 ring-red-500/50' : 'border-indigo-500 ring-indigo-500/50'
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