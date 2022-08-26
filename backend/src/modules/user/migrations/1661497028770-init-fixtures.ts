import { MigrationInterface, QueryRunner } from 'typeorm';

export class initFixtures1661497028770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.query(
      `insert into "user" ("fullname","email") values ('shoaib','shoaibsilat9@gmail.com');`,
    );
    await queryRunner.connection.query(
      `insert into "user" ("fullname","email") values ('boredJon','boredJon@home.nl');`,
    );
    await queryRunner.connection.query(
      `insert into "user" ("fullname","email") values ('busyIan','busyIan@ntlworld.com');`,
    );
    await queryRunner.connection.query(
      `insert into "address" (city, country, street_address, user_id) values ('karachi','pakistan','490',1);`,
    );
    await queryRunner.connection.query(
      `insert into "address" (city, country, street_address, user_id) values ('boston','usa','485',2);`,
    );
    await queryRunner.connection.query(
      `insert into "address" (city, country, street_address, user_id) values ('dubai','uae','486',3);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.query(`truncate table "user"`);
    await queryRunner.connection.query(`truncate table "address"`);
  }
}
