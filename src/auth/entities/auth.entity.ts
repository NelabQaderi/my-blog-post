import { EntityHelper } from 'src/utils/database/entity-helper';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({ name: 'auth', schema: 'public' })
export class Auth extends EntityHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 225, unique: true })
  username: string;

  @Column('varchar', { length: 226, unique: true })
  email: string;

  @Column('varchar', { length: 226 })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, default: null })
  updatedAt: Date | null;

  @DeleteDateColumn({ nullable: true, default: null })
  deletedAt?: Date | null;
}
