// // backend/routes/api/index.js
const express = require('express')
const {Spot, Booking, Review, ReviewImage, SpotImage, User} = require('../../db/models');
const router = express.Router();
// // backend/routes/api/session.js
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { ExclusionConstraintError } = require('sequelize');


//Get all of the Current User's Bookings
//
//
//
router.get('/current', async (req,res) => {
    const currUser = req.user.id

    const bookings = await Booking.findAll({
        where: {
            userId: currUser
        },
        attribute: ['userId', 'startDate', 'endDate', 'createdAt', 'updatedAt'],
        include: [{model: Spot}]
    })
    let bookingsArr = []
    for (let i = 0; i < bookings.length; i++) {
        let booking = bookings[i].toJSON()
        bookingsArr.push(booking)
        }
        for (let i = 0; i < bookingsArr.length; i++) {
        const booking = bookingsArr[i]
        console.log(booking)
        const spotId = booking.Spot.id
        console.log(spotId)
        const spotty = await SpotImage.findOne({
            where: {
                spotId: spotId
            }
        })
        if (!spotty) {}
        else {
        booking.Spot.previewImage = spotty.url
        }
}
    const final = {Bookings: bookingsArr}
    // console.log(final)
    return res.json(final)
})


// edit a booking



router.put('/:bookingId', async (req,res) => {
    const bookingId = req.params.bookingId
    const {startDate, endDate} = req.body
    const editBooking = await Booking.findOne({
        where: {
            id: bookingId
        }
    })

    if (!editBooking) {
        res.status(404)
        res.json({
            "message": "Booking couldn't be found",
            "statusCode": 404
          })
    }

    editBooking.update({
        startDate: startDate,
        endDate: endDate
    })
    console.log(editBooking)
    res.json(editBooking)
})

//Delete a booking
//
//
//
router.delete('/:bookingId', async (req,res) => {
    const bookingId = req.params.bookingId
    const booking = await Booking.findByPk(bookingId)
    if (!booking) {
        res.status(404)
        res.json({
            "message": "Booking couldn't be found",
            "statusCode": 404
          })
    }
    await booking.destroy()

    res.json({
        "message": "Successfully deleted",
        "statusCode": 200
      })
})





module.exports = router;