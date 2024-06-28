//#region 1XX
export * from "./1XX-constants.js"
import * as _1XX from "./1XX-constants.js"
import { HTTP_1XX_CODES, HTTP_1XX_RECORD } from "./1XX.js";
export { HTTP_1XX_CODES as HttpStatusCodes1XX  } from "./1XX.js";
export const HttpStatus1XX = {..._1XX, ...HTTP_1XX_RECORD} as const;
//#endregion 1XX

//#region 2XX
export * from "./2XX-constants.js"
import * as _2XX from "./2XX-constants.js"
import { HTTP_2XX_CODES, HTTP_2XX_RECORD } from "./2XX.js";
export { HTTP_2XX_CODES as HttpStatusCodes2XX  } from "./2XX.js";
export const HttpStatus2XX = {..._2XX, ...HTTP_2XX_RECORD} as const;
//#endregion 2XX

//#region 3XX
export * from "./3XX-constants.js"
import * as _3XX from "./3XX-constants.js"
import { HTTP_3XX_CODES, HTTP_3XX_RECORD } from "./3XX.js";
export { HTTP_3XX_CODES as HttpStatusCodes3XX  } from "./3XX.js";
export const HttpStatus3XX = {..._3XX, ...HTTP_3XX_RECORD} as const;
//#endregion 3XX

//#region 4XX
export * from "./4XX-constants.js"
import * as _4XX from "./4XX-constants.js"
import { HTTP_4XX_CODES, HTTP_4XX_RECORD } from "./4XX.js";
export { HTTP_4XX_CODES as HttpStatusCodes4XX  } from "./4XX.js";
export const HttpStatus4XX = {..._4XX, ...HTTP_4XX_RECORD} as const;
//#endregion 4XX

//#region 5XX
export * from "./5XX-constants.js"
import * as _5XX from "./5XX-constants.js"
import { HTTP_5XX_CODES, HTTP_5XX_RECORD } from "./5XX.js";
export { HTTP_5XX_CODES as HttpStatusCodes5XX } from "./5XX.js";
export const HttpStatus5XX = {..._5XX, ...HTTP_5XX_RECORD} as const;
//#endregion 5XX


//#region XXX
export const HttpStatus = {...HTTP_1XX_RECORD, ...HTTP_2XX_RECORD, ...HTTP_3XX_RECORD ,...HTTP_4XX_RECORD, ...HTTP_5XX_RECORD} as const;
export const HttpStatusCodes = {...HTTP_1XX_CODES, ...HTTP_2XX_CODES, ...HTTP_3XX_CODES, ...HTTP_4XX_CODES, ...HTTP_5XX_CODES} as const;
//#endregion XXX