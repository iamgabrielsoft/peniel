

export interface IPostSentMessage {
    checkPostMessageSent? (message:IMessage, read: IRead, http: IHttp): Promise<boolean>; 


    executePostMessageSent(message: IMessage, read: IDBRequestReadyState, 
            http: IHttp, persistence: IPersistence, modify:IModify):Promise<void>; 
}