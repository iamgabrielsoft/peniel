
import { IMessageAttachment } from "./IMessageAttachment";
import { IMessageReaction } from "./IMessageReaction";





export interface IMessage {
    id? : string; 
    room: IROOM, 
    text?:string; 
    avatarUrl?:string; 
    sender: IUser,
    editedAt?: string,
    attachment?: Array<IMessageAttachment>, 
    reaction?: IMessageReaction, 
    parseUrls?:boolean, 
    blocks?:Array<IBlock>, 
    customField?: { [key: string ]: any}
    alias?:string; 
    emoji?:string; 
}