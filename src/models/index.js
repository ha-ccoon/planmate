const mongoose = require('mongoose');
const UserSchema = require('./Schemas');

exports.User = mongoose.model('User', UserSchema, 'UserList');
