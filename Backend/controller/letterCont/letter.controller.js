const letterSchema = require('../../model/letter.schema')

const letterCreate = async (req , res) => {
    const {letterName , userId} = req.body
    try {
        const result = await letterSchema.create({
            letterName : letterName,
            userId : userId
        })
        if(result) {
            console.log(result);
            return res.status(200).json({
                id : result._id,
                itIs : 'letter'
            })
        }
    } catch (error) {
        return res.status(404).json(error)
    }
}

const addPersonalInfo = async (req , res) => {
    console.log(req.body);
    const {id} = req.params
    const {firstName , middelName , lastName , address , profession , phoneNum , email} = req.body
    try {
        const result = await letterSchema.findById(id)

        if(!result.letterName) {
            return res.status(400).json({msg : 'something is wrong !'})
        }

        result.firstName = firstName,
        result.middelName = middelName,
        result.lastName = lastName,
        result.address = address,
        result.phoneNum = phoneNum,
        result.profession = profession,
        result.email = email,

        result.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const EmployerInfo = async (req , res) => {
    const {id} = req.params
    const {recipient , companyName ,streetAddress , city , state} = req.body 
    try {
        const result = await letterSchema.findById(id)
        if(!result.letterName) {
            return res.status(400).json({msg : 'something is wrong !'})
        }
        result.recipient = recipient,
        result.companyName = companyName,
        result.streetAddress = streetAddress,
        result.city = city,
        result.state = state,

        result.save()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const LetterDes = async (req , res) => {
    const {id} = req.params
    const {letterText} = req.body
    try {
        const result = await letterSchema.findById(id)
        if(!result.letterName) {
            return res.status(400).json({msg : 'something is wrong !'})
        }
        result.letterText = letterText
        result.save()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const allLetters = async (req , res) => {
    const data = await letterSchema.find({})
    return res.status(200).json(data)
}

const deleteLetters = async (req , res) => {
    const {id} = req.params
    const data = await letterSchema.deleteOne({_id : id})
    return res.status(200).json(data)
}

module.exports = {
    letterCreate,
    addPersonalInfo,
    EmployerInfo,
    LetterDes,
    allLetters,
    deleteLetters
}