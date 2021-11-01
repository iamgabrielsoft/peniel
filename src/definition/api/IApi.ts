
import { ApiEndpoint} from './ApiEndpoint'
import { IApiEndpoint } from './IApiEndpoint'

export interface IApi {
    visibility: ApiVisibility;
    security: ApiSecurity; 
    endpoint: Array<ApiEndpoint | IApiEndpoint>;  
}


export enum ApiVisibility {
    PUBLIC, 
    PRIVATE
}


export enum ApiSecurity {
    UNSECURE, 
    /**
     * @param 'X-Auth-Token
     */

    //AUTH_TOKEN
    //CHECKSUM_SECRET
}