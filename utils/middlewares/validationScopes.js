const boom = require('@hapi/boom');
const debug = require('debug')('api::validationScopes');

function validationScopes(scopes) {
    return (req, res, next) => {
        if (!req.user || (req.user && !req.user.scopes)) return next(boom.unauthorized('Faltan scopes'));

        const hasAccess = scopes.map(scope => {
            return req.user.scopes.includes(scope);
        }).find( access => Boolean(access)); // Boolean() return false if any value is false

        hasAccess ? next() : next(boom.unauthorized('Scope equivocado'));
    }
}

module.exports = validationScopes;