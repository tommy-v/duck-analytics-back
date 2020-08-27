import { Controller, Post, Body, Get } from '@nestjs/common';
import { FoodService } from './food.service';
import { Food } from './schemas/food.schema';
import { CreateFoodDto } from './dto/create-food.dto';

@Controller('Food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post('create') // TODO create
  async createFoodDto(@Body() createFoodDto: CreateFoodDto): Promise<Food> {
    return await this.foodService.create(createFoodDto);
  } 

  @Get('all')
  async getAllFoods(): Promise<Food[]> {
    return await this.foodService.getAllFoods();
  }
}
