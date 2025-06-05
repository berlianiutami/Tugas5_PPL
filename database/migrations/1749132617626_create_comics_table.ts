import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Comics extends BaseSchema {
  protected tableName = 'comics'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table.integer('year').notNullable()
      table.string('author').notNullable()
      table.string('genre').notNullable()
      table.integer('pages').notNullable()
      table.float('rating').notNullable()
      table.text('summary').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
