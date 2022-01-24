
import { IRead } from './IRead'; 
import { IPersistence } from './IPersistence'


export interface IHttp {
    get(url:string, options?: IHttpRequest): Promise<IHttpResponse>; 

    post(url:string, options?: IHttpRequest): Promise<IHttpResponse>

    put(url: string, options?: IHttpRequest): Promise<IHttpResponse>; 

    del(url:string, options?: IHttpRequest): Promise<IHttpResponse>; 

    patch(url:string, options?: IHttpRequest): Promise<IHttpResponse>
}


export enum RequestMethod {
    GET = 'get', 
    POST = 'post', 
    PUT = 'put',
    DELETE = 'delete', 
    HEAD = 'head', 
    OPTIONS = 'options', 
    PATCH = 'patch' 
}


export interface IHttpRequest{
    content?:string, 
    data?:any, 
    query?:string, 
    params?: {
        [key: string]: string 
    }, 

    auth?: string,
    headers?: {
        [key: string]: string
    }, 

    timeout?: number, 



    encodin?: string | null, 

    strictSSL?: boolean, 

    rejectUnauthorized?: boolean 
}


export interface IHttpResponse {
    url: string, 
    method: RequestMethod, 
    statusCode: number, 
    headers?: {
        [key: string]: string
    }, 

    content?: string, 
    data?: any
}


export interface IHttpExtend {
    provideDefaultHeader(key: string, value: string): void; 

    provideDefaultHeaders(headers: { [key:string]: string}): void; 

    provideDefaultParam(key: string, value: string): void; 

    provideDefaultParams(params: { [key:string]: string }): void; 

    providePreRequestHandler(handler: IHttpPreRequestHandler): void; 

    providePreResponseHandler(handler: IHttpPreResponseHandler): void; 

    getDefaultHeaders():  Map<string, string>; 

    getDefaultParams(): Array<IHttpPreRequestHandler>; 

    getPreResponseHandlers(): Array<IHttpPreResponseHandler>; 

    rejectAuthorized?: boolean
}


export enum HttpStatusCode {
    OK = 200, 
    CREATED = 201, 
    ACCEPTED = 202, 
    CONTINUE =100, 
    RESET_CONTENT =205, 
    FOUND = 302, 
    CONFLICT = 409, 
    REQUEST_TIMEOUT = 408, 
    GATEWAY_TIMEOUT = 504, 
    HTTP_VERSION_NOT_SUPPORTED = 505, 
    TOO_MANY_REQUEST = 429,
    LENGTH_REQUESTED = 411, 
    PROXY_AUTHENTICATION_REQUIRED = 407, 
    GONE = 410, 
    NOT_FOUND = 404, 
    MOVED_PERMANENTLY = 301, 
    BAD_GATEWAY = 502, 
    SERVICE_UNAVAILABLE = 503, 
    INTERNAL_SERVER_ERROR = 500, 
    EXPECTATION_FAILED = 417
}



export interface IHttpPreResponseHandler{
    executePreHttpResponse(response: IHttpResponse, read: IRead, persistent: IPersistence): Promise<IHttpResponse>; 
}


export interface IHttpPreRequestHandler {
    executePreHttPRequest(url: string, request: IHttpRequest, read: IRead, persistent: IPersistence): Promise<IHttpRequest>
}