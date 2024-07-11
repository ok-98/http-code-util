//#region "200"
/**
 * HTTP status code for a successful response.
 */
export const HTTP_200_CODE = 200;
/**
 * The name constant for HTTP status code 200.
 */
export const HTTP_200_NAME = 'OK';
/**
 * HTTP 200 Description.
 * The request has succeeded.
 */
export const HTTP_200_DESCRIPTION = 'The request has succeeded.';
//#endregion "200"

//#region "201"
/**
 * HTTP status code for Created.
 */
export const HTTP_201_CODE = 201;
/**
 * The name for HTTP status code 201.
 */
export const HTTP_201_NAME = 'Created';
/**
 * HTTP 201 Description.
 *
 * The request has been fulfilled, resulting in the creation of a new resource.
 */
export const HTTP_201_DESCRIPTION =
  'The request has been fulfilled, resulting in the creation of a new resource.';
//#endregion "201"

//#region "202"
/**
 * HTTP status code for Accepted (202).
 */
export const HTTP_202_CODE = 202;
/**
 * Represents the name of the HTTP status code 202 - Accepted.
 */
export const HTTP_202_NAME = 'Accepted';
/**
 * HTTP 202 Description
 *
 * The request has been accepted for processing, but the processing has not been completed.
 */
export const HTTP_202_DESCRIPTION =
  'The request has been accepted for processing, but the processing has not been completed.';
//#endregion "202"

//#region "203"
/**
 * HTTP status code for 203 Non-Authoritative Information.
 */
export const HTTP_203_CODE = 203;
/**
 * Represents the HTTP status name for the 203 status code.
 */
export const HTTP_203_NAME = 'Non-Authoritative Information';
/**
 * HTTP 203 Description constant.
 * The request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response.
 */
export const HTTP_203_DESCRIPTION =
  "The request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response.";
//#endregion "203"

//#region "204"
/**
 * HTTP status code for No Content (204).
 */
export const HTTP_204_CODE = 204;
/**
 * Represents the name for HTTP status code 204 - No Content.
 */
export const HTTP_204_NAME = 'No Content';
/**
 * HTTP 204 Description
 *
 * The server successfully processed the request, and is not returning any content.
 */
export const HTTP_204_DESCRIPTION =
  'The server successfully processed the request, and is not returning any content.';
//#endregion "204"

//#region "205"
/**
 * HTTP status code 205 - Reset Content.
 */
export const HTTP_205_CODE = 205;
/**
 * Represents the HTTP status name for the 205 Reset Content status code.
 */
export const HTTP_205_NAME = 'Reset Content';
/**
 * The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.
 */
export const HTTP_205_DESCRIPTION =
  'The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.';
//#endregion "205"

//#region "206"
/**
 * HTTP status code for Partial Content (206).
 */
export const HTTP_206_CODE = 206;
/**
 * The name of the HTTP status code 206.
 */
export const HTTP_206_NAME = 'Partial Content';
/**
 * The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
 */
export const HTTP_206_DESCRIPTION =
  'The server is delivering only part of the resource (byte serving) due to a range header sent by the client.';
//#endregion "206"

//#region "207"
/**
 * HTTP status code constant for 207 Multi-Status.
 */
export const HTTP_207_CODE = 207;
/**
 * Represents the HTTP status code 207 - Multi-Status.
 */
export const HTTP_207_NAME = 'Multi-Status';
/**
 * Represents the HTTP 207 status code.
 *
 * (WebDAV) The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
 */
export const HTTP_207_DESCRIPTION =
  '(WebDAV) The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.';
//#endregion "207"

//#region "208"
/**
 * HTTP status code 208 - Already Reported.
 */
export const HTTP_208_CODE = 208;
/**
 * Represents the HTTP status code 208 - Already Reported.
 */
export const HTTP_208_NAME = 'Already Reported';
/**
 * Represents the HTTP 208 status code.
 *
 * (WebDAV) The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.
 */
export const HTTP_208_DESCRIPTION =
  '(WebDAV) The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.';
//#endregion "208"

//#region "226"
/**
 * HTTP status code constant for HTTP 226 IM Used.
 */
export const HTTP_226_CODE = 226;
/**
 * Represents the HTTP status code 226.
 * The HTTP 226 IM Used response status code indicates that the server has fulfilled a request for the resource,
 * and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
 */
export const HTTP_226_NAME = 'IM Used';
/**
 * HTTP 226 - IM Used
 *
 * The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
 */
export const HTTP_226_DESCRIPTION =
  'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.';
//#endregion "226"
