import { IMessage } from "../message/IMessage";


export interface IDiscussionBuilder {
    kind: RocketAssociationModel.DISCUSSION; 

    setParentRoom(parentRoom: IRoom): IDiscussionBuilder; 

    getParentRoom(): IRoom; 

    setParentMessage(parentMessage: IMessage); 

    getParentMessage(): IMessage; 

    setReply(reply: string): IDiscussionBuilder;

    getReply(): string; 
}