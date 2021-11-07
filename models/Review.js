const mongoose = require('mongoose');


const ReviewSchema = new mongoose.Schema({
    songName : {
        type : String,
        required : true
    },
    artistName : {
        type : String,
        required : true
    },
    reviewGenre : {
        type : String,
        required : true,
        enum : ['Alternative','Blues','Classical','Country','Dance','Electronic','Hip-Hop','Rap','Jazz','Latin','Pop','R&B','Soul','Rock','Metal']
    },
    reviewText : {
        type : String,
        required : true
    },
    reviewScore : {
        type : Number,
        required : true,
        enum : [1,2,3,4,5]
    }
});

module.exports = mongoose.model('Review', ReviewSchema);