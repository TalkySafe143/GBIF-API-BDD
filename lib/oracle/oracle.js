const oracledb = require('oracledb');
const configObj = require('../../config/config')
const debug = require('debug')('api::oracle');

class Oracle {

    constructor() {
        oracledb.initOracleClient({ configDir: configObj.configDir });
        oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    }

    connect() {
        return oracledb.getConnection({
            user: configObj.userOracle,
            password: configObj.passwordOracle,
            connectString: configObj.urlConnectionOracle,
            multipleStatements: false
        })
    }

    async executeStatement(SQLstatement) {
        let conn = null;
        try  {
            conn = await this.connect();

            debug("Conexion a Oracle exitosa!")

            debug(SQLstatement)

            const response = await conn.execute(SQLstatement);
            conn.commit()

            return response;
        } catch (e) {
            throw e;
        } finally {
            conn.close();
        }
    }

    async test() {
        let conn = null;
        try  {
            conn = await this.connect();

            debug("Conexion a Oracle exitosa!")

            const SQLstatement = `SELECT * FROM :id`

            const table = 'protocol';
            const response = await conn.execute(SQLstatement, {
                id: { dir: oracledb.BIND_IN, val: table , type: oracledb.STRING }
            });
            conn.commit()

            return response;
        } catch (e) {
            throw e;
        } finally {
            conn.close();
        }
    }
}

module.exports = Oracle;