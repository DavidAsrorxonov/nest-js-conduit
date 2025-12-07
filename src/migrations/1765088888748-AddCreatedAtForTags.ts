import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCreatedAtForTags1765088888748 implements MigrationInterface {
    name = 'AddCreatedAtForTags1765088888748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" ADD "createdAt" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "createdAt"`);
    }

}
