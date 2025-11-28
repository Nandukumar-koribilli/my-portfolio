import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experienceData = [
    {
      title: "Python Full Stack Intern",
      company: "Millennium - Vishakapatnam",
      date: "May 30 - Jul 17, 2025",
      responsibilities: [
        "Developed web applications using Python, React, and Flask for full-stack solutions",
        "Implemented RESTful APIs and integrated MongoDB databases for efficient data management"
      ]
    },
    {
      title: "Alumni Volunteer",
      company: "Gayatri Vidya Parishad College - Vishakapatnam",
      date: "2023",
      responsibilities: [
        "Organized alumni events and mentorship programs to foster community connections"
      ]
    },
    {
      title: "Volunteer",
      company: "Vizag Volunteers - Vishakapatnam",
      date: "2023",
      responsibilities: [
        "Supported community outreach and social impact initiatives"
      ]
    },
    {
      title: "Editorial Team Member",
      company: "Gayatri Vidya Parishad College - Vishakapatnam",
      date: "2023",
      responsibilities: [
        "Curated and edited content for college publications and newsletters"
      ]
    },
    {
      title: "Volunteer",
      company: "Street Cause - Vishakapatnam",
      date: "2023",
      responsibilities: [
        "Contributed to local community service initiatives"
      ]
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        
        <motion.div 
          className="timeline"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <motion.div 
                className="timeline-content"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="timeline-date">{exp.date}</p>
                <ul>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 