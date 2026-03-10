/**
 * Build Script
 * 
 * Builds the static site using Pug templates
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import pug from 'pug';
import { spawn } from 'child_process';
import data from '../../src/data/index.js';
import locales from '../../src/locales/index.js';
import metrics from '../../src/data/metrics.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUILD_DIR = path.join(__dirname, '../../public');
const CLIENT_DIR = path.join(__dirname, '../../src/client');

// Production base URL for SEO
const PRODUCTION_BASE_URL = 'https://china-vs-rest-of-the-world.html5beta.com';

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
    
    // Generate SEO URLs
    const enUrl = PRODUCTION_BASE_URL + '/';
    const zhCnUrl = PRODUCTION_BASE_URL + '/zh_CN';
    const canonicalUrl = localeCode === 'zh_CN' ? zhCnUrl : enUrl;
    
    // Generate JSON-LD structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': locale.site.title,
      'description': locale.site.description,
      'url': canonicalUrl,
      'inLanguage': localeCode === 'zh_CN' ? 'zh-CN' : 'en-US',
      'publisher': {
        '@type': 'Organization',
        'name': 'China vs Rest of the World',
        'url': PRODUCTION_BASE_URL
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
          'urlTemplate': `${PRODUCTION_BASE_URL}/?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };
    
    const html = compiledTemplate({
      currentLocale: localeCode,
      locale: locale,
      data: data.all,
      dataItems: metrics.metrics,
      getDataByPath: getDataByPath,
      canonicalUrl: canonicalUrl,
      enUrl: enUrl,
      zhCnUrl: zhCnUrl,
      jsonLd: jsonLd
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
  
  // Generate images
  await generateImages();
  
  console.log('Build complete!');
  console.log(`Output directory: ${BUILD_DIR}`);
}

function generateImages() {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(__dirname, 'generate-image.js');
    const child = spawn('node', [scriptPath], {
      env: { ...process.env, PORT: '8081' },
      stdio: 'inherit'
    });
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Image generation failed with code ${code}`));
      }
    });
    child.on('error', reject);
  });
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
