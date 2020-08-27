import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FoodType } from '../models/food-type.enum';

@Schema()
export class Food extends Document {
  @Prop() // { unique: true }
  title: string;
  
  @Prop()
  foodType: FoodType; // Issue with "type"
}

export const FoodSchema = SchemaFactory.createForClass(Food);
