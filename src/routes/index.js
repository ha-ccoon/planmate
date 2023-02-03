'use strict';
const express = require('express');
const { response } = require('../../app');
const router = express.Router();
const { User } = require('../models');

//@ localhost:3000
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {});

//@ localhost:3000/register
router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  const { email, password, firstName, lastName, phoneNumber, birthDay } =
    req.body;
  const userInfo = await User.create({
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    birthDay,
  });
  res.json(userInfo);
});

//@ localhost:3000/main
router.get('/main', (req, res) => {
  res.render('main');
});

module.exports = router;
