const mongoose = require('mongoose');
// const Store = mongoose.model('Store');
const xlsx = require('xlsx');

const workbook = xlsx.readFile(__dirname + '/data/Oil-well.xlsx');

const ExcelDateToJSDate = (serial) => {
    var utc_days  = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;                                        
    var date_info = new Date(utc_value * 1000);
 
    var fractional_day = serial - Math.floor(serial) + 0.0000001;
 
    var total_seconds = Math.floor(86400 * fractional_day);
 
    var seconds = total_seconds % 60;
 
    total_seconds -= seconds;
 
    var hours = Math.floor(total_seconds / (60 * 60));
    var minutes = Math.floor(total_seconds / 60) % 60;
 
    return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
 }

let worksheet = workbook.Sheets[workbook.SheetNames[0]];


const get_oil_well_data = () => {
    const well_data = [] 
    for (let index = 4; index < 2943; index++) {
        let oil_well_data = {}
        oil_well_data.date = ExcelDateToJSDate(worksheet[`A${index}`].v);
        oil_well_data.oil_volume = worksheet[`B${index}`].v;
        oil_well_data.vol_of_liquid = worksheet[`C${index}`].v;
        oil_well_data.gas_volume = worksheet[`D${index}`].v;
        oil_well_data.water_volume = worksheet[`E${index}`].v;
        oil_well_data.water_cut = worksheet[`F${index}`].v;
        oil_well_data.working_hours = worksheet[`G${index}`].v;
        oil_well_data.dynamic_level = worksheet[`H${index}`].v;
        oil_well_data.reservoir_pressure = worksheet[`I${index}`].v;
        well_data.push(oil_well_data)
    }
    return well_data
}


exports.autofill_data = get_oil_well_data();
