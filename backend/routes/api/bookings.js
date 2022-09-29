// backend/routes/api/index.js
const express = require('express')
const {Spot, Booking, Review, ReviewImage, SpotImage, User} = require('../../db/models');
const spot = require('../../db/models/spot');
const router = express.Router();
// backend/routes/api/session.js
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
        const spotty = await SpotImage.findOne({
            where: {
                spotId: bookingsArr[0].spotId
            }
        })
        booking.Spot.previewImage = spotty.toJSON().url
    }
    const final = {Bookings: bookingsArr}
    res.json(final)
})









module.exports = router;