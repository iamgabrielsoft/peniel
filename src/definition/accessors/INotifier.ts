import { IMessage } from "../messages/IMessage";
import { IUser } from "../users";
import { IRoom } from '../rooms'
import { IMessageBuilder } from './IMessageBuilder'





export enum TypingScope {
    Room = 'room'
}


export interface ITypingOptions {
    scope?: TypingScope, 

    id: string, 


    username?: string
}



export interface INotifier {
    notifyUser(user: IUser, message: IMessage): Promise<void>; 

    notifyRoom(room: IRoom, message: IMessage): Promise<void>;


    typing(options: ITypingOptions): Promise<() => Promise<void>>;

    getMessageBuilder(): IMessageBuilder; 
}