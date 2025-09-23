/* eslint-disable @next/next/no-img-element */
'use client'

import { usePictureContext } from "@/context/pictureContext"
import { sickTypes } from "@/utils/tool";
import { useRef } from "react";

export default function PicturePage() {
    const {
        // loading,
        clickDetected,
        image,
        result,
        onchangeImage,
        detectImage
    } = usePictureContext();

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">

            {/* Upload input */}
            <button onClick={() => {
                fileInputRef.current?.click();
            }}>
                <div className="mt-2 flex  flex-col  items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    {image ?
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="w-100 rounded-md shadow"
                        />
                        : <div>{"Chưa có ảnh nào được chọn. Vui lòng chọn ảnh."}</div>
                    }
                    <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        {/* <span>Vui lòng chọn ảnh</span> */}
                        <input
                            ref={fileInputRef}
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={onchangeImage}
                        />
                    </label>
                </div>
            </button>


            {image && !clickDetected && (
                <button
                    onClick={detectImage}
                    className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                >
                    Detect
                </button>
            )}
            {
                result?.map((item, index) => (
                    <div key={index} className="mt-4 flex flex-row items-center space-y-2 space-x-4">

                        <img
                            src={`data:image/jpeg;base64,${item.image}`} // hoặc image/png, image/webp tùy loại
                            alt="preview"
                            // width={400}
                            // height={300}
                            className="rounded-lg object-cover h-100 shadow"
                        />
                        <div className="text-lg">{sickTypes.find((sick) => sick.value == item.prediction.toLowerCase())?.label}</div>
                    </div>))
            }
        </div>
    )
}