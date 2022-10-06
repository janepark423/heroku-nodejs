const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id }) //몽고db에서 쿼리 불러오기
                .then((existingUser) => {
                    if (existingUser) {
                        //existingUser가 존재한다면,
                    } else {
                        //해당 id가 존재하지 않으니 새로 만들어라.
                    }
                }
                })

            new User({ googleId: profile.id }).save();
        }
    )
);
