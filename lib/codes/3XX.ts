import {
  HttpStatusCode,
  HttpStatusName,
  StatusCodeInfo,
} from '../types/types.js';
import {
  HTTP_300,
  HTTP_300_CODE,
  HTTP_300_NAME,
  HTTP_301,
  HTTP_301_CODE,
  HTTP_301_NAME,
  HTTP_302,
  HTTP_302_CODE,
  HTTP_302_NAME,
  HTTP_303,
  HTTP_303_CODE,
  HTTP_303_NAME,
  HTTP_304,
  HTTP_304_CODE,
  HTTP_304_NAME,
  HTTP_305,
  HTTP_305_CODE,
  HTTP_305_NAME,
  HTTP_306,
  HTTP_306_CODE,
  HTTP_306_NAME,
  HTTP_307,
  HTTP_307_CODE,
  HTTP_307_NAME,
  HTTP_308,
  HTTP_308_CODE,
  HTTP_308_NAME,
} from './3XX-constants.js';

/**
 * Array of HTTP 3XX status codes.
 * @type {HTTP_3XX_CODE_TYPE[]}
 */
export const HTTP_3XX_CODES = [
  HTTP_300_CODE,
  HTTP_301_CODE,
  HTTP_302_CODE,
  HTTP_303_CODE,
  HTTP_304_CODE,
  HTTP_305_CODE,
  HTTP_306_CODE,
  HTTP_307_CODE,
  HTTP_308_CODE,
] as const satisfies number[];

/**
 * Array of HTTP 3XX status code names.
 * @type {HTTP_3XX_NAME_TYPE[]}
 * @remarks
 * The array contains the names of HTTP status codes in the 3XX range.
 */
export const HTTP_3XX_NAMES = [
  HTTP_300_NAME,
  HTTP_301_NAME,
  HTTP_302_NAME,
  HTTP_303_NAME,
  HTTP_304_NAME,
  HTTP_305_NAME,
  HTTP_306_NAME,
  HTTP_307_NAME,
  HTTP_308_NAME,
] as const satisfies string[];

/**
 * Represents the type of HTTP 3XX status codes.
 */
export type HTTP_3XX_CODE_TYPE = (typeof HTTP_3XX_CODES)[number];
/**
 * Represents the type of HTTP 3XX status code names.
 */
export type HTTP_3XX_NAME_TYPE = (typeof HTTP_3XX_NAMES)[number];

/**
 * HTTP 3XX Code Record.
 * Represents a record of HTTP 3XX status codes and their corresponding information.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 *
 */
export const HTTP_3XX_CODE_RECORD: Record<HTTP_3XX_CODE_TYPE, StatusCodeInfo> =
  {
    [HTTP_300_CODE]: HTTP_300,
    [HTTP_301_CODE]: HTTP_301,
    [HTTP_302_CODE]: HTTP_302,
    [HTTP_303_CODE]: HTTP_303,
    [HTTP_304_CODE]: HTTP_304,
    [HTTP_305_CODE]: HTTP_305,
    [HTTP_306_CODE]: HTTP_306,
    [HTTP_307_CODE]: HTTP_307,
    [HTTP_308_CODE]: HTTP_308,
  } as const satisfies Record<number, StatusCodeInfo>;

/**
 * HTTP 3XX Name Record.
 * Represents a record of HTTP 3XX status code names and their corresponding StatusCodeInfo objects.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 *
 */
export const HTTP_3XX_NAME_RECORD: Record<HTTP_3XX_NAME_TYPE, StatusCodeInfo> =
  {
    [HTTP_300_NAME]: HTTP_300,
    [HTTP_301_NAME]: HTTP_301,
    [HTTP_302_NAME]: HTTP_302,
    [HTTP_303_NAME]: HTTP_303,
    [HTTP_304_NAME]: HTTP_304,
    [HTTP_305_NAME]: HTTP_305,
    [HTTP_306_NAME]: HTTP_306,
    [HTTP_307_NAME]: HTTP_307,
    [HTTP_308_NAME]: HTTP_308,
  } as const satisfies Record<string, StatusCodeInfo>;

/**
 * HTTP 3XX record.
 * This record combines the HTTP 3XX code record and the HTTP 3XX name record.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 *
 */
export const HTTP_3XX_RECORD = {
  ...HTTP_3XX_CODE_RECORD,
  ...HTTP_3XX_NAME_RECORD,
} as const satisfies Record<
  number | string | HttpStatusCode | HttpStatusName,
  StatusCodeInfo
>;
