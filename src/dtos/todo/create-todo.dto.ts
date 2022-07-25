import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @MinLength(3)
  text: string;
  @IsNotEmpty()
  isCompleted: boolean;
  @IsNotEmpty()
  projectId: number;
}
