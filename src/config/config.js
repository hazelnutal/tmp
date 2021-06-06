const env = process.env;

const config = {
    db: {
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        waitForConnections: true,
        queueLimit: 0,
        debug: false,
    }
};
  
export { config };