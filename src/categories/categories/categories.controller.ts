import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Category } from '../category.entity';
import { CategoriesService } from '../categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  index(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  show(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.findById(id);
  }

  @Post()
  atore(@Body() categoryData: Category): Promise<any> {
    return this.categoriesService.create(categoryData);
  }
}