import { IUser } from "../users";
import { IVisitor } from '../livechat/IVisitor'; 
import { ILivechatRoom } from '../livechat'; 




export interface ILivechatCreator {
    createRoom(visitor: IVisitor, agent: IUser): Promise<ILivechatRoom>; 

    createVisitor(visitor: IVisitor): Promise<string>; 

    createToken(): string
}