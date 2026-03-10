/**
 * Express Development Server
 * 
 * Starts a development server with hot reload support
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import data from '../data/index.js';
import locales from '../locales/index.js';
import metrics from '../data/metrics.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

function getDataByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o || {})[k], obj);
}

// Set up Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client'));

// Middleware to set locale based on URL path or query parameter
app.use((req, res, next) => {
  let localeCode;
  
  // Check URL path for locale
  const pathParts = req.path.split('/').filter(Boolean);
  if (pathParts[0] === 'zh_CN') {
    localeCode = 'zh_CN';
  } else {
    // Fall back to query parameter or browser preference
    const browserLang = req.acceptsLanguages('en', 'zh', 'en-US', 'zh-CN') || 'en';
    localeCode = req.query.lang || browserLang;
  }
  
  // Map locale codes
  if (localeCode === 'en') localeCode = 'en_US';
  if (localeCode === 'zh') localeCode = 'zh_CN';
  if (localeCode === 'en-US') localeCode = 'en_US';
  if (localeCode === 'zh-CN') localeCode = 'zh_CN';
  
  // Fallback to en_US if not supported
  if (!locales.supportedLocaleCodes.includes(localeCode)) {
    localeCode = 'en_US';
  }
  
  res.locals.currentLocale = localeCode;
  res.locals.locale = locales.getLocale(localeCode);
  res.locals.data = data.all;
  res.locals.dataItems = metrics.metrics;
  res.locals.getDataByPath = getDataByPath;
  
  next();
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../client/public')));

// Main route - English (/)
app.get('/', (req, res) => {
  res.render('index');
});

// Chinese route (/zh_CN)
app.get('/zh_CN', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Development server running at http://localhost:${PORT}`);
  console.log(`Open your browser to view the site.`);
});
