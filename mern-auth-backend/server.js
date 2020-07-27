require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const port = process.env.PORT || 5000;

// Require Routes
const users = require('./routes/api/users');

// Init App
const app = express();

// Cors Middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

// BodyParser Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// DB Config
const db = process.env.MONGODB_URI

// Connect to MongoDB (using mLab)
mongoose.connect(db)
  .then((() => console.log('MongoDB connected...')))
  .catch(err => console.log(err));

// Test Route
app.get('/', (req, res) => res.send('Hello World...'));

// Passport Middleware
app.use(passport.initialize());

// Passport JWT Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);

// Start Server
app.listen(port, () => console.log(`Servers running on port ${port}`));
