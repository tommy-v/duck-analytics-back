import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FoodType } from '../models/food-type.enum';

@Schema()
export class Food extends Document {
  @Prop({ maxlength: 50 }) // { unique: true }
  title: string;
  
  @Prop({ maxlength: 25 })
  foodType: FoodType; // Issue with "type"
}

export const FoodSchema = SchemaFactory.createForClass(Food);
