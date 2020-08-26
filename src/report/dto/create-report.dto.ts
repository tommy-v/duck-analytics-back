import { Food } from "src/food/schemas/food.schema";

export class CreateReportDto {
  readonly location: Location;
  readonly food: Food;
  readonly foodQuantity: number;
  readonly duckCount: number;
}
