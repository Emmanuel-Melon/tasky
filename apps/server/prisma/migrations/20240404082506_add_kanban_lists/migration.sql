-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "kanbanListId" INTEGER;

-- CreateTable
CREATE TABLE "KanbanBoard" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "KanbanBoard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KanbanList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "position" SERIAL NOT NULL,
    "boardId" INTEGER NOT NULL,

    CONSTRAINT "KanbanList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_kanbanListId_fkey" FOREIGN KEY ("kanbanListId") REFERENCES "KanbanList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KanbanBoard" ADD CONSTRAINT "KanbanBoard_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KanbanList" ADD CONSTRAINT "KanbanList_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "KanbanBoard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
