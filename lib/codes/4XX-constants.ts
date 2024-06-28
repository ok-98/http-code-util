//#region "400"
export const HTTP_400_CODE = 400;
export const HTTP_400_NAME = "Bad Request";
export const HTTP_400_DESCRIPTION = "The server could not understand the request due to invalid syntax.";
//#endregion "400"

//#region "401"
export const HTTP_401_CODE = 401;
export const HTTP_401_NAME = "Unauthorized";
export const HTTP_401_DESCRIPTION = "The client must authenticate itself to get the requested response.";
//#endregion "401"

//#region "402"
export const HTTP_402_CODE = 402;
export const HTTP_402_NAME = "Payment Required";
export const HTTP_402_DESCRIPTION = "This response code is reserved for future use.";
//#endregion "402"

//#region "403"
export const HTTP_403_CODE = 403;
export const HTTP_403_NAME = "Forbidden";
export const HTTP_403_DESCRIPTION = "The client does not have access rights to the content.";
//#endregion "403"

//#region "404"
export const HTTP_404_CODE = 404;
export const HTTP_404_NAME = "Not Found";
export const HTTP_404_DESCRIPTION = "The server can not find the requested resource.";
//#endregion "404"

//#region "405"
export const HTTP_405_CODE = 405;
export const HTTP_405_NAME = "Method Not Allowed";
export const HTTP_405_DESCRIPTION = "The request method is known by the server but has been disabled and cannot be used.";
//#endregion "405"

//#region "406"
export const HTTP_406_CODE = 406;
export const HTTP_406_NAME = "Not Acceptable";
export const HTTP_406_DESCRIPTION = "The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers.";
//#endregion "406"

//#region "407"
export const HTTP_407_CODE = 407;
export const HTTP_407_NAME = "Proxy Authentication Required";
export const HTTP_407_DESCRIPTION = "The client must first authenticate itself with the proxy.";
//#endregion "407"

//#region "408"
export const HTTP_408_CODE = 408;
export const HTTP_408_NAME = "Request Timeout";
export const HTTP_408_DESCRIPTION = "The server would like to shut down this unused connection.";
//#endregion "408"

//#region "409"
export const HTTP_409_CODE = 409;
export const HTTP_409_NAME = "Conflict";
export const HTTP_409_DESCRIPTION = "The request could not be completed due to a conflict with the current state of the target resource.";
//#endregion "409"

//#region "410"
export const HTTP_410_CODE = 410;
export const HTTP_410_NAME = "Gone";
export const HTTP_410_DESCRIPTION = "The content has been permanently deleted from server, with no forwarding address.";
//#endregion "410"

//#region "411"
export const HTTP_411_CODE = 411;
export const HTTP_411_NAME = "Length Required";
export const HTTP_411_DESCRIPTION = "The server refuses to accept the request without a defined Content-Length header.";
//#endregion "411"

//#region "412"
export const HTTP_412_CODE = 412;
export const HTTP_412_NAME = "Precondition Failed";
export const HTTP_412_DESCRIPTION = "The client has indicated preconditions in its headers which the server does not meet.";
//#endregion "412"

//#region "413"
export const HTTP_413_CODE = 413;
export const HTTP_413_NAME = "Payload Too Large";
export const HTTP_413_DESCRIPTION = "Request entity is larger than limits defined by server.";
//#endregion "413"

//#region "414"
export const HTTP_414_CODE = 414;
export const HTTP_414_NAME = "URI Too Long";
export const HTTP_414_DESCRIPTION = "The URI requested by the client is longer than the server is willing to interpret.";
//#endregion "414"

//#region "415"
export const HTTP_415_CODE = 415;
export const HTTP_415_NAME = "Unsupported Media Type";
export const HTTP_415_DESCRIPTION = "The media format of the requested data is not supported by the server.";
//#endregion "415"

//#region "416"
export const HTTP_416_CODE = 416;
export const HTTP_416_NAME = "Range Not Satisfiable";
export const HTTP_416_DESCRIPTION = "The range specified by the Range header field in the request can't be fulfilled.";
//#endregion "416"

//#region "417"
export const HTTP_417_CODE = 417;
export const HTTP_417_NAME = "Expectation Failed";
export const HTTP_417_DESCRIPTION = "The expectation indicated by the Expect request header field can't be met by the server.";
//#endregion "417"

//#region "418"
export const HTTP_418_CODE = 418;
export const HTTP_418_NAME = "I'm a teapot";
export const HTTP_418_DESCRIPTION = "Any attempt to brew coffee with a teapot should result in the error code \"418 I'm a teapot\".";
//#endregion "418"

//#region "421"
export const HTTP_421_CODE = 421;
export const HTTP_421_NAME = "Misdirected Request";
export const HTTP_421_DESCRIPTION = "The request was directed at a server that is not able to produce a response.";
//#endregion "421"

//#region "422"
export const HTTP_422_CODE = 422;
export const HTTP_422_NAME = "Unprocessable Entity";
export const HTTP_422_DESCRIPTION = "(WebDAV) The request was well-formed but was unable to be followed due to semantic errors.";
//#endregion "422"

//#region "423"
export const HTTP_423_CODE = 423;
export const HTTP_423_NAME = "Locked";
export const HTTP_423_DESCRIPTION = "(WebDAV) The resource that is being accessed is locked.";
//#endregion "423"

//#region "424"
export const HTTP_424_CODE = 424;
export const HTTP_424_NAME = "Failed Dependency";
export const HTTP_424_DESCRIPTION = "(WebDAV) The request failed due to failure of a previous request.";
//#endregion "424"

//#region "425"
export const HTTP_425_CODE = 425;
export const HTTP_425_NAME = "Too Early";
export const HTTP_425_DESCRIPTION = "Indicates that the server is unwilling to risk processing a request that might be replayed.";
//#endregion "425"

//#region "426"
export const HTTP_426_CODE = 426;
export const HTTP_426_NAME = "Upgrade Required";
export const HTTP_426_DESCRIPTION = "The client should switch to a different protocol such as TLS/1.0.";
//#endregion "426"

//#region "428"
export const HTTP_428_CODE = 428;
export const HTTP_428_NAME = "Precondition Required";
export const HTTP_428_DESCRIPTION = "The origin server requires the request to be conditional.";
//#endregion "428"

//#region "429"
export const HTTP_429_CODE = 429;
export const HTTP_429_NAME = "Too Many Requests";
export const HTTP_429_DESCRIPTION = "The user has sent too many requests in a given amount of time (\"rate limiting\").";
//#endregion "429"

//#region "431"
export const HTTP_431_CODE = 431;
export const HTTP_431_NAME = "Request Header Fields Too Large";
export const HTTP_431_DESCRIPTION = "The server is unwilling to process the request because its header fields are too large.";
//#endregion "431"

//#region "444"
export const HTTP_444_CODE = 444;
export const HTTP_444_NAME = "Connection Closed Without Response";
export const HTTP_444_DESCRIPTION = "The server closed the connection without sending any response to the client.";
//#endregion "444"

//#region "449"
export const HTTP_449_CODE = 449;
export const HTTP_449_NAME = "Retry With";
export const HTTP_449_DESCRIPTION = "The server cannot honour the request because the user has not provided the required information.";
//#endregion "449"

//#region "450"
export const HTTP_450_CODE = 450;
export const HTTP_450_NAME = "Blocked by Windows Parental Controls";
export const HTTP_450_DESCRIPTION = "The request was blocked by Windows Parental Controls.";
//#endregion "450"

//#region "451"
export const HTTP_451_CODE = 451;
export const HTTP_451_NAME = "Unavailable For Legal Reasons";
export const HTTP_451_DESCRIPTION = "The user requests an illegal resource, such as a web page censored by a government.";
//#endregion "451"

//#region "499"
export const HTTP_499_CODE = 499;
export const HTTP_499_NAME = "Client Closed Request";
export const HTTP_499_DESCRIPTION = "The client has closed the request before the server could send a response.";
//#endregion "499"
