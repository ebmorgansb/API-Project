// backend/routes/api/index.js
const express = require('express')
const {Spot, Booking, Review, ReviewImage, SpotImage} = require('../../db/models');
const spot = require('../../db/models/spot');
const router = express.Router();
// backend/routes/api/session.js
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


//Get All Spots
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
      spot.avgRating = avgRating.toFixed(2)
      delete spotArr[i].Reviews

    }
    const finalAllSpots = {Spots: spotArr}
  res.json(finalAllSpots);
});

const validateNewSpot = [
  check('address')
  .exists({ checkFalsy: true })
  .notEmpty()
  .withMessage("Street address is required"),
  check('city')
  .exists({ checkFalsy: true })
  .notEmpty()
  .withMessage('City is required'),
  check('state')
  .exists({ checkFalsy: true })
  .notEmpty()
  .withMessage('State is required'),
  check('country')
  .exists({ checkFalsy: true })
  .notEmpty()
  .withMessage('Country is required'),
  // check('lat')
  // .notEmpty()
  // .withMessage('Latitude is not valid'),
  // check('lng')
  // .exists({ checkFalsy: true })
  // .notEmpty()
  // .withMessage('Latitude is not valid'),
  check('name')
  .notEmpty()
  .isLength({ max: 49 })
  .exists({ checkFalsy: true })
  .withMessage('State is required'),
  check('description')
  .notEmpty()
  .exists({ checkFalsy: true })
  .withMessage('Description is required'),
  check('price')
  .notEmpty()
  .exists({ checkFalsy: true })
  .withMessage('Price per day is required'),
handleValidationErrors
];

//Create new spot
router.post('/', validateNewSpot, async (req, res) => {
  const {address, city, state, country, lat, lng, name, description, price} = req.body

  const newSpot = await Spot.create({
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price
  })
  let newSpotFinal = newSpot.dataValues
  newSpotFinal.ownerId = req.user.id
  console.log(req.user.id)
  // newSpot[0].ownerId = req.user.id
  res.json(newSpotFinal)
})

//Add image to a spot based on spot id
router.post('/:spotId/images', async (req,res) => {
  const spotId = req.params.spotId
  let {url, preview} = req.body

  //add preview image to the associated spot (UPDATE)
  const assocSpot = await Spot.findByPk(spotId)


  if (!assocSpot) {
    return res.json(
     {
       "message": "Spot couldn't be found",
       "statusCode": 404
     }
    )

    }
  //Image created
  const spotImg = await SpotImage.create({
    url,
    preview,
    spotId: spotId
  })

//
const imgResponse = await SpotImage.findOne({
  where: {
    id: spotImg.id
  },
  attributes: ['id', 'url', 'preview']
})

assocSpot.previewImage = spotImg.url

  res.json(imgResponse)
})

















module.exports = router;