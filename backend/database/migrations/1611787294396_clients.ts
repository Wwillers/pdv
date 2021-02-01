import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clients extends BaseSchema {
  protected tableName = 'clients'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 80).notNullable()
      table.string('lastname', 80).notNullable()
      table.string('email', 255).nullable()
      table.string('cpforcnpj', 14).notNullable().unique()
      table.enu('type', ['PF', 'PJ']).notNullable()
      table.string('phonenumber').nullable()
      table.json('address').nullable()
      table.integer('creditquantity').notNullable()
      table.enu('status', ['Adimplente', 'Inadimplente']).notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
