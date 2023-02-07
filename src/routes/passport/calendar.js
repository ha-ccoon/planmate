//@ 캘린더 라우터
'use strict';

const express = require('express');
const bcrypt = require('express');
const { Calendar } = require('../../models');
const router = express.Router();

router.post('/calendar', async (req, res, next) => {
  const { title, date } = req.body;

  try {
    const existedTitle = await User.findOne({ title }); //! 수정필요
    if (existedTitle) {
      return res.redirect('/join?error=exist'); // 에러페이지로 보냄
    }
    
    // DB에 회원정보 생성
    await Calendar.create({
      title,
      date
    });
    res.redirect('/');
  } catch (err) {}
});

module.exports = router;