// // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
// // // // // // import { useState } from "react";
// // // // // // import CountUp from "./CountUp";

// // // // // // const Certifications = () => {
// // // // // //   const [selectedImage, setSelectedImage] = useState<string | null>(null);
// // // // // //   const [currentPage, setCurrentPage] = useState(0);
// // // // // //   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
// // // // // //   const itemsPerPage = 3;

// // // // // //   const certifications = [
// // // // // //     {
// // // // // //       title: "EF SET English Certificate",
// // // // // //       issuer: "EF SET",
// // // // // //       level: "C1 Advanced",
// // // // // //       score: "66/100",
// // // // // //       date: "Jan 2025",
// // // // // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // // // // //       type: "Language Proficiency",
// // // // // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // // // // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Getting Started with Microsoft Excel",
// // // // // //       issuer: "Coursera Project Network",
// // // // // //       date: "Jul 2024",
// // // // // //       type: "Technical Skills",
// // // // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // // // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Microsoft Azure for Data Engineering",
// // // // // //       issuer: "Microsoft via Coursera",
// // // // // //       date: "Aug 2024", 
// // // // // //       type: "Cloud Computing",
// // // // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // // // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "CMOS Digital VLSI Design",
// // // // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // // // //       date: "Jan-Mar 2024",
// // // // // //       score: "62%",
// // // // // //       type: "Engineering",
// // // // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // // // // //       details: {
// // // // // //         assignments: "24.17/25",
// // // // // //         exam: "37.5/75",
// // // // // //         totalCandidates: 767
// // // // // //       },
// // // // // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Web Developer Intern Certificate",
// // // // // //       issuer: "Webgeon Results Private Limited",
// // // // // //       date: "Jan-Jul 2025",
// // // // // //       type: "Professional Experience",
// // // // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // // // //       location: "Hyderabad",
// // // // // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // // // // //     }
// // // // // //   ];

// // // // // //   const getTypeColor = (type: string) => {
// // // // // //     switch (type) {
// // // // // //       case "Language Proficiency":
// // // // // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // // // // //       case "Technical Skills":
// // // // // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // // // // //       case "Cloud Computing":
// // // // // //         return "bg-cyan-100 text-cyan-800 border-cyan-200";
// // // // // //       case "Engineering":
// // // // // //         return "bg-orange-100 text-orange-800 border-orange-200";
// // // // // //       case "Professional Experience":
// // // // // //         return "bg-green-100 text-green-800 border-green-200";
// // // // // //       default:
// // // // // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <>
// // // // // //       <section id="certifications" className="py-20 px-4 bg-background">
// // // // // //         <div className="container mx-auto">
// // // // // //           <div className="text-center mb-16 animate-fade-in">
// // // // // //             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Certifications & Achievements</h2>
// // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Pagination and Certificates Display */}
// // // // // //         <div className="space-y-8">
// // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //             {certifications
// // // // // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // // // //               .map((cert, index) => (
// // // // // //               <Card 
// // // // // //                 key={cert.title}
// // // // // //                 className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
// // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // //                 onMouseEnter={() => setHoveredCard(currentPage * itemsPerPage + index)}
// // // // // //                 onMouseLeave={() => setHoveredCard(null)}
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

// // // // // //                 {/* Certificate Details - Show on hover */}
// // // // // //                 <div className={`transition-all duration-300 ${
// // // // // //                   hoveredCard === currentPage * itemsPerPage + index 
// // // // // //                     ? 'opacity-100 max-h-96' 
// // // // // //                     : 'opacity-0 max-h-0 overflow-hidden'
// // // // // //                 }`}>
// // // // // //                   <CardHeader className="pb-4">
// // // // // //                     <div className="flex items-start justify-between mb-3">
// // // // // //                       <Badge 
// // // // // //                         variant="outline" 
// // // // // //                         className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // // // // //                       >
// // // // // //                         {cert.type}
// // // // // //                       </Badge>
// // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // //                         <Calendar size={14} className="mr-1" />
// // // // // //                         {cert.date}
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                     <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // // // // //                       {cert.title}
// // // // // //                     </CardTitle>
// // // // // //                     <CardDescription className="text-sm text-primary font-medium">
// // // // // //                       {cert.issuer}
// // // // // //                     </CardDescription>
// // // // // //                   </CardHeader>

// // // // // //                   <CardContent className="space-y-4 flex-1 flex flex-col">
// // // // // //                     <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // // // // //                       {cert.description}
// // // // // //                     </p>

// // // // // //                     {/* Score/Level Display */}
// // // // // //                     {(cert.score || cert.level) && (
// // // // // //                       <div className="flex gap-2 flex-wrap">
// // // // // //                         {cert.level && (
// // // // // //                           <Badge variant="secondary" className="text-xs">
// // // // // //                             Level: {cert.level}
// // // // // //                           </Badge>
// // // // // //                         )}
// // // // // //                         {cert.score && (
// // // // // //                           <Badge variant="secondary" className="text-xs">
// // // // // //                             Score: {cert.score}
// // // // // //                           </Badge>
// // // // // //                         )}
// // // // // //                       </div>
// // // // // //                     )}

// // // // // //                     {/* Skills for language cert */}
// // // // // //                     {cert.skills && (
// // // // // //                       <div>
// // // // // //                         <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // // // // //                         <div className="flex flex-wrap gap-1">
// // // // // //                           {cert.skills.map((skill) => (
// // // // // //                             <Badge 
// // // // // //                               key={skill} 
// // // // // //                               variant="outline" 
// // // // // //                               className="text-xs bg-primary/5 text-primary border-primary/20"
// // // // // //                             >
// // // // // //                               {skill}
// // // // // //                             </Badge>
// // // // // //                           ))}
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     )}

// // // // // //                     {/* Detailed scores for NPTEL */}
// // // // // //                     {cert.details && (
// // // // // //                       <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // // // // //                         <div className="flex justify-between">
// // // // // //                           <span>Assignments:</span>
// // // // // //                           <span className="font-medium">{cert.details.assignments}</span>
// // // // // //                         </div>
// // // // // //                         <div className="flex justify-between">
// // // // // //                           <span>Proctored Exam:</span>
// // // // // //                           <span className="font-medium">{cert.details.exam}</span>
// // // // // //                         </div>
// // // // // //                         <div className="flex justify-between text-muted-foreground">
// // // // // //                           <span>Total Candidates:</span>
// // // // // //                           <span>{cert.details.totalCandidates}</span>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     )}

// // // // // //                     {/* Action Button */}
// // // // // //                     <div className="pt-2 mt-auto">
// // // // // //                       <Dialog>
// // // // // //                         <DialogTrigger asChild>
// // // // // //                           <Button 
// // // // // //                             variant="outline" 
// // // // // //                             size="sm" 
// // // // // //                             className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // // // // //                           >
// // // // // //                             <Eye size={12} className="mr-1" />
// // // // // //                             View Certificate
// // // // // //                           </Button>
// // // // // //                         </DialogTrigger>
// // // // // //                         <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // // // // //                           <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // // // // //                             <img 
// // // // // //                               src={cert.image} 
// // // // // //                               alt={`${cert.title} Certificate`}
// // // // // //                               className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // // // // //                             />
// // // // // //                           </div>
// // // // // //                         </DialogContent>
// // // // // //                       </Dialog>
// // // // // //                     </div>
// // // // // //                   </CardContent>
// // // // // //                 </div>

// // // // // //                 {/* Default view - Just certificate title and issuer */}
// // // // // //                 <div className={`transition-all duration-300 ${
// // // // // //                   hoveredCard === currentPage * itemsPerPage + index 
// // // // // //                     ? 'opacity-0 max-h-0 overflow-hidden' 
// // // // // //                     : 'opacity-100'
// // // // // //                 }`}>
// // // // // //                   <CardHeader className="pb-2">
// // // // // //                     <CardTitle className="text-lg line-clamp-2">
// // // // // //                       {cert.title}
// // // // // //                     </CardTitle>
// // // // // //                     <CardDescription className="text-sm text-primary font-medium">
// // // // // //                       {cert.issuer}
// // // // // //                     </CardDescription>
// // // // // //                   </CardHeader>
// // // // // //                   <CardContent>
// // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // //                       <Calendar size={14} className="mr-1" />
// // // // // //                       {cert.date}
// // // // // //                     </div>
// // // // // //                   </CardContent>
// // // // // //                 </div>
// // // // // //               </Card>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           {/* Pagination Controls with Left/Right Arrows */}
// // // // // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // // // //             <div className="flex justify-center items-center gap-6 animate-fade-in">
// // // // // //               <Button
// // // // // //                 variant="outline"
// // // // // //                 size="lg"
// // // // // //                 onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
// // // // // //                 disabled={currentPage === 0}
// // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// // // // // //               >
// // // // // //                 <ChevronLeft size={24} />
// // // // // //               </Button>
              
// // // // // //               <div className="flex items-center gap-4">
// // // // // //                 <span className="text-muted-foreground text-sm">
// // // // // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // // // // //                 </span>
// // // // // //                 <div className="flex gap-2">
// // // // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // // // //                     <div
// // // // // //                       key={i}
// // // // // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // // // // //                         i === currentPage ? 'bg-primary' : 'bg-primary/30'
// // // // // //                       }`}
// // // // // //                     />
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <Button
// // // // // //                 variant="outline"
// // // // // //                 size="lg"
// // // // // //                 onClick={() => setCurrentPage(Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1))}
// // // // // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// // // // // //               >
// // // // // //                 <ChevronRight size={24} />
// // // // // //               </Button>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         {/* Stats Section with CountUp Animation */}
// // // // // //         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // // //           <div className="text-center">
// // // // // //             <CountUp 
// // // // // //               end={5} 
// // // // // //               suffix="+" 
// // // // // //               className="text-3xl font-bold text-primary mb-2"
// // // // // //             />
// // // // // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // // // // //           </div>
// // // // // //           <div className="text-center">
// // // // // //             <CountUp 
// // // // // //               end={4} 
// // // // // //               className="text-3xl font-bold text-primary mb-2"
// // // // // //             />
// // // // // //             <div className="text-muted-foreground text-sm">Skill Areas</div>
// // // // // //           </div>
// // // // // //           <div className="text-center">
// // // // // //             <div className="text-3xl font-bold text-primary mb-2">C1</div>
// // // // // //             <div className="text-muted-foreground text-sm">English Level</div>
// // // // // //           </div>
// // // // // //           <div className="text-center">
// // // // // //             <CountUp 
// // // // // //               end={6} 
// // // // // //               suffix="mo" 
// // // // // //               className="text-3xl font-bold text-primary mb-2"
// // // // // //             />
// // // // // //             <div className="text-muted-foreground text-sm">Internship</div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default Certifications;
// // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // import { Badge } from "@/components/ui/badge";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
// // // // // import { useState } from "react";

// // // // // // Simple CountUp component
// // // // // const CountUp = ({ end, suffix = "", className }) => {
// // // // //   const [count, setCount] = useState(0);
  
// // // // //   useState(() => {
// // // // //     const timer = setInterval(() => {
// // // // //       setCount(prev => {
// // // // //         if (prev >= end) {
// // // // //           clearInterval(timer);
// // // // //           return end;
// // // // //         }
// // // // //         return prev + 1;
// // // // //       });
// // // // //     }, 100);
    
// // // // //     return () => clearInterval(timer);
// // // // //   }, [end]);
  
// // // // //   return <div className={className}>{count}{suffix}</div>;
// // // // // };

// // // // // const Certifications = () => {
// // // // //   const [currentPage, setCurrentPage] = useState(0);
// // // // //   const itemsPerPage = 3;

// // // // //   const certifications = [
// // // // //     {
// // // // //       title: "EF SET English Certificate",
// // // // //       issuer: "EF SET",
// // // // //       level: "C1 Advanced",
// // // // //       score: "66/100",
// // // // //       date: "Jan 2025",
// // // // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // // // //       type: "Language Proficiency",
// // // // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // // // //       image: "/api/placeholder/400/300"
// // // // //     },
// // // // //     {
// // // // //       title: "Getting Started with Microsoft Excel",
// // // // //       issuer: "Coursera Project Network",
// // // // //       date: "Jul 2024",
// // // // //       type: "Technical Skills",
// // // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // // //       image: "/api/placeholder/400/300"
// // // // //     },
// // // // //     {
// // // // //       title: "Microsoft Azure for Data Engineering",
// // // // //       issuer: "Microsoft via Coursera",
// // // // //       date: "Aug 2024", 
// // // // //       type: "Cloud Computing",
// // // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // // //       image: "/api/placeholder/400/300"
// // // // //     },
// // // // //     {
// // // // //       title: "CMOS Digital VLSI Design",
// // // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // // //       date: "Jan-Mar 2024",
// // // // //       score: "62%",
// // // // //       type: "Engineering",
// // // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // // // //       details: {
// // // // //         assignments: "24.17/25",
// // // // //         exam: "37.5/75",
// // // // //         totalCandidates: 767
// // // // //       },
// // // // //       image: "/api/placeholder/400/300"
// // // // //     },
// // // // //     {
// // // // //       title: "Web Developer Intern Certificate",
// // // // //       issuer: "Webgeon Results Private Limited",
// // // // //       date: "Jan-Jul 2025",
// // // // //       type: "Professional Experience",
// // // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // // //       location: "Hyderabad",
// // // // //       image: "/api/placeholder/400/300"
// // // // //     }
// // // // //   ];

// // // // //   const getTypeColor = (type) => {
// // // // //     switch (type) {
// // // // //       case "Language Proficiency":
// // // // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // // // //       case "Technical Skills":
// // // // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // // // //       case "Cloud Computing":
// // // // //         return "bg-cyan-100 text-cyan-800 border-cyan-200";
// // // // //       case "Engineering":
// // // // //         return "bg-orange-100 text-orange-800 border-orange-200";
// // // // //       case "Professional Experience":
// // // // //         return "bg-green-100 text-green-800 border-green-200";
// // // // //       default:
// // // // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <section id="certifications" className="py-20 px-4 bg-slate-50">
// // // // //         <div className="container mx-auto">
// // // // //           <div className="text-center mb-16 animate-fade-in">
// // // // //             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">Certifications & Achievements</h2>
// // // // //             <div className="h-1 w-24 bg-blue-600 mx-auto mb-8" />
// // // // //             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
// // // // //               Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Pagination and Certificates Display */}
// // // // //           <div className="space-y-8">
// // // // //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //               {certifications
// // // // //                 .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // // //                 .map((cert, index) => (
// // // // //                 <Card 
// // // // //                   key={cert.title}
// // // // //                   className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col"
// // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // //                 >
// // // // //                   {/* Certificate Image */}
// // // // //                   <div className="relative overflow-hidden rounded-t-lg">
// // // // //                     <img 
// // // // //                       src={cert.image} 
// // // // //                       alt={`${cert.title} Certificate`}
// // // // //                       className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // // //                     />
// // // // //                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // // //                     <Dialog>
// // // // //                       <DialogTrigger asChild>
// // // // //                         <Button
// // // // //                           size="sm"
// // // // //                           variant="secondary"
// // // // //                           className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // // // //                         >
// // // // //                           <Maximize2 size={14} />
// // // // //                         </Button>
// // // // //                       </DialogTrigger>
// // // // //                       <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // // // //                         <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // // // //                           <img 
// // // // //                             src={cert.image} 
// // // // //                             alt={`${cert.title} Certificate`}
// // // // //                             className="max-w-full max-h-full object-contain"
// // // // //                           />
// // // // //                         </div>
// // // // //                       </DialogContent>
// // // // //                     </Dialog>
// // // // //                   </div>

// // // // //                   {/* Certificate Details - Always Visible */}
// // // // //                   <CardHeader className="pb-4">
// // // // //                     <div className="flex items-start justify-between mb-3">
// // // // //                       <Badge 
// // // // //                         variant="outline" 
// // // // //                         className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // // // //                       >
// // // // //                         {cert.type}
// // // // //                       </Badge>
// // // // //                       <div className="flex items-center text-slate-500 text-sm">
// // // // //                         <Calendar size={14} className="mr-1" />
// // // // //                         {cert.date}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                     <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
// // // // //                       {cert.title}
// // // // //                     </CardTitle>
// // // // //                     <CardDescription className="text-sm text-blue-600 font-medium">
// // // // //                       {cert.issuer}
// // // // //                     </CardDescription>
// // // // //                   </CardHeader>

// // // // //                   <CardContent className="space-y-4 flex-1 flex flex-col">
// // // // //                     <p className="text-slate-600 text-sm leading-relaxed flex-1">
// // // // //                       {cert.description}
// // // // //                     </p>

// // // // //                     {/* Score/Level Display */}
// // // // //                     {(cert.score || cert.level) && (
// // // // //                       <div className="flex gap-2 flex-wrap">
// // // // //                         {cert.level && (
// // // // //                           <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700">
// // // // //                             Level: {cert.level}
// // // // //                           </Badge>
// // // // //                         )}
// // // // //                         {cert.score && (
// // // // //                           <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700">
// // // // //                             Score: {cert.score}
// // // // //                           </Badge>
// // // // //                         )}
// // // // //                       </div>
// // // // //                     )}

// // // // //                     {/* Skills for language cert */}
// // // // //                     {cert.skills && (
// // // // //                       <div>
// // // // //                         <p className="text-sm font-medium text-blue-600 mb-2">Skills Assessed:</p>
// // // // //                         <div className="flex flex-wrap gap-1">
// // // // //                           {cert.skills.map((skill) => (
// // // // //                             <Badge 
// // // // //                               key={skill} 
// // // // //                               variant="outline" 
// // // // //                               className="text-xs bg-blue-50 text-blue-700 border-blue-200"
// // // // //                             >
// // // // //                               {skill}
// // // // //                             </Badge>
// // // // //                           ))}
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     )}

// // // // //                     {/* Detailed scores for NPTEL */}
// // // // //                     {cert.details && (
// // // // //                       <div className="bg-slate-100 p-3 rounded-lg text-xs space-y-1">
// // // // //                         <div className="flex justify-between">
// // // // //                           <span>Assignments:</span>
// // // // //                           <span className="font-medium">{cert.details.assignments}</span>
// // // // //                         </div>
// // // // //                         <div className="flex justify-between">
// // // // //                           <span>Proctored Exam:</span>
// // // // //                           <span className="font-medium">{cert.details.exam}</span>
// // // // //                         </div>
// // // // //                         <div className="flex justify-between text-slate-500">
// // // // //                           <span>Total Candidates:</span>
// // // // //                           <span>{cert.details.totalCandidates}</span>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     )}

// // // // //                     {/* Action Button */}
// // // // //                     <div className="pt-2 mt-auto">
// // // // //                       <Dialog>
// // // // //                         <DialogTrigger asChild>
// // // // //                           <Button 
// // // // //                             variant="outline" 
// // // // //                             size="sm" 
// // // // //                             className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 text-xs"
// // // // //                           >
// // // // //                             <Eye size={12} className="mr-1" />
// // // // //                             View Certificate
// // // // //                           </Button>
// // // // //                         </DialogTrigger>
// // // // //                         <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // // // //                           <div className="relative w-full h-full flex items-center justify-center bg-slate-50 rounded-lg">
// // // // //                             <img 
// // // // //                               src={cert.image} 
// // // // //                               alt={`${cert.title} Certificate`}
// // // // //                               className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // // // //                             />
// // // // //                           </div>
// // // // //                         </DialogContent>
// // // // //                       </Dialog>
// // // // //                     </div>
// // // // //                   </CardContent>
// // // // //                 </Card>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* Pagination Controls */}
// // // // //             {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // // //               <div className="flex justify-center items-center gap-4 animate-fade-in">
// // // // //                 <Button
// // // // //                   variant="outline"
// // // // //                   size="sm"
// // // // //                   onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
// // // // //                   disabled={currentPage === 0}
// // // // //                   className="border-blue-200 text-blue-600 hover:bg-blue-50 transition-all duration-300"
// // // // //                 >
// // // // //                   <ChevronLeft size={16} className="mr-1" />
// // // // //                   Previous
// // // // //                 </Button>
                
// // // // //                 <div className="flex gap-2">
// // // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // // //                     <Button
// // // // //                       key={i}
// // // // //                       variant={i === currentPage ? "default" : "outline"}
// // // // //                       size="sm"
// // // // //                       onClick={() => setCurrentPage(i)}
// // // // //                       className={`w-10 h-10 ${
// // // // //                         i === currentPage 
// // // // //                           ? 'bg-blue-600 text-white' 
// // // // //                           : 'border-blue-200 text-blue-600 hover:bg-blue-50'
// // // // //                       } transition-all duration-300`}
// // // // //                     >
// // // // //                       {i + 1}
// // // // //                     </Button>
// // // // //                   ))}
// // // // //                 </div>

// // // // //                 <Button
// // // // //                   variant="outline"
// // // // //                   size="sm"
// // // // //                   onClick={() => setCurrentPage(Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1))}
// // // // //                   disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // // //                   className="border-blue-200 text-blue-600 hover:bg-blue-50 transition-all duration-300"
// // // // //                 >
// // // // //                   Next
// // // // //                   <ChevronRight size={16} className="ml-1" />
// // // // //                 </Button>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Stats Section with CountUp Animation */}
// // // // //           <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // //             <div className="text-center">
// // // // //               <CountUp 
// // // // //                 end={5} 
// // // // //                 suffix="+" 
// // // // //                 className="text-3xl font-bold text-blue-600 mb-2"
// // // // //               />
// // // // //               <div className="text-slate-500 text-sm">Certifications</div>
// // // // //             </div>
// // // // //             <div className="text-center">
// // // // //               <CountUp 
// // // // //                 end={4} 
// // // // //                 className="text-3xl font-bold text-blue-600 mb-2"
// // // // //               />
// // // // //               <div className="text-slate-500 text-sm">Skill Areas</div>
// // // // //             </div>
// // // // //             <div className="text-center">
// // // // //               <div className="text-3xl font-bold text-blue-600 mb-2">C1</div>
// // // // //               <div className="text-slate-500 text-sm">English Level</div>
// // // // //             </div>
// // // // //             <div className="text-center">
// // // // //               <CountUp 
// // // // //                 end={6} 
// // // // //                 suffix="mo" 
// // // // //                 className="text-3xl font-bold text-blue-600 mb-2"
// // // // //               />
// // // // //               <div className="text-slate-500 text-sm">Internship</div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Certifications;
// // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // import { Badge } from "@/components/ui/badge";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// // // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
// // // // // import { useState } from "react";

// // // // // // Simple CountUp component since it's imported
// // // // // const CountUp = ({ end, suffix = "", className }) => {
// // // // //   const [count, setCount] = useState(0);
  
// // // // //   useState(() => {
// // // // //     const timer = setTimeout(() => {
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
// // // // //     }, 100);
// // // // //     return () => clearTimeout(timer);
// // // // //   }, [end]);
  
// // // // //   return <div className={className}>{count}{suffix}</div>;
// // // // // };

// // // // // const Certifications = () => {
// // // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // // //   const [currentPage, setCurrentPage] = useState(0);
// // // // //   const itemsPerPage = 3;

// // // // //   const certifications = [
// // // // //     {
// // // // //       title: "EF SET English Certificate",
// // // // //       issuer: "EF SET",
// // // // //       level: "C1 Advanced",
// // // // //       score: "66/100",
// // // // //       date: "Jan 2025",
// // // // //       skills: ["Reading", "Listening", "Writing", "Speaking"],
// // // // //       type: "Language Proficiency",
// // // // //       description: "English proficiency certification demonstrating advanced level communication skills",
// // // // //       image: "/lovable-uploads/4d6e1249-e5d5-4d13-ad41-ea2b59f29a82.png"
// // // // //     },
// // // // //     {
// // // // //       title: "Getting Started with Microsoft Excel",
// // // // //       issuer: "Coursera Project Network",
// // // // //       date: "Jul 2024",
// // // // //       type: "Technical Skills",
// // // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // // // //     },
// // // // //     {
// // // // //       title: "Microsoft Azure for Data Engineering",
// // // // //       issuer: "Microsoft via Coursera",
// // // // //       date: "Aug 2024", 
// // // // //       type: "Cloud Computing",
// // // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // // // //     },
// // // // //     {
// // // // //       title: "CMOS Digital VLSI Design",
// // // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // // //       date: "Jan-Mar 2024",
// // // // //       score: "62%",
// // // // //       type: "Engineering",
// // // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
// // // // //       details: {
// // // // //         assignments: "24.17/25",
// // // // //         exam: "37.5/75",
// // // // //         totalCandidates: 767
// // // // //       },
// // // // //       image: "/lovable-uploads/08ce8850-d97e-47bf-8cd8-0008370882ca.png"
// // // // //     },
// // // // //     {
// // // // //       title: "Web Developer Intern Certificate",
// // // // //       issuer: "Webgeon Results Private Limited",
// // // // //       date: "Jan-Jul 2025",
// // // // //       type: "Professional Experience",
// // // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // // //       location: "Hyderabad",
// // // // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // // // //     }
// // // // //   ];

// // // // //   const getTypeColor = (type) => {
// // // // //     switch (type) {
// // // // //       case "Language Proficiency":
// // // // //         return "bg-purple-100 text-purple-800 border-purple-200";
// // // // //       case "Technical Skills":
// // // // //         return "bg-blue-100 text-blue-800 border-blue-200";
// // // // //       case "Cloud Computing":
// // // // //         return "bg-cyan-100 text-cyan-800 border-cyan-200";
// // // // //       case "Engineering":
// // // // //         return "bg-orange-100 text-orange-800 border-orange-200";
// // // // //       case "Professional Experience":
// // // // //         return "bg-green-100 text-green-800 border-green-200";
// // // // //       default:
// // // // //         return "bg-gray-100 text-gray-800 border-gray-200";
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <section id="certifications" className="py-20 px-4 bg-background">
// // // // //       <div className="container mx-auto">
// // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Certifications & Achievements</h2>
// // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Pagination and Certificates Display */}
// // // // //         <div className="space-y-8">
// // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //             {certifications
// // // // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // // //               .map((cert, index) => (
// // // // //               <Card 
// // // // //                 key={cert.title}
// // // // //                 className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
// // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
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

// // // // //                   {/* Skills for language cert */}
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

// // // // //                   {/* Action Button */}
// // // // //                   <div className="pt-2 mt-auto">
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
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* Pagination Controls with Left/Right Arrows */}
// // // // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // // //             <div className="flex justify-center items-center gap-6 animate-fade-in">
// // // // //               <Button
// // // // //                 variant="outline"
// // // // //                 size="lg"
// // // // //                 onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
// // // // //                 disabled={currentPage === 0}
// // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// // // // //               >
// // // // //                 <ChevronLeft size={24} />
// // // // //               </Button>
              
// // // // //               <div className="flex items-center gap-4">
// // // // //                 <span className="text-muted-foreground text-sm">
// // // // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // // // //                 </span>
// // // // //                 <div className="flex gap-2">
// // // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // // //                     <div
// // // // //                       key={i}
// // // // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // // // //                         i === currentPage ? 'bg-primary' : 'bg-primary/30'
// // // // //                       }`}
// // // // //                     />
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               <Button
// // // // //                 variant="outline"
// // // // //                 size="lg"
// // // // //                 onClick={() => setCurrentPage(Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1))}
// // // // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// // // // //               >
// // // // //                 <ChevronRight size={24} />
// // // // //               </Button>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Stats Section with CountUp Animation */}
// // // // //         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // // //           <div className="text-center">
// // // // //             <CountUp 
// // // // //               end={5} 
// // // // //               suffix="+" 
// // // // //               className="text-3xl font-bold text-primary mb-2"
// // // // //             />
// // // // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // // // //           </div>
// // // // //           <div className="text-center">
// // // // //             <CountUp 
// // // // //               end={4} 
// // // // //               className="text-3xl font-bold text-primary mb-2"
// // // // //             />
// // // // //             <div className="text-muted-foreground text-sm">Skill Areas</div>
// // // // //           </div>
// // // // //           <div className="text-center">
// // // // //             <div className="text-3xl font-bold text-primary mb-2">C1</div>
// // // // //             <div className="text-muted-foreground text-sm">English Level</div>
// // // // //           </div>
// // // // //           <div className="text-center">
// // // // //             <CountUp 
// // // // //               end={6} 
// // // // //               suffix="mo" 
// // // // //               className="text-3xl font-bold text-primary mb-2"
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
// // // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
// // // // import { useState } from "react";

// // // // // Simple CountUp component since it's imported
// // // // const CountUp = ({ end, suffix = "", className }) => {
// // // //   const [count, setCount] = useState(0);
  
// // // //   useState(() => {
// // // //     const timer = setTimeout(() => {
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
// // // //     }, 100);
// // // //     return () => clearTimeout(timer);
// // // //   }, [end]);
  
// // // //   return <div className={className}>{count}{suffix}</div>;
// // // // };

// // // // const Certifications = () => {
// // // //   const [selectedImage, setSelectedImage] = useState(null);
// // // //   const [currentPage, setCurrentPage] = useState(0);
// // // //   const itemsPerPage = 3;

// // // //   // Reordered certifications: Professional Experience → Internship → Professional Certification → Education
// // // //   const certifications = [
// // // //     // Professional Experience (if any - placeholder for future professional roles)
    
// // // //     // Internship Experience
// // // //     {
// // // //       title: "Web Developer Intern Certificate",
// // // //       issuer: "Webgeon Results Private Limited",
// // // //       date: "Jan-Jul 2025",
// // // //       type: "Internship Experience",
// // // //       description: "Internship certificate recognizing outstanding participation and valuable contributions as a Web Developer",
// // // //       location: "Hyderabad",
// // // //       image: "/lovable-uploads/e2f33dfe-358d-4726-86e7-3ca40a1ebea2.png"
// // // //     },
    
// // // //     // Professional Certifications
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
// // // //       title: "Microsoft Azure for Data Engineering",
// // // //       issuer: "Microsoft via Coursera",
// // // //       date: "Aug 2024", 
// // // //       type: "Professional Certification",
// // // //       description: "Specialized course focusing on Azure cloud platform for data engineering solutions",
// // // //       verifyUrl: "https://coursera.org/verify/72W73XJH2A4P",
// // // //       image: "/lovable-uploads/42b23991-8ecc-45fd-b1a5-46a5d64448dc.png"
// // // //     },
// // // //     {
// // // //       title: "Getting Started with Microsoft Excel",
// // // //       issuer: "Coursera Project Network",
// // // //       date: "Jul 2024",
// // // //       type: "Professional Certification",
// // // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // // //     },
    
// // // //     // Education
// // // //     {
// // // //       title: "CMOS Digital VLSI Design",
// // // //       issuer: "NPTEL Online Certification (IIT Roorkee)",
// // // //       date: "Jan-Mar 2024",
// // // //       score: "62%",
// // // //       type: "Education",
// // // //       description: "Elite certification course on CMOS Digital VLSI Design with practical applications",
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

// // // //   return (
// // // //     <section id="certifications" className="py-20 px-4 bg-background">
// // // //       <div className="container mx-auto">
// // // //         <div className="text-center mb-16 animate-fade-in">
// // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Certifications & Achievements</h2>
// // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // // //           </p>
// // // //         </div>

// // // //         {/* Pagination and Certificates Display */}
// // // //         <div className="space-y-8">
// // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {certifications
// // // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // // //               .map((cert, index) => (
// // // //               <Card 
// // // //                 key={cert.title}
// // // //                 className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
// // // //                 style={{ animationDelay: `${index * 0.1}s` }}
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

// // // //                   {/* Skills for language cert */}
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

// // // //                   {/* Action Button */}
// // // //                   <div className="pt-2 mt-auto">
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
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             ))}
// // // //           </div>

// // // //           {/* Pagination Controls with Left/Right Arrows */}
// // // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // // //             <div className="flex justify-center items-center gap-6 animate-fade-in">
// // // //               <Button
// // // //                 variant="outline"
// // // //                 size="lg"
// // // //                 onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
// // // //                 disabled={currentPage === 0}
// // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// // // //               >
// // // //                 <ChevronLeft size={24} />
// // // //               </Button>
              
// // // //               <div className="flex items-center gap-4">
// // // //                 <span className="text-muted-foreground text-sm">
// // // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // // //                 </span>
// // // //                 <div className="flex gap-2">
// // // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // // //                     <div
// // // //                       key={i}
// // // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // // //                         i === currentPage ? 'bg-primary' : 'bg-primary/30'
// // // //                       }`}
// // // //                     />
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               <Button
// // // //                 variant="outline"
// // // //                 size="lg"
// // // //                 onClick={() => setCurrentPage(Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1))}
// // // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// // // //               >
// // // //                 <ChevronRight size={24} />
// // // //               </Button>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Stats Section with CountUp Animation */}
// // // //         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // //           <div className="text-center">
// // // //             <CountUp 
// // // //               end={5} 
// // // //               suffix="+" 
// // // //               className="text-3xl font-bold text-primary mb-2"
// // // //             />
// // // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // // //           </div>
// // // //           <div className="text-center">
// // // //             <CountUp 
// // // //               end={4} 
// // // //               className="text-3xl font-bold text-primary mb-2"
// // // //             />
// // // //             <div className="text-muted-foreground text-sm">Skill Areas</div>
// // // //           </div>
// // // //           <div className="text-center">
// // // //             <div className="text-3xl font-bold text-primary mb-2">C1</div>
// // // //             <div className="text-muted-foreground text-sm">English Level</div>
// // // //           </div>
// // // //           <div className="text-center">
// // // //             <CountUp 
// // // //               end={6} 
// // // //               suffix="mo" 
// // // //               className="text-3xl font-bold text-primary mb-2"
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
// // // import { Calendar, Award, Eye, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
// // // import { useState, useEffect } from "react";
// // // import nextGenProCert from "@/assets/certificates/nextgenpro-cert.jpg";
// // // import techMogulCert from "@/assets/certificates/techmaghi-cert.jpg";

// // // // Simple CountUp component since it's imported
// // // const CountUp = ({ end, suffix = "", className }) => {
// // //   const [count, setCount] = useState(0);
  
// // //   useEffect(() => {
// // //     const timer = setTimeout(() => {
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
// // //     }, 100);
// // //     return () => clearTimeout(timer);
// // //   }, [end]);
  
// // //   return <div className={className}>{count}{suffix}</div>;
// // // };

// // // const Certifications = () => {
// // //   const [selectedImage, setSelectedImage] = useState(null);
// // //   const [currentPage, setCurrentPage] = useState(0);
// // //   const itemsPerPage = 3;

// // //   // Reordered certifications: Professional Experience → Internship → Professional Certification → Education
// // //   const certifications = [
// // //     // Professional Experience (if any - placeholder for future professional roles)
    
// // //     // Internship Experience
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
    
// // //     // Professional Certifications
// // //     {
// // //       title: "NextGen Pro Certificate",
// // //       issuer: "NextGen Professional Development",
// // //       date: "2024",
// // //       type: "Professional Certification",
// // //       description: "Advanced professional development certification demonstrating next-generation skills and expertise",
// // //       skills: ["Leadership", "Innovation", "Strategic Thinking", "Professional Development", "Project Management"],
// // //       image: nextGenProCert
// // //     },
// // //     {
// // //       title: "Tech Mogul Certificate",
// // //       issuer: "TechMaghi Institute",
// // //       date: "2024",
// // //       type: "Professional Certification",
// // //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// // //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// // //       image: techMogulCert
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
// // //       title: "Getting Started with Microsoft Excel",
// // //       issuer: "Coursera Project Network",
// // //       date: "Jul 2024",
// // //       type: "Professional Certification",
// // //       description: "Comprehensive course on Microsoft Excel fundamentals and advanced features",
// // //       skills: ["Data Analysis", "Spreadsheet Management", "Formulas & Functions", "Data Visualization", "Pivot Tables"],
// // //       verifyUrl: "https://coursera.org/verify/ZTLWUFP7M4H",
// // //       image: "/lovable-uploads/95a96087-c4f3-4010-97b9-6aa09c941cab.png"
// // //     },
    
// // //     // Education
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

// // //   return (
// // //     <section id="certifications" className="py-20 px-4 bg-background">
// // //       <div className="container mx-auto">
// // //         <div className="text-center mb-16 animate-fade-in">
// // //           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Certifications & Achievements</h2>
// // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// // //           </p>
// // //         </div>

// // //         {/* Pagination and Certificates Display */}
// // //         <div className="space-y-8">
// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {certifications
// // //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// // //               .map((cert, index) => (
// // //               <Card 
// // //                 key={cert.title}
// // //                 className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
// // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // //               >
// // //                 {/* Certificate Image */}
// // //                 <div className="relative overflow-hidden rounded-t-lg">
// // //                   <img 
// // //                     src={cert.image} 
// // //                     alt={`${cert.title} Certificate`}
// // //                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // //                   />
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // //                   <Dialog>
// // //                     <DialogTrigger asChild>
// // //                       <Button
// // //                         size="sm"
// // //                         variant="secondary"
// // //                         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// // //                       >
// // //                         <Maximize2 size={14} />
// // //                       </Button>
// // //                     </DialogTrigger>
// // //                     <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// // //                       <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// // //                         <img 
// // //                           src={cert.image} 
// // //                           alt={`${cert.title} Certificate`}
// // //                           className="max-w-full max-h-full object-contain"
// // //                         />
// // //                       </div>
// // //                     </DialogContent>
// // //                   </Dialog>
// // //                 </div>

// // //                 {/* Certificate Details - Always visible */}
// // //                 <CardHeader className="pb-4">
// // //                   <div className="flex items-start justify-between mb-3">
// // //                     <Badge 
// // //                       variant="outline" 
// // //                       className={`${getTypeColor(cert.type)} text-xs font-medium`}
// // //                     >
// // //                       {cert.type}
// // //                     </Badge>
// // //                     <div className="flex items-center text-muted-foreground text-sm">
// // //                       <Calendar size={14} className="mr-1" />
// // //                       {cert.date}
// // //                     </div>
// // //                   </div>
// // //                   <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// // //                     {cert.title}
// // //                   </CardTitle>
// // //                   <CardDescription className="text-sm text-primary font-medium">
// // //                     {cert.issuer}
// // //                   </CardDescription>
// // //                 </CardHeader>

// // //                 <CardContent className="space-y-4 flex-1 flex flex-col">
// // //                   <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// // //                     {cert.description}
// // //                   </p>

// // //                   {/* Score/Level Display */}
// // //                   {(cert.score || cert.level) && (
// // //                     <div className="flex gap-2 flex-wrap">
// // //                       {cert.level && (
// // //                         <Badge variant="secondary" className="text-xs">
// // //                           Level: {cert.level}
// // //                         </Badge>
// // //                       )}
// // //                       {cert.score && (
// // //                         <Badge variant="secondary" className="text-xs">
// // //                           Score: {cert.score}
// // //                         </Badge>
// // //                       )}
// // //                     </div>
// // //                   )}

// // //                   {/* Skills Assessed - Now for all certificates */}
// // //                   {cert.skills && (
// // //                     <div>
// // //                       <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// // //                       <div className="flex flex-wrap gap-1">
// // //                         {cert.skills.map((skill) => (
// // //                           <Badge 
// // //                             key={skill} 
// // //                             variant="outline" 
// // //                             className="text-xs bg-primary/5 text-primary border-primary/20"
// // //                           >
// // //                             {skill}
// // //                           </Badge>
// // //                         ))}
// // //                       </div>
// // //                     </div>
// // //                   )}

// // //                   {/* Detailed scores for NPTEL */}
// // //                   {cert.details && (
// // //                     <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// // //                       <div className="flex justify-between">
// // //                         <span>Assignments:</span>
// // //                         <span className="font-medium">{cert.details.assignments}</span>
// // //                       </div>
// // //                       <div className="flex justify-between">
// // //                         <span>Proctored Exam:</span>
// // //                         <span className="font-medium">{cert.details.exam}</span>
// // //                       </div>
// // //                       <div className="flex justify-between text-muted-foreground">
// // //                         <span>Total Candidates:</span>
// // //                         <span>{cert.details.totalCandidates}</span>
// // //                       </div>
// // //                     </div>
// // //                   )}

// // //                   {/* Location for internship */}
// // //                   {cert.location && (
// // //                     <div className="text-xs text-muted-foreground">
// // //                       📍 {cert.location}
// // //                     </div>
// // //                   )}

// // //                   {/* Action Button */}
// // //                   <div className="pt-2 mt-auto">
// // //                     <Dialog>
// // //                       <DialogTrigger asChild>
// // //                         <Button 
// // //                           variant="outline" 
// // //                           size="sm" 
// // //                           className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// // //                         >
// // //                           <Eye size={12} className="mr-1" />
// // //                           View Certificate
// // //                         </Button>
// // //                       </DialogTrigger>
// // //                       <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// // //                         <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// // //                           <img 
// // //                             src={cert.image} 
// // //                             alt={`${cert.title} Certificate`}
// // //                             className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// // //                           />
// // //                         </div>
// // //                       </DialogContent>
// // //                     </Dialog>
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>

// // //           {/* Pagination Controls with Left/Right Arrows */}
// // //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// // //             <div className="flex justify-center items-center gap-6 animate-fade-in">
// // //               <Button
// // //                 variant="outline"
// // //                 size="lg"
// // //                 onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
// // //                 disabled={currentPage === 0}
// // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// // //               >
// // //                 <ChevronLeft size={24} />
// // //               </Button>
              
// // //               <div className="flex items-center gap-4">
// // //                 <span className="text-muted-foreground text-sm">
// // //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// // //                 </span>
// // //                 <div className="flex gap-2">
// // //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// // //                     <div
// // //                       key={i}
// // //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// // //                         i === currentPage ? 'bg-primary' : 'bg-primary/30'
// // //                       }`}
// // //                     />
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <Button
// // //                 variant="outline"
// // //                 size="lg"
// // //                 onClick={() => setCurrentPage(Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1))}
// // //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// // //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// // //               >
// // //                 <ChevronRight size={24} />
// // //               </Button>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Stats Section with CountUp Animation */}
// // //         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // //           <div className="text-center">
// // //             <CountUp 
// // //               end={7} 
// // //               suffix="+" 
// // //               className="text-3xl font-bold text-primary mb-2"
// // //             />
// // //             <div className="text-muted-foreground text-sm">Certifications</div>
// // //           </div>
// // //           <div className="text-center">
// // //             <CountUp 
// // //               end={6} 
// // //               className="text-3xl font-bold text-primary mb-2"
// // //             />
// // //             <div className="text-muted-foreground text-sm">Skill Areas</div>
// // //           </div>
// // //           <div className="text-center">
// // //             <div className="text-3xl font-bold text-primary mb-2">C1</div>
// // //             <div className="text-muted-foreground text-sm">English Level</div>
// // //           </div>
// // //           <div className="text-center">
// // //             <CountUp 
// // //               end={6} 
// // //               suffix="mo" 
// // //               className="text-3xl font-bold text-primary mb-2"
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
// // import { useState, useEffect } from "react";
// // import nextGenProCert from "@/assets/certificates/nextgenpro-cert.jpg";
// // import techMogulCert from "@/assets/certificates/techmaghi-cert.jpg";

// // // CountUp component with countdown animation every 6 seconds
// // const CountUp = ({ end, suffix = "", className }) => {
// //   const [count, setCount] = useState(0);
// //   const [shouldRestart, setShouldRestart] = useState(false);
  
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

// //     // Initial animation
// //     const cleanup = animate();
    
// //     // Restart animation every 6 seconds
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
// // };

// // const Certifications = () => {
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [currentPage, setCurrentPage] = useState(0);
// //   const itemsPerPage = 3;

// //   // Certificates in the requested order
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
// //       title: "Tech Moghi Certificate",
// //       issuer: "TechMaghi Institute",
// //       date: "2024",
// //       type: "Professional Certification",
// //       description: "Technology leadership and entrepreneurship certification focusing on emerging tech trends",
// //       skills: ["Technology Leadership", "Entrepreneurship", "Digital Innovation", "Business Strategy", "Tech Trends"],
// //       image: techMogulCert
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
    
// //     // Education
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
// //     <section id="certifications" className="py-20 px-4 bg-background">
// //       <div className="container mx-auto">
// //         <div className="text-center mb-16 animate-fade-in">
// //           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Certifications & Achievements</h2>
// //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// //             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
// //           </p>
// //         </div>

// //         {/* Pagination and Certificates Display */}
// //         <div className="space-y-8">
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {certifications
// //               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
// //               .map((cert, index) => (
// //               <Card 
// //                 key={cert.title}
// //                 className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 {/* Certificate Image */}
// //                 <div className="relative overflow-hidden rounded-t-lg">
// //                   <img 
// //                     src={cert.image} 
// //                     alt={`${cert.title} Certificate`}
// //                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                   <Dialog>
// //                     <DialogTrigger asChild>
// //                       <Button
// //                         size="sm"
// //                         variant="secondary"
// //                         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
// //                       >
// //                         <Maximize2 size={14} />
// //                       </Button>
// //                     </DialogTrigger>
// //                     <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
// //                       <div className="relative w-full h-full flex items-center justify-center bg-black/5">
// //                         <img 
// //                           src={cert.image} 
// //                           alt={`${cert.title} Certificate`}
// //                           className="max-w-full max-h-full object-contain"
// //                         />
// //                       </div>
// //                     </DialogContent>
// //                   </Dialog>
// //                 </div>

// //                 {/* Certificate Details - Always visible */}
// //                 <CardHeader className="pb-4">
// //                   <div className="flex items-start justify-between mb-3">
// //                     <Badge 
// //                       variant="outline" 
// //                       className={`${getTypeColor(cert.type)} text-xs font-medium`}
// //                     >
// //                       {cert.type}
// //                     </Badge>
// //                     <div className="flex items-center text-muted-foreground text-sm">
// //                       <Calendar size={14} className="mr-1" />
// //                       {cert.date}
// //                     </div>
// //                   </div>
// //                   <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
// //                     {cert.title}
// //                   </CardTitle>
// //                   <CardDescription className="text-sm text-primary font-medium">
// //                     {cert.issuer}
// //                   </CardDescription>
// //                 </CardHeader>

// //                 <CardContent className="space-y-4 flex-1 flex flex-col">
// //                   <p className="text-muted-foreground text-sm leading-relaxed flex-1">
// //                     {cert.description}
// //                   </p>

// //                   {/* Score/Level Display */}
// //                   {(cert.score || cert.level) && (
// //                     <div className="flex gap-2 flex-wrap">
// //                       {cert.level && (
// //                         <Badge variant="secondary" className="text-xs">
// //                           Level: {cert.level}
// //                         </Badge>
// //                       )}
// //                       {cert.score && (
// //                         <Badge variant="secondary" className="text-xs">
// //                           Score: {cert.score}
// //                         </Badge>
// //                       )}
// //                     </div>
// //                   )}

// //                   {/* Skills Assessed - Now for all certificates */}
// //                   {cert.skills && (
// //                     <div>
// //                       <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
// //                       <div className="flex flex-wrap gap-1">
// //                         {cert.skills.map((skill) => (
// //                           <Badge 
// //                             key={skill} 
// //                             variant="outline" 
// //                             className="text-xs bg-primary/5 text-primary border-primary/20"
// //                           >
// //                             {skill}
// //                           </Badge>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   )}

// //                   {/* Detailed scores for NPTEL */}
// //                   {cert.details && (
// //                     <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
// //                       <div className="flex justify-between">
// //                         <span>Assignments:</span>
// //                         <span className="font-medium">{cert.details.assignments}</span>
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span>Proctored Exam:</span>
// //                         <span className="font-medium">{cert.details.exam}</span>
// //                       </div>
// //                       <div className="flex justify-between text-muted-foreground">
// //                         <span>Total Candidates:</span>
// //                         <span>{cert.details.totalCandidates}</span>
// //                       </div>
// //                     </div>
// //                   )}

// //                   {/* Location for internship */}
// //                   {cert.location && (
// //                     <div className="text-xs text-muted-foreground">
// //                       📍 {cert.location}
// //                     </div>
// //                   )}

// //                   {/* Action Buttons */}
// //                   <div className="pt-2 mt-auto space-y-2">
// //                     <Dialog>
// //                       <DialogTrigger asChild>
// //                         <Button 
// //                           variant="outline" 
// //                           size="sm" 
// //                           className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
// //                         >
// //                           <Eye size={12} className="mr-1" />
// //                           View Certificate
// //                         </Button>
// //                       </DialogTrigger>
// //                       <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
// //                         <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
// //                           <img 
// //                             src={cert.image} 
// //                             alt={`${cert.title} Certificate`}
// //                             className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
// //                           />
// //                         </div>
// //                       </DialogContent>
// //                     </Dialog>
// //                     <Button 
// //                       variant="secondary" 
// //                       size="sm" 
// //                       onClick={() => downloadCertificate(cert)}
// //                       className="w-full text-xs"
// //                     >
// //                       <Download size={12} className="mr-1" />
// //                       Download Certificate
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>

// //           {/* Pagination Controls with Left/Right Arrows */}
// //           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
// //             <div className="flex justify-center items-center gap-6 animate-fade-in">
// //               <Button
// //                 variant="outline"
// //                 size="lg"
// //                 onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
// //                 disabled={currentPage === 0}
// //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// //               >
// //                 <ChevronLeft size={24} />
// //               </Button>
              
// //               <div className="flex items-center gap-4">
// //                 <span className="text-muted-foreground text-sm">
// //                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
// //                 </span>
// //                 <div className="flex gap-2">
// //                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
// //                     <div
// //                       key={i}
// //                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
// //                         i === currentPage ? 'bg-primary' : 'bg-primary/30'
// //                       }`}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>

// //               <Button
// //                 variant="outline"
// //                 size="lg"
// //                 onClick={() => setCurrentPage(Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1))}
// //                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
// //                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
// //               >
// //                 <ChevronRight size={24} />
// //               </Button>
// //             </div>
// //           )}
// //         </div>

// //         {/* Stats Section with CountUp Animation (restarts every 6 seconds) */}
// //         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// //           <div className="text-center">
// //             <CountUp 
// //               end={4} 
// //               suffix="+" 
// //               className="text-3xl font-bold text-primary mb-2"
// //             />
// //             <div className="text-muted-foreground text-sm">Certifications</div>
// //           </div>
// //           <div className="text-center">
// //             <CountUp 
// //               end={20} 
// //               suffix="+" 
// //               className="text-3xl font-bold text-primary mb-2"
// //             />
// //             <div className="text-muted-foreground text-sm">Skills</div>
// //           </div>
// //           <div className="text-center">
// //             <div className="text-3xl font-bold text-primary mb-2">C1</div>
// //             <div className="text-muted-foreground text-sm">English Level</div>
// //           </div>
// //           <div className="text-center">
// //             <CountUp 
// //               end={6} 
// //               suffix="mo" 
// //               className="text-3xl font-bold text-primary mb-2"
// //             />
// //             <div className="text-muted-foreground text-sm">Internship</div>
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
// import { useState, useEffect } from "react";


// // CountUp component with countdown animation every 6 seconds
// const CountUp = ({ end, suffix = "", className }) => {
//   const [count, setCount] = useState(0);
//   const [shouldRestart, setShouldRestart] = useState(false);
  
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

//     // Initial animation
//     const cleanup = animate();
    
//     // Restart animation every 6 seconds
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
// };

// const Certifications = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 3;

//   // Certificates in the requested order
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
//     <section id="certifications" className="py-20 px-4 bg-background">
//       <div className="container mx-auto">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Certifications & Achievements</h2>
//           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
//           </p>
//         </div>

//         {/* Pagination and Certificates Display */}
//         <div className="space-y-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certifications
//               .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
//               .map((cert, index) => (
//               <Card 
//                 key={cert.title}
//                 className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {/* Certificate Image */}
//                 <div className="relative overflow-hidden rounded-t-lg">
//                   <img 
//                     src={cert.image} 
//                     alt={`${cert.title} Certificate`}
//                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <Dialog>
//                     <DialogTrigger asChild>
//                       <Button
//                         size="sm"
//                         variant="secondary"
//                         className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black"
//                       >
//                         <Maximize2 size={14} />
//                       </Button>
//                     </DialogTrigger>
//                     <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
//                       <div className="relative w-full h-full flex items-center justify-center bg-black/5">
//                         <img 
//                           src={cert.image} 
//                           alt={`${cert.title} Certificate`}
//                           className="max-w-full max-h-full object-contain"
//                         />
//                       </div>
//                     </DialogContent>
//                   </Dialog>
//                 </div>

//                 {/* Certificate Details - Always visible */}
//                 <CardHeader className="pb-4">
//                   <div className="flex items-start justify-between mb-3">
//                     <Badge 
//                       variant="outline" 
//                       className={`${getTypeColor(cert.type)} text-xs font-medium`}
//                     >
//                       {cert.type}
//                     </Badge>
//                     <div className="flex items-center text-muted-foreground text-sm">
//                       <Calendar size={14} className="mr-1" />
//                       {cert.date}
//                     </div>
//                   </div>
//                   <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
//                     {cert.title}
//                   </CardTitle>
//                   <CardDescription className="text-sm text-primary font-medium">
//                     {cert.issuer}
//                   </CardDescription>
//                 </CardHeader>

//                 <CardContent className="space-y-4 flex-1 flex flex-col">
//                   <p className="text-muted-foreground text-sm leading-relaxed flex-1">
//                     {cert.description}
//                   </p>

//                   {/* Score/Level Display */}
//                   {(cert.score || cert.level) && (
//                     <div className="flex gap-2 flex-wrap">
//                       {cert.level && (
//                         <Badge variant="secondary" className="text-xs">
//                           Level: {cert.level}
//                         </Badge>
//                       )}
//                       {cert.score && (
//                         <Badge variant="secondary" className="text-xs">
//                           Score: {cert.score}
//                         </Badge>
//                       )}
//                     </div>
//                   )}

//                   {/* Skills Assessed - Now for all certificates */}
//                   {cert.skills && (
//                     <div>
//                       <p className="text-sm font-medium text-primary mb-2">Skills Assessed:</p>
//                       <div className="flex flex-wrap gap-1">
//                         {cert.skills.map((skill) => (
//                           <Badge 
//                             key={skill} 
//                             variant="outline" 
//                             className="text-xs bg-primary/5 text-primary border-primary/20"
//                           >
//                             {skill}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Detailed scores for NPTEL */}
//                   {cert.details && (
//                     <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
//                       <div className="flex justify-between">
//                         <span>Assignments:</span>
//                         <span className="font-medium">{cert.details.assignments}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Proctored Exam:</span>
//                         <span className="font-medium">{cert.details.exam}</span>
//                       </div>
//                       <div className="flex justify-between text-muted-foreground">
//                         <span>Total Candidates:</span>
//                         <span>{cert.details.totalCandidates}</span>
//                       </div>
//                     </div>
//                   )}

//                   {/* Location for internship */}
//                   {cert.location && (
//                     <div className="text-xs text-muted-foreground">
//                       📍 {cert.location}
//                     </div>
//                   )}

//                   {/* Action Buttons */}
//                   <div className="pt-2 mt-auto space-y-2">
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <Button 
//                           variant="outline" 
//                           size="sm" 
//                           className="w-full border-primary/20 text-primary hover:bg-primary/10 text-xs"
//                         >
//                           <Eye size={12} className="mr-1" />
//                           View Certificate
//                         </Button>
//                       </DialogTrigger>
//                       <DialogContent className="max-w-4xl w-full h-[80vh] p-2">
//                         <div className="relative w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
//                           <img 
//                             src={cert.image} 
//                             alt={`${cert.title} Certificate`}
//                             className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
//                           />
//                         </div>
//                       </DialogContent>
//                     </Dialog>
//                     <Button 
//                       variant="secondary" 
//                       size="sm" 
//                       onClick={() => downloadCertificate(cert)}
//                       className="w-full text-xs"
//                     >
//                       <Download size={12} className="mr-1" />
//                       Download Certificate
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Pagination Controls with Left/Right Arrows */}
//           {Math.ceil(certifications.length / itemsPerPage) > 1 && (
//             <div className="flex justify-center items-center gap-6 animate-fade-in">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
//                 disabled={currentPage === 0}
//                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
//               >
//                 <ChevronLeft size={24} />
//               </Button>
              
//               <div className="flex items-center gap-4">
//                 <span className="text-muted-foreground text-sm">
//                   Page {currentPage + 1} of {Math.ceil(certifications.length / itemsPerPage)}
//                 </span>
//                 <div className="flex gap-2">
//                   {Array.from({ length: Math.ceil(certifications.length / itemsPerPage) }, (_, i) => (
//                     <div
//                       key={i}
//                       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                         i === currentPage ? 'bg-primary' : 'bg-primary/30'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <Button
//                 variant="outline"
//                 size="lg"
//                 onClick={() => setCurrentPage(Math.min(Math.ceil(certifications.length / itemsPerPage) - 1, currentPage + 1))}
//                 disabled={currentPage === Math.ceil(certifications.length / itemsPerPage) - 1}
//                 className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
//               >
//                 <ChevronRight size={24} />
//               </Button>
//             </div>
//           )}
//         </div>

//         {/* Stats Section with CountUp Animation (restarts every 6 seconds) */}
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
//           <div className="text-center">
//             <CountUp 
//               end={7} 
//               suffix="+" 
//               className="text-3xl font-bold text-primary mb-2"
//             />
//             <div className="text-muted-foreground text-sm">Certifications</div>
//           </div>
//           <div className="text-center">
//             <CountUp 
//               end={20} 
//               suffix="+" 
//               className="text-3xl font-bold text-primary mb-2"
//             />
//             <div className="text-muted-foreground text-sm">Skills</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-primary mb-2">C1</div>
//             <div className="text-muted-foreground text-sm">English Level</div>
//           </div>
//           <div className="text-center">
//             <CountUp 
//               end={6} 
//               suffix="mo" 
//               className="text-3xl font-bold text-primary mb-2"
//             />
//             <div className="text-muted-foreground text-sm">Internship</div>
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
import { useState, useEffect, useRef } from "react";

// CountUp component with countdown animation every 6 seconds
const CountUp = ({ end, suffix = "", className }) => {
  const [count, setCount] = useState(0);
  const [shouldRestart, setShouldRestart] = useState(false);
  
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

    // Initial animation
    const cleanup = animate();
    
    // Restart animation every 6 seconds
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
};

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef(null);
  const itemsPerPage = 3;
  const mobileItemsPerPage = 1;

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Reset to first page when switching between mobile/desktop
      if (mobile !== isMobile) {
        setCurrentPage(0);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  // Touch event handlers
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    
    const touchDiff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    
    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (touchDiff > 0) {
        // Swipe left - next page
        handleNextPage();
      } else {
        // Swipe right - previous page
        handlePreviousPage();
      }
    }
  };

  const handleNextPage = () => {
    const maxPages = Math.ceil(certifications.length / (isMobile ? mobileItemsPerPage : itemsPerPage));
    setCurrentPage(prev => Math.min(maxPages - 1, prev + 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  // Certificates in the requested order
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

  const currentItemsPerPage = isMobile ? mobileItemsPerPage : itemsPerPage;
  const totalPages = Math.ceil(certifications.length / currentItemsPerPage);
  const currentCertifications = certifications.slice(
    currentPage * currentItemsPerPage, 
    (currentPage + 1) * currentItemsPerPage
  );

  return (
    <section id="certifications" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Certifications & Achievements</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise
          </p>
        </div>

        {/* Mobile Swipe Instructions */}
        {isMobile && totalPages > 1 && (
          <div className="text-center mb-6 animate-fade-in">
            
          </div>
        )}

        {/* Certificates Display with Touch Support */}
        <div className="space-y-8">
          <div 
            ref={containerRef}
            className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              touchAction: isMobile ? 'pan-y' : 'auto',
              userSelect: 'none'
            }}
          >
            {currentCertifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group animate-fade-in h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-6 animate-fade-in">
              {/* Desktop Controls - Show arrows only on desktop */}
              {!isMobile && (
                <>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 0}
                    className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
                  >
                    <ChevronLeft size={24} />
                  </Button>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground text-sm">
                      Page {currentPage + 1} of {totalPages}
                    </span>
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            i === currentPage ? 'bg-primary' : 'bg-primary/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages - 1}
                    className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full p-4"
                  >
                    <ChevronRight size={24} />
                  </Button>
                </>
              )}

              {/* Mobile Controls - Show only dots and page info */}
              {isMobile && (
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground text-sm">
                    {currentPage + 1} of {totalPages}
                  </span>
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          i === currentPage ? 'bg-primary' : 'bg-primary/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Stats Section with CountUp Animation */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <CountUp 
              end={7} 
              suffix="+" 
              className="text-3xl font-bold text-primary mb-2"
            />
            <div className="text-muted-foreground text-sm">Certifications</div>
          </div>
          <div className="text-center">
            <CountUp 
              end={20} 
              suffix="+" 
              className="text-3xl font-bold text-primary mb-2"
            />
            <div className="text-muted-foreground text-sm">Skills</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">C1</div>
            <div className="text-muted-foreground text-sm">English Level</div>
          </div>
          <div className="text-center">
            <CountUp 
              end={6} 
              suffix="mo" 
              className="text-3xl font-bold text-primary mb-2"
            />
            <div className="text-muted-foreground text-sm">Internship</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
