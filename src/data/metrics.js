/**
 * Metric metadata used by templates and servers.
 */

const metrics = [
  { key: 'population', path: 'population', category: 'population' },
  { key: 'landArea', path: 'landArea', category: 'geography' },
  { key: 'gdp', path: 'gdp', category: 'economy' },
  { key: 'manufacturingOutput', path: 'manufacturingOutput', category: 'industry' },
  { key: 'electricityProduction', path: 'electricityProduction', category: 'energy' },
  { key: 'windPower', path: 'powerCapacity.windPower', category: 'energy' },
  { key: 'solarPower', path: 'powerCapacity.solarPower', category: 'energy' },
  { key: 'coalProduction', path: 'coalProduction', category: 'energy' },
  { key: 'steelProduction', path: 'steelProduction', category: 'metals' },
  { key: 'aluminum', path: 'manufacturing.aluminum', category: 'metals' },
  { key: 'tenNonferrousMetals', path: 'manufacturing.tenNonferrousMetals', category: 'metals' },
  { key: 'industrialRobots', path: 'manufacturing.industrialRobots', category: 'robotics' },
  { key: 'grainProduction', path: 'agricultureProduction.grain', category: 'agricultureGrain' },
  { key: 'fertilizer', path: 'agricultureProduction.fertilizer', category: 'agricultureFertilizer' },
  { key: 'porkProduction', path: 'agricultureProduction.pork', category: 'agriculturePork' },
  { key: 'chickenProduction', path: 'agricultureProduction.chicken', category: 'agricultureChicken' },
  { key: 'eggProduction', path: 'agricultureProduction.eggs', category: 'agricultureEgg' },
  { key: 'vegetableProduction', path: 'agricultureProduction.vegetables', category: 'agricultureVegetable' },
  { key: 'fishProduction', path: 'agricultureProduction.fish', category: 'agricultureFish' },
  { key: 'seafoodProduction', path: 'agricultureProduction.seafood', category: 'agricultureSeafood' },
  { key: 'automobile', path: 'manufacturing.automobile', category: 'automobile' },
  { key: 'newEnergyVehicles', path: 'manufacturing.newEnergyVehicles', category: 'ev' },
  { key: 'mobilePhones', path: 'manufacturing.mobilePhones', category: 'mobile' },
  { key: 'shipbuilding', path: 'manufacturing.shipbuilding', category: 'shipbuilding' },
  { key: 'expressway', path: 'transportation.expressway', category: 'transport' },
  { key: 'highSpeedRail', path: 'transportation.highSpeedRail', category: 'rail' }
];

export default {
  metrics
};
