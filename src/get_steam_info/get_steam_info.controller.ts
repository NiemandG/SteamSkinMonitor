import { GetSteamInfoService } from './get_steam_info.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('get-steam-info')
export class GetSteamInfoController {
  constructor(private getSteamInfo: GetSteamInfoService) {}

  @Get('getall')
  async getAll() {
    const res = this.getSteamInfo.getAll();
    return res;
  }

  @Post('setskin')
  async setSkin(
    @Body('skinName') skinName: string,
    @Body('skinId') skinId: number,
  ) {
    this.getSteamInfo.insertLine(skinName, skinId);
    return { res: 'ok' };
  }
}
