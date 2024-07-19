import {
  HttpStatusCode,
  HttpStatusName,
  StatusCodeInfo,
} from '../types/types.js';
import {
  HTTP_400,
  HTTP_400_CODE,
  HTTP_400_NAME,
  HTTP_401,
  HTTP_401_CODE,
  HTTP_401_NAME,
  HTTP_402,
  HTTP_402_CODE,
  HTTP_402_NAME,
  HTTP_403,
  HTTP_403_CODE,
  HTTP_403_NAME,
  HTTP_404,
  HTTP_404_CODE,
  HTTP_404_NAME,
  HTTP_405,
  HTTP_405_CODE,
  HTTP_405_NAME,
  HTTP_406,
  HTTP_406_CODE,
  HTTP_406_NAME,
  HTTP_407,
  HTTP_407_CODE,
  HTTP_407_NAME,
  HTTP_408,
  HTTP_408_CODE,
  HTTP_408_NAME,
  HTTP_409,
  HTTP_409_CODE,
  HTTP_409_NAME,
  HTTP_410,
  HTTP_410_CODE,
  HTTP_410_NAME,
  HTTP_411,
  HTTP_411_CODE,
  HTTP_411_NAME,
  HTTP_412,
  HTTP_412_CODE,
  HTTP_412_NAME,
  HTTP_413,
  HTTP_413_CODE,
  HTTP_413_NAME,
  HTTP_414,
  HTTP_414_CODE,
  HTTP_414_NAME,
  HTTP_415,
  HTTP_415_CODE,
  HTTP_415_NAME,
  HTTP_416,
  HTTP_416_CODE,
  HTTP_416_NAME,
  HTTP_417,
  HTTP_417_CODE,
  HTTP_417_NAME,
  HTTP_418,
  HTTP_418_CODE,
  HTTP_418_NAME,
  HTTP_421,
  HTTP_421_CODE,
  HTTP_421_NAME,
  HTTP_422,
  HTTP_422_CODE,
  HTTP_422_NAME,
  HTTP_423,
  HTTP_423_CODE,
  HTTP_423_NAME,
  HTTP_424,
  HTTP_424_CODE,
  HTTP_424_NAME,
  HTTP_425,
  HTTP_425_CODE,
  HTTP_425_NAME,
  HTTP_426,
  HTTP_426_CODE,
  HTTP_426_NAME,
  HTTP_428,
  HTTP_428_CODE,
  HTTP_428_NAME,
  HTTP_429,
  HTTP_429_CODE,
  HTTP_429_NAME,
  HTTP_431,
  HTTP_431_CODE,
  HTTP_431_NAME,
  HTTP_444,
  HTTP_444_CODE,
  HTTP_444_NAME,
  HTTP_449,
  HTTP_449_CODE,
  HTTP_449_NAME,
  HTTP_450,
  HTTP_450_CODE,
  HTTP_450_NAME,
  HTTP_451,
  HTTP_451_CODE,
  HTTP_451_NAME,
  HTTP_499,
  HTTP_499_CODE,
  HTTP_499_NAME,
} from './4XX-constants.js';

/**
 * Array of HTTP 4XX status codes.
 * @type {HTTP_4XX_CODE_TYPE[]}
 */
export const HTTP_4XX_CODES = [
  HTTP_400_CODE,
  HTTP_401_CODE,
  HTTP_402_CODE,
  HTTP_403_CODE,
  HTTP_404_CODE,
  HTTP_405_CODE,
  HTTP_406_CODE,
  HTTP_407_CODE,
  HTTP_408_CODE,
  HTTP_409_CODE,
  HTTP_410_CODE,
  HTTP_411_CODE,
  HTTP_412_CODE,
  HTTP_413_CODE,
  HTTP_414_CODE,
  HTTP_415_CODE,
  HTTP_416_CODE,
  HTTP_417_CODE,
  HTTP_418_CODE,
  HTTP_421_CODE,
  HTTP_422_CODE,
  HTTP_423_CODE,
  HTTP_424_CODE,
  HTTP_425_CODE,
  HTTP_426_CODE,
  HTTP_428_CODE,
  HTTP_429_CODE,
  HTTP_431_CODE,
  HTTP_444_CODE,
  HTTP_449_CODE,
  HTTP_450_CODE,
  HTTP_451_CODE,
  HTTP_499_CODE,
] as const satisfies number[];

/**
 * Array of HTTP 4XX status names.
 * @type {HTTP_4XX_NAME_TYPE[]}
 */
export const HTTP_4XX_NAMES = [
  HTTP_400_NAME,
  HTTP_401_NAME,
  HTTP_402_NAME,
  HTTP_403_NAME,
  HTTP_404_NAME,
  HTTP_405_NAME,
  HTTP_406_NAME,
  HTTP_407_NAME,
  HTTP_408_NAME,
  HTTP_409_NAME,
  HTTP_410_NAME,
  HTTP_411_NAME,
  HTTP_412_NAME,
  HTTP_413_NAME,
  HTTP_414_NAME,
  HTTP_415_NAME,
  HTTP_416_NAME,
  HTTP_417_NAME,
  HTTP_418_NAME,
  HTTP_421_NAME,
  HTTP_422_NAME,
  HTTP_423_NAME,
  HTTP_424_NAME,
  HTTP_425_NAME,
  HTTP_426_NAME,
  HTTP_428_NAME,
  HTTP_429_NAME,
  HTTP_431_NAME,
  HTTP_444_NAME,
  HTTP_449_NAME,
  HTTP_450_NAME,
  HTTP_451_NAME,
  HTTP_499_NAME,
] as const satisfies string[];

/**
 * Represents the type of HTTP 4XX status codes.
 */
export type HTTP_4XX_CODE_TYPE = (typeof HTTP_4XX_CODES)[number];

/**
 * Represents the type of HTTP 4XX status code names.
 */
export type HTTP_4XX_NAME_TYPE = (typeof HTTP_4XX_NAMES)[number];

/**
 * HTTP 4XX Code Record.
 * Represents a record of HTTP status codes in the 4XX range along with their corresponding information.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 */
export const HTTP_4XX_CODE_RECORD: Record<HTTP_4XX_CODE_TYPE, StatusCodeInfo> =
  {
    [HTTP_400_CODE]: HTTP_400,
    [HTTP_401_CODE]: HTTP_401,
    [HTTP_402_CODE]: HTTP_402,
    [HTTP_403_CODE]: HTTP_403,
    [HTTP_404_CODE]: HTTP_404,
    [HTTP_405_CODE]: HTTP_405,
    [HTTP_406_CODE]: HTTP_406,
    [HTTP_407_CODE]: HTTP_407,
    [HTTP_408_CODE]: HTTP_408,
    [HTTP_409_CODE]: HTTP_409,
    [HTTP_410_CODE]: HTTP_410,
    [HTTP_411_CODE]: HTTP_411,
    [HTTP_412_CODE]: HTTP_412,
    [HTTP_413_CODE]: HTTP_413,
    [HTTP_414_CODE]: HTTP_414,
    [HTTP_415_CODE]: HTTP_415,
    [HTTP_416_CODE]: HTTP_416,
    [HTTP_417_CODE]: HTTP_417,
    [HTTP_418_CODE]: HTTP_418,
    [HTTP_421_CODE]: HTTP_421,
    [HTTP_422_CODE]: HTTP_422,
    [HTTP_423_CODE]: HTTP_423,
    [HTTP_424_CODE]: HTTP_424,
    [HTTP_425_CODE]: HTTP_425,
    [HTTP_426_CODE]: HTTP_426,
    [HTTP_428_CODE]: HTTP_428,
    [HTTP_429_CODE]: HTTP_429,
    [HTTP_431_CODE]: HTTP_431,
    [HTTP_444_CODE]: HTTP_444,
    [HTTP_449_CODE]: HTTP_449,
    [HTTP_450_CODE]: HTTP_450,
    [HTTP_451_CODE]: HTTP_451,
    [HTTP_499_CODE]: HTTP_499,
  } as const satisfies Record<number, StatusCodeInfo>;

/**
 * HTTP 4XX Name Record.
 * Represents a record of HTTP status code names for 4XX status codes.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 *
 */
export const HTTP_4XX_NAME_RECORD: Record<HTTP_4XX_NAME_TYPE, StatusCodeInfo> =
  {
    [HTTP_400_NAME]: HTTP_400,
    [HTTP_401_NAME]: HTTP_401,
    [HTTP_402_NAME]: HTTP_402,
    [HTTP_403_NAME]: HTTP_403,
    [HTTP_404_NAME]: HTTP_404,
    [HTTP_405_NAME]: HTTP_405,
    [HTTP_406_NAME]: HTTP_406,
    [HTTP_407_NAME]: HTTP_407,
    [HTTP_408_NAME]: HTTP_408,
    [HTTP_409_NAME]: HTTP_409,
    [HTTP_410_NAME]: HTTP_410,
    [HTTP_411_NAME]: HTTP_411,
    [HTTP_412_NAME]: HTTP_412,
    [HTTP_413_NAME]: HTTP_413,
    [HTTP_414_NAME]: HTTP_414,
    [HTTP_415_NAME]: HTTP_415,
    [HTTP_416_NAME]: HTTP_416,
    [HTTP_417_NAME]: HTTP_417,
    [HTTP_418_NAME]: HTTP_418,
    [HTTP_421_NAME]: HTTP_421,
    [HTTP_422_NAME]: HTTP_422,
    [HTTP_423_NAME]: HTTP_423,
    [HTTP_424_NAME]: HTTP_424,
    [HTTP_425_NAME]: HTTP_425,
    [HTTP_426_NAME]: HTTP_426,
    [HTTP_428_NAME]: HTTP_428,
    [HTTP_429_NAME]: HTTP_429,
    [HTTP_431_NAME]: HTTP_431,
    [HTTP_444_NAME]: HTTP_444,
    [HTTP_449_NAME]: HTTP_449,
    [HTTP_450_NAME]: HTTP_450,
    [HTTP_451_NAME]: HTTP_451,
    [HTTP_499_NAME]: HTTP_499,
  } as const satisfies Record<string, StatusCodeInfo>;

/**
 * Represents the HTTP 4XX status code record.
 * This record includes both the HTTP 4XX code and its corresponding name.
 *
 * 🍃 impacts tree-shaking of this module! only use when really needed!
 *
 */
export const HTTP_4XX_RECORD = {
  ...HTTP_4XX_CODE_RECORD,
  ...HTTP_4XX_NAME_RECORD,
} as const satisfies Record<
  number | string | HttpStatusCode | HttpStatusName,
  StatusCodeInfo
>;
