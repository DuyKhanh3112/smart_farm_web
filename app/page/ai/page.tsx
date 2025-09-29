"use client";

import { useState } from "react";
import { Mic, AlignLeft } from "lucide-react";
import { useChatAiContext } from "@/context/chatAiContext";

export default function ChatAIPage() {
    const { question, setQuestion, chatAi } = useChatAiContext();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-2xl font-medium mb-6">Hôm nay bạn có ý tưởng gì?</h1>
            <form
                onSubmit={() => { }}
                className="flex items-center w-[600px] max-w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white"
            >
                <button type="button" className="mr-3 text-gray-500">
                    <AlignLeft size={20} />
                </button>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Hỏi bất kỳ điều gì"
                    className="flex-1 outline-none bg-transparent text-gray-800"
                />
                <button type="button" className="mx-3 text-gray-500">
                    <Mic size={20} />
                </button>
                <button
                    type="button"
                    className="bg-blue-500 text-white rounded-full px-4 py-1 ml-2 hover:bg-blue-600 transition"
                    onClick={async () => {
                        await chatAi(question);
                    }}
                >
                    Gửi
                </button>
            </form>
        </div>

    )
}