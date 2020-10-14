import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602623008493 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable((new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'double precision',
                },
                {
                    name: 'longitude',
                    type: 'double precision',
                },
                {
                    name: 'about',
                    type: 'text'
                  },
                  {
                    name: 'instructions',
                    type: 'text'
                  },
                  {
                    name: 'opening_hours',
                    type: 'varchar'
                  },
                  {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                  }
            ]
        })))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
    }

}
