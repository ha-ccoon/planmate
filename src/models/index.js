//@ 스키마 모델화 JS
const mongoose = require("mongoose");
const UserSchema = require("./Schemas/User");
const CalendarSchema = require("./Schemas/Calendar");
const DiarySchema = require("./Schemas/Diarys");
const PlanSchema = require("./Schemas/Plans");

// 참조 (모델 이름, 스키마, Collections 이름)
exports.User = mongoose.model("User", UserSchema, "UserList");
exports.Calendar = mongoose.model("Calendar", CalendarSchema, "CalendarList");
exports.Diary = mongoose.model("Diary", DiarySchema, "DiaryList");
exports.Plan = mongoose.model("Plan", PlanSchema, "PlanList");
