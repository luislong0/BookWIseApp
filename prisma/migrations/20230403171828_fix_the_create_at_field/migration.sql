-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "bookId" TEXT,
    "comment" TEXT NOT NULL,
    "ratingNumber" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Avaliation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Avaliation_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Avaliation" ("bookId", "comment", "created_at", "id", "ratingNumber", "userId") SELECT "bookId", "comment", "created_at", "id", "ratingNumber", "userId" FROM "Avaliation";
DROP TABLE "Avaliation";
ALTER TABLE "new_Avaliation" RENAME TO "Avaliation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
