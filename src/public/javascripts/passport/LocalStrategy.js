//@ 로그인 인증 절차 코드 (라우터에서 요청)
'use strict';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../../../models');

module.exports = () => {
  passport.use(
    'local',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        session: true,
        passReqToCallback: false,
      },
      async (email, password, done) => {
        try {
          // 가입된 회원(email) 가져오기
          const existedUser = await User.findOne({ email }); //! 수정
          if (existedUser) {
            // 입력된 password와 가지고 있는 password가 같은지 비교
            const passwordCompared = await bcrypt.compare(
              password,
              existedUser.password
            );
            if (passwordCompared) {
              done(null, existedUser); // 같다면, 입력된 email 승인
            } else {
              done(
                null,
                false,
                alert({
                  message: '비밀번호를 잘못 입력 하셨습니다. ',
                })
              ); // 같지 않다면, 메세지 전송
            }
          } else {
            done(null, false, alert({ message: '가입되지 않은 회원입니다.' })); // done() 호출이 끝나면, 다시 라우터로 돌아가서 미들웨어 콜백 실행
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
