"use client";

import { IImageDetect } from "@/interface/image_detect";
import { createContext, useContext, useState } from "react";
import { postImageApi } from "@/service/picture";

type PictureContextType = {
    loading: boolean;
    clickDetected: boolean;
    image: File | undefined;
    result: IImageDetect[] | undefined;
    // fileInputRef: React.RefObject<HTMLInputElement> | null;
    detectImage: () => Promise<void>;
    onchangeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;

};

const PictureContext = createContext<PictureContextType | undefined>(undefined);

export const usePictureContext = (): PictureContextType => {
    const context = useContext(PictureContext);
    if (!context) {
        throw new Error("usePictureContext must be used within a PictureProvider");
    }
    return context;
}

interface PictureProviderProps {
    children: React.ReactNode;
}

export const PictureProvider: React.FC<PictureProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [clickDetected, setClickDetected] = useState(false);

    const [image, setImage] = useState<File | undefined>(undefined);
    const [result, setResult] = useState<IImageDetect[] | undefined>(undefined);
    // const fileInputRef = useRef<HTMLInputElement | null>(null);

    const imageFileToBase64 = async (file: File): Promise<string> => {
        // Đọc file thành ArrayBuffer
        const arrayBuffer = await file.arrayBuffer();

        // Chuyển ArrayBuffer thành Uint8Array (bytes)
        const uint8Array = new Uint8Array(arrayBuffer);

        // Chuyển Uint8Array sang base64
        let binary = "";
        for (let i = 0; i < uint8Array.byteLength; i++) {
            binary += String.fromCharCode(uint8Array[i]);
        }
        return btoa(binary); // Trả về chuỗi base64
    };


    const detectImage = async () => {
        setLoading(true);
        setClickDetected(true);
        setResult(undefined);
        if (image) {
            const bytes = await imageFileToBase64(image);
            const res = await postImageApi(bytes, image!.name) as IImageDetect[];
            setResult(res);

        }
        setLoading(false);
    }

    const onchangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setClickDetected(false);
            setImage(file);
        }
    }


    const value = {
        loading,
        clickDetected,
        image,
        result,
        // fileInputRef,
        detectImage,
        onchangeImage,
    };
    return (
        <PictureContext.Provider value={value}>
            {children}
        </PictureContext.Provider>
    )
}