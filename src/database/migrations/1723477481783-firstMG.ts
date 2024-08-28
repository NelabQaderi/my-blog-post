import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMG1723477481783 implements MigrationInterface {
    name = 'FirstMG1723477481783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auth" DROP CONSTRAINT "UQ_366ebf23d8f3781bb7bb37abbd1"`);
        await queryRunner.query(`ALTER TABLE "auth" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "auth" ADD "username" character varying(225) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "auth" ADD CONSTRAINT "UQ_366ebf23d8f3781bb7bb37abbd1" UNIQUE ("username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auth" DROP CONSTRAINT "UQ_366ebf23d8f3781bb7bb37abbd1"`);
        await queryRunner.query(`ALTER TABLE "auth" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "auth" ADD "username" character varying(226) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "auth" ADD CONSTRAINT "UQ_366ebf23d8f3781bb7bb37abbd1" UNIQUE ("username")`);
    }

}
