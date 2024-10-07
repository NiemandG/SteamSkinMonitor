import { Module } from '@nestjs/common';
import { GetSteamDataService } from './get_steam_data.service';
import { Sqlite_database } from 'src/sqlite_database/sqlite._database.module';

@Module({
  imports: [Sqlite_database],
  providers: [GetSteamDataService],
})
export class GetSteamDataModule {}
