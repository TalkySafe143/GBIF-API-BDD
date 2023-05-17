const passport = require('passport');
const boom = require('@hapi/boom');
const { Strategy, ExtractJwt } = require('passport-jwt');
const config = require('../../config/config');

const userController = require('../../controller/usersController');

passport.use(new Strategy({
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (payload, cb) => {
    try {
        const user = await userController.getUser({ email: payload.email });

        if (!user) return cb(boom.unauthorized('No tiene JWT'), null);

        delete user.password;

        return cb(null, { ...user, scopes: payload.scopes })
    } catch (e) {
        return cb(e, null);
    }
}))