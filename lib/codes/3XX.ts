import { StatusCodeInfo } from '../types/types.js';
import {
  HTTP_300_CODE,
  HTTP_300_DESCRIPTION,
  HTTP_300_NAME,
  HTTP_301_CODE,
  HTTP_301_DESCRIPTION,
  HTTP_301_NAME,
  HTTP_302_CODE,
  HTTP_302_DESCRIPTION,
  HTTP_302_NAME,
  HTTP_303_CODE,
  HTTP_303_DESCRIPTION,
  HTTP_303_NAME,
  HTTP_304_CODE,
  HTTP_304_DESCRIPTION,
  HTTP_304_NAME,
  HTTP_305_CODE,
  HTTP_305_DESCRIPTION,
  HTTP_305_NAME,
  HTTP_306_CODE,
  HTTP_306_DESCRIPTION,
  HTTP_306_NAME,
  HTTP_307_CODE,
  HTTP_307_DESCRIPTION,
  HTTP_307_NAME,
  HTTP_308_CODE,
  HTTP_308_DESCRIPTION,
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
 */
const HTTP_3XX_CODE_RECORD: Record<HTTP_3XX_CODE_TYPE, StatusCodeInfo> = {
  [HTTP_300_CODE]: {
    code: HTTP_300_CODE,
    name: HTTP_300_NAME,
    description: HTTP_300_DESCRIPTION,
  },
  [HTTP_301_CODE]: {
    code: HTTP_301_CODE,
    name: HTTP_301_NAME,
    description: HTTP_301_DESCRIPTION,
  },
  [HTTP_302_CODE]: {
    code: HTTP_302_CODE,
    name: HTTP_302_NAME,
    description: HTTP_302_DESCRIPTION,
  },
  [HTTP_303_CODE]: {
    code: HTTP_303_CODE,
    name: HTTP_303_NAME,
    description: HTTP_303_DESCRIPTION,
  },
  [HTTP_304_CODE]: {
    code: HTTP_304_CODE,
    name: HTTP_304_NAME,
    description: HTTP_304_DESCRIPTION,
  },
  [HTTP_305_CODE]: {
    code: HTTP_305_CODE,
    name: HTTP_305_NAME,
    description: HTTP_305_DESCRIPTION,
  },
  [HTTP_306_CODE]: {
    code: HTTP_306_CODE,
    name: HTTP_306_NAME,
    description: HTTP_306_DESCRIPTION,
  },
  [HTTP_307_CODE]: {
    code: HTTP_307_CODE,
    name: HTTP_307_NAME,
    description: HTTP_307_DESCRIPTION,
  },
  [HTTP_308_CODE]: {
    code: HTTP_308_CODE,
    name: HTTP_308_NAME,
    description: HTTP_308_DESCRIPTION,
  },
} as const satisfies Record<number, StatusCodeInfo>;

/**
 * HTTP 3XX Name Record.
 * Represents a record of HTTP 3XX status code names and their corresponding StatusCodeInfo objects.
 */
const HTTP_3XX_NAME_RECORD: Record<HTTP_3XX_NAME_TYPE, StatusCodeInfo> = {
  [HTTP_300_NAME]: HTTP_3XX_CODE_RECORD[HTTP_300_CODE],
  [HTTP_301_NAME]: HTTP_3XX_CODE_RECORD[HTTP_301_CODE],
  [HTTP_302_NAME]: HTTP_3XX_CODE_RECORD[HTTP_302_CODE],
  [HTTP_303_NAME]: HTTP_3XX_CODE_RECORD[HTTP_303_CODE],
  [HTTP_304_NAME]: HTTP_3XX_CODE_RECORD[HTTP_304_CODE],
  [HTTP_305_NAME]: HTTP_3XX_CODE_RECORD[HTTP_305_CODE],
  [HTTP_306_NAME]: HTTP_3XX_CODE_RECORD[HTTP_306_CODE],
  [HTTP_307_NAME]: HTTP_3XX_CODE_RECORD[HTTP_307_CODE],
  [HTTP_308_NAME]: HTTP_3XX_CODE_RECORD[HTTP_308_CODE],
} as const satisfies Record<string, StatusCodeInfo>;

/**
 * HTTP 3XX record.
 * This record combines the HTTP 3XX code record and the HTTP 3XX name record.
 */
export const HTTP_3XX_RECORD = {
  ...HTTP_3XX_CODE_RECORD,
  ...HTTP_3XX_NAME_RECORD,
} as const satisfies Record<string | number, StatusCodeInfo>;
