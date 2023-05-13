const boom = require('@hapi/boom');

function validationSchema(schema, check = 'body') {
    return (req, res, next) => {
        const { error } = schema.validate(req[check]);

        error ? next(boom.badRequest(error)) : next();
    }
}

module.exports = validationSchema;