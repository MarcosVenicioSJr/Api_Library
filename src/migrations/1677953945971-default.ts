import { MigrationInterface, QueryRunner } from "typeorm";

export class default1677953945971 implements MigrationInterface {
    name = 'default1677953945971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Books" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "Books" ADD "category" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Books" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "Books" ADD "category" integer NOT NULL`);
    }

}
