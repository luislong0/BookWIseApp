/*
  Warnings:

  - Added the required column `created_at` to the `Avaliation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "bookId" TEXT,
    "comment" TEXT NOT NULL,
    "ratingNumber" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL,
    CONSTRAINT "Avaliation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Avaliation_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Avaliation" ("bookId", "comment", "id", "ratingNumber", "userId") SELECT "bookId", "comment", "id", "ratingNumber", "userId" FROM "Avaliation";
DROP TABLE "Avaliation";
ALTER TABLE "new_Avaliation" RENAME TO "Avaliation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
