const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);


const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);





// const express = require('express');


// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('./config/keys');

// const app = express();

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: keys.googleClientID,
//             clientSecret: keys.googleClientSecret,
//             callbackURL: '/auth/google/callback'
//         },
//         (accessToken, refreshToken, profile, done) => {
//             console.log('accessToken', accessToken);
//             console.log('refreshToken', refreshToken);
//             console.log('profile', profile);
//         }
//     )
// );

// app.get(
//     '/auth/google',
//     passport.authenticate('google', {
//         scope: ['profile', 'email']
//     })
// );

// app.get('/auth/google/callback', passport.authenticate('google'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT);
