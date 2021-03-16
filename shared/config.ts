import dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
    PORT: process.env.PORT,
    BASE_URL: process.env.BASE_URL,
    BASE_URL_API: process.env.BASE_URL_API,
    LOCAL_REPO: process.env.LOCAL_REPO,
    POSTGRES_USER: process.env.POSTGRES_USER,
    DATABASE_HOST: process.env.DATABASE_HOST,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
};
