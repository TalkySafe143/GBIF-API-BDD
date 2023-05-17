const express = require('express');
const router = express.Router();
const cameraController = require('../controller/cameraDBController');
const responses = require('../utils/responses/responses');
const entitiesSchemas = require('../utils/schemas/entities');
const boom = require("@hapi/boom");
const validationSchemas = require('../utils/middlewares/validationSchemas');
const passport = require('passport');
const validationScopes = require('../utils/middlewares/validationScopes')

require('../utils/auth/jwt');

router.get('/:schema', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    try {
        const data = await cameraController.getRecords(req.params, req.body);
        return responses.successResponse(req, res, data, 200);
    } catch (e) {
        next(e);
    }
})

router.post('/:schema', passport.authenticate('jwt', { session: false }), validationScopes(['create:cameraDP']) , (req, res, next) => {

    let findSchema = Object.keys(entitiesSchemas).find(val => val === req.params.schema);
    if (!findSchema) return next(boom.badRequest('Esa tabla no existe!'));

    req.schemaToValidate = entitiesSchemas[findSchema];
    next();
}, validationSchemas({}, 'body', true),async (req, res, next) => {
    try {
        const data = await cameraController.insertTuple(req.params, req.body);
        return responses.successResponse(req, res, data, 201);
    } catch (e) {
        next(e)
    }
})

router.put('/:schema', passport.authenticate('jwt', { session: false }),validationScopes(['update:cameraDP']) ,async (req, res, next) => {
    try {
        const data = await cameraController.updateTuple(req.params, req.body);
        return responses.successResponse(req, res, data, 200);
    } catch (e) {
        next(e)
    }
})

router.delete('/:schema', passport.authenticate('jwt', { session: false }),validationScopes(['delete:cameraDP']) ,async (req, res, next) => {
    try {
        const data = await cameraController.deleteTuple(req.params, req.body);
        return responses.successResponse(req, res, data, 202);
    } catch (e) {
        next(e)
    }
})

module.exports = router;