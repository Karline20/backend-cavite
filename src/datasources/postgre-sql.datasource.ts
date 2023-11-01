import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

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
@lifeCycleObserver('datasource')
export class PostgreSqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'postgreSQL';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.postgreSQL', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
