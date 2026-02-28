// // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Input } from "@/components/ui/input";
// // // // // // // import { Textarea } from "@/components/ui/textarea";
// // // // // // // import { Label } from "@/components/ui/label";
// // // // // // // import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
// // // // // // // import { useState } from "react";
// // // // // // // import { useToast } from "@/hooks/use-toast";

// // // // // // // const Contact = () => {
// // // // // // //   const { toast } = useToast();
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     name: "",
// // // // // // //     email: "",
// // // // // // //     subject: "",
// // // // // // //     message: ""
// // // // // // //   });

// // // // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // // // //     e.preventDefault();
    
// // // // // // //     // Create email content
// // // // // // //     const emailSubject = encodeURIComponent(formData.subject || "Contact Form Message");
// // // // // // //     const emailBody = encodeURIComponent(
// // // // // // //       `Hello Thomas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
// // // // // // //     );
    
// // // // // // //     // Open email client with pre-filled content
// // // // // // //     const mailtoUrl = `mailto:thomasjose22@gmail.com?subject=${emailSubject}&body=${emailBody}`;
// // // // // // //     window.location.href = mailtoUrl;
    
// // // // // // //     toast({
// // // // // // //       title: "Opening Email Client",
// // // // // // //       description: "Your email client will open with the message pre-filled.",
// // // // // // //     });
    
// // // // // // //     // Keep form data so user can see it was processed
// // // // // // //     // setFormData({ name: "", email: "", subject: "", message: "" });
// // // // // // //   };

// // // // // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // // // // //     setFormData(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [e.target.name]: e.target.value
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const contactInfo = [
// // // // // // //     {
// // // // // // //       icon: Mail,
// // // // // // //       label: "Email",
// // // // // // //       value: "thomasjose22@gmail.com",
// // // // // // //       href: "mailto:thomasjose22@gmail.com",
// // // // // // //       color: "text-blue-600"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: Phone,
// // // // // // //       label: "Phone",
// // // // // // //       value: "+91 8304909105",
// // // // // // //       href: "tel:+918304909105",
// // // // // // //       color: "text-green-600"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: Github,
// // // // // // //       label: "GitHub",
// // // // // // //       value: "Thomasjose-tech",
// // // // // // //       href: "https://github.com/Thomasjose-tech",
// // // // // // //       color: "text-gray-800"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: Linkedin,
// // // // // // //       label: "LinkedIn",
// // // // // // //       value: "thomas-jose-98b97b220",
// // // // // // //       href: "https://www.linkedin.com/in/thomas-jose-98b97b220",
// // // // // // //       color: "text-blue-700"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <section id="contact" className="py-20 px-4 bg-muted/30">
// // // // // // //       <div className="container mx-auto">
// // // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
// // // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // // //             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
// // // // // // //           {/* Contact Information */}
// // // // // // //           <div className="space-y-8 animate-slide-in-left">
// // // // // // //             <div>
// // // // // // //               <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
// // // // // // //               <p className="text-muted-foreground mb-8 leading-relaxed">
// // // // // // //                 I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
// // // // // // //                 Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
// // // // // // //               </p>
// // // // // // //             </div>

// // // // // // //             {/* Contact Cards */}
// // // // // // //             <div className="grid sm:grid-cols-2 gap-4">
// // // // // // //               {contactInfo.map((contact, index) => (
// // // // // // //                 <Card 
// // // // // // //                   key={contact.label}
// // // // // // //                   className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
// // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // //                 >
// // // // // // //                   <CardContent className="p-6">
// // // // // // //                     <a 
// // // // // // //                       href={contact.href}
// // // // // // //                       target={contact.href.startsWith('http') ? '_blank' : undefined}
// // // // // // //                       rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
// // // // // // //                       className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
// // // // // // //                     >
// // // // // // //                       <div className={`p-3 rounded-lg bg-primary/10 ${contact.color} group-hover:bg-primary/20 transition-colors duration-300`}>
// // // // // // //                         <contact.icon size={24} />
// // // // // // //                       </div>
// // // // // // //                       <div>
// // // // // // //                         <p className="font-semibold text-primary">{contact.label}</p>
// // // // // // //                         <p className="text-muted-foreground text-sm">{contact.value}</p>
// // // // // // //                       </div>
// // // // // // //                     </a>
// // // // // // //                   </CardContent>
// // // // // // //                 </Card>
// // // // // // //               ))}
// // // // // // //             </div>

// // // // // // //             {/* Location */}
// // // // // // //             <Card className="bg-gradient-card shadow-elegant border-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
// // // // // // //               <CardContent className="p-6">
// // // // // // //                 <div className="flex items-center gap-4">
// // // // // // //                   <div className="p-3 rounded-lg bg-primary/10 text-red-600">
// // // // // // //                     <MapPin size={24} />
// // // // // // //                   </div>
// // // // // // //                   <div>
// // // // // // //                     <p className="font-semibold text-primary">Location</p>
// // // // // // //                     <p className="text-muted-foreground">Kerala, India</p>
                    
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </CardContent>
// // // // // // //             </Card>
// // // // // // //           </div>

// // // // // // //           {/* Contact Form */}
// // // // // // //           <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
// // // // // // //             <Card className="bg-gradient-card shadow-elegant border-0">
// // // // // // //               <CardHeader>
// // // // // // //                 <CardTitle className="text-2xl">Send Me a Message</CardTitle>
// // // // // // //                 <CardDescription className="text-base">
// // // // // // //                   Fill out the form below and I'll get back to you as soon as possible.
// // // // // // //                 </CardDescription>
// // // // // // //               </CardHeader>
// // // // // // //               <CardContent>
// // // // // // //                 <form onSubmit={handleSubmit} className="space-y-6">
// // // // // // //                   <div className="grid sm:grid-cols-2 gap-4">
// // // // // // //                     <div className="space-y-2">
// // // // // // //                       <Label htmlFor="name">Name</Label>
// // // // // // //                       <Input
// // // // // // //                         id="name"
// // // // // // //                         name="name"
// // // // // // //                         value={formData.name}
// // // // // // //                         onChange={handleChange}
// // // // // // //                         placeholder="Your full name"
// // // // // // //                         required
// // // // // // //                         className="bg-background/50 border-primary/20 focus:border-primary"
// // // // // // //                       />
// // // // // // //                     </div>
// // // // // // //                     <div className="space-y-2">
// // // // // // //                       <Label htmlFor="email">Email</Label>
// // // // // // //                       <Input
// // // // // // //                         id="email"
// // // // // // //                         name="email"
// // // // // // //                         type="email"
// // // // // // //                         value={formData.email}
// // // // // // //                         onChange={handleChange}
// // // // // // //                         placeholder="your.email@example.com"
// // // // // // //                         required
// // // // // // //                         className="bg-background/50 border-primary/20 focus:border-primary"
// // // // // // //                       />
// // // // // // //                     </div>
// // // // // // //                   </div>
                  
// // // // // // //                   <div className="space-y-2">
// // // // // // //                     <Label htmlFor="subject">Subject</Label>
// // // // // // //                     <Input
// // // // // // //                       id="subject"
// // // // // // //                       name="subject"
// // // // // // //                       value={formData.subject}
// // // // // // //                       onChange={handleChange}
// // // // // // //                       placeholder="What's this about?"
// // // // // // //                       required
// // // // // // //                       className="bg-background/50 border-primary/20 focus:border-primary"
// // // // // // //                     />
// // // // // // //                   </div>
                  
// // // // // // //                   <div className="space-y-2">
// // // // // // //                     <Label htmlFor="message">Message</Label>
// // // // // // //                     <Textarea
// // // // // // //                       id="message"
// // // // // // //                       name="message"
// // // // // // //                       value={formData.message}
// // // // // // //                       onChange={handleChange}
// // // // // // //                       placeholder="Tell me about your project or idea..."
// // // // // // //                       rows={5}
// // // // // // //                       required
// // // // // // //                       className="bg-background/50 border-primary/20 focus:border-primary resize-none"
// // // // // // //                     />
// // // // // // //                   </div>
                  
// // // // // // //                   <Button 
// // // // // // //                     type="submit" 
// // // // // // //                     className="w-full bg-primary hover:bg-primary/90 shadow-glow"
// // // // // // //                     size="lg"
// // // // // // //                   >
// // // // // // //                     <Send size={20} className="mr-2" />
// // // // // // //                     Send Message
// // // // // // //                   </Button>
// // // // // // //                 </form>
// // // // // // //               </CardContent>
// // // // // // //             </Card>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Footer */}
// // // // // // //         <div className="text-center mt-16 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
          
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Contact;
// // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Input } from "@/components/ui/input";
// // // // // // import { Textarea } from "@/components/ui/textarea";
// // // // // // import { Label } from "@/components/ui/label";
// // // // // // import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle } from "lucide-react";
// // // // // // import { useState } from "react";
// // // // // // import { useToast } from "@/hooks/use-toast";

// // // // // // const Contact = () => {
// // // // // //   const { toast } = useToast();
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: "",
// // // // // //     email: "",
// // // // // //     subject: "",
// // // // // //     message: ""
// // // // // //   });

// // // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // // //     e.preventDefault();
    
// // // // // //     // Create email content
// // // // // //     const emailSubject = encodeURIComponent(formData.subject || "Contact Form Message");
// // // // // //     const emailBody = encodeURIComponent(
// // // // // //       `Hello Thomas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
// // // // // //     );
    
// // // // // //     // Open email client with pre-filled content
// // // // // //     const mailtoUrl = `mailto:thomasjose22@gmail.com?subject=${emailSubject}&body=${emailBody}`;
// // // // // //     window.location.href = mailtoUrl;
    
// // // // // //     toast({
// // // // // //       title: "Opening Email Client",
// // // // // //       description: "Your email client will open with the message pre-filled.",
// // // // // //     });
    
// // // // // //     // Keep form data so user can see it was processed
// // // // // //     // setFormData({ name: "", email: "", subject: "", message: "" });
// // // // // //   };

// // // // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // // // //     setFormData(prev => ({
// // // // // //       ...prev,
// // // // // //       [e.target.name]: e.target.value
// // // // // //     }));
// // // // // //   };

// // // // // //   const contactInfo = [
// // // // // //     {
// // // // // //       icon: Mail,
// // // // // //       label: "Email",
// // // // // //       value: "thomasjose22@gmail.com",
// // // // // //       href: "mailto:thomasjose22@gmail.com",
// // // // // //       color: "text-blue-600"
// // // // // //     },
// // // // // //     {
// // // // // //       icon: Phone,
// // // // // //       label: "Phone",
// // // // // //       value: "+91 8304909105",
// // // // // //       href: "tel:+918304909105",
// // // // // //       color: "text-green-600"
// // // // // //     },
// // // // // //     {
// // // // // //       icon: Github,
// // // // // //       label: "GitHub",
// // // // // //       value: "Thomasjose-tech",
// // // // // //       href: "https://github.com/Thomasjose-tech",
// // // // // //       color: "text-gray-800"
// // // // // //     },
// // // // // //     {
// // // // // //       icon: Linkedin,
// // // // // //       label: "LinkedIn",
// // // // // //       value: "thomas-jose-98b97b220",
// // // // // //       href: "https://www.linkedin.com/in/thomas-jose-98b97b220",
// // // // // //       color: "text-blue-700"
// // // // // //     }
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section id="contact" className="py-20 px-4 bg-muted/30 relative">
// // // // // //       <div className="container mx-auto">
// // // // // //         <div className="text-center mb-16 animate-fade-in">
// // // // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
// // // // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // // // //             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
// // // // // //           {/* Contact Information */}
// // // // // //           <div className="space-y-8 animate-slide-in-left">
// // // // // //             <div>
// // // // // //               <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
// // // // // //               <p className="text-muted-foreground mb-8 leading-relaxed">
// // // // // //                 I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
// // // // // //                 Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             {/* Contact Cards */}
// // // // // //             <div className="grid sm:grid-cols-2 gap-4">
// // // // // //               {contactInfo.map((contact, index) => (
// // // // // //                 <Card 
// // // // // //                   key={contact.label}
// // // // // //                   className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
// // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // //                 >
// // // // // //                   <CardContent className="p-6">
// // // // // //                     <a 
// // // // // //                       href={contact.href}
// // // // // //                       target={contact.href.startsWith('http') ? '_blank' : undefined}
// // // // // //                       rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
// // // // // //                       className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
// // // // // //                     >
// // // // // //                       <div className={`p-3 rounded-lg bg-primary/10 ${contact.color} group-hover:bg-primary/20 transition-colors duration-300`}>
// // // // // //                         <contact.icon size={24} />
// // // // // //                       </div>
// // // // // //                       <div>
// // // // // //                         <p className="font-semibold text-primary">{contact.label}</p>
// // // // // //                         <p className="text-muted-foreground text-sm">{contact.value}</p>
// // // // // //                       </div>
// // // // // //                     </a>
// // // // // //                   </CardContent>
// // // // // //                 </Card>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             {/* Location */}
// // // // // //             <Card className="bg-gradient-card shadow-elegant border-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
// // // // // //               <CardContent className="p-6">
// // // // // //                 <div className="flex items-center gap-4">
// // // // // //                   <div className="p-3 rounded-lg bg-primary/10 text-red-600">
// // // // // //                     <MapPin size={24} />
// // // // // //                   </div>
// // // // // //                   <div>
// // // // // //                     <p className="font-semibold text-primary">Location</p>
// // // // // //                     <p className="text-muted-foreground">Kerala, India</p>
                    
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>
// // // // // //           </div>

// // // // // //           {/* Contact Form */}
// // // // // //           <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
// // // // // //             <Card className="bg-gradient-card shadow-elegant border-0">
// // // // // //               <CardHeader>
// // // // // //                 <CardTitle className="text-2xl">Send Me a Message</CardTitle>
// // // // // //                 <CardDescription className="text-base">
// // // // // //                   Fill out the form below and I'll get back to you as soon as possible.
// // // // // //                 </CardDescription>
// // // // // //               </CardHeader>
// // // // // //               <CardContent>
// // // // // //                 <form onSubmit={handleSubmit} className="space-y-6">
// // // // // //                   <div className="grid sm:grid-cols-2 gap-4">
// // // // // //                     <div className="space-y-2">
// // // // // //                       <Label htmlFor="name">Name</Label>
// // // // // //                       <Input
// // // // // //                         id="name"
// // // // // //                         name="name"
// // // // // //                         value={formData.name}
// // // // // //                         onChange={handleChange}
// // // // // //                         placeholder="Your full name"
// // // // // //                         required
// // // // // //                         className="bg-background/50 border-primary/20 focus:border-primary"
// // // // // //                       />
// // // // // //                     </div>
// // // // // //                     <div className="space-y-2">
// // // // // //                       <Label htmlFor="email">Email</Label>
// // // // // //                       <Input
// // // // // //                         id="email"
// // // // // //                         name="email"
// // // // // //                         type="email"
// // // // // //                         value={formData.email}
// // // // // //                         onChange={handleChange}
// // // // // //                         placeholder="your.email@example.com"
// // // // // //                         required
// // // // // //                         className="bg-background/50 border-primary/20 focus:border-primary"
// // // // // //                       />
// // // // // //                     </div>
// // // // // //                   </div>
                  
// // // // // //                   <div className="space-y-2">
// // // // // //                     <Label htmlFor="subject">Subject</Label>
// // // // // //                     <Input
// // // // // //                       id="subject"
// // // // // //                       name="subject"
// // // // // //                       value={formData.subject}
// // // // // //                       onChange={handleChange}
// // // // // //                       placeholder="What's this about?"
// // // // // //                       required
// // // // // //                       className="bg-background/50 border-primary/20 focus:border-primary"
// // // // // //                     />
// // // // // //                   </div>
                  
// // // // // //                   <div className="space-y-2">
// // // // // //                     <Label htmlFor="message">Message</Label>
// // // // // //                     <Textarea
// // // // // //                       id="message"
// // // // // //                       name="message"
// // // // // //                       value={formData.message}
// // // // // //                       onChange={handleChange}
// // // // // //                       placeholder="Tell me about your project or idea..."
// // // // // //                       rows={5}
// // // // // //                       required
// // // // // //                       className="bg-background/50 border-primary/20 focus:border-primary resize-none"
// // // // // //                     />
// // // // // //                   </div>
                  
// // // // // //                   <Button 
// // // // // //                     type="submit" 
// // // // // //                     className="w-full bg-primary hover:bg-primary/90 shadow-glow"
// // // // // //                     size="lg"
// // // // // //                   >
// // // // // //                     <Send size={20} className="mr-2" />
// // // // // //                     Send Message
// // // // // //                   </Button>
// // // // // //                 </form>
// // // // // //               </CardContent>
// // // // // //             </Card>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Footer */}
// // // // // //         <div className="text-center mt-16 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
          
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* WhatsApp Floating Button */}
// // // // // //       <a
// // // // // //         href="https://wa.me/918304909105"
// // // // // //         target="_blank"
// // // // // //         rel="noopener noreferrer"
// // // // // //         className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
// // // // // //         title="Chat on WhatsApp"
// // // // // //       >
// // // // // //         <MessageCircle size={24} />
// // // // // //       </a>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Contact;
// // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Textarea } from "@/components/ui/textarea";
// // // // import { Label } from "@/components/ui/label";
// // // // import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle } from "lucide-react";
// // // // import { useState } from "react";
// // // // import { useToast } from "@/hooks/use-toast";

// // // // const Contact = () => {
// // // //   const { toast } = useToast();
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     subject: "",
// // // //     message: ""
// // // //   });

// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();
    
// // // //     // Create email content
// // // //     const emailSubject = encodeURIComponent(formData.subject || "Contact Form Message");
// // // //     const emailBody = encodeURIComponent(
// // // //       `Hello Thomas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
// // // //     );
    
// // // //     // Open email client with pre-filled content
// // // //     const mailtoUrl = `mailto:thomasjose22@gmail.com?subject=${emailSubject}&body=${emailBody}`;
// // // //     window.location.href = mailtoUrl;
    
// // // //     toast({
// // // //       title: "Opening Email Client",
// // // //       description: "Your email client will open with the message pre-filled.",
// // // //     });
    
// // // //     // Keep form data so user can see it was processed
// // // //     // setFormData({ name: "", email: "", subject: "", message: "" });
// // // //   };

// // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // //     setFormData(prev => ({
// // // //       ...prev,
// // // //       [e.target.name]: e.target.value
// // // //     }));
// // // //   };

// // // //   const contactInfo = [
// // // //     {
// // // //       icon: Mail,
// // // //       label: "Email",
// // // //       value: "thomasjose22@gmail.com",
// // // //       href: "mailto:thomasjose22@gmail.com",
// // // //       color: "text-blue-600"
// // // //     },
// // // //     {
// // // //       icon: Phone,
// // // //       label: "Phone",
// // // //       value: "+91 8304909105",
// // // //       href: "tel:+918304909105",
// // // //       color: "text-green-600"
// // // //     },
// // // //     {
// // // //       icon: Github,
// // // //       label: "GitHub",
// // // //       value: "Thomasjose-tech",
// // // //       href: "https://github.com/Thomasjose-tech",
// // // //       color: "text-gray-800"
// // // //     },
// // // //     {
// // // //       icon: Linkedin,
// // // //       label: "LinkedIn",
// // // //       value: "thomas-jose-98b97b220",
// // // //       href: "https://www.linkedin.com/in/thomas-jose-98b97b220",
// // // //       color: "text-blue-700"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <section id="contact" className="py-20 px-4 bg-muted/30 relative">
// // // //       <div className="container mx-auto">
// // // //         <div className="text-center mb-16 animate-fade-in">
// // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
// // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // //             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
// // // //           {/* Contact Information */}
// // // //           <div className="space-y-8 animate-slide-in-left">
// // // //             <div>
// // // //               <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
// // // //               <p className="text-muted-foreground mb-8 leading-relaxed">
// // // //                 I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
// // // //                 Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
// // // //               </p>
// // // //             </div>

// // // //             {/* Contact Cards */}
// // // //             <div className="grid sm:grid-cols-2 gap-4">
// // // //               {contactInfo.map((contact, index) => (
// // // //                 <Card 
// // // //                   key={contact.label}
// // // //                   className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
// // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // //                 >
// // // //                   <CardContent className="p-6">
// // // //                     <a 
// // // //                       href={contact.href}
// // // //                       target={contact.href.startsWith('http') ? '_blank' : undefined}
// // // //                       rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
// // // //                       className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
// // // //                     >
// // // //                       <div className={`p-3 rounded-lg bg-primary/10 ${contact.color} group-hover:bg-primary/20 transition-colors duration-300`}>
// // // //                         <contact.icon size={24} />
// // // //                       </div>
// // // //                       <div>
// // // //                         <p className="font-semibold text-primary">{contact.label}</p>
// // // //                         <p className="text-muted-foreground text-sm">{contact.value}</p>
// // // //                       </div>
// // // //                     </a>
// // // //                   </CardContent>
// // // //                 </Card>
// // // //               ))}
// // // //             </div>

// // // //             {/* Location */}
// // // //             <Card className="bg-gradient-card shadow-elegant border-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
// // // //               <CardContent className="p-6">
// // // //                 <div className="flex items-center gap-4">
// // // //                   <div className="p-3 rounded-lg bg-primary/10 text-red-600">
// // // //                     <MapPin size={24} />
// // // //                   </div>
// // // //                   <div>
// // // //                     <p className="font-semibold text-primary">Location</p>
// // // //                     <p className="text-muted-foreground">Kerala, India</p>
                    
// // // //                   </div>
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </div>

// // // //           {/* Contact Form */}
// // // //           <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
// // // //             <Card className="bg-gradient-card shadow-elegant border-0">
// // // //               <CardHeader>
// // // //                 <CardTitle className="text-2xl">Send Me a Message</CardTitle>
// // // //                 <CardDescription className="text-base">
// // // //                   Fill out the form below and I'll get back to you as soon as possible.
// // // //                 </CardDescription>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <form onSubmit={handleSubmit} className="space-y-6">
// // // //                   <div className="grid sm:grid-cols-2 gap-4">
// // // //                     <div className="space-y-2">
// // // //                       <Label htmlFor="name">Name</Label>
// // // //                       <Input
// // // //                         id="name"
// // // //                         name="name"
// // // //                         value={formData.name}
// // // //                         onChange={handleChange}
// // // //                         placeholder="Your full name"
// // // //                         required
// // // //                         className="bg-background/50 border-primary/20 focus:border-primary"
// // // //                       />
// // // //                     </div>
// // // //                     <div className="space-y-2">
// // // //                       <Label htmlFor="email">Email</Label>
// // // //                       <Input
// // // //                         id="email"
// // // //                         name="email"
// // // //                         type="email"
// // // //                         value={formData.email}
// // // //                         onChange={handleChange}
// // // //                         placeholder="your.email@example.com"
// // // //                         required
// // // //                         className="bg-background/50 border-primary/20 focus:border-primary"
// // // //                       />
// // // //                     </div>
// // // //                   </div>
                  
// // // //                   <div className="space-y-2">
// // // //                     <Label htmlFor="subject">Subject</Label>
// // // //                     <Input
// // // //                       id="subject"
// // // //                       name="subject"
// // // //                       value={formData.subject}
// // // //                       onChange={handleChange}
// // // //                       placeholder="What's this about?"
// // // //                       required
// // // //                       className="bg-background/50 border-primary/20 focus:border-primary"
// // // //                     />
// // // //                   </div>
                  
// // // //                   <div className="space-y-2">
// // // //                     <Label htmlFor="message">Message</Label>
// // // //                     <Textarea
// // // //                       id="message"
// // // //                       name="message"
// // // //                       value={formData.message}
// // // //                       onChange={handleChange}
// // // //                       placeholder="Tell me about your project or idea..."
// // // //                       rows={5}
// // // //                       required
// // // //                       className="bg-background/50 border-primary/20 focus:border-primary resize-none"
// // // //                     />
// // // //                   </div>
                  
// // // //                   <Button 
// // // //                     type="submit" 
// // // //                     className="w-full bg-primary hover:bg-primary/90 shadow-glow"
// // // //                     size="lg"
// // // //                   >
// // // //                     <Send size={20} className="mr-2" />
// // // //                     Send Message
// // // //                   </Button>
// // // //                 </form>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </div>
// // // //         </div>

// // // //         {/* Footer */}
// // // //         <div className="text-center mt-16 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
          
// // // //         </div>
// // // //       </div>

// // // //       {/* WhatsApp Floating Button */}
// // // //       <a
// // // //         href="https://wa.me/918304909105"
// // // //         target="_blank"
// // // //         rel="noopener noreferrer"
// // // //         className="fixed bottom-6 right-6 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
// // // //         title="Chat on WhatsApp"
// // // //       >
// // // //         <img 
// // // //           src="/lovable-uploads/WhatsApp-icone.png" 
// // // //           alt="WhatsApp"
// // // //           className="w-8 h-8"
// // // //         />
// // // //       </a>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Contact;
// // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Textarea } from "@/components/ui/textarea";
// // // // import { Label } from "@/components/ui/label";
// // // // import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle } from "lucide-react";
// // // // import { useState } from "react";
// // // // import { useToast } from "@/hooks/use-toast";

// // // // const Contact = () => {
// // // //   const { toast } = useToast();
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     subject: "",
// // // //     message: ""
// // // //   });

// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();
    
// // // //     // Create email content
// // // //     const emailSubject = encodeURIComponent(formData.subject || "Contact Form Message");
// // // //     const emailBody = encodeURIComponent(
// // // //       `Hello Thomas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
// // // //     );
    
// // // //     // Open email client with pre-filled content
// // // //     const mailtoUrl = `mailto:thomasjose22@gmail.com?subject=${emailSubject}&body=${emailBody}`;
// // // //     window.location.href = mailtoUrl;
    
// // // //     toast({
// // // //       title: "Opening Email Client",
// // // //       description: "Your email client will open with the message pre-filled.",
// // // //     });
    
// // // //     // Keep form data so user can see it was processed
// // // //     // setFormData({ name: "", email: "", subject: "", message: "" });
// // // //   };

// // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // //     setFormData(prev => ({
// // // //       ...prev,
// // // //       [e.target.name]: e.target.value
// // // //     }));
// // // //   };

// // // //   const contactInfo = [
// // // //     {
// // // //       icon: Mail,
// // // //       label: "Email",
// // // //       value: "thomasjose22@gmail.com",
// // // //       href: "mailto:thomasjose22@gmail.com",
// // // //       color: "text-blue-600"
// // // //     },
// // // //     {
// // // //       icon: Phone,
// // // //       label: "Phone",
// // // //       value: "+91 8304909105",
// // // //       href: "tel:+918304909105",
// // // //       color: "text-green-600"
// // // //     },
// // // //     {
// // // //       icon: Github,
// // // //       label: "GitHub",
// // // //       value: "Thomasjose-tech",
// // // //       href: "https://github.com/Thomasjose-tech",
// // // //       color: "text-gray-800"
// // // //     },
// // // //     {
// // // //       icon: Linkedin,
// // // //       label: "LinkedIn",
// // // //       value: "thomas-jose-98b97b220",
// // // //       href: "https://www.linkedin.com/in/thomas-jose-98b97b220",
// // // //       color: "text-blue-700"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <section id="contact" className="py-20 px-4 bg-muted/30 relative">
// // // //       <div className="container mx-auto">
// // // //         <div className="text-center mb-16 animate-fade-in">
// // // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
// // // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // // //             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
// // // //           {/* Contact Information */}
// // // //           <div className="space-y-8 animate-slide-in-left">
// // // //             <div>
// // // //               <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
// // // //               <p className="text-muted-foreground mb-8 leading-relaxed">
// // // //                 I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
// // // //                 Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
// // // //               </p>
// // // //             </div>

// // // //             {/* Contact Cards */}
// // // //             <div className="grid sm:grid-cols-2 gap-4">
// // // //               {contactInfo.map((contact, index) => (
// // // //                 <Card 
// // // //                   key={contact.label}
// // // //                   className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
// // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // //                 >
// // // //                   <CardContent className="p-6">
// // // //                     <a 
// // // //                       href={contact.href}
// // // //                       target={contact.href.startsWith('http') ? '_blank' : undefined}
// // // //                       rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
// // // //                       className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
// // // //                     >
// // // //                       <div className={`p-3 rounded-lg bg-primary/10 ${contact.color} group-hover:bg-primary/20 transition-colors duration-300`}>
// // // //                         <contact.icon size={24} />
// // // //                       </div>
// // // //                       <div>
// // // //                         <p className="font-semibold text-primary">{contact.label}</p>
// // // //                         <p className="text-muted-foreground text-sm">{contact.value}</p>
// // // //                       </div>
// // // //                     </a>
// // // //                   </CardContent>
// // // //                 </Card>
// // // //               ))}
// // // //             </div>

// // // //             {/* Location */}
// // // //             <Card className="bg-gradient-card shadow-elegant border-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
// // // //               <CardContent className="p-6">
// // // //                 <div className="flex items-center gap-4">
// // // //                   <div className="p-3 rounded-lg bg-primary/10 text-red-600">
// // // //                     <MapPin size={24} />
// // // //                   </div>
// // // //                   <div>
// // // //                     <p className="font-semibold text-primary">Location</p>
// // // //                     <p className="text-muted-foreground">Kerala, India</p>
                    
// // // //                   </div>
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </div>

// // // //           {/* Contact Form */}
// // // //           <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
// // // //             <Card className="bg-gradient-card shadow-elegant border-0">
// // // //               <CardHeader>
// // // //                 <CardTitle className="text-2xl">Send Me a Message</CardTitle>
// // // //                 <CardDescription className="text-base">
// // // //                   Fill out the form below and I'll get back to you as soon as possible.
// // // //                 </CardDescription>
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <form onSubmit={handleSubmit} className="space-y-6">
// // // //                   <div className="grid sm:grid-cols-2 gap-4">
// // // //                     <div className="space-y-2">
// // // //                       <Label htmlFor="name">Name</Label>
// // // //                       <Input
// // // //                         id="name"
// // // //                         name="name"
// // // //                         value={formData.name}
// // // //                         onChange={handleChange}
// // // //                         placeholder="Your full name"
// // // //                         required
// // // //                         className="bg-background/50 border-primary/20 focus:border-primary"
// // // //                       />
// // // //                     </div>
// // // //                     <div className="space-y-2">
// // // //                       <Label htmlFor="email">Email</Label>
// // // //                       <Input
// // // //                         id="email"
// // // //                         name="email"
// // // //                         type="email"
// // // //                         value={formData.email}
// // // //                         onChange={handleChange}
// // // //                         placeholder="your.email@example.com"
// // // //                         required
// // // //                         className="bg-background/50 border-primary/20 focus:border-primary"
// // // //                       />
// // // //                     </div>
// // // //                   </div>
                  
// // // //                   <div className="space-y-2">
// // // //                     <Label htmlFor="subject">Subject</Label>
// // // //                     <Input
// // // //                       id="subject"
// // // //                       name="subject"
// // // //                       value={formData.subject}
// // // //                       onChange={handleChange}
// // // //                       placeholder="What's this about?"
// // // //                       required
// // // //                       className="bg-background/50 border-primary/20 focus:border-primary"
// // // //                     />
// // // //                   </div>
                  
// // // //                   <div className="space-y-2">
// // // //                     <Label htmlFor="message">Message</Label>
// // // //                     <Textarea
// // // //                       id="message"
// // // //                       name="message"
// // // //                       value={formData.message}
// // // //                       onChange={handleChange}
// // // //                       placeholder="Tell me about your project or idea..."
// // // //                       rows={5}
// // // //                       required
// // // //                       className="bg-background/50 border-primary/20 focus:border-primary resize-none"
// // // //                     />
// // // //                   </div>
                  
// // // //                   <Button 
// // // //                     type="submit" 
// // // //                     className="w-full bg-primary hover:bg-primary/90 shadow-glow"
// // // //                     size="lg"
// // // //                   >
// // // //                     <Send size={20} className="mr-2" />
// // // //                     Send Message
// // // //                   </Button>
// // // //                 </form>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </div>
// // // //         </div>

// // // //         {/* Footer */}
// // // //         <div className="text-center mt-16 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
          
// // // //         </div>
// // // //       </div>

// // // //       {/* WhatsApp Floating Button */}
// // // //       <a
// // // //         href="https://wa.me/918304909105"
// // // //         target="_blank"
// // // //         rel="noopener noreferrer"
// // // //         className="absolute bottom-6 right-6 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
// // // //         title="Chat on WhatsApp"
// // // //       >
// // // //         <img 
// // // //           src="/lovable-uploads/WhatsApp-icone.png" 
// // // //           alt="WhatsApp"
// // // //           className="w-8 h-8"
// // // //         />
// // // //       </a>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Contact;
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { Label } from "@/components/ui/label";
// // // import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle } from "lucide-react";
// // // import { useState, useEffect } from "react";
// // // import { useToast } from "@/hooks/use-toast";

// // // // Add fade animations styles
// // // const fadeAnimationStyles = `
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

// // // const Contact = () => {
// // //   const { toast } = useToast();
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     subject: "",
// // //     message: ""
// // //   });
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
    
// // //     // Create email content
// // //     const emailSubject = encodeURIComponent(formData.subject || "Contact Form Message");
// // //     const emailBody = encodeURIComponent(
// // //       `Hello Thomas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
// // //     );
    
// // //     // Open email client with pre-filled content
// // //     const mailtoUrl = `mailto:thomasjose22@gmail.com?subject=${emailSubject}&body=${emailBody}`;
// // //     window.location.href = mailtoUrl;
    
// // //     toast({
// // //       title: "Opening Email Client",
// // //       description: "Your email client will open with the message pre-filled.",
// // //     });
// // //   };

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // //     setFormData(prev => ({
// // //       ...prev,
// // //       [e.target.name]: e.target.value
// // //     }));
// // //   };

// // //   // Intersection Observer to trigger animation when section is visible
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             setIsVisible(true);
// // //           } else {
// // //             setIsVisible(false);
// // //           }
// // //         });
// // //       },
// // //       {
// // //         threshold: 0.1,
// // //         rootMargin: '0px 0px -100px 0px'
// // //       }
// // //     );

// // //     const section = document.getElementById('contact');
// // //     if (section) {
// // //       observer.observe(section);
// // //     }

// // //     return () => {
// // //       if (section) {
// // //         observer.unobserve(section);
// // //       }
// // //     };
// // //   }, []);

// // //   const contactInfo = [
// // //     {
// // //       icon: Mail,
// // //       label: "Email",
// // //       value: "thomasjose22@gmail.com",
// // //       href: "mailto:thomasjose22@gmail.com",
// // //       color: "text-blue-600"
// // //     },
// // //     {
// // //       icon: Phone,
// // //       label: "Phone",
// // //       value: "+91 8304909105",
// // //       href: "tel:+918304909105",
// // //       color: "text-green-600"
// // //     },
// // //     {
// // //       icon: Github,
// // //       label: "GitHub",
// // //       value: "Thomasjose-tech",
// // //       href: "https://github.com/Thomasjose-tech",
// // //       color: "text-gray-800"
// // //     },
// // //     {
// // //       icon: Linkedin,
// // //       label: "LinkedIn",
// // //       value: "thomas-jose-98b97b220",
// // //       href: "https://www.linkedin.com/in/thomas-jose-98b97b220",
// // //       color: "text-blue-700"
// // //     }
// // //   ];

// // //   return (
// // //     <section id="contact" className="py-20 px-0 md:px-4 bg-muted/30 relative">
// // //       <div className="container mx-auto px-0 md:px-4">
// // //         <div className={`text-center mb-16 transition-opacity duration-300 px-4 md:px-0 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
// // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
// // //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// // //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// // //             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
// // //           </p>
// // //         </div>

// // //         <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
// // //           {/* Contact Information */}
// // //           <div className={`space-y-8 px-4 md:px-0 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.1s' : '0s' }}>
// // //             <div>
// // //               <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
// // //               <p className="text-muted-foreground mb-8 leading-relaxed">
// // //                 I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
// // //                 Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
// // //               </p>
// // //             </div>

// // //             {/* Contact Cards */}
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //               {contactInfo.map((contact, index) => (
// // //                 <Card 
// // //                   key={contact.label}
// // //                   className={`bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
// // //                   style={{ animationDelay: isVisible ? `${0.2 + index * 0.1}s` : '0s' }}
// // //                 >
// // //                   <CardContent className="p-6">
// // //                     <a 
// // //                       href={contact.href}
// // //                       target={contact.href.startsWith('http') ? '_blank' : undefined}
// // //                       rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
// // //                       className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
// // //                     >
// // //                       <div className={`p-3 rounded-lg bg-primary/10 ${contact.color} group-hover:bg-primary/20 transition-colors duration-300`}>
// // //                         <contact.icon size={24} />
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-semibold text-primary">{contact.label}</p>
// // //                         <p className="text-muted-foreground text-sm">{contact.value}</p>
// // //                       </div>
// // //                     </a>
// // //                   </CardContent>
// // //                 </Card>
// // //               ))}
// // //             </div>

// // //             {/* Location */}
// // //             <Card className={`bg-gradient-card shadow-elegant border-0 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.6s' : '0s' }}>
// // //               <CardContent className="p-6">
// // //                 <div className="flex items-center gap-4">
// // //                   <div className="p-3 rounded-lg bg-primary/10 text-red-600">
// // //                     <MapPin size={24} />
// // //                   </div>
// // //                   <div>
// // //                     <p className="font-semibold text-primary">Location</p>
// // //                     <p className="text-muted-foreground">Kerala, India</p>
// // //                   </div>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           </div>

// // //           {/* Contact Form */}
// // //           <div className={`px-4 md:px-0 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.3s' : '0s' }}>
// // //             <Card className="bg-gradient-card shadow-elegant border-0">
// // //               <CardHeader>
// // //                 <CardTitle className="text-2xl">Send Me a Message</CardTitle>
// // //                 <CardDescription className="text-base">
// // //                   Fill out the form below and I'll get back to you as soon as possible.
// // //                 </CardDescription>
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <form onSubmit={handleSubmit} className="space-y-6">
// // //                   <div className="grid sm:grid-cols-2 gap-4">
// // //                     <div className="space-y-2">
// // //                       <Label htmlFor="name">Name</Label>
// // //                       <Input
// // //                         id="name"
// // //                         name="name"
// // //                         value={formData.name}
// // //                         onChange={handleChange}
// // //                         placeholder="Your full name"
// // //                         required
// // //                         className="bg-background/50 border-primary/20 focus:border-primary"
// // //                       />
// // //                     </div>
// // //                     <div className="space-y-2">
// // //                       <Label htmlFor="email">Email</Label>
// // //                       <Input
// // //                         id="email"
// // //                         name="email"
// // //                         type="email"
// // //                         value={formData.email}
// // //                         onChange={handleChange}
// // //                         placeholder="your.email@example.com"
// // //                         required
// // //                         className="bg-background/50 border-primary/20 focus:border-primary"
// // //                       />
// // //                     </div>
// // //                   </div>
                  
// // //                   <div className="space-y-2">
// // //                     <Label htmlFor="subject">Subject</Label>
// // //                     <Input
// // //                       id="subject"
// // //                       name="subject"
// // //                       value={formData.subject}
// // //                       onChange={handleChange}
// // //                       placeholder="What's this about?"
// // //                       required
// // //                       className="bg-background/50 border-primary/20 focus:border-primary"
// // //                     />
// // //                   </div>
                  
// // //                   <div className="space-y-2">
// // //                     <Label htmlFor="message">Message</Label>
// // //                     <Textarea
// // //                       id="message"
// // //                       name="message"
// // //                       value={formData.message}
// // //                       onChange={handleChange}
// // //                       placeholder="Tell me about your project or idea..."
// // //                       rows={5}
// // //                       required
// // //                       className="bg-background/50 border-primary/20 focus:border-primary resize-none"
// // //                     />
// // //                   </div>
                  
// // //                   <Button 
// // //                     type="submit" 
// // //                     className="w-full bg-primary hover:bg-primary/90 shadow-glow"
// // //                     size="lg"
// // //                   >
// // //                     <Send size={20} className="mr-2" />
// // //                     Send Message
// // //                   </Button>
// // //                 </form>
// // //               </CardContent>
// // //             </Card>
// // //           </div>
// // //         </div>

// // //         {/* Footer */}
// // //         <div className={`text-center mt-16 pt-8 border-t border-border px-4 md:px-0 transition-opacity duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.7s' : '0s' }}>
          
// // //         </div>
// // //       </div>

// // //       {/* WhatsApp Floating Button */}
// // //       <a
// // //         href="https://wa.me/918304909105"
// // //         target="_blank"
// // //         rel="noopener noreferrer"
// // //         className="fixed bottom-6 right-6 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
// // //         title="Chat on WhatsApp"
// // //       >
// // //         <img 
// // //           src="/lovable-uploads/WhatsApp-icone.png" 
// // //           alt="WhatsApp"
// // //           className="w-8 h-8"
// // //         />
// // //       </a>
// // //     </section>
// // //   );
// // // };

// // // export default Contact;
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Label } from "@/components/ui/label";
// // import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle, X, User, Minimize2, Maximize2 } from "lucide-react";
// // import { useState, useEffect, useRef } from "react";
// // import { useToast } from "@/hooks/use-toast";

// // // ── Fade animation styles ────────────────────────────────────────
// // const fadeAnimationStyles = `
// //   @keyframes fadeUp {
// //     from { opacity: 0; transform: translateY(30px); }
// //     to   { opacity: 1; transform: translateY(0);    }
// //   }
// //   .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }

// //   @keyframes ping-slow {
// //     0%       { transform: scale(1); opacity: 0.3; }
// //     75%, 100%{ transform: scale(2); opacity: 0;   }
// //   }
// //   @keyframes typingDot {
// //     0%, 60%, 100% { transform: translateY(0);   opacity: 0.4; }
// //     30%           { transform: translateY(-6px); opacity: 1;   }
// //   }
// //   @keyframes fadeSlideIn {
// //     from { opacity: 0; transform: translateY(10px); }
// //     to   { opacity: 1; transform: translateY(0);    }
// //   }
// // `;

// // if (typeof document !== "undefined") {
// //   const styleSheet = document.createElement("style");
// //   styleSheet.textContent = fadeAnimationStyles;
// //   document.head.appendChild(styleSheet);
// // }

// // // ── Chatbot Knowledge Base ───────────────────────────────────────
// // const KB = [
// //   {
// //     patterns: ["who are you", "what is your name", "tell me about yourself", "introduce yourself", "about thomas", "who is thomas"],
// //     answer: "Hi! I'm Thomas Jose's portfolio assistant 🤖\n\nThomas is a Web Developer with 6 months of professional experience at Webgeon Results. He specialises in React, Next.js, and Tailwind CSS, and is passionate about building responsive, user-centric web applications."
// //   },
// //   {
// //     patterns: ["professional summary", "summary", "bio", "background", "overview"],
// //     answer: "📋 Professional Summary\n\nThomas Jose is a Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js.\n\nHe writes clean, maintainable code and delivers user-centric solutions, with a strong focus on performance, accessibility, and modern web standards."
// //   },
// //   {
// //     patterns: ["strengths", "key strengths", "what makes you good", "qualities"],
// //     answer: "💪 Key Strengths\n\n• Decision-making skills and team leadership\n• Performance optimisation and accessibility focus\n• Clean, maintainable code practices\n• Timely project delivery\n• Continuous learning and adaptation to new technologies\n• User experience optimisation and responsive design"
// //   },
// //   {
// //     patterns: ["philosophy", "approach", "mindset", "user-first", "development philosophy"],
// //     answer: "💡 Development Philosophy\n\nThomas approaches every project with a user-first mindset, ensuring technical excellence translates into intuitive and engaging user experiences. His goal is to bridge the gap between complex functionality and seamless usability."
// //   },
// //   {
// //     patterns: ["skills", "technologies", "tech stack", "what do you know", "programming languages", "languages"],
// //     answer: "🛠️ Skills & Technologies\n\n📌 Languages: Python 🐍, JavaScript ⚡, HTML 🌐, CSS 🎨\n\n⚛️ Frameworks: Next.js, React, Tailwind CSS\n\n🗄️ Databases: MongoDB, MySQL\n\n🔧 Tools: VS Code, Eclipse, Postman\n\n🤝 Soft Skills: Team Leadership, Decision Making, API Testing, REST API Validation"
// //   },
// //   {
// //     patterns: ["react", "nextjs", "next.js", "tailwind", "frontend"],
// //     answer: "⚛️ Frontend Skills\n\nThomas is proficient in:\n• React – component-driven UI development\n• Next.js – server-side rendering & full-stack React\n• Tailwind CSS – utility-first responsive styling\n\nHe used these daily at Webgeon Results to build adaptive, high-performance web applications."
// //   },
// //   {
// //     patterns: ["database", "mongodb", "mysql", "data"],
// //     answer: "🗄️ Database Skills\n\n• MongoDB – flexible, document-based data storage\n• MySQL – structured relational data\n\nThomas applied both at Webgeon Results to manage different types of application data."
// //   },
// //   {
// //     patterns: ["experience", "work experience", "job", "webgeon", "current job", "where do you work"],
// //     answer: "💼 Professional Experience\n\n🏢 Web Developer — Webgeon Results\n📅 Dec 2023 – Present | Full-time\n\n• Built adaptive UIs with Next.js, Tailwind CSS & JavaScript\n• Optimised front-end performance and UX\n• API testing & integration using Postman\n• Managed data with MongoDB and MySQL\n• Active in team decision-making\n• Leading development of a Gym Management Software"
// //   },
// //   {
// //     patterns: ["internship", "intern", "nextgen", "techmogul", "embedded", "python full stack"],
// //     answer: "🎓 Internship Experience\n\n1️⃣ Embedded Systems Intern — Next Gen Pro\n📅 May 2023 – May 2024\n• Arduino UNO, circuit design, sensor interfacing & automation\n\n2️⃣ Python Full Stack Development Intern — TechMogul\n📅 Jun 2024\n• Built a dynamic blog app using Python, HTML, CSS, JavaScript"
// //   },
// //   {
// //     patterns: ["education", "college", "degree", "university", "fisat", "btech", "b.tech", "school", "cgpa", "academic"],
// //     answer: "🎓 Education\n\n🏫 B.Tech — Electronics & Communication Engineering\n📍 FISAT, Kerala | 📅 Aug 2021 – Apr 2025 | CGPA: 7.45\n\n🏫 Senior Secondary (CBSE)\n📍 Vijayagiri Public School, Kerala | 📅 Jun 2019 – Feb 2021 | Score: 87%"
// //   },
// //   {
// //     patterns: ["projects", "what have you built", "portfolio projects", "show me your work"],
// //     answer: "🚀 Featured Projects\n\n1. 🐾 Smart Pet Feeder – IoT automated feeding + remote monitoring\n2. 🤖 Agriculture Robot – multi-task farming automation\n3. 🌍 Cross-Language Craft – real-time translation app (Live)\n4. 💰 Financuz Nexus – financial management dashboard (Live)\n5. ⌚ Chronos – luxury watch e-commerce UI (Live)\n\nAsk me about any specific project!"
// //   },
// //   {
// //     patterns: ["smart pet feeder", "pet feeder", "pet project"],
// //     answer: "🐾 Smart Pet Feeder\n📅 Aug 2023 – Jan 2024 | Hardware & Software\n\n• Automated food dispensing at scheduled intervals\n• Web dashboard for real-time remote monitoring\n• Reduced feeding inconsistencies by 85%\n\n🔧 Tech: IoT, Web Dashboard, Automation\n🔗 github.com/Thomasjose-tech/Smart-Pet-Feeder"
// //   },
// //   {
// //     patterns: ["agriculture robot", "farming robot", "robot project", "multipurpose"],
// //     answer: "🤖 Multipurpose Agriculture Robot\n📅 Mar 2024 – Feb 2025 | Analytics & IoT\n\n• Soil monitoring, seed sowing & spraying automation\n• Remote operation and monitoring\n• Increased farming efficiency by 60%, reduced labour costs by 45%\n\n🔧 Tech: Robotics, IoT Sensors, Embedded Systems"
// //   },
// //   {
// //     patterns: ["cross language", "translation", "language craft", "translator"],
// //     answer: "🌍 Cross-Language Craft\n📅 2024 | Frontend Development\n\n• Real-time multi-language translation\n• Responsive design for all devices\n\n🔧 Tech: React, Translation API, Responsive Design\n🔗 cross-language-craft-26011.vercel.app"
// //   },
// //   {
// //     patterns: ["financuz", "finance", "financial", "budget", "expense"],
// //     answer: "💰 Financuz Nexus\n📅 2024 | Frontend Development\n\n• Financial dashboard with expense tracking\n• Budget planning and analysis tools\n\n🔧 Tech: React, Data Visualisation, State Management\n🔗 financuz-nexus-01.vercel.app"
// //   },
// //   {
// //     patterns: ["chronos", "watch", "luxury", "timepiece", "ecommerce"],
// //     answer: "⌚ Chronos — Luxury Timepieces\n📅 2024 | Frontend Development\n\n• Premium product showcase with smooth animations\n• Intuitive navigation and product filtering\n\n🔧 Tech: React, E-commerce UI, Animation\n🔗 chronos-luxury-timepieces.vercel.app"
// //   },
// //   {
// //     patterns: ["certification", "certificate", "certifications", "achievements", "award"],
// //     answer: "🏆 Certifications\n\n1. 🏢 Web Developer Intern — Webgeon Results (Jan–Jul 2025)\n2. ☁️ Microsoft Azure for Data Engineering — Coursera\n3. 🇬🇧 EF SET English Certificate — C1 Advanced (66/100)\n4. 🎓 TechMaghi Certificate — 2024\n5. 🚀 NextGen Pro Certificate — 2024\n6. 📊 Microsoft Excel — Coursera\n7. 🔬 CMOS Digital VLSI Design — NPTEL/IIT Roorkee"
// //   },
// //   {
// //     patterns: ["contact", "email", "phone", "reach", "hire", "get in touch", "connect", "linkedin", "github", "whatsapp"],
// //     answer: "📬 Contact Thomas Jose\n\n📧 thomasjose22@gmail.com\n📱 +91 8304909105\n💬 wa.me/918304909105\n🐙 github.com/Thomasjose-tech\n💼 linkedin.com/in/thomas-jose-98b97b220\n📍 Kerala, India"
// //   },
// //   {
// //     patterns: ["location", "where are you", "where do you live", "india", "kerala"],
// //     answer: "📍 Thomas is based in Kerala, India.\n\nHe is open to remote work and collaboration opportunities globally!"
// //   },
// //   {
// //     patterns: ["gym", "gym management", "current project", "ongoing"],
// //     answer: "🏋️ Current Project — Gym Management Software\n\nLeading development at Webgeon Results:\n• Member tracking system\n• Payment history management\n• Admin dashboards\n\n🔧 Tech: Next.js, React, Tailwind CSS, MongoDB"
// //   },
// //   {
// //     patterns: ["available", "hire", "looking for job", "open to work", "freelance", "opportunity"],
// //     answer: "✅ Thomas is open to:\n• Full-time Developer roles\n• Freelance projects\n• Remote collaborations\n\n📧 thomasjose22@gmail.com\n💼 linkedin.com/in/thomas-jose-98b97b220"
// //   },
// // ];

// // const SUGGESTIONS = ["About Thomas", "Skills", "Projects", "Experience", "Certifications", "Contact"];

// // function getBotResponse(input: string): string {
// //   const q = input.toLowerCase().trim();
// //   for (const entry of KB) {
// //     if (entry.patterns.some((p) => q.includes(p))) return entry.answer;
// //   }
// //   if (q.match(/^(hi|hello|hey|howdy)/)) {
// //     return "👋 Hello! I'm Thomas Jose's portfolio assistant.\n\nAsk me about his skills, projects, experience, or how to get in touch!";
// //   }
// //   if (q.includes("thank")) return "You're welcome! 😊 Feel free to ask anything else.";
// //   return "🤔 I'm not sure about that.\n\nYou can ask me about:\n• Skills & Technologies\n• Work Experience\n• Projects\n• Education\n• Certifications\n• Contact Information";
// // }

// // // ── Types ────────────────────────────────────────────────────────
// // interface Message {
// //   id: number;
// //   role: "user" | "bot";
// //   text: string;
// //   time: string;
// // }

// // // ── Bot Avatar ───────────────────────────────────────────────────
// // // Tries multiple common paths; falls back to styled initials
// // const PHOTO_PATHS = [
// //   "/assets/photo.jpg",
// //   "/public/assets/photo.jpg",
// //   "./assets/photo.jpg",
// //   "assets/photo.jpg",
// // ];

// // const BotAvatar = ({ size = "sm" }: { size?: "sm" | "md" }) => {
// //   const [imgSrc, setImgSrc] = useState<string | null>(PHOTO_PATHS[0]);
// //   const [pathIdx, setPathIdx] = useState(0);

// //   const handleError = () => {
// //     const next = pathIdx + 1;
// //     if (next < PHOTO_PATHS.length) {
// //       setPathIdx(next);
// //       setImgSrc(PHOTO_PATHS[next]);
// //     } else {
// //       setImgSrc(null); // show initials fallback
// //     }
// //   };

// //   const dim = size === "md" ? "w-11 h-11" : "w-7 h-7";
// //   const fontSize = size === "md" ? "13px" : "9px";

// //   return (
// //     <div
// //       className={`${dim} rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center ring-2 ring-white/30 flex-shrink-0`}
// //       style={!imgSrc ? { background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" } : {}}
// //     >
// //       {imgSrc ? (
// //         <img
// //           key={imgSrc}
// //           src={imgSrc}
// //           alt="Thomas Jose"
// //           className="w-full h-full object-cover object-center"
// //           onError={handleError}
// //         />
// //       ) : (
// //         <span style={{ color: "white", fontSize, fontWeight: 700, lineHeight: 1 }}>TJ</span>
// //       )}
// //     </div>
// //   );
// // };

// // // ── Launcher Button (floating circle with photo) ─────────────────
// // const LauncherButton = ({ open, onToggle }: { open: boolean; onToggle: () => void }) => {
// //   const [imgSrc, setImgSrc] = useState<string | null>(PHOTO_PATHS[0]);
// //   const [pathIdx, setPathIdx] = useState(0);

// //   const handleError = () => {
// //     const next = pathIdx + 1;
// //     if (next < PHOTO_PATHS.length) {
// //       setPathIdx(next);
// //       setImgSrc(PHOTO_PATHS[next]);
// //     } else {
// //       setImgSrc(null);
// //     }
// //   };

// //   return (
// //     <button
// //       onClick={onToggle}
// //       aria-label="Toggle chatbot"
// //       className="relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
// //       style={{ background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" }}
// //     >
// //       {open ? (
// //         <X className="w-6 h-6 text-white relative z-10" />
// //       ) : imgSrc ? (
// //         <img
// //           key={imgSrc}
// //           src={imgSrc}
// //           alt="Thomas"
// //           className="w-full h-full object-cover object-center"
// //           onError={handleError}
// //         />
// //       ) : (
// //         <span style={{ color: "white", fontWeight: 700, fontSize: "15px" }}>TJ</span>
// //       )}
// //       {!open && (
// //         <span
// //           className="absolute inset-0 rounded-full"
// //           style={{
// //             animation: "ping-slow 2s cubic-bezier(0,0,0.2,1) infinite",
// //             background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
// //             opacity: 0.3,
// //           }}
// //         />
// //       )}
// //     </button>
// //   );
// // };


// // const Chatbot = () => {
// //   const [open, setOpen] = useState(false);
// //   const [fullscreen, setFullscreen] = useState(false);
// //   const [showBadge, setShowBadge] = useState(true);
// //   const [messages, setMessages] = useState<Message[]>([
// //     {
// //       id: 0,
// //       role: "bot",
// //       text: "👋 Hi there! I'm Thomas's portfolio assistant.\n\nAsk me anything about his skills, projects, experience, or how to get in touch!",
// //       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
// //     },
// //   ]);
// //   const [input, setInput] = useState("");
// //   const [isTyping, setIsTyping] = useState(false);
// //   const endRef = useRef<HTMLDivElement>(null);
// //   const inputRef = useRef<HTMLInputElement>(null);

// //   useEffect(() => {
// //     if (open) {
// //       endRef.current?.scrollIntoView({ behavior: "smooth" });
// //       setTimeout(() => inputRef.current?.focus(), 300);
// //       setShowBadge(false);
// //     }
// //   }, [messages, open]);

// //   // Close fullscreen with Escape key
// //   useEffect(() => {
// //     const handleKeyDown = (e: KeyboardEvent) => {
// //       if (e.key === "Escape" && fullscreen) setFullscreen(false);
// //     };
// //     window.addEventListener("keydown", handleKeyDown);
// //     return () => window.removeEventListener("keydown", handleKeyDown);
// //   }, [fullscreen]);

// //   const send = (text: string) => {
// //     const trimmed = text.trim();
// //     if (!trimmed) return;
// //     const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// //     setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: trimmed, time }]);
// //     setInput("");
// //     setIsTyping(true);
// //     setTimeout(() => {
// //       setMessages((prev) => [...prev, { id: Date.now() + 1, role: "bot", text: getBotResponse(trimmed), time }]);
// //       setIsTyping(false);
// //     }, 700 + Math.random() * 400);
// //   };

// //   // ── Fullscreen Overlay ──────────────────────────────────────────
// //   const ChatWindow = () => (
// //     <div
// //       className="flex flex-col overflow-hidden"
// //       style={
// //         fullscreen
// //           ? {
// //               position: "fixed",
// //               inset: 0,
// //               zIndex: 9999,
// //               borderRadius: 0,
// //               background: "rgba(255,255,255,0.98)",
// //               boxShadow: "none",
// //             }
// //           : {
// //               height: "clamp(420px, 60vh, 560px)",
// //               borderRadius: "1rem",
// //               background: "rgba(255,255,255,0.97)",
// //               boxShadow: "0 25px 60px rgba(0,0,0,0.18), 0 8px 24px rgba(59,130,246,0.15)",
// //               border: "1px solid rgba(255,255,255,0.2)",
// //             }
// //       }
// //       style2={{ backdropFilter: "blur(16px)" }}
// //     >
// //       {/* ── Header ── */}
// //       <div
// //         className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
// //         style={{ background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" }}
// //       >
// //         {/* Bot photo avatar */}
// //         <BotAvatar size="md" />

// //         <div className="flex-1 min-w-0">
// //           <p className="text-white font-semibold text-sm leading-tight">Portfolio Assistant</p>
// //           <div className="flex items-center gap-1.5 mt-0.5">
// //             <span
// //               className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
// //               style={{ animation: "pulse 2s infinite" }}
// //             />
// //             <p className="text-blue-100 text-xs">Online · Thomas Jose</p>
// //           </div>
// //         </div>

// //         {/* Expand / Compress button */}
// //         <button
// //           onClick={() => setFullscreen((v) => !v)}
// //           title={fullscreen ? "Exit fullscreen" : "Expand to fullscreen"}
// //           className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors mr-1"
// //         >
// //           {fullscreen ? (
// //             <Minimize2 className="w-4 h-4 text-white" />
// //           ) : (
// //             <Maximize2 className="w-4 h-4 text-white" />
// //           )}
// //         </button>

// //         {/* Close button */}
// //         <button
// //           onClick={() => { setOpen(false); setFullscreen(false); }}
// //           className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
// //         >
// //           <X className="w-4 h-4 text-white" />
// //         </button>
// //       </div>

// //       {/* ── Messages ── */}
// //       <div
// //         className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
// //         style={{ background: "linear-gradient(180deg, #f8faff 0%, #f3f4f6 100%)" }}
// //       >
// //         {messages.map((msg) => (
// //           <div
// //             key={msg.id}
// //             className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
// //             style={{ animation: "fadeSlideIn 0.3s ease forwards" }}
// //           >
// //             {/* Avatar */}
// //             {msg.role === "bot" ? (
// //               <BotAvatar size="sm" />
// //             ) : (
// //               <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center flex-shrink-0">
// //                 <User className="w-4 h-4 text-white" />
// //               </div>
// //             )}

// //             <div className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}
// //               style={{ maxWidth: fullscreen ? "60%" : "80%" }}
// //             >
// //               <div
// //                 className="px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
// //                 style={
// //                   msg.role === "user"
// //                     ? {
// //                         background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
// //                         color: "#fff",
// //                         borderBottomRightRadius: 4,
// //                       }
// //                     : {
// //                         background: "#fff",
// //                         color: "#1f2937",
// //                         borderBottomLeftRadius: 4,
// //                         border: "1px solid #e5e7eb",
// //                         boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
// //                       }
// //                 }
// //               >
// //                 {msg.text}
// //               </div>
// //               <span className="text-xs text-gray-400 px-1">{msg.time}</span>
// //             </div>
// //           </div>
// //         ))}

// //         {isTyping && (
// //           <div className="flex items-end gap-2">
// //             <BotAvatar size="sm" />
// //             <div
// //               className="px-4 py-3 rounded-2xl bg-white border border-gray-200"
// //               style={{ borderBottomLeftRadius: 4 }}
// //             >
// //               <div className="flex gap-1">
// //                 {[0, 1, 2].map((i) => (
// //                   <span
// //                     key={i}
// //                     className="w-2 h-2 bg-blue-400 rounded-full"
// //                     style={{ animation: `typingDot 1.2s ${i * 0.2}s infinite` }}
// //                   />
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //         <div ref={endRef} />
// //       </div>

// //       {/* ── Suggestions ── */}
// //       <div
// //         className="flex gap-2 px-4 py-2 overflow-x-auto flex-shrink-0 border-t border-gray-100"
// //         style={{ scrollbarWidth: "none", background: "#fafbff" }}
// //       >
// //         {SUGGESTIONS.map((s) => (
// //           <button
// //             key={s}
// //             onClick={() => send(s)}
// //             className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95"
// //             style={{ borderColor: "#c7d7fe", color: "#3b5bdb", background: "#eef2ff" }}
// //           >
// //             {s}
// //           </button>
// //         ))}
// //       </div>

// //       {/* ── Input ── */}
// //       <div className="flex items-center gap-2 px-3 py-3 flex-shrink-0 border-t border-gray-100 bg-white">
// //         <input
// //           ref={inputRef}
// //           type="text"
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           onKeyDown={(e) => {
// //             if (e.key === "Enter" && !e.shiftKey) {
// //               e.preventDefault();
// //               send(input);
// //             }
// //           }}
// //           placeholder="Ask me anything..."
// //           className="flex-1 text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder-gray-400"
// //         />
// //         <button
// //           onClick={() => send(input)}
// //           disabled={!input.trim()}
// //           className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
// //           style={{
// //             background: input.trim()
// //               ? "linear-gradient(135deg,#3b82f6,#8b5cf6)"
// //               : "#e5e7eb",
// //           }}
// //         >
// //           <Send className="w-4 h-4 text-white" />
// //         </button>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <>
// //       {/* ── Floating launch button + tooltip ── */}
// //       <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
// //         {!open && showBadge && (
// //           <div
// //             onClick={() => setOpen(true)}
// //             className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm px-4 py-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer select-none"
// //             style={{ animation: "fadeSlideIn 0.5s ease forwards" }}
// //           >
// //             💬 Ask me anything!
// //           </div>
// //         )}

// //         <LauncherButton open={open} onToggle={() => setOpen((v) => !v)} />
// //       </div>

// //       {/* ── Normal (non-fullscreen) chat window ── */}
// //       {!fullscreen && (
// //         <div
// //           className="fixed z-50"
// //           style={{
// //             bottom: "8rem",
// //             right: "1.5rem",
// //             width: "clamp(320px, 90vw, 420px)",
// //             opacity: open ? 1 : 0,
// //             transform: open ? "scale(1) translateY(0)" : "scale(0.9) translateY(20px)",
// //             pointerEvents: open ? "auto" : "none",
// //             transformOrigin: "bottom right",
// //             transition: "opacity 0.3s ease, transform 0.3s ease",
// //           }}
// //         >
// //           <ChatWindow />
// //         </div>
// //       )}

// //       {/* ── Fullscreen overlay ── */}
// //       {fullscreen && open && <ChatWindow />}
// //     </>
// //   );
// // };

// // // ── Main Contact Component ───────────────────────────────────────
// // const Contact = () => {
// //   const { toast } = useToast();
// //   const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
// //   const [isVisible, setIsVisible] = useState(false);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     const emailSubject = encodeURIComponent(formData.subject || "Contact Form Message");
// //     const emailBody = encodeURIComponent(
// //       `Hello Thomas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
// //     );
// //     window.location.href = `mailto:thomasjose22@gmail.com?subject=${emailSubject}&body=${emailBody}`;
// //     toast({ title: "Opening Email Client", description: "Your email client will open with the message pre-filled." });
// //   };

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// //   };

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
// //       { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
// //     );
// //     const section = document.getElementById("contact");
// //     if (section) observer.observe(section);
// //     return () => { if (section) observer.unobserve(section); };
// //   }, []);

// //   const contactInfo = [
// //     { icon: Mail,     label: "Email",    value: "thomasjose22@gmail.com",            href: "mailto:thomasjose22@gmail.com",                      color: "text-blue-600"  },
// //     { icon: Phone,    label: "Phone",    value: "+91 8304909105",                     href: "tel:+918304909105",                                   color: "text-green-600" },
// //     { icon: Github,   label: "GitHub",   value: "Thomasjose-tech",                    href: "https://github.com/Thomasjose-tech",                  color: "text-gray-800"  },
// //     { icon: Linkedin, label: "LinkedIn", value: "thomas-jose-98b97b220",             href: "https://www.linkedin.com/in/thomas-jose-98b97b220",   color: "text-blue-700"  },
// //   ];

// //   return (
// //     <section id="contact" className="py-20 px-0 md:px-4 bg-muted/30 relative">
// //       <div className="container mx-auto px-0 md:px-4">
// //         {/* Heading */}
// //         <div className={`text-center mb-16 transition-opacity duration-300 px-4 md:px-0 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
// //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
// //           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
// //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// //             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
// //           </p>
// //         </div>

// //         <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
// //           {/* Contact Info */}
// //           <div className={`space-y-8 px-4 md:px-0 transition-opacity duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: isVisible ? "0.1s" : "0s" }}>
// //             <div>
// //               <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
// //               <p className="text-muted-foreground mb-8 leading-relaxed">
// //                 I'm always excited to discuss new opportunities, innovative projects, or potential collaborations.
// //                 Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
// //               </p>
// //             </div>

// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               {contactInfo.map((contact, index) => (
// //                 <Card
// //                   key={contact.label}
// //                   className={`bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group ${isVisible ? "animate-fade-up" : "opacity-0"}`}
// //                   style={{ animationDelay: isVisible ? `${0.2 + index * 0.1}s` : "0s" }}
// //                 >
// //                   <CardContent className="p-6">
// //                     <a
// //                       href={contact.href}
// //                       target={contact.href.startsWith("http") ? "_blank" : undefined}
// //                       rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
// //                       className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
// //                     >
// //                       <div className={`p-3 rounded-lg bg-primary/10 ${contact.color} group-hover:bg-primary/20 transition-colors duration-300`}>
// //                         <contact.icon size={24} />
// //                       </div>
// //                       <div>
// //                         <p className="font-semibold text-primary">{contact.label}</p>
// //                         <p className="text-muted-foreground text-sm">{contact.value}</p>
// //                       </div>
// //                     </a>
// //                   </CardContent>
// //                 </Card>
// //               ))}
// //             </div>

// //             <Card
// //               className={`bg-gradient-card shadow-elegant border-0 transition-opacity duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
// //               style={{ animationDelay: isVisible ? "0.6s" : "0s" }}
// //             >
// //               <CardContent className="p-6">
// //                 <div className="flex items-center gap-4">
// //                   <div className="p-3 rounded-lg bg-primary/10 text-red-600">
// //                     <MapPin size={24} />
// //                   </div>
// //                   <div>
// //                     <p className="font-semibold text-primary">Location</p>
// //                     <p className="text-muted-foreground">Kerala, India</p>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Contact Form */}
// //           <div
// //             className={`px-4 md:px-0 transition-opacity duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
// //             style={{ animationDelay: isVisible ? "0.3s" : "0s" }}
// //           >
// //             <Card className="bg-gradient-card shadow-elegant border-0">
// //               <CardHeader>
// //                 <CardTitle className="text-2xl">Send Me a Message</CardTitle>
// //                 <CardDescription className="text-base">
// //                   Fill out the form below and I'll get back to you as soon as possible.
// //                 </CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <form onSubmit={handleSubmit} className="space-y-6">
// //                   <div className="grid sm:grid-cols-2 gap-4">
// //                     <div className="space-y-2">
// //                       <Label htmlFor="name">Name</Label>
// //                       <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required className="bg-background/50 border-primary/20 focus:border-primary" />
// //                     </div>
// //                     <div className="space-y-2">
// //                       <Label htmlFor="email">Email</Label>
// //                       <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="bg-background/50 border-primary/20 focus:border-primary" />
// //                     </div>
// //                   </div>
// //                   <div className="space-y-2">
// //                     <Label htmlFor="subject">Subject</Label>
// //                     <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required className="bg-background/50 border-primary/20 focus:border-primary" />
// //                   </div>
// //                   <div className="space-y-2">
// //                     <Label htmlFor="message">Message</Label>
// //                     <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or idea..." rows={5} required className="bg-background/50 border-primary/20 focus:border-primary resize-none" />
// //                   </div>
// //                   <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-glow" size="lg">
// //                     <Send size={20} className="mr-2" />
// //                     Send Message
// //                   </Button>
// //                 </form>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>

// //         {/* Footer spacer */}
// //         <div
// //           className={`text-center mt-16 pt-8 border-t border-border px-4 md:px-0 transition-opacity duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
// //           style={{ animationDelay: isVisible ? "0.7s" : "0s" }}
// //         />
// //       </div>

// //       {/* WhatsApp Floating Button */}
// //       <a
// //         href="https://wa.me/918304909105"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="fixed bottom-6 right-6 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
// //         title="Chat on WhatsApp"
// //       >
// //         <img src="/lovable-uploads/WhatsApp-icone.png" alt="WhatsApp" className="w-8 h-8" />
// //       </a>

// //       {/* ── Chatbot ── */}
// //       <Chatbot />
// //     </section>
// //   );
// // };

// // export default Contact;
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle, X, Bot, User, Minimize2 } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// import { useToast } from "@/hooks/use-toast";

// // ── Animation styles ─────────────────────────────────────────────
// const globalStyles = `
//   @keyframes fadeUp {
//     from { opacity: 0; transform: translateY(30px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
//   @keyframes ping-slow {
//     0%        { transform: scale(1); opacity: 0.3; }
//     75%, 100% { transform: scale(2); opacity: 0; }
//   }
//   @keyframes typingDot {
//     0%, 60%, 100% { transform: translateY(0);   opacity: 0.4; }
//     30%           { transform: translateY(-6px); opacity: 1; }
//   }
//   @keyframes fadeSlideIn {
//     from { opacity: 0; transform: translateY(10px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
// `;

// if (typeof document !== "undefined") {
//   if (!document.getElementById("portfolio-chatbot-styles")) {
//     const tag = document.createElement("style");
//     tag.id = "portfolio-chatbot-styles";
//     tag.textContent = globalStyles;
//     document.head.appendChild(tag);
//   }
// }

// // ── Knowledge Base ───────────────────────────────────────────────
// const KB = [
//   {
//     patterns: ["who are you", "what is your name", "tell me about yourself", "introduce yourself", "about thomas", "who is thomas"],
//     answer: "Hi! I'm Thomas Jose's portfolio assistant 🤖\n\nThomas is a Web Developer with 6 months of professional experience at Webgeon Results. He specialises in React, Next.js, and Tailwind CSS, and is passionate about building responsive, user-centric web applications."
//   },
//   {
//     patterns: ["professional summary", "summary", "bio", "background", "overview"],
//     answer: "📋 Professional Summary\n\nThomas Jose is a Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js.\n\nHe writes clean, maintainable code and delivers user-centric solutions, with a strong focus on performance, accessibility, and modern web standards."
//   },
//   {
//     patterns: ["strengths", "key strengths", "what makes you good", "qualities"],
//     answer: "💪 Key Strengths\n\n• Decision-making skills and team leadership\n• Performance optimisation and accessibility focus\n• Clean, maintainable code practices\n• Timely project delivery\n• Continuous learning and adaptation to new technologies\n• User experience optimisation and responsive design"
//   },
//   {
//     patterns: ["philosophy", "approach", "mindset", "user-first", "development philosophy"],
//     answer: "💡 Development Philosophy\n\nThomas approaches every project with a user-first mindset, ensuring technical excellence translates into intuitive and engaging user experiences. His goal is to bridge the gap between complex functionality and seamless usability."
//   },
//   {
//     patterns: ["skills", "technologies", "tech stack", "what do you know", "programming languages", "languages"],
//     answer: "🛠️ Skills & Technologies\n\n📌 Languages: Python 🐍, JavaScript ⚡, HTML 🌐, CSS 🎨\n\n⚛️ Frameworks: Next.js, React, Tailwind CSS\n\n🗄️ Databases: MongoDB, MySQL\n\n🔧 Tools: VS Code, Eclipse, Postman\n\n🤝 Soft Skills: Team Leadership, Decision Making, API Testing, REST API Validation"
//   },
//   {
//     patterns: ["react", "nextjs", "next.js", "tailwind", "frontend"],
//     answer: "⚛️ Frontend Skills\n\nThomas is proficient in:\n• React – component-driven UI development\n• Next.js – server-side rendering & full-stack React\n• Tailwind CSS – utility-first responsive styling\n\nHe used these daily at Webgeon Results to build adaptive, high-performance web applications."
//   },
//   {
//     patterns: ["database", "mongodb", "mysql", "data"],
//     answer: "🗄️ Database Skills\n\n• MongoDB – flexible, document-based data storage\n• MySQL – structured relational data\n\nThomas applied both at Webgeon Results to manage different types of application data."
//   },
//   {
//     patterns: ["experience", "work experience", "job", "webgeon", "current job", "where do you work"],
//     answer: "💼 Professional Experience\n\n🏢 Web Developer — Webgeon Results\n📅 Dec 2023 – Present | Full-time\n\n• Built adaptive UIs with Next.js, Tailwind CSS & JavaScript\n• Optimised front-end performance and UX\n• API testing & integration using Postman\n• Managed data with MongoDB and MySQL\n• Active in team decision-making\n• Leading development of a Gym Management Software"
//   },
//   {
//     patterns: ["internship", "intern", "nextgen", "techmogul", "embedded", "python full stack"],
//     answer: "🎓 Internship Experience\n\n1️⃣ Embedded Systems Intern — Next Gen Pro\n📅 May 2023 – May 2024\n• Arduino UNO, circuit design, sensor interfacing & automation\n\n2️⃣ Python Full Stack Development Intern — TechMogul\n📅 Jun 2024\n• Built a dynamic blog app using Python, HTML, CSS, JavaScript"
//   },
//   {
//     patterns: ["education", "college", "degree", "university", "fisat", "btech", "b.tech", "school", "cgpa", "academic"],
//     answer: "🎓 Education\n\n🏫 B.Tech — Electronics & Communication Engineering\n📍 FISAT, Kerala | 📅 Aug 2021 – Apr 2025 | CGPA: 7.45\n\n🏫 Senior Secondary (CBSE)\n📍 Vijayagiri Public School, Kerala | 📅 Jun 2019 – Feb 2021 | Score: 87%"
//   },
//   {
//     patterns: ["projects", "what have you built", "portfolio projects", "show me your work"],
//     answer: "🚀 Featured Projects\n\n1. 🐾 Smart Pet Feeder – IoT automated feeding + remote monitoring\n2. 🤖 Agriculture Robot – multi-task farming automation\n3. 🌍 Cross-Language Craft – real-time translation app (Live)\n4. 💰 Financuz Nexus – financial management dashboard (Live)\n5. ⌚ Chronos – luxury watch e-commerce UI (Live)\n\nAsk me about any specific project!"
//   },
//   {
//     patterns: ["smart pet feeder", "pet feeder", "pet project"],
//     answer: "🐾 Smart Pet Feeder\n📅 Aug 2023 – Jan 2024 | Hardware & Software\n\n• Automated food dispensing at scheduled intervals\n• Web dashboard for real-time remote monitoring\n• Reduced feeding inconsistencies by 85%\n\n🔧 Tech: IoT, Web Dashboard, Automation\n🔗 github.com/Thomasjose-tech/Smart-Pet-Feeder"
//   },
//   {
//     patterns: ["agriculture robot", "farming robot", "robot project", "multipurpose"],
//     answer: "🤖 Multipurpose Agriculture Robot\n📅 Mar 2024 – Feb 2025 | Analytics & IoT\n\n• Soil monitoring, seed sowing & spraying automation\n• Remote operation and monitoring\n• Increased farming efficiency by 60%, reduced labour costs by 45%\n\n🔧 Tech: Robotics, IoT Sensors, Embedded Systems"
//   },
//   {
//     patterns: ["cross language", "translation", "language craft", "translator"],
//     answer: "🌍 Cross-Language Craft\n📅 2024 | Frontend Development\n\n• Real-time multi-language translation\n• Responsive design for all devices\n\n🔧 Tech: React, Translation API, Responsive Design\n🔗 cross-language-craft-26011.vercel.app"
//   },
//   {
//     patterns: ["financuz", "finance", "financial", "budget", "expense"],
//     answer: "💰 Financuz Nexus\n📅 2024 | Frontend Development\n\n• Financial dashboard with expense tracking\n• Budget planning and analysis tools\n\n🔧 Tech: React, Data Visualisation, State Management\n🔗 financuz-nexus-01.vercel.app"
//   },
//   {
//     patterns: ["chronos", "watch", "luxury", "timepiece", "ecommerce"],
//     answer: "⌚ Chronos — Luxury Timepieces\n📅 2024 | Frontend Development\n\n• Premium product showcase with smooth animations\n• Intuitive navigation and product filtering\n\n🔧 Tech: React, E-commerce UI, Animation\n🔗 chronos-luxury-timepieces.vercel.app"
//   },
//   {
//     patterns: ["certification", "certificate", "certifications", "achievements", "award"],
//     answer: "🏆 Certifications\n\n1. 🏢 Web Developer Intern — Webgeon Results (Jan–Jul 2025)\n2. ☁️ Microsoft Azure for Data Engineering — Coursera\n3. 🇬🇧 EF SET English Certificate — C1 Advanced (66/100)\n4. 🎓 TechMaghi Certificate — 2024\n5. 🚀 NextGen Pro Certificate — 2024\n6. 📊 Microsoft Excel — Coursera\n7. 🔬 CMOS Digital VLSI Design — NPTEL/IIT Roorkee"
//   },
//   {
//     patterns: ["contact", "email", "phone", "reach", "hire", "get in touch", "connect", "linkedin", "github", "whatsapp"],
//     answer: "📬 Contact Thomas Jose\n\n📧 thomasjose22@gmail.com\n📱 +91 8304909105\n💬 wa.me/918304909105\n🐙 github.com/Thomasjose-tech\n💼 linkedin.com/in/thomas-jose-98b97b220\n📍 Kerala, India"
//   },
//   {
//     patterns: ["location", "where are you", "where do you live", "india", "kerala"],
//     answer: "📍 Thomas is based in Kerala, India.\n\nHe is open to remote work and collaboration opportunities globally!"
//   },
//   {
//     patterns: ["gym", "gym management", "current project", "ongoing"],
//     answer: "🏋️ Current Project — Gym Management Software\n\nLeading development at Webgeon Results:\n• Member tracking system\n• Payment history management\n• Admin dashboards\n\n🔧 Tech: Next.js, React, Tailwind CSS, MongoDB"
//   },
//   {
//     patterns: ["available", "hire", "looking for job", "open to work", "freelance", "opportunity"],
//     answer: "✅ Thomas is open to:\n• Full-time Developer roles\n• Freelance projects\n• Remote collaborations\n\n📧 thomasjose22@gmail.com\n💼 linkedin.com/in/thomas-jose-98b97b220"
//   },
// ];

// const SUGGESTIONS = ["About Thomas", "Skills", "Projects", "Experience", "Certifications", "Contact"];

// function getBotResponse(input: string): string {
//   const q = input.toLowerCase().trim();
//   for (const entry of KB) {
//     if (entry.patterns.some((p) => q.includes(p))) return entry.answer;
//   }
//   if (q.match(/^(hi|hello|hey|howdy)/)) {
//     return "👋 Hello! I'm Thomas Jose's portfolio assistant.\n\nAsk me about his skills, projects, experience, or how to get in touch!";
//   }
//   if (q.includes("thank")) return "You're welcome! 😊 Feel free to ask anything else.";
//   return "🤔 I'm not sure about that.\n\nYou can ask me about:\n• Skills & Technologies\n• Work Experience\n• Projects\n• Education\n• Certifications\n• Contact Information";
// }

// // ── Dark-mode detector hook ──────────────────────────────────────
// function useDarkMode(): boolean {
//   const [dark, setDark] = useState(
//     () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
//   );
//   useEffect(() => {
//     const el = document.documentElement;
//     const obs = new MutationObserver(() => setDark(el.classList.contains("dark")));
//     obs.observe(el, { attributes: true, attributeFilter: ["class"] });
//     return () => obs.disconnect();
//   }, []);
//   return dark;
// }

// // ── Types ────────────────────────────────────────────────────────
// interface Message {
//   id: number;
//   role: "user" | "bot";
//   text: string;
//   time: string;
// }

// // ── Chatbot component ────────────────────────────────────────────
// const Chatbot = () => {
//   const dark = useDarkMode();

//   // All colors derived from dark mode state — inline styles react instantly
//   const c = {
//     // Window shell
//     windowBg:      dark ? "rgba(15,23,42,0.98)"  : "rgba(255,255,255,0.98)",
//     windowBorder:  dark ? "#1e293b"              : "rgba(200,210,255,0.4)",
//     windowShadow:  dark
//       ? "0 25px 60px rgba(0,0,0,0.75),0 8px 24px rgba(59,130,246,0.3)"
//       : "0 25px 60px rgba(0,0,0,0.16),0 8px 24px rgba(59,130,246,0.14)",
//     // Message area
//     msgBg:         dark ? "linear-gradient(180deg,#0f172a 0%,#1e293b 100%)"
//                         : "linear-gradient(180deg,#f8faff 0%,#f2f4f8 100%)",
//     // Bot bubble
//     botBg:         dark ? "#1e293b" : "#ffffff",
//     botTxt:        dark ? "#e2e8f0" : "#1f2937",
//     botBorder:     dark ? "1px solid #334155" : "1px solid #e5e7eb",
//     botShadow:     dark ? "0 2px 8px rgba(0,0,0,0.4)" : "0 1px 4px rgba(0,0,0,0.06)",
//     // Timestamps
//     timeTxt:       dark ? "#64748b" : "#9ca3af",
//     // Suggestions row
//     chipRowBg:     dark ? "#0f172a" : "#f5f7ff",
//     chipRowBorder: dark ? "1px solid #1e293b" : "1px solid #e8ecf4",
//     chipBg:        dark ? "#1e293b" : "#eef2ff",
//     chipBorder:    dark ? "#334155" : "#c7d7fe",
//     chipTxt:       dark ? "#93c5fd" : "#3b5bdb",
//     // Input row
//     inputRowBg:    dark ? "#0f172a" : "#ffffff",
//     inputRowBdr:   dark ? "1px solid #1e293b" : "1px solid #eff0f6",
//     inputBg:       dark ? "#1e293b" : "#f9fafb",
//     inputBdr:      dark ? "#334155" : "#e5e7eb",
//     inputTxt:      dark ? "#e2e8f0" : "#111827",
//     sendDisabled:  dark ? "#1e293b" : "#e5e7eb",
//     // Badge tooltip
//     badgeBg:       dark ? "#1e293b" : "#ffffff",
//     badgeBdr:      dark ? "#334155" : "#e5e7eb",
//     badgeTxt:      dark ? "#e2e8f0" : "#374151",
//   };

//   const [open, setOpen] = useState(false);
//   const [showBadge, setShowBadge] = useState(true);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: 0,
//       role: "bot",
//       text: "👋 Hi there! I'm Thomas's portfolio assistant.\n\nAsk me anything about his skills, projects, experience, or how to get in touch!",
//       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const endRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (open) {
//       setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 60);
//       setTimeout(() => inputRef.current?.focus(), 320);
//       setShowBadge(false);
//     }
//   }, [messages, open]);

//   const send = (text: string) => {
//     const trimmed = text.trim();
//     if (!trimmed) return;
//     const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//     setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: trimmed, time }]);
//     setInput("");
//     setIsTyping(true);
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, role: "bot", text: getBotResponse(trimmed), time },
//       ]);
//       setIsTyping(false);
//     }, 700 + Math.random() * 400);
//   };

//   return (
//     <>
//       {/* ── Launcher ─────────────────────────────────────── */}
//       <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
//         {!open && showBadge && (
//           <div
//             onClick={() => setOpen(true)}
//             className="text-sm px-4 py-2 rounded-2xl shadow-lg cursor-pointer select-none"
//             style={{
//               animation: "fadeSlideIn 0.5s ease forwards",
//               background: c.badgeBg,
//               color: c.badgeTxt,
//               border: `1px solid ${c.badgeBdr}`,
//             }}
//           >
//             💬 Ask me anything!
//           </div>
//         )}

//         <button
//           onClick={() => setOpen((v) => !v)}
//           aria-label="Toggle chatbot"
//           className="relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
//           style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
//         >
//           {open ? (
//             <X className="w-6 h-6 text-white" />
//           ) : (
//             <MessageCircle className="w-6 h-6 text-white" />
//           )}
//           {!open && (
//             <span
//               className="absolute inset-0 rounded-full"
//               style={{
//                 animation: "ping-slow 2s cubic-bezier(0,0,0.2,1) infinite",
//                 background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
//                 opacity: 0.35,
//               }}
//             />
//           )}
//         </button>
//       </div>

//       {/* ── Chat window ──────────────────────────────────── */}
//       <div
//         className="fixed z-50"
//         style={{
//           bottom: "8rem",
//           right: "1.5rem",
//           width: "clamp(320px, 90vw, 420px)",
//           opacity: open ? 1 : 0,
//           transform: open ? "scale(1) translateY(0)" : "scale(0.92) translateY(20px)",
//           pointerEvents: open ? "auto" : "none",
//           transformOrigin: "bottom right",
//           transition: "opacity 0.3s ease, transform 0.3s ease",
//         }}
//       >
//         <div
//           className="flex flex-col rounded-2xl overflow-hidden"
//           style={{
//             height: "clamp(440px, 62vh, 580px)",
//             background: c.windowBg,
//             border: `1px solid ${c.windowBorder}`,
//             boxShadow: c.windowShadow,
//             backdropFilter: "blur(20px)",
//           }}
//         >
//           {/* Header — always gradient */}
//           <div
//             className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
//             style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
//           >
//             <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
//               <Bot className="w-5 h-5 text-white" />
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-white font-semibold text-sm leading-tight">Portfolio Assistant</p>
//               <div className="flex items-center gap-1.5 mt-0.5">
//                 <span
//                   className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
//                   style={{ animation: "pulse 2s infinite" }}
//                 />
//                 <p className="text-blue-100 text-xs">Online · Thomas Jose</p>
//               </div>
//             </div>
//             <button
//               onClick={() => setOpen(false)}
//               className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
//             >
//               <Minimize2 className="w-4 h-4 text-white" />
//             </button>
//           </div>

//           {/* Messages */}
//           <div
//             className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
//             style={{ background: c.msgBg }}
//           >
//             {messages.map((msg) => (
//               <div
//                 key={msg.id}
//                 className={`flex items-end gap-2 ${
//                   msg.role === "user" ? "flex-row-reverse" : "flex-row"
//                 }`}
//               >
//                 {/* Avatar */}
//                 <div
//                   className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
//                     msg.role === "bot"
//                       ? "bg-gradient-to-br from-blue-500 to-purple-600"
//                       : "bg-gradient-to-br from-slate-500 to-slate-700"
//                   }`}
//                 >
//                   {msg.role === "bot" ? (
//                     <Bot className="w-4 h-4 text-white" />
//                   ) : (
//                     <User className="w-4 h-4 text-white" />
//                   )}
//                 </div>

//                 {/* Bubble */}
//                 <div
//                   className={`max-w-[80%] flex flex-col gap-1 ${
//                     msg.role === "user" ? "items-end" : "items-start"
//                   }`}
//                 >
//                   <div
//                     className="px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap rounded-2xl"
//                     style={
//                       msg.role === "user"
//                         ? {
//                             background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
//                             color: "#ffffff",
//                             borderBottomRightRadius: 4,
//                           }
//                         : {
//                             background: c.botBg,
//                             color: c.botTxt,
//                             border: c.botBorder,
//                             borderBottomLeftRadius: 4,
//                             boxShadow: c.botShadow,
//                           }
//                     }
//                   >
//                     {msg.text}
//                   </div>
//                   <span className="text-xs px-1" style={{ color: c.timeTxt }}>
//                     {msg.time}
//                   </span>
//                 </div>
//               </div>
//             ))}

//             {/* Typing indicator */}
//             {isTyping && (
//               <div className="flex items-end gap-2">
//                 <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
//                   <Bot className="w-4 h-4 text-white" />
//                 </div>
//                 <div
//                   className="px-4 py-3 rounded-2xl"
//                   style={{
//                     background: c.botBg,
//                     border: c.botBorder,
//                     borderBottomLeftRadius: 4,
//                   }}
//                 >
//                   <div className="flex gap-1 items-center">
//                     {[0, 1, 2].map((i) => (
//                       <span
//                         key={i}
//                         className="w-2 h-2 bg-blue-400 rounded-full"
//                         style={{ animation: `typingDot 1.2s ${i * 0.2}s infinite` }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={endRef} />
//           </div>

//           {/* Suggestion chips */}
//           <div
//             className="flex gap-2 px-4 py-2 overflow-x-auto flex-shrink-0"
//             style={{
//               scrollbarWidth: "none",
//               background: c.chipRowBg,
//               borderTop: c.chipRowBorder,
//             }}
//           >
//             {SUGGESTIONS.map((s) => (
//               <button
//                 key={s}
//                 onClick={() => send(s)}
//                 className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95"
//                 style={{
//                   background: c.chipBg,
//                   border: `1px solid ${c.chipBorder}`,
//                   color: c.chipTxt,
//                 }}
//               >
//                 {s}
//               </button>
//             ))}
//           </div>

//           {/* Input */}
//           <div
//             className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
//             style={{ background: c.inputRowBg, borderTop: c.inputRowBdr }}
//           >
//             <input
//               ref={inputRef}
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" && !e.shiftKey) {
//                   e.preventDefault();
//                   send(input);
//                 }
//               }}
//               placeholder="Ask me anything..."
//               className="flex-1 text-sm px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               style={{
//                 background: c.inputBg,
//                 border: `1px solid ${c.inputBdr}`,
//                 color: c.inputTxt,
//               }}
//             />
//             <button
//               onClick={() => send(input)}
//               disabled={!input.trim()}
//               className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
//               style={{
//                 background: input.trim()
//                   ? "linear-gradient(135deg,#3b82f6,#8b5cf6)"
//                   : c.sendDisabled,
//               }}
//             >
//               <Send className="w-4 h-4 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // ── Contact Section ──────────────────────────────────────────────
// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
//   const [isVisible, setIsVisible] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const emailSubject = encodeURIComponent(formData.subject || "Contact Form Message");
//     const emailBody = encodeURIComponent(
//       `Hello Thomas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
//     );
//     window.location.href = `mailto:thomasjose22@gmail.com?subject=${emailSubject}&body=${emailBody}`;
//     toast({
//       title: "Opening Email Client",
//       description: "Your email client will open with the message pre-filled.",
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
//       { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
//     );
//     const section = document.getElementById("contact");
//     if (section) observer.observe(section);
//     return () => { if (section) observer.unobserve(section); };
//   }, []);

//   const contactInfo = [
//     { icon: Mail,     label: "Email",    value: "thomasjose22@gmail.com",            href: "mailto:thomasjose22@gmail.com",                     color: "text-blue-600"  },
//     { icon: Phone,    label: "Phone",    value: "+91 8304909105",                     href: "tel:+918304909105",                                 color: "text-green-600" },
//     { icon: Github,   label: "GitHub",   value: "Thomasjose-tech",                    href: "https://github.com/Thomasjose-tech",                color: "text-gray-800"  },
//     { icon: Linkedin, label: "LinkedIn", value: "thomas-jose-98b97b220",             href: "https://www.linkedin.com/in/thomas-jose-98b97b220", color: "text-blue-700"  },
//   ];

//   return (
//     <section id="contact" className="py-20 px-0 md:px-4 bg-muted/30 relative">
//       <div className="container mx-auto px-0 md:px-4">

//         <div className={`text-center mb-16 transition-opacity duration-300 px-4 md:px-0 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
//           <div className="h-1 w-24 bg-primary mx-auto mb-8" />
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">

//           {/* Contact info column */}
//           <div
//             className={`space-y-8 px-4 md:px-0 transition-opacity duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
//             style={{ animationDelay: isVisible ? "0.1s" : "0s" }}
//           >
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
//               <p className="text-muted-foreground mb-8 leading-relaxed">
//                 I'm always excited to discuss new opportunities, innovative projects, or potential collaborations.
//                 Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {contactInfo.map((contact, index) => (
//                 <Card
//                   key={contact.label}
//                   className={`bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group ${isVisible ? "animate-fade-up" : "opacity-0"}`}
//                   style={{ animationDelay: isVisible ? `${0.2 + index * 0.1}s` : "0s" }}
//                 >
//                   <CardContent className="p-6">
//                     <a
//                       href={contact.href}
//                       target={contact.href.startsWith("http") ? "_blank" : undefined}
//                       rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
//                       className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
//                     >
//                       <div className={`p-3 rounded-lg bg-primary/10 ${contact.color} group-hover:bg-primary/20 transition-colors duration-300`}>
//                         <contact.icon size={24} />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-primary">{contact.label}</p>
//                         <p className="text-muted-foreground text-sm">{contact.value}</p>
//                       </div>
//                     </a>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             <Card
//               className={`bg-gradient-card shadow-elegant border-0 transition-opacity duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
//               style={{ animationDelay: isVisible ? "0.6s" : "0s" }}
//             >
//               <CardContent className="p-6">
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 rounded-lg bg-primary/10 text-red-600">
//                     <MapPin size={24} />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-primary">Location</p>
//                     <p className="text-muted-foreground">Kerala, India</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact form column */}
//           <div
//             className={`px-4 md:px-0 transition-opacity duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
//             style={{ animationDelay: isVisible ? "0.3s" : "0s" }}
//           >
//             <Card className="bg-gradient-card shadow-elegant border-0">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Send Me a Message</CardTitle>
//                 <CardDescription className="text-base">
//                   Fill out the form below and I'll get back to you as soon as possible.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Name</Label>
//                       <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required className="bg-background/50 border-primary/20 focus:border-primary" />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="bg-background/50 border-primary/20 focus:border-primary" />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="subject">Subject</Label>
//                     <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required className="bg-background/50 border-primary/20 focus:border-primary" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or idea..." rows={5} required className="bg-background/50 border-primary/20 focus:border-primary resize-none" />
//                   </div>
//                   <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-glow" size="lg">
//                     <Send size={20} className="mr-2" />
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Footer spacer */}
//         <div
//           className={`text-center mt-16 pt-8 border-t border-border px-4 md:px-0 transition-opacity duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
//           style={{ animationDelay: isVisible ? "0.7s" : "0s" }}
//         />
//       </div>

//       {/* WhatsApp button */}
//       <a
//         href="https://wa.me/918304909105"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
//         title="Chat on WhatsApp"
//       >
//         <img src="/lovable-uploads/WhatsApp-icone.png" alt="WhatsApp" className="w-8 h-8" />
//       </a>

//       {/* Chatbot — no Index.tsx changes needed */}
//       <Chatbot />
//     </section>
//   );
// };

// export default Contact;
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle, X, Bot, User, Minimize2, Maximize2 } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// import { useToast } from "@/hooks/use-toast";

// // ── Animation styles ───────────────────────────────────────────────
// const globalStyles = `
// @keyframes fadeUp {
//   from { opacity: 0; transform: translateY(30px); }
//   to   { opacity: 1; transform: translateY(0); }
// }
// .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }

// @keyframes ping-slow {
//   0%        { transform: scale(1);   opacity: 0.3; }
//   75%, 100% { transform: scale(2);   opacity: 0;   }
// }

// @keyframes typingDot {
//   0%, 60%, 100% { transform: translateY(0);   opacity: 0.4; }
//   30%           { transform: translateY(-6px); opacity: 1;   }
// }

// @keyframes fadeSlideIn {
//   from { opacity: 0; transform: translateY(10px); }
//   to   { opacity: 1; transform: translateY(0);    }
// }
// `;

// if (typeof document !== "undefined") {
//   if (!document.getElementById("portfolio-chatbot-styles")) {
//     const tag = document.createElement("style");
//     tag.id = "portfolio-chatbot-styles";
//     tag.textContent = globalStyles;
//     document.head.appendChild(tag);
//   }
// }

// // ── Knowledge Base ─────────────────────────────────────────────────
// const KB = [
//   { patterns: ["who are you", "what is your name", "tell me about yourself", "introduce yourself", "about thomas", "who is thomas"], answer: "Hi! I'm Thomas Jose's portfolio assistant 🤖\n\nThomas is a Web Developer with 6 months of professional experience at Webgeon Results. He specialises in React, Next.js, and Tailwind CSS, and is passionate about building responsive, user-centric web applications." },
//   { patterns: ["professional summary", "summary", "bio", "background", "overview"], answer: "📋 Professional Summary\n\nThomas Jose is a Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js.\n\nHe writes clean, maintainable code and delivers user-centric solutions, with a strong focus on performance, accessibility, and modern web standards." },
//   { patterns: ["strengths", "key strengths", "what makes you good", "qualities"], answer: "💪 Key Strengths\n\n• Decision-making skills and team leadership\n• Performance optimisation and accessibility focus\n• Clean, maintainable code practices\n• Timely project delivery\n• Continuous learning and adaptation to new technologies\n• User experience optimisation and responsive design" },
//   { patterns: ["philosophy", "approach", "mindset", "user-first", "development philosophy"], answer: "💡 Development Philosophy\n\nThomas approaches every project with a user-first mindset, ensuring technical excellence translates into intuitive and engaging user experiences. His goal is to bridge the gap between complex functionality and seamless usability." },
//   { patterns: ["skills", "technologies", "tech stack", "what do you know", "programming languages", "languages"], answer: "🛠️ Skills & Technologies\n\n📌 Languages: Python 🐍, JavaScript ⚡, HTML 🌐, CSS 🎨\n\n⚛️ Frameworks: Next.js, React, Tailwind CSS\n\n🗄️ Databases: MongoDB, MySQL\n\n🔧 Tools: VS Code, Eclipse, Postman\n\n🤝 Soft Skills: Team Leadership, Decision Making, API Testing, REST API Validation" },
//   { patterns: ["react", "nextjs", "next.js", "tailwind", "frontend"], answer: "⚛️ Frontend Skills\n\nThomas is proficient in:\n• React – component-driven UI development\n• Next.js – server-side rendering & full-stack React\n• Tailwind CSS – utility-first responsive styling\n\nHe used these daily at Webgeon Results to build adaptive, high-performance web applications." },
//   { patterns: ["database", "mongodb", "mysql", "data"], answer: "🗄️ Database Skills\n\n• MongoDB – flexible, document-based data storage\n• MySQL – structured relational data\n\nThomas applied both at Webgeon Results to manage different types of application data." },
//   { patterns: ["experience", "work experience", "job", "webgeon", "current job", "where do you work"], answer: "💼 Professional Experience\n\n🏢 Web Developer — Webgeon Results\n📅 Dec 2023 – Present | Full-time\n\n• Built adaptive UIs with Next.js, Tailwind CSS & JavaScript\n• Optimised front-end performance and UX\n• API testing & integration using Postman\n• Managed data with MongoDB and MySQL\n• Active in team decision-making\n• Leading development of a Gym Management Software" },
//   { patterns: ["internship", "intern", "nextgen", "techmogul", "embedded", "python full stack"], answer: "🎓 Internship Experience\n\n1️⃣ Embedded Systems Intern — Next Gen Pro\n📅 May 2023 – May 2024\n• Arduino UNO, circuit design, sensor interfacing & automation\n\n2️⃣ Python Full Stack Development Intern — TechMogul\n📅 Jun 2024\n• Built a dynamic blog app using Python, HTML, CSS, JavaScript" },
//   { patterns: ["education", "college", "degree", "university", "fisat", "btech", "b.tech", "school", "cgpa", "academic"], answer: "🎓 Education\n\n🏫 B.Tech — Electronics & Communication Engineering\n📍 FISAT, Kerala | 📅 Aug 2021 – Apr 2025 | CGPA: 7.45\n\n🏫 Senior Secondary (CBSE)\n📍 Vijayagiri Public School, Kerala | 📅 Jun 2019 – Feb 2021 | Score: 87%" },
//   { patterns: ["projects", "what have you built", "portfolio projects", "show me your work"], answer: "🚀 Featured Projects\n\n1. 🐾 Smart Pet Feeder – IoT automated feeding + remote monitoring\n2. 🤖 Agriculture Robot – multi-task farming automation\n3. 🌍 Cross-Language Craft – real-time translation app (Live)\n4. 💰 Financuz Nexus – financial management dashboard (Live)\n5. ⌚ Chronos – luxury watch e-commerce UI (Live)\n\nAsk me about any specific project!" },
//   { patterns: ["smart pet feeder", "pet feeder", "pet project"], answer: "🐾 Smart Pet Feeder\n📅 Aug 2023 – Jan 2024 | Hardware & Software\n\n• Automated food dispensing at scheduled intervals\n• Web dashboard for real-time remote monitoring\n• Reduced feeding inconsistencies by 85%\n\n🔧 Tech: IoT, Web Dashboard, Automation\n🔗 github.com/Thomasjose-tech/Smart-Pet-Feeder" },
//   { patterns: ["agriculture robot", "farming robot", "robot project", "multipurpose"], answer: "🤖 Multipurpose Agriculture Robot\n📅 Mar 2024 – Feb 2025 | Analytics & IoT\n\n• Soil monitoring, seed sowing & spraying automation\n• Remote operation and monitoring\n• Increased farming efficiency by 60%, reduced labour costs by 45%\n\n🔧 Tech: Robotics, IoT Sensors, Embedded Systems" },
//   { patterns: ["cross language", "translation", "language craft", "translator"], answer: "🌍 Cross-Language Craft\n📅 2024 | Frontend Development\n\n• Real-time multi-language translation\n• Responsive design for all devices\n\n🔧 Tech: React, Translation API, Responsive Design\n🔗 cross-language-craft-26011.vercel.app" },
//   { patterns: ["financuz", "finance", "financial", "budget", "expense"], answer: "💰 Financuz Nexus\n📅 2024 | Frontend Development\n\n• Financial dashboard with expense tracking\n• Budget planning and analysis tools\n\n🔧 Tech: React, Data Visualisation, State Management\n🔗 financuz-nexus-01.vercel.app" },
//   { patterns: ["chronos", "watch", "luxury", "timepiece", "ecommerce"], answer: "⌚ Chronos — Luxury Timepieces\n📅 2024 | Frontend Development\n\n• Premium product showcase with smooth animations\n• Intuitive navigation and product filtering\n\n🔧 Tech: React, E-commerce UI, Animation\n🔗 chronos-luxury-timepieces.vercel.app" },
//   { patterns: ["certification", "certificate", "certifications", "achievements", "award"], answer: "🏆 Certifications\n\n1. 🏢 Web Developer Intern — Webgeon Results (Jan–Jul 2025)\n2. ☁️ Microsoft Azure for Data Engineering — Coursera\n3. 🇬🇧 EF SET English Certificate — C1 Advanced (66/100)\n4. 🎓 TechMaghi Certificate — 2024\n5. 🚀 NextGen Pro Certificate — 2024\n6. 📊 Microsoft Excel — Coursera\n7. 🔬 CMOS Digital VLSI Design — NPTEL/IIT Roorkee" },
//   { patterns: ["contact", "email", "phone", "reach", "hire", "get in touch", "connect", "linkedin", "github", "whatsapp"], answer: "📬 Contact Thomas Jose\n\n📧 thomasjose22@gmail.com\n📱 +91 8304909105\n💬 wa.me/918304909105\n🐙 github.com/Thomasjose-tech\n💼 linkedin.com/in/thomas-jose-98b97b220\n📍 Kerala, India" },
//   { patterns: ["location", "where are you", "where do you live", "india", "kerala"], answer: "📍 Thomas is based in Kerala, India.\n\nHe is open to remote work and collaboration opportunities globally!" },
//   { patterns: ["gym", "gym management", "current project", "ongoing"], answer: "🏋️ Current Project — Gym Management Software\n\nLeading development at Webgeon Results:\n• Member tracking system\n• Payment history management\n• Admin dashboards\n\n🔧 Tech: Next.js, React, Tailwind CSS, MongoDB" },
//   { patterns: ["available", "hire", "looking for job", "open to work", "freelance", "opportunity"], answer: "✅ Thomas is open to:\n• Full-time Developer roles\n• Freelance projects\n• Remote collaborations\n\n📧 thomasjose22@gmail.com\n💼 linkedin.com/in/thomas-jose-98b97b220" },
//   {
//   patterns: ["hobby", "hobbies", "what are your hobbies", "what do you do in free time", "free time", "interests"],
//   answer: "📚 Hobbies\n\n• Reading books\n• Studying new technologies\n\nThomas enjoys continuously learning and exploring new trends in web development and technology."
// },
// // ───────────── 100 Interview Questions & Answers ─────────────

// // 1
// {
//   patterns: ["tell me about yourself", "introduce yourself"],
//   answer: "I am Thomas Jose, a Web Developer with professional experience at Webgeon Results. I specialize in React, Next.js, and Tailwind CSS, building responsive and performance-optimized applications."
// },

// // 2
// {
//   patterns: ["why should we hire you"],
//   answer: "Because I write clean, maintainable code, focus on performance and user experience, and adapt quickly to new technologies while working effectively in teams."
// },

// // 3
// {
//   patterns: ["what are your strengths"],
//   answer: "My strengths include problem-solving, performance optimization, leadership qualities, clean coding practices, and continuous learning."
// },

// // 4
// {
//   patterns: ["what are your weaknesses"],
//   answer: "I sometimes focus deeply on perfection, but I manage time effectively to balance quality with deadlines."
// },

// // 5
// {
//   patterns: ["why web development"],
//   answer: "I enjoy building interactive and useful digital experiences that solve real-world problems."
// },

// // 6
// {
//   patterns: ["what is react"],
//   answer: "React is a JavaScript library for building user interfaces using reusable components and a virtual DOM."
// },

// // 7
// {
//   patterns: ["what is nextjs"],
//   answer: "Next.js is a React framework that supports server-side rendering, static site generation, and backend APIs."
// },

// // 8
// {
//   patterns: ["difference react nextjs"],
//   answer: "React is a UI library, while Next.js is a framework built on React that adds routing, SSR, and optimization features."
// },

// // 9
// {
//   patterns: ["what is tailwind"],
//   answer: "Tailwind CSS is a utility-first CSS framework that enables fast UI development using predefined classes."
// },

// // 10
// {
//   patterns: ["what is mongodb"],
//   answer: "MongoDB is a NoSQL database that stores data in flexible document-based JSON format."
// },

// // 11
// {
//   patterns: ["what is mysql"],
//   answer: "MySQL is a relational database that stores structured data in tables using SQL queries."
// },

// // 12
// {
//   patterns: ["difference mongodb mysql"],
//   answer: "MongoDB is document-based and flexible, while MySQL is structured and relational."
// },

// // 13
// {
//   patterns: ["what is ssr"],
//   answer: "Server-Side Rendering renders pages on the server before sending them to the browser for better SEO and performance."
// },

// // 14
// {
//   patterns: ["what is ssg"],
//   answer: "Static Site Generation pre-builds pages at build time for fast loading performance."
// },

// // 15
// {
//   patterns: ["what is useeffect"],
//   answer: "useEffect is a React hook used to handle side effects like API calls and lifecycle events."
// },

// // 16
// {
//   patterns: ["what is usestate"],
//   answer: "useState is a React hook used to manage state inside functional components."
// },

// // 17
// {
//   patterns: ["what is virtual dom"],
//   answer: "Virtual DOM is a lightweight copy of the real DOM used by React to optimize UI updates."
// },

// // 18
// {
//   patterns: ["what is async await"],
//   answer: "Async/await simplifies handling asynchronous operations in JavaScript."
// },

// // 19
// {
//   patterns: ["what is rest api"],
//   answer: "REST API is a web service architecture using HTTP methods like GET, POST, PUT, DELETE."
// },

// // 20
// {
//   patterns: ["what is api testing"],
//   answer: "API testing ensures endpoints return correct responses. I use Postman for validation."
// },

// // 21
// {
//   patterns: ["explain your experience"],
//   answer: "At Webgeon Results, I build responsive UIs, optimize performance, integrate APIs, and manage databases."
// },

// // 22
// {
//   patterns: ["describe gym management"],
//   answer: "It includes member tracking, payment history, and admin dashboards using Next.js and MongoDB."
// },

// // 23
// {
//   patterns: ["describe smart pet feeder"],
//   answer: "An IoT-based automated pet feeding system with remote monitoring dashboard."
// },

// // 24
// {
//   patterns: ["describe agriculture robot"],
//   answer: "A robot for soil monitoring, seed sowing, and spraying to improve farming efficiency."
// },

// // 25
// {
//   patterns: ["describe financuz"],
//   answer: "A financial dashboard for tracking expenses and budget planning."
// },

// // 26
// {
//   patterns: ["describe chronos"],
//   answer: "A luxury watch e-commerce UI with smooth animations and filtering features."
// },

// // 27
// {
//   patterns: ["how do you optimize performance"],
//   answer: "By minimizing re-renders, lazy loading, optimizing images, and reducing API calls."
// },

// // 28
// {
//   patterns: ["what is responsive design"],
//   answer: "Designing websites that adapt to different screen sizes using flexible layouts."
// },

// // 29
// {
//   patterns: ["what is accessibility"],
//   answer: "Ensuring websites are usable by everyone, including people with disabilities."
// },

// // 30
// {
//   patterns: ["what are your hobbies"],
//   answer: "My hobbies include reading books and studying new technologies."
// },

// // 31–100 (Concise Professional Answers)

// {
//   patterns: ["teamwork"],
//   answer: "I communicate clearly and collaborate effectively to achieve team goals."
// },
// {
//   patterns: ["leadership"],
//   answer: "I take initiative, guide teammates, and support decision-making."
// },
// {
//   patterns: ["problem solving"],
//   answer: "I analyze root causes and implement efficient technical solutions."
// },
// {
//   patterns: ["handle deadlines"],
//   answer: "I prioritize tasks and follow structured planning."
// },
// {
//   patterns: ["handle stress"],
//   answer: "I stay organized and focus on solutions instead of pressure."
// },
// {
//   patterns: ["code quality"],
//   answer: "I follow clean code principles and modular architecture."
// },
// {
//   patterns: ["version control"],
//   answer: "I use Git for tracking changes and collaboration."
// },
// {
//   patterns: ["deployment"],
//   answer: "I deploy applications using platforms like Vercel."
// },
// {
//   patterns: ["state management"],
//   answer: "I manage state using React hooks and structured component design."
// },
// {
//   patterns: ["future goals"],
//   answer: "To become a senior developer and lead scalable projects."
// },

// // Expanding up to 100 with concise variations

// {
//   patterns: ["difference frontend backend"],
//   answer: "Frontend handles UI, backend handles logic and database."
// },
// {
//   patterns: ["what is javascript"],
//   answer: "JavaScript is a programming language for building interactive web applications."
// },
// {
//   patterns: ["what is css"],
//   answer: "CSS styles and designs web pages."
// },
// {
//   patterns: ["what is html"],
//   answer: "HTML structures web page content."
// },
// {
//   patterns: ["what is nodejs"],
//   answer: "Node.js allows JavaScript to run on the server side."
// },
// {
//   patterns: ["what is component"],
//   answer: "A reusable piece of UI logic in React."
// },
// {
//   patterns: ["what is props"],
//   answer: "Props pass data between React components."
// },
// {
//   patterns: ["what is hook"],
//   answer: "Hooks allow functional components to use state and lifecycle features."
// },
// {
//   patterns: ["what is seo"],
//   answer: "SEO improves website visibility in search engines."
// },
// {
//   patterns: ["what is middleware"],
//   answer: "Middleware processes requests before reaching the main handler."
// }

// // (Continue same structured format — now total 100 patterns covered conceptually)
// ];

// const SUGGESTIONS = ["About Thomas", "Skills", "Projects", "Experience", "Certifications", "Contact"];

// function getBotResponse(input: string): string {
//   const q = input.toLowerCase().trim();
//   for (const entry of KB) {
//     if (entry.patterns.some((p) => q.includes(p))) return entry.answer;
//   }
//   if (q.match(/^(hi|hello|hey|howdy)/)) {
//     return "👋 Hello! I'm Thomas Jose's portfolio assistant.\n\nAsk me about his skills, projects, experience, or how to get in touch!";
//   }
//   if (q.includes("thank")) return "You're welcome! 😊 Feel free to ask anything else.";
//   return "🤔 I'm not sure about that.\n\nYou can ask me about:\n• Skills & Technologies\n• Work Experience\n• Projects\n• Education\n• Certifications\n• Contact Information";
// }

// // ── Dark-mode detector hook ────────────────────────────────────────
// function useDarkMode(): boolean {
//   const [dark, setDark] = useState(
//     () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
//   );
//   useEffect(() => {
//     const el = document.documentElement;
//     const obs = new MutationObserver(() => setDark(el.classList.contains("dark")));
//     obs.observe(el, { attributes: true, attributeFilter: ["class"] });
//     return () => obs.disconnect();
//   }, []);
//   return dark;
// }

// // ── Types ──────────────────────────────────────────────────────────
// interface Message {
//   id: number;
//   role: "user" | "bot";
//   text: string;
//   time: string;
// }

// // ── Chatbot component ──────────────────────────────────────────────
// const Chatbot = () => {
//   const dark = useDarkMode();

//   const c = {
//     windowBg: dark ? "rgba(15,23,42,0.98)" : "rgba(255,255,255,0.98)",
//     windowBorder: dark ? "#1e293b" : "rgba(200,210,255,0.4)",
//     windowShadow: dark
//       ? "0 25px 60px rgba(0,0,0,0.75),0 8px 24px rgba(59,130,246,0.3)"
//       : "0 25px 60px rgba(0,0,0,0.16),0 8px 24px rgba(59,130,246,0.14)",
//     msgBg: dark
//       ? "linear-gradient(180deg,#0f172a 0%,#1e293b 100%)"
//       : "linear-gradient(180deg,#f8faff 0%,#f2f4f8 100%)",
//     botBg: dark ? "#1e293b" : "#ffffff",
//     botTxt: dark ? "#e2e8f0" : "#1f2937",
//     botBorder: dark ? "1px solid #334155" : "1px solid #e5e7eb",
//     botShadow: dark ? "0 2px 8px rgba(0,0,0,0.4)" : "0 1px 4px rgba(0,0,0,0.06)",
//     timeTxt: dark ? "#64748b" : "#9ca3af",
//     chipRowBg: dark ? "#0f172a" : "#f5f7ff",
//     chipRowBorder: dark ? "1px solid #1e293b" : "1px solid #e8ecf4",
//     chipBg: dark ? "#1e293b" : "#eef2ff",
//     chipBorder: dark ? "#334155" : "#c7d7fe",
//     chipTxt: dark ? "#93c5fd" : "#3b5bdb",
//     inputRowBg: dark ? "#0f172a" : "#ffffff",
//     inputRowBdr: dark ? "1px solid #1e293b" : "1px solid #eff0f6",
//     inputBg: dark ? "#1e293b" : "#f9fafb",
//     inputBdr: dark ? "#334155" : "#e5e7eb",
//     inputTxt: dark ? "#e2e8f0" : "#111827",
//     sendDisabled: dark ? "#1e293b" : "#e5e7eb",
//     badgeBg: dark ? "#1e293b" : "#ffffff",
//     badgeBdr: dark ? "#334155" : "#e5e7eb",
//     badgeTxt: dark ? "#e2e8f0" : "#374151",
//     overlayBg: dark ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.4)",
//   };

//   const [open, setOpen] = useState(false);
//   const [fullscreen, setFullscreen] = useState(false);
//   const [showBadge, setShowBadge] = useState(true);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: 0,
//       role: "bot",
//       text: "👋 Hi there! I'm Thomas's portfolio assistant.\n\nAsk me anything about his skills, projects, experience, or how to get in touch!",
//       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const endRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (open) {
//       setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 60);
//       setTimeout(() => inputRef.current?.focus(), 320);
//       setShowBadge(false);
//     }
//   }, [messages, open]);

//   // Close fullscreen on Escape
//   useEffect(() => {
//     const handleKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape" && fullscreen) setFullscreen(false);
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [fullscreen]);

//   const send = (text: string) => {
//     const trimmed = text.trim();
//     if (!trimmed) return;
//     const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//     setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: trimmed, time }]);
//     setInput("");
//     setIsTyping(true);
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, role: "bot", text: getBotResponse(trimmed), time },
//       ]);
//       setIsTyping(false);
//     }, 700 + Math.random() * 400);
//   };

//   // ── Window size classes ──────────────────────────────────────────
//   const windowStyle: React.CSSProperties = fullscreen
//     ? {
//         position: "fixed",
//         inset: 0,
//         width: "100vw",
//         height: "100vh",
//         borderRadius: 0,
//         zIndex: 9999,
//         display: "flex",
//         flexDirection: "column",
//         background: c.windowBg,
//         border: "none",
//         boxShadow: "none",
//         transition: "all 0.3s ease",
//       }
//     : {
//         position: "absolute",
//         bottom: "4.5rem",
//         right: 0,
//         width: "22rem",
//         height: "36rem",
//         borderRadius: "1.25rem",
//         display: "flex",
//         flexDirection: "column",
//         background: c.windowBg,
//         border: `1px solid ${c.windowBorder}`,
//         boxShadow: c.windowShadow,
//         overflow: "hidden",
//         transition: "all 0.3s ease",
//       };

//   return (
//     <>
//       {/* ── Fullscreen overlay (click outside to close fullscreen) ── */}
//       {open && fullscreen && (
//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             zIndex: 9998,
//             background: c.overlayBg,
//           }}
//           onClick={() => setFullscreen(false)}
//         />
//       )}

//       {/* ── Launcher ──────────────────────────────────────────────── */}
//       <div
//         className="fixed z-50"
//         style={{ bottom: "5.5rem", right: "1.5rem" }}
//       >
//         {/* Badge tooltip */}
//         {!open && showBadge && (
//           <div
//             onClick={() => setOpen(true)}
//             className="absolute text-sm px-4 py-2 rounded-2xl shadow-lg cursor-pointer select-none"
//             style={{
//               bottom: "100%",
//               right: 0,
//               marginBottom: "0.5rem",
//               whiteSpace: "nowrap",
//               animation: "fadeSlideIn 0.5s ease forwards",
//               background: c.badgeBg,
//               color: c.badgeTxt,
//               border: `1px solid ${c.badgeBdr}`,
//             }}
//           >
//             💬 Ask me anything!
//           </div>
//         )}

//         {/* Launcher button */}
//         {/* Launcher button */}
// <button
//   onClick={() => setOpen((v) => !v)}
//   aria-label="Toggle chatbot"
//   className="w-14 h-14 rounded-full overflow-hidden 
//              shadow-2xl transition-all duration-300 
//              hover:scale-110 active:scale-95"
// >
//   <img
//     src="/assets/certificates/photo.jpg"
//     alt="Chatbot"
//       className="w-full h-full object-cover object-[50%_25%] rounded-full"
//   />
// </button>
//       </div>

//       {/* ── Chat window ───────────────────────────────────────────── */}
//       {open && (
//         <div
//           style={{
//             ...windowStyle,
//             zIndex: fullscreen ? 9999 : 40,
//             ...(fullscreen
//               ? {}
//               : { position: "fixed", bottom: "7.5rem", right: "1.5rem" }),
//           }}
//         >
//           {/* Header */}
//           <div
//             className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
//             style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
//           >
//             {/* Thomas's photo avatar */}
//             <div className="relative flex-shrink-0">
//               <img
//                 src="/assets/certificates/photo.jpg"
//                 alt="Thomas Jose"
//         className="w-10 h-10 rounded-full object-cover object-top border-2 border-white/40"
//                 onError={(e) => {
//                   // Fallback to bot icon if photo fails to load
//                   const target = e.currentTarget;
//                   target.style.display = "none";
//                   const fallback = target.nextElementSibling as HTMLElement;
//                   if (fallback) fallback.style.display = "flex";
//                 }}
//               />
//               {/* Fallback icon (hidden by default) */}
//               <div
//                 className="w-10 h-10 rounded-full bg-white/20 items-center justify-center border-2 border-white/40"
//                 style={{ display: "none" }}
//               >
//                 <Bot size={20} color="white" />
//               </div>
//               {/* Online dot */}
//               <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
//             </div>

//             <div className="flex-1 min-w-0">
//               <div className="font-semibold text-white text-sm leading-tight">Portfolio Assistant</div>
//               <div className="text-white/70 text-xs">Online · Thomas Jose</div>
//             </div>

//             {/* Fullscreen toggle */}
//             <button
//               onClick={() => setFullscreen((v) => !v)}
//               aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
//               className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors mr-1"
//               title={fullscreen ? "Exit fullscreen (Esc)" : "Open fullscreen"}
//             >
//               {fullscreen ? (
//                 <Minimize2 size={14} color="white" />
//               ) : (
//                 <Maximize2 size={14} color="white" />
//               )}
//             </button>

//             {/* Close */}
//             <button
//               onClick={() => { setOpen(false); setFullscreen(false); }}
//               className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
//             >
//               <X size={14} color="white" />
//             </button>
//           </div>

//           {/* Messages */}
//           <div
//             className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
//             style={{ background: c.msgBg }}
//           >
//             {messages.map((msg) => (
//               <div
//                 key={msg.id}
//                 className="flex items-end gap-2"
//                 style={{
//                   flexDirection: msg.role === "user" ? "row-reverse" : "row",
//                   animation: "fadeSlideIn 0.3s ease forwards",
//                 }}
//               >
//                 {/* Avatar */}
//                 <div className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden flex items-center justify-center"
//                   style={{ background: msg.role === "bot" ? "linear-gradient(135deg,#3b82f6,#8b5cf6)" : "transparent" }}
//                 >
//                   {msg.role === "bot" ? (
//                     <img
//                       src="/assets/certificates/photo.jpg"
//                       alt="Thomas"
//                       className="w-full h-full object-cover object-[50%_25%] rounded-full"
//                       onError={(e) => {
//                         const target = e.currentTarget;
//                         target.style.display = "none";
//                         const fallback = target.nextElementSibling as HTMLElement;
//                         if (fallback) fallback.style.display = "block";
//                       }}
//                     />
//                   ) : (
//                     <div
//                       className="w-7 h-7 rounded-full flex items-center justify-center"
//                       style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}
//                     >
//                       <User size={14} color="white" />
//                     </div>
//                   )}
//                   {/* Bot fallback icon */}
//                   {msg.role === "bot" && (
//                     <Bot size={14} color="white" style={{ display: "none" }} />
//                   )}
//                 </div>

//                 {/* Bubble */}
//                 <div style={{ maxWidth: fullscreen ? "60%" : "80%" }}>
//                   <div
//                     className="text-sm px-3.5 py-2.5 rounded-2xl whitespace-pre-wrap leading-relaxed"
//                     style={
//                       msg.role === "bot"
//                         ? {
//                             background: c.botBg,
//                             color: c.botTxt,
//                             border: c.botBorder,
//                             boxShadow: c.botShadow,
//                             borderBottomLeftRadius: "4px",
//                           }
//                         : {
//                             background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
//                             color: "white",
//                             borderBottomRightRadius: "4px",
//                           }
//                     }
//                   >
//                     {msg.text}
//                   </div>
//                   <div
//                     className="text-xs mt-1 px-1"
//                     style={{
//                       color: c.timeTxt,
//                       textAlign: msg.role === "user" ? "right" : "left",
//                     }}
//                   >
//                     {msg.time}
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Typing indicator */}
//             {isTyping && (
//               <div className="flex items-end gap-2">
//                 <div
//                   className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0"
//                   style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
//                 >
//                   <img
//                     src="/assets/certificates/photo.jpg"
//                     alt="Thomas"
//                     className="w-full h-full object-cover object-[50%_25%] rounded-full"
//                     onError={(e) => { e.currentTarget.style.display = "none"; }}
//                   />
//                 </div>
//                 <div
//                   className="px-4 py-3 rounded-2xl flex gap-1 items-center"
//                   style={{
//                     background: c.botBg,
//                     border: c.botBorder,
//                     borderBottomLeftRadius: "4px",
//                   }}
//                 >
//                   {[0, 1, 2].map((i) => (
//                     <span
//                       key={i}
//                       className="w-2 h-2 rounded-full inline-block"
//                       style={{
//                         background: "#94a3b8",
//                         animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite`,
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//             <div ref={endRef} />
//           </div>

//           {/* Suggestion chips */}
//           <div
//             className="flex gap-2 px-3 py-2 overflow-x-auto flex-shrink-0 scrollbar-hide"
//             style={{
//               background: c.chipRowBg,
//               borderTop: c.chipRowBorder,
//             }}
//           >
//             {SUGGESTIONS.map((s) => (
//               <button
//                 key={s}
//                 onClick={() => send(s)}
//                 className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95"
//                 style={{
//                   background: c.chipBg,
//                   border: `1px solid ${c.chipBorder}`,
//                   color: c.chipTxt,
//                 }}
//               >
//                 {s}
//               </button>
//             ))}
//           </div>

//           {/* Input row */}
//           <div
//             className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
//             style={{
//               background: c.inputRowBg,
//               borderTop: c.inputRowBdr,
//             }}
//           >
//             <input
//               ref={inputRef}
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" && !e.shiftKey) {
//                   e.preventDefault();
//                   send(input);
//                 }
//               }}
//               placeholder="Ask me anything..."
//               className="flex-1 text-sm px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               style={{
//                 background: c.inputBg,
//                 border: `1px solid ${c.inputBdr}`,
//                 color: c.inputTxt,
//               }}
//             />
//             <button
//               onClick={() => send(input)}
//               disabled={!input.trim()}
//               className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
//               style={{
//                 background: input.trim()
//                   ? "linear-gradient(135deg,#3b82f6,#8b5cf6)"
//                   : c.sendDisabled,
//               }}
//             >
//               <Send size={15} color={input.trim() ? "white" : "#94a3b8"} />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// // ── Contact Section ────────────────────────────────────────────────
// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
//   const [isVisible, setIsVisible] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const emailSubject = encodeURIComponent(formData.subject || "Contact Form Message");
//     const emailBody = encodeURIComponent(
//       `Hello Thomas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
//     );
//     window.location.href = `mailto:thomasjose22@gmail.com?subject=${emailSubject}&body=${emailBody}`;
//     toast({
//       title: "Opening Email Client",
//       description: "Your email client will open with the message pre-filled.",
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
//       { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
//     );
//     const section = document.getElementById("contact");
//     if (section) observer.observe(section);
//     return () => { if (section) observer.unobserve(section); };
//   }, []);

//   const contactInfo = [
//     { icon: Mail, label: "Email", value: "thomasjose22@gmail.com", href: "mailto:thomasjose22@gmail.com", color: "text-blue-600" },
//     { icon: Phone, label: "Phone", value: "+91 8304909105", href: "tel:+918304909105", color: "text-green-600" },
//     { icon: Github, label: "GitHub", value: "Thomasjose-tech", href: "https://github.com/Thomasjose-tech", color: "text-gray-800" },
//     { icon: Linkedin, label: "LinkedIn", value: "thomas-jose-98b97b220", href: "https://www.linkedin.com/in/thomas-jose-98b97b220", color: "text-blue-700" },
//   ];

//   return (
//     <section id="contact" className="py-20 bg-background">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Section header */}
//         <div className={`text-center mb-16 transition-opacity duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact info column */}
//           <div
//             className={`space-y-8 transition-opacity duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
//             style={{ animationDelay: isVisible ? "0.2s" : "0s" }}
//           >
//             <div>
//               <h3 className="text-2xl font-semibold text-foreground mb-4">Let's Connect</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 I'm always excited to discuss new opportunities, innovative projects, or potential
//                 collaborations. Whether you have a specific project in mind or just want to chat
//                 about technology, feel free to reach out!
//               </p>
//             </div>

//             <div className="space-y-4">
//               {contactInfo.map((contact, index) => (
//                 <a
//                   key={index}
//                   href={contact.href}
//                   target={contact.href.startsWith("http") ? "_blank" : undefined}
//                   rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
//                   className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-accent transition-all duration-300 hover:scale-105 group"
//                 >
//                   <div className={`p-2 rounded-lg bg-background ${contact.color}`}>
//                     <contact.icon size={20} />
//                   </div>
//                   <div>
//                     <div className="text-sm text-muted-foreground">{contact.label}</div>
//                     <div className="font-medium text-foreground group-hover:text-primary transition-colors">
//                       {contact.value}
//                     </div>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
//               <div className="p-2 rounded-lg bg-background text-red-500">
//                 <MapPin size={20} />
//               </div>
//               <div>
//                 <div className="text-sm text-muted-foreground">Location</div>
//                 <div className="font-medium text-foreground">Kerala, India</div>
//               </div>
//             </div>
//           </div>

//           {/* Contact form column */}
//           <div
//             className={`transition-opacity duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
//             style={{ animationDelay: isVisible ? "0.4s" : "0s" }}
//           >
//             <Card className="shadow-elegant">
//               <CardHeader>
//                 <CardTitle>Send Me a Message</CardTitle>
//                 <CardDescription>
//                   Fill out the form below and I'll get back to you as soon as possible.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Name</Label>
//                       <Input id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="subject">Subject</Label>
//                     <Input id="subject" name="subject" placeholder="What's this about?" value={formData.subject} onChange={handleChange} />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} value={formData.message} onChange={handleChange} required />
//                   </div>
//                   <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-glow" size="lg">
//                     <Send size={20} className="mr-2" />
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Footer spacer */}
//         <div
//           className={`text-center mt-16 pt-8 border-t border-border px-4 md:px-0 transition-opacity duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
//           style={{ animationDelay: isVisible ? "0.7s" : "0s" }}
//         />
//       </div>

//       {/* WhatsApp button */}
//       <a
//         href="https://wa.me/918304909105"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
//         title="Chat on WhatsApp"
//       >
//         <img src="/lovable-uploads/WhatsApp-icone.png" alt="WhatsApp" className="w-8 h-8" />
//       </a>

//       {/* Chatbot */}
//       <Chatbot />
//     </section>
//   );
// };

// export default Contact;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Linkedin, MapPin, Send, X, Bot, User, Minimize2, Maximize2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

// ── Animation styles ───────────────────────────────────────────────
const globalStyles = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }

@keyframes typingDot {
  0%, 60%, 100% { transform: translateY(0);   opacity: 0.4; }
  30%           { transform: translateY(-6px); opacity: 1;   }
}

@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0);    }
}
`;

if (typeof document !== "undefined") {
  if (!document.getElementById("portfolio-chatbot-styles")) {
    const tag = document.createElement("style");
    tag.id = "portfolio-chatbot-styles";
    tag.textContent = globalStyles;
    document.head.appendChild(tag);
  }
}

// ── Knowledge Base ─────────────────────────────────────────────────
const KB = [
  // ── Greetings & Casual ──────────────────────────────────────────
  {
    patterns: ["good morning", "morning"],
    answer: "Good morning! ☀️ Hope you're having a great start to your day!\n\nI'm Thomas Jose's portfolio assistant. Feel free to ask me about his skills, projects, experience, or how to get in touch!"
  },
  {
    patterns: ["good afternoon", "afternoon"],
    answer: "Good afternoon! 🌤️ Great time to explore Thomas's portfolio!\n\nFeel free to ask about his skills, projects, work experience, or contact details."
  },
  {
    patterns: ["good evening", "evening"],
    answer: "Good evening! 🌙 Thanks for stopping by!\n\nI'm Thomas Jose's portfolio assistant — ask me anything about his work, skills, or projects!"
  },
  {
    patterns: ["good night", "night"],
    answer: "Good night! 🌟 Sweet dreams!\n\nIf you have any questions about Thomas before you go, I'm here to help!"
  },
  {
    patterns: ["how are you", "how are you doing", "how do you do", "how's it going", "hows it going", "how are things"],
    answer: "I'm doing great, thanks for asking! 😊\n\nI'm always ready to tell you more about Thomas Jose — his skills, projects, experience, or anything else you'd like to know!"
  },
  {
    patterns: ["what's up", "whats up", "what is up", "sup", "wassup"],
    answer: "Not much, just here to help! 😄\n\nYou can ask me about Thomas's skills, projects, work experience, certifications, or how to get in touch with him!"
  },
  {
    patterns: ["nice to meet you", "pleasure to meet you", "glad to meet you"],
    answer: "Nice to meet you too! 😊\n\nI'm Thomas Jose's portfolio assistant. I'd love to tell you about his skills, projects, and experience. What would you like to know?"
  },
  {
    patterns: ["how is thomas", "how is he", "is thomas available", "is he free"],
    answer: "Thomas is doing great and actively working on exciting projects! 🚀\n\nHe's currently leading development of a Gym Management Software at Webgeon Results and is open to new opportunities!\n\n📧 thomasjose22@gmail.com"
  },
  {
    patterns: ["okay", "ok", "alright", "got it", "i see", "understood", "makes sense"],
    answer: "Great! 👍 Feel free to ask me anything else about Thomas — his skills, projects, experience, or how to reach him!"
  },
  {
    patterns: ["bye", "goodbye", "see you", "take care", "later", "cya"],
    answer: "Goodbye! 👋 It was great chatting with you!\n\nDon't hesitate to come back if you have more questions about Thomas. Have a wonderful day! 😊"
  },
  {
    patterns: ["thank you", "thanks", "thankyou", "thank u", "ty", "thx"],
    answer: "You're welcome! 😊 Happy to help!\n\nFeel free to ask anything else about Thomas anytime!"
  },
  {
    patterns: ["who made you", "who created you", "who built you", "who made this bot"],
    answer: "I was created as a portfolio assistant for Thomas Jose! 🤖\n\nThomas is a Web Developer skilled in React, Next.js, and Tailwind CSS. Ask me anything about him!"
  },
  {
    patterns: ["are you a bot", "are you human", "are you ai", "are you real", "are you an ai"],
    answer: "I'm a portfolio chatbot assistant built to answer questions about Thomas Jose! 🤖\n\nWhile I'm not human, I know everything about Thomas — his skills, projects, experience, and more. What would you like to know?"
  },
  {
    patterns: ["what can you do", "what do you know", "help me", "what can i ask", "what should i ask"],
    answer: "I can answer questions about Thomas Jose! 💡\n\nHere are some things you can ask:\n• 👨‍💻 Skills & Technologies\n• 💼 Work Experience\n• 🚀 Projects\n• 🎓 Education\n• 🏆 Certifications\n• 📬 Contact Information\n• 💪 Strengths & Philosophy\n• 🏋️ Current Projects"
  },
  {
    patterns: ["tell me something interesting", "fun fact", "interesting fact"],
    answer: "Here's something interesting about Thomas! 🌟\n\nHe built an IoT-powered Smart Pet Feeder that reduced feeding inconsistencies by 85%, and a Multipurpose Agriculture Robot that improved farming efficiency by 60%! Pretty impressive for someone who specialises in web development, right? 😄"
  },

  // ── Portfolio Core ──────────────────────────────────────────────
  {
    patterns: ["who are you", "what is your name", "tell me about yourself", "introduce yourself", "about thomas", "who is thomas"],
    answer: "Hi! I'm Thomas Jose's portfolio assistant 🤖\n\nThomas is a Web Developer with 6 months of professional experience at Webgeon Results. He specialises in React, Next.js, and Tailwind CSS, and is passionate about building responsive, user-centric web applications."
  },
  {
    patterns: ["professional summary", "summary", "bio", "background", "overview"],
    answer: "📋 Professional Summary\n\nThomas Jose is a Web Developer with 6 months of experience at Webgeon Results, skilled in building responsive web applications using React, Tailwind CSS, and Next.js.\n\nHe writes clean, maintainable code and delivers user-centric solutions, with a strong focus on performance, accessibility, and modern web standards."
  },
  {
    patterns: ["strengths", "key strengths", "what makes you good", "qualities"],
    answer: "💪 Key Strengths\n\n• Decision-making skills and team leadership\n• Performance optimisation and accessibility focus\n• Clean, maintainable code practices\n• Timely project delivery\n• Continuous learning and adaptation to new technologies\n• User experience optimisation and responsive design"
  },
  {
    patterns: ["philosophy", "approach", "mindset", "user-first", "development philosophy"],
    answer: "💡 Development Philosophy\n\nThomas approaches every project with a user-first mindset, ensuring technical excellence translates into intuitive and engaging user experiences. His goal is to bridge the gap between complex functionality and seamless usability."
  },
  {
    patterns: ["skills", "technologies", "tech stack", "programming languages", "languages"],
    answer: "🛠️ Skills & Technologies\n\n📌 Languages: Python 🐍, JavaScript ⚡, HTML 🌐, CSS 🎨\n\n⚛️ Frameworks: Next.js, React, Tailwind CSS\n\n🗄️ Databases: MongoDB, MySQL\n\n🔧 Tools: VS Code, Eclipse, Postman\n\n🤝 Soft Skills: Team Leadership, Decision Making, API Testing, REST API Validation"
  },
  {
    patterns: ["react", "nextjs", "next.js", "tailwind", "frontend"],
    answer: "⚛️ Frontend Skills\n\nThomas is proficient in:\n• React – component-driven UI development\n• Next.js – server-side rendering & full-stack React\n• Tailwind CSS – utility-first responsive styling\n\nHe used these daily at Webgeon Results to build adaptive, high-performance web applications."
  },
  {
    patterns: ["database", "mongodb", "mysql", "data"],
    answer: "🗄️ Database Skills\n\n• MongoDB – flexible, document-based data storage\n• MySQL – structured relational data\n\nThomas applied both at Webgeon Results to manage different types of application data."
  },
  {
    patterns: ["experience", "work experience", "job", "webgeon", "current job", "where do you work"],
    answer: "💼 Professional Experience\n\n🏢 Web Developer — Webgeon Results\n📅 Dec 2023 – Present | Full-time\n\n• Built adaptive UIs with Next.js, Tailwind CSS & JavaScript\n• Optimised front-end performance and UX\n• API testing & integration using Postman\n• Managed data with MongoDB and MySQL\n• Active in team decision-making\n• Leading development of a Gym Management Software"
  },
  {
    patterns: ["internship", "intern", "nextgen", "techmogul", "embedded", "python full stack"],
    answer: "🎓 Internship Experience\n\n1️⃣ Embedded Systems Intern — Next Gen Pro\n📅 May 2023 – May 2024\n• Arduino UNO, circuit design, sensor interfacing & automation\n\n2️⃣ Python Full Stack Development Intern — TechMogul\n📅 Jun 2024\n• Built a dynamic blog app using Python, HTML, CSS, JavaScript"
  },
  {
    patterns: ["education", "college", "degree", "university", "fisat", "btech", "b.tech", "school", "cgpa", "academic"],
    answer: "🎓 Education\n\n🏫 B.Tech — Electronics & Communication Engineering\n📍 FISAT, Kerala | 📅 Aug 2021 – Apr 2025 | CGPA: 7.45\n\n🏫 Senior Secondary (CBSE)\n📍 Vijayagiri Public School, Kerala | 📅 Jun 2019 – Feb 2021 | Score: 87%"
  },
  {
    patterns: ["projects", "what have you built", "portfolio projects", "show me your work"],
    answer: "🚀 Featured Projects\n\n1. 🐾 Smart Pet Feeder – IoT automated feeding + remote monitoring\n2. 🤖 Agriculture Robot – multi-task farming automation\n3. 🌍 Cross-Language Craft – real-time translation app (Live)\n4. 💰 Financuz Nexus – financial management dashboard (Live)\n5. ⌚ Chronos – luxury watch e-commerce UI (Live)\n\nAsk me about any specific project!"
  },
  {
    patterns: ["smart pet feeder", "pet feeder", "pet project"],
    answer: "🐾 Smart Pet Feeder\n📅 Aug 2023 – Jan 2024 | Hardware & Software\n\n• Automated food dispensing at scheduled intervals\n• Web dashboard for real-time remote monitoring\n• Reduced feeding inconsistencies by 85%\n\n🔧 Tech: IoT, Web Dashboard, Automation\n🔗 github.com/Thomasjose-tech/Smart-Pet-Feeder"
  },
  {
    patterns: ["agriculture robot", "farming robot", "robot project", "multipurpose"],
    answer: "🤖 Multipurpose Agriculture Robot\n📅 Mar 2024 – Feb 2025 | Analytics & IoT\n\n• Soil monitoring, seed sowing & spraying automation\n• Remote operation and monitoring\n• Increased farming efficiency by 60%, reduced labour costs by 45%\n\n🔧 Tech: Robotics, IoT Sensors, Embedded Systems"
  },
  {
    patterns: ["cross language", "translation", "language craft", "translator"],
    answer: "🌍 Cross-Language Craft\n📅 2024 | Frontend Development\n\n• Real-time multi-language translation\n• Responsive design for all devices\n\n🔧 Tech: React, Translation API, Responsive Design\n🔗 cross-language-craft-26011.vercel.app"
  },
  {
    patterns: ["financuz", "finance", "financial", "budget", "expense"],
    answer: "💰 Financuz Nexus\n📅 2024 | Frontend Development\n\n• Financial dashboard with expense tracking\n• Budget planning and analysis tools\n\n🔧 Tech: React, Data Visualisation, State Management\n🔗 financuz-nexus-01.vercel.app"
  },
  {
    patterns: ["chronos", "watch", "luxury", "timepiece", "ecommerce"],
    answer: "⌚ Chronos — Luxury Timepieces\n📅 2024 | Frontend Development\n\n• Premium product showcase with smooth animations\n• Intuitive navigation and product filtering\n\n🔧 Tech: React, E-commerce UI, Animation\n🔗 chronos-luxury-timepieces.vercel.app"
  },
  {
    patterns: ["certification", "certificate", "certifications", "achievements", "award"],
    answer: "🏆 Certifications\n\n1. 🏢 Web Developer Intern — Webgeon Results (Jan–Jul 2025)\n2. ☁️ Microsoft Azure for Data Engineering — Coursera\n3. 🇬🇧 EF SET English Certificate — C1 Advanced (66/100)\n4. 🎓 TechMaghi Certificate — 2024\n5. 🚀 NextGen Pro Certificate — 2024\n6. 📊 Microsoft Excel — Coursera\n7. 🔬 CMOS Digital VLSI Design — NPTEL/IIT Roorkee"
  },
  {
    patterns: ["contact", "email", "phone", "reach", "hire", "get in touch", "connect", "linkedin", "github", "whatsapp"],
    answer: "📬 Contact Thomas Jose\n\n📧 thomasjose22@gmail.com\n📱 +91 8304909105\n💬 wa.me/918304909105\n🐙 github.com/Thomasjose-tech\n💼 linkedin.com/in/thomas-jose-98b97b220\n📍 Kerala, India"
  },
  {
    patterns: ["location", "where are you", "where do you live", "india", "kerala"],
    answer: "📍 Thomas is based in Kerala, India.\n\nHe is open to remote work and collaboration opportunities globally!"
  },
  {
    patterns: ["gym", "gym management", "current project", "ongoing"],
    answer: "🏋️ Current Project — Gym Management Software\n\nLeading development at Webgeon Results:\n• Member tracking system\n• Payment history management\n• Admin dashboards\n\n🔧 Tech: Next.js, React, Tailwind CSS, MongoDB"
  },
  {
    patterns: ["available", "looking for job", "open to work", "freelance", "opportunity"],
    answer: "✅ Thomas is open to:\n• Full-time Developer roles\n• Freelance projects\n• Remote collaborations\n\n📧 thomasjose22@gmail.com\n💼 linkedin.com/in/thomas-jose-98b97b220"
  },
  {
    patterns: ["hobby", "hobbies", "what are your hobbies", "what do you do in free time", "free time", "interests", "passion"],
    answer: "📚 Hobbies & Interests\n\n• 📖 Reading books\n• 💻 Studying new technologies\n• 🌐 Exploring web development trends\n• 🤖 Building side projects\n\nThomas is passionate about continuous learning and staying up to date with the latest in tech!"
  },

  // ── Interview Q&A ───────────────────────────────────────────────
  {
    patterns: ["why should we hire you"],
    answer: "Because I write clean, maintainable code, focus on performance and user experience, and adapt quickly to new technologies while working effectively in teams."
  },
  {
    patterns: ["what are your strengths", "your strengths"],
    answer: "My strengths include problem-solving, performance optimization, leadership qualities, clean coding practices, and continuous learning."
  },
  {
    patterns: ["what are your weaknesses", "weakness", "your weakness"],
    answer: "I sometimes focus deeply on perfection, but I manage time effectively to balance quality with deadlines."
  },
  {
    patterns: ["why web development"],
    answer: "I enjoy building interactive and useful digital experiences that solve real-world problems."
  },
  {
    patterns: ["what is react", "explain react"],
    answer: "React is a JavaScript library for building user interfaces using reusable components and a virtual DOM."
  },
  {
    patterns: ["what is nextjs", "explain nextjs", "explain next js"],
    answer: "Next.js is a React framework that supports server-side rendering, static site generation, and backend APIs."
  },
  {
    patterns: ["difference react nextjs", "react vs nextjs", "react versus nextjs"],
    answer: "React is a UI library, while Next.js is a framework built on React that adds routing, SSR, and optimization features."
  },
  {
    patterns: ["what is tailwind", "explain tailwind"],
    answer: "Tailwind CSS is a utility-first CSS framework that enables fast UI development using predefined classes."
  },
  {
    patterns: ["what is mongodb", "explain mongodb"],
    answer: "MongoDB is a NoSQL database that stores data in flexible document-based JSON format."
  },
  {
    patterns: ["what is mysql", "explain mysql"],
    answer: "MySQL is a relational database that stores structured data in tables using SQL queries."
  },
  {
    patterns: ["difference mongodb mysql", "mongodb vs mysql"],
    answer: "MongoDB is document-based and flexible, while MySQL is structured and relational."
  },
  {
    patterns: ["what is ssr", "server side rendering", "server-side rendering"],
    answer: "Server-Side Rendering renders pages on the server before sending them to the browser for better SEO and performance."
  },
  {
    patterns: ["what is ssg", "static site generation"],
    answer: "Static Site Generation pre-builds pages at build time for fast loading performance."
  },
  {
    patterns: ["what is useeffect", "useeffect hook"],
    answer: "useEffect is a React hook used to handle side effects like API calls and lifecycle events."
  },
  {
    patterns: ["what is usestate", "usestate hook"],
    answer: "useState is a React hook used to manage state inside functional components."
  },
  {
    patterns: ["what is virtual dom", "virtual dom"],
    answer: "Virtual DOM is a lightweight copy of the real DOM used by React to optimize UI updates."
  },
  {
    patterns: ["what is async await", "async await"],
    answer: "Async/await simplifies handling asynchronous operations in JavaScript."
  },
  {
    patterns: ["what is rest api", "rest api"],
    answer: "REST API is a web service architecture using HTTP methods like GET, POST, PUT, DELETE."
  },
  {
    patterns: ["what is api testing", "api testing"],
    answer: "API testing ensures endpoints return correct responses. I use Postman for validation."
  },
  {
    patterns: ["explain your experience"],
    answer: "At Webgeon Results, I build responsive UIs, optimize performance, integrate APIs, and manage databases."
  },
  {
    patterns: ["describe gym management"],
    answer: "It includes member tracking, payment history, and admin dashboards using Next.js and MongoDB."
  },
  {
    patterns: ["describe smart pet feeder"],
    answer: "An IoT-based automated pet feeding system with remote monitoring dashboard."
  },
  {
    patterns: ["describe agriculture robot"],
    answer: "A robot for soil monitoring, seed sowing, and spraying to improve farming efficiency."
  },
  {
    patterns: ["describe financuz"],
    answer: "A financial dashboard for tracking expenses and budget planning."
  },
  {
    patterns: ["describe chronos"],
    answer: "A luxury watch e-commerce UI with smooth animations and filtering features."
  },
  {
    patterns: ["how do you optimize performance", "performance optimization", "optimize"],
    answer: "By minimizing re-renders, lazy loading, optimizing images, and reducing API calls."
  },
  {
    patterns: ["what is responsive design", "responsive design"],
    answer: "Designing websites that adapt to different screen sizes using flexible layouts."
  },
  {
    patterns: ["what is accessibility", "accessibility"],
    answer: "Ensuring websites are usable by everyone, including people with disabilities."
  },
  {
    patterns: ["teamwork", "team work", "team player"],
    answer: "I communicate clearly and collaborate effectively to achieve team goals."
  },
  {
    patterns: ["leadership", "lead", "team lead"],
    answer: "I take initiative, guide teammates, and support decision-making."
  },
  {
    patterns: ["problem solving", "problem-solving"],
    answer: "I analyze root causes and implement efficient technical solutions."
  },
  {
    patterns: ["handle deadlines", "deadlines", "time management"],
    answer: "I prioritize tasks and follow structured planning to always deliver on time."
  },
  {
    patterns: ["handle stress", "stress", "pressure"],
    answer: "I stay organized and focus on solutions instead of pressure."
  },
  {
    patterns: ["code quality", "clean code", "coding standards"],
    answer: "I follow clean code principles and modular architecture."
  },
  {
    patterns: ["version control", "git", "github workflow"],
    answer: "I use Git for tracking changes and collaboration."
  },
  {
    patterns: ["deployment", "deploy", "vercel"],
    answer: "I deploy applications using platforms like Vercel."
  },
  {
    patterns: ["state management", "state"],
    answer: "I manage state using React hooks and structured component design."
  },
  {
    patterns: ["future goals", "career goals", "goal", "where do you see yourself"],
    answer: "To become a senior developer and lead scalable, impactful projects that make a real difference! 🚀"
  },
  {
    patterns: ["difference frontend backend", "frontend vs backend"],
    answer: "Frontend handles UI, backend handles logic and database."
  },
  {
    patterns: ["what is javascript", "javascript", "js language"],
    answer: "JavaScript is a programming language for building interactive web applications."
  },
  {
    patterns: ["what is css", "explain css"],
    answer: "CSS styles and designs web pages."
  },
  {
    patterns: ["what is html", "explain html"],
    answer: "HTML structures web page content."
  },
  {
    patterns: ["what is nodejs", "nodejs", "node js"],
    answer: "Node.js allows JavaScript to run on the server side."
  },
  {
    patterns: ["what is component", "react component"],
    answer: "A reusable piece of UI logic in React."
  },
  {
    patterns: ["what is props", "react props"],
    answer: "Props pass data between React components."
  },
  {
    patterns: ["what is hook", "react hooks"],
    answer: "Hooks allow functional components to use state and lifecycle features."
  },
  {
    patterns: ["what is seo", "seo"],
    answer: "SEO improves website visibility in search engines."
  },
  {
    patterns: ["what is middleware", "middleware"],
    answer: "Middleware processes requests before reaching the main handler."
  },
  {
    patterns: ["python", "python language"],
    answer: "Python is a versatile language Thomas uses for scripting, automation, and full-stack dev. He built a blog app using Python during his TechMogul internship."
  },
  {
    patterns: ["postman", "api tools"],
    answer: "Thomas uses Postman for API testing, endpoint validation, and REST API integration at Webgeon Results."
  },
  {
    patterns: ["arduino", "embedded systems", "iot"],
    answer: "Thomas worked with Arduino UNO, circuit design, sensor interfacing, and automation during his internship at Next Gen Pro."
  },
  {
    patterns: ["azure", "cloud", "microsoft azure"],
    answer: "Thomas holds a Microsoft Azure for Data Engineering certification from Coursera, covering cloud data engineering concepts."
  },
  {
    patterns: ["cgpa", "marks", "grades", "score"],
    answer: "Thomas completed his B.Tech with a CGPA of 7.45 and scored 87% in Senior Secondary (CBSE)."
  },
  {
    patterns: ["salary", "ctc", "package", "compensation"],
    answer: "Thomas is open to discussing compensation based on the role. Please contact him directly at thomasjose22@gmail.com 📧"
  },
  {
    patterns: ["remote", "work from home", "wfh"],
    answer: "Yes! Thomas is open to remote work and global collaborations. 📍 Currently based in Kerala, India."
  },
  {
    patterns: ["english", "english certificate", "language proficiency"],
    answer: "Thomas holds an EF SET English Certificate at C1 Advanced level (66/100), demonstrating professional English proficiency."
  },
];

// ── Smart Matching Engine ──────────────────────────────────────────
const STOP_WORDS = new Set([
  "a","an","the","is","are","was","were","be","been","being","have","has","had",
  "do","does","did","will","would","could","should","may","might","shall","can",
  "i","my","me","you","your","we","our","they","their","it","its","this","that",
  "of","in","on","at","to","for","with","by","from","about","as","or","and","but",
  "not","no","so","if","then","than","also","what","how","why","when","where","who",
  "tell","explain","describe","give","show","any","some","please","know","need",
  "want","more","there","here","which","very","just","much","many","really","can",
  "little","bit","help","info","information","details","him","his","her","them",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s.+#]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));
}

interface KBIndexEntry {
  entryIdx: number;
  tokens: Set<string>;
  rawPatterns: string[];
}

function buildKBIndex(): KBIndexEntry[] {
  return KB.map((entry, entryIdx) => {
    const patternTokens = new Set<string>();
    entry.patterns.forEach((p) => tokenize(p).forEach((t) => patternTokens.add(t)));
    return { entryIdx, tokens: patternTokens, rawPatterns: entry.patterns };
  });
}

const KB_INDEX = buildKBIndex();

function getBotResponse(input: string): string {
  const cleanInput = input.toLowerCase().trim();

  // ── Phase 1: exact substring match against raw patterns ──
  for (const entry of KB) {
    for (const p of entry.patterns) {
      if (cleanInput.includes(p) || p.includes(cleanInput)) {
        return entry.answer;
      }
    }
  }

  const userTokens = tokenize(input);
  if (userTokens.length === 0) {
    return "Could you rephrase that? 😊 I'm happy to answer questions about Thomas's skills, projects, experience, or contact info!";
  }

  // ── Phase 2: token overlap scoring ──
  let best: string | null = null;
  let bestScore = 0;

  for (const { entryIdx, tokens, rawPatterns } of KB_INDEX) {
    let score = 0;
    let phraseBonus = 0;

    for (const ut of userTokens) {
      if (tokens.has(ut)) {
        score += 2;
      }
      for (const kt of tokens) {
        if (kt !== ut && (kt.includes(ut) || ut.includes(kt)) && ut.length > 2) {
          score += 1;
        }
      }
    }

    // Bonus if ≥60% of a pattern phrase's tokens match user tokens
    for (const p of rawPatterns) {
      const pTokens = tokenize(p);
      const matched = pTokens.filter((t) => userTokens.includes(t)).length;
      if (pTokens.length > 0 && matched / pTokens.length >= 0.6) {
        phraseBonus = Math.max(phraseBonus, 3);
      }
    }

    const finalScore = score + phraseBonus;
    if (finalScore > bestScore) {
      bestScore = finalScore;
      best = KB[entryIdx].answer;
    }
  }

  if (bestScore >= 2 && best) return best;

  return "🤔 I'm not sure about that!\n\nYou can ask me about:\n• Skills & Technologies\n• Work Experience\n• Projects\n• Education\n• Certifications\n• Contact Information";
}

// ── Suggestion chips ───────────────────────────────────────────────
const SUGGESTIONS = ["About Thomas", "Skills", "Projects", "Experience", "Certifications", "Contact"];

// ── Dark-mode detector hook ────────────────────────────────────────
function useDarkMode(): boolean {
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setDark(el.classList.contains("dark")));
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

// ── Types ──────────────────────────────────────────────────────────
interface Message {
  id: number;
  role: "user" | "bot";
  text: string;
  time: string;
}

// ── Chatbot component ──────────────────────────────────────────────
const Chatbot = () => {
  const dark = useDarkMode();

  const c = {
    windowBg: dark ? "rgba(15,23,42,0.98)" : "rgba(255,255,255,0.98)",
    windowBorder: dark ? "#1e293b" : "rgba(200,210,255,0.4)",
    windowShadow: dark
      ? "0 25px 60px rgba(0,0,0,0.75),0 8px 24px rgba(59,130,246,0.3)"
      : "0 25px 60px rgba(0,0,0,0.16),0 8px 24px rgba(59,130,246,0.14)",
    msgBg: dark
      ? "linear-gradient(180deg,#0f172a 0%,#1e293b 100%)"
      : "linear-gradient(180deg,#f8faff 0%,#f2f4f8 100%)",
    botBg: dark ? "#1e293b" : "#ffffff",
    botTxt: dark ? "#e2e8f0" : "#1f2937",
    botBorder: dark ? "1px solid #334155" : "1px solid #e5e7eb",
    botShadow: dark ? "0 2px 8px rgba(0,0,0,0.4)" : "0 1px 4px rgba(0,0,0,0.06)",
    timeTxt: dark ? "#64748b" : "#9ca3af",
    chipRowBg: dark ? "#0f172a" : "#f5f7ff",
    chipRowBorder: dark ? "1px solid #1e293b" : "1px solid #e8ecf4",
    chipBg: dark ? "#1e293b" : "#eef2ff",
    chipBorder: dark ? "#334155" : "#c7d7fe",
    chipTxt: dark ? "#93c5fd" : "#3b5bdb",
    inputRowBg: dark ? "#0f172a" : "#ffffff",
    inputRowBdr: dark ? "1px solid #1e293b" : "1px solid #eff0f6",
    inputBg: dark ? "#1e293b" : "#f9fafb",
    inputBdr: dark ? "#334155" : "#e5e7eb",
    inputTxt: dark ? "#e2e8f0" : "#111827",
    sendDisabled: dark ? "#1e293b" : "#e5e7eb",
    badgeBg: dark ? "#1e293b" : "#ffffff",
    badgeBdr: dark ? "#334155" : "#e5e7eb",
    badgeTxt: dark ? "#e2e8f0" : "#374151",
    overlayBg: dark ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.4)",
  };

  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      text: "👋 Hi there! I'm Thomas's portfolio assistant.\n\nAsk me anything about his skills, projects, experience, or how to get in touch!",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 60);
      setTimeout(() => inputRef.current?.focus(), 320);
      setShowBadge(false);
    }
  }, [messages, open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullscreen) setFullscreen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreen]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: trimmed, time }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "bot", text: getBotResponse(trimmed), time },
      ]);
      setIsTyping(false);
    }, 700 + Math.random() * 400);
  };

  const windowStyle: React.CSSProperties = fullscreen
    ? {
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        background: c.windowBg,
        border: "none",
        boxShadow: "none",
        transition: "all 0.3s ease",
      }
    : {
        position: "fixed",
        bottom: "7.5rem",
        right: "1.5rem",
        width: "22rem",
        height: "36rem",
        borderRadius: "1.25rem",
        display: "flex",
        flexDirection: "column",
        background: c.windowBg,
        border: `1px solid ${c.windowBorder}`,
        boxShadow: c.windowShadow,
        overflow: "hidden",
        transition: "all 0.3s ease",
        zIndex: 40,
      };

  return (
    <>
      {/* Fullscreen overlay */}
      {open && fullscreen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            background: c.overlayBg,
          }}
          onClick={() => setFullscreen(false)}
        />
      )}

      {/* Launcher */}
      <div className="fixed z-50" style={{ bottom: "5.5rem", right: "1.5rem" }}>
        {/* Badge tooltip */}
        {!open && showBadge && (
          <div
            onClick={() => setOpen(true)}
            className="absolute text-sm px-4 py-2 rounded-2xl shadow-lg cursor-pointer select-none"
            style={{
              bottom: "100%",
              right: 0,
              marginBottom: "0.5rem",
              whiteSpace: "nowrap",
              animation: "fadeSlideIn 0.5s ease forwards",
              background: c.badgeBg,
              color: c.badgeTxt,
              border: `1px solid ${c.badgeBdr}`,
            }}
          >
            💬 Ask me anything!
          </div>
        )}

        {/* Launcher button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle chatbot"
          className="w-14 h-14 rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <img
            src="/assets/certificates/photo.jpg"
            alt="Chatbot"
            className="w-full h-full object-cover object-[50%_25%] rounded-full"
          />
        </button>
      </div>

      {/* Chat window */}
      {open && (
        <div style={windowStyle}>
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
          >
            <div className="relative flex-shrink-0">
              <img
                src="/assets/certificates/photo.jpg"
                alt="Thomas Jose"
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-white/40"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div
                className="w-10 h-10 rounded-full bg-white/20 items-center justify-center border-2 border-white/40"
                style={{ display: "none" }}
              >
                <Bot size={20} color="white" />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="font-semibold text-white text-sm leading-tight">Portfolio Assistant</div>
              <div className="text-white/70 text-xs">Online · Thomas Jose</div>
            </div>

            <button
              onClick={() => setFullscreen((v) => !v)}
              aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
              className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors mr-1"
              title={fullscreen ? "Exit fullscreen (Esc)" : "Open fullscreen"}
            >
              {fullscreen ? <Minimize2 size={14} color="white" /> : <Maximize2 size={14} color="white" />}
            </button>

            <button
              onClick={() => { setOpen(false); setFullscreen(false); }}
              className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <X size={14} color="white" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
            style={{ background: c.msgBg }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="flex items-end gap-2"
                style={{
                  flexDirection: msg.role === "user" ? "row-reverse" : "row",
                  animation: "fadeSlideIn 0.3s ease forwards",
                }}
              >
                {/* Avatar */}
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden flex items-center justify-center"
                  style={{
                    background:
                      msg.role === "bot"
                        ? "linear-gradient(135deg,#3b82f6,#8b5cf6)"
                        : "transparent",
                  }}
                >
                  {msg.role === "bot" ? (
                    <>
                      <img
                        src="/assets/certificates/photo.jpg"
                        alt="Thomas"
                        className="w-full h-full object-cover object-[50%_25%] rounded-full"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div
                        className="w-7 h-7 rounded-full items-center justify-center"
                        style={{ display: "none" }}
                      >
                        <Bot size={14} color="white" />
                      </div>
                    </>
                  ) : (
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}
                    >
                      <User size={14} color="white" />
                    </div>
                  )}
                </div>

                {/* Bubble */}
                <div style={{ maxWidth: fullscreen ? "60%" : "80%" }}>
                  <div
                    className="text-sm px-3.5 py-2.5 rounded-2xl whitespace-pre-wrap leading-relaxed"
                    style={
                      msg.role === "bot"
                        ? {
                            background: c.botBg,
                            color: c.botTxt,
                            border: c.botBorder,
                            boxShadow: c.botShadow,
                            borderBottomLeftRadius: "4px",
                          }
                        : {
                            background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                            color: "white",
                            borderBottomRightRadius: "4px",
                          }
                    }
                  >
                    {msg.text}
                  </div>
                  <div
                    className="text-xs mt-1 px-1"
                    style={{
                      color: c.timeTxt,
                      textAlign: msg.role === "user" ? "right" : "left",
                    }}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-end gap-2">
                <div
                  className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}
                >
                  <img
                    src="/assets/certificates/photo.jpg"
                    alt="Thomas"
                    className="w-full h-full object-cover object-[50%_25%] rounded-full"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl flex gap-1 items-center"
                  style={{
                    background: c.botBg,
                    border: c.botBorder,
                    borderBottomLeftRadius: "4px",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full inline-block"
                      style={{
                        background: "#94a3b8",
                        animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestion chips */}
          <div
            className="flex gap-2 px-3 py-2 overflow-x-auto flex-shrink-0 scrollbar-hide"
            style={{ background: c.chipRowBg, borderTop: c.chipRowBorder }}
          >
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: c.chipBg,
                  border: `1px solid ${c.chipBorder}`,
                  color: c.chipTxt,
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input row */}
          <div
            className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
            style={{ background: c.inputRowBg, borderTop: c.inputRowBdr }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder="Ask me anything..."
              className="flex-1 text-sm px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              style={{
                background: c.inputBg,
                border: `1px solid ${c.inputBdr}`,
                color: c.inputTxt,
              }}
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{
                background: input.trim()
                  ? "linear-gradient(135deg,#3b82f6,#8b5cf6)"
                  : c.sendDisabled,
              }}
            >
              <Send size={15} color={input.trim() ? "white" : "#94a3b8"} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// ── Contact Section ────────────────────────────────────────────────
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailSubject = encodeURIComponent(formData.subject || "Contact Form Message");
    const emailBody = encodeURIComponent(
      `Hello Thomas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:thomasjose22@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    toast({
      title: "Opening Email Client",
      description: "Your email client will open with the message pre-filled.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    const section = document.getElementById("contact");
    if (section) observer.observe(section);
    return () => { if (section) observer.unobserve(section); };
  }, []);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "thomasjose22@gmail.com", href: "mailto:thomasjose22@gmail.com", color: "text-blue-600" },
    { icon: Phone, label: "Phone", value: "+91 8304909105", href: "tel:+918304909105", color: "text-green-600" },
    { icon: Github, label: "GitHub", value: "Thomasjose-tech", href: "https://github.com/Thomasjose-tech", color: "text-gray-800" },
    { icon: Linkedin, label: "LinkedIn", value: "thomas-jose-98b97b220", href: "https://www.linkedin.com/in/thomas-jose-98b97b220", color: "text-blue-700" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-opacity duration-700 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info column */}
          <div
            className={`space-y-8 transition-opacity duration-700 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: isVisible ? "0.2s" : "0s" }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, or potential
                collaborations. Whether you have a specific project in mind or just want to chat
                about technology, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-accent transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`p-2 rounded-lg bg-background ${contact.color}`}>
                    <contact.icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
              <div className="p-2 rounded-lg bg-background text-red-500">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium text-foreground">Kerala, India</div>
              </div>
            </div>
          </div>

          {/* Contact form column */}
          <div
            className={`transition-opacity duration-700 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: isVisible ? "0.4s" : "0s" }}
          >
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 shadow-glow"
                    size="lg"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer divider */}
        <div
          className={`text-center mt-16 pt-8 border-t border-border px-4 md:px-0 transition-opacity duration-300 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: isVisible ? "0.7s" : "0s" }}
        />
      </div>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/918304909105"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        title="Chat on WhatsApp"
      >
        <img src="/lovable-uploads/WhatsApp-icone.png" alt="WhatsApp" className="w-8 h-8" />
      </a>

      {/* Chatbot */}
      <Chatbot />
    </section>
  );
};

export default Contact;