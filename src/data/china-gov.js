/**
 * China Government Data Module
 * Source: National Bureau of Statistics of China
 * https://data.stats.gov.cn/
 * 
 * This module provides data specifically from Chinese government sources
 * Agriculture, energy, and other sector-specific data
 */

const chinaGovData = {
  // Agriculture production (2024, in million tonnes)
  agricultureProduction: {
    grain: {
      china: 706.5,
      restOfWorld: 1850.0,
      world: 2556.5,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    pork: {
      china: 58.2,
      restOfWorld: 85.0,
      world: 143.2,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    chicken: {
      china: 26.3,
      restOfWorld: 110.7,
      world: 137.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    eggs: {
      china: 30.0,
      restOfWorld: 45.0,
      world: 75.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    vegetables: {
      china: 590.0,
      restOfWorld: 650.0,
      world: 1240.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    fish: {
      china: 37.2,
      restOfWorld: 75.0,
      world: 112.2,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    mariculture: {
      china: 37.0,
      restOfWorld: 28.0,
      world: 65.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    distantWaterFishing: {
      china: 2.19,
      restOfWorld: 10.0,
      world: 12.19,
      source: 'Ministry of Agriculture and Rural Affairs',
      year: 2024,
      unit: 'million tonnes'
    },
    fruits: {
      china: 330.0,
      restOfWorld: 520.0,
      world: 850.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    watermelon: {
      china: 58.0,
      restOfWorld: 32.0,
      world: 90.0,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    },
    fertilizer: {
      china: 57.5,
      restOfWorld: 120.0,
      world: 177.5,
      source: 'National Bureau of Statistics of China',
      year: 2024,
      unit: 'million tonnes'
    }
  },
  
  // Energy production (2024, in million tonnes of standard coal equivalent)
  energyProduction: {
    china: 495.8,
    restOfWorld: 12500.0,
    world: 12995.8,
    source: 'National Bureau of Statistics of China',
    year: 2024,
    unit: 'million tonnes SCE'
  },
  
  // Coal production (2024, in million tonnes)
  coalProduction: {
    china: 475.0,
    restOfWorld: 520.0,
    world: 995.0,
    source: 'National Bureau of Statistics of China',
    year: 2024,
    unit: 'million tonnes'
  },
  
  // Oil production (2024, in million tonnes)
  oilProduction: {
    china: 190.0,
    restOfWorld: 3540.0,
    world: 3730.0,
    source: 'National Bureau of Statistics of China',
    year: 2024,
    unit: 'million tonnes'
  },
  
  // Natural gas production (2024, in billion cubic meters)
  naturalGasProduction: {
    china: 245.0,
    restOfWorld: 4100.0,
    world: 4345.0,
    source: 'National Bureau of Statistics of China',
    year: 2024,
    unit: 'billion m³'
  },
  
  // Industrial output (2024, in trillion RMB)
  industrialOutput: {
    china: 41.56,
    restOfWorld: 120.0,
    world: 161.56,
    source: 'National Bureau of Statistics of China',
    year: 2024,
    unit: 'trillion RMB'
  },
  
  // Power generation capacity (2024, in GW)
  powerCapacity: {
    windPower: {
      china: 520,
      restOfWorld: 600,
      world: 1120,
      source: 'National Energy Administration of China',
      year: 2024,
      unit: 'GW'
    },
    solarPower: {
      china: 1186,
      restOfWorld: 700,
      world: 1886,
      source: 'National Energy Administration of China',
      year: 2024,
      unit: 'GW'
    },
    hydroPower: {
      china: 420,
      restOfWorld: 800,
      world: 1220,
      source: 'National Energy Administration of China',
      year: 2024,
      unit: 'GW'
    }
  },
  
  // Manufacturing production (2024)
  manufacturing: {
    automobile: {
      china: 31.24,
      restOfWorld: 55.0,
      world: 86.24,
      source: 'China Association of Automobile Manufacturers',
      year: 2024,
      unit: 'million vehicles'
    },
    newEnergyVehicles: {
      china: 12.14,
      restOfWorld: 6.0,
      world: 18.14,
      source: 'China Association of Automobile Manufacturers',
      year: 2024,
      unit: 'million vehicles'
    },
    mobilePhones: {
      china: 1730,
      restOfWorld: 800,
      world: 2530,
      source: 'Ministry of Industry and Information Technology',
      year: 2024,
      unit: 'million units'
    },
    shipbuilding: {
      china: 43.5,
      restOfWorld: 25.0,
      world: 68.5,
      source: 'China Shipbuilding Industry Corporation',
      year: 2024,
      unit: 'million CGT'
    },
    aluminum: {
      china: 43.0,
      restOfWorld: 32.0,
      world: 75.0,
      source: 'China Nonferrous Metal Industry Association',
      year: 2024,
      unit: 'million tonnes'
    },
    tenNonferrousMetals: {
      china: 79.0,
      restOfWorld: 45.0,
      world: 124.0,
      source: 'China Nonferrous Metal Industry Association',
      year: 2024,
      unit: 'million tonnes'
    },
    industrialRobots: {
      china: 95.0,
      restOfWorld: 35.0,
      world: 130.0,
      source: 'China Robot Industry Alliance',
      year: 2024,
      unit: 'thousand units'
    }
  },
  
  // Transportation infrastructure (2024, in km)
  transportation: {
    expressway: {
      china: 190000,
      restOfWorld: 250000,
      world: 440000,
      source: 'Ministry of Transport of China',
      year: 2024,
      unit: 'km'
    },
    highSpeedRail: {
      china: 48000,
      restOfWorld: 20000,
      world: 68000,
      source: 'China Railway / UIC',
      year: 2024,
      unit: 'km'
    }
  }
};

export default chinaGovData;
