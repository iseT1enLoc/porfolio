import "../css/Content.css"
import Hero from "../components/Hero"
import "../index.css"
const Home = () => {
  return (
    <>
    <div>
    <Hero />
     <h1 className="about-title">Home Page</h1>
     <p className="about-description">This is the Home page where you can learn more about me.</p>
     <p className="about-description">
          Welcome to my digital home. I'm a passionate developer, creative problem-solver, and lifelong learner dedicated to crafting innovative solutions.
          Here, you'll discover projects, insights, and stories that fuel my journey in technology.
          I'm excited to share my work with you—let's build something great together!</p>
    </div>    
    </>

  );
};
export default Home;
  