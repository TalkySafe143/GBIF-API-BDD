require('dotenv').config()

module.exports = {
    userOracle : process.env.USER_DB_ORACLE,
    passwordOracle: process.env.PASSWORD_DB_ORACLE,
    urlConnectionOracle: process.env.CONNECTION_URL_DB_ORACLE,
    configDir: 'C:\\\\Users\\\\PC\\\\Desktop\\\\Carpeta Sebastian\\\\instantclient-basic-windows.x64-21.9.0.0.0dbru\\\\instantclient_21_9',
    passwordMongo: process.env.PASSWORD_DB_MONGO,
    jwtSecret : process.env.JWT_SECRET,
    adminAPIKey: process.env.ADMIN_AUTH_API_TOKEN,
    userAPIKey: process.env.USER_AUTH_API_TOKEN
}