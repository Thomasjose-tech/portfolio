// // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Badge } from "@/components/ui/badge";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Code, Database, Globe, Wrench, Users, TestTube, ChevronLeft, ChevronRight } from "lucide-react";
// // // // import { useState } from "react";
// // // // // Import technology icons
// // // // import pythonIcon from "@/assets/icons/python.svg";
// // // // import jsIcon from "@/assets/icons/javascript.svg";
// // // // import reactIcon from "@/assets/icons/react.svg";
// // // // import nextjsIcon from "@/assets/icons/nextjs.svg";
// // // // import htmlIcon from "@/assets/icons/html.svg";
// // // // import cssIcon from "@/assets/icons/css.svg";
// // // // import mongoIcon from "@/assets/icons/mongodb.svg";
// // // // import mysqlIcon from "@/assets/icons/mysql.svg";
// // // // import vscodeIcon from "@/assets/icons/vscode.svg";
// // // // import eclipseIcon from "@/assets/icons/eclipse.svg";
// // // // import postmanIcon from "@/assets/icons/postman.svg";
// // // // // Import images
// // // // import teamLeadershipImg from "@/assets/team-leadership.jpg";
// // // // import apiTestingImg from "@/assets/api-testing.jpg";

// // // // const About = () => {
// // // //   const [currentSection, setCurrentSection] = useState(0);
  
// // // //   const sections = [
// // // //     {
// // // //       title: "Professional Summary",
// // // //       content: (
// // // //         <div className="space-y-4">
// // // //           <p className="text-muted-foreground leading-relaxed">
// // // //             Web Developer with 6 months of experience at Webgeon Results, skilled in building 
// // // //             responsive web applications using React, Tailwind CSS, and Next.js. Proficient in 
// // // //             developing clean, maintainable code and delivering user-centric solutions.
// // // //           </p>
// // // //           <p className="text-muted-foreground leading-relaxed">
// // // //             Strong team collaborator with a focus on performance, accessibility, and modern web 
// // // //             standards to support scalable and efficient development.
// // // //           </p>
// // // //           <p className="text-muted-foreground leading-relaxed">
// // // //             My journey in web development has been driven by a passion for problem-solving and 
// // // //             creating meaningful digital experiences. I thrive in collaborative environments where 
// // // //             innovation meets practical implementation, consistently delivering projects that exceed 
// // // //             client expectations.
// // // //           </p>
// // // //           <p className="text-muted-foreground leading-relaxed">
// // // //             I believe in staying current with emerging technologies and industry best practices, 
// // // //             ensuring that every solution I develop is not only functional but also future-ready 
// // // //             and maintainable.
// // // //           </p>
// // // //         </div>
// // // //       )
// // // //     },
// // // //     {
// // // //       title: "Key Strengths",
// // // //       content: (
// // // //         <div>
// // // //           <ul className="space-y-3 text-muted-foreground">
// // // //             <li className="flex items-start gap-3">
// // // //               <span className="text-primary mt-1">•</span>
// // // //               <span>Decision-making skills and team leadership</span>
// // // //             </li>
// // // //             <li className="flex items-start gap-3">
// // // //               <span className="text-primary mt-1">•</span>
// // // //               <span>Performance optimization and accessibility focus</span>
// // // //             </li>
// // // //             <li className="flex items-start gap-3">
// // // //               <span className="text-primary mt-1">•</span>
// // // //               <span>Clean, maintainable code practices</span>
// // // //             </li>
// // // //             <li className="flex items-start gap-3">
// // // //               <span className="text-primary mt-1">•</span>
// // // //               <span>Timely project delivery</span>
// // // //             </li>
// // // //             <li className="flex items-start gap-3">
// // // //               <span className="text-primary mt-1">•</span>
// // // //               <span>Continuous learning and adaptation to new technologies</span>
// // // //             </li>
// // // //             <li className="flex items-start gap-3">
// // // //               <span className="text-primary mt-1">•</span>
// // // //               <span>User experience optimization and responsive design</span>
// // // //             </li>
// // // //           </ul>
// // // //         </div>
// // // //       )
// // // //     },
// // // //     {
// // // //       title: "Development Philosophy",
// // // //       content: (
// // // //         <div>
// // // //           <p className="text-muted-foreground leading-relaxed">
// // // //             I approach every project with a user-first mindset, ensuring that technical excellence 
// // // //             translates into intuitive and engaging user experiences. My goal is to bridge the gap 
// // // //             between complex functionality and seamless usability.
// // // //           </p>
// // // //           <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
// // // //             <p className="text-muted-foreground text-sm italic">
// // // //               "Code is like humor. When you have to explain it, it's bad." - Cory House
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       )
// // // //     }
// // // //   ];

// // // //   const skills = {
// // // //     languages: [
// // // //       { name: "Python", icon: pythonIcon },
// // // //       { name: "JavaScript", icon: jsIcon },
// // // //       { name: "HTML", icon: htmlIcon },
// // // //       { name: "CSS", icon: cssIcon }
// // // //     ],
// // // //     frameworks: [
// // // //       { name: "Next.js", icon: nextjsIcon },
// // // //       { name: "React", icon: reactIcon },
// // // //       { name: "Tailwind CSS", icon: null }
// // // //     ],
// // // //     databases: [
// // // //       { name: "MongoDB", icon: mongoIcon },
// // // //       { name: "MySQL", icon: mysqlIcon }
// // // //     ],
// // // //     tools: [
// // // //       { name: "VS Code", icon: vscodeIcon },
// // // //       { name: "Eclipse", icon: eclipseIcon },
// // // //       { name: "Postman", icon: postmanIcon }
// // // //     ]
// // // //   };

// // // //   const skillCategories = [
// // // //     {
// // // //       title: "Languages & Scripting",
// // // //       icon: Code,
// // // //       items: skills.languages,
// // // //       color: "bg-blue-500/10 text-blue-700"
// // // //     },
// // // //     {
// // // //       title: "Frameworks & Libraries",
// // // //       icon: Globe,
// // // //       items: skills.frameworks,
// // // //       color: "bg-green-500/10 text-green-700"
// // // //     },
// // // //     {
// // // //       title: "Databases",
// // // //       icon: Database,
// // // //       items: skills.databases,
// // // //       color: "bg-purple-500/10 text-purple-700"
// // // //     },
// // // //     {
// // // //       title: "Development Tools",
// // // //       icon: Wrench,
// // // //       items: skills.tools,
// // // //       color: "bg-orange-500/10 text-orange-700"
// // // //     }
// // // //   ];

// // // //   const additionalSkills = [
// // // //     {
// // // //       title: "Team Leadership",
// // // //       icon: Users,
// // // //       items: [
// // // //         { name: "Decision-making skills" },
// // // //         { name: "Ensuring timely project delivery" }
// // // //       ],
// // // //       color: "bg-red-500/10 text-red-700",
// // // //       image: teamLeadershipImg
// // // //     },
// // // //     {
// // // //       title: "API Testing",
// // // //       icon: TestTube,
// // // //       items: [
// // // //         { name: "Postman API Testing" },
// // // //         { name: "REST API Validation" }
// // // //       ],
// // // //       color: "bg-indigo-500/10 text-indigo-700",
// // // //       image: apiTestingImg
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <section id="about" className="py-20 px-4 bg-background min-h-screen">
// // // //       <div className="container mx-auto">
// // // //         <div className="text-center mb-16 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
// // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
// // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // //         </div>

// // // //         <div className="animate-slide-in-left opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
// // // //           {/* Curved Professional Summary Box with Navigation */}
// // // //           <div className="relative mb-16">
// // // //             <Card className="bg-gradient-card shadow-elegant border-0 rounded-3xl overflow-hidden max-w-4xl mx-auto">
// // // //               <CardContent className="p-8 md:p-12">
// // // //                 <div className="flex items-center justify-between mb-6">
// // // //                   <Button
// // // //                     variant="ghost"
// // // //                     size="sm"
// // // //                     onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // // //                     disabled={currentSection === 0}
// // // //                     className="text-primary hover:bg-primary/10 rounded-full p-3"
// // // //                   >
// // // //                     <ChevronLeft size={20} />
// // // //                   </Button>
                  
// // // //                   <div className="text-center flex-1">
// // // //                     <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
// // // //                       {sections[currentSection].title}
// // // //                     </h3>
// // // //                     <div className="flex justify-center gap-2 mt-4">
// // // //                       {sections.map((_, index) => (
// // // //                         <div
// // // //                           key={index}
// // // //                           className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // // //                             index === currentSection ? 'bg-primary' : 'bg-primary/30'
// // // //                           }`}
// // // //                         />
// // // //                       ))}
// // // //                     </div>
// // // //                   </div>
                  
// // // //                   <Button
// // // //                     variant="ghost"
// // // //                     size="sm"
// // // //                     onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // // //                     disabled={currentSection === sections.length - 1}
// // // //                     className="text-primary hover:bg-primary/10 rounded-full p-3"
// // // //                   >
// // // //                     <ChevronRight size={20} />
// // // //                   </Button>
// // // //                 </div>
                
// // // //                 <div className="min-h-[300px] flex items-center justify-center">
// // // //                   <div className="w-full transition-all duration-500 ease-in-out">
// // // //                     {sections[currentSection].content}
// // // //                   </div>
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </div>

// // // //           {/* Skills & Proficiency Section */}
// // // //           <div className="animate-slide-in-right opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]">
// // // //             <h3 className="text-xl font-bold mb-6">Skills & Proficiency</h3>
            
// // // //             {/* First Row: Languages & Frameworks */}
// // // //             <div className="grid md:grid-cols-2 gap-4 mb-4">
// // // //               <Card className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.6s" }}>
// // // //                 <CardHeader className="pb-3">
// // // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // // //                     <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700">
// // // //                       <Code size={20} />
// // // //                     </div>
// // // //                     Languages & Scripting
// // // //                   </CardTitle>
// // // //                 </CardHeader>
// // // //                 <CardContent>
// // // //                   <div className="flex flex-wrap gap-2">
// // // //                     {skills.languages.map((skill, skillIndex) => (
// // // //                       <Badge 
// // // //                         key={`languages-${skillIndex}`}
// // // //                         variant="secondary" 
// // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // // //                       >
// // // //                         {skill.icon && (
// // // //                           <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
// // // //                         )}
// // // //                         {skill.name}
// // // //                       </Badge>
// // // //                     ))}
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>

// // // //               <Card className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.7s" }}>
// // // //                 <CardHeader className="pb-3">
// // // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // // //                     <div className="p-2 rounded-lg bg-green-500/10 text-green-700">
// // // //                       <Globe size={20} />
// // // //                     </div>
// // // //                     Frameworks & Libraries
// // // //                   </CardTitle>
// // // //                 </CardHeader>
// // // //                 <CardContent>
// // // //                   <div className="flex flex-wrap gap-2">
// // // //                     {skills.frameworks.map((skill, skillIndex) => (
// // // //                       <Badge 
// // // //                         key={`frameworks-${skillIndex}`}
// // // //                         variant="secondary" 
// // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // // //                       >
// // // //                         {skill.icon && (
// // // //                           <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
// // // //                         )}
// // // //                         {skill.name}
// // // //                       </Badge>
// // // //                     ))}
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </div>

// // // //             {/* Second Row: Databases & Development Tools */}
// // // //             <div className="grid md:grid-cols-2 gap-4 mb-4">
// // // //               <Card className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.8s" }}>
// // // //                 <CardHeader className="pb-3">
// // // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // // //                     <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700">
// // // //                       <Database size={20} />
// // // //                     </div>
// // // //                     Databases
// // // //                   </CardTitle>
// // // //                 </CardHeader>
// // // //                 <CardContent>
// // // //                   <div className="flex flex-wrap gap-2">
// // // //                     {skills.databases.map((skill, skillIndex) => (
// // // //                       <Badge 
// // // //                         key={`databases-${skillIndex}`}
// // // //                         variant="secondary" 
// // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // // //                       >
// // // //                         {skill.icon && (
// // // //                           <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
// // // //                         )}
// // // //                         {skill.name}
// // // //                       </Badge>
// // // //                     ))}
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>

// // // //               <Card className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.9s" }}>
// // // //                 <CardHeader className="pb-3">
// // // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // // //                     <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700">
// // // //                       <Wrench size={20} />
// // // //                     </div>
// // // //                     Development Tools
// // // //                   </CardTitle>
// // // //                 </CardHeader>
// // // //                 <CardContent>
// // // //                   <div className="flex flex-wrap gap-2">
// // // //                     {skills.tools.map((skill, skillIndex) => (
// // // //                       <Badge 
// // // //                         key={`tools-${skillIndex}`}
// // // //                         variant="secondary" 
// // // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // // //                       >
// // // //                         {skill.icon && (
// // // //                           <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
// // // //                         )}
// // // //                         {skill.name}
// // // //                       </Badge>
// // // //                     ))}
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             </div>

// // // //             {/* Third Row: Team Leadership & API Testing */}
// // // //             <div className="grid md:grid-cols-2 gap-4">
// // // //               {additionalSkills.map((category, index) => (
// // // //                 <Card 
// // // //                   key={category.title} 
// // // //                   className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]"
// // // //                   style={{ animationDelay: `${1.0 + index * 0.1}s` }}
// // // //                 >
// // // //                   <CardHeader className="pb-3">
// // // //                     <CardTitle className="flex items-center gap-3 text-lg">
// // // //                       <div className={`p-2 rounded-lg ${category.color}`}>
// // // //                         <category.icon size={20} />
// // // //                       </div>
// // // //                       {category.title}
// // // //                     </CardTitle>
// // // //                   </CardHeader>
// // // //                   <CardContent>
// // // //                     <div className="flex items-center gap-4">
// // // //                       <div className="flex-1">
// // // //                         <div className="flex flex-wrap gap-2">
// // // //                           {category.items.map((skill, skillIndex) => (
// // // //                             <Badge 
// // // //                               key={`${category.title}-${skillIndex}`}
// // // //                               variant="secondary" 
// // // //                               className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
// // // //                             >
// // // //                               {skill.name}
// // // //                             </Badge>
// // // //                           ))}
// // // //                         </div>
// // // //                       </div>
// // // //                       <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md">
// // // //                         <img 
// // // //                           src={category.image} 
// // // //                           alt={category.title} 
// // // //                           className="w-full h-full object-cover"
// // // //                         />
// // // //                       </div>
// // // //                     </div>
// // // //                   </CardContent>
// // // //                 </Card>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default About;
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";
// // // import { 
// // //   Code, 
// // //   Database, 
// // //   Globe, 
// // //   Wrench, 
// // //   Users, 
// // //   TestTube, 
// // //   ChevronLeft, 
// // //   ChevronRight,
// // //   Target,
// // //   CheckCircle,
// // //   Zap,
// // //   Server,
// // //   Monitor
// // // } from "lucide-react";
// // // import { useState } from "react";

// // // const About = () => {
// // //   const [currentSection, setCurrentSection] = useState(0);
  
// // //   const sections = [
// // //     {
// // //       title: "Professional Summary",
// // //       content: (
// // //         <div className="space-y-4">
// // //           <p className="text-muted-foreground leading-relaxed">
// // //             Web Developer with 6 months of experience at Webgeon Results, skilled in building 
// // //             responsive web applications using React, Tailwind CSS, and Next.js. Proficient in 
// // //             developing clean, maintainable code and delivering user-centric solutions.
// // //           </p>
// // //           <p className="text-muted-foreground leading-relaxed">
// // //             Strong team collaborator with a focus on performance, accessibility, and modern web 
// // //             standards to support scalable and efficient development.
// // //           </p>
// // //           <p className="text-muted-foreground leading-relaxed">
// // //             My journey in web development has been driven by a passion for problem-solving and 
// // //             creating meaningful digital experiences. I thrive in collaborative environments where 
// // //             innovation meets practical implementation, consistently delivering projects that exceed 
// // //             client expectations.
// // //           </p>
// // //           <p className="text-muted-foreground leading-relaxed">
// // //             I believe in staying current with emerging technologies and industry best practices, 
// // //             ensuring that every solution I develop is not only functional but also future-ready 
// // //             and maintainable.
// // //           </p>
// // //         </div>
// // //       )
// // //     },
// // //     {
// // //       title: "Key Strengths",
// // //       content: (
// // //         <div>
// // //           <ul className="space-y-3 text-muted-foreground">
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>Decision-making skills and team leadership</span>
// // //             </li>
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>Performance optimization and accessibility focus</span>
// // //             </li>
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>Clean, maintainable code practices</span>
// // //             </li>
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>Timely project delivery</span>
// // //             </li>
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>Continuous learning and adaptation to new technologies</span>
// // //             </li>
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>User experience optimization and responsive design</span>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       )
// // //     },
// // //     {
// // //       title: "Development Philosophy",
// // //       content: (
// // //         <div>
// // //           <p className="text-muted-foreground leading-relaxed">
// // //             I approach every project with a user-first mindset, ensuring that technical excellence 
// // //             translates into intuitive and engaging user experiences. My goal is to bridge the gap 
// // //             between complex functionality and seamless usability.
// // //           </p>
// // //           <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
// // //             <p className="text-muted-foreground text-sm italic">
// // //               "Code is like humor. When you have to explain it, it's bad." - Cory House
// // //             </p>
// // //           </div>
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

// // //   const skillCategories = [
// // //     {
// // //       title: "Languages & Scripting",
// // //       icon: Code,
// // //       items: skills.languages,
// // //       color: "bg-blue-500/10 text-blue-700"
// // //     },
// // //     {
// // //       title: "Frameworks & Libraries",
// // //       icon: Globe,
// // //       items: skills.frameworks,
// // //       color: "bg-green-500/10 text-green-700"
// // //     },
// // //     {
// // //       title: "Databases",
// // //       icon: Database,
// // //       items: skills.databases,
// // //       color: "bg-purple-500/10 text-purple-700"
// // //     },
// // //     {
// // //       title: "Development Tools",
// // //       icon: Wrench,
// // //       items: skills.tools,
// // //       color: "bg-orange-500/10 text-orange-700"
// // //     }
// // //   ];

// // //   const additionalSkills = [
// // //     {
// // //       title: "Team Leadership",
// // //       icon: Users,
// // //       items: [
// // //         { name: "Decision-making skills" },
// // //         { name: "Ensuring timely project delivery" }
// // //       ],
// // //       color: "bg-red-500/10 text-red-700",
// // //       displayIcon: Target
// // //     },
// // //     {
// // //       title: "API Testing",
// // //       icon: TestTube,
// // //       items: [
// // //         { name: "Postman API Testing" },
// // //         { name: "REST API Validation" }
// // //       ],
// // //       color: "bg-indigo-500/10 text-indigo-700",
// // //       displayIcon: Server
// // //     }
// // //   ];

// // //   return (
// // //     <section id="about" className="py-20 px-4 bg-background min-h-screen">
// // //       <div className="container mx-auto">
// // //         <div className="text-center mb-16 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
// // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
// // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // //         </div>

// // //         <div className="animate-slide-in-left opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
// // //           {/* Curved Professional Summary Box with Navigation */}
// // //           <div className="relative mb-16">
// // //             <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 rounded-3xl overflow-hidden max-w-4xl mx-auto">
// // //               <CardContent className="p-8 md:p-12">
// // //                 <div className="flex items-center justify-between mb-6">
// // //                   <Button
// // //                     variant="ghost"
// // //                     size="sm"
// // //                     onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // //                     disabled={currentSection === 0}
// // //                     className="text-primary hover:bg-primary/10 rounded-full p-3"
// // //                   >
// // //                     <ChevronLeft size={20} />
// // //                   </Button>
                  
// // //                   <div className="text-center flex-1">
// // //                     <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
// // //                       {sections[currentSection].title}
// // //                     </h3>
// // //                     <div className="flex justify-center gap-2 mt-4">
// // //                       {sections.map((_, index) => (
// // //                         <div
// // //                           key={index}
// // //                           className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // //                             index === currentSection ? 'bg-primary' : 'bg-primary/30'
// // //                           }`}
// // //                         />
// // //                       ))}
// // //                     </div>
// // //                   </div>
                  
// // //                   <Button
// // //                     variant="ghost"
// // //                     size="sm"
// // //                     onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // //                     disabled={currentSection === sections.length - 1}
// // //                     className="text-primary hover:bg-primary/10 rounded-full p-3"
// // //                   >
// // //                     <ChevronRight size={20} />
// // //                   </Button>
// // //                 </div>
                
// // //                 <div className="min-h-[300px] flex items-center justify-center">
// // //                   <div className="w-full transition-all duration-500 ease-in-out">
// // //                     {sections[currentSection].content}
// // //                   </div>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           </div>

// // //           {/* Skills & Proficiency Section */}
// // //           <div className="animate-slide-in-right opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]">
// // //             <h3 className="text-xl font-bold mb-6">Skills & Proficiency</h3>
            
// // //             {/* First Row: Languages & Frameworks */}
// // //             <div className="grid md:grid-cols-2 gap-4 mb-4">
// // //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.6s" }}>
// // //                 <CardHeader className="pb-3">
// // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // //                     <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700">
// // //                       <Code size={20} />
// // //                     </div>
// // //                     Languages & Scripting
// // //                   </CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {skills.languages.map((skill, skillIndex) => (
// // //                       <Badge 
// // //                         key={`languages-${skillIndex}`}
// // //                         variant="secondary" 
// // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // //                       >
// // //                         <span>{skill.icon}</span>
// // //                         {skill.name}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>

// // //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.7s" }}>
// // //                 <CardHeader className="pb-3">
// // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // //                     <div className="p-2 rounded-lg bg-green-500/10 text-green-700">
// // //                       <Globe size={20} />
// // //                     </div>
// // //                     Frameworks & Libraries
// // //                   </CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {skills.frameworks.map((skill, skillIndex) => (
// // //                       <Badge 
// // //                         key={`frameworks-${skillIndex}`}
// // //                         variant="secondary" 
// // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // //                       >
// // //                         <span>{skill.icon}</span>
// // //                         {skill.name}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             </div>

// // //             {/* Second Row: Databases & Development Tools */}
// // //             <div className="grid md:grid-cols-2 gap-4 mb-4">
// // //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.8s" }}>
// // //                 <CardHeader className="pb-3">
// // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // //                     <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700">
// // //                       <Database size={20} />
// // //                     </div>
// // //                     Databases
// // //                   </CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {skills.databases.map((skill, skillIndex) => (
// // //                       <Badge 
// // //                         key={`databases-${skillIndex}`}
// // //                         variant="secondary" 
// // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // //                       >
// // //                         <span>{skill.icon}</span>
// // //                         {skill.name}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>

// // //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.9s" }}>
// // //                 <CardHeader className="pb-3">
// // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // //                     <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700">
// // //                       <Wrench size={20} />
// // //                     </div>
// // //                     Development Tools
// // //                   </CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {skills.tools.map((skill, skillIndex) => (
// // //                       <Badge 
// // //                         key={`tools-${skillIndex}`}
// // //                         variant="secondary" 
// // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // //                       >
// // //                         <span>{skill.icon}</span>
// // //                         {skill.name}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             </div>

// // //             {/* Third Row: Team Leadership & API Testing */}
// // //             <div className="grid md:grid-cols-2 gap-4">
// // //               {additionalSkills.map((category, index) => (
// // //                 <Card 
// // //                   key={category.title} 
// // //                   className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]"
// // //                   style={{ animationDelay: `${1.0 + index * 0.1}s` }}
// // //                 >
// // //                   <CardHeader className="pb-3">
// // //                     <CardTitle className="flex items-center gap-3 text-lg">
// // //                       <div className={`p-2 rounded-lg ${category.color}`}>
// // //                         <category.icon size={20} />
// // //                       </div>
// // //                       {category.title}
// // //                     </CardTitle>
// // //                   </CardHeader>
// // //                   <CardContent>
// // //                     <div className="flex items-center gap-4">
// // //                       <div className="flex-1">
// // //                         <div className="flex flex-wrap gap-2">
// // //                           {category.items.map((skill, skillIndex) => (
// // //                             <Badge 
// // //                               key={`${category.title}-${skillIndex}`}
// // //                               variant="secondary" 
// // //                               className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
// // //                             >
// // //                               {skill.name}
// // //                             </Badge>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
// // //                         <category.displayIcon size={32} className="text-primary" />
// // //                       </div>
// // //                     </div>
// // //                   </CardContent>
// // //                 </Card>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default About;
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";
// // // import { 
// // //   Code, 
// // //   Database, 
// // //   Globe, 
// // //   Wrench, 
// // //   Users, 
// // //   TestTube, 
// // //   ChevronLeft, 
// // //   ChevronRight,
// // //   Target,
// // //   CheckCircle,
// // //   Zap,
// // //   Server,
// // //   Monitor,
// // //   Brain,
// // //   Clock,
// // //   Send,
// // //   Shield
// // // } from "lucide-react";
// // // import { useState } from "react";

// // // const About = () => {
// // //   const [currentSection, setCurrentSection] = useState(0);
  
// // //   const sections = [
// // //     {
// // //       title: "Professional Summary",
// // //       content: (
// // //         <div className="space-y-4">
// // //           <p className="text-muted-foreground leading-relaxed">
// // //             Web Developer with 6 months of experience at Webgeon Results, skilled in building 
// // //             responsive web applications using React, Tailwind CSS, and Next.js. Proficient in 
// // //             developing clean, maintainable code and delivering user-centric solutions.
// // //           </p>
// // //           <p className="text-muted-foreground leading-relaxed">
// // //             Strong team collaborator with a focus on performance, accessibility, and modern web 
// // //             standards to support scalable and efficient development.
// // //           </p>
// // //           <p className="text-muted-foreground leading-relaxed">
// // //             My journey in web development has been driven by a passion for problem-solving and 
// // //             creating meaningful digital experiences. I thrive in collaborative environments where 
// // //             innovation meets practical implementation, consistently delivering projects that exceed 
// // //             client expectations.
// // //           </p>
// // //           <p className="text-muted-foreground leading-relaxed">
// // //             I believe in staying current with emerging technologies and industry best practices, 
// // //             ensuring that every solution I develop is not only functional but also future-ready 
// // //             and maintainable.
// // //           </p>
// // //         </div>
// // //       )
// // //     },
// // //     {
// // //       title: "Key Strengths",
// // //       content: (
// // //         <div>
// // //           <ul className="space-y-3 text-muted-foreground">
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>Decision-making skills and team leadership</span>
// // //             </li>
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>Performance optimization and accessibility focus</span>
// // //             </li>
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>Clean, maintainable code practices</span>
// // //             </li>
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>Timely project delivery</span>
// // //             </li>
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>Continuous learning and adaptation to new technologies</span>
// // //             </li>
// // //             <li className="flex items-start gap-3">
// // //               <span className="text-primary mt-1">•</span>
// // //               <span>User experience optimization and responsive design</span>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       )
// // //     },
// // //     {
// // //       title: "Development Philosophy",
// // //       content: (
// // //         <div>
// // //           <p className="text-muted-foreground leading-relaxed">
// // //             I approach every project with a user-first mindset, ensuring that technical excellence 
// // //             translates into intuitive and engaging user experiences. My goal is to bridge the gap 
// // //             between complex functionality and seamless usability.
// // //           </p>
// // //           <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
// // //             <p className="text-muted-foreground text-sm italic">
// // //               "Code is like humor. When you have to explain it, it's bad." - Cory House
// // //             </p>
// // //           </div>
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

// // //   const skillCategories = [
// // //     {
// // //       title: "Languages & Scripting",
// // //       icon: Code,
// // //       items: skills.languages,
// // //       color: "bg-blue-500/10 text-blue-700"
// // //     },
// // //     {
// // //       title: "Frameworks & Libraries",
// // //       icon: Globe,
// // //       items: skills.frameworks,
// // //       color: "bg-green-500/10 text-green-700"
// // //     },
// // //     {
// // //       title: "Databases",
// // //       icon: Database,
// // //       items: skills.databases,
// // //       color: "bg-purple-500/10 text-purple-700"
// // //     },
// // //     {
// // //       title: "Development Tools",
// // //       icon: Wrench,
// // //       items: skills.tools,
// // //       color: "bg-orange-500/10 text-orange-700"
// // //     }
// // //   ];

// // //   const additionalSkills = [
// // //     {
// // //       title: "Team Leadership",
// // //       icon: Users,
// // //       items: [
// // //         { 
// // //           name: "Decision-making skills", 
// // //           icon: Brain, 
// // //           iconColor: "text-purple-600",
// // //           bgColor: "bg-purple-100 dark:bg-purple-900/20"
// // //         },
// // //         { 
// // //           name: "Ensuring timely project delivery", 
// // //           icon: Clock, 
// // //           iconColor: "text-green-600",
// // //           bgColor: "bg-green-100 dark:bg-green-900/20"
// // //         }
// // //       ],
// // //       color: "bg-red-500/10 text-red-700",
// // //       displayIcon: Target
// // //     },
// // //     {
// // //       title: "API Testing",
// // //       icon: TestTube,
// // //       items: [
// // //         { 
// // //           name: "Postman API Testing", 
// // //           icon: Send, 
// // //           iconColor: "text-orange-600",
// // //           bgColor: "bg-orange-100 dark:bg-orange-900/20"
// // //         },
// // //         { 
// // //           name: "REST API Validation", 
// // //           icon: Shield, 
// // //           iconColor: "text-blue-600",
// // //           bgColor: "bg-blue-100 dark:bg-blue-900/20"
// // //         }
// // //       ],
// // //       color: "bg-indigo-500/10 text-indigo-700",
// // //       displayIcon: Server
// // //     }
// // //   ];

// // //   return (
// // //     <section id="about" className="py-20 px-4 bg-background min-h-screen">
// // //       <div className="container mx-auto">
// // //         <div className="text-center mb-16 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
// // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
// // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // //         </div>

// // //         <div className="animate-slide-in-left opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
// // //           {/* Curved Professional Summary Box with Navigation */}
// // //           <div className="relative mb-16">
// // //             <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 rounded-3xl overflow-hidden max-w-4xl mx-auto">
// // //               <CardContent className="p-8 md:p-12">
// // //                 <div className="flex items-center justify-between mb-6">
// // //                   <Button
// // //                     variant="ghost"
// // //                     size="sm"
// // //                     onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// // //                     disabled={currentSection === 0}
// // //                     className="text-primary hover:bg-primary/10 rounded-full p-3"
// // //                   >
// // //                     <ChevronLeft size={20} />
// // //                   </Button>
                  
// // //                   <div className="text-center flex-1">
// // //                     <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
// // //                       {sections[currentSection].title}
// // //                     </h3>
// // //                     <div className="flex justify-center gap-2 mt-4">
// // //                       {sections.map((_, index) => (
// // //                         <div
// // //                           key={index}
// // //                           className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// // //                             index === currentSection ? 'bg-primary' : 'bg-primary/30'
// // //                           }`}
// // //                         />
// // //                       ))}
// // //                     </div>
// // //                   </div>
                  
// // //                   <Button
// // //                     variant="ghost"
// // //                     size="sm"
// // //                     onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// // //                     disabled={currentSection === sections.length - 1}
// // //                     className="text-primary hover:bg-primary/10 rounded-full p-3"
// // //                   >
// // //                     <ChevronRight size={20} />
// // //                   </Button>
// // //                 </div>
                
// // //                 <div className="min-h-[300px] flex items-center justify-center">
// // //                   <div className="w-full transition-all duration-500 ease-in-out">
// // //                     {sections[currentSection].content}
// // //                   </div>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           </div>

// // //           {/* Skills & Proficiency Section */}
// // //           <div className="animate-slide-in-right opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]">
// // //             <h3 className="text-xl font-bold mb-6">Skills & Proficiency</h3>
            
// // //             {/* First Row: Languages & Frameworks */}
// // //             <div className="grid md:grid-cols-2 gap-4 mb-4">
// // //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.6s" }}>
// // //                 <CardHeader className="pb-3">
// // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // //                     <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700">
// // //                       <Code size={20} />
// // //                     </div>
// // //                     Languages & Scripting
// // //                   </CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {skills.languages.map((skill, skillIndex) => (
// // //                       <Badge 
// // //                         key={`languages-${skillIndex}`}
// // //                         variant="secondary" 
// // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // //                       >
// // //                         <span>{skill.icon}</span>
// // //                         {skill.name}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>

// // //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.7s" }}>
// // //                 <CardHeader className="pb-3">
// // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // //                     <div className="p-2 rounded-lg bg-green-500/10 text-green-700">
// // //                       <Globe size={20} />
// // //                     </div>
// // //                     Frameworks & Libraries
// // //                   </CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {skills.frameworks.map((skill, skillIndex) => (
// // //                       <Badge 
// // //                         key={`frameworks-${skillIndex}`}
// // //                         variant="secondary" 
// // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // //                       >
// // //                         <span>{skill.icon}</span>
// // //                         {skill.name}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             </div>

// // //             {/* Second Row: Databases & Development Tools */}
// // //             <div className="grid md:grid-cols-2 gap-4 mb-4">
// // //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.8s" }}>
// // //                 <CardHeader className="pb-3">
// // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // //                     <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700">
// // //                       <Database size={20} />
// // //                     </div>
// // //                     Databases
// // //                   </CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {skills.databases.map((skill, skillIndex) => (
// // //                       <Badge 
// // //                         key={`databases-${skillIndex}`}
// // //                         variant="secondary" 
// // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // //                       >
// // //                         <span>{skill.icon}</span>
// // //                         {skill.name}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>

// // //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.9s" }}>
// // //                 <CardHeader className="pb-3">
// // //                   <CardTitle className="flex items-center gap-3 text-lg">
// // //                     <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700">
// // //                       <Wrench size={20} />
// // //                     </div>
// // //                     Development Tools
// // //                   </CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {skills.tools.map((skill, skillIndex) => (
// // //                       <Badge 
// // //                         key={`tools-${skillIndex}`}
// // //                         variant="secondary" 
// // //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// // //                       >
// // //                         <span>{skill.icon}</span>
// // //                         {skill.name}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             </div>

// // //             {/* Third Row: Team Leadership & API Testing */}
// // //             <div className="grid md:grid-cols-2 gap-4">
// // //               {additionalSkills.map((category, index) => (
// // //                 <Card 
// // //                   key={category.title} 
// // //                   className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]"
// // //                   style={{ animationDelay: `${1.0 + index * 0.1}s` }}
// // //                 >
// // //                   <CardHeader className="pb-3">
// // //                     <CardTitle className="flex items-center gap-3 text-lg">
// // //                       <div className={`p-2 rounded-lg ${category.color}`}>
// // //                         <category.icon size={20} />
// // //                       </div>
// // //                       {category.title}
// // //                     </CardTitle>
// // //                   </CardHeader>
// // //                   <CardContent>
// // //                     <div className="flex items-center gap-4">
// // //                       <div className="flex-1">
// // //                         <div className="flex flex-wrap gap-3">
// // //                           {category.items.map((skill, skillIndex) => (
// // //                             <div
// // //                               key={`${category.title}-${skillIndex}`}
// // //                               className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
// // //                             >
// // //                               <div className={`p-1.5 rounded-full ${skill.bgColor}`}>
// // //                                 <skill.icon size={14} className={skill.iconColor} />
// // //                               </div>
// // //                               <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// // //                                 {skill.name}
// // //                               </span>
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
// // //                         <category.displayIcon size={32} className="text-primary" />
// // //                       </div>
// // //                     </div>
// // //                   </CardContent>
// // //                 </Card>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default About;
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { 
// //   Code, 
// //   Database, 
// //   Globe, 
// //   Wrench, 
// //   Users, 
// //   TestTube, 
// //   ChevronLeft, 
// //   ChevronRight,
// //   Target,
// //   CheckCircle,
// //   Zap,
// //   Server,
// //   Monitor,
// //   Brain,
// //   Clock,
// //   Send,
// //   Shield
// // } from "lucide-react";
// // import { useState } from "react";

// // const About = () => {
// //   const [currentSection, setCurrentSection] = useState(0);
  
// //   const sections = [
// //     {
// //       title: "Professional Summary",
// //       content: (
// //         <div className="space-y-4">
// //           <p className="text-muted-foreground leading-relaxed">
// //             Web Developer with 6 months of experience at Webgeon Results, skilled in building 
// //             responsive web applications using React, Tailwind CSS, and Next.js. Proficient in 
// //             developing clean, maintainable code and delivering user-centric solutions.
// //           </p>
// //           <p className="text-muted-foreground leading-relaxed">
// //             Strong team collaborator with a focus on performance, accessibility, and modern web 
// //             standards to support scalable and efficient development.
// //           </p>
// //           <p className="text-muted-foreground leading-relaxed">
// //             My journey in web development has been driven by a passion for problem-solving and 
// //             creating meaningful digital experiences. I thrive in collaborative environments where 
// //             innovation meets practical implementation, consistently delivering projects that exceed 
// //             client expectations.
// //           </p>
// //           <p className="text-muted-foreground leading-relaxed">
// //             I believe in staying current with emerging technologies and industry best practices, 
// //             ensuring that every solution I develop is not only functional but also future-ready 
// //             and maintainable.
// //           </p>
// //         </div>
// //       )
// //     },
// //     {
// //       title: "Key Strengths",
// //       content: (
// //         <div>
// //           <ul className="space-y-3 text-muted-foreground">
// //             <li className="flex items-start gap-3">
// //               <span className="text-primary mt-1">•</span>
// //               <span>Decision-making skills and team leadership</span>
// //             </li>
// //             <li className="flex items-start gap-3">
// //               <span className="text-primary mt-1">•</span>
// //               <span>Performance optimization and accessibility focus</span>
// //             </li>
// //             <li className="flex items-start gap-3">
// //               <span className="text-primary mt-1">•</span>
// //               <span>Clean, maintainable code practices</span>
// //             </li>
// //             <li className="flex items-start gap-3">
// //               <span className="text-primary mt-1">•</span>
// //               <span>Timely project delivery</span>
// //             </li>
// //             <li className="flex items-start gap-3">
// //               <span className="text-primary mt-1">•</span>
// //               <span>Continuous learning and adaptation to new technologies</span>
// //             </li>
// //             <li className="flex items-start gap-3">
// //               <span className="text-primary mt-1">•</span>
// //               <span>User experience optimization and responsive design</span>
// //             </li>
// //           </ul>
// //         </div>
// //       )
// //     },
// //     {
// //       title: "Development Philosophy",
// //       content: (
// //         <div>
// //           <p className="text-muted-foreground leading-relaxed">
// //             I approach every project with a user-first mindset, ensuring that technical excellence 
// //             translates into intuitive and engaging user experiences. My goal is to bridge the gap 
// //             between complex functionality and seamless usability.
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

// //   const skillCategories = [
// //     {
// //       title: "Languages & Scripting",
// //       icon: Code,
// //       items: skills.languages,
// //       color: "bg-blue-500/10 text-blue-700"
// //     },
// //     {
// //       title: "Frameworks & Libraries",
// //       icon: Globe,
// //       items: skills.frameworks,
// //       color: "bg-green-500/10 text-green-700"
// //     },
// //     {
// //       title: "Databases",
// //       icon: Database,
// //       items: skills.databases,
// //       color: "bg-purple-500/10 text-purple-700"
// //     },
// //     {
// //       title: "Development Tools",
// //       icon: Wrench,
// //       items: skills.tools,
// //       color: "bg-orange-500/10 text-orange-700"
// //     }
// //   ];

// //   const additionalSkills = [
// //     {
// //       title: "Team Leadership",
// //       icon: Users,
// //       items: [
// //         { 
// //           name: "Decision-making skills", 
// //           icon: Brain, 
// //           iconColor: "text-purple-600",
// //           bgColor: "bg-purple-100 dark:bg-purple-900/20"
// //         },
// //         { 
// //           name: "Ensuring timely project delivery", 
// //           icon: Clock, 
// //           iconColor: "text-green-600",
// //           bgColor: "bg-green-100 dark:bg-green-900/20"
// //         }
// //       ],
// //       color: "bg-red-500/10 text-red-700",
// //       displayIcon: Target
// //     },
// //     {
// //       title: "API Testing",
// //       icon: TestTube,
// //       items: [
// //         { 
// //           name: "Postman API Testing", 
// //           icon: Send, 
// //           iconColor: "text-orange-600",
// //           bgColor: "bg-orange-100 dark:bg-orange-900/20"
// //         },
// //         { 
// //           name: "REST API Validation", 
// //           icon: Shield, 
// //           iconColor: "text-blue-600",
// //           bgColor: "bg-blue-100 dark:bg-blue-900/20"
// //         }
// //       ],
// //       color: "bg-indigo-500/10 text-indigo-700",
// //       displayIcon: Server
// //     }
// //   ];

// //   return (
// //     <section id="about" className="py-20 px-4 bg-background min-h-screen">
// //       <div className="container mx-auto">
// //         <div className="text-center mb-16 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
// //           <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
// //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// //         </div>

// //         <div className="animate-slide-in-left opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
// //           {/* Curved Professional Summary Box with Navigation */}
// //           <div className="relative mb-16">
// //             <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 rounded-3xl overflow-hidden max-w-4xl mx-auto">
// //               <CardContent className="p-8 md:p-12">
// //                 <div className="flex items-center justify-between mb-6">
// //                   <Button
// //                     variant="ghost"
// //                     size="sm"
// //                     onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
// //                     disabled={currentSection === 0}
// //                     className="text-primary hover:bg-primary/10 rounded-full p-3"
// //                   >
// //                     <ChevronLeft size={20} />
// //                   </Button>
                  
// //                   <div className="text-center flex-1">
// //                     <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
// //                       {sections[currentSection].title}
// //                     </h3>
// //                     <div className="flex justify-center gap-2 mt-4">
// //                       {sections.map((_, index) => (
// //                         <div
// //                           key={index}
// //                           className={`w-2 h-2 rounded-full transition-colors duration-300 ${
// //                             index === currentSection ? 'bg-primary' : 'bg-primary/30'
// //                           }`}
// //                         />
// //                       ))}
// //                     </div>
// //                   </div>
                  
// //                   <Button
// //                     variant="ghost"
// //                     size="sm"
// //                     onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
// //                     disabled={currentSection === sections.length - 1}
// //                     className="text-primary hover:bg-primary/10 rounded-full p-3"
// //                   >
// //                     <ChevronRight size={20} />
// //                   </Button>
// //                 </div>
                
// //                 <div className="min-h-[300px] flex items-center justify-center">
// //                   <div className="w-full transition-all duration-500 ease-in-out">
// //                     {sections[currentSection].content}
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Skills & Proficiency Section */}
// //           <div className="animate-slide-in-right opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]">
// //             <h3 className="text-xl font-bold mb-6">Skills & Proficiency</h3>
            
// //             {/* First Row: Languages & Frameworks */}
// //             <div className="grid md:grid-cols-2 gap-4 mb-4">
// //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.6s" }}>
// //                 <CardHeader className="pb-3">
// //                   <CardTitle className="flex items-center gap-3 text-lg">
// //                     <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700">
// //                       <Code size={20} />
// //                     </div>
// //                     Languages & Scripting
// //                   </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex flex-wrap gap-2">
// //                     {skills.languages.map((skill, skillIndex) => (
// //                       <Badge 
// //                         key={`languages-${skillIndex}`}
// //                         variant="secondary" 
// //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// //                       >
// //                         <span>{skill.icon}</span>
// //                         {skill.name}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>

// //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.7s" }}>
// //                 <CardHeader className="pb-3">
// //                   <CardTitle className="flex items-center gap-3 text-lg">
// //                     <div className="p-2 rounded-lg bg-green-500/10 text-green-700">
// //                       <Globe size={20} />
// //                     </div>
// //                     Frameworks & Libraries
// //                   </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex flex-wrap gap-2">
// //                     {skills.frameworks.map((skill, skillIndex) => (
// //                       <Badge 
// //                         key={`frameworks-${skillIndex}`}
// //                         variant="secondary" 
// //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// //                       >
// //                         <span>{skill.icon}</span>
// //                         {skill.name}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>

// //             {/* Second Row: Databases & Development Tools */}
// //             <div className="grid md:grid-cols-2 gap-4 mb-4">
// //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.8s" }}>
// //                 <CardHeader className="pb-3">
// //                   <CardTitle className="flex items-center gap-3 text-lg">
// //                     <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700">
// //                       <Database size={20} />
// //                     </div>
// //                     Databases
// //                   </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex flex-wrap gap-2">
// //                     {skills.databases.map((skill, skillIndex) => (
// //                       <Badge 
// //                         key={`databases-${skillIndex}`}
// //                         variant="secondary" 
// //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// //                       >
// //                         <span>{skill.icon}</span>
// //                         {skill.name}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>

// //               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.9s" }}>
// //                 <CardHeader className="pb-3">
// //                   <CardTitle className="flex items-center gap-3 text-lg">
// //                     <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700">
// //                       <Wrench size={20} />
// //                     </div>
// //                     Development Tools
// //                   </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex flex-wrap gap-2">
// //                     {skills.tools.map((skill, skillIndex) => (
// //                       <Badge 
// //                         key={`tools-${skillIndex}`}
// //                         variant="secondary" 
// //                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
// //                       >
// //                         <span>{skill.icon}</span>
// //                         {skill.name}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>

// //             {/* Third Row: Team Leadership & API Testing */}
// //             <div className="grid md:grid-cols-2 gap-4">
// //               {additionalSkills.map((category, index) => (
// //                 <Card 
// //                   key={category.title} 
// //                   className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]"
// //                   style={{ animationDelay: `${1.0 + index * 0.1}s` }}
// //                 >
// //                   <CardHeader className="pb-3">
// //                     <CardTitle className="flex items-center gap-3 text-lg">
// //                       <div className={`p-2 rounded-lg ${category.color}`}>
// //                         <category.icon size={20} />
// //                       </div>
// //                       {category.title}
// //                     </CardTitle>
// //                   </CardHeader>
// //                   <CardContent>
// //                     <div className="flex items-center">
// //                       <div className="w-full">
// //                         <div className="flex flex-wrap gap-3">
// //                           {category.items.map((skill, skillIndex) => (
// //                             <div
// //                               key={`${category.title}-${skillIndex}`}
// //                               className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
// //                             >
// //                               <div className={`p-1.5 rounded-full ${skill.bgColor}`}>
// //                                 <skill.icon size={14} className={skill.iconColor} />
// //                               </div>
// //                               <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// //                                 {skill.name}
// //                               </span>
// //                             </div>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { 
//   Code, 
//   Database, 
//   Globe, 
//   Wrench, 
//   Users, 
//   TestTube, 
//   ChevronLeft, 
//   ChevronRight,
//   Target,
//   CheckCircle,
//   Zap,
//   Server,
//   Monitor,
//   Brain,
//   Clock,
//   Send,
//   Shield
// } from "lucide-react";
// import { useState } from "react";

// const About = () => {
//   const [currentSection, setCurrentSection] = useState(0);
  
//   const sections = [
//     {
//       title: "Professional Summary",
//       content: (
//         <div className="space-y-4">
//           {/* Mobile and Tablet version (sm and md screens) */}
//           <div className="block lg:hidden">
//             <p className="text-muted-foreground leading-relaxed">
//               Web Developer with 6 months of experience at Webgeon Results, skilled in React, 
//               Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful 
//               digital experiences, and building responsive, user-centric solutions. Focused on 
//               performance, accessibility, and modern web standards to deliver scalable, 
//               maintainable, and future-ready applications.
//             </p>
//           </div>
          
//           {/* Desktop version (lg screens and above) */}
//           <div className="hidden lg:block space-y-4">
//             <p className="text-muted-foreground leading-relaxed">
//               Web Developer with 6 months of experience at Webgeon Results, skilled in building 
//               responsive web applications using React, Tailwind CSS, and Next.js. Proficient in 
//               developing clean, maintainable code and delivering user-centric solutions.
//             </p>
//             <p className="text-muted-foreground leading-relaxed">
//               Strong team collaborator with a focus on performance, accessibility, and modern web 
//               standards to support scalable and efficient development.
//             </p>
//             <p className="text-muted-foreground leading-relaxed">
//               My journey in web development has been driven by a passion for problem-solving and 
//               creating meaningful digital experiences. I thrive in collaborative environments where 
//               innovation meets practical implementation, consistently delivering projects that exceed 
//               client expectations.
//             </p>
//             <p className="text-muted-foreground leading-relaxed">
//               I believe in staying current with emerging technologies and industry best practices, 
//               ensuring that every solution I develop is not only functional but also future-ready 
//               and maintainable.
//             </p>
//           </div>
//         </div>
//       )
//     },
//     {
//       title: "Key Strengths",
//       content: (
//         <div>
//           <ul className="space-y-3 text-muted-foreground">
//             <li className="flex items-start gap-3">
//               <span className="text-primary mt-1">•</span>
//               <span>Decision-making skills and team leadership</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="text-primary mt-1">•</span>
//               <span>Performance optimization and accessibility focus</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="text-primary mt-1">•</span>
//               <span>Clean, maintainable code practices</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="text-primary mt-1">•</span>
//               <span>Timely project delivery</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="text-primary mt-1">•</span>
//               <span>Continuous learning and adaptation to new technologies</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="text-primary mt-1">•</span>
//               <span>User experience optimization and responsive design</span>
//             </li>
//           </ul>
//         </div>
//       )
//     },
//     {
//       title: "Development Philosophy",
//       content: (
//         <div>
//           <p className="text-muted-foreground leading-relaxed">
//             I approach every project with a user-first mindset, ensuring that technical excellence 
//             translates into intuitive and engaging user experiences. My goal is to bridge the gap 
//             between complex functionality and seamless usability.
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

//   const skillCategories = [
//     {
//       title: "Languages & Scripting",
//       icon: Code,
//       items: skills.languages,
//       color: "bg-blue-500/10 text-blue-700"
//     },
//     {
//       title: "Frameworks & Libraries",
//       icon: Globe,
//       items: skills.frameworks,
//       color: "bg-green-500/10 text-green-700"
//     },
//     {
//       title: "Databases",
//       icon: Database,
//       items: skills.databases,
//       color: "bg-purple-500/10 text-purple-700"
//     },
//     {
//       title: "Development Tools",
//       icon: Wrench,
//       items: skills.tools,
//       color: "bg-orange-500/10 text-orange-700"
//     }
//   ];

//   const additionalSkills = [
//     {
//       title: "Team Leadership",
//       icon: Users,
//       items: [
//         { 
//           name: "Decision-making skills", 
//           icon: Brain, 
//           iconColor: "text-purple-600",
//           bgColor: "bg-purple-100 dark:bg-purple-900/20"
//         },
//         { 
//           name: "Ensuring timely project delivery", 
//           icon: Clock, 
//           iconColor: "text-green-600",
//           bgColor: "bg-green-100 dark:bg-green-900/20"
//         }
//       ],
//       color: "bg-red-500/10 text-red-700",
//       displayIcon: Target
//     },
//     {
//       title: "API Testing",
//       icon: TestTube,
//       items: [
//         { 
//           name: "Postman API Testing", 
//           icon: Send, 
//           iconColor: "text-orange-600",
//           bgColor: "bg-orange-100 dark:bg-orange-900/20"
//         },
//         { 
//           name: "REST API Validation", 
//           icon: Shield, 
//           iconColor: "text-blue-600",
//           bgColor: "bg-blue-100 dark:bg-blue-900/20"
//         }
//       ],
//       color: "bg-indigo-500/10 text-indigo-700",
//       displayIcon: Server
//     }
//   ];

//   return (
//     <section id="about" className="py-20 px-4 bg-background min-h-screen">
//       <div className="container mx-auto">
//         <div className="text-center mb-16 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
//           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
//         </div>

//         <div className="animate-slide-in-left opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
//           {/* Curved Professional Summary Box with Navigation */}
//           <div className="relative mb-16">
//             <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 rounded-3xl overflow-hidden max-w-4xl mx-auto">
//               <CardContent className="p-8 md:p-12">
//                 <div className="flex items-center justify-between mb-6">
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
//                     disabled={currentSection === 0}
//                     className="text-primary hover:bg-primary/10 rounded-full p-3"
//                   >
//                     <ChevronLeft size={20} />
//                   </Button>
                  
//                   <div className="text-center flex-1">
//                     <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
//                       {sections[currentSection].title}
//                     </h3>
//                     <div className="flex justify-center gap-2 mt-4">
//                       {sections.map((_, index) => (
//                         <div
//                           key={index}
//                           className={`w-2 h-2 rounded-full transition-colors duration-300 ${
//                             index === currentSection ? 'bg-primary' : 'bg-primary/30'
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   </div>
                  
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
//                     disabled={currentSection === sections.length - 1}
//                     className="text-primary hover:bg-primary/10 rounded-full p-3"
//                   >
//                     <ChevronRight size={20} />
//                   </Button>
//                 </div>
                
//                 <div className="min-h-[300px] flex items-center justify-center">
//                   <div className="w-full transition-all duration-500 ease-in-out">
//                     {sections[currentSection].content}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Skills & Proficiency Section */}
//           <div className="animate-slide-in-right opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]">
//             <h3 className="text-xl font-bold mb-6">Skills & Proficiency</h3>
            
//             {/* First Row: Languages & Frameworks */}
//             <div className="grid md:grid-cols-2 gap-4 mb-4">
//               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.6s" }}>
//                 <CardHeader className="pb-3">
//                   <CardTitle className="flex items-center gap-3 text-lg">
//                     <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700">
//                       <Code size={20} />
//                     </div>
//                     Languages & Scripting
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {skills.languages.map((skill, skillIndex) => (
//                       <Badge 
//                         key={`languages-${skillIndex}`}
//                         variant="secondary" 
//                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
//                       >
//                         <span>{skill.icon}</span>
//                         {skill.name}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.7s" }}>
//                 <CardHeader className="pb-3">
//                   <CardTitle className="flex items-center gap-3 text-lg">
//                     <div className="p-2 rounded-lg bg-green-500/10 text-green-700">
//                       <Globe size={20} />
//                     </div>
//                     Frameworks & Libraries
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {skills.frameworks.map((skill, skillIndex) => (
//                       <Badge 
//                         key={`frameworks-${skillIndex}`}
//                         variant="secondary" 
//                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
//                       >
//                         <span>{skill.icon}</span>
//                         {skill.name}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Second Row: Databases & Development Tools */}
//             <div className="grid md:grid-cols-2 gap-4 mb-4">
//               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.8s" }}>
//                 <CardHeader className="pb-3">
//                   <CardTitle className="flex items-center gap-3 text-lg">
//                     <div className="p-2 rounded-lg bg-purple-500/10 text-purple-700">
//                       <Database size={20} />
//                     </div>
//                     Databases
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {skills.databases.map((skill, skillIndex) => (
//                       <Badge 
//                         key={`databases-${skillIndex}`}
//                         variant="secondary" 
//                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
//                       >
//                         <span>{skill.icon}</span>
//                         {skill.name}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "0.9s" }}>
//                 <CardHeader className="pb-3">
//                   <CardTitle className="flex items-center gap-3 text-lg">
//                     <div className="p-2 rounded-lg bg-orange-500/10 text-orange-700">
//                       <Wrench size={20} />
//                     </div>
//                     Development Tools
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {skills.tools.map((skill, skillIndex) => (
//                       <Badge 
//                         key={`tools-${skillIndex}`}
//                         variant="secondary" 
//                         className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1"
//                       >
//                         <span>{skill.icon}</span>
//                         {skill.name}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Third Row: Team Leadership & API Testing */}
//             <div className="grid md:grid-cols-2 gap-4">
//               {additionalSkills.map((category, index) => (
//                 <Card 
//                   key={category.title} 
//                   className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 [animation-fill-mode:forwards]"
//                   style={{ animationDelay: `${1.0 + index * 0.1}s` }}
//                 >
//                   <CardHeader className="pb-3">
//                     <CardTitle className="flex items-center gap-3 text-lg">
//                       <div className={`p-2 rounded-lg ${category.color}`}>
//                         <category.icon size={20} />
//                       </div>
//                       {category.title}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex items-center">
//                       <div className="w-full">
//                         <div className="flex flex-wrap gap-3">
//                           {category.items.map((skill, skillIndex) => (
//                             <div
//                               key={`${category.title}-${skillIndex}`}
//                               className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
//                             >
//                               <div className={`p-1.5 rounded-full ${skill.bgColor}`}>
//                                 <skill.icon size={14} className={skill.iconColor} />
//                               </div>
//                               <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                                 {skill.name}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  Globe, 
  Wrench, 
  Users, 
  TestTube, 
  ChevronLeft, 
  ChevronRight,
  Target,
  CheckCircle,
  Zap,
  Server,
  Monitor,
  Brain,
  Clock,
  Send,
  Shield
} from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const sections = [
    {
      title: "Professional Summary",
      content: (
        <div className="space-y-4">
          {/* Mobile and Tablet version (sm and md screens) */}
          <div className="block lg:hidden">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Web Developer with 6 months of experience at Webgeon Results, skilled in React, 
              Tailwind CSS, and Next.js. Passionate about problem-solving, creating meaningful 
              digital experiences, and building responsive, user-centric solutions. Focused on 
              performance, accessibility, and modern web standards to deliver scalable, 
              maintainable, and future-ready applications.
            </p>
          </div>
          
          {/* Desktop version (lg screens and above) */}
          <div className="hidden lg:block space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Web Developer with 6 months of experience at Webgeon Results, skilled in building 
              responsive web applications using React, Tailwind CSS, and Next.js. Proficient in 
              developing clean, maintainable code and delivering user-centric solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Strong team collaborator with a focus on performance, accessibility, and modern web 
              standards to support scalable and efficient development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development has been driven by a passion for problem-solving and 
              creating meaningful digital experiences. I thrive in collaborative environments where 
              innovation meets practical implementation, consistently delivering projects that exceed 
              client expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in staying current with emerging technologies and industry best practices, 
              ensuring that every solution I develop is not only functional but also future-ready 
              and maintainable.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Key Strengths",
      content: (
        <div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm sm:text-base">Decision-making skills and team leadership</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm sm:text-base">Performance optimization and accessibility focus</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm sm:text-base">Clean, maintainable code practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm sm:text-base">Timely project delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm sm:text-base">Continuous learning and adaptation to new technologies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm sm:text-base">User experience optimization and responsive design</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Development Philosophy",
      content: (
        <div>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            I approach every project with a user-first mindset, ensuring that technical excellence 
            translates into intuitive and engaging user experiences. My goal is to bridge the gap 
            between complex functionality and seamless usability.
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
        { 
          name: "Decision-making skills", 
          icon: Brain, 
          iconColor: "text-purple-600",
          bgColor: "bg-purple-100 dark:bg-purple-900/20"
        },
        { 
          name: "Ensuring timely project delivery", 
          icon: Clock, 
          iconColor: "text-green-600",
          bgColor: "bg-green-100 dark:bg-green-900/20"
        }
      ],
      color: "bg-red-500/10 text-red-700",
      displayIcon: Target
    },
    {
      title: "API Testing",
      icon: TestTube,
      items: [
        { 
          name: "Postman API Testing", 
          icon: Send, 
          iconColor: "text-orange-600",
          bgColor: "bg-orange-100 dark:bg-orange-900/20"
        },
        { 
          name: "REST API Validation", 
          icon: Shield, 
          iconColor: "text-blue-600",
          bgColor: "bg-blue-100 dark:bg-blue-900/20"
        }
      ],
      color: "bg-indigo-500/10 text-indigo-700",
      displayIcon: Server
    }
  ];

  const skillCategories = [
    {
      title: "Languages & Scripting",
      icon: Code,
      items: skills.languages,
      color: "bg-blue-500/10 text-blue-700"
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      items: skills.frameworks,
      color: "bg-green-500/10 text-green-700"
    },
    {
      title: "Databases",
      icon: Database,
      items: skills.databases,
      color: "bg-purple-500/10 text-purple-700"
    },
    {
      title: "Development Tools",
      icon: Wrench,
      items: skills.tools,
      color: "bg-orange-500/10 text-orange-700"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 bg-background min-h-screen">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-delay-1 { animation-delay: 0.2s; }
        .animate-delay-2 { animation-delay: 0.4s; }
        .animate-delay-3 { animation-delay: 0.6s; }
        .animate-delay-4 { animation-delay: 0.8s; }
        .animate-delay-5 { animation-delay: 1.0s; }
        .animate-delay-6 { animation-delay: 1.2s; }
      `}</style>
      
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 lg:mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">About Me</h2>
          <div className="h-1 w-16 sm:w-20 lg:w-24 bg-primary mx-auto mb-6 lg:mb-8" />
        </div>

        <div className={`${isVisible ? 'animate-slide-left animate-delay-1' : 'opacity-0'}`}>
          {/* Professional Summary Box with Navigation */}
          <div className="relative mb-12 lg:mb-16">
            <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 rounded-2xl lg:rounded-3xl overflow-hidden max-w-5xl mx-auto">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="flex items-center justify-between mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                    disabled={currentSection === 0}
                    className="text-primary hover:bg-primary/10 rounded-full p-2 sm:p-3"
                  >
                    <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                  </Button>
                  
                  <div className="text-center flex-1 px-2 sm:px-4">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">
                      {sections[currentSection].title}
                    </h3>
                    <div className="flex justify-center gap-2 mt-4">
                      {sections.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            index === currentSection ? 'bg-primary' : 'bg-primary/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                    disabled={currentSection === sections.length - 1}
                    className="text-primary hover:bg-primary/10 rounded-full p-2 sm:p-3"
                  >
                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                  </Button>
                </div>
                
                <div className="min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center">
                  <div className="w-full transition-all duration-500 ease-in-out">
                    {sections[currentSection].content}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills & Proficiency Section */}
          <div className={`${isVisible ? 'animate-slide-right animate-delay-2' : 'opacity-0'}`}>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">Skills & Proficiency</h3>
            
            {/* First Row: Languages & Frameworks */}
            <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6 lg:grid-cols-2">
              <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-3' : 'opacity-0'}`}>
                <CardHeader className="pb-3 p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 text-blue-700 flex-shrink-0">
                      <Code size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <span className="min-w-0">Languages & Scripting</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, skillIndex) => (
                      <Badge 
                        key={`languages-${skillIndex}`}
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
                      >
                        <span>{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-4' : 'opacity-0'}`}>
                <CardHeader className="pb-3 p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-green-500/10 text-green-700 flex-shrink-0">
                      <Globe size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <span className="min-w-0">Frameworks & Libraries</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, skillIndex) => (
                      <Badge 
                        key={`frameworks-${skillIndex}`}
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
                      >
                        <span>{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Second Row: Databases & Development Tools */}
            <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6 lg:grid-cols-2">
              <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-5' : 'opacity-0'}`}>
                <CardHeader className="pb-3 p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-purple-500/10 text-purple-700 flex-shrink-0">
                      <Database size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <span className="min-w-0">Databases</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill, skillIndex) => (
                      <Badge 
                        key={`databases-${skillIndex}`}
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
                      >
                        <span>{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? 'animate-fade-up animate-delay-6' : 'opacity-0'}`}>
                <CardHeader className="pb-3 p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-orange-500/10 text-orange-700 flex-shrink-0">
                      <Wrench size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <span className="min-w-0">Development Tools</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, skillIndex) => (
                      <Badge 
                        key={`tools-${skillIndex}`}
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm"
                      >
                        <span>{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Third Row: Team Leadership & API Testing */}
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
              {additionalSkills.map((category, index) => (
                <Card 
                  key={category.title} 
                  className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${isVisible ? `animate-fade-up animate-delay-${5 + index}` : 'opacity-0'}`}
                >
                  <CardHeader className="pb-3 p-4 sm:p-6">
                    <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                      <div className={`p-1.5 sm:p-2 rounded-lg ${category.color} flex-shrink-0`}>
                        <category.icon size={16} className="sm:w-5 sm:h-5" />
                      </div>
                      <span className="min-w-0">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-col gap-3">
                      {category.items.map((skill, skillIndex) => (
                        <div
                          key={`${category.title}-${skillIndex}`}
                          className="flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                        >
                          <div className={`p-1.5 rounded-full ${skill.bgColor} flex-shrink-0`}>
                            <skill.icon size={12} className={`sm:w-3.5 sm:h-3.5 ${skill.iconColor}`} />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 min-w-0">
                            {skill.name}
                          </span>
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
    </section>
  );
};

export default About;