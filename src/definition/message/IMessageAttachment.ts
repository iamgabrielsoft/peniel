import { IMessageAction } from "./IMessageAction";
import { IMessageAttachmentAuthor } from "./IMessageAttachmentAuthor";
import { IMessageAttachmentField } from "./IMessageAttachmentField";
import { IMessageAttachmentTitle } from "./IMessageAttachmentTitle";



export interface IMessageAttachment {
    collapse?:boolean; 
    color?:string; 
    text?:string; 
    timestamp?: Date;
    thumbnail?: string; 
    author?: IMessageAttachmentAuthor; 
    title?:IMessageAttachmentTitle; 
    imageUrl?:string; 
    audioUrl?:string; 
    videoUrl?:string; 
    type?:string; 
    description?:string; 
    actions?:Array<IMessageAction>; 
    fields?: Array<IMessageAttachmentField>
}