const express = require('express');
const nominee = require('../models/nominee');
const router = express.Router();


//route for all the nominee's

router.get('/', (req, res) => {
    res.render('nominees/index')
});

// new nominee route

router.get('/new', (req, res) => {
    res.render('nominees/new',{ nominee: new nominee()})
});

//create nominee route
router.post('/', (req, res) => {
   
    res.send("Name:"+req.body.name +"The Genre: " +req.body.genre +"Number of Votes: "+ req.body.votes)
})


module.exports = router;