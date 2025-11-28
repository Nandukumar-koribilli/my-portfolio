# 🌟 React Portfolio Website

A modern, responsive portfolio website built with React, featuring a beautiful dark theme design, smooth animations, and interactive 3D background using Spline.

![React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.12.16-ff0055)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📋 Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation Guide](#-installation-guide)
  - [For Windows](#for-windows)
  - [For macOS/Linux](#for-macoslinux)
- [Running the Project](#-running-the-project)
- [Project Structure](#-project-structure)
- [Customization Guide](#-customization-guide)
- [Troubleshooting](#-troubleshooting)
- [Deployment](#-deployment)
- [Technologies Used](#-technologies-used)
- [Support](#-support)

---

## ✨ Features

### **Modern React Architecture**

- ⚛️ **React 18** with functional components and hooks
- 🎭 **Framer Motion** for smooth animations and transitions
- 🎨 **React Icons** for beautiful iconography
- 👁️ **React Intersection Observer** for scroll-triggered animations
- 📱 **Fully Responsive Design** that works on all devices

### **Interactive Design**

- 🎮 **Spline 3D Background** - Interactive 3D animation in the hero section
- ✨ **Smooth Animations** - Page transitions, hover effects, and micro-interactions
- 🌙 **Dark Theme** - Modern dark color scheme with gradient accents
- 🍔 **Mobile Navigation** - Hamburger menu for mobile devices
- ⏳ **Loading Screen** - Animated loading screen with spinner

### **Complete Portfolio Sections**

1. **Hero Section** - Eye-catching introduction with 3D background
2. **About Me** - Personal introduction and educational background
3. **Skills** - Categorized technical skills with interactive tags
4. **Experience** - Timeline-based work experience display
5. **Projects** - Showcase of personal projects with technology tags
6. **Achievements** - Certifications and accomplishments
7. **Strengths** - Key strengths and expertise areas
8. **Contact** - Contact form and information

---

## 🔧 Prerequisites

Before you begin, make sure you have the following installed on your computer:

### **Required Software**

1. **Node.js** (version 14 or higher)

   - Download from: [https://nodejs.org/](https://nodejs.org/)
   - **Recommended**: Download the LTS (Long Term Support) version
   - This will automatically install `npm` (Node Package Manager)

2. **Code Editor** (Optional but recommended)

   - [Visual Studio Code](https://code.visualstudio.com/) - Free and popular
   - Or any text editor of your choice

3. **Git** (Optional - only if cloning from repository)
   - Download from: [https://git-scm.com/](https://git-scm.com/)

### **Verify Installation**

Open your terminal/command prompt and run these commands to verify:

```bash
node --version
# Should show: v14.x.x or higher

npm --version
# Should show: 6.x.x or higher
```

If you see version numbers, you're ready to proceed! 🎉

---

## 📥 Installation Guide

### **For Windows**

1. **Download or Clone the Project**

   **Option A: Download ZIP**

   - Download the project as a ZIP file
   - Extract it to a folder (e.g., `C:\Users\YourName\Documents\portfolio-using-react`)

   **Option B: Clone with Git**

   ```bash
   git clone <repository-url>
   cd portfolio-using-react
   ```

2. **Open Command Prompt or PowerShell**

   - Press `Win + R`, type `cmd`, and press Enter
   - Or search for "Command Prompt" in the Start menu

3. **Navigate to Project Directory**

   ```bash
   cd "C:\Users\YourName\Documents\portfolio-using-react"
   ```

   _(Replace with your actual path)_

4. **Install Dependencies**

   ```bash
   npm install
   ```

   - This will download all required packages (may take 2-5 minutes)
   - You'll see a progress bar and package names being installed
   - Wait until you see "added XXX packages" message

5. **Start the Development Server**
   ```bash
   npm start
   ```
   - The project will compile and start
   - Your default browser will automatically open to `http://localhost:3000`
   - If it doesn't open automatically, manually open your browser and go to `http://localhost:3000`

### **For macOS/Linux**

1. **Download or Clone the Project**

   **Option A: Download ZIP**

   - Download the project as a ZIP file
   - Extract it to a folder (e.g., `~/Documents/portfolio-using-react`)

   **Option B: Clone with Git**

   ```bash
   git clone <repository-url>
   cd portfolio-using-react
   ```

2. **Open Terminal**

   - Press `Cmd + Space`, type "Terminal", and press Enter (macOS)
   - Or use your preferred terminal application

3. **Navigate to Project Directory**

   ```bash
   cd ~/Documents/portfolio-using-react
   ```

   _(Replace with your actual path)_

4. **Install Dependencies**

   ```bash
   npm install
   ```

   - This will download all required packages (may take 2-5 minutes)
   - Wait until you see "added XXX packages" message

5. **Start the Development Server**
   ```bash
   npm start
   ```
   - The project will compile and start
   - Your default browser will automatically open to `http://localhost:3000`

---

## 🚀 Running the Project

### **Development Mode**

```bash
npm start
```

- Runs the app in development mode
- Opens [http://localhost:3000](http://localhost:3000) in your browser
- The page will reload automatically when you make changes
- You will see any errors in the console

### **Build for Production**

```bash
npm run build
```

- Creates an optimized production build in the `build` folder
- The build is minified and optimized for best performance
- Your app is ready to be deployed!

### **Run Tests**

```bash
npm test
```

- Launches the test runner in interactive watch mode

### **Stopping the Server**

- Press `Ctrl + C` in the terminal/command prompt
- Type `Y` when asked to terminate the batch job (Windows)

---

## 📁 Project Structure

```
portfolio-using-react/
├── public/                      # Public assets
│   └── index.html              # HTML template
├── src/                        # Source files
│   ├── components/             # React components
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Navbar.css          # Navbar styles
│   │   ├── Hero.jsx            # Hero section with 3D background
│   │   ├── Hero.css            # Hero styles
│   │   ├── About.jsx           # About section
│   │   ├── About.css           # About styles
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Skills.css          # Skills styles
│   │   ├── Experience.jsx      # Experience timeline
│   │   ├── Experience.css      # Experience styles
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Projects.css        # Projects styles
│   │   ├── Achievements.jsx    # Achievements section
│   │   ├── Achievements.css    # Achievements styles
│   │   ├── Strengths.jsx       # Strengths section
│   │   ├── Strengths.css       # Strengths styles
│   │   ├── Contact.jsx         # Contact form
│   │   └── Contact.css         # Contact styles
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # App styles
│   ├── index.js                # Entry point
│   ├── index.css               # Global styles
│   └── SplashCursor.jsx        # Custom cursor component
├── package.json                # Project dependencies
├── package-lock.json           # Locked dependency versions
└── README.md                   # This file
```

---

## 🎨 Customization Guide

### **1. Update Personal Information**

#### **Hero Section** (`src/components/Hero.jsx`)

```javascript
// Update your name, title, and description
<h1>Your Name</h1>
<h2>Your Title</h2>
<p>Your description...</p>
```

#### **About Section** (`src/components/About.jsx`)

```javascript
// Update your bio, education, and background
```

#### **Contact Section** (`src/components/Contact.jsx`)

```javascript
// Update your email, phone, location, and social links
```

### **2. Customize Colors**

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary-color: #6366f1; /* Main brand color */
  --secondary-color: #8b5cf6; /* Secondary brand color */
  --accent-color: #06b6d4; /* Accent color */
  --bg-primary: #0f0f23; /* Main background */
  --bg-secondary: #1a1a2e; /* Secondary background */
  --bg-card: #16213e; /* Card background */
  /* Change these to your preferred colors */
}
```

### **3. Update Content**

- **Skills**: Edit the skills array in `src/components/Skills.jsx`
- **Experience**: Update the experience data in `src/components/Experience.jsx`
- **Projects**: Modify the projects array in `src/components/Projects.jsx`
- **Achievements**: Update achievements in `src/components/Achievements.jsx`

### **4. Change 3D Background**

In `src/components/Hero.jsx`, replace the Spline iframe:

```javascript
<iframe
  src="YOUR_SPLINE_URL_HERE"
  // ... other props
/>
```

You can create your own 3D scene at [https://spline.design/](https://spline.design/)

---

## 🔍 Troubleshooting

### **Common Issues and Solutions**

#### **Issue: `npm install` fails**

**Solution:**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json  # macOS/Linux
# OR
rmdir /s node_modules & del package-lock.json  # Windows

# Reinstall
npm install
```

#### **Issue: Port 3000 is already in use**

**Solution:**

```bash
# Option 1: Kill the process using port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill

# Option 2: Use a different port
set PORT=3001 && npm start  # Windows
PORT=3001 npm start         # macOS/Linux
```

#### **Issue: Browser doesn't open automatically**

**Solution:**

- Manually open your browser
- Navigate to `http://localhost:3000`

#### **Issue: Blank page or errors in browser**

**Solution:**

```bash
# Stop the server (Ctrl + C)
# Clear cache and rebuild
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm start
```

#### **Issue: Node version too old**

**Solution:**

- Download and install the latest LTS version from [nodejs.org](https://nodejs.org/)
- Restart your terminal/command prompt
- Verify: `node --version`

---

## 🌐 Deployment

### **Deploy to Netlify** (Recommended - Easiest)

1. **Create a free account** at [netlify.com](https://www.netlify.com/)
2. **Drag and drop** your `build` folder to Netlify
3. **Or connect your GitHub repository** for automatic deployments

**Steps:**

```bash
# Build the project
npm run build

# The 'build' folder is ready to deploy
```

### **Deploy to Vercel**

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Follow the prompts** in your terminal

### **Deploy to GitHub Pages**

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to `package.json`**

   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio-using-react",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

---

## 🛠️ Technologies Used

| Technology                      | Version  | Purpose           |
| ------------------------------- | -------- | ----------------- |
| **React**                       | 18.2.0   | UI Library        |
| **Framer Motion**               | 10.12.16 | Animation Library |
| **React Icons**                 | 4.8.0    | Icon Library      |
| **React Intersection Observer** | 9.4.3    | Scroll Animations |
| **OGL**                         | 1.0.11   | WebGL Library     |
| **CSS3**                        | -        | Styling           |
| **Spline**                      | -        | 3D Background     |

---

## 📝 Available Scripts

| Command         | Description                                       |
| --------------- | ------------------------------------------------- |
| `npm start`     | Start development server at http://localhost:3000 |
| `npm run build` | Create production build in `build/` folder        |
| `npm test`      | Run tests in watch mode                           |
| `npm run eject` | Eject from Create React App (⚠️ irreversible)     |

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

---

## 📞 Support

If you encounter any issues or have questions:

1. **Check the [Troubleshooting](#-troubleshooting) section** above
2. **Open an issue** on GitHub
3. **Contact me** via the contact form in the portfolio

### **Helpful Resources**

- [React Documentation](https://react.dev/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Create React App Docs](https://create-react-app.dev/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **React Team** for the amazing library
- **Framer** for the Motion animation library
- **Spline** for the 3D design tool
- **React Icons** for the comprehensive icon library

---

## 📸 Screenshots

> **Note**: Add screenshots of your portfolio here to showcase the design

---

**Built with ❤️ using React, Framer Motion, and Spline**

---

### **Quick Start Summary**

```bash
# 1. Navigate to project folder
cd portfolio-using-react

# 2. Install dependencies
npm install

# 3. Start the development server
npm start

# 4. Open browser to http://localhost:3000
```

**That's it! Your portfolio should now be running! 🎉**
