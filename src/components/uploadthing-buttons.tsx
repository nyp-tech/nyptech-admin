import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";

const config = {
  url: "https://nyptech-api.vercel.app/v1/upload/general",
};

export const UploadButton = generateUploadButton(config);
export const UploadDropzone = generateUploadDropzone(config);