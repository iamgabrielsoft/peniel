
import { HttpStatusCode } from '../accessors'
import { IApiEndpoint } from './IApiEndpoint'
import { IApiResponse, IApiResponseJSON  } from './IResponse'
import { IApp } from './IApi'



export abstract class ApiEndpoint implements IApiEndpoint {
    public path: string; 
    constructor(public app: IApp){}; 
    protected success(content?: any):IApiResponse {
        return {
            status: HttpStatusCode.OK, 
            content
        }
    }

    protected json(response: IApiResponseJSON): IApiResponse {
        if(!response.headers || !response.headers['content-type']){
            response.headers = response.headers || {}; 
            response.headers['content-type'] = 'application/json'; 
        }

        return response; 
    }
}