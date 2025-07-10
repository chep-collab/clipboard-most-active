-- CreateTable
CREATE TABLE "Workplace" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Shift" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "workplaceId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Shift_workplaceId_fkey" FOREIGN KEY ("workplaceId") REFERENCES "Workplace" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
