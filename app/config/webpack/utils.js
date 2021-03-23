const path = require('path');
const dotenv = require('dotenv');
const variableExpansion = require('dotenv-expand');
const rootPath = path.join(__dirname, '../../');

const fs = require('fs');
const dotenvLocal = path.join(rootPath, '/.env.local');
const dotenvEnv = path.join(rootPath, '/.env');

exports.createVarsDefinePlugin = () => {
  const newVars = {};
  let envConfig = variableExpansion(dotenv.config()).parsed;
  try {
    envConfig = {
      ...envConfig,
      ...dotenv.parse(fs.readFileSync(dotenvEnv))
    };
  } catch (e) { }

  for (let k in envConfig) {
    newVars['process.env.' + k] = JSON.stringify(envConfig[k]);
  }
  return newVars;
}

exports.dotenvOverride = () => {
  dotenv.config();
  if (!process.env.NODE_ENV) {
    try {
      const envConfig = dotenv.parse(fs.readFileSync(dotenvLocal));
      for (let k in envConfig) {
        process.env[k] = envConfig[k]
      }
    } catch (e) { }
  }
}