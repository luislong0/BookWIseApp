/*
  Warnings:

  - Added the required column `author` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryOne` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryTwo` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Avaliation" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryOne" TEXT NOT NULL,
    "categoryTwo" TEXT NOT NULL,
    "avaliationId" TEXT,
    CONSTRAINT "Book_avaliationId_fkey" FOREIGN KEY ("avaliationId") REFERENCES "Avaliation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("description", "id", "title") SELECT "description", "id", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avaliationId" TEXT,
    CONSTRAINT "User_avaliationId_fkey" FOREIGN KEY ("avaliationId") REFERENCES "Avaliation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("created_at", "email", "emailVerified", "id", "image", "name") SELECT "created_at", "email", "emailVerified", "id", "image", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
