const { Schema } = require('mongoose');

const DiarySchema = new Schema({
    contents: { type: String, required: true },
    author: String,
    written_date: {type: Date, default: Date.now},
    feelingconURL: String,
});

module.exports = DiarySchema;