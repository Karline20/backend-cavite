"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgreSqlDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'postgreSQL',
    connector: 'postgresql',
    url: 'postgresql://legaspidevelopment:J9KcjwpFUKSw9APLQRKazw@sable-penguin-6982.8nk.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full',
    host: '',
    port: 5432,
    user: 'legaspidevelopment',
    password: 'J9KcjwpFUKSw9APLQRKazw',
    database: 'defaultdb'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let PostgreSqlDataSource = exports.PostgreSqlDataSource = class PostgreSqlDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
PostgreSqlDataSource.dataSourceName = 'postgreSQL';
PostgreSqlDataSource.defaultConfig = config;
exports.PostgreSqlDataSource = PostgreSqlDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.postgreSQL', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], PostgreSqlDataSource);
//# sourceMappingURL=postgre-sql.datasource.js.map