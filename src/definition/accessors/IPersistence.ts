
import { BlogChatAssociationRecord } from '../metadata'

export interface IPersistence {

    create(data: object): Promise<string>; 

    createWithAssociation(data:object, association: Array<BlogChatAssociationRecord>): Promise<string>; 

    update(id:string, data: object, upsert?:boolean): Promise<string>; 

    updateByAssociation(association: BlogChatAssociationRecord, data: object, upsert?:boolean): Promise<string>; 

    remove(id:string): Promise<object>; 

    removeByAssociation(association:BlogChatAssociationRecord): Promise<Array<object>>

    removeByAssociations(association: Array<BlogChatAssociationRecord>): Promise<Array<object>>
}