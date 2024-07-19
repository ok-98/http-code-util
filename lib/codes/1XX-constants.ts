//#region "100"

import { StatusCodeInfo } from '../http-code-util.ts';

/**
 * HTTP status code constant for 100 Continue.
 */
export const HTTP_100_CODE = 100;
/**
 * Represents the name of the HTTP status code 100 - Continue.
 */
export const HTTP_100_NAME = 'Continue';
/**
 * Represents the HTTP 100 status code.
 * The server has received the request headers, and the client should proceed to send the request body.
 */
export const HTTP_100_DESCRIPTION =
  'The server has received the request headers, and the client should proceed to send the request body.';

/**
 * Represents the HTTP 100 status code.
 */
export const HTTP_100 = {
  code: HTTP_100_CODE,
  name: HTTP_100_NAME,
  description: HTTP_100_DESCRIPTION,
} as const;

//#endregion "100"

//#region "101"
/**
 * HTTP status code constant for 101 - Switching Protocols.
 */
export const HTTP_101_CODE = 101;
/**
 * Represents the name of the HTTP status code 101.
 * The HTTP 101 Switching Protocols response code indicates the protocol the server is switching to as requested by the client.
 */
export const HTTP_101_NAME = 'Switching Protocols';
/**
 * HTTP 101 Switching Protocols
 *
 * The requester has asked the server to switch protocols, and the server has agreed to do so.
 */
export const HTTP_101_DESCRIPTION =
  'The requester has asked the server to switch protocols, and the server has agreed to do so.';

/**
 * Represents the HTTP 101 status code.
 */
export const HTTP_101: StatusCodeInfo = {
  code: HTTP_101_CODE,
  name: HTTP_101_NAME,
  description: HTTP_101_DESCRIPTION,
};
//#endregion "101"

//#region "102"
/**
 * HTTP status code constant for 102 - Processing.
 */
export const HTTP_102_CODE = 102;
/**
 * Represents the HTTP status code 102 - Processing.
 */
export const HTTP_102_NAME = 'Processing';
/**
 * HTTP 102 Informational Response - (WebDAV) The server has received and is processing the request, but no response is available yet.
 */
export const HTTP_102_DESCRIPTION =
  '(WebDAV) The server has received and is processing the request, but no response is available yet.';
//#endregion "102"

export const HTTP_102: StatusCodeInfo = {
  code: HTTP_102_CODE,
  name: HTTP_102_NAME,
  description: HTTP_102_DESCRIPTION,
};

//#region "103"
/**
 * HTTP status code 103.
 */
export const HTTP_103_CODE = 103;
/**
 * Represents the HTTP status code 103 - Early Hints.
 */
export const HTTP_103_NAME = 'Early Hints';
/**
 * HTTP_103_DESCRIPTION constant.
 * Used to return some response headers before final HTTP message.
 */
export const HTTP_103_DESCRIPTION =
  'Used to return some response headers before final HTTP message.';

export const HTTP_103: StatusCodeInfo = {
  code: HTTP_103_CODE,
  name: HTTP_103_NAME,
  description: HTTP_103_DESCRIPTION,
};
//#endregion "103"
