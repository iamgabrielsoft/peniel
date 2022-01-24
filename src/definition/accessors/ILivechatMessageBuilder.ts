import { IMessageAttachment } from '../messages/IMessageAttachment';
import { PenielChatAssociationRecord } from '../metadata'
import { IUser } from '../users';
import { ILiveChatMessage } from '../livechat';
import { IRoom } from '../rooms';


export interface ILivechatMessageBuilder {
    kind: PenielChatAssociationRecord; 

    setData(message: ILiveChatMessage): ILivechatMessageBuilder; 

    setRoom(room: IRoom): ILivechatMessageBuilder;

    getRoom(): IRoom; 
 

    setSender(sender: IUser): ILivechatMessageBuilder; 

    getSender(): IUser; 

    setText(text: string): ILivechatMessageBuilder; 

    getText(): string; 

    setEmojiAvatar(emoji: string): ILivechatMessageBuilder; 

    getEmojiAvatar(): string; 

    setAvatarUrl(avatarUrl: string): ILivechatMessageBuilder; 

    getAvatarUrl():string; 

    setUsernameAlias(alias: string): ILivechatMessageBuilder; 

    getUsernameAlias():string; 

    ddAttachment(attachment: IMessageAttachment): ILivechatMessageBuilder;

    getAttachments():Array<IMessageAttachment>;
}