import { IApiEndpoint, IApiEndpointMetadata } from "../api";
import { IRead, IHttp } from '../../definition/accessors'




export interface IAppAccessors {
    readonly environmentReader: IEnvironmentRead; 
    readonly render: IRead; 
    readonly http: IHttp; 
    readonly providedApiEndpoints: Array<IApiEndpointMetadata>; 
}