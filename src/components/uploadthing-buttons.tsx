import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";

const config = {
  url: "https://nyptech-api.vercel.app/services/uploadthing",
};

export const UploadButton = generateUploadButton(config);
export const UploadDropzone = generateUploadDropzone(config);