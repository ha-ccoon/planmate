//@ 로그인을 꼭 해야되는 페이지와, 하지 않아도 되는 페이지 구분
'use strict';

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send('로그인이 필요 합니다.');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent('로그인한 상태 입니다.');
    res.redirect(`/?error=${message}`); //! 구현 필요
  }
};
