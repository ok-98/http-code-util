import type { Prettify } from 'only-utils';
import { HTTP_1XX_CODE_TYPE, HTTP_1XX_NAME_TYPE } from '../codes/1XX.ts';
import { HTTP_2XX_CODE_TYPE, HTTP_2XX_NAME_TYPE } from '../codes/2XX.ts';
import { HTTP_3XX_CODE_TYPE, HTTP_3XX_NAME_TYPE } from '../codes/3XX.ts';
import { HTTP_4XX_CODE_TYPE, HTTP_4XX_NAME_TYPE } from '../codes/4XX.ts';
import { HTTP_5XX_CODE_TYPE, HTTP_5XX_NAME_TYPE } from '../codes/5XX.ts';

/**
 * Represents information about an HTTP status code.
 */
export type StatusCodeInfo = {
  code: number;
  name: string;
  description: string;
};

/**
 * Represents an HTTP status code.
 */
export type HttpStatusCode = Prettify<
  | HTTP_1XX_CODE_TYPE
  | HTTP_2XX_CODE_TYPE
  | HTTP_3XX_CODE_TYPE
  | HTTP_4XX_CODE_TYPE
  | HTTP_5XX_CODE_TYPE
>;

/**
 * Represents an HTTP status name.
 */
export type HttpStatusName = Prettify<
  | HTTP_1XX_NAME_TYPE
  | HTTP_2XX_NAME_TYPE
  | HTTP_3XX_NAME_TYPE
  | HTTP_4XX_NAME_TYPE
  | HTTP_5XX_NAME_TYPE
>;
