"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var custom_error_1 = require("../errors/custom-error");
var errorHandler = function (error, request, response, next) {
    if (error instanceof custom_error_1.CustomError) {
        return response.status(error.statusCode).send({ errors: error.serializeErrors() });
    }
    response.status(400).send([{ message: 'Something went wrong' }]);
};
exports.errorHandler = errorHandler;
