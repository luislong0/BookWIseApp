-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Avaliation` DROP FOREIGN KEY `Avaliation_bookId_fkey`;

-- DropForeignKey
ALTER TABLE `Avaliation` DROP FOREIGN KEY `Avaliation_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Session` DROP FOREIGN KEY `Session_userId_fkey`;

-- RenameIndex
ALTER TABLE `Account` RENAME INDEX `Account_userId_fkey` TO `Account_userId_idx`;

-- RenameIndex
ALTER TABLE `Avaliation` RENAME INDEX `Avaliation_bookId_fkey` TO `Avaliation_bookId_idx`;

-- RenameIndex
ALTER TABLE `Avaliation` RENAME INDEX `Avaliation_userId_fkey` TO `Avaliation_userId_idx`;

-- RenameIndex
ALTER TABLE `Session` RENAME INDEX `Session_userId_fkey` TO `Session_userId_idx`;
