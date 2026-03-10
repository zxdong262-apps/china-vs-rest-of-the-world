/**
 * Express Development Server
 * 
 * Starts a development server with hot reload support
 */

const express = require('express');
const path = require('path');
const data = require('../data');
const locales = require('../locales');
const { metrics: dataItems } = require('../data/metrics');

const app = express();
const PORT = process.env.PORT || 3000;

function getDataByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o || {})[k], obj);
}

// Set up Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client'));

// Middleware to parse query parameters for locale
app.use((req, res, next) => {
  const browserLang = req.acceptsLanguages('en', 'zh', 'en-US', 'zh-CN') || 'en';
  let localeCode = req.query.lang || browserLang;
  
  // Map locale codes
  if (localeCode === 'en') localeCode = 'en_US';
  if (localeCode === 'zh') localeCode = 'zh_CN';
  
  // Fallback to en_US if not supported
  if (!locales.supportedLocaleCodes.includes(localeCode)) {
    localeCode = 'en_US';
  }
  
  res.locals.currentLocale = localeCode;
  res.locals.locale = locales.getLocale(localeCode);
  res.locals.data = data.all;
  res.locals.dataItems = dataItems;
  res.locals.getDataByPath = getDataByPath;
  
  next();
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../client/public')));

// Main route - render the index page
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Development server running at http://localhost:${PORT}`);
  console.log(`Open your browser to view the site.`);
});
