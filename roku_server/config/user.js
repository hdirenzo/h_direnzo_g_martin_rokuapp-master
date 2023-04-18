const creds = {
    // create a bunch (pool) of potential connections for multiple users
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'db_roku_temp',
    port            : 3306
}

module.exports = creds;