'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./auth/middleware/logger');
const v1Routes = require('./routes/v1.js');
// Esoteric Resources
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/routes.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(logger);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v2',authRoutes);
app.use('/api/v1', v1Routes);

// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error("Missing Port"); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
