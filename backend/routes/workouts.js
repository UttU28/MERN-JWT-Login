const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Get all Workouts'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'Get Single'})
})

router.post('/', (req, res) => {
    res.json({mssg: 'Post Workouts'})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete Workouts'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update Workouts'})
})

module.exports = router