// // backend/routes/api/index.js
const express = require('express')
const {Spot, Booking, Review, ReviewImage, SpotImage, User} = require('../../db/models');
const router = express.Router();
// // backend/routes/api/session.js
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { ExclusionConstraintError } = require('sequelize');


//Delete a spot image
//
//
//
router.delete('/:imageId', async (req,res) => {
    const imageId = req.params.imageId
    const spotImg = await SpotImage.findByPk(imageId)
    if (!spotImg) {
        res.status(404)
        res.json({
            "message": "Spot Image couldn't be found",
            "statusCode": 404
          })
    }
    await spotImg.destroy()

    res.json({
        "message": "Successfully deleted",
        "statusCode": 200
      })
})

module.exports = router;
