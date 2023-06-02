import { Exclude, Expose } from 'class-transformer';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Exclude()
  @Generated('uuid')
  uuid: string;


  @Expose()
  @Column()
  firstName: String;

  @Expose()
  @Column()
  lastName: String;

  @Expose()
  @Column()
  email: String;


  @Expose()
  @Column()
  password: String;
  // { type: 'datetime' }
  @CreateDateColumn()
  @Exclude()
  createdAt: Date;
  // { type: 'datetime' }
  @UpdateDateColumn()
  @Exclude()
  updatedAt: Date;
  // { type: 'datetime' }
  @DeleteDateColumn()
  @Exclude()
  deletedAt: Date;

  @VersionColumn()
  @Exclude()
  version: string;
}
