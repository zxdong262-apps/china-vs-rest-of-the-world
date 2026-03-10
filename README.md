# China vs Rest of the World

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green)](https://nodejs.org/)
[![Platform](https://img.shields.io/badge/Platform-Static%20Site-blue)](https://pages.cloudflare.com/)

[中文](README_CN.md) | English

A static website showing statistical data comparisons between China and the rest of the world.

## Features

- 📊 **Comprehensive Data**: Population, economy, energy, agriculture, industry, and environment statistics
- 🌍 **Multiple Data Sources**: World Bank, IMF, National Bureau of Statistics of China
- 🌐 **Multilingual Support**: English (en_US) and Chinese (zh_CN)
- 📱 **Mobile-First Design**: Responsive layout for all devices
- 🎨 **Tech Animation Background**: Canvas-based particle animation
- ☁️ **Cloudflare Pages Ready**: Easy deployment with GitHub Actions

## Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/china-vs-rest-of-the-world.git
cd china-vs-rest-of-the-world

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start
```

Open your browser at http://localhost:3000

### Production Build

```bash
# Build the static site
npm run build
```

The built files will be in the `build` directory.

### Production Server

```bash
# Run production server
npm run server
```

Open your browser at http://localhost:8080

## Project Structure

```
china-vs-rest-of-the-world/
├── src/
│   ├── client/           # Pug templates
│   │   ├── index.pug     # Main template
│   │   ├── header.pug    # Header component
│   │   ├── footer.pug   # Footer component
│   │   ├── data-card.pug # Data card component
│   │   └── public/       # Static files
│   │       ├── css/     # Stylesheets
│   │       └── js/      # JavaScript
│   ├── data/            # Data modules
│   │   ├── world-bank.js
│   │   ├── imf.js
│   │   ├── china-gov.js
│   │   └── links.js
│   ├── locales/         # Language files
│   │   ├── en_US.js
│   │   └── zh_CN.js
│   └── server/          # Server code
│       ├── index.js     # Dev server
│       └── prod.js      # Production server
├── scripts/
│   └── build.js         # Build script
├── build/               # Build output
├── .github/
│   └── workflows/       # GitHub Actions
└── package.json
```

## Data Sources

- [World Bank Open Data](https://data.worldbank.org/)
- [IMF Data](https://www.imf.org/en/Publications/WEO)
- [National Bureau of Statistics of China](https://data.stats.gov.cn/)

## Deployment

### Deploy to Cloudflare Pages

1. Fork this repository
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. Connect your GitHub account
4. Select your forked repository
5. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `build`
6. Click "Save and Deploy"

### Deploy with GitHub Actions

1. Go to GitHub repository → Settings → Secrets
2. Add secrets:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
3. Push to main branch or create a release

See [Cloudflare Pages GitHub Integration](https://developers.cloudflare.com/pages/platform/github-integration/) for detailed instructions.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
