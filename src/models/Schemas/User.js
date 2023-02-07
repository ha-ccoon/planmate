'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

//@ 유저 정보 스키마
const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
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
