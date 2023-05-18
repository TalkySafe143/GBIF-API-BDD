const express = require('express');
const router = express.Router();
const responses = require('../utils/responses/responses');
const passport = require('passport');
const validateScopes = require('../utils/middlewares/validationScopes');
const validateSchemas = require('../utils/middlewares/validationSchemas');
const { createUserProviderSchema } = require('../utils/schemas/user')
const userController = require('../controller/usersController');
const boom = require('@hapi/boom');

require('../utils/auth/jwt');

router.get('/', passport.authenticate('jwt', { session: false }), validateScopes(['read:users']), async (req, res, next) => {
    try {
        const data = await userController.getAllUsers();
        responses.successResponse(req, res, data, 200);
    } catch (e) {
        next(e);
    }
})

router.get('/me', passport.authenticate('jwt', { session: false }), validateScopes(['read:users']), async (req, res, next) => {
    try {
        const data = await userController.getUser({ email: req.user.email });
        responses.successResponse(req, res, data, 200);
    } catch (e) {
        next(e);
    }
})

router.get('/:email', passport.authenticate('jwt', { session: false }), validateScopes(['read:users']) , async (req, res, next) => {
    try {
        const data = await userController.getUser(req.params);
        responses.successResponse(req, res, data, 200);
    } catch (e) {
        next(e);
    }
})

router.post('/', passport.authenticate('jwt', { session: false }), validateScopes(['create:users']), validateSchemas(createUserProviderSchema), async (req, res, next) => {
    try {
        const user = req.body;
        const data = await userController.getOrCreateUser({ user });
        responses.successResponse(req, res, data, 200);
    } catch (e) {
        next(e);
    }
})

router.put('/:userID', passport.authenticate('jwt', { session: false }), validateScopes(['update:users']), async (req, res, next) => {
    try {
        const user = req.body;
        const userID = req.params.userID;
        const userToDelete = await userController.getOneUserWithID({ id: userID });

        if (!userToDelete) throw boom.badRequest('No existe un usuario con ese ID');

        console.log((req.user.scopes))

        if (userToDelete.email !== req.user.email && !(req.user.scopes.find(val => val==='create:cameraDP'))) throw boom.badRequest('No puedes modificar la cuenta de otro usuario');

        const data = await userController.updateUser({ userID,  data: user });
        responses.successResponse(req, res, data, 200);
    } catch (e) {
        next(e);
    }
})

router.delete('/:userID', passport.authenticate('jwt', { session: false }), validateScopes(['delete:users']), async (req, res, next) => {
    try {

        const userID = req.params.userID;

        const userToDelete = await userController.getOneUserWithID({id: userID});

        if (!userToDelete) throw boom.badRequest('No existe un usuario con ese ID');

        if (userToDelete.email !== req.user.email && !(req.user.scopes.find(val => val === 'create:cameraDP'))) throw boom.badRequest('No puedes eliminar la cuenta de otro usuario');

        const data = await userController.deleteUser({ userID });
        responses.successResponse(req, res, data, 200);
    } catch (e) {
        next(e);
    }
})

module.exports = router;