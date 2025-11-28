import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, 
  FaBrain, 
  FaGlobe, 
  FaMicrochip, 
  FaDatabase, 
  FaTools 
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillsData = [
    {
      category: "Programming Languages",
      icon: <FaCode />,
      skills: ["Python", "C++", "JavaScript", "HTML", "CSS", "C"]
    },
    {
      category: "AI & Data Science",
      icon: <FaBrain />,
      skills: ["TensorFlow", "Keras", "PyTorch", "OpenCV"]
    },
    {
      category: "Web & App Development",
      icon: <FaGlobe />,
      skills: ["React", "Flutter", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "IoT, Robotics & Embedded",
      icon: <FaMicrochip />,
      skills: ["Arduino", "ROS", "ArduPilot", "Raspberry Pi"]
    },
    {
      category: "Databases",
      icon: <FaDatabase />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      category: "Tools & Others",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "Linux", "Bash", "Electronics", "Hardware", "IoT"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3>
                {category.icon}
                {category.category}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="skill-tag"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      background: "var(--gradient-primary)",
                      color: "white"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 