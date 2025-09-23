import { PictureProvider } from "@/context/pictureContext";

export default function PictureLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <PictureProvider>{children}</PictureProvider>
    );
}
