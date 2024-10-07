import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// import Database from 'better-sqlite3';
import * as sqlite3 from 'better-sqlite3';
@Injectable()
export class SqliteDatabaseService implements OnModuleInit, OnModuleDestroy {
  private db: sqlite3.Database;
  onModuleInit() {
    this.db = new sqlite3('/app/steam.db');
    // this.db = new sqlite3('./steam.db');
    this.db.pragma('journal_mode = WAL');
  }

  onModuleDestroy() {
    this.db.close();
  }

  getByQuery<T>(query: string): T[] {
    const statement = this.db.prepare(query);
    return statement.all() as T[];
  }

  insertData(skinId: number, sellPrice: number, buyPrice: number) {
    const insertQuery = `insert into skins_price_history ('skin_id', 'price_sell', 'price_buy') values (${skinId}, ${sellPrice}, ${buyPrice});`;
    const statement = this.db.prepare(insertQuery);
    statement.run();
  }

  insertNewSkin(name: string, skinId: number) {
    const insertQuery = `insert into skins ('skin_name', 'skin_id') values ('${name}', '${skinId}');`;
    const statement = this.db.prepare(insertQuery);
    statement.run();
  }
}
