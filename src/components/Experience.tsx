// // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
// // // // // // // // // // // // Import technology icons
// // // // // // // // // // // import nextjsIcon from "@/assets/icons/nextjs.svg";
// // // // // // // // // // // import jsIcon from "@/assets/icons/javascript.svg";
// // // // // // // // // // // import mongoIcon from "@/assets/icons/mongodb.svg";
// // // // // // // // // // // import mysqlIcon from "@/assets/icons/mysql.svg";
// // // // // // // // // // // import postmanIcon from "@/assets/icons/postman.svg";
// // // // // // // // // // // import arduinoIcon from "@/assets/icons/arduino.svg";
// // // // // // // // // // // import pythonIcon from "@/assets/icons/python.svg";
// // // // // // // // // // // import htmlIcon from "@/assets/icons/html.svg";
// // // // // // // // // // // import cssIcon from "@/assets/icons/css.svg";
// // // // // // // // // // // import circuitIcon from "@/assets/icons/circuit.svg";
// // // // // // // // // // // import sensorIcon from "@/assets/icons/sensor.svg";
// // // // // // // // // // // import embeddedIcon from "@/assets/icons/embedded.svg";

// // // // // // // // // // // const Experience = () => {
// // // // // // // // // // //   const workExperience = [
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Web Developer",
// // // // // // // // // // //       company: "Webgeon Results",
// // // // // // // // // // //       period: "Dec 2023 - Present",
// // // // // // // // // // //       type: "Full-time",
// // // // // // // // // // //       achievements: [
// // // // // // // // // // //         "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // // // // // // // // // //         "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // // // // // // // // // //         "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // // // // // // // // // //         "Used MongoDB and MySQL to store and organize different types of data",
// // // // // // // // // // //         "Used VS Code and Eclipse for streamlined development and debugging",
// // // // // // // // // // //         "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // // // // // // // // // //         "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // // // // // // // // // //       ],
// // // // // // // // // // //       technologies: [
// // // // // // // // // // //         { name: "Next.js", icon: nextjsIcon },
// // // // // // // // // // //         { name: "Tailwind CSS", icon: null },
// // // // // // // // // // //         { name: "JavaScript", icon: jsIcon },
// // // // // // // // // // //         { name: "MongoDB", icon: mongoIcon },
// // // // // // // // // // //         { name: "MySQL", icon: mysqlIcon },
// // // // // // // // // // //         { name: "Postman", icon: postmanIcon }
// // // // // // // // // // //       ]
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const internships = [
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Embedded Systems Intern",
// // // // // // // // // // //       company: "Next Gen Pro",
// // // // // // // // // // //       period: "May 2023 - May 2024",
// // // // // // // // // // //       type: "Internship",
// // // // // // // // // // //       achievements: [
// // // // // // // // // // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // // // // // // // // // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // // // // // // // // // //         "Gained practical experience in building microcontroller-based automation systems"
// // // // // // // // // // //       ],
// // // // // // // // // // //       technologies: [
// // // // // // // // // // //         { name: "Arduino UNO", icon: arduinoIcon },
// // // // // // // // // // //         { name: "Embedded Systems", icon: embeddedIcon },
// // // // // // // // // // //         { name: "Circuit Design", icon: circuitIcon },
// // // // // // // // // // //         { name: "Sensors", icon: sensorIcon }
// // // // // // // // // // //       ]
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Python Full Stack Development Intern",
// // // // // // // // // // //       company: "TechMogul",
// // // // // // // // // // //       period: "Jun 2024 - Jun 2024",
// // // // // // // // // // //       type: "Internship",
// // // // // // // // // // //       achievements: [
// // // // // // // // // // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // // // // // // // // // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // // // // // // // // // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // // // // // // // // // //       ],
// // // // // // // // // // //       technologies: [
// // // // // // // // // // //         { name: "Python", icon: pythonIcon },
// // // // // // // // // // //         { name: "HTML", icon: htmlIcon },
// // // // // // // // // // //         { name: "CSS", icon: cssIcon },
// // // // // // // // // // //         { name: "JavaScript", icon: jsIcon },
// // // // // // // // // // //         { name: "Full Stack Development", icon: null }
// // // // // // // // // // //       ]
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const education = [
// // // // // // // // // // //     {
// // // // // // // // // // //       degree: "B.Tech in Electronics and Communication Engineering",
// // // // // // // // // // //       institution: "Federal Institute of Science and Technology (FISAT), Kerala",
// // // // // // // // // // //       period: "August 2021 - April 2025",
// // // // // // // // // // //       cgpa: "7.45",
// // // // // // // // // // //       type: "Bachelor's Degree"
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       degree: "Senior Secondary Education (CBSE)",
// // // // // // // // // // //       institution: "Vijayagiri Public School, Kerala",
// // // // // // // // // // //       period: "Jun 2019 - Feb 2021",
// // // // // // // // // // //       percentage: "87%",
// // // // // // // // // // //       type: "Higher Secondary"
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const certifications = [
// // // // // // // // // // //     "Microsoft Azure for Data Engineering (Coursera)",
// // // // // // // // // // //     "CMOS Digital VLSI Design (NPTEL)",
// // // // // // // // // // //     "EF SET English Certificate",
// // // // // // // // // // //     "Introduction to Microsoft Excel (Coursera)"
// // // // // // // // // // //   ];

// // // // // // // // // // //   return (
// // // // // // // // // // //     <section id="experience" className="py-20 px-4 bg-background">
// // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
// // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <div className="grid lg:grid-cols-3 gap-8">
// // // // // // // // // // //           {/* Education - Left Column */}
// // // // // // // // // // //           <div className="space-y-8">
// // // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // // //               <GraduationCap className="text-primary" size={28} />
// // // // // // // // // // //               Education
// // // // // // // // // // //             </h3>

// // // // // // // // // // //             {/* Higher Secondary - First */}
// // // // // // // // // // //             <Card 
// // // // // // // // // // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // // // //               style={{ animationDelay: '0.1s' }}
// // // // // // // // // // //             >
// // // // // // // // // // //               <CardHeader>
// // // // // // // // // // //                 <div className="flex items-start justify-between mb-2">
// // // // // // // // // // //                   <Badge variant="outline" className="bg-secondary text-secondary-foreground">
// // // // // // // // // // //                     Higher Secondary
// // // // // // // // // // //                   </Badge>
// // // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // // //                     Jun 2019 - Feb 2021
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <CardTitle className="text-lg leading-tight">Senior Secondary Education (CBSE)</CardTitle>
// // // // // // // // // // //                 <CardDescription className="text-base flex items-start gap-2">
// // // // // // // // // // //                   <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
// // // // // // // // // // //                   Vijayagiri Public School, Kerala
// // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <Badge variant="secondary" className="bg-primary/10 text-primary">
// // // // // // // // // // //                   Percentage: 87%
// // // // // // // // // // //                 </Badge>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>

// // // // // // // // // // //             {/* Bachelor's Degree - Second */}
// // // // // // // // // // //             <Card 
// // // // // // // // // // //               className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // // // //               style={{ animationDelay: '0.2s' }}
// // // // // // // // // // //             >
// // // // // // // // // // //               <CardHeader>
// // // // // // // // // // //                 <div className="flex items-start justify-between mb-2">
// // // // // // // // // // //                   <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // // // //                     Bachelor's Degree
// // // // // // // // // // //                   </Badge>
// // // // // // // // // // //                   <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // //                     <Calendar size={16} className="mr-1" />
// // // // // // // // // // //                     August 2021 - April 2025
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <CardTitle className="text-lg leading-tight">B.Tech in Electronics and Communication Engineering</CardTitle>
// // // // // // // // // // //                 <CardDescription className="text-base flex items-start gap-2">
// // // // // // // // // // //                   <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
// // // // // // // // // // //                   Federal Institute of Science and Technology (FISAT), Kerala
// // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <Badge variant="secondary" className="bg-primary/10 text-primary">
// // // // // // // // // // //                   CGPA: 7.45
// // // // // // // // // // //                 </Badge>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Professional Experience - Center Column */}
// // // // // // // // // // //           <div className="space-y-8">
// // // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // // // // //               Professional Experience
// // // // // // // // // // //             </h3>

// // // // // // // // // // //             {/* Current Work */}
// // // // // // // // // // //             {workExperience.map((job, index) => (
// // // // // // // // // // //               <Card 
// // // // // // // // // // //                 key={job.title}
// // // // // // // // // // //                 className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <CardHeader>
// // // // // // // // // // //                   <div className="flex items-start justify-between mb-2">
// // // // // // // // // // //                     <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // // // //                       {job.type}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // // // // // // //                       {job.period}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-xl">{job.title}</CardTitle>
// // // // // // // // // // //                   <CardDescription className="text-base font-medium text-primary">
// // // // // // // // // // //                     {job.company}
// // // // // // // // // // //                   </CardDescription>
// // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // //                 <CardContent className="space-y-4">
// // // // // // // // // // //                   <div>
// // // // // // // // // // //                     <h4 className="font-semibold mb-3">Key Achievements</h4>
// // // // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // // // //                       {job.achievements.map((achievement, achievementIndex) => (
// // // // // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // //                           {achievement}
// // // // // // // // // // //                         </li>
// // // // // // // // // // //                       ))}
// // // // // // // // // // //                     </ul>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <div>
// // // // // // // // // // //                     <h4 className="font-semibold mb-2">Technologies</h4>
// // // // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                       {job.technologies.map((tech, techIndex) => (
// // // // // // // // // // //                         <Badge 
// // // // // // // // // // //                           key={`${job.title}-tech-${techIndex}`}
// // // // // // // // // // //                           variant="secondary" 
// // // // // // // // // // //                           className="bg-primary/10 text-primary flex items-center gap-1"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           {tech.icon && (
// // // // // // // // // // //                             <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
// // // // // // // // // // //                           )}
// // // // // // // // // // //                           {tech.name}
// // // // // // // // // // //                         </Badge>
// // // // // // // // // // //                       ))}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </CardContent>
// // // // // // // // // // //               </Card>
// // // // // // // // // // //             ))}

// // // // // // // // // // //             {/* Internships */}
// // // // // // // // // // //             <h4 className="text-xl font-semibold mb-4 mt-8 text-primary">Internship Experience</h4>
// // // // // // // // // // //             {internships.map((internship, index) => (
// // // // // // // // // // //               <Card 
// // // // // // // // // // //                 key={internship.title}
// // // // // // // // // // //                 className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // // // //                 style={{ animationDelay: `${(index + 1) * 0.1}s` }}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <CardHeader>
// // // // // // // // // // //                   <div className="flex items-start justify-between mb-2">
// // // // // // // // // // //                     <Badge variant="outline" className="bg-secondary text-secondary-foreground">
// // // // // // // // // // //                       {internship.type}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // // // // // // //                       {internship.period}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-lg">{internship.title}</CardTitle>
// // // // // // // // // // //                   <CardDescription className="text-base font-medium text-primary">
// // // // // // // // // // //                     {internship.company}
// // // // // // // // // // //                   </CardDescription>
// // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // //                 <CardContent className="space-y-4">
// // // // // // // // // // //                   <ul className="space-y-2">
// // // // // // // // // // //                     {internship.achievements.map((achievement, achievementIndex) => (
// // // // // // // // // // //                       <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // //                         <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // //                         {achievement}
// // // // // // // // // // //                       </li>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </ul>
// // // // // // // // // // //                   <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                     {internship.technologies.map((tech, techIndex) => (
// // // // // // // // // // //                       <Badge 
// // // // // // // // // // //                         key={`${internship.title}-tech-${techIndex}`}
// // // // // // // // // // //                         variant="secondary" 
// // // // // // // // // // //                         className="bg-primary/5 text-primary flex items-center gap-1"
// // // // // // // // // // //                       >
// // // // // // // // // // //                         {tech.icon && (
// // // // // // // // // // //                           <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
// // // // // // // // // // //                         )}
// // // // // // // // // // //                         {tech.name}
// // // // // // // // // // //                       </Badge>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </CardContent>
// // // // // // // // // // //               </Card>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* Certifications - Right Column */}
// // // // // // // // // // //           <div className="space-y-8">
// // // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // // //               <GraduationCap className="text-primary" size={28} />
// // // // // // // // // // //               Certifications
// // // // // // // // // // //             </h3>

// // // // // // // // // // //             <Card className="bg-gradient-card shadow-elegant border-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
// // // // // // // // // // //               <CardHeader>
// // // // // // // // // // //                 <CardTitle className="text-xl">Professional Certifications</CardTitle>
// // // // // // // // // // //                 <CardDescription>
// // // // // // // // // // //                   Continuous learning and skill development
// // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <ul className="space-y-3">
// // // // // // // // // // //                   {certifications.map((cert, index) => (
// // // // // // // // // // //                     <li key={index} className="flex items-start gap-3">
// // // // // // // // // // //                       <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
// // // // // // // // // // //                       <span className="text-muted-foreground">{cert}</span>
// // // // // // // // // // //                     </li>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </ul>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Experience;
// // // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // // import { Briefcase, GraduationCap, Calendar, MapPin, Award } from "lucide-react";
// // // // // // // // // // // // Import technology icons
// // // // // // // // // // // import nextjsIcon from "@/assets/icons/nextjs.svg";
// // // // // // // // // // // import jsIcon from "@/assets/icons/javascript.svg";
// // // // // // // // // // // import mongoIcon from "@/assets/icons/mongodb.svg";
// // // // // // // // // // // import mysqlIcon from "@/assets/icons/mysql.svg";
// // // // // // // // // // // import postmanIcon from "@/assets/icons/postman.svg";
// // // // // // // // // // // import arduinoIcon from "@/assets/icons/arduino.svg";
// // // // // // // // // // // import pythonIcon from "@/assets/icons/python.svg";
// // // // // // // // // // // import htmlIcon from "@/assets/icons/html.svg";
// // // // // // // // // // // import cssIcon from "@/assets/icons/css.svg";

// // // // // // // // // // // const Experience = () => {
// // // // // // // // // // //   const workExperience = [
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Web Developer",
// // // // // // // // // // //       company: "Webgeon Results",
// // // // // // // // // // //       period: "Dec 2023 - Present",
// // // // // // // // // // //       type: "Full-time",
// // // // // // // // // // //       achievements: [
// // // // // // // // // // //         "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // // // // // // // // // //         "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // // // // // // // // // //         "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // // // // // // // // // //         "Used MongoDB and MySQL to store and organize different types of data",
// // // // // // // // // // //         "Used VS Code and Eclipse for streamlined development and debugging",
// // // // // // // // // // //         "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // // // // // // // // // //         "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // // // // // // // // // //       ],
// // // // // // // // // // //       technologies: [
// // // // // // // // // // //         { name: "Next.js", icon: nextjsIcon },
// // // // // // // // // // //         { name: "Tailwind CSS", icon: null },
// // // // // // // // // // //         { name: "JavaScript", icon: jsIcon },
// // // // // // // // // // //         { name: "MongoDB", icon: mongoIcon },
// // // // // // // // // // //         { name: "MySQL", icon: mysqlIcon },
// // // // // // // // // // //         { name: "Postman", icon: postmanIcon }
// // // // // // // // // // //       ]
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const internships = [
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Embedded Systems Intern",
// // // // // // // // // // //       company: "Next Gen Pro",
// // // // // // // // // // //       period: "May 2023 - May 2024",
// // // // // // // // // // //       type: "Internship",
// // // // // // // // // // //       achievements: [
// // // // // // // // // // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // // // // // // // // // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // // // // // // // // // //         "Gained practical experience in building microcontroller-based automation systems"
// // // // // // // // // // //       ],
// // // // // // // // // // //       technologies: [
// // // // // // // // // // //         { name: "Arduino UNO", icon: arduinoIcon },
// // // // // // // // // // //         { name: "Embedded Systems", icon: null },
// // // // // // // // // // //         { name: "Circuit Design", icon: null },
// // // // // // // // // // //         { name: "Sensors", icon: null }
// // // // // // // // // // //       ]
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       title: "Python Full Stack Development Intern",
// // // // // // // // // // //       company: "TechMogul",
// // // // // // // // // // //       period: "Jun 2024 - Jun 2024",
// // // // // // // // // // //       type: "Internship",
// // // // // // // // // // //       achievements: [
// // // // // // // // // // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // // // // // // // // // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // // // // // // // // // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // // // // // // // // // //       ],
// // // // // // // // // // //       technologies: [
// // // // // // // // // // //         { name: "Python", icon: pythonIcon },
// // // // // // // // // // //         { name: "HTML", icon: htmlIcon },
// // // // // // // // // // //         { name: "CSS", icon: cssIcon },
// // // // // // // // // // //         { name: "JavaScript", icon: jsIcon },
// // // // // // // // // // //         { name: "Full Stack Development", icon: null }
// // // // // // // // // // //       ]
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   const certifications = [
// // // // // // // // // // //     "Microsoft Azure for Data Engineering (Coursera)",
// // // // // // // // // // //     "CMOS Digital VLSI Design (NPTEL)",
// // // // // // // // // // //     "EF SET English Certificate",
// // // // // // // // // // //     "Introduction to Microsoft Excel (Coursera)"
// // // // // // // // // // //   ];

// // // // // // // // // // //   const education = [
// // // // // // // // // // //     {
// // // // // // // // // // //       degree: "B.Tech in Electronics and Communication Engineering",
// // // // // // // // // // //       institution: "Federal Institute of Science and Technology (FISAT), Kerala",
// // // // // // // // // // //       period: "August 2021 - April 2025",
// // // // // // // // // // //       cgpa: "7.45",
// // // // // // // // // // //       type: "Bachelor's Degree"
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       degree: "Senior Secondary Education (CBSE)",
// // // // // // // // // // //       institution: "Vijayagiri Public School, Kerala",
// // // // // // // // // // //       period: "Jun 2019 - Feb 2021",
// // // // // // // // // // //       percentage: "87%",
// // // // // // // // // // //       type: "Higher Secondary"
// // // // // // // // // // //     }
// // // // // // // // // // //   ];

// // // // // // // // // // //   return (
// // // // // // // // // // //     <section id="experience" className="py-20 px-4 bg-background">
// // // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
// // // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <div className="space-y-12">
// // // // // // // // // // //           {/* 1. Professional Experience */}
// // // // // // // // // // //           <div className="w-full">
// // // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // // // // //               Professional Experience
// // // // // // // // // // //             </h3>
// // // // // // // // // // //             {workExperience.map((job, index) => (
// // // // // // // // // // //               <Card 
// // // // // // // // // // //                 key={job.title}
// // // // // // // // // // //                 className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in mb-6"
// // // // // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // // //               >
// // // // // // // // // // //                 <CardHeader>
// // // // // // // // // // //                   <div className="flex items-start justify-between mb-2">
// // // // // // // // // // //                     <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // // // //                       {job.type}
// // // // // // // // // // //                     </Badge>
// // // // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // // // // // // //                       {job.period}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <CardTitle className="text-xl">{job.title}</CardTitle>
// // // // // // // // // // //                   <CardDescription className="text-base font-medium text-primary">
// // // // // // // // // // //                     {job.company}
// // // // // // // // // // //                   </CardDescription>
// // // // // // // // // // //                 </CardHeader>
// // // // // // // // // // //                 <CardContent className="space-y-4">
// // // // // // // // // // //                   <div>
// // // // // // // // // // //                     <h4 className="font-semibold mb-3">Key Achievements</h4>
// // // // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // // // //                       {job.achievements.map((achievement, achievementIndex) => (
// // // // // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // //                           {achievement}
// // // // // // // // // // //                         </li>
// // // // // // // // // // //                       ))}
// // // // // // // // // // //                     </ul>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                   <div>
// // // // // // // // // // //                     <h4 className="font-semibold mb-2">Technologies</h4>
// // // // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                       {job.technologies.map((tech, techIndex) => (
// // // // // // // // // // //                         <Badge 
// // // // // // // // // // //                           key={`${job.title}-tech-${techIndex}`}
// // // // // // // // // // //                           variant="secondary" 
// // // // // // // // // // //                           className="bg-primary/10 text-primary flex items-center gap-1"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           {tech.icon && (
// // // // // // // // // // //                             <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
// // // // // // // // // // //                           )}
// // // // // // // // // // //                           {tech.name}
// // // // // // // // // // //                         </Badge>
// // // // // // // // // // //                       ))}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </CardContent>
// // // // // // // // // // //               </Card>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* 2. Professional Certifications - Right after Professional Experience */}
// // // // // // // // // // //           <div className="w-full">
// // // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // // //               <Award className="text-primary" size={28} />
// // // // // // // // // // //               Professional Certifications
// // // // // // // // // // //             </h3>
// // // // // // // // // // //             <Card className="bg-gradient-card shadow-elegant border-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
// // // // // // // // // // //               <CardHeader>
// // // // // // // // // // //                 <CardTitle className="text-xl">Certifications & Achievements</CardTitle>
// // // // // // // // // // //                 <CardDescription>
// // // // // // // // // // //                   Continuous learning and skill development
// // // // // // // // // // //                 </CardDescription>
// // // // // // // // // // //               </CardHeader>
// // // // // // // // // // //               <CardContent>
// // // // // // // // // // //                 <div className="grid md:grid-cols-2 gap-4">
// // // // // // // // // // //                   {certifications.map((cert, index) => (
// // // // // // // // // // //                     <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
// // // // // // // // // // //                       <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
// // // // // // // // // // //                       <span className="text-muted-foreground">{cert}</span>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </CardContent>
// // // // // // // // // // //             </Card>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* 3. Internship Experience */}
// // // // // // // // // // //           <div className="w-full">
// // // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // // // // //               Internship Experience
// // // // // // // // // // //             </h3>
// // // // // // // // // // //             <div className="space-y-6">
// // // // // // // // // // //               {internships.map((internship, index) => (
// // // // // // // // // // //                 <Card 
// // // // // // // // // // //                   key={internship.title}
// // // // // // // // // // //                   className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <CardHeader>
// // // // // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // // // // //                       <Badge variant="outline" className="bg-secondary text-secondary-foreground">
// // // // // // // // // // //                         {internship.type}
// // // // // // // // // // //                       </Badge>
// // // // // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // // // // //                         {internship.period}
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <CardTitle className="text-lg">{internship.title}</CardTitle>
// // // // // // // // // // //                     <CardDescription className="text-base font-medium text-primary">
// // // // // // // // // // //                       {internship.company}
// // // // // // // // // // //                     </CardDescription>
// // // // // // // // // // //                   </CardHeader>
// // // // // // // // // // //                   <CardContent className="space-y-4">
// // // // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // // // //                       {internship.achievements.map((achievement, achievementIndex) => (
// // // // // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // // //                           {achievement}
// // // // // // // // // // //                         </li>
// // // // // // // // // // //                       ))}
// // // // // // // // // // //                     </ul>
// // // // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // // // //                       {internship.technologies.map((tech, techIndex) => (
// // // // // // // // // // //                         <Badge 
// // // // // // // // // // //                           key={`${internship.title}-tech-${techIndex}`}
// // // // // // // // // // //                           variant="secondary" 
// // // // // // // // // // //                           className="bg-primary/5 text-primary flex items-center gap-1"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           {tech.icon && (
// // // // // // // // // // //                             <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
// // // // // // // // // // //                           )}
// // // // // // // // // // //                           {tech.name}
// // // // // // // // // // //                         </Badge>
// // // // // // // // // // //                       ))}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </CardContent>
// // // // // // // // // // //                 </Card>
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           {/* 4. Education */}
// // // // // // // // // // //           <div className="w-full">
// // // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // // //               <GraduationCap className="text-primary" size={28} />
// // // // // // // // // // //               Education
// // // // // // // // // // //             </h3>
// // // // // // // // // // //             <div className="space-y-6">
// // // // // // // // // // //               {education.map((edu, index) => (
// // // // // // // // // // //                 <Card 
// // // // // // // // // // //                   key={edu.degree}
// // // // // // // // // // //                   className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <CardHeader>
// // // // // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // // // // //                       <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // // // //                         {edu.type}
// // // // // // // // // // //                       </Badge>
// // // // // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // // // // //                         {edu.period}
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                     <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
// // // // // // // // // // //                     <CardDescription className="text-base flex items-start gap-2">
// // // // // // // // // // //                       <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
// // // // // // // // // // //                       {edu.institution}
// // // // // // // // // // //                     </CardDescription>
// // // // // // // // // // //                   </CardHeader>
// // // // // // // // // // //                   <CardContent>
// // // // // // // // // // //                     <div className="flex items-center gap-4">
// // // // // // // // // // //                       <Badge variant="secondary" className="bg-primary/10 text-primary">
// // // // // // // // // // //                         {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
// // // // // // // // // // //                       </Badge>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </CardContent>
// // // // // // // // // // //                 </Card>
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </section>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Experience;
// // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge } from "lucide-react";
// // // // // // // // // // // Import technology icons
// // // // // // // // // // import nextjsIcon from "@/assets/icons/nextjs.svg";
// // // // // // // // // // import jsIcon from "@/assets/icons/javascript.svg";
// // // // // // // // // // import mongoIcon from "@/assets/icons/mongodb.svg";
// // // // // // // // // // import mysqlIcon from "@/assets/icons/mysql.svg";
// // // // // // // // // // import postmanIcon from "@/assets/icons/postman.svg";
// // // // // // // // // // import arduinoIcon from "@/assets/icons/arduino.svg";
// // // // // // // // // // import pythonIcon from "@/assets/icons/python.svg";
// // // // // // // // // // import htmlIcon from "@/assets/icons/html.svg";
// // // // // // // // // // import cssIcon from "@/assets/icons/css.svg";

// // // // // // // // // // const Experience = () => {
// // // // // // // // // //   const workExperience = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Web Developer",
// // // // // // // // // //       company: "Webgeon Results",
// // // // // // // // // //       period: "Dec 2023 - Present",
// // // // // // // // // //       type: "Full-time",
// // // // // // // // // //       achievements: [
// // // // // // // // // //         "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // // // // // // // // //         "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // // // // // // // // //         "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // // // // // // // // //         "Used MongoDB and MySQL to store and organize different types of data",
// // // // // // // // // //         "Used VS Code and Eclipse for streamlined development and debugging",
// // // // // // // // // //         "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // // // // // // // // //         "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: [
// // // // // // // // // //         { name: "Next.js", icon: nextjsIcon },
// // // // // // // // // //         { name: "Tailwind CSS", icon: null },
// // // // // // // // // //         { name: "JavaScript", icon: jsIcon },
// // // // // // // // // //         { name: "MongoDB", icon: mongoIcon },
// // // // // // // // // //         { name: "MySQL", icon: mysqlIcon },
// // // // // // // // // //         { name: "Postman", icon: postmanIcon }
// // // // // // // // // //       ]
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   const internships = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Embedded Systems Intern",
// // // // // // // // // //       company: "Next Gen Pro",
// // // // // // // // // //       period: "May 2023 - May 2024",
// // // // // // // // // //       type: "Internship",
// // // // // // // // // //       achievements: [
// // // // // // // // // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // // // // // // // // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // // // // // // // // //         "Gained practical experience in building microcontroller-based automation systems"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: [
// // // // // // // // // //         { name: "Arduino UNO", icon: arduinoIcon },
// // // // // // // // // //         { name: "Embedded Systems", icon: <Cpu size={16} /> },
// // // // // // // // // //         { name: "Circuit Design", icon: <Zap size={16} /> },
// // // // // // // // // //         { name: "Sensors", icon: <Gauge size={16} /> }
// // // // // // // // // //       ]
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Python Full Stack Development Intern",
// // // // // // // // // //       company: "TechMogul",
// // // // // // // // // //       period: "Jun 2024 - Jun 2024",
// // // // // // // // // //       type: "Internship",
// // // // // // // // // //       achievements: [
// // // // // // // // // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // // // // // // // // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // // // // // // // // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: [
// // // // // // // // // //         { name: "Python", icon: pythonIcon },
// // // // // // // // // //         { name: "HTML", icon: htmlIcon },
// // // // // // // // // //         { name: "CSS", icon: cssIcon },
// // // // // // // // // //         { name: "JavaScript", icon: jsIcon },
// // // // // // // // // //         { name: "Full Stack Development", icon: null }
// // // // // // // // // //       ]
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   const certifications = [
// // // // // // // // // //     "Microsoft Azure for Data Engineering (Coursera)",
// // // // // // // // // //     "CMOS Digital VLSI Design (NPTEL)",
// // // // // // // // // //     "EF SET English Certificate",
// // // // // // // // // //     "Introduction to Microsoft Excel (Coursera)"
// // // // // // // // // //   ];

// // // // // // // // // //   const education = [
// // // // // // // // // //     {
// // // // // // // // // //       degree: "B.Tech in Electronics and Communication Engineering",
// // // // // // // // // //       institution: "Federal Institute of Science and Technology (FISAT), Kerala",
// // // // // // // // // //       website: "https://fisat.ac.in/",
// // // // // // // // // //       period: "August 2021 - April 2025",
// // // // // // // // // //       cgpa: "7.45",
// // // // // // // // // //       type: "Bachelor's Degree"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       degree: "Senior Secondary Education (CBSE)",
// // // // // // // // // //       institution: "Vijayagiri Public School, Kerala",
// // // // // // // // // //       website: "https://www.vijayagirischool.ac.in/",
// // // // // // // // // //       period: "Jun 2019 - Feb 2021",
// // // // // // // // // //       percentage: "87%",
// // // // // // // // // //       type: "Higher Secondary"
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <section id="experience" className="py-20 px-4 bg-background">
// // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
// // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="space-y-12">
// // // // // // // // // //           {/* 1. Professional Experience */}
// // // // // // // // // //           <div className="w-full">
// // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // // // //               Professional Experience
// // // // // // // // // //             </h3>
// // // // // // // // // //             {workExperience.map((job, index) => (
// // // // // // // // // //               <Card 
// // // // // // // // // //                 key={job.title}
// // // // // // // // // //                 className="bg-gradient-card shadow-elegant border-[3px] border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in mb-6"
// // // // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // //               >
// // // // // // // // // //                 <CardHeader>
// // // // // // // // // //                   <div className="flex items-start justify-between mb-2">
// // // // // // // // // //                     <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // // //                       {job.type}
// // // // // // // // // //                     </Badge>
// // // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // // // // // //                       {job.period}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <CardTitle className="text-xl">{job.title}</CardTitle>
// // // // // // // // // //                   <CardDescription className="text-base font-medium text-primary">
// // // // // // // // // //                     {job.company}
// // // // // // // // // //                   </CardDescription>
// // // // // // // // // //                 </CardHeader>
// // // // // // // // // //                 <CardContent className="space-y-4">
// // // // // // // // // //                   <div>
// // // // // // // // // //                     <h4 className="font-semibold mb-3">Key Achievements</h4>
// // // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // // //                       {job.achievements.map((achievement, achievementIndex) => (
// // // // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // //                           {achievement}
// // // // // // // // // //                         </li>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </ul>
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <div>
// // // // // // // // // //                     <h4 className="font-semibold mb-2">Technologies</h4>
// // // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // // //                       {job.technologies.map((tech, techIndex) => (
// // // // // // // // // //                         <Badge 
// // // // // // // // // //                           key={`${job.title}-tech-${techIndex}`}
// // // // // // // // // //                           variant="secondary" 
// // // // // // // // // //                           className="bg-primary/10 text-primary flex items-center gap-1"
// // // // // // // // // //                         >
// // // // // // // // // //                           {tech.icon && (
// // // // // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // // // // //                               tech.icon
// // // // // // // // // //                           )}
// // // // // // // // // //                           {tech.name}
// // // // // // // // // //                         </Badge>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </CardContent>
// // // // // // // // // //               </Card>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* 2. Professional Certifications - Right after Professional Experience */}
// // // // // // // // // //           <div className="w-full">
// // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // //               <Award className="text-primary" size={28} />
// // // // // // // // // //               Professional Certifications
// // // // // // // // // //             </h3>
// // // // // // // // // //             <Card className="bg-gradient-card shadow-elegant border-[3px] border-border/50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
// // // // // // // // // //               <CardHeader>
// // // // // // // // // //                 <CardTitle className="text-xl">Certifications & Achievements</CardTitle>
// // // // // // // // // //                 <CardDescription>
// // // // // // // // // //                   Continuous learning and skill development
// // // // // // // // // //                 </CardDescription>
// // // // // // // // // //               </CardHeader>
// // // // // // // // // //               <CardContent>
// // // // // // // // // //                 <div className="grid md:grid-cols-2 gap-4">
// // // // // // // // // //                   {certifications.map((cert, index) => (
// // // // // // // // // //                     <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
// // // // // // // // // //                       <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
// // // // // // // // // //                       <span className="text-muted-foreground">{cert}</span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardContent>
// // // // // // // // // //             </Card>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* 3. Internship Experience */}
// // // // // // // // // //           <div className="w-full">
// // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // // // //               Internship Experience
// // // // // // // // // //             </h3>
// // // // // // // // // //             <div className="space-y-6">
// // // // // // // // // //               {internships.map((internship, index) => (
// // // // // // // // // //                 <Card 
// // // // // // // // // //                   key={internship.title}
// // // // // // // // // //                   className="bg-gradient-card shadow-elegant border-[3px] border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // //                 >
// // // // // // // // // //                   <CardHeader>
// // // // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // // // //                       <Badge variant="outline" className="bg-secondary text-secondary-foreground">
// // // // // // // // // //                         {internship.type}
// // // // // // // // // //                       </Badge>
// // // // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // // // //                         {internship.period}
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <CardTitle className="text-lg">{internship.title}</CardTitle>
// // // // // // // // // //                     <CardDescription className="text-base font-medium text-primary">
// // // // // // // // // //                       {internship.company}
// // // // // // // // // //                     </CardDescription>
// // // // // // // // // //                   </CardHeader>
// // // // // // // // // //                   <CardContent className="space-y-4">
// // // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // // //                       {internship.achievements.map((achievement, achievementIndex) => (
// // // // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // //                           {achievement}
// // // // // // // // // //                         </li>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </ul>
// // // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // // //                       {internship.technologies.map((tech, techIndex) => (
// // // // // // // // // //                         <Badge 
// // // // // // // // // //                           key={`${internship.title}-tech-${techIndex}`}
// // // // // // // // // //                           variant="secondary" 
// // // // // // // // // //                           className="bg-primary/5 text-primary flex items-center gap-1"
// // // // // // // // // //                         >
// // // // // // // // // //                           {tech.icon && (
// // // // // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // // // // //                               tech.icon
// // // // // // // // // //                           )}
// // // // // // // // // //                           {tech.name}
// // // // // // // // // //                         </Badge>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </CardContent>
// // // // // // // // // //                 </Card>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* 4. Education */}
// // // // // // // // // //           <div className="w-full">
// // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // //               <GraduationCap className="text-primary" size={28} />
// // // // // // // // // //               Education
// // // // // // // // // //             </h3>
// // // // // // // // // //             <div className="space-y-6">
// // // // // // // // // //               {education.map((edu, index) => (
// // // // // // // // // //                 <Card 
// // // // // // // // // //                   key={edu.degree}
// // // // // // // // // //                   className="bg-gradient-card shadow-elegant border-[3px] border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // //                 >
// // // // // // // // // //                   <CardHeader>
// // // // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // // // //                       <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // // //                         {edu.type}
// // // // // // // // // //                       </Badge>
// // // // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // // // //                         {edu.period}
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
// // // // // // // // // //                     <CardDescription className="text-base flex items-start gap-2">
// // // // // // // // // //                       <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
// // // // // // // // // //                       <a 
// // // // // // // // // //                         href={edu.website} 
// // // // // // // // // //                         target="_blank" 
// // // // // // // // // //                         rel="noopener noreferrer"
// // // // // // // // // //                         className="hover:text-primary transition-colors duration-200 hover:underline"
// // // // // // // // // //                       >
// // // // // // // // // //                         {edu.institution}
// // // // // // // // // //                       </a>
// // // // // // // // // //                     </CardDescription>
// // // // // // // // // //                   </CardHeader>
// // // // // // // // // //                   <CardContent>
// // // // // // // // // //                     <div className="flex items-center gap-4">
// // // // // // // // // //                       <Badge variant="secondary" className="bg-primary/10 text-primary">
// // // // // // // // // //                         {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
// // // // // // // // // //                       </Badge>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </CardContent>
// // // // // // // // // //                 </Card>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Experience;
// // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // // import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge } from "lucide-react";
// // // // // // // // // // // Import technology icons
// // // // // // // // // // import nextjsIcon from "@/assets/icons/nextjs.svg";
// // // // // // // // // // import jsIcon from "@/assets/icons/javascript.svg";
// // // // // // // // // // import mongoIcon from "@/assets/icons/mongodb.svg";
// // // // // // // // // // import mysqlIcon from "@/assets/icons/mysql.svg";
// // // // // // // // // // import postmanIcon from "@/assets/icons/postman.svg";
// // // // // // // // // // import arduinoIcon from "@/assets/icons/arduino.svg";
// // // // // // // // // // import pythonIcon from "@/assets/icons/python.svg";
// // // // // // // // // // import htmlIcon from "@/assets/icons/html.svg";
// // // // // // // // // // import cssIcon from "@/assets/icons/css.svg";

// // // // // // // // // // const Experience = () => {
// // // // // // // // // //   const workExperience = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Web Developer",
// // // // // // // // // //       company: "Webgeon Results",
// // // // // // // // // //       period: "Dec 2023 - Present",
// // // // // // // // // //       type: "Full-time",
// // // // // // // // // //       achievements: [
// // // // // // // // // //         "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // // // // // // // // //         "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // // // // // // // // //         "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // // // // // // // // //         "Used MongoDB and MySQL to store and organize different types of data",
// // // // // // // // // //         "Used VS Code and Eclipse for streamlined development and debugging",
// // // // // // // // // //         "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // // // // // // // // //         "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: [
// // // // // // // // // //         { name: "Next.js", icon: nextjsIcon },
// // // // // // // // // //         { name: "Tailwind CSS", icon: null },
// // // // // // // // // //         { name: "JavaScript", icon: jsIcon },
// // // // // // // // // //         { name: "MongoDB", icon: mongoIcon },
// // // // // // // // // //         { name: "MySQL", icon: mysqlIcon },
// // // // // // // // // //         { name: "Postman", icon: postmanIcon }
// // // // // // // // // //       ]
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   const internships = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Embedded Systems Intern",
// // // // // // // // // //       company: "Next Gen Pro",
// // // // // // // // // //       period: "May 2023 - May 2024",
// // // // // // // // // //       type: "Internship",
// // // // // // // // // //       achievements: [
// // // // // // // // // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // // // // // // // // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // // // // // // // // //         "Gained practical experience in building microcontroller-based automation systems"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: [
// // // // // // // // // //         { name: "Arduino UNO", icon: arduinoIcon },
// // // // // // // // // //         { name: "Embedded Systems", icon: <Cpu size={16} /> },
// // // // // // // // // //         { name: "Circuit Design", icon: <Zap size={16} /> },
// // // // // // // // // //         { name: "Sensors", icon: <Gauge size={16} /> }
// // // // // // // // // //       ]
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Python Full Stack Development Intern",
// // // // // // // // // //       company: "TechMogul",
// // // // // // // // // //       period: "Jun 2024 - Jun 2024",
// // // // // // // // // //       type: "Internship",
// // // // // // // // // //       achievements: [
// // // // // // // // // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // // // // // // // // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // // // // // // // // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // // // // // // // // //       ],
// // // // // // // // // //       technologies: [
// // // // // // // // // //         { name: "Python", icon: pythonIcon },
// // // // // // // // // //         { name: "HTML", icon: htmlIcon },
// // // // // // // // // //         { name: "CSS", icon: cssIcon },
// // // // // // // // // //         { name: "JavaScript", icon: jsIcon },
// // // // // // // // // //         { name: "Full Stack Development", icon: null }
// // // // // // // // // //       ]
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   const certifications = [
// // // // // // // // // //     "Microsoft Azure for Data Engineering (Coursera)",
// // // // // // // // // //     "CMOS Digital VLSI Design (NPTEL)",
// // // // // // // // // //     "EF SET English Certificate",
// // // // // // // // // //     "Introduction to Microsoft Excel (Coursera)"
// // // // // // // // // //   ];

// // // // // // // // // //   const education = [
// // // // // // // // // //     {
// // // // // // // // // //       degree: "B.Tech in Electronics and Communication Engineering",
// // // // // // // // // //       institution: "Federal Institute of Science and Technology (FISAT), Kerala",
// // // // // // // // // //       website: "https://fisat.ac.in/",
// // // // // // // // // //       period: "August 2021 - April 2025",
// // // // // // // // // //       cgpa: "7.45",
// // // // // // // // // //       type: "Bachelor's Degree"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       degree: "Senior Secondary Education (CBSE)",
// // // // // // // // // //       institution: "Vijayagiri Public School, Kerala",
// // // // // // // // // //       website: "https://www.vijayagirischool.ac.in/",
// // // // // // // // // //       period: "Jun 2019 - Feb 2021",
// // // // // // // // // //       percentage: "87%",
// // // // // // // // // //       type: "Higher Secondary"
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <section id="experience" className="py-20 px-4 bg-background">
// // // // // // // // // //       <div className="container mx-auto">
// // // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
// // // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="space-y-12">
// // // // // // // // // //           {/* 1. Professional Experience */}
// // // // // // // // // //           <div className="w-full">
// // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // // // //               Professional Experience
// // // // // // // // // //             </h3>
// // // // // // // // // //             {workExperience.map((job, index) => (
// // // // // // // // // //               <Card 
// // // // // // // // // //                 key={job.title}
// // // // // // // // // //                 className="bg-gradient-card shadow-elegant border-[3px] border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in mb-6"
// // // // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // //               >
// // // // // // // // // //                 <CardHeader>
// // // // // // // // // //                   <div className="flex items-start justify-between mb-2">
// // // // // // // // // //                     <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // // //                       {job.type}
// // // // // // // // // //                     </Badge>
// // // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // // // // // //                       {job.period}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <CardTitle className="text-xl">{job.title}</CardTitle>
// // // // // // // // // //                   <CardDescription className="text-base font-medium text-primary">
// // // // // // // // // //                     {job.company}
// // // // // // // // // //                   </CardDescription>
// // // // // // // // // //                 </CardHeader>
// // // // // // // // // //                 <CardContent className="space-y-4">
// // // // // // // // // //                   <div>
// // // // // // // // // //                     <h4 className="font-semibold mb-3">Key Achievements</h4>
// // // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // // //                       {job.achievements.map((achievement, achievementIndex) => (
// // // // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // //                           {achievement}
// // // // // // // // // //                         </li>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </ul>
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <div>
// // // // // // // // // //                     <h4 className="font-semibold mb-2">Technologies</h4>
// // // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // // //                       {job.technologies.map((tech, techIndex) => (
// // // // // // // // // //                         <Badge 
// // // // // // // // // //                           key={`${job.title}-tech-${techIndex}`}
// // // // // // // // // //                           variant="secondary" 
// // // // // // // // // //                           className="bg-primary/10 text-primary flex items-center gap-1"
// // // // // // // // // //                         >
// // // // // // // // // //                           {tech.icon && (
// // // // // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // // // // //                               tech.icon
// // // // // // // // // //                           )}
// // // // // // // // // //                           {tech.name}
// // // // // // // // // //                         </Badge>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </CardContent>
// // // // // // // // // //               </Card>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* 2. Internship Experience */}
// // // // // // // // // //           <div className="w-full">
// // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // // // //               Internship Experience
// // // // // // // // // //             </h3>
// // // // // // // // // //             <div className="space-y-6">
// // // // // // // // // //               {internships.map((internship, index) => (
// // // // // // // // // //                 <Card 
// // // // // // // // // //                   key={internship.title}
// // // // // // // // // //                   className="bg-gradient-card shadow-elegant border-[3px] border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // //                 >
// // // // // // // // // //                   <CardHeader>
// // // // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // // // //                       <Badge variant="outline" className="bg-secondary text-secondary-foreground">
// // // // // // // // // //                         {internship.type}
// // // // // // // // // //                       </Badge>
// // // // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // // // //                         {internship.period}
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <CardTitle className="text-lg">{internship.title}</CardTitle>
// // // // // // // // // //                     <CardDescription className="text-base font-medium text-primary">
// // // // // // // // // //                       {internship.company}
// // // // // // // // // //                     </CardDescription>
// // // // // // // // // //                   </CardHeader>
// // // // // // // // // //                   <CardContent className="space-y-4">
// // // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // // //                       {internship.achievements.map((achievement, achievementIndex) => (
// // // // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // // //                           {achievement}
// // // // // // // // // //                         </li>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </ul>
// // // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // // //                       {internship.technologies.map((tech, techIndex) => (
// // // // // // // // // //                         <Badge 
// // // // // // // // // //                           key={`${internship.title}-tech-${techIndex}`}
// // // // // // // // // //                           variant="secondary" 
// // // // // // // // // //                           className="bg-primary/5 text-primary flex items-center gap-1"
// // // // // // // // // //                         >
// // // // // // // // // //                           {tech.icon && (
// // // // // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // // // // //                               tech.icon
// // // // // // // // // //                           )}
// // // // // // // // // //                           {tech.name}
// // // // // // // // // //                         </Badge>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </CardContent>
// // // // // // // // // //                 </Card>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* 3. Professional Certifications */}
// // // // // // // // // //           <div className="w-full">
// // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // //               <Award className="text-primary" size={28} />
// // // // // // // // // //               Professional Certifications
// // // // // // // // // //             </h3>
// // // // // // // // // //             <Card className="bg-gradient-card shadow-elegant border-[3px] border-border/50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
// // // // // // // // // //               <CardHeader>
// // // // // // // // // //                 <CardTitle className="text-xl">Certifications & Achievements</CardTitle>
// // // // // // // // // //                 <CardDescription>
// // // // // // // // // //                   Continuous learning and skill development
// // // // // // // // // //                 </CardDescription>
// // // // // // // // // //               </CardHeader>
// // // // // // // // // //               <CardContent>
// // // // // // // // // //                 <div className="grid md:grid-cols-2 gap-4">
// // // // // // // // // //                   {certifications.map((cert, index) => (
// // // // // // // // // //                     <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
// // // // // // // // // //                       <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
// // // // // // // // // //                       <span className="text-muted-foreground">{cert}</span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </CardContent>
// // // // // // // // // //             </Card>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* 4. Education */}
// // // // // // // // // //           <div className="w-full">
// // // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // // //               <GraduationCap className="text-primary" size={28} />
// // // // // // // // // //               Education
// // // // // // // // // //             </h3>
// // // // // // // // // //             <div className="space-y-6">
// // // // // // // // // //               {education.map((edu, index) => (
// // // // // // // // // //                 <Card 
// // // // // // // // // //                   key={edu.degree}
// // // // // // // // // //                   className="bg-gradient-card shadow-elegant border-[3px] border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // // //                 >
// // // // // // // // // //                   <CardHeader>
// // // // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // // // //                       <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // // //                         {edu.type}
// // // // // // // // // //                       </Badge>
// // // // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // // // //                         {edu.period}
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
// // // // // // // // // //                     <CardDescription className="text-base flex flex-col gap-2">
// // // // // // // // // //                       <div className="flex items-start gap-2">
// // // // // // // // // //                         <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
// // // // // // // // // //                         <span>{edu.institution}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <a 
// // // // // // // // // //                         href={edu.website} 
// // // // // // // // // //                         target="_blank" 
// // // // // // // // // //                         rel="noopener noreferrer"
// // // // // // // // // //                         className="text-primary hover:text-primary/80 transition-colors duration-200 hover:underline text-sm ml-6"
// // // // // // // // // //                       >
// // // // // // // // // //                         Visit
// // // // // // // // // //                       </a>
// // // // // // // // // //                     </CardDescription>
// // // // // // // // // //                   </CardHeader>
// // // // // // // // // //                   <CardContent>
// // // // // // // // // //                     <div className="flex items-center gap-4">
// // // // // // // // // //                       <Badge variant="secondary" className="bg-primary/10 text-primary">
// // // // // // // // // //                         {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
// // // // // // // // // //                       </Badge>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </CardContent>
// // // // // // // // // //                 </Card>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Experience;
// // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge } from "lucide-react";
// // // // // // // // // // Import technology icons
// // // // // // // // // import nextjsIcon from "@/assets/icons/nextjs.svg";
// // // // // // // // // import jsIcon from "@/assets/icons/javascript.svg";
// // // // // // // // // import mongoIcon from "@/assets/icons/mongodb.svg";
// // // // // // // // // import mysqlIcon from "@/assets/icons/mysql.svg";
// // // // // // // // // import postmanIcon from "@/assets/icons/postman.svg";
// // // // // // // // // import arduinoIcon from "@/assets/icons/arduino.svg";
// // // // // // // // // import pythonIcon from "@/assets/icons/python.svg";
// // // // // // // // // import htmlIcon from "@/assets/icons/html.svg";
// // // // // // // // // import cssIcon from "@/assets/icons/css.svg";

// // // // // // // // // const Experience = () => {
// // // // // // // // //   const workExperience = [
// // // // // // // // //     {
// // // // // // // // //       title: "Web Developer",
// // // // // // // // //       company: "Webgeon Results",
// // // // // // // // //       period: "Dec 2023 - Present",
// // // // // // // // //       type: "Full-time",
// // // // // // // // //       achievements: [
// // // // // // // // //         "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // // // // // // // //         "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // // // // // // // //         "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // // // // // // // //         "Used MongoDB and MySQL to store and organize different types of data",
// // // // // // // // //         "Used VS Code and Eclipse for streamlined development and debugging",
// // // // // // // // //         "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // // // // // // // //         "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // // // // // // // //       ],
// // // // // // // // //       technologies: [
// // // // // // // // //         { name: "Next.js", icon: nextjsIcon },
// // // // // // // // //         { name: "Tailwind CSS", icon: null },
// // // // // // // // //         { name: "JavaScript", icon: jsIcon },
// // // // // // // // //         { name: "MongoDB", icon: mongoIcon },
// // // // // // // // //         { name: "MySQL", icon: mysqlIcon },
// // // // // // // // //         { name: "Postman", icon: postmanIcon }
// // // // // // // // //       ]
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   const internships = [
// // // // // // // // //     {
// // // // // // // // //       title: "Embedded Systems Intern",
// // // // // // // // //       company: "Next Gen Pro",
// // // // // // // // //       period: "May 2023 - May 2024",
// // // // // // // // //       type: "Internship",
// // // // // // // // //       achievements: [
// // // // // // // // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // // // // // // // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // // // // // // // //         "Gained practical experience in building microcontroller-based automation systems"
// // // // // // // // //       ],
// // // // // // // // //       technologies: [
// // // // // // // // //         { name: "Arduino UNO", icon: arduinoIcon },
// // // // // // // // //         { name: "Embedded Systems", icon: <Cpu size={16} /> },
// // // // // // // // //         { name: "Circuit Design", icon: <Zap size={16} /> },
// // // // // // // // //         { name: "Sensors", icon: <Gauge size={16} /> }
// // // // // // // // //       ]
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Python Full Stack Development Intern",
// // // // // // // // //       company: "TechMogul",
// // // // // // // // //       period: "Jun 2024 - Jun 2024",
// // // // // // // // //       type: "Internship",
// // // // // // // // //       achievements: [
// // // // // // // // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // // // // // // // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // // // // // // // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // // // // // // // //       ],
// // // // // // // // //       technologies: [
// // // // // // // // //         { name: "Python", icon: pythonIcon },
// // // // // // // // //         { name: "HTML", icon: htmlIcon },
// // // // // // // // //         { name: "CSS", icon: cssIcon },
// // // // // // // // //         { name: "JavaScript", icon: jsIcon },
// // // // // // // // //         { name: "Full Stack Development", icon: null }
// // // // // // // // //       ]
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   const certifications = [
// // // // // // // // //     "Microsoft Azure for Data Engineering (Coursera)",
// // // // // // // // //     "CMOS Digital VLSI Design (NPTEL)",
// // // // // // // // //     "EF SET English Certificate",
// // // // // // // // //     "Introduction to Microsoft Excel (Coursera)"
// // // // // // // // //   ];

// // // // // // // // //   const education = [
// // // // // // // // //     {
// // // // // // // // //       degree: "B.Tech in Electronics and Communication Engineering",
// // // // // // // // //       institution: "Federal Institute of Science and Technology (FISAT), Kerala",
// // // // // // // // //       website: "https://fisat.ac.in/",
// // // // // // // // //       period: "August 2021 - April 2025",
// // // // // // // // //       cgpa: "7.45",
// // // // // // // // //       type: "Bachelor's Degree"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       degree: "Senior Secondary Education (CBSE)",
// // // // // // // // //       institution: "Vijayagiri Public School, Kerala",
// // // // // // // // //       website: "https://www.vijayagirischool.ac.in/",
// // // // // // // // //       period: "Jun 2019 - Feb 2021",
// // // // // // // // //       percentage: "87%",
// // // // // // // // //       type: "Higher Secondary"
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <section id="experience" className="py-20 px-4 bg-background">
// // // // // // // // //       <div className="container mx-auto">
// // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
// // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="space-y-12">
// // // // // // // // //           {/* 1. Professional Experience */}
// // // // // // // // //           <div className="w-full">
// // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // // //               Professional Experience
// // // // // // // // //             </h3>
// // // // // // // // //             {workExperience.map((job, index) => (
// // // // // // // // //               <Card 
// // // // // // // // //                 key={job.title}
// // // // // // // // //                 className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in mb-6"
// // // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // //               >
// // // // // // // // //                 <CardHeader>
// // // // // // // // //                   <div className="flex items-start justify-between mb-2">
// // // // // // // // //                     <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // //                       {job.type}
// // // // // // // // //                     </Badge>
// // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // // // // //                       {job.period}
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                   <CardTitle className="text-xl">{job.title}</CardTitle>
// // // // // // // // //                   <CardDescription className="text-base font-medium text-primary">
// // // // // // // // //                     {job.company}
// // // // // // // // //                   </CardDescription>
// // // // // // // // //                 </CardHeader>
// // // // // // // // //                 <CardContent className="space-y-4">
// // // // // // // // //                   <div>
// // // // // // // // //                     <h4 className="font-semibold mb-3">Key Achievements</h4>
// // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // //                       {job.achievements.map((achievement, achievementIndex) => (
// // // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // //                           {achievement}
// // // // // // // // //                         </li>
// // // // // // // // //                       ))}
// // // // // // // // //                     </ul>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div>
// // // // // // // // //                     <h4 className="font-semibold mb-2">Technologies</h4>
// // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // //                       {job.technologies.map((tech, techIndex) => (
// // // // // // // // //                         <Badge 
// // // // // // // // //                           key={`${job.title}-tech-${techIndex}`}
// // // // // // // // //                           variant="secondary" 
// // // // // // // // //                           className="bg-primary/10 text-primary flex items-center gap-1"
// // // // // // // // //                         >
// // // // // // // // //                           {tech.icon && (
// // // // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // // // //                               tech.icon
// // // // // // // // //                           )}
// // // // // // // // //                           {tech.name}
// // // // // // // // //                         </Badge>
// // // // // // // // //                       ))}
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 </CardContent>
// // // // // // // // //               </Card>
// // // // // // // // //             ))}
// // // // // // // // //           </div>

// // // // // // // // //           {/* 2. Internship Experience */}
// // // // // // // // //           <div className="w-full">
// // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // // //               Internship Experience
// // // // // // // // //             </h3>
// // // // // // // // //             <div className="space-y-6">
// // // // // // // // //               {internships.map((internship, index) => (
// // // // // // // // //                 <Card 
// // // // // // // // //                   key={internship.title}
// // // // // // // // //                   className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // //                 >
// // // // // // // // //                   <CardHeader>
// // // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // // //                       <Badge variant="outline" className="bg-secondary text-secondary-foreground">
// // // // // // // // //                         {internship.type}
// // // // // // // // //                       </Badge>
// // // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // // //                         {internship.period}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                     <CardTitle className="text-lg">{internship.title}</CardTitle>
// // // // // // // // //                     <CardDescription className="text-base font-medium text-primary">
// // // // // // // // //                       {internship.company}
// // // // // // // // //                     </CardDescription>
// // // // // // // // //                   </CardHeader>
// // // // // // // // //                   <CardContent className="space-y-4">
// // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // //                       {internship.achievements.map((achievement, achievementIndex) => (
// // // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // //                           {achievement}
// // // // // // // // //                         </li>
// // // // // // // // //                       ))}
// // // // // // // // //                     </ul>
// // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // //                       {internship.technologies.map((tech, techIndex) => (
// // // // // // // // //                         <Badge 
// // // // // // // // //                           key={`${internship.title}-tech-${techIndex}`}
// // // // // // // // //                           variant="secondary" 
// // // // // // // // //                           className="bg-primary/5 text-primary flex items-center gap-1"
// // // // // // // // //                         >
// // // // // // // // //                           {tech.icon && (
// // // // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // // // //                               tech.icon
// // // // // // // // //                           )}
// // // // // // // // //                           {tech.name}
// // // // // // // // //                         </Badge>
// // // // // // // // //                       ))}
// // // // // // // // //                     </div>
// // // // // // // // //                   </CardContent>
// // // // // // // // //                 </Card>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* 3. Professional Certifications */}
// // // // // // // // //           <div className="w-full">
// // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // //               <Award className="text-primary" size={28} />
// // // // // // // // //               Professional Certifications
// // // // // // // // //             </h3>
// // // // // // // // //             <Card className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
// // // // // // // // //               <CardHeader>
// // // // // // // // //                 <CardTitle className="text-xl">Certifications & Achievements</CardTitle>
// // // // // // // // //                 <CardDescription>
// // // // // // // // //                   Continuous learning and skill development
// // // // // // // // //                 </CardDescription>
// // // // // // // // //               </CardHeader>
// // // // // // // // //               <CardContent>
// // // // // // // // //                 <div className="grid md:grid-cols-2 gap-4">
// // // // // // // // //                   {certifications.map((cert, index) => (
// // // // // // // // //                     <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
// // // // // // // // //                       <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
// // // // // // // // //                       <span className="text-muted-foreground">{cert}</span>
// // // // // // // // //                     </div>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </CardContent>
// // // // // // // // //             </Card>
// // // // // // // // //           </div>

// // // // // // // // //           {/* 4. Education */}
// // // // // // // // //           <div className="w-full">
// // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // //               <GraduationCap className="text-primary" size={28} />
// // // // // // // // //               Education
// // // // // // // // //             </h3>
// // // // // // // // //             <div className="space-y-6">
// // // // // // // // //               {education.map((edu, index) => (
// // // // // // // // //                 <Card 
// // // // // // // // //                   key={edu.degree}
// // // // // // // // //                   className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // //                 >
// // // // // // // // //                   <CardHeader>
// // // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // // //                       <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // //                         {edu.type}
// // // // // // // // //                       </Badge>
// // // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // // //                         {edu.period}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                     <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
// // // // // // // // //                     <CardDescription className="text-base flex flex-col gap-2">
// // // // // // // // //                       <div className="flex items-start gap-2">
// // // // // // // // //                         <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
// // // // // // // // //                         <span>{edu.institution}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                       <a 
// // // // // // // // //                         href={edu.website} 
// // // // // // // // //                         target="_blank" 
// // // // // // // // //                         rel="noopener noreferrer"
// // // // // // // // //                         className="text-primary hover:text-primary/80 transition-colors duration-200 hover:underline text-sm ml-6"
// // // // // // // // //                       >
// // // // // // // // //                         Visit
// // // // // // // // //                       </a>
// // // // // // // // //                     </CardDescription>
// // // // // // // // //                   </CardHeader>
// // // // // // // // //                   <CardContent>
// // // // // // // // //                     <div className="flex items-center gap-4">
// // // // // // // // //                       <Badge variant="secondary" className="bg-primary/10 text-primary">
// // // // // // // // //                         {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
// // // // // // // // //                       </Badge>
// // // // // // // // //                     </div>
// // // // // // // // //                   </CardContent>
// // // // // // // // //                 </Card>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Experience;
// // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // // import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge } from "lucide-react";

// // // // // // // // // const Experience = () => {
// // // // // // // // //   const workExperience = [
// // // // // // // // //     {
// // // // // // // // //       title: "Web Developer",
// // // // // // // // //       company: "Webgeon Results",
// // // // // // // // //       period: "Dec 2023 - Present",
// // // // // // // // //       type: "Full-time",
// // // // // // // // //       achievements: [
// // // // // // // // //         "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // // // // // // // //         "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // // // // // // // //         "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // // // // // // // //         "Used MongoDB and MySQL to store and organize different types of data",
// // // // // // // // //         "Used VS Code and Eclipse for streamlined development and debugging",
// // // // // // // // //         "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // // // // // // // //         "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // // // // // // // //       ],
// // // // // // // // //       technologies: [
// // // // // // // // //         { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
// // // // // // // // //         { name: "Tailwind CSS", icon: null },
// // // // // // // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // // // // // // //         { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
// // // // // // // // //         { name: "MySQL", icon: "/assets/icons/mysql.svg" },
// // // // // // // // //         { name: "Postman", icon: "/assets/icons/postman.svg" }
// // // // // // // // //       ]
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   const internships = [
// // // // // // // // //     {
// // // // // // // // //       title: "Embedded Systems Intern",
// // // // // // // // //       company: "Next Gen Pro",
// // // // // // // // //       period: "May 2023 - May 2024",
// // // // // // // // //       type: "Internship",
// // // // // // // // //       achievements: [
// // // // // // // // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // // // // // // // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // // // // // // // //         "Gained practical experience in building microcontroller-based automation systems"
// // // // // // // // //       ],
// // // // // // // // //       technologies: [
// // // // // // // // //         { name: "Arduino UNO", icon: "/assets/icons/arduino.svg" },
// // // // // // // // //         { name: "Embedded Systems", icon: <Cpu size={16} /> },
// // // // // // // // //         { name: "Circuit Design", icon: <Zap size={16} /> },
// // // // // // // // //         { name: "Sensors", icon: <Gauge size={16} /> }
// // // // // // // // //       ]
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Python Full Stack Development Intern",
// // // // // // // // //       company: "TechMogul",
// // // // // // // // //       period: "Jun 2024 - Jun 2024",
// // // // // // // // //       type: "Internship",
// // // // // // // // //       achievements: [
// // // // // // // // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // // // // // // // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // // // // // // // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // // // // // // // //       ],
// // // // // // // // //       technologies: [
// // // // // // // // //         { name: "Python", icon: "/assets/icons/python.svg" },
// // // // // // // // //         { name: "HTML", icon: "/assets/icons/html.svg" },
// // // // // // // // //         { name: "CSS", icon: "/assets/icons/css.svg" },
// // // // // // // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // // // // // // //         { name: "Full Stack Development", icon: null }
// // // // // // // // //       ]
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   const certifications = [
// // // // // // // // //     "Microsoft Azure for Data Engineering (Coursera)",
// // // // // // // // //     "CMOS Digital VLSI Design (NPTEL)",
// // // // // // // // //     "EF SET English Certificate",
// // // // // // // // //     "Introduction to Microsoft Excel (Coursera)"
// // // // // // // // //   ];

// // // // // // // // //   const education = [
// // // // // // // // //     {
// // // // // // // // //       degree: "B.Tech in Electronics and Communication Engineering",
// // // // // // // // //       institution: "Federal Institute of Science and Technology (FISAT), Kerala",
// // // // // // // // //       website: "https://fisat.ac.in/",
// // // // // // // // //       period: "August 2021 - April 2025",
// // // // // // // // //       cgpa: "7.45",
// // // // // // // // //       type: "Bachelor's Degree"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       degree: "Senior Secondary Education (CBSE)",
// // // // // // // // //       institution: "Vijayagiri Public School, Kerala",
// // // // // // // // //       website: "https://www.vijayagirischool.ac.in/",
// // // // // // // // //       period: "Jun 2019 - Feb 2021",
// // // // // // // // //       percentage: "87%",
// // // // // // // // //       type: "Higher Secondary"
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <section id="experience" className="py-20 px-4 bg-background">
// // // // // // // // //       <div className="container mx-auto">
// // // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
// // // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="space-y-12">
// // // // // // // // //           {/* 1. Professional Experience */}
// // // // // // // // //           <div className="w-full">
// // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // // //               Professional Experience
// // // // // // // // //             </h3>
// // // // // // // // //             {workExperience.map((job, index) => (
// // // // // // // // //               <Card 
// // // // // // // // //                 key={job.title}
// // // // // // // // //                 className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in mb-6"
// // // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // //               >
// // // // // // // // //                 <CardHeader>
// // // // // // // // //                   <div className="flex items-start justify-between mb-2">
// // // // // // // // //                     <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // //                       {job.type}
// // // // // // // // //                     </Badge>
// // // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // // // // //                       {job.period}
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                   <CardTitle className="text-xl">{job.title}</CardTitle>
// // // // // // // // //                   <CardDescription className="text-base font-medium text-primary">
// // // // // // // // //                     {job.company}
// // // // // // // // //                   </CardDescription>
// // // // // // // // //                 </CardHeader>
// // // // // // // // //                 <CardContent className="space-y-4">
// // // // // // // // //                   <div>
// // // // // // // // //                     <h4 className="font-semibold mb-3">Key Achievements</h4>
// // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // //                       {job.achievements.map((achievement, achievementIndex) => (
// // // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // //                           {achievement}
// // // // // // // // //                         </li>
// // // // // // // // //                       ))}
// // // // // // // // //                     </ul>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div>
// // // // // // // // //                     <h4 className="font-semibold mb-2">Technologies</h4>
// // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // //                       {job.technologies.map((tech, techIndex) => (
// // // // // // // // //                         <Badge 
// // // // // // // // //                           key={`${job.title}-tech-${techIndex}`}
// // // // // // // // //                           variant="secondary" 
// // // // // // // // //                           className="bg-primary/10 text-primary flex items-center gap-1"
// // // // // // // // //                         >
// // // // // // // // //                           {tech.icon && (
// // // // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // // // //                               tech.icon
// // // // // // // // //                           )}
// // // // // // // // //                           {tech.name}
// // // // // // // // //                         </Badge>
// // // // // // // // //                       ))}
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 </CardContent>
// // // // // // // // //               </Card>
// // // // // // // // //             ))}
// // // // // // // // //           </div>

// // // // // // // // //           {/* 2. Internship Experience */}
// // // // // // // // //           <div className="w-full">
// // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // // //               Internship Experience
// // // // // // // // //             </h3>
// // // // // // // // //             <div className="space-y-6">
// // // // // // // // //               {internships.map((internship, index) => (
// // // // // // // // //                 <Card 
// // // // // // // // //                   key={internship.title}
// // // // // // // // //                   className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // //                 >
// // // // // // // // //                   <CardHeader>
// // // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // // //                       <Badge variant="outline" className="bg-secondary text-secondary-foreground">
// // // // // // // // //                         {internship.type}
// // // // // // // // //                       </Badge>
// // // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // // //                         {internship.period}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                     <CardTitle className="text-lg">{internship.title}</CardTitle>
// // // // // // // // //                     <CardDescription className="text-base font-medium text-primary">
// // // // // // // // //                       {internship.company}
// // // // // // // // //                     </CardDescription>
// // // // // // // // //                   </CardHeader>
// // // // // // // // //                   <CardContent className="space-y-4">
// // // // // // // // //                     <ul className="space-y-2">
// // // // // // // // //                       {internship.achievements.map((achievement, achievementIndex) => (
// // // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // // //                           {achievement}
// // // // // // // // //                         </li>
// // // // // // // // //                       ))}
// // // // // // // // //                     </ul>
// // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // //                       {internship.technologies.map((tech, techIndex) => (
// // // // // // // // //                         <Badge 
// // // // // // // // //                           key={`${internship.title}-tech-${techIndex}`}
// // // // // // // // //                           variant="secondary" 
// // // // // // // // //                           className="bg-primary/5 text-primary flex items-center gap-1"
// // // // // // // // //                         >
// // // // // // // // //                           {tech.icon && (
// // // // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // // // //                               tech.icon
// // // // // // // // //                           )}
// // // // // // // // //                           {tech.name}
// // // // // // // // //                         </Badge>
// // // // // // // // //                       ))}
// // // // // // // // //                     </div>
// // // // // // // // //                   </CardContent>
// // // // // // // // //                 </Card>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* 3. Professional Certifications */}
// // // // // // // // //           <div className="w-full">
// // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // //               <Award className="text-primary" size={28} />
// // // // // // // // //               Professional Certifications
// // // // // // // // //             </h3>
// // // // // // // // //             <Card className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
// // // // // // // // //               <CardHeader>
// // // // // // // // //                 <CardTitle className="text-xl">Certifications & Achievements</CardTitle>
// // // // // // // // //                 <CardDescription>
// // // // // // // // //                   Continuous learning and skill development
// // // // // // // // //                 </CardDescription>
// // // // // // // // //               </CardHeader>
// // // // // // // // //               <CardContent>
// // // // // // // // //                 <div className="grid md:grid-cols-2 gap-4">
// // // // // // // // //                   {certifications.map((cert, index) => (
// // // // // // // // //                     <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
// // // // // // // // //                       <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
// // // // // // // // //                       <span className="text-muted-foreground">{cert}</span>
// // // // // // // // //                     </div>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </CardContent>
// // // // // // // // //             </Card>
// // // // // // // // //           </div>

// // // // // // // // //           {/* 4. Education */}
// // // // // // // // //           <div className="w-full">
// // // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // // //               <GraduationCap className="text-primary" size={28} />
// // // // // // // // //               Education
// // // // // // // // //             </h3>
// // // // // // // // //             <div className="space-y-6">
// // // // // // // // //               {education.map((edu, index) => (
// // // // // // // // //                 <Card 
// // // // // // // // //                   key={edu.degree}
// // // // // // // // //                   className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // // //                 >
// // // // // // // // //                   <CardHeader>
// // // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // // //                       <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // // //                         {edu.type}
// // // // // // // // //                       </Badge>
// // // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // // //                         {edu.period}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                     <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
// // // // // // // // //                     <CardDescription className="text-base flex flex-col gap-2">
// // // // // // // // //                       <div className="flex items-start gap-2">
// // // // // // // // //                         <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
// // // // // // // // //                         <span>{edu.institution}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                       <a 
// // // // // // // // //                         href={edu.website} 
// // // // // // // // //                         target="_blank" 
// // // // // // // // //                         rel="noopener noreferrer"
// // // // // // // // //                         className="text-primary hover:text-primary/80 transition-colors duration-200 hover:underline text-sm ml-6"
// // // // // // // // //                       >
// // // // // // // // //                         Visit
// // // // // // // // //                       </a>
// // // // // // // // //                     </CardDescription>
// // // // // // // // //                   </CardHeader>
// // // // // // // // //                   <CardContent>
// // // // // // // // //                     <div className="flex items-center gap-4">
// // // // // // // // //                       <Badge variant="secondary" className="bg-primary/10 text-primary">
// // // // // // // // //                         {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
// // // // // // // // //                       </Badge>
// // // // // // // // //                     </div>
// // // // // // // // //                   </CardContent>
// // // // // // // // //                 </Card>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Experience;
// // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // // import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge } from "lucide-react";

// // // // // // // // const Experience = () => {
// // // // // // // //   const workExperience = [
// // // // // // // //     {
// // // // // // // //       title: "Web Developer",
// // // // // // // //       company: "Webgeon Results",
// // // // // // // //       period: "Dec 2023 - Present",
// // // // // // // //       type: "Full-time",
// // // // // // // //       achievements: {
// // // // // // // //         mobile: [
// // // // // // // //           "Developed adaptive user interfaces with Next.js, Tailwind CSS, and JavaScript",
// // // // // // // //           "Optimized UI performance for seamless experiences",
// // // // // // // //           "Tested and integrated APIs using Postman",
// // // // // // // //           "Managed data with MongoDB and MySQL",
// // // // // // // //           "Leading Gym Management Software: member tracking, payments, admin dashboards"
// // // // // // // //         ],
// // // // // // // //         desktop: [
// // // // // // // //           "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // // // // // // //           "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // // // // // // //           "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // // // // // // //           "Used MongoDB and MySQL to store and organize different types of data",
// // // // // // // //           "Used VS Code and Eclipse for streamlined development and debugging",
// // // // // // // //           "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // // // // // // //           "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // // // // // // //         ]
// // // // // // // //       },
// // // // // // // //       technologies: [
// // // // // // // //         { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
// // // // // // // //         { name: "Tailwind CSS", icon: null },
// // // // // // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // // // // // //         { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
// // // // // // // //         { name: "MySQL", icon: "/assets/icons/mysql.svg" },
// // // // // // // //         { name: "Postman", icon: "/assets/icons/postman.svg" }
// // // // // // // //       ]
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   const internships = [
// // // // // // // //     {
// // // // // // // //       title: "Embedded Systems Intern",
// // // // // // // //       company: "Next Gen Pro",
// // // // // // // //       period: "May 2023 - May 2024",
// // // // // // // //       type: "Internship",
// // // // // // // //       achievements: [
// // // // // // // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // // // // // // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // // // // // // //         "Gained practical experience in building microcontroller-based automation systems"
// // // // // // // //       ],
// // // // // // // //       technologies: [
// // // // // // // //         { name: "Arduino UNO", icon: "/assets/icons/arduino.svg" },
// // // // // // // //         { name: "Embedded Systems", icon: <Cpu size={16} /> },
// // // // // // // //         { name: "Circuit Design", icon: <Zap size={16} /> },
// // // // // // // //         { name: "Sensors", icon: <Gauge size={16} /> }
// // // // // // // //       ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Python Full Stack Development Intern",
// // // // // // // //       company: "TechMogul",
// // // // // // // //       period: "Jun 2024 - Jun 2024",
// // // // // // // //       type: "Internship",
// // // // // // // //       achievements: [
// // // // // // // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // // // // // // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // // // // // // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // // // // // // //       ],
// // // // // // // //       technologies: [
// // // // // // // //         { name: "Python", icon: "/assets/icons/python.svg" },
// // // // // // // //         { name: "HTML", icon: "/assets/icons/html.svg" },
// // // // // // // //         { name: "CSS", icon: "/assets/icons/css.svg" },
// // // // // // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // // // // // //         { name: "Full Stack Development", icon: null }
// // // // // // // //       ]
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   const certifications = [
// // // // // // // //     "Microsoft Azure for Data Engineering (Coursera)",
// // // // // // // //     "CMOS Digital VLSI Design (NPTEL)",
// // // // // // // //     "EF SET English Certificate",
// // // // // // // //     "Introduction to Microsoft Excel (Coursera)"
// // // // // // // //   ];

// // // // // // // //   const education = [
// // // // // // // //     {
// // // // // // // //       degree: "B.Tech in Electronics and Communication Engineering",
// // // // // // // //       institution: "Federal Institute of Science and Technology (FISAT), Kerala",
// // // // // // // //       website: "https://fisat.ac.in/",
// // // // // // // //       period: "August 2021 - April 2025",
// // // // // // // //       cgpa: "7.45",
// // // // // // // //       type: "Bachelor's Degree"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       degree: "Senior Secondary Education (CBSE)",
// // // // // // // //       institution: "Vijayagiri Public School, Kerala",
// // // // // // // //       website: "https://www.vijayagirischool.ac.in/",
// // // // // // // //       period: "Jun 2019 - Feb 2021",
// // // // // // // //       percentage: "87%",
// // // // // // // //       type: "Higher Secondary"
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <section id="experience" className="py-20 px-4 bg-background">
// // // // // // // //       <div className="container mx-auto">
// // // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
// // // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // // //         </div>

// // // // // // // //         <div className="space-y-12">
// // // // // // // //           {/* 1. Professional Experience */}
// // // // // // // //           <div className="w-full">
// // // // // // // //             <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // //               <span className="text-base sm:text-2xl">Professional Experience</span>
// // // // // // // //             </h3>
// // // // // // // //             {workExperience.map((job, index) => (
// // // // // // // //               <Card 
// // // // // // // //                 key={job.title}
// // // // // // // //                 className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in mb-6"
// // // // // // // //                 style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // //               >
// // // // // // // //                 <CardHeader>
// // // // // // // //                   <div className="flex items-start justify-between mb-2">
// // // // // // // //                     <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // //                       {job.type}
// // // // // // // //                     </Badge>
// // // // // // // //                     <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // // // //                       {job.period}
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                   <CardTitle className="text-xl">{job.title}</CardTitle>
// // // // // // // //                   <CardDescription className="text-base font-medium text-primary">
// // // // // // // //                     {job.company}
// // // // // // // //                   </CardDescription>
// // // // // // // //                 </CardHeader>
// // // // // // // //                 <CardContent className="space-y-4">
// // // // // // // //                   <div>
// // // // // // // //                     <h4 className="font-semibold mb-3">Key Achievements</h4>
                    
// // // // // // // //                     {/* Mobile version - shorter achievements */}
// // // // // // // //                     <div className="block lg:hidden">
// // // // // // // //                       <ul className="space-y-2">
// // // // // // // //                         {job.achievements.mobile.map((achievement, achievementIndex) => (
// // // // // // // //                           <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // //                             <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // //                             {achievement}
// // // // // // // //                           </li>
// // // // // // // //                         ))}
// // // // // // // //                       </ul>
// // // // // // // //                     </div>
                    
// // // // // // // //                     {/* Desktop version - full achievements */}
// // // // // // // //                     <div className="hidden lg:block">
// // // // // // // //                       <ul className="space-y-2">
// // // // // // // //                         {job.achievements.desktop.map((achievement, achievementIndex) => (
// // // // // // // //                           <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // //                             <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // //                             {achievement}
// // // // // // // //                           </li>
// // // // // // // //                         ))}
// // // // // // // //                       </ul>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                   <div>
// // // // // // // //                     <h4 className="font-semibold mb-2">Technologies</h4>
// // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // //                       {job.technologies.map((tech, techIndex) => (
// // // // // // // //                         <Badge 
// // // // // // // //                           key={`${job.title}-tech-${techIndex}`}
// // // // // // // //                           variant="secondary" 
// // // // // // // //                           className="bg-primary/10 text-primary flex items-center gap-1"
// // // // // // // //                         >
// // // // // // // //                           {tech.icon && (
// // // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // // //                               tech.icon
// // // // // // // //                           )}
// // // // // // // //                           {tech.name}
// // // // // // // //                         </Badge>
// // // // // // // //                       ))}
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </CardContent>
// // // // // // // //               </Card>
// // // // // // // //             ))}
// // // // // // // //           </div>

// // // // // // // //           {/* 2. Internship Experience */}
// // // // // // // //           <div className="w-full">
// // // // // // // //             <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // //               <Briefcase className="text-primary" size={28} />
// // // // // // // //               <span className="text-base sm:text-2xl">Internship Experience</span>
// // // // // // // //             </h3>
// // // // // // // //             <div className="space-y-6">
// // // // // // // //               {internships.map((internship, index) => (
// // // // // // // //                 <Card 
// // // // // // // //                   key={internship.title}
// // // // // // // //                   className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // //                 >
// // // // // // // //                   <CardHeader>
// // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // //                       <Badge variant="outline" className="bg-secondary text-secondary-foreground">
// // // // // // // //                         {internship.type}
// // // // // // // //                       </Badge>
// // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // //                         {internship.period}
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                     <CardTitle className="text-lg">{internship.title}</CardTitle>
// // // // // // // //                     <CardDescription className="text-base font-medium text-primary">
// // // // // // // //                       {internship.company}
// // // // // // // //                     </CardDescription>
// // // // // // // //                   </CardHeader>
// // // // // // // //                   <CardContent className="space-y-4">
// // // // // // // //                     <ul className="space-y-2">
// // // // // // // //                       {internship.achievements.map((achievement, achievementIndex) => (
// // // // // // // //                         <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
// // // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // // //                           {achievement}
// // // // // // // //                         </li>
// // // // // // // //                       ))}
// // // // // // // //                     </ul>
// // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // //                       {internship.technologies.map((tech, techIndex) => (
// // // // // // // //                         <Badge 
// // // // // // // //                           key={`${internship.title}-tech-${techIndex}`}
// // // // // // // //                           variant="secondary" 
// // // // // // // //                           className="bg-primary/5 text-primary flex items-center gap-1"
// // // // // // // //                         >
// // // // // // // //                           {tech.icon && (
// // // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // // //                               tech.icon
// // // // // // // //                           )}
// // // // // // // //                           {tech.name}
// // // // // // // //                         </Badge>
// // // // // // // //                       ))}
// // // // // // // //                     </div>
// // // // // // // //                   </CardContent>
// // // // // // // //                 </Card>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* 3. Professional Certifications */}
// // // // // // // //           <div className="w-full">
// // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // //               <Award className="text-primary" size={28} />
// // // // // // // //               Professional Certifications
// // // // // // // //             </h3>
// // // // // // // //             <Card className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
// // // // // // // //               <CardHeader>
// // // // // // // //                 <CardTitle className="text-xl">Certifications & Achievements</CardTitle>
// // // // // // // //                 <CardDescription>
// // // // // // // //                   Continuous learning and skill development
// // // // // // // //                 </CardDescription>
// // // // // // // //               </CardHeader>
// // // // // // // //               <CardContent>
// // // // // // // //                 <div className="grid md:grid-cols-2 gap-4">
// // // // // // // //                   {certifications.map((cert, index) => (
// // // // // // // //                     <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
// // // // // // // //                       <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
// // // // // // // //                       <span className="text-muted-foreground">{cert}</span>
// // // // // // // //                     </div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </CardContent>
// // // // // // // //             </Card>
// // // // // // // //           </div>

// // // // // // // //           {/* 4. Education */}
// // // // // // // //           <div className="w-full">
// // // // // // // //             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 animate-slide-in-left">
// // // // // // // //               <GraduationCap className="text-primary" size={28} />
// // // // // // // //               Education
// // // // // // // //             </h3>
// // // // // // // //             <div className="space-y-6">
// // // // // // // //               {education.map((edu, index) => (
// // // // // // // //                 <Card 
// // // // // // // //                   key={edu.degree}
// // // // // // // //                   className="bg-gradient-card shadow-elegant border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in"
// // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // //                 >
// // // // // // // //                   <CardHeader>
// // // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // // //                       <Badge variant="default" className="bg-primary text-primary-foreground">
// // // // // // // //                         {edu.type}
// // // // // // // //                       </Badge>
// // // // // // // //                       <div className="flex items-center text-muted-foreground text-sm">
// // // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // // //                         {edu.period}
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                     <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
// // // // // // // //                     <CardDescription className="text-base flex flex-col gap-2">
// // // // // // // //                       <div className="flex items-start gap-2">
// // // // // // // //                         <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
// // // // // // // //                         <span>{edu.institution}</span>
// // // // // // // //                       </div>
// // // // // // // //                       <a 
// // // // // // // //                         href={edu.website} 
// // // // // // // //                         target="_blank" 
// // // // // // // //                         rel="noopener noreferrer"
// // // // // // // //                         className="text-primary hover:text-primary/80 transition-colors duration-200 hover:underline text-sm ml-6"
// // // // // // // //                       >
// // // // // // // //                         Visit
// // // // // // // //                       </a>
// // // // // // // //                     </CardDescription>
// // // // // // // //                   </CardHeader>
// // // // // // // //                   <CardContent>
// // // // // // // //                     <div className="flex items-center gap-4">
// // // // // // // //                       <Badge variant="secondary" className="bg-primary/10 text-primary">
// // // // // // // //                         {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
// // // // // // // //                       </Badge>
// // // // // // // //                     </div>
// // // // // // // //                   </CardContent>
// // // // // // // //                 </Card>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Experience;
// // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge } from "lucide-react";

// // // // // // // const Experience = () => {
// // // // // // //   const workExperience = [
// // // // // // //     {
// // // // // // //       title: "Web Developer",
// // // // // // //       company: "Webgeon Results",
// // // // // // //       period: "Dec 2023 - Present",
// // // // // // //       type: "Full-time",
// // // // // // //       achievements: {
// // // // // // //         mobile: [
// // // // // // //           "Developed adaptive user interfaces with Next.js, Tailwind CSS, and JavaScript",
// // // // // // //           "Optimized UI performance for seamless experiences",
// // // // // // //           "Tested and integrated APIs using Postman",
// // // // // // //           "Managed data with MongoDB and MySQL",
// // // // // // //           "Leading Gym Management Software: member tracking, payments, admin dashboards"
// // // // // // //         ],
// // // // // // //         desktop: [
// // // // // // //           "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // // // // // //           "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // // // // // //           "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // // // // // //           "Used MongoDB and MySQL to store and organize different types of data",
// // // // // // //           "Used VS Code and Eclipse for streamlined development and debugging",
// // // // // // //           "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // // // // // //           "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // // // // // //         ]
// // // // // // //       },
// // // // // // //       technologies: [
// // // // // // //         { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
// // // // // // //         { name: "Tailwind CSS", icon: null },
// // // // // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // // // // //         { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
// // // // // // //         { name: "MySQL", icon: "/assets/icons/mysql.svg" },
// // // // // // //         { name: "Postman", icon: "/assets/icons/postman.svg" }
// // // // // // //       ]
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   const internships = [
// // // // // // //     {
// // // // // // //       title: "Embedded Systems Intern",
// // // // // // //       company: "Next Gen Pro",
// // // // // // //       period: "May 2023 - May 2024",
// // // // // // //       type: "Internship",
// // // // // // //       achievements: [
// // // // // // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // // // // // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // // // // // //         "Gained practical experience in building microcontroller-based automation systems"
// // // // // // //       ],
// // // // // // //       technologies: [
// // // // // // //         { name: "Arduino UNO", icon: "/assets/icons/arduino.svg" },
// // // // // // //         { name: "Embedded Systems", icon: <Cpu size={16} /> },
// // // // // // //         { name: "Circuit Design", icon: <Zap size={16} /> },
// // // // // // //         { name: "Sensors", icon: <Gauge size={16} /> }
// // // // // // //       ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Python Full Stack Development Intern",
// // // // // // //       company: "TechMogul",
// // // // // // //       period: "Jun 2024 - Jun 2024",
// // // // // // //       type: "Internship",
// // // // // // //       achievements: [
// // // // // // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // // // // // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // // // // // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // // // // // //       ],
// // // // // // //       technologies: [
// // // // // // //         { name: "Python", icon: "/assets/icons/python.svg" },
// // // // // // //         { name: "HTML", icon: "/assets/icons/html.svg" },
// // // // // // //         { name: "CSS", icon: "/assets/icons/css.svg" },
// // // // // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // // // // //         { name: "Full Stack Development", icon: null }
// // // // // // //       ]
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   const certifications = [
// // // // // // //     "Microsoft Azure for Data Engineering (Coursera)",
// // // // // // //     "CMOS Digital VLSI Design (NPTEL)",
// // // // // // //     "EF SET English Certificate",
// // // // // // //     "Introduction to Microsoft Excel (Coursera)"
// // // // // // //   ];

// // // // // // //   const education = [
// // // // // // //     {
// // // // // // //       degree: "B.Tech in Electronics and Communication Engineering",
// // // // // // //       institution: "Federal Institute of Science and Technology (FISAT), Kerala",
// // // // // // //       website: "https://fisat.ac.in/",
// // // // // // //       period: "August 2021 - April 2025",
// // // // // // //       cgpa: "7.45",
// // // // // // //       type: "Bachelor's Degree"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       degree: "Senior Secondary Education (CBSE)",
// // // // // // //       institution: "Vijayagiri Public School, Kerala",
// // // // // // //       website: "https://www.vijayagirischool.ac.in/",
// // // // // // //       period: "Jun 2019 - Feb 2021",
// // // // // // //       percentage: "87%",
// // // // // // //       type: "Higher Secondary"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <section id="experience" className="py-20 px-4 bg-background opacity-0 animate-fade-in">
// // // // // // //       <div className="container mx-auto max-w-5xl">
// // // // // // //         <div className="text-center mb-16">
// // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
// // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // //         </div>

// // // // // // //         <div className="space-y-12">
// // // // // // //           {/* 1. Professional Experience */}
// // // // // // //           <div className="w-full">
// // // // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // // // //               <Briefcase className="text-primary" size={32} />
// // // // // // //               <span>Professional Experience</span>
// // // // // // //             </h3>
// // // // // // //             {workExperience.map((job, index) => (
// // // // // // //               <Card 
// // // // // // //                 key={job.title}
// // // // // // //                 className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 mb-6"
// // // // // // //               >
// // // // // // //                 <CardHeader>
// // // // // // //                   <div className="flex items-start justify-between mb-2">
// // // // // // //                     <Badge variant="default" className="bg-primary text-primary-foreground font-semibold">
// // // // // // //                       {job.type}
// // // // // // //                     </Badge>
// // // // // // //                     <div className="flex items-center text-muted-foreground text-sm font-medium">
// // // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // // //                       {job.period}
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                   <CardTitle className="text-2xl font-bold">{job.title}</CardTitle>
// // // // // // //                   <CardDescription className="text-lg font-semibold text-primary">
// // // // // // //                     {job.company}
// // // // // // //                   </CardDescription>
// // // // // // //                 </CardHeader>
// // // // // // //                 <CardContent className="space-y-4">
// // // // // // //                   <div>
// // // // // // //                     <h4 className="font-bold text-base mb-3">Key Achievements</h4>
                    
// // // // // // //                     {/* Mobile version - shorter achievements */}
// // // // // // //                     <div className="block lg:hidden">
// // // // // // //                       <ul className="space-y-2">
// // // // // // //                         {job.achievements.mobile.map((achievement, achievementIndex) => (
// // // // // // //                           <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // // // // //                             <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // //                             {achievement}
// // // // // // //                           </li>
// // // // // // //                         ))}
// // // // // // //                       </ul>
// // // // // // //                     </div>
                    
// // // // // // //                     {/* Desktop version - full achievements */}
// // // // // // //                     <div className="hidden lg:block">
// // // // // // //                       <ul className="space-y-2">
// // // // // // //                         {job.achievements.desktop.map((achievement, achievementIndex) => (
// // // // // // //                           <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // // // // //                             <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // //                             {achievement}
// // // // // // //                           </li>
// // // // // // //                         ))}
// // // // // // //                       </ul>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                   <div>
// // // // // // //                     <h4 className="font-bold text-base mb-2">Technologies</h4>
// // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // //                       {job.technologies.map((tech, techIndex) => (
// // // // // // //                         <Badge 
// // // // // // //                           key={`${job.title}-tech-${techIndex}`}
// // // // // // //                           variant="secondary" 
// // // // // // //                           className="bg-primary/10 text-primary font-semibold flex items-center gap-1"
// // // // // // //                         >
// // // // // // //                           {tech.icon && (
// // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // //                               tech.icon
// // // // // // //                           )}
// // // // // // //                           {tech.name}
// // // // // // //                         </Badge>
// // // // // // //                       ))}
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           {/* 2. Internship Experience */}
// // // // // // //           <div className="w-full">
// // // // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // // // //               <Briefcase className="text-primary" size={32} />
// // // // // // //               <span>Internship Experience</span>
// // // // // // //             </h3>
// // // // // // //             <div className="space-y-6">
// // // // // // //               {internships.map((internship, index) => (
// // // // // // //                 <Card 
// // // // // // //                   key={internship.title}
// // // // // // //                   className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
// // // // // // //                 >
// // // // // // //                   <CardHeader>
// // // // // // //                     <div className="flex items-start justify-between mb-2">
// // // // // // //                       <Badge variant="outline" className="bg-secondary text-secondary-foreground font-semibold">
// // // // // // //                         {internship.type}
// // // // // // //                       </Badge>
// // // // // // //                       <div className="flex items-center text-muted-foreground text-sm font-medium">
// // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // //                         {internship.period}
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                     <CardTitle className="text-xl font-bold">{internship.title}</CardTitle>
// // // // // // //                     <CardDescription className="text-base font-semibold text-primary">
// // // // // // //                       {internship.company}
// // // // // // //                     </CardDescription>
// // // // // // //                   </CardHeader>
// // // // // // //                   <CardContent className="space-y-4">
// // // // // // //                     <ul className="space-y-2">
// // // // // // //                       {internship.achievements.map((achievement, achievementIndex) => (
// // // // // // //                         <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // // //                           {achievement}
// // // // // // //                         </li>
// // // // // // //                       ))}
// // // // // // //                     </ul>
// // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // //                       {internship.technologies.map((tech, techIndex) => (
// // // // // // //                         <Badge 
// // // // // // //                           key={`${internship.title}-tech-${techIndex}`}
// // // // // // //                           variant="secondary" 
// // // // // // //                           className="bg-primary/5 text-primary font-semibold flex items-center gap-1"
// // // // // // //                         >
// // // // // // //                           {tech.icon && (
// // // // // // //                             typeof tech.icon === 'string' ? 
// // // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // // //                               tech.icon
// // // // // // //                           )}
// // // // // // //                           {tech.name}
// // // // // // //                         </Badge>
// // // // // // //                       ))}
// // // // // // //                     </div>
// // // // // // //                   </CardContent>
// // // // // // //                 </Card>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* 3. Professional Certifications */}
// // // // // // //           <div className="w-full">
// // // // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // // // //               <Award className="text-primary" size={32} />
// // // // // // //               Professional Certifications
// // // // // // //             </h3>
// // // // // // //             <Card className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
// // // // // // //               <CardHeader>
// // // // // // //                 <CardTitle className="text-xl font-bold">Certifications & Achievements</CardTitle>
// // // // // // //                 <CardDescription className="font-medium">
// // // // // // //                   Continuous learning and skill development
// // // // // // //                 </CardDescription>
// // // // // // //               </CardHeader>
// // // // // // //               <CardContent>
// // // // // // //                 <div className="grid md:grid-cols-2 gap-4">
// // // // // // //                   {certifications.map((cert, index) => (
// // // // // // //                     <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
// // // // // // //                       <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
// // // // // // //                       <span className="text-foreground font-medium">{cert}</span>
// // // // // // //                     </div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </CardContent>
// // // // // // //             </Card>
// // // // // // //           </div>

// // // // // // //           {/* 4. Education */}
// // // // // // //           <div className="w-full">
// // // // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // // // //               <GraduationCap className="text-primary" size={32} />
// // // // // // //               Education
// // // // // // //             </h3>
// // // // // // //             <div className="space-y-6">
// // // // // // //               {education.map((edu, index) => (
// // // // // // //                 <Card 
// // // // // // //                   key={edu.degree}
// // // // // // //                   className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
// // // // // // //                 >
// // // // // // //                   <CardHeader>
// // // // // // //                     <div className="flex items-start justify-between mb-3">
// // // // // // //                       <Badge variant="default" className="bg-primary text-primary-foreground font-semibold">
// // // // // // //                         {edu.type}
// // // // // // //                       </Badge>
// // // // // // //                       <div className="flex items-center text-muted-foreground text-sm font-medium">
// // // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // // //                         {edu.period}
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                     <CardTitle className="text-xl font-bold leading-tight mb-3">{edu.degree}</CardTitle>
// // // // // // //                     <div className="flex items-start gap-2 mb-2">
// // // // // // //                       <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
// // // // // // //                       <span className="text-foreground font-semibold">{edu.institution}</span>
// // // // // // //                     </div>
// // // // // // //                     <a 
// // // // // // //                       href={edu.website} 
// // // // // // //                       target="_blank" 
// // // // // // //                       rel="noopener noreferrer"
// // // // // // //                       className="text-primary hover:text-primary/80 transition-colors duration-200 hover:underline text-sm font-semibold inline-block ml-6"
// // // // // // //                     >
// // // // // // //                       Visit Website →
// // // // // // //                     </a>
// // // // // // //                   </CardHeader>
// // // // // // //                   <CardContent>
// // // // // // //                     <Badge variant="secondary" className="bg-primary/10 text-primary font-bold text-base px-4 py-2">
// // // // // // //                       {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
// // // // // // //                     </Badge>
// // // // // // //                   </CardContent>
// // // // // // //                 </Card>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Experience;
// // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge, ExternalLink } from "lucide-react";
// // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // const Experience = () => {
// // // // // //   const sectionRef = useRef(null);
// // // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       ([entry]) => {
// // // // // //         if (entry.isIntersecting) {
// // // // // //           setIsVisible(true);
// // // // // //         }
// // // // // //       },
// // // // // //       { threshold: 0.1 }
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

// // // // // //   const workExperience = [
// // // // // //     {
// // // // // //       title: "Web Developer",
// // // // // //       company: "Webgeon Results",
// // // // // //       period: "Dec 2023 - Present",
// // // // // //       type: "Full-time",
// // // // // //       achievements: {
// // // // // //         mobile: [
// // // // // //           "Developed adaptive user interfaces with Next.js, Tailwind CSS, and JavaScript",
// // // // // //           "Optimized UI performance for seamless experiences",
// // // // // //           "Tested and integrated APIs using Postman",
// // // // // //           "Managed data with MongoDB and MySQL",
// // // // // //           "Leading Gym Management Software: member tracking, payments, admin dashboards"
// // // // // //         ],
// // // // // //         desktop: [
// // // // // //           "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // // // // //           "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // // // // //           "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // // // // //           "Used MongoDB and MySQL to store and organize different types of data",
// // // // // //           "Used VS Code and Eclipse for streamlined development and debugging",
// // // // // //           "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // // // // //           "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // // // // //         ]
// // // // // //       },
// // // // // //       technologies: [
// // // // // //         { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
// // // // // //         { name: "Tailwind CSS", icon: null },
// // // // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // // // //         { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
// // // // // //         { name: "MySQL", icon: "/assets/icons/mysql.svg" },
// // // // // //         { name: "Postman", icon: "/assets/icons/postman.svg" }
// // // // // //       ]
// // // // // //     }
// // // // // //   ];

// // // // // //   const internships = [
// // // // // //     {
// // // // // //       title: "Embedded Systems Intern",
// // // // // //       company: "Next Gen Pro",
// // // // // //       period: "May 2023 - May 2024",
// // // // // //       type: "Internship",
// // // // // //       achievements: [
// // // // // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // // // // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // // // // //         "Gained practical experience in building microcontroller-based automation systems"
// // // // // //       ],
// // // // // //       technologies: [
// // // // // //         { name: "Arduino UNO", icon: "/assets/icons/arduino.svg" },
// // // // // //         { name: "Embedded Systems", icon: <Cpu size={16} /> },
// // // // // //         { name: "Circuit Design", icon: <Zap size={16} /> },
// // // // // //         { name: "Sensors", icon: <Gauge size={16} /> }
// // // // // //       ]
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Python Full Stack Development Intern",
// // // // // //       company: "TechMogul",
// // // // // //       period: "Jun 2024 - Jun 2024",
// // // // // //       type: "Internship",
// // // // // //       achievements: [
// // // // // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // // // // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // // // // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // // // // //       ],
// // // // // //       technologies: [
// // // // // //         { name: "Python", icon: "/assets/icons/python.svg" },
// // // // // //         { name: "HTML", icon: "/assets/icons/html.svg" },
// // // // // //         { name: "CSS", icon: "/assets/icons/css.svg" },
// // // // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // // // //         { name: "Full Stack Development", icon: null }
// // // // // //       ]
// // // // // //     }
// // // // // //   ];

// // // // // //   const certifications = [
// // // // // //     "Microsoft Azure for Data Engineering (Coursera)",
// // // // // //     "CMOS Digital VLSI Design (NPTEL)",
// // // // // //     "EF SET English Certificate",
// // // // // //     "Introduction to Microsoft Excel (Coursera)"
// // // // // //   ];

// // // // // //   const education = [
// // // // // //     {
// // // // // //       degree: "B.Tech in Electronics and Communication Engineering",
// // // // // //       institution: "Federal Institute of Science and Technology (FISAT)",
// // // // // //       location: "Kerala, India",
// // // // // //       website: "https://fisat.ac.in/",
// // // // // //       period: "August 2021 - April 2025",
// // // // // //       cgpa: "7.45",
// // // // // //       type: "Bachelor's Degree",
// // // // // //       color: "from-blue-500/10 to-purple-500/10"
// // // // // //     },
// // // // // //     {
// // // // // //       degree: "Senior Secondary Education (CBSE)",
// // // // // //       institution: "Vijayagiri Public School",
// // // // // //       location: "Kerala, India",
// // // // // //       website: "https://www.vijayagirischool.ac.in/",
// // // // // //       period: "Jun 2019 - Feb 2021",
// // // // // //       percentage: "87%",
// // // // // //       type: "Higher Secondary",
// // // // // //       color: "from-green-500/10 to-teal-500/10"
// // // // // //     }
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section 
// // // // // //       ref={sectionRef}
// // // // // //       id="experience" 
// // // // // //       className={`py-20 px-4 bg-background transition-opacity duration-1000 ${
// // // // // //         isVisible ? 'opacity-100' : 'opacity-0'
// // // // // //       }`}
// // // // // //     >
// // // // // //       <div className="container mx-auto max-w-5xl">
// // // // // //         <div className="text-center mb-16">
// // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
// // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // //         </div>

// // // // // //         <div className="space-y-12">
// // // // // //           {/* 1. Professional Experience */}
// // // // // //           <div className="w-full">
// // // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // // //               <Briefcase className="text-primary" size={32} />
// // // // // //               <span>Professional Experience</span>
// // // // // //             </h3>
// // // // // //             {workExperience.map((job, index) => (
// // // // // //               <Card 
// // // // // //                 key={job.title}
// // // // // //                 className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 mb-6 w-full"
// // // // // //               >
// // // // // //                 <CardHeader>
// // // // // //                   <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
// // // // // //                     <Badge variant="default" className="bg-primary text-primary-foreground font-semibold w-fit">
// // // // // //                       {job.type}
// // // // // //                     </Badge>
// // // // // //                     <div className="flex items-center text-muted-foreground text-sm font-medium">
// // // // // //                       <Calendar size={16} className="mr-1" />
// // // // // //                       {job.period}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                   <CardTitle className="text-xl sm:text-2xl font-bold">{job.title}</CardTitle>
// // // // // //                   <CardDescription className="text-base sm:text-lg font-semibold text-primary">
// // // // // //                     {job.company}
// // // // // //                   </CardDescription>
// // // // // //                 </CardHeader>
// // // // // //                 <CardContent className="space-y-4">
// // // // // //                   <div>
// // // // // //                     <h4 className="font-bold text-base mb-3">Key Achievements</h4>
                    
// // // // // //                     {/* Mobile version - shorter achievements */}
// // // // // //                     <div className="block lg:hidden">
// // // // // //                       <ul className="space-y-2">
// // // // // //                         {job.achievements.mobile.map((achievement, achievementIndex) => (
// // // // // //                           <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // // // //                             <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // //                             {achievement}
// // // // // //                           </li>
// // // // // //                         ))}
// // // // // //                       </ul>
// // // // // //                     </div>
                    
// // // // // //                     {/* Desktop version - full achievements */}
// // // // // //                     <div className="hidden lg:block">
// // // // // //                       <ul className="space-y-2">
// // // // // //                         {job.achievements.desktop.map((achievement, achievementIndex) => (
// // // // // //                           <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // // // //                             <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // //                             {achievement}
// // // // // //                           </li>
// // // // // //                         ))}
// // // // // //                       </ul>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                   <div>
// // // // // //                     <h4 className="font-bold text-base mb-2">Technologies</h4>
// // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // //                       {job.technologies.map((tech, techIndex) => (
// // // // // //                         <Badge 
// // // // // //                           key={`${job.title}-tech-${techIndex}`}
// // // // // //                           variant="secondary" 
// // // // // //                           className="bg-primary/10 text-primary font-semibold flex items-center gap-1"
// // // // // //                         >
// // // // // //                           {tech.icon && (
// // // // // //                             typeof tech.icon === 'string' ? 
// // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // //                               tech.icon
// // // // // //                           )}
// // // // // //                           {tech.name}
// // // // // //                         </Badge>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           {/* 2. Internship Experience */}
// // // // // //           <div className="w-full">
// // // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // // //               <Briefcase className="text-primary" size={32} />
// // // // // //               <span>Internship Experience</span>
// // // // // //             </h3>
// // // // // //             <div className="space-y-6">
// // // // // //               {internships.map((internship, index) => (
// // // // // //                 <Card 
// // // // // //                   key={internship.title}
// // // // // //                   className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 w-full"
// // // // // //                 >
// // // // // //                   <CardHeader>
// // // // // //                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
// // // // // //                       <Badge variant="outline" className="bg-secondary text-secondary-foreground font-semibold w-fit">
// // // // // //                         {internship.type}
// // // // // //                       </Badge>
// // // // // //                       <div className="flex items-center text-muted-foreground text-sm font-medium">
// // // // // //                         <Calendar size={16} className="mr-1" />
// // // // // //                         {internship.period}
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                     <CardTitle className="text-lg sm:text-xl font-bold">{internship.title}</CardTitle>
// // // // // //                     <CardDescription className="text-sm sm:text-base font-semibold text-primary">
// // // // // //                       {internship.company}
// // // // // //                     </CardDescription>
// // // // // //                   </CardHeader>
// // // // // //                   <CardContent className="space-y-4">
// // // // // //                     <ul className="space-y-2">
// // // // // //                       {internship.achievements.map((achievement, achievementIndex) => (
// // // // // //                         <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // // //                           {achievement}
// // // // // //                         </li>
// // // // // //                       ))}
// // // // // //                     </ul>
// // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // //                       {internship.technologies.map((tech, techIndex) => (
// // // // // //                         <Badge 
// // // // // //                           key={`${internship.title}-tech-${techIndex}`}
// // // // // //                           variant="secondary" 
// // // // // //                           className="bg-primary/5 text-primary font-semibold flex items-center gap-1"
// // // // // //                         >
// // // // // //                           {tech.icon && (
// // // // // //                             typeof tech.icon === 'string' ? 
// // // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // // //                               tech.icon
// // // // // //                           )}
// // // // // //                           {tech.name}
// // // // // //                         </Badge>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   </CardContent>
// // // // // //                 </Card>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* 3. Professional Certifications */}
// // // // // //           <div className="w-full">
// // // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // // //               <Award className="text-primary" size={32} />
// // // // // //               Professional Certifications
// // // // // //             </h3>
// // // // // //             <Card className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 w-full">
// // // // // //               <CardHeader>
// // // // // //                 <CardTitle className="text-lg sm:text-xl font-bold">Certifications & Achievements</CardTitle>
// // // // // //                 <CardDescription className="font-medium text-sm sm:text-base">
// // // // // //                   Continuous learning and skill development
// // // // // //                 </CardDescription>
// // // // // //               </CardHeader>
// // // // // //               <CardContent>
// // // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //                   {certifications.map((cert, index) => (
// // // // // //                     <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
// // // // // //                       <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
// // // // // //                       <span className="text-foreground font-medium text-sm">{cert}</span>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>
// // // // // //           </div>

// // // // // //           {/* 4. Education - Premium Design */}
// // // // // //           <div className="w-full">
// // // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // // //               <GraduationCap className="text-primary" size={32} />
// // // // // //               Education
// // // // // //             </h3>
// // // // // //             <div className="space-y-6">
// // // // // //               {education.map((edu, index) => (
// // // // // //                 <Card 
// // // // // //                   key={edu.degree}
// // // // // //                   className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] w-full overflow-hidden group"
// // // // // //                 >
// // // // // //                   {/* Gradient Header Background */}
// // // // // //                   <div className={`bg-gradient-to-r ${edu.color} p-6 sm:p-8 border-b border-primary/10`}>
// // // // // //                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
// // // // // //                       <Badge variant="default" className="bg-primary text-primary-foreground font-bold text-xs sm:text-sm px-3 py-1 w-fit shadow-lg">
// // // // // //                         {edu.type}
// // // // // //                       </Badge>
// // // // // //                       <div className="flex items-center gap-2 text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit">
// // // // // //                         <Calendar size={16} className="flex-shrink-0" />
// // // // // //                         <span className="text-xs sm:text-sm font-semibold">{edu.period}</span>
// // // // // //                       </div>
// // // // // //                     </div>
                    
// // // // // //                     <h4 className="text-xl sm:text-2xl font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
// // // // // //                       {edu.degree}
// // // // // //                     </h4>
                    
// // // // // //                     <div className="flex items-start gap-2 mb-3">
// // // // // //                       <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
// // // // // //                       <div className="flex flex-col">
// // // // // //                         <span className="text-base sm:text-lg font-bold text-foreground">{edu.institution}</span>
// // // // // //                         <span className="text-sm text-muted-foreground font-medium">{edu.location}</span>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   <CardContent className="p-6 sm:p-8">
// // // // // //                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// // // // // //                       {/* CGPA/Percentage Badge */}
// // // // // //                       <div className="relative">
// // // // // //                         <Badge 
// // // // // //                           variant="secondary" 
// // // // // //                           className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-bold text-base sm:text-lg px-5 py-2.5 shadow-md border-2 border-primary/30"
// // // // // //                         >
// // // // // //                           {edu.cgpa ? (
// // // // // //                             <div className="flex items-center gap-2">
// // // // // //                               <Award size={18} className="text-primary" />
// // // // // //                               <span>CGPA: {edu.cgpa}</span>
// // // // // //                             </div>
// // // // // //                           ) : (
// // // // // //                             <div className="flex items-center gap-2">
// // // // // //                               <Award size={18} className="text-primary" />
// // // // // //                               <span>Score: {edu.percentage}</span>
// // // // // //                             </div>
// // // // // //                           )}
// // // // // //                         </Badge>
// // // // // //                       </div>

// // // // // //                       {/* Visit Website Button */}
// // // // // //                       <a 
// // // // // //                         href={edu.website} 
// // // // // //                         target="_blank" 
// // // // // //                         rel="noopener noreferrer"
// // // // // //                         className="group/link inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg font-bold text-sm sm:text-base transition-all duration-300 border-2 border-primary/30 hover:border-primary hover:shadow-lg w-fit"
// // // // // //                       >
// // // // // //                         <span>Visit Website</span>
// // // // // //                         <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
// // // // // //                       </a>
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

// // // // // // export default Experience;
// // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // import { Badge } from "@/components/ui/badge";
// // // // // import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge, ExternalLink } from "lucide-react";
// // // // // import { useEffect, useRef, useState } from "react";

// // // // // const Experience = () => {
// // // // //   const sectionRef = useRef(null);
// // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       ([entry]) => {
// // // // //         if (entry.isIntersecting) {
// // // // //           setIsVisible(true);
// // // // //         }
// // // // //       },
// // // // //       { threshold: 0.1 }
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

// // // // //   const workExperience = [
// // // // //     {
// // // // //       title: "Web Developer",
// // // // //       company: "Webgeon Results",
// // // // //       period: "Dec 2023 - Present",
// // // // //       type: "Full-time",
// // // // //       achievements: {
// // // // //         mobile: [
// // // // //           "Developed adaptive user interfaces with Next.js, Tailwind CSS, and JavaScript",
// // // // //           "Optimized UI performance for seamless experiences",
// // // // //           "Tested and integrated APIs using Postman",
// // // // //           "Managed data with MongoDB and MySQL",
// // // // //           "Leading Gym Management Software: member tracking, payments, admin dashboards"
// // // // //         ],
// // // // //         desktop: [
// // // // //           "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // // // //           "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // // // //           "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // // // //           "Used MongoDB and MySQL to store and organize different types of data",
// // // // //           "Used VS Code and Eclipse for streamlined development and debugging",
// // // // //           "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // // // //           "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // // // //         ]
// // // // //       },
// // // // //       technologies: [
// // // // //         { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
// // // // //         { name: "Tailwind CSS", icon: null },
// // // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // // //         { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
// // // // //         { name: "MySQL", icon: "/assets/icons/mysql.svg" },
// // // // //         { name: "Postman", icon: "/assets/icons/postman.svg" }
// // // // //       ]
// // // // //     }
// // // // //   ];

// // // // //   const internships = [
// // // // //     {
// // // // //       title: "Embedded Systems Intern",
// // // // //       company: "Next Gen Pro",
// // // // //       period: "May 2023 - May 2024",
// // // // //       type: "Internship",
// // // // //       achievements: [
// // // // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // // // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // // // //         "Gained practical experience in building microcontroller-based automation systems"
// // // // //       ],
// // // // //       technologies: [
// // // // //         { name: "Arduino UNO", icon: "/assets/icons/arduino.svg" },
// // // // //         { name: "Embedded Systems", icon: <Cpu size={16} /> },
// // // // //         { name: "Circuit Design", icon: <Zap size={16} /> },
// // // // //         { name: "Sensors", icon: <Gauge size={16} /> }
// // // // //       ]
// // // // //     },
// // // // //     {
// // // // //       title: "Python Full Stack Development Intern",
// // // // //       company: "TechMogul",
// // // // //       period: "Jun 2024 - Jun 2024",
// // // // //       type: "Internship",
// // // // //       achievements: [
// // // // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // // // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // // // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // // // //       ],
// // // // //       technologies: [
// // // // //         { name: "Python", icon: "/assets/icons/python.svg" },
// // // // //         { name: "HTML", icon: "/assets/icons/html.svg" },
// // // // //         { name: "CSS", icon: "/assets/icons/css.svg" },
// // // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // // //         { name: "Full Stack Development", icon: null }
// // // // //       ]
// // // // //     }
// // // // //   ];

// // // // //   const certifications = [
// // // // //     "Microsoft Azure for Data Engineering (Coursera)",
// // // // //     "CMOS Digital VLSI Design (NPTEL)",
// // // // //     "EF SET English Certificate",
// // // // //     "Introduction to Microsoft Excel (Coursera)"
// // // // //   ];

// // // // //   const education = [
// // // // //     {
// // // // //       degree: "B.Tech in Electronics and Communication Engineering",
// // // // //       institution: "Federal Institute of Science and Technology (FISAT)",
// // // // //       location: "Kerala, India",
// // // // //       website: "https://fisat.ac.in/",
// // // // //       period: "August 2021 - April 2025",
// // // // //       cgpa: "7.45",
// // // // //       type: "Bachelor's Degree",
// // // // //       color: "from-blue-500/10 to-purple-500/10"
// // // // //     },
// // // // //     {
// // // // //       degree: "Senior Secondary Education (CBSE)",
// // // // //       institution: "Vijayagiri Public School",
// // // // //       location: "Kerala, India",
// // // // //       website: "https://www.vijayagirischool.ac.in/",
// // // // //       period: "Jun 2019 - Feb 2021",
// // // // //       percentage: "87%",
// // // // //       type: "Higher Secondary",
// // // // //       color: "from-green-500/10 to-teal-500/10"
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <section 
// // // // //       ref={sectionRef}
// // // // //       id="experience" 
// // // // //       className={`py-20 px-4 bg-background transition-all duration-1000 ${
// // // // //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
// // // // //       }`}
// // // // //     >
// // // // //       <div className="container mx-auto max-w-5xl">
// // // // //         <div className={`text-center mb-16 transition-all duration-1000 delay-100 ${
// // // // //           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// // // // //         }`}>
// // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
// // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // //         </div>

// // // // //         <div className="space-y-12">
// // // // //           {/* 1. Professional Experience */}
// // // // //           <div className={`w-full transition-all duration-1000 delay-200 ${
// // // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
// // // // //           }`}>
// // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // //               <Briefcase className="text-primary" size={32} />
// // // // //               <span>Professional Experience</span>
// // // // //             </h3>
// // // // //             {workExperience.map((job, index) => (
// // // // //               <Card 
// // // // //                 key={job.title}
// // // // //                 className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 mb-6 w-full"
// // // // //               >
// // // // //                 <CardHeader>
// // // // //                   <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
// // // // //                     <Badge variant="default" className="bg-primary text-primary-foreground font-semibold w-fit">
// // // // //                       {job.type}
// // // // //                     </Badge>
// // // // //                     <div className="flex items-center text-muted-foreground text-sm font-medium">
// // // // //                       <Calendar size={16} className="mr-1" />
// // // // //                       {job.period}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <CardTitle className="text-xl sm:text-2xl font-bold">{job.title}</CardTitle>
// // // // //                   <CardDescription className="text-base sm:text-lg font-semibold text-primary">
// // // // //                     {job.company}
// // // // //                   </CardDescription>
// // // // //                 </CardHeader>
// // // // //                 <CardContent className="space-y-4">
// // // // //                   <div>
// // // // //                     <h4 className="font-bold text-base mb-3">Key Achievements</h4>
                    
// // // // //                     {/* Mobile version - shorter achievements */}
// // // // //                     <div className="block lg:hidden">
// // // // //                       <ul className="space-y-2">
// // // // //                         {job.achievements.mobile.map((achievement, achievementIndex) => (
// // // // //                           <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // // //                             <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // //                             {achievement}
// // // // //                           </li>
// // // // //                         ))}
// // // // //                       </ul>
// // // // //                     </div>
                    
// // // // //                     {/* Desktop version - full achievements */}
// // // // //                     <div className="hidden lg:block">
// // // // //                       <ul className="space-y-2">
// // // // //                         {job.achievements.desktop.map((achievement, achievementIndex) => (
// // // // //                           <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // // //                             <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // //                             {achievement}
// // // // //                           </li>
// // // // //                         ))}
// // // // //                       </ul>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <h4 className="font-bold text-base mb-2">Technologies</h4>
// // // // //                     <div className="flex flex-wrap gap-2">
// // // // //                       {job.technologies.map((tech, techIndex) => (
// // // // //                         <Badge 
// // // // //                           key={`${job.title}-tech-${techIndex}`}
// // // // //                           variant="secondary" 
// // // // //                           className="bg-primary/10 text-primary font-semibold flex items-center gap-1"
// // // // //                         >
// // // // //                           {tech.icon && (
// // // // //                             typeof tech.icon === 'string' ? 
// // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // //                               tech.icon
// // // // //                           )}
// // // // //                           {tech.name}
// // // // //                         </Badge>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* 2. Internship Experience */}
// // // // //           <div className={`w-full transition-all duration-1000 delay-300 ${
// // // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
// // // // //           }`}>
// // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // //               <Briefcase className="text-primary" size={32} />
// // // // //               <span>Internship Experience</span>
// // // // //             </h3>
// // // // //             <div className="space-y-6">
// // // // //               {internships.map((internship, index) => (
// // // // //                 <Card 
// // // // //                   key={internship.title}
// // // // //                   className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 w-full"
// // // // //                 >
// // // // //                   <CardHeader>
// // // // //                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
// // // // //                       <Badge variant="outline" className="bg-secondary text-secondary-foreground font-semibold w-fit">
// // // // //                         {internship.type}
// // // // //                       </Badge>
// // // // //                       <div className="flex items-center text-muted-foreground text-sm font-medium">
// // // // //                         <Calendar size={16} className="mr-1" />
// // // // //                         {internship.period}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                     <CardTitle className="text-lg sm:text-xl font-bold">{internship.title}</CardTitle>
// // // // //                     <CardDescription className="text-sm sm:text-base font-semibold text-primary">
// // // // //                       {internship.company}
// // // // //                     </CardDescription>
// // // // //                   </CardHeader>
// // // // //                   <CardContent className="space-y-4">
// // // // //                     <ul className="space-y-2">
// // // // //                       {internship.achievements.map((achievement, achievementIndex) => (
// // // // //                         <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // // //                           {achievement}
// // // // //                         </li>
// // // // //                       ))}
// // // // //                     </ul>
// // // // //                     <div className="flex flex-wrap gap-2">
// // // // //                       {internship.technologies.map((tech, techIndex) => (
// // // // //                         <Badge 
// // // // //                           key={`${internship.title}-tech-${techIndex}`}
// // // // //                           variant="secondary" 
// // // // //                           className="bg-primary/5 text-primary font-semibold flex items-center gap-1"
// // // // //                         >
// // // // //                           {tech.icon && (
// // // // //                             typeof tech.icon === 'string' ? 
// // // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // // //                               tech.icon
// // // // //                           )}
// // // // //                           {tech.name}
// // // // //                         </Badge>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </CardContent>
// // // // //                 </Card>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* 3. Professional Certifications */}
// // // // //           <div className={`w-full transition-all duration-1000 delay-[400ms] ${
// // // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
// // // // //           }`}>
// // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // //               <Award className="text-primary" size={32} />
// // // // //               Professional Certifications
// // // // //             </h3>
// // // // //             <Card className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 w-full">
// // // // //               <CardHeader>
// // // // //                 <CardTitle className="text-lg sm:text-xl font-bold">Certifications & Achievements</CardTitle>
// // // // //                 <CardDescription className="font-medium text-sm sm:text-base">
// // // // //                   Continuous learning and skill development
// // // // //                 </CardDescription>
// // // // //               </CardHeader>
// // // // //               <CardContent>
// // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //                   {certifications.map((cert, index) => (
// // // // //                     <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
// // // // //                       <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
// // // // //                       <span className="text-foreground font-medium text-sm">{cert}</span>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </CardContent>
// // // // //             </Card>
// // // // //           </div>

// // // // //           {/* 4. Education - Premium Design */}
// // // // //           <div className={`w-full transition-all duration-1000 delay-[500ms] ${
// // // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
// // // // //           }`}>
// // // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
// // // // //               <GraduationCap className="text-primary" size={32} />
// // // // //               Education
// // // // //             </h3>
// // // // //             <div className="space-y-6">
// // // // //               {education.map((edu, index) => (
// // // // //                 <Card 
// // // // //                   key={edu.degree}
// // // // //                   className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] w-full overflow-hidden group"
// // // // //                 >
// // // // //                   {/* Gradient Header Background */}
// // // // //                   <div className={`bg-gradient-to-r ${edu.color} p-6 sm:p-8 border-b border-primary/10`}>
// // // // //                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
// // // // //                       <Badge variant="default" className="bg-primary text-primary-foreground font-bold text-xs sm:text-sm px-3 py-1 w-fit shadow-lg">
// // // // //                         {edu.type}
// // // // //                       </Badge>
// // // // //                       <div className="flex items-center gap-2 text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit">
// // // // //                         <Calendar size={16} className="flex-shrink-0" />
// // // // //                         <span className="text-xs sm:text-sm font-semibold">{edu.period}</span>
// // // // //                       </div>
// // // // //                     </div>
                    
// // // // //                     <h4 className="text-xl sm:text-2xl font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
// // // // //                       {edu.degree}
// // // // //                     </h4>
                    
// // // // //                     <div className="flex items-start gap-2 mb-3">
// // // // //                       <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
// // // // //                       <div className="flex flex-col">
// // // // //                         <span className="text-base sm:text-lg font-bold text-foreground">{edu.institution}</span>
// // // // //                         <span className="text-sm text-muted-foreground font-medium">{edu.location}</span>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <CardContent className="p-6 sm:p-8">
// // // // //                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// // // // //                       {/* CGPA/Percentage Badge */}
// // // // //                       <div className="relative">
// // // // //                         <Badge 
// // // // //                           variant="secondary" 
// // // // //                           className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-bold text-base sm:text-lg px-5 py-2.5 shadow-md border-2 border-primary/30"
// // // // //                         >
// // // // //                           {edu.cgpa ? (
// // // // //                             <div className="flex items-center gap-2">
// // // // //                               <Award size={18} className="text-primary" />
// // // // //                               <span>CGPA: {edu.cgpa}</span>
// // // // //                             </div>
// // // // //                           ) : (
// // // // //                             <div className="flex items-center gap-2">
// // // // //                               <Award size={18} className="text-primary" />
// // // // //                               <span>Score: {edu.percentage}</span>
// // // // //                             </div>
// // // // //                           )}
// // // // //                         </Badge>
// // // // //                       </div>

// // // // //                       {/* Visit Website Button */}
// // // // //                       <a 
// // // // //                         href={edu.website} 
// // // // //                         target="_blank" 
// // // // //                         rel="noopener noreferrer"
// // // // //                         className="group/link inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg font-bold text-sm sm:text-base transition-all duration-300 border-2 border-primary/30 hover:border-primary hover:shadow-lg w-fit"
// // // // //                       >
// // // // //                         <span>Visit Website</span>
// // // // //                         <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
// // // // //                       </a>
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

// // // // // export default Experience;
// // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Badge } from "@/components/ui/badge";
// // // // import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge, ExternalLink } from "lucide-react";
// // // // import { useEffect, useRef, useState } from "react";

// // // // const Experience = () => {
// // // //   const sectionRef = useRef(null);
// // // //   const [isVisible, setIsVisible] = useState(false);

// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       ([entry]) => {
// // // //         if (entry.isIntersecting) {
// // // //           setIsVisible(true);
// // // //         }
// // // //       },
// // // //       { threshold: 0.1 }
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

// // // //   const workExperience = [
// // // //     {
// // // //       title: "Web Developer",
// // // //       company: "Webgeon Results",
// // // //       period: "Dec 2023 - Present",
// // // //       type: "Full-time",
// // // //       achievements: {
// // // //         mobile: [
// // // //           "Developed adaptive user interfaces with Next.js, Tailwind CSS, and JavaScript",
// // // //           "Optimized UI performance for seamless experiences",
// // // //           "Tested and integrated APIs using Postman",
// // // //           "Managed data with MongoDB and MySQL",
// // // //           "Leading Gym Management Software: member tracking, payments, admin dashboards"
// // // //         ],
// // // //         desktop: [
// // // //           "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // // //           "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // // //           "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // // //           "Used MongoDB and MySQL to store and organize different types of data",
// // // //           "Used VS Code and Eclipse for streamlined development and debugging",
// // // //           "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // // //           "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // // //         ]
// // // //       },
// // // //       technologies: [
// // // //         { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
// // // //         { name: "Tailwind CSS", icon: null },
// // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // //         { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
// // // //         { name: "MySQL", icon: "/assets/icons/mysql.svg" },
// // // //         { name: "Postman", icon: "/assets/icons/postman.svg" }
// // // //       ]
// // // //     }
// // // //   ];

// // // //   const internships = [
// // // //     {
// // // //       title: "Embedded Systems Intern",
// // // //       company: "Next Gen Pro",
// // // //       period: "May 2023 - May 2024",
// // // //       type: "Internship",
// // // //       achievements: [
// // // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // // //         "Gained practical experience in building microcontroller-based automation systems"
// // // //       ],
// // // //       technologies: [
// // // //         { name: "Arduino UNO", icon: "/assets/icons/arduino.svg" },
// // // //         { name: "Embedded Systems", icon: <Cpu size={16} /> },
// // // //         { name: "Circuit Design", icon: <Zap size={16} /> },
// // // //         { name: "Sensors", icon: <Gauge size={16} /> }
// // // //       ]
// // // //     },
// // // //     {
// // // //       title: "Python Full Stack Development Intern",
// // // //       company: "TechMogul",
// // // //       period: "Jun 2024 - Jun 2024",
// // // //       type: "Internship",
// // // //       achievements: [
// // // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // // //       ],
// // // //       technologies: [
// // // //         { name: "Python", icon: "/assets/icons/python.svg" },
// // // //         { name: "HTML", icon: "/assets/icons/html.svg" },
// // // //         { name: "CSS", icon: "/assets/icons/css.svg" },
// // // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // // //         { name: "Full Stack Development", icon: null }
// // // //       ]
// // // //     }
// // // //   ];

// // // //   const certifications = [
// // // //     "Microsoft Azure for Data Engineering (Coursera)",
// // // //     "CMOS Digital VLSI Design (NPTEL)",
// // // //     "EF SET English Certificate",
// // // //     "Introduction to Microsoft Excel (Coursera)"
// // // //   ];

// // // //   const education = [
// // // //     {
// // // //       degree: "B.Tech in Electronics and Communication Engineering",
// // // //       institution: "Federal Institute of Science and Technology (FISAT)",
// // // //       location: "Kerala, India",
// // // //       website: "https://fisat.ac.in/",
// // // //       period: "August 2021 - April 2025",
// // // //       cgpa: "7.45",
// // // //       type: "Bachelor's Degree",
// // // //       color: "from-blue-500/10 to-purple-500/10"
// // // //     },
// // // //     {
// // // //       degree: "Senior Secondary Education (CBSE)",
// // // //       institution: "Vijayagiri Public School",
// // // //       location: "Kerala, India",
// // // //       website: "https://www.vijayagirischool.ac.in/",
// // // //       period: "Jun 2019 - Feb 2021",
// // // //       percentage: "87%",
// // // //       type: "Higher Secondary",
// // // //       color: "from-green-500/10 to-teal-500/10"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <section 
// // // //       ref={sectionRef}
// // // //       id="experience" 
// // // //       className={`py-20 px-2 sm:px-4 bg-background transition-all duration-1000 ${
// // // //         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
// // // //       }`}
// // // //     >
// // // //       <div className="container mx-auto max-w-5xl px-0 sm:px-4">
// // // //         <div className={`text-center mb-16 transition-all duration-1000 delay-100 px-4 ${
// // // //           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// // // //         }`}>
// // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
// // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // //         </div>

// // // //         <div className="space-y-12">
// // // //           {/* 1. Professional Experience */}
// // // //           <div className={`w-full transition-all duration-1000 delay-200 px-2 sm:px-0 ${
// // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
// // // //           }`}>
// // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 px-2 sm:px-0">
// // // //               <Briefcase className="text-primary" size={32} />
// // // //               <span>Professional Experience</span>
// // // //             </h3>
// // // //             {workExperience.map((job, index) => (
// // // //               <Card 
// // // //                 key={job.title}
// // // //                 className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 mb-6 w-full"
// // // //               >
// // // //                 <CardHeader>
// // // //                   <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
// // // //                     <Badge variant="default" className="bg-primary text-primary-foreground font-semibold w-fit">
// // // //                       {job.type}
// // // //                     </Badge>
// // // //                     <div className="flex items-center text-muted-foreground text-sm font-medium">
// // // //                       <Calendar size={16} className="mr-1" />
// // // //                       {job.period}
// // // //                     </div>
// // // //                   </div>
// // // //                   <CardTitle className="text-xl sm:text-2xl font-bold">{job.title}</CardTitle>
// // // //                   <CardDescription className="text-base sm:text-lg font-semibold text-primary">
// // // //                     {job.company}
// // // //                   </CardDescription>
// // // //                 </CardHeader>
// // // //                 <CardContent className="space-y-4">
// // // //                   <div>
// // // //                     <h4 className="font-bold text-base mb-3">Key Achievements</h4>
                    
// // // //                     {/* Mobile version - shorter achievements */}
// // // //                     <div className="block lg:hidden">
// // // //                       <ul className="space-y-2">
// // // //                         {job.achievements.mobile.map((achievement, achievementIndex) => (
// // // //                           <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // //                             <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // //                             {achievement}
// // // //                           </li>
// // // //                         ))}
// // // //                       </ul>
// // // //                     </div>
                    
// // // //                     {/* Desktop version - full achievements */}
// // // //                     <div className="hidden lg:block">
// // // //                       <ul className="space-y-2">
// // // //                         {job.achievements.desktop.map((achievement, achievementIndex) => (
// // // //                           <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // //                             <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // //                             {achievement}
// // // //                           </li>
// // // //                         ))}
// // // //                       </ul>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div>
// // // //                     <h4 className="font-bold text-base mb-2">Technologies</h4>
// // // //                     <div className="flex flex-wrap gap-2">
// // // //                       {job.technologies.map((tech, techIndex) => (
// // // //                         <Badge 
// // // //                           key={`${job.title}-tech-${techIndex}`}
// // // //                           variant="secondary" 
// // // //                           className="bg-primary/10 text-primary font-semibold flex items-center gap-1"
// // // //                         >
// // // //                           {tech.icon && (
// // // //                             typeof tech.icon === 'string' ? 
// // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // //                               tech.icon
// // // //                           )}
// // // //                           {tech.name}
// // // //                         </Badge>
// // // //                       ))}
// // // //                     </div>
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             ))}
// // // //           </div>

// // // //           {/* 2. Internship Experience */}
// // // //           <div className={`w-full transition-all duration-1000 delay-300 px-2 sm:px-0 ${
// // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
// // // //           }`}>
// // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 px-2 sm:px-0">
// // // //               <Briefcase className="text-primary" size={32} />
// // // //               <span>Internship Experience</span>
// // // //             </h3>
// // // //             <div className="space-y-6">
// // // //               {internships.map((internship, index) => (
// // // //                 <Card 
// // // //                   key={internship.title}
// // // //                   className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 w-full"
// // // //                 >
// // // //                   <CardHeader>
// // // //                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
// // // //                       <Badge variant="outline" className="bg-secondary text-secondary-foreground font-semibold w-fit">
// // // //                         {internship.type}
// // // //                       </Badge>
// // // //                       <div className="flex items-center text-muted-foreground text-sm font-medium">
// // // //                         <Calendar size={16} className="mr-1" />
// // // //                         {internship.period}
// // // //                       </div>
// // // //                     </div>
// // // //                     <CardTitle className="text-lg sm:text-xl font-bold">{internship.title}</CardTitle>
// // // //                     <CardDescription className="text-sm sm:text-base font-semibold text-primary">
// // // //                       {internship.company}
// // // //                     </CardDescription>
// // // //                   </CardHeader>
// // // //                   <CardContent className="space-y-4">
// // // //                     <ul className="space-y-2">
// // // //                       {internship.achievements.map((achievement, achievementIndex) => (
// // // //                         <li key={achievementIndex} className="text-foreground text-sm font-medium leading-relaxed flex items-start">
// // // //                           <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
// // // //                           {achievement}
// // // //                         </li>
// // // //                       ))}
// // // //                     </ul>
// // // //                     <div className="flex flex-wrap gap-2">
// // // //                       {internship.technologies.map((tech, techIndex) => (
// // // //                         <Badge 
// // // //                           key={`${internship.title}-tech-${techIndex}`}
// // // //                           variant="secondary" 
// // // //                           className="bg-primary/5 text-primary font-semibold flex items-center gap-1"
// // // //                         >
// // // //                           {tech.icon && (
// // // //                             typeof tech.icon === 'string' ? 
// // // //                               <img src={tech.icon} alt={tech.name} className="w-4 h-4" /> :
// // // //                               tech.icon
// // // //                           )}
// // // //                           {tech.name}
// // // //                         </Badge>
// // // //                       ))}
// // // //                     </div>
// // // //                   </CardContent>
// // // //                 </Card>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* 3. Professional Certifications */}
// // // //           <div className={`w-full transition-all duration-1000 delay-[400ms] px-2 sm:px-0 ${
// // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
// // // //           }`}>
// // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 px-2 sm:px-0">
// // // //               <Award className="text-primary" size={32} />
// // // //               Professional Certifications
// // // //             </h3>
// // // //             <Card className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 w-full">
// // // //               <CardHeader>
// // // //                 <CardTitle className="text-lg sm:text-xl font-bold">Certifications & Achievements</CardTitle>
// // // //                 <CardDescription className="font-medium text-sm sm:text-base">
// // // //                   Continuous learning and skill development
// // // //                 </CardDescription>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                   {certifications.map((cert, index) => (
// // // //                     <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
// // // //                       <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
// // // //                       <span className="text-foreground font-medium text-sm">{cert}</span>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </div>

// // // //           {/* 4. Education - Premium Design */}
// // // //           <div className={`w-full transition-all duration-1000 delay-[500ms] px-2 sm:px-0 ${
// // // //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
// // // //           }`}>
// // // //             <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 px-2 sm:px-0">
// // // //               <GraduationCap className="text-primary" size={32} />
// // // //               Education
// // // //             </h3>
// // // //             <div className="space-y-6">
// // // //               {education.map((edu, index) => (
// // // //                 <Card 
// // // //                   key={edu.degree}
// // // //                   className="bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] w-full overflow-hidden group"
// // // //                 >
// // // //                   {/* Gradient Header Background */}
// // // //                   <div className={`bg-gradient-to-r ${edu.color} p-6 sm:p-8 border-b border-primary/10`}>
// // // //                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
// // // //                       <Badge variant="default" className="bg-primary text-primary-foreground font-bold text-xs sm:text-sm px-3 py-1 w-fit shadow-lg">
// // // //                         {edu.type}
// // // //                       </Badge>
// // // //                       <div className="flex items-center gap-2 text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit">
// // // //                         <Calendar size={16} className="flex-shrink-0" />
// // // //                         <span className="text-xs sm:text-sm font-semibold">{edu.period}</span>
// // // //                       </div>
// // // //                     </div>
                    
// // // //                     <h4 className="text-xl sm:text-2xl font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
// // // //                       {edu.degree}
// // // //                     </h4>
                    
// // // //                     <div className="flex items-start gap-2 mb-3">
// // // //                       <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
// // // //                       <div className="flex flex-col">
// // // //                         <span className="text-base sm:text-lg font-bold text-foreground">{edu.institution}</span>
// // // //                         <span className="text-sm text-muted-foreground font-medium">{edu.location}</span>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   <CardContent className="p-6 sm:p-8">
// // // //                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// // // //                       {/* CGPA/Percentage Badge */}
// // // //                       <div className="relative">
// // // //                         <Badge 
// // // //                           variant="secondary" 
// // // //                           className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-bold text-base sm:text-lg px-5 py-2.5 shadow-md border-2 border-primary/30"
// // // //                         >
// // // //                           {edu.cgpa ? (
// // // //                             <div className="flex items-center gap-2">
// // // //                               <Award size={18} className="text-primary" />
// // // //                               <span>CGPA: {edu.cgpa}</span>
// // // //                             </div>
// // // //                           ) : (
// // // //                             <div className="flex items-center gap-2">
// // // //                               <Award size={18} className="text-primary" />
// // // //                               <span>Score: {edu.percentage}</span>
// // // //                             </div>
// // // //                           )}
// // // //                         </Badge>
// // // //                       </div>

// // // //                       {/* Visit Website Button */}
// // // //                       <a 
// // // //                         href={edu.website} 
// // // //                         target="_blank" 
// // // //                         rel="noopener noreferrer"
// // // //                         className="group/link inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg font-bold text-sm sm:text-base transition-all duration-300 border-2 border-primary/30 hover:border-primary hover:shadow-lg w-fit"
// // // //                       >
// // // //                         <span>Visit Website</span>
// // // //                         <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
// // // //                       </a>
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

// // // // export default Experience;
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge, ExternalLink } from "lucide-react";
// // // import { useEffect, useRef, useState } from "react";

// // // const Experience = () => {
// // //   const sectionRef = useRef(null);
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         setIsVisible(entry.isIntersecting);
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     if (sectionRef.current) {
// // //       observer.observe(sectionRef.current);
// // //     }

// // //     return () => {
// // //       if (sectionRef.current) {
// // //         observer.unobserve(sectionRef.current);
// // //       }
// // //     };
// // //   }, []);

// // //   const workExperience = [
// // //     {
// // //       title: "Web Developer",
// // //       company: "Webgeon Results",
// // //       period: "Dec 2023 - Present",
// // //       type: "Full-time",
// // //       achievements: {
// // //         mobile: [
// // //           "Developed adaptive user interfaces with Next.js, Tailwind CSS, and JavaScript",
// // //           "Optimized UI performance for seamless experiences",
// // //           "Tested and integrated APIs using Postman",
// // //           "Managed data with MongoDB and MySQL",
// // //           "Leading Gym Management Software: member tracking, payments, admin dashboards"
// // //         ],
// // //         desktop: [
// // //           "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// // //           "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// // //           "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// // //           "Used MongoDB and MySQL to store and organize different types of data",
// // //           "Used VS Code and Eclipse for streamlined development and debugging",
// // //           "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// // //           "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// // //         ]
// // //       },
// // //       technologies: [
// // //         { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
// // //         { name: "Tailwind CSS", icon: null },
// // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // //         { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
// // //         { name: "MySQL", icon: "/assets/icons/mysql.svg" },
// // //         { name: "Postman", icon: "/assets/icons/postman.svg" }
// // //       ]
// // //     }
// // //   ];

// // //   const internships = [
// // //     {
// // //       title: "Embedded Systems Intern",
// // //       company: "Next Gen Pro",
// // //       period: "May 2023 - May 2024",
// // //       type: "Internship",
// // //       achievements: [
// // //         "Completed hands-on training on embedded systems using Arduino UNO",
// // //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// // //         "Gained practical experience in building microcontroller-based automation systems"
// // //       ],
// // //       technologies: [
// // //         { name: "Arduino UNO", icon: "/assets/icons/arduino.svg" },
// // //         { name: "Embedded Systems", icon: <Cpu className="w-4 h-4" /> },
// // //         { name: "Circuit Design", icon: <Zap className="w-4 h-4" /> },
// // //         { name: "Sensors", icon: <Gauge className="w-4 h-4" /> }
// // //       ]
// // //     },
// // //     {
// // //       title: "Python Full Stack Development Intern",
// // //       company: "TechMogul",
// // //       period: "Jun 2024 - Jun 2024",
// // //       type: "Internship",
// // //       achievements: [
// // //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// // //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// // //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// // //       ],
// // //       technologies: [
// // //         { name: "Python", icon: "/assets/icons/python.svg" },
// // //         { name: "HTML", icon: "/assets/icons/html.svg" },
// // //         { name: "CSS", icon: "/assets/icons/css.svg" },
// // //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// // //         { name: "Full Stack Development", icon: null }
// // //       ]
// // //     }
// // //   ];

// // //   const certifications = [
// // //     "Microsoft Azure for Data Engineering (Coursera)",
// // //     "CMOS Digital VLSI Design (NPTEL)",
// // //     "EF SET English Certificate",
// // //     "Introduction to Microsoft Excel (Coursera)"
// // //   ];

// // //   const education = [
// // //     {
// // //       degree: "B.Tech in Electronics and Communication Engineering",
// // //       institution: "Federal Institute of Science and Technology (FISAT)",
// // //       location: "Kerala, India",
// // //       website: "https://fisat.ac.in/",
// // //       period: "August 2021 - April 2025",
// // //       cgpa: "7.45",
// // //       type: "Bachelor's Degree",
// // //       color: "from-blue-500/10 to-purple-500/10"
// // //     },
// // //     {
// // //       degree: "Senior Secondary Education (CBSE)",
// // //       institution: "Vijayagiri Public School",
// // //       location: "Kerala, India",
// // //       website: "https://www.vijayagirischool.ac.in/",
// // //       period: "Jun 2019 - Feb 2021",
// // //       percentage: "87%",
// // //       type: "Higher Secondary",
// // //       color: "from-green-500/10 to-teal-500/10"
// // //     }
// // //   ];

// // //   return (
// // //     <section
// // //       ref={sectionRef}
// // //       id="experience"
// // //       className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
// // //     >
// // //       <div className="max-w-6xl mx-auto">
// // //         <div
// // //           className={`text-center mb-16 transition-all duration-1000 ${
// // //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// // //           }`}
// // //         >
// // //           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // //             Experience & Education
// // //           </h2>
// // //           <p className="text-gray-600 dark:text-gray-300 text-lg">
// // //             My professional journey and academic background
// // //           </p>
// // //         </div>

// // //         {/* 1. Professional Experience */}
// // //         <div
// // //           className={`mb-16 transition-all duration-1000 delay-100 ${
// // //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// // //           }`}
// // //         >
// // //           <div className="flex items-center gap-3 mb-6">
// // //             <Briefcase className="w-8 h-8 text-blue-600" />
// // //             <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
// // //               Professional Experience
// // //             </h3>
// // //           </div>

// // //           {workExperience.map((job, index) => (
// // //             <Card
// // //               key={index}
// // //               className="bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
// // //             >
// // //               <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
// // //                 <div className="flex flex-wrap items-start justify-between gap-4">
// // //                   <div className="flex-1">
// // //                     <div className="flex flex-wrap items-center gap-2 mb-2">
// // //                       <Badge variant="secondary" className="bg-blue-600 text-white">
// // //                         {job.type}
// // //                       </Badge>
// // //                       <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
// // //                         <Calendar className="w-4 h-4" />
// // //                         {job.period}
// // //                       </span>
// // //                     </div>
// // //                     <CardTitle className="text-2xl mb-1">{job.title}</CardTitle>
// // //                     <CardDescription className="text-base">{job.company}</CardDescription>
// // //                   </div>
// // //                 </div>
// // //               </CardHeader>
// // //               <CardContent className="pt-6">
// // //                 <div className="mb-6">
// // //                   <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
// // //                     <Award className="w-5 h-5 text-blue-600" />
// // //                     Key Achievements
// // //                   </h4>
// // //                   {/* Mobile version - shorter achievements */}
// // //                   <ul className="space-y-2 text-gray-700 dark:text-gray-300 md:hidden">
// // //                     {job.achievements.mobile.map((achievement, achievementIndex) => (
// // //                       <li key={achievementIndex} className="flex items-start gap-2">
// // //                         <span className="text-blue-600 mt-1">•</span>
// // //                         <span>{achievement}</span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                   {/* Desktop version - full achievements */}
// // //                   <ul className="space-y-2 text-gray-700 dark:text-gray-300 hidden md:block">
// // //                     {job.achievements.desktop.map((achievement, achievementIndex) => (
// // //                       <li key={achievementIndex} className="flex items-start gap-2">
// // //                         <span className="text-blue-600 mt-1">•</span>
// // //                         <span>{achievement}</span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //                 <div>
// // //                   <h4 className="font-semibold text-lg mb-3">Technologies</h4>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {job.technologies.map((tech, techIndex) => (
// // //                       <Badge
// // //                         key={techIndex}
// // //                         variant="outline"
// // //                         className="flex items-center gap-2 px-3 py-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
// // //                       >
// // //                         {tech.icon && (
// // //                           typeof tech.icon === 'string' ? (
// // //                             <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
// // //                           ) : (
// // //                             tech.icon
// // //                           )
// // //                         )}
// // //                         {tech.name}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           ))}
// // //         </div>

// // //         {/* 2. Internship Experience */}
// // //         <div
// // //           className={`mb-16 transition-all duration-1000 delay-200 ${
// // //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// // //           }`}
// // //         >
// // //           <div className="flex items-center gap-3 mb-6">
// // //             <Briefcase className="w-8 h-8 text-purple-600" />
// // //             <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
// // //               Internship Experience
// // //             </h3>
// // //           </div>

// // //           <div className="grid gap-6">
// // //             {internships.map((internship, index) => (
// // //               <Card
// // //                 key={index}
// // //                 className="bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
// // //               >
// // //                 <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20">
// // //                   <div className="flex flex-wrap items-start justify-between gap-4">
// // //                     <div className="flex-1">
// // //                       <div className="flex flex-wrap items-center gap-2 mb-2">
// // //                         <Badge variant="secondary" className="bg-purple-600 text-white">
// // //                           {internship.type}
// // //                         </Badge>
// // //                         <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
// // //                           <Calendar className="w-4 h-4" />
// // //                           {internship.period}
// // //                         </span>
// // //                       </div>
// // //                       <CardTitle className="text-xl mb-1">{internship.title}</CardTitle>
// // //                       <CardDescription className="text-base">{internship.company}</CardDescription>
// // //                     </div>
// // //                   </div>
// // //                 </CardHeader>
// // //                 <CardContent className="pt-6">
// // //                   <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
// // //                     {internship.achievements.map((achievement, achievementIndex) => (
// // //                       <li key={achievementIndex} className="flex items-start gap-2">
// // //                         <span className="text-purple-600 mt-1">•</span>
// // //                         <span>{achievement}</span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {internship.technologies.map((tech, techIndex) => (
// // //                       <Badge
// // //                         key={techIndex}
// // //                         variant="outline"
// // //                         className="flex items-center gap-2 px-3 py-1 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
// // //                       >
// // //                         {tech.icon && (
// // //                           typeof tech.icon === 'string' ? (
// // //                             <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
// // //                           ) : (
// // //                             tech.icon
// // //                           )
// // //                         )}
// // //                         {tech.name}
// // //                       </Badge>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* 3. Professional Certifications */}
// // //         <div
// // //           className={`mb-16 transition-all duration-1000 delay-300 ${
// // //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// // //           }`}
// // //         >
// // //           <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] cursor-pointer">
// // //             <CardHeader>
// // //               <div className="flex items-center gap-3 mb-2">
// // //                 <Award className="w-8 h-8 text-amber-600" />
// // //                 <CardTitle className="text-3xl">Professional Certifications</CardTitle>
// // //               </div>
// // //               <CardDescription className="text-base">
// // //                 Certifications & Achievements • Continuous learning and skill development
// // //               </CardDescription>
// // //             </CardHeader>
// // //             <CardContent>
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                 {certifications.map((cert, index) => (
// // //                   <div
// // //                     key={index}
// // //                     className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-amber-200 dark:border-amber-800 hover:shadow-md transition-all"
// // //                   >
// // //                     <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
// // //                     <span className="text-gray-700 dark:text-gray-300">{cert}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </CardContent>
// // //           </Card>
// // //         </div>

// // //         {/* 4. Education - Premium Design */}
// // //         <div
// // //           className={`transition-all duration-1000 delay-400 ${
// // //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// // //           }`}
// // //         >
// // //           <div className="flex items-center gap-3 mb-6">
// // //             <GraduationCap className="w-8 h-8 text-green-600" />
// // //             <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Education</h3>
// // //           </div>

// // //           <div className="grid gap-6">
// // //             {education.map((edu, index) => (
// // //               <Card
// // //                 key={index}
// // //                 className="overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
// // //               >
// // //                 {/* Gradient Header Background */}
// // //                 <div className={`bg-gradient-to-r ${edu.color} p-6`}>
// // //                   <div className="flex flex-wrap items-start justify-between gap-4">
// // //                     <div className="flex-1">
// // //                       <div className="flex flex-wrap items-center gap-2 mb-3">
// // //                         <Badge variant="secondary" className="bg-green-600 text-white">
// // //                           {edu.type}
// // //                         </Badge>
// // //                         <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
// // //                           <Calendar className="w-4 h-4" />
// // //                           {edu.period}
// // //                         </span>
// // //                       </div>
// // //                       <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
// // //                         {edu.degree}
// // //                       </h4>
// // //                       <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-1">
// // //                         {edu.institution}
// // //                       </p>
// // //                       <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
// // //                         <MapPin className="w-4 h-4" />
// // //                         {edu.location}
// // //                       </p>
// // //                     </div>
// // //                     {/* CGPA/Percentage Badge */}
// // //                     <div className="flex flex-col items-end gap-2">
// // //                       {edu.cgpa ? (
// // //                         <Badge className="bg-green-600 text-white text-base px-4 py-2">
// // //                           CGPA: {edu.cgpa}
// // //                         </Badge>
// // //                       ) : (
// // //                         <Badge className="bg-green-600 text-white text-base px-4 py-2">
// // //                           Score: {edu.percentage}
// // //                         </Badge>
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <CardContent className="pt-6">
// // //                   {/* Visit Website Button */}
// // //                   <a
// // //                     href={edu.website}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
// // //                   >
// // //                     Visit Website
// // //                     <ExternalLink className="w-4 h-4" />
// // //                   </a>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Experience;
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge, ExternalLink } from "lucide-react";
// // import { useEffect, useRef, useState } from "react";

// // const Experience = () => {
// //   const sectionRef = useRef(null);
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         setIsVisible(entry.isIntersecting);
// //       },
// //       { threshold: 0.1 }
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

// //   const workExperience = [
// //     {
// //       title: "Web Developer",
// //       company: "Webgeon Results",
// //       period: "Dec 2023 - Present",
// //       type: "Full-time",
// //       achievements: {
// //         mobile: [
// //           "Developed adaptive user interfaces with Next.js, Tailwind CSS, and JavaScript",
// //           "Optimized UI performance for seamless experiences",
// //           "Tested and integrated APIs using Postman",
// //           "Managed data with MongoDB and MySQL",
// //           "Leading Gym Management Software: member tracking, payments, admin dashboards"
// //         ],
// //         desktop: [
// //           "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
// //           "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
// //           "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
// //           "Used MongoDB and MySQL to store and organize different types of data",
// //           "Used VS Code and Eclipse for streamlined development and debugging",
// //           "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
// //           "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
// //         ]
// //       },
// //       technologies: [
// //         { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
// //         { name: "Tailwind CSS", icon: null },
// //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// //         { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
// //         { name: "MySQL", icon: "/assets/icons/mysql.svg" },
// //         { name: "Postman", icon: "/assets/icons/postman.svg" }
// //       ]
// //     }
// //   ];

// //   const internships = [
// //     {
// //       title: "Embedded Systems Intern",
// //       company: "Next Gen Pro",
// //       period: "May 2023 - May 2024",
// //       type: "Internship",
// //       achievements: [
// //         "Completed hands-on training on embedded systems using Arduino UNO",
// //         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
// //         "Gained practical experience in building microcontroller-based automation systems"
// //       ],
// //       technologies: [
// //         { name: "Arduino UNO", icon: "/assets/icons/arduino.svg" },
// //         { name: "Embedded Systems", icon: <Cpu className="w-4 h-4" /> },
// //         { name: "Circuit Design", icon: <Zap className="w-4 h-4" /> },
// //         { name: "Sensors", icon: <Gauge className="w-4 h-4" /> }
// //       ]
// //     },
// //     {
// //       title: "Python Full Stack Development Intern",
// //       company: "TechMogul",
// //       period: "Jun 2024 - Jun 2024",
// //       type: "Internship",
// //       achievements: [
// //         "Created a dynamic blog web application allowing users to create, publish, and share stories",
// //         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
// //         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
// //       ],
// //       technologies: [
// //         { name: "Python", icon: "/assets/icons/python.svg" },
// //         { name: "HTML", icon: "/assets/icons/html.svg" },
// //         { name: "CSS", icon: "/assets/icons/css.svg" },
// //         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
// //         { name: "Full Stack Development", icon: null }
// //       ]
// //     }
// //   ];

// //   const certifications = [
// //     "Microsoft Azure for Data Engineering (Coursera)",
// //     "CMOS Digital VLSI Design (NPTEL)",
// //     "EF SET English Certificate",
// //     "Introduction to Microsoft Excel (Coursera)"
// //   ];

// //   const education = [
// //     {
// //       degree: "B.Tech in Electronics and Communication Engineering",
// //       institution: "Federal Institute of Science and Technology (FISAT)",
// //       location: "Kerala, India",
// //       website: "https://fisat.ac.in/",
// //       period: "August 2021 - April 2025",
// //       cgpa: "7.45",
// //       type: "Bachelor's Degree",
// //       color: "from-blue-500/10 to-purple-500/10"
// //     },
// //     {
// //       degree: "Senior Secondary Education (CBSE)",
// //       institution: "Vijayagiri Public School",
// //       location: "Kerala, India",
// //       website: "https://www.vijayagirischool.ac.in/",
// //       period: "Jun 2019 - Feb 2021",
// //       percentage: "87%",
// //       type: "Higher Secondary",
// //       color: "from-green-500/10 to-teal-500/10"
// //     }
// //   ];

// //   return (
// //     <section
// //       ref={sectionRef}
// //       id="experience"
// //       className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
// //     >
// //       <div className="max-w-6xl mx-auto">
// //         <div
// //           className={`text-center mb-16 transition-all duration-1000 ${
// //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// //           }`}
// //         >
// //           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// //             Experience & Education
// //           </h2>
// //           <p className="text-gray-600 dark:text-gray-300 text-lg">
// //             My professional journey and academic background
// //           </p>
// //         </div>

// //         {/* 1. Professional Experience */}
// //         <div
// //           className={`mb-16 transition-all duration-1000 delay-100 ${
// //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// //           }`}
// //         >
// //           <div className="flex items-center gap-3 mb-6">
// //             <Briefcase className="w-8 h-8 text-blue-600" />
// //             <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
// //               Professional Experience
// //             </h3>
// //           </div>

// //           {workExperience.map((job, index) => (
// //             <Card
// //               key={index}
// //               className="bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
// //             >
// //               <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
// //                 <div className="flex flex-wrap items-start justify-between gap-4">
// //                   <div className="flex-1">
// //                     <div className="flex flex-wrap items-center gap-2 mb-2">
// //                       <Badge variant="secondary" className="bg-blue-600 text-white">
// //                         {job.type}
// //                       </Badge>
// //                       <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
// //                         <Calendar className="w-4 h-4" />
// //                         {job.period}
// //                       </span>
// //                     </div>
// //                     <CardTitle className="text-2xl mb-1">{job.title}</CardTitle>
// //                     <CardDescription className="text-base">{job.company}</CardDescription>
// //                   </div>
// //                 </div>
// //               </CardHeader>
// //               <CardContent className="pt-6">
// //                 <div className="mb-6">
// //                   <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
// //                     <Award className="w-5 h-5 text-blue-600" />
// //                     Key Achievements
// //                   </h4>
// //                   {/* Mobile version - shorter achievements */}
// //                   <ul className="space-y-2 text-gray-700 dark:text-gray-300 md:hidden">
// //                     {job.achievements.mobile.map((achievement, achievementIndex) => (
// //                       <li key={achievementIndex} className="flex items-start gap-2">
// //                         <span className="text-blue-600 mt-1">•</span>
// //                         <span>{achievement}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                   {/* Desktop version - full achievements */}
// //                   <ul className="space-y-2 text-gray-700 dark:text-gray-300 hidden md:block">
// //                     {job.achievements.desktop.map((achievement, achievementIndex) => (
// //                       <li key={achievementIndex} className="flex items-start gap-2">
// //                         <span className="text-blue-600 mt-1">•</span>
// //                         <span>{achievement}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold text-lg mb-3">Technologies</h4>
// //                   <div className="flex flex-wrap gap-2">
// //                     {job.technologies.map((tech, techIndex) => (
// //                       <Badge
// //                         key={techIndex}
// //                         variant="outline"
// //                         className="flex items-center gap-2 px-3 py-1"
// //                       >
// //                         {tech.icon && (
// //                           typeof tech.icon === 'string' ? (
// //                             <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
// //                           ) : (
// //                             tech.icon
// //                           )
// //                         )}
// //                         {tech.name}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>

// //         {/* 2. Internship Experience */}
// //         <div
// //           className={`mb-16 transition-all duration-1000 delay-200 ${
// //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// //           }`}
// //         >
// //           <div className="flex items-center gap-3 mb-6">
// //             <Briefcase className="w-8 h-8 text-purple-600" />
// //             <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
// //               Internship Experience
// //             </h3>
// //           </div>

// //           <div className="grid gap-6">
// //             {internships.map((internship, index) => (
// //               <Card
// //                 key={index}
// //                 className="bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
// //               >
// //                 <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20">
// //                   <div className="flex flex-wrap items-start justify-between gap-4">
// //                     <div className="flex-1">
// //                       <div className="flex flex-wrap items-center gap-2 mb-2">
// //                         <Badge variant="secondary" className="bg-purple-600 text-white">
// //                           {internship.type}
// //                         </Badge>
// //                         <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
// //                           <Calendar className="w-4 h-4" />
// //                           {internship.period}
// //                         </span>
// //                       </div>
// //                       <CardTitle className="text-xl mb-1">{internship.title}</CardTitle>
// //                       <CardDescription className="text-base">{internship.company}</CardDescription>
// //                     </div>
// //                   </div>
// //                 </CardHeader>
// //                 <CardContent className="pt-6">
// //                   <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
// //                     {internship.achievements.map((achievement, achievementIndex) => (
// //                       <li key={achievementIndex} className="flex items-start gap-2">
// //                         <span className="text-purple-600 mt-1">•</span>
// //                         <span>{achievement}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                   <div className="flex flex-wrap gap-2">
// //                     {internship.technologies.map((tech, techIndex) => (
// //                       <Badge
// //                         key={techIndex}
// //                         variant="outline"
// //                         className="flex items-center gap-2 px-3 py-1"
// //                       >
// //                         {tech.icon && (
// //                           typeof tech.icon === 'string' ? (
// //                             <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
// //                           ) : (
// //                             tech.icon
// //                           )
// //                         )}
// //                         {tech.name}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>

// //         {/* 3. Professional Certifications */}
// //         <div
// //           className={`mb-16 transition-all duration-1000 delay-300 ${
// //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// //           }`}
// //         >
// //           <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] cursor-pointer">
// //             <CardHeader>
// //               <div className="flex items-center gap-3 mb-2">
// //                 <Award className="w-8 h-8 text-amber-600" />
// //                 <CardTitle className="text-3xl">Professional Certifications</CardTitle>
// //               </div>
// //               <CardDescription className="text-base">
// //                 Certifications & Achievements • Continuous learning and skill development
// //               </CardDescription>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 {certifications.map((cert, index) => (
// //                   <div
// //                     key={index}
// //                     className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-amber-200 dark:border-amber-800"
// //                   >
// //                     <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
// //                     <span className="text-gray-700 dark:text-gray-300">{cert}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>

// //         {/* 4. Education - Premium Design */}
// //         <div
// //           className={`transition-all duration-1000 delay-400 ${
// //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// //           }`}
// //         >
// //           <div className="flex items-center gap-3 mb-6">
// //             <GraduationCap className="w-8 h-8 text-green-600" />
// //             <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Education</h3>
// //           </div>

// //           <div className="grid gap-6">
// //             {education.map((edu, index) => (
// //               <Card
// //                 key={index}
// //                 className="overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
// //               >
// //                 {/* Gradient Header Background */}
// //                 <div className={`bg-gradient-to-r ${edu.color} p-6`}>
// //                   <div className="flex flex-wrap items-start justify-between gap-4">
// //                     <div className="flex-1">
// //                       <div className="flex flex-wrap items-center gap-2 mb-3">
// //                         <Badge variant="secondary" className="bg-green-600 text-white">
// //                           {edu.type}
// //                         </Badge>
// //                         <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
// //                           <Calendar className="w-4 h-4" />
// //                           {edu.period}
// //                         </span>
// //                       </div>
// //                       <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
// //                         {edu.degree}
// //                       </h4>
// //                       <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-1">
// //                         {edu.institution}
// //                       </p>
// //                       <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
// //                         <MapPin className="w-4 h-4" />
// //                         {edu.location}
// //                       </p>
// //                     </div>
// //                     {/* CGPA/Percentage Badge */}
// //                     <div className="flex flex-col items-end gap-2">
// //                       {edu.cgpa ? (
// //                         <Badge className="bg-green-600 text-white text-base px-4 py-2">
// //                           CGPA: {edu.cgpa}
// //                         </Badge>
// //                       ) : (
// //                         <Badge className="bg-green-600 text-white text-base px-4 py-2">
// //                           Score: {edu.percentage}
// //                         </Badge>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <CardContent className="pt-6">
// //                   {/* Visit Website Button */}
// //                   <a
// //                     href={edu.website}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
// //                   >
// //                     Visit Website
// //                     <ExternalLink className="w-4 h-4" />
// //                   </a>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Experience;
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge, ExternalLink } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const Experience = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
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

//   const workExperience = [
//     {
//       title: "Web Developer",
//       company: "Webgeon Results",
//       period: "Dec 2023 - Present",
//       type: "Full-time",
//       achievements: {
//         mobile: [
//           "Developed adaptive user interfaces with Next.js, Tailwind CSS, and JavaScript",
//           "Optimized UI performance for seamless experiences",
//           "Tested and integrated APIs using Postman",
//           "Managed data with MongoDB and MySQL",
//           "Leading Gym Management Software: member tracking, payments, admin dashboards"
//         ],
//         desktop: [
//           "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
//           "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
//           "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
//           "Used MongoDB and MySQL to store and organize different types of data",
//           "Used VS Code and Eclipse for streamlined development and debugging",
//           "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
//           "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
//         ]
//       },
//       technologies: [
//         { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
//         { name: "Tailwind CSS", icon: null },
//         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
//         { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
//         { name: "MySQL", icon: "/assets/icons/mysql.svg" },
//         { name: "Postman", icon: "/assets/icons/postman.svg" }
//       ]
//     }
//   ];

//   const internships = [
//     {
//       title: "Embedded Systems Intern",
//       company: "Next Gen Pro",
//       period: "May 2023 - May 2024",
//       type: "Internship",
//       achievements: [
//         "Completed hands-on training on embedded systems using Arduino UNO",
//         "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
//         "Gained practical experience in building microcontroller-based automation systems"
//       ],
//       technologies: [
//         { name: "Arduino UNO", icon: "/assets/icons/arduino.svg" },
//         { name: "Embedded Systems", icon: <Cpu className="w-4 h-4" /> },
//         { name: "Circuit Design", icon: <Zap className="w-4 h-4" /> },
//         { name: "Sensors", icon: <Gauge className="w-4 h-4" /> }
//       ]
//     },
//     {
//       title: "Python Full Stack Development Intern",
//       company: "TechMogul",
//       period: "Jun 2024 - Jun 2024",
//       type: "Internship",
//       achievements: [
//         "Created a dynamic blog web application allowing users to create, publish, and share stories",
//         "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
//         "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
//       ],
//       technologies: [
//         { name: "Python", icon: "/assets/icons/python.svg" },
//         { name: "HTML", icon: "/assets/icons/html.svg" },
//         { name: "CSS", icon: "/assets/icons/css.svg" },
//         { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
//         { name: "Full Stack Development", icon: null }
//       ]
//     }
//   ];

//   const certifications = [
//     "Microsoft Azure for Data Engineering (Coursera)",
//     "CMOS Digital VLSI Design (NPTEL)",
//     "EF SET English Certificate",
//     "Introduction to Microsoft Excel (Coursera)"
//   ];

//   const education = [
//     {
//       degree: "B.Tech in Electronics and Communication Engineering",
//       institution: "Federal Institute of Science and Technology (FISAT)",
//       location: "Kerala, India",
//       website: "https://fisat.ac.in/",
//       period: "August 2021 - April 2025",
//       cgpa: "7.45",
//       type: "Bachelor's Degree",
//       color: "from-blue-500/10 to-purple-500/10"
//     },
//     {
//       degree: "Senior Secondary Education (CBSE)",
//       institution: "Vijayagiri Public School",
//       location: "Kerala, India",
//       website: "https://www.vijayagirischool.ac.in/",
//       period: "Jun 2019 - Feb 2021",
//       percentage: "87%",
//       type: "Higher Secondary",
//       color: "from-green-500/10 to-teal-500/10"
//     }
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       id="experience"
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
//     >
//       <div className="max-w-6xl mx-auto">
//         <div
//           className={`text-center mb-16 transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Experience & Education
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 text-lg">
//             My professional journey and academic background
//           </p>
//         </div>

//         {/* 1. Professional Experience */}
//         <div
//           className={`mb-16 transition-all duration-1000 delay-100 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="flex items-center gap-3 mb-6">
//             <Briefcase className="w-8 h-8 text-blue-600" />
//             <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
//               Professional Experience
//             </h3>
//           </div>

//           {workExperience.map((job, index) => (
//             <Card
//               key={index}
//               className="bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
//             >
//               <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
//                 <div className="flex flex-wrap items-start justify-between gap-4">
//                   <div className="flex-1">
//                     <div className="flex flex-wrap items-center gap-2 mb-2">
//                       <Badge variant="secondary" className="bg-blue-600 text-white">
//                         {job.type}
//                       </Badge>
//                       <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         {job.period}
//                       </span>
//                     </div>
//                     <CardTitle className="text-2xl mb-1">{job.title}</CardTitle>
//                     <CardDescription className="text-base">{job.company}</CardDescription>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent className="pt-6">
//                 <div className="mb-6">
//                   <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
//                     <Award className="w-5 h-5 text-blue-600" />
//                     Key Achievements
//                   </h4>
//                   {/* Mobile version - shorter achievements */}
//                   <ul className="space-y-2 text-gray-700 dark:text-gray-300 md:hidden">
//                     {job.achievements.mobile.map((achievement, achievementIndex) => (
//                       <li key={achievementIndex} className="flex items-start gap-2">
//                         <span className="text-blue-600 mt-1">•</span>
//                         <span>{achievement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   {/* Desktop version - full achievements */}
//                   <ul className="space-y-2 text-gray-700 dark:text-gray-300 hidden md:block">
//                     {job.achievements.desktop.map((achievement, achievementIndex) => (
//                       <li key={achievementIndex} className="flex items-start gap-2">
//                         <span className="text-blue-600 mt-1">•</span>
//                         <span>{achievement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-lg mb-3">Technologies</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {job.technologies.map((tech, techIndex) => (
//                       <Badge
//                         key={techIndex}
//                         variant="outline"
//                         className="flex items-center gap-2 px-3 py-1"
//                       >
//                         {tech.icon && (
//                           typeof tech.icon === 'string' ? (
//                             <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
//                           ) : (
//                             tech.icon
//                           )
//                         )}
//                         {tech.name}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* 2. Internship Experience */}
//         <div
//           className={`mb-16 transition-all duration-1000 delay-200 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="flex items-center gap-3 mb-6">
//             <Briefcase className="w-8 h-8 text-purple-600" />
//             <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
//               Internship Experience
//             </h3>
//           </div>

//           <div className="grid gap-6">
//             {internships.map((internship, index) => (
//               <Card
//                 key={index}
//                 className="bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
//               >
//                 <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20">
//                   <div className="flex flex-wrap items-start justify-between gap-4">
//                     <div className="flex-1">
//                       <div className="flex flex-wrap items-center gap-2 mb-2">
//                         <Badge variant="secondary" className="bg-purple-600 text-white">
//                           {internship.type}
//                         </Badge>
//                         <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
//                           <Calendar className="w-4 h-4" />
//                           {internship.period}
//                         </span>
//                       </div>
//                       <CardTitle className="text-xl mb-1">{internship.title}</CardTitle>
//                       <CardDescription className="text-base">{internship.company}</CardDescription>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-6">
//                   <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
//                     {internship.achievements.map((achievement, achievementIndex) => (
//                       <li key={achievementIndex} className="flex items-start gap-2">
//                         <span className="text-purple-600 mt-1">•</span>
//                         <span>{achievement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="flex flex-wrap gap-2">
//                     {internship.technologies.map((tech, techIndex) => (
//                       <Badge
//                         key={techIndex}
//                         variant="outline"
//                         className="flex items-center gap-2 px-3 py-1"
//                       >
//                         {tech.icon && (
//                           typeof tech.icon === 'string' ? (
//                             <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
//                           ) : (
//                             tech.icon
//                           )
//                         )}
//                         {tech.name}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* 3. Professional Certifications */}
//         <div
//           className={`mb-16 transition-all duration-1000 delay-300 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] cursor-pointer">
//             <CardHeader>
//               <div className="flex items-center gap-3 mb-2">
//                 <Award className="w-8 h-8 text-amber-600" />
//                 <CardTitle className="text-3xl">Professional Certifications</CardTitle>
//               </div>
//               <CardDescription className="text-base">
//                 Certifications & Achievements • Continuous learning and skill development
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {certifications.map((cert, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-amber-200 dark:border-amber-800"
//                   >
//                     <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
//                     <span className="text-gray-700 dark:text-gray-300">{cert}</span>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* 4. Education - Premium Design */}
//         <div
//           className={`transition-all duration-1000 delay-400 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="flex items-center gap-3 mb-6">
//             <GraduationCap className="w-8 h-8 text-green-600" />
//             <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Education</h3>
//           </div>

//           <div className="grid gap-6">
//             {education.map((edu, index) => (
//               <Card
//                 key={index}
//                 className="overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
//               >
//                 {/* Gradient Header Background */}
//                 <div className={`bg-gradient-to-r ${edu.color} p-6`}>
//                   <div className="flex flex-wrap items-start justify-between gap-4">
//                     <div className="flex-1">
//                       <div className="flex flex-wrap items-center gap-2 mb-3">
//                         <Badge variant="secondary" className="bg-green-600 text-white">
//                           {edu.type}
//                         </Badge>
//                         <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
//                           <Calendar className="w-4 h-4" />
//                           {edu.period}
//                         </span>
//                       </div>
//                       <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
//                         {edu.degree}
//                       </h4>
//                       <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-1">
//                         {edu.institution}
//                       </p>
//                       <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
//                         <MapPin className="w-4 h-4" />
//                         {edu.location}
//                       </p>
//                     </div>
//                     {/* CGPA/Percentage Badge */}
//                     <div className="flex flex-col items-end gap-2">
//                       {edu.cgpa ? (
//                         <Badge className="bg-green-600 text-white text-base px-4 py-2">
//                           CGPA: {edu.cgpa}
//                         </Badge>
//                       ) : (
//                         <Badge className="bg-green-600 text-white text-base px-4 py-2">
//                           Score: {edu.percentage}
//                         </Badge>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <CardContent className="pt-6">
//                   {/* Visit Website Button */}
//                   <a
//                     href={edu.website}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
//                   >
//                     Visit Website
//                     <ExternalLink className="w-4 h-4" />
//                   </a>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, MapPin, Award, Cpu, Zap, Gauge, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  const workExperience = [
    {
      title: "Web Developer",
      company: "Webgeon Results",
      period: "Dec 2023 - Present",
      type: "Full-time",
      achievements: {
        mobile: [
          "Developed adaptive user interfaces with Next.js, Tailwind CSS, and JavaScript",
          "Optimized UI performance for seamless experiences",
          "Tested and integrated APIs using Postman",
          "Managed data with MongoDB and MySQL",
          "Leading Gym Management Software: member tracking, payments, admin dashboards"
        ],
        desktop: [
          "Developed and maintained adaptive user interfaces using Next.js, Tailwind CSS, and JavaScript",
          "Implemented interactive UI components and optimized front-end performance for seamless user experiences",
          "Utilized Postman for API testing and integration, ensuring reliable communication between frontend and backend",
          "Used MongoDB and MySQL to store and organize different types of data",
          "Used VS Code and Eclipse for streamlined development and debugging",
          "Played an active role in team discussions, demonstrating decision-making abilities and contributing to timely project delivery",
          "Currently leading the development of a Gym Management Software, focusing on member tracking, payment history, and admin dashboards"
        ]
      },
      technologies: [
        { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
        { name: "Tailwind CSS", icon: null },
        { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
        { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
        { name: "MySQL", icon: "/assets/icons/mysql.svg" },
        { name: "Postman", icon: "/assets/icons/postman.svg" }
      ]
    }
  ];

  const internships = [
    {
      title: "Embedded Systems Intern",
      company: "Next Gen Pro",
      period: "May 2023 - May 2024",
      type: "Internship",
      achievements: [
        "Completed hands-on training on embedded systems using Arduino UNO",
        "Involved in integrating real-time hardware, designing circuits, and interfacing sensors",
        "Gained practical experience in building microcontroller-based automation systems"
      ],
      technologies: [
        { name: "Arduino UNO", icon: "/assets/icons/arduino.svg" },
        { name: "Embedded Systems", icon: <Cpu className="w-4 h-4" /> },
        { name: "Circuit Design", icon: <Zap className="w-4 h-4" /> },
        { name: "Sensors", icon: <Gauge className="w-4 h-4" /> }
      ]
    },
    {
      title: "Python Full Stack Development Intern",
      company: "TechMogul",
      period: "Jun 2024 - Jun 2024",
      type: "Internship",
      achievements: [
        "Created a dynamic blog web application allowing users to create, publish, and share stories",
        "Worked across the full stack using Python, HTML, CSS, JavaScript, and database integration",
        "Gained exposure to both front-end and back-end development, enhancing web development proficiency"
      ],
      technologies: [
        { name: "Python", icon: "/assets/icons/python.svg" },
        { name: "HTML", icon: "/assets/icons/html.svg" },
        { name: "CSS", icon: "/assets/icons/css.svg" },
        { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
        { name: "Full Stack Development", icon: null }
      ]
    }
  ];

  const certifications = [
    "Microsoft Azure for Data Engineering (Coursera)",
    "CMOS Digital VLSI Design (NPTEL)",
    "EF SET English Certificate",
    "Introduction to Microsoft Excel (Coursera)"
  ];

  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Federal Institute of Science and Technology (FISAT)",
      location: "Kerala, India",
      website: "https://fisat.ac.in/",
      period: "August 2021 - April 2025",
      cgpa: "7.45",
      type: "Bachelor's Degree",
      color: "from-indigo-500/10 to-blue-500/10"
    },
    {
      degree: "Senior Secondary Education (CBSE)",
      institution: "Vijayagiri Public School",
      location: "Kerala, India",
      website: "https://www.vijayagirischool.ac.in/",
      period: "Jun 2019 - Feb 2021",
      percentage: "87%",
      type: "Higher Secondary",
      color: "from-indigo-500/10 to-purple-500/10"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            My professional journey and academic background
          </p>
        </div>

        {/* 1. Professional Experience */}
        <div
          className={`mb-16 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Professional Experience
            </h3>
          </div>

          {workExperience.map((job, index) => (
            <Card
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
            >
              <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-blue-600 text-white">
                        {job.type}
                      </Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </span>
                    </div>
                    <CardTitle className="text-2xl mb-1">{job.title}</CardTitle>
                    <CardDescription className="text-base">{job.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Key Achievements
                  </h4>
                  {/* Mobile version - shorter achievements */}
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 md:hidden">
                    {job.achievements.mobile.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Desktop version - full achievements */}
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 hidden md:block">
                    {job.achievements.desktop.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="flex items-center gap-2 px-3 py-1"
                      >
                        {tech.icon && (
                          typeof tech.icon === 'string' ? (
                            <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                          ) : (
                            tech.icon
                          )
                        )}
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 2. Internship Experience */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-purple-600" />
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Internship Experience
            </h3>
          </div>

          <div className="grid gap-6">
            {internships.map((internship, index) => (
              <Card
                key={index}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
              >
                <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-purple-600 text-white">
                          {internship.type}
                        </Badge>
                        <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {internship.period}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-1">{internship.title}</CardTitle>
                      <CardDescription className="text-base">{internship.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                    {internship.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="flex items-center gap-2 px-3 py-1"
                      >
                        {tech.icon && (
                          typeof tech.icon === 'string' ? (
                            <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                          ) : (
                            tech.icon
                          )
                        )}
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 3. Professional Certifications */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-8 h-8 text-amber-600" />
                <CardTitle className="text-3xl">Professional Certifications</CardTitle>
              </div>
              <CardDescription className="text-base">
                Certifications & Achievements • Continuous learning and skill development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-amber-200 dark:border-amber-800"
                  >
                    <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4. Education - Premium Design */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Education</h3>
          </div>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
              >
                {/* Gradient Header Background */}
                <div className={`bg-gradient-to-r ${edu.color} p-6`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-indigo-600 text-white">
                          {edu.type}
                        </Badge>
                        <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </p>
                    </div>
                    {/* CGPA/Percentage Badge */}
                    <div className="flex flex-col items-end gap-2">
                      {edu.cgpa ? (
                        <Badge className="bg-indigo-600 text-white text-base px-4 py-2">
                          CGPA: {edu.cgpa}
                        </Badge>
                      ) : (
                        <Badge className="bg-indigo-600 text-white text-base px-4 py-2">
                          Score: {edu.percentage}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  {/* Visit Website Button */}
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;