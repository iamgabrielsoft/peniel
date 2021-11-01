
import { IApiExample } from './IAppExample'


export interface IApiEndpointMetadata {
    path: string; 
    computedPath: string; 
    methods: Array<string>; 
    examples?: {
        [key: string]: IApiExample 
    }
}