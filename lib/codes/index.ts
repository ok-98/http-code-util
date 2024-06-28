//#region 1XX
export * from "./1XX-constants.js"
import { StatusCodeInfo } from "../types/types.ts";
import * as _1XX from "./1XX-constants.js"
import { HTTP_1XX_CODES, HTTP_1XX_RECORD } from "./1XX.js";
export { HTTP_1XX_CODES as HttpStatusCodes1XX  } from "./1XX.js";
export { HTTP_1XX_RECORD as HttpStatus1XX  } from "./1XX.js";
//#endregion 1XX

//#region 2XX
export * from "./2XX-constants.js"
import * as _2XX from "./2XX-constants.js"
import { HTTP_2XX_CODES, HTTP_2XX_RECORD } from "./2XX.js";
export { HTTP_2XX_CODES as HttpStatusCodes2XX  } from "./2XX.js";
export { HTTP_2XX_RECORD as HttpStatus2XX  } from "./2XX.js";
//#endregion 2XX

//#region 3XX
export * from "./3XX-constants.js"
import * as _3XX from "./3XX-constants.js"
import { HTTP_3XX_CODES, HTTP_3XX_RECORD } from "./3XX.js";
export { HTTP_3XX_CODES as HttpStatusCodes3XX  } from "./3XX.js";
export { HTTP_3XX_RECORD as HttpStatus3XX  } from "./3XX.js";
//#endregion 3XX

//#region 4XX
export * from "./4XX-constants.js"
import * as _4XX from "./4XX-constants.js"
import { HTTP_4XX_CODES, HTTP_4XX_RECORD } from "./4XX.js";
export { HTTP_4XX_CODES as HttpStatusCodes4XX  } from "./4XX.js";
export { HTTP_4XX_RECORD as HttpStatus4XX  } from "./4XX.js";
//#endregion 4XX

//#region 5XX
export * from "./5XX-constants.js"
import * as _5XX from "./5XX-constants.js"
import { HTTP_5XX_CODES, HTTP_5XX_RECORD } from "./5XX.js";
export { HTTP_5XX_CODES as HttpStatusCodes5XX } from "./5XX.js";
export { HTTP_5XX_RECORD as HttpStatus5XX } from "./5XX.js";
//#endregion 5XX


//#region XXX
/**
 * Represents the HTTP status codes and their corresponding information.
 */
export const HttpStatus = {...HTTP_1XX_RECORD, ...HTTP_2XX_RECORD, ...HTTP_3XX_RECORD ,...HTTP_4XX_RECORD, ...HTTP_5XX_RECORD} as const satisfies Record<number | string, StatusCodeInfo>;
/**
 * Array containing all the HTTP status codes.
 * @type {readonly number[]}
 */
export const HttpStatusCodes = [...HTTP_1XX_CODES, ...HTTP_2XX_CODES, ...HTTP_3XX_CODES, ...HTTP_4XX_CODES, ...HTTP_5XX_CODES] as const satisfies number[];
/**
 * HTTP status codes grouped by their respective categories.
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
export const HttpStatusXXX = {"1XX": HTTP_1XX_RECORD, "2XX": HTTP_2XX_RECORD, "3XX": HTTP_3XX_RECORD, "4XX": HTTP_4XX_RECORD, "5XX": HTTP_5XX_RECORD} as const satisfies Record<string, Record<number | string, StatusCodeInfo>>;
/**
 * HTTP status codes grouped by their respective categories.
 * 
 * @remarks
 * This object contains the HTTP status codes categorized into 1XX, 2XX, 3XX, 4XX, and 5XX.
 * Each category is represented by an array of numbers.
 */
export const HttpStatusCodesXXX = {"1XX": HTTP_1XX_CODES, "2XX": HTTP_2XX_CODES, "3XX": HTTP_3XX_CODES, "4XX": HTTP_4XX_CODES, "5XX": HTTP_5XX_CODES} as const satisfies Record<string, number[]>;
//#endregion XXX