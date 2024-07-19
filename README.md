# http-code-util

Constants enumerating the HTTP status codes.

All status codes defined in RFC1945 (HTTP/1.0), RFC2616 (HTTP/1.1), RFC2518 (WebDAV), RFC6585 (Additional HTTP Status Codes), and RFC7538 (Permanent Redirect) are supported.

## Installation

```console
npm install http-code-util --save
```

## Usage (express 4.x)

```typescript
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from 'http-code-util';

response.status(StatusCodes.OK).send(ReasonPhrases.OK);

response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
  error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
});

response.status(getStatusCode('Internal Server Error')).send({
  error: 'Internal Server Error',
});
```

## Codes

<!--codetable:start-->
|Code|Constant|Reason Phrase|Explenation|
|---|---|---|---|
|100|CONTINUE|Continue|The server has received the request headers, and the client should proceed to send the request body.|
|101|SWITCHING_PROTOCOLS|Switching Protocols|The requester has asked the server to switch protocols, and the server has agreed to do so.|
|102|PROCESSING|Processing|(WebDAV) The server has received and is processing the request, but no response is available yet.|
|103|EARLY_HINTS|Early Hints|Used to return some response headers before final HTTP message.|
|200|OK|OK|The request has succeeded.|
|201|CREATED|Created|The request has been fulfilled, resulting in the creation of a new resource.|
|202|ACCEPTED|Accepted|The request has been accepted for processing, but the processing has not been completed.|
|203|NON_AUTHORITATIVE_INFORMATION|Non-Authoritative Information|The request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response.|
|204|NO_CONTENT|No Content|The server successfully processed the request, and is not returning any content.|
|205|RESET_CONTENT|Reset Content|The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.|
|206|PARTIAL_CONTENT|Partial Content|The server is delivering only part of the resource (byte serving) due to a range header sent by the client.|
|207|MULTI_STATUS|Multi-Status|(WebDAV) The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.|
|208|ALREADY_REPORTED|Already Reported|(WebDAV) The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.|
|226|IM_USED|IM Used|The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.|
|300|MULTIPLE_CHOICES|Multiple Choices|The request has more than one possible response. The user-agent or user should choose one of them.|
|301|MOVED_PERMANENTLY|Moved Permanently|The URL of the requested resource has been changed permanently. The new URL is given in the response.|
|302|FOUND|Found|The URL of the requested resource has been changed temporarily. The new URL is given in the response.|
|303|SEE_OTHER|See Other|The response to the request can be found under another URL using a GET method.|
|304|NOT_MODIFIED|Not Modified|Indicates that the resource has not been modified since the version specified by the request headers.|
|305|USE_PROXY|Use Proxy|The requested resource is only available through a proxy, the address for which is provided in the response.|
|306|SWITCH_PROXY|Switch Proxy|No longer used. Originally meant "Subsequent requests should use the specified proxy."|
|307|TEMPORARY_REDIRECT|Temporary Redirect|The URL of the requested resource has been changed temporarily. The new URL is given in the response. The request method should not be changed when reissuing the original request.|
|308|PERMANENT_REDIRECT|Permanent Redirect|The URL of the requested resource has been changed permanently. The new URL is given in the response. The request method should not be changed when reissuing the original request.|
|400|BAD_REQUEST|Bad Request|The server could not understand the request due to invalid syntax.|
|401|UNAUTHORIZED|Unauthorized|The client must authenticate itself to get the requested response.|
|402|PAYMENT_REQUIRED|Payment Required|This response code is reserved for future use.|
|403|FORBIDDEN|Forbidden|The client does not have access rights to the content.|
|404|NOT_FOUND|Not Found|The server can not find the requested resource.|
|405|METHOD_NOT_ALLOWED|Method Not Allowed|The request method is known by the server but has been disabled and cannot be used.|
|406|NOT_ACCEPTABLE|Not Acceptable|The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers.|
|407|PROXY_AUTHENTICATION_REQUIRED|Proxy Authentication Required|The client must first authenticate itself with the proxy.|
|408|REQUEST_TIMEOUT|Request Timeout|The server would like to shut down this unused connection.|
|409|CONFLICT|Conflict|The request could not be completed due to a conflict with the current state of the target resource.|
|410|GONE|Gone|The content has been permanently deleted from server, with no forwarding address.|
|411|LENGTH_REQUIRED|Length Required|The server refuses to accept the request without a defined Content-Length header.|
|412|PRECONDITION_FAILED|Precondition Failed|The client has indicated preconditions in its headers which the server does not meet.|
|413|PAYLOAD_TOO_LARGE|Payload Too Large|Request entity is larger than limits defined by server.|
|414|URI_TOO_LONG|URI Too Long|The URI requested by the client is longer than the server is willing to interpret.|
|415|UNSUPPORTED_MEDIA_TYPE|Unsupported Media Type|The media format of the requested data is not supported by the server.|
|416|RANGE_NOT_SATISFIABLE|Range Not Satisfiable|The range specified by the Range header field in the request can't be fulfilled.|
|417|EXPECTATION_FAILED|Expectation Failed|The expectation indicated by the Expect request header field can't be met by the server.|
|418|IM_A_TEAPOT|I'm a teapot|Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot".|
|421|MISDIRECTED_REQUEST|Misdirected Request|The request was directed at a server that is not able to produce a response.|
|422|UNPROCESSABLE_ENTITY|Unprocessable Entity|(WebDAV) The request was well-formed but was unable to be followed due to semantic errors.|
|423|LOCKED|Locked|(WebDAV) The resource that is being accessed is locked.|
|424|FAILED_DEPENDENCY|Failed Dependency|(WebDAV) The request failed due to failure of a previous request.|
|425|TOO_EARLY|Too Early|Indicates that the server is unwilling to risk processing a request that might be replayed.|
|426|UPGRADE_REQUIRED|Upgrade Required|The client should switch to a different protocol such as TLS/1.0.|
|428|PRECONDITION_REQUIRED|Precondition Required|The origin server requires the request to be conditional.|
|429|TOO_MANY_REQUESTS|Too Many Requests|The user has sent too many requests in a given amount of time ("rate limiting").|
|431|REQUEST_HEADER_FIELDS_TOO_LARGE|Request Header Fields Too Large|The server is unwilling to process the request because its header fields are too large.|
|444|CONNECTION_CLOSED_WITHOUT_RESPONSE|Connection Closed Without Response|The server closed the connection without sending any response to the client.|
|449|RETRY_WITH|Retry With|The server cannot honour the request because the user has not provided the required information.|
|450|BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS|Blocked by Windows Parental Controls|The request was blocked by Windows Parental Controls.|
|451|UNAVAILABLE_FOR_LEGAL_REASONS|Unavailable For Legal Reasons|The user requests an illegal resource, such as a web page censored by a government.|
|499|CLIENT_CLOSED_REQUEST|Client Closed Request|The client has closed the request before the server could send a response.|
|500|INTERNAL_SERVER_ERROR|Internal Server Error|The server has encountered a situation it doesn't know how to handle.|
|501|NOT_IMPLEMENTED|Not Implemented|The request method is not supported by the server and cannot be handled.|
|502|BAD_GATEWAY|Bad Gateway|The server, while acting as a gateway or proxy, received an invalid response from the upstream server.|
|503|SERVICE_UNAVAILABLE|Service Unavailable|The server is not ready to handle the request.|
|504|GATEWAY_TIMEOUT|Gateway Timeout|The server, while acting as a gateway or proxy, did not get a response in time from the upstream server.|
|505|HTTP_VERSION_NOT_SUPPORTED|HTTP Version Not Supported|The HTTP version used in the request is not supported by the server.|
|506|VARIANT_ALSO_NEGOTIATES|Variant Also Negotiates|The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.|
|507|INSUFFICIENT_STORAGE|Insufficient Storage|(WebDAV) The server is unable to store the representation needed to complete the request.|
|508|LOOP_DETECTED|Loop Detected|(WebDAV) The server detected an infinite loop while processing the request.|
|510|NOT_EXTENDED|Not Extended|Further extensions to the request are required for the server to fulfill it.|
|511|NETWORK_AUTHENTICATION_REQUIRED|Network Authentication Required|The client needs to authenticate to gain network access.|
|599|NETWORK_CONNECT_TIMEOUT_ERROR|Network Connect Timeout Error|The network connection has timed out.|
<!--codetable:end-->

## Additional Usage Examples

All constants can also be accessed directly

```typescript
import { HTTP_200_CODE, HTTP_200_NAME } from 'http-code-util';

response.status(HTTP_200_CODE).send(HTTP_200_NAME);
```

## Helper Functions

| Function                         | Description                                                                                                | Affects bundle size |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------- | :-----------------: |
| `getStatusCode(phrase)`          | Returns the corresponding HTTP status code, or undefined if not found.                                     |         🟡          |
| `getReasonphrase(code)`          | Returns the corresponding HTTP status phrase, or undefined if not found.                                   |         🟡          |
| `getDescription(code)`           | Returns the corresponding HTTP status description, or undefined if not found.                              |         🔴          |
| `getStatusInfo(code)`            | Returns an object o the corresponding HTTP status code, phrase and description, or undefined if not found. |         🔴          |
| `isSuccess(code)`                | Returns `true` if the HTTP code is a success code (between 200 and 299).                                   |         🟢          |
| `isRedirect(code)`               | Returns `true` if the HTTP code is a redirect code (between 300 and 399).                                  |         🟢          |
| `isInformational(code)`          | Returns `true` if the HTTP code is an informational code (between 100 and 199).                            |         🟢          |
| `isClientError(code)`            | Returns `true` if the HTTP code is a client error code (between 400 and 499).                              |         🟢          |
| `isServerError(code)`            | Returns `true` if the HTTP code is a server error code (between 500 and 599).                              |         🟢          |
| `isOk(code)`                     | Returns `true` if the HTTP code is 200 (OK).                                                               |         🟢          |
| `isError(code)`                  | Returns `true` if the HTTP code is a client or server error code.                                          |         🟢          |
| `hasContent(code)`               | Returns `true` if the HTTP code has content (not 204, 205, 304, or an error).                              |         🟢          |
| `isInformationalOrSuccess(code)` | Returns `true` if the HTTP code is informational or a success code.                                        |         🟢          |
| `isValid(code)`                  | Returns `true` if the HTTP code is a known HTTP code code.                                                 |         🟡          |

### Treeshaking and bundlesize legend

| Color | Treeshaking impact                                                    | Impact on bundle size |
| :---: | --------------------------------------------------------------------- | --------------------- |
|  🟢   | No or only specific code constants will get bundled.                  | almost none           |
|  🟡   | All status codes and status phrases get bundled.                      | small                 |
|  🔴   | All status codes, status phrases and status descriptions get bundled. | big                   |

### Usage Examples

```typescript
import {
  isSuccess,
  isRedirect,
  isInformational,
  isClientError,
  isServerError,
  isOk,
  isError,
  hasContent,
  isInformationalOrSuccess,
  isValid,
} from 'http-code-util';

console.log(isSuccess(200)); // true
console.log(isRedirect(302)); // true
console.log(isInformational(100)); // true
console.log(isClientError(404)); // true
console.log(isServerError(500)); // true
console.log(isOk(200)); // true
console.log(isError(404)); // true
console.log(hasContent(200)); // true
console.log(isInformationalOrSuccess(200)); // true
console.log(isValid(200)); // true
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
