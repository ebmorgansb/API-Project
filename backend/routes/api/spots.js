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

      //pagination
      let { page, size} = req.query;
      const pagination = {};
      if (!page) {
          page = 1
      }
      if (!size) {
          size = 20
      };

      if (page >= 1 && size >= 1) {
          pagination.offset = size * (page - 1);
          pagination.limit = size
      }

    let allSpots = await Spot.findAll({
       include: [{model: Review}, {model: SpotImage}],
       ...pagination
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
      if (spot.avgRating == 'NaN') {

        spot.avgRating = 'New'
    }
      delete spotArr[i].Reviews

    }
    let finalAllSpots = {
      Spots: spotArr,
      page,
      size
    }

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
//
//
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
      spot.avgRating = avgRating
      delete spot.Reviews
      delete spot.SpotImages
    }

      let finalSpotsArr = {Spots: spotsArr}
    return res.json(finalSpotsArr)
    })






// get details of a spot by an id
//
//
router.get('/:spotId', async (req, res) => {

const spotId = req.params.spotId

const allReviews = await Review.findAll({
  where: {
    spotId: spotId
  }
})
const reviewsArr = []
let starCount = 0
for (let i = 0; i < allReviews.length; i++) {
  let review = allReviews[i].toJSON()
  let stars = review.stars
  starCount += stars
  reviewsArr.push(review)
}

const theSpot = await Spot.findOne({
  where: {
    id: spotId
  },
  include: [{model: SpotImage, attributes: ['id', 'url', 'preview']}, {model: User, attributes: ['id', 'firstName', 'lastName']}]
})


if (theSpot === null) {
  res.status(404)
  return res.json({
    "message": "Spot couldn't be found",
    "statusCode": 404
  })
}
const assocUser = await User.findOne({
  where: {
    id: spotId
  }
})
// console.log('DETAILS ROUTE', assocUser)
// const newUser = assocUser.toJSON()
// delete newUser.username

const theRealSpot = theSpot.toJSON()
let numReviewz = reviewsArr.length
// if(numReviewz) {
  let avgRating = starCount/numReviewz
  avgRating = avgRating.toFixed(2)
  theRealSpot.numReviews = numReviewz
  theRealSpot.avgStarRating = avgRating
  // theRealSpot.Owner = newUser
// }
// else{}
res.json(theRealSpot)
})












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


//create a review for a spot baed on the Spot's id
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
  const reviewz = spotsArr[0].Reviews
    for (let i = 0; i < reviewz.length; i++) {
      let review = reviewz[i]
      if (review.userId === currUser) {
        res.status(403)
        return res.json({
          "message": "User already has a review for this spot",
          "statusCode": 403
        })
      }
    }


      const newReview = await Review.create({
        spotId,
        userId: currUser,
        review,
        stars
      })
    res.status(201)
    return res.json(newReview)






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



// get all bookings for a spot baed on the Spot's id



router.get('/:spotId/bookings', async (req, res) => {
  const spotId = req.params.spotId
  const currUser = req.user.id
  const spot = await Spot.findByPk(spotId)
  if (!spot) {
    res.status(404)
    return res.json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }
  const spotUser = spot.toJSON().ownerId


  if (!spot) {
    res.status(404)
    return res.json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }

if (currUser === spotUser) {
  let arr1 = []
  const bookingsAndUsers = await Booking.findAll({
    where: {
      spotId: spotId
    },
    include: [{model: User, attributes: ['id', 'firstName', 'lastName']}]
  })

  for (let i = 0; i < bookingsAndUsers.length; i++) {
    let bookingsAndUser = bookingsAndUsers[i].toJSON()
    arr1.push(bookingsAndUser)
  }
  console.log(arr1)
  const finalArr = {Bookings: arr1}

  res.json(finalArr)
}

if (currUser !== spotUser) {

  const bookings = await Booking.findAll({
    where: {
      spotId: spotId
    },
    attributes: ['spotId', 'startDate', 'endDate']
})
let arr2 = []
for (let i = 0; i < bookings.length; i++) {
  let booking = bookings[i].toJSON()
  arr2.push(booking)
}

const final2 = {'Bookings': arr2}
res.json(final2)

}

})


//Delete a spot
//
//
//
router.delete('/:spotId', async (req,res) => {
  const spotId = req.params.spotId
  const spot = await Spot.findByPk(spotId)
  if (!spot) {
      res.status(404)
      return res.json({
          "message": "Spot couldn't be found",
          "statusCode": 404
        })
  }
  await spot.destroy()

  return res.json({
      "message": "Successfully deleted",
      "statusCode": 200
    })
})



// Create a Booking from a Spot based on the Spot's id



router.post('/:spotId/bookings', async (req, res) => {
  const {startDate, endDate} = req.body;
  const spotId = req.params.spotId

  const newEndDate = new Date(endDate)
  const newStartDate = new Date(startDate)

  const spotty = await Spot.findAll({
      include: [{model: Booking}],
      where: {id: spotId}
  });

  if (!spotty.length) {
      res.status(404)
      return res.json({
          "message": "Spot couldn't be found",
          "statusCode": 404
      })
  }

  const newArr = [];
  spotty.forEach(spotz => {
      newArr.push(spotz.toJSON())
  });
  const prevBookings = newArr[0].Bookings

  for (let i = 0; i < prevBookings.length; i++) {
      const bookz = prevBookings[i];
      if (((newStartDate >= new Date(bookz.startDate) && newStartDate <= new Date(bookz.endDate)) || (newEndDate <= new Date(bookz.endDate) && newEndDate >= new Date(bookz.startDate))) || (newStartDate <= new Date(bookz.startDate) && newEndDate >= new Date(bookz.endDate))){
          res.status(403);
          return res.json({
            "message": "Sorry, this spot is already booked for the specified dates",
            "statusCode": 403,
            "errors": {
              "startDate": "Start date conflicts with an existing booking",
              "endDate": "End date conflicts with an existing booking"
            }
          })
      };
  };

  if (newStartDate >= newEndDate){
      res.status(400);
      return res.json({
          "error": "endDate cannot be on or before startDate",
          "statusCode": 400
      });
  };
  const newBooking = await Booking.create({
      spotId: req.params.spotId,
      userId: req.user.id,
      startDate,
      endDate
  });

 return res.json(newBooking)


})



module.exports = router;
