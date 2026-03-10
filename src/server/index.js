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

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../client/public')));

// Get supported locales
const supportedLocales = locales.getSupportedLocales();

// Main route with optional locale parameter
app.get(['/', '/:locale'], (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const localeParam = req.params.locale;
  
  // Determine locale: use param if provided and supported, otherwise default to en_US
  let localeCode;
  if (localeParam && supportedLocales.includes(localeParam)) {
    localeCode = localeParam;
  } else {
    localeCode = 'en_US';
  }
  
  const locale = locales.getLocale(localeCode);
  
  // Generate locale URLs
  const localeUrls = {};
  supportedLocales.forEach((code) => {
    localeUrls[code] = code === 'en_US' ? baseUrl + '/' : baseUrl + '/' + code;
  });
  
  const canonicalUrl = localeUrls[localeCode];
  
  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': locale.site.title,
    'description': locale.site.description,
    'url': canonicalUrl,
    'inLanguage': localeCode.replace('_', '-'),
    'publisher': {
      '@type': 'Organization',
      'name': 'China vs Rest of the World',
      'url': baseUrl
    },
    'dateModified': new Date().toISOString().split('T')[0],
    'about': {
      '@type': 'Thing',
      'name': 'Statistical Comparison',
      'description': locale.site.description
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${baseUrl}/?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
  
  // Set locals for template
  res.locals.currentLocale = localeCode;
  res.locals.locale = locale;
  res.locals.supportedLocales = supportedLocales;
  res.locals.data = data.all;
  res.locals.dataItems = metrics.metrics;
  res.locals.getDataByPath = getDataByPath;
  res.locals.canonicalUrl = canonicalUrl;
  res.locals.localeUrls = localeUrls;
  res.locals.jsonLd = jsonLd;
  
  res.render('index');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Development server running at http://localhost:${PORT}`);
  console.log(`Open your browser to view the site.`);
});
