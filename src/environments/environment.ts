
const environments = {
  development: {
    production: false,
    apiUrl: 'http://localhost:4200'
  },
  production: {
    production: true,
    // apiUrl: 'https://plus10v101.alexondev.net/'
  }
};

// Correctly access process.env with index signature
const currentEnv = process.env['NODE_ENV'] === 'production' ? 'production' : 'development';

export const environment = environments[currentEnv];
