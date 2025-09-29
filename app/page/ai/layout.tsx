import { ChatAiProvider } from "@/context/chatAiContext";

export default function ChatAILayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ChatAiProvider>{children}</ChatAiProvider>
    );
}
