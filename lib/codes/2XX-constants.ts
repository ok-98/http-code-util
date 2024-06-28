//#region "200"
export const HTTP_200_CODE = 200;
export const HTTP_200_NAME = "OK";
export const HTTP_200_DESCRIPTION = "The request has succeeded.";
//#endregion "200"

//#region "201"
export const HTTP_201_CODE = 201;
export const HTTP_201_NAME = "Created";
export const HTTP_201_DESCRIPTION = "The request has been fulfilled, resulting in the creation of a new resource.";
//#endregion "201"

//#region "202"
export const HTTP_202_CODE = 202;
export const HTTP_202_NAME = "Accepted";
export const HTTP_202_DESCRIPTION = "The request has been accepted for processing, but the processing has not been completed.";
//#endregion "202"

//#region "203"
export const HTTP_203_CODE = 203;
export const HTTP_203_NAME = "Non-Authoritative Information";
export const HTTP_203_DESCRIPTION = "The request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response.";
//#endregion "203"

//#region "204"
export const HTTP_204_CODE = 204;
export const HTTP_204_NAME = "No Content";
export const HTTP_204_DESCRIPTION = "The server successfully processed the request, and is not returning any content.";
//#endregion "204"

//#region "205"
export const HTTP_205_CODE = 205;
export const HTTP_205_NAME = "Reset Content";
export const HTTP_205_DESCRIPTION = "The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.";
//#endregion "205"

//#region "206"
export const HTTP_206_CODE = 206;
export const HTTP_206_NAME = "Partial Content";
export const HTTP_206_DESCRIPTION = "The server is delivering only part of the resource (byte serving) due to a range header sent by the client.";
//#endregion "206"

//#region "207"
export const HTTP_207_CODE = 207;
export const HTTP_207_NAME = "Multi-Status";
export const HTTP_207_DESCRIPTION = "(WebDAV) The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.";
//#endregion "207"

//#region "208"
export const HTTP_208_CODE = 208;
export const HTTP_208_NAME = "Already Reported";
export const HTTP_208_DESCRIPTION = "(WebDAV) The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.";
//#endregion "208"

//#region "226"
export const HTTP_226_CODE = 226;
export const HTTP_226_NAME = "IM Used";
export const HTTP_226_DESCRIPTION = "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.";
//#endregion "226"
