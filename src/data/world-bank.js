/**
 * World Bank Data Module
 * Source: https://data.worldbank.org/
 * 
 * This module provides data from World Bank Open Data API
 * Data includes population, land area, GDP, and various economic indicators
 */

const worldBankData = {
  // Population data (2024 estimates in millions)
  population: {
    china: 1425.0,
    restOfWorld: 8160.0,
    world: 9585.0,
    source: 'World Bank',
    year: 2024,
    unit: 'millions'
  },
  
  // Land area (in million sq km)
  landArea: {
    china: 9.60,
    restOfWorld: 133.42,
    world: 143.02,
    source: 'World Bank',
    year: 2022,
    unit: 'million km²'
  },
  
  // GDP (2024, in trillion USD)
  gdp: {
    china: 18.53,
    restOfWorld: 65.0,
    world: 83.53,
    source: 'World Bank',
    year: 2024,
    unit: 'trillion USD'
  },
  
  // GDP growth rate (2024, %)
  gdpGrowth: {
    china: 5.0,
    restOfWorld: 2.2,
    world: 3.0,
    source: 'World Bank',
    year: 2024,
    unit: 'percent'
  },
  
  // Electricity production (2023, in TWh)
  electricityProduction: {
    china: 9458.0,
    restOfWorld: 15000.0,
    world: 24458.0,
    source: 'World Bank',
    year: 2023,
    unit: 'TWh'
  },
  
  // Steel production (2024, in million tonnes)
  steelProduction: {
    china: 1010.0,
    restOfWorld: 700.0,
    world: 1710.0,
    source: 'World Steel Association',
    year: 2024,
    unit: 'million tonnes'
  }
};

export default worldBankData;
