import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678485546370 implements MigrationInterface {
    name = 'default1678485546370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Books" ADD "isDisponible" smallint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Students" ADD "rentedBooks" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Students" DROP COLUMN "rentedBooks"`);
        await queryRunner.query(`ALTER TABLE "Books" DROP COLUMN "isDisponible"`);
    }

}
