# Preetham's Visual Space

Welcome to **Preetham's Visual Space** – a personal portfolio website designed to showcase creative work, brand identity projects, and visual storytelling. This project is built with modern web technologies, focusing on immersive interactions, seamless animations, and a premium aesthetic.

![Project Preview](public/og-image.png)

## 🚀 Features

- **Immersive User Experience**:
  - **Custom Cursor**: A physics-based custom cursor with context-sensitive states (hover, link, text) for a tactile feel.
  - **Seamless Animations**: Smooth page transitions and element reveals powered by **Framer Motion**.
  - **Infinite Marquee**: A perfectly seamless looping ticker showcasing tools and skills.

- **Visual Showcase**:
  - **Project Gallery**: A "My Work" section featuring case studies, high-quality imagery, and detailed project descriptions.
  - **Brand Identity**: Dedicated sections for branding work with rich typography and layout.

- **Modern Tech Stack**:
  - Built with **React** and **Vite** for blazing fast performance.
  - Styled with **Tailwind CSS** for a responsive, mobile-first design.
  - Components from **shadcn/ui** for accessible and consistent UI elements.

- **Contact Integration**:
  - Secure contact form powered by **EmailJS** to send messages directly without a backend.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Architecture**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 🏃‍♂️ Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/preetham-s-visual-space.git
   cd preetham-s-visual-space
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized static assets, ready for deployment.

## 🚀 Deployment (GitHub Pages)

To deploy this site to GitHub Pages:

1. Update `vite.config.ts` to set the base path:
   ```ts
   export default defineConfig({
     base: "/preetham-s-visual-space/", // Replace with your repo name
     plugins: [react()],
     // ...
   })
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Push the contents of the `dist` folder to your customized deployment branch (e.g., `gh-pages`).

---

Designed & Developed by **Preetham**.
