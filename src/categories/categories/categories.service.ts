import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../category.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async findById(id): Promise<Category> {
    return await this.categoryRepository.findOneOrFail(id);
  }

  async create(category: Category): Promise<Category> {
    return await this.categoryRepository.save(category);
  }
}
