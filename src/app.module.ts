import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetSteamInfoModule } from './get_steam_info/get_steam_info.module';
import { GetSteamDataModule } from './get_steam_data/get_steam_data.module';

@Module({
  imports: [GetSteamInfoModule, GetSteamDataModule, GetSteamDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
