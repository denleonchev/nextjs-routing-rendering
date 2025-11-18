import sql from "better-sqlite3";
import fs, { readFile } from "fs/promises";
import path from "path";
import { mapLimit } from "async";
import { saveImageFile } from "./imageFile";
import { DUMMY_NEWS } from "./dummy-news";

const db = sql("meals.db");

async function uploadDummyImages() {
  const imagesDirectory = "./src/assets/images";
  const fileNames = await fs.readdir(imagesDirectory);
  const savedFilesUrls = await mapLimit<string, string>(
    fileNames,
    5,
    async (fileName: string) => {
      const filePath = path.resolve(imagesDirectory, fileName);
      const fileContent = await readFile(filePath);
      return await saveImageFile(fileContent);
    },
  );

  return Object.fromEntries(
    fileNames.map((fileName, fileNameIndex) => [
      fileName,
      savedFilesUrls[fileNameIndex],
    ]),
  );
}

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS news (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       date DATE NOT NULL,
       content TEXT NOT NULL
    )
`,
).run();

async function initData() {
  const uploadedImagesMap = await uploadDummyImages();
  const dummyNewsItemWithImageURL = DUMMY_NEWS.map((dummyNewsItem) => ({
    ...dummyNewsItem,
    image: uploadedImagesMap[dummyNewsItem.image],
  }));
  const stmt = db.prepare(`
      INSERT INTO news VALUES (
         null,
         @slug,
         @title,
         @image,
         @date,
         @content
      )
   `);
  for (const dummyNewsItemWithImageUrl of dummyNewsItemWithImageURL) {
    stmt.run(dummyNewsItemWithImageUrl);
  }
}

initData();
