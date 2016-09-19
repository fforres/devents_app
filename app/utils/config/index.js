import configData from './config.json';

const configGetter = () => {
  const env = process.env.NODE_ENV;
  let config = configData[env];
  if (env === 'development' || !config) {
    config = configData.development;
  }
  return config;
};

export default configGetter();
