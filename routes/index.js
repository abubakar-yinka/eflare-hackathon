const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController')

const random_well_parameters = calculatorController.autofill_data[Math.floor(Math.random() * calculatorController.autofill_data.length)];

console.log(random_well_parameters);
router.get('/autofill', (req, res) => {
    res.json(random_well_parameters)
})

module.exports = router;