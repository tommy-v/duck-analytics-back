import { Test, TestingModule } from '@nestjs/testing';
import { FoodService } from './food.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Food, FoodSchema } from './schemas/food.schema';
import { CreateFoodDto } from './dto/create-food.dto';
import { FoodType } from './models/food-type.enum';

describe('FoodService', () => {
  let service: FoodService;
  const mongod = new MongoMemoryServer();
  const mockFoodModel: CreateFoodDto = {
    title: 'Belgian fries',
    foodType: FoodType.Vegetables
  };

  beforeEach(async () => {
    const uri = await mongod.getUri();

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(`${uri}`), MongooseModule.forFeature([{ name: Food.name, schema: FoodSchema }])
      ],
      providers: [FoodService],
    }).compile();

    service = module.get<FoodService>(FoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new Food', async () => {
    const res: any = await service.create(mockFoodModel);

    expect(res._id).toBeDefined();
    expect(res.title).toEqual(mockFoodModel.title);
  });

  it('should get an array of foods', async () => {
    const res: Food[] = await service.getAllFoods();

    expect(res.length).toBeGreaterThan(0);
    expect(res[0].title).toEqual('Belgian fries');
  });

  afterAll(async () => {
    await mongod.stop();
  });
});
