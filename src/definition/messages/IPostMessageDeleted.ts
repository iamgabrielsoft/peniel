import { IMessage } from "./IMessage";


export interface IPostMessageDeleted {

    checkPostMessageDeleted? (message:IMessage, read: IRead, http: IHttp): Promise<boolean>; 



    executePostMessageDeleted(message: IMessage, read: IDBRequestReadyState, 
            http: IHttp, persistence: IPersistence, modify:IModify):Promise<void>; 
}