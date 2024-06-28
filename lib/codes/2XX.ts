import { StatusCodeInfo } from "../types/types.js";
import { 
    HTTP_200_CODE, HTTP_200_DESCRIPTION, HTTP_200_NAME, 
    HTTP_201_CODE, HTTP_201_DESCRIPTION, HTTP_201_NAME, 
    HTTP_202_CODE, HTTP_202_DESCRIPTION, HTTP_202_NAME, 
    HTTP_203_CODE, HTTP_203_DESCRIPTION, HTTP_203_NAME, 
    HTTP_204_CODE, HTTP_204_DESCRIPTION, HTTP_204_NAME, 
    HTTP_205_CODE, HTTP_205_DESCRIPTION, HTTP_205_NAME, 
    HTTP_206_CODE, HTTP_206_DESCRIPTION, HTTP_206_NAME, 
    HTTP_207_CODE, HTTP_207_DESCRIPTION, HTTP_207_NAME, 
    HTTP_208_CODE, HTTP_208_DESCRIPTION, HTTP_208_NAME, 
    HTTP_226_CODE, HTTP_226_DESCRIPTION, HTTP_226_NAME 
} from "./2XX-constants.js";

export const HTTP_2XX_CODES = [
    HTTP_200_CODE, HTTP_201_CODE, HTTP_202_CODE, HTTP_203_CODE, 
    HTTP_204_CODE, HTTP_205_CODE, HTTP_206_CODE, HTTP_207_CODE, 
    HTTP_208_CODE, HTTP_226_CODE
] as const satisfies number[];

export type HTTP_2XX_TYPE = typeof HTTP_2XX_CODES[number];

export const HTTP_2XX_RECORD: Record<HTTP_2XX_TYPE, StatusCodeInfo> = {
    [HTTP_200_CODE]: {
        code: HTTP_200_CODE,
        name: HTTP_200_NAME,
        description: HTTP_200_DESCRIPTION,
    },
    [HTTP_201_CODE]: {
        code: HTTP_201_CODE,
        name: HTTP_201_NAME,
        description: HTTP_201_DESCRIPTION,
    },
    [HTTP_202_CODE]: {
        code: HTTP_202_CODE,
        name: HTTP_202_NAME,
        description: HTTP_202_DESCRIPTION,
    },
    [HTTP_203_CODE]: {
        code: HTTP_203_CODE,
        name: HTTP_203_NAME,
        description: HTTP_203_DESCRIPTION,
    },
    [HTTP_204_CODE]: {
        code: HTTP_204_CODE,
        name: HTTP_204_NAME,
        description: HTTP_204_DESCRIPTION,
    },
    [HTTP_205_CODE]: {
        code: HTTP_205_CODE,
        name: HTTP_205_NAME,
        description: HTTP_205_DESCRIPTION,
    },
    [HTTP_206_CODE]: {
        code: HTTP_206_CODE,
        name: HTTP_206_NAME,
        description: HTTP_206_DESCRIPTION,
    },
    [HTTP_207_CODE]: {
        code: HTTP_207_CODE,
        name: HTTP_207_NAME,
        description: HTTP_207_DESCRIPTION,
    },
    [HTTP_208_CODE]: {
        code: HTTP_208_CODE,
        name: HTTP_208_NAME,
        description: HTTP_208_DESCRIPTION,
    },
    [HTTP_226_CODE]: {
        code: HTTP_226_CODE,
        name: HTTP_226_NAME,
        description: HTTP_226_DESCRIPTION,
    }
} as const;
