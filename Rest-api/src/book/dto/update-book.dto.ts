import { IsString, IsOptional, IsNumber, IsEnum } from 'class-validator';
import { Category } from '../schemas/book.schema';


export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly author: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsEnum(Category, { message: 'Please enter the correct categoty' })
  readonly category: Category;
}
