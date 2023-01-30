'use strict';
const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');

//@ 유저 정보 스키마
const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  birthDay: Date,
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
