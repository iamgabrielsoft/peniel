

export enum PenielChatAssociationModel {
    ROOM = 'room',
    DISCUSSION = 'discussion',
    MESSAGE = 'message',
    LIVECHAT_MESSAGE = 'livechat-message',
    USER = 'user',
    FILE = 'file',
    MISC = 'misc',
}




export class PenielChatAssociationRecord {
    constructor(private model: PenielChatAssociationModel, private id: string) { }

    public getModel() {
        return this.model;
    }

    public getID() {
        return this.id;
    }
}