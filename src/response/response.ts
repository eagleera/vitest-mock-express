// Libraries
import { Response, NextFunction } from 'express'

// Types
import type { MockResponse } from './index'

/**
 * Returns a mocked version of key **Express** components, including:
 * - a mocked **Express** `Response`, with mocked functions (chainable) and default values.
 * - a mocked `next()` convenience function.
 * - `mockClear()` to clear all internal **Jest** functions including `next()`
 * - `clearMockRes()` an alias for `mockClear()`
 */
export const getMockRes = <T extends Response>(
  values: MockResponse = {},
): {
  res: T
  next: NextFunction
  mockClear: () => void
  clearMockRes: () => void
} => {
  const next = jest.fn()
  const {
    // express.Response
    status = jest.fn().mockName('status mock default'),
    sendStatus = jest.fn().mockName('sendStatus mock default'),
    links = jest.fn().mockName('links mock default'),
    send = jest.fn().mockName('send mock default'),
    json = jest.fn().mockName('json mock default'),
    jsonp = jest.fn().mockName('jsonp mock default'),
    sendFile = jest.fn().mockName('sendFile mock default'),
    sendfile = jest.fn().mockName('sendfile mock default'),
    download = jest.fn().mockName('download mock default'),
    contentType = jest.fn().mockName('contentType mock default'),
    type = jest.fn().mockName('type mock default'),
    format = jest.fn().mockName('format mock default'),
    attachment = jest.fn().mockName('attachment mock default'),
    set = jest.fn().mockName('set mock default'),
    header = jest.fn().mockName('header mock default'),
    headersSent = false,
    get = jest.fn().mockName('get mock default'),
    clearCookie = jest.fn().mockName('clearCookie mock default'),
    cookie = jest.fn().mockName('cookie mock default'),
    location = jest.fn().mockName('location mock default'),
    redirect = jest.fn().mockName('redirect mock default'),
    render = jest.fn().mockName('render mock default'),
    locals = {},
    charset = '',
    vary = jest.fn().mockName('vary mock default'),
    app = {},
    append = jest.fn().mockName('append mock default'),
    req = {},

    // http.ServerResponse
    statusCode = 0,
    statusMessage = '',
    assignSocket = jest.fn().mockName('assignSocket mock default'),
    detachSocket = jest.fn().mockName('detachSocket mock default'),
    writeContinue = jest.fn().mockName('writeContinue mock default'),
    writeHead = jest.fn().mockName('writeHead mock default'),
    writeProcessing = jest.fn().mockName('writeProcessing mock default'),

    // http.OutgoingMessage
    // req - is handled/overridden as part of express.Response
    chunkedEncoding = false,
    shouldKeepAlive = false,
    useChunkedEncodingByDefault = false,
    sendDate = false,
    finished = false,
    // headersSent - is handled/overridden as part of express.Response
    connection = {},
    socket = {},
    setTimeout = jest.fn().mockName('setTimeout mock default'),
    setHeader = jest.fn().mockName('setHeader mock default'),
    getHeader = jest.fn().mockName('getHeader mock default'),
    getHeaders = jest.fn().mockName('getHeaders mock default'),
    getHeaderNames = jest.fn().mockName('getHeaderNames mock default'),
    hasHeader = jest.fn().mockName('hasHeader mock default'),
    removeHeader = jest.fn().mockName('removeHeader mock default'),
    addTrailers = jest.fn().mockName('addTrailers mock default'),
    flushHeaders = jest.fn().mockName('flushHeaders mock default'),

    // WHO DIS??
    end = jest.fn().mockName('end mock default'),

    // custom values
    ...extraProvidedValues
  } = values
  const response = {
    // express.Response
    status,
    sendStatus,
    links,
    send,
    json,
    jsonp,
    sendFile,
    sendfile,
    download,
    contentType,
    type,
    format,
    attachment,
    set,
    header,
    get,
    clearCookie,
    cookie,
    location,
    redirect,
    render,
    vary,
    append,
    headersSent,
    locals,
    charset,
    app,
    req,

    // http.ServerResponse
    statusCode,
    statusMessage,
    assignSocket,
    detachSocket,
    writeContinue,
    writeHead,
    writeProcessing,

    // http.OutgoingMessage
    chunkedEncoding,
    shouldKeepAlive,
    useChunkedEncodingByDefault,
    sendDate,
    finished,
    connection,
    socket,
    setTimeout,
    setHeader,
    getHeader,
    getHeaders,
    getHeaderNames,
    hasHeader,
    removeHeader,
    addTrailers,
    flushHeaders,

    // stream.Writable
    // TODO: Implement this
    end,

    // custom values
    ...extraProvidedValues,
  }

  // express.Response - chainable functions
  response.status.mockReturnValue(response)
  response.sendStatus.mockReturnValue(response)
  response.links.mockReturnValue(response)
  response.send.mockReturnValue(response)
  response.json.mockReturnValue(response)
  response.jsonp.mockReturnValue(response)
  response.contentType.mockReturnValue(response)
  response.type.mockReturnValue(response)
  response.format.mockReturnValue(response)
  response.attachment.mockReturnValue(response)
  response.set.mockReturnValue(response)
  response.header.mockReturnValue(response)
  response.clearCookie.mockReturnValue(response)
  response.cookie.mockReturnValue(response)
  response.location.mockReturnValue(response)
  response.vary.mockReturnValue(response)
  response.append.mockReturnValue(response)

  // http.ServerResponse - chainable functions
  response.writeHead.mockReturnValue(response)

  // http.OutgoingMessage - chainable functions
  response.setTimeout.mockReturnValue(response)

  const clearAllMocks = (): void => {
    next.mockClear()
    // express.Response
    response.status.mockClear()
    response.sendStatus.mockClear()
    response.links.mockClear()
    response.send.mockClear()
    response.json.mockClear()
    response.jsonp.mockClear()
    response.sendFile.mockClear()
    response.sendfile.mockClear()
    response.download.mockClear()
    response.contentType.mockClear()
    response.type.mockClear()
    response.format.mockClear()
    response.attachment.mockClear()
    response.set.mockClear()
    response.header.mockClear()
    response.get.mockClear()
    response.clearCookie.mockClear()
    response.cookie.mockClear()
    response.location.mockClear()
    response.redirect.mockClear()
    response.render.mockClear()
    response.vary.mockClear()
    response.append.mockClear()

    // http.ServerResponse
    response.end.mockClear()
    response.assignSocket.mockClear()
    response.detachSocket.mockClear()
    response.writeContinue.mockClear()
    response.writeHead.mockClear()
    response.writeProcessing.mockClear()

    // http.OutgoingMessage
    response.setTimeout.mockClear()
    response.setHeader.mockClear()
    response.getHeader.mockClear()
    response.getHeaders.mockClear()
    response.getHeaderNames.mockClear()
    response.hasHeader.mockClear()
    response.removeHeader.mockClear()
    response.addTrailers.mockClear()
    response.flushHeaders.mockClear()
  }

  return {
    res: response as unknown as T,
    next: next as NextFunction,
    mockClear: clearAllMocks,
    clearMockRes: clearAllMocks,
  }
}

export default getMockRes
