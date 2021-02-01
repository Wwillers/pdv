import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 80).notNullable()
      table.string('lastname', 80).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('age', 3).nullable()
      table.string('avatar').nullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.boolean('isadmin').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
