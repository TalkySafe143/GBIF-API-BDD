function successResponse(req, res, data, code) {
    res.status(code).json({
        error: null,
        data
    });
}

function errorResponse(req, res, err, code) {
    res.status(code).json({
        error: err,
        data: null
    })
}

module.exports = { successResponse, errorResponse }