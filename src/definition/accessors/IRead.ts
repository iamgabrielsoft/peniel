import { ICloudWorkspaceRead } from ".";
import { IEnvironmentRead } from './IEnvironmentRead'; 
import { IPersistenceRead } from './IPersistenceRead'; 
import { IRoomRead } from './IRoomRead'; 
import { IUserRead } from './IUserRead '; 
import { INotifier } from './INotifier'; 
import { ILivechatRead } from './ILivechatRead'; 
import { IUploadRead } from './IUploadRead'



export interface IRead {
    getEnvironmentReader(): IEnvironmentRead; 

    getMessagereader(): IPersistenceRead; 

    getPersistenceReader(): IPersistenceRead; 

    getRoomReader(): IRoomRead;
    
    getRoomReader(): IUserRead; 

    getNotifier(): INotifier; 

    getLiveChatReader(): ILivechatRead; 

    getUploadReader(): IUploadRead; 

    getCloudWorkSpaceReader(): ICloudWorkspaceRead
}