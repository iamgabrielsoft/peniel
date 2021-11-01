
import { AppStatus, } from './AppStatus'; 



export interface IApp {
    getName(): string; 

    getNameSlug():string

    getAppUsername(): string; 


    getID():string; 


    getVersion():string; 


    getDescription(): string; 


    getRequiredAppVersion():string; 


    getAuthorInfo():string; 


    getInfo(): IAppInfo; 


    getLogger(): ILogger; 

    getAccessors(): IAppAccessors
}