import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678318362017 implements MigrationInterface {
    name = 'default1678318362017'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Admin" DROP COLUMN "token"`);
        await queryRunner.query(`ALTER TABLE "Admin" ADD "token" character varying(8) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Admin" DROP COLUMN "token"`);
        await queryRunner.query(`ALTER TABLE "Admin" ADD "token" character varying(5) NOT NULL`);
    }

}
