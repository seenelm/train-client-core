import { ObjectId } from 'mongodb';

export interface ConversationResponse {
    id: ObjectId;
    name: string;
    owner_id: ObjectId;
    members: ObjectId[];
    created_at: Date;
}

export interface MessageResponse {
    text: string;
};

export interface CreateConversationResponse {
    conversation_response: ConversationResponse,
    message_response: MessageResponse,
}