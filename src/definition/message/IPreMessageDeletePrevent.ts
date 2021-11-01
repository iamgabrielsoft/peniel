

export interface IPreMessageDeletedPrevent {
    checkPostMessageDeletePrevent? (message:IMessage, read: IRead, http: IHttp): Promise<boolean>; 


    executePostMessageDeletePrevent(message: IMessage, read: IDBRequestReadyState, 
            http: IHttp, persistence: IPersistence, modify:IModify):Promise<void>; 
}