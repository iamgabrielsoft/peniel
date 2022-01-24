

export interface IPostSentMessageUpdate {
    checkPostMessageUpdate? (message:IMessage, read: IRead, http: IHttp): Promise<boolean>; 


    executePostMessageUpdate(message: IMessage, read: IDBRequestReadyState, 
            http: IHttp, persistence: IPersistence, modify:IModify):Promise<void>; 
}