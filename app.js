var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

// const passport = require('passport');
// const session = require('express-session');

// //configurações de autenticação
// const MySQLStore = require('express-mysql-session')(session);
// require('./auth')(passport);
// app.use(session({
//  store: new MySQLStore({
//   //  host: process.env.MYSQL_HOST,
//   //  port: process.env.MYSQL_PORT,
//   //  user: process.env.MYSQL_USER,
//   //  password: process.env.MYSQL_PASSWORD,
//   //  database: process.env.MYSQL_DB
//       host: 'localhost',
//       port: 3306,
//       user: 'root',
//       password: 'annamanunico',
//       database: 'admin_produtos_ximbole'
//   }), 
//   // secret: process.env.SESSION_SECRET, //pode ser uma senha '123',
//   secret: '123',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 30 * 60 * 1000 }// 30min
// }))
// app.use(passport.initialize());
// app.use(passport.session());

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
// var newRouter = require('./routes/new');
var usersRouter = require('./routes/users');



// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/new', indexRouter);
// app.use('/users', authenticationMiddleware, usersRouter);

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
  res.render('error');
});

module.exports = app;
