import { MigrationInterface, QueryRunner } from "typeorm";

export class default1677715146901 implements MigrationInterface {
    name = 'default1677715146901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Books" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "category" integer NOT NULL, "publisher" character varying NOT NULL, "authorId" integer, CONSTRAINT "PK_45fc00b09d337eadf83e9240157" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Authors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_ec1dd02aeee28c2426cdbc5daef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Admin" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "token" character varying(5) NOT NULL, CONSTRAINT "PK_3a489f4a44372ff150d7924dc3d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Students" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_40525f6ec1de97950bdc60ff61b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Books" ADD CONSTRAINT "FK_31b05b78a7c6fb188b951af0e7e" FOREIGN KEY ("authorId") REFERENCES "Authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Books" DROP CONSTRAINT "FK_31b05b78a7c6fb188b951af0e7e"`);
        await queryRunner.query(`DROP TABLE "Students"`);
        await queryRunner.query(`DROP TABLE "Admin"`);
        await queryRunner.query(`DROP TABLE "Authors"`);
        await queryRunner.query(`DROP TABLE "Books"`);
    }

}
