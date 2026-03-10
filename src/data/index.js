/**
 * Data Module Index
 * 
 * Central export point for all data modules
 */

const worldBankData = require('./world-bank');
const imfData = require('./imf');
const chinaGovData = require('./china-gov');
const links = require('./links');

// Combine all data into a single object
const allData = {
  ...worldBankData,
  ...imfData,
  ...chinaGovData,
  links
};

module.exports = {
  worldBank: worldBankData,
  imf: imfData,
  chinaGov: chinaGovData,
  links: links,
  all: allData
};
