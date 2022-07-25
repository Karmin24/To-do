import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdateTodoDto {
  @IsNotEmpty()
  @MinLength(3)
  text: string;
  @IsNotEmpty()
  isCompleted: boolean;
}
