import { Module } from '@nestjs/common';
import { GetSteamInfoService } from './get_steam_info.service';
import { GetSteamInfoController } from './get_steam_info.controller';
import { Sqlite_database } from 'src/sqlite_database/sqlite._database.module';

@Module({
  imports: [Sqlite_database],
  providers: [GetSteamInfoService],
  controllers: [GetSteamInfoController],
})
export class GetSteamInfoModule {}
