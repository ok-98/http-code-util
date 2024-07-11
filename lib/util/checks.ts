import { and, not, or, SimpleFunction } from 'only-utils';
import {
  HTTP_100_CODE,
  HTTP_200_CODE,
  HTTP_204_CODE,
  HTTP_205_CODE,
  HTTP_300_CODE,
  HTTP_304_CODE,
  HTTP_400_CODE,
  HTTP_500_CODE,
  HttpStatusCode,
  HttpStatusCodes,
} from '../http-code-util.ts';

type HttpCode = HttpStatusCode | number;

export const isSuccess = /* #__PURE__ */ (code: HttpCode) =>
  code >= HTTP_200_CODE && code < HTTP_300_CODE;

export const isRedirect = /* #__PURE__ */ (code: HttpCode) =>
  code >= HTTP_300_CODE && code < HTTP_400_CODE;

export const isInformational = /* #__PURE__ */ (code: HttpCode) =>
  code >= HTTP_100_CODE && code < HTTP_200_CODE;

export const isClientError = /* #__PURE__ */ (code: HttpCode) =>
  code >= HTTP_400_CODE && code < HTTP_500_CODE;

export const isServerError = /* #__PURE__ */ (code: HttpCode) =>
  code >= HTTP_500_CODE && code < 600;

export const isOk = /* #__PURE__ */ (code: HttpCode) => code === HTTP_200_CODE;

export const isError = /* #__PURE__ */ or(
  isClientError,
  isServerError,
) as SimpleFunction<HttpCode, boolean>;

const eq =
  <T>(other: T) =>
  (value: T) =>
    other === value;

const notEq = not(eq);

export const hasContent = /* #__PURE__ */ and(
  notEq(HTTP_204_CODE),
  notEq(HTTP_205_CODE),
  notEq(HTTP_304_CODE),
  not(isError),
) as SimpleFunction<HttpCode, boolean>;

export const isInformationalOrSuccess = /* #__PURE__ */ or(
  isInformational,
  isSuccess,
) as SimpleFunction<HttpCode, boolean>;

export const isValid = /* #__PURE__ */ (code: HttpCode) =>
  HttpStatusCodes.includes(code as (typeof HttpStatusCodes)[number]);
