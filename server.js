const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

app.use(express.json());

const db = process.env.DB_CONNECTION_STRING || config.get('dbString');

//Change password
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('Confirmed connection to database!'))
    .catch(err => console.error(err));

app.use('/api/skills', require('./routes/api/skills'));
app.use('/api/experiences', require('./routes/api/experiences'));
app.use('/api/images', require('./routes/api/images'));

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));