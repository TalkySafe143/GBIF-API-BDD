const boom = require('@hapi/boom');

function validationSchema(schema, check = 'body', inRequest=false) {
    return (req, res, next) => {
        if (inRequest) schema = req.schemaToValidate;
        const { error } = schema.validate(req[check]);

        error ? next(boom.badRequest(error)) : next();
    }
}

module.exports = validationSchema;