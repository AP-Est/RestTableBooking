/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/reservation.routes')(app);
require('./routes/review.routes')(app);

const db = require('./models/index');
const dbConfig = require('./config/db.config');

const corsOptions = {
    origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

app.use(
    cookieSession({
        name: 'rsclone-session',
        secret: 'COOKIE_SECRET',
        httpOnly: true,
    })
);

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
