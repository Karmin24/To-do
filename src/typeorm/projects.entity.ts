import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  name: string;
}

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  title: string;
  id?: number;
  status: string;
}
