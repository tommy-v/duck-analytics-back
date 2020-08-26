import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Food } from './schemas/food.schema';
import { Model } from 'mongoose';

@Injectable()
export class FoodService {
  constructor(@InjectModel(Food.name) private foodModel: Model<Food>) {}

  async create(dataFood: any): Promise<Food> {
    const newDataFood = new this.foodModel(dataFood);
    return newDataFood.save();
  }
}
