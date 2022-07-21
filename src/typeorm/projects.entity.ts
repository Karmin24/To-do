import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;
}
