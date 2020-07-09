import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ciserver',
    password: 'qwerty',
    port: 5432,
});
