/*
  Warnings:

  - You are about to drop the column `avaliationId` on the `Book` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pagesNumber" INTEGER,
    "imageUrl" TEXT NOT NULL,
    "categoryOne" TEXT NOT NULL,
    "categoryTwo" TEXT
);
INSERT INTO "new_Book" ("author", "categoryOne", "categoryTwo", "description", "id", "imageUrl", "pagesNumber", "title") SELECT "author", "categoryOne", "categoryTwo", "description", "id", "imageUrl", "pagesNumber", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
