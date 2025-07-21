import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = encodeURIComponent(formData.subject || "Contact Form Message");
    const emailBody = encodeURIComponent(
      `Hello Thomas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    
    // Open email client with pre-filled content
    const mailtoUrl = `mailto:thomasjose22@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoUrl;
    
    toast({
      title: "Opening Email Client",
      description: "Your email client will open with the message pre-filled.",
    });
    
    // Keep form data so user can see it was processed
    // setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "thomasjose22@gmail.com",
      href: "mailto:thomasjose22@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8304909105",
      href: "tel:+918304909105",
      color: "text-green-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Thomasjose-tech",
      href: "https://github.com/Thomasjose-tech",
      color: "text-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "thomas-jose-98b97b220",
      href: "https://www.linkedin.com/in/thomas-jose-98b97b220",
      color: "text-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={contact.label}
                  className="bg-gradient-card shadow-elegant border-0 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`p-3 rounded-lg bg-primary/10 ${contact.color} group-hover:bg-primary/20 transition-colors duration-300`}>
                        <contact.icon size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">{contact.label}</p>
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location */}
            <Card className="bg-gradient-card shadow-elegant border-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-red-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Location</p>
                    <p className="text-muted-foreground">Kerala, India</p>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-gradient-card shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary resize-none"
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

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.8s' }}>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;