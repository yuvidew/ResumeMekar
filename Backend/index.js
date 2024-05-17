require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./db/connect')
const resumeRouter = require('./router/resume.router')
const letterRouter = require('./router/letter.router')
const path = require('path')
const app = express()
const port = 2000 || process.env.PORT

/*they are same middleware*/
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}))

const dirname = path.resolve();

/*this is the testing api*/

app.get('/' , (req , res) => {
    return res.status(200).json({
        msg :'hello from server'
    })
})

/* this is the get & post Api routers */
app.use('/api' , resumeRouter)
app.use('/api' , letterRouter)



const start = async () => {
    try {
        await connectDb(process.env.MDB_URL)
        app.listen(port , () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()