const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const routes = require('./routes');

const app = express();
// In development load environment variables from the .env file
dotenv.config();

// Initialize Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize REST API routes
app.use(routes);

const port = process.env.PORT || 5000;
// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
