"use client";

import { IConversation } from "@/interface/conversation";
import { chatAiApi } from "@/service/ai";
import { createContext, useContext, useState } from "react";

type ChatAiContextType = {
    loading: boolean;
    question: string;
    setQuestion: (question: string) => void;
    conversation: IConversation[] | undefined;
    chatAi: (question: string) => Promise<void>;
};

const ChatAiContext = createContext<ChatAiContextType | undefined>(undefined);

export const useChatAiContext = (): ChatAiContextType => {
    const context = useContext(ChatAiContext);
    if (!context) {
        throw new Error("useChatAiContext must be used within a PictureProvider");
    }
    return context;
}

interface ChatAiProviderProps {
    children: React.ReactNode;
}

export const ChatAiProvider: React.FC<ChatAiProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState("");
    const [conversation, setConversation] = useState<IConversation[] | undefined>(undefined);


    const chatAi = async (question: string) => {
        setLoading(true);
        if (question.trim() !== "") {
            const conver: IConversation = { answer: '', question: question, created_at: new Date() };
            const res = await chatAiApi(question)
            conver.answer = res || "Xin lỗi, tôi không thể trả lời câu hỏi của bạn vào lúc này.";
            setConversation(prev => prev ? [conver, ...prev] : [conver]);
        }
        setLoading(false);
    }
    const value = {
        loading,
        question,
        setQuestion,
        chatAi,
        conversation,
    };
    return (
        <ChatAiContext.Provider value={value}>
            {children}
        </ChatAiContext.Provider>
    )
}