import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

export async function saveImageFile(bufferedFile: Buffer) {
  const uploadResult = await new Promise<UploadApiResponse | undefined>(
    (resolve, reject) => {
      cloudinary.uploader
        .upload_stream((error, uploadResult) => {
          if (error) {
            return reject(error);
          }
          return resolve(uploadResult);
        })
        .end(bufferedFile);
    },
  );

  if (uploadResult) {
    return uploadResult.url;
  }
}
