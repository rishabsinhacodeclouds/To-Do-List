const path = require('path');
const express = require('express');
const app = express();
const router = require('express').Router();
const todoController = require('../controllers/ToDoController');

router.get('/', todoController.loadpage);
// router.get('/getWeather', todoController.loadweather);
router.post('/save', todoController.saveToDo);
router.get('/getallData', todoController.getToDo);
router.put('/update/:id', todoController.updateToDo);
router.delete('/delete/:id', todoController.deleteToDo);

module.exports = router;