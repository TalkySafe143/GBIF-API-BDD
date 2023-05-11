const oracledb = require('oracledb');
const configObj = require('../../config/config')
const debug = require('debug')("api:oracle");

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
        let conn = null;
        try  {
            conn = await this.connect();

            debug("Conexion a Oracle exitosa!")

            const response = await conn.execute(`SELECT * FROM ${table}`);

            return response;
        } catch (e) {
            console.error(e);
        } finally {
            conn.close();
        }
    }
}

module.exports = Oracle;