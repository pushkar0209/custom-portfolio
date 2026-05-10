const logger = require('./logger');

const requiredEnvs = [
  'MONGO_URI',
  'JWT_SECRET',
  'ADMIN_USERNAME',
  'ADMIN_PASSWORD',
  'CLIENT_URL'
];

const validateEnv = () => {
  const missing = requiredEnvs.filter(env => !process.env[env]);
  
  if (missing.length > 0) {
    logger.error(`❌ Missing required environment variables: ${missing.join(', ')}`);
    if (process.env.NODE_ENV === 'production') {
      logger.error('CRITICAL: Server cannot start in production without these variables.');
      process.exit(1);
    } else {
      logger.warn('WARNING: Some variables are missing. Some features may not work.');
    }
  } else {
    logger.info('✅ Environment variables validated.');
  }
};

module.exports = validateEnv;
