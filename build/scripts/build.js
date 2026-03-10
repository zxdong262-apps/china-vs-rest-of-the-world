/**
 * Build Script
 * 
 * Builds the static site using Pug templates
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import pug from 'pug';
import data from '../../src/data/index.js';
import locales from '../../src/locales/index.js';
import metrics from '../../src/data/metrics.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      dataItems: metrics.metrics,
      getDataByPath: getDataByPath
    });
    
    // Output path: index.html for en_US, zh_CN/index.html for zh_CN
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
  
  console.log('Build complete!');
  console.log(`Output directory: ${BUILD_DIR}`);
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
