# Minh Duc Pham - Professional Portfolio

A modern, responsive full-stack developer portfolio built with Angular 18, featuring a clean design with smooth animations and interactive UI components.

**Live Demo:** [https://mpham99.github.io/portfolio/](https://mpham99.github.io/portfolio/)

## 🚀 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - CSS animations and transitions for engaging user experience
- **Modern UI** - Clean, professional design with gradient backgrounds and glassmorphism effects
- **Interactive Navigation** - Sticky navbar with smooth scrolling and section highlighting
- **Dynamic Content** - Showcase of professional experience, skills, education, and contact information
- **Performance Optimized** - Compiled with Angular CLI for production-ready deployment

## 🛠️ Technology Stack

- **Frontend Framework:** Angular 18.2.0
- **Language:** TypeScript 5.5
- **Styling:** SCSS with CSS custom properties
- **Build Tool:** Angular CLI 18.2.0
- **Package Manager:** npm
- **Deployment:** GitHub Pages

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

## 💻 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/mpham99/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

## 🏗️ Build

Build the project for production:

```bash
npm run build
```

The build artifacts will be generated in the `docs/` directory, configured for GitHub Pages deployment with the base href `/portfolio/`.

## 📦 Project Structure

```
src/
├── app/
│   ├── navbar/              # Navigation component
│   ├── hero/                # Hero section component
│   ├── experience/          # Work experience section
│   ├── skills/              # Skills section
│   ├── education/           # Education section
│   ├── contact/             # Contact section
│   └── app.component.ts     # Root component
├── styles/
│   ├── _animations.scss     # Animation keyframes
│   ├── _variables.scss      # CSS custom properties
│   └── styles.scss          # Global styles
└── index.html              # Main HTML file
```

## 🎨 Customization

### Color Scheme

Colors are defined as CSS custom properties in `src/styles/styles.scss`:

```css
:root {
  --color-primary: #EF4444;
  --color-secondary: #F97316;
  --color-accent: #FBBF24;
  /* ... more colors ... */
}
```

### Content

Update your information in component files:
- `src/app/hero/hero.component.html` - Hero section
- `src/app/contact/contact.component.ts` - Contact information
- Individual component files for respective sections

## 📚 Development

### Run Tests

```bash
npm test
```

### Lint Code

```bash
npm run lint
```

### Format Code

Code formatting is handled by Prettier and ESLint.

## 🚀 Deployment to GitHub Pages

### Prerequisites
- GitHub repository with the source code
- GitHub Pages enabled in repository settings

### Steps

1. **Build the project:**
```bash
npm run build
```

2. **Commit the build:**
```bash
git add docs/
git commit -m "Build for deployment"
git push origin master
```

3. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `master` (or your main branch)
   - Folder: `/docs`
   - Click Save

4. **Access your portfolio:**
   - Your portfolio will be available at: `https://yourusername.github.io/portfolio/`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop:** 1024px and above
- **Tablet:** 768px to 1023px
- **Mobile:** Below 768px

## 🔧 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production (outputs to `docs/`)
- `npm test` - Run unit tests
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Email:** minhduc99@outlook.com
- **Phone:** +1 613-513-3651
- **Location:** Kanata, Ottawa, ON, Canada
- **LinkedIn:** [linkedin.com/in/mpham99](https://linkedin.com/in/mpham99)
- **GitHub:** [github.com/mpham99](https://github.com/mpham99)

## 🙏 Acknowledgments

- Built with [Angular](https://angular.io/)
- Inspired by modern portfolio designs and best practices
- Design inspired from [Cosmin Anghel's CodePen](https://codepen.io/angcosmin)

---

**Last Updated:** October 2026
