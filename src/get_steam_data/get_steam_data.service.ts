import { IGetAll } from './../sqlite_database/interfaces/IgetAll';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { SqliteDatabaseService } from 'src/sqlite_database/sqlite_database.service';
import * as cron from 'node-cron';
@Injectable()
export class GetSteamDataService implements OnModuleInit {
  constructor(private readonly sqliteDatabase: SqliteDatabaseService) {}
  steamURL = `https://steamcommunity.com/market/itemordershistogram?country=RU&language=russian&currency=5&item_nameid=`;
  onModuleInit() {
    cron.schedule('0 16,20,0,4,8,12 * * *', () => {
      this.checkSteamData();
    });
  }

  async checkSteamData() {
    const statement = 'select * from skins';
    const fromDB = this.sqliteDatabase.getByQuery<IGetAll>(statement);

    for (let el of fromDB) {
      const res = await fetch(this.steamURL + el.skin_id);
      if (res.ok) {
        const { buy_order_graph, sell_order_graph } = await res.json();
        // const { buy_order_graph, sell_order_graph } = result;
        this.sqliteDatabase.insertData(
          el.skin_id,
          sell_order_graph[0][0],
          buy_order_graph[0][0],
        );
      }
    }
  }
}
