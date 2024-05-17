const express = require('express')
const {letterCreate , addPersonalInfo, EmployerInfo, LetterDes, allLetters, deleteLetters} = require('../controller/letterCont/letter.controller')
const router = express.Router()

/**this route for get letters route */

router.get('/get/letter'  , (req , res) => {
    return res.status(200).json({
        msg  : 'hello from letter server'
    })
})

router.get('/get/all/letters' , allLetters)

/**this routes is post create letter route */

router.post('/post/letter' , letterCreate)
router.post('/post/letter/addPersonalInfo/:id' , addPersonalInfo)
router.post('/post/letter/addEmployerInfo/:id' , EmployerInfo)
router.post('/post/letter/addLetterDesInfo/:id' , LetterDes)

/* this routes is delete create letter route */

router.delete('/delete/letters/:id' , deleteLetters)

module.exports = router