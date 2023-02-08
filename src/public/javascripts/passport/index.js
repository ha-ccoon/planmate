//@ 로그인이 성공했을 때,
'use strict';
const passport = require('passport');
const local = require('./LocalStrategy'); // 로컬 서버 로그인
const google = require('./google'); // 구글 로그인
const User = require('../../../models/index');

module.exports = () => {
  //@ 유저 정보를 직렬화(serialize)해서 session에 저장
  passport.serializeUser((user, done) => {
    // session에sms user.id만 저장하고 데이터는 deserializeUser로 전달
    done(null, user.id);
  });

  //@ 클라이언트의 요청마다 세션정보를 실제 DB와 비교
  //@ serializeUser()가 done 호출 하거나, passport.session()이 실행될 때 실행
  passport.deserializeUser((id, done) => {
    User.findOne({ email: id })
      .then((user) => done(null, user)) // req.login 으로 돌아가 미들웨어 실행
      .catch((err) => done(err));
  });

  local();
};

// 보통 세션의 무게를 줄이기 위해, user의 id만 세션에 저장
// 해당 유저 정보가 존재하면 done을 통해 req.user에 사용자 전체 정보 저장 (다른 미들웨어에서도 req.user 정보를 공유 가능)
// serializeUser에서 done으로 넘겨주는 user가 deserializeUser의 첫 번째 매개변수로 전달되기 때문에 둘의 타입은 항상 일치 필요
