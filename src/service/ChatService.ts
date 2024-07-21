import axios from "axios";
import { ObjectId } from "mongodb";
import { ConversationListResponse } from "../model/response/chatApiResponse";


class ChatService {
    private uri: string;

    constructor(uri: string) {
        this.uri = uri;
    }

    async fetchAllConversations(user_id: ObjectId): Promise<ConversationListResponse> {
        try {
            const response = await axios.get(`${this.uri}/conversations/${user_id}`);
            return response.data;
        } catch (error) {
            console.error("Error: ", error);
            throw error;
        }
    }
}

export default ChatService;