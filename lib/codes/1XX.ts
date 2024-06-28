import { StatusCodeInfo } from "../types/types.js";
import { HTTP_100_CODE, HTTP_100_DESCRIPTION, HTTP_100_NAME, HTTP_101_CODE, HTTP_101_DESCRIPTION, HTTP_101_NAME, HTTP_102_CODE, HTTP_102_DESCRIPTION, HTTP_102_NAME, HTTP_103_CODE, HTTP_103_DESCRIPTION, HTTP_103_NAME } from "./1XX-constants.js";

export const HTTP_1XX_CODES = [HTTP_100_CODE, HTTP_101_CODE, HTTP_102_CODE, HTTP_103_CODE] as const satisfies number[];

export type HTTP_1XX_TYPE = typeof HTTP_1XX_CODES[number];

export const HTTP_1XX_RECORD: Record<HTTP_1XX_TYPE, StatusCodeInfo> = {
    [HTTP_100_CODE]: {
        code: HTTP_100_CODE,
        name: HTTP_100_NAME,
        description: HTTP_100_DESCRIPTION,
    },
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
    }
} as const;