-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryOne" TEXT NOT NULL,
    "categoryTwo" TEXT,
    "avaliationId" TEXT,
    CONSTRAINT "Book_avaliationId_fkey" FOREIGN KEY ("avaliationId") REFERENCES "Avaliation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("author", "avaliationId", "categoryOne", "categoryTwo", "description", "id", "title") SELECT "author", "avaliationId", "categoryOne", "categoryTwo", "description", "id", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
