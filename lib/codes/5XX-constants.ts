//#region "500"
export const HTTP_500_CODE = 500;
export const HTTP_500_NAME = "Internal Server Error";
export const HTTP_500_DESCRIPTION = "The server has encountered a situation it doesn't know how to handle.";
//#endregion "500"

//#region "501"
export const HTTP_501_CODE = 501;
export const HTTP_501_NAME = "Not Implemented";
export const HTTP_501_DESCRIPTION = "The request method is not supported by the server and cannot be handled.";
//#endregion "501"

//#region "502"
export const HTTP_502_CODE = 502;
export const HTTP_502_NAME = "Bad Gateway";
export const HTTP_502_DESCRIPTION = "The server, while acting as a gateway or proxy, received an invalid response from the upstream server.";
//#endregion "502"

//#region "503"
export const HTTP_503_CODE = 503;
export const HTTP_503_NAME = "Service Unavailable";
export const HTTP_503_DESCRIPTION = "The server is not ready to handle the request.";
//#endregion "503"

//#region "504"
export const HTTP_504_CODE = 504;
export const HTTP_504_NAME = "Gateway Timeout";
export const HTTP_504_DESCRIPTION = "The server, while acting as a gateway or proxy, did not get a response in time from the upstream server.";
//#endregion "504"

//#region "505"
export const HTTP_505_CODE = 505;
export const HTTP_505_NAME = "HTTP Version Not Supported";
export const HTTP_505_DESCRIPTION = "The HTTP version used in the request is not supported by the server.";
//#endregion "505"

//#region "506"
export const HTTP_506_CODE = 506;
export const HTTP_506_NAME = "Variant Also Negotiates";
export const HTTP_506_DESCRIPTION = "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.";
//#endregion "506"

//#region "507"
export const HTTP_507_CODE = 507;
export const HTTP_507_NAME = "Insufficient Storage";
export const HTTP_507_DESCRIPTION = "(WebDAV) The server is unable to store the representation needed to complete the request.";
//#endregion "507"

//#region "508"
export const HTTP_508_CODE = 508;
export const HTTP_508_NAME = "Loop Detected";
export const HTTP_508_DESCRIPTION = "(WebDAV) The server detected an infinite loop while processing the request.";
//#endregion "508"

//#region "510"
export const HTTP_510_CODE = 510;
export const HTTP_510_NAME = "Not Extended";
export const HTTP_510_DESCRIPTION = "Further extensions to the request are required for the server to fulfill it.";
//#endregion "510"

//#region "511"
export const HTTP_511_CODE = 511;
export const HTTP_511_NAME = "Network Authentication Required";
export const HTTP_511_DESCRIPTION = "The client needs to authenticate to gain network access.";
//#endregion "511"

//#region "599"
export const HTTP_599_CODE = 599;
export const HTTP_599_NAME = "Network Connect Timeout Error";
export const HTTP_599_DESCRIPTION = "The network connection has timed out.";
//#endregion "599"
