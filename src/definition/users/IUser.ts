import { IUserEmail } from "./IUserEmail";
import { UserType } from "./UserType";
import { UserStatusConnection } from "./UserStatusConnection";


export interface IUser {
    id: string; 
    username: string; 
    emails: Array<IUserEmail>; 
    type: UserType; 
    isEnabled: boolean; 
    name: string; 
    roles: Array<string>; 
    bio?: string; 
    status: string; 
    statusConnection: UserStatusConnection; 
    statusText?: string; 
    utcOffset: number; 
    createdAt: Date; 
    updatedAt: Date; 
    lastLoginAt: Date; 
    appId?: string; 
    customField?: { [key: string]: any}
}