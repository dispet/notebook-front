const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8080/contacts',
    secure: false,
    logLevel: 'debug',
    pathRewrite: {'^/api': ''}
  }
];

module.exports = PROXY_CONFIG;
