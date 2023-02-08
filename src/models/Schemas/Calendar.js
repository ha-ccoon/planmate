'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');

const CalendarSchema = new Schema({
    title : { type: Number, required: true },
    date: {
      type: Date,
      default: Date.now,
    }
}); //fullcalendar에 events로 넣을 스키마

module.exports = CalendarSchema;
