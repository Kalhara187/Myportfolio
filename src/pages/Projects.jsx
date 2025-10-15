import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-6 animate-pulse">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Explore my portfolio of innovative projects that showcase my passion for creating 
            cutting-edge solutions and my expertise in modern technologies.
          </p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard
            title="Research Conference App"
            desc="A comprehensive web application designed to streamline research conference management. Features include speaker registration, session scheduling, attendee management, and real-time updates. Built with a focus on user experience and efficient conference coordination."
            tech="HTML5, CSS3, JavaScript"
            github="https://github.com/Kalhara187/reserch-conference.git"
            image="abc.jpg"
          />
          
          <ProjectCard
            title="Interactive Minigame Platform"
            desc="An engaging collection of browser-based mini-games featuring smooth animations, responsive design, and interactive gameplay. Each game is optimized for performance and provides an entertaining user experience across all devices."
            tech="HTML, Css, JavaScript"
            github="https://github.com/Kalhara187/minigame.git"
            image="abc1.jpg"
          />
          
          <ProjectCard
            title="Smart Library Management System"
            desc="A robust library management solution featuring automated book tracking, member management, fine calculation, and comprehensive reporting. Designed to digitize and streamline traditional library operations with an intuitive interface."
            tech="Python"
            github="https://github.com/Kalhara187/itum.git"
            image="abc3.JPG"
          />
        </div>
      
        <div className="text-center mt-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <p className="text-gray-700 text-xl mb-6 font-medium">Ready to explore more of my work?</p>
            <a 
              href="https://github.com/Kalhara187" 
              target="_blank" 
              rel="noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 font-semibold text-lg"
            >
              <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Explore My GitHub Portfolio
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
