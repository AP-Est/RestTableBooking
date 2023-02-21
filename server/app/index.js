/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;
const cookieOptions = {
    httpOnly: true,
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('cookie_secret', cookieOptions));

require('./routes/auth.routes')(app);
require('./routes/reservation.routes')(app);
require('./routes/review.routes')(app);
require('./routes/user.routes')(app);

const db = require('./models/index');
const dbConfig = require('./config/db.config');

const corsOptions = {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    credentials: true,
};

app.use(cors(corsOptions));

db.mongoose
    .connect(`mongodb+srv://${dbConfig.HOST}@${dbConfig.CLUSTER}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Successfully connect to MongoDB.');
        start();
    })
    .catch((err) => {
        console.error('Connection error', err);
        process.exit();
    });

async function start() {
    try {
        app.listen(PORT);
    } catch (e) {
        console.log(e);
    }
}
