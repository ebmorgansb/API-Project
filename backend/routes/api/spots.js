// backend/routes/api/index.js
const express = require('express')
const {Spot, Booking, Review, ReviewImage, SpotImage, User} = require('../../db/models');
const spot = require('../../db/models/spot');
const router = express.Router();
// backend/routes/api/session.js
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { ExclusionConstraintError } = require('sequelize');


//Get All Spots
//
router.get('/', async (req, res) => {
    let allSpots = await Spot.findAll({
       include: [{model: Review}, {model: SpotImage}]
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
//
//
router.post('/', validateNewSpot, async (req, res) => {
  const {address, city, state, country, lat, lng, name, description, price} = req.body
  const ownerId = req.user.id
  const newSpot = await Spot.create({
    ownerId,
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
  console.log(newSpotFinal)
  // newSpot[0].ownerId = req.user.id
  res.status(201)
  res.json(newSpotFinal)
})

//Add image to a spot based on spot id
//
//
router.post('/:spotId/images', async (req,res) => {
  const spotId = req.params.spotId
  let {url, preview} = req.body

  //add preview image to the associated spot (UPDATE)
  const assocSpot = await Spot.findByPk(spotId)


  if (!assocSpot) {
    res.status(404)
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


// get all spots owned by current user
//
//currSpots is an empty array even though I can see in the database there are associated spots to the current user id
router.get('/current', async (req, res) => {

  const currUserId = req.user.id;

    const currSpots = await Spot.findAll({
      where: {
        ownerId: currUserId
      },
      include:
        [{model: Review}, {model: SpotImage}]
    })

    let spotsArr = []
    const spots = currSpots.dataValues
    for (let i = 0; i < currSpots.length; i++) {
      let spot = currSpots[i].toJSON()
      spotsArr.push(spot)
    }

    for (let i = 0; i < spotsArr.length; i++) {
      let counter = 0
      let spot = spotsArr[i]
      let reviews = spot.Reviews
      let images = spot.SpotImages
      for (let i = 0; i < reviews.length; i++) {
      let review = reviews[i]
      let starz = review.stars
      console.log(starz)
      counter += starz
      }

      for (let i = 0; i < images.length; i++) {
        let image = images[i]
        let url = image.url
        spot.previewImage = url
      }
      let avgRating = counter/reviews.length.toFixed(1)
      spot.avgStarRating = avgRating
      delete spot.Reviews
      delete spot.SpotImages
    }

      let finalSpotsArr = {Spots: spotsArr}
    return res.json(finalSpotsArr)
    })






// get details of a spot by an id
//
//
// router.get('/:spotId', async (req, res) => {

//   const spotDetailId = req.params.spotId
//   const spotDeets = await Spot.findOne({
//     where: {
//       id: spotDetailId
//     }
//     //  include: [{model: SpotImage}],
//   })

//   if (!spotDeets) {
//     res.status(404)
//     return res.json({
//       "message": "Spot couldn't be found",
//       "statusCode": 404
//     })
//   }

//   const spotDeetsOb = spotDeets.dataValues
//   const ownerIdDeet = spotDeetsOb.ownerId

//   //create all spot images
//   const deetSpotImages = await SpotImage.findAll({
//     where: {
//       spotId: spotDetailId
//     },
//     attributes: {
//       exclude: [ 'createdAt', 'updatedAt', 'spotId']
//     }
//   })

//   let imgArr = []
//   deetSpotImages.forEach(imageOb => {
//     imgArr.push(imageOb.toJSON())

//   })


//   const spotReviews = await Review.findAll({
//     where: {
//       spotId: req.params.spotId
//     }
//   })
//    let deetReviewsArr = [spotReviews[0].dataValues]
//   console.log(spotReviews)
//   let deetReviewsArrNum = deetReviewsArr.length
//   let starCount = 0
//   for (let i = 0; i < deetReviewsArr.length; i++) {
//     let reviewOb = deetReviewsArr[i]
//     let starRate = reviewOb.stars
//     starCount += starRate
//   }
//   let avgReview = starCount/deetReviewsArrNum

//   const spotOwner = await User.findOne({
//     where: {
//       id: ownerIdDeet
//     },
//     attributes: {
//       exclude: ['username']
//     }
//   })
//   spotDeetsOb.numReviews = deetReviewsArrNum
//   spotDeetsOb.avgStarRating = avgReview.toFixed(1)
//   spotDeetsOb.SpotImages = imgArr
//   spotDeetsOb.Owner = spotOwner
//   console.log(spotDeetOb)
//   res.json(spotDeetsOb)
// })
//
//
//
//
//







//edit a spot
//
//
router.put('/:spotId', validateNewSpot, async (req, res) => {

  const updateSpotId = req.params.spotId
  const {address, city, state, country, lat, lng, name, description, price} = req.body

  const updateSpot = await Spot.findOne({
    where: {
      id: updateSpotId
    }
  })


  if (!updateSpot) {
    res.status(404)
    return res.json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }

  updateSpot.set({
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

  res.json(updateSpot)
})


//Validations for create a review for a spot
const validateNewReview = [
  check('review')
  .exists({ checkFalsy: true })
  .notEmpty()
  .withMessage("Review text is required"),
  check('stars')
  .notEmpty()
  // .isInt(str [options])
  .exists({ checkFalsy: true })
  .withMessage('State is required'),
handleValidationErrors
];


//create a review for a spot
//
//
router.post('/:spotId/reviews', async (req, res) => {
  const spotId = req.params.spotId
  const {review, stars} = req.body
  const currUser = req.user.id
  const spotsArr = []
  const userSpot = await Spot.findAll({
    where: {
      id: spotId
    },
    include: [{model: Review}]
  })

  if (!userSpot.length) {
    console.log('test')
    res.status(404)
    return res.json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }

  for (let i = 0; i < userSpot.length; i++) {
    let spot = userSpot[i].toJSON()
    spotsArr.push(spot)
  }
  // console.log(spotsArr)
  const spotsArrIndex = spotsArr[0]
  const reviewsArr = spotsArrIndex.Reviews


reviewsArr.forEach(ele => {
  if (ele.userId === req.user.id) {
      res.status(403)
      return res.json({
          "message": "User already has a review for this spot",
          "statusCode": 403
        })
  }
});



  const newReview = await Review.create({
    spotId,
    userId: currUser,
    review,
    stars
  })
res.status(201)
res.json(newReview)

})




//get reviews by spotId
//
//
router.get('/:spotId/reviews', async (req, res) => {
  const spotId = req.params.spotId
  const allReviews = await Review.findAll({

      where: {
          spotId: spotId
      },
      include: [{model: ReviewImage, attributes: ['url', 'id']}, {model: User,  attributes: ['id', 'firstName', 'lastName']}],

  })

  const spot = await Spot.findByPk(spotId)


  if (!spot) {
    res.status(404)
    return res.json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }


  let reviewArr = []
  for (let i = 0; i < allReviews.length; i++) {
    let review = allReviews[i].toJSON()
    delete review.ReviewImages.createdAt
    reviewArr.push(review)
  }

  const finalAllReview = {Reviews: allReviews}
  res.json(finalAllReview)
})


router.post('/:spotId/bookings', async (req, res) => {
  const currUser = req.user.id
  const {startDate, endDate} = req.body
  const spotId = req.params.spotId

  const spotty = await Spot.findByPk(spotId)

if (!spotty) {
  res.status(404)
  res.json({
    "message": "Spot couldn't be found",
    "statusCode": 404
  })
}
  const newBooking = await Booking.create({
    spotId: spotId,
    userId: currUser,
    startDate,
    endDate,

  })

  res.json(newBooking)

})



module.exports = router;