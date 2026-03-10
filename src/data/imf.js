/**
 * IMF Data Module
 * Source: https://www.imf.org/en/Publications/WEO
 * 
 * This module provides data from International Monetary Fund
 * Focus on economic forecasts and financial indicators
 */

const imfData = {
  // Foreign exchange reserves (2024, in trillion USD)
  foreignExchangeReserves: {
    china: 3.25,
    restOfWorld: 12.80,
    world: 16.05,
    source: 'IMF',
    year: 2024,
    unit: 'trillion USD'
  },
  
  // Trade volume (2024, in trillion USD)
  tradeVolume: {
    china: 6.10,
    restOfWorld: 26.0,
    world: 32.1,
    source: 'IMF',
    year: 2024,
    unit: 'trillion USD'
  },
  
  // GDP growth rate (2024, %)
  gdpGrowth: {
    china: 5.0,
    restOfWorld: 2.2,
    world: 3.0,
    source: 'IMF',
    year: 2024,
    unit: 'percent'
  },
  
  // Current account balance (2024, in billion USD)
  currentAccountBalance: {
    china: 280,
    restOfWorld: -480,
    world: -200,
    source: 'IMF',
    year: 2024,
    unit: 'billion USD'
  },
  
  // Manufacturing output (2024, in trillion USD)
  manufacturingOutput: {
    china: 5.15,
    restOfWorld: 12.0,
    world: 17.15,
    source: 'IMF',
    year: 2024,
    unit: 'trillion USD'
  },
  
  // GDP per capita (2024, in USD)
  gdpPerCapita: {
    china: 13100,
    restOfWorld: 16500,
    world: 15350,
    source: 'IMF',
    year: 2024,
    unit: 'USD'
  }
};

export default imfData;
