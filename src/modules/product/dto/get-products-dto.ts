import { IsEnum, IsNumber, IsOptional, Max, Min } from 'class-validator';

export enum ProductsSortBy {
  RECOMMENDED = 'recommended',
}

export class GetProductsDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number;

  @IsOptional()
  @IsEnum(ProductsSortBy)
  sort?: ProductsSortBy;
}
