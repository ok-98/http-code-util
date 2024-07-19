import { StatusCodeInfo } from '../http-code-util.ts';

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

/**
 * Represents the HTTP 500 Internal Server Error status code.
 */
export const HTTP_500: StatusCodeInfo = {
  code: HTTP_500_CODE,
  name: HTTP_500_NAME,
  description: HTTP_500_DESCRIPTION,
};
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

/**
 * Represents the HTTP 501 Not Implemented status code.
 */
export const HTTP_501: StatusCodeInfo = {
  code: HTTP_501_CODE,
  name: HTTP_501_NAME,
  description: HTTP_501_DESCRIPTION,
};
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

/**
 * Represents the HTTP 502 Bad Gateway status code.
 */
export const HTTP_502: StatusCodeInfo = {
  code: HTTP_502_CODE,
  name: HTTP_502_NAME,
  description: HTTP_502_DESCRIPTION,
};
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

/**
 * Represents the HTTP 503 Service Unavailable status code.
 */
export const HTTP_503: StatusCodeInfo = {
  code: HTTP_503_CODE,
  name: HTTP_503_NAME,
  description: HTTP_503_DESCRIPTION,
};
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

/**
 * Represents the HTTP 504 Gateway Timeout status code.
 */
export const HTTP_504: StatusCodeInfo = {
  code: HTTP_504_CODE,
  name: HTTP_504_NAME,
  description: HTTP_504_DESCRIPTION,
};
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

/**
 * Represents the HTTP 505 HTTP Version Not Supported status code.
 */
export const HTTP_505: StatusCodeInfo = {
  code: HTTP_505_CODE,
  name: HTTP_505_NAME,
  description: HTTP_505_DESCRIPTION,
};
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

/**
 * Represents the HTTP 506 Variant Also Negotiates status code.
 */
export const HTTP_506: StatusCodeInfo = {
  code: HTTP_506_CODE,
  name: HTTP_506_NAME,
  description: HTTP_506_DESCRIPTION,
};
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

/**
 * Represents the HTTP 507 Insufficient Storage status code.
 */
export const HTTP_507: StatusCodeInfo = {
  code: HTTP_507_CODE,
  name: HTTP_507_NAME,
  description: HTTP_507_DESCRIPTION,
};
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

/**
 * Represents the HTTP 508 Loop Detected status code.
 */
export const HTTP_508: StatusCodeInfo = {
  code: HTTP_508_CODE,
  name: HTTP_508_NAME,
  description: HTTP_508_DESCRIPTION,
};
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

/**
 * Represents the HTTP 510 Not Extended status code.
 */
export const HTTP_510: StatusCodeInfo = {
  code: HTTP_510_CODE,
  name: HTTP_510_NAME,
  description: HTTP_510_DESCRIPTION,
};
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

/**
 * Represents the HTTP 511 Network Authentication Required status code.
 */
export const HTTP_511: StatusCodeInfo = {
  code: HTTP_511_CODE,
  name: HTTP_511_NAME,
  description: HTTP_511_DESCRIPTION,
};
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

/**
 * Represents the HTTP 599 Network Connect Timeout Error status code.
 */
export const HTTP_599: StatusCodeInfo = {
  code: HTTP_599_CODE,
  name: HTTP_599_NAME,
  description: HTTP_599_DESCRIPTION,
};
//#endregion "599"
