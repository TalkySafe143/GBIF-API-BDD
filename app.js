var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const responses = require('./utils/responses/responses');

const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./network/auth');
const cameraDBRouter = require('./network/camera')
const usersRouter = require('./network/users');

var app = express();

app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRouter);
app.use('/api/cameraDB', cameraDBRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if (!err.output) return responses.errorResponse(req, res, err.message, 500);
  responses.errorResponse(req, res, err.output.payload, err.output.statusCode);
});

module.exports = app;
