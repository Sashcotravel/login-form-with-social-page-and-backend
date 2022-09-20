const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = '##################################################'
const GOOGLE_CLIENT_SECRET = '#########################'

const GITHUB_CLIENT_ID = '###################'
const GITHUB_CLIENT_SECRET = '#########################'

const FACEBOOK_APP_ID = '#################'
const FACEBOOK_APP_SECRET = '#########################'


passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})
