// NODE_ENV: 'development'
const DEV = {
  BASE_URL: '/root/',
  CDN_URL: '/',
}

// NODE_ENV: 'production'
const STG = {
  BASE_URL: '/root/',
  CDN_URL: '/',
}

// NODE_ENV: 'production'
// In netlify CDN_URL should be root: '/'
const PRO = {
  BASE_URL: '/root/',
  CDN_URL: '/',
}

// but in normal use case: when we set the root 'BASE_URL' to ex: '/root/'
// CDN_URL should also be '/root/'
/*

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
// In netlify CDN_URL should be root: '/'
const PRO = {
  BASE_URL: '/root/',
  CDN_URL: '/root/',
}

*/


module.exports = {
  envConfig: {
    'development': DEV,
    'staging': STG,
    'production': PRO
  }
}