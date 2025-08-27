import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaUserCircle } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
  }, []);

  const heroVariants = {
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

  const typingVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="hero">
      {/* Spline 3D Background */}
      <div className="spline-background">
        <iframe 
          src="https://my.spline.design/clonercubesimplecopy-ZA8yCe5G2jNdLrQY86BoxV3I/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          title="3D Background"
        />
      </div>
      
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Hi, I'm {' '}
            <span className="highlight">
              {isTyping ? (
                <motion.span
                  variants={typingVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Nandu Kumar Koribilli
                </motion.span>
              ) : (
                'Nandu Kumar Koribilli'
              )}
            </span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            variants={itemVariants}
          >
            AI & IoT Enthusiast | Full Stack Developer | Robotics Enthusiast
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            Passionate about software development, robotics, and intelligent automation. 
            Currently pursuing Honors B.Sc. in Computer Science with a minor in IoT.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="profile-card"
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="profile-avatar">
              <FaUserCircle />
            </div>
            <h3>Computer Science Student</h3>
            <p>Gayatri Vidya Parishad</p>
            <div className="social-links">
              <motion.a 
                href="https://github.com/yourusername" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/yourusername" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://twitter.com/yourusername" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;