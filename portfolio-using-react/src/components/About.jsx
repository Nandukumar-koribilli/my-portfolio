import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const educationData = [
    {
      institution: "Gayatri Vidya Parishad",
      degree: "Honors B.Sc. Computer Science (Major: Computer Science, Minor: IoT)",
      details: "2023-2027"
    },
    {
      institution: "CIPRA Junior College",
      degree: "Intermediate",
      details: "2023"
    },
    {
      institution: "Sri Satya Industrial Training Center",
      degree: "ITI (Electrician)",
      details: "2020-2022"
    },
    {
      institution: "ZP High School",
      degree: "Board of Secondary Education",
      details: "2015-2020"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I am a passionate Computer Science student and AI & IoT enthusiast pursuing an Honors B.Sc. 
              in Computer Science at Gayatri Vidya Parishad with a minor in IoT. I am skilled in software 
              development, robotics, and intelligent automation, actively seeking challenging roles to 
              contribute innovative solutions while continuously learning and collaborating with 
              forward-thinking teams.
            </p>
          </motion.div>
          
          <motion.div className="education" variants={itemVariants}>
            <h3>Education</h3>
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                className="education-item"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4>{edu.institution}</h4>
                <p>{edu.degree}</p>
                <p>{edu.details}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 