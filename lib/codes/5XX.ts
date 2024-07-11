import { StatusCodeInfo } from '../types/types.js';
import {
  HTTP_500_CODE,
  HTTP_500_DESCRIPTION,
  HTTP_500_NAME,
  HTTP_501_CODE,
  HTTP_501_DESCRIPTION,
  HTTP_501_NAME,
  HTTP_502_CODE,
  HTTP_502_DESCRIPTION,
  HTTP_502_NAME,
  HTTP_503_CODE,
  HTTP_503_DESCRIPTION,
  HTTP_503_NAME,
  HTTP_504_CODE,
  HTTP_504_DESCRIPTION,
  HTTP_504_NAME,
  HTTP_505_CODE,
  HTTP_505_DESCRIPTION,
  HTTP_505_NAME,
  HTTP_506_CODE,
  HTTP_506_DESCRIPTION,
  HTTP_506_NAME,
  HTTP_507_CODE,
  HTTP_507_DESCRIPTION,
  HTTP_507_NAME,
  HTTP_508_CODE,
  HTTP_508_DESCRIPTION,
  HTTP_508_NAME,
  HTTP_510_CODE,
  HTTP_510_DESCRIPTION,
  HTTP_510_NAME,
  HTTP_511_CODE,
  HTTP_511_DESCRIPTION,
  HTTP_511_NAME,
  HTTP_599_CODE,
  HTTP_599_DESCRIPTION,
  HTTP_599_NAME,
} from './5XX-constants.js';

/**
 * Array of HTTP status codes in the 5xx range.
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
const HTTP_5XX_CODE_RECORD: Record<HTTP_5XX_CODE_TYPE, StatusCodeInfo> = {
  [HTTP_500_CODE]: {
    code: HTTP_500_CODE,
    name: HTTP_500_NAME,
    description: HTTP_500_DESCRIPTION,
  },
  [HTTP_501_CODE]: {
    code: HTTP_501_CODE,
    name: HTTP_501_NAME,
    description: HTTP_501_DESCRIPTION,
  },
  [HTTP_502_CODE]: {
    code: HTTP_502_CODE,
    name: HTTP_502_NAME,
    description: HTTP_502_DESCRIPTION,
  },
  [HTTP_503_CODE]: {
    code: HTTP_503_CODE,
    name: HTTP_503_NAME,
    description: HTTP_503_DESCRIPTION,
  },
  [HTTP_504_CODE]: {
    code: HTTP_504_CODE,
    name: HTTP_504_NAME,
    description: HTTP_504_DESCRIPTION,
  },
  [HTTP_505_CODE]: {
    code: HTTP_505_CODE,
    name: HTTP_505_NAME,
    description: HTTP_505_DESCRIPTION,
  },
  [HTTP_506_CODE]: {
    code: HTTP_506_CODE,
    name: HTTP_506_NAME,
    description: HTTP_506_DESCRIPTION,
  },
  [HTTP_507_CODE]: {
    code: HTTP_507_CODE,
    name: HTTP_507_NAME,
    description: HTTP_507_DESCRIPTION,
  },
  [HTTP_508_CODE]: {
    code: HTTP_508_CODE,
    name: HTTP_508_NAME,
    description: HTTP_508_DESCRIPTION,
  },
  [HTTP_510_CODE]: {
    code: HTTP_510_CODE,
    name: HTTP_510_NAME,
    description: HTTP_510_DESCRIPTION,
  },
  [HTTP_511_CODE]: {
    code: HTTP_511_CODE,
    name: HTTP_511_NAME,
    description: HTTP_511_DESCRIPTION,
  },
  [HTTP_599_CODE]: {
    code: HTTP_599_CODE,
    name: HTTP_599_NAME,
    description: HTTP_599_DESCRIPTION,
  },
} as const satisfies Record<number, StatusCodeInfo>;

/**
 * HTTP_5XX_NAME_RECORD is a constant that represents a record of HTTP 5XX status code names and their corresponding StatusCodeInfo objects.
 * The keys of the record are the HTTP 5XX status code names, and the values are the corresponding StatusCodeInfo objects.
 */
const HTTP_5XX_NAME_RECORD: Record<HTTP_5XX_NAME_TYPE, StatusCodeInfo> = {
  [HTTP_500_NAME]: HTTP_5XX_CODE_RECORD[HTTP_500_CODE],
  [HTTP_501_NAME]: HTTP_5XX_CODE_RECORD[HTTP_501_CODE],
  [HTTP_502_NAME]: HTTP_5XX_CODE_RECORD[HTTP_502_CODE],
  [HTTP_503_NAME]: HTTP_5XX_CODE_RECORD[HTTP_503_CODE],
  [HTTP_504_NAME]: HTTP_5XX_CODE_RECORD[HTTP_504_CODE],
  [HTTP_505_NAME]: HTTP_5XX_CODE_RECORD[HTTP_505_CODE],
  [HTTP_506_NAME]: HTTP_5XX_CODE_RECORD[HTTP_506_CODE],
  [HTTP_507_NAME]: HTTP_5XX_CODE_RECORD[HTTP_507_CODE],
  [HTTP_508_NAME]: HTTP_5XX_CODE_RECORD[HTTP_508_CODE],
  [HTTP_510_NAME]: HTTP_5XX_CODE_RECORD[HTTP_510_CODE],
  [HTTP_511_NAME]: HTTP_5XX_CODE_RECORD[HTTP_511_CODE],
  [HTTP_599_NAME]: HTTP_5XX_CODE_RECORD[HTTP_599_CODE],
} as const satisfies Record<string, StatusCodeInfo>;

/**
 * HTTP 5XX Record.
 * Represents a record of HTTP status codes in the 5XX range along with their corresponding status code information.
 */
export const HTTP_5XX_RECORD = {
  ...HTTP_5XX_CODE_RECORD,
  ...HTTP_5XX_NAME_RECORD,
} as const satisfies Record<number | string, StatusCodeInfo>;
