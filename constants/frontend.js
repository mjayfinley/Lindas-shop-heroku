const FRONTEND_DEV_URLS = [ 'http://localhost:3000' ]

const FRONTEND_PROD_URLS = [
  'https://myapidomain.com',
  'https://randomdomainwww.com'
]


module.export = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS
