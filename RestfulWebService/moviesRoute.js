var express = require('express');
var router = express.Router();
var movies = [{
        id: 101,
        name: "Fight Club",
        year: 1999,
        rating: 8.1
    },
    {
        id: 102,
        name: "Inception",
        year: 2010,
        rating: 8.7
    },
    {
        id: 103,
        name: "The Dark Knight",
        year: 2008,
        rating: 9
    },
    {
        id: 104,
        name: "12 Angry Men",
        year: 1957,
        rating: 8.9
    },


    {
        id: 105,
        name: "Ring",
        year: 1999,
        rating: 8.1
    },
    {
        id: 106,
        name: "The Mummy",
        year: 2010,
        rating: 8.7
    },
    {
        id: 107,
        name: "Mummy Returns",
        year: 2008,
        rating: 9
    },
    {
        id: 108,
        name: "Evil Dead II",
        year: 1999,
        rating: 8.1
    },
    {
        id: 109,
        name: "Avengers",
        year: 2010,
        rating: 8.7
    },
    {
        id: 110,
        name: "Avengers Age Of Ultron",
        year: 2008,
        rating: 9
    },

    {
        id: 111,
        name: "Alien",
        year: 1999,
        rating: 8.1
    },
    {
        id: 112,
        name: "Alien Covinent",
        year: 2010,
        rating: 8.7
    },
    {
        id: 113,
        name: "Prediator",
        year: 2008,
        rating: 9
    },

    {
        id: 114,
        name: "Prediator 2",
        year: 1999,
        rating: 8.1
    },
    {
        id: 115,
        name: "Alien Vs Prediator",
        year: 2010,
        rating: 8.7
    },
    {
        id: 116,
        name: "Alien Vs Prediator Requirem",
        year: 2008,
        rating: 9
    },

    {
        id: 117,
        name: "Backwoods",
        year: 1999,
        rating: 8.1
    },
    {
        id: 118,
        name: "Knights And Days",
        year: 2010,
        rating: 8.7
    },
    {
        id: 119,
        name: "Mission Impossible",
        year: 2008,
        rating: 9
    },
    {
        id: 120,
        name: "Mission Impossible Rough Nation",
        year: 2008,
        rating: 9
    }
];

router.get("/", function(req, res) {
    res.json(movies);
});

//Routes will go here
module.exports = router;