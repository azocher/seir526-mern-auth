require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const port = process.env.PORT || 5000;
const cors = require('cors')

// Require Routes
const users = require('./routes/api/users');

// Init App
const app = express();

// Cors Middleware
app.use(cors())

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
