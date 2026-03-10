/**
 * Build Script
 * 
 * Builds the static site using Pug templates
 */

const fs = require('fs-extra');
const path = require('path');
const pug = require('pug');
const data = require('../../src/data');
const locales = require('../../src/locales');
const { metrics: dataItems } = require('../../src/data/metrics');

const BUILD_DIR = path.join(__dirname, '../../public');
const CLIENT_DIR = path.join(__dirname, '../../src/client');

const supportedLocales = ['en_US', 'zh_CN'];

function getDataByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o || {})[k], obj);
}

async function build() {
  console.log('Starting build...');
  
  // Clean build directory
  await fs.emptyDir(BUILD_DIR);
  console.log('Cleaned build directory');
  
  // Compile Pug templates
  const templatePath = path.join(CLIENT_DIR, 'index.pug');
  const compiledTemplate = pug.compileFile(templatePath);
  console.log('Compiled Pug templates');
  
  // Build for each locale
  for (const localeCode of supportedLocales) {
    const locale = locales.getLocale(localeCode);
    const html = compiledTemplate({
      currentLocale: localeCode,
      locale: locale,
      data: data.all,
      dataItems: dataItems,
      getDataByPath: getDataByPath
    });
    
    const outputPath = path.join(BUILD_DIR, localeCode === 'en_US' ? 'index.html' : `${localeCode}/index.html`);
    await fs.outputFile(outputPath, html);
    console.log(`Built: ${outputPath}`);
  }
  
  // Copy static assets
  const publicDir = path.join(CLIENT_DIR, 'public');
  if (await fs.pathExists(publicDir)) {
    await fs.copy(publicDir, BUILD_DIR);
    console.log('Copied static assets');
  }
  
  // Create language switcher HTML files
  for (const localeCode of supportedLocales) {
    const locale = locales.getLocale(localeCode);
    const html = compiledTemplate({
      currentLocale: localeCode,
      locale: locale,
      data: data.all,
      dataItems: dataItems,
      getDataByPath: getDataByPath
    });
    
    // Copy to root for default locale
    if (localeCode === 'en_US') {
      await fs.ensureDir(path.join(BUILD_DIR, 'en'));
      await fs.copy(
        path.join(BUILD_DIR, 'index.html'),
        path.join(BUILD_DIR, 'en/index.html')
      );
    }
  }
  
  console.log('Build complete!');
  console.log(`Output directory: ${BUILD_DIR}`);
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
