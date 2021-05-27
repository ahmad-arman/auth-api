'use strict';
/**
 * 
 * @param {metthod,path} req 
 * @param {path} res 
 * @param {} next 
 */
// All middleware has access to the request.
// Here, we're simply logging out the interesting parts
const logger = (req, res, next) => {
  console.log('REQUEST:', req.method, req.path);

  // Call next() so that the next function in line can do it's work
  next();
}

module.exports = logger;
