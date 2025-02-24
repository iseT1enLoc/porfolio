import "../css/Hero.css"
import "../index.css"
const Hero = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen bg-gray-100 p-8"
    style={{ backgroundImage: "url('https://assets.goal.com/images/v3/blt2aaca933046f8b00/Cristiano%20Ronaldo%20Portugal%202024%20(4).jpg?auto=webp&format=pjpg&width=1080&quality=60')",
            
    }}>
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center dark:bg-gray-800 text-white" >
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold">
            CALL ME WHENEVER YOU NEED
          </h1>
          <p className="text-lg text-white mt-4">
            I'm a passionate life-long learner, always exploring new technologies and creating innovative projects.
          </p>
          <a
            href="https://inseclab.uit.edu.vn/"
            target ="_blank"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-blue-700 transition"
          >
            VIEW MY FAVORITE PLACE HEHEHEH
          </a>
        </div>

        {/* Right: Avatar Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEak6ML_bpuAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730914226888?e=1746057600&v=beta&t=VFbG3sViPkM4UkHOfVcsamqvW_3mRlFGCdKyv03HxaA" // Replace with your actual avatar URL
            alt="Avatar"
            className="w-60 h-60 rounded-full shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


