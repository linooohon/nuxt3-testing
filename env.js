// NODE_ENV: 'development'
const DEV = {
    BASE_URL: '/root/',
    CDN_URL: '/',
  }
  
  // NODE_ENV: 'production'
  const STG = {
    BASE_URL: '/root/',
    CDN_URL: '/root/',
  }
  
  // NODE_ENV: 'production'
  const PRO = {
    BASE_URL: '/root/',
    CDN_URL: '/root/',
  }
  
  module.exports = {
    envConfig: {
      'development': DEV,
      'staging': STG,
      'production': PRO
    }
  }