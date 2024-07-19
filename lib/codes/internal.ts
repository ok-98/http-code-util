import {
  HttpStatusCode,
  httpStatusCodes,
  HttpStatusName,
  httpStatusNames,
} from '../http-code-util.ts';

const rawMap = httpStatusCodes.map((code, idx) => [code, httpStatusNames[idx]]);

export const codeToNameMapper = Object.fromEntries(rawMap) as Record<
  HttpStatusCode,
  HttpStatusName
> satisfies Record<number, string | undefined>;

export const nameToCodeMapper = Object.fromEntries(
  rawMap.map(([code, name]) => [name, code]),
) as Record<HttpStatusName, HttpStatusCode> satisfies Record<
  string,
  number | undefined
>;
