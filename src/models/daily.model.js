const {Schema, model} = require('mongoose');

const DailySchema= new Schema({
    distance: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    }
},{timestamps: true})

module.exports = model("Datas", DailySchema);
