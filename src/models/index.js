//@ 스키마 모델화 JS
const mongoose = require('mongoose');
const UserSchema = require('./Schemas/User');
const CalendarSchema = require('./Schemas/Calendar');



// 참조 (모델 이름, 스키마, Collections 이름)
exports.User = mongoose.model('User', UserSchema, 'UserList');
exports.Calendar = mongoose.model('Calendar', CalendarSchema, 'CalendarList');