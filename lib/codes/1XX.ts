import { StatusCodeInfo } from '../types/types.js';
import {
  HTTP_100,
  HTTP_100_CODE,
  HTTP_100_NAME,
  HTTP_101_CODE,
  HTTP_101_DESCRIPTION,
  HTTP_101_NAME,
  HTTP_102_CODE,
  HTTP_102_DESCRIPTION,
  HTTP_102_NAME,
  HTTP_103_CODE,
  HTTP_103_DESCRIPTION,
  HTTP_103_NAME,
} from './1XX-constants.js';

/**
 * HTTP 1XX status codes.
 * @type {HTTP_1XX_CODE_TYPE[]}
 */
export const HTTP_1XX_CODES = [
  HTTP_100_CODE,
  HTTP_101_CODE,
  HTTP_102_CODE,
  HTTP_103_CODE,
] as const satisfies number[];
/**
 * Array of HTTP 1xx status code names.
 * @type {HTTP_1XX_NAME_TYPE[]}
 */
export const HTTP_1XX_NAMES = [
  HTTP_100_NAME,
  HTTP_101_NAME,
  HTTP_102_NAME,
  HTTP_103_NAME,
] as const satisfies string[];

/**
 * Represents a type for HTTP 1XX status codes.
 */
export type HTTP_1XX_CODE_TYPE = (typeof HTTP_1XX_CODES)[number];
/**
 * Represents the name of an HTTP 1XX status code.
 * @typedef {string} HTTP_1XX_NAME_TYPE
 */
export type HTTP_1XX_NAME_TYPE = (typeof HTTP_1XX_NAMES)[number];

/**
 * HTTP 1xx status code record.
 */
const HTTP_1XX_CODE_RECORD: Record<HTTP_1XX_CODE_TYPE, StatusCodeInfo> = {
  [HTTP_100_CODE]: HTTP_100,
  [HTTP_101_CODE]: {
    code: HTTP_101_CODE,
    name: HTTP_101_NAME,
    description: HTTP_101_DESCRIPTION,
  },
  [HTTP_102_CODE]: {
    code: HTTP_102_CODE,
    name: HTTP_102_NAME,
    description: HTTP_102_DESCRIPTION,
  },
  [HTTP_103_CODE]: {
    code: HTTP_103_CODE,
    name: HTTP_103_NAME,
    description: HTTP_103_DESCRIPTION,
  },
} as const satisfies Record<number, StatusCodeInfo>;

/**
 * HTTP 1XX Name Record.
 * Represents a record of HTTP 1XX status code names and their corresponding status code information.
 */
const HTTP_1XX_NAME_RECORD: Record<HTTP_1XX_NAME_TYPE, StatusCodeInfo> = {
  [HTTP_100_NAME]: HTTP_1XX_CODE_RECORD[HTTP_100_CODE],
  [HTTP_101_NAME]: HTTP_1XX_CODE_RECORD[HTTP_101_CODE],
  [HTTP_102_NAME]: HTTP_1XX_CODE_RECORD[HTTP_102_CODE],
  [HTTP_103_NAME]: HTTP_1XX_CODE_RECORD[HTTP_103_CODE],
} as const satisfies Record<string, StatusCodeInfo>;

/**
 * HTTP 1XX status code record.
 * Contains the mapping of HTTP 1XX status codes to their corresponding names.
 */
export const HTTP_1XX_RECORD = {
  ...HTTP_1XX_CODE_RECORD,
  ...HTTP_1XX_NAME_RECORD,
} as const satisfies Record<number | string, StatusCodeInfo>;
