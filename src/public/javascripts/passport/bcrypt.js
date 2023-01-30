//@ 비밀번호 암호화 시도
const bcrypt = require('bcrypt');

const plainPassword = 1234;
const saltRounds = 10;

bcrypt.genSalt(saltRounds, function (err, salt) {
  if (err) {
    console.log('bcrypt.genSlat() error: ', err.message);
  } else {
    function abc(req, res) {
      const hashed = bcrypt.hash(plainPassword, saltRounds);
      hashed.then(console.log(res));
    }
  }
});

// function (err, hash) {
//   if (err) {
//     console.log('bcrypt.hash() error: ', err.message);
//   } else {
//     console.log(hash);
//   }
