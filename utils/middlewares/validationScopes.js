const boom = require('@hapi/boom');

function validationScopes(scopes) {
    return (req, res, next) => {
        if (!req.user || (req.user && req.user.scopes)) next(boom.unauthorized('Faltan scopes'));

        const hasAccess = scopes.map(scope => {
            req.user.scopes.includes(scope);
        }).find( access => Boolean(access)); // Boolean() return false if any value is false

        hasAccess ? next() : next(boom.unauthorized('Scope equivocado'));
    }
}

module.exports = validationScopes;