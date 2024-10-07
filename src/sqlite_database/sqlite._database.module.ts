import { SqliteDatabaseService } from 'src/sqlite_database/sqlite_database.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [SqliteDatabaseService],
  exports: [SqliteDatabaseService],
})
export class Sqlite_database {}
