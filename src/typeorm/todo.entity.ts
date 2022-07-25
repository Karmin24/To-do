import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from './projects.entity';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 200, nullable: true })
  text: string;
  @Column('boolean', { nullable: true })
  isCompleted: boolean;
  @ManyToOne(() => Project, (project) => project.todos)
  project: Project;
}
