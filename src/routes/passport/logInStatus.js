//@ 로그인을 꼭 해야되는 페이지와, 하지 않아도 되는 페이지 구분
'use strict';

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send('로그인이 필요 합니다.');
    res.redirect('/');
    console.log('isLoggedIn error');
  }
};

const isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/main');
    console.log('isNotLoggedIn error');
  }
};

module.exports = {
  isLoggedIn,
  isNotLoggedIn,
};
