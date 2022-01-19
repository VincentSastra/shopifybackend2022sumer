require('dotenv').config()

const express = require('express');
const app = express();


// Sets up CORS
const cors = require('cors')
app.use(cors({
  optionsSuccessStatus: 200
}))

// Sets up logging
const logger = require('morgan');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sets up `item` routes to GET, POST, PATCH individual item
const itemRouter = require('./routes/item');
app.use('/item', itemRouter);

// Sets up `catalogue routes LIST & SEARCH from all items
const catalogueRouter = require('./routes/catalogue')
app.use('/catalogue', catalogueRouter)

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
