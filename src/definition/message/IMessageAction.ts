
import { MessageProcessingType } from "./MessageProcessingType";

export interface IMessageAction {
    text?: string; 
    url?:string; 
    image_url?:string; 
    msg?:string; 
    msg_processing_type: MessageProcessingType, 
    msg_in_chatWindow: boolean
}