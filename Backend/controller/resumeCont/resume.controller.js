const resumeSchema = require('../../model/resume.schema')

// create resume 
const resumeAll = async (req , res) => {
    const data = await resumeSchema.find({})
    return res.status(200).json(data)
}

const resumeEduc = async (req ,res) => {
    const {id} = req.params
    const arr = req.body
    console.log(arr);
    try {
        const resumeData = await resumeSchema.findById(id);
        arr.forEach(ele => {
            resumeData.education.push(ele)
        });
        resumeData.save()
        if(resumeData) return res.status(200).json(resumeData)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const resumeId = async (req , res) => {
    const {id} = req.params
    const data = await resumeSchema.findById(id)
    return res.status(200).json(data)
}

const resumeObjective = async (req , res) => {
    const {id} = req.params
    const {objective} = req.body
    try {
        const resumeData = await resumeSchema.findById(id);
        resumeData.objective = objective
        resumeData.save()
        if(resumeData) return res.status(200).json(resumeData)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const resumeProjects = async (req ,res) => {
    const {id} = req.params
    const arr = req.body
    console.log(arr);
    try {
        const resumeData = await resumeSchema.findById(id);
        arr.forEach(ele => {
            resumeData.projects.push(ele)
        });
        resumeData.save()
        if(resumeData) return res.status(200).json(resumeData)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const resumeSkills = async (req ,res) => {
    const {id} = req.params
    const arr = req.body
    console.log(arr);
    try {
        const resumeData = await resumeSchema.findById(id);
        arr.forEach(ele => {
            resumeData.skills.push(ele)
        });
        resumeData.save()
        if(resumeData) return res.status(200).json(resumeData)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const resumeSummary = async (req , res) => {
    const {id} = req.params
    const {summary} = req.body 
    try {
        const resumeData = await resumeSchema.findById(id);
        resumeData.summary = summary
        resumeData.save()
        if(resumeData) return res.status(200).json(resumeData)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const resumeWork = async (req ,res) => {
    const {id} = req.params
    const arr = req.body
    console.log(arr);
    try {
        const resumeData = await resumeSchema.findById(id);
        arr.forEach(ele => {
            resumeData.workingExpre.push(ele)
        });
        resumeData.save()
        if(resumeData) return res.status(200).json(resumeData)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const resumeImg = async (req , res) => {
    const {id} = req.params;
    const {img} = req.body;
    console.log(img);
    try {
        const resumeData = await resumeSchema.findById(id)
        resumeData.imageUrl = img
        resumeData.save() 
        console.log(resumeData);
        if(resumeData) return res.status(200).json(resumeData)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const resumeContInfo = async (req , res) => {
    const {id} = req.params
    const {name , email , number, userId , dob , gender , maritalStatus , address , city , state , pincode , nationality} = req.body;
    try {
        const resumeData = await resumeSchema.findById(id);
        resumeData.name = name
        resumeData.email = email
        resumeData.number = number
        resumeData.userId = userId
        resumeData.dob = dob
        resumeData.gender = gender
        resumeData.maritalStatus = maritalStatus
        resumeData.address = address
        resumeData.city = city
        resumeData.state = state
        resumeData.pincode = pincode
        resumeData.nationality = nationality

        resumeData.save()

        if(resumeData) return res.status(200).json(resumeData)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const resumeCreateNew = async (req , res) => {
    const {resumeName} = req.body
    try {
        const result = await resumeSchema.create({
            resumeName : resumeName
        })
        console.log(result);
        if(result) return res.status(200).json({
            id : result._id,
            itIs : 'resume'
        })
    } catch (error) {
        return res.status(404).json(error)
    }
}


/**delete resume */

const deleteResume = async (req , res) => {
    const {id} = req.params
    const data = await resumeSchema.deleteOne({_id : id})
    return res.status(200).json(data)
}


module.exports = {
    resumeAll,
    resumeEduc,
    resumeId,
    resumeObjective,
    resumeProjects,
    resumeSkills,
    resumeSummary,
    resumeWork,
    resumeImg,
    resumeContInfo,
    resumeCreateNew,
    deleteResume
}