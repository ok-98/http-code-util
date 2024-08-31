//#region "1XX"

import {
  HTTP_100_DESCRIPTION,
  HTTP_101_DESCRIPTION,
  HTTP_102_DESCRIPTION,
  HTTP_103_DESCRIPTION,
} from '../1XX-constants.ts';
import {
  HTTP_200_DESCRIPTION,
  HTTP_201_DESCRIPTION,
  HTTP_202_DESCRIPTION,
  HTTP_203_DESCRIPTION,
  HTTP_204_DESCRIPTION,
  HTTP_205_DESCRIPTION,
  HTTP_206_DESCRIPTION,
  HTTP_207_DESCRIPTION,
  HTTP_208_DESCRIPTION,
  HTTP_226_DESCRIPTION,
} from '../2XX-constants.ts';
import {
  HTTP_300_DESCRIPTION,
  HTTP_301_DESCRIPTION,
  HTTP_302_DESCRIPTION,
  HTTP_303_DESCRIPTION,
  HTTP_304_DESCRIPTION,
  HTTP_305_DESCRIPTION,
  HTTP_306_DESCRIPTION,
  HTTP_307_DESCRIPTION,
  HTTP_308_DESCRIPTION,
} from '../3XX-constants.ts';
import {
  HTTP_400_DESCRIPTION,
  HTTP_401_DESCRIPTION,
  HTTP_402_DESCRIPTION,
  HTTP_403_DESCRIPTION,
  HTTP_404_DESCRIPTION,
  HTTP_405_DESCRIPTION,
  HTTP_406_DESCRIPTION,
  HTTP_407_DESCRIPTION,
  HTTP_408_DESCRIPTION,
  HTTP_409_DESCRIPTION,
  HTTP_410_DESCRIPTION,
  HTTP_411_DESCRIPTION,
  HTTP_412_DESCRIPTION,
  HTTP_413_DESCRIPTION,
  HTTP_414_DESCRIPTION,
  HTTP_415_DESCRIPTION,
  HTTP_416_DESCRIPTION,
  HTTP_417_DESCRIPTION,
  HTTP_418_DESCRIPTION,
  HTTP_421_DESCRIPTION,
  HTTP_422_DESCRIPTION,
  HTTP_423_DESCRIPTION,
  HTTP_424_DESCRIPTION,
  HTTP_425_DESCRIPTION,
  HTTP_426_DESCRIPTION,
  HTTP_428_DESCRIPTION,
  HTTP_429_DESCRIPTION,
  HTTP_431_DESCRIPTION,
  HTTP_444_DESCRIPTION,
  HTTP_449_DESCRIPTION,
  HTTP_450_DESCRIPTION,
  HTTP_451_DESCRIPTION,
  HTTP_499_DESCRIPTION,
} from '../4XX-constants.ts';
import {
  HTTP_500_DESCRIPTION,
  HTTP_501_DESCRIPTION,
  HTTP_502_DESCRIPTION,
  HTTP_503_DESCRIPTION,
  HTTP_504_DESCRIPTION,
  HTTP_505_DESCRIPTION,
  HTTP_506_DESCRIPTION,
  HTTP_507_DESCRIPTION,
  HTTP_508_DESCRIPTION,
  HTTP_510_DESCRIPTION,
  HTTP_511_DESCRIPTION,
  HTTP_599_DESCRIPTION,
} from '../5XX-constants.ts';

/**
 * HTTP 100 - Continue
 */
export const CONTINUE = HTTP_100_DESCRIPTION;

/**
 * HTTP 101 - Switching Protocols
 */
export const SWITCHING_PROTOCOLS = HTTP_101_DESCRIPTION;

/**
 * HTTP 102 - Processing
 */
export const PROCESSING = HTTP_102_DESCRIPTION;

/**
 * HTTP 103 - Early Hints
 */
export const EARLY_HINTS = HTTP_103_DESCRIPTION;
//#endregion "1XX"

//#region "2XX"
/**
 * HTTP 200 - OK
 */
export const OK = HTTP_200_DESCRIPTION;

/**
 * HTTP 201 - Created
 */
export const CREATED = HTTP_201_DESCRIPTION;

/**
 * HTTP 202 - Accepted
 */
export const ACCEPTED = HTTP_202_DESCRIPTION;

/**
 * HTTP 203 - Non-Authoritative Information
 */
export const NON_AUTHORITATIVE_INFORMATION = HTTP_203_DESCRIPTION;

/**
 * HTTP 204 - No Content
 */
export const NO_CONTENT = HTTP_204_DESCRIPTION;

/**
 * HTTP 205 - Reset Content
 */
export const RESET_CONTENT = HTTP_205_DESCRIPTION;

/**
 * HTTP 206 - Partial Content
 */
export const PARTIAL_CONTENT = HTTP_206_DESCRIPTION;

/**
 * HTTP 207 - Multi-Status
 */
export const MULTI_STATUS = HTTP_207_DESCRIPTION;

/**
 * HTTP 208 - Already Reported
 */
export const ALREADY_REPORTED = HTTP_208_DESCRIPTION;

/**
 * HTTP 226 - IM Used
 */
export const IM_USED = HTTP_226_DESCRIPTION;
//#endregion "2XX"

//#region "3XX"
/**
 * HTTP 300 - Multiple Choices
 */
export const MULTIPLE_CHOICES = HTTP_300_DESCRIPTION;

/**
 * HTTP 301 - Moved Permanently
 */
export const MOVED_PERMANENTLY = HTTP_301_DESCRIPTION;

/**
 * HTTP 302 - Found
 */
export const FOUND = HTTP_302_DESCRIPTION;

/**
 * HTTP 303 - See Other
 */
export const SEE_OTHER = HTTP_303_DESCRIPTION;

/**
 * HTTP 304 - Not Modified
 */
export const NOT_MODIFIED = HTTP_304_DESCRIPTION;

/**
 * HTTP 305 - Use Proxy
 */
export const USE_PROXY = HTTP_305_DESCRIPTION;

/**
 * HTTP 306 - Switch Proxy
 */
export const SWITCH_PROXY = HTTP_306_DESCRIPTION;

/**
 * HTTP 307 - Temporary Redirect
 */
export const TEMPORARY_REDIRECT = HTTP_307_DESCRIPTION;

/**
 * HTTP 308 - Permanent Redirect
 */
export const PERMANENT_REDIRECT = HTTP_308_DESCRIPTION;
//#endregion "3XX"

//#region "4XX"
/**
 * HTTP 400 - Bad Request
 */
export const BAD_REQUEST = HTTP_400_DESCRIPTION;

/**
 * HTTP 401 - Unauthorized
 */
export const UNAUTHORIZED = HTTP_401_DESCRIPTION;

/**
 * HTTP 402 - Payment Required
 */
export const PAYMENT_REQUIRED = HTTP_402_DESCRIPTION;

/**
 * HTTP 403 - Forbidden
 */
export const FORBIDDEN = HTTP_403_DESCRIPTION;

/**
 * HTTP 404 - Not Found
 */
export const NOT_FOUND = HTTP_404_DESCRIPTION;

/**
 * HTTP 405 - Method Not Allowed
 */
export const METHOD_NOT_ALLOWED = HTTP_405_DESCRIPTION;

/**
 * HTTP 406 - Not Acceptable
 */
export const NOT_ACCEPTABLE = HTTP_406_DESCRIPTION;

/**
 * HTTP 407 - Proxy Authentication Required
 */
export const PROXY_AUTHENTICATION_REQUIRED = HTTP_407_DESCRIPTION;

/**
 * HTTP 408 - Request Timeout
 */
export const REQUEST_TIMEOUT = HTTP_408_DESCRIPTION;

/**
 * HTTP 409 - Conflict
 */
export const CONFLICT = HTTP_409_DESCRIPTION;

/**
 * HTTP 410 - Gone
 */
export const GONE = HTTP_410_DESCRIPTION;

/**
 * HTTP 411 - Length Required
 */
export const LENGTH_REQUIRED = HTTP_411_DESCRIPTION;

/**
 * HTTP 412 - Precondition Failed
 */
export const PRECONDITION_FAILED = HTTP_412_DESCRIPTION;

/**
 * HTTP 413 - Payload Too Large
 */
export const PAYLOAD_TOO_LARGE = HTTP_413_DESCRIPTION;

/**
 * HTTP 414 - URI Too Long
 */
export const URI_TOO_LONG = HTTP_414_DESCRIPTION;

/**
 * HTTP 415 - Unsupported Media Type
 */
export const UNSUPPORTED_MEDIA_TYPE = HTTP_415_DESCRIPTION;

/**
 * HTTP 416 - Range Not Satisfiable
 */
export const RANGE_NOT_SATISFIABLE = HTTP_416_DESCRIPTION;

/**
 * HTTP 417 - Expectation Failed
 */
export const EXPECTATION_FAILED = HTTP_417_DESCRIPTION;

/**
 * HTTP 418 - I'm a Teapot
 */
export const IM_A_TEAPOT = HTTP_418_DESCRIPTION;

/**
 * HTTP 421 - Misdirected Request
 */
export const MISDIRECTED_REQUEST = HTTP_421_DESCRIPTION;

/**
 * HTTP 422 - Unprocessable Entity
 */
export const UNPROCESSABLE_ENTITY = HTTP_422_DESCRIPTION;

/**
 * HTTP 423 - Locked
 */
export const LOCKED = HTTP_423_DESCRIPTION;

/**
 * HTTP 424 - Failed Dependency
 */
export const FAILED_DEPENDENCY = HTTP_424_DESCRIPTION;

/**
 * HTTP 425 - Too Early
 */
export const TOO_EARLY = HTTP_425_DESCRIPTION;

/**
 * HTTP 426 - Upgrade Required
 */
export const UPGRADE_REQUIRED = HTTP_426_DESCRIPTION;

/**
 * HTTP 428 - Precondition Required
 */
export const PRECONDITION_REQUIRED = HTTP_428_DESCRIPTION;

/**
 * HTTP 429 - Too Many Requests
 */
export const TOO_MANY_REQUESTS = HTTP_429_DESCRIPTION;

/**
 * HTTP 431 - Request Header Fields Too Large
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE = HTTP_431_DESCRIPTION;

/**
 * HTTP 444 - Connection Closed Without Response
 */
export const CONNECTION_CLOSED_WITHOUT_RESPONSE = HTTP_444_DESCRIPTION;

/**
 * HTTP 449 - Retry With
 */
export const RETRY_WITH = HTTP_449_DESCRIPTION;

/**
 * HTTP 450 - Blocked by Windows Parental Controls
 */
export const BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = HTTP_450_DESCRIPTION;

/**
 * HTTP 451 - Unavailable For Legal Reasons
 */
export const UNAVAILABLE_FOR_LEGAL_REASONS = HTTP_451_DESCRIPTION;

/**
 * HTTP 499 - Client Closed Request
 */
export const CLIENT_CLOSED_REQUEST = HTTP_499_DESCRIPTION;
//#endregion "4XX"

//#region "5XX"
/**
 * HTTP 500 - Internal Server Error
 */
export const INTERNAL_SERVER_ERROR = HTTP_500_DESCRIPTION;

/**
 * HTTP 501 - Not Implemented
 */
export const NOT_IMPLEMENTED = HTTP_501_DESCRIPTION;

/**
 * HTTP 502 - Bad Gateway
 */
export const BAD_GATEWAY = HTTP_502_DESCRIPTION;

/**
 * HTTP 503 - Service Unavailable
 */
export const SERVICE_UNAVAILABLE = HTTP_503_DESCRIPTION;

/**
 * HTTP 504 - Gateway Timeout
 */
export const GATEWAY_TIMEOUT = HTTP_504_DESCRIPTION;

/**
 * HTTP 505 - HTTP Version Not Supported
 */
export const HTTP_VERSION_NOT_SUPPORTED = HTTP_505_DESCRIPTION;

/**
 * HTTP 506 - Variant Also Negotiates
 */
export const VARIANT_ALSO_NEGOTIATES = HTTP_506_DESCRIPTION;

/**
 * HTTP 507 - Insufficient Storage
 */
export const INSUFFICIENT_STORAGE = HTTP_507_DESCRIPTION;

/**
 * HTTP 508 - Loop Detected
 */
export const LOOP_DETECTED = HTTP_508_DESCRIPTION;

/**
 * HTTP 510 - Not Extended
 */
export const NOT_EXTENDED = HTTP_510_DESCRIPTION;

/**
 * HTTP 511 - Network Authentication Required
 */
export const NETWORK_AUTHENTICATION_REQUIRED = HTTP_511_DESCRIPTION;

/**
 * HTTP 599 - Network Connect Timeout Error
 */
export const NETWORK_CONNECT_TIMEOUT_ERROR = HTTP_599_DESCRIPTION;
//#endregion "5XX"
