'use client'
import { UploadDropzone } from "@uploadthing/react";
import { Card, CardContent } from "../ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import toast from "react-hot-toast";
import { OurFileRouter } from "@/app/api/uploadthing/core";

interface ImageProfileProps {
    image: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
}

const ImageProfile = ({ image, setImage }: ImageProfileProps) => {
    const handleRemoveImage = () => {
        setImage("");
    };

    return (
        <Card>
            <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Original User Avatar</h3>
                {image ? (
                    <div className="space-y-4">
                        <AspectRatio
                            ratio={16 / 9}
                            className="bg-muted rounded-lg overflow-hidden"
                        >
                            <Image
                                src={image}
                                alt="Original cover"
                                fill
                                className="object-cover"
                            />
                        </AspectRatio>
                        <button
                            onClick={handleRemoveImage}
                            className="w-full px-4 py-2 text-sm text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition-colors"
                        >
                            Remove Image
                        </button>
                    </div>
                ) : (
                    <UploadDropzone<OurFileRouter, "imageUploader">
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            if (res && res[0]) {
                                setImage(res[0].url);
                                toast.success("Image uploaded successfully!");
                            }
                        }}
                        onUploadError={(error: Error) => {
                            toast.error(error.message);
                        }}
                    />
                )}
            </CardContent>
        </Card>
    );
};

export default ImageProfile;
