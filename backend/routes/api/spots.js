// backend/routes/api/index.js
const express = require('express')
const {Spot, Booking, Review, ReviewImage, SpotImage} = require('../../db/models')
const router = express.Router();

router.get('/', async (req, res) => {
    let allSpots = await Spot.findAll({
    //   include: Review
    })
    // for (let i = 0; i <allSpots.length; i++) {
    //   let spot = allSpots[i]
  res.json(allSpots);
});

module.exports = router;