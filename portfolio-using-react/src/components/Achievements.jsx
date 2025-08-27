import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCertificate, 
  FaChartLine, 
  FaMicrochip, 
  FaCode, 
  FaPython, 
  FaCogs 
} from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievementsData = [
    {
      title: "Artificial Intelligence",
      issuer: "Programming Hub",
      date: "March 31, 2021",
      icon: <FaCertificate />
    },
    {
      title: "Data Science BootCamp",
      issuer: "6-week course - From Analysing Data To Creating ML Models",
      date: "",
      icon: <FaChartLine />
    },
    {
      title: "IoT Certification",
      issuer: "edX, Curtin University",
      date: "2024",
      icon: <FaMicrochip />
    },
    {
      title: "Full Stack Application Development",
      issuer: "edX, IBM",
      date: "2024",
      icon: <FaCode />
    },
    {
      title: "Python Certification",
      issuer: "Programming Hub, Google Developer",
      date: "2020",
      icon: <FaPython />
    },
    {
      title: "Electronics and Hardware",
      issuer: "Vocational courses",
      date: "2020",
      icon: <FaCogs />
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
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements & Certifications
        </motion.h2>
        
        <motion.div 
          className="achievements-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievementsData.map((achievement, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.issuer}</p>
              {achievement.date && <p className="achievement-date">{achievement.date}</p>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 