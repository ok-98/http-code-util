import { HTTP_1XX_CODE_TYPE } from "../codes/1XX.ts"
import { HTTP_2XX_CODE_TYPE } from "../codes/2XX.ts";
import { HTTP_3XX_CODE_TYPE } from "../codes/3XX.ts";
import { HTTP_4XX_CODE_TYPE } from "../codes/4XX.ts";
import { HTTP_5XX_CODE_TYPE } from "../codes/5XX.ts";
import type {Prettify} from "only-utils"

/**
 * Represents information about an HTTP status code.
 */
export type StatusCodeInfo = {
    code: number,
    name: string,
    description: string,
}

/**
 * Represents an HTTP status code.
 */
export type HttpStatusCode = Prettify<HTTP_1XX_CODE_TYPE | HTTP_2XX_CODE_TYPE | HTTP_3XX_CODE_TYPE| HTTP_4XX_CODE_TYPE | HTTP_5XX_CODE_TYPE>;
