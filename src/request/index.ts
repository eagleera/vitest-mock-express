// Types
import type { IncomingMessage } from 'http'
import type { EventEmitter } from 'events'
import type { Readable } from 'stream'
import type { Request } from 'express-serve-static-core'

interface EventEventEmitter {
  addListener?: EventEmitter['addListener']
  on?: EventEmitter['on']
  once?: EventEmitter['once']
  removeListener?: EventEmitter['removeListener']
  off?: EventEmitter['off']
  removeAllListeners?: EventEmitter['removeAllListeners']
  setMaxListeners?: EventEmitter['setMaxListeners']
  getMaxListeners?: EventEmitter['getMaxListeners']
  listeners?: EventEmitter['listeners']
  rawListeners?: EventEmitter['rawListeners']
  emit?: EventEmitter['emit']
  listenerCount?: EventEmitter['listenerCount']
  prependListener?: EventEmitter['prependListener']
  prependOnceListener?: EventEmitter['prependOnceListener']
  eventNames?: EventEmitter['eventNames']
}

interface StreamReadable extends EventEventEmitter {
  readable?: Readable['readable']
  readableHighWaterMark?: Readable['readableHighWaterMark']
  readableLength?: Readable['readableLength']
  readableObjectMode?: Readable['readableObjectMode']
  destroyed?: Readable['destroyed']
  _read?: Readable['_read']
  read?: Readable['read']
  setEncoding?: Readable['setEncoding']
  pause?: Readable['pause']
  resume?: Readable['resume']
  isPaused?: Readable['isPaused']
  unpipe?: Readable['unpipe']
  unshift?: Readable['unshift']
  wrap?: Readable['wrap']
  push?: Readable['push']
  _destroy?: Readable['_destroy']
  addListener?: Readable['addListener']
  emit?: Readable['emit']
  on?: Readable['on']
  once?: Readable['once']
  prependListener?: Readable['prependListener']
  prependOnceListener?: Readable['prependOnceListener']
  removeListener?: Readable['removeListener']
  destroy?: Readable['destroy']
}

interface HttpIncomingMessage extends StreamReadable {
  aborted?: IncomingMessage['aborted']
  httpVersion?: IncomingMessage['httpVersion']
  httpVersionMajor?: IncomingMessage['httpVersionMajor']
  httpVersionMinor?: IncomingMessage['httpVersionMinor']
  complete?: IncomingMessage['complete']
  connection?: IncomingMessage['connection']
  socket?: IncomingMessage['socket']
  headers?: IncomingMessage['headers']
  rawHeaders?: IncomingMessage['rawHeaders']
  trailers?: IncomingMessage['trailers']
  rawTrailers?: IncomingMessage['rawTrailers']
  setTimeout?: IncomingMessage['setTimeout']
  statusCode?: IncomingMessage['statusCode']
  statusMessage?: IncomingMessage['statusMessage']
  destroy?: IncomingMessage['destroy']
}

export interface MockRequest extends HttpIncomingMessage {
  params?: Request['params']
  query?: Request['query']
  body?: Request['body']
  cookies?: Request['cookies']
  method?: Request['method']
  protocol?: Request['protocol']
  secure?: Request['secure']
  ip?: Request['ip']
  ips?: Request['ips']
  subdomains?: Request['subdomains']
  path?: Request['path']
  hostname?: Request['hostname']
  host?: Request['host']
  fresh?: Request['fresh']
  stale?: Request['stale']
  xhr?: Request['xhr']
  route?: Request['route']
  signedCookies?: Request['signedCookies']
  originalUrl?: Request['originalUrl']
  url?: Request['url']
  baseUrl?: Request['baseUrl']
  accepted?: Request['accepted']
  get?: Request['get']
  header?: Request['header']
  accepts?: Request['accepts']
  acceptsCharsets?: Request['acceptsCharsets']
  acceptsEncodings?: Request['acceptsEncodings']
  acceptsLanguages?: Request['acceptsLanguages']
  range?: Request['range']
  param?: Request['param']
  is?: Request['is']
  app?: Request['app']
  res?: Request['res']
  next?: Request['next']

  // allow custom properties to be provided
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
