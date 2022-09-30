// backend/routes/api/index.js
const express = require('express')
const {Spot, Booking, Review, ReviewImage, SpotImage} = require('../../db/models');
const spotimage = require('../../db/models/spotimage');
const router = express.Router();


//Delete a review image
//
//
//
router.delete('/:imageId', async (req,res) => {
    const imageId = req.params.imageId
    const reviewImg = await ReviewImage.findByPk(imageId)
    if (!reviewImg) {
        res.status(404)
        res.json({
            "message": "Review Image couldn't be found",
            "statusCode": 404
          })
    }
    await reviewImg.destroy()

    res.json({
        "message": "Successfully deleted",
        "statusCode": 200
      })
})


module.exports = router;