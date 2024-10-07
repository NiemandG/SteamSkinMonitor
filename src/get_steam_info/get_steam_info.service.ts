import { IGetAll } from './../sqlite_database/interfaces/IgetAll';
import { Injectable } from '@nestjs/common';
import { SqliteDatabaseService } from 'src/sqlite_database/sqlite_database.service';
@Injectable()
export class GetSteamInfoService {
  constructor(private readonly database: SqliteDatabaseService) {}

  getAll() {
    // const statement = 'select * from skins';
    const statement =
      'select sph.id, sph."date", s.skin_name, sph.skin_id, sph.price_sell, sph.price_buy from skins_price_history sph join skins s on sph.skin_id = s.skin_id ORDER by sph.skin_id, sph."date";';
    const res = this.database.getByQuery<IGetAll>(statement);
    const resArr = [];
    for (let el of res) {
      const existing = resArr.find(
        (obj) => Object.keys(obj)[0] === el.skin_name,
      );
      if (existing) {
        existing[el.skin_name].push({
          id: el.id,
          date: el.date,
          skin_name: el.skin_name,
          skin_id: el.skin_id,
          price_sell: el.price_sell,
          price_buy: el.price_buy,
        });
      } else {
        resArr.push({
          [el.skin_name]: [
            {
              id: el.id,
              date: el.date,
              skin_name: el.skin_name,
              skin_id: el.skin_id,
              price_sell: el.price_sell,
              price_buy: el.price_buy,
            },
          ],
        });
      }
    }
    resArr.sort((a, b) => {
      if (Object.keys(a)[0].toLowerCase() < Object.keys(b)[0].toLowerCase()) {
        return -1;
      }
      if (Object.keys(a)[0].toLowerCase() > Object.keys(b)[0].toLowerCase()) {
        return 1;
      }
      return 0;
    });
    return resArr;
  }

  insertLine(skinName: string, skinId: number) {
    this.database.insertNewSkin(skinName, skinId);
  }
}
