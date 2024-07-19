import {
  HttpStatusCode,
  HttpStatusName,
  StatusCodeInfo,
} from '../types/types.js';
import {
  HTTP_200,
  HTTP_200_CODE,
  HTTP_200_NAME,
  HTTP_201,
  HTTP_201_CODE,
  HTTP_201_NAME,
  HTTP_202,
  HTTP_202_CODE,
  HTTP_202_NAME,
  HTTP_203,
  HTTP_203_CODE,
  HTTP_203_NAME,
  HTTP_204,
  HTTP_204_CODE,
  HTTP_204_NAME,
  HTTP_205,
  HTTP_205_CODE,
  HTTP_205_NAME,
  HTTP_206,
  HTTP_206_CODE,
  HTTP_206_NAME,
  HTTP_207,
  HTTP_207_CODE,
  HTTP_207_NAME,
  HTTP_208,
  HTTP_208_CODE,
  HTTP_208_NAME,
  HTTP_226,
  HTTP_226_CODE,
  HTTP_226_NAME,
} from './2XX-constants.js';

/**
 * Array of HTTP status codes in the 2XX range.
 * @type {HTTP_2XX_CODE_TYPE[]}
 */
export const HTTP_2XX_CODES = [
  HTTP_200_CODE,
  HTTP_201_CODE,
  HTTP_202_CODE,
  HTTP_203_CODE,
  HTTP_204_CODE,
  HTTP_205_CODE,
  HTTP_206_CODE,
  HTTP_207_CODE,
  HTTP_208_CODE,
  HTTP_226_CODE,
] as const satisfies number[];

/**
 * Array of HTTP 2XX status code names.
 * @type {HTTP_2XX_NAME_TYPE[]}
 */
export const HTTP_2XX_NAMES = [
  HTTP_200_NAME,
  HTTP_201_NAME,
  HTTP_202_NAME,
  HTTP_203_NAME,
  HTTP_204_NAME,
  HTTP_205_NAME,
  HTTP_206_NAME,
  HTTP_207_NAME,
  HTTP_208_NAME,
  HTTP_226_NAME,
] as const satisfies string[];

/**
 * Represents the type of HTTP 2XX status codes.
 */
export type HTTP_2XX_CODE_TYPE = (typeof HTTP_2XX_CODES)[number];
/**
 * Represents the type of HTTP 2XX status code names.
 */
export type HTTP_2XX_NAME_TYPE = (typeof HTTP_2XX_NAMES)[number];

/**
 * HTTP 2XX Code Record.
 * Represents a record of HTTP status codes in the 2XX range.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 *
 */
export const HTTP_2XX_CODE_RECORD: Record<HTTP_2XX_CODE_TYPE, StatusCodeInfo> =
  {
    [HTTP_200_CODE]: HTTP_200,
    [HTTP_201_CODE]: HTTP_201,
    [HTTP_202_CODE]: HTTP_202,
    [HTTP_203_CODE]: HTTP_203,
    [HTTP_204_CODE]: HTTP_204,
    [HTTP_205_CODE]: HTTP_205,
    [HTTP_206_CODE]: HTTP_206,
    [HTTP_207_CODE]: HTTP_207,
    [HTTP_208_CODE]: HTTP_208,
    [HTTP_226_CODE]: HTTP_226,
  } as const satisfies Record<number, StatusCodeInfo>;

/**
 * HTTP 2XX Name Record.
 * Represents a record of HTTP status code names in the 2XX range.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 *
 */
export const HTTP_2XX_NAME_RECORD: Record<HTTP_2XX_NAME_TYPE, StatusCodeInfo> =
  {
    [HTTP_200_NAME]: HTTP_200,
    [HTTP_201_NAME]: HTTP_201,
    [HTTP_202_NAME]: HTTP_202,
    [HTTP_203_NAME]: HTTP_203,
    [HTTP_204_NAME]: HTTP_204,
    [HTTP_205_NAME]: HTTP_205,
    [HTTP_206_NAME]: HTTP_206,
    [HTTP_207_NAME]: HTTP_207,
    [HTTP_208_NAME]: HTTP_208,
    [HTTP_226_NAME]: HTTP_226,
  } as const satisfies Record<string, StatusCodeInfo>;

/**
 * Represents the HTTP 2XX status code record.
 * This record includes both the status code and its corresponding name.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 *
 */
export const HTTP_2XX_RECORD = {
  ...HTTP_2XX_CODE_RECORD,
  ...HTTP_2XX_NAME_RECORD,
} as const satisfies Record<
  number | string | HttpStatusCode | HttpStatusName,
  StatusCodeInfo
>;
