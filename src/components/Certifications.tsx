// // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // // // // // // // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// // // // // // // // // // // import { useState, useEffect } from "react";


// // // // // // // // // // // // CountUp component with countdown animation every 6 seconds
// // // // // // // // // // // const CountUp = ({ end, suffix = "", className }) => {
// // // // // // // // // // //   const [count, setCount] = useState(0);
// // // // // // // // // // //   const [shouldRestart, setShouldRestart] = useState(false);
  
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const animate = () => {
// // // // // // // // // // //       let current = 0;
// // // // // // // // // // //       const increment = end / 50;
// // // // // // // // // // //       const interval = setInterval(() => {
// // // // // // // // // // //         current += increment;
// // // // // // // // // // //         if (current >= end) {
// // // // // // // // // // //           setCount(end);
// // // // // // // // // // //           clearInterval(interval);
// // // // // // // // // // //         } else {
// // // // // // // // // // //           setCount(Math.floor(current));
// // // // // // // // // // //         }
// // // // // // // // // // //       }, 20);
      
// // // // // // // // // // //       return () => clearInterval(interval);
// // // // // // // // // // //     };

// // // // // // // // // // //     // Initial animation
// // // // // // // // // // //     const cleanup = animate();
    
// // // // // // // // // // //     // Restart animation every 6 seconds
// // // // // // // // // // //     const restartInterval = setInterval(() => {
// // // // // // // // // // //       setCount(0);
// // // // // // // // // // //       setTimeout(() => animate(), 100);
// // // // // // // // // // //     }, 6000);
    
// // // // // // // // // // //     return () => {
// // // // // // // // // // //       cleanup();
// // // // // // // // // // //       clearInterval(restartInterval);
// // // // // // // // // // //     };
// // // // // // // // // // //   }, [end]);
  
// // // // // // // // // // //   return <div className={className}>{count}{suffix}</div>;
// // // // // // // // // // // };

// // // // // // // // // // // const Certifications = () => {
// // // // // // // // // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // // // // // // // // //   const [currentPage, setCurrentPage] = useState(0);
// // // // // // // // // // //   const itemsPerPage = 3;

// // // // // // // // // // //   // Certificates in the requested order
// // // // // // // // // // //   const certifications = [
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Web Developer Intern Certificate",
// // // // // // // // // // //       issuer: "Webgeon Results Private Limited",
// // // // // // // // // // //       date: "Jan-Jul 2025",
// // // // // // // // // // //       type: "Internship Experience",
// // // // // // // // // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // // // // // // // // //       location: "Hyderabad",
// // // // // // // // // // //       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
// // // // // // // // // // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Microsoft Azure for Data Engineering",
// // // // // // // // // // //       issuer: "Microsoft via Coursera",
// // // // // // // // // // //       date: "Aug 2024", 
// // // // // // // // // // //       type: "Professional Certification",
// // // // // // // // // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // // // // // // // // //       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
// // // // // // // // // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // // // // // // // // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "EF SET English Certificate",
// // // // // // // // // // //       issuer: "EF SET",
// // // // // // // // // // //       level: "C1 Advanced",
// // // // // // // // // // //       score: "66/100",
// // // // // // // // // // //       date: "Jan 2025",
// // // // // // // // // // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // // // // // // // // // //       type: "Professional Certification",
// // // // // // // // // // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // // // // // // // // // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "TechMaghi Certificate",
// // // // // // // // // // //       issuer: "TechMaghi Institute",
// // // // // // // // // // //       date: "2024",
// // // // // // // // // // //       type: "Professional Certification",
// // // // // // // // // // //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// // // // // // // // // // //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// // // // // // // // // // //       image: "/assets/certificates/techmaghi-cert.jpg"
      
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "NextGen Pro Certificate",
// // // // // // // // // // //       issuer: "NextGen Professional Development",
// // // // // // // // // // //       date: "2024",
// // // // // // // // // // //       type: "Professional Certification",
// // // // // // // // // // //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// // // // // // // // // // //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// // // // // // // // // // //       image: "/assets/certificates/nextgenpro-cert.png"
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Getting Started with Microsoft Excel",
// // // // // // // // // // //       issuer: "Coursera Project Network",
// // // // // // // // // // //       date: "Jul 2024",
// // // // // // // // // // //       type: "Professional Certification",
// // // // // // // // // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // // // // // // // // //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// // // // // // // // // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // // // // // // // // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "CMOS Digital VLSI Design",
// // // // // // // // // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // // // // // // // // //       date: "Jan-Mar 2024",
// // // // // // // // // // //       score: "62%",
// // // // // // // // // // //       type: "Education",
// // // // // // // // // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // // // // // // // // // //       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
// // // // // // // // // // //       details: {
// // // // // // // // // // //         assignments: "24.17/25",
// // // // // // // // // // //         exam: "37.5/75",
// // // // // // // // // // //         totalCandidates: 767
// // // // // // // // // // //       },
// // // // // // // // // // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const getTypeColor = (type) => {
// // // // // // // // // // //     switch (type) {
// // // // // // // // // // //       case "Professional Experience":
// // // // // // // // // // //         return "bg-emerald-100 text-emerald-800 border-emerald-200";
// // // // // // // // // // //       case "Internship Experience":
// // // // // // // // // // //         return "bg-green-100 text-green-800 border-green-200";
// // // // // // // // // // //       case "Professional Certification":
// // // // // // // // // // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // // // // // // // // // //       case "Education":
// // // // // // // // // // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // // // // // // // // // //       default:
// // // // // // // // // // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const downloadCertificate = (cert) => {
// // // // // // // // // // //     const link = document.createElement('a');
// // // // // // // // // // //     link.href = cert.image;
// // // // // // // // // // //     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
// // // // // // // // // // //     document.body.appendChild(link);
// // // // // // // // // // //     link.click();
// // // // // // // // // // //     document.body.removeChild(link);
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <section id="certifications" className="py-20 px-4 bg-background">
// // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Certifications & Achievements</h2>
// // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Pagination and Certificates Display */}
// // // // // // // // // // //         <div className="space-y-8">
// // // // // // // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // //             {certifications
// // // // // // // // // // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // // // // // // // // //               .map((cert, index) => (
// // // // // // // // // // //               <Card 
// // // // // // // // // // //                 key={cert.title}
// // // // // // // // // // //                 className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
// // // // // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // // //               >
// // // // // // // // // // //                 {/* Certificate Image */}
// // // // // // // // // // //                 <div className="relative overflow-hidden rounded-t-lg">
// // // // // // // // // // //                   <img 
// // // // // // // // // // //                     src={cert.image} 
// // // // // // // // // // //                     alt={`${cert.title} Certificate`}
// // // // // // // // // // //                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // // // // // // // // //                   />
// // // // // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // // // // // // // // //                   <Dialog>
// // // // // // // // // // //                     <DialogTrigger asChild>
// // // // // // // // // // //                       <Button
// // // // // // // // // // //                         size="sm"
// // // // // // // // // // //                         variant="secondary"
// // // // // // // // // // //                         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // // // // // // // // // //                       >
// // // // // // // // // // //                         <Maximize2 size={14} />
// // // // // // // // // // //                       </Button>
// // // // // // // // // // //                     </DialogTrigger>
// // // // // // // // // // //                     <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // // // // // // // // // //                       <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // // // // // // // // // //                         <img 
// // // // // // // // // // //                           src={cert.image} 
// // // // // // // // // // //                           alt={`${cert.title} Certificate`}
// // // // // // // // // // //                           className="max-w-full max-h-full object-contain"
// // // // // // // // // // //                         />
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </DialogContent>
// // // // // // // // // // //                   </Dialog>
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 {/* Certificate Details - Always visible */}
// // // // // // // // // // //                 <CardHeader className="pb-4">
// // // // // // // // // // //                   <div className="flex items-start justify-between mb-3">
// // // // // // // // // // //                     <Badge 
// // // // // // // // // // //                       variant="outline" 
// // // // // // // // // // //                       className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // // // // // // // // // //                     >
// // // // // // // // // // //                       {cert.type}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // //                       <Calendar size={14} className="mr-1" />
// // // // // // // // // // //                       {cert.date}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // // // // // // // // // //                     {cert.title}
// // // // // // // // // // //                   </CardTitle>
// // // // // // // // // // //                   <CardDescription className="text-sm text-primary font-medium">
// // // // // // // // // // //                     {cert.issuer}
// // // // // // // // // // //                   </CardDescription>
// // // // // // // // // // //                 </CardHeader>

// // // // // // // // // // //                 <CardContent className="space-y-4 flex-1 flex flex-col">
// // // // // // // // // // //                   <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // // // // // // // // // //                     {cert.description}
// // // // // // // // // // //                   </p>

// // // // // // // // // // //                   {/* Score/Level Display */}
// // // // // // // // // // //                   {(cert.score || cert.level) && (
// // // // // // // // // // //                     <div className="flex gap-2 flex-wrap">
// // // // // // // // // // //                       {cert.level && (
// // // // // // // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // // // // // // //                           Level: {cert.level}
// // // // // // // // // // //                         </Badge>
// // // // // // // // // // //                       )}
// // // // // // // // // // //                       {cert.score && (
// // // // // // // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // // // // // // //                           Score: {cert.score}
// // // // // // // // // // //                         </Badge>
// // // // // // // // // // //                       )}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   )}

// // // // // // // // // // //                   {/* Skills Assessed - Now for all certificates */}
// // // // // // // // // // //                   {cert.skills && (
// // // // // // // // // // //                     <div>
// // // // // // // // // // //                       <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // // // // // // // // // //                       <div className="flex flex-wrap gap-1">
// // // // // // // // // // //                         {cert.skills.map((skill) => (
// // // // // // // // // // //                           <Badge 
// // // // // // // // // // //                             key={skill} 
// // // // // // // // // // //                             variant="outline" 
// // // // // // // // // // //                             className="text-xs bg-primary/5 text-primary border-primary/20"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             {skill}
// // // // // // // // // // //                           </Badge>
// // // // // // // // // // //                         ))}
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   )}

// // // // // // // // // // //                   {/* Detailed scores for NPTEL */}
// // // // // // // // // // //                   {cert.details && (
// // // // // // // // // // //                     <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // // // // // // // // // //                       <div className="flex justify-between">
// // // // // // // // // // //                         <span>Assignments:</span>
// // // // // // // // // // //                         <span className="font-medium">{cert.details.assignments}</span>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div className="flex justify-between">
// // // // // // // // // // //                         <span>Proctored Exam:</span>
// // // // // // // // // // //                         <span className="font-medium">{cert.details.exam}</span>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div className="flex justify-between text-muted-foreground">
// // // // // // // // // // //                         <span>Total Candidates:</span>
// // // // // // // // // // //                         <span>{cert.details.totalCandidates}</span>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   )}

// // // // // // // // // // //                   {/* Location for internship */}
// // // // // // // // // // //                   {cert.location && (
// // // // // // // // // // //                     <div className="text-xs text-muted-foreground">
// // // // // // // // // // //                       📍 {cert.location}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   )}

// // // // // // // // // // //                   {/* Action Buttons */}
// // // // // // // // // // //                   <div className="pt-2 mt-auto space-y-2">
// // // // // // // // // // //                     <Dialog>
// // // // // // // // // // //                       <DialogTrigger asChild>
// // // // // // // // // // //                         <Button 
// // // // // // // // // // //                           variant="outline" 
// // // // // // // // // // //                           size="sm" 
// // // // // // // // // // //                           className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           <Eye size={12} className="mr-1" />
// // // // // // // // // // //                           View Certificate
// // // // // // // // // // //                         </Button>
// // // // // // // // // // //                       </DialogTrigger>
// // // // // // // // // // //                       <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // // // // // // // // // //                         <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // // // // // // // // // //                           <img 
// // // // // // // // // // //                             src={cert.image} 
// // // // // // // // // // //                             alt={`${cert.title} Certificate`}
// // // // // // // // // // //                             className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // // // // // // // // // //                           />
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </DialogContent>
// // // // // // // // // // //                     </Dialog>
// // // // // // // // // // //                     <Button 
// // // // // // // // // // //                       variant="secondary" 
// // // // // // // // // // //                       size="sm" 
// // // // // // // // // // //                       onClick={() => downloadCertificate(cert)}
// // // // // // // // // // //                       className="w-full text-xs"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       <Download size={12} className="mr-1" />
// // // // // // // // // // //                       Download Certificate
// // // // // // // // // // //                     </Button>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </CardContent>
// // // // // // // // // // //               </Card>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Pagination Controls with Left/Right Arrows */}
// // // // // // // // // // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // // // // // // // // //             <div className="flex justify-center items-center gap-6 animate-fade-in">
// // // // // // // // // // //               <Button
// // // // // // // // // // //                 variant="outline"
// // // // // // // // // // //                 size="lg"
// // // // // // // // // // //                 onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
// // // // // // // // // // //                 disabled={currentPage === 0}
// // // // // // // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <ChevronLeft size={24} />
// // // // // // // // // // //               </Button>
              
// // // // // // // // // // //               <div className="flex items-center gap-4">
// // // // // // // // // // //                 <span className="text-muted-foreground text-sm">
// // // // // // // // // // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // // // // // // // // // //                 </span>
// // // // // // // // // // //                 <div className="flex gap-2">
// // // // // // // // // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // // // // // // // // //                     <div
// // // // // // // // // // //                       key={i}
// // // // // // // // // // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // // // // // // // // // //                         i === currentPage ? 'bg-primary' : 'bg-primary/30'
// // // // // // // // // // //                       }`}
// // // // // // // // // // //                     />
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>

// // // // // // // // // // //               <Button
// // // // // // // // // // //                 variant="outline"
// // // // // // // // // // //                 size="lg"
// // // // // // // // // // //                 onClick={() => setCurrentPage(Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1))}
// // // // // // // // // // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // // // // // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <ChevronRight size={24} />
// // // // // // // // // // //               </Button>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Stats Section with CountUp Animation (restarts every 6 seconds) */}
// // // // // // // // // // //         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // // //           <div className="text-center">
// // // // // // // // // // //             <CountUp 
// // // // // // // // // // //               end={7} 
// // // // // // // // // // //               suffix="+" 
// // // // // // // // // // //               className="text-3xl font-bold text-primary mb-2"
// // // // // // // // // // //             />
// // // // // // // // // // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="text-center">
// // // // // // // // // // //             <CountUp 
// // // // // // // // // // //               end={20} 
// // // // // // // // // // //               suffix="+" 
// // // // // // // // // // //               className="text-3xl font-bold text-primary mb-2"
// // // // // // // // // // //             />
// // // // // // // // // // //             <div className="text-muted-foreground text-sm">Skills</div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="text-center">
// // // // // // // // // // //             <div className="text-3xl font-bold text-primary mb-2">C1</div>
// // // // // // // // // // //             <div className="text-muted-foreground text-sm">English Level</div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="text-center">
// // // // // // // // // // //             <CountUp 
// // // // // // // // // // //               end={6} 
// // // // // // // // // // //               suffix="mo" 
// // // // // // // // // // //               className="text-3xl font-bold text-primary mb-2"
// // // // // // // // // // //             />
// // // // // // // // // // //             <div className="text-muted-foreground text-sm">Internship</div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Certifications;
// // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // // // // // // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// // // // // // // // // // import { useState, useEffect } from "react";


// // // // // // // // // // // CountUp component with countdown animation every 6 seconds
// // // // // // // // // // const CountUp = ({ end, suffix = "", className }) => {
// // // // // // // // // //   const [count, setCount] = useState(0);
// // // // // // // // // //   const [shouldRestart, setShouldRestart] = useState(false);
  
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const animate = () => {
// // // // // // // // // //       let current = 0;
// // // // // // // // // //       const increment = end / 50;
// // // // // // // // // //       const interval = setInterval(() => {
// // // // // // // // // //         current += increment;
// // // // // // // // // //         if (current >= end) {
// // // // // // // // // //           setCount(end);
// // // // // // // // // //           clearInterval(interval);
// // // // // // // // // //         } else {
// // // // // // // // // //           setCount(Math.floor(current));
// // // // // // // // // //         }
// // // // // // // // // //       }, 20);
      
// // // // // // // // // //       return () => clearInterval(interval);
// // // // // // // // // //     };

// // // // // // // // // //     // Initial animation
// // // // // // // // // //     const cleanup = animate();
    
// // // // // // // // // //     // Restart animation every 6 seconds
// // // // // // // // // //     const restartInterval = setInterval(() => {
// // // // // // // // // //       setCount(0);
// // // // // // // // // //       setTimeout(() => animate(), 100);
// // // // // // // // // //     }, 6000);
    
// // // // // // // // // //     return () => {
// // // // // // // // // //       cleanup();
// // // // // // // // // //       clearInterval(restartInterval);
// // // // // // // // // //     };
// // // // // // // // // //   }, [end]);
  
// // // // // // // // // //   return <div className={className}>{count}{suffix}</div>;
// // // // // // // // // // };

// // // // // // // // // // const Certifications = () => {
// // // // // // // // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // // // // // // // //   const [currentPage, setCurrentPage] = useState(0);
// // // // // // // // // //   const itemsPerPage = 3;

// // // // // // // // // //   // Certificates in the requested order
// // // // // // // // // //   const certifications = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Web Developer Intern Certificate",
// // // // // // // // // //       issuer: "Webgeon Results Private Limited",
// // // // // // // // // //       date: "Jan-Jul 2025",
// // // // // // // // // //       type: "Internship Experience",
// // // // // // // // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // // // // // // // //       location: "Hyderabad",
// // // // // // // // // //       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
// // // // // // // // // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Microsoft Azure for Data Engineering",
// // // // // // // // // //       issuer: "Microsoft via Coursera",
// // // // // // // // // //       date: "Aug 2024", 
// // // // // // // // // //       type: "Professional Certification",
// // // // // // // // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // // // // // // // //       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
// // // // // // // // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // // // // // // // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "EF SET English Certificate",
// // // // // // // // // //       issuer: "EF SET",
// // // // // // // // // //       level: "C1 Advanced",
// // // // // // // // // //       score: "66/100",
// // // // // // // // // //       date: "Jan 2025",
// // // // // // // // // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // // // // // // // // //       type: "Professional Certification",
// // // // // // // // // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // // // // // // // // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "TechMaghi Certificate",
// // // // // // // // // //       issuer: "TechMaghi Institute",
// // // // // // // // // //       date: "2024",
// // // // // // // // // //       type: "Professional Certification",
// // // // // // // // // //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// // // // // // // // // //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// // // // // // // // // //       image: "/assets/certificates/techmaghi-cert.jpg"
      
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "NextGen Pro Certificate",
// // // // // // // // // //       issuer: "NextGen Professional Development",
// // // // // // // // // //       date: "2024",
// // // // // // // // // //       type: "Professional Certification",
// // // // // // // // // //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// // // // // // // // // //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// // // // // // // // // //       image: "/assets/certificates/nextgenpro-cert.png"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Getting Started with Microsoft Excel",
// // // // // // // // // //       issuer: "Coursera Project Network",
// // // // // // // // // //       date: "Jul 2024",
// // // // // // // // // //       type: "Professional Certification",
// // // // // // // // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // // // // // // // //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// // // // // // // // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // // // // // // // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "CMOS Digital VLSI Design",
// // // // // // // // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // // // // // // // //       date: "Jan-Mar 2024",
// // // // // // // // // //       score: "62%",
// // // // // // // // // //       type: "Education",
// // // // // // // // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // // // // // // // // //       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
// // // // // // // // // //       details: {
// // // // // // // // // //         assignments: "24.17/25",
// // // // // // // // // //         exam: "37.5/75",
// // // // // // // // // //         totalCandidates: 767
// // // // // // // // // //       },
// // // // // // // // // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   const getTypeColor = (type) => {
// // // // // // // // // //     switch (type) {
// // // // // // // // // //       case "Professional Experience":
// // // // // // // // // //         return "bg-emerald-100 text-emerald-800 border-emerald-200";
// // // // // // // // // //       case "Internship Experience":
// // // // // // // // // //         return "bg-green-100 text-green-800 border-green-200";
// // // // // // // // // //       case "Professional Certification":
// // // // // // // // // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // // // // // // // // //       case "Education":
// // // // // // // // // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // // // // // // // // //       default:
// // // // // // // // // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const downloadCertificate = (cert) => {
// // // // // // // // // //     const link = document.createElement('a');
// // // // // // // // // //     link.href = cert.image;
// // // // // // // // // //     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
// // // // // // // // // //     document.body.appendChild(link);
// // // // // // // // // //     link.click();
// // // // // // // // // //     document.body.removeChild(link);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <section id="certifications" className="relative py-20 px-4 md:px-4 overflow-hidden">
// // // // // // // // // //       {/* Premium Elegant Background */}
// // // // // // // // // //       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20" />
// // // // // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
// // // // // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent" />
      
// // // // // // // // // //       {/* Subtle grid pattern */}
// // // // // // // // // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
// // // // // // // // // //       {/* Floating orbs for depth */}
// // // // // // // // // //       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
// // // // // // // // // //       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
// // // // // // // // // //       <div className="container mx-auto px-0 md:px-4 relative z-10">
// // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
// // // // // // // // // //             Certifications & Achievements
// // // // // // // // // //           </h2>
// // // // // // // // // //           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full" />
// // // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // // // // // // // //           </p>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Pagination and Certificates Display */}
// // // // // // // // // //         <div className="space-y-8">
// // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // // // // // //             {certifications
// // // // // // // // // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // // // // // // // //               .map((cert, index) => (
// // // // // // // // // //               <Card 
// // // // // // // // // //                 key={cert.title}
// // // // // // // // // //                 className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
// // // // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // //               >
// // // // // // // // // //                 {/* Certificate Image */}
// // // // // // // // // //                 <div className="relative overflow-hidden rounded-t-lg">
// // // // // // // // // //                   <img 
// // // // // // // // // //                     src={cert.image} 
// // // // // // // // // //                     alt={`${cert.title} Certificate`}
// // // // // // // // // //                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // // // // // // // //                   />
// // // // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // // // // // // // //                   <Dialog>
// // // // // // // // // //                     <DialogTrigger asChild>
// // // // // // // // // //                       <Button
// // // // // // // // // //                         size="sm"
// // // // // // // // // //                         variant="secondary"
// // // // // // // // // //                         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // // // // // // // // //                       >
// // // // // // // // // //                         <Maximize2 size={14} />
// // // // // // // // // //                       </Button>
// // // // // // // // // //                     </DialogTrigger>
// // // // // // // // // //                     <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // // // // // // // // //                       <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // // // // // // // // //                         <img 
// // // // // // // // // //                           src={cert.image} 
// // // // // // // // // //                           alt={`${cert.title} Certificate`}
// // // // // // // // // //                           className="max-w-full max-h-full object-contain"
// // // // // // // // // //                         />
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </DialogContent>
// // // // // // // // // //                   </Dialog>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* Certificate Details - Always visible */}
// // // // // // // // // //                 <CardHeader className="pb-4">
// // // // // // // // // //                   <div className="flex items-start justify-between mb-3">
// // // // // // // // // //                     <Badge 
// // // // // // // // // //                       variant="outline" 
// // // // // // // // // //                       className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // // // // // // // // //                     >
// // // // // // // // // //                       {cert.type}
// // // // // // // // // //                     </Badge>
// // // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // //                       <Calendar size={14} className="mr-1" />
// // // // // // // // // //                       {cert.date}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // // // // // // // // //                     {cert.title}
// // // // // // // // // //                   </CardTitle>
// // // // // // // // // //                   <CardDescription className="text-sm text-primary font-medium">
// // // // // // // // // //                     {cert.issuer}
// // // // // // // // // //                   </CardDescription>
// // // // // // // // // //                 </CardHeader>

// // // // // // // // // //                 <CardContent className="space-y-4 flex-1 flex flex-col">
// // // // // // // // // //                   <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // // // // // // // // //                     {cert.description}
// // // // // // // // // //                   </p>

// // // // // // // // // //                   {/* Score/Level Display */}
// // // // // // // // // //                   {(cert.score || cert.level) && (
// // // // // // // // // //                     <div className="flex gap-2 flex-wrap">
// // // // // // // // // //                       {cert.level && (
// // // // // // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // // // // // //                           Level: {cert.level}
// // // // // // // // // //                         </Badge>
// // // // // // // // // //                       )}
// // // // // // // // // //                       {cert.score && (
// // // // // // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // // // // // //                           Score: {cert.score}
// // // // // // // // // //                         </Badge>
// // // // // // // // // //                       )}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   )}

// // // // // // // // // //                   {/* Skills Assessed - Now for all certificates */}
// // // // // // // // // //                   {cert.skills && (
// // // // // // // // // //                     <div>
// // // // // // // // // //                       <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // // // // // // // // //                       <div className="flex flex-wrap gap-1">
// // // // // // // // // //                         {cert.skills.map((skill) => (
// // // // // // // // // //                           <Badge 
// // // // // // // // // //                             key={skill} 
// // // // // // // // // //                             variant="outline" 
// // // // // // // // // //                             className="text-xs bg-primary/5 text-primary border-primary/20"
// // // // // // // // // //                           >
// // // // // // // // // //                             {skill}
// // // // // // // // // //                           </Badge>
// // // // // // // // // //                         ))}
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   )}

// // // // // // // // // //                   {/* Detailed scores for NPTEL */}
// // // // // // // // // //                   {cert.details && (
// // // // // // // // // //                     <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // // // // // // // // //                       <div className="flex justify-between">
// // // // // // // // // //                         <span>Assignments:</span>
// // // // // // // // // //                         <span className="font-medium">{cert.details.assignments}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <div className="flex justify-between">
// // // // // // // // // //                         <span>Proctored Exam:</span>
// // // // // // // // // //                         <span className="font-medium">{cert.details.exam}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <div className="flex justify-between text-muted-foreground">
// // // // // // // // // //                         <span>Total Candidates:</span>
// // // // // // // // // //                         <span>{cert.details.totalCandidates}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   )}

// // // // // // // // // //                   {/* Location for internship */}
// // // // // // // // // //                   {cert.location && (
// // // // // // // // // //                     <div className="text-xs text-muted-foreground">
// // // // // // // // // //                       📍 {cert.location}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   )}

// // // // // // // // // //                   {/* Action Buttons */}
// // // // // // // // // //                   <div className="pt-2 mt-auto space-y-2">
// // // // // // // // // //                     <Dialog>
// // // // // // // // // //                       <DialogTrigger asChild>
// // // // // // // // // //                         <Button 
// // // // // // // // // //                           variant="outline" 
// // // // // // // // // //                           size="sm" 
// // // // // // // // // //                           className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // // // // // // // // //                         >
// // // // // // // // // //                           <Eye size={12} className="mr-1" />
// // // // // // // // // //                           View Certificate
// // // // // // // // // //                         </Button>
// // // // // // // // // //                       </DialogTrigger>
// // // // // // // // // //                       <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // // // // // // // // //                         <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // // // // // // // // //                           <img 
// // // // // // // // // //                             src={cert.image} 
// // // // // // // // // //                             alt={`${cert.title} Certificate`}
// // // // // // // // // //                             className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // // // // // // // // //                           />
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </DialogContent>
// // // // // // // // // //                     </Dialog>
// // // // // // // // // //                     <Button 
// // // // // // // // // //                       variant="secondary" 
// // // // // // // // // //                       size="sm" 
// // // // // // // // // //                       onClick={() => downloadCertificate(cert)}
// // // // // // // // // //                       className="w-full text-xs"
// // // // // // // // // //                     >
// // // // // // // // // //                       <Download size={12} className="mr-1" />
// // // // // // // // // //                       Download Certificate
// // // // // // // // // //                     </Button>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </CardContent>
// // // // // // // // // //               </Card>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Pagination Controls with Left/Right Arrows */}
// // // // // // // // // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // // // // // // // //             <div className="flex justify-center items-center gap-6 animate-fade-in">
// // // // // // // // // //               <Button
// // // // // // // // // //                 variant="outline"
// // // // // // // // // //                 size="lg"
// // // // // // // // // //                 onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
// // // // // // // // // //                 disabled={currentPage === 0}
// // // // // // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 backdrop-blur-sm"
// // // // // // // // // //               >
// // // // // // // // // //                 <ChevronLeft size={24} />
// // // // // // // // // //               </Button>
              
// // // // // // // // // //               <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
// // // // // // // // // //                 <span className="text-muted-foreground text-sm">
// // // // // // // // // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // // // // // // // // //                 </span>
// // // // // // // // // //                 <div className="flex gap-2">
// // // // // // // // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // // // // // // // //                     <div
// // // // // // // // // //                       key={i}
// // // // // // // // // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // // // // // // // // //                         i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
// // // // // // // // // //                       }`}
// // // // // // // // // //                     />
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>

// // // // // // // // // //               <Button
// // // // // // // // // //                 variant="outline"
// // // // // // // // // //                 size="lg"
// // // // // // // // // //                 onClick={() => setCurrentPage(Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1))}
// // // // // // // // // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // // // // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 backdrop-blur-sm"
// // // // // // // // // //               >
// // // // // // // // // //                 <ChevronRight size={24} />
// // // // // // // // // //               </Button>
// // // // // // // // // //             </div>
// // // // // // // // // //           )}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Stats Section with CountUp Animation (restarts every 6 seconds) */}
// // // // // // // // // //         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // // // //             <CountUp 
// // // // // // // // // //               end={7} 
// // // // // // // // // //               suffix="+" 
// // // // // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
// // // // // // // // // //             />
// // // // // // // // // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // // // //             <CountUp 
// // // // // // // // // //               end={20} 
// // // // // // // // // //               suffix="+" 
// // // // // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
// // // // // // // // // //             />
// // // // // // // // // //             <div className="text-muted-foreground text-sm">Skills</div>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // // // //             <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">C1</div>
// // // // // // // // // //             <div className="text-muted-foreground text-sm">English Level</div>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // // // //             <CountUp 
// // // // // // // // // //               end={6} 
// // // // // // // // // //               suffix="mo" 
// // // // // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
// // // // // // // // // //             />
// // // // // // // // // //             <div className="text-muted-foreground text-sm">Internship</div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Certifications;
// // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // // // // // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// // // // // // // // // import { useState, useEffect } from "react";


// // // // // // // // // // CountUp component with countdown animation every 6 seconds
// // // // // // // // // const CountUp = ({ end, suffix = "", className }) => {
// // // // // // // // //   const [count, setCount] = useState(0);
// // // // // // // // //   const [shouldRestart, setShouldRestart] = useState(false);
  
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const animate = () => {
// // // // // // // // //       let current = 0;
// // // // // // // // //       const increment = end / 50;
// // // // // // // // //       const interval = setInterval(() => {
// // // // // // // // //         current += increment;
// // // // // // // // //         if (current >= end) {
// // // // // // // // //           setCount(end);
// // // // // // // // //           clearInterval(interval);
// // // // // // // // //         } else {
// // // // // // // // //           setCount(Math.floor(current));
// // // // // // // // //         }
// // // // // // // // //       }, 20);
      
// // // // // // // // //       return () => clearInterval(interval);
// // // // // // // // //     };

// // // // // // // // //     // Initial animation
// // // // // // // // //     const cleanup = animate();
    
// // // // // // // // //     // Restart animation every 6 seconds
// // // // // // // // //     const restartInterval = setInterval(() => {
// // // // // // // // //       setCount(0);
// // // // // // // // //       setTimeout(() => animate(), 100);
// // // // // // // // //     }, 6000);
    
// // // // // // // // //     return () => {
// // // // // // // // //       cleanup();
// // // // // // // // //       clearInterval(restartInterval);
// // // // // // // // //     };
// // // // // // // // //   }, [end]);
  
// // // // // // // // //   return <div className={className}>{count}{suffix}</div>;
// // // // // // // // // };

// // // // // // // // // const Certifications = () => {
// // // // // // // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // // // // // // //   const [currentPage, setCurrentPage] = useState(0);
// // // // // // // // //   const itemsPerPage = 3;

// // // // // // // // //   // Scroll to top of certifications section when page changes
// // // // // // // // //   const scrollToTop = () => {
// // // // // // // // //     const section = document.getElementById('certifications');
// // // // // // // // //     if (section) {
// // // // // // // // //       const yOffset = -100; // Offset to show some content above
// // // // // // // // //       const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // // // // // // // //       window.scrollTo({ top: y, behavior: 'smooth' });
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Certificates in the requested order
// // // // // // // // //   const certifications = [
// // // // // // // // //     {
// // // // // // // // //       title: "Web Developer Intern Certificate",
// // // // // // // // //       issuer: "Webgeon Results Private Limited",
// // // // // // // // //       date: "Jan-Jul 2025",
// // // // // // // // //       type: "Internship Experience",
// // // // // // // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // // // // // // //       location: "Hyderabad",
// // // // // // // // //       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
// // // // // // // // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Microsoft Azure for Data Engineering",
// // // // // // // // //       issuer: "Microsoft via Coursera",
// // // // // // // // //       date: "Aug 2024", 
// // // // // // // // //       type: "Professional Certification",
// // // // // // // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // // // // // // //       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
// // // // // // // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // // // // // // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "EF SET English Certificate",
// // // // // // // // //       issuer: "EF SET",
// // // // // // // // //       level: "C1 Advanced",
// // // // // // // // //       score: "66/100",
// // // // // // // // //       date: "Jan 2025",
// // // // // // // // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // // // // // // // //       type: "Professional Certification",
// // // // // // // // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // // // // // // // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "TechMaghi Certificate",
// // // // // // // // //       issuer: "TechMaghi Institute",
// // // // // // // // //       date: "2024",
// // // // // // // // //       type: "Professional Certification",
// // // // // // // // //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// // // // // // // // //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// // // // // // // // //       image: "/assets/certificates/techmaghi-cert.jpg"
      
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "NextGen Pro Certificate",
// // // // // // // // //       issuer: "NextGen Professional Development",
// // // // // // // // //       date: "2024",
// // // // // // // // //       type: "Professional Certification",
// // // // // // // // //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// // // // // // // // //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// // // // // // // // //       image: "/assets/certificates/nextgenpro-cert.png"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Getting Started with Microsoft Excel",
// // // // // // // // //       issuer: "Coursera Project Network",
// // // // // // // // //       date: "Jul 2024",
// // // // // // // // //       type: "Professional Certification",
// // // // // // // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // // // // // // //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// // // // // // // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // // // // // // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "CMOS Digital VLSI Design",
// // // // // // // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // // // // // // //       date: "Jan-Mar 2024",
// // // // // // // // //       score: "62%",
// // // // // // // // //       type: "Education",
// // // // // // // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // // // // // // // //       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
// // // // // // // // //       details: {
// // // // // // // // //         assignments: "24.17/25",
// // // // // // // // //         exam: "37.5/75",
// // // // // // // // //         totalCandidates: 767
// // // // // // // // //       },
// // // // // // // // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   const getTypeColor = (type) => {
// // // // // // // // //     switch (type) {
// // // // // // // // //       case "Professional Experience":
// // // // // // // // //         return "bg-emerald-100 text-emerald-800 border-emerald-200";
// // // // // // // // //       case "Internship Experience":
// // // // // // // // //         return "bg-green-100 text-green-800 border-green-200";
// // // // // // // // //       case "Professional Certification":
// // // // // // // // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // // // // // // // //       case "Education":
// // // // // // // // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // // // // // // // //       default:
// // // // // // // // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const downloadCertificate = (cert) => {
// // // // // // // // //     const link = document.createElement('a');
// // // // // // // // //     link.href = cert.image;
// // // // // // // // //     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
// // // // // // // // //     document.body.appendChild(link);
// // // // // // // // //     link.click();
// // // // // // // // //     document.body.removeChild(link);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <section id="certifications" className="relative py-20 px-4 md:px-4 overflow-hidden">
// // // // // // // // //       {/* Premium Elegant Background */}
// // // // // // // // //       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20" />
// // // // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
// // // // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent" />
      
// // // // // // // // //       {/* Subtle grid pattern */}
// // // // // // // // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
// // // // // // // // //       {/* Floating orbs for depth */}
// // // // // // // // //       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
// // // // // // // // //       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
// // // // // // // // //       <div className="container mx-auto px-0 md:px-4 relative z-10">
// // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
// // // // // // // // //             Certifications & Achievements
// // // // // // // // //           </h2>
// // // // // // // // //           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full" />
// // // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // // // // // // //           </p>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Pagination and Certificates Display */}
// // // // // // // // //         <div className="space-y-8">
// // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // // // // //             {certifications
// // // // // // // // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // // // // // // //               .map((cert, index) => (
// // // // // // // // //               <Card 
// // // // // // // // //                 key={cert.title}
// // // // // // // // //                 className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
// // // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // //               >
// // // // // // // // //                 {/* Certificate Image */}
// // // // // // // // //                 <div className="relative overflow-hidden rounded-t-lg">
// // // // // // // // //                   <img 
// // // // // // // // //                     src={cert.image} 
// // // // // // // // //                     alt={`${cert.title} Certificate`}
// // // // // // // // //                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // // // // // // //                   />
// // // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // // // // // // //                   <Dialog>
// // // // // // // // //                     <DialogTrigger asChild>
// // // // // // // // //                       <Button
// // // // // // // // //                         size="sm"
// // // // // // // // //                         variant="secondary"
// // // // // // // // //                         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // // // // // // // //                       >
// // // // // // // // //                         <Maximize2 size={14} />
// // // // // // // // //                       </Button>
// // // // // // // // //                     </DialogTrigger>
// // // // // // // // //                     <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // // // // // // // //                       <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // // // // // // // //                         <img 
// // // // // // // // //                           src={cert.image} 
// // // // // // // // //                           alt={`${cert.title} Certificate`}
// // // // // // // // //                           className="max-w-full max-h-full object-contain"
// // // // // // // // //                         />
// // // // // // // // //                       </div>
// // // // // // // // //                     </DialogContent>
// // // // // // // // //                   </Dialog>
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Certificate Details - Always visible */}
// // // // // // // // //                 <CardHeader className="pb-4">
// // // // // // // // //                   <div className="flex items-start justify-between mb-3">
// // // // // // // // //                     <Badge 
// // // // // // // // //                       variant="outline" 
// // // // // // // // //                       className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // // // // // // // //                     >
// // // // // // // // //                       {cert.type}
// // // // // // // // //                     </Badge>
// // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // //                       <Calendar size={14} className="mr-1" />
// // // // // // // // //                       {cert.date}
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                   <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // // // // // // // //                     {cert.title}
// // // // // // // // //                   </CardTitle>
// // // // // // // // //                   <CardDescription className="text-sm text-primary font-medium">
// // // // // // // // //                     {cert.issuer}
// // // // // // // // //                   </CardDescription>
// // // // // // // // //                 </CardHeader>

// // // // // // // // //                 <CardContent className="space-y-4 flex-1 flex flex-col">
// // // // // // // // //                   <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // // // // // // // //                     {cert.description}
// // // // // // // // //                   </p>

// // // // // // // // //                   {/* Score/Level Display */}
// // // // // // // // //                   {(cert.score || cert.level) && (
// // // // // // // // //                     <div className="flex gap-2 flex-wrap">
// // // // // // // // //                       {cert.level && (
// // // // // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // // // // //                           Level: {cert.level}
// // // // // // // // //                         </Badge>
// // // // // // // // //                       )}
// // // // // // // // //                       {cert.score && (
// // // // // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // // // // //                           Score: {cert.score}
// // // // // // // // //                         </Badge>
// // // // // // // // //                       )}
// // // // // // // // //                     </div>
// // // // // // // // //                   )}

// // // // // // // // //                   {/* Skills Assessed - Now for all certificates */}
// // // // // // // // //                   {cert.skills && (
// // // // // // // // //                     <div>
// // // // // // // // //                       <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // // // // // // // //                       <div className="flex flex-wrap gap-1">
// // // // // // // // //                         {cert.skills.map((skill) => (
// // // // // // // // //                           <Badge 
// // // // // // // // //                             key={skill} 
// // // // // // // // //                             variant="outline" 
// // // // // // // // //                             className="text-xs bg-primary/5 text-primary border-primary/20"
// // // // // // // // //                           >
// // // // // // // // //                             {skill}
// // // // // // // // //                           </Badge>
// // // // // // // // //                         ))}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   )}

// // // // // // // // //                   {/* Detailed scores for NPTEL */}
// // // // // // // // //                   {cert.details && (
// // // // // // // // //                     <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // // // // // // // //                       <div className="flex justify-between">
// // // // // // // // //                         <span>Assignments:</span>
// // // // // // // // //                         <span className="font-medium">{cert.details.assignments}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                       <div className="flex justify-between">
// // // // // // // // //                         <span>Proctored Exam:</span>
// // // // // // // // //                         <span className="font-medium">{cert.details.exam}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                       <div className="flex justify-between text-muted-foreground">
// // // // // // // // //                         <span>Total Candidates:</span>
// // // // // // // // //                         <span>{cert.details.totalCandidates}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   )}

// // // // // // // // //                   {/* Location for internship */}
// // // // // // // // //                   {cert.location && (
// // // // // // // // //                     <div className="text-xs text-muted-foreground">
// // // // // // // // //                       📍 {cert.location}
// // // // // // // // //                     </div>
// // // // // // // // //                   )}

// // // // // // // // //                   {/* Action Buttons */}
// // // // // // // // //                   <div className="pt-2 mt-auto space-y-2">
// // // // // // // // //                     <Dialog>
// // // // // // // // //                       <DialogTrigger asChild>
// // // // // // // // //                         <Button 
// // // // // // // // //                           variant="outline" 
// // // // // // // // //                           size="sm" 
// // // // // // // // //                           className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // // // // // // // //                         >
// // // // // // // // //                           <Eye size={12} className="mr-1" />
// // // // // // // // //                           View Certificate
// // // // // // // // //                         </Button>
// // // // // // // // //                       </DialogTrigger>
// // // // // // // // //                       <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // // // // // // // //                         <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // // // // // // // //                           <img 
// // // // // // // // //                             src={cert.image} 
// // // // // // // // //                             alt={`${cert.title} Certificate`}
// // // // // // // // //                             className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // // // // // // // //                           />
// // // // // // // // //                         </div>
// // // // // // // // //                       </DialogContent>
// // // // // // // // //                     </Dialog>
// // // // // // // // //                     <Button 
// // // // // // // // //                       variant="secondary" 
// // // // // // // // //                       size="sm" 
// // // // // // // // //                       onClick={() => downloadCertificate(cert)}
// // // // // // // // //                       className="w-full text-xs"
// // // // // // // // //                     >
// // // // // // // // //                       <Download size={12} className="mr-1" />
// // // // // // // // //                       Download Certificate
// // // // // // // // //                     </Button>
// // // // // // // // //                   </div>
// // // // // // // // //                 </CardContent>
// // // // // // // // //               </Card>
// // // // // // // // //             ))}
// // // // // // // // //           </div>

// // // // // // // // //           {/* Pagination Controls with Left/Right Arrows */}
// // // // // // // // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // // // // // // //             <div className="flex justify-center items-center gap-6 animate-fade-in">
// // // // // // // // //               <Button
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="lg"
// // // // // // // // //                 onClick={() => {
// // // // // // // // //                   setCurrentPage(Math.max(0, currentPage - 1));
// // // // // // // // //                   scrollToTop();
// // // // // // // // //                 }}
// // // // // // // // //                 disabled={currentPage === 0}
// // // // // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 backdrop-blur-sm"
// // // // // // // // //               >
// // // // // // // // //                 <ChevronLeft size={24} />
// // // // // // // // //               </Button>
              
// // // // // // // // //               <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
// // // // // // // // //                 <span className="text-muted-foreground text-sm">
// // // // // // // // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // // // // // // // //                 </span>
// // // // // // // // //                 <div className="flex gap-2">
// // // // // // // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // // // // // // //                     <div
// // // // // // // // //                       key={i}
// // // // // // // // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // // // // // // // //                         i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
// // // // // // // // //                       }`}
// // // // // // // // //                     />
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>

// // // // // // // // //               <Button
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="lg"
// // // // // // // // //                 onClick={() => {
// // // // // // // // //                   setCurrentPage(Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1));
// // // // // // // // //                   scrollToTop();
// // // // // // // // //                 }}
// // // // // // // // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // // // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 backdrop-blur-sm"
// // // // // // // // //               >
// // // // // // // // //                 <ChevronRight size={24} />
// // // // // // // // //               </Button>
// // // // // // // // //             </div>
// // // // // // // // //           )}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Stats Section with CountUp Animation (restarts every 6 seconds) */}
// // // // // // // // //         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // // //             <CountUp 
// // // // // // // // //               end={7} 
// // // // // // // // //               suffix="+" 
// // // // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
// // // // // // // // //             />
// // // // // // // // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // // // // // // // //           </div>
// // // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // // //             <CountUp 
// // // // // // // // //               end={20} 
// // // // // // // // //               suffix="+" 
// // // // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
// // // // // // // // //             />
// // // // // // // // //             <div className="text-muted-foreground text-sm">Skills</div>
// // // // // // // // //           </div>
// // // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // // //             <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">C1</div>
// // // // // // // // //             <div className="text-muted-foreground text-sm">English Level</div>
// // // // // // // // //           </div>
// // // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // // //             <CountUp 
// // // // // // // // //               end={6} 
// // // // // // // // //               suffix="mo" 
// // // // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
// // // // // // // // //             />
// // // // // // // // //             <div className="text-muted-foreground text-sm">Internship</div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Certifications;
// // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // // // // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// // // // // // // // import { useState, useEffect } from "react";


// // // // // // // // // CountUp component with countdown animation every 6 seconds
// // // // // // // // const CountUp = ({ end, suffix = "", className }) => {
// // // // // // // //   const [count, setCount] = useState(0);
// // // // // // // //   const [shouldRestart, setShouldRestart] = useState(false);
  
// // // // // // // //   useEffect(() => {
// // // // // // // //     const animate = () => {
// // // // // // // //       let current = 0;
// // // // // // // //       const increment = end / 50;
// // // // // // // //       const interval = setInterval(() => {
// // // // // // // //         current += increment;
// // // // // // // //         if (current >= end) {
// // // // // // // //           setCount(end);
// // // // // // // //           clearInterval(interval);
// // // // // // // //         } else {
// // // // // // // //           setCount(Math.floor(current));
// // // // // // // //         }
// // // // // // // //       }, 20);
      
// // // // // // // //       return () => clearInterval(interval);
// // // // // // // //     };

// // // // // // // //     // Initial animation
// // // // // // // //     const cleanup = animate();
    
// // // // // // // //     // Restart animation every 6 seconds
// // // // // // // //     const restartInterval = setInterval(() => {
// // // // // // // //       setCount(0);
// // // // // // // //       setTimeout(() => animate(), 100);
// // // // // // // //     }, 6000);
    
// // // // // // // //     return () => {
// // // // // // // //       cleanup();
// // // // // // // //       clearInterval(restartInterval);
// // // // // // // //     };
// // // // // // // //   }, [end]);
  
// // // // // // // //   return <div className={className}>{count}{suffix}</div>;
// // // // // // // // };

// // // // // // // // const Certifications = () => {
// // // // // // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // // // // // //   const [currentPage, setCurrentPage] = useState(0);
// // // // // // // //   const itemsPerPage = 3;

// // // // // // // //   // Scroll to top of certifications section when page changes
// // // // // // // //   const scrollToTop = () => {
// // // // // // // //     setTimeout(() => {
// // // // // // // //       const section = document.getElementById('certifications');
// // // // // // // //       if (section) {
// // // // // // // //         const yOffset = -80; // Offset to show title
// // // // // // // //         const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // // // // // // //         window.scrollTo({ top: y, behavior: 'smooth' });
// // // // // // // //       }
// // // // // // // //     }, 100); // Small delay to ensure page change happens first
// // // // // // // //   };

// // // // // // // //   // Certificates in the requested order
// // // // // // // //   const certifications = [
// // // // // // // //     {
// // // // // // // //       title: "Web Developer Intern Certificate",
// // // // // // // //       issuer: "Webgeon Results Private Limited",
// // // // // // // //       date: "Jan-Jul 2025",
// // // // // // // //       type: "Internship Experience",
// // // // // // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // // // // // //       location: "Hyderabad",
// // // // // // // //       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
// // // // // // // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Microsoft Azure for Data Engineering",
// // // // // // // //       issuer: "Microsoft via Coursera",
// // // // // // // //       date: "Aug 2024", 
// // // // // // // //       type: "Professional Certification",
// // // // // // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // // // // // //       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
// // // // // // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // // // // // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "EF SET English Certificate",
// // // // // // // //       issuer: "EF SET",
// // // // // // // //       level: "C1 Advanced",
// // // // // // // //       score: "66/100",
// // // // // // // //       date: "Jan 2025",
// // // // // // // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // // // // // // //       type: "Professional Certification",
// // // // // // // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // // // // // // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "TechMaghi Certificate",
// // // // // // // //       issuer: "TechMaghi Institute",
// // // // // // // //       date: "2024",
// // // // // // // //       type: "Professional Certification",
// // // // // // // //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// // // // // // // //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// // // // // // // //       image: "/assets/certificates/techmaghi-cert.jpg"
      
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "NextGen Pro Certificate",
// // // // // // // //       issuer: "NextGen Professional Development",
// // // // // // // //       date: "2024",
// // // // // // // //       type: "Professional Certification",
// // // // // // // //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// // // // // // // //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// // // // // // // //       image: "/assets/certificates/nextgenpro-cert.png"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Getting Started with Microsoft Excel",
// // // // // // // //       issuer: "Coursera Project Network",
// // // // // // // //       date: "Jul 2024",
// // // // // // // //       type: "Professional Certification",
// // // // // // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // // // // // //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// // // // // // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // // // // // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "CMOS Digital VLSI Design",
// // // // // // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // // // // // //       date: "Jan-Mar 2024",
// // // // // // // //       score: "62%",
// // // // // // // //       type: "Education",
// // // // // // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // // // // // // //       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
// // // // // // // //       details: {
// // // // // // // //         assignments: "24.17/25",
// // // // // // // //         exam: "37.5/75",
// // // // // // // //         totalCandidates: 767
// // // // // // // //       },
// // // // // // // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   const getTypeColor = (type) => {
// // // // // // // //     switch (type) {
// // // // // // // //       case "Professional Experience":
// // // // // // // //         return "bg-emerald-100 text-emerald-800 border-emerald-200";
// // // // // // // //       case "Internship Experience":
// // // // // // // //         return "bg-green-100 text-green-800 border-green-200";
// // // // // // // //       case "Professional Certification":
// // // // // // // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // // // // // // //       case "Education":
// // // // // // // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // // // // // // //       default:
// // // // // // // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const downloadCertificate = (cert) => {
// // // // // // // //     const link = document.createElement('a');
// // // // // // // //     link.href = cert.image;
// // // // // // // //     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
// // // // // // // //     document.body.appendChild(link);
// // // // // // // //     link.click();
// // // // // // // //     document.body.removeChild(link);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <section id="certifications" className="relative py-20 px-4 md:px-4 overflow-hidden">
// // // // // // // //       {/* Premium Elegant Background */}
// // // // // // // //       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20" />
// // // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
// // // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent" />
      
// // // // // // // //       {/* Subtle grid pattern */}
// // // // // // // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
// // // // // // // //       {/* Floating orbs for depth */}
// // // // // // // //       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
// // // // // // // //       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
// // // // // // // //       <div className="container mx-auto px-0 md:px-4 relative z-10">
// // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
// // // // // // // //             Certifications & Achievements
// // // // // // // //           </h2>
// // // // // // // //           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full" />
// // // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         {/* Pagination and Certificates Display */}
// // // // // // // //         <div className="space-y-8">
// // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // // // //             {certifications
// // // // // // // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // // // // // //               .map((cert, index) => (
// // // // // // // //               <Card 
// // // // // // // //                 key={cert.title}
// // // // // // // //                 className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
// // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // //               >
// // // // // // // //                 {/* Certificate Image */}
// // // // // // // //                 <div className="relative overflow-hidden rounded-t-lg">
// // // // // // // //                   <img 
// // // // // // // //                     src={cert.image} 
// // // // // // // //                     alt={`${cert.title} Certificate`}
// // // // // // // //                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // // // // // //                   />
// // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // // // // // //                   <Dialog>
// // // // // // // //                     <DialogTrigger asChild>
// // // // // // // //                       <Button
// // // // // // // //                         size="sm"
// // // // // // // //                         variant="secondary"
// // // // // // // //                         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // // // // // // //                       >
// // // // // // // //                         <Maximize2 size={14} />
// // // // // // // //                       </Button>
// // // // // // // //                     </DialogTrigger>
// // // // // // // //                     <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // // // // // // //                       <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // // // // // // //                         <img 
// // // // // // // //                           src={cert.image} 
// // // // // // // //                           alt={`${cert.title} Certificate`}
// // // // // // // //                           className="max-w-full max-h-full object-contain"
// // // // // // // //                         />
// // // // // // // //                       </div>
// // // // // // // //                     </DialogContent>
// // // // // // // //                   </Dialog>
// // // // // // // //                 </div>

// // // // // // // //                 {/* Certificate Details - Always visible */}
// // // // // // // //                 <CardHeader className="pb-4">
// // // // // // // //                   <div className="flex items-start justify-between mb-3">
// // // // // // // //                     <Badge 
// // // // // // // //                       variant="outline" 
// // // // // // // //                       className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // // // // // // //                     >
// // // // // // // //                       {cert.type}
// // // // // // // //                     </Badge>
// // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // //                       <Calendar size={14} className="mr-1" />
// // // // // // // //                       {cert.date}
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                   <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // // // // // // //                     {cert.title}
// // // // // // // //                   </CardTitle>
// // // // // // // //                   <CardDescription className="text-sm text-primary font-medium">
// // // // // // // //                     {cert.issuer}
// // // // // // // //                   </CardDescription>
// // // // // // // //                 </CardHeader>

// // // // // // // //                 <CardContent className="space-y-4 flex-1 flex flex-col">
// // // // // // // //                   <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // // // // // // //                     {cert.description}
// // // // // // // //                   </p>

// // // // // // // //                   {/* Score/Level Display */}
// // // // // // // //                   {(cert.score || cert.level) && (
// // // // // // // //                     <div className="flex gap-2 flex-wrap">
// // // // // // // //                       {cert.level && (
// // // // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // // // //                           Level: {cert.level}
// // // // // // // //                         </Badge>
// // // // // // // //                       )}
// // // // // // // //                       {cert.score && (
// // // // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // // // //                           Score: {cert.score}
// // // // // // // //                         </Badge>
// // // // // // // //                       )}
// // // // // // // //                     </div>
// // // // // // // //                   )}

// // // // // // // //                   {/* Skills Assessed - Now for all certificates */}
// // // // // // // //                   {cert.skills && (
// // // // // // // //                     <div>
// // // // // // // //                       <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // // // // // // //                       <div className="flex flex-wrap gap-1">
// // // // // // // //                         {cert.skills.map((skill) => (
// // // // // // // //                           <Badge 
// // // // // // // //                             key={skill} 
// // // // // // // //                             variant="outline" 
// // // // // // // //                             className="text-xs bg-primary/5 text-primary border-primary/20"
// // // // // // // //                           >
// // // // // // // //                             {skill}
// // // // // // // //                           </Badge>
// // // // // // // //                         ))}
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                   )}

// // // // // // // //                   {/* Detailed scores for NPTEL */}
// // // // // // // //                   {cert.details && (
// // // // // // // //                     <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // // // // // // //                       <div className="flex justify-between">
// // // // // // // //                         <span>Assignments:</span>
// // // // // // // //                         <span className="font-medium">{cert.details.assignments}</span>
// // // // // // // //                       </div>
// // // // // // // //                       <div className="flex justify-between">
// // // // // // // //                         <span>Proctored Exam:</span>
// // // // // // // //                         <span className="font-medium">{cert.details.exam}</span>
// // // // // // // //                       </div>
// // // // // // // //                       <div className="flex justify-between text-muted-foreground">
// // // // // // // //                         <span>Total Candidates:</span>
// // // // // // // //                         <span>{cert.details.totalCandidates}</span>
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                   )}

// // // // // // // //                   {/* Location for internship */}
// // // // // // // //                   {cert.location && (
// // // // // // // //                     <div className="text-xs text-muted-foreground">
// // // // // // // //                       📍 {cert.location}
// // // // // // // //                     </div>
// // // // // // // //                   )}

// // // // // // // //                   {/* Action Buttons */}
// // // // // // // //                   <div className="pt-2 mt-auto space-y-2">
// // // // // // // //                     <Dialog>
// // // // // // // //                       <DialogTrigger asChild>
// // // // // // // //                         <Button 
// // // // // // // //                           variant="outline" 
// // // // // // // //                           size="sm" 
// // // // // // // //                           className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // // // // // // //                         >
// // // // // // // //                           <Eye size={12} className="mr-1" />
// // // // // // // //                           View Certificate
// // // // // // // //                         </Button>
// // // // // // // //                       </DialogTrigger>
// // // // // // // //                       <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // // // // // // //                         <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // // // // // // //                           <img 
// // // // // // // //                             src={cert.image} 
// // // // // // // //                             alt={`${cert.title} Certificate`}
// // // // // // // //                             className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // // // // // // //                           />
// // // // // // // //                         </div>
// // // // // // // //                       </DialogContent>
// // // // // // // //                     </Dialog>
// // // // // // // //                     <Button 
// // // // // // // //                       variant="secondary" 
// // // // // // // //                       size="sm" 
// // // // // // // //                       onClick={() => downloadCertificate(cert)}
// // // // // // // //                       className="w-full text-xs"
// // // // // // // //                     >
// // // // // // // //                       <Download size={12} className="mr-1" />
// // // // // // // //                       Download Certificate
// // // // // // // //                     </Button>
// // // // // // // //                   </div>
// // // // // // // //                 </CardContent>
// // // // // // // //               </Card>
// // // // // // // //             ))}
// // // // // // // //           </div>

// // // // // // // //           {/* Pagination Controls with Left/Right Arrows */}
// // // // // // // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // // // // // //             <div className="flex justify-center items-center gap-6 animate-fade-in">
// // // // // // // //               <Button
// // // // // // // //                 variant="outline"
// // // // // // // //                 size="lg"
// // // // // // // //                 onClick={() => {
// // // // // // // //                   const newPage = Math.max(0, currentPage - 1);
// // // // // // // //                   setCurrentPage(newPage);
// // // // // // // //                   scrollToTop();
// // // // // // // //                 }}
// // // // // // // //                 disabled={currentPage === 0}
// // // // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 backdrop-blur-sm"
// // // // // // // //               >
// // // // // // // //                 <ChevronLeft size={24} />
// // // // // // // //               </Button>
              
// // // // // // // //               <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
// // // // // // // //                 <span className="text-muted-foreground text-sm">
// // // // // // // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // // // // // // //                 </span>
// // // // // // // //                 <div className="flex gap-2">
// // // // // // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // // // // // //                     <div
// // // // // // // //                       key={i}
// // // // // // // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // // // // // // //                         i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
// // // // // // // //                       }`}
// // // // // // // //                     />
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               <Button
// // // // // // // //                 variant="outline"
// // // // // // // //                 size="lg"
// // // // // // // //                 onClick={() => {
// // // // // // // //                   const newPage = Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1);
// // // // // // // //                   setCurrentPage(newPage);
// // // // // // // //                   scrollToTop();
// // // // // // // //                 }}
// // // // // // // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 backdrop-blur-sm"
// // // // // // // //               >
// // // // // // // //                 <ChevronRight size={24} />
// // // // // // // //               </Button>
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </div>

// // // // // // // //         {/* Stats Section with CountUp Animation (restarts every 6 seconds) */}
// // // // // // // //         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // //             <CountUp 
// // // // // // // //               end={7} 
// // // // // // // //               suffix="+" 
// // // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
// // // // // // // //             />
// // // // // // // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // // // // // // //           </div>
// // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // //             <CountUp 
// // // // // // // //               end={20} 
// // // // // // // //               suffix="+" 
// // // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
// // // // // // // //             />
// // // // // // // //             <div className="text-muted-foreground text-sm">Skills</div>
// // // // // // // //           </div>
// // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // //             <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">C1</div>
// // // // // // // //             <div className="text-muted-foreground text-sm">English Level</div>
// // // // // // // //           </div>
// // // // // // // //           <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // // //             <CountUp 
// // // // // // // //               end={6} 
// // // // // // // //               suffix="mo" 
// // // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2"
// // // // // // // //             />
// // // // // // // //             <div className="text-muted-foreground text-sm">Internship</div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Certifications;
// // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // // // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// // // // // // // import { useState, useEffect } from "react";


// // // // // // // // CountUp component with countdown animation every 6 seconds
// // // // // // // const CountUp = ({ end, suffix = "", className }) => {
// // // // // // //   const [count, setCount] = useState(0);
// // // // // // //   const [shouldRestart, setShouldRestart] = useState(false);
  
// // // // // // //   useEffect(() => {
// // // // // // //     const animate = () => {
// // // // // // //       let current = 0;
// // // // // // //       const increment = end / 50;
// // // // // // //       const interval = setInterval(() => {
// // // // // // //         current += increment;
// // // // // // //         if (current >= end) {
// // // // // // //           setCount(end);
// // // // // // //           clearInterval(interval);
// // // // // // //         } else {
// // // // // // //           setCount(Math.floor(current));
// // // // // // //         }
// // // // // // //       }, 20);
      
// // // // // // //       return () => clearInterval(interval);
// // // // // // //     };

// // // // // // //     // Initial animation
// // // // // // //     const cleanup = animate();
    
// // // // // // //     // Restart animation every 6 seconds
// // // // // // //     const restartInterval = setInterval(() => {
// // // // // // //       setCount(0);
// // // // // // //       setTimeout(() => animate(), 100);
// // // // // // //     }, 6000);
    
// // // // // // //     return () => {
// // // // // // //       cleanup();
// // // // // // //       clearInterval(restartInterval);
// // // // // // //     };
// // // // // // //   }, [end]);
  
// // // // // // //   return <div className={className}>{count}{suffix}</div>;
// // // // // // // };

// // // // // // // const Certifications = () => {
// // // // // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // // // // //   const [currentPage, setCurrentPage] = useState(0);
// // // // // // //   const itemsPerPage = 3;

// // // // // // //   // Scroll to top of certifications section when page changes
// // // // // // //   const scrollToTop = () => {
// // // // // // //     // Immediate scroll without delay
// // // // // // //     const section = document.getElementById('certifications');
// // // // // // //     if (section) {
// // // // // // //       // Get the section's position relative to the document
// // // // // // //       const rect = section.getBoundingClientRect();
// // // // // // //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// // // // // // //       const targetPosition = rect.top + scrollTop - 80; // 80px offset from top
      
// // // // // // //       window.scrollTo({ 
// // // // // // //         top: targetPosition, 
// // // // // // //         behavior: 'smooth' 
// // // // // // //       });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Reset to first page and scroll when component mounts or when user navigates back
// // // // // // //   useEffect(() => {
// // // // // // //     setCurrentPage(0);
// // // // // // //   }, []);

// // // // // // //   // Certificates in the requested order
// // // // // // //   const certifications = [
// // // // // // //     {
// // // // // // //       title: "Web Developer Intern Certificate",
// // // // // // //       issuer: "Webgeon Results Private Limited",
// // // // // // //       date: "Jan-Jul 2025",
// // // // // // //       type: "Internship Experience",
// // // // // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // // // // //       location: "Hyderabad",
// // // // // // //       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
// // // // // // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Microsoft Azure for Data Engineering",
// // // // // // //       issuer: "Microsoft via Coursera",
// // // // // // //       date: "Aug 2024", 
// // // // // // //       type: "Professional Certification",
// // // // // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // // // // //       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
// // // // // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // // // // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "EF SET English Certificate",
// // // // // // //       issuer: "EF SET",
// // // // // // //       level: "C1 Advanced",
// // // // // // //       score: "66/100",
// // // // // // //       date: "Jan 2025",
// // // // // // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // // // // // //       type: "Professional Certification",
// // // // // // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // // // // // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "TechMaghi Certificate",
// // // // // // //       issuer: "TechMaghi Institute",
// // // // // // //       date: "2024",
// // // // // // //       type: "Professional Certification",
// // // // // // //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// // // // // // //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// // // // // // //       image: "/assets/certificates/techmaghi-cert.jpg"
      
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "NextGen Pro Certificate",
// // // // // // //       issuer: "NextGen Professional Development",
// // // // // // //       date: "2024",
// // // // // // //       type: "Professional Certification",
// // // // // // //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// // // // // // //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// // // // // // //       image: "/assets/certificates/nextgenpro-cert.png"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Getting Started with Microsoft Excel",
// // // // // // //       issuer: "Coursera Project Network",
// // // // // // //       date: "Jul 2024",
// // // // // // //       type: "Professional Certification",
// // // // // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // // // // //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// // // // // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // // // // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "CMOS Digital VLSI Design",
// // // // // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // // // // //       date: "Jan-Mar 2024",
// // // // // // //       score: "62%",
// // // // // // //       type: "Education",
// // // // // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // // // // // //       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
// // // // // // //       details: {
// // // // // // //         assignments: "24.17/25",
// // // // // // //         exam: "37.5/75",
// // // // // // //         totalCandidates: 767
// // // // // // //       },
// // // // // // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   const getTypeColor = (type) => {
// // // // // // //     switch (type) {
// // // // // // //       case "Professional Experience":
// // // // // // //         return "bg-emerald-100 text-emerald-800 border-emerald-200";
// // // // // // //       case "Internship Experience":
// // // // // // //         return "bg-green-100 text-green-800 border-green-200";
// // // // // // //       case "Professional Certification":
// // // // // // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // // // // // //       case "Education":
// // // // // // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // // // // // //       default:
// // // // // // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const downloadCertificate = (cert) => {
// // // // // // //     const link = document.createElement('a');
// // // // // // //     link.href = cert.image;
// // // // // // //     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
// // // // // // //     document.body.appendChild(link);
// // // // // // //     link.click();
// // // // // // //     document.body.removeChild(link);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <section id="certifications" className="relative py-20 px-4 md:px-4 overflow-hidden">
// // // // // // //       {/* Premium Elegant Background - Light Mode Compatible */}
// // // // // // //       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/20" />
// // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />
// // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-900/20" />
      
// // // // // // //       {/* Subtle grid pattern */}
// // // // // // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />
      
// // // // // // //       {/* Floating orbs for depth */}
// // // // // // //       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
// // // // // // //       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
// // // // // // //       <div className="container mx-auto px-0 md:px-4 relative z-10">
// // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
// // // // // // //             Certifications & Achievements
// // // // // // //           </h2>
// // // // // // //           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full" />
// // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* Pagination and Certificates Display */}
// // // // // // //         <div className="space-y-8">
// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // // //             {certifications
// // // // // // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // // // // //               .map((cert, index) => (
// // // // // // //               <Card 
// // // // // // //                 key={cert.title}
// // // // // // //                 className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-white/50 dark:border-slate-700/50 hover:shadow-2xl hover:border-blue-200/50 dark:hover:border-blue-700/50 transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
// // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // //               >
// // // // // // //                 {/* Certificate Image */}
// // // // // // //                 <div className="relative overflow-hidden rounded-t-lg">
// // // // // // //                   <img 
// // // // // // //                     src={cert.image} 
// // // // // // //                     alt={`${cert.title} Certificate`}
// // // // // // //                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // // // // //                   />
// // // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // // // // //                   <Dialog>
// // // // // // //                     <DialogTrigger asChild>
// // // // // // //                       <Button
// // // // // // //                         size="sm"
// // // // // // //                         variant="secondary"
// // // // // // //                         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // // // // // //                       >
// // // // // // //                         <Maximize2 size={14} />
// // // // // // //                       </Button>
// // // // // // //                     </DialogTrigger>
// // // // // // //                     <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // // // // // //                       <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // // // // // //                         <img 
// // // // // // //                           src={cert.image} 
// // // // // // //                           alt={`${cert.title} Certificate`}
// // // // // // //                           className="max-w-full max-h-full object-contain"
// // // // // // //                         />
// // // // // // //                       </div>
// // // // // // //                     </DialogContent>
// // // // // // //                   </Dialog>
// // // // // // //                 </div>

// // // // // // //                 {/* Certificate Details - Always visible */}
// // // // // // //                 <CardHeader className="pb-4">
// // // // // // //                   <div className="flex items-start justify-between mb-3">
// // // // // // //                     <Badge 
// // // // // // //                       variant="outline" 
// // // // // // //                       className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // // // // // //                     >
// // // // // // //                       {cert.type}
// // // // // // //                     </Badge>
// // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // //                       <Calendar size={14} className="mr-1" />
// // // // // // //                       {cert.date}
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                   <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // // // // // //                     {cert.title}
// // // // // // //                   </CardTitle>
// // // // // // //                   <CardDescription className="text-sm text-primary font-medium">
// // // // // // //                     {cert.issuer}
// // // // // // //                   </CardDescription>
// // // // // // //                 </CardHeader>

// // // // // // //                 <CardContent className="space-y-4 flex-1 flex flex-col">
// // // // // // //                   <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // // // // // //                     {cert.description}
// // // // // // //                   </p>

// // // // // // //                   {/* Score/Level Display */}
// // // // // // //                   {(cert.score || cert.level) && (
// // // // // // //                     <div className="flex gap-2 flex-wrap">
// // // // // // //                       {cert.level && (
// // // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // // //                           Level: {cert.level}
// // // // // // //                         </Badge>
// // // // // // //                       )}
// // // // // // //                       {cert.score && (
// // // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // // //                           Score: {cert.score}
// // // // // // //                         </Badge>
// // // // // // //                       )}
// // // // // // //                     </div>
// // // // // // //                   )}

// // // // // // //                   {/* Skills Assessed - Now for all certificates */}
// // // // // // //                   {cert.skills && (
// // // // // // //                     <div>
// // // // // // //                       <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // // // // // //                       <div className="flex flex-wrap gap-1">
// // // // // // //                         {cert.skills.map((skill) => (
// // // // // // //                           <Badge 
// // // // // // //                             key={skill} 
// // // // // // //                             variant="outline" 
// // // // // // //                             className="text-xs bg-primary/5 text-primary border-primary/20"
// // // // // // //                           >
// // // // // // //                             {skill}
// // // // // // //                           </Badge>
// // // // // // //                         ))}
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   )}

// // // // // // //                   {/* Detailed scores for NPTEL */}
// // // // // // //                   {cert.details && (
// // // // // // //                     <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // // // // // //                       <div className="flex justify-between">
// // // // // // //                         <span>Assignments:</span>
// // // // // // //                         <span className="font-medium">{cert.details.assignments}</span>
// // // // // // //                       </div>
// // // // // // //                       <div className="flex justify-between">
// // // // // // //                         <span>Proctored Exam:</span>
// // // // // // //                         <span className="font-medium">{cert.details.exam}</span>
// // // // // // //                       </div>
// // // // // // //                       <div className="flex justify-between text-muted-foreground">
// // // // // // //                         <span>Total Candidates:</span>
// // // // // // //                         <span>{cert.details.totalCandidates}</span>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   )}

// // // // // // //                   {/* Location for internship */}
// // // // // // //                   {cert.location && (
// // // // // // //                     <div className="text-xs text-muted-foreground">
// // // // // // //                       📍 {cert.location}
// // // // // // //                     </div>
// // // // // // //                   )}

// // // // // // //                   {/* Action Buttons */}
// // // // // // //                   <div className="pt-2 mt-auto space-y-2">
// // // // // // //                     <Dialog>
// // // // // // //                       <DialogTrigger asChild>
// // // // // // //                         <Button 
// // // // // // //                           variant="outline" 
// // // // // // //                           size="sm" 
// // // // // // //                           className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // // // // // //                         >
// // // // // // //                           <Eye size={12} className="mr-1" />
// // // // // // //                           View Certificate
// // // // // // //                         </Button>
// // // // // // //                       </DialogTrigger>
// // // // // // //                       <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // // // // // //                         <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // // // // // //                           <img 
// // // // // // //                             src={cert.image} 
// // // // // // //                             alt={`${cert.title} Certificate`}
// // // // // // //                             className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // // // // // //                           />
// // // // // // //                         </div>
// // // // // // //                       </DialogContent>
// // // // // // //                     </Dialog>
// // // // // // //                     <Button 
// // // // // // //                       variant="secondary" 
// // // // // // //                       size="sm" 
// // // // // // //                       onClick={() => downloadCertificate(cert)}
// // // // // // //                       className="w-full text-xs"
// // // // // // //                     >
// // // // // // //                       <Download size={12} className="mr-1" />
// // // // // // //                       Download Certificate
// // // // // // //                     </Button>
// // // // // // //                   </div>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           {/* Pagination Controls with Left/Right Arrows */}
// // // // // // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // // // // //             <div className="flex justify-center items-center gap-6 animate-fade-in">
// // // // // // //               <Button
// // // // // // //                 variant="outline"
// // // // // // //                 size="lg"
// // // // // // //                 onClick={() => {
// // // // // // //                   const newPage = Math.max(0, currentPage - 1);
// // // // // // //                   setCurrentPage(newPage);
// // // // // // //                   setTimeout(() => scrollToTop(), 50);
// // // // // // //                 }}
// // // // // // //                 disabled={currentPage === 0}
// // // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
// // // // // // //               >
// // // // // // //                 <ChevronLeft size={24} />
// // // // // // //               </Button>
              
// // // // // // //               <div className="flex items-center gap-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
// // // // // // //                 <span className="text-muted-foreground text-sm">
// // // // // // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // // // // // //                 </span>
// // // // // // //                 <div className="flex gap-2">
// // // // // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // // // // //                     <div
// // // // // // //                       key={i}
// // // // // // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // // // // // //                         i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
// // // // // // //                       }`}
// // // // // // //                     />
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               <Button
// // // // // // //                 variant="outline"
// // // // // // //                 size="lg"
// // // // // // //                 onClick={() => {
// // // // // // //                   const newPage = Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1);
// // // // // // //                   setCurrentPage(newPage);
// // // // // // //                   setTimeout(() => scrollToTop(), 50);
// // // // // // //                 }}
// // // // // // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
// // // // // // //               >
// // // // // // //                 <ChevronRight size={24} />
// // // // // // //               </Button>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         {/* Stats Section with CountUp Animation (restarts every 6 seconds) */}
// // // // // // //         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // //             <CountUp 
// // // // // // //               end={7} 
// // // // // // //               suffix="+" 
// // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // // // // //             />
// // // // // // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // // // // // //           </div>
// // // // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // //             <CountUp 
// // // // // // //               end={20} 
// // // // // // //               suffix="+" 
// // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // // // // //             />
// // // // // // //             <div className="text-muted-foreground text-sm">Skills</div>
// // // // // // //           </div>
// // // // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // //             <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">C1</div>
// // // // // // //             <div className="text-muted-foreground text-sm">English Level</div>
// // // // // // //           </div>
// // // // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // // //             <CountUp 
// // // // // // //               end={6} 
// // // // // // //               suffix="mo" 
// // // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // // // // //             />
// // // // // // //             <div className="text-muted-foreground text-sm">Internship</div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Certifications;
// // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// // // // // // import { useState, useEffect } from "react";

// // // // // // // Add fade animations styles
// // // // // // const fadeAnimationStyles = `
// // // // // //   @keyframes fadeDown {
// // // // // //     from {
// // // // // //       opacity: 0;
// // // // // //       transform: translateY(-30px);
// // // // // //     }
// // // // // //     to {
// // // // // //       opacity: 1;
// // // // // //       transform: translateY(0);
// // // // // //     }
// // // // // //   }

// // // // // //   @keyframes fadeUp {
// // // // // //     from {
// // // // // //       opacity: 0;
// // // // // //       transform: translateY(30px);
// // // // // //     }
// // // // // //     to {
// // // // // //       opacity: 1;
// // // // // //       transform: translateY(0);
// // // // // //     }
// // // // // //   }

// // // // // //   .animate-fade-down {
// // // // // //     animation: fadeDown 0.8s ease-out forwards;
// // // // // //   }

// // // // // //   .animate-fade-up {
// // // // // //     animation: fadeUp 0.8s ease-out forwards;
// // // // // //   }
// // // // // // `;

// // // // // // // Add style tag to document
// // // // // // if (typeof document !== 'undefined') {
// // // // // //   const styleSheet = document.createElement("style");
// // // // // //   styleSheet.textContent = fadeAnimationStyles;
// // // // // //   document.head.appendChild(styleSheet);
// // // // // // }


// // // // // // // CountUp component with countdown animation every 6 seconds
// // // // // // const CountUp = ({ end, suffix = "", className }) => {
// // // // // //   const [count, setCount] = useState(0);
// // // // // //   const [shouldRestart, setShouldRestart] = useState(false);
  
// // // // // //   useEffect(() => {
// // // // // //     const animate = () => {
// // // // // //       let current = 0;
// // // // // //       const increment = end / 50;
// // // // // //       const interval = setInterval(() => {
// // // // // //         current += increment;
// // // // // //         if (current >= end) {
// // // // // //           setCount(end);
// // // // // //           clearInterval(interval);
// // // // // //         } else {
// // // // // //           setCount(Math.floor(current));
// // // // // //         }
// // // // // //       }, 20);
      
// // // // // //       return () => clearInterval(interval);
// // // // // //     };

// // // // // //     // Initial animation
// // // // // //     const cleanup = animate();
    
// // // // // //     // Restart animation every 6 seconds
// // // // // //     const restartInterval = setInterval(() => {
// // // // // //       setCount(0);
// // // // // //       setTimeout(() => animate(), 100);
// // // // // //     }, 6000);
    
// // // // // //     return () => {
// // // // // //       cleanup();
// // // // // //       clearInterval(restartInterval);
// // // // // //     };
// // // // // //   }, [end]);
  
// // // // // //   return <div className={className}>{count}{suffix}</div>;
// // // // // // };

// // // // // // const Certifications = () => {
// // // // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // // // //   const [currentPage, setCurrentPage] = useState(0);
// // // // // //   const itemsPerPage = 3;

// // // // // //   // Scroll to top of certifications section when page changes
// // // // // //   const scrollToTop = () => {
// // // // // //     // Immediate scroll without delay
// // // // // //     const section = document.getElementById('certifications');
// // // // // //     if (section) {
// // // // // //       // Get the section's position relative to the document
// // // // // //       const rect = section.getBoundingClientRect();
// // // // // //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// // // // // //       const targetPosition = rect.top + scrollTop - 80; // 80px offset from top
      
// // // // // //       window.scrollTo({ 
// // // // // //         top: targetPosition, 
// // // // // //         behavior: 'smooth' 
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   // Reset to first page and scroll when component mounts or when user navigates back
// // // // // //   useEffect(() => {
// // // // // //     setCurrentPage(0);
// // // // // //   }, []);

// // // // // //   // Certificates in the requested order
// // // // // //   const certifications = [
// // // // // //     {
// // // // // //       title: "Web Developer Intern Certificate",
// // // // // //       issuer: "Webgeon Results Private Limited",
// // // // // //       date: "Jan-Jul 2025",
// // // // // //       type: "Internship Experience",
// // // // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // // // //       location: "Hyderabad",
// // // // // //       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
// // // // // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Microsoft Azure for Data Engineering",
// // // // // //       issuer: "Microsoft via Coursera",
// // // // // //       date: "Aug 2024", 
// // // // // //       type: "Professional Certification",
// // // // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // // // //       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
// // // // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // // // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "EF SET English Certificate",
// // // // // //       issuer: "EF SET",
// // // // // //       level: "C1 Advanced",
// // // // // //       score: "66/100",
// // // // // //       date: "Jan 2025",
// // // // // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // // // // //       type: "Professional Certification",
// // // // // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // // // // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "TechMaghi Certificate",
// // // // // //       issuer: "TechMaghi Institute",
// // // // // //       date: "2024",
// // // // // //       type: "Professional Certification",
// // // // // //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// // // // // //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// // // // // //       image: "/assets/certificates/techmaghi-cert.jpg"
      
// // // // // //     },
// // // // // //     {
// // // // // //       title: "NextGen Pro Certificate",
// // // // // //       issuer: "NextGen Professional Development",
// // // // // //       date: "2024",
// // // // // //       type: "Professional Certification",
// // // // // //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// // // // // //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// // // // // //       image: "/assets/certificates/nextgenpro-cert.png"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Getting Started with Microsoft Excel",
// // // // // //       issuer: "Coursera Project Network",
// // // // // //       date: "Jul 2024",
// // // // // //       type: "Professional Certification",
// // // // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // // // //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// // // // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // // // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "CMOS Digital VLSI Design",
// // // // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // // // //       date: "Jan-Mar 2024",
// // // // // //       score: "62%",
// // // // // //       type: "Education",
// // // // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // // // // //       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
// // // // // //       details: {
// // // // // //         assignments: "24.17/25",
// // // // // //         exam: "37.5/75",
// // // // // //         totalCandidates: 767
// // // // // //       },
// // // // // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // // // // //     }
// // // // // //   ];

// // // // // //   const getTypeColor = (type) => {
// // // // // //     switch (type) {
// // // // // //       case "Professional Experience":
// // // // // //         return "bg-emerald-100 text-emerald-800 border-emerald-200";
// // // // // //       case "Internship Experience":
// // // // // //         return "bg-green-100 text-green-800 border-green-200";
// // // // // //       case "Professional Certification":
// // // // // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // // // // //       case "Education":
// // // // // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // // // // //       default:
// // // // // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // // // // //     }
// // // // // //   };

// // // // // //   const downloadCertificate = (cert) => {
// // // // // //     const link = document.createElement('a');
// // // // // //     link.href = cert.image;
// // // // // //     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
// // // // // //     document.body.appendChild(link);
// // // // // //     link.click();
// // // // // //     document.body.removeChild(link);
// // // // // //   };

// // // // // //   return (
// // // // // //     <section id="certifications" className="relative py-20 px-4 md:px-4 overflow-hidden">
// // // // // //       {/* Premium Elegant Background - Light Mode Compatible */}
// // // // // //       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/20" />
// // // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />
// // // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-900/20" />
      
// // // // // //       {/* Subtle grid pattern */}
// // // // // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />
      
// // // // // //       {/* Floating orbs for depth */}
// // // // // //       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
// // // // // //       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
// // // // // //       <div className="container mx-auto px-0 md:px-4 relative z-10">
// // // // // //         <div className="text-center mb-16 animate-fade-down">
// // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
// // // // // //             Certifications & Achievements
// // // // // //           </h2>
// // // // // //           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full" />
// // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Pagination and Certificates Display */}
// // // // // //         <div className="space-y-8">
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // //             {certifications
// // // // // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // // // //               .map((cert, index) => (
// // // // // //               <Card 
// // // // // //                 key={cert.title}
// // // // // //                 className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-white/50 dark:border-slate-700/50 hover:shadow-2xl hover:border-blue-200/50 dark:hover:border-blue-700/50 transition-all duration-500 hover:-translate-y-2 group animate-fade-up h-full flex flex-col"
// // // // // //                 style={{ animationDelay: `${index * 0.15}s` }}
// // // // // //               >
// // // // // //                 {/* Certificate Image */}
// // // // // //                 <div className="relative overflow-hidden rounded-t-lg">
// // // // // //                   <img 
// // // // // //                     src={cert.image} 
// // // // // //                     alt={`${cert.title} Certificate`}
// // // // // //                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // // // //                   />
// // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // // // //                   <Dialog>
// // // // // //                     <DialogTrigger asChild>
// // // // // //                       <Button
// // // // // //                         size="sm"
// // // // // //                         variant="secondary"
// // // // // //                         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // // // // //                       >
// // // // // //                         <Maximize2 size={14} />
// // // // // //                       </Button>
// // // // // //                     </DialogTrigger>
// // // // // //                     <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // // // // //                       <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // // // // //                         <img 
// // // // // //                           src={cert.image} 
// // // // // //                           alt={`${cert.title} Certificate`}
// // // // // //                           className="max-w-full max-h-full object-contain"
// // // // // //                         />
// // // // // //                       </div>
// // // // // //                     </DialogContent>
// // // // // //                   </Dialog>
// // // // // //                 </div>

// // // // // //                 {/* Certificate Details - Always visible */}
// // // // // //                 <CardHeader className="pb-4">
// // // // // //                   <div className="flex items-start justify-between mb-3">
// // // // // //                     <Badge 
// // // // // //                       variant="outline" 
// // // // // //                       className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // // // // //                     >
// // // // // //                       {cert.type}
// // // // // //                     </Badge>
// // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // //                       <Calendar size={14} className="mr-1" />
// // // // // //                       {cert.date}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                   <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // // // // //                     {cert.title}
// // // // // //                   </CardTitle>
// // // // // //                   <CardDescription className="text-sm text-primary font-medium">
// // // // // //                     {cert.issuer}
// // // // // //                   </CardDescription>
// // // // // //                 </CardHeader>

// // // // // //                 <CardContent className="space-y-4 flex-1 flex flex-col">
// // // // // //                   <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // // // // //                     {cert.description}
// // // // // //                   </p>

// // // // // //                   {/* Score/Level Display */}
// // // // // //                   {(cert.score || cert.level) && (
// // // // // //                     <div className="flex gap-2 flex-wrap">
// // // // // //                       {cert.level && (
// // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // //                           Level: {cert.level}
// // // // // //                         </Badge>
// // // // // //                       )}
// // // // // //                       {cert.score && (
// // // // // //                         <Badge variant="secondary" className="text-xs">
// // // // // //                           Score: {cert.score}
// // // // // //                         </Badge>
// // // // // //                       )}
// // // // // //                     </div>
// // // // // //                   )}

// // // // // //                   {/* Skills Assessed - Now for all certificates */}
// // // // // //                   {cert.skills && (
// // // // // //                     <div>
// // // // // //                       <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // // // // //                       <div className="flex flex-wrap gap-1">
// // // // // //                         {cert.skills.map((skill) => (
// // // // // //                           <Badge 
// // // // // //                             key={skill} 
// // // // // //                             variant="outline" 
// // // // // //                             className="text-xs bg-primary/5 text-primary border-primary/20"
// // // // // //                           >
// // // // // //                             {skill}
// // // // // //                           </Badge>
// // // // // //                         ))}
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   )}

// // // // // //                   {/* Detailed scores for NPTEL */}
// // // // // //                   {cert.details && (
// // // // // //                     <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Assignments:</span>
// // // // // //                         <span className="font-medium">{cert.details.assignments}</span>
// // // // // //                       </div>
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Proctored Exam:</span>
// // // // // //                         <span className="font-medium">{cert.details.exam}</span>
// // // // // //                       </div>
// // // // // //                       <div className="flex justify-between text-muted-foreground">
// // // // // //                         <span>Total Candidates:</span>
// // // // // //                         <span>{cert.details.totalCandidates}</span>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   )}

// // // // // //                   {/* Location for internship */}
// // // // // //                   {cert.location && (
// // // // // //                     <div className="text-xs text-muted-foreground">
// // // // // //                       📍 {cert.location}
// // // // // //                     </div>
// // // // // //                   )}

// // // // // //                   {/* Action Buttons */}
// // // // // //                   <div className="pt-2 mt-auto space-y-2">
// // // // // //                     <Dialog>
// // // // // //                       <DialogTrigger asChild>
// // // // // //                         <Button 
// // // // // //                           variant="outline" 
// // // // // //                           size="sm" 
// // // // // //                           className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // // // // //                         >
// // // // // //                           <Eye size={12} className="mr-1" />
// // // // // //                           View Certificate
// // // // // //                         </Button>
// // // // // //                       </DialogTrigger>
// // // // // //                       <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // // // // //                         <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // // // // //                           <img 
// // // // // //                             src={cert.image} 
// // // // // //                             alt={`${cert.title} Certificate`}
// // // // // //                             className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // // // // //                           />
// // // // // //                         </div>
// // // // // //                       </DialogContent>
// // // // // //                     </Dialog>
// // // // // //                     <Button 
// // // // // //                       variant="secondary" 
// // // // // //                       size="sm" 
// // // // // //                       onClick={() => downloadCertificate(cert)}
// // // // // //                       className="w-full text-xs"
// // // // // //                     >
// // // // // //                       <Download size={12} className="mr-1" />
// // // // // //                       Download Certificate
// // // // // //                     </Button>
// // // // // //                   </div>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           {/* Pagination Controls with Left/Right Arrows */}
// // // // // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // // // //             <div className="flex justify-center items-center gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
// // // // // //               <Button
// // // // // //                 variant="outline"
// // // // // //                 size="lg"
// // // // // //                 onClick={() => {
// // // // // //                   const newPage = Math.max(0, currentPage - 1);
// // // // // //                   setCurrentPage(newPage);
// // // // // //                   setTimeout(() => scrollToTop(), 50);
// // // // // //                 }}
// // // // // //                 disabled={currentPage === 0}
// // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
// // // // // //               >
// // // // // //                 <ChevronLeft size={24} />
// // // // // //               </Button>
              
// // // // // //               <div className="flex items-center gap-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
// // // // // //                 <span className="text-muted-foreground text-sm">
// // // // // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // // // // //                 </span>
// // // // // //                 <div className="flex gap-2">
// // // // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // // // //                     <div
// // // // // //                       key={i}
// // // // // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // // // // //                         i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
// // // // // //                       }`}
// // // // // //                     />
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <Button
// // // // // //                 variant="outline"
// // // // // //                 size="lg"
// // // // // //                 onClick={() => {
// // // // // //                   const newPage = Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1);
// // // // // //                   setCurrentPage(newPage);
// // // // // //                   setTimeout(() => scrollToTop(), 50);
// // // // // //                 }}
// // // // // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
// // // // // //               >
// // // // // //                 <ChevronRight size={24} />
// // // // // //               </Button>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         {/* Stats Section with CountUp Animation (restarts every 6 seconds) */}
// // // // // //         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
// // // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // //             <CountUp 
// // // // // //               end={7} 
// // // // // //               suffix="+" 
// // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // // // //             />
// // // // // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // // // // //           </div>
// // // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // //             <CountUp 
// // // // // //               end={20} 
// // // // // //               suffix="+" 
// // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // // // //             />
// // // // // //             <div className="text-muted-foreground text-sm">Skills</div>
// // // // // //           </div>
// // // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // //             <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">C1</div>
// // // // // //             <div className="text-muted-foreground text-sm">English Level</div>
// // // // // //           </div>
// // // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // // //             <CountUp 
// // // // // //               end={6} 
// // // // // //               suffix="mo" 
// // // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // // // //             />
// // // // // //             <div className="text-muted-foreground text-sm">Internship</div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Certifications;
// // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // import { Badge } from "@/components/ui/badge";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// // // // // import { useState, useEffect } from "react";

// // // // // // Add fade animations styles
// // // // // const fadeAnimationStyles = `
// // // // //   @keyframes fadeDown {
// // // // //     from {
// // // // //       opacity: 0;
// // // // //       transform: translateY(-30px);
// // // // //     }
// // // // //     to {
// // // // //       opacity: 1;
// // // // //       transform: translateY(0);
// // // // //     }
// // // // //   }

// // // // //   @keyframes fadeUp {
// // // // //     from {
// // // // //       opacity: 0;
// // // // //       transform: translateY(30px);
// // // // //     }
// // // // //     to {
// // // // //       opacity: 1;
// // // // //       transform: translateY(0);
// // // // //     }
// // // // //   }

// // // // //   .animate-fade-down {
// // // // //     animation: fadeDown 0.8s ease-out forwards;
// // // // //   }

// // // // //   .animate-fade-up {
// // // // //     animation: fadeUp 0.8s ease-out forwards;
// // // // //   }
// // // // // `;

// // // // // // Add style tag to document
// // // // // if (typeof document !== 'undefined') {
// // // // //   const styleSheet = document.createElement("style");
// // // // //   styleSheet.textContent = fadeAnimationStyles;
// // // // //   document.head.appendChild(styleSheet);
// // // // // }


// // // // // // CountUp component with countdown animation every 6 seconds
// // // // // const CountUp = ({ end, suffix = "", className }) => {
// // // // //   const [count, setCount] = useState(0);
// // // // //   const [shouldRestart, setShouldRestart] = useState(false);
  
// // // // //   useEffect(() => {
// // // // //     const animate = () => {
// // // // //       let current = 0;
// // // // //       const increment = end / 50;
// // // // //       const interval = setInterval(() => {
// // // // //         current += increment;
// // // // //         if (current >= end) {
// // // // //           setCount(end);
// // // // //           clearInterval(interval);
// // // // //         } else {
// // // // //           setCount(Math.floor(current));
// // // // //         }
// // // // //       }, 20);
      
// // // // //       return () => clearInterval(interval);
// // // // //     };

// // // // //     // Initial animation
// // // // //     const cleanup = animate();
    
// // // // //     // Restart animation every 6 seconds
// // // // //     const restartInterval = setInterval(() => {
// // // // //       setCount(0);
// // // // //       setTimeout(() => animate(), 100);
// // // // //     }, 6000);
    
// // // // //     return () => {
// // // // //       cleanup();
// // // // //       clearInterval(restartInterval);
// // // // //     };
// // // // //   }, [end]);
  
// // // // //   return <div className={className}>{count}{suffix}</div>;
// // // // // };

// // // // // const Certifications = () => {
// // // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // // //   const [currentPage, setCurrentPage] = useState(0);
// // // // //   const itemsPerPage = 3;
// // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // //   // Scroll to top of certifications section when page changes
// // // // //   const scrollToTop = () => {
// // // // //     // Immediate scroll without delay
// // // // //     const section = document.getElementById('certifications');
// // // // //     if (section) {
// // // // //       // Get the section's position relative to the document
// // // // //       const rect = section.getBoundingClientRect();
// // // // //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// // // // //       const targetPosition = rect.top + scrollTop - 80; // 80px offset from top
      
// // // // //       window.scrollTo({ 
// // // // //         top: targetPosition, 
// // // // //         behavior: 'smooth' 
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   // Reset to first page and scroll when component mounts or when user navigates back
// // // // //   useEffect(() => {
// // // // //     setCurrentPage(0);
// // // // //   }, []);

// // // // //   // Intersection Observer to trigger animation when section is visible
// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((entry) => {
// // // // //           if (entry.isIntersecting) {
// // // // //             setIsVisible(true);
// // // // //           } else {
// // // // //             // Reset animation when leaving the section
// // // // //             setIsVisible(false);
// // // // //           }
// // // // //         });
// // // // //       },
// // // // //       {
// // // // //         threshold: 0.1, // Trigger when 10% of the section is visible
// // // // //         rootMargin: '0px 0px -100px 0px' // Trigger a bit before it comes into view
// // // // //       }
// // // // //     );

// // // // //     const section = document.getElementById('certifications');
// // // // //     if (section) {
// // // // //       observer.observe(section);
// // // // //     }

// // // // //     return () => {
// // // // //       if (section) {
// // // // //         observer.unobserve(section);
// // // // //       }
// // // // //     };
// // // // //   }, []);

// // // // //   // Certificates in the requested order
// // // // //   const certifications = [
// // // // //     {
// // // // //       title: "Web Developer Intern Certificate",
// // // // //       issuer: "Webgeon Results Private Limited",
// // // // //       date: "Jan-Jul 2025",
// // // // //       type: "Internship Experience",
// // // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // // //       location: "Hyderabad",
// // // // //       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
// // // // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // // // //     },
// // // // //     {
// // // // //       title: "Microsoft Azure for Data Engineering",
// // // // //       issuer: "Microsoft via Coursera",
// // // // //       date: "Aug 2024", 
// // // // //       type: "Professional Certification",
// // // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // // //       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
// // // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // // // //     },
// // // // //     {
// // // // //       title: "EF SET English Certificate",
// // // // //       issuer: "EF SET",
// // // // //       level: "C1 Advanced",
// // // // //       score: "66/100",
// // // // //       date: "Jan 2025",
// // // // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // // // //       type: "Professional Certification",
// // // // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // // // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // // // //     },
// // // // //     {
// // // // //       title: "TechMaghi Certificate",
// // // // //       issuer: "TechMaghi Institute",
// // // // //       date: "2024",
// // // // //       type: "Professional Certification",
// // // // //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// // // // //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// // // // //       image: "/assets/certificates/techmaghi-cert.jpg"
      
// // // // //     },
// // // // //     {
// // // // //       title: "NextGen Pro Certificate",
// // // // //       issuer: "NextGen Professional Development",
// // // // //       date: "2024",
// // // // //       type: "Professional Certification",
// // // // //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// // // // //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// // // // //       image: "/assets/certificates/nextgenpro-cert.png"
// // // // //     },
// // // // //     {
// // // // //       title: "Getting Started with Microsoft Excel",
// // // // //       issuer: "Coursera Project Network",
// // // // //       date: "Jul 2024",
// // // // //       type: "Professional Certification",
// // // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // // //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// // // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // // // //     },
// // // // //     {
// // // // //       title: "CMOS Digital VLSI Design",
// // // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // // //       date: "Jan-Mar 2024",
// // // // //       score: "62%",
// // // // //       type: "Education",
// // // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // // // //       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
// // // // //       details: {
// // // // //         assignments: "24.17/25",
// // // // //         exam: "37.5/75",
// // // // //         totalCandidates: 767
// // // // //       },
// // // // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // // // //     }
// // // // //   ];

// // // // //   const getTypeColor = (type) => {
// // // // //     switch (type) {
// // // // //       case "Professional Experience":
// // // // //         return "bg-emerald-100 text-emerald-800 border-emerald-200";
// // // // //       case "Internship Experience":
// // // // //         return "bg-green-100 text-green-800 border-green-200";
// // // // //       case "Professional Certification":
// // // // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // // // //       case "Education":
// // // // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // // // //       default:
// // // // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // // // //     }
// // // // //   };

// // // // //   const downloadCertificate = (cert) => {
// // // // //     const link = document.createElement('a');
// // // // //     link.href = cert.image;
// // // // //     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
// // // // //     document.body.appendChild(link);
// // // // //     link.click();
// // // // //     document.body.removeChild(link);
// // // // //   };

// // // // //   return (
// // // // //     <section id="certifications" className="relative py-20 px-4 md:px-4 overflow-hidden">
// // // // //       {/* Premium Elegant Background - Light Mode Compatible */}
// // // // //       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/20" />
// // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />
// // // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-900/20" />
      
// // // // //       {/* Subtle grid pattern */}
// // // // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />
      
// // // // //       {/* Floating orbs for depth */}
// // // // //       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
// // // // //       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
// // // // //       <div className="container mx-auto px-0 md:px-4 relative z-10">
// // // // //         <div className={`text-center mb-16 transition-opacity duration-300 ${isVisible ? 'animate-fade-down' : 'opacity-0'}`}>
// // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
// // // // //             Certifications & Achievements
// // // // //           </h2>
// // // // //           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full" />
// // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Pagination and Certificates Display */}
// // // // //         <div className="space-y-8">
// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // // //             {certifications
// // // // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // // //               .map((cert, index) => (
// // // // //               <Card 
// // // // //                 key={cert.title}
// // // // //                 className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-white/50 dark:border-slate-700/50 hover:shadow-2xl hover:border-blue-200/50 dark:hover:border-blue-700/50 transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
// // // // //                 style={{ animationDelay: isVisible ? `${index * 0.15}s` : '0s' }}
// // // // //               >
// // // // //                 {/* Certificate Image */}
// // // // //                 <div className="relative overflow-hidden rounded-t-lg">
// // // // //                   <img 
// // // // //                     src={cert.image} 
// // // // //                     alt={`${cert.title} Certificate`}
// // // // //                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // // //                   />
// // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // // //                   <Dialog>
// // // // //                     <DialogTrigger asChild>
// // // // //                       <Button
// // // // //                         size="sm"
// // // // //                         variant="secondary"
// // // // //                         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // // // //                       >
// // // // //                         <Maximize2 size={14} />
// // // // //                       </Button>
// // // // //                     </DialogTrigger>
// // // // //                     <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // // // //                       <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // // // //                         <img 
// // // // //                           src={cert.image} 
// // // // //                           alt={`${cert.title} Certificate`}
// // // // //                           className="max-w-full max-h-full object-contain"
// // // // //                         />
// // // // //                       </div>
// // // // //                     </DialogContent>
// // // // //                   </Dialog>
// // // // //                 </div>

// // // // //                 {/* Certificate Details - Always visible */}
// // // // //                 <CardHeader className="pb-4">
// // // // //                   <div className="flex items-start justify-between mb-3">
// // // // //                     <Badge 
// // // // //                       variant="outline" 
// // // // //                       className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // // // //                     >
// // // // //                       {cert.type}
// // // // //                     </Badge>
// // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // //                       <Calendar size={14} className="mr-1" />
// // // // //                       {cert.date}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // // // //                     {cert.title}
// // // // //                   </CardTitle>
// // // // //                   <CardDescription className="text-sm text-primary font-medium">
// // // // //                     {cert.issuer}
// // // // //                   </CardDescription>
// // // // //                 </CardHeader>

// // // // //                 <CardContent className="space-y-4 flex-1 flex flex-col">
// // // // //                   <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // // // //                     {cert.description}
// // // // //                   </p>

// // // // //                   {/* Score/Level Display */}
// // // // //                   {(cert.score || cert.level) && (
// // // // //                     <div className="flex gap-2 flex-wrap">
// // // // //                       {cert.level && (
// // // // //                         <Badge variant="secondary" className="text-xs">
// // // // //                           Level: {cert.level}
// // // // //                         </Badge>
// // // // //                       )}
// // // // //                       {cert.score && (
// // // // //                         <Badge variant="secondary" className="text-xs">
// // // // //                           Score: {cert.score}
// // // // //                         </Badge>
// // // // //                       )}
// // // // //                     </div>
// // // // //                   )}

// // // // //                   {/* Skills Assessed - Now for all certificates */}
// // // // //                   {cert.skills && (
// // // // //                     <div>
// // // // //                       <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // // // //                       <div className="flex flex-wrap gap-1">
// // // // //                         {cert.skills.map((skill) => (
// // // // //                           <Badge 
// // // // //                             key={skill} 
// // // // //                             variant="outline" 
// // // // //                             className="text-xs bg-primary/5 text-primary border-primary/20"
// // // // //                           >
// // // // //                             {skill}
// // // // //                           </Badge>
// // // // //                         ))}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   )}

// // // // //                   {/* Detailed scores for NPTEL */}
// // // // //                   {cert.details && (
// // // // //                     <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // // // //                       <div className="flex justify-between">
// // // // //                         <span>Assignments:</span>
// // // // //                         <span className="font-medium">{cert.details.assignments}</span>
// // // // //                       </div>
// // // // //                       <div className="flex justify-between">
// // // // //                         <span>Proctored Exam:</span>
// // // // //                         <span className="font-medium">{cert.details.exam}</span>
// // // // //                       </div>
// // // // //                       <div className="flex justify-between text-muted-foreground">
// // // // //                         <span>Total Candidates:</span>
// // // // //                         <span>{cert.details.totalCandidates}</span>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   )}

// // // // //                   {/* Location for internship */}
// // // // //                   {cert.location && (
// // // // //                     <div className="text-xs text-muted-foreground">
// // // // //                       📍 {cert.location}
// // // // //                     </div>
// // // // //                   )}

// // // // //                   {/* Action Buttons */}
// // // // //                   <div className="pt-2 mt-auto space-y-2">
// // // // //                     <Dialog>
// // // // //                       <DialogTrigger asChild>
// // // // //                         <Button 
// // // // //                           variant="outline" 
// // // // //                           size="sm" 
// // // // //                           className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // // // //                         >
// // // // //                           <Eye size={12} className="mr-1" />
// // // // //                           View Certificate
// // // // //                         </Button>
// // // // //                       </DialogTrigger>
// // // // //                       <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // // // //                         <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // // // //                           <img 
// // // // //                             src={cert.image} 
// // // // //                             alt={`${cert.title} Certificate`}
// // // // //                             className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // // // //                           />
// // // // //                         </div>
// // // // //                       </DialogContent>
// // // // //                     </Dialog>
// // // // //                     <Button 
// // // // //                       variant="secondary" 
// // // // //                       size="sm" 
// // // // //                       onClick={() => downloadCertificate(cert)}
// // // // //                       className="w-full text-xs"
// // // // //                     >
// // // // //                       <Download size={12} className="mr-1" />
// // // // //                       Download Certificate
// // // // //                     </Button>
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* Pagination Controls with Left/Right Arrows */}
// // // // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // // //             <div className={`flex justify-center items-center gap-6 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.4s' : '0s' }}>
// // // // //               <Button
// // // // //                 variant="outline"
// // // // //                 size="lg"
// // // // //                 onClick={() => {
// // // // //                   const newPage = Math.max(0, currentPage - 1);
// // // // //                   setCurrentPage(newPage);
// // // // //                   setTimeout(() => scrollToTop(), 50);
// // // // //                 }}
// // // // //                 disabled={currentPage === 0}
// // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
// // // // //               >
// // // // //                 <ChevronLeft size={24} />
// // // // //               </Button>
              
// // // // //               <div className="flex items-center gap-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
// // // // //                 <span className="text-muted-foreground text-sm">
// // // // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // // // //                 </span>
// // // // //                 <div className="flex gap-2">
// // // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // // //                     <div
// // // // //                       key={i}
// // // // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // // // //                         i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
// // // // //                       }`}
// // // // //                     />
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               <Button
// // // // //                 variant="outline"
// // // // //                 size="lg"
// // // // //                 onClick={() => {
// // // // //                   const newPage = Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1);
// // // // //                   setCurrentPage(newPage);
// // // // //                   setTimeout(() => scrollToTop(), 50);
// // // // //                 }}
// // // // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
// // // // //               >
// // // // //                 <ChevronRight size={24} />
// // // // //               </Button>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Stats Section with CountUp Animation (restarts every 6 seconds) */}
// // // // //         <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.6s' : '0s' }}>
// // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // //             <CountUp 
// // // // //               end={7} 
// // // // //               suffix="+" 
// // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // // //             />
// // // // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // // // //           </div>
// // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // //             <CountUp 
// // // // //               end={20} 
// // // // //               suffix="+" 
// // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // // //             />
// // // // //             <div className="text-muted-foreground text-sm">Skills</div>
// // // // //           </div>
// // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // //             <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">C1</div>
// // // // //             <div className="text-muted-foreground text-sm">English Level</div>
// // // // //           </div>
// // // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // // //             <CountUp 
// // // // //               end={6} 
// // // // //               suffix="mo" 
// // // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // // //             />
// // // // //             <div className="text-muted-foreground text-sm">Internship</div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Certifications;
// // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Badge } from "@/components/ui/badge";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// // // // import { useState, useEffect } from "react";

// // // // // Add fade animations styles
// // // // const fadeAnimationStyles = `
// // // //   @keyframes fadeDown {
// // // //     from {
// // // //       opacity: 0;
// // // //       transform: translateY(-30px);
// // // //     }
// // // //     to {
// // // //       opacity: 1;
// // // //       transform: translateY(0);
// // // //     }
// // // //   }

// // // //   @keyframes fadeUp {
// // // //     from {
// // // //       opacity: 0;
// // // //       transform: translateY(30px);
// // // //     }
// // // //     to {
// // // //       opacity: 1;
// // // //       transform: translateY(0);
// // // //     }
// // // //   }

// // // //   .animate-fade-down {
// // // //     animation: fadeDown 0.8s ease-out forwards;
// // // //   }

// // // //   .animate-fade-up {
// // // //     animation: fadeUp 0.8s ease-out forwards;
// // // //   }
// // // // `;

// // // // // Add style tag to document
// // // // if (typeof document !== 'undefined') {
// // // //   const styleSheet = document.createElement("style");
// // // //   styleSheet.textContent = fadeAnimationStyles;
// // // //   document.head.appendChild(styleSheet);
// // // // }


// // // // // CountUp component with countdown animation every 6 seconds
// // // // const CountUp = ({ end, suffix = "", className }) => {
// // // //   const [count, setCount] = useState(0);
// // // //   const [shouldRestart, setShouldRestart] = useState(false);
  
// // // //   useEffect(() => {
// // // //     const animate = () => {
// // // //       let current = 0;
// // // //       const increment = end / 50;
// // // //       const interval = setInterval(() => {
// // // //         current += increment;
// // // //         if (current >= end) {
// // // //           setCount(end);
// // // //           clearInterval(interval);
// // // //         } else {
// // // //           setCount(Math.floor(current));
// // // //         }
// // // //       }, 20);
      
// // // //       return () => clearInterval(interval);
// // // //     };

// // // //     // Initial animation
// // // //     const cleanup = animate();
    
// // // //     // Restart animation every 6 seconds
// // // //     const restartInterval = setInterval(() => {
// // // //       setCount(0);
// // // //       setTimeout(() => animate(), 100);
// // // //     }, 6000);
    
// // // //     return () => {
// // // //       cleanup();
// // // //       clearInterval(restartInterval);
// // // //     };
// // // //   }, [end]);
  
// // // //   return <div className={className}>{count}{suffix}</div>;
// // // // };

// // // // const Certifications = () => {
// // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // //   const [currentPage, setCurrentPage] = useState(0);
// // // //   const itemsPerPage = 3;
// // // //   const [isVisible, setIsVisible] = useState(false);

// // // //   // Scroll to top of certifications section when page changes
// // // //   const scrollToTop = () => {
// // // //     // Immediate scroll without delay
// // // //     const section = document.getElementById('certifications');
// // // //     if (section) {
// // // //       // Get the section's position relative to the document
// // // //       const rect = section.getBoundingClientRect();
// // // //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// // // //       const targetPosition = rect.top + scrollTop - 80; // 80px offset from top
      
// // // //       window.scrollTo({ 
// // // //         top: targetPosition, 
// // // //         behavior: 'smooth' 
// // // //       });
// // // //     }
// // // //   };

// // // //   // Reset to first page and scroll when component mounts or when user navigates back
// // // //   useEffect(() => {
// // // //     setCurrentPage(0);
// // // //   }, []);

// // // //   // Intersection Observer to trigger animation when section is visible
// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) {
// // // //             setIsVisible(true);
// // // //           } else {
// // // //             // Reset animation when leaving the section
// // // //             setIsVisible(false);
// // // //           }
// // // //         });
// // // //       },
// // // //       {
// // // //         threshold: 0.1, // Trigger when 10% of the section is visible
// // // //         rootMargin: '0px 0px -100px 0px' // Trigger a bit before it comes into view
// // // //       }
// // // //     );

// // // //     const section = document.getElementById('certifications');
// // // //     if (section) {
// // // //       observer.observe(section);
// // // //     }

// // // //     return () => {
// // // //       if (section) {
// // // //         observer.unobserve(section);
// // // //       }
// // // //     };
// // // //   }, []);

// // // //   // Certificates in the requested order
// // // //   const certifications = [
// // // //     {
// // // //       title: "Web Developer Intern Certificate",
// // // //       issuer: "Webgeon Results Private Limited",
// // // //       date: "Jan-Jul 2025",
// // // //       type: "Internship Experience",
// // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // //       location: "Hyderabad",
// // // //       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
// // // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // // //     },
// // // //     {
// // // //       title: "Microsoft Azure for Data Engineering",
// // // //       issuer: "Microsoft via Coursera",
// // // //       date: "Aug 2024", 
// // // //       type: "Professional Certification",
// // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // //       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
// // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // // //     },
// // // //     {
// // // //       title: "EF SET English Certificate",
// // // //       issuer: "EF SET",
// // // //       level: "C1 Advanced",
// // // //       score: "66/100",
// // // //       date: "Jan 2025",
// // // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // // //       type: "Professional Certification",
// // // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // // //     },
// // // //     {
// // // //       title: "TechMaghi Certificate",
// // // //       issuer: "TechMaghi Institute",
// // // //       date: "2024",
// // // //       type: "Professional Certification",
// // // //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// // // //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// // // //       image: "/assets/certificates/techmaghi-cert.jpg"
      
// // // //     },
// // // //     {
// // // //       title: "NextGen Pro Certificate",
// // // //       issuer: "NextGen Professional Development",
// // // //       date: "2024",
// // // //       type: "Professional Certification",
// // // //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// // // //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// // // //       image: "/assets/certificates/nextgenpro-cert.png"
// // // //     },
// // // //     {
// // // //       title: "Getting Started with Microsoft Excel",
// // // //       issuer: "Coursera Project Network",
// // // //       date: "Jul 2024",
// // // //       type: "Professional Certification",
// // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // // //     },
// // // //     {
// // // //       title: "CMOS Digital VLSI Design",
// // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // //       date: "Jan-Mar 2024",
// // // //       score: "62%",
// // // //       type: "Education",
// // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // // //       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
// // // //       details: {
// // // //         assignments: "24.17/25",
// // // //         exam: "37.5/75",
// // // //         totalCandidates: 767
// // // //       },
// // // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // // //     }
// // // //   ];

// // // //   const getTypeColor = (type) => {
// // // //     switch (type) {
// // // //       case "Professional Experience":
// // // //         return "bg-emerald-100 text-emerald-800 border-emerald-200";
// // // //       case "Internship Experience":
// // // //         return "bg-green-100 text-green-800 border-green-200";
// // // //       case "Professional Certification":
// // // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // // //       case "Education":
// // // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // // //       default:
// // // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // // //     }
// // // //   };

// // // //   const downloadCertificate = (cert) => {
// // // //     const link = document.createElement('a');
// // // //     link.href = cert.image;
// // // //     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
// // // //     document.body.appendChild(link);
// // // //     link.click();
// // // //     document.body.removeChild(link);
// // // //   };

// // // //   return (
// // // //     <section id="certifications" className="relative py-20 px-4 md:px-4 overflow-hidden">
// // // //       {/* Premium Elegant Background - Light Mode Compatible */}
// // // //       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-slate-950 dark:to-black" />
// // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-950/40 dark:via-transparent dark:to-transparent" />
// // // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-950/40 dark:via-transparent dark:to-transparent" />
      
// // // //       {/* Subtle grid pattern */}
// // // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      
// // // //       {/* Floating orbs for depth */}
// // // //       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse" />
// // // //       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
// // // //       <div className="container mx-auto px-0 md:px-4 relative z-10">
// // // //         <div className={`text-center mb-16 transition-opacity duration-300 ${isVisible ? 'animate-fade-down' : 'opacity-0'}`}>
// // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
// // // //             Certifications & Achievements
// // // //           </h2>
// // // //           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full" />
// // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // //           </p>
// // // //         </div>

// // // //         {/* Pagination and Certificates Display */}
// // // //         <div className="space-y-8">
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // // //             {certifications
// // // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // //               .map((cert, index) => (
// // // //               <Card 
// // // //                 key={cert.title}
// // // //                 className={`bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl border border-white/50 dark:border-gray-800/50 hover:shadow-2xl hover:border-blue-200/50 dark:hover:border-blue-800/50 transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
// // // //                 style={{ animationDelay: isVisible ? `${index * 0.15}s` : '0s' }}
// // // //               >
// // // //                 {/* Certificate Image */}
// // // //                 <div className="relative overflow-hidden rounded-t-lg">
// // // //                   <img 
// // // //                     src={cert.image} 
// // // //                     alt={`${cert.title} Certificate`}
// // // //                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // //                   />
// // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // //                   <Dialog>
// // // //                     <DialogTrigger asChild>
// // // //                       <Button
// // // //                         size="sm"
// // // //                         variant="secondary"
// // // //                         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // // //                       >
// // // //                         <Maximize2 size={14} />
// // // //                       </Button>
// // // //                     </DialogTrigger>
// // // //                     <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // // //                       <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // // //                         <img 
// // // //                           src={cert.image} 
// // // //                           alt={`${cert.title} Certificate`}
// // // //                           className="max-w-full max-h-full object-contain"
// // // //                         />
// // // //                       </div>
// // // //                     </DialogContent>
// // // //                   </Dialog>
// // // //                 </div>

// // // //                 {/* Certificate Details - Always visible */}
// // // //                 <CardHeader className="pb-4">
// // // //                   <div className="flex items-start justify-between mb-3">
// // // //                     <Badge 
// // // //                       variant="outline" 
// // // //                       className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // // //                     >
// // // //                       {cert.type}
// // // //                     </Badge>
// // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // //                       <Calendar size={14} className="mr-1" />
// // // //                       {cert.date}
// // // //                     </div>
// // // //                   </div>
// // // //                   <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // // //                     {cert.title}
// // // //                   </CardTitle>
// // // //                   <CardDescription className="text-sm text-primary font-medium">
// // // //                     {cert.issuer}
// // // //                   </CardDescription>
// // // //                 </CardHeader>

// // // //                 <CardContent className="space-y-4 flex-1 flex flex-col">
// // // //                   <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // // //                     {cert.description}
// // // //                   </p>

// // // //                   {/* Score/Level Display */}
// // // //                   {(cert.score || cert.level) && (
// // // //                     <div className="flex gap-2 flex-wrap">
// // // //                       {cert.level && (
// // // //                         <Badge variant="secondary" className="text-xs">
// // // //                           Level: {cert.level}
// // // //                         </Badge>
// // // //                       )}
// // // //                       {cert.score && (
// // // //                         <Badge variant="secondary" className="text-xs">
// // // //                           Score: {cert.score}
// // // //                         </Badge>
// // // //                       )}
// // // //                     </div>
// // // //                   )}

// // // //                   {/* Skills Assessed - Now for all certificates */}
// // // //                   {cert.skills && (
// // // //                     <div>
// // // //                       <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // // //                       <div className="flex flex-wrap gap-1">
// // // //                         {cert.skills.map((skill) => (
// // // //                           <Badge 
// // // //                             key={skill} 
// // // //                             variant="outline" 
// // // //                             className="text-xs bg-primary/5 text-primary border-primary/20"
// // // //                           >
// // // //                             {skill}
// // // //                           </Badge>
// // // //                         ))}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}

// // // //                   {/* Detailed scores for NPTEL */}
// // // //                   {cert.details && (
// // // //                     <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // // //                       <div className="flex justify-between">
// // // //                         <span>Assignments:</span>
// // // //                         <span className="font-medium">{cert.details.assignments}</span>
// // // //                       </div>
// // // //                       <div className="flex justify-between">
// // // //                         <span>Proctored Exam:</span>
// // // //                         <span className="font-medium">{cert.details.exam}</span>
// // // //                       </div>
// // // //                       <div className="flex justify-between text-muted-foreground">
// // // //                         <span>Total Candidates:</span>
// // // //                         <span>{cert.details.totalCandidates}</span>
// // // //                       </div>
// // // //                     </div>
// // // //                   )}

// // // //                   {/* Location for internship */}
// // // //                   {cert.location && (
// // // //                     <div className="text-xs text-muted-foreground">
// // // //                       📍 {cert.location}
// // // //                     </div>
// // // //                   )}

// // // //                   {/* Action Buttons */}
// // // //                   <div className="pt-2 mt-auto space-y-2">
// // // //                     <Dialog>
// // // //                       <DialogTrigger asChild>
// // // //                         <Button 
// // // //                           variant="outline" 
// // // //                           size="sm" 
// // // //                           className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // // //                         >
// // // //                           <Eye size={12} className="mr-1" />
// // // //                           View Certificate
// // // //                         </Button>
// // // //                       </DialogTrigger>
// // // //                       <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // // //                         <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // // //                           <img 
// // // //                             src={cert.image} 
// // // //                             alt={`${cert.title} Certificate`}
// // // //                             className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // // //                           />
// // // //                         </div>
// // // //                       </DialogContent>
// // // //                     </Dialog>
// // // //                     <Button 
// // // //                       variant="secondary" 
// // // //                       size="sm" 
// // // //                       onClick={() => downloadCertificate(cert)}
// // // //                       className="w-full text-xs"
// // // //                     >
// // // //                       <Download size={12} className="mr-1" />
// // // //                       Download Certificate
// // // //                     </Button>
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             ))}
// // // //           </div>

// // // //           {/* Pagination Controls with Left/Right Arrows */}
// // // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // //             <div className={`flex justify-center items-center gap-6 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.4s' : '0s' }}>
// // // //               <Button
// // // //                 variant="outline"
// // // //                 size="lg"
// // // //                 onClick={() => {
// // // //                   const newPage = Math.max(0, currentPage - 1);
// // // //                   setCurrentPage(newPage);
// // // //                   setTimeout(() => scrollToTop(), 50);
// // // //                 }}
// // // //                 disabled={currentPage === 0}
// // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
// // // //               >
// // // //                 <ChevronLeft size={24} />
// // // //               </Button>
              
// // // //               <div className="flex items-center gap-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
// // // //                 <span className="text-muted-foreground text-sm">
// // // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // // //                 </span>
// // // //                 <div className="flex gap-2">
// // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // //                     <div
// // // //                       key={i}
// // // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // // //                         i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
// // // //                       }`}
// // // //                     />
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               <Button
// // // //                 variant="outline"
// // // //                 size="lg"
// // // //                 onClick={() => {
// // // //                   const newPage = Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1);
// // // //                   setCurrentPage(newPage);
// // // //                   setTimeout(() => scrollToTop(), 50);
// // // //                 }}
// // // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
// // // //               >
// // // //                 <ChevronRight size={24} />
// // // //               </Button>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Stats Section with CountUp Animation (restarts every 6 seconds) */}
// // // //         <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.6s' : '0s' }}>
// // // //           <div className="text-center bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // //             <CountUp 
// // // //               end={7} 
// // // //               suffix="+" 
// // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // //             />
// // // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // // //           </div>
// // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // //             <CountUp 
// // // //               end={20} 
// // // //               suffix="+" 
// // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // //             />
// // // //             <div className="text-muted-foreground text-sm">Skills</div>
// // // //           </div>
// // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // //             <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">C1</div>
// // // //             <div className="text-muted-foreground text-sm">English Level</div>
// // // //           </div>
// // // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // // //             <CountUp 
// // // //               end={6} 
// // // //               suffix="mo" 
// // // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // // //             />
// // // //             <div className="text-muted-foreground text-sm">Internship</div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Certifications;
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";
// // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// // // import { useState, useEffect, memo } from "react";

// // // // Add fade animations styles
// // // const fadeAnimationStyles = `
// // //   @keyframes fadeDown {
// // //     from {
// // //       opacity: 0;
// // //       transform: translateY(-30px);
// // //     }
// // //     to {
// // //       opacity: 1;
// // //       transform: translateY(0);
// // //     }
// // //   }

// // //   @keyframes fadeUp {
// // //     from {
// // //       opacity: 0;
// // //       transform: translateY(30px);
// // //     }
// // //     to {
// // //       opacity: 1;
// // //       transform: translateY(0);
// // //     }
// // //   }

// // //   .animate-fade-down {
// // //     animation: fadeDown 0.8s ease-out forwards;
// // //   }

// // //   .animate-fade-up {
// // //     animation: fadeUp 0.8s ease-out forwards;
// // //   }
// // // `;

// // // // Add style tag to document
// // // if (typeof document !== 'undefined') {
// // //   const styleSheet = document.createElement("style");
// // //   styleSheet.textContent = fadeAnimationStyles;
// // //   document.head.appendChild(styleSheet);
// // // }

// // // // Optimized CountUp component
// // // const CountUp = memo(({ end, suffix = "", className }) => {
// // //   const [count, setCount] = useState(0);
  
// // //   useEffect(() => {
// // //     const animate = () => {
// // //       let current = 0;
// // //       const increment = end / 50;
// // //       const interval = setInterval(() => {
// // //         current += increment;
// // //         if (current >= end) {
// // //           setCount(end);
// // //           clearInterval(interval);
// // //         } else {
// // //           setCount(Math.floor(current));
// // //         }
// // //       }, 20);
      
// // //       return () => clearInterval(interval);
// // //     };

// // //     const cleanup = animate();
    
// // //     const restartInterval = setInterval(() => {
// // //       setCount(0);
// // //       setTimeout(() => animate(), 100);
// // //     }, 6000);
    
// // //     return () => {
// // //       cleanup();
// // //       clearInterval(restartInterval);
// // //     };
// // //   }, [end]);
  
// // //   return <div className={className}>{count}{suffix}</div>;
// // // });

// // // // Memoized Certificate Card component
// // // const CertificateCard = memo(({ cert, index, isVisible, getTypeColor, downloadCertificate }) => {
// // //   return (
// // //     <Card 
// // //       className={`bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl border border-white/50 dark:border-gray-800/50 hover:shadow-2xl hover:border-blue-200/50 dark:hover:border-blue-800/50 transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
// // //       style={{ animationDelay: isVisible ? `${index * 0.15}s` : '0s' }}
// // //     >
// // //       {/* Certificate Image */}
// // //       <div className="relative overflow-hidden rounded-t-lg bg-muted/20">
// // //         <img 
// // //           src={cert.image} 
// // //           alt={`${cert.title} Certificate`}
// // //           loading="lazy"
// // //           className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // //           onError={(e) => {
// // //             e.target.src = '/placeholder.svg';
// // //           }}
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // //         <Dialog>
// // //           <DialogTrigger asChild>
// // //             <Button
// // //               size="sm"
// // //               variant="secondary"
// // //               className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // //             >
// // //               <Maximize2 size={14} />
// // //             </Button>
// // //           </DialogTrigger>
// // //           <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // //             <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // //               <img 
// // //                 src={cert.image} 
// // //                 alt={`${cert.title} Certificate`}
// // //                 loading="lazy"
// // //                 className="max-w-full max-h-full object-contain"
// // //               />
// // //             </div>
// // //           </DialogContent>
// // //         </Dialog>
// // //       </div>

// // //       {/* Certificate Details */}
// // //       <CardHeader className="pb-4">
// // //         <div className="flex items-start justify-between mb-3">
// // //           <Badge 
// // //             variant="outline" 
// // //             className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // //           >
// // //             {cert.type}
// // //           </Badge>
// // //           <div className="flex items-center text-muted-foreground text-sm">
// // //             <Calendar size={14} className="mr-1" />
// // //             {cert.date}
// // //           </div>
// // //         </div>
// // //         <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // //           {cert.title}
// // //         </CardTitle>
// // //         <CardDescription className="text-sm text-primary font-medium">
// // //           {cert.issuer}
// // //         </CardDescription>
// // //       </CardHeader>

// // //       <CardContent className="space-y-4 flex-1 flex flex-col">
// // //         <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // //           {cert.description}
// // //         </p>

// // //         {/* Score/Level Display */}
// // //         {(cert.score || cert.level) && (
// // //           <div className="flex gap-2 flex-wrap">
// // //             {cert.level && (
// // //               <Badge variant="secondary" className="text-xs">
// // //                 Level: {cert.level}
// // //               </Badge>
// // //             )}
// // //             {cert.score && (
// // //               <Badge variant="secondary" className="text-xs">
// // //                 Score: {cert.score}
// // //               </Badge>
// // //             )}
// // //           </div>
// // //         )}

// // //         {/* Skills Assessed */}
// // //         {cert.skills && (
// // //           <div>
// // //             <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // //             <div className="flex flex-wrap gap-1">
// // //               {cert.skills.map((skill) => (
// // //                 <Badge 
// // //                   key={skill} 
// // //                   variant="outline" 
// // //                   className="text-xs bg-primary/5 text-primary border-primary/20"
// // //                 >
// // //                   {skill}
// // //                 </Badge>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Detailed scores for NPTEL */}
// // //         {cert.details && (
// // //           <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // //             <div className="flex justify-between">
// // //               <span>Assignments:</span>
// // //               <span className="font-medium">{cert.details.assignments}</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span>Proctored Exam:</span>
// // //               <span className="font-medium">{cert.details.exam}</span>
// // //             </div>
// // //             <div className="flex justify-between text-muted-foreground">
// // //               <span>Total Candidates:</span>
// // //               <span>{cert.details.totalCandidates}</span>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Location for internship */}
// // //         {cert.location && (
// // //           <div className="text-xs text-muted-foreground">
// // //             📍 {cert.location}
// // //           </div>
// // //         )}

// // //         {/* Action Buttons */}
// // //         <div className="pt-2 mt-auto space-y-2">
// // //           <Dialog>
// // //             <DialogTrigger asChild>
// // //               <Button 
// // //                 variant="outline" 
// // //                 size="sm" 
// // //                 className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // //               >
// // //                 <Eye size={12} className="mr-1" />
// // //                 View Certificate
// // //               </Button>
// // //             </DialogTrigger>
// // //             <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // //               <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // //                 <img 
// // //                   src={cert.image} 
// // //                   alt={`${cert.title} Certificate`}
// // //                   loading="lazy"
// // //                   className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // //                 />
// // //               </div>
// // //             </DialogContent>
// // //           </Dialog>
// // //           <Button 
// // //             variant="secondary" 
// // //             size="sm" 
// // //             onClick={() => downloadCertificate(cert)}
// // //             className="w-full text-xs"
// // //           >
// // //             <Download size={12} className="mr-1" />
// // //             Download Certificate
// // //           </Button>
// // //         </div>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // });

// // // const Certifications = () => {
// // //   const [selectedImage, setSelectedImage] = useState(null);
// // //   const [currentPage, setCurrentPage] = useState(0);
// // //   const itemsPerPage = 3;
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   // Scroll to top of certifications section when page changes
// // //   const scrollToTop = () => {
// // //     const section = document.getElementById('certifications');
// // //     if (section) {
// // //       const rect = section.getBoundingClientRect();
// // //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// // //       const targetPosition = rect.top + scrollTop - 80;
      
// // //       window.scrollTo({ 
// // //         top: targetPosition, 
// // //         behavior: 'smooth' 
// // //       });
// // //     }
// // //   };

// // //   // Reset to first page when component mounts
// // //   useEffect(() => {
// // //     setCurrentPage(0);
// // //   }, []);

// // //   // Optimized Intersection Observer - only triggers once
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting && !isVisible) {
// // //             setIsVisible(true);
// // //           }
// // //         });
// // //       },
// // //       {
// // //         threshold: 0.1,
// // //         rootMargin: '0px 0px -100px 0px'
// // //       }
// // //     );

// // //     const section = document.getElementById('certifications');
// // //     if (section) {
// // //       observer.observe(section);
// // //     }

// // //     return () => {
// // //       if (section) {
// // //         observer.unobserve(section);
// // //       }
// // //     };
// // //   }, [isVisible]);

// // //   // Certificates data
// // //   const certifications = [
// // //     {
// // //       title: "Web Developer Intern Certificate",
// // //       issuer: "Webgeon Results Private Limited",
// // //       date: "Jan-Jul 2025",
// // //       type: "Internship Experience",
// // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // //       location: "Hyderabad",
// // //       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
// // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // //     },
// // //     {
// // //       title: "Microsoft Azure for Data Engineering",
// // //       issuer: "Microsoft via Coursera",
// // //       date: "Aug 2024", 
// // //       type: "Professional Certification",
// // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // //       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
// // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // //     },
// // //     {
// // //       title: "EF SET English Certificate",
// // //       issuer: "EF SET",
// // //       level: "C1 Advanced",
// // //       score: "66/100",
// // //       date: "Jan 2025",
// // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // //       type: "Professional Certification",
// // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // //     },
// // //     {
// // //       title: "TechMaghi Certificate",
// // //       issuer: "TechMaghi Institute",
// // //       date: "2024",
// // //       type: "Professional Certification",
// // //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// // //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// // //       image: "/assets/certificates/techmaghi-cert.jpg"
// // //     },
// // //     {
// // //       title: "NextGen Pro Certificate",
// // //       issuer: "NextGen Professional Development",
// // //       date: "2024",
// // //       type: "Professional Certification",
// // //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// // //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// // //       image: "/assets/certificates/nextgenpro-cert.png"
// // //     },
// // //     {
// // //       title: "Getting Started with Microsoft Excel",
// // //       issuer: "Coursera Project Network",
// // //       date: "Jul 2024",
// // //       type: "Professional Certification",
// // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // //     },
// // //     {
// // //       title: "CMOS Digital VLSI Design",
// // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // //       date: "Jan-Mar 2024",
// // //       score: "62%",
// // //       type: "Education",
// // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // //       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
// // //       details: {
// // //         assignments: "24.17/25",
// // //         exam: "37.5/75",
// // //         totalCandidates: 767
// // //       },
// // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // //     }
// // //   ];

// // //   const getTypeColor = (type) => {
// // //     switch (type) {
// // //       case "Professional Experience":
// // //         return "bg-emerald-100 text-emerald-800 border-emerald-200";
// // //       case "Internship Experience":
// // //         return "bg-green-100 text-green-800 border-green-200";
// // //       case "Professional Certification":
// // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // //       case "Education":
// // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // //       default:
// // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // //     }
// // //   };

// // //   const downloadCertificate = (cert) => {
// // //     const link = document.createElement('a');
// // //     link.href = cert.image;
// // //     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
// // //     document.body.appendChild(link);
// // //     link.click();
// // //     document.body.removeChild(link);
// // //   };

// // //   return (
// // //     <section id="certifications" className="relative py-20 px-4 md:px-4 overflow-hidden">
// // //       {/* Premium Elegant Background */}
// // //       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-slate-950 dark:to-black" />
// // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-950/40 dark:via-transparent dark:to-transparent" />
// // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-950/40 dark:via-transparent dark:to-transparent" />
      
// // //       {/* Subtle grid pattern */}
// // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      
// // //       {/* Floating orbs for depth */}
// // //       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse" />
// // //       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
// // //       <div className="container mx-auto px-0 md:px-4 relative z-10">
// // //         <div className={`text-center mb-16 transition-opacity duration-300 ${isVisible ? 'animate-fade-down' : 'opacity-0'}`}>
// // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
// // //             Certifications & Achievements
// // //           </h2>
// // //           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full" />
// // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // //           </p>
// // //         </div>

// // //         {/* Pagination and Certificates Display */}
// // //         <div className="space-y-8">
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // //             {certifications
// // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // //               .map((cert, index) => (
// // //                 <CertificateCard
// // //                   key={cert.title}
// // //                   cert={cert}
// // //                   index={index}
// // //                   isVisible={isVisible}
// // //                   getTypeColor={getTypeColor}
// // //                   downloadCertificate={downloadCertificate}
// // //                 />
// // //               ))}
// // //           </div>

// // //           {/* Pagination Controls */}
// // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // //             <div className={`flex justify-center items-center gap-6 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.4s' : '0s' }}>
// // //               <Button
// // //                 variant="outline"
// // //                 size="lg"
// // //                 onClick={() => {
// // //                   const newPage = Math.max(0, currentPage - 1);
// // //                   setCurrentPage(newPage);
// // //                   setTimeout(() => scrollToTop(), 50);
// // //                 }}
// // //                 disabled={currentPage === 0}
// // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
// // //               >
// // //                 <ChevronLeft size={24} />
// // //               </Button>
              
// // //               <div className="flex items-center gap-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
// // //                 <span className="text-muted-foreground text-sm">
// // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // //                 </span>
// // //                 <div className="flex gap-2">
// // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // //                     <div
// // //                       key={i}
// // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // //                         i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
// // //                       }`}
// // //                     />
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <Button
// // //                 variant="outline"
// // //                 size="lg"
// // //                 onClick={() => {
// // //                   const newPage = Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1);
// // //                   setCurrentPage(newPage);
// // //                   setTimeout(() => scrollToTop(), 50);
// // //                 }}
// // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
// // //               >
// // //                 <ChevronRight size={24} />
// // //               </Button>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Stats Section with CountUp Animation */}
// // //         <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.6s' : '0s' }}>
// // //           <div className="text-center bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // //             <CountUp 
// // //               end={7} 
// // //               suffix="+" 
// // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // //             />
// // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // //           </div>
// // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // //             <CountUp 
// // //               end={20} 
// // //               suffix="+" 
// // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // //             />
// // //             <div className="text-muted-foreground text-sm">Skills</div>
// // //           </div>
// // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // //             <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">C1</div>
// // //             <div className="text-muted-foreground text-sm">English Level</div>
// // //           </div>
// // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // //             <CountUp 
// // //               end={6} 
// // //               suffix="mo" 
// // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // //             />
// // //             <div className="text-muted-foreground text-sm">Internship</div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Certifications;
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";
// // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// // // import { useState, useEffect, memo } from "react";

// // // // Add fade animations styles
// // // const fadeAnimationStyles = `
// // //   @keyframes fadeDown {
// // //     from {
// // //       opacity: 0;
// // //       transform: translateY(-30px);
// // //     }
// // //     to {
// // //       opacity: 1;
// // //       transform: translateY(0);
// // //     }
// // //   }

// // //   @keyframes fadeUp {
// // //     from {
// // //       opacity: 0;
// // //       transform: translateY(30px);
// // //     }
// // //     to {
// // //       opacity: 1;
// // //       transform: translateY(0);
// // //     }
// // //   }

// // //   .animate-fade-down {
// // //     animation: fadeDown 0.8s ease-out forwards;
// // //   }

// // //   .animate-fade-up {
// // //     animation: fadeUp 0.8s ease-out forwards;
// // //   }
// // // `;

// // // // Add style tag to document
// // // if (typeof document !== 'undefined') {
// // //   const styleSheet = document.createElement("style");
// // //   styleSheet.textContent = fadeAnimationStyles;
// // //   document.head.appendChild(styleSheet);
// // // }

// // // // Optimized CountUp component
// // // interface CountUpProps {
// // //   end: number;
// // //   suffix?: string;
// // //   className?: string;
// // // }

// // // const CountUp = memo(({ end, suffix = "", className }: CountUpProps) => {
// // //   const [count, setCount] = useState(0);
  
// // //   useEffect(() => {
// // //     const animate = () => {
// // //       let current = 0;
// // //       const increment = end / 50;
// // //       const interval = setInterval(() => {
// // //         current += increment;
// // //         if (current >= end) {
// // //           setCount(end);
// // //           clearInterval(interval);
// // //         } else {
// // //           setCount(Math.floor(current));
// // //         }
// // //       }, 20);
      
// // //       return () => clearInterval(interval);
// // //     };

// // //     const cleanup = animate();
    
// // //     const restartInterval = setInterval(() => {
// // //       setCount(0);
// // //       setTimeout(() => animate(), 100);
// // //     }, 6000);
    
// // //     return () => {
// // //       cleanup();
// // //       clearInterval(restartInterval);
// // //     };
// // //   }, [end]);
  
// // //   return <div className={className}>{count}{suffix}</div>;
// // // });

// // // // Define interfaces for type safety
// // // interface Certificate {
// // //   title: string;
// // //   issuer: string;
// // //   date: string;
// // //   type: string;
// // //   description: string;
// // //   location?: string;
// // //   skills?: string[];
// // //   image: string;
// // //   score?: string;
// // //   level?: string;
// // //   verifyUrl?: string;
// // //   details?: {
// // //     assignments: string;
// // //     exam: string;
// // //     totalCandidates: number;
// // //   };
// // // }

// // // interface CertificateCardProps {
// // //   cert: Certificate;
// // //   index: number;
// // //   isVisible: boolean;
// // //   getTypeColor: (type: string) => string;
// // //   downloadCertificate: (cert: Certificate) => void;
// // // }

// // // // Memoized Certificate Card component
// // // const CertificateCard = memo(({ cert, index, isVisible, getTypeColor, downloadCertificate }: CertificateCardProps) => {
// // //   return (
// // //     <Card 
// // //       className={`bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl border border-white/50 dark:border-gray-800/50 hover:shadow-2xl hover:border-blue-200/50 dark:hover:border-blue-800/50 transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
// // //       style={{ animationDelay: isVisible ? `${index * 0.15}s` : '0s' }}
// // //     >
// // //       {/* Certificate Image */}
// // //       <div className="relative overflow-hidden rounded-t-lg bg-muted/20">
// // //         <img 
// // //           src={cert.image} 
// // //           alt={`${cert.title} Certificate`}
// // //           loading="lazy"
// // //           className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // //           onError={(e) => {
// // //             (e.target as HTMLImageElement).src = '/placeholder.svg';
// // //           }}
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // //         <Dialog>
// // //           <DialogTrigger asChild>
// // //             <Button
// // //               size="sm"
// // //               variant="secondary"
// // //               className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // //             >
// // //               <Maximize2 size={14} />
// // //             </Button>
// // //           </DialogTrigger>
// // //           <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // //             <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // //               <img 
// // //                 src={cert.image} 
// // //                 alt={`${cert.title} Certificate`}
// // //                 loading="lazy"
// // //                 className="max-w-full max-h-full object-contain"
// // //               />
// // //             </div>
// // //           </DialogContent>
// // //         </Dialog>
// // //       </div>

// // //       {/* Certificate Details */}
// // //       <CardHeader className="pb-4">
// // //         <div className="flex items-start justify-between mb-3">
// // //           <Badge 
// // //             variant="outline" 
// // //             className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // //           >
// // //             {cert.type}
// // //           </Badge>
// // //           <div className="flex items-center text-muted-foreground text-sm">
// // //             <Calendar size={14} className="mr-1" />
// // //             {cert.date}
// // //           </div>
// // //         </div>
// // //         <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // //           {cert.title}
// // //         </CardTitle>
// // //         <CardDescription className="text-sm text-primary font-medium">
// // //           {cert.issuer}
// // //         </CardDescription>
// // //       </CardHeader>

// // //       <CardContent className="space-y-4 flex-1 flex flex-col">
// // //         <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // //           {cert.description}
// // //         </p>

// // //         {/* Score/Level Display */}
// // //         {(cert.score || cert.level) && (
// // //           <div className="flex gap-2 flex-wrap">
// // //             {cert.level && (
// // //               <Badge variant="secondary" className="text-xs">
// // //                 Level: {cert.level}
// // //               </Badge>
// // //             )}
// // //             {cert.score && (
// // //               <Badge variant="secondary" className="text-xs">
// // //                 Score: {cert.score}
// // //               </Badge>
// // //             )}
// // //           </div>
// // //         )}

// // //         {/* Skills Assessed */}
// // //         {cert.skills && (
// // //           <div>
// // //             <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // //             <div className="flex flex-wrap gap-1">
// // //               {cert.skills.map((skill) => (
// // //                 <Badge 
// // //                   key={skill} 
// // //                   variant="outline" 
// // //                   className="text-xs bg-primary/5 text-primary border-primary/20"
// // //                 >
// // //                   {skill}
// // //                 </Badge>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Detailed scores for NPTEL */}
// // //         {cert.details && (
// // //           <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // //             <div className="flex justify-between">
// // //               <span>Assignments:</span>
// // //               <span className="font-medium">{cert.details.assignments}</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span>Proctored Exam:</span>
// // //               <span className="font-medium">{cert.details.exam}</span>
// // //             </div>
// // //             <div className="flex justify-between text-muted-foreground">
// // //               <span>Total Candidates:</span>
// // //               <span>{cert.details.totalCandidates}</span>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Location for internship */}
// // //         {cert.location && (
// // //           <div className="text-xs text-muted-foreground">
// // //             📍 {cert.location}
// // //           </div>
// // //         )}

// // //         {/* Action Buttons */}
// // //         <div className="pt-2 mt-auto space-y-2">
// // //           <Dialog>
// // //             <DialogTrigger asChild>
// // //               <Button 
// // //                 variant="outline" 
// // //                 size="sm" 
// // //                 className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // //               >
// // //                 <Eye size={12} className="mr-1" />
// // //                 View Certificate
// // //               </Button>
// // //             </DialogTrigger>
// // //             <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // //               <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // //                 <img 
// // //                   src={cert.image} 
// // //                   alt={`${cert.title} Certificate`}
// // //                   loading="lazy"
// // //                   className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // //                 />
// // //               </div>
// // //             </DialogContent>
// // //           </Dialog>
// // //           <Button 
// // //             variant="secondary" 
// // //             size="sm" 
// // //             onClick={() => downloadCertificate(cert)}
// // //             className="w-full text-xs"
// // //           >
// // //             <Download size={12} className="mr-1" />
// // //             Download Certificate
// // //           </Button>
// // //         </div>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // });

// // // const Certifications = () => {
// // //   const [selectedImage, setSelectedImage] = useState(null);
// // //   const [currentPage, setCurrentPage] = useState(0);
// // //   const itemsPerPage = 3;
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   // Scroll to top of certifications section when page changes
// // //   const scrollToTop = () => {
// // //     const section = document.getElementById('certifications');
// // //     if (section) {
// // //       const rect = section.getBoundingClientRect();
// // //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// // //       const targetPosition = rect.top + scrollTop - 80;
      
// // //       window.scrollTo({ 
// // //         top: targetPosition, 
// // //         behavior: 'smooth' 
// // //       });
// // //     }
// // //   };

// // //   // Reset to first page when component mounts
// // //   useEffect(() => {
// // //     setCurrentPage(0);
// // //   }, []);

// // //   // Intersection Observer - triggers animation every time section comes into view
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             setIsVisible(true);
// // //           } else {
// // //             // Reset animation when leaving the section
// // //             setIsVisible(false);
// // //           }
// // //         });
// // //       },
// // //       {
// // //         threshold: 0.1,
// // //         rootMargin: '0px 0px -100px 0px'
// // //       }
// // //     );

// // //     const section = document.getElementById('certifications');
// // //     if (section) {
// // //       observer.observe(section);
// // //     }

// // //     return () => {
// // //       if (section) {
// // //         observer.unobserve(section);
// // //       }
// // //     };
// // //   }, []);

// // //   // Certificates data
// // //   const certifications = [
// // //     {
// // //       title: "Web Developer Intern Certificate",
// // //       issuer: "Webgeon Results Private Limited",
// // //       date: "Jan-Jul 2025",
// // //       type: "Internship Experience",
// // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // //       location: "Hyderabad",
// // //       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
// // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // //     },
// // //     {
// // //       title: "Microsoft Azure for Data Engineering",
// // //       issuer: "Microsoft via Coursera",
// // //       date: "Aug 2024", 
// // //       type: "Professional Certification",
// // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // //       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
// // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // //     },
// // //     {
// // //       title: "EF SET English Certificate",
// // //       issuer: "EF SET",
// // //       level: "C1 Advanced",
// // //       score: "66/100",
// // //       date: "Jan 2025",
// // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // //       type: "Professional Certification",
// // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // //     },
// // //     {
// // //       title: "TechMaghi Certificate",
// // //       issuer: "TechMaghi Institute",
// // //       date: "2024",
// // //       type: "Professional Certification",
// // //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// // //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// // //       image: "/assets/certificates/techmaghi-cert.jpg"
// // //     },
// // //     {
// // //       title: "NextGen Pro Certificate",
// // //       issuer: "NextGen Professional Development",
// // //       date: "2024",
// // //       type: "Professional Certification",
// // //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// // //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// // //       image: "/assets/certificates/nextgenpro-cert.png"
// // //     },
// // //     {
// // //       title: "Getting Started with Microsoft Excel",
// // //       issuer: "Coursera Project Network",
// // //       date: "Jul 2024",
// // //       type: "Professional Certification",
// // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // //     },
// // //     {
// // //       title: "CMOS Digital VLSI Design",
// // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // //       date: "Jan-Mar 2024",
// // //       score: "62%",
// // //       type: "Education",
// // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // //       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
// // //       details: {
// // //         assignments: "24.17/25",
// // //         exam: "37.5/75",
// // //         totalCandidates: 767
// // //       },
// // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // //     }
// // //   ];

// // //   const getTypeColor = (type) => {
// // //     switch (type) {
// // //       case "Professional Experience":
// // //         return "bg-emerald-100 text-emerald-800 border-emerald-200";
// // //       case "Internship Experience":
// // //         return "bg-green-100 text-green-800 border-green-200";
// // //       case "Professional Certification":
// // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // //       case "Education":
// // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // //       default:
// // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // //     }
// // //   };

// // //   const downloadCertificate = (cert) => {
// // //     const link = document.createElement('a');
// // //     link.href = cert.image;
// // //     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
// // //     document.body.appendChild(link);
// // //     link.click();
// // //     document.body.removeChild(link);
// // //   };

// // //   return (
// // //     <section id="certifications" className="relative py-20 px-4 md:px-4 overflow-hidden">
// // //       {/* Premium Elegant Background */}
// // //       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-slate-950 dark:to-black" />
// // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-950/40 dark:via-transparent dark:to-transparent" />
// // //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-950/40 dark:via-transparent dark:to-transparent" />
      
// // //       {/* Subtle grid pattern */}
// // //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      
// // //       {/* Floating orbs for depth */}
// // //       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse" />
// // //       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
// // //       <div className="container mx-auto px-0 md:px-4 relative z-10">
// // //         <div className={`text-center mb-16 transition-opacity duration-300 ${isVisible ? 'animate-fade-down' : 'opacity-0'}`}>
// // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
// // //             Certifications & Achievements
// // //           </h2>
// // //           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full" />
// // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // //           </p>
// // //         </div>

// // //         {/* Pagination and Certificates Display */}
// // //         <div className="space-y-8">
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // //             {certifications
// // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // //               .map((cert, index) => (
// // //                 <CertificateCard
// // //                   key={cert.title}
// // //                   cert={cert}
// // //                   index={index}
// // //                   isVisible={isVisible}
// // //                   getTypeColor={getTypeColor}
// // //                   downloadCertificate={downloadCertificate}
// // //                 />
// // //               ))}
// // //           </div>

// // //           {/* Pagination Controls */}
// // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // //             <div className={`flex justify-center items-center gap-6 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.4s' : '0s' }}>
// // //               <Button
// // //                 variant="outline"
// // //                 size="lg"
// // //                 onClick={() => {
// // //                   const newPage = Math.max(0, currentPage - 1);
// // //                   setCurrentPage(newPage);
// // //                   setTimeout(() => scrollToTop(), 50);
// // //                 }}
// // //                 disabled={currentPage === 0}
// // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
// // //               >
// // //                 <ChevronLeft size={24} />
// // //               </Button>
              
// // //               <div className="flex items-center gap-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
// // //                 <span className="text-muted-foreground text-sm">
// // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // //                 </span>
// // //                 <div className="flex gap-2">
// // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // //                     <div
// // //                       key={i}
// // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // //                         i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
// // //                       }`}
// // //                     />
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <Button
// // //                 variant="outline"
// // //                 size="lg"
// // //                 onClick={() => {
// // //                   const newPage = Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1);
// // //                   setCurrentPage(newPage);
// // //                   setTimeout(() => scrollToTop(), 50);
// // //                 }}
// // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
// // //               >
// // //                 <ChevronRight size={24} />
// // //               </Button>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Stats Section with CountUp Animation */}
// // //         <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.6s' : '0s' }}>
// // //           <div className="text-center bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // //             <CountUp 
// // //               end={7} 
// // //               suffix="+" 
// // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // //             />
// // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // //           </div>
// // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // //             <CountUp 
// // //               end={20} 
// // //               suffix="+" 
// // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // //             />
// // //             <div className="text-muted-foreground text-sm">Skills</div>
// // //           </div>
// // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // //             <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">C1</div>
// // //             <div className="text-muted-foreground text-sm">English Level</div>
// // //           </div>
// // //           <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// // //             <CountUp 
// // //               end={6} 
// // //               suffix="mo" 
// // //               className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// // //             />
// // //             <div className="text-muted-foreground text-sm">Internship</div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Certifications;
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// // import { useState, useEffect, useRef, memo } from "react";

// // // Optimized CountUp component
// // interface CountUpProps {
// //   end: number;
// //   suffix?: string;
// //   className?: string;
// // }

// // const CountUp = memo(({ end, suffix = "", className }: CountUpProps) => {
// //   const [count, setCount] = useState(0);
  
// //   useEffect(() => {
// //     const animate = () => {
// //       let current = 0;
// //       const increment = end / 50;
// //       const interval = setInterval(() => {
// //         current += increment;
// //         if (current >= end) {
// //           setCount(end);
// //           clearInterval(interval);
// //         } else {
// //           setCount(Math.floor(current));
// //         }
// //       }, 20);
      
// //       return () => clearInterval(interval);
// //     };

// //     const cleanup = animate();
    
// //     const restartInterval = setInterval(() => {
// //       setCount(0);
// //       setTimeout(() => animate(), 100);
// //     }, 6000);
    
// //     return () => {
// //       cleanup();
// //       clearInterval(restartInterval);
// //     };
// //   }, [end]);
  
// //   return <div className={className}>{count}{suffix}</div>;
// // });

// // // Define interfaces for type safety
// // interface Certificate {
// //   title: string;
// //   issuer: string;
// //   date: string;
// //   type: string;
// //   description: string;
// //   location?: string;
// //   skills?: string[];
// //   image: string;
// //   score?: string;
// //   level?: string;
// //   verifyUrl?: string;
// //   details?: {
// //     assignments: string;
// //     exam: string;
// //     totalCandidates: number;
// //   };
// // }

// // interface CertificateCardProps {
// //   cert: Certificate;
// //   index: number;
// //   isVisible: boolean;
// //   getTypeColor: (type: string) => string;
// //   downloadCertificate: (cert: Certificate) => void;
// // }

// // // Memoized Certificate Card component
// // const CertificateCard = memo(({ cert, index, isVisible, getTypeColor, downloadCertificate }: CertificateCardProps) => {
// //   return (
// //     <Card 
// //       className={`bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl border border-white/50 dark:border-gray-800/50 hover:shadow-2xl hover:border-blue-200/50 dark:hover:border-blue-800/50 transition-all duration-700 hover:-translate-y-2 group h-full flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// //       style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0s' }}
// //     >
// //       {/* Certificate Image */}
// //       <div className="relative overflow-hidden rounded-t-lg bg-muted/20">
// //         <img 
// //           src={cert.image} 
// //           alt={`${cert.title} Certificate`}
// //           loading="lazy"
// //           className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// //           onError={(e) => {
// //             (e.target as HTMLImageElement).src = '/placeholder.svg';
// //           }}
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //         <Dialog>
// //           <DialogTrigger asChild>
// //             <Button
// //               size="sm"
// //               variant="secondary"
// //               className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// //             >
// //               <Maximize2 size={14} />
// //             </Button>
// //           </DialogTrigger>
// //           <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// //             <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// //               <img 
// //                 src={cert.image} 
// //                 alt={`${cert.title} Certificate`}
// //                 loading="lazy"
// //                 className="max-w-full max-h-full object-contain"
// //               />
// //             </div>
// //           </DialogContent>
// //         </Dialog>
// //       </div>

// //       {/* Certificate Details */}
// //       <CardHeader className="pb-4">
// //         <div className="flex items-start justify-between mb-3">
// //           <Badge 
// //             variant="outline" 
// //             className={`${getTypeColor(cert.type)} text-xs font-medium`}
// //           >
// //             {cert.type}
// //           </Badge>
// //           <div className="flex items-center text-muted-foreground text-sm">
// //             <Calendar size={14} className="mr-1" />
// //             {cert.date}
// //           </div>
// //         </div>
// //         <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// //           {cert.title}
// //         </CardTitle>
// //         <CardDescription className="text-sm text-primary font-medium">
// //           {cert.issuer}
// //         </CardDescription>
// //       </CardHeader>

// //       <CardContent className="space-y-4 flex-1 flex flex-col">
// //         <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// //           {cert.description}
// //         </p>

// //         {/* Score/Level Display */}
// //         {(cert.score || cert.level) && (
// //           <div className="flex gap-2 flex-wrap">
// //             {cert.level && (
// //               <Badge variant="secondary" className="text-xs">
// //                 Level: {cert.level}
// //               </Badge>
// //             )}
// //             {cert.score && (
// //               <Badge variant="secondary" className="text-xs">
// //                 Score: {cert.score}
// //               </Badge>
// //             )}
// //           </div>
// //         )}

// //         {/* Skills Assessed */}
// //         {cert.skills && (
// //           <div>
// //             <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// //             <div className="flex flex-wrap gap-1">
// //               {cert.skills.map((skill) => (
// //                 <Badge 
// //                   key={skill} 
// //                   variant="outline" 
// //                   className="text-xs bg-primary/5 text-primary border-primary/20"
// //                 >
// //                   {skill}
// //                 </Badge>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Detailed scores for NPTEL */}
// //         {cert.details && (
// //           <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// //             <div className="flex justify-between">
// //               <span>Assignments:</span>
// //               <span className="font-medium">{cert.details.assignments}</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Proctored Exam:</span>
// //               <span className="font-medium">{cert.details.exam}</span>
// //             </div>
// //             <div className="flex justify-between text-muted-foreground">
// //               <span>Total Candidates:</span>
// //               <span>{cert.details.totalCandidates}</span>
// //             </div>
// //           </div>
// //         )}

// //         {/* Location for internship */}
// //         {cert.location && (
// //           <div className="text-xs text-muted-foreground">
// //             📍 {cert.location}
// //           </div>
// //         )}

// //         {/* Action Buttons */}
// //         <div className="pt-2 mt-auto space-y-2">
// //           <Dialog>
// //             <DialogTrigger asChild>
// //               <Button 
// //                 variant="outline" 
// //                 size="sm" 
// //                 className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// //               >
// //                 <Eye size={12} className="mr-1" />
// //                 View Certificate
// //               </Button>
// //             </DialogTrigger>
// //             <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// //               <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// //                 <img 
// //                   src={cert.image} 
// //                   alt={`${cert.title} Certificate`}
// //                   loading="lazy"
// //                   className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// //                 />
// //               </div>
// //             </DialogContent>
// //           </Dialog>
// //           <Button 
// //             variant="secondary" 
// //             size="sm" 
// //             onClick={() => downloadCertificate(cert)}
// //             className="w-full text-xs"
// //           >
// //             <Download size={12} className="mr-1" />
// //             Download Certificate
// //           </Button>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // });

// // const Certifications = () => {
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [currentPage, setCurrentPage] = useState(0);
// //   const itemsPerPage = 3;
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [statsVisible, setStatsVisible] = useState(false);
// //   const sectionRef = useRef(null);
// //   const statsRef = useRef(null);

// //   // Scroll to top of certifications section when page changes
// //   const scrollToTop = () => {
// //     const section = document.getElementById('certifications');
// //     if (section) {
// //       const rect = section.getBoundingClientRect();
// //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// //       const targetPosition = rect.top + scrollTop - 80;
      
// //       window.scrollTo({ 
// //         top: targetPosition, 
// //         behavior: 'smooth' 
// //       });
// //     }
// //   };

// //   // Reset to first page when component mounts
// //   useEffect(() => {
// //     setCurrentPage(0);
// //   }, []);

// //   // Intersection Observer for main section
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setIsVisible(true);
// //           } else {
// //             setIsVisible(false);
// //           }
// //         });
// //       },
// //       { 
// //         threshold: 0.1,
// //         rootMargin: "0px"
// //       }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => {
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   // Intersection Observer for stats section
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setStatsVisible(true);
// //           } else {
// //             setStatsVisible(false);
// //           }
// //         });
// //       },
// //       { 
// //         threshold: 0.1,
// //         rootMargin: "0px"
// //       }
// //     );

// //     if (statsRef.current) {
// //       observer.observe(statsRef.current);
// //     }

// //     return () => {
// //       if (statsRef.current) {
// //         observer.unobserve(statsRef.current);
// //       }
// //     };
// //   }, []);

// //   // Certificates data
// //   const certifications = [
// //     {
// //       title: "Web Developer Intern Certificate",
// //       issuer: "Webgeon Results Private Limited",
// //       date: "Jan-Jul 2025",
// //       type: "Internship Experience",
// //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// //       location: "Hyderabad",
// //       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
// //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// //     },
// //     {
// //       title: "Microsoft Azure for Data Engineering",
// //       issuer: "Microsoft via Coursera",
// //       date: "Aug 2024", 
// //       type: "Professional Certification",
// //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// //       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
// //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// //     },
// //     {
// //       title: "EF SET English Certificate",
// //       issuer: "EF SET",
// //       level: "C1 Advanced",
// //       score: "66/100",
// //       date: "Jan 2025",
// //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// //       type: "Professional Certification",
// //       description: "English proficiency certification demonstrating advanced level communication skills",
// //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// //     },
// //     {
// //       title: "TechMaghi Certificate",
// //       issuer: "TechMaghi Institute",
// //       date: "2024",
// //       type: "Professional Certification",
// //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// //       image: "/assets/certificates/techmaghi-cert.jpg"
// //     },
// //     {
// //       title: "NextGen Pro Certificate",
// //       issuer: "NextGen Professional Development",
// //       date: "2024",
// //       type: "Professional Certification",
// //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// //       image: "/assets/certificates/nextgenpro-cert.png"
// //     },
// //     {
// //       title: "Getting Started with Microsoft Excel",
// //       issuer: "Coursera Project Network",
// //       date: "Jul 2024",
// //       type: "Professional Certification",
// //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// //     },
// //     {
// //       title: "CMOS Digital VLSI Design",
// //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// //       date: "Jan-Mar 2024",
// //       score: "62%",
// //       type: "Education",
// //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// //       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
// //       details: {
// //         assignments: "24.17/25",
// //         exam: "37.5/75",
// //         totalCandidates: 767
// //       },
// //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// //     }
// //   ];

// //   const getTypeColor = (type) => {
// //     switch (type) {
// //       case "Professional Experience":
// //         return "bg-emerald-100 text-emerald-800 border-emerald-200";
// //       case "Internship Experience":
// //         return "bg-green-100 text-green-800 border-green-200";
// //       case "Professional Certification":
// //         return "bg-blue-100 text-blue-800 border-blue-200";
// //       case "Education":
// //         return "bg-purple-100 text-purple-800 border-purple-200";
// //       default:
// //         return "bg-gray-100 text-gray-800 border-gray-200";
// //     }
// //   };

// //   const downloadCertificate = (cert) => {
// //     const link = document.createElement('a');
// //     link.href = cert.image;
// //     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   };

// //   return (
// //     <section id="certifications" ref={sectionRef} className="relative py-20 px-4 md:px-4 overflow-hidden">
// //       {/* Premium Elegant Background */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-slate-950 dark:to-black" />
// //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-950/40 dark:via-transparent dark:to-transparent" />
// //       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-950/40 dark:via-transparent dark:to-transparent" />
      
// //       {/* Subtle grid pattern */}
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      
// //       {/* Floating orbs for depth */}
// //       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse" />
// //       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
// //       <div className="container mx-auto px-0 md:px-4 relative z-10">
// //         {/* Header with fade in */}
// //         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
// //           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
// //             Certifications & Achievements
// //           </h2>
// //           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full" />
// //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// //           </p>
// //         </div>

// //         {/* Pagination and Certificates Display */}
// //         <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// //             {certifications
// //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// //               .map((cert, index) => (
// //                 <CertificateCard
// //                   key={cert.title}
// //                   cert={cert}
// //                   index={index}
// //                   isVisible={isVisible}
// //                   getTypeColor={getTypeColor}
// //                   downloadCertificate={downloadCertificate}
// //                 />
// //               ))}
// //           </div>

// //           {/* Pagination Controls */}
// //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// //             <div className="flex justify-center items-center gap-6">
// //               <Button
// //                 variant="outline"
// //                 size="lg"
// //                 onClick={() => {
// //                   const newPage = Math.max(0, currentPage - 1);
// //                   setCurrentPage(newPage);
// //                   setTimeout(() => scrollToTop(), 50);
// //                 }}
// //                 disabled={currentPage === 0}
// //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
// //               >
// //                 <ChevronLeft size={24} />
// //               </Button>
              
// //               <div className="flex items-center gap-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
// //                 <span className="text-muted-foreground text-sm">
// //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// //                 </span>
// //                 <div className="flex gap-2">
// //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// //                     <div
// //                       key={i}
// //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// //                         i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
// //                       }`}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>

// //               <Button
// //                 variant="outline"
// //                 size="lg"
// //                 onClick={() => {
// //                   const newPage = Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1);
// //                   setCurrentPage(newPage);
// //                   setTimeout(() => scrollToTop(), 50);
// //                 }}
// //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
// //               >
// //                 <ChevronRight size={24} />
// //               </Button>
// //             </div>
// //           )}
// //         </div>

// //         {/* Stats Section with fade in - similar to About section */}
// //         <div ref={statsRef} className={`mt-16 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //             <div className={`text-center bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '100ms' : '0s'}}>
// //               <CountUp 
// //                 end={7} 
// //                 suffix="+" 
// //                 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// //               />
// //               <div className="text-muted-foreground text-sm">Certifications</div>
// //             </div>
// //             <div className={`text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '200ms' : '0s'}}>
// //               <CountUp 
// //                 end={20} 
// //                 suffix="+" 
// //                 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// //               />
// //               <div className="text-muted-foreground text-sm">Skills</div>
// //             </div>
// //             <div className={`text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '300ms' : '0s'}}>
// //               <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">C1</div>
// //               <div className="text-muted-foreground text-sm">English Level</div>
// //             </div>
// //             <div className={`text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '400ms' : '0s'}}>
// //               <CountUp 
// //                 end={6} 
// //                 suffix="mo" 
// //                 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
// //               />
// //               <div className="text-muted-foreground text-sm">Internship</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Certifications;
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
// import { useState, useEffect, useRef, memo } from "react";

// // Optimized CountUp component
// interface CountUpProps {
//   end: number;
//   suffix?: string;
//   className?: string;
// }

// const CountUp = memo(({ end, suffix = "", className }: CountUpProps) => {
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     const animate = () => {
//       let current = 0;
//       const increment = end / 50;
//       const interval = setInterval(() => {
//         current += increment;
//         if (current >= end) {
//           setCount(end);
//           clearInterval(interval);
//         } else {
//           setCount(Math.floor(current));
//         }
//       }, 20);
      
//       return () => clearInterval(interval);
//     };

//     const cleanup = animate();
    
//     const restartInterval = setInterval(() => {
//       setCount(0);
//       setTimeout(() => animate(), 100);
//     }, 6000);
    
//     return () => {
//       cleanup();
//       clearInterval(restartInterval);
//     };
//   }, [end]);
  
//   return <div className={className}>{count}{suffix}</div>;
// });

// // Define interfaces for type safety
// interface Certificate {
//   title: string;
//   issuer: string;
//   date: string;
//   type: string;
//   description: string;
//   location?: string;
//   skills?: string[];
//   image: string;
//   score?: string;
//   level?: string;
//   verifyUrl?: string;
//   details?: {
//     assignments: string;
//     exam: string;
//     totalCandidates: number;
//   };
// }

// interface CertificateCardProps {
//   cert: Certificate;
//   index: number;
//   isVisible: boolean;
//   getTypeColor: (type: string) => string;
//   downloadCertificate: (cert: Certificate) => void;
// }

// // Memoized Certificate Card component
// const CertificateCard = memo(({ cert, index, isVisible, getTypeColor, downloadCertificate }: CertificateCardProps) => {
//   return (
//     <Card 
//       className={`bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl border border-white/50 dark:border-gray-800/50 hover:shadow-2xl hover:border-blue-200/50 dark:hover:border-blue-800/50 transition-all duration-700 hover:-translate-y-2 group h-full flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//       style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0s' }}
//     >
//       {/* Certificate Image */}
//       <div className="relative overflow-hidden rounded-t-lg bg-muted/20">
//         <img 
//           src={cert.image} 
//           alt={`${cert.title} Certificate`}
//           loading="lazy"
//           className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
//           onError={(e) => {
//             (e.target as HTMLImageElement).src = '/placeholder.svg';
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button
//               size="sm"
//               variant="secondary"
//               className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
//             >
//               <Maximize2 size={14} />
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
//             <div className="relative w-full h-full flex items-center justify-center bg-black/5">
//               <img 
//                 src={cert.image} 
//                 alt={`${cert.title} Certificate`}
//                 loading="lazy"
//                 className="max-w-full max-h-full object-contain"
//               />
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/* Certificate Details */}
//       <CardHeader className="pb-4">
//         <div className="flex items-start justify-between mb-3">
//           <Badge 
//             variant="outline" 
//             className={`${getTypeColor(cert.type)} text-xs font-medium`}
//           >
//             {cert.type}
//           </Badge>
//           <div className="flex items-center text-muted-foreground text-sm">
//             <Calendar size={14} className="mr-1" />
//             {cert.date}
//           </div>
//         </div>
//         <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
//           {cert.title}
//         </CardTitle>
//         <CardDescription className="text-sm text-primary font-medium">
//           {cert.issuer}
//         </CardDescription>
//       </CardHeader>

//       <CardContent className="space-y-4 flex-1 flex flex-col">
//         <p className="text-muted-foreground text-sm leading-relaxed flex-1">
//           {cert.description}
//         </p>

//         {/* Score/Level Display */}
//         {(cert.score || cert.level) && (
//           <div className="flex gap-2 flex-wrap">
//             {cert.level && (
//               <Badge variant="secondary" className="text-xs">
//                 Level: {cert.level}
//               </Badge>
//             )}
//             {cert.score && (
//               <Badge variant="secondary" className="text-xs">
//                 Score: {cert.score}
//               </Badge>
//             )}
//           </div>
//         )}

//         {/* Skills Assessed */}
//         {cert.skills && (
//           <div>
//             <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
//             <div className="flex flex-wrap gap-1">
//               {cert.skills.map((skill) => (
//                 <Badge 
//                   key={skill} 
//                   variant="outline" 
//                   className="text-xs bg-primary/5 text-primary border-primary/20"
//                 >
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Detailed scores for NPTEL */}
//         {cert.details && (
//           <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
//             <div className="flex justify-between">
//               <span>Assignments:</span>
//               <span className="font-medium">{cert.details.assignments}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Proctored Exam:</span>
//               <span className="font-medium">{cert.details.exam}</span>
//             </div>
//             <div className="flex justify-between text-muted-foreground">
//               <span>Total Candidates:</span>
//               <span>{cert.details.totalCandidates}</span>
//             </div>
//           </div>
//         )}

//         {/* Location for internship */}
//         {cert.location && (
//           <div className="text-xs text-muted-foreground">
//             📍 {cert.location}
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div className="pt-2 mt-auto space-y-2">
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button 
//                 variant="outline" 
//                 size="sm" 
//                 className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
//               >
//                 <Eye size={12} className="mr-1" />
//                 View Certificate
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
//               <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
//                 <img 
//                   src={cert.image} 
//                   alt={`${cert.title} Certificate`}
//                   loading="lazy"
//                   className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
//                 />
//               </div>
//             </DialogContent>
//           </Dialog>
//           <Button 
//             variant="secondary" 
//             size="sm" 
//             onClick={() => downloadCertificate(cert)}
//             className="w-full text-xs"
//           >
//             <Download size={12} className="mr-1" />
//             Download Certificate
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// });

// const Certifications = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 3;
//   const [isVisible, setIsVisible] = useState(false);
//   const [statsVisible, setStatsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const statsRef = useRef(null);

//   // Scroll to top of certifications section when page changes
//   const scrollToTop = () => {
//     const section = document.getElementById('certifications');
//     if (section) {
//       const rect = section.getBoundingClientRect();
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const targetPosition = rect.top + scrollTop - 80;
      
//       window.scrollTo({ 
//         top: targetPosition, 
//         behavior: 'smooth' 
//       });
//     }
//   };

//   // Reset to first page when component mounts
//   useEffect(() => {
//     setCurrentPage(0);
//   }, []);

//   // Intersection Observer for main section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           } else {
//             setIsVisible(false);
//           }
//         });
//       },
//       { 
//         threshold: 0.1,
//         rootMargin: "0px"
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Intersection Observer for stats section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setStatsVisible(true);
//           } else {
//             setStatsVisible(false);
//           }
//         });
//       },
//       { 
//         threshold: 0.1,
//         rootMargin: "0px"
//       }
//     );

//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }

//     return () => {
//       if (statsRef.current) {
//         observer.unobserve(statsRef.current);
//       }
//     };
//   }, []);

//   // Certificates data
//   const certifications = [
//     {
//       title: "Web Developer Intern Certificate",
//       issuer: "Webgeon Results Private Limited",
//       date: "Jan-Jul 2025",
//       type: "Internship Experience",
//       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
//       location: "Hyderabad",
//       skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
//       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
//     },
//     {
//       title: "Microsoft Azure for Data Engineering",
//       issuer: "Microsoft via Coursera",
//       date: "Aug 2024", 
//       type: "Professional Certification",
//       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
//       skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
//       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
//       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
//     },
//     {
//       title: "EF SET English Certificate",
//       issuer: "EF SET",
//       level: "C1 Advanced",
//       score: "66/100",
//       date: "Jan 2025",
//       skills: ["Reading", "Listening", "Writing", "Speaking"],
//       type: "Professional Certification",
//       description: "English proficiency certification demonstrating advanced level communication skills",
//       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
//     },
//     {
//       title: "TechMaghi Certificate",
//       issuer: "TechMaghi Institute",
//       date: "2024",
//       type: "Professional Certification",
//       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
//       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
//       image: "/assets/certificates/techmaghi-cert.jpg"
//     },
//     {
//       title: "NextGen Pro Certificate",
//       issuer: "NextGen Professional Development",
//       date: "2024",
//       type: "Professional Certification",
//       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
//       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
//       image: "/assets/certificates/nextgenpro-cert.png"
//     },
//     {
//       title: "Getting Started with Microsoft Excel",
//       issuer: "Coursera Project Network",
//       date: "Jul 2024",
//       type: "Professional Certification",
//       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
//       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
//       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
//       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
//     },
//     {
//       title: "CMOS Digital VLSI Design",
//       issuer: "NPTEL Online Certification (IIT Roorkee)",
//       date: "Jan-Mar 2024",
//       score: "62%",
//       type: "Education",
//       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
//       skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
//       details: {
//         assignments: "24.17/25",
//         exam: "37.5/75",
//         totalCandidates: 767
//       },
//       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
//     }
//   ];

//   const getTypeColor = (type) => {
//     switch (type) {
//       case "Professional Experience":
//         return "bg-emerald-100 text-emerald-800 border-emerald-200";
//       case "Internship Experience":
//         return "bg-green-100 text-green-800 border-green-200";
//       case "Professional Certification":
//         return "bg-blue-100 text-blue-800 border-blue-200";
//       case "Education":
//         return "bg-purple-100 text-purple-800 border-purple-200";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-200";
//     }
//   };

//   const downloadCertificate = (cert) => {
//     const link = document.createElement('a');
//     link.href = cert.image;
//     link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section id="certifications" ref={sectionRef} className="relative py-20 px-4 md:px-4 overflow-hidden">
//       {/* Premium Elegant Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-slate-950 dark:to-black" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-950/40 dark:via-transparent dark:to-transparent" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-950/40 dark:via-transparent dark:to-transparent" />
      
//       {/* Subtle grid pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      
//       {/* Floating orbs for depth */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl" />
      
//       <div className="container mx-auto px-0 md:px-4 relative z-10">
//         {/* Header with fade in */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
//             Certifications & Achievements
//           </h2>
//           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full" />
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
//           </p>
//         </div>

//         {/* Pagination and Certificates Display */}
//         <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//             {certifications
//               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
//               .map((cert, index) => (
//                 <CertificateCard
//                   key={cert.title}
//                   cert={cert}
//                   index={index}
//                   isVisible={isVisible}
//                   getTypeColor={getTypeColor}
//                   downloadCertificate={downloadCertificate}
//                 />
//               ))}
//           </div>

//           {/* Pagination Controls */}
//           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
//             <div className="flex justify-center items-center gap-6">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 onClick={() => {
//                   const newPage = Math.max(0, currentPage - 1);
//                   setCurrentPage(newPage);
//                   setTimeout(() => scrollToTop(), 50);
//                 }}
//                 disabled={currentPage === 0}
//                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
//               >
//                 <ChevronLeft size={24} />
//               </Button>
              
//               <div className="flex items-center gap-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
//                 <span className="text-muted-foreground text-sm">
//                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
//                 </span>
//                 <div className="flex gap-2">
//                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
//                     <div
//                       key={i}
//                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                         i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <Button
//                 variant="outline"
//                 size="lg"
//                 onClick={() => {
//                   const newPage = Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1);
//                   setCurrentPage(newPage);
//                   setTimeout(() => scrollToTop(), 50);
//                 }}
//                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
//                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
//               >
//                 <ChevronRight size={24} />
//               </Button>
//             </div>
//           )}
//         </div>

//         {/* Stats Section with fade in - similar to About section */}
//         <div ref={statsRef} className={`mt-16 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <div className={`text-center bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '100ms' : '0s'}}>
//               <CountUp 
//                 end={7} 
//                 suffix="+" 
//                 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
//               />
//               <div className="text-muted-foreground text-sm">Certifications</div>
//             </div>
//             <div className={`text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '200ms' : '0s'}}>
//               <CountUp 
//                 end={20} 
//                 suffix="+" 
//                 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
//               />
//               <div className="text-muted-foreground text-sm">Skills</div>
//             </div>
//             <div className={`text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '300ms' : '0s'}}>
//               <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">C1</div>
//               <div className="text-muted-foreground text-sm">English Level</div>
//             </div>
//             <div className={`text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '400ms' : '0s'}}>
//               <CountUp 
//                 end={6} 
//                 suffix="mo" 
//                 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
//               />
//               <div className="text-muted-foreground text-sm">Internship</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useState, useEffect, useRef, memo } from "react";

// Optimized CountUp component
interface CountUpProps {
  end: number;
  suffix?: string;
  className?: string;
}

const CountUp = memo(({ end, suffix = "", className }: CountUpProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const animate = () => {
      let current = 0;
      const increment = end / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, 20);
      
      return () => clearInterval(interval);
    };

    const cleanup = animate();
    
    const restartInterval = setInterval(() => {
      setCount(0);
      setTimeout(() => animate(), 100);
    }, 6000);
    
    return () => {
      cleanup();
      clearInterval(restartInterval);
    };
  }, [end]);
  
  return <div className={className}>{count}{suffix}</div>;
});

// Define interfaces for type safety
interface Certificate {
  title: string;
  issuer: string;
  date: string;
  type: string;
  description: string;
  location?: string;
  skills?: string[];
  image: string;
  score?: string;
  level?: string;
  verifyUrl?: string;
  details?: {
    assignments: string;
    exam: string;
    totalCandidates: number;
  };
}

interface CertificateCardProps {
  cert: Certificate;
  index: number;
  isVisible: boolean;
  getTypeColor: (type: string) => string;
  downloadCertificate: (cert: Certificate) => void;
}

// Memoized Certificate Card component
const CertificateCard = memo(({ cert, index, isVisible, getTypeColor, downloadCertificate }: CertificateCardProps) => {
  return (
    <Card 
      className={`bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl border border-white/50 dark:border-gray-800/50 hover:shadow-2xl hover:border-blue-200/50 dark:hover:border-blue-800/50 transition-all duration-700 hover:-translate-y-2 group h-full flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0s' }}
    >
      {/* Certificate Image */}
      <div className="relative overflow-hidden rounded-t-lg bg-muted/20">
        <img 
          src={cert.image} 
          alt={`${cert.title} Certificate`}
          loading="lazy"
          className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="sm"
              variant="secondary"
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
            >
              <Maximize2 size={14} />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
            <div className="relative w-full h-full flex items-center justify-center bg-black/5">
              <img 
                src={cert.image} 
                alt={`${cert.title} Certificate`}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Certificate Details */}
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <Badge 
            variant="outline" 
            className={`${getTypeColor(cert.type)} text-xs font-medium`}
          >
            {cert.type}
          </Badge>
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar size={14} className="mr-1" />
            {cert.date}
          </div>
        </div>
        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {cert.title}
        </CardTitle>
        <CardDescription className="text-sm text-primary font-medium">
          {cert.issuer}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {cert.description}
        </p>

        {/* Score/Level Display */}
        {(cert.score || cert.level) && (
          <div className="flex gap-2 flex-wrap">
            {cert.level && (
              <Badge variant="secondary" className="text-xs">
                Level: {cert.level}
              </Badge>
            )}
            {cert.score && (
              <Badge variant="secondary" className="text-xs">
                Score: {cert.score}
              </Badge>
            )}
          </div>
        )}

        {/* Skills Assessed */}
        {cert.skills && (
          <div>
            <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
            <div className="flex flex-wrap gap-1">
              {cert.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="text-xs bg-primary/5 text-primary border-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Detailed scores for NPTEL */}
        {cert.details && (
          <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
            <div className="flex justify-between">
              <span>Assignments:</span>
              <span className="font-medium">{cert.details.assignments}</span>
            </div>
            <div className="flex justify-between">
              <span>Proctored Exam:</span>
              <span className="font-medium">{cert.details.exam}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Total Candidates:</span>
              <span>{cert.details.totalCandidates}</span>
            </div>
          </div>
        )}

        {/* Location for internship */}
        {cert.location && (
          <div className="text-xs text-muted-foreground">
            📍 {cert.location}
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-2 mt-auto space-y-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
              >
                <Eye size={12} className="mr-1" />
                View Certificate
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
              <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
                <img 
                  src={cert.image} 
                  alt={`${cert.title} Certificate`}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            </DialogContent>
          </Dialog>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={() => downloadCertificate(cert)}
            className="w-full text-xs"
          >
            <Download size={12} className="mr-1" />
            Download Certificate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  // Scroll to top of certifications section when page changes
  const scrollToTop = () => {
    const section = document.getElementById('certifications');
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 80;
      
      window.scrollTo({ 
        top: targetPosition, 
        behavior: 'smooth' 
      });
    }
  };

  // Reset to first page when component mounts
  useEffect(() => {
    setCurrentPage(0);
  }, []);

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

  // Intersection Observer for stats section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          } else {
            setStatsVisible(false);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px"
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Certificates data
  const certifications = [
    {
      title: "Web Developer Intern Certificate",
      issuer: "Webgeon Results Private Limited",
      date: "Jan-Jul 2025",
      type: "Internship Experience",
      description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
      location: "Hyderabad",
      skills: ["React.js", "JavaScript", "HTML/CSS", "Web Development", "Team Collaboration"],
      image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
    },
    {
      title: "Microsoft Azure for Data Engineering",
      issuer: "Microsoft via Coursera",
      date: "Aug 2024", 
      type: "Professional Certification",
      description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
      skills: ["Azure Cloud", "Data Engineering", "ETL Processes", "Data Pipelines", "Cloud Architecture"],
      verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
      image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
    },
    {
      title: "EF SET English Certificate",
      issuer: "EF SET",
      level: "C1 Advanced",
      score: "66/100",
      date: "Jan 2025",
      skills: ["Reading", "Listening", "Writing", "Speaking"],
      type: "Professional Certification",
      description: "English proficiency certification demonstrating advanced level communication skills",
      image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
    },
    {
      title: "TechMaghi Certificate",
      issuer: "TechMaghi Institute",
      date: "2024",
      type: "Professional Certification",
      description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
      skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
      image: "/assets/certificates/techmaghi-cert.jpg"
    },
    {
      title: "NextGen Pro Certificate",
      issuer: "NextGen Professional Development",
      date: "2024",
      type: "Professional Certification",
      description: "Advanced professional development certification demonstrating next-generation skills and expertise",
      skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
      image: "/assets/certificates/nextgenpro-cert.png"
    },
    {
      title: "Getting Started with Microsoft Excel",
      issuer: "Coursera Project Network",
      date: "Jul 2024",
      type: "Professional Certification",
      description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
      skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
      verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
      image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
    },
    {
      title: "CMOS Digital VLSI Design",
      issuer: "NPTEL Online Certification (IIT Roorkee)",
      date: "Jan-Mar 2024",
      score: "62%",
      type: "Education",
      description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
      skills: ["VLSI Design", "CMOS Technology", "Digital Circuits", "Semiconductor Physics", "Circuit Analysis"],
      details: {
        assignments: "24.17/25",
        exam: "37.5/75",
        totalCandidates: 767
      },
      image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Professional Experience":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Internship Experience":
        return "bg-green-100 text-green-800 border-green-200";
      case "Professional Certification":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Education":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const downloadCertificate = (cert) => {
    const link = document.createElement('a');
    link.href = cert.image;
    link.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" ref={sectionRef} className="relative py-20 px-4 md:px-4 overflow-hidden">
      {/* Premium Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-slate-950 dark:to-black transition-colors duration-300" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-950/40 dark:via-transparent dark:to-transparent transition-colors duration-300" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-950/40 dark:via-transparent dark:to-transparent transition-colors duration-300" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] transition-all duration-300" />
      
      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl transition-colors duration-300" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl transition-colors duration-300" />
      
      <div className="container mx-auto px-0 md:px-4 relative z-10">
        {/* Header with fade in */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Certifications & Achievements
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
          </p>
        </div>

        {/* Pagination and Certificates Display */}
        <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certifications
              .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((cert, index) => (
                <CertificateCard
                  key={cert.title}
                  cert={cert}
                  index={index}
                  isVisible={isVisible}
                  getTypeColor={getTypeColor}
                  downloadCertificate={downloadCertificate}
                />
              ))}
          </div>

          {/* Pagination Controls */}
          {Math.ceil(certifications.length / itemsPerPage) > 1 && (
            <div className="flex justify-center items-center gap-6">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const newPage = Math.max(0, currentPage - 1);
                  setCurrentPage(newPage);
                  setTimeout(() => scrollToTop(), 50);
                }}
                disabled={currentPage === 0}
                className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </Button>
              
              <div className="flex items-center gap-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <span className="text-muted-foreground text-sm">
                  Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
                </span>
                <div className="flex gap-2">
                  {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        i === currentPage ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-primary/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const newPage = Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1);
                  setCurrentPage(newPage);
                  setTimeout(() => scrollToTop(), 50);
                }}
                disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
                className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </Button>
            </div>
          )}
        </div>

        {/* Stats Section with fade in - similar to About section */}
        <div ref={statsRef} className={`mt-16 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className={`text-center bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '100ms' : '0s'}}>
              <CountUp 
                end={7} 
                suffix="+" 
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
              />
              <div className="text-muted-foreground text-sm">Certifications</div>
            </div>
            <div className={`text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '200ms' : '0s'}}>
              <CountUp 
                end={20} 
                suffix="+" 
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
              />
              <div className="text-muted-foreground text-sm">Skills</div>
            </div>
            <div className={`text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '300ms' : '0s'}}>
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">C1</div>
              <div className="text-muted-foreground text-sm">English Level</div>
            </div>
            <div className={`text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: statsVisible ? '400ms' : '0s'}}>
              <CountUp 
                end={6} 
                suffix="mo" 
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2"
              />
              <div className="text-muted-foreground text-sm">Internship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;