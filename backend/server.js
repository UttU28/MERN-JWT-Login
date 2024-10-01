require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts')
 
const app = express()

// Middleware
app.use(express.json())   // Looks for the body in the request and attaches it to the request object.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)

app.listen (process.env.PORT, () => {
    console.log(`Listening on Port: ${process.env.PORT}`)
})