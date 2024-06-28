//#region "300"
export const HTTP_300_CODE = 300;
export const HTTP_300_NAME = "Multiple Choices";
export const HTTP_300_DESCRIPTION = "The request has more than one possible response. The user-agent or user should choose one of them.";
//#endregion "300"

//#region "301"
export const HTTP_301_CODE = 301;
export const HTTP_301_NAME = "Moved Permanently";
export const HTTP_301_DESCRIPTION = "The URL of the requested resource has been changed permanently. The new URL is given in the response.";
//#endregion "301"

//#region "302"
export const HTTP_302_CODE = 302;
export const HTTP_302_NAME = "Found";
export const HTTP_302_DESCRIPTION = "The URL of the requested resource has been changed temporarily. The new URL is given in the response.";
//#endregion "302"

//#region "303"
export const HTTP_303_CODE = 303;
export const HTTP_303_NAME = "See Other";
export const HTTP_303_DESCRIPTION = "The response to the request can be found under another URL using a GET method.";
//#endregion "303"

//#region "304"
export const HTTP_304_CODE = 304;
export const HTTP_304_NAME = "Not Modified";
export const HTTP_304_DESCRIPTION = "Indicates that the resource has not been modified since the version specified by the request headers.";
//#endregion "304"

//#region "305"
export const HTTP_305_CODE = 305;
export const HTTP_305_NAME = "Use Proxy";
export const HTTP_305_DESCRIPTION = "The requested resource is only available through a proxy, the address for which is provided in the response.";
//#endregion "305"

//#region "306"
export const HTTP_306_CODE = 306;
export const HTTP_306_NAME = "Switch Proxy";
export const HTTP_306_DESCRIPTION = "No longer used. Originally meant \"Subsequent requests should use the specified proxy.\"";
//#endregion "306"

//#region "307"
export const HTTP_307_CODE = 307;
export const HTTP_307_NAME = "Temporary Redirect";
export const HTTP_307_DESCRIPTION = "The URL of the requested resource has been changed temporarily. The new URL is given in the response. The request method should not be changed when reissuing the original request.";
//#endregion "307"

//#region "308"
export const HTTP_308_CODE = 308;
export const HTTP_308_NAME = "Permanent Redirect";
export const HTTP_308_DESCRIPTION = "The URL of the requested resource has been changed permanently. The new URL is given in the response. The request method should not be changed when reissuing the original request.";
//#endregion "308"
