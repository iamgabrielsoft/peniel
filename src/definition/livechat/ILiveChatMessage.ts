import { IMessage } from "../messages/IMessage";
import { IVisitor } from './IVisitor'


export interface ILiveChatMessage extends IMessage{
    visitor?:IVisitor; 
    token?:string
}