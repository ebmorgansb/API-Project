// backend/routes/api/index.js
const express = require('express')
const {Spot, Booking, Review, ReviewImage, SpotImage} = require('../../db/models');
const spotimage = require('../../db/models/spotimage');
const router = express.Router();

