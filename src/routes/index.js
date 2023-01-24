'use strict';
const express = require('express');
const router = express.Router();

//@ localhost:3000
router.get('/', (req, res, next) => {
  res.render('index');
});

//@ localhost:3000/login
router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/login', )

//@ localhost:3000/register
router.get('/register', (req, res) => {
  res.render('register');
});
router.post('/register', )

module.exports = router;
