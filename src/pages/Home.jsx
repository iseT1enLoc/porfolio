import "../css/Content.css"
import Hero from "../components/Hero"
import Footer from "../components/footer"
import About from "../pages/About"
import "../index.css"

const IntroSection = ({ title, description }) => {
  return (
    <div className="intro-section text-center p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">{description}</p>
    </div>
  );
};
const Home = () => {
  const sections = [
    {
      title: "Welcome to My Digital Hub",
      description:
        "Hi, I'm a passionate developer dedicated to building innovative and efficient software solutions. My focus is on web development, backend architecture, and user-friendly applications. Explore my work and join me in pushing technology forward!",
    },
    {
      title: "Explore My Projects",
      description:
        "Dive into a collection of projects that highlight my expertise in full-stack development, UI/UX design, and problem-solving. From web applications to backend systems, each project showcases my skills in modern frameworks and best coding practices.",
    },
    {
      title: "Tech Insights & Guides",
      description:
        "I document my journey in software development by sharing tutorials, coding tips, and insights into emerging technologies. Whether you're a beginner or an experienced developer, you'll find valuable content to enhance your skills.",
    },
    {
      title: "Connect & Collaborate",
      description:
        "Let's build something amazing together! Whether you're interested in open-source projects, tech discussions, or collaborations, I'm always open to connecting with like-minded developers and tech enthusiasts.",
    },
  ];
  return (
    <>
    <div>
    <Hero/>
     <About/>
     {sections.map((section, index) => (
        <IntroSection
          key={index}
          title={section.title}
          description={section.description}
        />
      ))}
    </div>    
    <Footer/> 
    </>

  );
};
export default Home;
  