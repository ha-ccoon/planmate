'use strict';
const dotenv = require('dotenv');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const passportIndex = require('./src/public/javascripts/passport/index');

const app = express();
dotenv.config();
passportIndex();

// const passportConfig = require('./src/public/javascripts/passport');
// passportConfig();

//@ routers
const indexRouter = require('./src/routes/index');
const registerRouter = require('./src/routes/passport/register');
// const logInOutRouter = require('./src/routes/passport/logInOut');

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/public')));

//@ cookie config
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

// app.use(session(express - session));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/', registerRouter);
// app.use('/', logInOutRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
