


export interface IMessageReactions {
    [emoji: string] : Array<IMessageReaction>
}


export interface IMessageReaction {
    usernames?: Array<string>
}