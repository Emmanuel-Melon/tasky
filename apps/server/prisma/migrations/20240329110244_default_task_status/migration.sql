-- AlterEnum
ALTER TYPE "TaskStatus" ADD VALUE 'ACTIVE';

COMMIT;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
