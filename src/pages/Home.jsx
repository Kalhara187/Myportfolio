import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen pt-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Image */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
          >
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                <img
                  src="profile.jpg" // Replace with your image path
                  alt="Professional headshot of [Your Name], web developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="space-y-6 mb-12"
            variants={itemVariants}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight leading-tight">
                    I'm{' Yasodha Kalhara'},
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Web Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              A passionate Web development student crafting user-centered digital experiences 
              through thoughtful design and clean code.
            </p>
          </motion.div>

          {/* Specialization Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={itemVariants}
          >
            {['React Developer', 'UI/UX Design', 'Backend Developer', 'AutoCad Desiner'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white rounded-full text-neutral-700 font-medium shadow-md border border-neutral-200 hover:shadow-lg transition-shadow duration-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold"
              aria-label="View my projects"
            >
              <span>View My Work</span>
              <ArrowRight size={20} />
            </Link>
            
            
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            <a
              href="https://github.com/Kalhara187"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 text-neutral-700 hover:text-primary-600"
              aria-label="Visit my GitHub profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yashoda-kalhara-bb4594306"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 text-neutral-700 hover:text-primary-600"
              aria-label="Connect with me on LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;