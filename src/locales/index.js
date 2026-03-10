/**
 * Locales Index
 * 
 * Manages language detection and locale switching
 */

const en_US = require('./en_US');
const zh_CN = require('./zh_CN');

const locales = {
  'en': en_US,
  'en-US': en_US,
  'en_US': en_US,
  'zh': zh_CN,
  'zh-CN': zh_CN,
  'zh_CN': zh_CN
};

const supportedLocales = ['en_US', 'zh_CN'];
const supportedLocaleCodes = Object.keys(locales);

/**
 * Detect the best locale based on browser language
 * @param {string} browserLang - Language from browser
 * @returns {string} - Best matching locale
 */
function detectLocale(browserLang) {
  if (!browserLang) {
    return 'en_US';
  }
  
  // Try exact match first
  if (locales[browserLang]) {
    // Map to supported locale code
    if (browserLang === 'en' || browserLang === 'en-US') return 'en_US';
    if (browserLang === 'zh' || browserLang === 'zh-CN') return 'zh_CN';
    return browserLang;
  }
  
  // Try language part only (e.g., 'en' from 'en-US')
  const langPart = browserLang.split('-')[0];
  if (langPart === 'zh') {
    return 'zh_CN';
  }
  if (langPart === 'en') {
    return 'en_US';
  }
  
  return 'en_US';
}

/**
 * Get locale by code
 * @param {string} code - Locale code
 * @returns {object} - Locale object
 */
function getLocale(code) {
  return locales[code] || en_US;
}

/**
 * Get all available locales
 * @returns {array} - Array of locale codes
 */
function getSupportedLocales() {
  return supportedLocales;
}

module.exports = {
  locales,
  supportedLocales,
  supportedLocaleCodes,
  detectLocale,
  getLocale,
  getSupportedLocales
};
