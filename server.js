const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const cors = require('cors');
const Complaint = require('./models/pengaduan'); // Import model pengaduan
const multer = require('multer'); // Import multer untuk menangani file upload

dotenv.config();

const app = express();

// Middleware untuk menetapkan header CORS
app.use(cors());

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
const auth = require('./routes/auth');
app.use('/api/auth', auth);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
