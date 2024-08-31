//#region "1XX"

import {
  HTTP_100_NAME,
  HTTP_101_NAME,
  HTTP_102_NAME,
  HTTP_103_NAME,
} from '../1XX-constants.ts';
import {
  HTTP_200_NAME,
  HTTP_201_NAME,
  HTTP_202_NAME,
  HTTP_203_NAME,
  HTTP_204_NAME,
  HTTP_205_NAME,
  HTTP_206_NAME,
  HTTP_207_NAME,
  HTTP_208_NAME,
  HTTP_226_NAME,
} from '../2XX-constants.ts';
import {
  HTTP_300_NAME,
  HTTP_301_NAME,
  HTTP_302_NAME,
  HTTP_303_NAME,
  HTTP_304_NAME,
  HTTP_305_NAME,
  HTTP_306_NAME,
  HTTP_307_NAME,
  HTTP_308_NAME,
} from '../3XX-constants.ts';
import {
  HTTP_400_NAME,
  HTTP_401_NAME,
  HTTP_402_NAME,
  HTTP_403_NAME,
  HTTP_404_NAME,
  HTTP_405_NAME,
  HTTP_406_NAME,
  HTTP_407_NAME,
  HTTP_408_NAME,
  HTTP_409_NAME,
  HTTP_410_NAME,
  HTTP_411_NAME,
  HTTP_412_NAME,
  HTTP_413_NAME,
  HTTP_414_NAME,
  HTTP_415_NAME,
  HTTP_416_NAME,
  HTTP_417_NAME,
  HTTP_418_NAME,
  HTTP_421_NAME,
  HTTP_422_NAME,
  HTTP_423_NAME,
  HTTP_424_NAME,
  HTTP_425_NAME,
  HTTP_426_NAME,
  HTTP_428_NAME,
  HTTP_429_NAME,
  HTTP_431_NAME,
  HTTP_444_NAME,
  HTTP_449_NAME,
  HTTP_450_NAME,
  HTTP_451_NAME,
  HTTP_499_NAME,
} from '../4XX-constants.ts';
import {
  HTTP_500_NAME,
  HTTP_501_NAME,
  HTTP_502_NAME,
  HTTP_503_NAME,
  HTTP_504_NAME,
  HTTP_505_NAME,
  HTTP_506_NAME,
  HTTP_507_NAME,
  HTTP_508_NAME,
  HTTP_510_NAME,
  HTTP_511_NAME,
  HTTP_599_NAME,
} from '../5XX-constants.ts';

/**
 * HTTP 100 Continue
 */
export const CONTINUE = HTTP_100_NAME;
/**
 * HTTP 101 Switching Protocols
 */
export const SWITCHING_PROTOCOLS = HTTP_101_NAME;
/**
 * HTTP 102 Processing
 */
export const PROCESSING = HTTP_102_NAME;
/**
 * HTTP 103 Early Hints
 */
export const EARLY_HINTS = HTTP_103_NAME;
//#endregion "1XX"

//#region "2XX"
/**
 * HTTP 200 OK
 */
export const OK = HTTP_200_NAME;
/**
 * HTTP 201 Created
 */
export const CREATED = HTTP_201_NAME;
/**
 * HTTP 202 Accepted
 */
export const ACCEPTED = HTTP_202_NAME;
/**
 * HTTP 203 Non-Authoritative Information
 */
export const NON_AUTHORITATIVE_INFORMATION = HTTP_203_NAME;
/**
 * HTTP 204 No Content
 */
export const NO_CONTENT = HTTP_204_NAME;
/**
 * HTTP 205 Reset Content
 */
export const RESET_CONTENT = HTTP_205_NAME;
/**
 * HTTP 206 Partial Content
 */
export const PARTIAL_CONTENT = HTTP_206_NAME;
/**
 * HTTP 207 Multi-Status
 */
export const MULTI_STATUS = HTTP_207_NAME;
/**
 * HTTP 208 Already Reported
 */
export const ALREADY_REPORTED = HTTP_208_NAME;
/**
 * HTTP 226 IM Used
 */
export const IM_USED = HTTP_226_NAME;
//#endregion "2XX"

//#region "3XX"
/**
 * HTTP 300 Multiple Choices
 */
export const MULTIPLE_CHOICES = HTTP_300_NAME;
/**
 * HTTP 301 Moved Permanently
 */
export const MOVED_PERMANENTLY = HTTP_301_NAME;
/**
 * HTTP 302 Found
 */
export const FOUND = HTTP_302_NAME;
/**
 * HTTP 303 See Other
 */
export const SEE_OTHER = HTTP_303_NAME;
/**
 * HTTP 304 Not Modified
 */
export const NOT_MODIFIED = HTTP_304_NAME;
/**
 * HTTP 305 Use Proxy
 */
export const USE_PROXY = HTTP_305_NAME;
/**
 * HTTP 306 Switch Proxy
 */
export const SWITCH_PROXY = HTTP_306_NAME;
/**
 * HTTP 307 Temporary Redirect
 */
export const TEMPORARY_REDIRECT = HTTP_307_NAME;
/**
 * HTTP 308 Permanent Redirect
 */
export const PERMANENT_REDIRECT = HTTP_308_NAME;
//#endregion "3XX"

//#region "4XX"
/**
 * HTTP 400 Bad Request
 */
export const BAD_REQUEST = HTTP_400_NAME;
/**
 * HTTP 401 Unauthorized
 */
export const UNAUTHORIZED = HTTP_401_NAME;
/**
 * HTTP 402 Payment Required
 */
export const PAYMENT_REQUIRED = HTTP_402_NAME;
/**
 * HTTP 403 Forbidden
 */
export const FORBIDDEN = HTTP_403_NAME;
/**
 * HTTP 404 Not Found
 */
export const NOT_FOUND = HTTP_404_NAME;
/**
 * HTTP 405 Method Not Allowed
 */
export const METHOD_NOT_ALLOWED = HTTP_405_NAME;
/**
 * HTTP 406 Not Acceptable
 */
export const NOT_ACCEPTABLE = HTTP_406_NAME;
/**
 * HTTP 407 Proxy Authentication Required
 */
export const PROXY_AUTHENTICATION_REQUIRED = HTTP_407_NAME;
/**
 * HTTP 408 Request Timeout
 */
export const REQUEST_TIMEOUT = HTTP_408_NAME;
/**
 * HTTP 409 Conflict
 */
export const CONFLICT = HTTP_409_NAME;
/**
 * HTTP 410 Gone
 */
export const GONE = HTTP_410_NAME;
/**
 * HTTP 411 Length Required
 */
export const LENGTH_REQUIRED = HTTP_411_NAME;
/**
 * HTTP 412 Precondition Failed
 */
export const PRECONDITION_FAILED = HTTP_412_NAME;
/**
 * HTTP 413 Payload Too Large
 */
export const PAYLOAD_TOO_LARGE = HTTP_413_NAME;
/**
 * HTTP 414 URI Too Long
 */
export const URI_TOO_LONG = HTTP_414_NAME;
/**
 * HTTP 415 Unsupported Media Type
 */
export const UNSUPPORTED_MEDIA_TYPE = HTTP_415_NAME;
/**
 * HTTP 416 Range Not Satisfiable
 */
export const RANGE_NOT_SATISFIABLE = HTTP_416_NAME;
/**
 * HTTP 417 Expectation Failed
 */
export const EXPECTATION_FAILED = HTTP_417_NAME;
/**
 * HTTP 418 I'm a Teapot
 */
export const IM_A_TEAPOT = HTTP_418_NAME;
/**
 * HTTP 421 Misdirected Request
 */
export const MISDIRECTED_REQUEST = HTTP_421_NAME;
/**
 * HTTP 422 Unprocessable Entity
 */
export const UNPROCESSABLE_ENTITY = HTTP_422_NAME;
/**
 * HTTP 423 Locked
 */
export const LOCKED = HTTP_423_NAME;
/**
 * HTTP 424 Failed Dependency
 */
export const FAILED_DEPENDENCY = HTTP_424_NAME;
/**
 * HTTP 425 Too Early
 */
export const TOO_EARLY = HTTP_425_NAME;
/**
 * HTTP 426 Upgrade Required
 */
export const UPGRADE_REQUIRED = HTTP_426_NAME;
/**
 * HTTP 428 Precondition Required
 */
export const PRECONDITION_REQUIRED = HTTP_428_NAME;
/**
 * HTTP 429 Too Many Requests
 */
export const TOO_MANY_REQUESTS = HTTP_429_NAME;
/**
 * HTTP 431 Request Header Fields Too Large
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE = HTTP_431_NAME;
/**
 * HTTP 444 Connection Closed Without Response
 */
export const CONNECTION_CLOSED_WITHOUT_RESPONSE = HTTP_444_NAME;
/**
 * HTTP 449 Retry With
 */
export const RETRY_WITH = HTTP_449_NAME;
/**
 * HTTP 450 Blocked by Windows Parental Controls
 */
export const BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = HTTP_450_NAME;
/**
 * HTTP 451 Unavailable For Legal Reasons
 */
export const UNAVAILABLE_FOR_LEGAL_REASONS = HTTP_451_NAME;
/**
 * HTTP 499 Client Closed Request
 */
export const CLIENT_CLOSED_REQUEST = HTTP_499_NAME;
//#endregion "4XX"

//#region "5XX"
/**
 * HTTP 500 Internal Server Error
 */
export const INTERNAL_SERVER_ERROR = HTTP_500_NAME;
/**
 * HTTP 501 Not Implemented
 */
export const NOT_IMPLEMENTED = HTTP_501_NAME;
/**
 * HTTP 502 Bad Gateway
 */
export const BAD_GATEWAY = HTTP_502_NAME;
/**
 * HTTP 503 Service Unavailable
 */
export const SERVICE_UNAVAILABLE = HTTP_503_NAME;
/**
 * HTTP 504 Gateway Timeout
 */
export const GATEWAY_TIMEOUT = HTTP_504_NAME;
/**
 * HTTP 505 HTTP Version Not Supported
 */
export const HTTP_VERSION_NOT_SUPPORTED = HTTP_505_NAME;
/**
 * HTTP 506 Variant Also Negotiates
 */
export const VARIANT_ALSO_NEGOTIATES = HTTP_506_NAME;
/**
 * HTTP 507 Insufficient Storage
 */
export const INSUFFICIENT_STORAGE = HTTP_507_NAME;
/**
 * HTTP 508 Loop Detected
 */
export const LOOP_DETECTED = HTTP_508_NAME;
/**
 * HTTP 510 Not Extended
 */
export const NOT_EXTENDED = HTTP_510_NAME;
/**
 * HTTP 511 Network Authentication Required
 */
export const NETWORK_AUTHENTICATION_REQUIRED = HTTP_511_NAME;
/**
 * HTTP 599 Network Connect Timeout Error
 */
export const NETWORK_CONNECT_TIMEOUT_ERROR = HTTP_599_NAME;
//#endregion "5XX"
