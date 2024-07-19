import {
  HttpStatusCode,
  HttpStatusName,
  StatusCodeInfo,
} from '../types/types.js';
import {
  HTTP_500,
  HTTP_500_CODE,
  HTTP_500_NAME,
  HTTP_501,
  HTTP_501_CODE,
  HTTP_501_NAME,
  HTTP_502,
  HTTP_502_CODE,
  HTTP_502_NAME,
  HTTP_503,
  HTTP_503_CODE,
  HTTP_503_NAME,
  HTTP_504,
  HTTP_504_CODE,
  HTTP_504_NAME,
  HTTP_505,
  HTTP_505_CODE,
  HTTP_505_NAME,
  HTTP_506,
  HTTP_506_CODE,
  HTTP_506_NAME,
  HTTP_507,
  HTTP_507_CODE,
  HTTP_507_NAME,
  HTTP_508,
  HTTP_508_CODE,
  HTTP_508_NAME,
  HTTP_510,
  HTTP_510_CODE,
  HTTP_510_NAME,
  HTTP_511,
  HTTP_511_CODE,
  HTTP_511_NAME,
  HTTP_599,
  HTTP_599_CODE,
  HTTP_599_NAME,
} from './5XX-constants.js';

/**
 * Array of HTTP status codes in the 5xx range.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 *
 * @type {HTTP_5XX_CODE_TYPE[]}
 */
export const HTTP_5XX_CODES = [
  HTTP_500_CODE,
  HTTP_501_CODE,
  HTTP_502_CODE,
  HTTP_503_CODE,
  HTTP_504_CODE,
  HTTP_505_CODE,
  HTTP_506_CODE,
  HTTP_507_CODE,
  HTTP_508_CODE,
  HTTP_510_CODE,
  HTTP_511_CODE,
  HTTP_599_CODE,
] as const satisfies number[];

/**
 * Array of HTTP status code names in the 5XX range.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 * @type {HTTP_5XX_CODE_NAME[]}
 */
export const HTTP_5XX_NAMES = [
  HTTP_500_NAME,
  HTTP_501_NAME,
  HTTP_502_NAME,
  HTTP_503_NAME,
  HTTP_504_NAME,
  HTTP_505_NAME,
  HTTP_506_NAME,
  HTTP_507_NAME,
  HTTP_508_NAME,
  HTTP_510_NAME,
  HTTP_511_NAME,
  HTTP_599_NAME,
] as const satisfies string[];

/**
 * Represents the type of HTTP 5XX status codes.
 */
export type HTTP_5XX_CODE_TYPE = (typeof HTTP_5XX_CODES)[number];

/**
 * Represents the type of HTTP 5XX status code names.
 */
export type HTTP_5XX_NAME_TYPE = (typeof HTTP_5XX_NAMES)[number];

/**
 * HTTP_5XX_CODE_RECORD represents a record of HTTP 5XX status codes and their corresponding information.
 */
export const HTTP_5XX_CODE_RECORD: Record<HTTP_5XX_CODE_TYPE, StatusCodeInfo> =
  {
    [HTTP_500_CODE]: HTTP_500,
    [HTTP_501_CODE]: HTTP_501,
    [HTTP_502_CODE]: HTTP_502,
    [HTTP_503_CODE]: HTTP_503,
    [HTTP_504_CODE]: HTTP_504,
    [HTTP_505_CODE]: HTTP_505,
    [HTTP_506_CODE]: HTTP_506,
    [HTTP_507_CODE]: HTTP_507,
    [HTTP_508_CODE]: HTTP_508,
    [HTTP_510_CODE]: HTTP_510,
    [HTTP_511_CODE]: HTTP_511,
    [HTTP_599_CODE]: HTTP_599,
  } as const satisfies Record<number, StatusCodeInfo>;

/**
 * HTTP_5XX_NAME_RECORD is a constant that represents a record of HTTP 5XX status code names and their corresponding StatusCodeInfo objects.
 * The keys of the record are the HTTP 5XX status code names, and the values are the corresponding StatusCodeInfo objects.
 */
export const HTTP_5XX_NAME_RECORD: Record<HTTP_5XX_NAME_TYPE, StatusCodeInfo> =
  {
    [HTTP_500_NAME]: HTTP_500,
    [HTTP_501_NAME]: HTTP_501,
    [HTTP_502_NAME]: HTTP_502,
    [HTTP_503_NAME]: HTTP_503,
    [HTTP_504_NAME]: HTTP_504,
    [HTTP_505_NAME]: HTTP_505,
    [HTTP_506_NAME]: HTTP_506,
    [HTTP_507_NAME]: HTTP_507,
    [HTTP_508_NAME]: HTTP_508,
    [HTTP_510_NAME]: HTTP_510,
    [HTTP_511_NAME]: HTTP_511,
    [HTTP_599_NAME]: HTTP_599,
  } as const satisfies Record<string, StatusCodeInfo>;

/**
 * HTTP 5XX Record.
 * Represents a record of HTTP status codes in the 5XX range along with their corresponding status code information.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 */
export const HTTP_5XX_RECORD = {
  ...HTTP_5XX_CODE_RECORD,
  ...HTTP_5XX_NAME_RECORD,
} as const satisfies Record<
  number | string | HttpStatusCode | HttpStatusName,
  StatusCodeInfo
>;
