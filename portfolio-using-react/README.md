# React Portfolio Website

A modern, responsive portfolio website built with React, featuring a beautiful dark theme design and interactive 3D background using Spline.

## 🌟 Features

### **Modern React Architecture**
- **React 18** with functional components and hooks
- **Framer Motion** for smooth animations and transitions
- **React Icons** for beautiful iconography
- **React Intersection Observer** for scroll-triggered animations
- **Responsive Design** that works on all devices

### **Interactive Design**
- **Spline 3D Background** - Interactive 3D animation in the hero section
- **Smooth Animations** - Page transitions, hover effects, and micro-interactions
- **Dark Theme** - Modern dark color scheme with gradient accents
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Loading Screen** - Animated loading screen with spinner

### **Complete Portfolio Sections**
1. **Hero Section** - Eye-catching introduction with 3D background
2. **About Me** - Personal introduction and educational background
3. **Skills** - Categorized technical skills with interactive tags
4. **Experience** - Timeline-based work experience display
5. **Projects** - Showcase of personal projects with technology tags
6. **Achievements** - Certifications and accomplishments
7. **Strengths** - Key strengths and expertise areas
8. **Contact** - Contact form and information

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or Download the Project**
   ```bash
   # Navigate to the project directory
   cd reactweb
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in Browser**
   - The app will open automatically at `http://localhost:3000`
   - If it doesn't open automatically, manually navigate to the URL

## 📁 Project Structure

```
reactweb/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Experience.js
│   │   ├── Experience.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Achievements.js
│   │   ├── Achievements.css
│   │   ├── Strengths.js
│   │   ├── Strengths.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Customization

### **Colors**
The color scheme is defined using CSS custom properties in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  --bg-primary: #0f0f23;
  --bg-secondary: #1a1a2e;
  --bg-card: #16213e;
  /* ... more colors */
}
```

### **Content**
Update the content in the respective component files:

1. **Personal Information**: Update `Hero.js` and `About.js`
2. **Skills**: Modify `Skills.js` data array
3. **Experience**: Update `Experience.js` data array
4. **Projects**: Modify `Projects.js` data array
5. **Achievements**: Update `Achievements.js` data array
6. **Contact**: Modify `Contact.js` contact information

### **3D Background**
The Spline 3D background is embedded in `Hero.js`. You can:
- Replace the iframe src with your own Spline design
- Adjust opacity and filters in `Hero.css`
- Modify the overlay gradient for better text readability

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Technologies Used

- **React 18** - UI library
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations
- **CSS3** - Styling with custom properties
- **Spline** - 3D background animation

## 🚀 Deployment

### **Netlify**
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically

### **Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### **GitHub Pages**
1. Add `"homepage": "https://username.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json
4. Run `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or contact me.

---

**Built with ❤️ using React, Framer Motion, and Spline** 