const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String, 
        required:true,
    },
    description: String,
    image: {
        filename: String,
        url: {
            type: String,
            default: "https://images.pexels.com/photos/669502/pexels-photo-669502.jpeg?cs=srgb&dl=pexels-goumbik-669502.jpg&fm=jpg"
        }
    },
    price:Number,
    location:String,
    country:String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;