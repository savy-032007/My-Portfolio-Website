# 🌟 Shourya Waydande — Developer Portfolio
<<<<<<< HEAD

A sleek, modern, and high-performance personal developer portfolio website designed with an anime-themed hero avatar, dynamic interactive canvas particles, fluid micro-animations, and a responsive mobile-first layout.

Built entirely with **pure Vanilla web technologies** (HTML5, CSS3, JavaScript ES6+) — zero heavy frameworks, zero bloat, lightning fast.

---

## 🚀 Live Demo & Preview

> **Live Portfolio:** [shourya-portfolio.vercel.app](https://github.com/savy-032007) *(or insert your deployment link)*  
> **Author:** Shourya Waydande ([@savy-032007](https://github.com/savy-032007))

---

## ✨ Features & Highlights

=======
A sleek, modern, and high-performance personal developer portfolio website designed with an anime-themed hero avatar, dynamic interactive canvas particles, fluid micro-animations, and a responsive mobile-first layout.
Built entirely with **pure Vanilla web technologies** (HTML5, CSS3, JavaScript ES6+) — zero heavy frameworks, zero bloat, lightning fast.
---
## 🚀 Live Demo & Preview
> **Live Portfolio:** [shourya-portfolio.vercel.app](https://github.com/savy-032007) *(or insert your deployment link)*  
> **Author:** Shourya Waydande ([@savy-032007](https://github.com/savy-032007))
---
## ✨ Features & Highlights
>>>>>>> 0560308b217eea2f1e97ae33067d175fab33044e
### ⚡ Visuals & Micro-Interactions
- **Custom Branded Loader:** Sleek preloading screen with glowing monogram and animated loading progress.
- **Magnetic Custom Cursor:** Smooth lagging ring cursor that intelligently expands and reacts when hovering over buttons, cards, and links.
- **Constellation Particle Canvas:** Pure HTML5 Canvas 2D background with autonomous moving particles and dynamic connecting proximity lines.
- **Typewriter Effect:** Animated role rotator switching between *Frontend Developer*, *UI/UX Designer*, and *Problem Solver*.
- **Hero Character Avatar:** High-resolution anime developer avatar framed by multi-layered spinning concentric orbital rings and floating status badges (*"Open to Work"*, *"Hire me"*).
- **Subtle Parallax Motion:** Smooth depth effect on scroll in the hero banner.
<<<<<<< HEAD

=======
>>>>>>> 0560308b217eea2f1e97ae33067d175fab33044e
### 💼 Portfolio Sections
- **About Me:** Professional bio, quick facts (Location, Availability, Email), and a CV download trigger.
- **Dynamic Skill Bars:** Intersection-observer-powered animated progress bars and interactive technology tags.
- **Projects Showcase with Filtering:** Interactive category filters allowing visitors to sort projects by category with smooth fade-and-scale transitions.
- **Services Grid:** Structured offerings highlighting Web Development, UI/UX Design, and Responsive Design.
- **Animated Milestone Counters:** Real-time ease-out numeric counters displaying completed projects, hours coded, and client statistics.
- **Interactive Orbit Contact Visual:** Central monogram surrounded by counter-rotating planetary tech nodes (React, JS, HTML5, CSS3, Node.js, Figma) alongside a live availability indicator with pulsing green status LED.
<<<<<<< HEAD
- **Smart Navbar & Smooth Scroll:** Glassmorphic sticky navigation bar that indicates the active section automatically and collapses into a full mobile drawer menu.
- **Back-to-Top Button:** One-click smooth scrolling return button.

---

## 🛠️ Built With

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic structure, accessibility attributes, and SEO-friendly tags |
| **Styling** | CSS3 | Custom properties (CSS variables), Flexbox, CSS Grid, Glassmorphism, Keyframe animations |
| **Scripting** | JavaScript (ES6+) | Vanilla JS with `IntersectionObserver`, `requestAnimationFrame`, Canvas 2D API |
| **Icons** | [Boxicons](https://boxicons.com/) | Lightweight, modern icon set |
| **Typography** | [Inter (Google Fonts)](https://fonts.google.com/specimen/Inter) | Clean, readable modern grotesque typography |

---

## 📁 Repository Structure

```text
Plastic-Watch-Frontend/
├── assets/
│   ├── hero-avatar.png         # Main anime character hero image (1024x1024)
│   ├── hero-avatar.jpg         # Hero avatar (JPEG fallback)
│   ├── shourya-profile.jpg     # About section profile picture
│   └── projects/               # Project screenshots and preview mockups
├── index.html                  # Core single-page website markup
├── style.css                   # Comprehensive stylesheet with responsive design
├── script.js                   # Interactive animations, canvas, and UI logic
├── .gitignore                  # Git ignore rules for node_modules & OS metadata
└── README.md                   # Project documentation
```

---

## 💻 Getting Started

This project is completely static, meaning you do not need any build tools, compilers, or package managers to run it!

### 1. Clone the repository
```bash
git clone https://github.com/savy-032007/Plastic-Watch-Frontend.git
cd Plastic-Watch-Frontend
```

### 2. Run Locally

You can run the portfolio using any of the following simple methods:

#### Option A: Direct Browser Opening
Simply double-click `index.html` or drag it into any web browser.

#### Option B: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.

#### Option C: Python Built-in Server
If you have Python installed, run:
```bash
# Python 3
python -m http.server 3000
```
Then navigate to `http://localhost:3000` in your browser.

#### Option D: Node.js `npx serve`
```bash
npx serve .
```

---

## ⚙️ Customization Guide

Personalizing the portfolio for your own profile is fast and straightforward:

1. **Personal Information:** Open `index.html` and update:
   - Your name in `<h1 class="hero-name">` and title tags.
   - Social media URLs in `.hero-socials` and `.contact-socials`.
   - Email address, location, and resume download link in the `.about-info-grid`.
2. **Projects:** Locate `<div class="projects-grid">` in `index.html` to update project titles, descriptions, preview images, GitHub repositories, and live demo links.
3. **Hero Character / Photos:**
   - Replace `assets/hero-avatar.png` with your desired character illustration or headshot.
   - Replace `assets/shourya-profile.jpg` with your profile picture.
4. **Color Scheme & Accents:** Open `style.css` and modify the CSS variables in the `:root` selector:
   ```css
   :root {
     --clr-accent: #4f46e5;       /* Primary accent color */
     --clr-accent-rgb: 79, 70, 229;
     --clr-accent-lt: #eef2ff;    /* Light tint for badges and gradients */
     --clr-accent-hover: #4338ca; /* Hover state */
   }
   ```

---

## 📱 Responsive Breakpoints

The stylesheet has been crafted to adapt across all display dimensions:
- **Desktops (`> 1024px`):** Full 2-column grid hero with 440px character avatar and orbital rings.
- **Laptops / Tablets (`≤ 1024px`):** Balanced layout with scaled image (360px) and condensed padding.
- **Mobile Devices (`≤ 768px`):** Single-column stacked layout, slide-down full navigation drawer, and 300px centered avatar.
- **Compact Phones (`≤ 480px`):** Optimized typography, full-width action buttons, and adjusted badges for small screens.

---

## 📬 Contact & Socials

* **Developer:** Shourya Waydande
* **Location:** Pune, Maharashtra, India
* **Email:** [www.savy0307@gmail.com](mailto:www.savy0307@gmail.com)
* **GitHub:** [@savy-032007](https://github.com/savy-032007)
* **LinkedIn:** [shourya-waydande](https://www.linkedin.com/in/savyway0307/)
* **Instagram:** [@shouryaw.07](https://www.instagram.com/shouryaw.07/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to use it as inspiration or as a foundation for your own developer portfolio!
=======
>>>>>>> 0560308b217eea2f1e97ae33067d175fab33044e
