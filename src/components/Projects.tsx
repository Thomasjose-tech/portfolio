// // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Badge } from "@/components/ui/badge";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Calendar, ExternalLink, Github } from "lucide-react";

// // // // const Projects = () => {
// // // //   const projects = [
// // // //     {
// // // //       title: "Smart Pet Feeder",
// // // //       period: "Aug 2023 - Jan 2024",
// // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // //       features: [
// // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // //       ],
// // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // //       type: "Hardware & Software"
// // // //     },
// // // //     {
// // // //       title: "Multipurpose Agriculture Robot",
// // // //       period: "Mar 2024 - Feb 2025",
// // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // //       features: [
// // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // //       ],
// // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // //       type: "Robotics & IoT"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // // //       <div className="container mx-auto">
// // // //         <div className="text-center mb-16 animate-fade-in">
// // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid md:grid-cols-2 gap-8">
// // // //           {projects.map((project, index) => (
// // // //             <Card 
// // // //               key={project.title}
// // // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // // //               style={{ animationDelay: `${index * 0.2}s` }}
// // // //             >
// // // //               <CardHeader>
// // // //                 <div className="flex items-start justify-between mb-4">
// // // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // //                     {project.type}
// // // //                   </Badge>
// // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // //                     <Calendar size={16} className="mr-1" />
// // // //                     {project.period}
// // // //                   </div>
// // // //                 </div>
// // // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // //                   {project.title}
// // // //                 </CardTitle>
// // // //                 <CardDescription className="text-base leading-relaxed">
// // // //                   {project.description}
// // // //                 </CardDescription>
// // // //               </CardHeader>

// // // //               <CardContent className="space-y-6">
// // // //                 {/* Key Features */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // //                   <ul className="space-y-2">
// // // //                     {project.features.map((feature, featureIndex) => (
// // // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // //                         {feature}
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>

// // // //                 {/* Technologies */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // //                   <div className="flex flex-wrap gap-2">
// // // //                     {project.technologies.map((tech) => {
// // // //                       const getIcon = (techName: string) => {
// // // //                         switch(techName.toLowerCase()) {
// // // //                           case 'iot': return '🌐';
// // // //                           case 'web dashboard': return '📊';
// // // //                           case 'real-time monitoring': return '📡';
// // // //                           case 'automation': return '⚡';
// // // //                           case 'robotics': return '🤖';
// // // //                           case 'iot sensors': return '📱';
// // // //                           case 'embedded systems': return '🔧';
// // // //                           case 'remote control': return '📡';
// // // //                           default: return '💻';
// // // //                         }
// // // //                       };
                      
// // // //                       return (
// // // //                         <Badge 
// // // //                           key={tech} 
// // // //                           variant="secondary" 
// // // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // //                         >
// // // //                           <span className="text-xs">{getIcon(tech)}</span>
// // // //                           {tech}
// // // //                         </Badge>
// // // //                       );
// // // //                     })}
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Action Buttons */}
// // // //                 <div className="flex gap-3 pt-4">
// // // //                   <Button 
// // // //                     variant="default" 
// // // //                     size="sm" 
// // // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // //                   >
// // // //                     <ExternalLink size={12} className="mr-1" />
// // // //                     View Details
// // // //                   </Button>
// // // //                   <Button 
// // // //                     variant="outline" 
// // // //                     size="sm" 
// // // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // //                     onClick={() => {
// // // //                       const url = project.title === "Smart Pet Feeder" 
// // // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // //                         : "https://github.com/Thomasjose-tech";
// // // //                       window.open(url, '_blank');
// // // //                     }}
// // // //                   >
// // // //                     <Github size={16} className="mr-2" />
// // // //                     Code
// // // //                   </Button>
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           ))}
// // // //         </div>

// // // //         {/* Call to Action */}
// // // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // //           <p className="text-muted-foreground mb-6">
// // // //             Interested in seeing more of my work or collaborating on a project?
// // // //           </p>
// // // //           <Button 
// // // //             variant="default" 
// // // //             size="lg" 
// // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // //           >
// // // //             Let's Work Together
// // // //           </Button>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Projects;
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";
// // // import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

// // // const Projects = () => {
// // //   const projects = [
// // //     {
// // //       title: "Smart Pet Feeder",
// // //       period: "Aug 2023 - Jan 2024",
// // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // //       features: [
// // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // //       ],
// // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // //       type: "Hardware & Software",
// // //       pdfUrl: null // Will be updated with actual PDF URL
// // //     },
// // //     {
// // //       title: "Multipurpose Agriculture Robot",
// // //       period: "Mar 2024 - Feb 2025",
// // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // //       features: [
// // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // //       ],
// // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // //       type: "Robotics & IoT",
// // //       pdfUrl: null // Will be updated with actual PDF URL
// // //     }
// // //   ];

// // //   const handleViewDetails = (project) => {
// // //     if (project.pdfUrl) {
// // //       // Open PDF in new tab
// // //       window.open(project.pdfUrl, '_blank');
// // //     } else {
// // //       // Placeholder action - you can customize this
// // //       alert(`PDF for ${project.title} will be available soon!`);
// // //     }
// // //   };

// // //   return (
// // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // //       <div className="container mx-auto">
// // //         <div className="text-center mb-16 animate-fade-in">
// // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // //             Innovative solutions combining hardware and software to solve real-world problems
// // //           </p>
// // //         </div>

// // //         <div className="grid md:grid-cols-2 gap-8">
// // //           {projects.map((project, index) => (
// // //             <Card 
// // //               key={project.title}
// // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // //               style={{ animationDelay: `${index * 0.2}s` }}
// // //             >
// // //               <CardHeader>
// // //                 <div className="flex items-start justify-between mb-4">
// // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // //                     {project.type}
// // //                   </Badge>
// // //                   <div className="flex items-center text-muted-foreground text-sm">
// // //                     <Calendar size={16} className="mr-1" />
// // //                     {project.period}
// // //                   </div>
// // //                 </div>
// // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // //                   {project.title}
// // //                 </CardTitle>
// // //                 <CardDescription className="text-base leading-relaxed">
// // //                   {project.description}
// // //                 </CardDescription>
// // //               </CardHeader>

// // //               <CardContent className="space-y-6">
// // //                 {/* Key Features */}
// // //                 <div>
// // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // //                   <ul className="space-y-2">
// // //                     {project.features.map((feature, featureIndex) => (
// // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // //                         {feature}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>

// // //                 {/* Technologies */}
// // //                 <div>
// // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {project.technologies.map((tech) => {
// // //                       const getIcon = (techName) => {
// // //                         switch(techName.toLowerCase()) {
// // //                           case 'iot': return '🌐';
// // //                           case 'web dashboard': return '📊';
// // //                           case 'real-time monitoring': return '📡';
// // //                           case 'automation': return '⚡';
// // //                           case 'robotics': return '🤖';
// // //                           case 'iot sensors': return '📱';
// // //                           case 'embedded systems': return '🔧';
// // //                           case 'remote control': return '📡';
// // //                           default: return '💻';
// // //                         }
// // //                       };
                      
// // //                       return (
// // //                         <Badge 
// // //                           key={tech} 
// // //                           variant="secondary" 
// // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // //                         >
// // //                           <span className="text-xs">{getIcon(tech)}</span>
// // //                           {tech}
// // //                         </Badge>
// // //                       );
// // //                     })}
// // //                   </div>
// // //                 </div>

// // //                 {/* Action Buttons */}
// // //                 <div className="flex gap-3 pt-4">
// // //                   <Button 
// // //                     variant="default" 
// // //                     size="sm" 
// // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // //                     onClick={() => handleViewDetails(project)}
// // //                   >
// // //                     <FileText size={12} className="mr-1" />
// // //                     View Details
// // //                   </Button>
// // //                   <Button 
// // //                     variant="outline" 
// // //                     size="sm" 
// // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // //                     onClick={() => {
// // //                       const url = project.title === "Smart Pet Feeder" 
// // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // //                         : "https://github.com/Thomasjose-tech";
// // //                       window.open(url, '_blank');
// // //                     }}
// // //                   >
// // //                     <Github size={16} className="mr-2" />
// // //                     Code
// // //                   </Button>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           ))}
// // //         </div>

// // //         {/* Call to Action */}
// // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // //           <p className="text-muted-foreground mb-6">
// // //             Interested in seeing more of my work or collaborating on a project?
// // //           </p>
// // //           <Button 
// // //             variant="default" 
// // //             size="lg" 
// // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // //           >
// // //             Let's Work Together
// // //           </Button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Projects;
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

// // const Projects = () => {
// //   const projects = [
// //     {
// //       title: "Smart Pet Feeder",
// //       period: "Aug 2023 - Jan 2024",
// //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// //       features: [
// //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// //       ],
// //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// //       type: "Hardware & Software",
// //       pdfUrl: "/src/assets/certificates/thomas.pdf"
// //     },
// //     {
// //       title: "Multipurpose Agriculture Robot",
// //       period: "Mar 2024 - Feb 2025",
// //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// //       features: [
// //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// //       ],
// //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// //       type: "Robotics & IoT",
// //       pdfUrl: null // Will be updated with actual PDF URL
// //     }
// //   ];

// //   const handleViewDetails = (project) => {
// //     if (project.pdfUrl) {
// //       // Open PDF in new tab
// //       window.open(project.pdfUrl, '_blank');
// //     } else {
// //       // Placeholder action - you can customize this
// //       alert(`PDF for ${project.title} will be available soon!`);
// //     }
// //   };

// //   return (
// //     <section id="projects" className="py-20 px-4 bg-muted/30">
// //       <div className="container mx-auto">
// //         <div className="text-center mb-16 animate-fade-in">
// //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// //             Innovative solutions combining hardware and software to solve real-world problems
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-8">
// //           {projects.map((project, index) => (
// //             <Card 
// //               key={project.title}
// //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// //               style={{ animationDelay: `${index * 0.2}s` }}
// //             >
// //               <CardHeader>
// //                 <div className="flex items-start justify-between mb-4">
// //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// //                     {project.type}
// //                   </Badge>
// //                   <div className="flex items-center text-muted-foreground text-sm">
// //                     <Calendar size={16} className="mr-1" />
// //                     {project.period}
// //                   </div>
// //                 </div>
// //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// //                   {project.title}
// //                 </CardTitle>
// //                 <CardDescription className="text-base leading-relaxed">
// //                   {project.description}
// //                 </CardDescription>
// //               </CardHeader>

// //               <CardContent className="space-y-6">
// //                 {/* Key Features */}
// //                 <div>
// //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// //                   <ul className="space-y-2">
// //                     {project.features.map((feature, featureIndex) => (
// //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// //                         {feature}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>

// //                 {/* Technologies */}
// //                 <div>
// //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// //                   <div className="flex flex-wrap gap-2">
// //                     {project.technologies.map((tech) => {
// //                       const getIcon = (techName) => {
// //                         switch(techName.toLowerCase()) {
// //                           case 'iot': return '🌐';
// //                           case 'web dashboard': return '📊';
// //                           case 'real-time monitoring': return '📡';
// //                           case 'automation': return '⚡';
// //                           case 'robotics': return '🤖';
// //                           case 'iot sensors': return '📱';
// //                           case 'embedded systems': return '🔧';
// //                           case 'remote control': return '📡';
// //                           default: return '💻';
// //                         }
// //                       };
                      
// //                       return (
// //                         <Badge 
// //                           key={tech} 
// //                           variant="secondary" 
// //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// //                         >
// //                           <span className="text-xs">{getIcon(tech)}</span>
// //                           {tech}
// //                         </Badge>
// //                       );
// //                     })}
// //                   </div>
// //                 </div>

// //                 {/* Action Buttons */}
// //                 <div className="flex gap-3 pt-4">
// //                   <Button 
// //                     variant="default" 
// //                     size="sm" 
// //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// //                     onClick={() => handleViewDetails(project)}
// //                   >
// //                     <FileText size={12} className="mr-1" />
// //                     View Details
// //                   </Button>
// //                   <Button 
// //                     variant="outline" 
// //                     size="sm" 
// //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// //                     onClick={() => {
// //                       const url = project.title === "Smart Pet Feeder" 
// //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// //                         : "https://github.com/Thomasjose-tech";
// //                       window.open(url, '_blank');
// //                     }}
// //                   >
// //                     <Github size={16} className="mr-2" />
// //                     Code
// //                   </Button>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>

// //         {/* Call to Action */}
// //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// //           <p className="text-muted-foreground mb-6">
// //             Interested in seeing more of my work or collaborating on a project?
// //           </p>
// //           <Button 
// //             variant="default" 
// //             size="lg" 
// //             className="bg-primary hover:bg-primary/90 shadow-glow"
// //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// //           >
// //             Let's Work Together
// //           </Button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Smart Pet Feeder",
//       period: "Aug 2023 - Jan 2024",
//       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
//       features: [
//         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
//         "Integrated a web-based dashboard for real-time remote monitoring and control",
//         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
//       ],
//       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
//       type: "Hardware & Software",
//       pdfUrl: "/src/assets/certificates/thomas.pdf"
//     },
//     {
//       title: "Multipurpose Agriculture Robot",
//       period: "Mar 2024 - Feb 2025",
//       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
//       features: [
//         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
//         "Integrated sensors and actuators to automate processes and reduce manual labor",
//         "Enhanced farming efficiency and productivity through the application of embedded systems",
//         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
//       ],
//       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
//       type: "Robotics & IoT",
//       pdfUrl: "/src/assets/certificates/grp11.pdf"
//     }
//   ];

//   const handleViewDetails = (project) => {
//     if (project.pdfUrl) {
//       // Open PDF in new tab
//       window.open(project.pdfUrl, '_blank');
//     } else {
//       // Placeholder action - you can customize this
//       alert(`PDF for ${project.title} will be available soon!`);
//     }
//   };

//   return (
//     <section id="projects" className="py-20 px-4 bg-muted/30">
//       <div className="container mx-auto">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
//           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Innovative solutions combining hardware and software to solve real-world problems
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Card 
//               key={project.title}
//               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <CardHeader>
//                 <div className="flex items-start justify-between mb-4">
//                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
//                     {project.type}
//                   </Badge>
//                   <div className="flex items-center text-muted-foreground text-sm">
//                     <Calendar size={16} className="mr-1" />
//                     {project.period}
//                   </div>
//                 </div>
//                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
//                   {project.title}
//                 </CardTitle>
//                 <CardDescription className="text-base leading-relaxed">
//                   {project.description}
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="space-y-6">
//                 {/* Key Features */}
//                 <div>
//                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
//                   <ul className="space-y-2">
//                     {project.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
//                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Technologies */}
//                 <div>
//                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => {
//                       const getIcon = (techName) => {
//                         switch(techName.toLowerCase()) {
//                           case 'iot': return '🌐';
//                           case 'web dashboard': return '📊';
//                           case 'real-time monitoring': return '📡';
//                           case 'automation': return '⚡';
//                           case 'robotics': return '🤖';
//                           case 'iot sensors': return '📱';
//                           case 'embedded systems': return '🔧';
//                           case 'remote control': return '📡';
//                           default: return '💻';
//                         }
//                       };
                      
//                       return (
//                         <Badge 
//                           key={tech} 
//                           variant="secondary" 
//                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
//                         >
//                           <span className="text-xs">{getIcon(tech)}</span>
//                           {tech}
//                         </Badge>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-3 pt-4">
//                   <Button 
//                     variant="default" 
//                     size="sm" 
//                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
//                     onClick={() => handleViewDetails(project)}
//                   >
//                     <FileText size={12} className="mr-1" />
//                     View Details
//                   </Button>
//                   <Button 
//                     variant="outline" 
//                     size="sm" 
//                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
//                     onClick={() => {
//                       const url = project.title === "Smart Pet Feeder" 
//                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
//                         : "https://github.com/Thomasjose-tech";
//                       window.open(url, '_blank');
//                     }}
//                   >
//                     <Github size={16} className="mr-2" />
//                     Code
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
//           <p className="text-muted-foreground mb-6">
//             Interested in seeing more of my work or collaborating on a project?
//           </p>
//           <Button 
//             variant="default" 
//             size="lg" 
//             className="bg-primary hover:bg-primary/90 shadow-glow"
//             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//           >
//             Let's Work Together
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Pet Feeder",
      period: "Aug 2023 - Jan 2024",
      description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
      features: [
        "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
        "Integrated a web-based dashboard for real-time remote monitoring and control",
        "Ensured consistent feeding cycles, enhancing convenience for pet owners"
      ],
      technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
      type: "Hardware & Software",
      pdfUrl: "/assets/certificates/thomas.pdf"
    },
    {
      title: "Multipurpose Agriculture Robot",
      period: "Mar 2024 - Feb 2025",
      description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
      features: [
        "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
        "Integrated sensors and actuators to automate processes and reduce manual labor",
        "Enhanced farming efficiency and productivity through the application of embedded systems",
        "Enabled remote operation and monitoring, reducing the need for constant human supervision"
      ],
      technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
      type: "Robotics & IoT",
      pdfUrl: "/assets/certificates/grp11.pdf"
    }
  ];

  const handleViewDetails = (project) => {
    if (project.pdfUrl) {
      // Open PDF in new tab
      window.open(project.pdfUrl, '_blank');
    } else {
      // Placeholder action - you can customize this
      alert(`PDF for ${project.title} will be available soon!`);
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining hardware and software to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {project.type}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.period}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => {
                      const getIcon = (techName) => {
                        switch(techName.toLowerCase()) {
                          case 'iot': return '🌐';
                          case 'web dashboard': return '📊';
                          case 'real-time monitoring': return '📡';
                          case 'automation': return '⚡';
                          case 'robotics': return '🤖';
                          case 'iot sensors': return '📱';
                          case 'embedded systems': return '🔧';
                          case 'remote control': return '📡';
                          default: return '💻';
                        }
                      };
                      
                      return (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
                        >
                          <span className="text-xs">{getIcon(tech)}</span>
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
                    onClick={() => handleViewDetails(project)}
                  >
                    <FileText size={12} className="mr-1" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
                    onClick={() => {
                      const url = project.title === "Smart Pet Feeder" 
                        ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
                        : "https://github.com/Thomasjose-tech";
                      window.open(url, '_blank');
                    }}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary hover:bg-primary/90 shadow-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;