var dayRouter = require('express').Router();
var attractionRouter = require('express').Router();
var models = require('../models');
var async = require('async');
var bluebird = require('bluebird');


// 1. When a place is added to your Trip, 
// you need to make an AJAX request to the server to save that Day model.
// 2. When your Trip plan page is reloaded, you need to load all the 
// previously saved trip items from the database to your Trip Plan.

// GET /days
dayRouter.get('/', function (req, res, next) {
    // serves up all days as json
    console.log("HI");
});
// POST /days
dayRouter.post('/', function (req, res, next) {
    // creates a new day and serves it as json
    models.Day.create(req.body, function(err, day){
        if(err){return next(err)}
            res.json({
                message: "Created Successfully",
                day: day
            });
    });
});
// GET /days/:id
dayRouter.get('/:id', function (req, res, next) {
    // serves a particular day as json
});
// DELETE /days/:id
dayRouter.delete('/:id', function (req, res, next) {
    // deletes a particular day
});

dayRouter.use('/:id', attractionRouter);
// POST /days/:id/hotel
attractionRouter.post('/hotel', function (req, res, next) {
    // creates a reference to the hotel
});
// DELETE /days/:id/hotel
attractionRouter.delete('/hotel', function (req, res, next) {
    // deletes the reference of the hotel
});
// POST /days/:id/restaurants
attractionRouter.post('/restaurants', function (req, res, next) {
    // creates a reference to a restaurant
});
// DELETE /days/:dayId/restaurants/:restId
attractionRouter.delete('/restaurant/:id', function (req, res, next) {
    // deletes a reference to a restaurant
});
// POST /days/:id/thingsToDo
attractionRouter.post('/thingsToDo', function (req, res, next) {
    // creates a reference to a thing to do
});
// DELETE /days/:dayId/thingsToDo/:thingId
attractionRouter.delete('/thingsToDo/:id', function (req, res, next) {
    // deletes a reference to a thing to do
});




module.exports = dayRouter;