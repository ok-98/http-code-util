import { StatusCodeInfo } from '../http-code-util.ts';

//#region "300"
/**
 * Represents the HTTP 300 status code.
 */
export const HTTP_300_CODE = 300;
/**
 * Represents the HTTP status code name for 300 - Multiple Choices.
 */
export const HTTP_300_NAME = 'Multiple Choices';
/**
 * The description for HTTP 300 status code.
 * The request has more than one possible response. The user-agent or user should choose one of them.
 */
export const HTTP_300_DESCRIPTION =
  'The request has more than one possible response. The user-agent or user should choose one of them.';

/**
 * Represents the HTTP 300 Multiple Choices status code.
 */
export const HTTP_300: StatusCodeInfo = {
  code: HTTP_300_CODE,
  name: HTTP_300_NAME,
  description: HTTP_300_DESCRIPTION,
};
//#endregion "300"

//#region "301"
/**
 * HTTP 301 status code constant.
 */
export const HTTP_301_CODE = 301;
/**
 * Represents the name of the HTTP 301 status code.
 */
export const HTTP_301_NAME = 'Moved Permanently';
/**
 * HTTP 301 Description: The URL of the requested resource has been changed permanently. The new URL is given in the response.
 */
export const HTTP_301_DESCRIPTION =
  'The URL of the requested resource has been changed permanently. The new URL is given in the response.';

/**
 * Represents the HTTP 301 Moved Permanently status code.
 */
export const HTTP_301: StatusCodeInfo = {
  code: HTTP_301_CODE,
  name: HTTP_301_NAME,
  description: HTTP_301_DESCRIPTION,
};
//#endregion "301"

//#region "302"
/**
 * HTTP status code for a temporary redirect (302).
 */
export const HTTP_302_CODE = 302;
/**
 * The name for HTTP status code 302.
 */
export const HTTP_302_NAME = 'Found';
/**
 * Represents the HTTP 302 status code.
 * The URL of the requested resource has been changed temporarily.
 * The new URL is given in the response.
 */
export const HTTP_302_DESCRIPTION =
  'The URL of the requested resource has been changed temporarily. The new URL is given in the response.';

/**
 * Represents the HTTP 302 Found status code.
 */
export const HTTP_302: StatusCodeInfo = {
  code: HTTP_302_CODE,
  name: HTTP_302_NAME,
  description: HTTP_302_DESCRIPTION,
};
//#endregion "302"

//#region "303"
/**
 * HTTP status code for redirection (303).
 */
export const HTTP_303_CODE = 303;
/**
 * The name for HTTP status code 303.
 */
export const HTTP_303_NAME = 'See Other';
/**
 * The description for HTTP 303 status code.
 * The response to the request can be found under another URL using a GET method.
 */
export const HTTP_303_DESCRIPTION =
  'The response to the request can be found under another URL using a GET method.';

/**
 * Represents the HTTP 303 See Other status code.
 */
export const HTTP_303: StatusCodeInfo = {
  code: HTTP_303_CODE,
  name: HTTP_303_NAME,
  description: HTTP_303_DESCRIPTION,
};
//#endregion "303"

//#region "304"
/**
 * HTTP status code for 304 Not Modified.
 */
export const HTTP_304_CODE = 304;
/**
 * Represents the HTTP status name for 304 - Not Modified.
 */
export const HTTP_304_NAME = 'Not Modified';
/**
 * HTTP 304 Description.
 * Indicates that the resource has not been modified since the version specified by the request headers.
 */
export const HTTP_304_DESCRIPTION =
  'Indicates that the resource has not been modified since the version specified by the request headers.';

/**
 * Represents the HTTP 304 Not Modified status code.
 */
export const HTTP_304: StatusCodeInfo = {
  code: HTTP_304_CODE,
  name: HTTP_304_NAME,
  description: HTTP_304_DESCRIPTION,
};
//#endregion "304"

//#region "305"
/**
 * HTTP status code constant for 305 (Use Proxy).
 */
export const HTTP_305_CODE = 305;
/**
 * Represents the HTTP status code 305 - Use Proxy.
 */
export const HTTP_305_NAME = 'Use Proxy';
/**
 * The description for HTTP status code 305.
 * The requested resource is only available through a proxy, the address for which is provided in the response.
 */
export const HTTP_305_DESCRIPTION =
  'The requested resource is only available through a proxy, the address for which is provided in the response.';

/**
 * Represents the HTTP 305 Use Proxy status code.
 */
export const HTTP_305: StatusCodeInfo = {
  code: HTTP_305_CODE,
  name: HTTP_305_NAME,
  description: HTTP_305_DESCRIPTION,
};
//#endregion "305"

//#region "306"
/**
 * HTTP status code constant for 306 (Unused).
 */
export const HTTP_306_CODE = 306;
/**
 * Represents the HTTP status code 306 - Switch Proxy.
 */
export const HTTP_306_NAME = 'Switch Proxy';
/**
 * HTTP 306 constant representing the status code.
 *
 * This status code is no longer used. It was originally meant to indicate that subsequent requests should use the specified proxy.
 */
export const HTTP_306_DESCRIPTION =
  'No longer used. Originally meant "Subsequent requests should use the specified proxy."';

/**
 * Represents the HTTP 306 Switch Proxy status code.
 */
export const HTTP_306: StatusCodeInfo = {
  code: HTTP_306_CODE,
  name: HTTP_306_NAME,
  description: HTTP_306_DESCRIPTION,
};
//#endregion "306"

//#region "307"
/**
 * HTTP status code 307.
 */
export const HTTP_307_CODE = 307;
/**
 * Represents the name of the HTTP status code 307.
 * The HTTP 307 Temporary Redirect status code indicates that the target resource has been temporarily moved to the URL specified in the Location header field.
 */
export const HTTP_307_NAME = 'Temporary Redirect';
/**
 * The HTTP_307_DESCRIPTION constant represents the description for the HTTP 307 status code.
 * The URL of the requested resource has been changed temporarily. The new URL is given in the response.
 * The request method should not be changed when reissuing the original request.
 */
export const HTTP_307_DESCRIPTION =
  'The URL of the requested resource has been changed temporarily. The new URL is given in the response. The request method should not be changed when reissuing the original request.';

/**
 * Represents the HTTP 307 Temporary Redirect status code.
 */
export const HTTP_307: StatusCodeInfo = {
  code: HTTP_307_CODE,
  name: HTTP_307_NAME,
  description: HTTP_307_DESCRIPTION,
};
//#endregion "307"

//#region "308"
/**
 * HTTP status code constant for 308 Permanent Redirect.
 */
export const HTTP_308_CODE = 308;
/**
 * Represents the name of the HTTP status code 308.
 *
 * @remarks
 * The HTTP status code 308 indicates that the target resource has been permanently moved
 * and the client should update its references to the new URL.
 */
export const HTTP_308_NAME = 'Permanent Redirect';
/**
 * Represents the HTTP 308 status code.
 * The URL of the requested resource has been changed permanently.
 * The new URL is given in the response.
 * The request method should not be changed when reissuing the original request.
 */
export const HTTP_308_DESCRIPTION =
  'The URL of the requested resource has been changed permanently. The new URL is given in the response. The request method should not be changed when reissuing the original request.';

/**
 * Represents the HTTP 308 Permanent Redirect status code.
 */
export const HTTP_308: StatusCodeInfo = {
  code: HTTP_308_CODE,
  name: HTTP_308_NAME,
  description: HTTP_308_DESCRIPTION,
};
//#endregion "308"
