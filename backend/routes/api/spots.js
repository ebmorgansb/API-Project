// backend/routes/api/index.js
const express = require('express')
const {Spot, Booking, Review, ReviewImage, SpotImage} = require('../../db/models');
const spot = require('../../db/models/spot');
const router = express.Router();

router.get('/', async (req, res) => {
    let allSpots = await Spot.findAll({
       include: [{model: Review}, {model: SpotImage}]
    //   //  {model: SpotImage,
    //   //   attributes: 'previewImage'
    //   // }
    // ]
    })
    let spotArr = []
    for (let i = 0; i <allSpots.length; i++) {
      let counter = 0
      let spot = allSpots[i].toJSON()
      spotArr.push(spot)
      let reviews = spot.Reviews
      let images = spot.SpotImages
      for (let i = 0; i < reviews.length; i++) {
        let review = reviews[i]
        let starz = review.stars
        counter += starz
      }
      for (let i = 0; i < images.length; i++) {
        let image = images[i]
        let url = image.url
        spot.previewImage = url
      }
      delete spotArr[i].SpotImages
      let avgRating = counter/reviews.length
      spot.avgRating = avgRating
      delete spotArr[i].Reviews

    }

  res.json(spotArr);
});

module.exports = router;