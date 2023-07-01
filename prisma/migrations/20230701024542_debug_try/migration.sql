-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "game_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "game_id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "game_schema" TEXT NOT NULL,
    "game_round" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Game_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Game" ("created_at", "game_id", "game_name", "game_round", "game_schema", "user_id") SELECT "created_at", "game_id", "game_name", "game_round", "game_schema", "user_id" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
CREATE UNIQUE INDEX "Game_game_id_key" ON "Game"("game_id");
CREATE UNIQUE INDEX "Game_user_id_key" ON "Game"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
