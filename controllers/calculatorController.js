const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.calculator = async (req, res) => {
    try {
        const temperature = req.body.temperature;
        const water_injection = req.body.water_injection;
        const moisture = req.body.moisture;
        const pressure_levels = req.body.pressure_levels;
        const gas_flow_rate = req.body.gas_flow_rate;
        const gas_injection = req.body.gas_injection;
        const no_of_wells_on_site = req.body.no_of_wells_on_site;
        const water_rate = req.body.water_rate;

        const store = new Store(req.body);
        await store.save()

    } catch(err) {
        
    }
}