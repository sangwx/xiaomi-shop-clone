import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
    // This error should crash whole process
    throw new Error("⚠️ Couldn't find .env file ⚠️");
}

export default {
    /**
     * serve port
     */
    port: parseInt(<string>process.env.PORT, 10),

    /**
     * database url
     */
    databaseURL: process.env.MONGODB_URI,

    /**
     * secret
     */
    jwtSecret: process.env.JWT_SECRET,

    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },

    /**
     * Agenda.js stuff
     */
    agenda: {
        dbCollection: process.env.AGENDA_DB_COLLECTION,
        pooltime: process.env.AGENDA_POOL_TIME,
        concurrency: parseInt(<string>process.env.AGENDA_CONCURRENCY, 10),
    },

    /**
     * Agendash config
     */
    agendash: {
        user: 'agendash',
        password: '123456',
    },
    /**
     * API configs
     */
    api: {
        prefix: '/api',
    },
    /**
     * Mailgun email credentials
     */
    emails: {
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
    },
};
