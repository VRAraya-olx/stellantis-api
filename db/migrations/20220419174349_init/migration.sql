-- CreateTable
CREATE TABLE `auto` (
    `cms_id` VARCHAR(50) NULL,
    `id` INTEGER NOT NULL,
    `make` VARCHAR(150) NULL,
    `model` VARCHAR(150) NULL,
    `trim` VARCHAR(150) NULL,
    `year` YEAR NULL,
    `license_plate` VARCHAR(20) NULL,
    `internal_id` VARCHAR(50) NULL,
    `country` VARCHAR(15) NULL,
    `comentario` TEXT NULL,
    `marketplace_price` TEXT NULL,
    `total_price` FLOAT NULL,
    `enginecapacity` INTEGER NULL,
    `roof` INTEGER NULL,
    `radio` INTEGER NULL,
    `light` INTEGER NULL,
    `air` INTEGER NULL,
    `wea` INTEGER NULL,
    `airbag` INTEGER NULL,
    `door` INTEGER NULL,
    `comment` TEXT NULL,
    `location` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `auto_request` (
    `id` INTEGER NOT NULL,
    `created_at` VARCHAR(45) NULL,
    `updated_at` VARCHAR(45) NULL,
    `auto_id` INTEGER NOT NULL,
    `request_id` INTEGER NOT NULL,

    INDEX `fk_auto_request_auto1_idx`(`auto_id`),
    INDEX `fk_auto_request_request1_idx`(`request_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_aire` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(150) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_carroceria` (
    `id` INTEGER NOT NULL,
    `uid` VARCHAR(15) NULL,
    `nombre` VARCHAR(150) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_categoria` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(150) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_combustible` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(150) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_direccion` (
    `id` INTEGER NOT NULL,
    `nombre` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_focos` (
    `id` INTEGER NOT NULL,
    `nombre` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_leads` (
    `id` INTEGER NOT NULL,
    `dealer_closure_response` VARCHAR(255) NULL,
    `idauto` VARCHAR(50) NULL,
    `sucursal` INTEGER NULL,
    `origen` VARCHAR(150) NULL,
    `nombre` VARCHAR(150) NULL,
    `correo` VARCHAR(150) NULL,
    `rut` VARCHAR(25) NULL,
    `telefono` VARCHAR(255) NULL,
    `fecha` TIMESTAMP(0) NULL,
    `url` VARCHAR(150) NULL,
    `marca` VARCHAR(150) NULL,
    `modelo` VARCHAR(150) NULL,
    `version` VARCHAR(150) NULL,
    `year` YEAR NULL,
    `precio` FLOAT NULL,
    `mensaje_lead` VARCHAR(150) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `respuesta_exponea` VARCHAR(150) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `autosusados_leadscol` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_marca` (
    `id` INTEGER NOT NULL,
    `marca` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_modelo` (
    `id` INTEGER NOT NULL,
    `uid` INTEGER NULL,
    `marca_id` INTEGER NULL,
    `nombre` VARCHAR(45) NULL,
    `nombre_olx` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_moneda` (
    `id` INTEGER NOT NULL,
    `tipo` VARCHAR(15) NULL,
    `nombre` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_radio` (
    `id` INTEGER NOT NULL,
    `nombre` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_sucursal` (
    `id` INTEGER NOT NULL,
    `sucursal_id` INTEGER NULL,
    `sucursal_nombre` VARCHAR(45) NULL,
    `token` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autosusados_transmision` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(150) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inspection` (
    `inspection_id` VARCHAR(50) NOT NULL,
    `auto_id` INTEGER NOT NULL,

    INDEX `fk_inspection_auto1_idx`(`auto_id`),
    PRIMARY KEY (`inspection_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `k2_autos` (
    `id` INTEGER NOT NULL,
    `cms_id` VARCHAR(50) NULL,
    `inspection_id` VARCHAR(50) NULL,
    `make` VARCHAR(150) NULL,
    `model` VARCHAR(150) NULL,
    `trim` VARCHAR(150) NULL,
    `year` YEAR NULL,
    `license_plate` VARCHAR(20) NULL,
    `internal_id` VARCHAR(50) NULL,
    `country` VARCHAR(15) NULL,
    `comentario` TEXT NULL,
    `marketplace_price` FLOAT NULL,
    `total_price` FLOAT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `k2_autos_copy1` (
    `id` INTEGER NOT NULL,
    `cms_id` VARCHAR(50) NULL,
    `inspection_id` VARCHAR(50) NULL,
    `make` VARCHAR(150) NULL,
    `model` VARCHAR(150) NULL,
    `trim` VARCHAR(150) NULL,
    `year` YEAR NULL,
    `license_plate` VARCHAR(20) NULL,
    `internal_id` VARCHAR(50) NULL,
    `country` VARCHAR(15) NULL,
    `comentario` TEXT NULL,
    `marketplace_price` FLOAT NULL,
    `total_price` FLOAT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `negocios` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(45) NULL,
    `url` VARCHAR(45) NULL,
    `endpoint` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `request` (
    `id` INTEGER NOT NULL,
    `status` VARCHAR(45) NULL,
    `response` VARCHAR(45) NULL,
    `negocios_id` INTEGER NOT NULL,

    INDEX `fk_request_negocios1_idx`(`negocios_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `store` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(45) NULL,
    `store_id` VARCHAR(45) NULL,
    `description` VARCHAR(255) NULL,
    `auto_id` INTEGER NOT NULL,

    INDEX `fk_store_auto_idx`(`auto_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `auto_request` ADD CONSTRAINT `fk_auto_request_auto1` FOREIGN KEY (`auto_id`) REFERENCES `auto`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `auto_request` ADD CONSTRAINT `fk_auto_request_request1` FOREIGN KEY (`request_id`) REFERENCES `request`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `inspection` ADD CONSTRAINT `fk_inspection_auto1` FOREIGN KEY (`auto_id`) REFERENCES `auto`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `request` ADD CONSTRAINT `fk_request_negocios1` FOREIGN KEY (`negocios_id`) REFERENCES `negocios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `store` ADD CONSTRAINT `fk_store_auto` FOREIGN KEY (`auto_id`) REFERENCES `auto`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
