const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')

const userController = require('../../controller/usersController');

passport.use(new BasicStrategy(async (email, password, cb) => {
    try {
        const user = await userController.getUser({ email });

        if (!user) return cb(boom.unauthorized('No existe el usuario'), null);

        if (!(await bcrypt.compare(password, user.password))) return cb(boom.unauthorized('Alguna informacion esta incorrecta'), null);

        delete user.password;

        return cb(null, user);
    } catch (e) {
        return cb(e, null);
    }
}))