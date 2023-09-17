import IUser from "./IUser";
export default interface IMessage {
    activity?: any;
    application?: any;
    application_id?: string;
    attachments: any[];
    author: IUser;
    channel_id: string;
    components?: any[];
    content: string;
    edited_timestamp: string | null;
    embeds: any[];
    flags?: number;
    id: string;
    interaction?: any;
    mention_channels?: any[];
    mention_everyone: boolean;
    mention_roles: string[];
    mentions: IUser[];
    message_reference?: any;
    nonce?: number | string;
    pinned: boolean;
    position?: number;
    reactions?: any[];
    referenced_message?: any | null;
    role_subscription_data?: any;
    sticker_items?: any[];
    stickers?: any[];
    thread?: any;
    timestamp: string;
    tts: boolean;
    type: number;
    webhook_id?: string;
}
