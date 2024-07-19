// prettier-ignore
import { HTTP_100_CODE, HTTP_100_DESCRIPTION, HTTP_100_NAME, HTTP_101_CODE, HTTP_101_DESCRIPTION, HTTP_101_NAME, HTTP_102_CODE, HTTP_102_DESCRIPTION, HTTP_102_NAME, HTTP_103_CODE, HTTP_103_DESCRIPTION, HTTP_103_NAME } from "./1XX-constants.ts";
// prettier-ignore
import { HTTP_200_CODE, HTTP_200_DESCRIPTION, HTTP_200_NAME, HTTP_201_CODE, HTTP_201_DESCRIPTION, HTTP_201_NAME, HTTP_202_CODE, HTTP_202_DESCRIPTION, HTTP_202_NAME, HTTP_203_CODE, HTTP_203_DESCRIPTION, HTTP_203_NAME, HTTP_204_CODE, HTTP_204_DESCRIPTION, HTTP_204_NAME, HTTP_205_CODE, HTTP_205_DESCRIPTION, HTTP_205_NAME, HTTP_206_CODE, HTTP_206_DESCRIPTION, HTTP_206_NAME, HTTP_207_CODE, HTTP_207_DESCRIPTION, HTTP_207_NAME, HTTP_208_CODE, HTTP_208_DESCRIPTION, HTTP_208_NAME, HTTP_226_CODE, HTTP_226_DESCRIPTION, HTTP_226_NAME } from "./2XX-constants.ts";
// prettier-ignore
import { HTTP_300_CODE, HTTP_300_DESCRIPTION, HTTP_300_NAME, HTTP_301_CODE, HTTP_301_DESCRIPTION, HTTP_301_NAME, HTTP_302_CODE, HTTP_302_DESCRIPTION, HTTP_302_NAME, HTTP_303_CODE, HTTP_303_DESCRIPTION, HTTP_303_NAME, HTTP_304_CODE, HTTP_304_DESCRIPTION, HTTP_304_NAME, HTTP_305_CODE, HTTP_305_DESCRIPTION, HTTP_305_NAME, HTTP_306_CODE, HTTP_306_DESCRIPTION, HTTP_306_NAME, HTTP_307_CODE, HTTP_307_DESCRIPTION, HTTP_307_NAME, HTTP_308_CODE, HTTP_308_DESCRIPTION, HTTP_308_NAME } from "./3XX-constants.ts";
// prettier-ignore
import { HTTP_400_CODE, HTTP_400_DESCRIPTION, HTTP_400_NAME, HTTP_401_CODE, HTTP_401_DESCRIPTION, HTTP_401_NAME, HTTP_402_CODE, HTTP_402_DESCRIPTION, HTTP_402_NAME, HTTP_403_CODE, HTTP_403_DESCRIPTION, HTTP_403_NAME, HTTP_404_CODE, HTTP_404_DESCRIPTION, HTTP_404_NAME, HTTP_405_CODE, HTTP_405_DESCRIPTION, HTTP_405_NAME, HTTP_406_CODE, HTTP_406_DESCRIPTION, HTTP_406_NAME, HTTP_407_CODE, HTTP_407_DESCRIPTION, HTTP_407_NAME, HTTP_408_CODE, HTTP_408_DESCRIPTION, HTTP_408_NAME, HTTP_409_CODE, HTTP_409_DESCRIPTION, HTTP_409_NAME, HTTP_410_CODE, HTTP_410_DESCRIPTION, HTTP_410_NAME, HTTP_411_CODE, HTTP_411_DESCRIPTION, HTTP_411_NAME, HTTP_412_CODE, HTTP_412_DESCRIPTION, HTTP_412_NAME, HTTP_413_CODE, HTTP_413_DESCRIPTION, HTTP_413_NAME, HTTP_414_CODE, HTTP_414_DESCRIPTION, HTTP_414_NAME, HTTP_415_CODE, HTTP_415_DESCRIPTION, HTTP_415_NAME, HTTP_416_CODE, HTTP_416_DESCRIPTION, HTTP_416_NAME, HTTP_417_CODE, HTTP_417_DESCRIPTION, HTTP_417_NAME, HTTP_418_CODE, HTTP_418_DESCRIPTION, HTTP_418_NAME, HTTP_421_CODE, HTTP_421_DESCRIPTION, HTTP_421_NAME, HTTP_422_CODE, HTTP_422_DESCRIPTION, HTTP_422_NAME, HTTP_423_CODE, HTTP_423_DESCRIPTION, HTTP_423_NAME, HTTP_424_CODE, HTTP_424_DESCRIPTION, HTTP_424_NAME, HTTP_425_CODE, HTTP_425_DESCRIPTION, HTTP_425_NAME, HTTP_426_CODE, HTTP_426_DESCRIPTION, HTTP_426_NAME, HTTP_428_CODE, HTTP_428_DESCRIPTION, HTTP_428_NAME, HTTP_429_CODE, HTTP_429_DESCRIPTION, HTTP_429_NAME, HTTP_431_CODE, HTTP_431_DESCRIPTION, HTTP_431_NAME, HTTP_444_CODE, HTTP_444_DESCRIPTION, HTTP_444_NAME, HTTP_449_CODE, HTTP_449_DESCRIPTION, HTTP_449_NAME, HTTP_450_CODE, HTTP_450_DESCRIPTION, HTTP_450_NAME, HTTP_451_CODE, HTTP_451_DESCRIPTION, HTTP_451_NAME, HTTP_499_CODE, HTTP_499_DESCRIPTION, HTTP_499_NAME } from "./4XX-constants.ts";
// prettier-ignore
import { HTTP_500_CODE, HTTP_500_DESCRIPTION, HTTP_500_NAME, HTTP_501_CODE, HTTP_501_DESCRIPTION, HTTP_501_NAME, HTTP_502_CODE, HTTP_502_DESCRIPTION, HTTP_502_NAME, HTTP_503_CODE, HTTP_503_DESCRIPTION, HTTP_503_NAME, HTTP_504_CODE, HTTP_504_DESCRIPTION, HTTP_504_NAME, HTTP_505_CODE, HTTP_505_DESCRIPTION, HTTP_505_NAME, HTTP_506_CODE, HTTP_506_DESCRIPTION, HTTP_506_NAME, HTTP_507_CODE, HTTP_507_DESCRIPTION, HTTP_507_NAME, HTTP_508_CODE, HTTP_508_DESCRIPTION, HTTP_508_NAME, HTTP_510_CODE, HTTP_510_DESCRIPTION, HTTP_510_NAME, HTTP_511_CODE, HTTP_511_DESCRIPTION, HTTP_511_NAME, HTTP_599_CODE, HTTP_599_DESCRIPTION, HTTP_599_NAME } from "./5XX-constants.ts";

/**
 * Namespace containing HTTP status codes.
 */
export namespace StatusCodes {
  //#region "1XX"
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
}

/**
 * Namespace containing constants for HTTP reason phrases.
 */
export namespace ReasonPhrases {
  //#region "1XX"
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
}

/**
 * Namespace containing status code explanations.
 */
export namespace StatusExplenation {
  //#region "1XX"
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
}
