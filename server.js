const cors = require('cors')
const bodyParser = require('body-parser')

const CORS_WHITELIST = require('./constants/frontend');

const corsOptions = {
  origin: 'https://lindas-shop.herokuapp.com/',
  optionsSuccessStatus: 200
};

const configureServer = app => {
  app.use(cors(corsOptions));

  app.use(bodyParser.json());
};

module.exports = configureServer;
