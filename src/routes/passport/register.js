//@ 회원가입 라우터
'use strict';

const express = require('express');
const bcrypt = require('express');
const { User } = require('../../models');
const { isNotLoggedIn } = require('./logInStatus');
const router = express.Router();

router.post('/register', isNotLoggedIn, async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existedUser = await User.findOne({ email }); //! 수정필요
    if (existedUser) {
      return res.redirect('/join?error=exist'); // 에러페이지로 보냄
    }
    // 비밀번호 암호화
    const hash = await bcrypt.hash(password, 10);
    // DB에 회원정보 생성
    await User.create({
      email,
      password: hash,
      firstName,
      lastName,
      phoneNumber,
      birthDay,
    });
    res.redirect('/');
  } catch (err) {}
});

module.exports = router;
