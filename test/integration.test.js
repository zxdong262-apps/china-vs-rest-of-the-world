/**
 * Integration Tests
 * 
 * Tests to verify the site is working as expected
 */

const { test, describe, before, after } = require('node:test');
const assert = require('node:assert');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration
const DEV_PORT = 3000;
const DEV_URL = `http://localhost:${DEV_PORT}`;
const PUBLIC_DIR = path.join(__dirname, '../public');

describe('Build Output Tests', () => {
  test('public directory should exist', () => {
    assert.ok(fs.existsSync(PUBLIC_DIR), 'public directory should exist');
  });

  test('index.html should exist', () => {
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    assert.ok(fs.existsSync(indexPath), 'index.html should exist');
  });

  test('zh_CN index.html should exist', () => {
    const zhIndexPath = path.join(PUBLIC_DIR, 'zh_CN', 'index.html');
    assert.ok(fs.existsSync(zhIndexPath), 'zh_CN/index.html should exist');
  });

  test('CSS file should exist', () => {
    const cssPath = path.join(PUBLIC_DIR, 'css', 'style.css');
    assert.ok(fs.existsSync(cssPath), 'css/style.css should exist');
  });

  test('JavaScript file should exist', () => {
    const jsPath = path.join(PUBLIC_DIR, 'js', 'background.js');
    assert.ok(fs.existsSync(jsPath), 'js/background.js should exist');
  });

  test('index.html should have valid HTML structure', () => {
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    const content = fs.readFileSync(indexPath, 'utf-8');
    
    assert.ok(content.includes('<!DOCTYPE html>'), 'Should have DOCTYPE');
    assert.ok(content.includes('<html'), 'Should have html tag');
    assert.ok(content.includes('<head>'), 'Should have head tag');
    assert.ok(content.includes('<body>'), 'Should have body tag');
  });

  test('index.html should contain China data', () => {
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    const content = fs.readFileSync(indexPath, 'utf-8');
    
    assert.ok(content.includes('China'), 'Should contain China');
    assert.ok(content.includes('population') || content.includes('Population'), 'Should contain population data');
  });

  test('zh_CN index.html should contain Chinese text', () => {
    const zhIndexPath = path.join(PUBLIC_DIR, 'zh_CN', 'index.html');
    const content = fs.readFileSync(zhIndexPath, 'utf-8');
    
    assert.ok(content.includes('中国'), 'Should contain Chinese characters');
  });

  test('CSS should have required styles', () => {
    const cssPath = path.join(PUBLIC_DIR, 'css', 'style.css');
    const content = fs.readFileSync(cssPath, 'utf-8');
    
    assert.ok(content.includes('.header'), 'Should have header styles');
    assert.ok(content.includes('.footer'), 'Should have footer styles');
    assert.ok(content.includes('.data-card'), 'Should have data-card styles');
  });
});

describe('Data Module Tests', () => {
  const data = require('../src/data');
  
  test('data module should have worldBank data', () => {
    assert.ok(data.worldBank, 'Should have worldBank data');
    assert.ok(data.worldBank.population, 'Should have population data');
    assert.ok(data.worldBank.steelProduction, 'Should have steel production data');
  });

  test('data module should have IMF data', () => {
    assert.ok(data.imf, 'Should have IMF data');
    assert.ok(data.imf.gdpGrowth, 'Should have GDP growth data');
  });

  test('data module should have China government data', () => {
    assert.ok(data.chinaGov, 'Should have China government data');
    assert.ok(data.chinaGov.agricultureProduction, 'Should have agriculture data');
  });

  test('data module should have links', () => {
    assert.ok(data.links, 'Should have links');
    assert.ok(data.links.dataSources, 'Should have data sources links');
  });
});

describe('Locale Tests', () => {
  const locales = require('../src/locales');
  
  test('should support en_US locale', () => {
    const locale = locales.getLocale('en_US');
    assert.ok(locale, 'Should get en_US locale');
    assert.ok(locale.site.title, 'Should have site title');
  });

  test('should support zh_CN locale', () => {
    const locale = locales.getLocale('zh_CN');
    assert.ok(locale, 'Should get zh_CN locale');
    assert.ok(locale.site.title, 'Should have site title in Chinese');
  });

  test('should detect browser locale', () => {
    // Test that detectLocale function works
    const result1 = locales.detectLocale('en');
    assert.ok(result1, 'Should return a value for English');
    
    const result2 = locales.detectLocale('zh-CN');
    assert.ok(result2 === 'zh_CN', 'Should detect Chinese and return zh_CN');
    
    assert.strictEqual(locales.detectLocale('unknown'), 'en_US', 'Should fallback to English');
  });
});

// Note: Dev server tests require the server to be running
// Run these separately with: node --test --experimental-test-snapshots test/dev-server.test.js
