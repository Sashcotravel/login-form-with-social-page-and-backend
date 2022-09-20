const cookieSession = require("cookie-session")
const express = require('express')
const cors = require("cors")
const passportSetup = require('./passport')
const passport = require('passport')
const authRoute = require('./routes/auth')
const app = express()

app.use(cookieSession({
    name: 'session',
    keys: ["lolka"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: 'http://localhost:3000',
    method: 'GET,POST,PUT,DELETE',
    credentials: true,
}))


app.use("/auth", authRoute)

app.listen(5000, () => {
    console.log('server work')
})

