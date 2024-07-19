import { codeToNameMapper, nameToCodeMapper } from '../codes/internal.ts';
import {
  HttpStatus,
  HttpStatusCode,
  HttpStatusName,
  StatusCodeInfo,
} from '../http-code-util.ts';

/**
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 * Retrieves the HTTP status code based on the provided phrase.
 * @param phrase - The phrase representing the HTTP status code.
 * @returns The corresponding HTTP status code, or undefined if not found.
 */
export const getStatusCode = /* #__PURE__ */ (
  phrase: string | HttpStatusName,
): HttpStatusCode | undefined => nameToCodeMapper[phrase as HttpStatusName];

/**
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 * Retrieves the reason phrase for a given HTTP status code.
 * @param code - The HTTP status code.
 * @returns The reason phrase corresponding to the provided status code, or undefined if not found.
 */
export const getReasonphrase = /* #__PURE__ */ (
  code: HttpStatusCode | number,
): HttpStatusName | undefined => {
  const name = codeToNameMapper[code as HttpStatusCode];
  return name as HttpStatusName;
};

/**
 * 🍃 impacts tree-shaking of this module a lot! only use when really needed!
 * Retrieves the description for a given HTTP status code or status name.
 * @param code - The HTTP status code, status name, string, or number.
 * @returns The description of the HTTP status code, or undefined if not found.
 */
export const getDescription = /* #__PURE__ */ (
  code: HttpStatusCode | HttpStatusName | string | number,
): string | undefined => getStatusInfo(code)?.description;

/**
 * 🍃 impacts tree-shaking of this module a lot! only use when really needed!
 * Retrieves the status information for a given HTTP status code or status name.
 * @param code - The HTTP status code, status name, or a string/number representing the code.
 * @returns The status code information object, or undefined if not found.
 */
export const getStatusInfo = /* #__PURE__ */ (
  code: HttpStatusCode | HttpStatusName | string | number,
): StatusCodeInfo | undefined => {
  return HttpStatus[code];
};
