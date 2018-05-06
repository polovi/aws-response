"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = (status, body = '', headers) => ({
    statusCode: status,
    body: typeof body === 'object' ? JSON.stringify(body) : body,
    headers,
});
