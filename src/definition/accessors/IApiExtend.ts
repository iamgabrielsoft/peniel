
import { IApi } from '../api'


export interface IApiExtend {
    protected(api: IApi): Promise<void>; 
}