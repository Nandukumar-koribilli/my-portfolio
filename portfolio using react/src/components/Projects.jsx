import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGlobe, FaSeedling, FaLock, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projectsData = [
    {
      title: "Solar System Model",
      description: "Developed an interactive simulation of the solar system using Python and OpenCV. Implemented realistic orbital mechanics for educational purposes.",
      icon: <FaGlobe />,
      technologies: ["Python", "OpenCV"],
      link: "#"
    },
    {
      title: "Crop Yield Predictor",
      description: "Built a Machine Learning model to forecast crop outcomes using TensorFlow and PyTorch. Integrated data analytics for improved agricultural predictions.",
      icon: <FaSeedling />,
      technologies: ["TensorFlow", "PyTorch", "Machine Learning"],
      link: "#"
    },
    {
      title: "IoT Smart Locking System",
      description: "Developed an IoT-based project using Arduino for Smart locking system. Applied hardware and software integration skills.",
      icon: <FaLock />,
      technologies: ["Arduino", "IoT", "Hardware"],
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Personal Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-icon">
                {project.icon}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a 
                href={project.link} 
                className="project-link"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaExternalLinkAlt />
                View Project
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 