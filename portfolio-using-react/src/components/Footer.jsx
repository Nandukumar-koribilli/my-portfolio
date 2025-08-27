import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <img
          src="https://img.icons8.com/ios-filled/100/github.png"
          alt="GitHub"
          style={{ width: '2rem', height: '2rem' }}
          data-icon="github"
        />
      ),
      url: 'https://github.com/Nandukumar-koribilli',
      color: '#333'
    },
    {
      name: 'Instagram',
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
          alt="Instagram"
          style={{ width: '2rem', height: '2rem' }}
          data-icon="instagram"
        />
      ),
      url: 'https://www.instagram.com/nandu___max/',
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="LinkedIn"
          style={{ width: '2rem', height: '2rem' }}
          data-icon="linkedin"
        />
      ),
      url: 'https://www.linkedin.com/in/nandukumar-koribilli-062ba42a2/',
      color: '#0077B5'
    },
    {
      name: 'Facebook',
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
          alt="Facebook"
          style={{ width: '2rem', height: '2rem' }}
          data-icon="facebook"
        />
      ),
      url: 'https://www.facebook.com/nandu.koribilli/',
      color: '#1877F2'
    },
    {
      name: 'Email',
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/9068/9068642.png"
          alt="Email"
          style={{ width: '2rem', height: '2rem' }}
          data-icon="envelope"
        />
      ),
      url: 'mailto:nandukumar9980@gmail.com',
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
                  style={{ color: social.color }}
                >
                  {social.icon}
                  {/* <span className="social-name">{social.name}</span> */}
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
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Built with ❤️ using React</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;