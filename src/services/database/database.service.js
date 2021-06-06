import mysql from 'mysql2/promise';

import { config } from '../../config/config';

const pool = mysql.createPool(config.db);

const query = async (sql, params) => {
  const [ rows ] = await pool.execute(sql, params);

  return rows;
}

export { query };