import React from 'react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express.js'] },
    { category: 'Tools & Others', items: ['Git', 'GitHub', 'VS Code', 'AutoCAD', 'Figma'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL'] }
  ];

  const experiences = [
    {
      title: 'Diploma in Information Technology',
      organization: 'Institute of Technology University of Moratuwa',
      period: '2022 - 2023',
      description: 'Completed a comprehensive diploma program focusing on software development, web technologies, and database management.'
    },
    {
      title: 'Frontend Developer',
      organization: 'Personal Projects',
      period: '2022 - 2023',
      description: 'Building responsive web applications using modern technologies like React, Tailwind CSS, and JavaScript.'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Passionate Computer Science student with a love for creating innovative web solutions 
            and bringing ideas to life through code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-4xl mr-3">👨‍💻</span>
              Personal Journey
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🎓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Education</h4>
                  <p className="text-gray-600">Undergraduate Institute Of Technology University Of Moratuwa</p>
                  <p className="text-sm text-gray-500">Focusing on software engineering and web development</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Mission</h4>
                  <p className="text-gray-600">Building accessible and user-friendly web applications</p>
                  <p className="text-sm text-gray-500">Committed to creating digital experiences that make a difference</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Passion</h4>
                  <p className="text-gray-600">Frontend development and UI/UX design</p>
                  <p className="text-sm text-gray-500">Love turning complex problems into simple, beautiful solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-4xl mr-3">💼</span>
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-bold text-gray-800">{exp.title}</h4>
                    <span className="text-sm text-blue-600 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">{exp.organization}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h3>
            <p className="text-lg text-gray-600">Technologies and tools I work with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">{skillGroup.category}</h4>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-center">
                      <span className="px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200/50 w-full text-center">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Let's Work Together</h3>
            <p className="text-lg text-gray-600 mb-6">
              I'm always excited to collaborate on interesting projects and learn new technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
              >
                Contact Me
              </a>
              <a 
                href="/projects" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
