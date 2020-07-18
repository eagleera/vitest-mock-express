"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockRes = void 0;
/**
 * Will return a typed and mocked version of key Express components.
 * mockClear() or clearMockRes() will clear all internal jest functions.
 */
exports.getMockRes = () => {
    const next = jest.fn();
    const response = {
        // express - Response
        status: jest.fn(),
        sendStatus: jest.fn(),
        links: jest.fn(),
        send: jest.fn(),
        json: jest.fn(),
        jsonp: jest.fn(),
        sendFile: jest.fn(),
        sendfile: jest.fn(),
        download: jest.fn(),
        contentType: jest.fn(),
        type: jest.fn(),
        format: jest.fn(),
        attachment: jest.fn(),
        set: jest.fn(),
        header: jest.fn(),
        get: jest.fn(),
        clearCookie: jest.fn(),
        cookie: jest.fn(),
        location: jest.fn(),
        redirect: jest.fn(),
        render: jest.fn(),
        vary: jest.fn(),
        append: jest.fn(),
        headersSent: false,
        locals: {},
        charset: '',
        app: {},
        req: {},
        // http - ServerResponse
        assignSocket: jest.fn(),
        detachSocket: jest.fn(),
        writeContinue: jest.fn(),
        writeHead: jest.fn(),
        writeProcessing: jest.fn(),
        statusCode: 0,
        statusMessage: '',
        // http - OutgoingMessage
        setTimeout: jest.fn(),
        setHeader: jest.fn(),
        getHeader: jest.fn(),
        getHeaders: jest.fn(),
        getHeaderNames: jest.fn(),
        hasHeader: jest.fn(),
        removeHeader: jest.fn(),
        addTrailers: jest.fn(),
        flushHeaders: jest.fn(),
        upgrading: false,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        useChunkedEncodingByDefault: false,
        sendDate: false,
        finished: false,
        connection: {},
        socket: {},
    };
    // express - Response - chainable functions
    response.status.mockReturnValue(response);
    response.sendStatus.mockReturnValue(response);
    response.links.mockReturnValue(response);
    response.send.mockReturnValue(response);
    response.json.mockReturnValue(response);
    response.jsonp.mockReturnValue(response);
    response.contentType.mockReturnValue(response);
    response.type.mockReturnValue(response);
    response.format.mockReturnValue(response);
    response.attachment.mockReturnValue(response);
    response.set.mockReturnValue(response);
    response.header.mockReturnValue(response);
    response.clearCookie.mockReturnValue(response);
    response.cookie.mockReturnValue(response);
    response.location.mockReturnValue(response);
    response.vary.mockReturnValue(response);
    response.append.mockReturnValue(response);
    // http - ServerResponse - chainable functions
    response.writeHead.mockReturnValue(response);
    // http - OutgoingMessage - chainable functions
    response.setTimeout.mockReturnValue(response);
    const clearAllMocks = () => {
        next.mockClear();
        // express - Response
        response.status.mockClear();
        response.sendStatus.mockClear();
        response.links.mockClear();
        response.send.mockClear();
        response.json.mockClear();
        response.jsonp.mockClear();
        response.sendFile.mockClear();
        response.sendfile.mockClear();
        response.download.mockClear();
        response.contentType.mockClear();
        response.type.mockClear();
        response.format.mockClear();
        response.attachment.mockClear();
        response.set.mockClear();
        response.header.mockClear();
        response.get.mockClear();
        response.clearCookie.mockClear();
        response.cookie.mockClear();
        response.location.mockClear();
        response.redirect.mockClear();
        response.render.mockClear();
        response.vary.mockClear();
        response.append.mockClear();
        // http - ServerResponse
        response.assignSocket.mockClear();
        response.detachSocket.mockClear();
        response.writeContinue.mockClear();
        response.writeHead.mockClear();
        response.writeProcessing.mockClear();
        // http - OutgoingMessage
        response.setTimeout.mockClear();
        response.setHeader.mockClear();
        response.getHeader.mockClear();
        response.getHeaders.mockClear();
        response.getHeaderNames.mockClear();
        response.hasHeader.mockClear();
        response.removeHeader.mockClear();
        response.addTrailers.mockClear();
        response.flushHeaders.mockClear();
    };
    return {
        res: response,
        next: next,
        mockClear: clearAllMocks,
        clearMockRes: clearAllMocks,
    };
};
exports.default = exports.getMockRes;
//# sourceMappingURL=response.js.map