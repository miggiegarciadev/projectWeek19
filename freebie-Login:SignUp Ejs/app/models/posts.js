// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const postSchema = mongoose.Schema({
    
    posts: [ ] 

    //Format:
    // posts:[
    //     id: {
    //         category: String,
    //         img: String,
    //         bidders: [1231343, 123134]]
    //     }
    // ]

});

// generating a hash

// create the model for users and expose it to our app
module.exports = mongoose.model('Posts', postSchema);
