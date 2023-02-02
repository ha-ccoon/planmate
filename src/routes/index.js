'use strict';
const express = require('express');
const router = express.Router();

//@ localhost:3000
router.get('/', (req, res) => {
  res.render('index');
});

//@ localhost:3000/register
router.get('/register', (req, res) => {
  res.render('register');
});

//@ localhost:3000/main
router.get('/main', (req, res) => {
  res.render('main');
});

module.exports = router;
