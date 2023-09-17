import IMessage from "../interfaces/IMessage";
import User from "./User";
/**
 * Represents a message on discord
 */
export default class Message {
    /**
     * Sent with Rich Presence-related chat embeds
     */
    activity: any | null;
    /**
     * 	Sent with Rich Presence-related chat embeds
     */
    application: any | null;
    /**
     * 	If the message is an Interaction or application-owned webhook, this is the id of the application
     */
    applicationId: string | null;
    /**
     * An array of attachments (e.g., files, images) sent with the message.
     */
    attachments: any[];
    /**
     * The user who sent the message.
     */
    author: User;
    /**
     * The unique identifier of the channel where the message was sent.
     */
    channelId: string;
    /**
     * Components of the message, if any (e.g., buttons, action rows).
     */
    components: any[] | null;
    /**
     * The content (text) of the message.
     */
    content: string;
    /**
     * Timestamp of when the message was last edited, if edited.
     */
    editedTimestamp: string | null;
    /**
     * Embeds (rich media content) included in the message.
     */
    embeds: any[];
    /**
     * Flags associated with the message, if any.
     */
    flags: number | null;
    /**
     * The id of the message.
     */
    id: string;
    /**
     * Interaction data, if the message is part of an interaction.
     */
    interaction: any | null;
    /**
     * Indicates whether the message mentions everyone in the channel.
     */
    mentionEveryone: boolean;
    /**
     * Channels mentioned in the message content, if any.
     */
    mentionChannels: any[] | null;
    /**
     * Roles mentioned in the message content.
     */
    mentionRoles: string[];
    /**
     * Users mentioned in the message content.
     */
    mentions: User[];
    /**
     * Reference to another message, if this message is a reply or reference.
     */
    messageReference: any | null;
    /**
     * A unique identifier for the message used for checking message delivery (nonce).
     */
    nonce: string | number | null;
    /**
     * Indicates whether the message is pinned in the channel.
     */
    pinned: boolean;
    /**
     * The position of the message in the channel, if applicable.
     */
    position: number | null;
    /**
     * Reactions (e.g., emojis) added to the message, if any.
     */
    reactions: any[] | null;
    /**
     * The message that this message references, if applicable.
     */
    referencedMessage: any | null;
    /**
     * Subscription data related to roles, if any.
     */
    roleSubscriptionData: any | null;
    /**
     * Items associated with stickers sent in the message, if any.
     */
    stickerItems: any[] | null;
    /**
     * Stickers used in the message, if any.
     */
    stickers: any[] | null;
    /**
     * The thread associated with the message, if part of a threaded conversation.
     */
    thread: any | null;
    /**
     * Timestamp indicating when the message was sent.
     */
    timestamp: string;
    /**
     * Indicates whether the message is a text-to-speech (TTS) message.
     */
    tts: boolean;
    /**
     * The type of the message (e.g., DEFAULT, RECIPIENT_ADD, RECIPIENT_REMOVE	CALL, etc.).
     */
    type: number;
    /**
     * The id of the webhook that sent the message, if applicable.
     */
    webhookId: string | null;
    /**
     * Constructs a new Message instance.
     * @param {IMessage} data - The message data.
     */
    constructor(data: IMessage);
}
