import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  id?: number;
  status: 'todo' | 'done' | 'in progress';
}
