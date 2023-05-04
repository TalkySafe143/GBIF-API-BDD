const oracledb = require('oracledb');
const configObj = require('../../config/config')

class Oracle {

    constructor() {
        oracledb.initOracleClient({ configDir: configObj.configDir });
    }

    connect() {
        return oracledb.getConnection({
            user: configObj.userOracle,
            password: configObj.passwordOracle,
            connectString: configObj.urlConnectionOracle
        })
    }

    async getAll(table) {
        try {
            const conn = await this.connect();

            const response = await conn.execute(`SELECT * FROM ${table}`);

            return response;
        } catch (e) {
            console.error(e);
            if (conn) {
                await conn.close();
            }
        }
    }
}

module.exports = Oracle;