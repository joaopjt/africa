const sqlite = require('sqlite3');
import { open } from 'sqlite';
import SQL from './_sql-base';

export default class SQLite extends SQL { 
  constructor(database_filename) {
    super();

    this.db = undefined;
    this.connect();
  }

  async connect() {
    this.db = await open({ filename: database_filename, driver: sqlite.Database });
  }

  async query() {
    let result = null;

    try {
      result = await this.db.exec(this.query_string);
    } catch (err) {
      throw err;
    }

    return result;
  }
}