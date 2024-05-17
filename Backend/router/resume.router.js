const express = require('express')
const { resumeAll, resumeId, resumeCreateNew, resumeContInfo, resumeSummary, resumeObjective, resumeEduc, resumeProjects, resumeSkills, resumeWork, resumeImg, deleteResume } = require('../controller/resumeCont/resume.controller')
const router = express.Router()


/* get routes */

router.get('/get/resumes' , resumeAll)
router.get('/get/resumes/:id' , resumeId)

/*post routes */

router.post('/post/resume/createNewResume' , resumeCreateNew)
router.post('/post/resume/continfo/:id'  , resumeContInfo)
router.post('/post/resume-summary/:id' , resumeSummary)
router.post('/post/resume-objective/:id' , resumeObjective)
router.post('/post/resume-eduction/:id' , resumeEduc)
router.post('/post/resume-project/:id' , resumeProjects)
router.post('/post/resume-skills/:id' , resumeSkills)
router.post('/post/resume-workexp/:id' , resumeWork)
router.post('/post/resume-uploadimage/:id' , resumeImg)

/* Delete routes */

router.delete('/delete/resume/:id' , deleteResume)

module.exports = router