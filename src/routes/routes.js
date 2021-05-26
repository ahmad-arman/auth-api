'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('../auth/models/users.js');
const basicAuth = require('../auth/middleware/basic.js')
const bearerAuth = require('../auth/middleware/bearer.js')
const permissions = require('../auth/middleware/acl.js')
const multer = require('multer')
const upload =multer();

authRouter.post('/signup',upload.none(), async (req, res, next) => {
  try {
    let user = new User(req.body);
    const userRecord = await user.save();
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  try {
    const user = {
      user: req.user,
      token: req.user.token
    };
    res.status(200).json(user);
    
  } catch (error) {
    next(error.message)
  }

});

authRouter.get('/users', bearerAuth, permissions('delete'), async (req, res, next) => {
 
  try {
    const users = await User.find({});
    const list = users.map(user => user.username);
    res.status(200).json(list);
  } catch (error) {
    // throw Error('you have error in route(/users)');
    next(error.message)
  }
});

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
  try {
    await res.status(200).send('Welcome to the my secret area')
  } catch (error) {
    next(error.message)
  }
 
});

authRouter.get('/user', bearerAuth, permissions('read'),async (req, res) => {
 
  try {
    await res.json({ user: req.user });
  } catch (error) {
    next(error.message)
  }
});

// create
authRouter.post('/create', bearerAuth, permissions('create'),async (req, res) => {
 try {
    await res.send('You can create any something!!');
 } catch (error) {
   next(error.message)
 }
  
});

// update
authRouter.put('/update', bearerAuth, permissions('update'), async (req, res) => {
  try {
    await res.send('You can update any something!!');
  } catch (error) {
    next(error.message)
  }
 
});

authRouter.patch('/update', bearerAuth, permissions('update'),async (req, res) => {
  try {
    await res.send('You can update patch any something!!');
  } catch (error) {
    next(error.message)
  }
  
});

// delete
authRouter.delete('/delete', bearerAuth, permissions('delete'),async (req, res) => {
  try {
    await res.send('You can delete any something!!');
  } catch (error) {
    next(error.message)
  }
  
});


module.exports = authRouter;
