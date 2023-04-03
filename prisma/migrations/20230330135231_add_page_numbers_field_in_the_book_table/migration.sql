/*
  Warnings:

  - Made the column `imageUrl` on table `Book` required. This step will fail if there are existing NULL values in that column.

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
    "categoryTwo" TEXT,
    "avaliationId" TEXT
);
INSERT INTO "new_Book" ("author", "avaliationId", "categoryOne", "categoryTwo", "description", "id", "imageUrl", "title") SELECT "author", "avaliationId", "categoryOne", "categoryTwo", "description", "id", "imageUrl", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
