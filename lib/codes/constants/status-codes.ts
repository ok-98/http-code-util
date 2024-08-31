//#region "1XX"

import {
  HTTP_100_CODE,
  HTTP_101_CODE,
  HTTP_102_CODE,
  HTTP_103_CODE,
} from '../1XX-constants.ts';
import {
  HTTP_200_CODE,
  HTTP_201_CODE,
  HTTP_202_CODE,
  HTTP_203_CODE,
  HTTP_204_CODE,
  HTTP_205_CODE,
  HTTP_206_CODE,
  HTTP_207_CODE,
  HTTP_208_CODE,
  HTTP_226_CODE,
} from '../2XX-constants.ts';
import {
  HTTP_300_CODE,
  HTTP_301_CODE,
  HTTP_302_CODE,
  HTTP_303_CODE,
  HTTP_304_CODE,
  HTTP_305_CODE,
  HTTP_306_CODE,
  HTTP_307_CODE,
  HTTP_308_CODE,
} from '../3XX-constants.ts';
import {
  HTTP_400_CODE,
  HTTP_401_CODE,
  HTTP_402_CODE,
  HTTP_403_CODE,
  HTTP_404_CODE,
  HTTP_405_CODE,
  HTTP_406_CODE,
  HTTP_407_CODE,
  HTTP_408_CODE,
  HTTP_409_CODE,
  HTTP_410_CODE,
  HTTP_411_CODE,
  HTTP_412_CODE,
  HTTP_413_CODE,
  HTTP_414_CODE,
  HTTP_415_CODE,
  HTTP_416_CODE,
  HTTP_417_CODE,
  HTTP_418_CODE,
  HTTP_421_CODE,
  HTTP_422_CODE,
  HTTP_423_CODE,
  HTTP_424_CODE,
  HTTP_425_CODE,
  HTTP_426_CODE,
  HTTP_428_CODE,
  HTTP_429_CODE,
  HTTP_431_CODE,
  HTTP_444_CODE,
  HTTP_449_CODE,
  HTTP_450_CODE,
  HTTP_451_CODE,
  HTTP_499_CODE,
} from '../4XX-constants.ts';
import {
  HTTP_500_CODE,
  HTTP_501_CODE,
  HTTP_502_CODE,
  HTTP_503_CODE,
  HTTP_504_CODE,
  HTTP_505_CODE,
  HTTP_506_CODE,
  HTTP_507_CODE,
  HTTP_508_CODE,
  HTTP_510_CODE,
  HTTP_511_CODE,
  HTTP_599_CODE,
} from '../5XX-constants.ts';

/**
 * HTTP 100 Continue status code.
 */
export const CONTINUE = HTTP_100_CODE;

/**
 * HTTP 101 Switching Protocols status code.
 */
export const SWITCHING_PROTOCOLS = HTTP_101_CODE;

/**
 * HTTP 102 Processing status code.
 */
export const PROCESSING = HTTP_102_CODE;

/**
 * HTTP 103 Early Hints status code.
 */
export const EARLY_HINTS = HTTP_103_CODE;
//#endregion "1XX"

//#region "2XX"
/**
 * HTTP 200 OK status code.
 */
export const OK = HTTP_200_CODE;

/**
 * HTTP 201 Created status code.
 */
export const CREATED = HTTP_201_CODE;

/**
 * HTTP 202 Accepted status code.
 */
export const ACCEPTED = HTTP_202_CODE;

/**
 * HTTP 203 Non-Authoritative Information status code.
 */
export const NON_AUTHORITATIVE_INFORMATION = HTTP_203_CODE;

/**
 * HTTP 204 No Content status code.
 */
export const NO_CONTENT = HTTP_204_CODE;

/**
 * HTTP 205 Reset Content status code.
 */
export const RESET_CONTENT = HTTP_205_CODE;

/**
 * HTTP 206 Partial Content status code.
 */
export const PARTIAL_CONTENT = HTTP_206_CODE;

/**
 * HTTP 207 Multi-Status status code.
 */
export const MULTI_STATUS = HTTP_207_CODE;

/**
 * HTTP 208 Already Reported status code.
 */
export const ALREADY_REPORTED = HTTP_208_CODE;

/**
 * HTTP 226 IM Used status code.
 */
export const IM_USED = HTTP_226_CODE;
//#endregion "2XX"

//#region "3XX"
/**
 * HTTP 300 Multiple Choices status code.
 */
export const MULTIPLE_CHOICES = HTTP_300_CODE;

/**
 * HTTP 301 Moved Permanently status code.
 */
export const MOVED_PERMANENTLY = HTTP_301_CODE;

/**
 * HTTP 302 Found status code.
 */
export const FOUND = HTTP_302_CODE;

/**
 * HTTP 303 See Other status code.
 */
export const SEE_OTHER = HTTP_303_CODE;

/**
 * HTTP 304 Not Modified status code.
 */
export const NOT_MODIFIED = HTTP_304_CODE;

/**
 * HTTP 305 Use Proxy status code.
 */
export const USE_PROXY = HTTP_305_CODE;

/**
 * HTTP 306 Switch Proxy status code.
 */
export const SWITCH_PROXY = HTTP_306_CODE;

/**
 * HTTP 307 Temporary Redirect status code.
 */
export const TEMPORARY_REDIRECT = HTTP_307_CODE;

/**
 * HTTP 308 Permanent Redirect status code.
 */
export const PERMANENT_REDIRECT = HTTP_308_CODE;
//#endregion "3XX"

//#region "4XX"
/**
 * HTTP 400 Bad Request status code.
 */
export const BAD_REQUEST = HTTP_400_CODE;

/**
 * HTTP 401 Unauthorized status code.
 */
export const UNAUTHORIZED = HTTP_401_CODE;

/**
 * HTTP 402 Payment Required status code.
 */
export const PAYMENT_REQUIRED = HTTP_402_CODE;

/**
 * HTTP 403 Forbidden status code.
 */
export const FORBIDDEN = HTTP_403_CODE;

/**
 * HTTP 404 Not Found status code.
 */
export const NOT_FOUND = HTTP_404_CODE;

/**
 * HTTP 405 Method Not Allowed status code.
 */
export const METHOD_NOT_ALLOWED = HTTP_405_CODE;

/**
 * HTTP 406 Not Acceptable status code.
 */
export const NOT_ACCEPTABLE = HTTP_406_CODE;

/**
 * HTTP 407 Proxy Authentication Required status code.
 */
export const PROXY_AUTHENTICATION_REQUIRED = HTTP_407_CODE;

/**
 * HTTP 408 Request Timeout status code.
 */
export const REQUEST_TIMEOUT = HTTP_408_CODE;

/**
 * HTTP 409 Conflict status code.
 */
export const CONFLICT = HTTP_409_CODE;

/**
 * HTTP 410 Gone status code.
 */
export const GONE = HTTP_410_CODE;

/**
 * HTTP 411 Length Required status code.
 */
export const LENGTH_REQUIRED = HTTP_411_CODE;

/**
 * HTTP 412 Precondition Failed status code.
 */
export const PRECONDITION_FAILED = HTTP_412_CODE;

/**
 * HTTP 413 Payload Too Large status code.
 */
export const PAYLOAD_TOO_LARGE = HTTP_413_CODE;

/**
 * HTTP 414 URI Too Long status code.
 */
export const URI_TOO_LONG = HTTP_414_CODE;

/**
 * HTTP 415 Unsupported Media Type status code.
 */
export const UNSUPPORTED_MEDIA_TYPE = HTTP_415_CODE;

/**
 * HTTP 416 Range Not Satisfiable status code.
 */
export const RANGE_NOT_SATISFIABLE = HTTP_416_CODE;

/**
 * HTTP 417 Expectation Failed status code.
 */
export const EXPECTATION_FAILED = HTTP_417_CODE;

/**
 * HTTP 418 I'm a teapot status code.
 */
export const IM_A_TEAPOT = HTTP_418_CODE;

/**
 * HTTP 421 Misdirected Request status code.
 */
export const MISDIRECTED_REQUEST = HTTP_421_CODE;

/**
 * HTTP 422 Unprocessable Entity status code.
 */
export const UNPROCESSABLE_ENTITY = HTTP_422_CODE;

/**
 * HTTP 423 Locked status code.
 */
export const LOCKED = HTTP_423_CODE;

/**
 * HTTP 424 Failed Dependency status code.
 */
export const FAILED_DEPENDENCY = HTTP_424_CODE;

/**
 * HTTP 425 Too Early status code.
 */
export const TOO_EARLY = HTTP_425_CODE;

/**
 * HTTP 426 Upgrade Required status code.
 */
export const UPGRADE_REQUIRED = HTTP_426_CODE;

/**
 * HTTP 428 Precondition Required status code.
 */
export const PRECONDITION_REQUIRED = HTTP_428_CODE;

/**
 * HTTP 429 Too Many Requests status code.
 */
export const TOO_MANY_REQUESTS = HTTP_429_CODE;

/**
 * HTTP 431 Request Header Fields Too Large status code.
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE = HTTP_431_CODE;

/**
 * HTTP 444 Connection Closed Without Response status code.
 */
export const CONNECTION_CLOSED_WITHOUT_RESPONSE = HTTP_444_CODE;

/**
 * HTTP 449 Retry With status code.
 */
export const RETRY_WITH = HTTP_449_CODE;

/**
 * HTTP 450 Blocked by Windows Parental Controls status code.
 */
export const BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = HTTP_450_CODE;

/**
 * HTTP 451 Unavailable For Legal Reasons status code.
 */
export const UNAVAILABLE_FOR_LEGAL_REASONS = HTTP_451_CODE;

/**
 * HTTP 499 Client Closed Request status code.
 */
export const CLIENT_CLOSED_REQUEST = HTTP_499_CODE;
//#endregion "4XX"

//#region "5XX"
/**
 * HTTP 500 Internal Server Error status code.
 */
export const INTERNAL_SERVER_ERROR = HTTP_500_CODE;

/**
 * HTTP 501 Not Implemented status code.
 */
export const NOT_IMPLEMENTED = HTTP_501_CODE;

/**
 * HTTP 502 Bad Gateway status code.
 */
export const BAD_GATEWAY = HTTP_502_CODE;

/**
 * HTTP 503 Service Unavailable status code.
 */
export const SERVICE_UNAVAILABLE = HTTP_503_CODE;

/**
 * HTTP 504 Gateway Timeout status code.
 */
export const GATEWAY_TIMEOUT = HTTP_504_CODE;

/**
 * HTTP 505 HTTP Version Not Supported status code.
 */
export const HTTP_VERSION_NOT_SUPPORTED = HTTP_505_CODE;

/**
 * HTTP 506 Variant Also Negotiates status code.
 */
export const VARIANT_ALSO_NEGOTIATES = HTTP_506_CODE;

/**
 * HTTP 507 Insufficient Storage status code.
 */
export const INSUFFICIENT_STORAGE = HTTP_507_CODE;

/**
 * HTTP 508 Loop Detected status code.
 */
export const LOOP_DETECTED = HTTP_508_CODE;

/**
 * HTTP 510 Not Extended status code.
 */
export const NOT_EXTENDED = HTTP_510_CODE;

/**
 * HTTP 511 Network Authentication Required status code.
 */
export const NETWORK_AUTHENTICATION_REQUIRED = HTTP_511_CODE;

/**
 * HTTP 599 Network Connect Timeout Error status code.
 */
export const NETWORK_CONNECT_TIMEOUT_ERROR = HTTP_599_CODE;
//#endregion "5XX"
