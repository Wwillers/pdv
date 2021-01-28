import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { beforeSave, BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public lastname: string

  @column()
  public email: string

  @column()
  public age: number

  @column()
  public avatar: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public remembermetoken?: string

  @column()
  public isadmin: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(auth: User) {
    if (auth.$dirty.password) {
      auth.password = await Hash.make(auth.password)
    }
  }
}
