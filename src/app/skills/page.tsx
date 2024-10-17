

export default function Jobs()  {
  return (
    <div>
         <section id="Skills" className="bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">Skills</h1>
        </div>

        {/* Skill Boxes */}
        <div className="flex justify-evenly text-center flex-wrap gap-8">
          {/* Frontend Development */}
          <div className="boxes border-2 border-black rounded-2xl shadow-lg w-[308px] h-[342px] bg-white hover:scale-110 transition-transform duration-200 ease-in">
            <h1 className="underline mt-2 text-lg font-bold">Frontend Development</h1>
            <div className="skills-icon flex justify-center my-10 text-5xl space-x-8">
              <i className="devicon-html5-plain-wordmark colored"></i>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-react-original colored"></i>
            </div>
            <div className="skill-box-para text-sm font-bold text-gray-600">
              <p>
                Creates websites using web languages such as HTML, CSS, React, and
                JavaScript that allow users to access and interact with the sites with
                beautiful UI.
              </p>
            </div>
          </div>

          {/* Backend Development */}
          <div className="boxes border-2 border-black rounded-2xl shadow-lg w-[308px] h-[342px] bg-white hover:scale-110 transition-transform duration-200 ease-in">
            <h1 className="underline mt-2 text-lg font-bold">Backend Deployment</h1>
            <div className="skills-icon flex justify-center my-10 text-5xl space-x-8">
              <i className="devicon-python-plain colored"></i>
              <i className="devicon-nodejs-plain colored"></i>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
            </div>
            <div className="skill-box-para text-sm font-bold text-gray-600">
              <p>
                Build and maintain the mechanisms that process data and perform actions
                on websites, like Admin panels and Dashboards.
              </p>
            </div>
          </div>

          {/* Tools */}
          <div className="boxes border-2 border-black rounded-2xl shadow-lg w-[308px] h-[342px] bg-white hover:scale-110 transition-transform duration-200 ease-in">
            <h1 className="underline mt-2 text-lg font-bold">Tools</h1>
            <div className="skills-icon flex justify-center my-10 text-5xl space-x-8">
              <i className="devicon-git-plain-wordmark colored"></i>
              <i className="devicon-visualstudio-plain colored"></i>
              <i className="devicon-docker-plain-wordmark colored"></i>
            </div>
            <div className="skill-box-para text-sm font-bold text-gray-600">
              <p>My favorite tools for version control, code editing, and container orchestration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

  );
};
