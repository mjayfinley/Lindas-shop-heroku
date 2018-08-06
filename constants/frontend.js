const FRONTEND_DEV_URLS = [ 'https://lindas-shop.herokuapp.com/' ]

const FRONTEND_PROD_URLS = [
  'https://lindas-shop.herokuapp.com/',
  'https://lindas-shop.herokuapp.com/'
]


module.export = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS
