// // // // // // // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // // // // // // import { Calendar, ExternalLink, Github } from "lucide-react";

// // // // // // // // // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // // // // // // // // //   const projects = [
// // // // // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // // // // // // // // // //       type: "Hardware & Software"
// // // // // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // // // // // // // // // //       type: "Robotics & IoT"
// // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // // // // // // // // // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // // // // // // // // //             <Card 
// // // // // // // // // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // // // // // // // // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // // // // // // // // // // // // // // // // // //               style={{ animationDelay: `${index * 0.2}s` }}
// // // // // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // // // // //               <CardHeader>
// // // // // // // // // // // // // // // // // // //                 <div className="flex items-start justify-between mb-4">
// // // // // // // // // // // // // // // // // // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // // // // // // // // // // //                     {project.type}
// // // // // // // // // // // // // // // // // // //                   </Badge>
// // // // // // // // // // // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // // // // // // // // // // //                     {project.period}
// // // // // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // // // // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // // // // // // // // // // //                   {project.title}
// // // // // // // // // // // // // // // // // // //                 </CardTitle>
// // // // // // // // // // // // // // // // // // //                 <CardDescription className="text-base leading-relaxed">
// // // // // // // // // // // // // // // // // // //                   {project.description}
// // // // // // // // // // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // // // // // // // // // //               </CardHeader>

// // // // // // // // // // // // // // // // // // //               <CardContent className="space-y-6">
// // // // // // // // // // // // // // // // // // //                 {/* Key Features */}
// // // // // // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // // // // // // // // // // //                   <ul className="space-y-2">
// // // // // // // // // // // // // // // // // // //                     {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // // // // // // // // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // // // // // // // // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // // // // // // // // // //                         {feature}
// // // // // // // // // // // // // // // // // // //                       </li>
// // // // // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // // // // //                   </ul>
// // // // // // // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // // // // // // //                 {/* Technologies */}
// // // // // // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // // // // // //                     {project.technologies.map((tech) => {
// // // // // // // // // // // // // // // // // // //                       const getIcon = (techName: string) => {
// // // // // // // // // // // // // // // // // // //                         switch(techName.toLowerCase()) {
// // // // // // // // // // // // // // // // // // //                           case 'iot': return '🌐';
// // // // // // // // // // // // // // // // // // //                           case 'web dashboard': return '📊';
// // // // // // // // // // // // // // // // // // //                           case 'real-time monitoring': return '📡';
// // // // // // // // // // // // // // // // // // //                           case 'automation': return '⚡';
// // // // // // // // // // // // // // // // // // //                           case 'robotics': return '🤖';
// // // // // // // // // // // // // // // // // // //                           case 'iot sensors': return '📱';
// // // // // // // // // // // // // // // // // // //                           case 'embedded systems': return '🔧';
// // // // // // // // // // // // // // // // // // //                           case 'remote control': return '📡';
// // // // // // // // // // // // // // // // // // //                           default: return '💻';
// // // // // // // // // // // // // // // // // // //                         }
// // // // // // // // // // // // // // // // // // //                       };
                      
// // // // // // // // // // // // // // // // // // //                       return (
// // // // // // // // // // // // // // // // // // //                         <Badge 
// // // // // // // // // // // // // // // // // // //                           key={tech} 
// // // // // // // // // // // // // // // // // // //                           variant="secondary" 
// // // // // // // // // // // // // // // // // // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // // // // // //                           <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // // // // // // // // //                           {tech}
// // // // // // // // // // // // // // // // // // //                         </Badge>
// // // // // // // // // // // // // // // // // // //                       );
// // // // // // // // // // // // // // // // // // //                     })}
// // // // // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // // // // // // //                 {/* Action Buttons */}
// // // // // // // // // // // // // // // // // // //                 <div className="flex gap-3 pt-4">
// // // // // // // // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // // // // // // // //                     variant="default" 
// // // // // // // // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // // // // // // // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // // // // //                     <ExternalLink size={12} className="mr-1" />
// // // // // // // // // // // // // // // // // // //                     View Details
// // // // // // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // // // // // // // //                     variant="outline" 
// // // // // // // // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // // // // // // // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // // // // // // // // // //                     onClick={() => {
// // // // // // // // // // // // // // // // // // //                       const url = project.title === "Smart Pet Feeder" 
// // // // // // // // // // // // // // // // // // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // // // // // // //                         : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // // // // // // //                       window.open(url, '_blank');
// // // // // // // // // // // // // // // // // // //                     }}
// // // // // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // // // // //                     <Github size={16} className="mr-2" />
// // // // // // // // // // // // // // // // // // //                     Code
// // // // // // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // // // // // // // // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // // // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // // // // //           <Button 
// // // // // // // // // // // // // // // // // // //             variant="default" 
// // // // // // // // // // // // // // // // // // //             size="lg" 
// // // // // // // // // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // // // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // // //     </section>
// // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // export default Projects;
// // // // // // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // // // // // import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

// // // // // // // // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // // // // // // // //   const projects = [
// // // // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // // // // // // // // // //       pdfUrl: null // Will be updated with actual PDF URL
// // // // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // // // // // // // // // // //       pdfUrl: null // Will be updated with actual PDF URL
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // // // // // // // // //       // Open PDF in new tab
// // // // // // // // // // // // // // // // // //       window.open(project.pdfUrl, '_blank');
// // // // // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // // // // //       // Placeholder action - you can customize this
// // // // // // // // // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // // // // // // // // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // // // // // // // //             <Card 
// // // // // // // // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // // // // // // // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // // // // // // // // // // // // // // // // //               style={{ animationDelay: `${index * 0.2}s` }}
// // // // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // // // //               <CardHeader>
// // // // // // // // // // // // // // // // // //                 <div className="flex items-start justify-between mb-4">
// // // // // // // // // // // // // // // // // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // // // // // // // // // //                     {project.type}
// // // // // // // // // // // // // // // // // //                   </Badge>
// // // // // // // // // // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // // // // // // // // // //                     {project.period}
// // // // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // // // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // // // // // // // // // //                   {project.title}
// // // // // // // // // // // // // // // // // //                 </CardTitle>
// // // // // // // // // // // // // // // // // //                 <CardDescription className="text-base leading-relaxed">
// // // // // // // // // // // // // // // // // //                   {project.description}
// // // // // // // // // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // // // // // // // // //               </CardHeader>

// // // // // // // // // // // // // // // // // //               <CardContent className="space-y-6">
// // // // // // // // // // // // // // // // // //                 {/* Key Features */}
// // // // // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // // // // // // // // // //                   <ul className="space-y-2">
// // // // // // // // // // // // // // // // // //                     {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // // // // // // // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // // // // // // // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // // // // // // // // //                         {feature}
// // // // // // // // // // // // // // // // // //                       </li>
// // // // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // // // //                   </ul>
// // // // // // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // // // // // //                 {/* Technologies */}
// // // // // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // // // // //                     {project.technologies.map((tech) => {
// // // // // // // // // // // // // // // // // //                       const getIcon = (techName) => {
// // // // // // // // // // // // // // // // // //                         switch(techName.toLowerCase()) {
// // // // // // // // // // // // // // // // // //                           case 'iot': return '🌐';
// // // // // // // // // // // // // // // // // //                           case 'web dashboard': return '📊';
// // // // // // // // // // // // // // // // // //                           case 'real-time monitoring': return '📡';
// // // // // // // // // // // // // // // // // //                           case 'automation': return '⚡';
// // // // // // // // // // // // // // // // // //                           case 'robotics': return '🤖';
// // // // // // // // // // // // // // // // // //                           case 'iot sensors': return '📱';
// // // // // // // // // // // // // // // // // //                           case 'embedded systems': return '🔧';
// // // // // // // // // // // // // // // // // //                           case 'remote control': return '📡';
// // // // // // // // // // // // // // // // // //                           default: return '💻';
// // // // // // // // // // // // // // // // // //                         }
// // // // // // // // // // // // // // // // // //                       };
                      
// // // // // // // // // // // // // // // // // //                       return (
// // // // // // // // // // // // // // // // // //                         <Badge 
// // // // // // // // // // // // // // // // // //                           key={tech} 
// // // // // // // // // // // // // // // // // //                           variant="secondary" 
// // // // // // // // // // // // // // // // // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // // // // //                           <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // // // // // // // //                           {tech}
// // // // // // // // // // // // // // // // // //                         </Badge>
// // // // // // // // // // // // // // // // // //                       );
// // // // // // // // // // // // // // // // // //                     })}
// // // // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // // // // // //                 {/* Action Buttons */}
// // // // // // // // // // // // // // // // // //                 <div className="flex gap-3 pt-4">
// // // // // // // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // // // // // // //                     variant="default" 
// // // // // // // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // // // // // // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // // // // // // // // // //                     onClick={() => handleViewDetails(project)}
// // // // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // // // //                     <FileText size={12} className="mr-1" />
// // // // // // // // // // // // // // // // // //                     View Details
// // // // // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // // // // // // //                     variant="outline" 
// // // // // // // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // // // // // // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // // // // // // // // //                     onClick={() => {
// // // // // // // // // // // // // // // // // //                       const url = project.title === "Smart Pet Feeder" 
// // // // // // // // // // // // // // // // // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // // // // // //                         : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // // // // // //                       window.open(url, '_blank');
// // // // // // // // // // // // // // // // // //                     }}
// // // // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // // // //                     <Github size={16} className="mr-2" />
// // // // // // // // // // // // // // // // // //                     Code
// // // // // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // // // // // // // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // // // //           <Button 
// // // // // // // // // // // // // // // // // //             variant="default" 
// // // // // // // // // // // // // // // // // //             size="lg" 
// // // // // // // // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // //     </section>
// // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // export default Projects;
// // // // // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // // // // import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

// // // // // // // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // // // // // // //   const projects = [
// // // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // // // // // // // // //       pdfUrl: "/src/assets/certificates/thomas.pdf"
// // // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // // // // // // // // // //       pdfUrl: null // Will be updated with actual PDF URL
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // // // // // // // //       // Open PDF in new tab
// // // // // // // // // // // // // // // // //       window.open(project.pdfUrl, '_blank');
// // // // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // // // //       // Placeholder action - you can customize this
// // // // // // // // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // // // // // // // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // // // // // // //             <Card 
// // // // // // // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // // // // // // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // // // // // // // // // // // // // // // //               style={{ animationDelay: `${index * 0.2}s` }}
// // // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // // //               <CardHeader>
// // // // // // // // // // // // // // // // //                 <div className="flex items-start justify-between mb-4">
// // // // // // // // // // // // // // // // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // // // // // // // // //                     {project.type}
// // // // // // // // // // // // // // // // //                   </Badge>
// // // // // // // // // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // // // // // // // // //                     {project.period}
// // // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // // // // // // // // //                   {project.title}
// // // // // // // // // // // // // // // // //                 </CardTitle>
// // // // // // // // // // // // // // // // //                 <CardDescription className="text-base leading-relaxed">
// // // // // // // // // // // // // // // // //                   {project.description}
// // // // // // // // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // // // // // // // //               </CardHeader>

// // // // // // // // // // // // // // // // //               <CardContent className="space-y-6">
// // // // // // // // // // // // // // // // //                 {/* Key Features */}
// // // // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // // // // // // // // //                   <ul className="space-y-2">
// // // // // // // // // // // // // // // // //                     {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // // // // // // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // // // // // // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // // // // // // // //                         {feature}
// // // // // // // // // // // // // // // // //                       </li>
// // // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // // //                   </ul>
// // // // // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // // // // //                 {/* Technologies */}
// // // // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // // // //                     {project.technologies.map((tech) => {
// // // // // // // // // // // // // // // // //                       const getIcon = (techName) => {
// // // // // // // // // // // // // // // // //                         switch(techName.toLowerCase()) {
// // // // // // // // // // // // // // // // //                           case 'iot': return '🌐';
// // // // // // // // // // // // // // // // //                           case 'web dashboard': return '📊';
// // // // // // // // // // // // // // // // //                           case 'real-time monitoring': return '📡';
// // // // // // // // // // // // // // // // //                           case 'automation': return '⚡';
// // // // // // // // // // // // // // // // //                           case 'robotics': return '🤖';
// // // // // // // // // // // // // // // // //                           case 'iot sensors': return '📱';
// // // // // // // // // // // // // // // // //                           case 'embedded systems': return '🔧';
// // // // // // // // // // // // // // // // //                           case 'remote control': return '📡';
// // // // // // // // // // // // // // // // //                           default: return '💻';
// // // // // // // // // // // // // // // // //                         }
// // // // // // // // // // // // // // // // //                       };
                      
// // // // // // // // // // // // // // // // //                       return (
// // // // // // // // // // // // // // // // //                         <Badge 
// // // // // // // // // // // // // // // // //                           key={tech} 
// // // // // // // // // // // // // // // // //                           variant="secondary" 
// // // // // // // // // // // // // // // // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // // // //                           <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // // // // // // //                           {tech}
// // // // // // // // // // // // // // // // //                         </Badge>
// // // // // // // // // // // // // // // // //                       );
// // // // // // // // // // // // // // // // //                     })}
// // // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // // // // //                 {/* Action Buttons */}
// // // // // // // // // // // // // // // // //                 <div className="flex gap-3 pt-4">
// // // // // // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // // // // // //                     variant="default" 
// // // // // // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // // // // // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // // // // // // // // //                     onClick={() => handleViewDetails(project)}
// // // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // // //                     <FileText size={12} className="mr-1" />
// // // // // // // // // // // // // // // // //                     View Details
// // // // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // // // // // //                     variant="outline" 
// // // // // // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // // // // // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // // // // // // // //                     onClick={() => {
// // // // // // // // // // // // // // // // //                       const url = project.title === "Smart Pet Feeder" 
// // // // // // // // // // // // // // // // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // // // // //                         : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // // // // //                       window.open(url, '_blank');
// // // // // // // // // // // // // // // // //                     }}
// // // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // // //                     <Github size={16} className="mr-2" />
// // // // // // // // // // // // // // // // //                     Code
// // // // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // // // // // // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // // //           <Button 
// // // // // // // // // // // // // // // // //             variant="default" 
// // // // // // // // // // // // // // // // //             size="lg" 
// // // // // // // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //     </section>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // export default Projects;
// // // // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // // // import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

// // // // // // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // // // // // //   const projects = [
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // // // // // // // //       pdfUrl: "/src/assets/certificates/thomas.pdf"
// // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // // // // // // // // //       pdfUrl: "/src/assets/certificates/grp11.pdf"
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // // // // // // //       // Open PDF in new tab
// // // // // // // // // // // // // // // //       window.open(project.pdfUrl, '_blank');
// // // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // // //       // Placeholder action - you can customize this
// // // // // // // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // // // // // // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // // // // // //             <Card 
// // // // // // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // // // // // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // // // // // // // // // // // // // // //               style={{ animationDelay: `${index * 0.2}s` }}
// // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // //               <CardHeader>
// // // // // // // // // // // // // // // //                 <div className="flex items-start justify-between mb-4">
// // // // // // // // // // // // // // // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // // // // // // // //                     {project.type}
// // // // // // // // // // // // // // // //                   </Badge>
// // // // // // // // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // // // // // // // //                     {project.period}
// // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // // // // // // // //                   {project.title}
// // // // // // // // // // // // // // // //                 </CardTitle>
// // // // // // // // // // // // // // // //                 <CardDescription className="text-base leading-relaxed">
// // // // // // // // // // // // // // // //                   {project.description}
// // // // // // // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // // // // // // //               </CardHeader>

// // // // // // // // // // // // // // // //               <CardContent className="space-y-6">
// // // // // // // // // // // // // // // //                 {/* Key Features */}
// // // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // // // // // // // //                   <ul className="space-y-2">
// // // // // // // // // // // // // // // //                     {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // // // // // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // // // // // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // // // // // // //                         {feature}
// // // // // // // // // // // // // // // //                       </li>
// // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // //                   </ul>
// // // // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // // // //                 {/* Technologies */}
// // // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // // //                     {project.technologies.map((tech) => {
// // // // // // // // // // // // // // // //                       const getIcon = (techName) => {
// // // // // // // // // // // // // // // //                         switch(techName.toLowerCase()) {
// // // // // // // // // // // // // // // //                           case 'iot': return '🌐';
// // // // // // // // // // // // // // // //                           case 'web dashboard': return '📊';
// // // // // // // // // // // // // // // //                           case 'real-time monitoring': return '📡';
// // // // // // // // // // // // // // // //                           case 'automation': return '⚡';
// // // // // // // // // // // // // // // //                           case 'robotics': return '🤖';
// // // // // // // // // // // // // // // //                           case 'iot sensors': return '📱';
// // // // // // // // // // // // // // // //                           case 'embedded systems': return '🔧';
// // // // // // // // // // // // // // // //                           case 'remote control': return '📡';
// // // // // // // // // // // // // // // //                           default: return '💻';
// // // // // // // // // // // // // // // //                         }
// // // // // // // // // // // // // // // //                       };
                      
// // // // // // // // // // // // // // // //                       return (
// // // // // // // // // // // // // // // //                         <Badge 
// // // // // // // // // // // // // // // //                           key={tech} 
// // // // // // // // // // // // // // // //                           variant="secondary" 
// // // // // // // // // // // // // // // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // // //                           <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // // // // // //                           {tech}
// // // // // // // // // // // // // // // //                         </Badge>
// // // // // // // // // // // // // // // //                       );
// // // // // // // // // // // // // // // //                     })}
// // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // // // //                 {/* Action Buttons */}
// // // // // // // // // // // // // // // //                 <div className="flex gap-3 pt-4">
// // // // // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // // // // //                     variant="default" 
// // // // // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // // // // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // // // // // // // //                     onClick={() => handleViewDetails(project)}
// // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // //                     <FileText size={12} className="mr-1" />
// // // // // // // // // // // // // // // //                     View Details
// // // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // // // // //                     variant="outline" 
// // // // // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // // // // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // // // // // // //                     onClick={() => {
// // // // // // // // // // // // // // // //                       const url = project.title === "Smart Pet Feeder" 
// // // // // // // // // // // // // // // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // // // //                         : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // // // //                       window.open(url, '_blank');
// // // // // // // // // // // // // // // //                     }}
// // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // //                     <Github size={16} className="mr-2" />
// // // // // // // // // // // // // // // //                     Code
// // // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // // // // // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // //           <Button 
// // // // // // // // // // // // // // // //             variant="default" 
// // // // // // // // // // // // // // // //             size="lg" 
// // // // // // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //     </section>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default Projects;
// // // // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // // // import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

// // // // // // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // // // // // //   const projects = [
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf"
// // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf"
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // // // // // // //       // Open PDF in new tab
// // // // // // // // // // // // // // // //       window.open(project.pdfUrl, '_blank');
// // // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // // //       // Placeholder action - you can customize this
// // // // // // // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <section id="projects" className="py-20 px-4 bg-muted/30">
// // // // // // // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // // // // // //             <Card 
// // // // // // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // // // // // //               className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
// // // // // // // // // // // // // // // //               style={{ animationDelay: `${index * 0.2}s` }}
// // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // //               <CardHeader>
// // // // // // // // // // // // // // // //                 <div className="flex items-start justify-between mb-4">
// // // // // // // // // // // // // // // //                   <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // // // // // // // //                     {project.type}
// // // // // // // // // // // // // // // //                   </Badge>
// // // // // // // // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // // // // // // // //                     {project.period}
// // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // //                 <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // // // // // // // //                   {project.title}
// // // // // // // // // // // // // // // //                 </CardTitle>
// // // // // // // // // // // // // // // //                 <CardDescription className="text-base leading-relaxed">
// // // // // // // // // // // // // // // //                   {project.description}
// // // // // // // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // // // // // // //               </CardHeader>

// // // // // // // // // // // // // // // //               <CardContent className="space-y-6">
// // // // // // // // // // // // // // // //                 {/* Key Features */}
// // // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // // // // // // // //                   <ul className="space-y-2">
// // // // // // // // // // // // // // // //                     {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // // // // // //                       <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // // // // // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // // // // // // //                         {feature}
// // // // // // // // // // // // // // // //                       </li>
// // // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // // //                   </ul>
// // // // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // // // //                 {/* Technologies */}
// // // // // // // // // // // // // // // //                 <div>
// // // // // // // // // // // // // // // //                   <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // // //                     {project.technologies.map((tech) => {
// // // // // // // // // // // // // // // //                       const getIcon = (techName) => {
// // // // // // // // // // // // // // // //                         switch(techName.toLowerCase()) {
// // // // // // // // // // // // // // // //                           case 'iot': return '🌐';
// // // // // // // // // // // // // // // //                           case 'web dashboard': return '📊';
// // // // // // // // // // // // // // // //                           case 'real-time monitoring': return '📡';
// // // // // // // // // // // // // // // //                           case 'automation': return '⚡';
// // // // // // // // // // // // // // // //                           case 'robotics': return '🤖';
// // // // // // // // // // // // // // // //                           case 'iot sensors': return '📱';
// // // // // // // // // // // // // // // //                           case 'embedded systems': return '🔧';
// // // // // // // // // // // // // // // //                           case 'remote control': return '📡';
// // // // // // // // // // // // // // // //                           default: return '💻';
// // // // // // // // // // // // // // // //                         }
// // // // // // // // // // // // // // // //                       };
                      
// // // // // // // // // // // // // // // //                       return (
// // // // // // // // // // // // // // // //                         <Badge 
// // // // // // // // // // // // // // // //                           key={tech} 
// // // // // // // // // // // // // // // //                           variant="secondary" 
// // // // // // // // // // // // // // // //                           className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // // //                           <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // // // // // //                           {tech}
// // // // // // // // // // // // // // // //                         </Badge>
// // // // // // // // // // // // // // // //                       );
// // // // // // // // // // // // // // // //                     })}
// // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // // // //                 {/* Action Buttons */}
// // // // // // // // // // // // // // // //                 <div className="flex gap-3 pt-4">
// // // // // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // // // // //                     variant="default" 
// // // // // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // // // // //                     className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // // // // // // // //                     onClick={() => handleViewDetails(project)}
// // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // //                     <FileText size={12} className="mr-1" />
// // // // // // // // // // // // // // // //                     View Details
// // // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // // //                   <Button 
// // // // // // // // // // // // // // // //                     variant="outline" 
// // // // // // // // // // // // // // // //                     size="sm" 
// // // // // // // // // // // // // // // //                     className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // // // // // // //                     onClick={() => {
// // // // // // // // // // // // // // // //                       const url = project.title === "Smart Pet Feeder" 
// // // // // // // // // // // // // // // //                         ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // // // //                         : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // // // //                       window.open(url, '_blank');
// // // // // // // // // // // // // // // //                     }}
// // // // // // // // // // // // // // // //                   >
// // // // // // // // // // // // // // // //                     <Github size={16} className="mr-2" />
// // // // // // // // // // // // // // // //                     Code
// // // // // // // // // // // // // // // //                   </Button>
// // // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // // //               </CardContent>
// // // // // // // // // // // // // // // //             </Card>
// // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // // // // // //         <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // //           <Button 
// // // // // // // // // // // // // // // //             variant="default" 
// // // // // // // // // // // // // // // //             size="lg" 
// // // // // // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // // // // // // // //             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //     </section>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default Projects;
// // // // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // // // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // // // // // // // // //   const projectRefs = useRef([]);

// // // // // // // // // // // // // // // //   const projects = [
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf"
// // // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf"
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // // // // // // //       (entries) => {
// // // // // // // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // // // // // // //           if (entry.isIntersecting && !isVisible) {
// // // // // // // // // // // // // // // //             setIsVisible(true);
            
// // // // // // // // // // // // // // // //             // Faster staggered animations
// // // // // // // // // // // // // // // //             projectRefs.current.forEach((projectRef, index) => {
// // // // // // // // // // // // // // // //               if (projectRef) {
// // // // // // // // // // // // // // // //                 setTimeout(() => {
// // // // // // // // // // // // // // // //                   projectRef.style.opacity = "1";
// // // // // // // // // // // // // // // //                   projectRef.style.transform = "translateY(0)";
// // // // // // // // // // // // // // // //                 }, index * 150); // Reduced from 300ms to 150ms
// // // // // // // // // // // // // // // //                 }
// // // // // // // // // // // // // // // //               });
// // // // // // // // // // // // // // // //             }
// // // // // // // // // // // // // // // //           });
// // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // //         { 
// // // // // // // // // // // // // // // //           threshold: 0.2, // Trigger earlier
// // // // // // // // // // // // // // // //           rootMargin: "-30px" // Reduced margin for earlier trigger
// // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // //       );

// // // // // // // // // // // // // // // //     if (sectionRef.current) {
// // // // // // // // // // // // // // // //       observer.observe(sectionRef.current);
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // // // //       if (sectionRef.current) {
// // // // // // // // // // // // // // // //         observer.unobserve(sectionRef.current);
// // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // // //   }, [isVisible]);

// // // // // // // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   const addToProjectRefs = (el) => {
// // // // // // // // // // // // // // // //     if (el && !projectRefs.current.includes(el)) {
// // // // // // // // // // // // // // // //       projectRefs.current.push(el);
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <section 
// // // // // // // // // // // // // // // //       id="projects" 
// // // // // // // // // // // // // // // //       ref={sectionRef}
// // // // // // // // // // // // // // // //       className="py-20 px-4 bg-muted/30 overflow-hidden"
// // // // // // // // // // // // // // // //     >
// // // // // // // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // // // // // // //         {/* Header Section - Faster animation */}
// // // // // // // // // // // // // // // //         <div 
// // // // // // // // // // // // // // // //           className={`text-center mb-16 transition-all duration-500 ease-out ${
// // // // // // // // // // // // // // // //             isVisible 
// // // // // // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // // // // // //           }`}
// // // // // // // // // // // // // // // //           style={{
// // // // // // // // // // // // // // // //             transitionDelay: isVisible ? "100ms" : "0ms"
// // // // // // // // // // // // // // // //           }}
// // // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // //         {/* Projects Grid - Much faster staggered animation */}
// // // // // // // // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // // // // // //             <div
// // // // // // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // // // // // //               ref={addToProjectRefs}
// // // // // // // // // // // // // // // //               className="transition-all duration-500 ease-out opacity-0 translate-y-8"
// // // // // // // // // // // // // // // //               style={{
// // // // // // // // // // // // // // // //                 transitionDelay: isVisible ? `${index * 150 + 200}ms` : "0ms"
// // // // // // // // // // // // // // // //               }}
// // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // //               <Card className="
// // // // // // // // // // // // // // // //                 bg-gradient-card shadow-elegant border-2 border-primary/20 
// // // // // // // // // // // // // // // //                 hover:border-primary/40 hover:shadow-glow 
// // // // // // // // // // // // // // // //                 transition-all duration-300 hover:-translate-y-1 group
// // // // // // // // // // // // // // // //               ">
// // // // // // // // // // // // // // // //                 <CardHeader>
// // // // // // // // // // // // // // // //                   <div className="flex items-start justify-between mb-4">
// // // // // // // // // // // // // // // //                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // // // // // // // //                       {project.type}
// // // // // // // // // // // // // // // //                     </Badge>
// // // // // // // // // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // // // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // // // // // // // // // // // //                       {project.period}
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // //                   <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // // // // // // // //                     {project.title}
// // // // // // // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // // // // // // //                   <CardDescription className="text-base leading-relaxed">
// // // // // // // // // // // // // // // //                     {project.description}
// // // // // // // // // // // // // // // //                   </CardDescription>
// // // // // // // // // // // // // // // //                 </CardHeader>

// // // // // // // // // // // // // // // //                 <CardContent className="space-y-6">
                  
// // // // // // // // // // // // // // // //                   {/* Key Features */}
// // // // // // // // // // // // // // // //                   <div>
// // // // // // // // // // // // // // // //                     <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // // // // // // // // //                       {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // // // // // //                         <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // // // // // // //                           {feature}
// // // // // // // // // // // // // // // //                         </li>
// // // // // // // // // // // // // // // //                       ))}
// // // // // // // // // // // // // // // //                     </ul>
// // // // // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // // // // //                   {/* Technologies */}
// // // // // // // // // // // // // // // //                   <div>
// // // // // // // // // // // // // // // //                     <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // // //                       {project.technologies.map((tech) => {
// // // // // // // // // // // // // // // //                         const getIcon = (techName) => {
// // // // // // // // // // // // // // // //                           switch (techName.toLowerCase()) {
// // // // // // // // // // // // // // // //                             case "iot": return "🌐";
// // // // // // // // // // // // // // // //                             case "web dashboard": return "📊";
// // // // // // // // // // // // // // // //                             case "real-time monitoring": return "📡";
// // // // // // // // // // // // // // // //                             case "automation": return "⚡";
// // // // // // // // // // // // // // // //                             case "robotics": return "🤖";
// // // // // // // // // // // // // // // //                             case "iot sensors": return "📱";
// // // // // // // // // // // // // // // //                             case "embedded systems": return "🔧";
// // // // // // // // // // // // // // // //                             case "remote control": return "📡";
// // // // // // // // // // // // // // // //                             default: return "💻";
// // // // // // // // // // // // // // // //                           }
// // // // // // // // // // // // // // // //                         };

// // // // // // // // // // // // // // // //                         return (
// // // // // // // // // // // // // // // //                           <Badge
// // // // // // // // // // // // // // // //                             key={tech}
// // // // // // // // // // // // // // // //                             variant="secondary"
// // // // // // // // // // // // // // // //                             className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // // // //                             <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // // // // // //                             {tech}
// // // // // // // // // // // // // // // //                           </Badge>
// // // // // // // // // // // // // // // //                         );
// // // // // // // // // // // // // // // //                       })}
// // // // // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // // // // //                   {/* Action Buttons */}
// // // // // // // // // // // // // // // //                   <div className="flex gap-3 pt-4">
// // // // // // // // // // // // // // // //                     <Button
// // // // // // // // // // // // // // // //                       variant="default"
// // // // // // // // // // // // // // // //                       size="sm"
// // // // // // // // // // // // // // // //                       className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // // // // // // // //                       onClick={() => handleViewDetails(project)}
// // // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // // //                       <FileText size={12} className="mr-1" />
// // // // // // // // // // // // // // // //                       View Details
// // // // // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // // // // //                     <Button
// // // // // // // // // // // // // // // //                       variant="outline"
// // // // // // // // // // // // // // // //                       size="sm"
// // // // // // // // // // // // // // // //                       className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // // // // // // //                       onClick={() => {
// // // // // // // // // // // // // // // //                         const url =
// // // // // // // // // // // // // // // //                           project.title === "Smart Pet Feeder"
// // // // // // // // // // // // // // // //                             ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // // // //                             : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // // // //                         window.open(url, "_blank");
// // // // // // // // // // // // // // // //                       }}
// // // // // // // // // // // // // // // //                     >
// // // // // // // // // // // // // // // //                       <Github size={16} className="mr-2" />
// // // // // // // // // // // // // // // //                       Code
// // // // // // // // // // // // // // // //                     </Button>
// // // // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // // // //                 </CardContent>
// // // // // // // // // // // // // // // //               </Card>
// // // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // // //         {/* Call to Action - Faster animation */}
// // // // // // // // // // // // // // // //         <div 
// // // // // // // // // // // // // // // //           className={`text-center mt-16 transition-all duration-500 ease-out ${
// // // // // // // // // // // // // // // //             isVisible 
// // // // // // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // // // // // //           }`}
// // // // // // // // // // // // // // // //           style={{
// // // // // // // // // // // // // // // //             transitionDelay: isVisible ? "500ms" : "0ms"
// // // // // // // // // // // // // // // //           }}
// // // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // // //           <Button
// // // // // // // // // // // // // // // //             variant="default"
// // // // // // // // // // // // // // // //             size="lg"
// // // // // // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // // // // // // // //             onClick={() =>
// // // // // // // // // // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // // // // // // // // // //             }
// // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //     </section>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default Projects;
// // // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // // import { Calendar, Github, FileText, ArrowLeft } from "lucide-react";
// // // // // // // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // // // // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // // // // // // // //   const projectRefs = useRef([]);

// // // // // // // // // // // // // // //   const projects = [
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // // // // // // // // // // //       backContent: {
// // // // // // // // // // // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // // // // // // // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // // // // // // // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     {
// // // // // // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // // // // // //       type: "Robotics & IoT",
// // // // // // // // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // // // // // // // // // // //       backContent: {
// // // // // // // // // // // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // // // // // // // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // // // // // // // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // // // // // //       (entries) => {
// // // // // // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // // // // // //           if (entry.isIntersecting && !isVisible) {
// // // // // // // // // // // // // // //             setIsVisible(true);
            
// // // // // // // // // // // // // // //             projectRefs.current.forEach((projectRef, index) => {
// // // // // // // // // // // // // // //               if (projectRef) {
// // // // // // // // // // // // // // //                 setTimeout(() => {
// // // // // // // // // // // // // // //                   projectRef.style.opacity = "1";
// // // // // // // // // // // // // // //                   projectRef.style.transform = "translateY(0)";
// // // // // // // // // // // // // // //                 }, index * 150);
// // // // // // // // // // // // // // //               }
// // // // // // // // // // // // // // //             });
// // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // //         });
// // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // //       { 
// // // // // // // // // // // // // // //         threshold: 0.2,
// // // // // // // // // // // // // // //         rootMargin: "-30px"
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     );

// // // // // // // // // // // // // // //     if (sectionRef.current) {
// // // // // // // // // // // // // // //       observer.observe(sectionRef.current);
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // // //       if (sectionRef.current) {
// // // // // // // // // // // // // // //         observer.unobserve(sectionRef.current);
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // //   }, [isVisible]);

// // // // // // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleCardFlip = (index) => {
// // // // // // // // // // // // // // //     setFlippedCards(prev => ({
// // // // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // // // //       [index]: !prev[index]
// // // // // // // // // // // // // // //     }));
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const addToProjectRefs = (el) => {
// // // // // // // // // // // // // // //     if (el && !projectRefs.current.includes(el)) {
// // // // // // // // // // // // // // //       projectRefs.current.push(el);
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <section 
// // // // // // // // // // // // // // //       id="projects" 
// // // // // // // // // // // // // // //       ref={sectionRef}
// // // // // // // // // // // // // // //       className="py-20 px-4 bg-muted/30 overflow-hidden"
// // // // // // // // // // // // // // //     >
// // // // // // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // // // // // //         {/* Header Section */}
// // // // // // // // // // // // // // //         <div 
// // // // // // // // // // // // // // //           className={`text-center mb-16 transition-all duration-500 ease-out ${
// // // // // // // // // // // // // // //             isVisible 
// // // // // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // // // // //           }`}
// // // // // // // // // // // // // // //           style={{
// // // // // // // // // // // // // // //             transitionDelay: isVisible ? "100ms" : "0ms"
// // // // // // // // // // // // // // //           }}
// // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // //           <p className="text-sm text-muted-foreground mt-2">
// // // // // // // // // // // // // // //             💡 Click or hover on cards to see detailed insights
// // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // //         {/* Projects Grid */}
// // // // // // // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // // // // //             <div
// // // // // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // // // // //               ref={addToProjectRefs}
// // // // // // // // // // // // // // //               className="transition-all duration-500 ease-out opacity-0 translate-y-8"
// // // // // // // // // // // // // // //               style={{
// // // // // // // // // // // // // // //                 transitionDelay: isVisible ? `${index * 150 + 200}ms` : "0ms"
// // // // // // // // // // // // // // //               }}
// // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // //               {/* Card Container with 3D Flip */}
// // // // // // // // // // // // // // //               <div 
// // // // // // // // // // // // // // //                 className="relative w-full h-full cursor-pointer group"
// // // // // // // // // // // // // // //                 style={{
// // // // // // // // // // // // // // //                   perspective: "1000px",
// // // // // // // // // // // // // // //                   minHeight: "500px"
// // // // // // // // // // // // // // //                 }}
// // // // // // // // // // // // // // //                 onClick={() => handleCardFlip(index)}
// // // // // // // // // // // // // // //                 onMouseEnter={() => {
// // // // // // // // // // // // // // //                   // Auto-flip on hover (optional)
// // // // // // // // // // // // // // //                   // handleCardFlip(index);
// // // // // // // // // // // // // // //                 }}
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 {/* Front of Card */}
// // // // // // // // // // // // // // //                 <div
// // // // // // // // // // // // // // //                   className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out preserve-3d ${
// // // // // // // // // // // // // // //                     flippedCards[index] ? "rotate-y-180" : ""
// // // // // // // // // // // // // // //                   }`}
// // // // // // // // // // // // // // //                   style={{
// // // // // // // // // // // // // // //                     transformStyle: "preserve-3d",
// // // // // // // // // // // // // // //                     backfaceVisibility: "hidden"
// // // // // // // // // // // // // // //                   }}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   <Card className="
// // // // // // // // // // // // // // //                     bg-gradient-card shadow-elegant border-2 border-primary/20 
// // // // // // // // // // // // // // //                     hover:border-primary/40 hover:shadow-glow 
// // // // // // // // // // // // // // //                     transition-all duration-300 group-hover:-translate-y-1 h-full
// // // // // // // // // // // // // // //                     flex flex-col
// // // // // // // // // // // // // // //                   ">
// // // // // // // // // // // // // // //                     <CardHeader>
// // // // // // // // // // // // // // //                       <div className="flex items-start justify-between mb-4">
// // // // // // // // // // // // // // //                         <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // // // // // // //                           {project.type}
// // // // // // // // // // // // // // //                         </Badge>
// // // // // // // // // // // // // // //                         <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // // // // // //                           <Calendar size={16} className="mr-1" />
// // // // // // // // // // // // // // //                           {project.period}
// // // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // // // //                       <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
// // // // // // // // // // // // // // //                         {project.title}
// // // // // // // // // // // // // // //                       </CardTitle>
// // // // // // // // // // // // // // //                       <CardDescription className="text-base leading-relaxed">
// // // // // // // // // // // // // // //                         {project.description}
// // // // // // // // // // // // // // //                       </CardDescription>
// // // // // // // // // // // // // // //                     </CardHeader>

// // // // // // // // // // // // // // //                     <CardContent className="space-y-6 flex-1 flex flex-col">
                      
// // // // // // // // // // // // // // //                       {/* Key Features */}
// // // // // // // // // // // // // // //                       <div className="flex-1">
// // // // // // // // // // // // // // //                         <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // // // // // // //                         <ul className="space-y-2">
// // // // // // // // // // // // // // //                           {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // // // // //                             <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // // // // // //                               <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // // // // // //                               {feature}
// // // // // // // // // // // // // // //                             </li>
// // // // // // // // // // // // // // //                           ))}
// // // // // // // // // // // // // // //                         </ul>
// // // // // // // // // // // // // // //                       </div>

// // // // // // // // // // // // // // //                       {/* Technologies */}
// // // // // // // // // // // // // // //                       <div>
// // // // // // // // // // // // // // //                         <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // // // // // // //                         <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // // //                           {project.technologies.map((tech) => {
// // // // // // // // // // // // // // //                             const getIcon = (techName) => {
// // // // // // // // // // // // // // //                               switch (techName.toLowerCase()) {
// // // // // // // // // // // // // // //                                 case "iot": return "🌐";
// // // // // // // // // // // // // // //                                 case "web dashboard": return "📊";
// // // // // // // // // // // // // // //                                 case "real-time monitoring": return "📡";
// // // // // // // // // // // // // // //                                 case "automation": return "⚡";
// // // // // // // // // // // // // // //                                 case "robotics": return "🤖";
// // // // // // // // // // // // // // //                                 case "iot sensors": return "📱";
// // // // // // // // // // // // // // //                                 case "embedded systems": return "🔧";
// // // // // // // // // // // // // // //                                 case "remote control": return "📡";
// // // // // // // // // // // // // // //                                 default: return "💻";
// // // // // // // // // // // // // // //                               }
// // // // // // // // // // // // // // //                             };

// // // // // // // // // // // // // // //                             return (
// // // // // // // // // // // // // // //                               <Badge
// // // // // // // // // // // // // // //                                 key={tech}
// // // // // // // // // // // // // // //                                 variant="secondary"
// // // // // // // // // // // // // // //                                 className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // // // // // // //                               >
// // // // // // // // // // // // // // //                                 <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // // // // //                                 {tech}
// // // // // // // // // // // // // // //                               </Badge>
// // // // // // // // // // // // // // //                             );
// // // // // // // // // // // // // // //                           })}
// // // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // // //                       </div>

// // // // // // // // // // // // // // //                       {/* Action Buttons */}
// // // // // // // // // // // // // // //                       <div className="flex gap-3 pt-4">
// // // // // // // // // // // // // // //                         <Button
// // // // // // // // // // // // // // //                           variant="default"
// // // // // // // // // // // // // // //                           size="sm"
// // // // // // // // // // // // // // //                           className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // // // // // // //                           onClick={(e) => {
// // // // // // // // // // // // // // //                             e.stopPropagation();
// // // // // // // // // // // // // // //                             handleViewDetails(project);
// // // // // // // // // // // // // // //                           }}
// // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // //                           <FileText size={12} className="mr-1" />
// // // // // // // // // // // // // // //                           View Details
// // // // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // // // //                         <Button
// // // // // // // // // // // // // // //                           variant="outline"
// // // // // // // // // // // // // // //                           size="sm"
// // // // // // // // // // // // // // //                           className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // // // // // //                           onClick={(e) => {
// // // // // // // // // // // // // // //                             e.stopPropagation();
// // // // // // // // // // // // // // //                             const url =
// // // // // // // // // // // // // // //                               project.title === "Smart Pet Feeder"
// // // // // // // // // // // // // // //                                 ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // // //                                 : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // // //                             window.open(url, "_blank");
// // // // // // // // // // // // // // //                           }}
// // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // //                           <Github size={16} className="mr-2" />
// // // // // // // // // // // // // // //                           Code
// // // // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // // // //                       </div>

// // // // // // // // // // // // // // //                       {/* Flip Hint */}
// // // // // // // // // // // // // // //                       <div className="text-center mt-4">
// // // // // // // // // // // // // // //                         <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
// // // // // // // // // // // // // // //                           <span>Click to flip</span>
// // // // // // // // // // // // // // //                           <span className="text-lg">↻</span>
// // // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // // // //                     </CardContent>
// // // // // // // // // // // // // // //                   </Card>
// // // // // // // // // // // // // // //                 </div>

// // // // // // // // // // // // // // //                 {/* Back of Card */}
// // // // // // // // // // // // // // //                 <div
// // // // // // // // // // // // // // //                   className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out preserve-3d ${
// // // // // // // // // // // // // // //                     flippedCards[index] ? "" : "rotate-y-180"
// // // // // // // // // // // // // // //                   }`}
// // // // // // // // // // // // // // //                   style={{
// // // // // // // // // // // // // // //                     transformStyle: "preserve-3d",
// // // // // // // // // // // // // // //                     backfaceVisibility: "hidden"
// // // // // // // // // // // // // // //                   }}
// // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // //                   <Card className="
// // // // // // // // // // // // // // //                     bg-gradient-to-br from-primary/5 to-primary/10 
// // // // // // // // // // // // // // //                     shadow-elegant border-2 border-primary/30 
// // // // // // // // // // // // // // //                     h-full flex flex-col
// // // // // // // // // // // // // // //                   ">
// // // // // // // // // // // // // // //                     <CardHeader>
// // // // // // // // // // // // // // //                       <div className="flex items-center justify-between mb-4">
// // // // // // // // // // // // // // //                         <Button
// // // // // // // // // // // // // // //                           variant="ghost"
// // // // // // // // // // // // // // //                           size="sm"
// // // // // // // // // // // // // // //                           onClick={(e) => {
// // // // // // // // // // // // // // //                             e.stopPropagation();
// // // // // // // // // // // // // // //                             handleCardFlip(index);
// // // // // // // // // // // // // // //                           }}
// // // // // // // // // // // // // // //                           className="h-8 w-8 p-0 rounded-full"
// // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // //                           <ArrowLeft size={16} />
// // // // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // // // //                         <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
// // // // // // // // // // // // // // //                           Project Insights
// // // // // // // // // // // // // // //                         </Badge>
// // // // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // // // //                       <CardTitle className="text-xl mb-2 text-primary">
// // // // // // // // // // // // // // //                         {project.title} - Deep Dive
// // // // // // // // // // // // // // //                       </CardTitle>
// // // // // // // // // // // // // // //                     </CardHeader>

// // // // // // // // // // // // // // //                     <CardContent className="space-y-6 flex-1">
// // // // // // // // // // // // // // //                       {/* Challenges */}
// // // // // // // // // // // // // // //                       <div>
// // // // // // // // // // // // // // //                         <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
// // // // // // // // // // // // // // //                           <span className="text-lg">🚧</span>
// // // // // // // // // // // // // // //                           Key Challenges
// // // // // // // // // // // // // // //                         </h4>
// // // // // // // // // // // // // // //                         <p className="text-muted-foreground text-sm leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // // // // // // // // //                           {project.backContent.challenges}
// // // // // // // // // // // // // // //                         </p>
// // // // // // // // // // // // // // //                       </div>

// // // // // // // // // // // // // // //                       {/* Learnings */}
// // // // // // // // // // // // // // //                       <div>
// // // // // // // // // // // // // // //                         <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
// // // // // // // // // // // // // // //                           <span className="text-lg">📚</span>
// // // // // // // // // // // // // // //                           Key Learnings
// // // // // // // // // // // // // // //                         </h4>
// // // // // // // // // // // // // // //                         <p className="text-muted-foreground text-sm leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // // // // // // // // //                           {project.backContent.learnings}
// // // // // // // // // // // // // // //                         </p>
// // // // // // // // // // // // // // //                       </div>

// // // // // // // // // // // // // // //                       {/* Impact */}
// // // // // // // // // // // // // // //                       <div>
// // // // // // // // // // // // // // //                         <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
// // // // // // // // // // // // // // //                           <span className="text-lg">📈</span>
// // // // // // // // // // // // // // //                           Project Impact
// // // // // // // // // // // // // // //                         </h4>
// // // // // // // // // // // // // // //                         <p className="text-muted-foreground text-sm leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // // // // // // // // //                           {project.backContent.impact}
// // // // // // // // // // // // // // //                         </p>
// // // // // // // // // // // // // // //                       </div>

// // // // // // // // // // // // // // //                       {/* Quick Actions */}
// // // // // // // // // // // // // // //                       <div className="flex gap-2 pt-4">
// // // // // // // // // // // // // // //                         <Button
// // // // // // // // // // // // // // //                           variant="default"
// // // // // // // // // // // // // // //                           size="sm"
// // // // // // // // // // // // // // //                           className="bg-primary hover:bg-primary/90 text-xs flex-1"
// // // // // // // // // // // // // // //                           onClick={(e) => {
// // // // // // // // // // // // // // //                             e.stopPropagation();
// // // // // // // // // // // // // // //                             handleViewDetails(project);
// // // // // // // // // // // // // // //                           }}
// // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // //                           <FileText size={12} className="mr-1" />
// // // // // // // // // // // // // // //                           PDF Details
// // // // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // // // //                         <Button
// // // // // // // // // // // // // // //                           variant="outline"
// // // // // // // // // // // // // // //                           size="sm"
// // // // // // // // // // // // // // //                           className="border-primary/30 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // // // // // //                           onClick={(e) => {
// // // // // // // // // // // // // // //                             e.stopPropagation();
// // // // // // // // // // // // // // //                             const url =
// // // // // // // // // // // // // // //                               project.title === "Smart Pet Feeder"
// // // // // // // // // // // // // // //                                 ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // // //                                 : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // // //                             window.open(url, "_blank");
// // // // // // // // // // // // // // //                           }}
// // // // // // // // // // // // // // //                         >
// // // // // // // // // // // // // // //                           <Github size={14} className="mr-1" />
// // // // // // // // // // // // // // //                           Source Code
// // // // // // // // // // // // // // //                         </Button>
// // // // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // // // //                     </CardContent>
// // // // // // // // // // // // // // //                   </Card>
// // // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // // // // //         <div 
// // // // // // // // // // // // // // //           className={`text-center mt-16 transition-all duration-500 ease-out ${
// // // // // // // // // // // // // // //             isVisible 
// // // // // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // // // // //           }`}
// // // // // // // // // // // // // // //           style={{
// // // // // // // // // // // // // // //             transitionDelay: isVisible ? "500ms" : "0ms"
// // // // // // // // // // // // // // //           }}
// // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // // //           <Button
// // // // // // // // // // // // // // //             variant="default"
// // // // // // // // // // // // // // //             size="lg"
// // // // // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // // // // // // //             onClick={() =>
// // // // // // // // // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // // // // // // // // //             }
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // // // // // //         .rotate-y-180 {
// // // // // // // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //         .preserve-3d {
// // // // // // // // // // // // // // //           transform-style: preserve-3d;
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //         /* Optimized animations for performance */
// // // // // // // // // // // // // // //         .group {
// // // // // // // // // // // // // // //           transform: translateZ(0);
// // // // // // // // // // // // // // //           backface-visibility: hidden;
// // // // // // // // // // // // // // //           perspective: 1000px;
// // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // //       `}</style>
// // // // // // // // // // // // // // //     </section>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default Projects;
// // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // // // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // // // // // // //   const projectRefs = useRef([]);

// // // // // // // // // // // // // //   const projects = [
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // // // // // // // // // //       backContent: {
// // // // // // // // // // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // // // // // // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // // // // // // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // // // // //       type: "Analytics & IoT",
// // // // // // // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // // // // // // // // // //       backContent: {
// // // // // // // // // // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // // // // // // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // // // // // // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // // // // //       (entries) => {
// // // // // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // // // // //             setIsVisible(true);
            
// // // // // // // // // // // // // //             projectRefs.current.forEach((projectRef, index) => {
// // // // // // // // // // // // // //               if (projectRef) {
// // // // // // // // // // // // // //                 setTimeout(() => {
// // // // // // // // // // // // // //                   projectRef.style.opacity = "1";
// // // // // // // // // // // // // //                   projectRef.style.transform = "translateY(0)";
// // // // // // // // // // // // // //                 }, index * 200);
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //             });
// // // // // // // // // // // // // //           } else {
// // // // // // // // // // // // // //             setIsVisible(false);
// // // // // // // // // // // // // //             projectRefs.current.forEach((projectRef) => {
// // // // // // // // // // // // // //               if (projectRef) {
// // // // // // // // // // // // // //                 projectRef.style.opacity = "0";
// // // // // // // // // // // // // //                 projectRef.style.transform = "translateY(30px)";
// // // // // // // // // // // // // //               }
// // // // // // // // // // // // // //             });
// // // // // // // // // // // // // //           }
// // // // // // // // // // // // // //         });
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       { 
// // // // // // // // // // // // // //         threshold: 0.2,
// // // // // // // // // // // // // //         rootMargin: "0px"
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     );

// // // // // // // // // // // // // //     if (sectionRef.current) {
// // // // // // // // // // // // // //       observer.observe(sectionRef.current);
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // //       if (sectionRef.current) {
// // // // // // // // // // // // // //         observer.unobserve(sectionRef.current);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleCardHover = (index, isHovering) => {
// // // // // // // // // // // // // //     setFlippedCards(prev => ({
// // // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // // //       [index]: isHovering
// // // // // // // // // // // // // //     }));
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const addToProjectRefs = (el) => {
// // // // // // // // // // // // // //     if (el && !projectRefs.current.includes(el)) {
// // // // // // // // // // // // // //       projectRefs.current.push(el);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <section 
// // // // // // // // // // // // // //       id="projects" 
// // // // // // // // // // // // // //       ref={sectionRef}
// // // // // // // // // // // // // //       className="py-20 px-4 bg-muted/30 overflow-hidden"
// // // // // // // // // // // // // //     >
// // // // // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // // // // //         {/* Header Section */}
// // // // // // // // // // // // // //         <div 
// // // // // // // // // // // // // //           className={`text-center mb-16 transition-all duration-700 ease-out ${
// // // // // // // // // // // // // //             isVisible 
// // // // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // // // //           }`}
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
// // // // // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //           <p className="text-sm text-muted-foreground mt-2">
// // // // // // // // // // // // // //             💡 Hover on cards to flip and see detailed insights
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Projects Grid */}
// // // // // // // // // // // // // //         <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // // // //             <div
// // // // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // // // //               ref={addToProjectRefs}
// // // // // // // // // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper"
// // // // // // // // // // // // // //               style={{
// // // // // // // // // // // // // //                 transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
// // // // // // // // // // // // // //                 minHeight: "500px"
// // // // // // // // // // // // // //               }}
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               {/* Flip Card Container */}
// // // // // // // // // // // // // //               <div 
// // // // // // // // // // // // // //                 className="flip-card w-full h-full"
// // // // // // // // // // // // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // // // // // // // // // // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // // // // // // // // //                   {/* Front Side */}
// // // // // // // // // // // // // //                   <div className="flip-card-front">
// // // // // // // // // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
// // // // // // // // // // // // // //                       <CardHeader>
// // // // // // // // // // // // // //                         <div className="flex items-start justify-between mb-4">
// // // // // // // // // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
// // // // // // // // // // // // // //                             {project.type}
// // // // // // // // // // // // // //                           </Badge>
// // // // // // // // // // // // // //                           <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // // // // //                             <Calendar size={16} className="mr-1" />
// // // // // // // // // // // // // //                             {project.period}
// // // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // //                         <CardTitle className="text-xl mb-2">
// // // // // // // // // // // // // //                           {project.title}
// // // // // // // // // // // // // //                         </CardTitle>
// // // // // // // // // // // // // //                         <CardDescription className="text-base leading-relaxed">
// // // // // // // // // // // // // //                           {project.description}
// // // // // // // // // // // // // //                         </CardDescription>
// // // // // // // // // // // // // //                       </CardHeader>

// // // // // // // // // // // // // //                       <CardContent className="space-y-6">
// // // // // // // // // // // // // //                         {/* Key Features */}
// // // // // // // // // // // // // //                         <div>
// // // // // // // // // // // // // //                           <h4 className="font-semibold mb-3 text-primary">Key Features & Achievements</h4>
// // // // // // // // // // // // // //                           <ul className="space-y-2">
// // // // // // // // // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // // // //                               <li key={featureIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // // // // //                                 <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // // // // //                                 {feature}
// // // // // // // // // // // // // //                               </li>
// // // // // // // // // // // // // //                             ))}
// // // // // // // // // // // // // //                           </ul>
// // // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // // //                         {/* Technologies */}
// // // // // // // // // // // // // //                         <div>
// // // // // // // // // // // // // //                           <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
// // // // // // // // // // // // // //                           <div className="flex flex-wrap gap-2">
// // // // // // // // // // // // // //                             {project.technologies.map((tech) => {
// // // // // // // // // // // // // //                               const getIcon = (techName) => {
// // // // // // // // // // // // // //                                 switch (techName.toLowerCase()) {
// // // // // // // // // // // // // //                                   case "iot": return "🌐";
// // // // // // // // // // // // // //                                   case "web dashboard": return "📊";
// // // // // // // // // // // // // //                                   case "real-time monitoring": return "📡";
// // // // // // // // // // // // // //                                   case "automation": return "⚡";
// // // // // // // // // // // // // //                                   case "robotics": return "🤖";
// // // // // // // // // // // // // //                                   case "iot sensors": return "📱";
// // // // // // // // // // // // // //                                   case "embedded systems": return "🔧";
// // // // // // // // // // // // // //                                   case "remote control": return "📡";
// // // // // // // // // // // // // //                                   default: return "💻";
// // // // // // // // // // // // // //                                 }
// // // // // // // // // // // // // //                               };

// // // // // // // // // // // // // //                               return (
// // // // // // // // // // // // // //                                 <Badge
// // // // // // // // // // // // // //                                   key={tech}
// // // // // // // // // // // // // //                                   variant="secondary"
// // // // // // // // // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
// // // // // // // // // // // // // //                                 >
// // // // // // // // // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // // // //                                   {tech}
// // // // // // // // // // // // // //                                 </Badge>
// // // // // // // // // // // // // //                               );
// // // // // // // // // // // // // //                             })}
// // // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // // //                         {/* Action Buttons */}
// // // // // // // // // // // // // //                         <div className="flex gap-3 pt-4">
// // // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // // //                             variant="default"
// // // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-7 px-3"
// // // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // // // // // //                             }}
// // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // //                             <FileText size={12} className="mr-1" />
// // // // // // // // // // // // // //                             View Details
// // // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // // //                             variant="outline"
// // // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 flex-1"
// // // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // // //                               const url =
// // // // // // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // // // // // //                             }}
// // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // //                             <Github size={16} className="mr-2" />
// // // // // // // // // // // // // //                             Code
// // // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // //                       </CardContent>
// // // // // // // // // // // // // //                     </Card>
// // // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // // //                   {/* Back Side */}
// // // // // // // // // // // // // //                   <div className="flip-card-back">
// // // // // // // // // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-6">
// // // // // // // // // // // // // //                       <div className="h-full flex flex-col">
// // // // // // // // // // // // // //                         {/* Header */}
// // // // // // // // // // // // // //                         <div className="text-center mb-6">
// // // // // // // // // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2">
// // // // // // // // // // // // // //                             Project Insights
// // // // // // // // // // // // // //                           </Badge>
// // // // // // // // // // // // // //                           <h3 className="text-lg font-bold text-primary">
// // // // // // // // // // // // // //                             {project.title}
// // // // // // // // // // // // // //                           </h3>
// // // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // // //                         {/* Content */}
// // // // // // // // // // // // // //                         <div className="space-y-4 flex-1">
// // // // // // // // // // // // // //                           {/* Challenges */}
// // // // // // // // // // // // // //                           <div>
// // // // // // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm flex items-center gap-1">
// // // // // // // // // // // // // //                               <span>🚧</span>
// // // // // // // // // // // // // //                               Key Challenges
// // // // // // // // // // // // // //                             </h4>
// // // // // // // // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // // // // // // // //                               {project.backContent.challenges}
// // // // // // // // // // // // // //                             </p>
// // // // // // // // // // // // // //                           </div>

// // // // // // // // // // // // // //                           {/* Learnings */}
// // // // // // // // // // // // // //                           <div>
// // // // // // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm flex items-center gap-1">
// // // // // // // // // // // // // //                               <span>📚</span>
// // // // // // // // // // // // // //                               Key Learnings
// // // // // // // // // // // // // //                             </h4>
// // // // // // // // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // // // // // // // //                               {project.backContent.learnings}
// // // // // // // // // // // // // //                             </p>
// // // // // // // // // // // // // //                           </div>

// // // // // // // // // // // // // //                           {/* Impact */}
// // // // // // // // // // // // // //                           <div>
// // // // // // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm flex items-center gap-1">
// // // // // // // // // // // // // //                               <span>📈</span>
// // // // // // // // // // // // // //                               Project Impact
// // // // // // // // // // // // // //                             </h4>
// // // // // // // // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-3 rounded-lg">
// // // // // // // // // // // // // //                               {project.backContent.impact}
// // // // // // // // // // // // // //                             </p>
// // // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // // //                         {/* Actions */}
// // // // // // // // // // // // // //                         <div className="flex gap-2 pt-4 mt-auto">
// // // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // // //                             variant="default"
// // // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs flex-1 h-8"
// // // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // // // // // //                             }}
// // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // //                             <FileText size={12} className="mr-1" />
// // // // // // // // // // // // // //                             PDF Details
// // // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // // //                             variant="outline"
// // // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 flex-1 h-8"
// // // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // // //                               const url =
// // // // // // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // // // // // //                             }}
// // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // //                             <Github size={12} className="mr-1" />
// // // // // // // // // // // // // //                             Source Code
// // // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // // //                     </Card>
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // // // //         <div 
// // // // // // // // // // // // // //           className={`text-center mt-16 transition-all duration-700 ease-out ${
// // // // // // // // // // // // // //             isVisible 
// // // // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // // // //           }`}
// // // // // // // // // // // // // //           style={{
// // // // // // // // // // // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // // // // // // // // // // //           }}
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <p className="text-muted-foreground mb-6">
// // // // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //           <Button
// // // // // // // // // // // // // //             variant="default"
// // // // // // // // // // // // // //             size="lg"
// // // // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // // // // // // // // //             onClick={() =>
// // // // // // // // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // // // // // // // //             }
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // // // // //         .flip-card {
// // // // // // // // // // // // // //           perspective: 1000px;
// // // // // // // // // // // // // //           height: 100%;
// // // // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .flip-card-inner {
// // // // // // // // // // // // // //           position: relative;
// // // // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // // // //           height: 100%;
// // // // // // // // // // // // // //           transition: transform 0.6s;
// // // // // // // // // // // // // //           transform-style: preserve-3d;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .flip-card-flipped {
// // // // // // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .flip-card-front,
// // // // // // // // // // // // // //         .flip-card-back {
// // // // // // // // // // // // // //           position: absolute;
// // // // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // // // //           height: 100%;
// // // // // // // // // // // // // //           -webkit-backface-visibility: hidden;
// // // // // // // // // // // // // //           backface-visibility: hidden;
// // // // // // // // // // // // // //           border-radius: 0.5rem;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .flip-card-back {
// // // // // // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         /* Ensure smooth animations */
// // // // // // // // // // // // // //         .project-card-wrapper {
// // // // // // // // // // // // // //           transform: translateZ(0);
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       `}</style>
// // // // // // // // // // // // // //     </section>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Projects;
// // // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // // // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // // // // // // //   const projectRefs = useRef([]);

// // // // // // // // // // // // // //   const projects = [
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Smart Pet Feeder",
// // // // // // // // // // // // // //       period: "Aug 2023 - Jan 2024",
// // // // // // // // // // // // // //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // //         "Created and implemented a smart feeder system to dispense food to pets at scheduled intervals",
// // // // // // // // // // // // // //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// // // // // // // // // // // // // //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// // // // // // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // // // // // // // // // //       backContent: {
// // // // // // // // // // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // // // // // // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // // // // // // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     },
// // // // // // // // // // // // // //     {
// // // // // // // // // // // // // //       title: "Multipurpose Agriculture Robot",
// // // // // // // // // // // // // //       period: "Mar 2024 - Feb 2025",
// // // // // // // // // // // // // //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// // // // // // // // // // // // // //       features: [
// // // // // // // // // // // // // //         "Built a smart robotic system capable of performing multiple agricultural tasks such as soil monitoring, seed sowing, and spraying",
// // // // // // // // // // // // // //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// // // // // // // // // // // // // //         "Enhanced farming efficiency and productivity through the application of embedded systems",
// // // // // // // // // // // // // //         "Enabled remote operation and monitoring, reducing the need for constant human supervision"
// // // // // // // // // // // // // //       ],
// // // // // // // // // // // // // //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// // // // // // // // // // // // // //       type: "Analytics & IoT",
// // // // // // // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // // // // // // // // // //       backContent: {
// // // // // // // // // // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // // // // // // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // // // // // // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // // // // //       (entries) => {
// // // // // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // // // // //             setIsVisible(true);
// // // // // // // // // // // // // //           }
// // // // // // // // // // // // // //         });
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //       { 
// // // // // // // // // // // // // //         threshold: 0.1,
// // // // // // // // // // // // // //         rootMargin: "50px"
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     );

// // // // // // // // // // // // // //     if (sectionRef.current) {
// // // // // // // // // // // // // //       observer.observe(sectionRef.current);
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // //       if (sectionRef.current) {
// // // // // // // // // // // // // //         observer.unobserve(sectionRef.current);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     if (isVisible) {
// // // // // // // // // // // // // //       projectRefs.current.forEach((projectRef, index) => {
// // // // // // // // // // // // // //         if (projectRef) {
// // // // // // // // // // // // // //           setTimeout(() => {
// // // // // // // // // // // // // //             projectRef.style.opacity = "1";
// // // // // // // // // // // // // //             projectRef.style.transform = "translateY(0)";
// // // // // // // // // // // // // //           }, index * 200);
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   }, [isVisible]);

// // // // // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleCardHover = (index, isHovering) => {
// // // // // // // // // // // // // //     setFlippedCards(prev => ({
// // // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // // //       [index]: isHovering
// // // // // // // // // // // // // //     }));
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const addToProjectRefs = (el) => {
// // // // // // // // // // // // // //     if (el && !projectRefs.current.includes(el)) {
// // // // // // // // // // // // // //       projectRefs.current.push(el);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <section 
// // // // // // // // // // // // // //       id="projects" 
// // // // // // // // // // // // // //       ref={sectionRef}
// // // // // // // // // // // // // //       className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // // // // // // // // // //     >
// // // // // // // // // // // // // //       <div className="container mx-auto max-w-7xl">
// // // // // // // // // // // // // //         {/* Header Section */}
// // // // // // // // // // // // // //         <div 
// // // // // // // // // // // // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // // // // // // // // // // // // //             isVisible 
// // // // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // // // //           }`}
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // // // // // // // // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // // // // // // // // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // // // // // // // // // // //             💡 Hover on cards to flip and see detailed insights
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Projects Grid */}
// // // // // // // // // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-[95%] sm:max-w-full mx-auto">
// // // // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // // // //             <div
// // // // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // // // //               ref={addToProjectRefs}
// // // // // // // // // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full"
// // // // // // // // // // // // // //               style={{
// // // // // // // // // // // // // //                 transitionDelay: isVisible ? `${index * 200}ms` : "0ms"
// // // // // // // // // // // // // //               }}
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               {/* Flip Card Container */}
// // // // // // // // // // // // // //               <div 
// // // // // // // // // // // // // //                 className="flip-card w-full"
// // // // // // // // // // // // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // // // // // // // // // // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // // // // // // // // //                   {/* Front Side */}
// // // // // // // // // // // // // //                   <div className="flip-card-front">
// // // // // // // // // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
// // // // // // // // // // // // // //                       <CardHeader className="pb-4">
// // // // // // // // // // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4">
// // // // // // // // // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // // // // // // // // // //                             {project.type}
// // // // // // // // // // // // // //                           </Badge>
// // // // // // // // // // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // // // // // // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // // // // // // // // // //                             {project.period}
// // // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2">
// // // // // // // // // // // // // //                           {project.title}
// // // // // // // // // // // // // //                         </CardTitle>
// // // // // // // // // // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed">
// // // // // // // // // // // // // //                           {project.description}
// // // // // // // // // // // // // //                         </CardDescription>
// // // // // // // // // // // // // //                       </CardHeader>

// // // // // // // // // // // // // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6">
// // // // // // // // // // // // // //                         {/* Key Features */}
// // // // // // // // // // // // // //                         <div>
// // // // // // // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // // // // // // // // // // //                           <ul className="space-y-2">
// // // // // // // // // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // // // //                               <li key={featureIndex} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// // // // // // // // // // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // // // // // // // // // //                                 {feature}
// // // // // // // // // // // // // //                               </li>
// // // // // // // // // // // // // //                             ))}
// // // // // // // // // // // // // //                           </ul>
// // // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // // //                         {/* Technologies */}
// // // // // // // // // // // // // //                         <div>
// // // // // // // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Technologies Used</h4>
// // // // // // // // // // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // // // // // // // // // //                             {project.technologies.map((tech) => {
// // // // // // // // // // // // // //                               const getIcon = (techName) => {
// // // // // // // // // // // // // //                                 switch (techName.toLowerCase()) {
// // // // // // // // // // // // // //                                   case "iot": return "🌐";
// // // // // // // // // // // // // //                                   case "web dashboard": return "📊";
// // // // // // // // // // // // // //                                   case "real-time monitoring": return "📡";
// // // // // // // // // // // // // //                                   case "automation": return "⚡";
// // // // // // // // // // // // // //                                   case "robotics": return "🤖";
// // // // // // // // // // // // // //                                   case "iot sensors": return "📱";
// // // // // // // // // // // // // //                                   case "embedded systems": return "🔧";
// // // // // // // // // // // // // //                                   case "remote control": return "📡";
// // // // // // // // // // // // // //                                   default: return "💻";
// // // // // // // // // // // // // //                                 }
// // // // // // // // // // // // // //                               };

// // // // // // // // // // // // // //                               return (
// // // // // // // // // // // // // //                                 <Badge
// // // // // // // // // // // // // //                                   key={tech}
// // // // // // // // // // // // // //                                   variant="secondary"
// // // // // // // // // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs"
// // // // // // // // // // // // // //                                 >
// // // // // // // // // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // // // //                                   {tech}
// // // // // // // // // // // // // //                                 </Badge>
// // // // // // // // // // // // // //                               );
// // // // // // // // // // // // // //                             })}
// // // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // // //                         {/* Action Buttons */}
// // // // // // // // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
// // // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // // //                             variant="default"
// // // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-8 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
// // // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // // // // // //                             }}
// // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // // // // // // // //                             View Details
// // // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // // //                             variant="outline"
// // // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8 sm:h-9"
// // // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // // //                               const url =
// // // // // // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // // // // // //                             }}
// // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // // // // // // // // //                             Code
// // // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // //                       </CardContent>
// // // // // // // // // // // // // //                     </Card>
// // // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // // //                   {/* Back Side */}
// // // // // // // // // // // // // //                   <div className="flip-card-back">
// // // // // // // // // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-6">
// // // // // // // // // // // // // //                       <div className="h-full flex flex-col">
// // // // // // // // // // // // // //                         {/* Header */}
// // // // // // // // // // // // // //                         <div className="text-center mb-4 sm:mb-6">
// // // // // // // // // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs">
// // // // // // // // // // // // // //                             Project Insights
// // // // // // // // // // // // // //                           </Badge>
// // // // // // // // // // // // // //                           <h3 className="text-base sm:text-lg font-bold text-primary">
// // // // // // // // // // // // // //                             {project.title}
// // // // // // // // // // // // // //                           </h3>
// // // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // // //                         {/* Content */}
// // // // // // // // // // // // // //                         <div className="space-y-3 sm:space-y-4 flex-1">
// // // // // // // // // // // // // //                           {/* Challenges */}
// // // // // // // // // // // // // //                           <div>
// // // // // // // // // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // // // // // // // // //                               <span>🚧</span>
// // // // // // // // // // // // // //                               Key Challenges
// // // // // // // // // // // // // //                             </h4>
// // // // // // // // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // // // // // // // // //                               {project.backContent.challenges}
// // // // // // // // // // // // // //                             </p>
// // // // // // // // // // // // // //                           </div>

// // // // // // // // // // // // // //                           {/* Learnings */}
// // // // // // // // // // // // // //                           <div>
// // // // // // // // // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // // // // // // // // //                               <span>📚</span>
// // // // // // // // // // // // // //                               Key Learnings
// // // // // // // // // // // // // //                             </h4>
// // // // // // // // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // // // // // // // // //                               {project.backContent.learnings}
// // // // // // // // // // // // // //                             </p>
// // // // // // // // // // // // // //                           </div>

// // // // // // // // // // // // // //                           {/* Impact */}
// // // // // // // // // // // // // //                           <div>
// // // // // // // // // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // // // // // // // // //                               <span>📈</span>
// // // // // // // // // // // // // //                               Project Impact
// // // // // // // // // // // // // //                             </h4>
// // // // // // // // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // // // // // // // // //                               {project.backContent.impact}
// // // // // // // // // // // // // //                             </p>
// // // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // // //                         {/* Actions */}
// // // // // // // // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2 pt-3 sm:pt-4 mt-auto">
// // // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // // //                             variant="default"
// // // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs w-full sm:flex-1 h-8"
// // // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // // // // // //                             }}
// // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // //                             <FileText size={12} className="mr-1" />
// // // // // // // // // // // // // //                             PDF Details
// // // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // // //                             variant="outline"
// // // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8"
// // // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // // //                               const url =
// // // // // // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // // // // // //                             }}
// // // // // // // // // // // // // //                           >
// // // // // // // // // // // // // //                             <Github size={12} className="mr-1" />
// // // // // // // // // // // // // //                             Source Code
// // // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // // //                     </Card>
// // // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // // // //         <div 
// // // // // // // // // // // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // // // // // // // // // // // // //             isVisible 
// // // // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // // // //           }`}
// // // // // // // // // // // // // //           style={{
// // // // // // // // // // // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // // // // // // // // // // //           }}
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // // // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // // // //           </p>
// // // // // // // // // // // // // //           <Button
// // // // // // // // // // // // // //             variant="default"
// // // // // // // // // // // // // //             size="lg"
// // // // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // // // // // // // // // // // // //             onClick={() =>
// // // // // // // // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // // // // // // // //             }
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // // // // //         .flip-card {
// // // // // // // // // // // // // //           perspective: 1000px;
// // // // // // // // // // // // // //           min-height: 500px;
// // // // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         @media (max-width: 640px) {
// // // // // // // // // // // // // //           .flip-card {
// // // // // // // // // // // // // //             min-height: 580px;
// // // // // // // // // // // // // //           }
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .flip-card-inner {
// // // // // // // // // // // // // //           position: relative;
// // // // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // // // //           height: 100%;
// // // // // // // // // // // // // //           min-height: inherit;
// // // // // // // // // // // // // //           transition: transform 0.6s;
// // // // // // // // // // // // // //           transform-style: preserve-3d;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .flip-card-flipped {
// // // // // // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .flip-card-front,
// // // // // // // // // // // // // //         .flip-card-back {
// // // // // // // // // // // // // //           position: absolute;
// // // // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // // // //           height: 100%;
// // // // // // // // // // // // // //           min-height: inherit;
// // // // // // // // // // // // // //           -webkit-backface-visibility: hidden;
// // // // // // // // // // // // // //           backface-visibility: hidden;
// // // // // // // // // // // // // //           border-radius: 0.5rem;
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         .flip-card-back {
// // // // // // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // // // // // //         }

// // // // // // // // // // // // // //         /* Ensure smooth animations */
// // // // // // // // // // // // // //         .project-card-wrapper {
// // // // // // // // // // // // // //           transform: translateZ(0);
// // // // // // // // // // // // // //           will-change: opacity, transform;
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       `}</style>
// // // // // // // // // // // // // //     </section>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Projects;
// // // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // // // // // //   const projectRefs = useRef([]);

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
// // // // // // // // // // // // //       type: "Hardware & Software",
// // // // // // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // // // // // // // // //       backContent: {
// // // // // // // // // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // // // // // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // // // // // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // // // // // // // // //       }
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
// // // // // // // // // // // // //       type: "Analytics & IoT",
// // // // // // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // // // // // // // // //       backContent: {
// // // // // // // // // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // // // // // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // // // // // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   ];

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // // // //       (entries) => {
// // // // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // // // //           const index = projectRefs.current.indexOf(entry.target);
// // // // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // // // //             // Element is visible
// // // // // // // // // // // // //             if (entry.target && index !== -1) {
// // // // // // // // // // // // //               setTimeout(() => {
// // // // // // // // // // // // //                 entry.target.style.opacity = "1";
// // // // // // // // // // // // //                 entry.target.style.transform = "translateY(0)";
// // // // // // // // // // // // //               }, index * 200);
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //           } else {
// // // // // // // // // // // // //             // Element is not visible - reset animation
// // // // // // // // // // // // //             if (entry.target) {
// // // // // // // // // // // // //               entry.target.style.opacity = "0";
// // // // // // // // // // // // //               entry.target.style.transform = "translateY(32px)";
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //           }
// // // // // // // // // // // // //         });
// // // // // // // // // // // // //       },
// // // // // // // // // // // // //       { 
// // // // // // // // // // // // //         threshold: 0.2,
// // // // // // // // // // // // //         rootMargin: "0px"
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     );

// // // // // // // // // // // // //     projectRefs.current.forEach((projectRef) => {
// // // // // // // // // // // // //       if (projectRef) {
// // // // // // // // // // // // //         observer.observe(projectRef);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     });

// // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // //       projectRefs.current.forEach((projectRef) => {
// // // // // // // // // // // // //         if (projectRef) {
// // // // // // // // // // // // //           observer.unobserve(projectRef);
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //     };
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const headerObserver = new IntersectionObserver(
// // // // // // // // // // // // //       (entries) => {
// // // // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // // // //             setIsVisible(true);
// // // // // // // // // // // // //           }
// // // // // // // // // // // // //         });
// // // // // // // // // // // // //       },
// // // // // // // // // // // // //       { 
// // // // // // // // // // // // //         threshold: 0.1,
// // // // // // // // // // // // //         rootMargin: "50px"
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     );

// // // // // // // // // // // // //     if (sectionRef.current) {
// // // // // // // // // // // // //       headerObserver.observe(sectionRef.current);
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // //       if (sectionRef.current) {
// // // // // // // // // // // // //         headerObserver.unobserve(sectionRef.current);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // // // // // // //     } else {
// // // // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleCardHover = (index, isHovering) => {
// // // // // // // // // // // // //     setFlippedCards(prev => ({
// // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // //       [index]: isHovering
// // // // // // // // // // // // //     }));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const addToProjectRefs = (el, index) => {
// // // // // // // // // // // // //     if (el && !projectRefs.current[index]) {
// // // // // // // // // // // // //       projectRefs.current[index] = el;
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <section 
// // // // // // // // // // // // //       id="projects" 
// // // // // // // // // // // // //       ref={sectionRef}
// // // // // // // // // // // // //       className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       <div className="container mx-auto max-w-7xl">
// // // // // // // // // // // // //         {/* Header Section */}
// // // // // // // // // // // // //         <div 
// // // // // // // // // // // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // // // // // // // // // // // //             isVisible 
// // // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // // //           }`}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // // // // // // // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // // // // // // // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // // //           </p>
// // // // // // // // // // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // // // // // // // // // //             💡 Hover on cards to flip and see detailed insights
// // // // // // // // // // // // //           </p>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Projects Grid */}
// // // // // // // // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full mx-auto">
// // // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // // //             <div
// // // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // // //               ref={(el) => addToProjectRefs(el, index)}
// // // // // // // // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               {/* Flip Card Container */}
// // // // // // // // // // // // //               <div 
// // // // // // // // // // // // //                 className="flip-card w-full h-full"
// // // // // // // // // // // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // // // // // // // // // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // // // // // // // //                   {/* Front Side */}
// // // // // // // // // // // // //                   <div className="flip-card-front">
// // // // // // // // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // // // // // // // // // // //                       <CardHeader className="pb-4">
// // // // // // // // // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4">
// // // // // // // // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // // // // // // // // //                             {project.type}
// // // // // // // // // // // // //                           </Badge>
// // // // // // // // // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // // // // // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // // // // // // // // //                             {project.period}
// // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2">
// // // // // // // // // // // // //                           {project.title}
// // // // // // // // // // // // //                         </CardTitle>
// // // // // // // // // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed">
// // // // // // // // // // // // //                           {project.description}
// // // // // // // // // // // // //                         </CardDescription>
// // // // // // // // // // // // //                       </CardHeader>

// // // // // // // // // // // // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6 flex-1 flex flex-col">
// // // // // // // // // // // // //                         {/* Key Features */}
// // // // // // // // // // // // //                         <div className="flex-1">
// // // // // // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // // // // // // // // // //                           <ul className="space-y-2">
// // // // // // // // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // // //                               <li key={featureIndex} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// // // // // // // // // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // // // // // // // // //                                 {feature}
// // // // // // // // // // // // //                               </li>
// // // // // // // // // // // // //                             ))}
// // // // // // // // // // // // //                           </ul>
// // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // //                         {/* Technologies */}
// // // // // // // // // // // // //                         <div>
// // // // // // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Technologies Used</h4>
// // // // // // // // // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // // // // // // // // //                             {project.technologies.map((tech) => {
// // // // // // // // // // // // //                               const getIcon = (techName) => {
// // // // // // // // // // // // //                                 switch (techName.toLowerCase()) {
// // // // // // // // // // // // //                                   case "iot": return "🌐";
// // // // // // // // // // // // //                                   case "web dashboard": return "📊";
// // // // // // // // // // // // //                                   case "real-time monitoring": return "📡";
// // // // // // // // // // // // //                                   case "automation": return "⚡";
// // // // // // // // // // // // //                                   case "robotics": return "🤖";
// // // // // // // // // // // // //                                   case "iot sensors": return "📱";
// // // // // // // // // // // // //                                   case "embedded systems": return "🔧";
// // // // // // // // // // // // //                                   case "remote control": return "📡";
// // // // // // // // // // // // //                                   default: return "💻";
// // // // // // // // // // // // //                                 }
// // // // // // // // // // // // //                               };

// // // // // // // // // // // // //                               return (
// // // // // // // // // // // // //                                 <Badge
// // // // // // // // // // // // //                                   key={tech}
// // // // // // // // // // // // //                                   variant="secondary"
// // // // // // // // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs"
// // // // // // // // // // // // //                                 >
// // // // // // // // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // // //                                   {tech}
// // // // // // // // // // // // //                                 </Badge>
// // // // // // // // // // // // //                               );
// // // // // // // // // // // // //                             })}
// // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // //                         {/* Action Buttons */}
// // // // // // // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
// // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // //                             variant="default"
// // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-8 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
// // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // // // // //                             }}
// // // // // // // // // // // // //                           >
// // // // // // // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // // // // // // //                             View Details
// // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // //                             variant="outline"
// // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8 sm:h-9"
// // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // //                               const url =
// // // // // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // // // // //                             }}
// // // // // // // // // // // // //                           >
// // // // // // // // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // // // // // // // //                             Code
// // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // //                       </CardContent>
// // // // // // // // // // // // //                     </Card>
// // // // // // // // // // // // //                   </div>

// // // // // // // // // // // // //                   {/* Back Side */}
// // // // // // // // // // // // //                   <div className="flip-card-back">
// // // // // // // // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-6 flex flex-col">
// // // // // // // // // // // // //                       <div className="h-full flex flex-col">
// // // // // // // // // // // // //                         {/* Header */}
// // // // // // // // // // // // //                         <div className="text-center mb-4 sm:mb-6">
// // // // // // // // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs">
// // // // // // // // // // // // //                             Project Insights
// // // // // // // // // // // // //                           </Badge>
// // // // // // // // // // // // //                           <h3 className="text-base sm:text-lg font-bold text-primary">
// // // // // // // // // // // // //                             {project.title}
// // // // // // // // // // // // //                           </h3>
// // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // //                         {/* Content */}
// // // // // // // // // // // // //                         <div className="space-y-3 sm:space-y-4 flex-1">
// // // // // // // // // // // // //                           {/* Challenges */}
// // // // // // // // // // // // //                           <div>
// // // // // // // // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // // // // // // // //                               <span>🚧</span>
// // // // // // // // // // // // //                               Key Challenges
// // // // // // // // // // // // //                             </h4>
// // // // // // // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // // // // // // // //                               {project.backContent.challenges}
// // // // // // // // // // // // //                             </p>
// // // // // // // // // // // // //                           </div>

// // // // // // // // // // // // //                           {/* Learnings */}
// // // // // // // // // // // // //                           <div>
// // // // // // // // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // // // // // // // //                               <span>📚</span>
// // // // // // // // // // // // //                               Key Learnings
// // // // // // // // // // // // //                             </h4>
// // // // // // // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // // // // // // // //                               {project.backContent.learnings}
// // // // // // // // // // // // //                             </p>
// // // // // // // // // // // // //                           </div>

// // // // // // // // // // // // //                           {/* Impact */}
// // // // // // // // // // // // //                           <div>
// // // // // // // // // // // // //                             <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-xs sm:text-sm flex items-center gap-1">
// // // // // // // // // // // // //                               <span>📈</span>
// // // // // // // // // // // // //                               Project Impact
// // // // // // // // // // // // //                             </h4>
// // // // // // // // // // // // //                             <p className="text-muted-foreground text-xs leading-relaxed bg-white/50 p-2 sm:p-3 rounded-lg">
// // // // // // // // // // // // //                               {project.backContent.impact}
// // // // // // // // // // // // //                             </p>
// // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // //                         </div>

// // // // // // // // // // // // //                         {/* Actions */}
// // // // // // // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2 pt-3 sm:pt-4 mt-auto">
// // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // //                             variant="default"
// // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs w-full sm:flex-1 h-8"
// // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // // // // //                             }}
// // // // // // // // // // // // //                           >
// // // // // // // // // // // // //                             <FileText size={12} className="mr-1" />
// // // // // // // // // // // // //                             PDF Details
// // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // //                           <Button
// // // // // // // // // // // // //                             variant="outline"
// // // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8"
// // // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // // //                               const url =
// // // // // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // // // // //                             }}
// // // // // // // // // // // // //                           >
// // // // // // // // // // // // //                             <Github size={12} className="mr-1" />
// // // // // // // // // // // // //                             Source Code
// // // // // // // // // // // // //                           </Button>
// // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // //                     </Card>
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // // //         <div 
// // // // // // // // // // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // // // // // // // // // // // //             isVisible 
// // // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // // //           }`}
// // // // // // // // // // // // //           style={{
// // // // // // // // // // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // // //           </p>
// // // // // // // // // // // // //           <Button
// // // // // // // // // // // // //             variant="default"
// // // // // // // // // // // // //             size="lg"
// // // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // // // // // // // // // // // //             onClick={() =>
// // // // // // // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // // //           </Button>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // // // //         .flip-card {
// // // // // // // // // // // // //           perspective: 1000px;
// // // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .flip-card-inner {
// // // // // // // // // // // // //           position: relative;
// // // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // // //           height: 100%;
// // // // // // // // // // // // //           transition: transform 0.6s;
// // // // // // // // // // // // //           transform-style: preserve-3d;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .flip-card-flipped {
// // // // // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .flip-card-front,
// // // // // // // // // // // // //         .flip-card-back {
// // // // // // // // // // // // //           position: absolute;
// // // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // // //           height: 100%;
// // // // // // // // // // // // //           -webkit-backface-visibility: hidden;
// // // // // // // // // // // // //           backface-visibility: hidden;
// // // // // // // // // // // // //           border-radius: 0.5rem;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         .flip-card-back {
// // // // // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         /* Ensure smooth animations */
// // // // // // // // // // // // //         .project-card-wrapper {
// // // // // // // // // // // // //           transform: translateZ(0);
// // // // // // // // // // // // //           will-change: opacity, transform;
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         /* Mobile responsiveness */
// // // // // // // // // // // // //         @media (max-width: 640px) {
// // // // // // // // // // // // //           .flip-card {
// // // // // // // // // // // // //             min-height: 650px;
// // // // // // // // // // // // //           }
          
// // // // // // // // // // // // //           .flip-card-inner {
// // // // // // // // // // // // //             min-height: 650px;
// // // // // // // // // // // // //           }
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // // // // // // // // //           .flip-card {
// // // // // // // // // // // // //             min-height: 580px;
// // // // // // // // // // // // //           }
          
// // // // // // // // // // // // //           .flip-card-inner {
// // // // // // // // // // // // //             min-height: 580px;
// // // // // // // // // // // // //           }
// // // // // // // // // // // // //         }

// // // // // // // // // // // // //         @media (min-width: 1024px) {
// // // // // // // // // // // // //           .flip-card {
// // // // // // // // // // // // //             min-height: 600px;
// // // // // // // // // // // // //           }
          
// // // // // // // // // // // // //           .flip-card-inner {
// // // // // // // // // // // // //             min-height: 600px;
// // // // // // // // // // // // //           }
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       `}</style>
// // // // // // // // // // // // //     </section>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Projects;
// // // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // // // const Projects = () => {
// // // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // // // // //   const projectRefs = useRef([]);

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
// // // // // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // // // // // // // //       backContent: {
// // // // // // // // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // // // // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // // // // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // // // // // // // //       }
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
// // // // // // // // // // // //       type: "Analytics & IoT",
// // // // // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // // // // // // // //       backContent: {
// // // // // // // // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // // // // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // // // // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // // // // // // // //       }
// // // // // // // // // // // //     }
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // // //       (entries) => {
// // // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // // //           const index = projectRefs.current.indexOf(entry.target);
// // // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // // //             // Element is visible
// // // // // // // // // // // //             if (entry.target && index !== -1) {
// // // // // // // // // // // //               setTimeout(() => {
// // // // // // // // // // // //                 entry.target.style.opacity = "1";
// // // // // // // // // // // //                 entry.target.style.transform = "translateY(0)";
// // // // // // // // // // // //               }, index * 200);
// // // // // // // // // // // //             }
// // // // // // // // // // // //           } else {
// // // // // // // // // // // //             // Element is not visible - reset animation
// // // // // // // // // // // //             if (entry.target) {
// // // // // // // // // // // //               entry.target.style.opacity = "0";
// // // // // // // // // // // //               entry.target.style.transform = "translateY(32px)";
// // // // // // // // // // // //             }
// // // // // // // // // // // //           }
// // // // // // // // // // // //         });
// // // // // // // // // // // //       },
// // // // // // // // // // // //       { 
// // // // // // // // // // // //         threshold: 0.2,
// // // // // // // // // // // //         rootMargin: "0px"
// // // // // // // // // // // //       }
// // // // // // // // // // // //     );

// // // // // // // // // // // //     projectRefs.current.forEach((projectRef) => {
// // // // // // // // // // // //       if (projectRef) {
// // // // // // // // // // // //         observer.observe(projectRef);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     });

// // // // // // // // // // // //     return () => {
// // // // // // // // // // // //       projectRefs.current.forEach((projectRef) => {
// // // // // // // // // // // //         if (projectRef) {
// // // // // // // // // // // //           observer.unobserve(projectRef);
// // // // // // // // // // // //         }
// // // // // // // // // // // //       });
// // // // // // // // // // // //     };
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const headerObserver = new IntersectionObserver(
// // // // // // // // // // // //       (entries) => {
// // // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // // //             setIsVisible(true);
// // // // // // // // // // // //           }
// // // // // // // // // // // //         });
// // // // // // // // // // // //       },
// // // // // // // // // // // //       { 
// // // // // // // // // // // //         threshold: 0.1,
// // // // // // // // // // // //         rootMargin: "50px"
// // // // // // // // // // // //       }
// // // // // // // // // // // //     );

// // // // // // // // // // // //     if (sectionRef.current) {
// // // // // // // // // // // //       headerObserver.observe(sectionRef.current);
// // // // // // // // // // // //     }

// // // // // // // // // // // //     return () => {
// // // // // // // // // // // //       if (sectionRef.current) {
// // // // // // // // // // // //         headerObserver.unobserve(sectionRef.current);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleCardHover = (index, isHovering) => {
// // // // // // // // // // // //     setFlippedCards(prev => ({
// // // // // // // // // // // //       ...prev,
// // // // // // // // // // // //       [index]: isHovering
// // // // // // // // // // // //     }));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const addToProjectRefs = (el, index) => {
// // // // // // // // // // // //     if (el && !projectRefs.current[index]) {
// // // // // // // // // // // //       projectRefs.current[index] = el;
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <section 
// // // // // // // // // // // //       id="projects" 
// // // // // // // // // // // //       ref={sectionRef}
// // // // // // // // // // // //       className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // // // // // // // //     >
// // // // // // // // // // // //       <div className="container mx-auto max-w-7xl">
// // // // // // // // // // // //         {/* Header Section */}
// // // // // // // // // // // //         <div 
// // // // // // // // // // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // // // // // // // // // // //             isVisible 
// // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // //           }`}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // // // // // // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // // // // // // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // // // // // // // // //             💡 Hover on cards to flip and see detailed insights
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Projects Grid */}
// // // // // // // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full mx-auto">
// // // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // // //             <div
// // // // // // // // // // // //               key={project.title}
// // // // // // // // // // // //               ref={(el) => addToProjectRefs(el, index)}
// // // // // // // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {/* Flip Card Container */}
// // // // // // // // // // // //               <div 
// // // // // // // // // // // //                 className="flip-card w-full h-full"
// // // // // // // // // // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // // // // // // // // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // // // // // // //                   {/* Front Side */}
// // // // // // // // // // // //                   <div className="flip-card-front">
// // // // // // // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // // // // // // // // // //                       <CardHeader className="pb-4">
// // // // // // // // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4">
// // // // // // // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // // // // // // // //                             {project.type}
// // // // // // // // // // // //                           </Badge>
// // // // // // // // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // // // // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // // // // // // // //                             {project.period}
// // // // // // // // // // // //                           </div>
// // // // // // // // // // // //                         </div>
// // // // // // // // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2">
// // // // // // // // // // // //                           {project.title}
// // // // // // // // // // // //                         </CardTitle>
// // // // // // // // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed">
// // // // // // // // // // // //                           {project.description}
// // // // // // // // // // // //                         </CardDescription>
// // // // // // // // // // // //                       </CardHeader>

// // // // // // // // // // // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6 flex-1 flex flex-col">
// // // // // // // // // // // //                         {/* Key Features */}
// // // // // // // // // // // //                         <div className="flex-1">
// // // // // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // // // // // // // // //                           <ul className="space-y-2">
// // // // // // // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // // // // // // //                               <li key={featureIndex} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// // // // // // // // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // // // // // // // //                                 {feature}
// // // // // // // // // // // //                               </li>
// // // // // // // // // // // //                             ))}
// // // // // // // // // // // //                           </ul>
// // // // // // // // // // // //                         </div>

// // // // // // // // // // // //                         {/* Technologies */}
// // // // // // // // // // // //                         <div>
// // // // // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Technologies Used</h4>
// // // // // // // // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // // // // // // // //                             {project.technologies.map((tech) => {
// // // // // // // // // // // //                               const getIcon = (techName) => {
// // // // // // // // // // // //                                 switch (techName.toLowerCase()) {
// // // // // // // // // // // //                                   case "iot": return "🌐";
// // // // // // // // // // // //                                   case "web dashboard": return "📊";
// // // // // // // // // // // //                                   case "real-time monitoring": return "📡";
// // // // // // // // // // // //                                   case "automation": return "⚡";
// // // // // // // // // // // //                                   case "robotics": return "🤖";
// // // // // // // // // // // //                                   case "iot sensors": return "📱";
// // // // // // // // // // // //                                   case "embedded systems": return "🔧";
// // // // // // // // // // // //                                   case "remote control": return "📡";
// // // // // // // // // // // //                                   default: return "💻";
// // // // // // // // // // // //                                 }
// // // // // // // // // // // //                               };

// // // // // // // // // // // //                               return (
// // // // // // // // // // // //                                 <Badge
// // // // // // // // // // // //                                   key={tech}
// // // // // // // // // // // //                                   variant="secondary"
// // // // // // // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs"
// // // // // // // // // // // //                                 >
// // // // // // // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // // //                                   {tech}
// // // // // // // // // // // //                                 </Badge>
// // // // // // // // // // // //                               );
// // // // // // // // // // // //                             })}
// // // // // // // // // // // //                           </div>
// // // // // // // // // // // //                         </div>

// // // // // // // // // // // //                         {/* Action Buttons */}
// // // // // // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
// // // // // // // // // // // //                           <Button
// // // // // // // // // // // //                             variant="default"
// // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-8 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
// // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // // // //                             }}
// // // // // // // // // // // //                           >
// // // // // // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // // // // // //                             View Details
// // // // // // // // // // // //                           </Button>
// // // // // // // // // // // //                           <Button
// // // // // // // // // // // //                             variant="outline"
// // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8 sm:h-9"
// // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // //                               const url =
// // // // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // // // //                             }}
// // // // // // // // // // // //                           >
// // // // // // // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // // // // // // //                             Code
// // // // // // // // // // // //                           </Button>
// // // // // // // // // // // //                         </div>
// // // // // // // // // // // //                       </CardContent>
// // // // // // // // // // // //                     </Card>
// // // // // // // // // // // //                   </div>

// // // // // // // // // // // //                   {/* Back Side */}
// // // // // // // // // // // //                   <div className="flip-card-back">
// // // // // // // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-5 sm:p-6 flex flex-col">
// // // // // // // // // // // //                       <div className="h-full flex flex-col">
// // // // // // // // // // // //                         {/* Header */}
// // // // // // // // // // // //                         <div className="text-center mb-5 sm:mb-6">
// // // // // // // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm">
// // // // // // // // // // // //                             Project Insights
// // // // // // // // // // // //                           </Badge>
// // // // // // // // // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // // // // // // // // // //                             {project.title}
// // // // // // // // // // // //                           </h3>
// // // // // // // // // // // //                         </div>

// // // // // // // // // // // //                         {/* Content */}
// // // // // // // // // // // //                         <div className="space-y-4 sm:space-y-4 flex-1">
// // // // // // // // // // // //                           {/* Challenges */}
// // // // // // // // // // // //                           <div>
// // // // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // // // // // // // //                               <span className="text-base">🚧</span>
// // // // // // // // // // // //                               Key Challenges
// // // // // // // // // // // //                             </h4>
// // // // // // // // // // // //                             <p className="text-foreground text-sm sm:text-base leading-relaxed bg-white/80 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // // // // // // // //                               {project.backContent.challenges}
// // // // // // // // // // // //                             </p>
// // // // // // // // // // // //                           </div>

// // // // // // // // // // // //                           {/* Learnings */}
// // // // // // // // // // // //                           <div>
// // // // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // // // // // // // //                               <span className="text-base">📚</span>
// // // // // // // // // // // //                               Key Learnings
// // // // // // // // // // // //                             </h4>
// // // // // // // // // // // //                             <p className="text-foreground text-sm sm:text-base leading-relaxed bg-white/80 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // // // // // // // //                               {project.backContent.learnings}
// // // // // // // // // // // //                             </p>
// // // // // // // // // // // //                           </div>

// // // // // // // // // // // //                           {/* Impact */}
// // // // // // // // // // // //                           <div>
// // // // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // // // // // // // //                               <span className="text-base">📈</span>
// // // // // // // // // // // //                               Project Impact
// // // // // // // // // // // //                             </h4>
// // // // // // // // // // // //                             <p className="text-foreground text-sm sm:text-base leading-relaxed bg-white/80 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // // // // // // // //                               {project.backContent.impact}
// // // // // // // // // // // //                             </p>
// // // // // // // // // // // //                           </div>
// // // // // // // // // // // //                         </div>

// // // // // // // // // // // //                         {/* Actions */}
// // // // // // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2.5 pt-4 sm:pt-4 mt-auto">
// // // // // // // // // // // //                           <Button
// // // // // // // // // // // //                             variant="default"
// // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9"
// // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // // // //                             }}
// // // // // // // // // // // //                           >
// // // // // // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // // // // // //                             PDF Details
// // // // // // // // // // // //                           </Button>
// // // // // // // // // // // //                           <Button
// // // // // // // // // // // //                             variant="outline"
// // // // // // // // // // // //                             size="sm"
// // // // // // // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm"
// // // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // // //                               const url =
// // // // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // // // //                             }}
// // // // // // // // // // // //                           >
// // // // // // // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // // // // // // //                             Source Code
// // // // // // // // // // // //                           </Button>
// // // // // // // // // // // //                         </div>
// // // // // // // // // // // //                       </div>
// // // // // // // // // // // //                     </Card>
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // // //         <div 
// // // // // // // // // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // // // // // // // // // // //             isVisible 
// // // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // // //           }`}
// // // // // // // // // // // //           style={{
// // // // // // // // // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // // // // // // // // //           }}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //           <Button
// // // // // // // // // // // //             variant="default"
// // // // // // // // // // // //             size="lg"
// // // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // // // // // // // // // // //             onClick={() =>
// // // // // // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // // // // // //             }
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Let's Work Together
// // // // // // // // // // // //           </Button>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // // //         .flip-card {
// // // // // // // // // // // //           perspective: 1000px;
// // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // //         }

// // // // // // // // // // // //         .flip-card-inner {
// // // // // // // // // // // //           position: relative;
// // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // //           height: 100%;
// // // // // // // // // // // //           transition: transform 0.6s;
// // // // // // // // // // // //           transform-style: preserve-3d;
// // // // // // // // // // // //         }

// // // // // // // // // // // //         .flip-card-flipped {
// // // // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // // // //         }

// // // // // // // // // // // //         .flip-card-front,
// // // // // // // // // // // //         .flip-card-back {
// // // // // // // // // // // //           position: absolute;
// // // // // // // // // // // //           width: 100%;
// // // // // // // // // // // //           height: 100%;
// // // // // // // // // // // //           -webkit-backface-visibility: hidden;
// // // // // // // // // // // //           backface-visibility: hidden;
// // // // // // // // // // // //           border-radius: 0.5rem;
// // // // // // // // // // // //         }

// // // // // // // // // // // //         .flip-card-back {
// // // // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // // // //         }

// // // // // // // // // // // //         /* Ensure smooth animations */
// // // // // // // // // // // //         .project-card-wrapper {
// // // // // // // // // // // //           transform: translateZ(0);
// // // // // // // // // // // //           will-change: opacity, transform;
// // // // // // // // // // // //         }

// // // // // // // // // // // //         /* Mobile responsiveness */
// // // // // // // // // // // //         @media (max-width: 640px) {
// // // // // // // // // // // //           .flip-card {
// // // // // // // // // // // //             min-height: 750px;
// // // // // // // // // // // //           }
          
// // // // // // // // // // // //           .flip-card-inner {
// // // // // // // // // // // //             min-height: 750px;
// // // // // // // // // // // //           }
// // // // // // // // // // // //         }

// // // // // // // // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // // // // // // // //           .flip-card {
// // // // // // // // // // // //             min-height: 580px;
// // // // // // // // // // // //           }
          
// // // // // // // // // // // //           .flip-card-inner {
// // // // // // // // // // // //             min-height: 580px;
// // // // // // // // // // // //           }
// // // // // // // // // // // //         }

// // // // // // // // // // // //         @media (min-width: 1024px) {
// // // // // // // // // // // //           .flip-card {
// // // // // // // // // // // //             min-height: 600px;
// // // // // // // // // // // //           }
          
// // // // // // // // // // // //           .flip-card-inner {
// // // // // // // // // // // //             min-height: 600px;
// // // // // // // // // // // //           }
// // // // // // // // // // // //         }
// // // // // // // // // // // //       `}</style>
// // // // // // // // // // // //     </section>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Projects;
// // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // // const Projects = () => {
// // // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // // // // // // //   const sectionRef = useRef(null);
// // // // // // // // // // //   const projectRefs = useRef([]);

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
// // // // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // // // // // // //       backContent: {
// // // // // // // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // // // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // // // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // // // // // // //       }
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
// // // // // // // // // // //       type: "Analytics & IoT",
// // // // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // // // // // // //       backContent: {
// // // // // // // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // // // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // // // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // // // // // // //       }
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // // //       (entries) => {
// // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // //           const index = projectRefs.current.indexOf(entry.target);
// // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // //             // Element is visible
// // // // // // // // // // //             if (entry.target && index !== -1) {
// // // // // // // // // // //               setTimeout(() => {
// // // // // // // // // // //                 entry.target.style.opacity = "1";
// // // // // // // // // // //                 entry.target.style.transform = "translateY(0)";
// // // // // // // // // // //               }, index * 200);
// // // // // // // // // // //             }
// // // // // // // // // // //           } else {
// // // // // // // // // // //             // Element is not visible - reset animation
// // // // // // // // // // //             if (entry.target) {
// // // // // // // // // // //               entry.target.style.opacity = "0";
// // // // // // // // // // //               entry.target.style.transform = "translateY(32px)";
// // // // // // // // // // //             }
// // // // // // // // // // //           }
// // // // // // // // // // //         });
// // // // // // // // // // //       },
// // // // // // // // // // //       { 
// // // // // // // // // // //         threshold: 0.2,
// // // // // // // // // // //         rootMargin: "0px"
// // // // // // // // // // //       }
// // // // // // // // // // //     );

// // // // // // // // // // //     projectRefs.current.forEach((projectRef) => {
// // // // // // // // // // //       if (projectRef) {
// // // // // // // // // // //         observer.observe(projectRef);
// // // // // // // // // // //       }
// // // // // // // // // // //     });

// // // // // // // // // // //     return () => {
// // // // // // // // // // //       projectRefs.current.forEach((projectRef) => {
// // // // // // // // // // //         if (projectRef) {
// // // // // // // // // // //           observer.unobserve(projectRef);
// // // // // // // // // // //         }
// // // // // // // // // // //       });
// // // // // // // // // // //     };
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const headerObserver = new IntersectionObserver(
// // // // // // // // // // //       (entries) => {
// // // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // // //             setIsVisible(true);
// // // // // // // // // // //           }
// // // // // // // // // // //         });
// // // // // // // // // // //       },
// // // // // // // // // // //       { 
// // // // // // // // // // //         threshold: 0.1,
// // // // // // // // // // //         rootMargin: "50px"
// // // // // // // // // // //       }
// // // // // // // // // // //     );

// // // // // // // // // // //     if (sectionRef.current) {
// // // // // // // // // // //       headerObserver.observe(sectionRef.current);
// // // // // // // // // // //     }

// // // // // // // // // // //     return () => {
// // // // // // // // // // //       if (sectionRef.current) {
// // // // // // // // // // //         headerObserver.unobserve(sectionRef.current);
// // // // // // // // // // //       }
// // // // // // // // // // //     };
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // // // // //     } else {
// // // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleCardHover = (index, isHovering) => {
// // // // // // // // // // //     // Only trigger on hover for desktop
// // // // // // // // // // //     if (window.innerWidth >= 1024) {
// // // // // // // // // // //       setFlippedCards(prev => ({
// // // // // // // // // // //         ...prev,
// // // // // // // // // // //         [index]: isHovering
// // // // // // // // // // //       }));
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleCardClick = (index) => {
// // // // // // // // // // //     // Toggle flip on click for mobile/tablet
// // // // // // // // // // //     setFlippedCards(prev => ({
// // // // // // // // // // //       ...prev,
// // // // // // // // // // //       [index]: !prev[index]
// // // // // // // // // // //     }));
// // // // // // // // // // //   };

// // // // // // // // // // //   const addToProjectRefs = (el, index) => {
// // // // // // // // // // //     if (el && !projectRefs.current[index]) {
// // // // // // // // // // //       projectRefs.current[index] = el;
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <section 
// // // // // // // // // // //       id="projects" 
// // // // // // // // // // //       ref={sectionRef}
// // // // // // // // // // //       className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // // // // // // //     >
// // // // // // // // // // //       <div className="container mx-auto max-w-7xl">
// // // // // // // // // // //         {/* Header Section */}
// // // // // // // // // // //         <div 
// // // // // // // // // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // // // // // // // // // //             isVisible 
// // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // //           }`}
// // // // // // // // // // //         >
// // // // // // // // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // // // // // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // // // // // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // // //           </p>
// // // // // // // // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // // // // // // // //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Projects Grid */}
// // // // // // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full mx-auto">
// // // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // // //             <div
// // // // // // // // // // //               key={project.title}
// // // // // // // // // // //               ref={(el) => addToProjectRefs(el, index)}
// // // // // // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full"
// // // // // // // // // // //             >
// // // // // // // // // // //               {/* Flip Card Container */}
// // // // // // // // // // //               <div 
// // // // // // // // // // //                 className="flip-card w-full h-full"
// // // // // // // // // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // // // // // // // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // // // // // // // // //                 onClick={() => handleCardClick(index)}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // // // // // //                   {/* Front Side */}
// // // // // // // // // // //                   <div className="flip-card-front">
// // // // // // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // // // // // // // // //                       <CardHeader className="pb-4">
// // // // // // // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4">
// // // // // // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // // // // // // //                             {project.type}
// // // // // // // // // // //                           </Badge>
// // // // // // // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // // // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // // // // // // //                             {project.period}
// // // // // // // // // // //                           </div>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2">
// // // // // // // // // // //                           {project.title}
// // // // // // // // // // //                         </CardTitle>
// // // // // // // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed">
// // // // // // // // // // //                           {project.description}
// // // // // // // // // // //                         </CardDescription>
// // // // // // // // // // //                       </CardHeader>

// // // // // // // // // // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6 flex-1 flex flex-col">
// // // // // // // // // // //                         {/* Key Features */}
// // // // // // // // // // //                         <div className="flex-1">
// // // // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // // // // // // // //                           <ul className="space-y-2">
// // // // // // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // // // // // //                               <li key={featureIndex} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// // // // // // // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // // // // // // //                                 {feature}
// // // // // // // // // // //                               </li>
// // // // // // // // // // //                             ))}
// // // // // // // // // // //                           </ul>
// // // // // // // // // // //                         </div>

// // // // // // // // // // //                         {/* Technologies */}
// // // // // // // // // // //                         <div>
// // // // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Technologies Used</h4>
// // // // // // // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // // // // // // //                             {project.technologies.map((tech) => {
// // // // // // // // // // //                               const getIcon = (techName) => {
// // // // // // // // // // //                                 switch (techName.toLowerCase()) {
// // // // // // // // // // //                                   case "iot": return "🌐";
// // // // // // // // // // //                                   case "web dashboard": return "📊";
// // // // // // // // // // //                                   case "real-time monitoring": return "📡";
// // // // // // // // // // //                                   case "automation": return "⚡";
// // // // // // // // // // //                                   case "robotics": return "🤖";
// // // // // // // // // // //                                   case "iot sensors": return "📱";
// // // // // // // // // // //                                   case "embedded systems": return "🔧";
// // // // // // // // // // //                                   case "remote control": return "📡";
// // // // // // // // // // //                                   default: return "💻";
// // // // // // // // // // //                                 }
// // // // // // // // // // //                               };

// // // // // // // // // // //                               return (
// // // // // // // // // // //                                 <Badge
// // // // // // // // // // //                                   key={tech}
// // // // // // // // // // //                                   variant="secondary"
// // // // // // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs"
// // // // // // // // // // //                                 >
// // // // // // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // // //                                   {tech}
// // // // // // // // // // //                                 </Badge>
// // // // // // // // // // //                               );
// // // // // // // // // // //                             })}
// // // // // // // // // // //                           </div>
// // // // // // // // // // //                         </div>

// // // // // // // // // // //                         {/* Action Buttons */}
// // // // // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
// // // // // // // // // // //                           <Button
// // // // // // // // // // //                             variant="default"
// // // // // // // // // // //                             size="sm"
// // // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-8 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
// // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // // //                             }}
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // // // // //                             View Details
// // // // // // // // // // //                           </Button>
// // // // // // // // // // //                           <Button
// // // // // // // // // // //                             variant="outline"
// // // // // // // // // // //                             size="sm"
// // // // // // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-8 sm:h-9"
// // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // //                               const url =
// // // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // // //                             }}
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // // // // // //                             Code
// // // // // // // // // // //                           </Button>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </CardContent>
// // // // // // // // // // //                     </Card>
// // // // // // // // // // //                   </div>

// // // // // // // // // // //                   {/* Back Side */}
// // // // // // // // // // //                   <div className="flip-card-back">
// // // // // // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-5 sm:p-6 flex flex-col">
// // // // // // // // // // //                       <div className="h-full flex flex-col">
// // // // // // // // // // //                         {/* Header */}
// // // // // // // // // // //                         <div className="text-center mb-5 sm:mb-6">
// // // // // // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm">
// // // // // // // // // // //                             Project Insights
// // // // // // // // // // //                           </Badge>
// // // // // // // // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // // // // // // // // //                             {project.title}
// // // // // // // // // // //                           </h3>
// // // // // // // // // // //                         </div>

// // // // // // // // // // //                         {/* Content */}
// // // // // // // // // // //                         <div className="space-y-4 sm:space-y-4 flex-1">
// // // // // // // // // // //                           {/* Challenges */}
// // // // // // // // // // //                           <div>
// // // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // // // // // // //                               <span className="text-base">🚧</span>
// // // // // // // // // // //                               Key Challenges
// // // // // // // // // // //                             </h4>
// // // // // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // // // // // // //                               {project.backContent.challenges}
// // // // // // // // // // //                             </p>
// // // // // // // // // // //                           </div>

// // // // // // // // // // //                           {/* Learnings */}
// // // // // // // // // // //                           <div>
// // // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // // // // // // //                               <span className="text-base">📚</span>
// // // // // // // // // // //                               Key Learnings
// // // // // // // // // // //                             </h4>
// // // // // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // // // // // // //                               {project.backContent.learnings}
// // // // // // // // // // //                             </p>
// // // // // // // // // // //                           </div>

// // // // // // // // // // //                           {/* Impact */}
// // // // // // // // // // //                           <div>
// // // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // // // // // // //                               <span className="text-base">📈</span>
// // // // // // // // // // //                               Project Impact
// // // // // // // // // // //                             </h4>
// // // // // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // // // // // // //                               {project.backContent.impact}
// // // // // // // // // // //                             </p>
// // // // // // // // // // //                           </div>
// // // // // // // // // // //                         </div>

// // // // // // // // // // //                         {/* Actions */}
// // // // // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2.5 pt-4 sm:pt-4 mt-auto">
// // // // // // // // // // //                           <Button
// // // // // // // // // // //                             variant="default"
// // // // // // // // // // //                             size="sm"
// // // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9"
// // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // // //                             }}
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // // // // //                             PDF Details
// // // // // // // // // // //                           </Button>
// // // // // // // // // // //                           <Button
// // // // // // // // // // //                             variant="outline"
// // // // // // // // // // //                             size="sm"
// // // // // // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm"
// // // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // // //                               const url =
// // // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // // //                             }}
// // // // // // // // // // //                           >
// // // // // // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // // // // // //                             Source Code
// // // // // // // // // // //                           </Button>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </Card>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // // //         <div 
// // // // // // // // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // // // // // // // // // //             isVisible 
// // // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // // //           }`}
// // // // // // // // // // //           style={{
// // // // // // // // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // // // // // // // //           }}
// // // // // // // // // // //         >
// // // // // // // // // // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // // //           </p>
// // // // // // // // // // //           <Button
// // // // // // // // // // //             variant="default"
// // // // // // // // // // //             size="lg"
// // // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // // // // // // // // // //             onClick={() =>
// // // // // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // // // // //             }
// // // // // // // // // // //           >
// // // // // // // // // // //             Let's Work Together
// // // // // // // // // // //           </Button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // //         .flip-card {
// // // // // // // // // // //           perspective: 1000px;
// // // // // // // // // // //           width: 100%;
// // // // // // // // // // //           cursor: pointer;
// // // // // // // // // // //         }

// // // // // // // // // // //         .flip-card-inner {
// // // // // // // // // // //           position: relative;
// // // // // // // // // // //           width: 100%;
// // // // // // // // // // //           height: 100%;
// // // // // // // // // // //           transition: transform 0.6s;
// // // // // // // // // // //           transform-style: preserve-3d;
// // // // // // // // // // //         }

// // // // // // // // // // //         .flip-card-flipped {
// // // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // // //         }

// // // // // // // // // // //         .flip-card-front,
// // // // // // // // // // //         .flip-card-back {
// // // // // // // // // // //           position: absolute;
// // // // // // // // // // //           width: 100%;
// // // // // // // // // // //           height: 100%;
// // // // // // // // // // //           -webkit-backface-visibility: hidden;
// // // // // // // // // // //           backface-visibility: hidden;
// // // // // // // // // // //           border-radius: 0.5rem;
// // // // // // // // // // //         }

// // // // // // // // // // //         .flip-card-back {
// // // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // // //         }

// // // // // // // // // // //         /* Ensure smooth animations */
// // // // // // // // // // //         .project-card-wrapper {
// // // // // // // // // // //           transform: translateZ(0);
// // // // // // // // // // //           will-change: opacity, transform;
// // // // // // // // // // //         }

// // // // // // // // // // //         /* Mobile responsiveness - INCREASED SIZES */
// // // // // // // // // // //         @media (max-width: 640px) {
// // // // // // // // // // //           .flip-card {
// // // // // // // // // // //             min-height: 850px;
// // // // // // // // // // //           }
          
// // // // // // // // // // //           .flip-card-inner {
// // // // // // // // // // //             min-height: 850px;
// // // // // // // // // // //           }
// // // // // // // // // // //         }

// // // // // // // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // // // // // // //           .flip-card {
// // // // // // // // // // //             min-height: 650px;
// // // // // // // // // // //           }
          
// // // // // // // // // // //           .flip-card-inner {
// // // // // // // // // // //             min-height: 650px;
// // // // // // // // // // //           }
// // // // // // // // // // //         }

// // // // // // // // // // //         @media (min-width: 1024px) {
// // // // // // // // // // //           .flip-card {
// // // // // // // // // // //             min-height: 600px;
// // // // // // // // // // //           }
          
// // // // // // // // // // //           .flip-card-inner {
// // // // // // // // // // //             min-height: 600px;
// // // // // // // // // // //           }
// // // // // // // // // // //         }
// // // // // // // // // // //       `}</style>
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Projects;
// // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // import { Calendar, Github, FileText } from "lucide-react";
// // // // // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // // // // const Projects = () => {
// // // // // // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // // // // // //   const [flippedCards, setFlippedCards] = useState({});
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
// // // // // // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // // // // // //       backContent: {
// // // // // // // // // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // // // // // // // // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // // // // // // // // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // // // // // // // // //       }
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
// // // // // // // // // //       type: "Analytics & IoT",
// // // // // // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // // // // // //       backContent: {
// // // // // // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // // // // // //       }
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const observer = new IntersectionObserver(
// // // // // // // // // //       (entries) => {
// // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // //           const index = projectRefs.current.indexOf(entry.target);
// // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // //             // Element is visible
// // // // // // // // // //             if (entry.target && index !== -1) {
// // // // // // // // // //               setTimeout(() => {
// // // // // // // // // //                 entry.target.style.opacity = "1";
// // // // // // // // // //                 entry.target.style.transform = "translateY(0)";
// // // // // // // // // //               }, index * 200);
// // // // // // // // // //             }
// // // // // // // // // //           } else {
// // // // // // // // // //             // Element is not visible - reset animation
// // // // // // // // // //             if (entry.target) {
// // // // // // // // // //               entry.target.style.opacity = "0";
// // // // // // // // // //               entry.target.style.transform = "translateY(32px)";
// // // // // // // // // //             }
// // // // // // // // // //           }
// // // // // // // // // //         });
// // // // // // // // // //       },
// // // // // // // // // //       { 
// // // // // // // // // //         threshold: 0.2,
// // // // // // // // // //         rootMargin: "0px"
// // // // // // // // // //       }
// // // // // // // // // //     );

// // // // // // // // // //     projectRefs.current.forEach((projectRef) => {
// // // // // // // // // //       if (projectRef) {
// // // // // // // // // //         observer.observe(projectRef);
// // // // // // // // // //       }
// // // // // // // // // //     });

// // // // // // // // // //     return () => {
// // // // // // // // // //       projectRefs.current.forEach((projectRef) => {
// // // // // // // // // //         if (projectRef) {
// // // // // // // // // //           observer.unobserve(projectRef);
// // // // // // // // // //         }
// // // // // // // // // //       });
// // // // // // // // // //     };
// // // // // // // // // //   }, []);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const headerObserver = new IntersectionObserver(
// // // // // // // // // //       (entries) => {
// // // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // // //             setIsVisible(true);
// // // // // // // // // //           }
// // // // // // // // // //         });
// // // // // // // // // //       },
// // // // // // // // // //       { 
// // // // // // // // // //         threshold: 0.1,
// // // // // // // // // //         rootMargin: "50px"
// // // // // // // // // //       }
// // // // // // // // // //     );

// // // // // // // // // //     if (sectionRef.current) {
// // // // // // // // // //       headerObserver.observe(sectionRef.current);
// // // // // // // // // //     }

// // // // // // // // // //     return () => {
// // // // // // // // // //       if (sectionRef.current) {
// // // // // // // // // //         headerObserver.unobserve(sectionRef.current);
// // // // // // // // // //       }
// // // // // // // // // //     };
// // // // // // // // // //   }, []);

// // // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // // // //     } else {
// // // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleCardHover = (index, isHovering) => {
// // // // // // // // // //     // Only trigger on hover for desktop
// // // // // // // // // //     if (window.innerWidth >= 1024) {
// // // // // // // // // //       setFlippedCards(prev => ({
// // // // // // // // // //         ...prev,
// // // // // // // // // //         [index]: isHovering
// // // // // // // // // //       }));
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleCardClick = (index) => {
// // // // // // // // // //     // Toggle flip on click for mobile/tablet
// // // // // // // // // //     setFlippedCards(prev => ({
// // // // // // // // // //       ...prev,
// // // // // // // // // //       [index]: !prev[index]
// // // // // // // // // //     }));
// // // // // // // // // //   };

// // // // // // // // // //   const addToProjectRefs = (el, index) => {
// // // // // // // // // //     if (el && !projectRefs.current[index]) {
// // // // // // // // // //       projectRefs.current[index] = el;
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <section 
// // // // // // // // // //       id="projects" 
// // // // // // // // // //       ref={sectionRef}
// // // // // // // // // //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // // // // // //     >
// // // // // // // // // //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
// // // // // // // // // //         {/* Header Section */}
// // // // // // // // // //         <div 
// // // // // // // // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // // // // // // // // //             isVisible 
// // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // //           }`}
// // // // // // // // // //         >
// // // // // // // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // // // // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // // // // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // // //           </p>
// // // // // // // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // // // // // // //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// // // // // // // // // //           </p>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Projects Grid */}
// // // // // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full mx-auto px-0">
// // // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={project.title}
// // // // // // // // // //               ref={(el) => addToProjectRefs(el, index)}
// // // // // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full px-3 sm:px-0"
// // // // // // // // // //             >
// // // // // // // // // //               {/* Flip Card Container */}
// // // // // // // // // //               <div 
// // // // // // // // // //                 className="flip-card w-full h-full"
// // // // // // // // // //                 onMouseEnter={() => handleCardHover(index, true)}
// // // // // // // // // //                 onMouseLeave={() => handleCardHover(index, false)}
// // // // // // // // // //                 onClick={() => handleCardClick(index)}
// // // // // // // // // //               >
// // // // // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // // // // //                   {/* Front Side */}
// // // // // // // // // //                   <div className="flip-card-front">
// // // // // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // // // // // // // //                       <CardHeader className="pb-4">
// // // // // // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4">
// // // // // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // // // // // //                             {project.type}
// // // // // // // // // //                           </Badge>
// // // // // // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // // // // // //                             {project.period}
// // // // // // // // // //                           </div>
// // // // // // // // // //                         </div>
// // // // // // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2">
// // // // // // // // // //                           {project.title}
// // // // // // // // // //                         </CardTitle>
// // // // // // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed">
// // // // // // // // // //                           {project.description}
// // // // // // // // // //                         </CardDescription>
// // // // // // // // // //                       </CardHeader>

// // // // // // // // // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6 flex-1 flex flex-col">
// // // // // // // // // //                         {/* Key Features */}
// // // // // // // // // //                         <div className="flex-1">
// // // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // // // // // // //                           <ul className="space-y-2">
// // // // // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // // // // //                               <li key={featureIndex} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// // // // // // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // // // // // //                                 {feature}
// // // // // // // // // //                               </li>
// // // // // // // // // //                             ))}
// // // // // // // // // //                           </ul>
// // // // // // // // // //                         </div>

// // // // // // // // // //                         {/* Technologies */}
// // // // // // // // // //                         <div>
// // // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Technologies Used</h4>
// // // // // // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // // // // // //                             {project.technologies.map((tech) => {
// // // // // // // // // //                               const getIcon = (techName) => {
// // // // // // // // // //                                 switch (techName.toLowerCase()) {
// // // // // // // // // //                                   case "iot": return "🌐";
// // // // // // // // // //                                   case "web dashboard": return "📊";
// // // // // // // // // //                                   case "real-time monitoring": return "📡";
// // // // // // // // // //                                   case "automation": return "⚡";
// // // // // // // // // //                                   case "robotics": return "🤖";
// // // // // // // // // //                                   case "iot sensors": return "📱";
// // // // // // // // // //                                   case "embedded systems": return "🔧";
// // // // // // // // // //                                   case "remote control": return "📡";
// // // // // // // // // //                                   default: return "💻";
// // // // // // // // // //                                 }
// // // // // // // // // //                               };

// // // // // // // // // //                               return (
// // // // // // // // // //                                 <Badge
// // // // // // // // // //                                   key={tech}
// // // // // // // // // //                                   variant="secondary"
// // // // // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs"
// // // // // // // // // //                                 >
// // // // // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // // //                                   {tech}
// // // // // // // // // //                                 </Badge>
// // // // // // // // // //                               );
// // // // // // // // // //                             })}
// // // // // // // // // //                           </div>
// // // // // // // // // //                         </div>

// // // // // // // // // //                         {/* Action Buttons */}
// // // // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4" onClick={(e) => e.stopPropagation()}>
// // // // // // // // // //                           <Button
// // // // // // // // // //                             variant="default"
// // // // // // // // // //                             size="sm"
// // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
// // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // //                             }}
// // // // // // // // // //                           >
// // // // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // // // //                             View Details
// // // // // // // // // //                           </Button>
// // // // // // // // // //                           <Button
// // // // // // // // // //                             variant="outline"
// // // // // // // // // //                             size="sm"
// // // // // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9"
// // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // //                               const url =
// // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // //                             }}
// // // // // // // // // //                           >
// // // // // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // // // // //                             Code
// // // // // // // // // //                           </Button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </CardContent>
// // // // // // // // // //                     </Card>
// // // // // // // // // //                   </div>

// // // // // // // // // //                   {/* Back Side */}
// // // // // // // // // //                   <div className="flip-card-back">
// // // // // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-5 sm:p-6 flex flex-col">
// // // // // // // // // //                       <div className="h-full flex flex-col">
// // // // // // // // // //                         {/* Header */}
// // // // // // // // // //                         <div className="text-center mb-5 sm:mb-6">
// // // // // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm">
// // // // // // // // // //                             Project Insights
// // // // // // // // // //                           </Badge>
// // // // // // // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // // // // // // // //                             {project.title}
// // // // // // // // // //                           </h3>
// // // // // // // // // //                         </div>

// // // // // // // // // //                         {/* Content */}
// // // // // // // // // //                         <div className="space-y-4 sm:space-y-4 flex-1">
// // // // // // // // // //                           {/* Challenges */}
// // // // // // // // // //                           <div>
// // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // // // // // //                               <span className="text-base">🚧</span>
// // // // // // // // // //                               Key Challenges
// // // // // // // // // //                             </h4>
// // // // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // // // // // //                               {project.backContent.challenges}
// // // // // // // // // //                             </p>
// // // // // // // // // //                           </div>

// // // // // // // // // //                           {/* Learnings */}
// // // // // // // // // //                           <div>
// // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // // // // // //                               <span className="text-base">📚</span>
// // // // // // // // // //                               Key Learnings
// // // // // // // // // //                             </h4>
// // // // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // // // // // //                               {project.backContent.learnings}
// // // // // // // // // //                             </p>
// // // // // // // // // //                           </div>

// // // // // // // // // //                           {/* Impact */}
// // // // // // // // // //                           <div>
// // // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // // // // // //                               <span className="text-base">📈</span>
// // // // // // // // // //                               Project Impact
// // // // // // // // // //                             </h4>
// // // // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm">
// // // // // // // // // //                               {project.backContent.impact}
// // // // // // // // // //                             </p>
// // // // // // // // // //                           </div>
// // // // // // // // // //                         </div>

// // // // // // // // // //                         {/* Actions */}
// // // // // // // // // //                         <div className="flex flex-col sm:flex-row gap-2.5 pt-4 sm:pt-4 mt-auto" onClick={(e) => e.stopPropagation()}>
// // // // // // // // // //                           <Button
// // // // // // // // // //                             variant="default"
// // // // // // // // // //                             size="sm"
// // // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9"
// // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // //                               handleViewDetails(project);
// // // // // // // // // //                             }}
// // // // // // // // // //                           >
// // // // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // // // //                             PDF Details
// // // // // // // // // //                           </Button>
// // // // // // // // // //                           <Button
// // // // // // // // // //                             variant="outline"
// // // // // // // // // //                             size="sm"
// // // // // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm"
// // // // // // // // // //                             onClick={(e) => {
// // // // // // // // // //                               e.stopPropagation();
// // // // // // // // // //                               const url =
// // // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // // //                             }}
// // // // // // // // // //                           >
// // // // // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // // // // //                             Source Code
// // // // // // // // // //                           </Button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </Card>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Call to Action */}
// // // // // // // // // //         <div 
// // // // // // // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // // // // // // // // //             isVisible 
// // // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // // //           }`}
// // // // // // // // // //           style={{
// // // // // // // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // // // // // // //           }}
// // // // // // // // // //         >
// // // // // // // // // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // // //           </p>
// // // // // // // // // //           <Button
// // // // // // // // // //             variant="default"
// // // // // // // // // //             size="lg"
// // // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // // // // // // // // //             onClick={() =>
// // // // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // // // //             }
// // // // // // // // // //           >
// // // // // // // // // //             Let's Work Together
// // // // // // // // // //           </Button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       <style jsx>{`
// // // // // // // // // //         .flip-card {
// // // // // // // // // //           perspective: 1000px;
// // // // // // // // // //           width: 100%;
// // // // // // // // // //           cursor: pointer;
// // // // // // // // // //         }

// // // // // // // // // //         .flip-card-inner {
// // // // // // // // // //           position: relative;
// // // // // // // // // //           width: 100%;
// // // // // // // // // //           height: 100%;
// // // // // // // // // //           transition: transform 0.6s;
// // // // // // // // // //           transform-style: preserve-3d;
// // // // // // // // // //         }

// // // // // // // // // //         .flip-card-flipped {
// // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // //         }

// // // // // // // // // //         .flip-card-front,
// // // // // // // // // //         .flip-card-back {
// // // // // // // // // //           position: absolute;
// // // // // // // // // //           width: 100%;
// // // // // // // // // //           height: 100%;
// // // // // // // // // //           -webkit-backface-visibility: hidden;
// // // // // // // // // //           backface-visibility: hidden;
// // // // // // // // // //           border-radius: 0.5rem;
// // // // // // // // // //         }

// // // // // // // // // //         .flip-card-back {
// // // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // // //         }

// // // // // // // // // //         /* Ensure smooth animations */
// // // // // // // // // //         .project-card-wrapper {
// // // // // // // // // //           transform: translateZ(0);
// // // // // // // // // //           will-change: opacity, transform;
// // // // // // // // // //         }

// // // // // // // // // //         /* Mobile responsiveness - INCREASED SIZES */
// // // // // // // // // //         @media (max-width: 640px) {
// // // // // // // // // //           .flip-card {
// // // // // // // // // //             min-height: 900px;
// // // // // // // // // //           }
          
// // // // // // // // // //           .flip-card-inner {
// // // // // // // // // //             min-height: 900px;
// // // // // // // // // //           }
// // // // // // // // // //         }

// // // // // // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // // // // // //           .flip-card {
// // // // // // // // // //             min-height: 650px;
// // // // // // // // // //           }
          
// // // // // // // // // //           .flip-card-inner {
// // // // // // // // // //             min-height: 650px;
// // // // // // // // // //           }
// // // // // // // // // //         }

// // // // // // // // // //         @media (min-width: 1024px) {
// // // // // // // // // //           .flip-card {
// // // // // // // // // //             min-height: 600px;
// // // // // // // // // //           }
          
// // // // // // // // // //           .flip-card-inner {
// // // // // // // // // //             min-height: 600px;
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //       `}</style>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Projects;
// // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { Calendar, Github, FileText } from "lucide-react";
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
// // // // // // // // //       type: "Analytics & IoT",
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
// // // // // // // // //           const index = projectRefs.current.indexOf(entry.target);
// // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // //             // Element is visible
// // // // // // // // //             if (entry.target && index !== -1) {
// // // // // // // // //               setTimeout(() => {
// // // // // // // // //                 (entry.target as HTMLElement).style.opacity = "1";
// // // // // // // // //                 (entry.target as HTMLElement).style.transform = "translateY(0)";
// // // // // // // // //               }, index * 200);
// // // // // // // // //             }
// // // // // // // // //           } else {
// // // // // // // // //             // Element is not visible - reset animation
// // // // // // // // //             if (entry.target) {
// // // // // // // // //               (entry.target as HTMLElement).style.opacity = "0";
// // // // // // // // //               (entry.target as HTMLElement).style.transform = "translateY(32px)";
// // // // // // // // //             }
// // // // // // // // //           }
// // // // // // // // //         });
// // // // // // // // //       },
// // // // // // // // //       { 
// // // // // // // // //         threshold: 0.2,
// // // // // // // // //         rootMargin: "0px"
// // // // // // // // //       }
// // // // // // // // //     );

// // // // // // // // //     projectRefs.current.forEach((projectRef) => {
// // // // // // // // //       if (projectRef) {
// // // // // // // // //         observer.observe(projectRef);
// // // // // // // // //       }
// // // // // // // // //     });

// // // // // // // // //     return () => {
// // // // // // // // //       projectRefs.current.forEach((projectRef) => {
// // // // // // // // //         if (projectRef) {
// // // // // // // // //           observer.unobserve(projectRef);
// // // // // // // // //         }
// // // // // // // // //       });
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const headerObserver = new IntersectionObserver(
// // // // // // // // //       (entries) => {
// // // // // // // // //         entries.forEach((entry) => {
// // // // // // // // //           if (entry.isIntersecting) {
// // // // // // // // //             setIsVisible(true);
// // // // // // // // //           }
// // // // // // // // //         });
// // // // // // // // //       },
// // // // // // // // //       { 
// // // // // // // // //         threshold: 0.1,
// // // // // // // // //         rootMargin: "50px"
// // // // // // // // //       }
// // // // // // // // //     );

// // // // // // // // //     if (sectionRef.current) {
// // // // // // // // //       headerObserver.observe(sectionRef.current);
// // // // // // // // //     }

// // // // // // // // //     return () => {
// // // // // // // // //       if (sectionRef.current) {
// // // // // // // // //         headerObserver.unobserve(sectionRef.current);
// // // // // // // // //       }
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   const handleViewDetails = (project) => {
// // // // // // // // //     if (project.pdfUrl) {
// // // // // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // // // // //     } else {
// // // // // // // // //       alert(`PDF for ${project.title} will be available soon!`);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleCardHover = (index, isHovering, e) => {
// // // // // // // // //     // Check if hovering over button area
// // // // // // // // //     const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
// // // // // // // // //     // Only trigger on hover for desktop and not on button areas
// // // // // // // // //     if (window.innerWidth >= 1024 && !isButtonArea) {
// // // // // // // // //       setFlippedCards(prev => ({
// // // // // // // // //         ...prev,
// // // // // // // // //         [index]: isHovering
// // // // // // // // //       }));
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleCardClick = (index, e) => {
// // // // // // // // //     // Don't toggle if clicking on buttons
// // // // // // // // //     if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
// // // // // // // // //       return;
// // // // // // // // //     }
    
// // // // // // // // //     // Toggle flip on click for mobile/tablet
// // // // // // // // //     setFlippedCards(prev => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [index]: !prev[index]
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   const addToProjectRefs = (el, index) => {
// // // // // // // // //     if (el && !projectRefs.current[index]) {
// // // // // // // // //       projectRefs.current[index] = el;
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <section 
// // // // // // // // //       id="projects" 
// // // // // // // // //       ref={sectionRef}
// // // // // // // // //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // // // // //     >
// // // // // // // // //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
// // // // // // // // //         {/* Header Section */}
// // // // // // // // //         <div 
// // // // // // // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
// // // // // // // // //             isVisible 
// // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // //           }`}
// // // // // // // // //         >
// // // // // // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // // // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // // // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // // // // //           </p>
// // // // // // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // // // // // //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// // // // // // // // //           </p>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Projects Grid */}
// // // // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0">
// // // // // // // // //           {projects.map((project, index) => (
// // // // // // // // //             <div
// // // // // // // // //               key={project.title}
// // // // // // // // //               ref={(el) => addToProjectRefs(el, index)}
// // // // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full px-3 sm:px-0"
// // // // // // // // //             >
// // // // // // // // //               {/* Flip Card Container */}
// // // // // // // // //               <div 
// // // // // // // // //                 className="flip-card w-full h-full"
// // // // // // // // //                 onMouseEnter={(e) => handleCardHover(index, true, e)}
// // // // // // // // //                 onMouseLeave={(e) => handleCardHover(index, false, e)}
// // // // // // // // //                 onClick={(e) => handleCardClick(index, e)}
// // // // // // // // //               >
// // // // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // // // //                   {/* Front Side */}
// // // // // // // // //                   <div className="flip-card-front">
// // // // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // // // // // // //                       <CardHeader className="pb-4 animate-fade-in">
// // // // // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-4 animate-slide-in-left">
// // // // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // // // // //                             {project.type}
// // // // // // // // //                           </Badge>
// // // // // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // // // // //                             {project.period}
// // // // // // // // //                           </div>
// // // // // // // // //                         </div>
// // // // // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// // // // // // // // //                           {project.title}
// // // // // // // // //                         </CardTitle>
// // // // // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
// // // // // // // // //                           {project.description}
// // // // // // // // //                         </CardDescription>
// // // // // // // // //                       </CardHeader>

// // // // // // // // //                       <CardContent className="space-y-4 sm:space-y-6 pb-6 flex-1 flex flex-col">
// // // // // // // // //                         {/* Key Features */}
// // // // // // // // //                         <div className="flex-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
// // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base animate-slide-in-right">Key Features & Achievements</h4>
// // // // // // // // //                           <ul className="space-y-2">
// // // // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // // // //                               <li 
// // // // // // // // //                                 key={featureIndex} 
// // // // // // // // //                                 className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start animate-slide-in-left"
// // // // // // // // //                                 style={{animationDelay: `${0.4 + featureIndex * 0.1}s`}}
// // // // // // // // //                               >
// // // // // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // // // // //                                 {feature}
// // // // // // // // //                               </li>
// // // // // // // // //                             ))}
// // // // // // // // //                           </ul>
// // // // // // // // //                         </div>

// // // // // // // // //                         {/* Technologies */}
// // // // // // // // //                         <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
// // // // // // // // //                           <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base animate-slide-in-right">Technologies Used</h4>
// // // // // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // // // // //                             {project.technologies.map((tech, techIndex) => {
// // // // // // // // //                               const getIcon = (techName) => {
// // // // // // // // //                                 switch (techName.toLowerCase()) {
// // // // // // // // //                                   case "iot": return "🌐";
// // // // // // // // //                                   case "web dashboard": return "📊";
// // // // // // // // //                                   case "real-time monitoring": return "📡";
// // // // // // // // //                                   case "automation": return "⚡";
// // // // // // // // //                                   case "robotics": return "🤖";
// // // // // // // // //                                   case "iot sensors": return "📱";
// // // // // // // // //                                   case "embedded systems": return "🔧";
// // // // // // // // //                                   case "remote control": return "📡";
// // // // // // // // //                                   default: return "💻";
// // // // // // // // //                                 }
// // // // // // // // //                               };

// // // // // // // // //                               return (
// // // // // // // // //                                 <Badge
// // // // // // // // //                                   key={tech}
// // // // // // // // //                                   variant="secondary"
// // // // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs animate-scale-in"
// // // // // // // // //                                   style={{animationDelay: `${0.8 + techIndex * 0.05}s`}}
// // // // // // // // //                                 >
// // // // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // // //                                   {tech}
// // // // // // // // //                                 </Badge>
// // // // // // // // //                               );
// // // // // // // // //                             })}
// // // // // // // // //                           </div>
// // // // // // // // //                         </div>

// // // // // // // // //                         {/* Action Buttons */}
// // // // // // // // //                         <div 
// // // // // // // // //                           className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4 no-flip-zone animate-fade-in" 
// // // // // // // // //                           style={{animationDelay: '1s'}}
// // // // // // // // //                           onMouseEnter={(e) => e.stopPropagation()}
// // // // // // // // //                         >
// // // // // // // // //                           <Button
// // // // // // // // //                             variant="default"
// // // // // // // // //                             size="sm"
// // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto animate-bounce-in"
// // // // // // // // //                             style={{animationDelay: '1.1s'}}
// // // // // // // // //                             onClick={(e) => {
// // // // // // // // //                               e.stopPropagation();
// // // // // // // // //                               handleViewDetails(project);
// // // // // // // // //                             }}
// // // // // // // // //                           >
// // // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // // //                             View Details
// // // // // // // // //                           </Button>
// // // // // // // // //                           <Button
// // // // // // // // //                             variant="outline"
// // // // // // // // //                             size="sm"
// // // // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9 animate-bounce-in"
// // // // // // // // //                             style={{animationDelay: '1.2s'}}
// // // // // // // // //                             onClick={(e) => {
// // // // // // // // //                               e.stopPropagation();
// // // // // // // // //                               const url =
// // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // //                             }}
// // // // // // // // //                           >
// // // // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // // // //                             Code
// // // // // // // // //                           </Button>
// // // // // // // // //                         </div>
// // // // // // // // //                       </CardContent>
// // // // // // // // //                     </Card>
// // // // // // // // //                   </div>

// // // // // // // // //                   {/* Back Side */}
// // // // // // // // //                   <div className="flip-card-back">
// // // // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-5 sm:p-6 flex flex-col">
// // // // // // // // //                       <div className="h-full flex flex-col">
// // // // // // // // //                         {/* Header */}
// // // // // // // // //                         <div className="text-center mb-5 sm:mb-6 animate-fade-in">
// // // // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm animate-scale-in">
// // // // // // // // //                             Project Insights
// // // // // // // // //                           </Badge>
// // // // // // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// // // // // // // // //                             {project.title}
// // // // // // // // //                           </h3>
// // // // // // // // //                         </div>

// // // // // // // // //                         {/* Content */}
// // // // // // // // //                         <div className="space-y-4 sm:space-y-4 flex-1">
// // // // // // // // //                           {/* Challenges */}
// // // // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
// // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // // // //                               <span className="text-base">🚧</span>
// // // // // // // // //                               Key Challenges
// // // // // // // // //                             </h4>
// // // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.3s'}}>
// // // // // // // // //                               {project.backContent.challenges}
// // // // // // // // //                             </p>
// // // // // // // // //                           </div>

// // // // // // // // //                           {/* Learnings */}
// // // // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
// // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // // // //                               <span className="text-base">📚</span>
// // // // // // // // //                               Key Learnings
// // // // // // // // //                             </h4>
// // // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.5s'}}>
// // // // // // // // //                               {project.backContent.learnings}
// // // // // // // // //                             </p>
// // // // // // // // //                           </div>

// // // // // // // // //                           {/* Impact */}
// // // // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
// // // // // // // // //                             <h4 className="font-semibold mb-2 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // // // //                               <span className="text-base">📈</span>
// // // // // // // // //                               Project Impact
// // // // // // // // //                             </h4>
// // // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-3 sm:p-4 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.7s'}}>
// // // // // // // // //                               {project.backContent.impact}
// // // // // // // // //                             </p>
// // // // // // // // //                           </div>
// // // // // // // // //                         </div>

// // // // // // // // //                         {/* Actions */}
// // // // // // // // //                         <div 
// // // // // // // // //                           className="flex flex-col sm:flex-row gap-2.5 pt-4 sm:pt-4 mt-auto no-flip-zone animate-fade-in" 
// // // // // // // // //                           style={{animationDelay: '0.8s'}}
// // // // // // // // //                           onMouseEnter={(e) => e.stopPropagation()}
// // // // // // // // //                         >
// // // // // // // // //                           <Button
// // // // // // // // //                             variant="default"
// // // // // // // // //                             size="sm"
// // // // // // // // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9 animate-bounce-in"
// // // // // // // // //                             style={{animationDelay: '0.9s'}}
// // // // // // // // //                             onClick={(e) => {
// // // // // // // // //                               e.stopPropagation();
// // // // // // // // //                               handleViewDetails(project);
// // // // // // // // //                             }}
// // // // // // // // //                           >
// // // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // // //                             PDF Details
// // // // // // // // //                           </Button>
// // // // // // // // //                           <Button
// // // // // // // // //                             variant="outline"
// // // // // // // // //                             size="sm"
// // // // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm animate-bounce-in"
// // // // // // // // //                             style={{animationDelay: '1s'}}
// // // // // // // // //                             onClick={(e) => {
// // // // // // // // //                               e.stopPropagation();
// // // // // // // // //                               const url =
// // // // // // // // //                                 project.title === "Smart Pet Feeder"
// // // // // // // // //                                   ? "https://github.com/Thomasjose-tech/Smart-Pet-Feeder"
// // // // // // // // //                                   : "https://github.com/Thomasjose-tech";
// // // // // // // // //                               window.open(url, "_blank");
// // // // // // // // //                             }}
// // // // // // // // //                           >
// // // // // // // // //                             <Github size={14} className="mr-1.5" />
// // // // // // // // //                             Source Code
// // // // // // // // //                           </Button>
// // // // // // // // //                         </div>
// // // // // // // // //                       </div>
// // // // // // // // //                     </Card>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Call to Action */}
// // // // // // // // //         <div 
// // // // // // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-700 ease-out ${
// // // // // // // // //             isVisible 
// // // // // // // // //               ? "opacity-100 translate-y-0" 
// // // // // // // // //               : "opacity-0 translate-y-8"
// // // // // // // // //           }`}
// // // // // // // // //           style={{
// // // // // // // // //             transitionDelay: isVisible ? "600ms" : "0ms"
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
// // // // // // // // //             Interested in seeing more of my work or collaborating on a project?
// // // // // // // // //           </p>
// // // // // // // // //           <Button
// // // // // // // // //             variant="default"
// // // // // // // // //             size="lg"
// // // // // // // // //             className="bg-primary hover:bg-primary/90 shadow-glow text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8"
// // // // // // // // //             onClick={() =>
// // // // // // // // //               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
// // // // // // // // //             }
// // // // // // // // //           >
// // // // // // // // //             Let's Work Together
// // // // // // // // //           </Button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       <style jsx>{`
// // // // // // // // //         /* Flip Card Styles */
// // // // // // // // //         .flip-card {
// // // // // // // // //           perspective: 1000px;
// // // // // // // // //           width: 100%;
// // // // // // // // //           cursor: pointer;
// // // // // // // // //         }

// // // // // // // // //         .flip-card-inner {
// // // // // // // // //           position: relative;
// // // // // // // // //           width: 100%;
// // // // // // // // //           height: 100%;
// // // // // // // // //           transition: transform 0.6s;
// // // // // // // // //           transform-style: preserve-3d;
// // // // // // // // //         }

// // // // // // // // //         .flip-card-flipped {
// // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // //         }

// // // // // // // // //         .flip-card-front,
// // // // // // // // //         .flip-card-back {
// // // // // // // // //           position: absolute;
// // // // // // // // //           width: 100%;
// // // // // // // // //           height: 100%;
// // // // // // // // //           -webkit-backface-visibility: hidden;
// // // // // // // // //           backface-visibility: hidden;
// // // // // // // // //           border-radius: 0.5rem;
// // // // // // // // //         }

// // // // // // // // //         .flip-card-back {
// // // // // // // // //           transform: rotateY(180deg);
// // // // // // // // //         }

// // // // // // // // //         /* No-flip zone for buttons */
// // // // // // // // //         .no-flip-zone {
// // // // // // // // //           pointer-events: auto;
// // // // // // // // //         }

// // // // // // // // //         /* Animation Keyframes */
// // // // // // // // //         @keyframes fadeIn {
// // // // // // // // //           from {
// // // // // // // // //             opacity: 0;
// // // // // // // // //           }
// // // // // // // // //           to {
// // // // // // // // //             opacity: 1;
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         @keyframes slideInLeft {
// // // // // // // // //           from {
// // // // // // // // //             opacity: 0;
// // // // // // // // //             transform: translateX(-20px);
// // // // // // // // //           }
// // // // // // // // //           to {
// // // // // // // // //             opacity: 1;
// // // // // // // // //             transform: translateX(0);
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         @keyframes slideInRight {
// // // // // // // // //           from {
// // // // // // // // //             opacity: 0;
// // // // // // // // //             transform: translateX(20px);
// // // // // // // // //           }
// // // // // // // // //           to {
// // // // // // // // //             opacity: 1;
// // // // // // // // //             transform: translateX(0);
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         @keyframes slideInUp {
// // // // // // // // //           from {
// // // // // // // // //             opacity: 0;
// // // // // // // // //             transform: translateY(20px);
// // // // // // // // //           }
// // // // // // // // //           to {
// // // // // // // // //             opacity: 1;
// // // // // // // // //             transform: translateY(0);
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         @keyframes scaleIn {
// // // // // // // // //           from {
// // // // // // // // //             opacity: 0;
// // // // // // // // //             transform: scale(0.8);
// // // // // // // // //           }
// // // // // // // // //           to {
// // // // // // // // //             opacity: 1;
// // // // // // // // //             transform: scale(1);
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         @keyframes bounceIn {
// // // // // // // // //           0% {
// // // // // // // // //             opacity: 0;
// // // // // // // // //             transform: scale(0.3);
// // // // // // // // //           }
// // // // // // // // //           50% {
// // // // // // // // //             transform: scale(1.05);
// // // // // // // // //           }
// // // // // // // // //           70% {
// // // // // // // // //             transform: scale(0.9);
// // // // // // // // //           }
// // // // // // // // //           100% {
// // // // // // // // //             opacity: 1;
// // // // // // // // //             transform: scale(1);
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         /* Animation Classes */
// // // // // // // // //         .animate-fade-in {
// // // // // // // // //           animation: fadeIn 0.6s ease-out forwards;
// // // // // // // // //           opacity: 0;
// // // // // // // // //         }

// // // // // // // // //         .animate-slide-in-left {
// // // // // // // // //           animation: slideInLeft 0.6s ease-out forwards;
// // // // // // // // //           opacity: 0;
// // // // // // // // //         }

// // // // // // // // //         .animate-slide-in-right {
// // // // // // // // //           animation: slideInRight 0.6s ease-out forwards;
// // // // // // // // //           opacity: 0;
// // // // // // // // //         }

// // // // // // // // //         .animate-slide-in-up {
// // // // // // // // //           animation: slideInUp 0.6s ease-out forwards;
// // // // // // // // //           opacity: 0;
// // // // // // // // //         }

// // // // // // // // //         .animate-scale-in {
// // // // // // // // //           animation: scaleIn 0.4s ease-out forwards;
// // // // // // // // //           opacity: 0;
// // // // // // // // //         }

// // // // // // // // //         .animate-bounce-in {
// // // // // // // // //           animation: bounceIn 0.6s ease-out forwards;
// // // // // // // // //           opacity: 0;
// // // // // // // // //         }

// // // // // // // // //         /* Ensure smooth animations */
// // // // // // // // //         .project-card-wrapper {
// // // // // // // // //           transform: translateZ(0);
// // // // // // // // //           will-change: opacity, transform;
// // // // // // // // //         }

// // // // // // // // //         /* Mobile responsiveness */
// // // // // // // // //         @media (max-width: 640px) {
// // // // // // // // //           .flip-card {
// // // // // // // // //             min-height: 900px;
// // // // // // // // //           }
          
// // // // // // // // //           .flip-card-inner {
// // // // // // // // //             min-height: 900px;
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // // // // //           .flip-card {
// // // // // // // // //             min-height: 650px;
// // // // // // // // //           }
          
// // // // // // // // //           .flip-card-inner {
// // // // // // // // //             min-height: 650px;
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         @media (min-width: 1024px) {
// // // // // // // // //           .flip-card {
// // // // // // // // //             min-height: 600px;
// // // // // // // // //           }
          
// // // // // // // // //           .flip-card-inner {
// // // // // // // // //             min-height: 600px;
// // // // // // // // //           }
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
// // // // // // // //           const index = projectRefs.current.indexOf(entry.target);
// // // // // // // //           if (entry.isIntersecting) {
// // // // // // // //             // Element is visible
// // // // // // // //             if (entry.target && index !== -1) {
// // // // // // // //               setTimeout(() => {
// // // // // // // //                 entry.target.style.opacity = "1";
// // // // // // // //                 entry.target.style.transform = "translateY(0)";
// // // // // // // //               }, index * 200);
// // // // // // // //             }
// // // // // // // //           } else {
// // // // // // // //             // Element is not visible - reset animation
// // // // // // // //             if (entry.target) {
// // // // // // // //               entry.target.style.opacity = "0";
// // // // // // // //               entry.target.style.transform = "translateY(32px)";
// // // // // // // //             }
// // // // // // // //           }
// // // // // // // //         });
// // // // // // // //       },
// // // // // // // //       { 
// // // // // // // //         threshold: 0.2,
// // // // // // // //         rootMargin: "0px"
// // // // // // // //       }
// // // // // // // //     );

// // // // // // // //     projectRefs.current.forEach((projectRef) => {
// // // // // // // //       if (projectRef) {
// // // // // // // //         observer.observe(projectRef);
// // // // // // // //       }
// // // // // // // //     });

// // // // // // // //     return () => {
// // // // // // // //       projectRefs.current.forEach((projectRef) => {
// // // // // // // //         if (projectRef) {
// // // // // // // //           observer.unobserve(projectRef);
// // // // // // // //         }
// // // // // // // //       });
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const headerObserver = new IntersectionObserver(
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
// // // // // // // //       headerObserver.observe(sectionRef.current);
// // // // // // // //     }

// // // // // // // //     return () => {
// // // // // // // //       if (sectionRef.current) {
// // // // // // // //         headerObserver.unobserve(sectionRef.current);
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

// // // // // // // //   const handleCardHover = (index, isHovering, e) => {
// // // // // // // //     // Check if hovering over button area
// // // // // // // //     const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
// // // // // // // //     // Only trigger on hover for desktop and not on button areas
// // // // // // // //     if (window.innerWidth >= 1024 && !isButtonArea) {
// // // // // // // //       setFlippedCards(prev => ({
// // // // // // // //         ...prev,
// // // // // // // //         [index]: isHovering
// // // // // // // //       }));
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleCardClick = (index, e) => {
// // // // // // // //     // Don't toggle if clicking on buttons
// // // // // // // //     if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
// // // // // // // //       return;
// // // // // // // //     }
    
// // // // // // // //     // Toggle flip on click for mobile/tablet
// // // // // // // //     setFlippedCards(prev => ({
// // // // // // // //       ...prev,
// // // // // // // //       [index]: !prev[index]
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   const addToProjectRefs = (el, index) => {
// // // // // // // //     if (el && !projectRefs.current[index]) {
// // // // // // // //       projectRefs.current[index] = el;
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <section 
// // // // // // // //       id="projects" 
// // // // // // // //       ref={sectionRef}
// // // // // // // //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // // // //     >
// // // // // // // //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
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
// // // // // // // //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         {/* Projects Grid */}
// // // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0">
// // // // // // // //           {projects.map((project, index) => (
// // // // // // // //             <div
// // // // // // // //               key={project.title}
// // // // // // // //               ref={(el) => addToProjectRefs(el, index)}
// // // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full px-3 sm:px-0"
// // // // // // // //             >
// // // // // // // //               {/* Flip Card Container */}
// // // // // // // //               <div 
// // // // // // // //                 className="flip-card w-full h-full"
// // // // // // // //                 onMouseEnter={(e) => handleCardHover(index, true, e)}
// // // // // // // //                 onMouseLeave={(e) => handleCardHover(index, false, e)}
// // // // // // // //                 onClick={(e) => handleCardClick(index, e)}
// // // // // // // //               >
// // // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // // //                   {/* Front Side */}
// // // // // // // //                   <div className="flip-card-front">
// // // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // // // // // //                       <CardHeader className="pb-3 animate-fade-in">
// // // // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-3 animate-slide-in-left">
// // // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // // // //                             {project.type}
// // // // // // // //                           </Badge>
// // // // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // // // //                             {project.period}
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// // // // // // // //                           {project.title}
// // // // // // // //                         </CardTitle>
// // // // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
// // // // // // // //                           {project.description}
// // // // // // // //                         </CardDescription>
// // // // // // // //                       </CardHeader>

// // // // // // // //                       <CardContent className="space-y-3 sm:space-y-4 pb-4 flex-1 flex flex-col">
// // // // // // // //                         {/* Key Features */}
// // // // // // // //                         <div className="flex-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
// // // // // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Key Features & Achievements</h4>
// // // // // // // //                           <ul className="space-y-1.5">
// // // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // // //                               <li 
// // // // // // // //                                 key={featureIndex} 
// // // // // // // //                                 className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start animate-slide-in-left"
// // // // // // // //                                 style={{animationDelay: `${0.4 + featureIndex * 0.1}s`}}
// // // // // // // //                               >
// // // // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // // // //                                 {feature}
// // // // // // // //                               </li>
// // // // // // // //                             ))}
// // // // // // // //                           </ul>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Technologies */}
// // // // // // // //                         <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
// // // // // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Technologies Used</h4>
// // // // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // // // //                             {project.technologies.map((tech, techIndex) => {
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
// // // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs animate-scale-in"
// // // // // // // //                                   style={{animationDelay: `${0.8 + techIndex * 0.05}s`}}
// // // // // // // //                                 >
// // // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // // //                                   {tech}
// // // // // // // //                                 </Badge>
// // // // // // // //                               );
// // // // // // // //                             })}
// // // // // // // //                           </div>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Action Buttons */}
// // // // // // // //                         <div 
// // // // // // // //                           className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 no-flip-zone animate-fade-in" 
// // // // // // // //                           style={{animationDelay: '1s'}}
// // // // // // // //                           onMouseEnter={(e) => {
// // // // // // // //                             e.stopPropagation();
// // // // // // // //                             if (window.innerWidth >= 1024) {
// // // // // // // //                               setFlippedCards(prev => ({
// // // // // // // //                                 ...prev,
// // // // // // // //                                 [index]: false
// // // // // // // //                               }));
// // // // // // // //                             }
// // // // // // // //                           }}
// // // // // // // //                         >
// // // // // // // //                           <Button
// // // // // // // //                             variant="default"
// // // // // // // //                             size="sm"
// // // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto animate-bounce-in"
// // // // // // // //                             style={{animationDelay: '1.1s'}}
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
// // // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9 animate-bounce-in"
// // // // // // // //                             style={{animationDelay: '1.2s'}}
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
// // // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-5 flex flex-col">
// // // // // // // //                       <div className="h-full flex flex-col">
// // // // // // // //                         {/* Header */}
// // // // // // // //                         <div className="text-center mb-4 sm:mb-5 animate-fade-in">
// // // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm animate-scale-in">
// // // // // // // //                             Project Insights
// // // // // // // //                           </Badge>
// // // // // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// // // // // // // //                             {project.title}
// // // // // // // //                           </h3>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Content */}
// // // // // // // //                         <div className="space-y-3 sm:space-y-3 flex-1">
// // // // // // // //                           {/* Challenges */}
// // // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
// // // // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // // //                               <span className="text-base">🚧</span>
// // // // // // // //                               Key Challenges
// // // // // // // //                             </h4>
// // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.3s'}}>
// // // // // // // //                               {project.backContent.challenges}
// // // // // // // //                             </p>
// // // // // // // //                           </div>

// // // // // // // //                           {/* Learnings */}
// // // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
// // // // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // // //                               <span className="text-base">📚</span>
// // // // // // // //                               Key Learnings
// // // // // // // //                             </h4>
// // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.5s'}}>
// // // // // // // //                               {project.backContent.learnings}
// // // // // // // //                             </p>
// // // // // // // //                           </div>

// // // // // // // //                           {/* Impact */}
// // // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
// // // // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // // //                               <span className="text-base">📈</span>
// // // // // // // //                               Project Impact
// // // // // // // //                             </h4>
// // // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.7s'}}>
// // // // // // // //                               {project.backContent.impact}
// // // // // // // //                             </p>
// // // // // // // //                           </div>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Actions */}
// // // // // // // //                         <div 
// // // // // // // //                           className="flex flex-col sm:flex-row gap-2.5 pt-2 sm:pt-2 mt-auto no-flip-zone animate-fade-in" 
// // // // // // // //                           style={{animationDelay: '0.8s'}}
// // // // // // // //                           onMouseEnter={(e) => {
// // // // // // // //                             e.stopPropagation();
// // // // // // // //                             if (window.innerWidth >= 1024) {
// // // // // // // //                               setFlippedCards(prev => ({
// // // // // // // //                                 ...prev,
// // // // // // // //                                 [index]: false
// // // // // // // //                               }));
// // // // // // // //                             }
// // // // // // // //                           }}
// // // // // // // //                         >
// // // // // // // //                           <Button
// // // // // // // //                             variant="default"
// // // // // // // //                             size="sm"
// // // // // // // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9 animate-bounce-in"
// // // // // // // //                             style={{animationDelay: '0.9s'}}
// // // // // // // //                             onClick={(e) => {
// // // // // // // //                               e.stopPropagation();
// // // // // // // //                               handleViewDetails(project);
// // // // // // // //                             }}
// // // // // // // //                           >
// // // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // // //                             PDF Details
// // // // // // // //                           </Button>
// // // // // // // //                           <Button
// // // // // // // //                             variant="outline"
// // // // // // // //                             size="sm"
// // // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm animate-bounce-in"
// // // // // // // //                             style={{animationDelay: '1s'}}
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
// // // // // // // //         /* Flip Card Styles */
// // // // // // // //         .flip-card {
// // // // // // // //           perspective: 1000px;
// // // // // // // //           width: 100%;
// // // // // // // //           cursor: pointer;
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

// // // // // // // //         /* No-flip zone for buttons */
// // // // // // // //         .no-flip-zone {
// // // // // // // //           pointer-events: auto;
// // // // // // // //         }

// // // // // // // //         /* Animation Keyframes */
// // // // // // // //         @keyframes fadeIn {
// // // // // // // //           from {
// // // // // // // //             opacity: 0;
// // // // // // // //           }
// // // // // // // //           to {
// // // // // // // //             opacity: 1;
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         @keyframes slideInLeft {
// // // // // // // //           from {
// // // // // // // //             opacity: 0;
// // // // // // // //             transform: translateX(-20px);
// // // // // // // //           }
// // // // // // // //           to {
// // // // // // // //             opacity: 1;
// // // // // // // //             transform: translateX(0);
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         @keyframes slideInRight {
// // // // // // // //           from {
// // // // // // // //             opacity: 0;
// // // // // // // //             transform: translateX(20px);
// // // // // // // //           }
// // // // // // // //           to {
// // // // // // // //             opacity: 1;
// // // // // // // //             transform: translateX(0);
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         @keyframes slideInUp {
// // // // // // // //           from {
// // // // // // // //             opacity: 0;
// // // // // // // //             transform: translateY(20px);
// // // // // // // //           }
// // // // // // // //           to {
// // // // // // // //             opacity: 1;
// // // // // // // //             transform: translateY(0);
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         @keyframes scaleIn {
// // // // // // // //           from {
// // // // // // // //             opacity: 0;
// // // // // // // //             transform: scale(0.8);
// // // // // // // //           }
// // // // // // // //           to {
// // // // // // // //             opacity: 1;
// // // // // // // //             transform: scale(1);
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         @keyframes bounceIn {
// // // // // // // //           0% {
// // // // // // // //             opacity: 0;
// // // // // // // //             transform: scale(0.3);
// // // // // // // //           }
// // // // // // // //           50% {
// // // // // // // //             transform: scale(1.05);
// // // // // // // //           }
// // // // // // // //           70% {
// // // // // // // //             transform: scale(0.9);
// // // // // // // //           }
// // // // // // // //           100% {
// // // // // // // //             opacity: 1;
// // // // // // // //             transform: scale(1);
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         /* Animation Classes */
// // // // // // // //         .animate-fade-in {
// // // // // // // //           animation: fadeIn 0.6s ease-out forwards;
// // // // // // // //           opacity: 0;
// // // // // // // //         }

// // // // // // // //         .animate-slide-in-left {
// // // // // // // //           animation: slideInLeft 0.6s ease-out forwards;
// // // // // // // //           opacity: 0;
// // // // // // // //         }

// // // // // // // //         .animate-slide-in-right {
// // // // // // // //           animation: slideInRight 0.6s ease-out forwards;
// // // // // // // //           opacity: 0;
// // // // // // // //         }

// // // // // // // //         .animate-slide-in-up {
// // // // // // // //           animation: slideInUp 0.6s ease-out forwards;
// // // // // // // //           opacity: 0;
// // // // // // // //         }

// // // // // // // //         .animate-scale-in {
// // // // // // // //           animation: scaleIn 0.4s ease-out forwards;
// // // // // // // //           opacity: 0;
// // // // // // // //         }

// // // // // // // //         .animate-bounce-in {
// // // // // // // //           animation: bounceIn 0.6s ease-out forwards;
// // // // // // // //           opacity: 0;
// // // // // // // //         }

// // // // // // // //         /* Ensure smooth animations */
// // // // // // // //         .project-card-wrapper {
// // // // // // // //           transform: translateZ(0);
// // // // // // // //           will-change: opacity, transform;
// // // // // // // //         }

// // // // // // // //         /* Mobile responsiveness */
// // // // // // // //         @media (max-width: 640px) {
// // // // // // // //           .flip-card {
// // // // // // // //             min-height: 820px;
// // // // // // // //           }
          
// // // // // // // //           .flip-card-inner {
// // // // // // // //             min-height: 820px;
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // // // //           .flip-card {
// // // // // // // //             min-height: 580px;
// // // // // // // //           }
          
// // // // // // // //           .flip-card-inner {
// // // // // // // //             min-height: 580px;
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         @media (min-width: 1024px) {
// // // // // // // //           .flip-card {
// // // // // // // //             min-height: 520px;
// // // // // // // //           }
          
// // // // // // // //           .flip-card-inner {
// // // // // // // //             min-height: 520px;
// // // // // // // //           }
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

// // // // // // //   const handleCardHover = (index, isHovering, e) => {
// // // // // // //     // Check if hovering over button area
// // // // // // //     const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
// // // // // // //     // Only trigger on hover for desktop and not on button areas
// // // // // // //     if (window.innerWidth >= 1024 && !isButtonArea) {
// // // // // // //       setFlippedCards(prev => ({
// // // // // // //         ...prev,
// // // // // // //         [index]: isHovering
// // // // // // //       }));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleCardClick = (index, e) => {
// // // // // // //     // Don't toggle if clicking on buttons
// // // // // // //     if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
// // // // // // //       return;
// // // // // // //     }
    
// // // // // // //     // Toggle flip on click for mobile/tablet
// // // // // // //     setFlippedCards(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [index]: !prev[index]
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
// // // // // // //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // // //     >
// // // // // // //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
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
// // // // // // //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* Projects Grid */}
// // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0">
// // // // // // //           {projects.map((project, index) => (
// // // // // // //             <div
// // // // // // //               key={project.title}
// // // // // // //               ref={(el) => addToProjectRefs(el, index)}
// // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full px-3 sm:px-0"
// // // // // // //             >
// // // // // // //               {/* Flip Card Container */}
// // // // // // //               <div 
// // // // // // //                 className="flip-card w-full h-full"
// // // // // // //                 onMouseEnter={(e) => handleCardHover(index, true, e)}
// // // // // // //                 onMouseLeave={(e) => handleCardHover(index, false, e)}
// // // // // // //                 onClick={(e) => handleCardClick(index, e)}
// // // // // // //               >
// // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // //                   {/* Front Side */}
// // // // // // //                   <div className="flip-card-front">
// // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // // // // //                       <CardHeader className="pb-3 animate-fade-in">
// // // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-3 animate-slide-in-left">
// // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // // //                             {project.type}
// // // // // // //                           </Badge>
// // // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // // //                             {project.period}
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// // // // // // //                           {project.title}
// // // // // // //                         </CardTitle>
// // // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
// // // // // // //                           {project.description}
// // // // // // //                         </CardDescription>
// // // // // // //                       </CardHeader>

// // // // // // //                       <CardContent className="space-y-3 sm:space-y-4 pb-4 flex-1 flex flex-col">
// // // // // // //                         {/* Key Features */}
// // // // // // //                         <div className="flex-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
// // // // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Key Features & Achievements</h4>
// // // // // // //                           <ul className="space-y-1.5">
// // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // //                               <li 
// // // // // // //                                 key={featureIndex} 
// // // // // // //                                 className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start animate-slide-in-left"
// // // // // // //                                 style={{animationDelay: `${0.4 + featureIndex * 0.1}s`}}
// // // // // // //                               >
// // // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // // //                                 {feature}
// // // // // // //                               </li>
// // // // // // //                             ))}
// // // // // // //                           </ul>
// // // // // // //                         </div>

// // // // // // //                         {/* Technologies */}
// // // // // // //                         <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
// // // // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Technologies Used</h4>
// // // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // // //                             {project.technologies.map((tech, techIndex) => {
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
// // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs animate-scale-in"
// // // // // // //                                   style={{animationDelay: `${0.8 + techIndex * 0.05}s`}}
// // // // // // //                                 >
// // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // //                                   {tech}
// // // // // // //                                 </Badge>
// // // // // // //                               );
// // // // // // //                             })}
// // // // // // //                           </div>
// // // // // // //                         </div>

// // // // // // //                         {/* Action Buttons */}
// // // // // // //                         <div 
// // // // // // //                           className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 no-flip-zone animate-fade-in" 
// // // // // // //                           style={{animationDelay: '1s'}}
// // // // // // //                           onMouseEnter={(e) => {
// // // // // // //                             e.stopPropagation();
// // // // // // //                             if (window.innerWidth >= 1024) {
// // // // // // //                               setFlippedCards(prev => ({
// // // // // // //                                 ...prev,
// // // // // // //                                 [index]: false
// // // // // // //                               }));
// // // // // // //                             }
// // // // // // //                           }}
// // // // // // //                         >
// // // // // // //                           <Button
// // // // // // //                             variant="default"
// // // // // // //                             size="sm"
// // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto animate-bounce-in"
// // // // // // //                             style={{animationDelay: '1.1s'}}
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
// // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9 animate-bounce-in"
// // // // // // //                             style={{animationDelay: '1.2s'}}
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
// // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-5 flex flex-col">
// // // // // // //                       <div className="h-full flex flex-col">
// // // // // // //                         {/* Header */}
// // // // // // //                         <div className="text-center mb-4 sm:mb-5 animate-fade-in">
// // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm animate-scale-in">
// // // // // // //                             Project Insights
// // // // // // //                           </Badge>
// // // // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// // // // // // //                             {project.title}
// // // // // // //                           </h3>
// // // // // // //                         </div>

// // // // // // //                         {/* Content */}
// // // // // // //                         <div className="space-y-3 sm:space-y-3 flex-1">
// // // // // // //                           {/* Challenges */}
// // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
// // // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // //                               <span className="text-base">🚧</span>
// // // // // // //                               Key Challenges
// // // // // // //                             </h4>
// // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.3s'}}>
// // // // // // //                               {project.backContent.challenges}
// // // // // // //                             </p>
// // // // // // //                           </div>

// // // // // // //                           {/* Learnings */}
// // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
// // // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // //                               <span className="text-base">📚</span>
// // // // // // //                               Key Learnings
// // // // // // //                             </h4>
// // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.5s'}}>
// // // // // // //                               {project.backContent.learnings}
// // // // // // //                             </p>
// // // // // // //                           </div>

// // // // // // //                           {/* Impact */}
// // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
// // // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // //                               <span className="text-base">📈</span>
// // // // // // //                               Project Impact
// // // // // // //                             </h4>
// // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.7s'}}>
// // // // // // //                               {project.backContent.impact}
// // // // // // //                             </p>
// // // // // // //                           </div>
// // // // // // //                         </div>

// // // // // // //                         {/* Actions */}
// // // // // // //                         <div 
// // // // // // //                           className="flex flex-col sm:flex-row gap-2.5 pt-2 sm:pt-2 mt-auto no-flip-zone animate-fade-in" 
// // // // // // //                           style={{animationDelay: '0.8s'}}
// // // // // // //                           onMouseEnter={(e) => {
// // // // // // //                             e.stopPropagation();
// // // // // // //                             if (window.innerWidth >= 1024) {
// // // // // // //                               setFlippedCards(prev => ({
// // // // // // //                                 ...prev,
// // // // // // //                                 [index]: false
// // // // // // //                               }));
// // // // // // //                             }
// // // // // // //                           }}
// // // // // // //                         >
// // // // // // //                           <Button
// // // // // // //                             variant="default"
// // // // // // //                             size="sm"
// // // // // // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9 animate-bounce-in"
// // // // // // //                             style={{animationDelay: '0.9s'}}
// // // // // // //                             onClick={(e) => {
// // // // // // //                               e.stopPropagation();
// // // // // // //                               handleViewDetails(project);
// // // // // // //                             }}
// // // // // // //                           >
// // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // //                             PDF Details
// // // // // // //                           </Button>
// // // // // // //                           <Button
// // // // // // //                             variant="outline"
// // // // // // //                             size="sm"
// // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm animate-bounce-in"
// // // // // // //                             style={{animationDelay: '1s'}}
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
// // // // // // //         /* Flip Card Styles */
// // // // // // //         .flip-card {
// // // // // // //           perspective: 1000px;
// // // // // // //           width: 100%;
// // // // // // //           cursor: pointer;
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

// // // // // // //         /* No-flip zone for buttons */
// // // // // // //         .no-flip-zone {
// // // // // // //           pointer-events: auto;
// // // // // // //         }

// // // // // // //         /* Animation Keyframes */
// // // // // // //         @keyframes fadeIn {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @keyframes slideInLeft {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //             transform: translateX(-20px);
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //             transform: translateX(0);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @keyframes slideInRight {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //             transform: translateX(20px);
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //             transform: translateX(0);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @keyframes slideInUp {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //             transform: translateY(20px);
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //             transform: translateY(0);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @keyframes scaleIn {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //             transform: scale(0.8);
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //             transform: scale(1);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @keyframes bounceIn {
// // // // // // //           0% {
// // // // // // //             opacity: 0;
// // // // // // //             transform: scale(0.3);
// // // // // // //           }
// // // // // // //           50% {
// // // // // // //             transform: scale(1.05);
// // // // // // //           }
// // // // // // //           70% {
// // // // // // //             transform: scale(0.9);
// // // // // // //           }
// // // // // // //           100% {
// // // // // // //             opacity: 1;
// // // // // // //             transform: scale(1);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         /* Animation Classes */
// // // // // // //         .animate-fade-in {
// // // // // // //           animation: fadeIn 0.6s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         .animate-slide-in-left {
// // // // // // //           animation: slideInLeft 0.6s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         .animate-slide-in-right {
// // // // // // //           animation: slideInRight 0.6s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         .animate-slide-in-up {
// // // // // // //           animation: slideInUp 0.6s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         .animate-scale-in {
// // // // // // //           animation: scaleIn 0.4s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         .animate-bounce-in {
// // // // // // //           animation: bounceIn 0.6s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         /* Ensure smooth animations */
// // // // // // //         .project-card-wrapper {
// // // // // // //           transform: translateZ(0);
// // // // // // //           will-change: opacity, transform;
// // // // // // //         }

// // // // // // //         /* Mobile responsiveness */
// // // // // // //         @media (max-width: 640px) {
// // // // // // //           .flip-card {
// // // // // // //             min-height: 720px;
// // // // // // //           }
          
// // // // // // //           .flip-card-inner {
// // // // // // //             min-height: 720px;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // // //           .flip-card {
// // // // // // //             min-height: 540px;
// // // // // // //           }
          
// // // // // // //           .flip-card-inner {
// // // // // // //             min-height: 540px;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @media (min-width: 1024px) {
// // // // // // //           .flip-card {
// // // // // // //             min-height: 500px;
// // // // // // //           }
          
// // // // // // //           .flip-card-inner {
// // // // // // //             min-height: 500px;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Projects;
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

// // // // // // //   const handleCardHover = (index, isHovering, e) => {
// // // // // // //     // Check if hovering over button area
// // // // // // //     const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
// // // // // // //     // Only trigger on hover for desktop and not on button areas
// // // // // // //     if (window.innerWidth >= 1024 && !isButtonArea) {
// // // // // // //       setFlippedCards(prev => ({
// // // // // // //         ...prev,
// // // // // // //         [index]: isHovering
// // // // // // //       }));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleCardClick = (index, e) => {
// // // // // // //     // Don't toggle if clicking on buttons
// // // // // // //     if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
// // // // // // //       return;
// // // // // // //     }
    
// // // // // // //     // Toggle flip on click for mobile/tablet
// // // // // // //     setFlippedCards(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [index]: !prev[index]
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
// // // // // // //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // // //     >
// // // // // // //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
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
// // // // // // //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* Projects Grid */}
// // // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0">
// // // // // // //           {projects.map((project, index) => (
// // // // // // //             <div
// // // // // // //               key={project.title}
// // // // // // //               ref={(el) => addToProjectRefs(el, index)}
// // // // // // //               className="transition-all duration-700 ease-out opacity-0 translate-y-8 project-card-wrapper w-full px-3 sm:px-0"
// // // // // // //             >
// // // // // // //               {/* Flip Card Container */}
// // // // // // //               <div 
// // // // // // //                 className="flip-card w-full h-full"
// // // // // // //                 onMouseEnter={(e) => handleCardHover(index, true, e)}
// // // // // // //                 onMouseLeave={(e) => handleCardHover(index, false, e)}
// // // // // // //                 onClick={(e) => handleCardClick(index, e)}
// // // // // // //               >
// // // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // // //                   {/* Front Side */}
// // // // // // //                   <div className="flip-card-front">
// // // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col">
// // // // // // //                       <CardHeader className="pb-3 animate-fade-in">
// // // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-3 animate-slide-in-left">
// // // // // // //                           <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
// // // // // // //                             {project.type}
// // // // // // //                           </Badge>
// // // // // // //                           <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
// // // // // // //                             <Calendar size={14} className="mr-1" />
// // // // // // //                             {project.period}
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                         <CardTitle className="text-lg sm:text-xl mb-2 animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// // // // // // //                           {project.title}
// // // // // // //                         </CardTitle>
// // // // // // //                         <CardDescription className="text-sm sm:text-base leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
// // // // // // //                           {project.description}
// // // // // // //                         </CardDescription>
// // // // // // //                       </CardHeader>

// // // // // // //                       <CardContent className="space-y-3 sm:space-y-4 pb-4 flex-1 flex flex-col">
// // // // // // //                         {/* Key Features */}
// // // // // // //                         <div className="flex-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
// // // // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Key Features & Achievements</h4>
// // // // // // //                           <ul className="space-y-1.5">
// // // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // // //                               <li 
// // // // // // //                                 key={featureIndex} 
// // // // // // //                                 className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start animate-slide-in-left"
// // // // // // //                                 style={{animationDelay: `${0.4 + featureIndex * 0.1}s`}}
// // // // // // //                               >
// // // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // // //                                 {feature}
// // // // // // //                               </li>
// // // // // // //                             ))}
// // // // // // //                           </ul>
// // // // // // //                         </div>

// // // // // // //                         {/* Technologies */}
// // // // // // //                         <div className="animate-fade-in" style={{animationDelay: '0.7s'}}>
// // // // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base animate-slide-in-right">Technologies Used</h4>
// // // // // // //                           <div className="flex flex-wrap gap-1.5 sm:gap-2">
// // // // // // //                             {project.technologies.map((tech, techIndex) => {
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
// // // // // // //                                   className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1 text-xs animate-scale-in"
// // // // // // //                                   style={{animationDelay: `${0.8 + techIndex * 0.05}s`}}
// // // // // // //                                 >
// // // // // // //                                   <span className="text-xs">{getIcon(tech)}</span>
// // // // // // //                                   {tech}
// // // // // // //                                 </Badge>
// // // // // // //                               );
// // // // // // //                             })}
// // // // // // //                           </div>
// // // // // // //                         </div>

// // // // // // //                         {/* Action Buttons */}
// // // // // // //                         <div 
// // // // // // //                           className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 no-flip-zone animate-fade-in" 
// // // // // // //                           style={{animationDelay: '1s'}}
// // // // // // //                           onMouseEnter={(e) => {
// // // // // // //                             e.stopPropagation();
// // // // // // //                             if (window.innerWidth >= 1024) {
// // // // // // //                               setFlippedCards(prev => ({
// // // // // // //                                 ...prev,
// // // // // // //                                 [index]: false
// // // // // // //                               }));
// // // // // // //                             }
// // // // // // //                           }}
// // // // // // //                         >
// // // // // // //                           <Button
// // // // // // //                             variant="default"
// // // // // // //                             size="sm"
// // // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto animate-bounce-in"
// // // // // // //                             style={{animationDelay: '1.1s'}}
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
// // // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9 animate-bounce-in"
// // // // // // //                             style={{animationDelay: '1.2s'}}
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
// // // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-5 flex flex-col">
// // // // // // //                       <div className="h-full flex flex-col">
// // // // // // //                         {/* Header */}
// // // // // // //                         <div className="text-center mb-4 sm:mb-5 animate-fade-in">
// // // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm animate-scale-in">
// // // // // // //                             Project Insights
// // // // // // //                           </Badge>
// // // // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary animate-slide-in-up" style={{animationDelay: '0.1s'}}>
// // // // // // //                             {project.title}
// // // // // // //                           </h3>
// // // // // // //                         </div>

// // // // // // //                         {/* Content */}
// // // // // // //                         <div className="space-y-3 sm:space-y-3 flex-1">
// // // // // // //                           {/* Challenges */}
// // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
// // // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // //                               <span className="text-base">🚧</span>
// // // // // // //                               Key Challenges
// // // // // // //                             </h4>
// // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.3s'}}>
// // // // // // //                               {project.backContent.challenges}
// // // // // // //                             </p>
// // // // // // //                           </div>

// // // // // // //                           {/* Learnings */}
// // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
// // // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // //                               <span className="text-base">📚</span>
// // // // // // //                               Key Learnings
// // // // // // //                             </h4>
// // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.5s'}}>
// // // // // // //                               {project.backContent.learnings}
// // // // // // //                             </p>
// // // // // // //                           </div>

// // // // // // //                           {/* Impact */}
// // // // // // //                           <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
// // // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5 animate-slide-in-left">
// // // // // // //                               <span className="text-base">📈</span>
// // // // // // //                               Project Impact
// // // // // // //                             </h4>
// // // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm animate-slide-in-right" style={{animationDelay: '0.7s'}}>
// // // // // // //                               {project.backContent.impact}
// // // // // // //                             </p>
// // // // // // //                           </div>
// // // // // // //                         </div>

// // // // // // //                         {/* Actions */}
// // // // // // //                         <div 
// // // // // // //                           className="flex flex-col sm:flex-row gap-2.5 pt-2 sm:pt-2 mt-auto no-flip-zone animate-fade-in" 
// // // // // // //                           style={{animationDelay: '0.8s'}}
// // // // // // //                           onMouseEnter={(e) => {
// // // // // // //                             e.stopPropagation();
// // // // // // //                             if (window.innerWidth >= 1024) {
// // // // // // //                               setFlippedCards(prev => ({
// // // // // // //                                 ...prev,
// // // // // // //                                 [index]: false
// // // // // // //                               }));
// // // // // // //                             }
// // // // // // //                           }}
// // // // // // //                         >
// // // // // // //                           <Button
// // // // // // //                             variant="default"
// // // // // // //                             size="sm"
// // // // // // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9 animate-bounce-in"
// // // // // // //                             style={{animationDelay: '0.9s'}}
// // // // // // //                             onClick={(e) => {
// // // // // // //                               e.stopPropagation();
// // // // // // //                               handleViewDetails(project);
// // // // // // //                             }}
// // // // // // //                           >
// // // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // // //                             PDF Details
// // // // // // //                           </Button>
// // // // // // //                           <Button
// // // // // // //                             variant="outline"
// // // // // // //                             size="sm"
// // // // // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm animate-bounce-in"
// // // // // // //                             style={{animationDelay: '1s'}}
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
// // // // // // //         /* Flip Card Styles */
// // // // // // //         .flip-card {
// // // // // // //           perspective: 1000px;
// // // // // // //           width: 100%;
// // // // // // //           cursor: pointer;
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

// // // // // // //         /* No-flip zone for buttons */
// // // // // // //         .no-flip-zone {
// // // // // // //           pointer-events: auto;
// // // // // // //         }

// // // // // // //         /* Animation Keyframes */
// // // // // // //         @keyframes fadeIn {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @keyframes slideInLeft {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //             transform: translateX(-20px);
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //             transform: translateX(0);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @keyframes slideInRight {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //             transform: translateX(20px);
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //             transform: translateX(0);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @keyframes slideInUp {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //             transform: translateY(20px);
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //             transform: translateY(0);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @keyframes scaleIn {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //             transform: scale(0.8);
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //             transform: scale(1);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @keyframes bounceIn {
// // // // // // //           0% {
// // // // // // //             opacity: 0;
// // // // // // //             transform: scale(0.3);
// // // // // // //           }
// // // // // // //           50% {
// // // // // // //             transform: scale(1.05);
// // // // // // //           }
// // // // // // //           70% {
// // // // // // //             transform: scale(0.9);
// // // // // // //           }
// // // // // // //           100% {
// // // // // // //             opacity: 1;
// // // // // // //             transform: scale(1);
// // // // // // //           }
// // // // // // //         }

// // // // // // //         /* Animation Classes */
// // // // // // //         .animate-fade-in {
// // // // // // //           animation: fadeIn 0.6s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         .animate-slide-in-left {
// // // // // // //           animation: slideInLeft 0.6s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         .animate-slide-in-right {
// // // // // // //           animation: slideInRight 0.6s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         .animate-slide-in-up {
// // // // // // //           animation: slideInUp 0.6s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         .animate-scale-in {
// // // // // // //           animation: scaleIn 0.4s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         .animate-bounce-in {
// // // // // // //           animation: bounceIn 0.6s ease-out forwards;
// // // // // // //           opacity: 0;
// // // // // // //         }

// // // // // // //         /* Ensure smooth animations */
// // // // // // //         .project-card-wrapper {
// // // // // // //           transform: translateZ(0);
// // // // // // //           will-change: opacity, transform;
// // // // // // //         }

// // // // // // //         /* Mobile responsiveness */
// // // // // // //         @media (max-width: 640px) {
// // // // // // //           .flip-card {
// // // // // // //             min-height: 720px;
// // // // // // //           }
          
// // // // // // //           .flip-card-inner {
// // // // // // //             min-height: 720px;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // // //           .flip-card {
// // // // // // //             min-height: 540px;
// // // // // // //           }
          
// // // // // // //           .flip-card-inner {
// // // // // // //             min-height: 540px;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @media (min-width: 1024px) {
// // // // // // //           .flip-card {
// // // // // // //             min-height: 560px;
// // // // // // //           }
          
// // // // // // //           .flip-card-inner {
// // // // // // //             min-height: 560px;
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
// // // // // //   const [projectsVisible, setProjectsVisible] = useState(false);
// // // // // //   const [ctaVisible, setCtaVisible] = useState(false);
// // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // //   const sectionRef = useRef(null);
// // // // // //   const projectsRef = useRef(null);
// // // // // //   const ctaRef = useRef(null);

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

// // // // // //   // Intersection Observer for header section
// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => {
// // // // // //           if (entry.isIntersecting) {
// // // // // //             setIsVisible(true);
// // // // // //           } else {
// // // // // //             setIsVisible(false);
// // // // // //           }
// // // // // //         });
// // // // // //       },
// // // // // //       { 
// // // // // //         threshold: 0.1,
// // // // // //         rootMargin: "0px"
// // // // // //       }
// // // // // //     );

// // // // // //     if (sectionRef.current) {
// // // // // //       observer.observe(sectionRef.current);
// // // // // //     }

// // // // // //     return () => {
// // // // // //       if (sectionRef.current) {
// // // // // //         observer.unobserve(sectionRef.current);
// // // // // //       }
// // // // // //     };
// // // // // //   }, []);

// // // // // //   // Intersection Observer for projects grid
// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => {
// // // // // //           if (entry.isIntersecting) {
// // // // // //             setProjectsVisible(true);
// // // // // //           } else {
// // // // // //             setProjectsVisible(false);
// // // // // //           }
// // // // // //         });
// // // // // //       },
// // // // // //       { 
// // // // // //         threshold: 0.1,
// // // // // //         rootMargin: "0px"
// // // // // //       }
// // // // // //     );

// // // // // //     if (projectsRef.current) {
// // // // // //       observer.observe(projectsRef.current);
// // // // // //     }

// // // // // //     return () => {
// // // // // //       if (projectsRef.current) {
// // // // // //         observer.unobserve(projectsRef.current);
// // // // // //       }
// // // // // //     };
// // // // // //   }, []);

// // // // // //   // Intersection Observer for CTA section
// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => {
// // // // // //           if (entry.isIntersecting) {
// // // // // //             setCtaVisible(true);
// // // // // //           } else {
// // // // // //             setCtaVisible(false);
// // // // // //           }
// // // // // //         });
// // // // // //       },
// // // // // //       { 
// // // // // //         threshold: 0.1,
// // // // // //         rootMargin: "0px"
// // // // // //       }
// // // // // //     );

// // // // // //     if (ctaRef.current) {
// // // // // //       observer.observe(ctaRef.current);
// // // // // //     }

// // // // // //     return () => {
// // // // // //       if (ctaRef.current) {
// // // // // //         observer.unobserve(ctaRef.current);
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

// // // // // //   const handleCardHover = (index, isHovering, e) => {
// // // // // //     // Check if hovering over button area
// // // // // //     const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
// // // // // //     // Only trigger on hover for desktop and not on button areas
// // // // // //     if (window.innerWidth >= 1024 && !isButtonArea) {
// // // // // //       setFlippedCards(prev => ({
// // // // // //         ...prev,
// // // // // //         [index]: isHovering
// // // // // //       }));
// // // // // //     }
// // // // // //   };

// // // // // //   const handleCardClick = (index, e) => {
// // // // // //     // Don't toggle if clicking on buttons
// // // // // //     if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
// // // // // //       return;
// // // // // //     }
    
// // // // // //     // Toggle flip on click for mobile/tablet
// // // // // //     setFlippedCards(prev => ({
// // // // // //       ...prev,
// // // // // //       [index]: !prev[index]
// // // // // //     }));
// // // // // //   };

// // // // // //   return (
// // // // // //     <section 
// // // // // //       id="projects" 
// // // // // //       ref={sectionRef}
// // // // // //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // //     >
// // // // // //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
// // // // // //         {/* Header Section with fade in */}
// // // // // //         <div 
// // // // // //           className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
// // // // // //             isVisible 
// // // // // //               ? "opacity-100 translate-y-0" 
// // // // // //               : "opacity-0 -translate-y-10"
// // // // // //           }`}
// // // // // //         >
// // // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // //           </p>
// // // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // // //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Projects Grid with fade in */}
// // // // // //         <div 
// // // // // //           ref={projectsRef}
// // // // // //           className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0 transition-all duration-1000 delay-200 ${
// // // // // //             projectsVisible 
// // // // // //               ? "opacity-100 translate-y-0" 
// // // // // //               : "opacity-0 translate-y-10"
// // // // // //           }`}
// // // // // //         >
// // // // // //           {projects.map((project, index) => (
// // // // // //             <div
// // // // // //               key={project.title}
// // // // // //               className={`w-full px-3 sm:px-0 transition-all duration-700 ${
// // // // // //                 projectsVisible 
// // // // // //                   ? "opacity-100 translate-y-0" 
// // // // // //                   : "opacity-0 translate-y-10"
// // // // // //               }`}
// // // // // //               style={{ transitionDelay: projectsVisible ? `${index * 150}ms` : '0s' }}
// // // // // //             >
// // // // // //               {/* Flip Card Container */}
// // // // // //               <div 
// // // // // //                 className="flip-card w-full h-full"
// // // // // //                 onMouseEnter={(e) => handleCardHover(index, true, e)}
// // // // // //                 onMouseLeave={(e) => handleCardHover(index, false, e)}
// // // // // //                 onClick={(e) => handleCardClick(index, e)}
// // // // // //               >
// // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // //                   {/* Front Side */}
// // // // // //                   <div className="flip-card-front">
// // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all duration-700 transform hover:scale-105 flex flex-col">
// // // // // //                       <CardHeader className="pb-3">
// // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-3">
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

// // // // // //                       <CardContent className="space-y-3 sm:space-y-4 pb-4 flex-1 flex flex-col">
// // // // // //                         {/* Key Features */}
// // // // // //                         <div className="flex-1">
// // // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // // //                           <ul className="space-y-1.5">
// // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // //                               <li 
// // // // // //                                 key={featureIndex} 
// // // // // //                                 className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start"
// // // // // //                               >
// // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // //                                 {feature}
// // // // // //                               </li>
// // // // // //                             ))}
// // // // // //                           </ul>
// // // // // //                         </div>

// // // // // //                         {/* Technologies */}
// // // // // //                         <div>
// // // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base">Technologies Used</h4>
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
// // // // // //                         <div 
// // // // // //                           className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 no-flip-zone" 
// // // // // //                           onMouseEnter={(e) => {
// // // // // //                             e.stopPropagation();
// // // // // //                             if (window.innerWidth >= 1024) {
// // // // // //                               setFlippedCards(prev => ({
// // // // // //                                 ...prev,
// // // // // //                                 [index]: false
// // // // // //                               }));
// // // // // //                             }
// // // // // //                           }}
// // // // // //                         >
// // // // // //                           <Button
// // // // // //                             variant="default"
// // // // // //                             size="sm"
// // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
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
// // // // // //                             className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9"
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
// // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-5 flex flex-col">
// // // // // //                       <div className="h-full flex flex-col">
// // // // // //                         {/* Header */}
// // // // // //                         <div className="text-center mb-4 sm:mb-5">
// // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm">
// // // // // //                             Project Insights
// // // // // //                           </Badge>
// // // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // // // //                             {project.title}
// // // // // //                           </h3>
// // // // // //                         </div>

// // // // // //                         {/* Content */}
// // // // // //                         <div className="space-y-3 sm:space-y-3 flex-1">
// // // // // //                           {/* Challenges */}
// // // // // //                           <div>
// // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // //                               <span className="text-base">🚧</span>
// // // // // //                               Key Challenges
// // // // // //                             </h4>
// // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // // // //                               {project.backContent.challenges}
// // // // // //                             </p>
// // // // // //                           </div>

// // // // // //                           {/* Learnings */}
// // // // // //                           <div>
// // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // //                               <span className="text-base">📚</span>
// // // // // //                               Key Learnings
// // // // // //                             </h4>
// // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // // // //                               {project.backContent.learnings}
// // // // // //                             </p>
// // // // // //                           </div>

// // // // // //                           {/* Impact */}
// // // // // //                           <div>
// // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // //                               <span className="text-base">📈</span>
// // // // // //                               Project Impact
// // // // // //                             </h4>
// // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // // // //                               {project.backContent.impact}
// // // // // //                             </p>
// // // // // //                           </div>
// // // // // //                         </div>

// // // // // //                         {/* Actions */}
// // // // // //                         <div 
// // // // // //                           className="flex flex-col sm:flex-row gap-2.5 pt-2 sm:pt-2 mt-auto no-flip-zone" 
// // // // // //                           onMouseEnter={(e) => {
// // // // // //                             e.stopPropagation();
// // // // // //                             if (window.innerWidth >= 1024) {
// // // // // //                               setFlippedCards(prev => ({
// // // // // //                                 ...prev,
// // // // // //                                 [index]: false
// // // // // //                               }));
// // // // // //                             }
// // // // // //                           }}
// // // // // //                         >
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

// // // // // //         {/* Call to Action with fade in */}
// // // // // //         <div 
// // // // // //           ref={ctaRef}
// // // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${
// // // // // //             ctaVisible 
// // // // // //               ? "opacity-100 translate-y-0" 
// // // // // //               : "opacity-0 translate-y-10"
// // // // // //           }`}
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
// // // // // //         /* Flip Card Styles */
// // // // // //         .flip-card {
// // // // // //           perspective: 1000px;
// // // // // //           width: 100%;
// // // // // //           cursor: pointer;
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

// // // // // //         /* No-flip zone for buttons */
// // // // // //         .no-flip-zone {
// // // // // //           pointer-events: auto;
// // // // // //         }

// // // // // //         /* Mobile responsiveness */
// // // // // //         @media (max-width: 640px) {
// // // // // //           .flip-card {
// // // // // //             min-height: 720px;
// // // // // //           }
          
// // // // // //           .flip-card-inner {
// // // // // //             min-height: 720px;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // //           .flip-card {
// // // // // //             min-height: 540px;
// // // // // //           }
          
// // // // // //           .flip-card-inner {
// // // // // //             min-height: 540px;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (min-width: 1024px) {
// // // // // //           .flip-card {
// // // // // //             min-height: 560px;
// // // // // //           }
          
// // // // // //           .flip-card-inner {
// // // // // //             min-height: 560px;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Projects;
// // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Calendar, Github, FileText, Cpu, Code } from "lucide-react";
// // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // const Projects = () => {
// // // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // // //   const [projectsVisible, setProjectsVisible] = useState(false);
// // // // // //   const [ctaVisible, setCtaVisible] = useState(false);
// // // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // // //   const [activeCategory, setActiveCategory] = useState("all");
// // // // // //   const sectionRef = useRef(null);
// // // // // //   const projectsRef = useRef(null);
// // // // // //   const ctaRef = useRef(null);

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
// // // // // //       category: "hardware",
// // // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // // //       githubUrl: "https://github.com/Thomasjose-tech/Smart-Pet-Feeder",
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
// // // // // //       category: "hardware",
// // // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // // //       githubUrl: "https://github.com/Thomasjose-tech",
// // // // // //       backContent: {
// // // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // // //       }
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Cross-Language Craft",
// // // // // //       period: "2024",
// // // // // //       description: "A sophisticated real-time language translation application enabling seamless communication across multiple languages.",
// // // // // //       features: [
// // // // // //         "Implemented real-time translation with support for multiple languages",
// // // // // //         "Created intuitive UI for instant language conversion and text input",
// // // // // //         "Integrated modern translation APIs for accurate results",
// // // // // //         "Designed responsive interface for desktop and mobile devices"
// // // // // //       ],
// // // // // //       technologies: ["React", "Translation API", "Responsive Design", "Real-time Processing"],
// // // // // //       type: "Frontend Development",
// // // // // //       category: "frontend",
// // // // // //       liveUrl: "https://cross-language-craft-26011.vercel.app/",
// // // // // //       backContent: {
// // // // // //         challenges: "Ensuring accurate translations while maintaining fast response times and handling various language character sets.",
// // // // // //         learnings: "Mastered API integration, state management in React, and creating fluid user experiences for real-time applications.",
// // // // // //         impact: "Enabled seamless cross-language communication with instant translation capabilities and user-friendly interface."
// // // // // //       }
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Financuz Nexus",
// // // // // //       period: "2024",
// // // // // //       description: "A comprehensive financial management platform providing tools for budget tracking, expense analysis, and financial planning.",
// // // // // //       features: [
// // // // // //         "Built interactive dashboard for financial data visualization",
// // // // // //         "Implemented expense tracking and categorization system",
// // // // // //         "Created budget planning and analysis tools",
// // // // // //         "Designed modern, intuitive interface for financial management"
// // // // // //       ],
// // // // // //       technologies: ["React", "Data Visualization", "UI/UX Design", "State Management"],
// // // // // //       type: "Frontend Development",
// // // // // //       category: "frontend",
// // // // // //       liveUrl: "https://financuz-nexus-01.vercel.app/",
// // // // // //       backContent: {
// // // // // //         challenges: "Creating an intuitive financial interface that simplifies complex data while maintaining security and performance.",
// // // // // //         learnings: "Advanced React patterns, data visualization techniques, and user-centric design for financial applications.",
// // // // // //         impact: "Simplified personal finance management with clear visualizations and easy-to-use tracking features."
// // // // // //       }
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Chronos - Luxury Timepieces",
// // // // // //       period: "2024",
// // // // // //       description: "An elegant e-commerce platform showcasing premium luxury watches with sophisticated design and seamless shopping experience.",
// // // // // //       features: [
// // // // // //         "Designed premium product showcase with high-quality imagery",
// // // // // //         "Implemented smooth animations and interactive elements",
// // // // // //         "Created responsive layout optimized for luxury brand presentation",
// // // // // //         "Built intuitive navigation and product filtering system"
// // // // // //       ],
// // // // // //       technologies: ["React", "E-commerce UI", "Animation", "Responsive Design"],
// // // // // //       type: "Frontend Development",
// // // // // //       category: "frontend",
// // // // // //       liveUrl: "https://chronos-luxury-timepieces.vercel.app/",
// // // // // //       backContent: {
// // // // // //         challenges: "Balancing aesthetic appeal with performance while creating a premium feel that matches luxury brand standards.",
// // // // // //         learnings: "Advanced CSS techniques, animation libraries, and creating high-end e-commerce user experiences.",
// // // // // //         impact: "Delivered a sophisticated platform that elevates the luxury shopping experience with elegant design and smooth interactions."
// // // // // //       }
// // // // // //     }
// // // // // //   ];

// // // // // //   const filteredProjects = activeCategory === "all" 
// // // // // //     ? projects 
// // // // // //     : projects.filter(p => p.category === activeCategory);

// // // // // //   // Intersection Observer for header section
// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => {
// // // // // //           if (entry.isIntersecting) {
// // // // // //             setIsVisible(true);
// // // // // //           } else {
// // // // // //             setIsVisible(false);
// // // // // //           }
// // // // // //         });
// // // // // //       },
// // // // // //       { 
// // // // // //         threshold: 0.1,
// // // // // //         rootMargin: "0px"
// // // // // //       }
// // // // // //     );

// // // // // //     if (sectionRef.current) {
// // // // // //       observer.observe(sectionRef.current);
// // // // // //     }

// // // // // //     return () => {
// // // // // //       if (sectionRef.current) {
// // // // // //         observer.unobserve(sectionRef.current);
// // // // // //       }
// // // // // //     };
// // // // // //   }, []);

// // // // // //   // Intersection Observer for projects grid
// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => {
// // // // // //           if (entry.isIntersecting) {
// // // // // //             setProjectsVisible(true);
// // // // // //           } else {
// // // // // //             setProjectsVisible(false);
// // // // // //           }
// // // // // //         });
// // // // // //       },
// // // // // //       { 
// // // // // //         threshold: 0.1,
// // // // // //         rootMargin: "0px"
// // // // // //       }
// // // // // //     );

// // // // // //     if (projectsRef.current) {
// // // // // //       observer.observe(projectsRef.current);
// // // // // //     }

// // // // // //     return () => {
// // // // // //       if (projectsRef.current) {
// // // // // //         observer.unobserve(projectsRef.current);
// // // // // //       }
// // // // // //     };
// // // // // //   }, []);

// // // // // //   // Intersection Observer for CTA section
// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => {
// // // // // //           if (entry.isIntersecting) {
// // // // // //             setCtaVisible(true);
// // // // // //           } else {
// // // // // //             setCtaVisible(false);
// // // // // //           }
// // // // // //         });
// // // // // //       },
// // // // // //       { 
// // // // // //         threshold: 0.1,
// // // // // //         rootMargin: "0px"
// // // // // //       }
// // // // // //     );

// // // // // //     if (ctaRef.current) {
// // // // // //       observer.observe(ctaRef.current);
// // // // // //     }

// // // // // //     return () => {
// // // // // //       if (ctaRef.current) {
// // // // // //         observer.unobserve(ctaRef.current);
// // // // // //       }
// // // // // //     };
// // // // // //   }, []);

// // // // // //   // Reset flipped cards when category changes
// // // // // //   useEffect(() => {
// // // // // //     setFlippedCards({});
// // // // // //   }, [activeCategory]);

// // // // // //   const handleViewDetails = (project) => {
// // // // // //     if (project.liveUrl) {
// // // // // //       window.open(project.liveUrl, "_blank");
// // // // // //     } else if (project.pdfUrl) {
// // // // // //       window.open(project.pdfUrl, "_blank");
// // // // // //     } else {
// // // // // //       alert(`Details for ${project.title} will be available soon!`);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleCardHover = (index, isHovering, e) => {
// // // // // //     const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
// // // // // //     if (window.innerWidth >= 1024 && !isButtonArea) {
// // // // // //       setFlippedCards(prev => ({
// // // // // //         ...prev,
// // // // // //         [index]: isHovering
// // // // // //       }));
// // // // // //     }
// // // // // //   };

// // // // // //   const handleCardClick = (index, e) => {
// // // // // //     if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
// // // // // //       return;
// // // // // //     }
    
// // // // // //     setFlippedCards(prev => ({
// // // // // //       ...prev,
// // // // // //       [index]: !prev[index]
// // // // // //     }));
// // // // // //   };

// // // // // //   return (
// // // // // //     <section 
// // // // // //       id="projects" 
// // // // // //       ref={sectionRef}
// // // // // //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // // //     >
// // // // // //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
// // // // // //         {/* Header Section with fade in */}
// // // // // //         <div 
// // // // // //           className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
// // // // // //             isVisible 
// // // // // //               ? "opacity-100 translate-y-0" 
// // // // // //               : "opacity-0 -translate-y-10"
// // // // // //           }`}
// // // // // //         >
// // // // // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Featured Projects</h2>
// // // // // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8" />
// // // // // //           <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
// // // // // //             Innovative solutions combining hardware and software to solve real-world problems
// // // // // //           </p>
// // // // // //           <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-4">
// // // // // //             💡 <span className="hidden lg:inline">Hover</span><span className="lg:hidden">Tap</span> on cards to flip and see detailed insights
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Category Filter */}
// // // // // //         <div 
// // // // // //           className={`flex justify-center mb-8 sm:mb-10 transition-all duration-1000 ${
// // // // // //             isVisible 
// // // // // //               ? "opacity-100 translate-y-0" 
// // // // // //               : "opacity-0 -translate-y-10"
// // // // // //           }`}
// // // // // //         >
// // // // // //           <div className="inline-flex rounded-lg border border-primary/20 bg-muted/50 p-1 gap-1">
// // // // // //             <Button
// // // // // //               variant={activeCategory === "all" ? "default" : "ghost"}
// // // // // //               size="sm"
// // // // // //               onClick={() => setActiveCategory("all")}
// // // // // //               className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
// // // // // //                 activeCategory === "all" 
// // // // // //                   ? "bg-primary text-primary-foreground shadow-sm" 
// // // // // //                   : "hover:bg-primary/10 text-muted-foreground"
// // // // // //               }`}
// // // // // //             >
// // // // // //               All Projects
// // // // // //               <Badge 
// // // // // //                 variant="secondary" 
// // // // // //                 className="ml-2 bg-primary/20 text-primary text-xs"
// // // // // //               >
// // // // // //                 {projects.length}
// // // // // //               </Badge>
// // // // // //             </Button>
// // // // // //             <Button
// // // // // //               variant={activeCategory === "hardware" ? "default" : "ghost"}
// // // // // //               size="sm"
// // // // // //               onClick={() => setActiveCategory("hardware")}
// // // // // //               className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
// // // // // //                 activeCategory === "hardware" 
// // // // // //                   ? "bg-primary text-primary-foreground shadow-sm" 
// // // // // //                   : "hover:bg-primary/10 text-muted-foreground"
// // // // // //               }`}
// // // // // //             >
// // // // // //               <Cpu size={14} className="mr-1.5" />
// // // // // //               Hardware
// // // // // //               <Badge 
// // // // // //                 variant="secondary" 
// // // // // //                 className="ml-2 bg-primary/20 text-primary text-xs"
// // // // // //               >
// // // // // //                 {projects.filter(p => p.category === "hardware").length}
// // // // // //               </Badge>
// // // // // //             </Button>
// // // // // //             <Button
// // // // // //               variant={activeCategory === "frontend" ? "default" : "ghost"}
// // // // // //               size="sm"
// // // // // //               onClick={() => setActiveCategory("frontend")}
// // // // // //               className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
// // // // // //                 activeCategory === "frontend" 
// // // // // //                   ? "bg-primary text-primary-foreground shadow-sm" 
// // // // // //                   : "hover:bg-primary/10 text-muted-foreground"
// // // // // //               }`}
// // // // // //             >
// // // // // //               <Code size={14} className="mr-1.5" />
// // // // // //               Frontend
// // // // // //               <Badge 
// // // // // //                 variant="secondary" 
// // // // // //                 className="ml-2 bg-primary/20 text-primary text-xs"
// // // // // //               >
// // // // // //                 {projects.filter(p => p.category === "frontend").length}
// // // // // //               </Badge>
// // // // // //             </Button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Projects Grid with fade in */}
// // // // // //         <div 
// // // // // //           ref={projectsRef}
// // // // // //           className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0 transition-all duration-1000 delay-200 ${
// // // // // //             projectsVisible 
// // // // // //               ? "opacity-100 translate-y-0" 
// // // // // //               : "opacity-0 translate-y-10"
// // // // // //           }`}
// // // // // //         >
// // // // // //           {filteredProjects.map((project, index) => (
// // // // // //             <div
// // // // // //               key={project.title}
// // // // // //               className={`w-full px-3 sm:px-0 transition-all duration-700 ${
// // // // // //                 projectsVisible 
// // // // // //                   ? "opacity-100 translate-y-0" 
// // // // // //                   : "opacity-0 translate-y-10"
// // // // // //               }`}
// // // // // //               style={{ transitionDelay: projectsVisible ? `${index * 150}ms` : '0s' }}
// // // // // //             >
// // // // // //               {/* Flip Card Container */}
// // // // // //               <div 
// // // // // //                 className="flip-card w-full h-full"
// // // // // //                 onMouseEnter={(e) => handleCardHover(index, true, e)}
// // // // // //                 onMouseLeave={(e) => handleCardHover(index, false, e)}
// // // // // //                 onClick={(e) => handleCardClick(index, e)}
// // // // // //               >
// // // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // // //                   {/* Front Side */}
// // // // // //                   <div className="flip-card-front">
// // // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all duration-700 transform hover:scale-105 flex flex-col">
// // // // // //                       <CardHeader className="pb-3">
// // // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-3">
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

// // // // // //                       <CardContent className="space-y-3 sm:space-y-4 pb-4 flex-1 flex flex-col">
// // // // // //                         {/* Key Features */}
// // // // // //                         <div className="flex-1">
// // // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // // //                           <ul className="space-y-1.5">
// // // // // //                             {project.features.map((feature, featureIndex) => (
// // // // // //                               <li 
// // // // // //                                 key={featureIndex} 
// // // // // //                                 className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start"
// // // // // //                               >
// // // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // // //                                 {feature}
// // // // // //                               </li>
// // // // // //                             ))}
// // // // // //                           </ul>
// // // // // //                         </div>

// // // // // //                         {/* Technologies */}
// // // // // //                         <div>
// // // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base">Technologies Used</h4>
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
// // // // // //                                   case "react": return "⚛️";
// // // // // //                                   case "translation api": return "🌍";
// // // // // //                                   case "responsive design": return "📱";
// // // // // //                                   case "real-time processing": return "⚡";
// // // // // //                                   case "data visualization": return "📊";
// // // // // //                                   case "ui/ux design": return "🎨";
// // // // // //                                   case "state management": return "🔄";
// // // // // //                                   case "e-commerce ui": return "🛍️";
// // // // // //                                   case "animation": return "✨";
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
// // // // // //                         <div 
// // // // // //                           className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 no-flip-zone" 
// // // // // //                           onMouseEnter={(e) => {
// // // // // //                             e.stopPropagation();
// // // // // //                             if (window.innerWidth >= 1024) {
// // // // // //                               setFlippedCards(prev => ({
// // // // // //                                 ...prev,
// // // // // //                                 [index]: false
// // // // // //                               }));
// // // // // //                             }
// // // // // //                           }}
// // // // // //                         >
// // // // // //                           <Button
// // // // // //                             variant="default"
// // // // // //                             size="sm"
// // // // // //                             className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto"
// // // // // //                             onClick={(e) => {
// // // // // //                               e.stopPropagation();
// // // // // //                               handleViewDetails(project);
// // // // // //                             }}
// // // // // //                           >
// // // // // //                             <FileText size={14} className="mr-1.5" />
// // // // // //                             {project.liveUrl ? "View Live" : "View Details"}
// // // // // //                           </Button>
// // // // // //                           {project.githubUrl && (
// // // // // //                             <Button
// // // // // //                               variant="outline"
// // // // // //                               size="sm"
// // // // // //                               className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9"
// // // // // //                               onClick={(e) => {
// // // // // //                                 e.stopPropagation();
// // // // // //                                 window.open(project.githubUrl, "_blank");
// // // // // //                               }}
// // // // // //                             >
// // // // // //                               <Github size={14} className="mr-1.5" />
// // // // // //                               Code
// // // // // //                             </Button>
// // // // // //                           )}
// // // // // //                         </div>
// // // // // //                       </CardContent>
// // // // // //                     </Card>
// // // // // //                   </div>

// // // // // //                   {/* Back Side */}
// // // // // //                   <div className="flip-card-back">
// // // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-5 flex flex-col">
// // // // // //                       <div className="h-full flex flex-col">
// // // // // //                         {/* Header */}
// // // // // //                         <div className="text-center mb-4 sm:mb-5">
// // // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm">
// // // // // //                             Project Insights
// // // // // //                           </Badge>
// // // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // // // //                             {project.title}
// // // // // //                           </h3>
// // // // // //                         </div>

// // // // // //                         {/* Content */}
// // // // // //                         <div className="space-y-3 sm:space-y-3 flex-1">
// // // // // //                           {/* Challenges */}
// // // // // //                           <div>
// // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // //                               <span className="text-base">🚧</span>
// // // // // //                               Key Challenges
// // // // // //                             </h4>
// // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // // // //                               {project.backContent.challenges}
// // // // // //                             </p>
// // // // // //                           </div>

// // // // // //                           {/* Learnings */}
// // // // // //                           <div>
// // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // //                               <span className="text-base">📚</span>
// // // // // //                               Key Learnings
// // // // // //                             </h4>
// // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // // // //                               {project.backContent.learnings}
// // // // // //                             </p>
// // // // // //                           </div>

// // // // // //                           {/* Impact */}
// // // // // //                           <div>
// // // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // // //                               <span className="text-base">📈</span>
// // // // // //                               Project Impact
// // // // // //                             </h4>
// // // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // // // //                               {project.backContent.impact}
// // // // // //                             </p>
// // // // // //                           </div>
// // // // // //                         </div>

// // // // // //                         {/* Actions */}
// // // // // //                         <div 
// // // // // //                           className="flex flex-col sm:flex-row gap-2.5 pt-2 sm:pt-2 mt-auto no-flip-zone" 
// // // // // //                           onMouseEnter={(e) => {
// // // // // //                             e.stopPropagation();
// // // // // //                             if (window.innerWidth >= 1024) {
// // // // // //                               setFlippedCards(prev => ({
// // // // // //                                 ...prev,
// // // // // //                                 [index]: false
// // // // // //                               }));
// // // // // //                             }
// // // // // //                           }}
// // // // // //                         >
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
// // // // // //                             {project.liveUrl ? "View Live" : "PDF Details"}
// // // // // //                           </Button>
// // // // // //                           {project.githubUrl && (
// // // // // //                             <Button
// // // // // //                               variant="outline"
// // // // // //                               size="sm"
// // // // // //                               className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm"
// // // // // //                               onClick={(e) => {
// // // // // //                                 e.stopPropagation();
// // // // // //                                 window.open(project.githubUrl, "_blank");
// // // // // //                               }}
// // // // // //                             >
// // // // // //                               <Github size={14} className="mr-1.5" />
// // // // // //                               Source Code
// // // // // //                             </Button>
// // // // // //                           )}
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </Card>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* Call to Action with fade in */}
// // // // // //         <div 
// // // // // //           ref={ctaRef}
// // // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${
// // // // // //             ctaVisible 
// // // // // //               ? "opacity-100 translate-y-0" 
// // // // // //               : "opacity-0 translate-y-10"
// // // // // //           }`}
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
// // // // // //         /* Flip Card Styles */
// // // // // //         .flip-card {
// // // // // //           perspective: 1000px;
// // // // // //           width: 100%;
// // // // // //           cursor: pointer;
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

// // // // // //         /* No-flip zone for buttons */
// // // // // //         .no-flip-zone {
// // // // // //           pointer-events: auto;
// // // // // //         }

// // // // // //         /* Mobile responsiveness */
// // // // // //         @media (max-width: 640px) {
// // // // // //           .flip-card {
// // // // // //             min-height: 720px;
// // // // // //           }
          
// // // // // //           .flip-card-inner {
// // // // // //             min-height: 720px;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // // //           .flip-card {
// // // // // //             min-height: 540px;
// // // // // //           }
          
// // // // // //           .flip-card-inner {
// // // // // //             min-height: 540px;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (min-width: 1024px) {
// // // // // //           .flip-card {
// // // // // //             min-height: 560px;
// // // // // //           }
          
// // // // // //           .flip-card-inner {
// // // // // //             min-height: 560px;
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
// // // // // import { Calendar, Github, FileText, Cpu, Code } from "lucide-react";
// // // // // import { useEffect, useRef, useState } from "react";

// // // // // const Projects = () => {
// // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // //   const [projectsVisible, setProjectsVisible] = useState(false);
// // // // //   const [ctaVisible, setCtaVisible] = useState(false);
// // // // //   const [flippedCards, setFlippedCards] = useState({});
// // // // //   const [activeCategory, setActiveCategory] = useState("all");
// // // // //   const sectionRef = useRef(null);
// // // // //   const projectsRef = useRef(null);
// // // // //   const ctaRef = useRef(null);

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
// // // // //       category: "hardware",
// // // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // // //       githubUrl: "https://github.com/Thomasjose-tech/Smart-Pet-Feeder",
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
// // // // //       category: "hardware",
// // // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // // //       githubUrl: "https://github.com/Thomasjose-tech",
// // // // //       backContent: {
// // // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // // //       }
// // // // //     },
// // // // //     {
// // // // //       title: "Cross-Language Craft",
// // // // //       period: "2024",
// // // // //       description: "A sophisticated real-time language translation application enabling seamless communication across multiple languages.",
// // // // //       features: [
// // // // //         "Implemented real-time translation with support for multiple languages",
// // // // //         "Created intuitive UI for instant language conversion and text input",
// // // // //         "Integrated modern translation APIs for accurate results",
// // // // //         "Designed responsive interface for desktop and mobile devices"
// // // // //       ],
// // // // //       technologies: ["React", "Translation API", "Responsive Design", "Real-time Processing"],
// // // // //       type: "Frontend Development",
// // // // //       category: "frontend",
// // // // //       liveUrl: "https://cross-language-craft-26011.vercel.app/",
// // // // //       backContent: {
// // // // //         challenges: "Ensuring accurate translations while maintaining fast response times and handling various language character sets.",
// // // // //         learnings: "Mastered API integration, state management in React, and creating fluid user experiences for real-time applications.",
// // // // //         impact: "Enabled seamless cross-language communication with instant translation capabilities and user-friendly interface."
// // // // //       }
// // // // //     },
// // // // //     {
// // // // //       title: "Financuz Nexus",
// // // // //       period: "2024",
// // // // //       description: "A comprehensive financial management platform providing tools for budget tracking, expense analysis, and financial planning.",
// // // // //       features: [
// // // // //         "Built interactive dashboard for financial data visualization",
// // // // //         "Implemented expense tracking and categorization system",
// // // // //         "Created budget planning and analysis tools",
// // // // //         "Designed modern, intuitive interface for financial management"
// // // // //       ],
// // // // //       technologies: ["React", "Data Visualization", "UI/UX Design", "State Management"],
// // // // //       type: "Frontend Development",
// // // // //       category: "frontend",
// // // // //       liveUrl: "https://financuz-nexus-01.vercel.app/",
// // // // //       backContent: {
// // // // //         challenges: "Creating an intuitive financial interface that simplifies complex data while maintaining security and performance.",
// // // // //         learnings: "Advanced React patterns, data visualization techniques, and user-centric design for financial applications.",
// // // // //         impact: "Simplified personal finance management with clear visualizations and easy-to-use tracking features."
// // // // //       }
// // // // //     },
// // // // //     {
// // // // //       title: "Chronos - Luxury Timepieces",
// // // // //       period: "2024",
// // // // //       description: "An elegant e-commerce platform showcasing premium luxury watches with sophisticated design and seamless shopping experience.",
// // // // //       features: [
// // // // //         "Designed premium product showcase with high-quality imagery",
// // // // //         "Implemented smooth animations and interactive elements",
// // // // //         "Created responsive layout optimized for luxury brand presentation",
// // // // //         "Built intuitive navigation and product filtering system"
// // // // //       ],
// // // // //       technologies: ["React", "E-commerce UI", "Animation", "Responsive Design"],
// // // // //       type: "Frontend Development",
// // // // //       category: "frontend",
// // // // //       liveUrl: "https://chronos-luxury-timepieces.vercel.app/",
// // // // //       backContent: {
// // // // //         challenges: "Balancing aesthetic appeal with performance while creating a premium feel that matches luxury brand standards.",
// // // // //         learnings: "Advanced CSS techniques, animation libraries, and creating high-end e-commerce user experiences.",
// // // // //         impact: "Delivered a sophisticated platform that elevates the luxury shopping experience with elegant design and smooth interactions."
// // // // //       }
// // // // //     }
// // // // //   ];

// // // // //   const filteredProjects = activeCategory === "all" 
// // // // //     ? projects 
// // // // //     : projects.filter(p => p.category === activeCategory);

// // // // //   // Intersection Observer for header section
// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((entry) => {
// // // // //           if (entry.isIntersecting) {
// // // // //             setIsVisible(true);
// // // // //           } else {
// // // // //             setIsVisible(false);
// // // // //           }
// // // // //         });
// // // // //       },
// // // // //       { 
// // // // //         threshold: 0.1,
// // // // //         rootMargin: "0px"
// // // // //       }
// // // // //     );

// // // // //     if (sectionRef.current) {
// // // // //       observer.observe(sectionRef.current);
// // // // //     }

// // // // //     return () => {
// // // // //       if (sectionRef.current) {
// // // // //         observer.unobserve(sectionRef.current);
// // // // //       }
// // // // //     };
// // // // //   }, []);

// // // // //   // Intersection Observer for projects grid
// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((entry) => {
// // // // //           if (entry.isIntersecting) {
// // // // //             setProjectsVisible(true);
// // // // //           } else {
// // // // //             setProjectsVisible(false);
// // // // //           }
// // // // //         });
// // // // //       },
// // // // //       { 
// // // // //         threshold: 0.1,
// // // // //         rootMargin: "0px"
// // // // //       }
// // // // //     );

// // // // //     if (projectsRef.current) {
// // // // //       observer.observe(projectsRef.current);
// // // // //     }

// // // // //     return () => {
// // // // //       if (projectsRef.current) {
// // // // //         observer.unobserve(projectsRef.current);
// // // // //       }
// // // // //     };
// // // // //   }, []);

// // // // //   // Intersection Observer for CTA section
// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((entry) => {
// // // // //           if (entry.isIntersecting) {
// // // // //             setCtaVisible(true);
// // // // //           } else {
// // // // //             setCtaVisible(false);
// // // // //           }
// // // // //         });
// // // // //       },
// // // // //       { 
// // // // //         threshold: 0.1,
// // // // //         rootMargin: "0px"
// // // // //       }
// // // // //     );

// // // // //     if (ctaRef.current) {
// // // // //       observer.observe(ctaRef.current);
// // // // //     }

// // // // //     return () => {
// // // // //       if (ctaRef.current) {
// // // // //         observer.unobserve(ctaRef.current);
// // // // //       }
// // // // //     };
// // // // //   }, []);

// // // // //   // Reset flipped cards when category changes
// // // // //   useEffect(() => {
// // // // //     setFlippedCards({});
// // // // //   }, [activeCategory]);

// // // // //   const handleViewDetails = (project) => {
// // // // //     if (project.liveUrl) {
// // // // //       window.open(project.liveUrl, "_blank");
// // // // //     } else if (project.pdfUrl) {
// // // // //       window.open(project.pdfUrl, "_blank");
// // // // //     } else {
// // // // //       alert(`Details for ${project.title} will be available soon!`);
// // // // //     }
// // // // //   };

// // // // //   const handleCardHover = (index, isHovering, e) => {
// // // // //     const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
// // // // //     if (window.innerWidth >= 1024 && !isButtonArea) {
// // // // //       setFlippedCards(prev => ({
// // // // //         ...prev,
// // // // //         [index]: isHovering
// // // // //       }));
// // // // //     }
// // // // //   };

// // // // //   const handleCardClick = (index, e) => {
// // // // //     if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
// // // // //       return;
// // // // //     }
    
// // // // //     setFlippedCards(prev => ({
// // // // //       ...prev,
// // // // //       [index]: !prev[index]
// // // // //     }));
// // // // //   };

// // // // //   return (
// // // // //     <section 
// // // // //       id="projects" 
// // // // //       ref={sectionRef}
// // // // //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // // //     >
// // // // //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
// // // // //         {/* Header Section with fade in */}
// // // // //         <div 
// // // // //           className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
// // // // //             isVisible 
// // // // //               ? "opacity-100 translate-y-0" 
// // // // //               : "opacity-0 -translate-y-10"
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

// // // // //         {/* Category Filter */}
// // // // //         <div 
// // // // //           className={`flex justify-center mb-8 sm:mb-10 transition-all duration-1000 ${
// // // // //             isVisible 
// // // // //               ? "opacity-100 translate-y-0" 
// // // // //               : "opacity-0 -translate-y-10"
// // // // //           }`}
// // // // //         >
// // // // //           <div className="inline-flex rounded-lg border border-primary/20 bg-muted/50 p-1 gap-1">
// // // // //             <Button
// // // // //               variant={activeCategory === "all" ? "default" : "ghost"}
// // // // //               size="sm"
// // // // //               onClick={() => setActiveCategory("all")}
// // // // //               className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
// // // // //                 activeCategory === "all" 
// // // // //                   ? "bg-primary text-primary-foreground shadow-sm" 
// // // // //                   : "hover:bg-primary/10 text-muted-foreground"
// // // // //               }`}
// // // // //             >
// // // // //               All Projects
// // // // //               <Badge 
// // // // //                 variant="secondary" 
// // // // //                 className="ml-2 bg-primary/20 text-primary text-xs"
// // // // //               >
// // // // //                 {projects.length}
// // // // //               </Badge>
// // // // //             </Button>
// // // // //             <Button
// // // // //               variant={activeCategory === "hardware" ? "default" : "ghost"}
// // // // //               size="sm"
// // // // //               onClick={() => setActiveCategory("hardware")}
// // // // //               className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
// // // // //                 activeCategory === "hardware" 
// // // // //                   ? "bg-primary text-primary-foreground shadow-sm" 
// // // // //                   : "hover:bg-primary/10 text-muted-foreground"
// // // // //               }`}
// // // // //             >
// // // // //               <Cpu size={14} className="mr-1.5" />
// // // // //               Hardware
// // // // //               <Badge 
// // // // //                 variant="secondary" 
// // // // //                 className="ml-2 bg-primary/20 text-primary text-xs"
// // // // //               >
// // // // //                 {projects.filter(p => p.category === "hardware").length}
// // // // //               </Badge>
// // // // //             </Button>
// // // // //             <Button
// // // // //               variant={activeCategory === "frontend" ? "default" : "ghost"}
// // // // //               size="sm"
// // // // //               onClick={() => setActiveCategory("frontend")}
// // // // //               className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
// // // // //                 activeCategory === "frontend" 
// // // // //                   ? "bg-primary text-primary-foreground shadow-sm" 
// // // // //                   : "hover:bg-primary/10 text-muted-foreground"
// // // // //               }`}
// // // // //             >
// // // // //               <Code size={14} className="mr-1.5" />
// // // // //               Frontend
// // // // //               <Badge 
// // // // //                 variant="secondary" 
// // // // //                 className="ml-2 bg-primary/20 text-primary text-xs"
// // // // //               >
// // // // //                 {projects.filter(p => p.category === "frontend").length}
// // // // //               </Badge>
// // // // //             </Button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Projects Grid with fade in */}
// // // // //         <div 
// // // // //           ref={projectsRef}
// // // // //           className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0 transition-all duration-1000 delay-200 ${
// // // // //             projectsVisible 
// // // // //               ? "opacity-100 translate-y-0" 
// // // // //               : "opacity-0 translate-y-10"
// // // // //           }`}
// // // // //         >
// // // // //           {filteredProjects.map((project, index) => (
// // // // //             <div
// // // // //               key={project.title}
// // // // //               className={`w-full px-3 sm:px-0 transition-all duration-700 ${
// // // // //                 projectsVisible 
// // // // //                   ? "opacity-100 translate-y-0" 
// // // // //                   : "opacity-0 translate-y-10"
// // // // //               }`}
// // // // //               style={{ transitionDelay: projectsVisible ? `${index * 150}ms` : '0s' }}
// // // // //             >
// // // // //               {/* Flip Card Container */}
// // // // //               <div 
// // // // //                 className="flip-card w-full h-full"
// // // // //                 onMouseEnter={(e) => handleCardHover(index, true, e)}
// // // // //                 onMouseLeave={(e) => handleCardHover(index, false, e)}
// // // // //                 onClick={(e) => handleCardClick(index, e)}
// // // // //               >
// // // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // // //                   {/* Front Side */}
// // // // //                   <div className="flip-card-front">
// // // // //                     <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all duration-700 transform hover:scale-105 flex flex-col">
// // // // //                       <CardHeader className="pb-3">
// // // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-3">
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

// // // // //                       <CardContent className="space-y-3 sm:space-y-4 pb-4 flex-1 flex flex-col">
// // // // //                         {/* Key Features */}
// // // // //                         <div className="flex-1">
// // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // // //                           <ul className="space-y-1.5">
// // // // //                             {project.features.map((feature, featureIndex) => (
// // // // //                               <li 
// // // // //                                 key={featureIndex} 
// // // // //                                 className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start"
// // // // //                               >
// // // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // // //                                 {feature}
// // // // //                               </li>
// // // // //                             ))}
// // // // //                           </ul>
// // // // //                         </div>

// // // // //                         {/* Technologies */}
// // // // //                         <div>
// // // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base">Technologies Used</h4>
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
// // // // //                                   case "react": return "⚛️";
// // // // //                                   case "translation api": return "🌍";
// // // // //                                   case "responsive design": return "📱";
// // // // //                                   case "real-time processing": return "⚡";
// // // // //                                   case "data visualization": return "📊";
// // // // //                                   case "ui/ux design": return "🎨";
// // // // //                                   case "state management": return "🔄";
// // // // //                                   case "e-commerce ui": return "🛍️";
// // // // //                                   case "animation": return "✨";
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

// // // // //                         {/* Action Buttons in Separate Box */}
// // // // //                         <div 
// // // // //                           className="border-2 border-primary/20 rounded-lg p-3 bg-gradient-to-br from-primary/5 to-transparent shadow-sm no-flip-zone" 
// // // // //                           onMouseEnter={(e) => {
// // // // //                             e.stopPropagation();
// // // // //                             if (window.innerWidth >= 1024) {
// // // // //                               setFlippedCards(prev => ({
// // // // //                                 ...prev,
// // // // //                                 [index]: false
// // // // //                               }));
// // // // //                             }
// // // // //                           }}
// // // // //                         >
// // // // //                           <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
// // // // //                             <Button
// // // // //                               variant="default"
// // // // //                               size="sm"
// // // // //                               className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto shadow-md"
// // // // //                               onClick={(e) => {
// // // // //                                 e.stopPropagation();
// // // // //                                 handleViewDetails(project);
// // // // //                               }}
// // // // //                             >
// // // // //                               <FileText size={14} className="mr-1.5" />
// // // // //                               {project.liveUrl ? "View Live" : "View Details"}
// // // // //                             </Button>
// // // // //                             {project.githubUrl && (
// // // // //                               <Button
// // // // //                                 variant="outline"
// // // // //                                 size="sm"
// // // // //                                 className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9"
// // // // //                                 onClick={(e) => {
// // // // //                                   e.stopPropagation();
// // // // //                                   window.open(project.githubUrl, "_blank");
// // // // //                                 }}
// // // // //                               >
// // // // //                                 <Github size={14} className="mr-1.5" />
// // // // //                                 Code
// // // // //                               </Button>
// // // // //                             )}
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </CardContent>
// // // // //                     </Card>
// // // // //                   </div>

// // // // //                   {/* Back Side */}
// // // // //                   <div className="flip-card-back">
// // // // //                     <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-5 flex flex-col">
// // // // //                       <div className="h-full flex flex-col">
// // // // //                         {/* Header */}
// // // // //                         <div className="text-center mb-4 sm:mb-5">
// // // // //                           <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm">
// // // // //                             Project Insights
// // // // //                           </Badge>
// // // // //                           <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // // //                             {project.title}
// // // // //                           </h3>
// // // // //                         </div>

// // // // //                         {/* Content */}
// // // // //                         <div className="space-y-3 sm:space-y-3 flex-1">
// // // // //                           {/* Challenges */}
// // // // //                           <div>
// // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // //                               <span className="text-base">🚧</span>
// // // // //                               Key Challenges
// // // // //                             </h4>
// // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // // //                               {project.backContent.challenges}
// // // // //                             </p>
// // // // //                           </div>

// // // // //                           {/* Learnings */}
// // // // //                           <div>
// // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // //                               <span className="text-base">📚</span>
// // // // //                               Key Learnings
// // // // //                             </h4>
// // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // // //                               {project.backContent.learnings}
// // // // //                             </p>
// // // // //                           </div>

// // // // //                           {/* Impact */}
// // // // //                           <div>
// // // // //                             <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // // //                               <span className="text-base">📈</span>
// // // // //                               Project Impact
// // // // //                             </h4>
// // // // //                             <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // // //                               {project.backContent.impact}
// // // // //                             </p>
// // // // //                           </div>
// // // // //                         </div>

// // // // //                         {/* Actions in Separate Box */}
// // // // //                         <div 
// // // // //                           className="border-2 border-primary/30 rounded-lg p-3 bg-gradient-to-br from-white/50 to-transparent shadow-md mt-auto no-flip-zone" 
// // // // //                           onMouseEnter={(e) => {
// // // // //                             e.stopPropagation();
// // // // //                             if (window.innerWidth >= 1024) {
// // // // //                               setFlippedCards(prev => ({
// // // // //                                 ...prev,
// // // // //                                 [index]: false
// // // // //                               }));
// // // // //                             }
// // // // //                           }}
// // // // //                         >
// // // // //                           <div className="flex flex-col sm:flex-row gap-2.5">
// // // // //                             <Button
// // // // //                               variant="default"
// // // // //                               size="sm"
// // // // //                               className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9 shadow-md"
// // // // //                               onClick={(e) => {
// // // // //                                 e.stopPropagation();
// // // // //                                 handleViewDetails(project);
// // // // //                               }}
// // // // //                             >
// // // // //                               <FileText size={14} className="mr-1.5" />
// // // // //                               {project.liveUrl ? "View Live" : "PDF Details"}
// // // // //                             </Button>
// // // // //                             {project.githubUrl && (
// // // // //                               <Button
// // // // //                                 variant="outline"
// // // // //                                 size="sm"
// // // // //                                 className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm"
// // // // //                                 onClick={(e) => {
// // // // //                                   e.stopPropagation();
// // // // //                                   window.open(project.githubUrl, "_blank");
// // // // //                                 }}
// // // // //                               >
// // // // //                                 <Github size={14} className="mr-1.5" />
// // // // //                                 Source Code
// // // // //                               </Button>
// // // // //                             )}
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </Card>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Call to Action with fade in */}
// // // // //         <div 
// // // // //           ref={ctaRef}
// // // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${
// // // // //             ctaVisible 
// // // // //               ? "opacity-100 translate-y-0" 
// // // // //               : "opacity-0 translate-y-10"
// // // // //           }`}
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
// // // // //         /* Flip Card Styles */
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

// // // // //         /* No-flip zone for buttons */
// // // // //         .no-flip-zone {
// // // // //           pointer-events: auto;
// // // // //         }

// // // // //         /* Mobile responsiveness */
// // // // //         @media (max-width: 640px) {
// // // // //           .flip-card {
// // // // //             min-height: 750px;
// // // // //           }
          
// // // // //           .flip-card-inner {
// // // // //             min-height: 750px;
// // // // //           }
// // // // //         }

// // // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // // //           .flip-card {
// // // // //             min-height: 570px;
// // // // //           }
          
// // // // //           .flip-card-inner {
// // // // //             min-height: 570px;
// // // // //           }
// // // // //         }

// // // // //         @media (min-width: 1024px) {
// // // // //           .flip-card {
// // // // //             min-height: 590px;
// // // // //           }
          
// // // // //           .flip-card-inner {
// // // // //             min-height: 590px;
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
// // // // import { Calendar, Github, FileText, Cpu, Code } from "lucide-react";
// // // // import { useEffect, useRef, useState } from "react";

// // // // const Projects = () => {
// // // //   const [isVisible, setIsVisible] = useState(false);
// // // //   const [projectsVisible, setProjectsVisible] = useState(false);
// // // //   const [ctaVisible, setCtaVisible] = useState(false);
// // // //   const [flippedCards, setFlippedCards] = useState({});
// // // //   const [activeCategory, setActiveCategory] = useState("all");
// // // //   const sectionRef = useRef(null);
// // // //   const projectsRef = useRef(null);
// // // //   const ctaRef = useRef(null);

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
// // // //       category: "hardware",
// // // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // // //       githubUrl: "https://github.com/Thomasjose-tech/Smart-Pet-Feeder",
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
// // // //       category: "hardware",
// // // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // // //       githubUrl: "https://github.com/Thomasjose-tech",
// // // //       backContent: {
// // // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // // //       }
// // // //     },
// // // //     {
// // // //       title: "Cross-Language Craft",
// // // //       period: "2024",
// // // //       description: "A sophisticated real-time language translation application enabling seamless communication across multiple languages.",
// // // //       features: [
// // // //         "Implemented real-time translation with support for multiple languages",
// // // //         "Created intuitive UI for instant language conversion and text input",
// // // //         "Integrated modern translation APIs for accurate results",
// // // //         "Designed responsive interface for desktop and mobile devices"
// // // //       ],
// // // //       technologies: ["React", "Translation API", "Responsive Design", "Real-time Processing"],
// // // //       type: "Frontend Development",
// // // //       category: "frontend",
// // // //       liveUrl: "https://cross-language-craft-26011.vercel.app/",
// // // //       backContent: {
// // // //         challenges: "Ensuring accurate translations while maintaining fast response times and handling various language character sets.",
// // // //         learnings: "Mastered API integration, state management in React, and creating fluid user experiences for real-time applications.",
// // // //         impact: "Enabled seamless cross-language communication with instant translation capabilities and user-friendly interface."
// // // //       }
// // // //     },
// // // //     {
// // // //       title: "Financuz Nexus",
// // // //       period: "2024",
// // // //       description: "A comprehensive financial management platform providing tools for budget tracking, expense analysis, and financial planning.",
// // // //       features: [
// // // //         "Built interactive dashboard for financial data visualization",
// // // //         "Implemented expense tracking and categorization system",
// // // //         "Created budget planning and analysis tools",
// // // //         "Designed modern, intuitive interface for financial management"
// // // //       ],
// // // //       technologies: ["React", "Data Visualization", "UI/UX Design", "State Management"],
// // // //       type: "Frontend Development",
// // // //       category: "frontend",
// // // //       liveUrl: "https://financuz-nexus-01.vercel.app/",
// // // //       backContent: {
// // // //         challenges: "Creating an intuitive financial interface that simplifies complex data while maintaining security and performance.",
// // // //         learnings: "Advanced React patterns, data visualization techniques, and user-centric design for financial applications.",
// // // //         impact: "Simplified personal finance management with clear visualizations and easy-to-use tracking features."
// // // //       }
// // // //     },
// // // //     {
// // // //       title: "Chronos - Luxury Timepieces",
// // // //       period: "2024",
// // // //       description: "An elegant e-commerce platform showcasing premium luxury watches with sophisticated design and seamless shopping experience.",
// // // //       features: [
// // // //         "Designed premium product showcase with high-quality imagery",
// // // //         "Implemented smooth animations and interactive elements",
// // // //         "Created responsive layout optimized for luxury brand presentation",
// // // //         "Built intuitive navigation and product filtering system"
// // // //       ],
// // // //       technologies: ["React", "E-commerce UI", "Animation", "Responsive Design"],
// // // //       type: "Frontend Development",
// // // //       category: "frontend",
// // // //       liveUrl: "https://chronos-luxury-timepieces.vercel.app/",
// // // //       backContent: {
// // // //         challenges: "Balancing aesthetic appeal with performance while creating a premium feel that matches luxury brand standards.",
// // // //         learnings: "Advanced CSS techniques, animation libraries, and creating high-end e-commerce user experiences.",
// // // //         impact: "Delivered a sophisticated platform that elevates the luxury shopping experience with elegant design and smooth interactions."
// // // //       }
// // // //     }
// // // //   ];

// // // //   const filteredProjects = activeCategory === "all" 
// // // //     ? projects 
// // // //     : projects.filter(p => p.category === activeCategory);

// // // //   // Intersection Observer for header section
// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) {
// // // //             setIsVisible(true);
// // // //           } else {
// // // //             setIsVisible(false);
// // // //           }
// // // //         });
// // // //       },
// // // //       { 
// // // //         threshold: 0.1,
// // // //         rootMargin: "0px"
// // // //       }
// // // //     );

// // // //     if (sectionRef.current) {
// // // //       observer.observe(sectionRef.current);
// // // //     }

// // // //     return () => {
// // // //       if (sectionRef.current) {
// // // //         observer.unobserve(sectionRef.current);
// // // //       }
// // // //     };
// // // //   }, []);

// // // //   // Intersection Observer for projects grid
// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) {
// // // //             setProjectsVisible(true);
// // // //           } else {
// // // //             setProjectsVisible(false);
// // // //           }
// // // //         });
// // // //       },
// // // //       { 
// // // //         threshold: 0.1,
// // // //         rootMargin: "0px"
// // // //       }
// // // //     );

// // // //     if (projectsRef.current) {
// // // //       observer.observe(projectsRef.current);
// // // //     }

// // // //     return () => {
// // // //       if (projectsRef.current) {
// // // //         observer.unobserve(projectsRef.current);
// // // //       }
// // // //     };
// // // //   }, []);

// // // //   // Intersection Observer for CTA section
// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) {
// // // //             setCtaVisible(true);
// // // //           } else {
// // // //             setCtaVisible(false);
// // // //           }
// // // //         });
// // // //       },
// // // //       { 
// // // //         threshold: 0.1,
// // // //         rootMargin: "0px"
// // // //       }
// // // //     );

// // // //     if (ctaRef.current) {
// // // //       observer.observe(ctaRef.current);
// // // //     }

// // // //     return () => {
// // // //       if (ctaRef.current) {
// // // //         observer.unobserve(ctaRef.current);
// // // //       }
// // // //     };
// // // //   }, []);

// // // //   // Reset flipped cards when category changes
// // // //   useEffect(() => {
// // // //     setFlippedCards({});
// // // //   }, [activeCategory]);

// // // //   const handleViewDetails = (project) => {
// // // //     if (project.liveUrl) {
// // // //       window.open(project.liveUrl, "_blank");
// // // //     } else if (project.pdfUrl) {
// // // //       window.open(project.pdfUrl, "_blank");
// // // //     } else {
// // // //       alert(`Details for ${project.title} will be available soon!`);
// // // //     }
// // // //   };

// // // //   const handleCardHover = (index, isHovering, e) => {
// // // //     const isButtonArea = e?.target.closest('button') || e?.target.closest('.no-flip-zone');
    
// // // //     if (window.innerWidth >= 1024 && !isButtonArea) {
// // // //       setFlippedCards(prev => ({
// // // //         ...prev,
// // // //         [index]: isHovering
// // // //       }));
// // // //     }
// // // //   };

// // // //   const handleCardClick = (index, e) => {
// // // //     if (e?.target.closest('button') || e?.target.closest('.no-flip-zone')) {
// // // //       return;
// // // //     }
    
// // // //     setFlippedCards(prev => ({
// // // //       ...prev,
// // // //       [index]: !prev[index]
// // // //     }));
// // // //   };

// // // //   return (
// // // //     <section 
// // // //       id="projects" 
// // // //       ref={sectionRef}
// // // //       className="py-12 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
// // // //     >
// // // //       <div className="container mx-auto max-w-7xl px-3 sm:px-0">
// // // //         {/* Header Section with fade in */}
// // // //         <div 
// // // //           className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
// // // //             isVisible 
// // // //               ? "opacity-100 translate-y-0" 
// // // //               : "opacity-0 -translate-y-10"
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

// // // //         {/* Category Filter */}
// // // //         <div 
// // // //           className={`flex justify-center mb-8 sm:mb-10 transition-all duration-1000 ${
// // // //             isVisible 
// // // //               ? "opacity-100 translate-y-0" 
// // // //               : "opacity-0 -translate-y-10"
// // // //           }`}
// // // //         >
// // // //           <div className="inline-flex rounded-lg border border-primary/20 bg-muted/50 p-1 gap-1">
// // // //             <Button
// // // //               variant={activeCategory === "all" ? "default" : "ghost"}
// // // //               size="sm"
// // // //               onClick={() => setActiveCategory("all")}
// // // //               className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
// // // //                 activeCategory === "all" 
// // // //                   ? "bg-primary text-primary-foreground shadow-sm" 
// // // //                   : "hover:bg-primary/10 text-muted-foreground"
// // // //               }`}
// // // //             >
// // // //               All Projects
// // // //               <Badge 
// // // //                 variant="secondary" 
// // // //                 className="ml-2 bg-primary/20 text-primary text-xs"
// // // //               >
// // // //                 {projects.length}
// // // //               </Badge>
// // // //             </Button>
// // // //             <Button
// // // //               variant={activeCategory === "hardware" ? "default" : "ghost"}
// // // //               size="sm"
// // // //               onClick={() => setActiveCategory("hardware")}
// // // //               className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
// // // //                 activeCategory === "hardware" 
// // // //                   ? "bg-primary text-primary-foreground shadow-sm" 
// // // //                   : "hover:bg-primary/10 text-muted-foreground"
// // // //               }`}
// // // //             >
// // // //               <Cpu size={14} className="mr-1.5" />
// // // //               Hardware
// // // //               <Badge 
// // // //                 variant="secondary" 
// // // //                 className="ml-2 bg-primary/20 text-primary text-xs"
// // // //               >
// // // //                 {projects.filter(p => p.category === "hardware").length}
// // // //               </Badge>
// // // //             </Button>
// // // //             <Button
// // // //               variant={activeCategory === "frontend" ? "default" : "ghost"}
// // // //               size="sm"
// // // //               onClick={() => setActiveCategory("frontend")}
// // // //               className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
// // // //                 activeCategory === "frontend" 
// // // //                   ? "bg-primary text-primary-foreground shadow-sm" 
// // // //                   : "hover:bg-primary/10 text-muted-foreground"
// // // //               }`}
// // // //             >
// // // //               <Code size={14} className="mr-1.5" />
// // // //               Frontend
// // // //               <Badge 
// // // //                 variant="secondary" 
// // // //                 className="ml-2 bg-primary/20 text-primary text-xs"
// // // //               >
// // // //                 {projects.filter(p => p.category === "frontend").length}
// // // //               </Badge>
// // // //             </Button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Projects Grid with fade in */}
// // // //         <div 
// // // //           ref={projectsRef}
// // // //           className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mx-auto px-0 transition-all duration-1000 delay-200 ${
// // // //             projectsVisible 
// // // //               ? "opacity-100 translate-y-0" 
// // // //               : "opacity-0 translate-y-10"
// // // //           }`}
// // // //         >
// // // //           {filteredProjects.map((project, index) => (
// // // //             <div
// // // //               key={project.title}
// // // //               className={`w-full px-3 sm:px-0 transition-all duration-700 ${
// // // //                 projectsVisible 
// // // //                   ? "opacity-100 translate-y-0" 
// // // //                   : "opacity-0 translate-y-10"
// // // //               }`}
// // // //               style={{ transitionDelay: projectsVisible ? `${index * 150}ms` : '0s' }}
// // // //             >
// // // //               {/* Flip Card Container */}
// // // //               <div 
// // // //                 className="flip-card w-full h-full"
// // // //                 onMouseEnter={(e) => handleCardHover(index, true, e)}
// // // //                 onMouseLeave={(e) => handleCardHover(index, false, e)}
// // // //                 onClick={(e) => handleCardClick(index, e)}
// // // //               >
// // // //                 <div className={`flip-card-inner ${flippedCards[index] ? 'flip-card-flipped' : ''}`}>
                  
// // // //                   {/* Front Side */}
// // // //                   <div className="flip-card-front">
// // // //                     <div className="relative h-full pb-20">
// // // //                       <Card className="h-full bg-gradient-card shadow-elegant border-2 border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all duration-700 transform hover:scale-105 flex flex-col">
// // // //                         <CardHeader className="pb-3">
// // // //                         <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-3">
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

// // // //                       <CardContent className="space-y-3 sm:space-y-4 pb-4 flex-1 flex flex-col">
// // // //                         {/* Key Features */}
// // // //                         <div className="flex-1">
// // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base">Key Features & Achievements</h4>
// // // //                           <ul className="space-y-1.5">
// // // //                             {project.features.map((feature, featureIndex) => (
// // // //                               <li 
// // // //                                 key={featureIndex} 
// // // //                                 className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start"
// // // //                               >
// // // //                                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
// // // //                                 {feature}
// // // //                               </li>
// // // //                             ))}
// // // //                           </ul>
// // // //                         </div>

// // // //                         {/* Technologies */}
// // // //                         <div>
// // // //                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-primary text-sm sm:text-base">Technologies Used</h4>
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
// // // //                                   case "react": return "⚛️";
// // // //                                   case "translation api": return "🌍";
// // // //                                   case "responsive design": return "📱";
// // // //                                   case "real-time processing": return "⚡";
// // // //                                   case "data visualization": return "📊";
// // // //                                   case "ui/ux design": return "🎨";
// // // //                                   case "state management": return "🔄";
// // // //                                   case "e-commerce ui": return "🛍️";
// // // //                                   case "animation": return "✨";
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
// // // //                       </CardContent>
// // // //                     </Card>

// // // //                     {/* Action Buttons Outside Main Card */}
// // // //                     <div 
// // // //                       className="absolute bottom-0 left-0 right-0 border-2 border-primary/20 rounded-lg p-3 bg-white dark:bg-gray-900 shadow-lg no-flip-zone mx-3 sm:mx-0" 
// // // //                       onMouseEnter={(e) => {
// // // //                         e.stopPropagation();
// // // //                         if (window.innerWidth >= 1024) {
// // // //                           setFlippedCards(prev => ({
// // // //                             ...prev,
// // // //                             [index]: false
// // // //                           }));
// // // //                         }
// // // //                       }}
// // // //                     >
// // // //                       <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
// // // //                         <Button
// // // //                           variant="default"
// // // //                           size="sm"
// // // //                           className="bg-primary hover:bg-primary/90 text-xs h-9 sm:h-9 px-3 sm:px-4 w-full sm:w-auto shadow-md"
// // // //                           onClick={(e) => {
// // // //                             e.stopPropagation();
// // // //                             handleViewDetails(project);
// // // //                           }}
// // // //                         >
// // // //                           <FileText size={14} className="mr-1.5" />
// // // //                           {project.liveUrl ? "View Live" : "View Details"}
// // // //                         </Button>
// // // //                         {project.githubUrl && (
// // // //                           <Button
// // // //                             variant="outline"
// // // //                             size="sm"
// // // //                             className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-9 sm:h-9"
// // // //                             onClick={(e) => {
// // // //                               e.stopPropagation();
// // // //                               window.open(project.githubUrl, "_blank");
// // // //                             }}
// // // //                           >
// // // //                             <Github size={14} className="mr-1.5" />
// // // //                             Code
// // // //                           </Button>
// // // //                         )}
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                   {/* Back Side */}
// // // //                   <div className="flip-card-back">
// // // //                     <div className="relative h-full pb-20">
// // // //                       <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 p-4 sm:p-5 flex flex-col">
// // // //                         <div className="h-full flex flex-col">
// // // //                           {/* Header */}
// // // //                           <div className="text-center mb-4 sm:mb-5">
// // // //                             <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs sm:text-sm">
// // // //                               Project Insights
// // // //                             </Badge>
// // // //                             <h3 className="text-lg sm:text-xl font-bold text-primary">
// // // //                               {project.title}
// // // //                             </h3>
// // // //                           </div>

// // // //                           {/* Content */}
// // // //                           <div className="space-y-3 sm:space-y-3 flex-1">
// // // //                             {/* Challenges */}
// // // //                             <div>
// // // //                               <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // //                                 <span className="text-base">🚧</span>
// // // //                                 Key Challenges
// // // //                               </h4>
// // // //                               <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // //                                 {project.backContent.challenges}
// // // //                               </p>
// // // //                             </div>

// // // //                             {/* Learnings */}
// // // //                             <div>
// // // //                               <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // //                                 <span className="text-base">📚</span>
// // // //                                 Key Learnings
// // // //                               </h4>
// // // //                               <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // //                                 {project.backContent.learnings}
// // // //                               </p>
// // // //                             </div>

// // // //                             {/* Impact */}
// // // //                             <div>
// // // //                               <h4 className="font-semibold mb-1.5 text-primary text-sm sm:text-base flex items-center gap-1.5">
// // // //                                 <span className="text-base">📈</span>
// // // //                                 Project Impact
// // // //                               </h4>
// // // //                               <p className="text-gray-900 dark:text-gray-900 text-sm sm:text-base leading-relaxed bg-white/95 p-2.5 sm:p-3 rounded-lg shadow-sm">
// // // //                                 {project.backContent.impact}
// // // //                               </p>
// // // //                             </div>
// // // //                           </div>
// // // //                         </div>
// // // //                       </Card>

// // // //                       {/* Actions Outside Main Card */}
// // // //                       <div 
// // // //                         className="absolute bottom-0 left-0 right-0 border-2 border-primary/30 rounded-lg p-3 bg-white dark:bg-gray-900 shadow-lg no-flip-zone mx-3 sm:mx-0" 
// // // //                         onMouseEnter={(e) => {
// // // //                           e.stopPropagation();
// // // //                           if (window.innerWidth >= 1024) {
// // // //                             setFlippedCards(prev => ({
// // // //                               ...prev,
// // // //                               [index]: false
// // // //                             }));
// // // //                           }
// // // //                         }}
// // // //                       >
// // // //                         <div className="flex flex-col sm:flex-row gap-2.5">
// // // //                           <Button
// // // //                             variant="default"
// // // //                             size="sm"
// // // //                             className="bg-primary hover:bg-primary/90 text-sm w-full sm:flex-1 h-10 sm:h-9 shadow-md"
// // // //                             onClick={(e) => {
// // // //                               e.stopPropagation();
// // // //                               handleViewDetails(project);
// // // //                             }}
// // // //                           >
// // // //                             <FileText size={14} className="mr-1.5" />
// // // //                             {project.liveUrl ? "View Live" : "PDF Details"}
// // // //                           </Button>
// // // //                           {project.githubUrl && (
// // // //                             <Button
// // // //                               variant="outline"
// // // //                               size="sm"
// // // //                               className="border-primary/30 text-primary hover:bg-primary/10 w-full sm:flex-1 h-10 sm:h-9 text-sm"
// // // //                               onClick={(e) => {
// // // //                                 e.stopPropagation();
// // // //                                 window.open(project.githubUrl, "_blank");
// // // //                               }}
// // // //                             >
// // // //                               <Github size={14} className="mr-1.5" />
// // // //                               Source Code
// // // //                             </Button>
// // // //                           )}
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Call to Action with fade in */}
// // // //         <div 
// // // //           ref={ctaRef}
// // // //           className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${
// // // //             ctaVisible 
// // // //               ? "opacity-100 translate-y-0" 
// // // //               : "opacity-0 translate-y-10"
// // // //           }`}
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

// // // //       <style>{`
// // // //         /* Flip Card Styles */
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

// // // //         /* No-flip zone for buttons */
// // // //         .no-flip-zone {
// // // //           pointer-events: auto;
// // // //         }

// // // //         /* Mobile responsiveness */
// // // //         @media (max-width: 640px) {
// // // //           .flip-card {
// // // //             min-height: 750px;
// // // //           }
          
// // // //           .flip-card-inner {
// // // //             min-height: 750px;
// // // //           }
// // // //         }

// // // //         @media (min-width: 641px) and (max-width: 1023px) {
// // // //           .flip-card {
// // // //             min-height: 570px;
// // // //           }
          
// // // //           .flip-card-inner {
// // // //             min-height: 570px;
// // // //           }
// // // //         }

// // // //         @media (min-width: 1024px) {
// // // //           .flip-card {
// // // //             min-height: 590px;
// // // //           }
          
// // // //           .flip-card-inner {
// // // //             min-height: 590px;
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
// // // import { Calendar, Github, FileText, Cpu, Code, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
// // // import { useEffect, useRef, useState } from "react";

// // // const Projects = () => {
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const [activeCategory, setActiveCategory] = useState("all");
// // //   const [isAnimating, setIsAnimating] = useState(false);
// // //   const [direction, setDirection] = useState(null); // 'left' | 'right'
// // //   const sectionRef = useRef(null);

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
// // //       category: "hardware",
// // //       pdfUrl: "/assets/certificates/thomas.pdf",
// // //       githubUrl: "https://github.com/Thomasjose-tech/Smart-Pet-Feeder",
// // //       backContent: {
// // //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// // //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// // //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// // //       },
// // //       accent: "#6366f1",
// // //       emoji: "🐾"
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
// // //       category: "hardware",
// // //       pdfUrl: "/assets/certificates/grp11.pdf",
// // //       githubUrl: "https://github.com/Thomasjose-tech",
// // //       backContent: {
// // //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// // //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// // //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// // //       },
// // //       accent: "#10b981",
// // //       emoji: "🤖"
// // //     },
// // //     {
// // //       title: "Cross-Language Craft",
// // //       period: "2024",
// // //       description: "A sophisticated real-time language translation application enabling seamless communication across multiple languages.",
// // //       features: [
// // //         "Implemented real-time translation with support for multiple languages",
// // //         "Created intuitive UI for instant language conversion and text input",
// // //         "Integrated modern translation APIs for accurate results",
// // //         "Designed responsive interface for desktop and mobile devices"
// // //       ],
// // //       technologies: ["React", "Translation API", "Responsive Design", "Real-time Processing"],
// // //       type: "Frontend Development",
// // //       category: "frontend",
// // //       liveUrl: "https://cross-language-craft-26011.vercel.app/",
// // //       backContent: {
// // //         challenges: "Ensuring accurate translations while maintaining fast response times and handling various language character sets.",
// // //         learnings: "Mastered API integration, state management in React, and creating fluid user experiences for real-time applications.",
// // //         impact: "Enabled seamless cross-language communication with instant translation capabilities and user-friendly interface."
// // //       },
// // //       accent: "#f59e0b",
// // //       emoji: "🌍"
// // //     },
// // //     {
// // //       title: "Financuz Nexus",
// // //       period: "2024",
// // //       description: "A comprehensive financial management platform providing tools for budget tracking, expense analysis, and financial planning.",
// // //       features: [
// // //         "Built interactive dashboard for financial data visualization",
// // //         "Implemented expense tracking and categorization system",
// // //         "Created budget planning and analysis tools",
// // //         "Designed modern, intuitive interface for financial management"
// // //       ],
// // //       technologies: ["React", "Data Visualization", "UI/UX Design", "State Management"],
// // //       type: "Frontend Development",
// // //       category: "frontend",
// // //       liveUrl: "https://financuz-nexus-01.vercel.app/",
// // //       backContent: {
// // //         challenges: "Creating an intuitive financial interface that simplifies complex data while maintaining security and performance.",
// // //         learnings: "Advanced React patterns, data visualization techniques, and user-centric design for financial applications.",
// // //         impact: "Simplified personal finance management with clear visualizations and easy-to-use tracking features."
// // //       },
// // //       accent: "#ec4899",
// // //       emoji: "💰"
// // //     },
// // //     {
// // //       title: "Chronos - Luxury Timepieces",
// // //       period: "2024",
// // //       description: "An elegant e-commerce platform showcasing premium luxury watches with sophisticated design and seamless shopping experience.",
// // //       features: [
// // //         "Designed premium product showcase with high-quality imagery",
// // //         "Implemented smooth animations and interactive elements",
// // //         "Created responsive layout optimized for luxury brand presentation",
// // //         "Built intuitive navigation and product filtering system"
// // //       ],
// // //       technologies: ["React", "E-commerce UI", "Animation", "Responsive Design"],
// // //       type: "Frontend Development",
// // //       category: "frontend",
// // //       liveUrl: "https://chronos-luxury-timepieces.vercel.app/",
// // //       backContent: {
// // //         challenges: "Balancing aesthetic appeal with performance while creating a premium feel that matches luxury brand standards.",
// // //         learnings: "Advanced CSS techniques, animation libraries, and creating high-end e-commerce user experiences.",
// // //         impact: "Delivered a sophisticated platform that elevates the luxury shopping experience with elegant design and smooth interactions."
// // //       },
// // //       accent: "#8b5cf6",
// // //       emoji: "⌚"
// // //     }
// // //   ];

// // //   const filteredProjects = activeCategory === "all"
// // //     ? projects
// // //     : projects.filter(p => p.category === activeCategory);

// // //   useEffect(() => {
// // //     setActiveIndex(0);
// // //   }, [activeCategory]);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           setIsVisible(entry.isIntersecting);
// // //         });
// // //       },
// // //       { threshold: 0.1 }
// // //     );
// // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // //     return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
// // //   }, []);

// // //   const handleNav = (dir) => {
// // //     if (isAnimating) return;
// // //     setIsAnimating(true);
// // //     setDirection(dir);
// // //     setTimeout(() => {
// // //       setActiveIndex(prev => {
// // //         if (dir === 'right') return (prev + 1) % filteredProjects.length;
// // //         return (prev - 1 + filteredProjects.length) % filteredProjects.length;
// // //       });
// // //       setIsAnimating(false);
// // //       setDirection(null);
// // //     }, 400);
// // //   };

// // //   const handleViewDetails = (project) => {
// // //     if (project.liveUrl) window.open(project.liveUrl, "_blank");
// // //     else if (project.pdfUrl) window.open(project.pdfUrl, "_blank");
// // //   };

// // //   const getCardStyle = (index) => {
// // //     const total = filteredProjects.length;
// // //     const diff = (index - activeIndex + total) % total;

// // //     if (diff === 0) {
// // //       return {
// // //         zIndex: 30,
// // //         transform: 'translateX(0px) translateY(0px) scale(1)',
// // //         opacity: 1,
// // //         pointerEvents: 'auto',
// // //         visibility: 'visible',
// // //       };
// // //     } else if (diff === 1 || diff === total - 1) {
// // //       const side = diff === 1 ? 1 : -1;
// // //       return {
// // //         zIndex: 20,
// // //         transform: `translateX(${side * 22}px) translateY(22px) scale(0.94)`,
// // //         opacity: 1,
// // //         pointerEvents: 'none',
// // //         visibility: 'visible',
// // //       };
// // //     } else if (diff === 2 || diff === total - 2) {
// // //       const side = diff === 2 ? 1 : -1;
// // //       return {
// // //         zIndex: 10,
// // //         transform: `translateX(${side * 38}px) translateY(42px) scale(0.88)`,
// // //         opacity: 1,
// // //         pointerEvents: 'none',
// // //         visibility: 'visible',
// // //       };
// // //     } else {
// // //       return {
// // //         zIndex: 0,
// // //         transform: 'translateX(0px) translateY(60px) scale(0.82)',
// // //         opacity: 0,
// // //         pointerEvents: 'none',
// // //         visibility: 'hidden',
// // //       };
// // //     }
// // //   };

// // //   const getCardOverlay = (index) => {
// // //     const total = filteredProjects.length;
// // //     const diff = (index - activeIndex + total) % total;
// // //     if (diff === 0) return null;
// // //     if (diff === 1 || diff === total - 1) return 'rgba(0,0,0,0.55)';
// // //     if (diff === 2 || diff === total - 2) return 'rgba(0,0,0,0.75)';
// // //     return 'rgba(0,0,0,0.95)';
// // //   };

// // //   const techIcons = {
// // //     "iot": "🌐", "web dashboard": "📊", "real-time monitoring": "📡",
// // //     "automation": "⚡", "robotics": "🤖", "iot sensors": "📱",
// // //     "embedded systems": "🔧", "remote control": "📡", "react": "⚛️",
// // //     "translation api": "🌍", "responsive design": "📱", "real-time processing": "⚡",
// // //     "data visualization": "📊", "ui/ux design": "🎨", "state management": "🔄",
// // //     "e-commerce ui": "🛍️", "animation": "✨"
// // //   };

// // //   return (
// // //     <section
// // //       id="projects"
// // //       ref={sectionRef}
// // //       className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
// // //       style={{ background: 'var(--background, #0f0f13)' }}
// // //     >
// // //       <div className="container mx-auto max-w-6xl">

// // //         {/* Header */}
// // //         <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
// // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
// // //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6" />
// // //           <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
// // //             Innovative solutions combining hardware and software to solve real-world problems
// // //           </p>
// // //         </div>

// // //         {/* Category Filter */}
// // //         <div className={`flex justify-center mb-10 sm:mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
// // //           <div className="inline-flex rounded-lg border border-primary/20 bg-muted/50 p-1 gap-1">
// // //             {[
// // //               { key: 'all', label: 'All Projects', icon: null },
// // //               { key: 'hardware', label: 'Hardware', icon: <Cpu size={14} className="mr-1.5" /> },
// // //               { key: 'frontend', label: 'Frontend', icon: <Code size={14} className="mr-1.5" /> },
// // //             ].map(({ key, label, icon }) => (
// // //               <Button
// // //                 key={key}
// // //                 variant={activeCategory === key ? "default" : "ghost"}
// // //                 size="sm"
// // //                 onClick={() => setActiveCategory(key)}
// // //                 className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${activeCategory === key ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-primary/10 text-muted-foreground"}`}
// // //               >
// // //                 {icon}
// // //                 {label}
// // //                 <Badge variant="secondary" className="ml-2 bg-primary/20 text-primary text-xs">
// // //                   {key === 'all' ? projects.length : projects.filter(p => p.category === key).length}
// // //                 </Badge>
// // //               </Button>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Stacked Card Carousel */}
// // //         <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

// // //           {/* Card Stack Wrapper */}
// // //           <div className="relative flex items-center justify-center">

// // //             {/* Left Arrow */}
// // //             <button
// // //               onClick={() => handleNav('left')}
// // //               disabled={isAnimating}
// // //               className="absolute left-0 sm:-left-6 lg:-left-16 z-50 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
// // //               aria-label="Previous project"
// // //             >
// // //               <ChevronLeft size={22} />
// // //             </button>

// // //             {/* Card Stack Area */}
// // //             <div
// // //               className="relative mx-14 sm:mx-16 lg:mx-20 w-full"
// // //               style={{ perspective: '1200px', minHeight: '580px', isolation: 'isolate' }}
// // //             >
// // //               {filteredProjects.map((project, index) => {
// // //                 const style = getCardStyle(index);
// // //                 const isActive = index === activeIndex;

// // //                 return (
// // //                   <div
// // //                     key={project.title}
// // //                     className="absolute inset-0 transition-all duration-500 ease-out"
// // //                     style={{
// // //                       ...style,
// // //                       transformOrigin: 'center bottom',
// // //                     }}
// // //                   >
// // //                     {/* Dark overlay for non-active cards — blocks content bleed-through */}
// // //                     {getCardOverlay(index) && (
// // //                       <div
// // //                         className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
// // //                         style={{ background: getCardOverlay(index) }}
// // //                       />
// // //                     )}
// // //                     <div
// // //                       className="h-full rounded-2xl overflow-hidden flex flex-col relative"
// // //                       style={{
// // //                         background: '#12121c',
// // //                         border: isActive ? `2px solid ${project.accent}55` : '2px solid rgba(255,255,255,0.08)',
// // //                         boxShadow: isActive
// // //                           ? `0 25px 60px -12px ${project.accent}40, 0 0 0 1px ${project.accent}20`
// // //                           : '0 8px 32px rgba(0,0,0,0.8)',
// // //                       }}
// // //                     >
// // //                       {/* Card Top Accent Bar */}
// // //                       <div
// // //                         className="h-1.5 w-full flex-shrink-0"
// // //                         style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}88)` }}
// // //                       />

// // //                       <div className="flex flex-col h-full p-5 sm:p-7">
// // //                         {/* Card Header */}
// // //                         <div className="flex items-start justify-between mb-4 gap-3">
// // //                           <div className="flex items-center gap-3">
// // //                             <div
// // //                               className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
// // //                               style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}40` }}
// // //                             >
// // //                               {project.emoji}
// // //                             </div>
// // //                             <div>
// // //                               <Badge
// // //                                 variant="outline"
// // //                                 className="text-xs mb-1 border-none px-2 py-0.5"
// // //                                 style={{ background: `${project.accent}20`, color: project.accent }}
// // //                               >
// // //                                 {project.type}
// // //                               </Badge>
// // //                               <CardTitle className="text-lg sm:text-xl leading-tight">{project.title}</CardTitle>
// // //                             </div>
// // //                           </div>
// // //                           <div className="flex items-center text-muted-foreground text-xs flex-shrink-0 mt-1">
// // //                             <Calendar size={12} className="mr-1" />
// // //                             {project.period}
// // //                           </div>
// // //                         </div>

// // //                         {/* Description */}
// // //                         <CardDescription className="text-sm leading-relaxed mb-5">
// // //                           {project.description}
// // //                         </CardDescription>

// // //                         {/* Features */}
// // //                         <div className="flex-1 mb-5">
// // //                           <h4 className="font-semibold mb-2 text-sm" style={{ color: project.accent }}>
// // //                             Key Features & Achievements
// // //                           </h4>
// // //                           <ul className="space-y-1.5">
// // //                             {project.features.slice(0, 3).map((feature, fi) => (
// // //                               <li key={fi} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// // //                                 <span
// // //                                   className="w-1.5 h-1.5 rounded-full mr-2.5 mt-1.5 flex-shrink-0"
// // //                                   style={{ background: project.accent }}
// // //                                 />
// // //                                 {feature}
// // //                               </li>
// // //                             ))}
// // //                           </ul>
// // //                         </div>

// // //                         {/* Technologies */}
// // //                         <div className="mb-5">
// // //                           <h4 className="font-semibold mb-2 text-sm" style={{ color: project.accent }}>
// // //                             Technologies
// // //                           </h4>
// // //                           <div className="flex flex-wrap gap-1.5">
// // //                             {project.technologies.map((tech) => (
// // //                               <Badge
// // //                                 key={tech}
// // //                                 variant="secondary"
// // //                                 className="text-xs px-2 py-0.5 border-none"
// // //                                 style={{ background: `${project.accent}15`, color: project.accent }}
// // //                               >
// // //                                 {techIcons[tech.toLowerCase()] || '💻'} {tech}
// // //                               </Badge>
// // //                             ))}
// // //                           </div>
// // //                         </div>

// // //                         {/* Insights Row */}
// // //                         {isActive && (
// // //                           <div className="grid grid-cols-3 gap-2 mb-5 text-xs">
// // //                             {[
// // //                               { label: '🚧 Challenge', value: project.backContent.challenges },
// // //                               { label: '📚 Learning', value: project.backContent.learnings },
// // //                               { label: '📈 Impact', value: project.backContent.impact },
// // //                             ].map(({ label, value }) => (
// // //                               <div
// // //                                 key={label}
// // //                                 className="rounded-lg p-2.5"
// // //                                 style={{ background: `${project.accent}10`, border: `1px solid ${project.accent}20` }}
// // //                               >
// // //                                 <div className="font-semibold mb-1" style={{ color: project.accent }}>{label}</div>
// // //                                 <div className="text-muted-foreground leading-relaxed line-clamp-3">{value}</div>
// // //                               </div>
// // //                             ))}
// // //                           </div>
// // //                         )}

// // //                         {/* Action Buttons */}
// // //                         <div className="flex gap-2.5 mt-auto">
// // //                           <Button
// // //                             size="sm"
// // //                             className="flex-1 h-9 text-xs font-semibold shadow-md transition-all duration-300 hover:scale-105"
// // //                             style={{ background: project.accent, color: '#fff', border: 'none' }}
// // //                             onClick={() => handleViewDetails(project)}
// // //                           >
// // //                             {project.liveUrl ? <><ExternalLink size={13} className="mr-1.5" />View Live</> : <><FileText size={13} className="mr-1.5" />View Details</>}
// // //                           </Button>
// // //                           {project.githubUrl && (
// // //                             <Button
// // //                               variant="outline"
// // //                               size="sm"
// // //                               className="flex-1 h-9 text-xs transition-all duration-300 hover:scale-105"
// // //                               style={{ borderColor: `${project.accent}50`, color: project.accent }}
// // //                               onClick={() => window.open(project.githubUrl, "_blank")}
// // //                             >
// // //                               <Github size={13} className="mr-1.5" />
// // //                               Code
// // //                             </Button>
// // //                           )}
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>

// // //             {/* Right Arrow */}
// // //             <button
// // //               onClick={() => handleNav('right')}
// // //               disabled={isAnimating}
// // //               className="absolute right-0 sm:-right-6 lg:-right-16 z-50 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
// // //               aria-label="Next project"
// // //             >
// // //               <ChevronRight size={22} />
// // //             </button>
// // //           </div>

// // //           {/* Dot Indicators */}
// // //           <div className="flex justify-center gap-2.5 mt-10">
// // //             {filteredProjects.map((project, index) => (
// // //               <button
// // //                 key={index}
// // //                 onClick={() => {
// // //                   if (!isAnimating && index !== activeIndex) {
// // //                     setIsAnimating(true);
// // //                     setTimeout(() => {
// // //                       setActiveIndex(index);
// // //                       setIsAnimating(false);
// // //                     }, 400);
// // //                   }
// // //                 }}
// // //                 className="transition-all duration-300 rounded-full"
// // //                 style={{
// // //                   width: index === activeIndex ? '28px' : '8px',
// // //                   height: '8px',
// // //                   background: index === activeIndex ? project.accent : 'rgba(255,255,255,0.25)',
// // //                 }}
// // //                 aria-label={`Go to project ${index + 1}`}
// // //               />
// // //             ))}
// // //           </div>

// // //           {/* Counter */}
// // //           <div className="text-center mt-4 text-xs text-muted-foreground">
// // //             <span style={{ color: filteredProjects[activeIndex]?.accent }} className="font-semibold text-sm">
// // //               {String(activeIndex + 1).padStart(2, '0')}
// // //             </span>
// // //             <span className="mx-1.5">/</span>
// // //             {String(filteredProjects.length).padStart(2, '0')}
// // //           </div>
// // //         </div>

// // //         {/* CTA */}
// // //         <div className={`text-center mt-16 sm:mt-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
// // //           <p className="text-sm sm:text-base text-muted-foreground mb-5">
// // //             Interested in seeing more of my work or collaborating on a project?
// // //           </p>
// // //           <Button
// // //             variant="default"
// // //             size="lg"
// // //             className="bg-primary hover:bg-primary/90 shadow-lg text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8 transition-all duration-300 hover:scale-105"
// // //             onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
// // //           >
// // //             Let's Work Together
// // //           </Button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Projects;
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { CardDescription, CardTitle } from "@/components/ui/card";
// // import { Calendar, Github, FileText, Cpu, Code, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
// // import { useEffect, useRef, useState } from "react";

// // const Projects = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [activeCategory, setActiveCategory] = useState("all");
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [isDark, setIsDark] = useState(false);
// //   const sectionRef = useRef(null);

// //   // Detect dark mode reactively
// //   useEffect(() => {
// //     const checkDark = () => {
// //       setIsDark(
// //         document.documentElement.classList.contains("dark") ||
// //         document.body.classList.contains("dark") ||
// //         window.matchMedia("(prefers-color-scheme: dark)").matches
// //       );
// //     };
// //     checkDark();

// //     const mutObs = new MutationObserver(checkDark);
// //     mutObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
// //     mutObs.observe(document.body, { attributes: true, attributeFilter: ["class"] });

// //     const mq = window.matchMedia("(prefers-color-scheme: dark)");
// //     mq.addEventListener("change", checkDark);

// //     return () => {
// //       mutObs.disconnect();
// //       mq.removeEventListener("change", checkDark);
// //     };
// //   }, []);

// //   const projects = [
// //     {
// //       title: "Smart Pet Feeder",
// //       period: "Aug 2023 - Jan 2024",
// //       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
// //       features: [
// //         "Created and implemented a smart feeder system to dispense food at scheduled intervals",
// //         "Integrated a web-based dashboard for real-time remote monitoring and control",
// //         "Ensured consistent feeding cycles, enhancing convenience for pet owners"
// //       ],
// //       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
// //       type: "Hardware & Software",
// //       category: "hardware",
// //       pdfUrl: "/assets/certificates/thomas.pdf",
// //       githubUrl: "https://github.com/Thomasjose-tech/Smart-Pet-Feeder",
// //       backContent: {
// //         challenges: "Designing reliable food dispensing mechanism and ensuring consistent connectivity for remote monitoring.",
// //         learnings: "Gained expertise in IoT integration, real-time data processing, and hardware-software communication protocols.",
// //         impact: "Reduced pet feeding inconsistencies by 85% and provided pet owners with peace of mind through remote monitoring."
// //       },
// //       accent: "#6366f1",
// //       emoji: "🐾"
// //     },
// //     {
// //       title: "Multipurpose Agriculture Robot",
// //       period: "Mar 2024 - Feb 2025",
// //       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
// //       features: [
// //         "Built a smart robotic system for soil monitoring, seed sowing, and spraying",
// //         "Integrated sensors and actuators to automate processes and reduce manual labor",
// //         "Enhanced farming efficiency and productivity through embedded systems",
// //         "Enabled remote operation and monitoring, reducing need for human supervision"
// //       ],
// //       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
// //       type: "Analytics & IoT",
// //       category: "hardware",
// //       pdfUrl: "/assets/certificates/grp11.pdf",
// //       githubUrl: "https://github.com/Thomasjose-tech",
// //       backContent: {
// //         challenges: "Integrating multiple agricultural functions into a single platform while maintaining cost-effectiveness.",
// //         learnings: "Advanced robotics programming, sensor fusion techniques, and precision agriculture methodologies.",
// //         impact: "Increased farming efficiency by 60% and reduced labor costs by 45% through automation of repetitive tasks."
// //       },
// //       accent: "#10b981",
// //       emoji: "🤖"
// //     },
// //     {
// //       title: "Cross-Language Craft",
// //       period: "2024",
// //       description: "A sophisticated real-time language translation application enabling seamless communication across multiple languages.",
// //       features: [
// //         "Implemented real-time translation with support for multiple languages",
// //         "Created intuitive UI for instant language conversion and text input",
// //         "Integrated modern translation APIs for accurate results",
// //         "Designed responsive interface for desktop and mobile devices"
// //       ],
// //       technologies: ["React", "Translation API", "Responsive Design", "Real-time Processing"],
// //       type: "Frontend Development",
// //       category: "frontend",
// //       liveUrl: "https://cross-language-craft-26011.vercel.app/",
// //       backContent: {
// //         challenges: "Ensuring accurate translations while maintaining fast response times and handling various language character sets.",
// //         learnings: "Mastered API integration, state management in React, and creating fluid user experiences for real-time applications.",
// //         impact: "Enabled seamless cross-language communication with instant translation capabilities and user-friendly interface."
// //       },
// //       accent: "#f59e0b",
// //       emoji: "🌍"
// //     },
// //     {
// //       title: "Financuz Nexus",
// //       period: "2024",
// //       description: "A comprehensive financial management platform providing tools for budget tracking, expense analysis, and financial planning.",
// //       features: [
// //         "Built interactive dashboard for financial data visualization",
// //         "Implemented expense tracking and categorization system",
// //         "Created budget planning and analysis tools",
// //         "Designed modern, intuitive interface for financial management"
// //       ],
// //       technologies: ["React", "Data Visualization", "UI/UX Design", "State Management"],
// //       type: "Frontend Development",
// //       category: "frontend",
// //       liveUrl: "https://financuz-nexus-01.vercel.app/",
// //       backContent: {
// //         challenges: "Creating an intuitive financial interface that simplifies complex data while maintaining security and performance.",
// //         learnings: "Advanced React patterns, data visualization techniques, and user-centric design for financial applications.",
// //         impact: "Simplified personal finance management with clear visualizations and easy-to-use tracking features."
// //       },
// //       accent: "#ec4899",
// //       emoji: "💰"
// //     },
// //     {
// //       title: "Chronos - Luxury Timepieces",
// //       period: "2024",
// //       description: "An elegant e-commerce platform showcasing premium luxury watches with sophisticated design and seamless shopping experience.",
// //       features: [
// //         "Designed premium product showcase with high-quality imagery",
// //         "Implemented smooth animations and interactive elements",
// //         "Created responsive layout optimized for luxury brand presentation",
// //         "Built intuitive navigation and product filtering system"
// //       ],
// //       technologies: ["React", "E-commerce UI", "Animation", "Responsive Design"],
// //       type: "Frontend Development",
// //       category: "frontend",
// //       liveUrl: "https://chronos-luxury-timepieces.vercel.app/",
// //       backContent: {
// //         challenges: "Balancing aesthetic appeal with performance while creating a premium feel that matches luxury brand standards.",
// //         learnings: "Advanced CSS techniques, animation libraries, and creating high-end e-commerce user experiences.",
// //         impact: "Delivered a sophisticated platform that elevates the luxury shopping experience with elegant design and smooth interactions."
// //       },
// //       accent: "#8b5cf6",
// //       emoji: "⌚"
// //     }
// //   ];

// //   const filteredProjects = activeCategory === "all"
// //     ? projects
// //     : projects.filter(p => p.category === activeCategory);

// //   useEffect(() => { setActiveIndex(0); }, [activeCategory]);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => entries.forEach(e => setIsVisible(e.isIntersecting)),
// //       { threshold: 0.1 }
// //     );
// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
// //   }, []);

// //   const handleNav = (dir) => {
// //     if (isAnimating) return;
// //     setIsAnimating(true);
// //     setTimeout(() => {
// //       setActiveIndex(prev =>
// //         dir === 'right'
// //           ? (prev + 1) % filteredProjects.length
// //           : (prev - 1 + filteredProjects.length) % filteredProjects.length
// //       );
// //       setIsAnimating(false);
// //     }, 400);
// //   };

// //   const handleViewDetails = (project) => {
// //     if (project.liveUrl) window.open(project.liveUrl, "_blank");
// //     else if (project.pdfUrl) window.open(project.pdfUrl, "_blank");
// //   };

// //   const getCardStyle = (index) => {
// //     const total = filteredProjects.length;
// //     const diff = (index - activeIndex + total) % total;
// //     if (diff === 0) {
// //       return { zIndex: 30, transform: 'translateX(0px) translateY(0px) scale(1)', opacity: 1, pointerEvents: 'auto', visibility: 'visible' };
// //     } else if (diff === 1 || diff === total - 1) {
// //       const s = diff === 1 ? 1 : -1;
// //       return { zIndex: 20, transform: `translateX(${s * 22}px) translateY(22px) scale(0.94)`, opacity: 1, pointerEvents: 'none', visibility: 'visible' };
// //     } else if (diff === 2 || diff === total - 2) {
// //       const s = diff === 2 ? 1 : -1;
// //       return { zIndex: 10, transform: `translateX(${s * 38}px) translateY(42px) scale(0.88)`, opacity: 1, pointerEvents: 'none', visibility: 'visible' };
// //     }
// //     return { zIndex: 0, transform: 'translateX(0) translateY(60px) scale(0.82)', opacity: 0, pointerEvents: 'none', visibility: 'hidden' };
// //   };

// //   // Overlay: dark mode = dark scrim, light mode = white scrim — both fully opaque to block bleed-through
// //   const getCardOverlay = (index) => {
// //     const total = filteredProjects.length;
// //     const diff = (index - activeIndex + total) % total;
// //     if (diff === 0) return null;
// //     if (isDark) return diff === 1 || diff === total - 1 ? 'rgba(10,10,18,0.60)' : 'rgba(10,10,18,0.80)';
// //     return diff === 1 || diff === total - 1 ? 'rgba(248,248,252,0.65)' : 'rgba(248,248,252,0.82)';
// //   };

// //   const techIcons = {
// //     "iot": "🌐", "web dashboard": "📊", "real-time monitoring": "📡", "automation": "⚡",
// //     "robotics": "🤖", "iot sensors": "📱", "embedded systems": "🔧", "remote control": "📡",
// //     "react": "⚛️", "translation api": "🌍", "responsive design": "📱", "real-time processing": "⚡",
// //     "data visualization": "📊", "ui/ux design": "🎨", "state management": "🔄",
// //     "e-commerce ui": "🛍️", "animation": "✨"
// //   };

// //   // Theme tokens — fully adaptive
// //   const cardBg       = isDark ? '#13131f' : '#ffffff';
// //   const getBorder    = (isActive, accent) =>
// //     isActive ? `2px solid ${accent}55` : isDark ? '2px solid rgba(255,255,255,0.08)' : '2px solid rgba(0,0,0,0.08)';
// //   const getShadow    = (isActive, accent) =>
// //     isActive
// //       ? `0 25px 60px -12px ${accent}35, 0 0 0 1px ${accent}18`
// //       : isDark ? '0 8px 32px rgba(0,0,0,0.70)' : '0 4px 24px rgba(0,0,0,0.10)';
// //   const dotInactive  = isDark ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.18)';
// //   const arrowCls     = isDark
// //     ? 'bg-white/10 border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white'
// //     : 'bg-black/5 border-black/12 text-gray-600 hover:bg-primary hover:border-primary hover:text-white';

// //   return (
// //     <section
// //       id="projects"
// //       ref={sectionRef}
// //       className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background"
// //     >
// //       <div className="container mx-auto max-w-6xl">

// //         {/* Header */}
// //         <div className={`text-center mb-10 sm:mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
// //           <div className="h-1 w-20 sm:w-24 bg-primary mx-auto mb-6 rounded-full" />
// //           <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
// //             Innovative solutions combining hardware and software to solve real-world problems
// //           </p>
// //         </div>

// //         {/* Category Filter */}
// //         <div className={`flex justify-center mb-10 sm:mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
// //           <div className="inline-flex rounded-lg border border-primary/20 bg-muted/50 p-1 gap-1">
// //             {[
// //               { key: 'all',      label: 'All Projects', icon: null },
// //               { key: 'hardware', label: 'Hardware',     icon: <Cpu  size={14} className="mr-1.5" /> },
// //               { key: 'frontend', label: 'Frontend',     icon: <Code size={14} className="mr-1.5" /> },
// //             ].map(({ key, label, icon }) => (
// //               <Button
// //                 key={key}
// //                 variant={activeCategory === key ? "default" : "ghost"}
// //                 size="sm"
// //                 onClick={() => setActiveCategory(key)}
// //                 className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
// //                   activeCategory === key
// //                     ? "bg-primary text-primary-foreground shadow-sm"
// //                     : "hover:bg-primary/10 text-muted-foreground"
// //                 }`}
// //               >
// //                 {icon}{label}
// //                 <Badge variant="secondary" className="ml-2 bg-primary/20 text-primary text-xs">
// //                   {key === 'all' ? projects.length : projects.filter(p => p.category === key).length}
// //                 </Badge>
// //               </Button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Stacked Card Carousel */}
// //         <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
// //           <div className="relative flex items-center justify-center">

// //             {/* ← Arrow */}
// //             <button
// //               onClick={() => handleNav('left')}
// //               disabled={isAnimating}
// //               className={`absolute left-0 sm:-left-6 lg:-left-16 z-50 flex items-center justify-center w-11 h-11 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 shadow-md disabled:opacity-40 disabled:cursor-not-allowed ${arrowCls}`}
// //               aria-label="Previous project"
// //             >
// //               <ChevronLeft size={22} />
// //             </button>

// //             {/* Card Stack */}
// //             <div
// //               className="relative mx-14 sm:mx-16 lg:mx-20 w-full"
// //               style={{ perspective: '1200px', minHeight: '600px', isolation: 'isolate' }}
// //             >
// //               {filteredProjects.map((project, index) => {
// //                 const cardStyle = getCardStyle(index);
// //                 const overlay   = getCardOverlay(index);
// //                 const isActive  = index === activeIndex;

// //                 return (
// //                   <div
// //                     key={project.title}
// //                     className="absolute inset-0 transition-all duration-500 ease-out"
// //                     style={{ ...cardStyle, transformOrigin: 'center bottom' }}
// //                   >
// //                     {/* Mode-aware solid scrim — prevents any content bleed-through on back cards */}
// //                     {overlay && (
// //                       <div
// //                         className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
// //                         style={{ background: overlay }}
// //                       />
// //                     )}

// //                     {/* Card body */}
// //                     <div
// //                       className="h-full rounded-2xl overflow-hidden flex flex-col relative"
// //                       style={{
// //                         background: cardBg,
// //                         border:     getBorder(isActive, project.accent),
// //                         boxShadow:  getShadow(isActive, project.accent),
// //                       }}
// //                     >
// //                       {/* Top accent stripe */}
// //                       <div
// //                         className="h-1.5 w-full flex-shrink-0"
// //                         style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}66)` }}
// //                       />

// //                       <div className="flex flex-col h-full p-5 sm:p-7">

// //                         {/* Header row */}
// //                         <div className="flex items-start justify-between mb-4 gap-3">
// //                           <div className="flex items-center gap-3">
// //                             <div
// //                               className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
// //                               style={{ background: `${project.accent}1a`, border: `1px solid ${project.accent}40` }}
// //                             >
// //                               {project.emoji}
// //                             </div>
// //                             <div>
// //                               <Badge
// //                                 className="text-xs mb-1 border-none px-2 py-0.5"
// //                                 style={{ background: `${project.accent}1a`, color: project.accent }}
// //                               >
// //                                 {project.type}
// //                               </Badge>
// //                               <CardTitle className="text-lg sm:text-xl leading-tight text-foreground">
// //                                 {project.title}
// //                               </CardTitle>
// //                             </div>
// //                           </div>
// //                           <div className="flex items-center text-muted-foreground text-xs flex-shrink-0 mt-1">
// //                             <Calendar size={12} className="mr-1" />
// //                             {project.period}
// //                           </div>
// //                         </div>

// //                         {/* Description */}
// //                         <CardDescription className="text-sm leading-relaxed mb-5">
// //                           {project.description}
// //                         </CardDescription>

// //                         {/* Features */}
// //                         <div className="flex-1 mb-5">
// //                           <h4 className="font-semibold mb-2 text-sm" style={{ color: project.accent }}>
// //                             Key Features & Achievements
// //                           </h4>
// //                           <ul className="space-y-1.5">
// //                             {project.features.slice(0, 3).map((f, fi) => (
// //                               <li key={fi} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
// //                                 <span className="w-1.5 h-1.5 rounded-full mr-2.5 mt-1.5 flex-shrink-0" style={{ background: project.accent }} />
// //                                 {f}
// //                               </li>
// //                             ))}
// //                           </ul>
// //                         </div>

// //                         {/* Technologies */}
// //                         <div className="mb-5">
// //                           <h4 className="font-semibold mb-2 text-sm" style={{ color: project.accent }}>Technologies</h4>
// //                           <div className="flex flex-wrap gap-1.5">
// //                             {project.technologies.map((tech) => (
// //                               <Badge
// //                                 key={tech}
// //                                 className="text-xs px-2 py-0.5 border-none"
// //                                 style={{ background: `${project.accent}18`, color: project.accent }}
// //                               >
// //                                 {techIcons[tech.toLowerCase()] || '💻'} {tech}
// //                               </Badge>
// //                             ))}
// //                           </div>
// //                         </div>

// //                         {/* Insights panel — active card only */}
// //                         {isActive && (
// //                           <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5 text-xs">
// //                             {[
// //                               { label: '🚧 Challenge', value: project.backContent.challenges },
// //                               { label: '📚 Learning',  value: project.backContent.learnings  },
// //                               { label: '📈 Impact',    value: project.backContent.impact     },
// //                             ].map(({ label, value }) => (
// //                               <div
// //                                 key={label}
// //                                 className="rounded-lg p-2.5"
// //                                 style={{
// //                                   background: isDark ? `${project.accent}12` : `${project.accent}0d`,
// //                                   border: `1px solid ${project.accent}25`,
// //                                 }}
// //                               >
// //                                 <div className="font-semibold mb-1" style={{ color: project.accent }}>{label}</div>
// //                                 <div className="text-muted-foreground leading-relaxed line-clamp-3">{value}</div>
// //                               </div>
// //                             ))}
// //                           </div>
// //                         )}

// //                         {/* Buttons */}
// //                         <div className="flex gap-2.5 mt-auto">
// //                           <Button
// //                             size="sm"
// //                             className="flex-1 h-9 text-xs font-semibold shadow-sm transition-all duration-300 hover:scale-105"
// //                             style={{ background: project.accent, color: '#fff', border: 'none' }}
// //                             onClick={() => handleViewDetails(project)}
// //                           >
// //                             {project.liveUrl
// //                               ? <><ExternalLink size={13} className="mr-1.5" />View Live</>
// //                               : <><FileText     size={13} className="mr-1.5" />View Details</>}
// //                           </Button>
// //                           {project.githubUrl && (
// //                             <Button
// //                               variant="outline"
// //                               size="sm"
// //                               className="flex-1 h-9 text-xs transition-all duration-300 hover:scale-105"
// //                               style={{ borderColor: `${project.accent}50`, color: project.accent }}
// //                               onClick={() => window.open(project.githubUrl, "_blank")}
// //                             >
// //                               <Github size={13} className="mr-1.5" />Code
// //                             </Button>
// //                           )}
// //                         </div>

// //                       </div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             {/* → Arrow */}
// //             <button
// //               onClick={() => handleNav('right')}
// //               disabled={isAnimating}
// //               className={`absolute right-0 sm:-right-6 lg:-right-16 z-50 flex items-center justify-center w-11 h-11 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 shadow-md disabled:opacity-40 disabled:cursor-not-allowed ${arrowCls}`}
// //               aria-label="Next project"
// //             >
// //               <ChevronRight size={22} />
// //             </button>
// //           </div>

// //           {/* Dot Indicators */}
// //           <div className="flex justify-center gap-2.5 mt-10">
// //             {filteredProjects.map((project, index) => (
// //               <button
// //                 key={index}
// //                 onClick={() => {
// //                   if (!isAnimating && index !== activeIndex) {
// //                     setIsAnimating(true);
// //                     setTimeout(() => { setActiveIndex(index); setIsAnimating(false); }, 400);
// //                   }
// //                 }}
// //                 className="transition-all duration-300 rounded-full"
// //                 style={{
// //                   width:      index === activeIndex ? '28px' : '8px',
// //                   height:     '8px',
// //                   background: index === activeIndex ? project.accent : dotInactive,
// //                 }}
// //                 aria-label={`Go to project ${index + 1}`}
// //               />
// //             ))}
// //           </div>

// //           {/* Counter */}
// //           <div className="text-center mt-4 text-xs text-muted-foreground">
// //             <span style={{ color: filteredProjects[activeIndex]?.accent }} className="font-semibold text-sm">
// //               {String(activeIndex + 1).padStart(2, '0')}
// //             </span>
// //             <span className="mx-1.5">/</span>
// //             {String(filteredProjects.length).padStart(2, '0')}
// //           </div>
// //         </div>

// //         {/* CTA */}
// //         <div className={`text-center mt-16 sm:mt-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
// //           <p className="text-sm sm:text-base text-muted-foreground mb-5">
// //             Interested in seeing more of my work or collaborating on a project?
// //           </p>
// //           <Button
// //             variant="default"
// //             size="lg"
// //             className="bg-primary hover:bg-primary/90 shadow-lg text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8 transition-all duration-300 hover:scale-105"
// //             onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
// //           >
// //             Let's Work Together
// //           </Button>
// //         </div>

// //       </div>
// //     </section>
//   // );
// // };

// // export default Projects;
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { CardDescription, CardTitle } from "@/components/ui/card";
// import { Calendar, Github, FileText, Cpu, Code, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
// import { useEffect, useRef, useState, useCallback } from "react";

// const Projects = () => {
//   const [isVisible, setIsVisible]     = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isDark, setIsDark]           = useState(false);
//   const [isMobile, setIsMobile]       = useState(false);
//   const sectionRef  = useRef(null);
//   const touchStartX = useRef(null);
//   const touchStartY = useRef(null);

//   /* ── Detect dark mode ── */
//   useEffect(() => {
//     const check = () =>
//       setIsDark(
//         document.documentElement.classList.contains("dark") ||
//         document.body.classList.contains("dark") ||
//         window.matchMedia("(prefers-color-scheme: dark)").matches
//       );
//     check();
//     const mo = new MutationObserver(check);
//     mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
//     mo.observe(document.body,            { attributes: true, attributeFilter: ["class"] });
//     const mq = window.matchMedia("(prefers-color-scheme: dark)");
//     mq.addEventListener("change", check);
//     return () => { mo.disconnect(); mq.removeEventListener("change", check); };
//   }, []);

//   /* ── Detect mobile breakpoint ── */
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   const projects = [
//     {
//       title: "Smart Pet Feeder",
//       period: "Aug 2023 – Jan 2024",
//       description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
//       features: [
//         "Smart feeder system dispensing food at scheduled intervals",
//         "Web dashboard for real-time remote monitoring and control",
//         "Consistent feeding cycles enhancing pet owner convenience"
//       ],
//       technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
//       type: "Hardware & Software",
//       category: "hardware",
//       pdfUrl: "/assets/certificates/thomas.pdf",
//       githubUrl: "https://github.com/Thomasjose-tech/Smart-Pet-Feeder",
//       backContent: {
//         challenges: "Designing reliable dispensing mechanism and consistent connectivity for remote monitoring.",
//         learnings: "IoT integration, real-time data processing, and hardware-software communication protocols.",
//         impact: "Reduced feeding inconsistencies by 85%; peace of mind through remote monitoring."
//       },
//       accent: "#6366f1", emoji: "🐾"
//     },
//     {
//       title: "Multipurpose Agriculture Robot",
//       period: "Mar 2024 – Feb 2025",
//       description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
//       features: [
//         "Robotic system for soil monitoring, seed sowing, and spraying",
//         "Sensors and actuators automating processes to reduce manual labor",
//         "Remote operation reducing need for constant human supervision"
//       ],
//       technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
//       type: "Analytics & IoT",
//       category: "hardware",
//       pdfUrl: "/assets/certificates/grp11.pdf",
//       githubUrl: "https://github.com/Thomasjose-tech",
//       backContent: {
//         challenges: "Integrating multiple agricultural functions while maintaining cost-effectiveness.",
//         learnings: "Advanced robotics, sensor fusion techniques, and precision agriculture methodologies.",
//         impact: "Increased efficiency by 60% and reduced labor costs by 45%."
//       },
//       accent: "#10b981", emoji: "🤖"
//     },
//     {
//       title: "Cross-Language Craft",
//       period: "2024",
//       description: "A sophisticated real-time language translation application enabling seamless communication across multiple languages.",
//       features: [
//         "Real-time translation supporting multiple languages",
//         "Intuitive UI for instant language conversion",
//         "Responsive interface for desktop and mobile devices"
//       ],
//       technologies: ["React", "Translation API", "Responsive Design", "Real-time Processing"],
//       type: "Frontend Development",
//       category: "frontend",
//       liveUrl: "https://cross-language-craft-26011.vercel.app/",
//       backContent: {
//         challenges: "Accurate translations with fast response times across diverse language character sets.",
//         learnings: "API integration, state management in React, fluid UX for real-time apps.",
//         impact: "Seamless cross-language communication with an intuitive interface."
//       },
//       accent: "#f59e0b", emoji: "🌍"
//     },
//     {
//       title: "Financuz Nexus",
//       period: "2024",
//       description: "A comprehensive financial management platform providing tools for budget tracking, expense analysis, and planning.",
//       features: [
//         "Interactive dashboard for financial data visualization",
//         "Expense tracking and smart categorization system",
//         "Budget planning and deep analysis tools"
//       ],
//       technologies: ["React", "Data Visualization", "UI/UX Design", "State Management"],
//       type: "Frontend Development",
//       category: "frontend",
//       liveUrl: "https://financuz-nexus-01.vercel.app/",
//       backContent: {
//         challenges: "Simplifying complex financial data while maintaining security and performance.",
//         learnings: "Advanced React patterns, data visualization, user-centric financial UX design.",
//         impact: "Simplified personal finance with clear visualizations and easy tracking."
//       },
//       accent: "#ec4899", emoji: "💰"
//     },
//     {
//       title: "Chronos – Luxury Timepieces",
//       period: "2024",
//       description: "An elegant e-commerce platform showcasing premium luxury watches with sophisticated design and seamless shopping.",
//       features: [
//         "Premium product showcase with high-quality imagery",
//         "Smooth animations and interactive UI elements",
//         "Intuitive navigation and product filtering system"
//       ],
//       technologies: ["React", "E-commerce UI", "Animation", "Responsive Design"],
//       type: "Frontend Development",
//       category: "frontend",
//       liveUrl: "https://chronos-luxury-timepieces.vercel.app/",
//       backContent: {
//         challenges: "Balancing aesthetic appeal with performance for a luxury brand feel.",
//         learnings: "Advanced CSS techniques, animation libraries, high-end e-commerce UX.",
//         impact: "Elevated luxury shopping experience with elegant design and smooth interactions."
//       },
//       accent: "#8b5cf6", emoji: "⌚"
//     }
//   ];

//   const filteredProjects = activeCategory === "all"
//     ? projects
//     : projects.filter(p => p.category === activeCategory);

//   useEffect(() => { setActiveIndex(0); }, [activeCategory]);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       (entries) => entries.forEach(e => setIsVisible(e.isIntersecting)),
//       { threshold: 0.05 }
//     );
//     if (sectionRef.current) obs.observe(sectionRef.current);
//     return () => { if (sectionRef.current) obs.unobserve(sectionRef.current); };
//   }, []);

//   const handleNav = useCallback((dir) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setTimeout(() => {
//       setActiveIndex(prev =>
//         dir === 'right'
//           ? (prev + 1) % filteredProjects.length
//           : (prev - 1 + filteredProjects.length) % filteredProjects.length
//       );
//       setIsAnimating(false);
//     }, 380);
//   }, [isAnimating, filteredProjects.length]);

//   /* ── Touch / Swipe support ── */
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//     touchStartY.current = e.touches[0].clientY;
//   };
//   const handleTouchEnd = (e) => {
//     if (touchStartX.current === null) return;
//     const dx = e.changedTouches[0].clientX - touchStartX.current;
//     const dy = e.changedTouches[0].clientY - touchStartY.current;
//     if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
//       handleNav(dx < 0 ? 'right' : 'left');
//     }
//     touchStartX.current = null;
//     touchStartY.current = null;
//   };

//   const handleViewDetails = (project) => {
//     if (project.liveUrl) window.open(project.liveUrl, "_blank");
//     else if (project.pdfUrl) window.open(project.pdfUrl, "_blank");
//   };

//   /* ── Card position styles — tighter on mobile ── */
//   const getCardStyle = (index) => {
//     const total = filteredProjects.length;
//     const diff  = (index - activeIndex + total) % total;
//     const peek  = isMobile ? 12 : 22;   // horizontal peek offset
//     const drop  = isMobile ? 14 : 22;   // vertical drop
//     const peek2 = isMobile ? 22 : 38;
//     const drop2 = isMobile ? 26 : 42;

//     if (diff === 0) {
//       return { zIndex: 30, transform: 'translateX(0) translateY(0) scale(1)', opacity: 1, pointerEvents: 'auto', visibility: 'visible' };
//     } else if (diff === 1 || diff === total - 1) {
//       const s = diff === 1 ? 1 : -1;
//       return { zIndex: 20, transform: `translateX(${s * peek}px) translateY(${drop}px) scale(0.95)`, opacity: 1, pointerEvents: 'none', visibility: 'visible' };
//     } else if (diff === 2 || diff === total - 2) {
//       const s = diff === 2 ? 1 : -1;
//       return { zIndex: 10, transform: `translateX(${s * peek2}px) translateY(${drop2}px) scale(0.89)`, opacity: 1, pointerEvents: 'none', visibility: 'visible' };
//     }
//     return { zIndex: 0, transform: 'translateX(0) translateY(50px) scale(0.83)', opacity: 0, pointerEvents: 'none', visibility: 'hidden' };
//   };

//   const getCardOverlay = (index) => {
//     const total = filteredProjects.length;
//     const diff  = (index - activeIndex + total) % total;
//     if (diff === 0) return null;
//     if (isDark) return diff === 1 || diff === total - 1 ? 'rgba(10,10,18,0.62)' : 'rgba(10,10,18,0.82)';
//     return diff === 1 || diff === total - 1 ? 'rgba(246,246,250,0.68)' : 'rgba(246,246,250,0.85)';
//   };

//   const techIcons = {
//     "iot":"🌐","web dashboard":"📊","real-time monitoring":"📡","automation":"⚡",
//     "robotics":"🤖","iot sensors":"📱","embedded systems":"🔧","remote control":"📡",
//     "react":"⚛️","translation api":"🌍","responsive design":"📱","real-time processing":"⚡",
//     "data visualization":"📊","ui/ux design":"🎨","state management":"🔄",
//     "e-commerce ui":"🛍️","animation":"✨"
//   };

//   /* ── Theme tokens ── */
//   const cardBg      = isDark ? '#13131f' : '#ffffff';
//   const getBorder   = (active, accent) =>
//     active ? `2px solid ${accent}55` : isDark ? '2px solid rgba(255,255,255,0.08)' : '2px solid rgba(0,0,0,0.08)';
//   const getShadow   = (active, accent) =>
//     active
//       ? `0 20px 50px -10px ${accent}35, 0 0 0 1px ${accent}18`
//       : isDark ? '0 6px 28px rgba(0,0,0,0.65)' : '0 4px 20px rgba(0,0,0,0.09)';
//   const dotInactive = isDark ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.18)';
//   const arrowCls    = isDark
//     ? 'bg-white/10 border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white'
//     : 'bg-black/5 border-black/10 text-gray-600 hover:bg-primary hover:border-primary hover:text-white';

//   /* Dynamic card min-height per breakpoint */
//   const cardMinHeight = isMobile ? 520 : 600;

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="py-12 sm:py-20 lg:py-28 px-3 sm:px-6 lg:px-8 overflow-hidden bg-background"
//     >
//       <div className="container mx-auto max-w-6xl">

//         {/* ── Header ── */}
//         <div className={`text-center mb-8 sm:mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
//           <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
//             Featured Projects
//           </h2>
//           <div className="h-1 w-16 sm:w-24 bg-primary mx-auto mb-4 sm:mb-6 rounded-full" />
//           <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
//             Innovative solutions combining hardware and software to solve real-world problems
//           </p>
//         </div>

//         {/* ── Category Filter ── */}
//         <div className={`flex justify-center mb-8 sm:mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
//           <div className="inline-flex rounded-lg border border-primary/20 bg-muted/50 p-1 gap-0.5 sm:gap-1 flex-wrap justify-center">
//             {[
//               { key: 'all',      label: 'All',      fullLabel: 'All Projects', icon: null },
//               { key: 'hardware', label: 'Hardware',  fullLabel: 'Hardware',    icon: <Cpu  size={13} className="mr-1" /> },
//               { key: 'frontend', label: 'Frontend',  fullLabel: 'Frontend',    icon: <Code size={13} className="mr-1" /> },
//             ].map(({ key, label, fullLabel, icon }) => (
//               <Button
//                 key={key}
//                 variant={activeCategory === key ? "default" : "ghost"}
//                 size="sm"
//                 onClick={() => setActiveCategory(key)}
//                 className={`text-xs sm:text-sm px-2.5 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
//                   activeCategory === key
//                     ? "bg-primary text-primary-foreground shadow-sm"
//                     : "hover:bg-primary/10 text-muted-foreground"
//                 }`}
//               >
//                 {icon}
//                 <span className="hidden xs:inline sm:inline">{fullLabel}</span>
//                 <span className="inline sm:hidden">{label}</span>
//                 <Badge variant="secondary" className="ml-1.5 bg-primary/20 text-primary text-xs min-w-[18px] h-4 flex items-center justify-center px-1">
//                   {key === 'all' ? projects.length : projects.filter(p => p.category === key).length}
//                 </Badge>
//               </Button>
//             ))}
//           </div>
//         </div>

//         {/* ── Stacked Card Carousel ── */}
//         <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
//           <div className="relative flex items-center justify-center">

//             {/* ← Arrow */}
//             <button
//               onClick={() => handleNav('left')}
//               disabled={isAnimating}
//               className={`absolute left-0 z-50 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-90 shadow-md disabled:opacity-35 disabled:cursor-not-allowed flex-shrink-0 ${arrowCls}`}
//               style={{ left: isMobile ? '-2px' : undefined }}
//               aria-label="Previous project"
//             >
//               <ChevronLeft size={isMobile ? 18 : 22} />
//             </button>

//             {/* Card Stack */}
//             <div
//               className="relative w-full"
//               style={{
//                 marginLeft:  isMobile ? '40px' : '52px',
//                 marginRight: isMobile ? '40px' : '52px',
//                 minHeight:   `${cardMinHeight + 50}px`,
//                 isolation: 'isolate',
//               }}
//               onTouchStart={handleTouchStart}
//               onTouchEnd={handleTouchEnd}
//             >
//               {filteredProjects.map((project, index) => {
//                 const cardStyle = getCardStyle(index);
//                 const overlay   = getCardOverlay(index);
//                 const isActive  = index === activeIndex;

//                 return (
//                   <div
//                     key={project.title}
//                     className="absolute inset-0 transition-all duration-500 ease-out"
//                     style={{ ...cardStyle, transformOrigin: 'center bottom' }}
//                   >
//                     {/* Scrim overlay on back cards */}
//                     {overlay && (
//                       <div
//                         className="absolute inset-0 rounded-xl sm:rounded-2xl z-10 pointer-events-none"
//                         style={{ background: overlay }}
//                       />
//                     )}

//                     {/* Card */}
//                     <div
//                       className="h-full rounded-xl sm:rounded-2xl overflow-hidden flex flex-col relative"
//                       style={{
//                         background: cardBg,
//                         border:     getBorder(isActive, project.accent),
//                         boxShadow:  getShadow(isActive, project.accent),
//                         minHeight:  `${cardMinHeight}px`,
//                       }}
//                     >
//                       {/* Accent stripe */}
//                       <div
//                         className="h-1 sm:h-1.5 w-full flex-shrink-0"
//                         style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}66)` }}
//                       />

//                       <div className="flex flex-col h-full p-4 sm:p-5 lg:p-7">

//                         {/* Card Header */}
//                         <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
//                           <div className="flex items-center gap-2 sm:gap-3 min-w-0">
//                             <div
//                               className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
//                               style={{ background: `${project.accent}1a`, border: `1px solid ${project.accent}40` }}
//                             >
//                               {project.emoji}
//                             </div>
//                             <div className="min-w-0">
//                               <Badge
//                                 className="text-xs mb-0.5 sm:mb-1 border-none px-1.5 py-0.5 truncate max-w-full"
//                                 style={{ background: `${project.accent}1a`, color: project.accent }}
//                               >
//                                 {project.type}
//                               </Badge>
//                               <CardTitle className="text-base sm:text-lg lg:text-xl leading-tight text-foreground">
//                                 {project.title}
//                               </CardTitle>
//                             </div>
//                           </div>
//                           <div className="flex items-center text-muted-foreground text-xs flex-shrink-0 mt-0.5 whitespace-nowrap">
//                             <Calendar size={11} className="mr-1 flex-shrink-0" />
//                             <span className="hidden sm:inline">{project.period}</span>
//                             <span className="inline sm:hidden">{project.period.split('–')[0].trim()}</span>
//                           </div>
//                         </div>

//                         {/* Description */}
//                         <CardDescription className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
//                           {project.description}
//                         </CardDescription>

//                         {/* Features */}
//                         <div className="flex-1 mb-3 sm:mb-4">
//                           <h4 className="font-semibold mb-1.5 sm:mb-2 text-xs sm:text-sm" style={{ color: project.accent }}>
//                             Key Features
//                           </h4>
//                           <ul className="space-y-1 sm:space-y-1.5">
//                             {project.features.slice(0, isMobile ? 2 : 3).map((f, fi) => (
//                               <li key={fi} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
//                                 <span
//                                   className="w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0"
//                                   style={{ background: project.accent }}
//                                 />
//                                 <span className="line-clamp-2">{f}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         {/* Technologies */}
//                         <div className="mb-3 sm:mb-4">
//                           <h4 className="font-semibold mb-1.5 text-xs sm:text-sm" style={{ color: project.accent }}>
//                             Technologies
//                           </h4>
//                           <div className="flex flex-wrap gap-1 sm:gap-1.5">
//                             {project.technologies.slice(0, isMobile ? 3 : project.technologies.length).map((tech) => (
//                               <Badge
//                                 key={tech}
//                                 className="text-xs px-1.5 py-0.5 border-none"
//                                 style={{ background: `${project.accent}18`, color: project.accent }}
//                               >
//                                 {techIcons[tech.toLowerCase()] || '💻'} {tech}
//                               </Badge>
//                             ))}
//                             {isMobile && project.technologies.length > 3 && (
//                               <Badge
//                                 className="text-xs px-1.5 py-0.5 border-none"
//                                 style={{ background: `${project.accent}10`, color: project.accent }}
//                               >
//                                 +{project.technologies.length - 3} more
//                               </Badge>
//                             )}
//                           </div>
//                         </div>

//                         {/* Insights — active card only, stack vertically on mobile */}
//                         {isActive && (
//                           <div className={`grid gap-2 mb-3 sm:mb-4 text-xs ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
//                             {[
//                               { label: '🚧 Challenge', value: project.backContent.challenges },
//                               { label: '📚 Learning',  value: project.backContent.learnings  },
//                               { label: '📈 Impact',    value: project.backContent.impact     },
//                             ].map(({ label, value }) => (
//                               <div
//                                 key={label}
//                                 className="rounded-lg p-2 sm:p-2.5"
//                                 style={{
//                                   background: isDark ? `${project.accent}12` : `${project.accent}0d`,
//                                   border: `1px solid ${project.accent}25`,
//                                 }}
//                               >
//                                 <div className="font-semibold mb-0.5 sm:mb-1" style={{ color: project.accent }}>{label}</div>
//                                 <div className={`text-muted-foreground leading-relaxed ${isMobile ? 'line-clamp-2' : 'line-clamp-3'}`}>{value}</div>
//                               </div>
//                             ))}
//                           </div>
//                         )}

//                         {/* Buttons */}
//                         <div className="flex gap-2 mt-auto">
//                           <Button
//                             size="sm"
//                             className="flex-1 h-8 sm:h-9 text-xs font-semibold shadow-sm transition-all duration-300 active:scale-95"
//                             style={{ background: project.accent, color: '#fff', border: 'none' }}
//                             onClick={() => handleViewDetails(project)}
//                           >
//                             {project.liveUrl
//                               ? <><ExternalLink size={12} className="mr-1" />View Live</>
//                               : <><FileText     size={12} className="mr-1" />View Details</>}
//                           </Button>
//                           {project.githubUrl && (
//                             <Button
//                               variant="outline"
//                               size="sm"
//                               className="flex-1 h-8 sm:h-9 text-xs transition-all duration-300 active:scale-95"
//                               style={{ borderColor: `${project.accent}50`, color: project.accent }}
//                               onClick={() => window.open(project.githubUrl, "_blank")}
//                             >
//                               <Github size={12} className="mr-1" />Code
//                             </Button>
//                           )}
//                         </div>

//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* → Arrow */}
//             <button
//               onClick={() => handleNav('right')}
//               disabled={isAnimating}
//               className={`absolute right-0 z-50 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-90 shadow-md disabled:opacity-35 disabled:cursor-not-allowed flex-shrink-0 ${arrowCls}`}
//               style={{ right: isMobile ? '-2px' : undefined }}
//               aria-label="Next project"
//             >
//               <ChevronRight size={isMobile ? 18 : 22} />
//             </button>
//           </div>

//           {/* Swipe hint — mobile only */}
//           {isMobile && (
//             <p className="text-center text-xs text-muted-foreground mt-3 opacity-60">
//               ← Swipe to navigate →
//             </p>
//           )}

//           {/* Dot Indicators */}
//           <div className="flex justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-10">
//             {filteredProjects.map((project, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   if (!isAnimating && index !== activeIndex) {
//                     setIsAnimating(true);
//                     setTimeout(() => { setActiveIndex(index); setIsAnimating(false); }, 380);
//                   }
//                 }}
//                 className="transition-all duration-300 rounded-full"
//                 style={{
//                   width:      index === activeIndex ? '24px' : '7px',
//                   height:     '7px',
//                   background: index === activeIndex ? project.accent : dotInactive,
//                 }}
//                 aria-label={`Go to project ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Counter */}
//           <div className="text-center mt-3 text-xs text-muted-foreground">
//             <span style={{ color: filteredProjects[activeIndex]?.accent }} className="font-semibold text-sm">
//               {String(activeIndex + 1).padStart(2, '0')}
//             </span>
//             <span className="mx-1.5 opacity-50">/</span>
//             {String(filteredProjects.length).padStart(2, '0')}
//           </div>
//         </div>

//         {/* ── CTA ── */}
//         <div className={`text-center mt-12 sm:mt-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
//           <p className="text-xs sm:text-base text-muted-foreground mb-4 sm:mb-5 px-4">
//             Interested in seeing more of my work or collaborating on a project?
//           </p>
//           <Button
//             variant="default"
//             size="lg"
//             className="bg-primary hover:bg-primary/90 shadow-lg text-sm sm:text-base h-10 sm:h-11 px-5 sm:px-8 transition-all duration-300 hover:scale-105 active:scale-95"
//             onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//           >
//             Let's Work Together
//           </Button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Calendar, Github, FileText, Cpu, Code, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const Projects = () => {
  const [isVisible, setIsVisible]           = useState(false);
  const [activeIndex, setActiveIndex]       = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isAnimating, setIsAnimating]       = useState(false);
  const [isDark, setIsDark]                 = useState(false);
  const [isMobile, setIsMobile]             = useState(false);
  const sectionRef  = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  /* ── Dark mode detection ── */
  useEffect(() => {
    const check = () =>
      setIsDark(
        document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    check();
    const mo = new MutationObserver(check);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    mo.observe(document.body,            { attributes: true, attributeFilter: ["class"] });
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", check);
    return () => { mo.disconnect(); mq.removeEventListener("change", check); };
  }, []);

  /* ── Mobile breakpoint detection ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const projects = [
    {
      title: "Smart Pet Feeder",
      period: "Aug 2023 – Jan 2024",
      description: "A comprehensive smart feeding solution for pets with automated scheduling and remote monitoring capabilities.",
      features: [
        "Smart feeder system dispensing food at scheduled intervals",
        "Web dashboard for real-time remote monitoring and control",
        "Consistent feeding cycles enhancing pet owner convenience"
      ],
      technologies: ["IoT", "Web Dashboard", "Real-time Monitoring", "Automation"],
      type: "Hardware & Software",
      category: "hardware",
      pdfUrl: "/assets/certificates/thomas.pdf",
      githubUrl: "https://github.com/Thomasjose-tech/Smart-Pet-Feeder",
      backContent: {
        challenges: "Designing reliable dispensing mechanism and consistent connectivity for remote monitoring.",
        learnings: "IoT integration, real-time data processing, and hardware-software communication protocols.",
        impact: "Reduced feeding inconsistencies by 85%; peace of mind through remote monitoring."
      },
      accent: "#6366f1", emoji: "🐾"
    },
    {
      title: "Multipurpose Agriculture Robot",
      period: "Mar 2024 – Feb 2025",
      description: "An intelligent robotic system designed to automate multiple agricultural tasks and improve farming efficiency.",
      features: [
        "Robotic system for soil monitoring, seed sowing, and spraying",
        "Sensors and actuators automating processes to reduce manual labor",
        "Remote operation reducing need for constant human supervision"
      ],
      technologies: ["Robotics", "IoT Sensors", "Automation", "Embedded Systems", "Remote Control"],
      type: "Analytics & IoT",
      category: "hardware",
      pdfUrl: "/assets/certificates/grp11.pdf",
      githubUrl: "https://github.com/Thomasjose-tech",
      backContent: {
        challenges: "Integrating multiple agricultural functions while maintaining cost-effectiveness.",
        learnings: "Advanced robotics, sensor fusion techniques, and precision agriculture methodologies.",
        impact: "Increased efficiency by 60% and reduced labor costs by 45%."
      },
      accent: "#10b981", emoji: "🤖"
    },
    {
      title: "Cross-Language Craft",
      period: "2024",
      description: "A sophisticated real-time language translation application enabling seamless communication across multiple languages.",
      features: [
        "Real-time translation supporting multiple languages",
        "Intuitive UI for instant language conversion",
        "Responsive interface for desktop and mobile devices"
      ],
      technologies: ["React", "Translation API", "Responsive Design", "Real-time Processing"],
      type: "Frontend Development",
      category: "frontend",
      liveUrl: "https://cross-language-craft-26011.vercel.app/",
      backContent: {
        challenges: "Accurate translations with fast response times across diverse language character sets.",
        learnings: "API integration, state management in React, fluid UX for real-time apps.",
        impact: "Seamless cross-language communication with an intuitive interface."
      },
      accent: "#f59e0b", emoji: "🌍"
    },
    {
      title: "Financuz Nexus",
      period: "2024",
      description: "A comprehensive financial management platform providing tools for budget tracking, expense analysis, and planning.",
      features: [
        "Interactive dashboard for financial data visualization",
        "Expense tracking and smart categorization system",
        "Budget planning and deep analysis tools"
      ],
      technologies: ["React", "Data Visualization", "UI/UX Design", "State Management"],
      type: "Frontend Development",
      category: "frontend",
      liveUrl: "https://financuz-nexus-01.vercel.app/",
      backContent: {
        challenges: "Simplifying complex financial data while maintaining security and performance.",
        learnings: "Advanced React patterns, data visualization, user-centric financial UX design.",
        impact: "Simplified personal finance with clear visualizations and easy tracking."
      },
      accent: "#ec4899", emoji: "💰"
    },
    {
      title: "Chronos – Luxury Timepieces",
      period: "2024",
      description: "An elegant e-commerce platform showcasing premium luxury watches with sophisticated design and seamless shopping.",
      features: [
        "Premium product showcase with high-quality imagery",
        "Smooth animations and interactive UI elements",
        "Intuitive navigation and product filtering system"
      ],
      technologies: ["React", "E-commerce UI", "Animation", "Responsive Design"],
      type: "Frontend Development",
      category: "frontend",
      liveUrl: "https://chronos-luxury-timepieces.vercel.app/",
      backContent: {
        challenges: "Balancing aesthetic appeal with performance for a luxury brand feel.",
        learnings: "Advanced CSS techniques, animation libraries, high-end e-commerce UX.",
        impact: "Elevated luxury shopping experience with elegant design and smooth interactions."
      },
      accent: "#8b5cf6", emoji: "⌚"
    }
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => { setActiveIndex(0); }, [activeCategory]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => setIsVisible(e.isIntersecting)),
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => { if (sectionRef.current) obs.unobserve(sectionRef.current); };
  }, []);

  const handleNav = useCallback((dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(prev =>
        dir === 'right'
          ? (prev + 1) % filteredProjects.length
          : (prev - 1 + filteredProjects.length) % filteredProjects.length
      );
      setIsAnimating(false);
    }, 380);
  }, [isAnimating, filteredProjects.length]);

  /* ── Touch / Swipe ── */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      handleNav(dx < 0 ? 'right' : 'left');
    }
    touchStartX.current = null;
  };

  /* ── Card position — tighter peek on mobile so cards don't overflow ── */
  const getCardStyle = (index) => {
    const total = filteredProjects.length;
    const diff  = (index - activeIndex + total) % total;
    // On mobile: very small peek so cards stay fully within viewport
    const peek1 = isMobile ? 8  : 22;
    const drop1 = isMobile ? 12 : 22;
    const peek2 = isMobile ? 16 : 38;
    const drop2 = isMobile ? 22 : 42;

    if (diff === 0) {
      return { zIndex: 30, transform: 'translateX(0) translateY(0) scale(1)', opacity: 1, pointerEvents: 'auto', visibility: 'visible' };
    } else if (diff === 1 || diff === total - 1) {
      const s = diff === 1 ? 1 : -1;
      return { zIndex: 20, transform: `translateX(${s * peek1}px) translateY(${drop1}px) scale(0.96)`, opacity: 1, pointerEvents: 'none', visibility: 'visible' };
    } else if (diff === 2 || diff === total - 2) {
      const s = diff === 2 ? 1 : -1;
      return { zIndex: 10, transform: `translateX(${s * peek2}px) translateY(${drop2}px) scale(0.90)`, opacity: 1, pointerEvents: 'none', visibility: 'visible' };
    }
    return { zIndex: 0, transform: 'translateX(0) translateY(48px) scale(0.83)', opacity: 0, pointerEvents: 'none', visibility: 'hidden' };
  };

  const getCardOverlay = (index) => {
    const total = filteredProjects.length;
    const diff  = (index - activeIndex + total) % total;
    if (diff === 0) return null;
    if (isDark) return diff === 1 || diff === total - 1 ? 'rgba(10,10,18,0.62)' : 'rgba(10,10,18,0.82)';
    return diff === 1 || diff === total - 1 ? 'rgba(246,246,250,0.68)' : 'rgba(246,246,250,0.85)';
  };

  const techIcons = {
    "iot":"🌐","web dashboard":"📊","real-time monitoring":"📡","automation":"⚡",
    "robotics":"🤖","iot sensors":"📱","embedded systems":"🔧","remote control":"📡",
    "react":"⚛️","translation api":"🌍","responsive design":"📱","real-time processing":"⚡",
    "data visualization":"📊","ui/ux design":"🎨","state management":"🔄",
    "e-commerce ui":"🛍️","animation":"✨"
  };

  /* ── Theme tokens ── */
  const cardBg      = isDark ? '#13131f' : '#ffffff';
  const getBorder   = (active, accent) =>
    active ? `2px solid ${accent}55` : isDark ? '2px solid rgba(255,255,255,0.08)' : '2px solid rgba(0,0,0,0.08)';
  const getShadow   = (active, accent) =>
    active
      ? `0 20px 50px -10px ${accent}35, 0 0 0 1px ${accent}18`
      : isDark ? '0 6px 28px rgba(0,0,0,0.65)' : '0 4px 20px rgba(0,0,0,0.09)';
  const dotInactive = isDark ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.18)';
  const arrowCls    = isDark
    ? 'bg-white/10 border-white/20 text-white hover:bg-primary hover:border-primary hover:text-white'
    : 'bg-black/5 border-black/10 text-gray-600 hover:bg-primary hover:border-primary hover:text-white';

  const cardMinHeight = isMobile ? 540 : 2000;

  return (
    <section
      id="projects"
      ref={sectionRef}
      /* Zero horizontal padding on mobile so card fills edge-to-edge */
      className="py-12 sm:py-20 lg:py-28 overflow-hidden bg-background"
    >
      <div className="container mx-auto max-w-6xl">

        {/* ── Header ── */}
        <div className={`text-center mb-8 sm:mb-14 px-4 sm:px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-primary mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining hardware and software to solve real-world problems
          </p>
        </div>

        {/* ── Category Filter ── */}
        <div className={`flex justify-center mb-8 sm:mb-14 px-4 sm:px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <div className="inline-flex rounded-lg border border-primary/20 bg-muted/50 p-1 gap-0.5 sm:gap-1">
            {[
              { key: 'all',      label: 'All',     fullLabel: 'All Projects', icon: null },
              { key: 'hardware', label: 'Hardware', fullLabel: 'Hardware',    icon: <Cpu  size={13} className="mr-1" /> },
              { key: 'frontend', label: 'Frontend', fullLabel: 'Frontend',    icon: <Code size={13} className="mr-1" /> },
            ].map(({ key, label, fullLabel, icon }) => (
              <Button
                key={key}
                variant={activeCategory === key ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(key)}
                className={`text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-primary/10 text-muted-foreground"
                }`}
              >
                {icon}
                {/* Always show full label — filter pills are not cramped */}
                {fullLabel}
                <Badge variant="secondary" className="ml-1.5 bg-primary/20 text-primary text-xs min-w-[18px] h-4 flex items-center justify-center px-1">
                  {key === 'all' ? projects.length : projects.filter(p => p.category === key).length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* ── Stacked Card Carousel ── */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          {/*
            On mobile  : no side padding, card fills full screen width.
                         Arrow buttons float OVER the card edges (z-50, absolute).
            On desktop : standard side padding, arrows outside card.
          */}
          <div
            className="relative"
            style={{
              paddingLeft:  isMobile ? 0     : '56px',
              paddingRight: isMobile ? 0     : '56px',
            }}
          >
            {/* ← Left Arrow */}
            <button
              onClick={() => handleNav('left')}
              disabled={isAnimating}
              aria-label="Previous project"
              className={`absolute z-50 flex items-center justify-center rounded-full border backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 disabled:opacity-35 disabled:cursor-not-allowed ${arrowCls}`}
              style={{
                width:  isMobile ? '36px'  : '44px',
                height: isMobile ? '36px'  : '44px',
                left:   isMobile ? '10px'  : '0px',
                top:    '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <ChevronLeft size={isMobile ? 18 : 22} />
            </button>

            {/* Card Stack — full width on mobile */}
            <div
              className="relative w-full overflow-hidden"
              style={{ minHeight: `${cardMinHeight + 48}px`, isolation: 'isolate' }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {filteredProjects.map((project, index) => {
                const cardStyle = getCardStyle(index);
                const overlay   = getCardOverlay(index);
                const isActive  = index === activeIndex;

                return (
                  <div
                    key={project.title}
                    className="absolute inset-0 transition-all duration-500 ease-out"
                    style={{ ...cardStyle, transformOrigin: 'center bottom' }}
                  >
                    {/* Mode-aware scrim on back cards */}
                    {overlay && (
                      <div
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                          background: overlay,
                          borderRadius: isMobile ? '0' : '1rem',
                        }}
                      />
                    )}

                    {/* Card body */}
                    <div
                      className="h-full overflow-hidden flex flex-col relative"
                      style={{
                        background:   cardBg,
                        border:       getBorder(isActive, project.accent),
                        boxShadow:    getShadow(isActive, project.accent),
                        minHeight:    `${cardMinHeight}px`,
                        borderRadius: isMobile ? '0px' : '16px',
                      }}
                    >
                      {/* Top accent stripe */}
                      <div
                        className="h-1 sm:h-1.5 w-full flex-shrink-0"
                        style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accent}66)` }}
                      />

                      <div className="flex flex-col h-full p-4 sm:p-5 lg:p-7">

                        {/* Card Header */}
                        <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                            <div
                              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                              style={{ background: `${project.accent}1a`, border: `1px solid ${project.accent}40` }}
                            >
                              {project.emoji}
                            </div>
                            <div className="min-w-0">
                              <Badge
                                className="text-xs mb-0.5 sm:mb-1 border-none px-1.5 py-0.5"
                                style={{ background: `${project.accent}1a`, color: project.accent }}
                              >
                                {project.type}
                              </Badge>
                              <CardTitle className="text-base sm:text-lg lg:text-xl leading-tight text-foreground">
                                {project.title}
                              </CardTitle>
                            </div>
                          </div>
                          <div className="flex items-center text-muted-foreground text-xs flex-shrink-0 mt-1 whitespace-nowrap">
                            <Calendar size={11} className="mr-1" />
                            {project.period}
                          </div>
                        </div>

                        {/* Description */}
                        <CardDescription className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                          {project.description}
                        </CardDescription>

                        {/* Features */}
                        <div className="flex-1 mb-3 sm:mb-4">
                          <h4 className="font-semibold mb-1.5 sm:mb-2 text-xs sm:text-sm" style={{ color: project.accent }}>
                            Key Features
                          </h4>
                          <ul className="space-y-1 sm:space-y-1.5">
                            {project.features.slice(0, isMobile ? 2 : 3).map((f, fi) => (
                              <li key={fi} className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0" style={{ background: project.accent }} />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-semibold mb-1.5 text-xs sm:text-sm" style={{ color: project.accent }}>
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {project.technologies.slice(0, isMobile ? 3 : project.technologies.length).map((tech) => (
                              <Badge
                                key={tech}
                                className="text-xs px-1.5 py-0.5 border-none"
                                style={{ background: `${project.accent}18`, color: project.accent }}
                              >
                                {techIcons[tech.toLowerCase()] || '💻'} {tech}
                              </Badge>
                            ))}
                            {isMobile && project.technologies.length > 3 && (
                              <Badge
                                className="text-xs px-1.5 py-0.5 border-none"
                                style={{ background: `${project.accent}10`, color: project.accent }}
                              >
                                +{project.technologies.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Insights — active card only */}
                        {isActive && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3 sm:mb-4 text-xs">
                            {[
                              { label: '🚧 Challenge', value: project.backContent.challenges },
                              { label: '📚 Learning',  value: project.backContent.learnings  },
                              { label: '📈 Impact',    value: project.backContent.impact     },
                            ].map(({ label, value }) => (
                              <div
                                key={label}
                                className="rounded-lg p-2.5"
                                style={{
                                  background: isDark ? `${project.accent}12` : `${project.accent}0d`,
                                  border: `1px solid ${project.accent}25`,
                                }}
                              >
                                <div className="font-semibold mb-1" style={{ color: project.accent }}>{label}</div>
                                <div className="text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-3">{value}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-2 mt-auto">
                          <Button
                            size="sm"
                            className="flex-1 h-9 text-xs font-semibold shadow-sm transition-all duration-300 active:scale-95"
                            style={{ background: project.accent, color: '#fff', border: 'none' }}
                            onClick={() => {
                              if (project.liveUrl) window.open(project.liveUrl, "_blank");
                              else if (project.pdfUrl) window.open(project.pdfUrl, "_blank");
                            }}
                          >
                            {project.liveUrl
                              ? <><ExternalLink size={13} className="mr-1.5" />View Live</>
                              : <><FileText     size={13} className="mr-1.5" />View Details</>}
                          </Button>
                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 h-9 text-xs transition-all duration-300 active:scale-95"
                              style={{ borderColor: `${project.accent}50`, color: project.accent }}
                              onClick={() => window.open(project.githubUrl, "_blank")}
                            >
                              <Github size={13} className="mr-1.5" />Code
                            </Button>
                          )}
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* → Right Arrow */}
            <button
              onClick={() => handleNav('right')}
              disabled={isAnimating}
              aria-label="Next project"
              className={`absolute z-50 flex items-center justify-center rounded-full border backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 disabled:opacity-35 disabled:cursor-not-allowed ${arrowCls}`}
              style={{
                width:  isMobile ? '36px'  : '44px',
                height: isMobile ? '36px'  : '44px',
                right:  isMobile ? '10px'  : '0px',
                top:    '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <ChevronRight size={isMobile ? 18 : 22} />
            </button>
          </div>

          {/* Swipe hint — mobile only */}
          {isMobile && (
            <p className="text-center text-xs text-muted-foreground mt-3 opacity-55 px-4">
              ← Swipe or use arrows to navigate →
            </p>
          )}

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-10 px-4">
            {filteredProjects.map((project, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== activeIndex) {
                    setIsAnimating(true);
                    setTimeout(() => { setActiveIndex(index); setIsAnimating(false); }, 380);
                  }
                }}
                className="transition-all duration-300 rounded-full"
                style={{
                  width:      index === activeIndex ? '24px' : '7px',
                  height:     '7px',
                  background: index === activeIndex ? filteredProjects[index].accent : dotInactive,
                }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-3 text-xs text-muted-foreground">
            <span style={{ color: filteredProjects[activeIndex]?.accent }} className="font-semibold text-sm">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="mx-1.5 opacity-50">/</span>
            {String(filteredProjects.length).padStart(2, '0')}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={`text-center mt-12 sm:mt-20 px-4 sm:px-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-xs sm:text-base text-muted-foreground mb-4 sm:mb-5">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-lg text-sm sm:text-base h-10 sm:h-11 px-6 sm:px-8 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Work Together
          </Button>
        </div>

      </div>     
    </section>
  );
};

export default Projects;