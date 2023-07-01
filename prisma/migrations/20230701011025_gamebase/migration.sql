-- CreateTable
CREATE TABLE "Game" (
    "game_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "game_id" TEXT NOT NULL PRIMARY KEY,
    "game_schema" TEXT NOT NULL,
    "game_round" INTEGER NOT NULL,
    CONSTRAINT "Game_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "number" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "in_active_game" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("created_at", "id", "name", "number") SELECT "created_at", "id", "name", "number" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Game_game_id_key" ON "Game"("game_id");
