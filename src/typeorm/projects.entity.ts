import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from './todo.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 200, nullable: true })
  title: string;
  @OneToMany(() => Todo, (todos) => todos.project, { cascade: true })
  todos: Todo[];
}
