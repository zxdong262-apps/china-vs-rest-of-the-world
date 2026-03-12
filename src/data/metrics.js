/**
 * Metric metadata used by templates and servers.
 */

const metrics = [
  { key: 'population', path: 'population', category: 'population', icon: '👥' },
  { key: 'landArea', path: 'landArea', category: 'geography', icon: '🌍' },
  { key: 'gdp', path: 'gdp', category: 'economy', icon: '💰' },
  { key: 'ppp', path: 'ppp', category: 'economy', icon: '⚖️' },
  { key: 'manufacturingOutput', path: 'manufacturingOutput', category: 'industry', icon: '🏭' },
  { key: 'electricityProduction', path: 'electricityProduction', category: 'energy', icon: '⚡' },
  { key: 'windPower', path: 'powerCapacity.windPower', category: 'energy', icon: '💨' },
  { key: 'solarPower', path: 'powerCapacity.solarPower', category: 'energy', icon: '☀️' },
  { key: 'coalProduction', path: 'coalProduction', category: 'energy', icon: '⛏️' },
  { key: 'steelProduction', path: 'steelProduction', category: 'metals', icon: '🔩' },
  { key: 'aluminum', path: 'manufacturing.aluminum', category: 'metals', icon: '🔧' },
  { key: 'tenNonferrousMetals', path: 'manufacturing.tenNonferrousMetals', category: 'metals', icon: '⚙️' },
  { key: 'industrialRobots', path: 'manufacturing.industrialRobots', category: 'robotics', icon: '🤖' },
  { key: 'grainProduction', path: 'agricultureProduction.grain', category: 'agricultureGrain', icon: '🌾' },
  { key: 'fertilizer', path: 'agricultureProduction.fertilizer', category: 'agricultureFertilizer', icon: '🧪' },
  { key: 'porkProduction', path: 'agricultureProduction.pork', category: 'agriculturePork', icon: '🐷' },
  { key: 'chickenProduction', path: 'agricultureProduction.chicken', category: 'agricultureChicken', icon: '🐔' },
  { key: 'eggProduction', path: 'agricultureProduction.eggs', category: 'agricultureEgg', icon: '🥚' },
  { key: 'vegetableProduction', path: 'agricultureProduction.vegetables', category: 'agricultureVegetable', icon: '🥬' },
  { key: 'fishProduction', path: 'agricultureProduction.fish', category: 'agricultureFish', icon: '🐟' },
  { key: 'mariculture', path: 'agricultureProduction.mariculture', category: 'agricultureMariculture', icon: '🦪' },
  { key: 'distantWaterFishing', path: 'agricultureProduction.distantWaterFishing', category: 'agricultureFishing', icon: '⚓' },
  { key: 'watermelon', path: 'agricultureProduction.watermelon', category: 'agricultureWatermelon', icon: '🍉' },
  { key: 'automobile', path: 'manufacturing.automobile', category: 'automobile', icon: '🚗' },
  { key: 'newEnergyVehicles', path: 'manufacturing.newEnergyVehicles', category: 'ev', icon: '🚎' },
  { key: 'mobilePhones', path: 'manufacturing.mobilePhones', category: 'mobile', icon: '📱' },
  { key: 'shipbuilding', path: 'manufacturing.shipbuilding', category: 'shipbuilding', icon: '🚢' },
  { key: 'expressway', path: 'transportation.expressway', category: 'transport', icon: '🛣️' },
  { key: 'highSpeedRail', path: 'transportation.highSpeedRail', category: 'rail', icon: '🚄' }
];

export default {
  metrics
};
