/*
  Warnings:

  - Added the required column `comment` to the `Avaliation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratingNumber` to the `Avaliation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "categoryOne" TEXT NOT NULL,
    "categoryTwo" TEXT,
    "avaliationId" TEXT
);
INSERT INTO "new_Book" ("author", "avaliationId", "categoryOne", "categoryTwo", "description", "id", "imageUrl", "title") SELECT "author", "avaliationId", "categoryOne", "categoryTwo", "description", "id", "imageUrl", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avaliationId" TEXT
);
INSERT INTO "new_User" ("avaliationId", "created_at", "email", "emailVerified", "id", "image", "name") SELECT "avaliationId", "created_at", "email", "emailVerified", "id", "image", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_Avaliation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "bookId" TEXT,
    "comment" TEXT NOT NULL,
    "ratingNumber" TEXT NOT NULL,
    CONSTRAINT "Avaliation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Avaliation_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Avaliation" ("id") SELECT "id" FROM "Avaliation";
DROP TABLE "Avaliation";
ALTER TABLE "new_Avaliation" RENAME TO "Avaliation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
