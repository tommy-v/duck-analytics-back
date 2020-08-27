import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Food } from 'src/food/schemas/food.schema';
import { Location } from '../models/report.models';

@Schema()
export class Report extends Document {
  @Prop()
  location: Location;

  @Prop()
  foodQuantity: number;

  @Prop()
  food: Food;

  @Prop()
  duckCount: number;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
