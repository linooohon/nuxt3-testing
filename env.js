// NODE_ENV: 'development'
const DEV = {
    BASE_URL: '/test/',
    CDN_URL: '/',
  }
  
  // NODE_ENV: 'production'
  const STG = {
    BASE_URL: '/test/',
    CDN_URL: '/test/',
  }
  
  // NODE_ENV: 'production'
  const PRO = {
    BASE_URL: '/test/',
    CDN_URL: '/test/',
  }
  
  module.exports = {
    envConfig: {
      'development': DEV,
      'staging': STG,
      'production': PRO
    }
  }