//@ 스키마 모델화 JS
const mongoose = require('mongoose');
const UserSchema = require('./Schemas/User');

exports.User = mongoose.model('User', UserSchema, 'UserList');
