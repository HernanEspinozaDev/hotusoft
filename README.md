# Hotusoft Landing Page

A modern, bilingual landing page for Hotusoft, a blockchain-based digital identity and assets platform. Built with Vue 3, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Vue 3 with Composition API, TypeScript, Vite, and Tailwind CSS
- **Bilingual Support**: Full internationalization with Spanish and English languages
- **Responsive Design**: Mobile-first approach with a fully responsive layout
- **Dark Mode**: Sleek dark mode design with a professional color scheme
- **Animations**: Smooth scroll-based animations for enhanced user experience
- **Accessibility**: WCAG AA compliant with proper keyboard navigation and focus states
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML

## Project Structure

```
hotusoft/
├── public/               # Static assets
│   ├── favicon.svg       # Favicon
│   └── logo.svg          # Logo
├── src/
│   ├── components/       # Vue components
│   │   ├── sections/     # Page sections
│   │   └── LanguageSwitcher.vue
│   ├── composables/      # Reusable composition functions
│   ├── locales/          # Translation files
│   │   ├── en.json       # English translations
│   │   └── es.json       # Spanish translations
│   ├── stores/           # Pinia stores
│   │   └── uiStore.ts    # UI state store
│   ├── App.vue           # Root component
│   └── main.ts           # Application entry point
├── index.html            # HTML entry point
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/hotusoft.git
   cd hotusoft
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Customization

### Colors

The color scheme is defined in `tailwind.config.js` and follows the brand guidelines:

- Background: `#101419` (Off-Black)
- Primary Accent: `#3498DB` (Action Blue)
- Secondary Accent: `#2C5E8A` (Structure Blue)
- Card Background: `#1D232A` (Dark Charcoal)
- Text Primary: `#EAEAEA` (Off-White)
- Text Secondary: `#8899A6` (Light Gray)

### Fonts

The project uses the Inter font family, loaded from Google Fonts in `index.html`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.