/**
 * Generate Images Build Script
 * 
 * Generates images from the data table for each locale using html2canvas
 * via puppeteer (headless browser)
 */

import fs from 'fs-extra';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import locales from '../../src/locales/index.js';
import serverApp from '../../src/server/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

// Production base URL
const PRODUCTION_BASE_URL = 'https://china-vs-rest-of-the-world.html5beta.com';

// Get port from command line or use default
const PORT = process.env.PORT || 8081;

function startServer() {
  return new Promise((resolve, reject) => {
    const server = serverApp.listen(PORT, () => {
      console.log(`Local server started on port ${PORT}`);
      
      const checkServer = () => {
        const req = http.get(`http://localhost:${PORT}/`, (res) => {
          resolve(server);
        });
        req.on('error', () => {
          setTimeout(checkServer, 100);
        });
      };
      checkServer();
    });
    
    server.on('error', reject);
  });
}

async function generateImages() {
  console.log('Starting image generation...');
  
  // Ensure images directory exists
  await fs.ensureDir(IMAGES_DIR);
  console.log('Images directory ready');
  
  // Start local server
  const server = await startServer();
  
  // Dynamically import puppeteer
  const puppeteer = await import('puppeteer');
  
  const browser = await puppeteer.default.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=none',
      '--disable-font-subpixel-positioning',
      '--enable-font-antialiasing'
    ]
  });
  
  try {
    // Get supported locales from the locales module
    const supportedLocales = locales.getSupportedLocales();
    console.log('Supported locales:', supportedLocales);
    
    for (const localeCode of supportedLocales) {
      const urlPath = localeCode === 'en_US' ? '/' : `/${localeCode}/`;
      const fullUrl = `http://localhost:${PORT}${urlPath}`;
      const productionUrl = localeCode === 'en_US' ? PRODUCTION_BASE_URL : `${PRODUCTION_BASE_URL}/zh_CN/`;
      
      console.log(`Generating image for ${localeCode} from ${fullUrl}...`);
      
      const page = await browser.newPage();
      
      // Set viewport for consistent rendering
      await page.setViewport({
        width: 1200,
        height: 2000,
        deviceScaleFactor: 2
      });
      
      console.log(`Navigating to ${fullUrl}...`);
      try {
        const response = await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
        console.log('Response status:', response.status());
      } catch (e) {
        console.log('Navigation error:', e.message);
        // Get the page content to debug
        try {
          const content = await page.content();
          console.log('Page content (first 500 chars):', content.substring(0, 500));
        } catch (e2) {
          console.log('Could not get page content:', e2.message);
        }
        throw e;
      }
      
      // Set the production URL before capturing
      await page.evaluate((url) => {
        const urlCell = document.getElementById('tableUrl');
        if (urlCell) {
          urlCell.textContent = url;
        }
      }, productionUrl);
      
      // Wait for the table to be rendered
      await page.waitForSelector('#data-table', { timeout: 30000 });
      console.log('Table found!');
      
      // Inject html2canvas and execute capture
      const imageBuffer = await page.evaluate(async () => {
        // Load html2canvas from CDN
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
        
        const tableContainer = document.querySelector('#data-table table.data-table');
        if (!tableContainer) {
          throw new Error('Table container not found');
        }
        
        // Use html2canvas to capture the table container directly
        const canvas = await html2canvas(tableContainer, {
          backgroundColor: '#ffffff',
          scale: 2,
          useCORS: true,
          allowTaint: true
        });
        
        return canvas.toDataURL('image/png').split(',')[1];
      });
      
      // Save the image
      const imageFileName = localeCode === 'en_US' ? 'china-vs-rest-of-world.png' : `china-vs-rest-of-world-${localeCode}.png`;
      const imagePath = path.join(IMAGES_DIR, imageFileName);
      
      await fs.writeFile(imagePath, Buffer.from(imageBuffer, 'base64'));
      console.log(`Saved: ${imagePath}`);
      
      await page.close();
    }
    
    console.log('Image generation complete!');
    
  } finally {
    await browser.close();
    server.close();
    console.log('Local server stopped');
  }
}

generateImages().catch(err => {
  console.error('Image generation failed:', err);
  process.exit(1);
});
