//#region "500"
/**
 * Represents the HTTP status code 500.
 */
export const HTTP_500_CODE = 500;
/**
 * Represents the name for the HTTP 500 status code.
 */
export const HTTP_500_NAME = 'Internal Server Error';
/**
 * The description for HTTP 500 status code.
 * The server has encountered a situation it doesn't know how to handle.
 */
export const HTTP_500_DESCRIPTION =
  "The server has encountered a situation it doesn't know how to handle.";
//#endregion "500"

//#region "501"
/**
 * Represents the HTTP status code 501 - Not Implemented.
 */
export const HTTP_501_CODE = 501;
/**
 * Represents the name for HTTP status code 501 - Not Implemented.
 */
export const HTTP_501_NAME = 'Not Implemented';
/**
 * Description for HTTP_501_DESCRIPTION constant.
 * The request method is not supported by the server and cannot be handled.
 */
export const HTTP_501_DESCRIPTION =
  'The request method is not supported by the server and cannot be handled.';
//#endregion "501"

//#region "502"
/**
 * Represents the HTTP status code 502 - Bad Gateway.
 */
export const HTTP_502_CODE = 502;
/**
 * Represents the name of the HTTP 502 status code - Bad Gateway.
 */
export const HTTP_502_NAME = 'Bad Gateway';
/**
 * Description for HTTP_502_DESCRIPTION constant.
 *
 * The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
 */
export const HTTP_502_DESCRIPTION =
  'The server, while acting as a gateway or proxy, received an invalid response from the upstream server.';
//#endregion "502"

//#region "503"
/**
 * HTTP status code for Service Unavailable (503).
 */
export const HTTP_503_CODE = 503;
/**
 * Represents the name of the HTTP 503 status code - Service Unavailable.
 */
export const HTTP_503_NAME = 'Service Unavailable';
/**
 * The description for HTTP 503 status code.
 * Indicates that the server is not ready to handle the request.
 */
export const HTTP_503_DESCRIPTION =
  'The server is not ready to handle the request.';
//#endregion "503"

//#region "504"
/**
 * Represents the HTTP status code 504 - Gateway Timeout.
 */
export const HTTP_504_CODE = 504;
/**
 * Represents the name of the HTTP status code 504.
 */
export const HTTP_504_NAME = 'Gateway Timeout';
/**
 * Description for HTTP_504_DESCRIPTION constant.
 *
 * The server, while acting as a gateway or proxy, did not get a response in time from the upstream server.
 */
export const HTTP_504_DESCRIPTION =
  'The server, while acting as a gateway or proxy, did not get a response in time from the upstream server.';
//#endregion "504"

//#region "505"
/**
 * HTTP status code constant for HTTP 505 - HTTP Version Not Supported.
 */
export const HTTP_505_CODE = 505;
/**
 * Represents the name of the HTTP status code 505.
 * The HTTP Version Not Supported status code indicates that the HTTP version used in the request is not supported by the server.
 */
export const HTTP_505_NAME = 'HTTP Version Not Supported';
/**
 * The description for HTTP 505 status code.
 * The HTTP version used in the request is not supported by the server.
 */
export const HTTP_505_DESCRIPTION =
  'The HTTP version used in the request is not supported by the server.';
//#endregion "505"

//#region "506"
/**
 * Represents the HTTP 506 status code.
 */
export const HTTP_506_CODE = 506;
/**
 * Represents the HTTP status code 506 - Variant Also Negotiates.
 */
export const HTTP_506_NAME = 'Variant Also Negotiates';
/**
 * Description for HTTP_506_DESCRIPTION constant.
 *
 * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 */
export const HTTP_506_DESCRIPTION =
  'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.';
//#endregion "506"

//#region "507"
/**
 * Represents the HTTP 507 Insufficient Storage status code.
 */
export const HTTP_507_CODE = 507;
/**
 * Represents the HTTP status code 507 - Insufficient Storage.
 */
export const HTTP_507_NAME = 'Insufficient Storage';
/**
 * Represents the description for HTTP status code 507.
 *
 * @remarks
 * This status code is used in WebDAV to indicate that the server is unable to store the representation needed to complete the request.
 */
export const HTTP_507_DESCRIPTION =
  '(WebDAV) The server is unable to store the representation needed to complete the request.';
//#endregion "507"

//#region "508"
/**
 * Represents the HTTP 508 status code.
 */
export const HTTP_508_CODE = 508;
/**
 * Represents the HTTP status code 508 - Loop Detected.
 */
export const HTTP_508_NAME = 'Loop Detected';
/**
 * Represents the description for HTTP status code 508.
 *
 * @remarks
 * This status code is used when the server detects an infinite loop while processing the request.
 */
export const HTTP_508_DESCRIPTION =
  '(WebDAV) The server detected an infinite loop while processing the request.';
//#endregion "508"

//#region "510"
/**
 * Represents the HTTP 510 status code.
 */
export const HTTP_510_CODE = 510;
/**
 * Represents the HTTP status code 510 - Not Extended.
 */
export const HTTP_510_NAME = 'Not Extended';
/**
 * Description for HTTP_510_DESCRIPTION constant.
 * Further extensions to the request are required for the server to fulfill it.
 */
export const HTTP_510_DESCRIPTION =
  'Further extensions to the request are required for the server to fulfill it.';
//#endregion "510"

//#region "511"
/**
 * Represents the HTTP 511 status code.
 */
export const HTTP_511_CODE = 511;
/**
 * Represents the name of the HTTP status code 511 - Network Authentication Required.
 */
export const HTTP_511_NAME = 'Network Authentication Required';
/**
 * HTTP 511 Description: The client needs to authenticate to gain network access.
 */
export const HTTP_511_DESCRIPTION =
  'The client needs to authenticate to gain network access.';
//#endregion "511"

//#region "599"
/**
 * Represents the HTTP status code 599.
 */
export const HTTP_599_CODE = 599;
/**
 * Represents the name of the HTTP 599 status code, which indicates a Network Connect Timeout Error.
 */
export const HTTP_599_NAME = 'Network Connect Timeout Error';
/**
 * Description for HTTP_599_DESCRIPTION constant.
 * The network connection has timed out.
 */
export const HTTP_599_DESCRIPTION = 'The network connection has timed out.';
//#endregion "599"
