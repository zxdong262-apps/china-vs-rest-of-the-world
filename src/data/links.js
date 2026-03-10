/**
 * Links Data Module
 * 
 * This module contains all reference links used in the project
 * Including data sources, tools, and external resources
 */

const links = {
  // Official data sources
  dataSources: {
    worldBank: {
      name: 'World Bank Open Data',
      url: 'https://data.worldbank.org/',
      description: 'Free and open access to global development data'
    },
    imf: {
      name: 'IMF Data',
      url: 'https://www.imf.org/en/Publications/WEO',
      description: 'World Economic Outlook data and forecasts'
    },
    chinaGov: {
      name: 'National Bureau of Statistics of China',
      url: 'https://data.stats.gov.cn/',
      description: 'Official statistics from the Chinese government'
    },
    un: {
      name: 'United Nations Data',
      url: 'https://data.un.org/',
      description: 'UN data portal for international statistics'
    }
  },
  
  // Development tools and resources
  tools: {
    nodejs: {
      name: 'Node.js',
      url: 'https://nodejs.org/',
      description: 'JavaScript runtime'
    },
    express: {
      name: 'Express.js',
      url: 'https://expressjs.com/',
      description: 'Fast, unopinionated web framework'
    },
    pug: {
      name: 'Pug',
      url: 'https://pugjs.org/',
      description: 'Template engine'
    },
    cloudflare: {
      name: 'Cloudflare Pages',
      url: 'https://pages.cloudflare.com/',
      description: 'Frontend platform for developers'
    }
  },
  
  // Project resources
  project: {
    github: {
      name: 'GitHub Repository',
      url: 'https://github.com/',
      description: 'Source code hosting'
    }
  }
};

module.exports = links;
