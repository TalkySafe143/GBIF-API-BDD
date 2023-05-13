const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require("../config/config");
const boom = require('@hapi/boom');

const responses = require('../utils/responses/responses');

const apiKeyController = require('../controller/apiKeyController');
const userController = require('../controller/usersController');

const validationSchema = require('../utils/middlewares/validationSchemas');
const { createUserSchema } = require('../utils/schemas/user');

require('../utils/auth/basic');

const router = express.Router();

router.post('/sign-in', async (req, res, next) => {
    const { apiKeyToken } = req.body;

    if (!apiKeyToken) return next(boom.unauthorized('API token requerida'));

    passport.authenticate('basic', {} ,(err, user) => {
        try {

            if (err || !user) return next(boom.unauthorized(err));

            req.login(user, { session: false }, async (err) => {
                if (err) return next(err);

                const apiScopes = await apiKeyController.getAPIKey({ token: apiKeyToken });

                if (!apiScopes) return next(boom.unauthorized('Su API token no es valida'));

                const { _id: id, name, email } = user;

                const payload = {
                    sub: id,
                    name,
                    email,
                    scopes: apiScopes.scopes
                }

                const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15m' });

                return responses.successResponse(req, res, {
                    token,
                    user: { id, name, email }
                }, 200)
            })

        } catch (e) {
            next(e);
        }
    })(req, res, next)
})

router.post('/sign-up', validationSchema(createUserSchema) ,async (req, res, next) => {
    const user = req.body;

    try {
        const userCreated = await userController.getUser({ email: user.email });

        console.log(userCreated);

        if (userCreated) return next(boom.badRequest('Este usuario ya esta creado'));

        const createdUserID = await userController.createUser({ user });

        responses.successResponse(req, res, {
            createdUserID,
            message: 'User created.'
        }, 201)

    } catch (e) {
        next(e);
    }
})

module.exports = router;