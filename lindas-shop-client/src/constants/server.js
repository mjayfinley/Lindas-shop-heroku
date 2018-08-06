const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://myapidomain.com'
  : 'https://lindas-shop.herokuapp.com/'

export default PAYMENT_SERVER_URL
