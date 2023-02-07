'use strict';
const express = require('express');
const { response } = require('../../app');
const router = express.Router();
const { User } = require('../models');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');

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
  try {
    const { email, password, firstName, lastName, phoneNumber, birthDay } =
      req.body;
    const hash = await bcrypt.hash(password, 12);
    const userInfo = await User.create({
      email,
      password: hash,
      firstName,
      lastName,
      phoneNumber,
      birthDay,
    });

    // userInfo.save();
    console.log('your account is registered');
    res.redirect('/');
  } catch (error) {
    console.log('please try again');
    res.redirect('/register');
  }
});

//@ localhost:3000/main
router.get('/main', (req, res) => {
  res.render('main');
});

module.exports = router;
