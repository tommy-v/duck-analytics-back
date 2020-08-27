import { Test, TestingModule } from '@nestjs/testing';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Food, FoodSchema } from './schemas/food.schema';
import { CreateFoodDto } from './dto/create-food.dto';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { FoodType } from './models/food-type.enum';


describe('FoodController', () => {
  const mongod = new MongoMemoryServer();
  let app: TestingModule;
  let foodController: FoodController;
  const mockFoodModel: CreateFoodDto = {
    title: 'Belgian fries',
    foodType: FoodType.Vegetables
  };

  beforeEach(async () => {
    const uri = await mongod.getUri();

    app = await Test.createTestingModule({
      imports: [
      MongooseModule.forRoot(`${uri}`), MongooseModule.forFeature([{ name: Food.name, schema: FoodSchema }])],
      controllers: [FoodController],
      providers: [FoodService],
    }).compile();

    foodController = app.get<FoodController>(FoodController);
  });

  describe('root', () => {
    it('should create a new Food', async () => {
      const res: any = await foodController.createFoodDto(mockFoodModel);

      expect(res._id).toBeDefined();
      expect(res.title).toEqual(mockFoodModel.title);
    });
  });

  afterAll(async (done) => {
    await mongod.stop();
    done();
  })
});
