-- AlterTable
ALTER TABLE "TaskLabels" ADD COLUMN     "taskId" INTEGER;

-- AddForeignKey
ALTER TABLE "TaskLabels" ADD CONSTRAINT "TaskLabels_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;
