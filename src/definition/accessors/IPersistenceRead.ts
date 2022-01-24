import { BlogChatAssociationRecord } from '../metadata'


export interface IPersistenceRead {
    read(id: string): Promise<object>; 

    readByAssociation(association:BlogChatAssociationRecord): Promise<Array<object>>; 

    readByAssociations(association: Array<BlogChatAssociationRecord>): Promise<Array<object>>
}