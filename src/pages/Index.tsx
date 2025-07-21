// import Navigation from "@/components/Navigation";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Projects from "@/components/Projects";
// import Experience from "@/components/Experience";
// import Certifications from "@/components/Certifications";
// import Contact from "@/components/Contact";

// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       <Navigation />
//       <main>
//         <section id="hero">
//           <Hero />
//         </section>
//         <About />
//         <Projects />
//         <Experience />
//         <Certifications />
//         <Contact />
//       </main>
//     </div>
//   );
// };

// export default Index;
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="hero" className="pt-16">
          <Hero />
        </section>
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
