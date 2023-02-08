const { Schema } = require('mongoose');

const DiarySchema = new Schema({
    comment: { type: String, required: true },
    writer: String,
    written_date: {type: Date, default: Date.now},
    feelingconURL: String,
});

module.exports = DiarySchema;