import { and, not, or, SimpleFunction } from 'only-utils';
import {
  HTTP_100_CODE,
  HTTP_200_CODE,
  HTTP_204_CODE,
  HTTP_205_CODE,
  HTTP_300_CODE,
  HTTP_304_CODE,
  HTTP_400_CODE,
  HTTP_500_CODE,
  HttpStatusCode,
  httpStatusCodes,
} from '../http-code-util.ts';

/**
 * Represents an HTTP status code.
 * It can be either an HttpStatusCode enum value or a number.
 */
type HttpCode = HttpStatusCode | number;

/**
 * Checks if the given HTTP code represents a successful response.
 * @param code The HTTP code to check.
 * @returns A boolean indicating whether the code represents a successful response.
 */
export const isSuccess = /* #__PURE__ */ (code: HttpCode) =>
  code >= HTTP_200_CODE && code < HTTP_300_CODE;

/**
 * Checks if the given HTTP code is a redirect.
 * @param code The HTTP code to check.
 * @returns A boolean indicating whether the code is a redirect.
 */
export const isRedirect = /* #__PURE__ */ (code: HttpCode) =>
  code >= HTTP_300_CODE && code < HTTP_400_CODE;

/**
 * Checks if the given HTTP code is informational.
 * @param code The HTTP code to check.
 * @returns A boolean indicating whether the code is informational.
 */
export const isInformational = /* #__PURE__ */ (code: HttpCode) =>
  code >= HTTP_100_CODE && code < HTTP_200_CODE;

/**
 * Checks if the given HTTP code is a client error.
 * @param code - The HTTP code to check.
 * @returns True if the code is a client error, false otherwise.
 */
export const isClientError = /* #__PURE__ */ (code: HttpCode) =>
  code >= HTTP_400_CODE && code < HTTP_500_CODE;

/**
 * Checks if the given HTTP code represents a server error.
 * @param code The HTTP code to check.
 * @returns `true` if the code represents a server error, `false` otherwise.
 */
export const isServerError = /* #__PURE__ */ (code: HttpCode) =>
  code >= HTTP_500_CODE && code < 600;

/**
 * Checks if the given HTTP code is equal to HTTP 200 code.
 *
 * @param code - The HTTP code to check.
 * @returns True if the code is equal to HTTP 200 code, false otherwise.
 */
export const isOk = /* #__PURE__ */ (code: HttpCode) => code === HTTP_200_CODE;

/**
 * Checks if the given HTTP code represents an error.
 * @param code The HTTP code to check.
 * @returns `true` if the code represents an error, `false` otherwise.
 */
export const isError = /* #__PURE__ */ or(
  isClientError,
  isServerError,
) as SimpleFunction<HttpCode, boolean>;

/**
 * Returns a function that checks if the given value is equal to the specified other value.
 *
 * @template T - The type of the values being compared.
 * @param {T} other - The value to compare against.
 * @returns {(value: T) => boolean} - A function that takes a value and returns true if it is equal to the other value, false otherwise.
 */
const eq =
  /* #__PURE__ */


    <T>(other: T) =>
    (value: T) =>
      other === value;

/**
 * Returns a function that checks if two values are not equal.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns `true` if the values are not equal, `false` otherwise.
 */
const notEq = /* #__PURE__ */ not(eq);

/**
 * Checks if the given HTTP code has content.
 *
 * @param code - The HTTP code to check.
 * @returns A boolean indicating whether the HTTP code has content.
 */
export const hasContent = /* #__PURE__ */ and(
  notEq(HTTP_204_CODE),
  notEq(HTTP_205_CODE),
  notEq(HTTP_304_CODE),
  not(isError),
) as SimpleFunction<HttpCode, boolean>;

/**
 * Checks if the given HTTP code is informational or success.
 *
 * @param code The HTTP code to check.
 * @returns `true` if the code is informational or success, `false` otherwise.
 */
export const isInformationalOrSuccess = /* #__PURE__ */ or(
  isInformational,
  isSuccess,
) as SimpleFunction<HttpCode, boolean>;

/**
 * Checks if the given HTTP code is valid.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed
 * @param code The HTTP code to check.
 * @returns `true` if the code is valid, `false` otherwise.
 */
export const isValid = /* #__PURE__ */ (code: HttpCode) =>
  httpStatusCodes.includes(code as (typeof httpStatusCodes)[number]);
