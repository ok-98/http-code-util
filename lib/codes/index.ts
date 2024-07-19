//#region 1XX
export * from './1XX-constants.js';
export {
  HTTP_1XX_RECORD as HttpStatus1XX,
  HTTP_1XX_CODES as HttpStatusCodes1XX,
} from './1XX.js';
import {
  HttpStatusCode,
  HttpStatusName,
  StatusCodeInfo,
} from '../types/types.ts';
import { HTTP_1XX_CODES, HTTP_1XX_NAMES, HTTP_1XX_RECORD } from './1XX.js';
import { HTTP_2XX_CODES, HTTP_2XX_NAMES, HTTP_2XX_RECORD } from './2XX.js';
import { HTTP_3XX_CODES, HTTP_3XX_NAMES, HTTP_3XX_RECORD } from './3XX.js';
import { HTTP_4XX_CODES, HTTP_4XX_NAMES, HTTP_4XX_RECORD } from './4XX.js';
import { HTTP_5XX_CODES, HTTP_5XX_NAMES, HTTP_5XX_RECORD } from './5XX.js';
//#endregion 1XX

//#region 2XX
export * from './2XX-constants.js';
export {
  HTTP_2XX_RECORD as HttpStatus2XX,
  HTTP_2XX_CODES as HttpStatusCodes2XX,
} from './2XX.js';
//#endregion 2XX

//#region 3XX
export * from './3XX-constants.js';
export {
  HTTP_3XX_RECORD as HttpStatus3XX,
  HTTP_3XX_CODES as HttpStatusCodes3XX,
} from './3XX.js';
//#endregion 3XX

//#region 4XX
export * from './4XX-constants.js';
export {
  HTTP_4XX_RECORD as HttpStatus4XX,
  HTTP_4XX_CODES as HttpStatusCodes4XX,
} from './4XX.js';
//#endregion 4XX

//#region 5XX
export * from './5XX-constants.js';
export {
  HTTP_5XX_RECORD as HttpStatus5XX,
  HTTP_5XX_CODES as HttpStatusCodes5XX,
} from './5XX.js';
//#endregion 5XX

//#region XXX
/**
 * Represents the HTTP status codes and their corresponding information.
 *
 * 🍃 impacts tree-shaking of this module a lot! only use when really needed!
 */
export const HttpStatus = {
  ...HTTP_1XX_RECORD,
  ...HTTP_2XX_RECORD,
  ...HTTP_3XX_RECORD,
  ...HTTP_4XX_RECORD,
  ...HTTP_5XX_RECORD,
} as const satisfies Record<
  number | string | HttpStatusCode | HttpStatusName,
  StatusCodeInfo
> as Record<number | string | HttpStatusCode | HttpStatusName, StatusCodeInfo>;
/**
 * Array containing all the HTTP status codes.
 *
 * 🍃 impacts tree-shaking of this module a lot! only use when really needed!
 *
 * @type {readonly number[]}
 */
export const httpStatusCodes = [
  ...HTTP_1XX_CODES,
  ...HTTP_2XX_CODES,
  ...HTTP_3XX_CODES,
  ...HTTP_4XX_CODES,
  ...HTTP_5XX_CODES,
] as const satisfies number[];

/**
 * Array containing all the HTTP status names.
 *
 * 🍃 impacts tree-shaking of this module a lot! only use when really needed!
 *
 * @remarks
 * The array is a concatenation of HTTP_1XX_NAMES, HTTP_2XX_NAMES, HTTP_3XX_NAMES,
 * HTTP_4XX_NAMES, and HTTP_5XX_NAMES.
 */
export const httpStatusNames = [
  ...HTTP_1XX_NAMES,
  ...HTTP_2XX_NAMES,
  ...HTTP_3XX_NAMES,
  ...HTTP_4XX_NAMES,
  ...HTTP_5XX_NAMES,
] as const satisfies string[];
/**
 * HTTP status codes grouped by their respective categories.
 *
 * 🍃 impacts tree-shaking of this module a lot! only use when really needed!
 *
 * @remarks
 * This object contains the HTTP status codes categorized into 1XX, 2XX, 3XX, 4XX, and 5XX.
 * Each category is represented by a key-value pair, where the key is a string representing the category
 * and the value is a record containing the status code information.
 *
 * @example
 * ```
 * const HttpStatusXXX = {
 *   "1XX": HTTP_1XX_RECORD,
 *   "2XX": HTTP_2XX_RECORD,
 *   "3XX": HTTP_3XX_RECORD,
 *   "4XX": HTTP_4XX_RECORD,
 *   "5XX": HTTP_5XX_RECORD
 * };
 * ```
 */
export const HttpStatusXXX = {
  '1XX': HTTP_1XX_RECORD,
  '2XX': HTTP_2XX_RECORD,
  '3XX': HTTP_3XX_RECORD,
  '4XX': HTTP_4XX_RECORD,
  '5XX': HTTP_5XX_RECORD,
} as const satisfies Record<string, Record<number | string, StatusCodeInfo>>;
/**
 * HTTP status codes grouped by their respective categories.
 *
 * 🍃 impacts tree-shaking of this module a lot! only use when really needed!
 *
 * @remarks
 * This object contains the HTTP status codes categorized into 1XX, 2XX, 3XX, 4XX, and 5XX.
 * Each category is represented by an array of numbers.
 */
export const HttpStatusCodesXXX = {
  '1XX': HTTP_1XX_CODES,
  '2XX': HTTP_2XX_CODES,
  '3XX': HTTP_3XX_CODES,
  '4XX': HTTP_4XX_CODES,
  '5XX': HTTP_5XX_CODES,
} as const satisfies Record<string, number[]>;
/**
 * A mapping of HTTP status code ranges to their corresponding status code names.
 *
 * 🍃 impacts tree-shaking of this module a lot! only use when really needed!
 */
export const HttpStatusNamesXXX = {
  '1XX': HTTP_1XX_NAMES,
  '2XX': HTTP_2XX_NAMES,
  '3XX': HTTP_3XX_NAMES,
  '4XX': HTTP_4XX_NAMES,
  '5XX': HTTP_5XX_NAMES,
} as const satisfies Record<string, string[]>;
//#endregion XXX

export * from './contants.ts';
