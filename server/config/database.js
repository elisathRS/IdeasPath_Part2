import pg from 'pg'
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });//just add it
const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}

// Create a new pool instance using the configuration object
export const pool = new pg.Pool(config);