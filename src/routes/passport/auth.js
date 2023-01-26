//@ 회원가입, 로그인, 로그아웃 처리를 담당
//@ 클라이언트에서 로그인 요청이 들어오면 passport 폴더로 인증을 요청한다.
'use strict';
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middleware');

const router = express.Router();

//@ 로그인 요청
// isNotLoggedIn을 통과해야 callback() 실행
router.post('/index', isNotLoggedIn, (req, res, next) => {
  // localStrategy()에서 에서 done()이 호출된 후 실행
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError); //! 아까 에러창에 띄운거 아니였어?
    } else if (!user) {
      return res.redirect(`/?loginError=${info.message}`); //! 구현 필요
    }
    // 로그인이 성공한 경우, Passport/index.js로 가서 실행
    // index.js 실행 후 callback() 실행
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      // deserializeUser 성공시, 유저 정보는 session에 저장, 따라서 로그인 상태가 된다.
      return res.redirect('/main');
    });
  })(req, res, next); //^ 미들웨어를 계속 실행시키기 위해서 붙임
});

module.exports = router;
