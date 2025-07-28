import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaInstagram, 
  FaLinkedin, 
  FaFacebook, 
  FaDev, 
  FaEnvelope 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
      color: '#333'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/yourusername',
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: '#0077B5'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://facebook.com/yourusername',
      color: '#1877F2'
    },
    {
      name: 'Dev.to',
      icon: FaDev,
      url: 'https://dev.to/yourusername',
      color: '#0A0A0A'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:your.email@example.com',
      color: '#EA4335'
    }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="footer">
      <motion.div 
        className="footer-container"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="footer-content"
          variants={itemVariants}
        >
          <div className="footer-section">
            <h3>Connect With Me</h3>
            <p>Let's build something amazing together!</p>
          </div>
          
          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: `0 10px 20px rgba(0,0,0,0.2)`
                  }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  <social.icon />
                  <span className="social-name">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <div className="footer-divider"></div>
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <p>Built with ❤️ using React</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 