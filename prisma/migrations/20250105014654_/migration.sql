-- CreateEnum
CREATE TYPE "typeGender" AS ENUM ('pria', 'wanita');

-- CreateTable
CREATE TABLE "Sekolah" (
    "id" TEXT NOT NULL,
    "nama_sekolah" VARCHAR(128) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Sekolah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Siswa" (
    "id" TEXT NOT NULL,
    "nama_siswa" TEXT NOT NULL,
    "usia" INTEGER NOT NULL,
    "sekolahId" TEXT NOT NULL,
    "gender" "typeGender" NOT NULL,

    CONSTRAINT "Siswa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Siswa" ADD CONSTRAINT "Siswa_sekolahId_fkey" FOREIGN KEY ("sekolahId") REFERENCES "Sekolah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
