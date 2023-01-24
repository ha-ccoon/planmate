'use strict';
const { Schema } = require('mongoose');
const crypto = require('crypto');

//@ 비밀번호 암호화
function hash(password) {
  return crypto
    .createHmac('sha256', process.env.SECRET_KEY)
    .update(password)
    .digest('hex');
}

//@ 유저 정보 스키마
const UserSchema = new Schema({
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  google: {
    id: String,
    accessToken: String,
  },
});

module.exports = UserSchema;
