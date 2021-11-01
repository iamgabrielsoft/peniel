import { IRead, IModify, IHttp, IPersistence } from '../accessors'
import { IApiEndpointInfo } from "./IAppEndpointInfo";
import { IApiExample } from "./IAppExample";
import { IApiRequest } from "./IRequest";
import { IApiResponse } from './IResponse'


export interface IApiEndpoint {
    path: string; 
    examples?: {[key: string]: IApiExample}; 


    get?:(request: IApiRequest, endpoint: IApiEndpointInfo, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<IApiResponse>;
    post?:(request: IApiRequest, endpoint: IApiEndpointInfo, read: IRead,modify: IModify, http: IHttp, persis: IPersistence): Promise<IApiResponse> ;
    put?:(request: IApiRequest, endpoint: IApiEndpointInfo, read: IRead,modify: IModify, http: IHttp, persis: IPersistence): Promise<IApiResponse>;
    delete?(request: IApiRequest, endpoint: IApiEndpointInfo, read: IRead,modify: IModify, http: IHttp, persis: IPersistence): Promise<IApiResponse>;
    head?:(request: IApiRequest, endpoint: IApiEndpointInfo, read: IRead,modify: IModify, http: IHttp, persis: IPersistence): Promise<IApiResponse>;
    option?:(request: IApiRequest, endpoint: IApiEndpointInfo, read: IRead,modify: IModify, http: IHttp, persis: IPersistence): Promise<IApiResponse>;
    patch: IApiRequest, endpoint: IApiEndpointInfo, read: IRead,modify: IModify, http: IHttp, persis: IPersistence): Promise<IApiResponse>
}