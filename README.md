# 🧁 Bakery Website Templates

A collection of three beautiful, responsive bakery website templates built with Angular.

## 🎨 Templates

### 1. Classic Bakery (`/bakery-template-1`)
- **Style**: Traditional, warm neighborhood bakery
- **Colors**: Rich browns, golden yellows, warm creams
- **Features**: Product showcase, testimonials, contact information
- **Perfect for**: Family-owned, traditional bakeries

### 2. Modern Artisan (`/bakery-template-2`)
- **Style**: Contemporary, minimalist design
- **Colors**: Charcoal gray, gold accents
- **Features**: Interactive menu filtering, modern grid layouts
- **Perfect for**: Upscale artisan bakeries, cafes

### 3. Colorful Family (`/bakery-template-3`)
- **Style**: Playful, vibrant, kid-friendly
- **Colors**: Rainbow gradients, bright pastels, emoji-rich
- **Features**: Rotating specials, animated elements, interactive treats
- **Perfect for**: Family bakeries, children's birthday cake specialists

## 🚀 Live Demo

Visit the live demo: [https://bakerydesigns.thepracticalapps.com/](https://bakerydesigns.thepracticalapps.com/)

## 🛠️ Development

### Prerequisites
- Node.js (18+)
- Angular CLI

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/bakery-designs.git
   cd bakery-designs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/` in your browser.

4. **Build for production**
   ```bash
   npm run build:prod
   ```

## 📦 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Fork or create this repository on GitHub**

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

3. **Update the repository name**
   - If your repository name is different from "bakery-designs", update the `baseHref` in:
     - `angular.json` (production configuration)
     - `src/index.html` (base tag)
     - `src/404.html` (base tag and redirect)

4. **Push to main branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

5. **Automatic deployment**
   - The GitHub Action will automatically build and deploy on every push to the master branch
   - Your site will be available at: `https://bakerydesigns.thepracticalapps.com/`

### Manual Deployment

If you prefer manual deployment:

```bash
# Build for production
npm run build:prod

# The dist/bakery-designs folder contains the built application
# Upload this folder to your web server
```

## 🎯 Features

- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ✅ **No CSS Variables**: Uses direct hex colors for maximum compatibility
- ✅ **Interactive Navigation**: Easy switching between templates
- ✅ **Accessibility**: Proper color contrast and semantic HTML
- ✅ **TypeScript**: Full type safety and modern development experience
- ✅ **SCSS Styling**: Organized, maintainable stylesheets
- ✅ **SEO Ready**: Proper meta tags and semantic structure
- ✅ **Fast Loading**: Optimized builds and efficient code splitting

## 🎨 Customization

Each template is designed to be easily customizable:

- **Colors**: All colors use direct hex values - easy to find and replace
- **Content**: Update text, images, and contact information in the component files
- **Styling**: Modify SCSS files for layout and design changes
- **Functionality**: Extend TypeScript components with additional features

## 📁 Project Structure

```
src/
├── app/
│   ├── bakery-template-1/           # Classic design
│   ├── bakery-template-2/           # Modern design
│   ├── bakery-template-3/           # Colorful design
│   ├── app-routing.module.ts        # Navigation setup
│   └── app.module.ts                # Main module
├── assets/                          # Static files
├── styles.scss                      # Global styles
└── index.html                       # Main HTML file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ for bakeries everywhere** 🧁✨
