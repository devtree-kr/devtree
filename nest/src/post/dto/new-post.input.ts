import { Tag } from '@entities';
import { ArrayNotEmpty, IsNotEmpty } from 'class-validator';
import { NewPostInput as Type } from '@dtos';
export class NewPostInput implements Type {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  content: string;
  @ArrayNotEmpty()
  tagIds: number[];
}
