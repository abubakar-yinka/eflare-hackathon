const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const path = require('path');

// Load config
dotenv.config({ path: './config.env'})

//Connect database
connectDB()

//Models
require('./model/Store')

const app = express();
app.use(express.json());
// app.use(express.urlencoded()); //Parse URL-encoded bodies

//Routes
if (process.env.NODE_ENV === 'production') {
    //Express will serve up production assets
    app.use(express.static('client/dist'));

    //Express will serve up the index.html file
    //if it doesn't recognize the route i.e Handles any requests that don't match the ones above
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}

app.use(express.static('client/dist'));
// app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))