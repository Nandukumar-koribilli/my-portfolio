import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaMicrochip, FaLaptopCode } from 'react-icons/fa';
import './Strengths.css';

const Strengths = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const strengthsData = [
    {
      title: "AI & ML Expertise",
      description: "Proficient in leveraging AI tools and ML frameworks for innovative solutions",
      icon: <FaRobot />
    },
    {
      title: "IoT & Robotics",
      description: "Strong expertise in IoT, robotics, and embedded systems",
      icon: <FaMicrochip />
    },
    {
      title: "Web Development",
      description: "Adept at building responsive web applications and automation projects",
      icon: <FaLaptopCode />
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
    <section id="strengths" className="strengths">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Strengths
        </motion.h2>
        
        <motion.div 
          className="strengths-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {strengthsData.map((strength, index) => (
            <motion.div 
              key={index}
              className="strength-item"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="strength-icon">
                {strength.icon}
              </div>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Strengths; 