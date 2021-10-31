import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOng1635696146897 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "ongs",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar",
                            isUnique: true
                        },
                        {
                            name: "description",
                            type: "varchar"
                        },
                        {
                            name: "email",
                            type: "varchar",
                            isUnique: true
                        },
                        {
                            name: "password",
                            type: "varchar"
                        },
                        {
                            name: "city",
                            type: "varchar"
                        },
                        {
                            name: "uf",
                            type: "varchar"
                        },
                        {
                            name: "created_at",
                            type: "timeStamp",
                            default: "now()"
                        },
                        {
                            name: "updated_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ongs");
    }

}
