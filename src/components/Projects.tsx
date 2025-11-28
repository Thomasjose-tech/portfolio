// // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // import { Calendar, ExternalLink, Github } from "lucide-react";

// // // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // // //   const projects = [
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // // // //       features: [
// // // // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // // // //       ],
// // // // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // // // //       type: "Hardware & Software"
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // // // //       features: [
// // // // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // // // //       ],
// // // // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // // // //       type: "Robotics & IoT"
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   ];

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // // // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // // //           </p>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // // //             <Card 
// // // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // // // // // // // // // // // //               style={{ animationDelay: `${index * 0.2}s` }}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <CardHeader>
// // // // // // // // // // // // //                 <div className="flex items-start justify-between mb-4">
// // // // // // // // // // // // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // // // // //                     {project.type}
// // // // // // // // // // // // //                   </Badge>
// // // // // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // // // // //                     {project.period}
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // // // // //                   {project.title}
// // // // // // // // // // // // //                 </CardTitle>
// // // // // // // // // // // // //                 <CardDescription className="text-base leading-relaxed">
// // // // // // // // // // // // //                   {project.description}
// // // // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // // // //               </CardHeader>

// // // // // // // // // // // // //               <CardContent className="space-y-6">
// // // // // // // // // // // // //                 {/* Key Features */}
// // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // // // // //                   <ul className="space-y-2">
// // // // // // // // // // // // //                     {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // // // //                         {feature}
// // // // // // // // // // // // //                       </li>
// // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // //                   </ul>
// // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // //                 {/* Technologies */}
// // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // //                     {project.technologies.map((tech) => {
// // // // // // // // // // // // //                       const getIcon = (techName: string) => {
// // // // // // // // // // // // //                         switch(techName.toLowerCase()) {
// // // // // // // // // // // // //                           case 'iot': return '🌐';
// // // // // // // // // // // // //                           case 'web dashboard': return '📊';
// // // // // // // // // // // // //                           case 'real-time monitoring': return '📡';
// // // // // // // // // // // // //                           case 'automation': return '⚡';
// // // // // // // // // // // // //                           case 'robotics': return '🤖';
// // // // // // // // // // // // //                           case 'iot sensors': return '📱';
// // // // // // // // // // // // //                           case 'embedded systems': return '🔧';
// // // // // // // // // // // // //                           case 'remote control': return '📡';
// // // // // // // // // // // // //                           default: return '💻';
// // // // // // // // // // // // //                         }
// // // // // // // // // // // // //                       };
                      
// // // // // // // // // // // // //                       return (
// // // // // // // // // // // // //                         <Badge 
// // // // // // // // // // // // //                           key={tech} 
// // // // // // // // // // // // //                           variant="secondary" 
// // // // // // // // // // // // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // // // // //                         >
// // // // // // // // // // // // //                           <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // // //                           {tech}
// // // // // // // // // // // // //                         </Badge>
// // // // // // // // // // // // //                       );
// // // // // // // // // // // // //                     })}
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // //                 {/* Action Buttons */}
// // // // // // // // // // // // //                 <div className="flex gap-3 pt-4">
// // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // //                     variant="default" 
// // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     <ExternalLink size={12} className="mr-1" />
// // // // // // // // // // // // //                     View Details
// // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // //                     variant="outline" 
// // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // // // //                     onClick={() => {
// // // // // // // // // // // // //                       const url = project.title === "Smart Pet Feeder" 
// // // // // // // // // // // // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // //                         : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // //                       window.open(url, '_blank');
// // // // // // // // // // // // //                     }}
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     <Github size={16} className="mr-2" />
// // // // // // // // // // // // //                     Code
// // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // // //           </p>
// // // // // // // // // // // // //           <Button 
// // // // // // // // // // // // //             variant="default" 
// // // // // // // // // // // // //             size="lg" 
// // // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </section>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Projects;
// // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

// // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // //   const projects = [
// // // // // // // // // // // //     {
// // // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // // //       features: [
// // // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // // //       ],
// // // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // // // //       pdfUrl: null // Will be updated with actual PDF URL
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // // //       features: [
// // // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // // //       ],
// // // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // // // // //       pdfUrl: null // Will be updated with actual PDF URL
// // // // // // // // // // // //     }
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // // //       // Open PDF in new tab
// // // // // // // // // // // //       window.open(project.pdfUrl, '_blank');
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       // Placeholder action - you can customize this
// // // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // //             <Card 
// // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // // // // // // // // // // //               style={{ animationDelay: `${index * 0.2}s` }}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               <CardHeader>
// // // // // // // // // // // //                 <div className="flex items-start justify-between mb-4">
// // // // // // // // // // // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // // // //                     {project.type}
// // // // // // // // // // // //                   </Badge>
// // // // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // // // //                     {project.period}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // // // //                   {project.title}
// // // // // // // // // // // //                 </CardTitle>
// // // // // // // // // // // //                 <CardDescription className="text-base leading-relaxed">
// // // // // // // // // // // //                   {project.description}
// // // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // // //               </CardHeader>

// // // // // // // // // // // //               <CardContent className="space-y-6">
// // // // // // // // // // // //                 {/* Key Features */}
// // // // // // // // // // // //                 <div>
// // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // // // //                   <ul className="space-y-2">
// // // // // // // // // // // //                     {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // // //                         {feature}
// // // // // // // // // // // //                       </li>
// // // // // // // // // // // //                     ))}
// // // // // // // // // // // //                   </ul>
// // // // // // // // // // // //                 </div>

// // // // // // // // // // // //                 {/* Technologies */}
// // // // // // // // // // // //                 <div>
// // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // //                     {project.technologies.map((tech) => {
// // // // // // // // // // // //                       const getIcon = (techName) => {
// // // // // // // // // // // //                         switch(techName.toLowerCase()) {
// // // // // // // // // // // //                           case 'iot': return '🌐';
// // // // // // // // // // // //                           case 'web dashboard': return '📊';
// // // // // // // // // // // //                           case 'real-time monitoring': return '📡';
// // // // // // // // // // // //                           case 'automation': return '⚡';
// // // // // // // // // // // //                           case 'robotics': return '🤖';
// // // // // // // // // // // //                           case 'iot sensors': return '📱';
// // // // // // // // // // // //                           case 'embedded systems': return '🔧';
// // // // // // // // // // // //                           case 'remote control': return '📡';
// // // // // // // // // // // //                           default: return '💻';
// // // // // // // // // // // //                         }
// // // // // // // // // // // //                       };
                      
// // // // // // // // // // // //                       return (
// // // // // // // // // // // //                         <Badge 
// // // // // // // // // // // //                           key={tech} 
// // // // // // // // // // // //                           variant="secondary" 
// // // // // // // // // // // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // // // //                         >
// // // // // // // // // // // //                           <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // //                           {tech}
// // // // // // // // // // // //                         </Badge>
// // // // // // // // // // // //                       );
// // // // // // // // // // // //                     })}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>

// // // // // // // // // // // //                 {/* Action Buttons */}
// // // // // // // // // // // //                 <div className="flex gap-3 pt-4">
// // // // // // // // // // // //                   <Button 
// // // // // // // // // // // //                     variant="default" 
// // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // // // //                     onClick={() => handleViewDetails(project)}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     <FileText size={12} className="mr-1" />
// // // // // // // // // // // //                     View Details
// // // // // // // // // // // //                   </Button>
// // // // // // // // // // // //                   <Button 
// // // // // // // // // // // //                     variant="outline" 
// // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // // //                     onClick={() => {
// // // // // // // // // // // //                       const url = project.title === "Smart Pet Feeder" 
// // // // // // // // // // // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // //                         : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // //                       window.open(url, '_blank');
// // // // // // // // // // // //                     }}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     <Github size={16} className="mr-2" />
// // // // // // // // // // // //                     Code
// // // // // // // // // // // //                   </Button>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // //             </Card>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //           <Button 
// // // // // // // // // // // //             variant="default" 
// // // // // // // // // // // //             size="lg" 
// // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // //           </Button>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </section>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Projects;
// // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

// // // // // // // // // // // const Projects = () => {
// // // // // // // // // // //   const projects = [
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // //       features: [
// // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // //       ],
// // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // // //       pdfUrl: "/src/assets/certificates/thomas.pdf"
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // //       features: [
// // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // //       ],
// // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // // // //       pdfUrl: null // Will be updated with actual PDF URL
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // //       // Open PDF in new tab
// // // // // // // // // // //       window.open(project.pdfUrl, '_blank');
// // // // // // // // // // //     } else {
// // // // // // // // // // //       // Placeholder action - you can customize this
// // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // //             <Card 
// // // // // // // // // // //               key={project.title}
// // // // // // // // // // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // // // // // // // // // //               style={{ animationDelay: `${index * 0.2}s` }}
// // // // // // // // // // //             >
// // // // // // // // // // //               <CardHeader>
// // // // // // // // // // //                 <div className="flex items-start justify-between mb-4">
// // // // // // // // // // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // // //                     {project.type}
// // // // // // // // // // //                   </Badge>
// // // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // // //                     {project.period}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // // //                   {project.title}
// // // // // // // // // // //                 </CardTitle>
// // // // // // // // // // //                 <CardDescription className="text-base leading-relaxed">
// // // // // // // // // // //                   {project.description}
// // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // //               </CardHeader>

// // // // // // // // // // //               <CardContent className="space-y-6">
// // // // // // // // // // //                 {/* Key Features */}
// // // // // // // // // // //                 <div>
// // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // // //                   <ul className="space-y-2">
// // // // // // // // // // //                     {project.features.map((feature, featureIndex) => (
// // // // // // // // // // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // //                         {feature}
// // // // // // // // // // //                       </li>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </ul>
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 {/* Technologies */}
// // // // // // // // // // //                 <div>
// // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                     {project.technologies.map((tech) => {
// // // // // // // // // // //                       const getIcon = (techName) => {
// // // // // // // // // // //                         switch(techName.toLowerCase()) {
// // // // // // // // // // //                           case 'iot': return '🌐';
// // // // // // // // // // //                           case 'web dashboard': return '📊';
// // // // // // // // // // //                           case 'real-time monitoring': return '📡';
// // // // // // // // // // //                           case 'automation': return '⚡';
// // // // // // // // // // //                           case 'robotics': return '🤖';
// // // // // // // // // // //                           case 'iot sensors': return '📱';
// // // // // // // // // // //                           case 'embedded systems': return '🔧';
// // // // // // // // // // //                           case 'remote control': return '📡';
// // // // // // // // // // //                           default: return '💻';
// // // // // // // // // // //                         }
// // // // // // // // // // //                       };
                      
// // // // // // // // // // //                       return (
// // // // // // // // // // //                         <Badge 
// // // // // // // // // // //                           key={tech} 
// // // // // // // // // // //                           variant="secondary" 
// // // // // // // // // // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // //                           {tech}
// // // // // // // // // // //                         </Badge>
// // // // // // // // // // //                       );
// // // // // // // // // // //                     })}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 {/* Action Buttons */}
// // // // // // // // // // //                 <div className="flex gap-3 pt-4">
// // // // // // // // // // //                   <Button 
// // // // // // // // // // //                     variant="default" 
// // // // // // // // // // //                     size="sm" 
// // // // // // // // // // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // // //                     onClick={() => handleViewDetails(project)}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <FileText size={12} className="mr-1" />
// // // // // // // // // // //                     View Details
// // // // // // // // // // //                   </Button>
// // // // // // // // // // //                   <Button 
// // // // // // // // // // //                     variant="outline" 
// // // // // // // // // // //                     size="sm" 
// // // // // // // // // // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // //                     onClick={() => {
// // // // // // // // // // //                       const url = project.title === "Smart Pet Feeder" 
// // // // // // // // // // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // //                         : "https://github.com/Thomasjose-tech";
// // // // // // // // // // //                       window.open(url, '_blank');
// // // // // // // // // // //                     }}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Github size={16} className="mr-2" />
// // // // // // // // // // //                     Code
// // // // // // // // // // //                   </Button>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // //           </p>
// // // // // // // // // // //           <Button 
// // // // // // // // // // //             variant="default" 
// // // // // // // // // // //             size="lg" 
// // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // //           >
// // // // // // // // // // //             Let's Work Together
// // // // // // // // // // //           </Button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Projects;
// // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

// // // // // // // // // // const Projects = () => {
// // // // // // // // // //   const projects = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // //       features: [
// // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // //       pdfUrl: "/src/assets/certificates/thomas.pdf"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // //       features: [
// // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // // //       pdfUrl: "/src/assets/certificates/grp11.pdf"
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // //       // Open PDF in new tab
// // // // // // // // // //       window.open(project.pdfUrl, '_blank');
// // // // // // // // // //     } else {
// // // // // // // // // //       // Placeholder action - you can customize this
// // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // //           </p>
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // //             <Card 
// // // // // // // // // //               key={project.title}
// // // // // // // // // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // // // // // // // // //               style={{ animationDelay: `${index * 0.2}s` }}
// // // // // // // // // //             >
// // // // // // // // // //               <CardHeader>
// // // // // // // // // //                 <div className="flex items-start justify-between mb-4">
// // // // // // // // // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // //                     {project.type}
// // // // // // // // // //                   </Badge>
// // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // //                     {project.period}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // //                   {project.title}
// // // // // // // // // //                 </CardTitle>
// // // // // // // // // //                 <CardDescription className="text-base leading-relaxed">
// // // // // // // // // //                   {project.description}
// // // // // // // // // //                 </CardDescription>
// // // // // // // // // //               </CardHeader>

// // // // // // // // // //               <CardContent className="space-y-6">
// // // // // // // // // //                 {/* Key Features */}
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // //                   <ul className="space-y-2">
// // // // // // // // // //                     {project.features.map((feature, featureIndex) => (
// // // // // // // // // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // //                         {feature}
// // // // // // // // // //                       </li>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </ul>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* Technologies */}
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // //                     {project.technologies.map((tech) => {
// // // // // // // // // //                       const getIcon = (techName) => {
// // // // // // // // // //                         switch(techName.toLowerCase()) {
// // // // // // // // // //                           case 'iot': return '🌐';
// // // // // // // // // //                           case 'web dashboard': return '📊';
// // // // // // // // // //                           case 'real-time monitoring': return '📡';
// // // // // // // // // //                           case 'automation': return '⚡';
// // // // // // // // // //                           case 'robotics': return '🤖';
// // // // // // // // // //                           case 'iot sensors': return '📱';
// // // // // // // // // //                           case 'embedded systems': return '🔧';
// // // // // // // // // //                           case 'remote control': return '📡';
// // // // // // // // // //                           default: return '💻';
// // // // // // // // // //                         }
// // // // // // // // // //                       };
                      
// // // // // // // // // //                       return (
// // // // // // // // // //                         <Badge 
// // // // // // // // // //                           key={tech} 
// // // // // // // // // //                           variant="secondary" 
// // // // // // // // // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // //                         >
// // // // // // // // // //                           <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // //                           {tech}
// // // // // // // // // //                         </Badge>
// // // // // // // // // //                       );
// // // // // // // // // //                     })}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* Action Buttons */}
// // // // // // // // // //                 <div className="flex gap-3 pt-4">
// // // // // // // // // //                   <Button 
// // // // // // // // // //                     variant="default" 
// // // // // // // // // //                     size="sm" 
// // // // // // // // // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // //                     onClick={() => handleViewDetails(project)}
// // // // // // // // // //                   >
// // // // // // // // // //                     <FileText size={12} className="mr-1" />
// // // // // // // // // //                     View Details
// // // // // // // // // //                   </Button>
// // // // // // // // // //                   <Button 
// // // // // // // // // //                     variant="outline" 
// // // // // // // // // //                     size="sm" 
// // // // // // // // // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // //                     onClick={() => {
// // // // // // // // // //                       const url = project.title === "Smart Pet Feeder" 
// // // // // // // // // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // //                         : "https://github.com/Thomasjose-tech";
// // // // // // // // // //                       window.open(url, '_blank');
// // // // // // // // // //                     }}
// // // // // // // // // //                   >
// // // // // // // // // //                     <Github size={16} className="mr-2" />
// // // // // // // // // //                     Code
// // // // // // // // // //                   </Button>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardContent>
// // // // // // // // // //             </Card>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // //           </p>
// // // // // // // // // //           <Button 
// // // // // // // // // //             variant="default" 
// // // // // // // // // //             size="lg" 
// // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // //           >
// // // // // // // // // //             Let's Work Together
// // // // // // // // // //           </Button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Projects;
// // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

// // // // // // // // // // const Projects = () => {
// // // // // // // // // //   const projects = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // //       features: [
// // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // //       features: [
// // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf"
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // //       // Open PDF in new tab
// // // // // // // // // //       window.open(project.pdfUrl, '_blank');
// // // // // // // // // //     } else {
// // // // // // // // // //       // Placeholder action - you can customize this
// // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // //           </p>
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // //             <Card 
// // // // // // // // // //               key={project.title}
// // // // // // // // // //               className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // // // // // // // // //               style={{ animationDelay: `${index * 0.2}s` }}
// // // // // // // // // //             >
// // // // // // // // // //               <CardHeader>
// // // // // // // // // //                 <div className="flex items-start justify-between mb-4">
// // // // // // // // // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // //                     {project.type}
// // // // // // // // // //                   </Badge>
// // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // //                     {project.period}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // //                   {project.title}
// // // // // // // // // //                 </CardTitle>
// // // // // // // // // //                 <CardDescription className="text-base leading-relaxed">
// // // // // // // // // //                   {project.description}
// // // // // // // // // //                 </CardDescription>
// // // // // // // // // //               </CardHeader>

// // // // // // // // // //               <CardContent className="space-y-6">
// // // // // // // // // //                 {/* Key Features */}
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // //                   <ul className="space-y-2">
// // // // // // // // // //                     {project.features.map((feature, featureIndex) => (
// // // // // // // // // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // //                         {feature}
// // // // // // // // // //                       </li>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </ul>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* Technologies */}
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // //                     {project.technologies.map((tech) => {
// // // // // // // // // //                       const getIcon = (techName) => {
// // // // // // // // // //                         switch(techName.toLowerCase()) {
// // // // // // // // // //                           case 'iot': return '🌐';
// // // // // // // // // //                           case 'web dashboard': return '📊';
// // // // // // // // // //                           case 'real-time monitoring': return '📡';
// // // // // // // // // //                           case 'automation': return '⚡';
// // // // // // // // // //                           case 'robotics': return '🤖';
// // // // // // // // // //                           case 'iot sensors': return '📱';
// // // // // // // // // //                           case 'embedded systems': return '🔧';
// // // // // // // // // //                           case 'remote control': return '📡';
// // // // // // // // // //                           default: return '💻';
// // // // // // // // // //                         }
// // // // // // // // // //                       };
                      
// // // // // // // // // //                       return (
// // // // // // // // // //                         <Badge 
// // // // // // // // // //                           key={tech} 
// // // // // // // // // //                           variant="secondary" 
// // // // // // // // // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // //                         >
// // // // // // // // // //                           <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // //                           {tech}
// // // // // // // // // //                         </Badge>
// // // // // // // // // //                       );
// // // // // // // // // //                     })}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* Action Buttons */}
// // // // // // // // // //                 <div className="flex gap-3 pt-4">
// // // // // // // // // //                   <Button 
// // // // // // // // // //                     variant="default" 
// // // // // // // // // //                     size="sm" 
// // // // // // // // // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // //                     onClick={() => handleViewDetails(project)}
// // // // // // // // // //                   >
// // // // // // // // // //                     <FileText size={12} className="mr-1" />
// // // // // // // // // //                     View Details
// // // // // // // // // //                   </Button>
// // // // // // // // // //                   <Button 
// // // // // // // // // //                     variant="outline" 
// // // // // // // // // //                     size="sm" 
// // // // // // // // // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // //                     onClick={() => {
// // // // // // // // // //                       const url = project.title === "Smart Pet Feeder" 
// // // // // // // // // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // //                         : "https://github.com/Thomasjose-tech";
// // // // // // // // // //                       window.open(url, '_blank');
// // // // // // // // // //                     }}
// // // // // // // // // //                   >
// // // // // // // // // //                     <Github size={16} className="mr-2" />
// // // // // // // // // //                     Code
// // // // // // // // // //                   </Button>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardContent>
// // // // // // // // // //             </Card>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // //           </p>
// // // // // // // // // //           <Button 
// // // // // // // // // //             variant="default" 
// // // // // // // // // //             size="lg" 
// // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // //           >
// // // // // // // // // //             Let's Work Together
// // // // // // // // // //           </Button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Projects;
// // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // const Projects = () => {
// // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // // //   const projectRefs = useRef([]);

// // // // // // // // // //   const projects = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // //       features: [
// // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // //       features: [
// // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf"
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // //       (entries) => {
// // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // //           if (entry.isIntersecting && !isVisible) {
// // // // // // // // // //             setIsVisible(true);
            
// // // // // // // // // //             // Faster staggered animations
// // // // // // // // // //             projectRefs.current.forEach((projectRef, index) => {
// // // // // // // // // //               if (projectRef) {
// // // // // // // // // //                 setTimeout(() => {
// // // // // // // // // //                   projectRef.style.opacity = "1";
// // // // // // // // // //                   projectRef.style.transform = "translateY(0)";
// // // // // // // // // //                 }, index * 150); // Reduced from 300ms to 150ms
// // // // // // // // // //                 }
// // // // // // // // // //               });
// // // // // // // // // //             }
// // // // // // // // // //           });
// // // // // // // // // //         },
// // // // // // // // // //         { 
// // // // // // // // // //           threshold: 0.2, // Trigger earlier
// // // // // // // // // //           rootMargin: "-30px" // Reduced margin for earlier trigger
// // // // // // // // // //         }
// // // // // // // // // //       );

// // // // // // // // // //     if (sectionRef.current) {
// // // // // // // // // //       observer.observe(sectionRef.current);
// // // // // // // // // //     }

// // // // // // // // // //     return () => {
// // // // // // // // // //       if (sectionRef.current) {
// // // // // // // // // //         observer.unobserve(sectionRef.current);
// // // // // // // // // //       }
// // // // // // // // // //     };
// // // // // // // // // //   }, [isVisible]);

// // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // // // //     } else {
// // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const addToProjectRefs = (el) => {
// // // // // // // // // //     if (el && !projectRefs.current.includes(el)) {
// // // // // // // // // //       projectRefs.current.push(el);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <section 
// // // // // // // // // //       id="projects" 
// // // // // // // // // //       ref={sectionRef}
// // // // // // // // // //       className="py-20 px-4 bg-muted/30 overflow-hidden"
// // // // // // // // // //     >
// // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // //         {/* Header Section - Faster animation */}
// // // // // // // // // //         <div 
// // // // // // // // // //           className={`text-center mb-16 transition-all duration-500 ease-out ${
// // // // // // // // // //             isVisible 
// // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // //           }`}
// // // // // // // // // //           style={{
// // // // // // // // // //             transitionDelay: isVisible ? "100ms" : "0ms"
// // // // // // // // // //           }}
// // // // // // // // // //         >
// // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // //           </p>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Projects Grid - Much faster staggered animation */}
// // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={project.title}
// // // // // // // // // //               ref={addToProjectRefs}
// // // // // // // // // //               className="transition-all duration-500 ease-out opacity-0 translate-y-8"
// // // // // // // // // //               style={{
// // // // // // // // // //                 transitionDelay: isVisible ? `${index * 150 + 200}ms` : "0ms"
// // // // // // // // // //               }}
// // // // // // // // // //             >
// // // // // // // // // //               <Card className="
// // // // // // // // // //                 bg-gradient-card shadow-elegant border-2 border-primary/20 
// // // // // // // // // //                 hover:border-primary/40 hover:shadow-glow 
// // // // // // // // // //                 transition-all duration-300 hover:-translate-y-1 group
// // // // // // // // // //               ">
// // // // // // // // // //                 <CardHeader>
// // // // // // // // // //                   <div className="flex items-start justify-between mb-4">
// // // // // // // // // //                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // //                       {project.type}
// // // // // // // // // //                     </Badge>
// // // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // // // // // //                       {project.period}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // //                     {project.title}
// // // // // // // // // //                   </CardTitle>
// // // // // // // // // //                   <CardDescription className="text-base leading-relaxed">
// // // // // // // // // //                     {project.description}
// // // // // // // // // //                   </CardDescription>
// // // // // // // // // //                 </CardHeader>

// // // // // // // // // //                 <CardContent className="space-y-6">
                  
// // // // // // // // // //                   {/* Key Features */}
// // // // // // // // // //                   <div>
// // // // // // // // // //                     <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // // //                       {project.features.map((feature, featureIndex) => (
// // // // // // // // // //                         <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // //                           {feature}
// // // // // // // // // //                         </li>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </ul>
// // // // // // // // // //                   </div>

// // // // // // // // // //                   {/* Technologies */}
// // // // // // // // // //                   <div>
// // // // // // // // // //                     <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // // //                       {project.technologies.map((tech) => {
// // // // // // // // // //                         const getIcon = (techName) => {
// // // // // // // // // //                           switch (techName.toLowerCase()) {
// // // // // // // // // //                             case "iot": return "🌐";
// // // // // // // // // //                             case "web dashboard": return "📊";
// // // // // // // // // //                             case "real-time monitoring": return "📡";
// // // // // // // // // //                             case "automation": return "⚡";
// // // // // // // // // //                             case "robotics": return "🤖";
// // // // // // // // // //                             case "iot sensors": return "📱";
// // // // // // // // // //                             case "embedded systems": return "🔧";
// // // // // // // // // //                             case "remote control": return "📡";
// // // // // // // // // //                             default: return "💻";
// // // // // // // // // //                           }
// // // // // // // // // //                         };

// // // // // // // // // //                         return (
// // // // // // // // // //                           <Badge
// // // // // // // // // //                             key={tech}
// // // // // // // // // //                             variant="secondary"
// // // // // // // // // //                             className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // //                           >
// // // // // // // // // //                             <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // //                             {tech}
// // // // // // // // // //                           </Badge>
// // // // // // // // // //                         );
// // // // // // // // // //                       })}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>

// // // // // // // // // //                   {/* Action Buttons */}
// // // // // // // // // //                   <div className="flex gap-3 pt-4">
// // // // // // // // // //                     <Button
// // // // // // // // // //                       variant="default"
// // // // // // // // // //                       size="sm"
// // // // // // // // // //                       className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // //                       onClick={() => handleViewDetails(project)}
// // // // // // // // // //                     >
// // // // // // // // // //                       <FileText size={12} className="mr-1" />
// // // // // // // // // //                       View Details
// // // // // // // // // //                     </Button>
// // // // // // // // // //                     <Button
// // // // // // // // // //                       variant="outline"
// // // // // // // // // //                       size="sm"
// // // // // // // // // //                       className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // //                       onClick={() => {
// // // // // // // // // //                         const url =
// // // // // // // // // //                           project.title === "Smart Pet Feeder"
// // // // // // // // // //                             ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // //                             : "https://github.com/Thomasjose-tech";
// // // // // // // // // //                         window.open(url, "_blank");
// // // // // // // // // //                       }}
// // // // // // // // // //                     >
// // // // // // // // // //                       <Github size={16} className="mr-2" />
// // // // // // // // // //                       Code
// // // // // // // // // //                     </Button>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </CardContent>
// // // // // // // // // //               </Card>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Call to Action - Faster animation */}
// // // // // // // // // //         <div 
// // // // // // // // // //           className={`text-center mt-16 transition-all duration-500 ease-out ${
// // // // // // // // // //             isVisible 
// // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // //           }`}
// // // // // // // // // //           style={{
// // // // // // // // // //             transitionDelay: isVisible ? "500ms" : "0ms"
// // // // // // // // // //           }}
// // // // // // // // // //         >
// // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // //           </p>
// // // // // // // // // //           <Button
// // // // // // // // // //             variant="default"
// // // // // // // // // //             size="lg"
// // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // //             onClick={() =>
// // // // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // // // //             }
// // // // // // // // // //           >
// // // // // // // // // //             Let's Work Together
// // // // // // // // // //           </Button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Projects;
// // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { Calendar, Github, FileText, ArrowLeft } from "lucide-react";
// // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // const Projects = () => {
// // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // //   const projectRefs = useRef([]);

// // // // // // // // //   const projects = [
// // // // // // // // //     {
// // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // //       features: [
// // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // //       ],
// // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // //       type: "Hardware & Software",
// // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // // // // //       backContent: {
// // // // // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // // // // //       }
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // //       features: [
// // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // //       ],
// // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // // // // //       backContent: {
// // // // // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // //       (entries) => {
// // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // //           if (entry.isIntersecting && !isVisible) {
// // // // // // // // //             setIsVisible(true);
            
// // // // // // // // //             projectRefs.current.forEach((projectRef, index) => {
// // // // // // // // //               if (projectRef) {
// // // // // // // // //                 setTimeout(() => {
// // // // // // // // //                   projectRef.style.opacity = "1";
// // // // // // // // //                   projectRef.style.transform = "translateY(0)";
// // // // // // // // //                 }, index * 150);
// // // // // // // // //               }
// // // // // // // // //             });
// // // // // // // // //           }
// // // // // // // // //         });
// // // // // // // // //       },
// // // // // // // // //       { 
// // // // // // // // //         threshold: 0.2,
// // // // // // // // //         rootMargin: "-30px"
// // // // // // // // //       }
// // // // // // // // //     );

// // // // // // // // //     if (sectionRef.current) {
// // // // // // // // //       observer.observe(sectionRef.current);
// // // // // // // // //     }

// // // // // // // // //     return () => {
// // // // // // // // //       if (sectionRef.current) {
// // // // // // // // //         observer.unobserve(sectionRef.current);
// // // // // // // // //       }
// // // // // // // // //     };
// // // // // // // // //   }, [isVisible]);

// // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // // //     } else {
// // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleCardFlip = (index) => {
// // // // // // // // //     setFlippedCards(prev => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [index]: !prev[index]
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   const addToProjectRefs = (el) => {
// // // // // // // // //     if (el && !projectRefs.current.includes(el)) {
// // // // // // // // //       projectRefs.current.push(el);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <section 
// // // // // // // // //       id="projects" 
// // // // // // // // //       ref={sectionRef}
// // // // // // // // //       className="py-20 px-4 bg-muted/30 overflow-hidden"
// // // // // // // // //     >
// // // // // // // // //       <div className="container mx-auto">
// // // // // // // // //         {/* Header Section */}
// // // // // // // // //         <div 
// // // // // // // // //           className={`text-center mb-16 transition-all duration-500 ease-out ${
// // // // // // // // //             isVisible 
// // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // //           }`}
// // // // // // // // //           style={{
// // // // // // // // //             transitionDelay: isVisible ? "100ms" : "0ms"
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // //           </p>
// // // // // // // // //           <p className="text-sm text-muted-foreground mt-2">
// // // // // // // // //             💡 Click or hover on cards to see detailed insights
// // // // // // // // //           </p>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Projects Grid */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // //             <div
// // // // // // // // //               key={project.title}
// // // // // // // // //               ref={addToProjectRefs}
// // // // // // // // //               className="transition-all duration-500 ease-out opacity-0 translate-y-8"
// // // // // // // // //               style={{
// // // // // // // // //                 transitionDelay: isVisible ? `${index * 150 + 200}ms` : "0ms"
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               {/* Card Container with 3D Flip */}
// // // // // // // // //               <div 
// // // // // // // // //                 className="relative w-full h-full cursor-pointer group"
// // // // // // // // //                 style={{
// // // // // // // // //                   perspective: "1000px",
// // // // // // // // //                   minHeight: "500px"
// // // // // // // // //                 }}
// // // // // // // // //                 onClick={() => handleCardFlip(index)}
// // // // // // // // //                 onMouseEnter={() => {
// // // // // // // // //                   // Auto-flip on hover (optional)
// // // // // // // // //                   // handleCardFlip(index);
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 {/* Front of Card */}
// // // // // // // // //                 <div
// // // // // // // // //                   className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out preserve-3d ${
// // // // // // // // //                     flippedCards[index] ? "rotate-y-180" : ""
// // // // // // // // //                   }`}
// // // // // // // // //                   style={{
// // // // // // // // //                     transformStyle: "preserve-3d",
// // // // // // // // //                     backfaceVisibility: "hidden"
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   <Card className="
// // // // // // // // //                     bg-gradient-card shadow-elegant border-2 border-primary/20 
// // // // // // // // //                     hover:border-primary/40 hover:shadow-glow 
// // // // // // // // //                     transition-all duration-300 group-hover:-translate-y-1 h-full
// // // // // // // // //                     flex flex-col
// // // // // // // // //                   ">
// // // // // // // // //                     <CardHeader>
// // // // // // // // //                       <div className="flex items-start justify-between mb-4">
// // // // // // // // //                         <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // //                           {project.type}
// // // // // // // // //                         </Badge>
// // // // // // // // //                         <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // //                           <Calendar size={16} className="mr-1" />
// // // // // // // // //                           {project.period}
// // // // // // // // //                         </div>
// // // // // // // // //                       </div>
// // // // // // // // //                       <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // //                         {project.title}
// // // // // // // // //                       </CardTitle>
// // // // // // // // //                       <CardDescription className="text-base leading-relaxed">
// // // // // // // // //                         {project.description}
// // // // // // // // //                       </CardDescription>
// // // // // // // // //                     </CardHeader>

// // // // // // // // //                     <CardContent className="space-y-6 flex-1 flex flex-col">
                      
// // // // // // // // //                       {/* Key Features */}
// // // // // // // // //                       <div className="flex-1">
// // // // // // // // //                         <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // //                         <ul className="space-y-2">
// // // // // // // // //                           {project.features.map((feature, featureIndex) => (
// // // // // // // // //                             <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // //                               <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // //                               {feature}
// // // // // // // // //                             </li>
// // // // // // // // //                           ))}
// // // // // // // // //                         </ul>
// // // // // // // // //                       </div>

// // // // // // // // //                       {/* Technologies */}
// // // // // // // // //                       <div>
// // // // // // // // //                         <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // //                         <div className="flex flex-wrap gap-2">
// // // // // // // // //                           {project.technologies.map((tech) => {
// // // // // // // // //                             const getIcon = (techName) => {
// // // // // // // // //                               switch (techName.toLowerCase()) {
// // // // // // // // //                                 case "iot": return "🌐";
// // // // // // // // //                                 case "web dashboard": return "📊";
// // // // // // // // //                                 case "real-time monitoring": return "📡";
// // // // // // // // //                                 case "automation": return "⚡";
// // // // // // // // //                                 case "robotics": return "🤖";
// // // // // // // // //                                 case "iot sensors": return "📱";
// // // // // // // // //                                 case "embedded systems": return "🔧";
// // // // // // // // //                                 case "remote control": return "📡";
// // // // // // // // //                                 default: return "💻";
// // // // // // // // //                               }
// // // // // // // // //                             };

// // // // // // // // //                             return (
// // // // // // // // //                               <Badge
// // // // // // // // //                                 key={tech}
// // // // // // // // //                                 variant="secondary"
// // // // // // // // //                                 className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // //                               >
// // // // // // // // //                                 <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // //                                 {tech}
// // // // // // // // //                               </Badge>
// // // // // // // // //                             );
// // // // // // // // //                           })}
// // // // // // // // //                         </div>
// // // // // // // // //                       </div>

// // // // // // // // //                       {/* Action Buttons */}
// // // // // // // // //                       <div className="flex gap-3 pt-4">
// // // // // // // // //                         <Button
// // // // // // // // //                           variant="default"
// // // // // // // // //                           size="sm"
// // // // // // // // //                           className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // //                           onClick={(e) => {
// // // // // // // // //                             e.stopPropagation();
// // // // // // // // //                             handleViewDetails(project);
// // // // // // // // //                           }}
// // // // // // // // //                         >
// // // // // // // // //                           <FileText size={12} className="mr-1" />
// // // // // // // // //                           View Details
// // // // // // // // //                         </Button>
// // // // // // // // //                         <Button
// // // // // // // // //                           variant="outline"
// // // // // // // // //                           size="sm"
// // // // // // // // //                           className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // //                           onClick={(e) => {
// // // // // // // // //                             e.stopPropagation();
// // // // // // // // //                             const url =
// // // // // // // // //                               project.title === "Smart Pet Feeder"
// // // // // // // // //                                 ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // //                                 : "https://github.com/Thomasjose-tech";
// // // // // // // // //                             window.open(url, "_blank");
// // // // // // // // //                           }}
// // // // // // // // //                         >
// // // // // // // // //                           <Github size={16} className="mr-2" />
// // // // // // // // //                           Code
// // // // // // // // //                         </Button>
// // // // // // // // //                       </div>

// // // // // // // // //                       {/* Flip Hint */}
// // // // // // // // //                       <div className="text-center mt-4">
// // // // // // // // //                         <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
// // // // // // // // //                           <span>Click to flip</span>
// // // // // // // // //                           <span className="text-lg">↻</span>
// // // // // // // // //                         </div>
// // // // // // // // //                       </div>
// // // // // // // // //                     </CardContent>
// // // // // // // // //                   </Card>
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Back of Card */}
// // // // // // // // //                 <div
// // // // // // // // //                   className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out preserve-3d ${
// // // // // // // // //                     flippedCards[index] ? "" : "rotate-y-180"
// // // // // // // // //                   }`}
// // // // // // // // //                   style={{
// // // // // // // // //                     transformStyle: "preserve-3d",
// // // // // // // // //                     backfaceVisibility: "hidden"
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   <Card className="
// // // // // // // // //                     bg-gradient-to-br from-primary/5 to-primary/10 
// // // // // // // // //                     shadow-elegant border-2 border-primary/30 
// // // // // // // // //                     h-full flex flex-col
// // // // // // // // //                   ">
// // // // // // // // //                     <CardHeader>
// // // // // // // // //                       <div className="flex items-center justify-between mb-4">
// // // // // // // // //                         <Button
// // // // // // // // //                           variant="ghost"
// // // // // // // // //                           size="sm"
// // // // // // // // //                           onClick={(e) => {
// // // // // // // // //                             e.stopPropagation();
// // // // // // // // //                             handleCardFlip(index);
// // // // // // // // //                           }}
// // // // // // // // //                           className="h-8 w-8 p-0 rounded-full"
// // // // // // // // //                         >
// // // // // // // // //                           <ArrowLeft size={16} />
// // // // // // // // //                         </Button>
// // // // // // // // //                         <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
// // // // // // // // //                           Project Insights
// // // // // // // // //                         </Badge>
// // // // // // // // //                       </div>
// // // // // // // // //                       <CardTitle className="text-xl mb-2 text-primary">
// // // // // // // // //                         {project.title} - Deep Dive
// // // // // // // // //                       </CardTitle>
// // // // // // // // //                     </CardHeader>

// // // // // // // // //                     <CardContent className="space-y-6 flex-1">
// // // // // // // // //                       {/* Challenges */}
// // // // // // // // //                       <div>
// // // // // // // // //                         <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
// // // // // // // // //                           <span className="text-lg">🚧</span>
// // // // // // // // //                           Key Challenges
// // // // // // // // //                         </h4>
// // // // // // // // //                         <p className="text-muted-foreground text-sm leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // // //                           {project.backContent.challenges}
// // // // // // // // //                         </p>
// // // // // // // // //                       </div>

// // // // // // // // //                       {/* Learnings */}
// // // // // // // // //                       <div>
// // // // // // // // //                         <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
// // // // // // // // //                           <span className="text-lg">📚</span>
// // // // // // // // //                           Key Learnings
// // // // // // // // //                         </h4>
// // // // // // // // //                         <p className="text-muted-foreground text-sm leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // // //                           {project.backContent.learnings}
// // // // // // // // //                         </p>
// // // // // // // // //                       </div>

// // // // // // // // //                       {/* Impact */}
// // // // // // // // //                       <div>
// // // // // // // // //                         <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
// // // // // // // // //                           <span className="text-lg">📈</span>
// // // // // // // // //                           Project Impact
// // // // // // // // //                         </h4>
// // // // // // // // //                         <p className="text-muted-foreground text-sm leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // // //                           {project.backContent.impact}
// // // // // // // // //                         </p>
// // // // // // // // //                       </div>

// // // // // // // // //                       {/* Quick Actions */}
// // // // // // // // //                       <div className="flex gap-2 pt-4">
// // // // // // // // //                         <Button
// // // // // // // // //                           variant="default"
// // // // // // // // //                           size="sm"
// // // // // // // // //                           className="bg-primary hover:bg-primary/90 text-xs flex-1"
// // // // // // // // //                           onClick={(e) => {
// // // // // // // // //                             e.stopPropagation();
// // // // // // // // //                             handleViewDetails(project);
// // // // // // // // //                           }}
// // // // // // // // //                         >
// // // // // // // // //                           <FileText size={12} className="mr-1" />
// // // // // // // // //                           PDF Details
// // // // // // // // //                         </Button>
// // // // // // // // //                         <Button
// // // // // // // // //                           variant="outline"
// // // // // // // // //                           size="sm"
// // // // // // // // //                           className="border-primary/30 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // //                           onClick={(e) => {
// // // // // // // // //                             e.stopPropagation();
// // // // // // // // //                             const url =
// // // // // // // // //                               project.title === "Smart Pet Feeder"
// // // // // // // // //                                 ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // //                                 : "https://github.com/Thomasjose-tech";
// // // // // // // // //                             window.open(url, "_blank");
// // // // // // // // //                           }}
// // // // // // // // //                         >
// // // // // // // // //                           <Github size={14} className="mr-1" />
// // // // // // // // //                           Source Code
// // // // // // // // //                         </Button>
// // // // // // // // //                       </div>
// // // // // // // // //                     </CardContent>
// // // // // // // // //                   </Card>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Call to Action */}
// // // // // // // // //         <div 
// // // // // // // // //           className={`text-center mt-16 transition-all duration-500 ease-out ${
// // // // // // // // //             isVisible 
// // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // //           }`}
// // // // // // // // //           style={{
// // // // // // // // //             transitionDelay: isVisible ? "500ms" : "0ms"
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // //           </p>
// // // // // // // // //           <Button
// // // // // // // // //             variant="default"
// // // // // // // // //             size="lg"
// // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // //             onClick={() =>
// // // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // // //             }
// // // // // // // // //           >
// // // // // // // // //             Let's Work Together
// // // // // // // // //           </Button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       <style jsx>{`
// // // // // // // // //         .rotate-y-180 {
// // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // //         }
// // // // // // // // //         .preserve-3d {
// // // // // // // // //           transform-style: preserve-3d;
// // // // // // // // //         }
// // // // // // // // //         /* Optimized animations for performance */
// // // // // // // // //         .group {
// // // // // // // // //           transform: translateZ(0);
// // // // // // // // //           backface-visibility: hidden;
// // // // // // // // //           perspective: 1000px;
// // // // // // // // //         }
// // // // // // // // //       `}</style>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Projects;
// // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // const Projects = () => {
// // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // // // //   const sectionRef = useRef(null);
// // // // // // // //   const projectRefs = useRef([]);

// // // // // // // //   const projects = [
// // // // // // // //     {
// // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // //       features: [
// // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // //       ],
// // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // //       type: "Hardware & Software",
// // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // // // //       backContent: {
// // // // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // // // //       }
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // //       features: [
// // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // //       ],
// // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // //       type: "Analytics & IoT",
// // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // // // //       backContent: {
// // // // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   useEffect(() => {
// // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // //       (entries) => {
// // // // // // // //         entries.forEach((entry) => {
// // // // // // // //           if (entry.isIntersecting) {
// // // // // // // //             setIsVisible(true);
            
// // // // // // // //             projectRefs.current.forEach((projectRef, index) => {
// // // // // // // //               if (projectRef) {
// // // // // // // //                 setTimeout(() => {
// // // // // // // //                   projectRef.style.opacity = "1";
// // // // // // // //                   projectRef.style.transform = "translateY(0)";
// // // // // // // //                 }, index * 200);
// // // // // // // //               }
// // // // // // // //             });
// // // // // // // //           } else {
// // // // // // // //             setIsVisible(false);
// // // // // // // //             projectRefs.current.forEach((projectRef) => {
// // // // // // // //               if (projectRef) {
// // // // // // // //                 projectRef.style.opacity = "0";
// // // // // // // //                 projectRef.style.transform = "translateY(30px)";
// // // // // // // //               }
// // // // // // // //             });
// // // // // // // //           }
// // // // // // // //         });
// // // // // // // //       },
// // // // // // // //       { 
// // // // // // // //         threshold: 0.2,
// // // // // // // //         rootMargin: "0px"
// // // // // // // //       }
// // // // // // // //     );

// // // // // // // //     if (sectionRef.current) {
// // // // // // // //       observer.observe(sectionRef.current);
// // // // // // // //     }

// // // // // // // //     return () => {
// // // // // // // //       if (sectionRef.current) {
// // // // // // // //         observer.unobserve(sectionRef.current);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // //     if (project.pdfUrl) {
// // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // //     } else {
// // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleCardHover = (index, isHovering) => {
// // // // // // // //     setFlippedCards(prev => ({
// // // // // // // //       ...prev,
// // // // // // // //       [index]: isHovering
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   const addToProjectRefs = (el) => {
// // // // // // // //     if (el && !projectRefs.current.includes(el)) {
// // // // // // // //       projectRefs.current.push(el);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <section 
// // // // // // // //       id="projects" 
// // // // // // // //       ref={sectionRef}
// // // // // // // //       className="py-20 px-4 bg-muted/30 overflow-hidden"
// // // // // // // //     >
// // // // // // // //       <div className="container mx-auto">
// // // // // // // //         {/* Header Section */}
// // // // // // // //         <div 
// // // // // // // //           className={`text-center mb-16 transition-all duration-700 ease-out ${
// // // // // // // //             isVisible 
// // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // //           }`}
// // // // // // // //         >
// // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // //           </p>
// // // // // // // //           <p className="text-sm text-muted-foreground mt-2">
// // // // // // // //             💡 Hover on cards to flip and see detailed insights
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         {/* Projects Grid */}
// // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // //           {projects.map((project, index) => (
// // // // // // // //             <div
// // // // // // // //               key={project.title}
// // // // // // // //               ref={addToProjectRefs}
// // // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper"
// // // // // // // //               style={{
// // // // // // // //                 transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
// // // // // // // //                 minHeight: "500px"
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               {/* Flip Card Container */}
// // // // // // // //               <div 
// // // // // // // //                 className="flip-card w-full h-full"
// // // // // // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // // // // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // // // // // //               >
// // // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // // //                   {/* Front Side */}
// // // // // // // //                   <div className="flip-card-front">
// // // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
// // // // // // // //                       <CardHeader>
// // // // // // // //                         <div className="flex items-start justify-between mb-4">
// // // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // //                             {project.type}
// // // // // // // //                           </Badge>
// // // // // // // //                           <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // //                             <Calendar size={16} className="mr-1" />
// // // // // // // //                             {project.period}
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                         <CardTitle className="text-xl mb-2">
// // // // // // // //                           {project.title}
// // // // // // // //                         </CardTitle>
// // // // // // // //                         <CardDescription className="text-base leading-relaxed">
// // // // // // // //                           {project.description}
// // // // // // // //                         </CardDescription>
// // // // // // // //                       </CardHeader>

// // // // // // // //                       <CardContent className="space-y-6">
// // // // // // // //                         {/* Key Features */}
// // // // // // // //                         <div>
// // // // // // // //                           <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // //                           <ul className="space-y-2">
// // // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // // //                               <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // //                                 <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // //                                 {feature}
// // // // // // // //                               </li>
// // // // // // // //                             ))}
// // // // // // // //                           </ul>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Technologies */}
// // // // // // // //                         <div>
// // // // // // // //                           <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // //                           <div className="flex flex-wrap gap-2">
// // // // // // // //                             {project.technologies.map((tech) => {
// // // // // // // //                               const getIcon = (techName) => {
// // // // // // // //                                 switch (techName.toLowerCase()) {
// // // // // // // //                                   case "iot": return "🌐";
// // // // // // // //                                   case "web dashboard": return "📊";
// // // // // // // //                                   case "real-time monitoring": return "📡";
// // // // // // // //                                   case "automation": return "⚡";
// // // // // // // //                                   case "robotics": return "🤖";
// // // // // // // //                                   case "iot sensors": return "📱";
// // // // // // // //                                   case "embedded systems": return "🔧";
// // // // // // // //                                   case "remote control": return "📡";
// // // // // // // //                                   default: return "💻";
// // // // // // // //                                 }
// // // // // // // //                               };

// // // // // // // //                               return (
// // // // // // // //                                 <Badge
// // // // // // // //                                   key={tech}
// // // // // // // //                                   variant="secondary"
// // // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // //                                 >
// // // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // //                                   {tech}
// // // // // // // //                                 </Badge>
// // // // // // // //                               );
// // // // // // // //                             })}
// // // // // // // //                           </div>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Action Buttons */}
// // // // // // // //                         <div className="flex gap-3 pt-4">
// // // // // // // //                           <Button
// // // // // // // //                             variant="default"
// // // // // // // //                             size="sm"
// // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // //                             onClick={(e) => {
// // // // // // // //                               e.stopPropagation();
// // // // // // // //                               handleViewDetails(project);
// // // // // // // //                             }}
// // // // // // // //                           >
// // // // // // // //                             <FileText size={12} className="mr-1" />
// // // // // // // //                             View Details
// // // // // // // //                           </Button>
// // // // // // // //                           <Button
// // // // // // // //                             variant="outline"
// // // // // // // //                             size="sm"
// // // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // //                             onClick={(e) => {
// // // // // // // //                               e.stopPropagation();
// // // // // // // //                               const url =
// // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // //                               window.open(url, "_blank");
// // // // // // // //                             }}
// // // // // // // //                           >
// // // // // // // //                             <Github size={16} className="mr-2" />
// // // // // // // //                             Code
// // // // // // // //                           </Button>
// // // // // // // //                         </div>
// // // // // // // //                       </CardContent>
// // // // // // // //                     </Card>
// // // // // // // //                   </div>

// // // // // // // //                   {/* Back Side */}
// // // // // // // //                   <div className="flip-card-back">
// // // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-6">
// // // // // // // //                       <div className="h-full flex flex-col">
// // // // // // // //                         {/* Header */}
// // // // // // // //                         <div className="text-center mb-6">
// // // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2">
// // // // // // // //                             Project Insights
// // // // // // // //                           </Badge>
// // // // // // // //                           <h3 className="text-lg font-bold text-primary">
// // // // // // // //                             {project.title}
// // // // // // // //                           </h3>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Content */}
// // // // // // // //                         <div className="space-y-4 flex-1">
// // // // // // // //                           {/* Challenges */}
// // // // // // // //                           <div>
// // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm flex items-center gap-1">
// // // // // // // //                               <span>🚧</span>
// // // // // // // //                               Key Challenges
// // // // // // // //                             </h4>
// // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // //                               {project.backContent.challenges}
// // // // // // // //                             </p>
// // // // // // // //                           </div>

// // // // // // // //                           {/* Learnings */}
// // // // // // // //                           <div>
// // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm flex items-center gap-1">
// // // // // // // //                               <span>📚</span>
// // // // // // // //                               Key Learnings
// // // // // // // //                             </h4>
// // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // //                               {project.backContent.learnings}
// // // // // // // //                             </p>
// // // // // // // //                           </div>

// // // // // // // //                           {/* Impact */}
// // // // // // // //                           <div>
// // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm flex items-center gap-1">
// // // // // // // //                               <span>📈</span>
// // // // // // // //                               Project Impact
// // // // // // // //                             </h4>
// // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // //                               {project.backContent.impact}
// // // // // // // //                             </p>
// // // // // // // //                           </div>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Actions */}
// // // // // // // //                         <div className="flex gap-2 pt-4 mt-auto">
// // // // // // // //                           <Button
// // // // // // // //                             variant="default"
// // // // // // // //                             size="sm"
// // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs flex-1 h-8"
// // // // // // // //                             onClick={(e) => {
// // // // // // // //                               e.stopPropagation();
// // // // // // // //                               handleViewDetails(project);
// // // // // // // //                             }}
// // // // // // // //                           >
// // // // // // // //                             <FileText size={12} className="mr-1" />
// // // // // // // //                             PDF Details
// // // // // // // //                           </Button>
// // // // // // // //                           <Button
// // // // // // // //                             variant="outline"
// // // // // // // //                             size="sm"
// // // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 flex-1 h-8"
// // // // // // // //                             onClick={(e) => {
// // // // // // // //                               e.stopPropagation();
// // // // // // // //                               const url =
// // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // //                               window.open(url, "_blank");
// // // // // // // //                             }}
// // // // // // // //                           >
// // // // // // // //                             <Github size={12} className="mr-1" />
// // // // // // // //                             Source Code
// // // // // // // //                           </Button>
// // // // // // // //                         </div>
// // // // // // // //                       </div>
// // // // // // // //                     </Card>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         {/* Call to Action */}
// // // // // // // //         <div 
// // // // // // // //           className={`text-center mt-16 transition-all duration-700 ease-out ${
// // // // // // // //             isVisible 
// // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // //           }`}
// // // // // // // //           style={{
// // // // // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // //           </p>
// // // // // // // //           <Button
// // // // // // // //             variant="default"
// // // // // // // //             size="lg"
// // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // //             onClick={() =>
// // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // //             }
// // // // // // // //           >
// // // // // // // //             Let's Work Together
// // // // // // // //           </Button>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <style jsx>{`
// // // // // // // //         .flip-card {
// // // // // // // //           perspective: 1000px;
// // // // // // // //           height: 100%;
// // // // // // // //           width: 100%;
// // // // // // // //         }

// // // // // // // //         .flip-card-inner {
// // // // // // // //           position: relative;
// // // // // // // //           width: 100%;
// // // // // // // //           height: 100%;
// // // // // // // //           transition: transform 0.6s;
// // // // // // // //           transform-style: preserve-3d;
// // // // // // // //         }

// // // // // // // //         .flip-card-flipped {
// // // // // // // //           transform: rotateY(180deg);
// // // // // // // //         }

// // // // // // // //         .flip-card-front,
// // // // // // // //         .flip-card-back {
// // // // // // // //           position: absolute;
// // // // // // // //           width: 100%;
// // // // // // // //           height: 100%;
// // // // // // // //           -webkit-backface-visibility: hidden;
// // // // // // // //           backface-visibility: hidden;
// // // // // // // //           border-radius: 0.5rem;
// // // // // // // //         }

// // // // // // // //         .flip-card-back {
// // // // // // // //           transform: rotateY(180deg);
// // // // // // // //         }

// // // // // // // //         /* Ensure smooth animations */
// // // // // // // //         .project-card-wrapper {
// // // // // // // //           transform: translateZ(0);
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Projects;
// // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // const Projects = () => {
// // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // // // //   const sectionRef = useRef(null);
// // // // // // // //   const projectRefs = useRef([]);

// // // // // // // //   const projects = [
// // // // // // // //     {
// // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // //       features: [
// // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // //       ],
// // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // //       type: "Hardware & Software",
// // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // // // //       backContent: {
// // // // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // // // //       }
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // //       features: [
// // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // //       ],
// // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // //       type: "Analytics & IoT",
// // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // // // //       backContent: {
// // // // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   useEffect(() => {
// // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // //       (entries) => {
// // // // // // // //         entries.forEach((entry) => {
// // // // // // // //           if (entry.isIntersecting) {
// // // // // // // //             setIsVisible(true);
// // // // // // // //           }
// // // // // // // //         });
// // // // // // // //       },
// // // // // // // //       { 
// // // // // // // //         threshold: 0.1,
// // // // // // // //         rootMargin: "50px"
// // // // // // // //       }
// // // // // // // //     );

// // // // // // // //     if (sectionRef.current) {
// // // // // // // //       observer.observe(sectionRef.current);
// // // // // // // //     }

// // // // // // // //     return () => {
// // // // // // // //       if (sectionRef.current) {
// // // // // // // //         observer.unobserve(sectionRef.current);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (isVisible) {
// // // // // // // //       projectRefs.current.forEach((projectRef, index) => {
// // // // // // // //         if (projectRef) {
// // // // // // // //           setTimeout(() => {
// // // // // // // //             projectRef.style.opacity = "1";
// // // // // // // //             projectRef.style.transform = "translateY(0)";
// // // // // // // //           }, index * 200);
// // // // // // // //         }
// // // // // // // //       });
// // // // // // // //     }
// // // // // // // //   }, [isVisible]);

// // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // //     if (project.pdfUrl) {
// // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // //     } else {
// // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleCardHover = (index, isHovering) => {
// // // // // // // //     setFlippedCards(prev => ({
// // // // // // // //       ...prev,
// // // // // // // //       [index]: isHovering
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   const addToProjectRefs = (el) => {
// // // // // // // //     if (el && !projectRefs.current.includes(el)) {
// // // // // // // //       projectRefs.current.push(el);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <section 
// // // // // // // //       id="projects" 
// // // // // // // //       ref={sectionRef}
// // // // // // // //       className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // // // //     >
// // // // // // // //       <div className="container mx-auto max-w-7xl">
// // // // // // // //         {/* Header Section */}
// // // // // // // //         <div 
// // // // // // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // // // // // // //             isVisible 
// // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // //           }`}
// // // // // // // //         >
// // // // // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // //           </p>
// // // // // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // // // // //             💡 Hover on cards to flip and see detailed insights
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         {/* Projects Grid */}
// // // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-[95%] sm:max-w-full mx-auto">
// // // // // // // //           {projects.map((project, index) => (
// // // // // // // //             <div
// // // // // // // //               key={project.title}
// // // // // // // //               ref={addToProjectRefs}
// // // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full"
// // // // // // // //               style={{
// // // // // // // //                 transitionDelay: isVisible ? `${index * 200}ms` : "0ms"
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               {/* Flip Card Container */}
// // // // // // // //               <div 
// // // // // // // //                 className="flip-card w-full"
// // // // // // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // // // // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // // // // // //               >
// // // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // // //                   {/* Front Side */}
// // // // // // // //                   <div className="flip-card-front">
// // // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
// // // // // // // //                       <CardHeader className="pb-4">
// // // // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4">
// // // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // // // //                             {project.type}
// // // // // // // //                           </Badge>
// // // // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // // // //                             {project.period}
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2">
// // // // // // // //                           {project.title}
// // // // // // // //                         </CardTitle>
// // // // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed">
// // // // // // // //                           {project.description}
// // // // // // // //                         </CardDescription>
// // // // // // // //                       </CardHeader>

// // // // // // // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6">
// // // // // // // //                         {/* Key Features */}
// // // // // // // //                         <div>
// // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // // // // //                           <ul className="space-y-2">
// // // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // // //                               <li key={featureIndex} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// // // // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // // // //                                 {feature}
// // // // // // // //                               </li>
// // // // // // // //                             ))}
// // // // // // // //                           </ul>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Technologies */}
// // // // // // // //                         <div>
// // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Technologies Used</h4>
// // // // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // // // //                             {project.technologies.map((tech) => {
// // // // // // // //                               const getIcon = (techName) => {
// // // // // // // //                                 switch (techName.toLowerCase()) {
// // // // // // // //                                   case "iot": return "🌐";
// // // // // // // //                                   case "web dashboard": return "📊";
// // // // // // // //                                   case "real-time monitoring": return "📡";
// // // // // // // //                                   case "automation": return "⚡";
// // // // // // // //                                   case "robotics": return "🤖";
// // // // // // // //                                   case "iot sensors": return "📱";
// // // // // // // //                                   case "embedded systems": return "🔧";
// // // // // // // //                                   case "remote control": return "📡";
// // // // // // // //                                   default: return "💻";
// // // // // // // //                                 }
// // // // // // // //                               };

// // // // // // // //                               return (
// // // // // // // //                                 <Badge
// // // // // // // //                                   key={tech}
// // // // // // // //                                   variant="secondary"
// // // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs"
// // // // // // // //                                 >
// // // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // //                                   {tech}
// // // // // // // //                                 </Badge>
// // // // // // // //                               );
// // // // // // // //                             })}
// // // // // // // //                           </div>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Action Buttons */}
// // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
// // // // // // // //                           <Button
// // // // // // // //                             variant="default"
// // // // // // // //                             size="sm"
// // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-8 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
// // // // // // // //                             onClick={(e) => {
// // // // // // // //                               e.stopPropagation();
// // // // // // // //                               handleViewDetails(project);
// // // // // // // //                             }}
// // // // // // // //                           >
// // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // //                             View Details
// // // // // // // //                           </Button>
// // // // // // // //                           <Button
// // // // // // // //                             variant="outline"
// // // // // // // //                             size="sm"
// // // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8 sm:h-9"
// // // // // // // //                             onClick={(e) => {
// // // // // // // //                               e.stopPropagation();
// // // // // // // //                               const url =
// // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // //                               window.open(url, "_blank");
// // // // // // // //                             }}
// // // // // // // //                           >
// // // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // // //                             Code
// // // // // // // //                           </Button>
// // // // // // // //                         </div>
// // // // // // // //                       </CardContent>
// // // // // // // //                     </Card>
// // // // // // // //                   </div>

// // // // // // // //                   {/* Back Side */}
// // // // // // // //                   <div className="flip-card-back">
// // // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-6">
// // // // // // // //                       <div className="h-full flex flex-col">
// // // // // // // //                         {/* Header */}
// // // // // // // //                         <div className="text-center mb-4 sm:mb-6">
// // // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs">
// // // // // // // //                             Project Insights
// // // // // // // //                           </Badge>
// // // // // // // //                           <h3 className="text-base sm:text-lg font-bold text-primary">
// // // // // // // //                             {project.title}
// // // // // // // //                           </h3>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Content */}
// // // // // // // //                         <div className="space-y-3 sm:space-y-4 flex-1">
// // // // // // // //                           {/* Challenges */}
// // // // // // // //                           <div>
// // // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // // //                               <span>🚧</span>
// // // // // // // //                               Key Challenges
// // // // // // // //                             </h4>
// // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // // //                               {project.backContent.challenges}
// // // // // // // //                             </p>
// // // // // // // //                           </div>

// // // // // // // //                           {/* Learnings */}
// // // // // // // //                           <div>
// // // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // // //                               <span>📚</span>
// // // // // // // //                               Key Learnings
// // // // // // // //                             </h4>
// // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // // //                               {project.backContent.learnings}
// // // // // // // //                             </p>
// // // // // // // //                           </div>

// // // // // // // //                           {/* Impact */}
// // // // // // // //                           <div>
// // // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // // //                               <span>📈</span>
// // // // // // // //                               Project Impact
// // // // // // // //                             </h4>
// // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // // //                               {project.backContent.impact}
// // // // // // // //                             </p>
// // // // // // // //                           </div>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Actions */}
// // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2 pt-3 sm:pt-4 mt-auto">
// // // // // // // //                           <Button
// // // // // // // //                             variant="default"
// // // // // // // //                             size="sm"
// // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs w-full sm:flex-1 h-8"
// // // // // // // //                             onClick={(e) => {
// // // // // // // //                               e.stopPropagation();
// // // // // // // //                               handleViewDetails(project);
// // // // // // // //                             }}
// // // // // // // //                           >
// // // // // // // //                             <FileText size={12} className="mr-1" />
// // // // // // // //                             PDF Details
// // // // // // // //                           </Button>
// // // // // // // //                           <Button
// // // // // // // //                             variant="outline"
// // // // // // // //                             size="sm"
// // // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8"
// // // // // // // //                             onClick={(e) => {
// // // // // // // //                               e.stopPropagation();
// // // // // // // //                               const url =
// // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // //                               window.open(url, "_blank");
// // // // // // // //                             }}
// // // // // // // //                           >
// // // // // // // //                             <Github size={12} className="mr-1" />
// // // // // // // //                             Source Code
// // // // // // // //                           </Button>
// // // // // // // //                         </div>
// // // // // // // //                       </div>
// // // // // // // //                     </Card>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         {/* Call to Action */}
// // // // // // // //         <div 
// // // // // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // // // // // // //             isVisible 
// // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // //           }`}
// // // // // // // //           style={{
// // // // // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // //           </p>
// // // // // // // //           <Button
// // // // // // // //             variant="default"
// // // // // // // //             size="lg"
// // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // // // // // // //             onClick={() =>
// // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // //             }
// // // // // // // //           >
// // // // // // // //             Let's Work Together
// // // // // // // //           </Button>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <style jsx>{`
// // // // // // // //         .flip-card {
// // // // // // // //           perspective: 1000px;
// // // // // // // //           min-height: 500px;
// // // // // // // //           width: 100%;
// // // // // // // //         }

// // // // // // // //         @media (max-width: 640px) {
// // // // // // // //           .flip-card {
// // // // // // // //             min-height: 580px;
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         .flip-card-inner {
// // // // // // // //           position: relative;
// // // // // // // //           width: 100%;
// // // // // // // //           height: 100%;
// // // // // // // //           min-height: inherit;
// // // // // // // //           transition: transform 0.6s;
// // // // // // // //           transform-style: preserve-3d;
// // // // // // // //         }

// // // // // // // //         .flip-card-flipped {
// // // // // // // //           transform: rotateY(180deg);
// // // // // // // //         }

// // // // // // // //         .flip-card-front,
// // // // // // // //         .flip-card-back {
// // // // // // // //           position: absolute;
// // // // // // // //           width: 100%;
// // // // // // // //           height: 100%;
// // // // // // // //           min-height: inherit;
// // // // // // // //           -webkit-backface-visibility: hidden;
// // // // // // // //           backface-visibility: hidden;
// // // // // // // //           border-radius: 0.5rem;
// // // // // // // //         }

// // // // // // // //         .flip-card-back {
// // // // // // // //           transform: rotateY(180deg);
// // // // // // // //         }

// // // // // // // //         /* Ensure smooth animations */
// // // // // // // //         .project-card-wrapper {
// // // // // // // //           transform: translateZ(0);
// // // // // // // //           will-change: opacity, transform;
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Projects;
// // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // const Projects = () => {
// // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // // //   const sectionRef = useRef(null);
// // // // // // //   const projectRefs = useRef([]);

// // // // // // //   const projects = [
// // // // // // //     {
// // // // // // //       title: "Smart Pet Feeder",
// // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // //       features: [
// // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // //       ],
// // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // //       type: "Hardware & Software",
// // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // // //       backContent: {
// // // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // // //       }
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // //       features: [
// // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // //       ],
// // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // //       type: "Analytics & IoT",
// // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // // //       backContent: {
// // // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // // //       }
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   useEffect(() => {
// // // // // // //     const observer = new IntersectionObserver(
// // // // // // //       (entries) => {
// // // // // // //         entries.forEach((entry) => {
// // // // // // //           const index = projectRefs.current.indexOf(entry.target);
// // // // // // //           if (entry.isIntersecting) {
// // // // // // //             // Element is visible
// // // // // // //             if (entry.target && index !== -1) {
// // // // // // //               setTimeout(() => {
// // // // // // //                 entry.target.style.opacity = "1";
// // // // // // //                 entry.target.style.transform = "translateY(0)";
// // // // // // //               }, index * 200);
// // // // // // //             }
// // // // // // //           } else {
// // // // // // //             // Element is not visible - reset animation
// // // // // // //             if (entry.target) {
// // // // // // //               entry.target.style.opacity = "0";
// // // // // // //               entry.target.style.transform = "translateY(32px)";
// // // // // // //             }
// // // // // // //           }
// // // // // // //         });
// // // // // // //       },
// // // // // // //       { 
// // // // // // //         threshold: 0.2,
// // // // // // //         rootMargin: "0px"
// // // // // // //       }
// // // // // // //     );

// // // // // // //     projectRefs.current.forEach((projectRef) => {
// // // // // // //       if (projectRef) {
// // // // // // //         observer.observe(projectRef);
// // // // // // //       }
// // // // // // //     });

// // // // // // //     return () => {
// // // // // // //       projectRefs.current.forEach((projectRef) => {
// // // // // // //         if (projectRef) {
// // // // // // //           observer.unobserve(projectRef);
// // // // // // //         }
// // // // // // //       });
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   useEffect(() => {
// // // // // // //     const headerObserver = new IntersectionObserver(
// // // // // // //       (entries) => {
// // // // // // //         entries.forEach((entry) => {
// // // // // // //           if (entry.isIntersecting) {
// // // // // // //             setIsVisible(true);
// // // // // // //           }
// // // // // // //         });
// // // // // // //       },
// // // // // // //       { 
// // // // // // //         threshold: 0.1,
// // // // // // //         rootMargin: "50px"
// // // // // // //       }
// // // // // // //     );

// // // // // // //     if (sectionRef.current) {
// // // // // // //       headerObserver.observe(sectionRef.current);
// // // // // // //     }

// // // // // // //     return () => {
// // // // // // //       if (sectionRef.current) {
// // // // // // //         headerObserver.unobserve(sectionRef.current);
// // // // // // //       }
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   const handleViewDetails = (project) => {
// // // // // // //     if (project.pdfUrl) {
// // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // //     } else {
// // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleCardHover = (index, isHovering) => {
// // // // // // //     setFlippedCards(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [index]: isHovering
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const addToProjectRefs = (el, index) => {
// // // // // // //     if (el && !projectRefs.current[index]) {
// // // // // // //       projectRefs.current[index] = el;
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <section 
// // // // // // //       id="projects" 
// // // // // // //       ref={sectionRef}
// // // // // // //       className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // // //     >
// // // // // // //       <div className="container mx-auto max-w-7xl">
// // // // // // //         {/* Header Section */}
// // // // // // //         <div 
// // // // // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // // // // // //             isVisible 
// // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // //               : "opacity-0 translate-y-8"
// // // // // // //           }`}
// // // // // // //         >
// // // // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // //           </p>
// // // // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // // // //             💡 Hover on cards to flip and see detailed insights
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* Projects Grid */}
// // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full mx-auto">
// // // // // // //           {projects.map((project, index) => (
// // // // // // //             <div
// // // // // // //               key={project.title}
// // // // // // //               ref={(el) => addToProjectRefs(el, index)}
// // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full"
// // // // // // //             >
// // // // // // //               {/* Flip Card Container */}
// // // // // // //               <div 
// // // // // // //                 className="flip-card w-full h-full"
// // // // // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // // // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // // // // //               >
// // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // //                   {/* Front Side */}
// // // // // // //                   <div className="flip-card-front">
// // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // // // // //                       <CardHeader className="pb-4">
// // // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4">
// // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // // //                             {project.type}
// // // // // // //                           </Badge>
// // // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // // //                             {project.period}
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2">
// // // // // // //                           {project.title}
// // // // // // //                         </CardTitle>
// // // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed">
// // // // // // //                           {project.description}
// // // // // // //                         </CardDescription>
// // // // // // //                       </CardHeader>

// // // // // // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6 flex-1 flex flex-col">
// // // // // // //                         {/* Key Features */}
// // // // // // //                         <div className="flex-1">
// // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // // // //                           <ul className="space-y-2">
// // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // //                               <li key={featureIndex} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// // // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // // //                                 {feature}
// // // // // // //                               </li>
// // // // // // //                             ))}
// // // // // // //                           </ul>
// // // // // // //                         </div>

// // // // // // //                         {/* Technologies */}
// // // // // // //                         <div>
// // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Technologies Used</h4>
// // // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // // //                             {project.technologies.map((tech) => {
// // // // // // //                               const getIcon = (techName) => {
// // // // // // //                                 switch (techName.toLowerCase()) {
// // // // // // //                                   case "iot": return "🌐";
// // // // // // //                                   case "web dashboard": return "📊";
// // // // // // //                                   case "real-time monitoring": return "📡";
// // // // // // //                                   case "automation": return "⚡";
// // // // // // //                                   case "robotics": return "🤖";
// // // // // // //                                   case "iot sensors": return "📱";
// // // // // // //                                   case "embedded systems": return "🔧";
// // // // // // //                                   case "remote control": return "📡";
// // // // // // //                                   default: return "💻";
// // // // // // //                                 }
// // // // // // //                               };

// // // // // // //                               return (
// // // // // // //                                 <Badge
// // // // // // //                                   key={tech}
// // // // // // //                                   variant="secondary"
// // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs"
// // // // // // //                                 >
// // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // //                                   {tech}
// // // // // // //                                 </Badge>
// // // // // // //                               );
// // // // // // //                             })}
// // // // // // //                           </div>
// // // // // // //                         </div>

// // // // // // //                         {/* Action Buttons */}
// // // // // // //                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
// // // // // // //                           <Button
// // // // // // //                             variant="default"
// // // // // // //                             size="sm"
// // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-8 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
// // // // // // //                             onClick={(e) => {
// // // // // // //                               e.stopPropagation();
// // // // // // //                               handleViewDetails(project);
// // // // // // //                             }}
// // // // // // //                           >
// // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // //                             View Details
// // // // // // //                           </Button>
// // // // // // //                           <Button
// // // // // // //                             variant="outline"
// // // // // // //                             size="sm"
// // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8 sm:h-9"
// // // // // // //                             onClick={(e) => {
// // // // // // //                               e.stopPropagation();
// // // // // // //                               const url =
// // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // //                               window.open(url, "_blank");
// // // // // // //                             }}
// // // // // // //                           >
// // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // //                             Code
// // // // // // //                           </Button>
// // // // // // //                         </div>
// // // // // // //                       </CardContent>
// // // // // // //                     </Card>
// // // // // // //                   </div>

// // // // // // //                   {/* Back Side */}
// // // // // // //                   <div className="flip-card-back">
// // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-6 flex flex-col">
// // // // // // //                       <div className="h-full flex flex-col">
// // // // // // //                         {/* Header */}
// // // // // // //                         <div className="text-center mb-4 sm:mb-6">
// // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs">
// // // // // // //                             Project Insights
// // // // // // //                           </Badge>
// // // // // // //                           <h3 className="text-base sm:text-lg font-bold text-primary">
// // // // // // //                             {project.title}
// // // // // // //                           </h3>
// // // // // // //                         </div>

// // // // // // //                         {/* Content */}
// // // // // // //                         <div className="space-y-3 sm:space-y-4 flex-1">
// // // // // // //                           {/* Challenges */}
// // // // // // //                           <div>
// // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // //                               <span>🚧</span>
// // // // // // //                               Key Challenges
// // // // // // //                             </h4>
// // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // //                               {project.backContent.challenges}
// // // // // // //                             </p>
// // // // // // //                           </div>

// // // // // // //                           {/* Learnings */}
// // // // // // //                           <div>
// // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // //                               <span>📚</span>
// // // // // // //                               Key Learnings
// // // // // // //                             </h4>
// // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // //                               {project.backContent.learnings}
// // // // // // //                             </p>
// // // // // // //                           </div>

// // // // // // //                           {/* Impact */}
// // // // // // //                           <div>
// // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // //                               <span>📈</span>
// // // // // // //                               Project Impact
// // // // // // //                             </h4>
// // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // //                               {project.backContent.impact}
// // // // // // //                             </p>
// // // // // // //                           </div>
// // // // // // //                         </div>

// // // // // // //                         {/* Actions */}
// // // // // // //                         <div className="flex flex-col sm:flex-row gap-2 pt-3 sm:pt-4 mt-auto">
// // // // // // //                           <Button
// // // // // // //                             variant="default"
// // // // // // //                             size="sm"
// // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs w-full sm:flex-1 h-8"
// // // // // // //                             onClick={(e) => {
// // // // // // //                               e.stopPropagation();
// // // // // // //                               handleViewDetails(project);
// // // // // // //                             }}
// // // // // // //                           >
// // // // // // //                             <FileText size={12} className="mr-1" />
// // // // // // //                             PDF Details
// // // // // // //                           </Button>
// // // // // // //                           <Button
// // // // // // //                             variant="outline"
// // // // // // //                             size="sm"
// // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8"
// // // // // // //                             onClick={(e) => {
// // // // // // //                               e.stopPropagation();
// // // // // // //                               const url =
// // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // //                               window.open(url, "_blank");
// // // // // // //                             }}
// // // // // // //                           >
// // // // // // //                             <Github size={12} className="mr-1" />
// // // // // // //                             Source Code
// // // // // // //                           </Button>
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     </Card>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* Call to Action */}
// // // // // // //         <div 
// // // // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // // // // // //             isVisible 
// // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // //               : "opacity-0 translate-y-8"
// // // // // // //           }`}
// // // // // // //           style={{
// // // // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // //           </p>
// // // // // // //           <Button
// // // // // // //             variant="default"
// // // // // // //             size="lg"
// // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // // // // // //             onClick={() =>
// // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // //             }
// // // // // // //           >
// // // // // // //             Let's Work Together
// // // // // // //           </Button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <style jsx>{`
// // // // // // //         .flip-card {
// // // // // // //           perspective: 1000px;
// // // // // // //           width: 100%;
// // // // // // //         }

// // // // // // //         .flip-card-inner {
// // // // // // //           position: relative;
// // // // // // //           width: 100%;
// // // // // // //           height: 100%;
// // // // // // //           transition: transform 0.6s;
// // // // // // //           transform-style: preserve-3d;
// // // // // // //         }

// // // // // // //         .flip-card-flipped {
// // // // // // //           transform: rotateY(180deg);
// // // // // // //         }

// // // // // // //         .flip-card-front,
// // // // // // //         .flip-card-back {
// // // // // // //           position: absolute;
// // // // // // //           width: 100%;
// // // // // // //           height: 100%;
// // // // // // //           -webkit-backface-visibility: hidden;
// // // // // // //           backface-visibility: hidden;
// // // // // // //           border-radius: 0.5rem;
// // // // // // //         }

// // // // // // //         .flip-card-back {
// // // // // // //           transform: rotateY(180deg);
// // // // // // //         }

// // // // // // //         /* Ensure smooth animations */
// // // // // // //         .project-card-wrapper {
// // // // // // //           transform: translateZ(0);
// // // // // // //           will-change: opacity, transform;
// // // // // // //         }

// // // // // // //         /* Mobile responsiveness */
// // // // // // //         @media (max-width: 640px) {
// // // // // // //           .flip-card {
// // // // // // //             min-height: 650px;
// // // // // // //           }
          
// // // // // // //           .flip-card-inner {
// // // // // // //             min-height: 650px;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // // //           .flip-card {
// // // // // // //             min-height: 580px;
// // // // // // //           }
          
// // // // // // //           .flip-card-inner {
// // // // // // //             min-height: 580px;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @media (min-width: 1024px) {
// // // // // // //           .flip-card {
// // // // // // //             min-height: 600px;
// // // // // // //           }
          
// // // // // // //           .flip-card-inner {
// // // // // // //             min-height: 600px;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Projects;
// // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // const Projects = () => {
// // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // //   const sectionRef = useRef(null);
// // // // // //   const projectRefs = useRef([]);

// // // // // //   const projects = [
// // // // // //     {
// // // // // //       title: "Smart Pet Feeder",
// // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // //       features: [
// // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // //       ],
// // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // //       type: "Hardware & Software",
// // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // //       backContent: {
// // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // //       }
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // //       features: [
// // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // //       ],
// // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // //       type: "Analytics & IoT",
// // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // //       backContent: {
// // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // //       }
// // // // // //     }
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => {
// // // // // //           const index = projectRefs.current.indexOf(entry.target);
// // // // // //           if (entry.isIntersecting) {
// // // // // //             // Element is visible
// // // // // //             if (entry.target && index !== -1) {
// // // // // //               setTimeout(() => {
// // // // // //                 entry.target.style.opacity = "1";
// // // // // //                 entry.target.style.transform = "translateY(0)";
// // // // // //               }, index * 200);
// // // // // //             }
// // // // // //           } else {
// // // // // //             // Element is not visible - reset animation
// // // // // //             if (entry.target) {
// // // // // //               entry.target.style.opacity = "0";
// // // // // //               entry.target.style.transform = "translateY(32px)";
// // // // // //             }
// // // // // //           }
// // // // // //         });
// // // // // //       },
// // // // // //       { 
// // // // // //         threshold: 0.2,
// // // // // //         rootMargin: "0px"
// // // // // //       }
// // // // // //     );

// // // // // //     projectRefs.current.forEach((projectRef) => {
// // // // // //       if (projectRef) {
// // // // // //         observer.observe(projectRef);
// // // // // //       }
// // // // // //     });

// // // // // //     return () => {
// // // // // //       projectRefs.current.forEach((projectRef) => {
// // // // // //         if (projectRef) {
// // // // // //           observer.unobserve(projectRef);
// // // // // //         }
// // // // // //       });
// // // // // //     };
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     const headerObserver = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => {
// // // // // //           if (entry.isIntersecting) {
// // // // // //             setIsVisible(true);
// // // // // //           }
// // // // // //         });
// // // // // //       },
// // // // // //       { 
// // // // // //         threshold: 0.1,
// // // // // //         rootMargin: "50px"
// // // // // //       }
// // // // // //     );

// // // // // //     if (sectionRef.current) {
// // // // // //       headerObserver.observe(sectionRef.current);
// // // // // //     }

// // // // // //     return () => {
// // // // // //       if (sectionRef.current) {
// // // // // //         headerObserver.unobserve(sectionRef.current);
// // // // // //       }
// // // // // //     };
// // // // // //   }, []);

// // // // // //   const handleViewDetails = (project) => {
// // // // // //     if (project.pdfUrl) {
// // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // //     } else {
// // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleCardHover = (index, isHovering) => {
// // // // // //     setFlippedCards(prev => ({
// // // // // //       ...prev,
// // // // // //       [index]: isHovering
// // // // // //     }));
// // // // // //   };

// // // // // //   const addToProjectRefs = (el, index) => {
// // // // // //     if (el && !projectRefs.current[index]) {
// // // // // //       projectRefs.current[index] = el;
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <section 
// // // // // //       id="projects" 
// // // // // //       ref={sectionRef}
// // // // // //       className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // //     >
// // // // // //       <div className="container mx-auto max-w-7xl">
// // // // // //         {/* Header Section */}
// // // // // //         <div 
// // // // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // // // // //             isVisible 
// // // // // //               ? "opacity-100 translate-y-0" 
// // // // // //               : "opacity-0 translate-y-8"
// // // // // //           }`}
// // // // // //         >
// // // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // //           </p>
// // // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // // //             💡 Hover on cards to flip and see detailed insights
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Projects Grid */}
// // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full mx-auto">
// // // // // //           {projects.map((project, index) => (
// // // // // //             <div
// // // // // //               key={project.title}
// // // // // //               ref={(el) => addToProjectRefs(el, index)}
// // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full"
// // // // // //             >
// // // // // //               {/* Flip Card Container */}
// // // // // //               <div 
// // // // // //                 className="flip-card w-full h-full"
// // // // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // // // //               >
// // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // //                   {/* Front Side */}
// // // // // //                   <div className="flip-card-front">
// // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // // // //                       <CardHeader className="pb-4">
// // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4">
// // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // //                             {project.type}
// // // // // //                           </Badge>
// // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // //                             {project.period}
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2">
// // // // // //                           {project.title}
// // // // // //                         </CardTitle>
// // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed">
// // // // // //                           {project.description}
// // // // // //                         </CardDescription>
// // // // // //                       </CardHeader>

// // // // // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6 flex-1 flex flex-col">
// // // // // //                         {/* Key Features */}
// // // // // //                         <div className="flex-1">
// // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // // //                           <ul className="space-y-2">
// // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // //                               <li key={featureIndex} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // //                                 {feature}
// // // // // //                               </li>
// // // // // //                             ))}
// // // // // //                           </ul>
// // // // // //                         </div>

// // // // // //                         {/* Technologies */}
// // // // // //                         <div>
// // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Technologies Used</h4>
// // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // //                             {project.technologies.map((tech) => {
// // // // // //                               const getIcon = (techName) => {
// // // // // //                                 switch (techName.toLowerCase()) {
// // // // // //                                   case "iot": return "🌐";
// // // // // //                                   case "web dashboard": return "📊";
// // // // // //                                   case "real-time monitoring": return "📡";
// // // // // //                                   case "automation": return "⚡";
// // // // // //                                   case "robotics": return "🤖";
// // // // // //                                   case "iot sensors": return "📱";
// // // // // //                                   case "embedded systems": return "🔧";
// // // // // //                                   case "remote control": return "📡";
// // // // // //                                   default: return "💻";
// // // // // //                                 }
// // // // // //                               };

// // // // // //                               return (
// // // // // //                                 <Badge
// // // // // //                                   key={tech}
// // // // // //                                   variant="secondary"
// // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs"
// // // // // //                                 >
// // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // //                                   {tech}
// // // // // //                                 </Badge>
// // // // // //                               );
// // // // // //                             })}
// // // // // //                           </div>
// // // // // //                         </div>

// // // // // //                         {/* Action Buttons */}
// // // // // //                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
// // // // // //                           <Button
// // // // // //                             variant="default"
// // // // // //                             size="sm"
// // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-8 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
// // // // // //                             onClick={(e) => {
// // // // // //                               e.stopPropagation();
// // // // // //                               handleViewDetails(project);
// // // // // //                             }}
// // // // // //                           >
// // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // //                             View Details
// // // // // //                           </Button>
// // // // // //                           <Button
// // // // // //                             variant="outline"
// // // // // //                             size="sm"
// // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8 sm:h-9"
// // // // // //                             onClick={(e) => {
// // // // // //                               e.stopPropagation();
// // // // // //                               const url =
// // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // //                               window.open(url, "_blank");
// // // // // //                             }}
// // // // // //                           >
// // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // //                             Code
// // // // // //                           </Button>
// // // // // //                         </div>
// // // // // //                       </CardContent>
// // // // // //                     </Card>
// // // // // //                   </div>

// // // // // //                   {/* Back Side */}
// // // // // //                   <div className="flip-card-back">
// // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-5 sm:p-6 flex flex-col">
// // // // // //                       <div className="h-full flex flex-col">
// // // // // //                         {/* Header */}
// // // // // //                         <div className="text-center mb-5 sm:mb-6">
// // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm">
// // // // // //                             Project Insights
// // // // // //                           </Badge>
// // // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // // // //                             {project.title}
// // // // // //                           </h3>
// // // // // //                         </div>

// // // // // //                         {/* Content */}
// // // // // //                         <div className="space-y-4 sm:space-y-4 flex-1">
// // // // // //                           {/* Challenges */}
// // // // // //                           <div>
// // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // //                               <span className="text-base">🚧</span>
// // // // // //                               Key Challenges
// // // // // //                             </h4>
// // // // // //                             <p className="text-foreground text-sm sm:text-base leading-relaxed bg-white/80 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // //                               {project.backContent.challenges}
// // // // // //                             </p>
// // // // // //                           </div>

// // // // // //                           {/* Learnings */}
// // // // // //                           <div>
// // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // //                               <span className="text-base">📚</span>
// // // // // //                               Key Learnings
// // // // // //                             </h4>
// // // // // //                             <p className="text-foreground text-sm sm:text-base leading-relaxed bg-white/80 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // //                               {project.backContent.learnings}
// // // // // //                             </p>
// // // // // //                           </div>

// // // // // //                           {/* Impact */}
// // // // // //                           <div>
// // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // //                               <span className="text-base">📈</span>
// // // // // //                               Project Impact
// // // // // //                             </h4>
// // // // // //                             <p className="text-foreground text-sm sm:text-base leading-relaxed bg-white/80 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // //                               {project.backContent.impact}
// // // // // //                             </p>
// // // // // //                           </div>
// // // // // //                         </div>

// // // // // //                         {/* Actions */}
// // // // // //                         <div className="flex flex-col sm:flex-row gap-2.5 pt-4 sm:pt-4 mt-auto">
// // // // // //                           <Button
// // // // // //                             variant="default"
// // // // // //                             size="sm"
// // // // // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9"
// // // // // //                             onClick={(e) => {
// // // // // //                               e.stopPropagation();
// // // // // //                               handleViewDetails(project);
// // // // // //                             }}
// // // // // //                           >
// // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // //                             PDF Details
// // // // // //                           </Button>
// // // // // //                           <Button
// // // // // //                             variant="outline"
// // // // // //                             size="sm"
// // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm"
// // // // // //                             onClick={(e) => {
// // // // // //                               e.stopPropagation();
// // // // // //                               const url =
// // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // //                               window.open(url, "_blank");
// // // // // //                             }}
// // // // // //                           >
// // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // //                             Source Code
// // // // // //                           </Button>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </Card>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* Call to Action */}
// // // // // //         <div 
// // // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // // // // //             isVisible 
// // // // // //               ? "opacity-100 translate-y-0" 
// // // // // //               : "opacity-0 translate-y-8"
// // // // // //           }`}
// // // // // //           style={{
// // // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // // //           }}
// // // // // //         >
// // // // // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // //           </p>
// // // // // //           <Button
// // // // // //             variant="default"
// // // // // //             size="lg"
// // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // // // // //             onClick={() =>
// // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // //             }
// // // // // //           >
// // // // // //             Let's Work Together
// // // // // //           </Button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style jsx>{`
// // // // // //         .flip-card {
// // // // // //           perspective: 1000px;
// // // // // //           width: 100%;
// // // // // //         }

// // // // // //         .flip-card-inner {
// // // // // //           position: relative;
// // // // // //           width: 100%;
// // // // // //           height: 100%;
// // // // // //           transition: transform 0.6s;
// // // // // //           transform-style: preserve-3d;
// // // // // //         }

// // // // // //         .flip-card-flipped {
// // // // // //           transform: rotateY(180deg);
// // // // // //         }

// // // // // //         .flip-card-front,
// // // // // //         .flip-card-back {
// // // // // //           position: absolute;
// // // // // //           width: 100%;
// // // // // //           height: 100%;
// // // // // //           -webkit-backface-visibility: hidden;
// // // // // //           backface-visibility: hidden;
// // // // // //           border-radius: 0.5rem;
// // // // // //         }

// // // // // //         .flip-card-back {
// // // // // //           transform: rotateY(180deg);
// // // // // //         }

// // // // // //         /* Ensure smooth animations */
// // // // // //         .project-card-wrapper {
// // // // // //           transform: translateZ(0);
// // // // // //           will-change: opacity, transform;
// // // // // //         }

// // // // // //         /* Mobile responsiveness */
// // // // // //         @media (max-width: 640px) {
// // // // // //           .flip-card {
// // // // // //             min-height: 750px;
// // // // // //           }
          
// // // // // //           .flip-card-inner {
// // // // // //             min-height: 750px;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // //           .flip-card {
// // // // // //             min-height: 580px;
// // // // // //           }
          
// // // // // //           .flip-card-inner {
// // // // // //             min-height: 580px;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (min-width: 1024px) {
// // // // // //           .flip-card {
// // // // // //             min-height: 600px;
// // // // // //           }
          
// // // // // //           .flip-card-inner {
// // // // // //             min-height: 600px;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Projects;
// // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // import { Badge } from "@/components/ui/badge";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // import { useEffect, useRef, useState } from "react";

// // // // // const Projects = () => {
// // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // //   const sectionRef = useRef(null);
// // // // //   const projectRefs = useRef([]);

// // // // //   const projects = [
// // // // //     {
// // // // //       title: "Smart Pet Feeder",
// // // // //       period: "Aug 2023 - Jan 2024",
// // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // //       features: [
// // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // //       ],
// // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // //       type: "Hardware & Software",
// // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // //       backContent: {
// // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // //       }
// // // // //     },
// // // // //     {
// // // // //       title: "Multipurpose Agriculture Robot",
// // // // //       period: "Mar 2024 - Feb 2025",
// // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // //       features: [
// // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // //       ],
// // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // //       type: "Analytics & IoT",
// // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // //       backContent: {
// // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // //       }
// // // // //     }
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((entry) => {
// // // // //           const index = projectRefs.current.indexOf(entry.target);
// // // // //           if (entry.isIntersecting) {
// // // // //             // Element is visible
// // // // //             if (entry.target && index !== -1) {
// // // // //               setTimeout(() => {
// // // // //                 entry.target.style.opacity = "1";
// // // // //                 entry.target.style.transform = "translateY(0)";
// // // // //               }, index * 200);
// // // // //             }
// // // // //           } else {
// // // // //             // Element is not visible - reset animation
// // // // //             if (entry.target) {
// // // // //               entry.target.style.opacity = "0";
// // // // //               entry.target.style.transform = "translateY(32px)";
// // // // //             }
// // // // //           }
// // // // //         });
// // // // //       },
// // // // //       { 
// // // // //         threshold: 0.2,
// // // // //         rootMargin: "0px"
// // // // //       }
// // // // //     );

// // // // //     projectRefs.current.forEach((projectRef) => {
// // // // //       if (projectRef) {
// // // // //         observer.observe(projectRef);
// // // // //       }
// // // // //     });

// // // // //     return () => {
// // // // //       projectRefs.current.forEach((projectRef) => {
// // // // //         if (projectRef) {
// // // // //           observer.unobserve(projectRef);
// // // // //         }
// // // // //       });
// // // // //     };
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const headerObserver = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((entry) => {
// // // // //           if (entry.isIntersecting) {
// // // // //             setIsVisible(true);
// // // // //           }
// // // // //         });
// // // // //       },
// // // // //       { 
// // // // //         threshold: 0.1,
// // // // //         rootMargin: "50px"
// // // // //       }
// // // // //     );

// // // // //     if (sectionRef.current) {
// // // // //       headerObserver.observe(sectionRef.current);
// // // // //     }

// // // // //     return () => {
// // // // //       if (sectionRef.current) {
// // // // //         headerObserver.unobserve(sectionRef.current);
// // // // //       }
// // // // //     };
// // // // //   }, []);

// // // // //   const handleViewDetails = (project) => {
// // // // //     if (project.pdfUrl) {
// // // // //       window.open(project.pdfUrl, "_blank");
// // // // //     } else {
// // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // //     }
// // // // //   };

// // // // //   const handleCardHover = (index, isHovering) => {
// // // // //     // Only trigger on hover for desktop
// // // // //     if (window.innerWidth >= 1024) {
// // // // //       setFlippedCards(prev => ({
// // // // //         ...prev,
// // // // //         [index]: isHovering
// // // // //       }));
// // // // //     }
// // // // //   };

// // // // //   const handleCardClick = (index) => {
// // // // //     // Toggle flip on click for mobile/tablet
// // // // //     setFlippedCards(prev => ({
// // // // //       ...prev,
// // // // //       [index]: !prev[index]
// // // // //     }));
// // // // //   };

// // // // //   const addToProjectRefs = (el, index) => {
// // // // //     if (el && !projectRefs.current[index]) {
// // // // //       projectRefs.current[index] = el;
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <section 
// // // // //       id="projects" 
// // // // //       ref={sectionRef}
// // // // //       className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // //     >
// // // // //       <div className="container mx-auto max-w-7xl">
// // // // //         {/* Header Section */}
// // // // //         <div 
// // // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // // // //             isVisible 
// // // // //               ? "opacity-100 translate-y-0" 
// // // // //               : "opacity-0 translate-y-8"
// // // // //           }`}
// // // // //         >
// // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // //           </p>
// // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Projects Grid */}
// // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full mx-auto">
// // // // //           {projects.map((project, index) => (
// // // // //             <div
// // // // //               key={project.title}
// // // // //               ref={(el) => addToProjectRefs(el, index)}
// // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full"
// // // // //             >
// // // // //               {/* Flip Card Container */}
// // // // //               <div 
// // // // //                 className="flip-card w-full h-full"
// // // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // // //                 onClick={() => handleCardClick(index)}
// // // // //               >
// // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // //                   {/* Front Side */}
// // // // //                   <div className="flip-card-front">
// // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // // //                       <CardHeader className="pb-4">
// // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4">
// // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // //                             {project.type}
// // // // //                           </Badge>
// // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // //                             <Calendar size={14} className="mr-1" />
// // // // //                             {project.period}
// // // // //                           </div>
// // // // //                         </div>
// // // // //                         <CardTitle className="text-lg sm:text-xl mb-2">
// // // // //                           {project.title}
// // // // //                         </CardTitle>
// // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed">
// // // // //                           {project.description}
// // // // //                         </CardDescription>
// // // // //                       </CardHeader>

// // // // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6 flex-1 flex flex-col">
// // // // //                         {/* Key Features */}
// // // // //                         <div className="flex-1">
// // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // //                           <ul className="space-y-2">
// // // // //                             {project.features.map((feature, featureIndex) => (
// // // // //                               <li key={featureIndex} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // //                                 {feature}
// // // // //                               </li>
// // // // //                             ))}
// // // // //                           </ul>
// // // // //                         </div>

// // // // //                         {/* Technologies */}
// // // // //                         <div>
// // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Technologies Used</h4>
// // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // //                             {project.technologies.map((tech) => {
// // // // //                               const getIcon = (techName) => {
// // // // //                                 switch (techName.toLowerCase()) {
// // // // //                                   case "iot": return "🌐";
// // // // //                                   case "web dashboard": return "📊";
// // // // //                                   case "real-time monitoring": return "📡";
// // // // //                                   case "automation": return "⚡";
// // // // //                                   case "robotics": return "🤖";
// // // // //                                   case "iot sensors": return "📱";
// // // // //                                   case "embedded systems": return "🔧";
// // // // //                                   case "remote control": return "📡";
// // // // //                                   default: return "💻";
// // // // //                                 }
// // // // //                               };

// // // // //                               return (
// // // // //                                 <Badge
// // // // //                                   key={tech}
// // // // //                                   variant="secondary"
// // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs"
// // // // //                                 >
// // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // //                                   {tech}
// // // // //                                 </Badge>
// // // // //                               );
// // // // //                             })}
// // // // //                           </div>
// // // // //                         </div>

// // // // //                         {/* Action Buttons */}
// // // // //                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
// // // // //                           <Button
// // // // //                             variant="default"
// // // // //                             size="sm"
// // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-8 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
// // // // //                             onClick={(e) => {
// // // // //                               e.stopPropagation();
// // // // //                               handleViewDetails(project);
// // // // //                             }}
// // // // //                           >
// // // // //                             <FileText size={14} className="mr-1.5" />
// // // // //                             View Details
// // // // //                           </Button>
// // // // //                           <Button
// // // // //                             variant="outline"
// // // // //                             size="sm"
// // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8 sm:h-9"
// // // // //                             onClick={(e) => {
// // // // //                               e.stopPropagation();
// // // // //                               const url =
// // // // //                                 project.title === "Smart Pet Feeder"
// // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // //                               window.open(url, "_blank");
// // // // //                             }}
// // // // //                           >
// // // // //                             <Github size={14} className="mr-1.5" />
// // // // //                             Code
// // // // //                           </Button>
// // // // //                         </div>
// // // // //                       </CardContent>
// // // // //                     </Card>
// // // // //                   </div>

// // // // //                   {/* Back Side */}
// // // // //                   <div className="flip-card-back">
// // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-5 sm:p-6 flex flex-col">
// // // // //                       <div className="h-full flex flex-col">
// // // // //                         {/* Header */}
// // // // //                         <div className="text-center mb-5 sm:mb-6">
// // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm">
// // // // //                             Project Insights
// // // // //                           </Badge>
// // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // // //                             {project.title}
// // // // //                           </h3>
// // // // //                         </div>

// // // // //                         {/* Content */}
// // // // //                         <div className="space-y-4 sm:space-y-4 flex-1">
// // // // //                           {/* Challenges */}
// // // // //                           <div>
// // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // //                               <span className="text-base">🚧</span>
// // // // //                               Key Challenges
// // // // //                             </h4>
// // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // //                               {project.backContent.challenges}
// // // // //                             </p>
// // // // //                           </div>

// // // // //                           {/* Learnings */}
// // // // //                           <div>
// // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // //                               <span className="text-base">📚</span>
// // // // //                               Key Learnings
// // // // //                             </h4>
// // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // //                               {project.backContent.learnings}
// // // // //                             </p>
// // // // //                           </div>

// // // // //                           {/* Impact */}
// // // // //                           <div>
// // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // //                               <span className="text-base">📈</span>
// // // // //                               Project Impact
// // // // //                             </h4>
// // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // //                               {project.backContent.impact}
// // // // //                             </p>
// // // // //                           </div>
// // // // //                         </div>

// // // // //                         {/* Actions */}
// // // // //                         <div className="flex flex-col sm:flex-row gap-2.5 pt-4 sm:pt-4 mt-auto">
// // // // //                           <Button
// // // // //                             variant="default"
// // // // //                             size="sm"
// // // // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9"
// // // // //                             onClick={(e) => {
// // // // //                               e.stopPropagation();
// // // // //                               handleViewDetails(project);
// // // // //                             }}
// // // // //                           >
// // // // //                             <FileText size={14} className="mr-1.5" />
// // // // //                             PDF Details
// // // // //                           </Button>
// // // // //                           <Button
// // // // //                             variant="outline"
// // // // //                             size="sm"
// // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm"
// // // // //                             onClick={(e) => {
// // // // //                               e.stopPropagation();
// // // // //                               const url =
// // // // //                                 project.title === "Smart Pet Feeder"
// // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // //                               window.open(url, "_blank");
// // // // //                             }}
// // // // //                           >
// // // // //                             <Github size={14} className="mr-1.5" />
// // // // //                             Source Code
// // // // //                           </Button>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </Card>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Call to Action */}
// // // // //         <div 
// // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // // // //             isVisible 
// // // // //               ? "opacity-100 translate-y-0" 
// // // // //               : "opacity-0 translate-y-8"
// // // // //           }`}
// // // // //           style={{
// // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // //           }}
// // // // //         >
// // // // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // //           </p>
// // // // //           <Button
// // // // //             variant="default"
// // // // //             size="lg"
// // // // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // // // //             onClick={() =>
// // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // //             }
// // // // //           >
// // // // //             Let's Work Together
// // // // //           </Button>
// // // // //         </div>
// // // // //       </div>

// // // // //       <style jsx>{`
// // // // //         .flip-card {
// // // // //           perspective: 1000px;
// // // // //           width: 100%;
// // // // //           cursor: pointer;
// // // // //         }

// // // // //         .flip-card-inner {
// // // // //           position: relative;
// // // // //           width: 100%;
// // // // //           height: 100%;
// // // // //           transition: transform 0.6s;
// // // // //           transform-style: preserve-3d;
// // // // //         }

// // // // //         .flip-card-flipped {
// // // // //           transform: rotateY(180deg);
// // // // //         }

// // // // //         .flip-card-front,
// // // // //         .flip-card-back {
// // // // //           position: absolute;
// // // // //           width: 100%;
// // // // //           height: 100%;
// // // // //           -webkit-backface-visibility: hidden;
// // // // //           backface-visibility: hidden;
// // // // //           border-radius: 0.5rem;
// // // // //         }

// // // // //         .flip-card-back {
// // // // //           transform: rotateY(180deg);
// // // // //         }

// // // // //         /* Ensure smooth animations */
// // // // //         .project-card-wrapper {
// // // // //           transform: translateZ(0);
// // // // //           will-change: opacity, transform;
// // // // //         }

// // // // //         /* Mobile responsiveness - INCREASED SIZES */
// // // // //         @media (max-width: 640px) {
// // // // //           .flip-card {
// // // // //             min-height: 850px;
// // // // //           }
          
// // // // //           .flip-card-inner {
// // // // //             min-height: 850px;
// // // // //           }
// // // // //         }

// // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // //           .flip-card {
// // // // //             min-height: 650px;
// // // // //           }
          
// // // // //           .flip-card-inner {
// // // // //             min-height: 650px;
// // // // //           }
// // // // //         }

// // // // //         @media (min-width: 1024px) {
// // // // //           .flip-card {
// // // // //             min-height: 600px;
// // // // //           }
          
// // // // //           .flip-card-inner {
// // // // //             min-height: 600px;
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Projects;
// // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Badge } from "@/components/ui/badge";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // import { useEffect, useRef, useState } from "react";

// // // // const Projects = () => {
// // // //   const [isVisible, setIsVisible] = useState(false);
// // // //   const [flippedCards, setFlippedCards] = useState({});
// // // //   const sectionRef = useRef(null);
// // // //   const projectRefs = useRef([]);

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
// // // //       type: "Hardware & Software",
// // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // //       backContent: {
// // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // //       }
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
// // // //       type: "Analytics & IoT",
// // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // //       backContent: {
// // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // //       }
// // // //     }
// // // //   ];

// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           const index = projectRefs.current.indexOf(entry.target);
// // // //           if (entry.isIntersecting) {
// // // //             // Element is visible
// // // //             if (entry.target && index !== -1) {
// // // //               setTimeout(() => {
// // // //                 entry.target.style.opacity = "1";
// // // //                 entry.target.style.transform = "translateY(0)";
// // // //               }, index * 200);
// // // //             }
// // // //           } else {
// // // //             // Element is not visible - reset animation
// // // //             if (entry.target) {
// // // //               entry.target.style.opacity = "0";
// // // //               entry.target.style.transform = "translateY(32px)";
// // // //             }
// // // //           }
// // // //         });
// // // //       },
// // // //       { 
// // // //         threshold: 0.2,
// // // //         rootMargin: "0px"
// // // //       }
// // // //     );

// // // //     projectRefs.current.forEach((projectRef) => {
// // // //       if (projectRef) {
// // // //         observer.observe(projectRef);
// // // //       }
// // // //     });

// // // //     return () => {
// // // //       projectRefs.current.forEach((projectRef) => {
// // // //         if (projectRef) {
// // // //           observer.unobserve(projectRef);
// // // //         }
// // // //       });
// // // //     };
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const headerObserver = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) {
// // // //             setIsVisible(true);
// // // //           }
// // // //         });
// // // //       },
// // // //       { 
// // // //         threshold: 0.1,
// // // //         rootMargin: "50px"
// // // //       }
// // // //     );

// // // //     if (sectionRef.current) {
// // // //       headerObserver.observe(sectionRef.current);
// // // //     }

// // // //     return () => {
// // // //       if (sectionRef.current) {
// // // //         headerObserver.unobserve(sectionRef.current);
// // // //       }
// // // //     };
// // // //   }, []);

// // // //   const handleViewDetails = (project) => {
// // // //     if (project.pdfUrl) {
// // // //       window.open(project.pdfUrl, "_blank");
// // // //     } else {
// // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // //     }
// // // //   };

// // // //   const handleCardHover = (index, isHovering) => {
// // // //     // Only trigger on hover for desktop
// // // //     if (window.innerWidth >= 1024) {
// // // //       setFlippedCards(prev => ({
// // // //         ...prev,
// // // //         [index]: isHovering
// // // //       }));
// // // //     }
// // // //   };

// // // //   const handleCardClick = (index) => {
// // // //     // Toggle flip on click for mobile/tablet
// // // //     setFlippedCards(prev => ({
// // // //       ...prev,
// // // //       [index]: !prev[index]
// // // //     }));
// // // //   };

// // // //   const addToProjectRefs = (el, index) => {
// // // //     if (el && !projectRefs.current[index]) {
// // // //       projectRefs.current[index] = el;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section 
// // // //       id="projects" 
// // // //       ref={sectionRef}
// // // //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // //     >
// // // //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
// // // //         {/* Header Section */}
// // // //         <div 
// // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // // //             isVisible 
// // // //               ? "opacity-100 translate-y-0" 
// // // //               : "opacity-0 translate-y-8"
// // // //           }`}
// // // //         >
// // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // //           </p>
// // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// // // //           </p>
// // // //         </div>

// // // //         {/* Projects Grid */}
// // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full mx-auto px-0">
// // // //           {projects.map((project, index) => (
// // // //             <div
// // // //               key={project.title}
// // // //               ref={(el) => addToProjectRefs(el, index)}
// // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full px-3 sm:px-0"
// // // //             >
// // // //               {/* Flip Card Container */}
// // // //               <div 
// // // //                 className="flip-card w-full h-full"
// // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // //                 onClick={() => handleCardClick(index)}
// // // //               >
// // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // //                   {/* Front Side */}
// // // //                   <div className="flip-card-front">
// // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // //                       <CardHeader className="pb-4">
// // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4">
// // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // //                             {project.type}
// // // //                           </Badge>
// // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // //                             <Calendar size={14} className="mr-1" />
// // // //                             {project.period}
// // // //                           </div>
// // // //                         </div>
// // // //                         <CardTitle className="text-lg sm:text-xl mb-2">
// // // //                           {project.title}
// // // //                         </CardTitle>
// // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed">
// // // //                           {project.description}
// // // //                         </CardDescription>
// // // //                       </CardHeader>

// // // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6 flex-1 flex flex-col">
// // // //                         {/* Key Features */}
// // // //                         <div className="flex-1">
// // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // //                           <ul className="space-y-2">
// // // //                             {project.features.map((feature, featureIndex) => (
// // // //                               <li key={featureIndex} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // //                                 {feature}
// // // //                               </li>
// // // //                             ))}
// // // //                           </ul>
// // // //                         </div>

// // // //                         {/* Technologies */}
// // // //                         <div>
// // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Technologies Used</h4>
// // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // //                             {project.technologies.map((tech) => {
// // // //                               const getIcon = (techName) => {
// // // //                                 switch (techName.toLowerCase()) {
// // // //                                   case "iot": return "🌐";
// // // //                                   case "web dashboard": return "📊";
// // // //                                   case "real-time monitoring": return "📡";
// // // //                                   case "automation": return "⚡";
// // // //                                   case "robotics": return "🤖";
// // // //                                   case "iot sensors": return "📱";
// // // //                                   case "embedded systems": return "🔧";
// // // //                                   case "remote control": return "📡";
// // // //                                   default: return "💻";
// // // //                                 }
// // // //                               };

// // // //                               return (
// // // //                                 <Badge
// // // //                                   key={tech}
// // // //                                   variant="secondary"
// // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs"
// // // //                                 >
// // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // //                                   {tech}
// // // //                                 </Badge>
// // // //                               );
// // // //                             })}
// // // //                           </div>
// // // //                         </div>

// // // //                         {/* Action Buttons */}
// // // //                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4" onClick={(e) => e.stopPropagation()}>
// // // //                           <Button
// // // //                             variant="default"
// // // //                             size="sm"
// // // //                             className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
// // // //                             onClick={(e) => {
// // // //                               e.stopPropagation();
// // // //                               handleViewDetails(project);
// // // //                             }}
// // // //                           >
// // // //                             <FileText size={14} className="mr-1.5" />
// // // //                             View Details
// // // //                           </Button>
// // // //                           <Button
// // // //                             variant="outline"
// // // //                             size="sm"
// // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9"
// // // //                             onClick={(e) => {
// // // //                               e.stopPropagation();
// // // //                               const url =
// // // //                                 project.title === "Smart Pet Feeder"
// // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // //                                   : "https://github.com/Thomasjose-tech";
// // // //                               window.open(url, "_blank");
// // // //                             }}
// // // //                           >
// // // //                             <Github size={14} className="mr-1.5" />
// // // //                             Code
// // // //                           </Button>
// // // //                         </div>
// // // //                       </CardContent>
// // // //                     </Card>
// // // //                   </div>

// // // //                   {/* Back Side */}
// // // //                   <div className="flip-card-back">
// // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-5 sm:p-6 flex flex-col">
// // // //                       <div className="h-full flex flex-col">
// // // //                         {/* Header */}
// // // //                         <div className="text-center mb-5 sm:mb-6">
// // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm">
// // // //                             Project Insights
// // // //                           </Badge>
// // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // //                             {project.title}
// // // //                           </h3>
// // // //                         </div>

// // // //                         {/* Content */}
// // // //                         <div className="space-y-4 sm:space-y-4 flex-1">
// // // //                           {/* Challenges */}
// // // //                           <div>
// // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // //                               <span className="text-base">🚧</span>
// // // //                               Key Challenges
// // // //                             </h4>
// // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // //                               {project.backContent.challenges}
// // // //                             </p>
// // // //                           </div>

// // // //                           {/* Learnings */}
// // // //                           <div>
// // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // //                               <span className="text-base">📚</span>
// // // //                               Key Learnings
// // // //                             </h4>
// // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // //                               {project.backContent.learnings}
// // // //                             </p>
// // // //                           </div>

// // // //                           {/* Impact */}
// // // //                           <div>
// // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // //                               <span className="text-base">📈</span>
// // // //                               Project Impact
// // // //                             </h4>
// // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // //                               {project.backContent.impact}
// // // //                             </p>
// // // //                           </div>
// // // //                         </div>

// // // //                         {/* Actions */}
// // // //                         <div className="flex flex-col sm:flex-row gap-2.5 pt-4 sm:pt-4 mt-auto" onClick={(e) => e.stopPropagation()}>
// // // //                           <Button
// // // //                             variant="default"
// // // //                             size="sm"
// // // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9"
// // // //                             onClick={(e) => {
// // // //                               e.stopPropagation();
// // // //                               handleViewDetails(project);
// // // //                             }}
// // // //                           >
// // // //                             <FileText size={14} className="mr-1.5" />
// // // //                             PDF Details
// // // //                           </Button>
// // // //                           <Button
// // // //                             variant="outline"
// // // //                             size="sm"
// // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm"
// // // //                             onClick={(e) => {
// // // //                               e.stopPropagation();
// // // //                               const url =
// // // //                                 project.title === "Smart Pet Feeder"
// // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // //                                   : "https://github.com/Thomasjose-tech";
// // // //                               window.open(url, "_blank");
// // // //                             }}
// // // //                           >
// // // //                             <Github size={14} className="mr-1.5" />
// // // //                             Source Code
// // // //                           </Button>
// // // //                         </div>
// // // //                       </div>
// // // //                     </Card>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Call to Action */}
// // // //         <div 
// // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // // //             isVisible 
// // // //               ? "opacity-100 translate-y-0" 
// // // //               : "opacity-0 translate-y-8"
// // // //           }`}
// // // //           style={{
// // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // //           }}
// // // //         >
// // // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // // //             Interested in seeing more of my work or collaborating on a project?
// // // //           </p>
// // // //           <Button
// // // //             variant="default"
// // // //             size="lg"
// // // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // // //             onClick={() =>
// // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // //             }
// // // //           >
// // // //             Let's Work Together
// // // //           </Button>
// // // //         </div>
// // // //       </div>

// // // //       <style jsx>{`
// // // //         .flip-card {
// // // //           perspective: 1000px;
// // // //           width: 100%;
// // // //           cursor: pointer;
// // // //         }

// // // //         .flip-card-inner {
// // // //           position: relative;
// // // //           width: 100%;
// // // //           height: 100%;
// // // //           transition: transform 0.6s;
// // // //           transform-style: preserve-3d;
// // // //         }

// // // //         .flip-card-flipped {
// // // //           transform: rotateY(180deg);
// // // //         }

// // // //         .flip-card-front,
// // // //         .flip-card-back {
// // // //           position: absolute;
// // // //           width: 100%;
// // // //           height: 100%;
// // // //           -webkit-backface-visibility: hidden;
// // // //           backface-visibility: hidden;
// // // //           border-radius: 0.5rem;
// // // //         }

// // // //         .flip-card-back {
// // // //           transform: rotateY(180deg);
// // // //         }

// // // //         /* Ensure smooth animations */
// // // //         .project-card-wrapper {
// // // //           transform: translateZ(0);
// // // //           will-change: opacity, transform;
// // // //         }

// // // //         /* Mobile responsiveness - INCREASED SIZES */
// // // //         @media (max-width: 640px) {
// // // //           .flip-card {
// // // //             min-height: 900px;
// // // //           }
          
// // // //           .flip-card-inner {
// // // //             min-height: 900px;
// // // //           }
// // // //         }

// // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // //           .flip-card {
// // // //             min-height: 650px;
// // // //           }
          
// // // //           .flip-card-inner {
// // // //             min-height: 650px;
// // // //           }
// // // //         }

// // // //         @media (min-width: 1024px) {
// // // //           .flip-card {
// // // //             min-height: 600px;
// // // //           }
          
// // // //           .flip-card-inner {
// // // //             min-height: 600px;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Projects;
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";
// // // import { Calendar, Github, FileText } from "lucide-react";
// // // import { useEffect, useRef, useState } from "react";

// // // const Projects = () => {
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const [flippedCards, setFlippedCards] = useState({});
// // //   const sectionRef = useRef(null);
// // //   const projectRefs = useRef([]);

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
// // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // //       backContent: {
// // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // //       }
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
// // //       type: "Analytics & IoT",
// // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // //       backContent: {
// // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // //       }
// // //     }
// // //   ];

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           const index = projectRefs.current.indexOf(entry.target);
// // //           if (entry.isIntersecting) {
// // //             // Element is visible
// // //             if (entry.target && index !== -1) {
// // //               setTimeout(() => {
// // //                 (entry.target as HTMLElement).style.opacity = "1";
// // //                 (entry.target as HTMLElement).style.transform = "translateY(0)";
// // //               }, index * 200);
// // //             }
// // //           } else {
// // //             // Element is not visible - reset animation
// // //             if (entry.target) {
// // //               (entry.target as HTMLElement).style.opacity = "0";
// // //               (entry.target as HTMLElement).style.transform = "translateY(32px)";
// // //             }
// // //           }
// // //         });
// // //       },
// // //       { 
// // //         threshold: 0.2,
// // //         rootMargin: "0px"
// // //       }
// // //     );

// // //     projectRefs.current.forEach((projectRef) => {
// // //       if (projectRef) {
// // //         observer.observe(projectRef);
// // //       }
// // //     });

// // //     return () => {
// // //       projectRefs.current.forEach((projectRef) => {
// // //         if (projectRef) {
// // //           observer.unobserve(projectRef);
// // //         }
// // //       });
// // //     };
// // //   }, []);

// // //   useEffect(() => {
// // //     const headerObserver = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             setIsVisible(true);
// // //           }
// // //         });
// // //       },
// // //       { 
// // //         threshold: 0.1,
// // //         rootMargin: "50px"
// // //       }
// // //     );

// // //     if (sectionRef.current) {
// // //       headerObserver.observe(sectionRef.current);
// // //     }

// // //     return () => {
// // //       if (sectionRef.current) {
// // //         headerObserver.unobserve(sectionRef.current);
// // //       }
// // //     };
// // //   }, []);

// // //   const handleViewDetails = (project) => {
// // //     if (project.pdfUrl) {
// // //       window.open(project.pdfUrl, "_blank");
// // //     } else {
// // //       alert(`PDF for ${project.title} will be available soon!`);
// // //     }
// // //   };

// // //   const handleCardHover = (index, isHovering, e) => {
// // //     // Check if hovering over button area
// // //     const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
// // //     // Only trigger on hover for desktop and not on button areas
// // //     if (window.innerWidth >= 1024 && !isButtonArea) {
// // //       setFlippedCards(prev => ({
// // //         ...prev,
// // //         [index]: isHovering
// // //       }));
// // //     }
// // //   };

// // //   const handleCardClick = (index, e) => {
// // //     // Don't toggle if clicking on buttons
// // //     if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
// // //       return;
// // //     }
    
// // //     // Toggle flip on click for mobile/tablet
// // //     setFlippedCards(prev => ({
// // //       ...prev,
// // //       [index]: !prev[index]
// // //     }));
// // //   };

// // //   const addToProjectRefs = (el, index) => {
// // //     if (el && !projectRefs.current[index]) {
// // //       projectRefs.current[index] = el;
// // //     }
// // //   };

// // //   return (
// // //     <section 
// // //       id="projects" 
// // //       ref={sectionRef}
// // //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // //     >
// // //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
// // //         {/* Header Section */}
// // //         <div 
// // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // //             isVisible 
// // //               ? "opacity-100 translate-y-0" 
// // //               : "opacity-0 translate-y-8"
// // //           }`}
// // //         >
// // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // //             Innovative solutions combining hardware and software to solve real-world problems
// // //           </p>
// // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// // //           </p>
// // //         </div>

// // //         {/* Projects Grid */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0">
// // //           {projects.map((project, index) => (
// // //             <div
// // //               key={project.title}
// // //               ref={(el) => addToProjectRefs(el, index)}
// // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full px-3 sm:px-0"
// // //             >
// // //               {/* Flip Card Container */}
// // //               <div 
// // //                 className="flip-card w-full h-full"
// // //                 onMouseEnter={(e) => handleCardHover(index, true, e)}
// // //                 onMouseLeave={(e) => handleCardHover(index, false, e)}
// // //                 onClick={(e) => handleCardClick(index, e)}
// // //               >
// // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // //                   {/* Front Side */}
// // //                   <div className="flip-card-front">
// // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // //                       <CardHeader className="pb-4 animate-fade-in">
// // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4 animate-slide-in-left">
// // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // //                             {project.type}
// // //                           </Badge>
// // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // //                             <Calendar size={14} className="mr-1" />
// // //                             {project.period}
// // //                           </div>
// // //                         </div>
// // //                         <CardTitle className="text-lg sm:text-xl mb-2 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// // //                           {project.title}
// // //                         </CardTitle>
// // //                         <CardDescription className="text-sm sm:text-base leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
// // //                           {project.description}
// // //                         </CardDescription>
// // //                       </CardHeader>

// // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6 flex-1 flex flex-col">
// // //                         {/* Key Features */}
// // //                         <div className="flex-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
// // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base animate-slide-in-right">Key Features & Achievements</h4>
// // //                           <ul className="space-y-2">
// // //                             {project.features.map((feature, featureIndex) => (
// // //                               <li 
// // //                                 key={featureIndex} 
// // //                                 className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start animate-slide-in-left"
// // //                                 style={{animationDelay: `${0.4 + featureIndex * 0.1}s`}}
// // //                               >
// // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // //                                 {feature}
// // //                               </li>
// // //                             ))}
// // //                           </ul>
// // //                         </div>

// // //                         {/* Technologies */}
// // //                         <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
// // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base animate-slide-in-right">Technologies Used</h4>
// // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // //                             {project.technologies.map((tech, techIndex) => {
// // //                               const getIcon = (techName) => {
// // //                                 switch (techName.toLowerCase()) {
// // //                                   case "iot": return "🌐";
// // //                                   case "web dashboard": return "📊";
// // //                                   case "real-time monitoring": return "📡";
// // //                                   case "automation": return "⚡";
// // //                                   case "robotics": return "🤖";
// // //                                   case "iot sensors": return "📱";
// // //                                   case "embedded systems": return "🔧";
// // //                                   case "remote control": return "📡";
// // //                                   default: return "💻";
// // //                                 }
// // //                               };

// // //                               return (
// // //                                 <Badge
// // //                                   key={tech}
// // //                                   variant="secondary"
// // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs animate-scale-in"
// // //                                   style={{animationDelay: `${0.8 + techIndex * 0.05}s`}}
// // //                                 >
// // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // //                                   {tech}
// // //                                 </Badge>
// // //                               );
// // //                             })}
// // //                           </div>
// // //                         </div>

// // //                         {/* Action Buttons */}
// // //                         <div 
// // //                           className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4 no-flip-zone animate-fade-in" 
// // //                           style={{animationDelay: '1s'}}
// // //                           onMouseEnter={(e) => e.stopPropagation()}
// // //                         >
// // //                           <Button
// // //                             variant="default"
// // //                             size="sm"
// // //                             className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto animate-bounce-in"
// // //                             style={{animationDelay: '1.1s'}}
// // //                             onClick={(e) => {
// // //                               e.stopPropagation();
// // //                               handleViewDetails(project);
// // //                             }}
// // //                           >
// // //                             <FileText size={14} className="mr-1.5" />
// // //                             View Details
// // //                           </Button>
// // //                           <Button
// // //                             variant="outline"
// // //                             size="sm"
// // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9 animate-bounce-in"
// // //                             style={{animationDelay: '1.2s'}}
// // //                             onClick={(e) => {
// // //                               e.stopPropagation();
// // //                               const url =
// // //                                 project.title === "Smart Pet Feeder"
// // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // //                                   : "https://github.com/Thomasjose-tech";
// // //                               window.open(url, "_blank");
// // //                             }}
// // //                           >
// // //                             <Github size={14} className="mr-1.5" />
// // //                             Code
// // //                           </Button>
// // //                         </div>
// // //                       </CardContent>
// // //                     </Card>
// // //                   </div>

// // //                   {/* Back Side */}
// // //                   <div className="flip-card-back">
// // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-5 sm:p-6 flex flex-col">
// // //                       <div className="h-full flex flex-col">
// // //                         {/* Header */}
// // //                         <div className="text-center mb-5 sm:mb-6 animate-fade-in">
// // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm animate-scale-in">
// // //                             Project Insights
// // //                           </Badge>
// // //                           <h3 className="text-lg sm:text-xl font-bold text-primary animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// // //                             {project.title}
// // //                           </h3>
// // //                         </div>

// // //                         {/* Content */}
// // //                         <div className="space-y-4 sm:space-y-4 flex-1">
// // //                           {/* Challenges */}
// // //                           <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
// // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // //                               <span className="text-base">🚧</span>
// // //                               Key Challenges
// // //                             </h4>
// // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.3s'}}>
// // //                               {project.backContent.challenges}
// // //                             </p>
// // //                           </div>

// // //                           {/* Learnings */}
// // //                           <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
// // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // //                               <span className="text-base">📚</span>
// // //                               Key Learnings
// // //                             </h4>
// // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.5s'}}>
// // //                               {project.backContent.learnings}
// // //                             </p>
// // //                           </div>

// // //                           {/* Impact */}
// // //                           <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
// // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // //                               <span className="text-base">📈</span>
// // //                               Project Impact
// // //                             </h4>
// // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.7s'}}>
// // //                               {project.backContent.impact}
// // //                             </p>
// // //                           </div>
// // //                         </div>

// // //                         {/* Actions */}
// // //                         <div 
// // //                           className="flex flex-col sm:flex-row gap-2.5 pt-4 sm:pt-4 mt-auto no-flip-zone animate-fade-in" 
// // //                           style={{animationDelay: '0.8s'}}
// // //                           onMouseEnter={(e) => e.stopPropagation()}
// // //                         >
// // //                           <Button
// // //                             variant="default"
// // //                             size="sm"
// // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9 animate-bounce-in"
// // //                             style={{animationDelay: '0.9s'}}
// // //                             onClick={(e) => {
// // //                               e.stopPropagation();
// // //                               handleViewDetails(project);
// // //                             }}
// // //                           >
// // //                             <FileText size={14} className="mr-1.5" />
// // //                             PDF Details
// // //                           </Button>
// // //                           <Button
// // //                             variant="outline"
// // //                             size="sm"
// // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm animate-bounce-in"
// // //                             style={{animationDelay: '1s'}}
// // //                             onClick={(e) => {
// // //                               e.stopPropagation();
// // //                               const url =
// // //                                 project.title === "Smart Pet Feeder"
// // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // //                                   : "https://github.com/Thomasjose-tech";
// // //                               window.open(url, "_blank");
// // //                             }}
// // //                           >
// // //                             <Github size={14} className="mr-1.5" />
// // //                             Source Code
// // //                           </Button>
// // //                         </div>
// // //                       </div>
// // //                     </Card>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Call to Action */}
// // //         <div 
// // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // //             isVisible 
// // //               ? "opacity-100 translate-y-0" 
// // //               : "opacity-0 translate-y-8"
// // //           }`}
// // //           style={{
// // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // //           }}
// // //         >
// // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // //             Interested in seeing more of my work or collaborating on a project?
// // //           </p>
// // //           <Button
// // //             variant="default"
// // //             size="lg"
// // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // //             onClick={() =>
// // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // //             }
// // //           >
// // //             Let's Work Together
// // //           </Button>
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         /* Flip Card Styles */
// // //         .flip-card {
// // //           perspective: 1000px;
// // //           width: 100%;
// // //           cursor: pointer;
// // //         }

// // //         .flip-card-inner {
// // //           position: relative;
// // //           width: 100%;
// // //           height: 100%;
// // //           transition: transform 0.6s;
// // //           transform-style: preserve-3d;
// // //         }

// // //         .flip-card-flipped {
// // //           transform: rotateY(180deg);
// // //         }

// // //         .flip-card-front,
// // //         .flip-card-back {
// // //           position: absolute;
// // //           width: 100%;
// // //           height: 100%;
// // //           -webkit-backface-visibility: hidden;
// // //           backface-visibility: hidden;
// // //           border-radius: 0.5rem;
// // //         }

// // //         .flip-card-back {
// // //           transform: rotateY(180deg);
// // //         }

// // //         /* No-flip zone for buttons */
// // //         .no-flip-zone {
// // //           pointer-events: auto;
// // //         }

// // //         /* Animation Keyframes */
// // //         @keyframes fadeIn {
// // //           from {
// // //             opacity: 0;
// // //           }
// // //           to {
// // //             opacity: 1;
// // //           }
// // //         }

// // //         @keyframes slideInLeft {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateX(-20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateX(0);
// // //           }
// // //         }

// // //         @keyframes slideInRight {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateX(20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateX(0);
// // //           }
// // //         }

// // //         @keyframes slideInUp {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         @keyframes scaleIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: scale(0.8);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: scale(1);
// // //           }
// // //         }

// // //         @keyframes bounceIn {
// // //           0% {
// // //             opacity: 0;
// // //             transform: scale(0.3);
// // //           }
// // //           50% {
// // //             transform: scale(1.05);
// // //           }
// // //           70% {
// // //             transform: scale(0.9);
// // //           }
// // //           100% {
// // //             opacity: 1;
// // //             transform: scale(1);
// // //           }
// // //         }

// // //         /* Animation Classes */
// // //         .animate-fade-in {
// // //           animation: fadeIn 0.6s ease-out forwards;
// // //           opacity: 0;
// // //         }

// // //         .animate-slide-in-left {
// // //           animation: slideInLeft 0.6s ease-out forwards;
// // //           opacity: 0;
// // //         }

// // //         .animate-slide-in-right {
// // //           animation: slideInRight 0.6s ease-out forwards;
// // //           opacity: 0;
// // //         }

// // //         .animate-slide-in-up {
// // //           animation: slideInUp 0.6s ease-out forwards;
// // //           opacity: 0;
// // //         }

// // //         .animate-scale-in {
// // //           animation: scaleIn 0.4s ease-out forwards;
// // //           opacity: 0;
// // //         }

// // //         .animate-bounce-in {
// // //           animation: bounceIn 0.6s ease-out forwards;
// // //           opacity: 0;
// // //         }

// // //         /* Ensure smooth animations */
// // //         .project-card-wrapper {
// // //           transform: translateZ(0);
// // //           will-change: opacity, transform;
// // //         }

// // //         /* Mobile responsiveness */
// // //         @media (max-width: 640px) {
// // //           .flip-card {
// // //             min-height: 900px;
// // //           }
          
// // //           .flip-card-inner {
// // //             min-height: 900px;
// // //           }
// // //         }

// // //         @media (min-width: 641px) and (max-width: 1023px) {
// // //           .flip-card {
// // //             min-height: 650px;
// // //           }
          
// // //           .flip-card-inner {
// // //             min-height: 650px;
// // //           }
// // //         }

// // //         @media (min-width: 1024px) {
// // //           .flip-card {
// // //             min-height: 600px;
// // //           }
          
// // //           .flip-card-inner {
// // //             min-height: 600px;
// // //           }
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default Projects;
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { Calendar, Github, FileText } from "lucide-react";
// // import { useEffect, useRef, useState } from "react";

// // const Projects = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [flippedCards, setFlippedCards] = useState({});
// //   const sectionRef = useRef(null);
// //   const projectRefs = useRef([]);

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
// //       pdfUrl: "/assets/certificates/thomas.pdf",
// //       backContent: {
// //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// //       }
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
// //       type: "Analytics & IoT",
// //       pdfUrl: "/assets/certificates/grp11.pdf",
// //       backContent: {
// //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// //       }
// //     }
// //   ];

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           const index = projectRefs.current.indexOf(entry.target);
// //           if (entry.isIntersecting) {
// //             // Element is visible
// //             if (entry.target && index !== -1) {
// //               setTimeout(() => {
// //                 entry.target.style.opacity = "1";
// //                 entry.target.style.transform = "translateY(0)";
// //               }, index * 200);
// //             }
// //           } else {
// //             // Element is not visible - reset animation
// //             if (entry.target) {
// //               entry.target.style.opacity = "0";
// //               entry.target.style.transform = "translateY(32px)";
// //             }
// //           }
// //         });
// //       },
// //       { 
// //         threshold: 0.2,
// //         rootMargin: "0px"
// //       }
// //     );

// //     projectRefs.current.forEach((projectRef) => {
// //       if (projectRef) {
// //         observer.observe(projectRef);
// //       }
// //     });

// //     return () => {
// //       projectRefs.current.forEach((projectRef) => {
// //         if (projectRef) {
// //           observer.unobserve(projectRef);
// //         }
// //       });
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const headerObserver = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setIsVisible(true);
// //           }
// //         });
// //       },
// //       { 
// //         threshold: 0.1,
// //         rootMargin: "50px"
// //       }
// //     );

// //     if (sectionRef.current) {
// //       headerObserver.observe(sectionRef.current);
// //     }

// //     return () => {
// //       if (sectionRef.current) {
// //         headerObserver.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   const handleViewDetails = (project) => {
// //     if (project.pdfUrl) {
// //       window.open(project.pdfUrl, "_blank");
// //     } else {
// //       alert(`PDF for ${project.title} will be available soon!`);
// //     }
// //   };

// //   const handleCardHover = (index, isHovering, e) => {
// //     // Check if hovering over button area
// //     const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
// //     // Only trigger on hover for desktop and not on button areas
// //     if (window.innerWidth >= 1024 && !isButtonArea) {
// //       setFlippedCards(prev => ({
// //         ...prev,
// //         [index]: isHovering
// //       }));
// //     }
// //   };

// //   const handleCardClick = (index, e) => {
// //     // Don't toggle if clicking on buttons
// //     if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
// //       return;
// //     }
    
// //     // Toggle flip on click for mobile/tablet
// //     setFlippedCards(prev => ({
// //       ...prev,
// //       [index]: !prev[index]
// //     }));
// //   };

// //   const addToProjectRefs = (el, index) => {
// //     if (el && !projectRefs.current[index]) {
// //       projectRefs.current[index] = el;
// //     }
// //   };

// //   return (
// //     <section 
// //       id="projects" 
// //       ref={sectionRef}
// //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// //     >
// //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
// //         {/* Header Section */}
// //         <div 
// //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// //             isVisible 
// //               ? "opacity-100 translate-y-0" 
// //               : "opacity-0 translate-y-8"
// //           }`}
// //         >
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// //             Innovative solutions combining hardware and software to solve real-world problems
// //           </p>
// //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// //           </p>
// //         </div>

// //         {/* Projects Grid */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0">
// //           {projects.map((project, index) => (
// //             <div
// //               key={project.title}
// //               ref={(el) => addToProjectRefs(el, index)}
// //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full px-3 sm:px-0"
// //             >
// //               {/* Flip Card Container */}
// //               <div 
// //                 className="flip-card w-full h-full"
// //                 onMouseEnter={(e) => handleCardHover(index, true, e)}
// //                 onMouseLeave={(e) => handleCardHover(index, false, e)}
// //                 onClick={(e) => handleCardClick(index, e)}
// //               >
// //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// //                   {/* Front Side */}
// //                   <div className="flip-card-front">
// //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// //                       <CardHeader className="pb-3 animate-fade-in">
// //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-3 animate-slide-in-left">
// //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// //                             {project.type}
// //                           </Badge>
// //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// //                             <Calendar size={14} className="mr-1" />
// //                             {project.period}
// //                           </div>
// //                         </div>
// //                         <CardTitle className="text-lg sm:text-xl mb-2 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// //                           {project.title}
// //                         </CardTitle>
// //                         <CardDescription className="text-sm sm:text-base leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
// //                           {project.description}
// //                         </CardDescription>
// //                       </CardHeader>

// //                       <CardContent className="space-y-3 sm:space-y-4 pb-4 flex-1 flex flex-col">
// //                         {/* Key Features */}
// //                         <div className="flex-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
// //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Key Features & Achievements</h4>
// //                           <ul className="space-y-1.5">
// //                             {project.features.map((feature, featureIndex) => (
// //                               <li 
// //                                 key={featureIndex} 
// //                                 className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start animate-slide-in-left"
// //                                 style={{animationDelay: `${0.4 + featureIndex * 0.1}s`}}
// //                               >
// //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// //                                 {feature}
// //                               </li>
// //                             ))}
// //                           </ul>
// //                         </div>

// //                         {/* Technologies */}
// //                         <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
// //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Technologies Used</h4>
// //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// //                             {project.technologies.map((tech, techIndex) => {
// //                               const getIcon = (techName) => {
// //                                 switch (techName.toLowerCase()) {
// //                                   case "iot": return "🌐";
// //                                   case "web dashboard": return "📊";
// //                                   case "real-time monitoring": return "📡";
// //                                   case "automation": return "⚡";
// //                                   case "robotics": return "🤖";
// //                                   case "iot sensors": return "📱";
// //                                   case "embedded systems": return "🔧";
// //                                   case "remote control": return "📡";
// //                                   default: return "💻";
// //                                 }
// //                               };

// //                               return (
// //                                 <Badge
// //                                   key={tech}
// //                                   variant="secondary"
// //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs animate-scale-in"
// //                                   style={{animationDelay: `${0.8 + techIndex * 0.05}s`}}
// //                                 >
// //                                   <span className="text-xs">{getIcon(tech)}</span>
// //                                   {tech}
// //                                 </Badge>
// //                               );
// //                             })}
// //                           </div>
// //                         </div>

// //                         {/* Action Buttons */}
// //                         <div 
// //                           className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 no-flip-zone animate-fade-in" 
// //                           style={{animationDelay: '1s'}}
// //                           onMouseEnter={(e) => {
// //                             e.stopPropagation();
// //                             if (window.innerWidth >= 1024) {
// //                               setFlippedCards(prev => ({
// //                                 ...prev,
// //                                 [index]: false
// //                               }));
// //                             }
// //                           }}
// //                         >
// //                           <Button
// //                             variant="default"
// //                             size="sm"
// //                             className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto animate-bounce-in"
// //                             style={{animationDelay: '1.1s'}}
// //                             onClick={(e) => {
// //                               e.stopPropagation();
// //                               handleViewDetails(project);
// //                             }}
// //                           >
// //                             <FileText size={14} className="mr-1.5" />
// //                             View Details
// //                           </Button>
// //                           <Button
// //                             variant="outline"
// //                             size="sm"
// //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9 animate-bounce-in"
// //                             style={{animationDelay: '1.2s'}}
// //                             onClick={(e) => {
// //                               e.stopPropagation();
// //                               const url =
// //                                 project.title === "Smart Pet Feeder"
// //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// //                                   : "https://github.com/Thomasjose-tech";
// //                               window.open(url, "_blank");
// //                             }}
// //                           >
// //                             <Github size={14} className="mr-1.5" />
// //                             Code
// //                           </Button>
// //                         </div>
// //                       </CardContent>
// //                     </Card>
// //                   </div>

// //                   {/* Back Side */}
// //                   <div className="flip-card-back">
// //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-5 flex flex-col">
// //                       <div className="h-full flex flex-col">
// //                         {/* Header */}
// //                         <div className="text-center mb-4 sm:mb-5 animate-fade-in">
// //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm animate-scale-in">
// //                             Project Insights
// //                           </Badge>
// //                           <h3 className="text-lg sm:text-xl font-bold text-primary animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// //                             {project.title}
// //                           </h3>
// //                         </div>

// //                         {/* Content */}
// //                         <div className="space-y-3 sm:space-y-3 flex-1">
// //                           {/* Challenges */}
// //                           <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
// //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// //                               <span className="text-base">🚧</span>
// //                               Key Challenges
// //                             </h4>
// //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.3s'}}>
// //                               {project.backContent.challenges}
// //                             </p>
// //                           </div>

// //                           {/* Learnings */}
// //                           <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
// //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// //                               <span className="text-base">📚</span>
// //                               Key Learnings
// //                             </h4>
// //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.5s'}}>
// //                               {project.backContent.learnings}
// //                             </p>
// //                           </div>

// //                           {/* Impact */}
// //                           <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
// //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// //                               <span className="text-base">📈</span>
// //                               Project Impact
// //                             </h4>
// //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.7s'}}>
// //                               {project.backContent.impact}
// //                             </p>
// //                           </div>
// //                         </div>

// //                         {/* Actions */}
// //                         <div 
// //                           className="flex flex-col sm:flex-row gap-2.5 pt-2 sm:pt-2 mt-auto no-flip-zone animate-fade-in" 
// //                           style={{animationDelay: '0.8s'}}
// //                           onMouseEnter={(e) => {
// //                             e.stopPropagation();
// //                             if (window.innerWidth >= 1024) {
// //                               setFlippedCards(prev => ({
// //                                 ...prev,
// //                                 [index]: false
// //                               }));
// //                             }
// //                           }}
// //                         >
// //                           <Button
// //                             variant="default"
// //                             size="sm"
// //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9 animate-bounce-in"
// //                             style={{animationDelay: '0.9s'}}
// //                             onClick={(e) => {
// //                               e.stopPropagation();
// //                               handleViewDetails(project);
// //                             }}
// //                           >
// //                             <FileText size={14} className="mr-1.5" />
// //                             PDF Details
// //                           </Button>
// //                           <Button
// //                             variant="outline"
// //                             size="sm"
// //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm animate-bounce-in"
// //                             style={{animationDelay: '1s'}}
// //                             onClick={(e) => {
// //                               e.stopPropagation();
// //                               const url =
// //                                 project.title === "Smart Pet Feeder"
// //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// //                                   : "https://github.com/Thomasjose-tech";
// //                               window.open(url, "_blank");
// //                             }}
// //                           >
// //                             <Github size={14} className="mr-1.5" />
// //                             Source Code
// //                           </Button>
// //                         </div>
// //                       </div>
// //                     </Card>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Call to Action */}
// //         <div 
// //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// //             isVisible 
// //               ? "opacity-100 translate-y-0" 
// //               : "opacity-0 translate-y-8"
// //           }`}
// //           style={{
// //             transitionDelay: isVisible ? "600ms" : "0ms"
// //           }}
// //         >
// //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// //             Interested in seeing more of my work or collaborating on a project?
// //           </p>
// //           <Button
// //             variant="default"
// //             size="lg"
// //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// //             onClick={() =>
// //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// //             }
// //           >
// //             Let's Work Together
// //           </Button>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         /* Flip Card Styles */
// //         .flip-card {
// //           perspective: 1000px;
// //           width: 100%;
// //           cursor: pointer;
// //         }

// //         .flip-card-inner {
// //           position: relative;
// //           width: 100%;
// //           height: 100%;
// //           transition: transform 0.6s;
// //           transform-style: preserve-3d;
// //         }

// //         .flip-card-flipped {
// //           transform: rotateY(180deg);
// //         }

// //         .flip-card-front,
// //         .flip-card-back {
// //           position: absolute;
// //           width: 100%;
// //           height: 100%;
// //           -webkit-backface-visibility: hidden;
// //           backface-visibility: hidden;
// //           border-radius: 0.5rem;
// //         }

// //         .flip-card-back {
// //           transform: rotateY(180deg);
// //         }

// //         /* No-flip zone for buttons */
// //         .no-flip-zone {
// //           pointer-events: auto;
// //         }

// //         /* Animation Keyframes */
// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //           }
// //           to {
// //             opacity: 1;
// //           }
// //         }

// //         @keyframes slideInLeft {
// //           from {
// //             opacity: 0;
// //             transform: translateX(-20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }

// //         @keyframes slideInRight {
// //           from {
// //             opacity: 0;
// //             transform: translateX(20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }

// //         @keyframes slideInUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         @keyframes scaleIn {
// //           from {
// //             opacity: 0;
// //             transform: scale(0.8);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }

// //         @keyframes bounceIn {
// //           0% {
// //             opacity: 0;
// //             transform: scale(0.3);
// //           }
// //           50% {
// //             transform: scale(1.05);
// //           }
// //           70% {
// //             transform: scale(0.9);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }

// //         /* Animation Classes */
// //         .animate-fade-in {
// //           animation: fadeIn 0.6s ease-out forwards;
// //           opacity: 0;
// //         }

// //         .animate-slide-in-left {
// //           animation: slideInLeft 0.6s ease-out forwards;
// //           opacity: 0;
// //         }

// //         .animate-slide-in-right {
// //           animation: slideInRight 0.6s ease-out forwards;
// //           opacity: 0;
// //         }

// //         .animate-slide-in-up {
// //           animation: slideInUp 0.6s ease-out forwards;
// //           opacity: 0;
// //         }

// //         .animate-scale-in {
// //           animation: scaleIn 0.4s ease-out forwards;
// //           opacity: 0;
// //         }

// //         .animate-bounce-in {
// //           animation: bounceIn 0.6s ease-out forwards;
// //           opacity: 0;
// //         }

// //         /* Ensure smooth animations */
// //         .project-card-wrapper {
// //           transform: translateZ(0);
// //           will-change: opacity, transform;
// //         }

// //         /* Mobile responsiveness */
// //         @media (max-width: 640px) {
// //           .flip-card {
// //             min-height: 820px;
// //           }
          
// //           .flip-card-inner {
// //             min-height: 820px;
// //           }
// //         }

// //         @media (min-width: 641px) and (max-width: 1023px) {
// //           .flip-card {
// //             min-height: 580px;
// //           }
          
// //           .flip-card-inner {
// //             min-height: 580px;
// //           }
// //         }

// //         @media (min-width: 1024px) {
// //           .flip-card {
// //             min-height: 520px;
// //           }
          
// //           .flip-card-inner {
// //             min-height: 520px;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default Projects;
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Calendar, Github, FileText } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const Projects = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [flippedCards, setFlippedCards] = useState({});
//   const sectionRef = useRef(null);
//   const projectRefs = useRef([]);

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
//       pdfUrl: "/assets/certificates/thomas.pdf",
//       backContent: {
//         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
//         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
//         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
//       }
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
//       type: "Analytics & IoT",
//       pdfUrl: "/assets/certificates/grp11.pdf",
//       backContent: {
//         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
//         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
//         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
//       }
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = projectRefs.current.indexOf(entry.target);
//           if (entry.isIntersecting) {
//             // Element is visible
//             if (entry.target && index !== -1) {
//               setTimeout(() => {
//                 entry.target.style.opacity = "1";
//                 entry.target.style.transform = "translateY(0)";
//               }, index * 200);
//             }
//           } else {
//             // Element is not visible - reset animation
//             if (entry.target) {
//               entry.target.style.opacity = "0";
//               entry.target.style.transform = "translateY(32px)";
//             }
//           }
//         });
//       },
//       { 
//         threshold: 0.2,
//         rootMargin: "0px"
//       }
//     );

//     projectRefs.current.forEach((projectRef) => {
//       if (projectRef) {
//         observer.observe(projectRef);
//       }
//     });

//     return () => {
//       projectRefs.current.forEach((projectRef) => {
//         if (projectRef) {
//           observer.unobserve(projectRef);
//         }
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const headerObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { 
//         threshold: 0.1,
//         rootMargin: "50px"
//       }
//     );

//     if (sectionRef.current) {
//       headerObserver.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         headerObserver.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const handleViewDetails = (project) => {
//     if (project.pdfUrl) {
//       window.open(project.pdfUrl, "_blank");
//     } else {
//       alert(`PDF for ${project.title} will be available soon!`);
//     }
//   };

//   const handleCardHover = (index, isHovering, e) => {
//     // Check if hovering over button area
//     const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
//     // Only trigger on hover for desktop and not on button areas
//     if (window.innerWidth >= 1024 && !isButtonArea) {
//       setFlippedCards(prev => ({
//         ...prev,
//         [index]: isHovering
//       }));
//     }
//   };

//   const handleCardClick = (index, e) => {
//     // Don't toggle if clicking on buttons
//     if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
//       return;
//     }
    
//     // Toggle flip on click for mobile/tablet
//     setFlippedCards(prev => ({
//       ...prev,
//       [index]: !prev[index]
//     }));
//   };

//   const addToProjectRefs = (el, index) => {
//     if (el && !projectRefs.current[index]) {
//       projectRefs.current[index] = el;
//     }
//   };

//   return (
//     <section 
//       id="projects" 
//       ref={sectionRef}
//       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
//     >
//       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
//         {/* Header Section */}
//         <div 
//           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
//             isVisible 
//               ? "opacity-100 translate-y-0" 
//               : "opacity-0 translate-y-8"
//           }`}
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
//           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
//           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
//             Innovative solutions combining hardware and software to solve real-world problems
//           </p>
//           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
//             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0">
//           {projects.map((project, index) => (
//             <div
//               key={project.title}
//               ref={(el) => addToProjectRefs(el, index)}
//               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full px-3 sm:px-0"
//             >
//               {/* Flip Card Container */}
//               <div 
//                 className="flip-card w-full h-full"
//                 onMouseEnter={(e) => handleCardHover(index, true, e)}
//                 onMouseLeave={(e) => handleCardHover(index, false, e)}
//                 onClick={(e) => handleCardClick(index, e)}
//               >
//                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
//                   {/* Front Side */}
//                   <div className="flip-card-front">
//                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
//                       <CardHeader className="pb-3 animate-fade-in">
//                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-3 animate-slide-in-left">
//                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
//                             {project.type}
//                           </Badge>
//                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
//                             <Calendar size={14} className="mr-1" />
//                             {project.period}
//                           </div>
//                         </div>
//                         <CardTitle className="text-lg sm:text-xl mb-2 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
//                           {project.title}
//                         </CardTitle>
//                         <CardDescription className="text-sm sm:text-base leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
//                           {project.description}
//                         </CardDescription>
//                       </CardHeader>

//                       <CardContent className="space-y-3 sm:space-y-4 pb-4 flex-1 flex flex-col">
//                         {/* Key Features */}
//                         <div className="flex-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
//                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Key Features & Achievements</h4>
//                           <ul className="space-y-1.5">
//                             {project.features.map((feature, featureIndex) => (
//                               <li 
//                                 key={featureIndex} 
//                                 className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start animate-slide-in-left"
//                                 style={{animationDelay: `${0.4 + featureIndex * 0.1}s`}}
//                               >
//                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
//                                 {feature}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         {/* Technologies */}
//                         <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
//                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Technologies Used</h4>
//                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
//                             {project.technologies.map((tech, techIndex) => {
//                               const getIcon = (techName) => {
//                                 switch (techName.toLowerCase()) {
//                                   case "iot": return "🌐";
//                                   case "web dashboard": return "📊";
//                                   case "real-time monitoring": return "📡";
//                                   case "automation": return "⚡";
//                                   case "robotics": return "🤖";
//                                   case "iot sensors": return "📱";
//                                   case "embedded systems": return "🔧";
//                                   case "remote control": return "📡";
//                                   default: return "💻";
//                                 }
//                               };

//                               return (
//                                 <Badge
//                                   key={tech}
//                                   variant="secondary"
//                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs animate-scale-in"
//                                   style={{animationDelay: `${0.8 + techIndex * 0.05}s`}}
//                                 >
//                                   <span className="text-xs">{getIcon(tech)}</span>
//                                   {tech}
//                                 </Badge>
//                               );
//                             })}
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div 
//                           className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 no-flip-zone animate-fade-in" 
//                           style={{animationDelay: '1s'}}
//                           onMouseEnter={(e) => {
//                             e.stopPropagation();
//                             if (window.innerWidth >= 1024) {
//                               setFlippedCards(prev => ({
//                                 ...prev,
//                                 [index]: false
//                               }));
//                             }
//                           }}
//                         >
//                           <Button
//                             variant="default"
//                             size="sm"
//                             className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto animate-bounce-in"
//                             style={{animationDelay: '1.1s'}}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleViewDetails(project);
//                             }}
//                           >
//                             <FileText size={14} className="mr-1.5" />
//                             View Details
//                           </Button>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9 animate-bounce-in"
//                             style={{animationDelay: '1.2s'}}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               const url =
//                                 project.title === "Smart Pet Feeder"
//                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
//                                   : "https://github.com/Thomasjose-tech";
//                               window.open(url, "_blank");
//                             }}
//                           >
//                             <Github size={14} className="mr-1.5" />
//                             Code
//                           </Button>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   {/* Back Side */}
//                   <div className="flip-card-back">
//                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-5 flex flex-col">
//                       <div className="h-full flex flex-col">
//                         {/* Header */}
//                         <div className="text-center mb-4 sm:mb-5 animate-fade-in">
//                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm animate-scale-in">
//                             Project Insights
//                           </Badge>
//                           <h3 className="text-lg sm:text-xl font-bold text-primary animate-slide-in-up" style={{animationDelay: '0.1s'}}>
//                             {project.title}
//                           </h3>
//                         </div>

//                         {/* Content */}
//                         <div className="space-y-3 sm:space-y-3 flex-1">
//                           {/* Challenges */}
//                           <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
//                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
//                               <span className="text-base">🚧</span>
//                               Key Challenges
//                             </h4>
//                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.3s'}}>
//                               {project.backContent.challenges}
//                             </p>
//                           </div>

//                           {/* Learnings */}
//                           <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
//                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
//                               <span className="text-base">📚</span>
//                               Key Learnings
//                             </h4>
//                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.5s'}}>
//                               {project.backContent.learnings}
//                             </p>
//                           </div>

//                           {/* Impact */}
//                           <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
//                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
//                               <span className="text-base">📈</span>
//                               Project Impact
//                             </h4>
//                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.7s'}}>
//                               {project.backContent.impact}
//                             </p>
//                           </div>
//                         </div>

//                         {/* Actions */}
//                         <div 
//                           className="flex flex-col sm:flex-row gap-2.5 pt-2 sm:pt-2 mt-auto no-flip-zone animate-fade-in" 
//                           style={{animationDelay: '0.8s'}}
//                           onMouseEnter={(e) => {
//                             e.stopPropagation();
//                             if (window.innerWidth >= 1024) {
//                               setFlippedCards(prev => ({
//                                 ...prev,
//                                 [index]: false
//                               }));
//                             }
//                           }}
//                         >
//                           <Button
//                             variant="default"
//                             size="sm"
//                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9 animate-bounce-in"
//                             style={{animationDelay: '0.9s'}}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleViewDetails(project);
//                             }}
//                           >
//                             <FileText size={14} className="mr-1.5" />
//                             PDF Details
//                           </Button>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm animate-bounce-in"
//                             style={{animationDelay: '1s'}}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               const url =
//                                 project.title === "Smart Pet Feeder"
//                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
//                                   : "https://github.com/Thomasjose-tech";
//                               window.open(url, "_blank");
//                             }}
//                           >
//                             <Github size={14} className="mr-1.5" />
//                             Source Code
//                           </Button>
//                         </div>
//                       </div>
//                     </Card>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div 
//           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
//             isVisible 
//               ? "opacity-100 translate-y-0" 
//               : "opacity-0 translate-y-8"
//           }`}
//           style={{
//             transitionDelay: isVisible ? "600ms" : "0ms"
//           }}
//         >
//           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
//             Interested in seeing more of my work or collaborating on a project?
//           </p>
//           <Button
//             variant="default"
//             size="lg"
//             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
//             onClick={() =>
//               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
//             }
//           >
//             Let's Work Together
//           </Button>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Flip Card Styles */
//         .flip-card {
//           perspective: 1000px;
//           width: 100%;
//           cursor: pointer;
//         }

//         .flip-card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transition: transform 0.6s;
//           transform-style: preserve-3d;
//         }

//         .flip-card-flipped {
//           transform: rotateY(180deg);
//         }

//         .flip-card-front,
//         .flip-card-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           -webkit-backface-visibility: hidden;
//           backface-visibility: hidden;
//           border-radius: 0.5rem;
//         }

//         .flip-card-back {
//           transform: rotateY(180deg);
//         }

//         /* No-flip zone for buttons */
//         .no-flip-zone {
//           pointer-events: auto;
//         }

//         /* Animation Keyframes */
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes bounceIn {
//           0% {
//             opacity: 0;
//             transform: scale(0.3);
//           }
//           50% {
//             transform: scale(1.05);
//           }
//           70% {
//             transform: scale(0.9);
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         /* Animation Classes */
//         .animate-fade-in {
//           animation: fadeIn 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-slide-in-left {
//           animation: slideInLeft 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-slide-in-right {
//           animation: slideInRight 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-slide-in-up {
//           animation: slideInUp 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-scale-in {
//           animation: scaleIn 0.4s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-bounce-in {
//           animation: bounceIn 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         /* Ensure smooth animations */
//         .project-card-wrapper {
//           transform: translateZ(0);
//           will-change: opacity, transform;
//         }

//         /* Mobile responsiveness */
//         @media (max-width: 640px) {
//           .flip-card {
//             min-height: 720px;
//           }
          
//           .flip-card-inner {
//             min-height: 720px;
//           }
//         }

//         @media (min-width: 641px) and (max-width: 1023px) {
//           .flip-card {
//             min-height: 540px;
//           }
          
//           .flip-card-inner {
//             min-height: 540px;
//           }
//         }

//         @media (min-width: 1024px) {
//           .flip-card {
//             min-height: 500px;
//           }
          
//           .flip-card-inner {
//             min-height: 500px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Github, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

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
      pdfUrl: "/assets/certificates/thomas.pdf",
      backContent: {
        challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
        learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
        impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
      }
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
      type: "Analytics & IoT",
      pdfUrl: "/assets/certificates/grp11.pdf",
      backContent: {
        challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
        learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
        impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = projectRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            // Element is visible
            if (entry.target && index !== -1) {
              setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
              }, index * 200);
            }
          } else {
            // Element is not visible - reset animation
            if (entry.target) {
              entry.target.style.opacity = "0";
              entry.target.style.transform = "translateY(32px)";
            }
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: "0px"
      }
    );

    projectRefs.current.forEach((projectRef) => {
      if (projectRef) {
        observer.observe(projectRef);
      }
    });

    return () => {
      projectRefs.current.forEach((projectRef) => {
        if (projectRef) {
          observer.unobserve(projectRef);
        }
      });
    };
  }, []);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    if (sectionRef.current) {
      headerObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        headerObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleViewDetails = (project) => {
    if (project.pdfUrl) {
      window.open(project.pdfUrl, "_blank");
    } else {
      alert(`PDF for ${project.title} will be available soon!`);
    }
  };

  const handleCardHover = (index, isHovering, e) => {
    // Check if hovering over button area
    const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
    // Only trigger on hover for desktop and not on button areas
    if (window.innerWidth >= 1024 && !isButtonArea) {
      setFlippedCards(prev => ({
        ...prev,
        [index]: isHovering
      }));
    }
  };

  const handleCardClick = (index, e) => {
    // Don't toggle if clicking on buttons
    if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
      return;
    }
    
    // Toggle flip on click for mobile/tablet
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const addToProjectRefs = (el, index) => {
    if (el && !projectRefs.current[index]) {
      projectRefs.current[index] = el;
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-3 sm:px-0">
        {/* Header Section */}
        <div 
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
          <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Innovative solutions combining hardware and software to solve real-world problems
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
            💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => addToProjectRefs(el, index)}
              className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full px-3 sm:px-0"
            >
              {/* Flip Card Container */}
              <div 
                className="flip-card w-full h-full"
                onMouseEnter={(e) => handleCardHover(index, true, e)}
                onMouseLeave={(e) => handleCardHover(index, false, e)}
                onClick={(e) => handleCardClick(index, e)}
              >
                <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
                      <CardHeader className="pb-3 animate-fade-in">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-3 animate-slide-in-left">
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                            {project.type}
                          </Badge>
                          <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
                            <Calendar size={14} className="mr-1" />
                            {project.period}
                          </div>
                        </div>
                        <CardTitle className="text-lg sm:text-xl mb-2 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-3 sm:space-y-4 pb-4 flex-1 flex flex-col">
                        {/* Key Features */}
                        <div className="flex-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
                          <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Key Features & Achievements</h4>
                          <ul className="space-y-1.5">
                            {project.features.map((feature, featureIndex) => (
                              <li 
                                key={featureIndex} 
                                className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start animate-slide-in-left"
                                style={{animationDelay: `${0.4 + featureIndex * 0.1}s`}}
                              >
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
                          <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.technologies.map((tech, techIndex) => {
                              const getIcon = (techName) => {
                                switch (techName.toLowerCase()) {
                                  case "iot": return "🌐";
                                  case "web dashboard": return "📊";
                                  case "real-time monitoring": return "📡";
                                  case "automation": return "⚡";
                                  case "robotics": return "🤖";
                                  case "iot sensors": return "📱";
                                  case "embedded systems": return "🔧";
                                  case "remote control": return "📡";
                                  default: return "💻";
                                }
                              };

                              return (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs animate-scale-in"
                                  style={{animationDelay: `${0.8 + techIndex * 0.05}s`}}
                                >
                                  <span className="text-xs">{getIcon(tech)}</span>
                                  {tech}
                                </Badge>
                              );
                            })}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div 
                          className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 no-flip-zone animate-fade-in" 
                          style={{animationDelay: '1s'}}
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            if (window.innerWidth >= 1024) {
                              setFlippedCards(prev => ({
                                ...prev,
                                [index]: false
                              }));
                            }
                          }}
                        >
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto animate-bounce-in"
                            style={{animationDelay: '1.1s'}}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewDetails(project);
                            }}
                          >
                            <FileText size={14} className="mr-1.5" />
                            View Details
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9 animate-bounce-in"
                            style={{animationDelay: '1.2s'}}
                            onClick={(e) => {
                              e.stopPropagation();
                              const url =
                                project.title === "Smart Pet Feeder"
                                  ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
                                  : "https://github.com/Thomasjose-tech";
                              window.open(url, "_blank");
                            }}
                          >
                            <Github size={14} className="mr-1.5" />
                            Code
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-5 flex flex-col">
                      <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="text-center mb-4 sm:mb-5 animate-fade-in">
                          <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm animate-scale-in">
                            Project Insights
                          </Badge>
                          <h3 className="text-lg sm:text-xl font-bold text-primary animate-slide-in-up" style={{animationDelay: '0.1s'}}>
                            {project.title}
                          </h3>
                        </div>

                        {/* Content */}
                        <div className="space-y-3 sm:space-y-3 flex-1">
                          {/* Challenges */}
                          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                            <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
                              <span className="text-base">🚧</span>
                              Key Challenges
                            </h4>
                            <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.3s'}}>
                              {project.backContent.challenges}
                            </p>
                          </div>

                          {/* Learnings */}
                          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                            <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
                              <span className="text-base">📚</span>
                              Key Learnings
                            </h4>
                            <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.5s'}}>
                              {project.backContent.learnings}
                            </p>
                          </div>

                          {/* Impact */}
                          <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
                            <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
                              <span className="text-base">📈</span>
                              Project Impact
                            </h4>
                            <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.7s'}}>
                              {project.backContent.impact}
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div 
                          className="flex flex-col sm:flex-row gap-2.5 pt-2 sm:pt-2 mt-auto no-flip-zone animate-fade-in" 
                          style={{animationDelay: '0.8s'}}
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            if (window.innerWidth >= 1024) {
                              setFlippedCards(prev => ({
                                ...prev,
                                [index]: false
                              }));
                            }
                          }}
                        >
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9 animate-bounce-in"
                            style={{animationDelay: '0.9s'}}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewDetails(project);
                            }}
                          >
                            <FileText size={14} className="mr-1.5" />
                            PDF Details
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm animate-bounce-in"
                            style={{animationDelay: '1s'}}
                            onClick={(e) => {
                              e.stopPropagation();
                              const url =
                                project.title === "Smart Pet Feeder"
                                  ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
                                  : "https://github.com/Thomasjose-tech";
                              window.open(url, "_blank");
                            }}
                          >
                            <Github size={14} className="mr-1.5" />
                            Source Code
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: isVisible ? "600ms" : "0ms"
          }}
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Work Together
          </Button>
        </div>
      </div>

      <style jsx>{`
        /* Flip Card Styles */
        .flip-card {
          perspective: 1000px;
          width: 100%;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card-flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 0.5rem;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* No-flip zone for buttons */
        .no-flip-zone {
          pointer-events: auto;
        }

        /* Animation Keyframes */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Animation Classes */
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounceIn 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Ensure smooth animations */
        .project-card-wrapper {
          transform: translateZ(0);
          will-change: opacity, transform;
        }

        /* Mobile responsiveness */
        @media (max-width: 640px) {
          .flip-card {
            min-height: 720px;
          }
          
          .flip-card-inner {
            min-height: 720px;
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .flip-card {
            min-height: 540px;
          }
          
          .flip-card-inner {
            min-height: 540px;
          }
        }

        @media (min-width: 1024px) {
          .flip-card {
            min-height: 560px;
          }
          
          .flip-card-inner {
            min-height: 560px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;