const { string } = require('@tensorflow/tfjs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise

const storeSchema = new mongoose.Schema({
    temperature: Number,
    water_injection: Number,
    moisture: Number,
    pressure_levels: Number,
    gas_flow_rate: Number,
    gas_injection: Number,
    no_of_wells_on_site: Number,
    water_rate: Number
})

module.exports = mongoose.model('Store', storeSchema)