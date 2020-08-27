import { FoodType } from "../models/food-type.enum";

export class CreateFoodDto {
  readonly title: string;
  readonly foodType: FoodType;
}
