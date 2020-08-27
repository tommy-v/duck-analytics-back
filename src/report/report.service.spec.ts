import { Test, TestingModule } from '@nestjs/testing';
import { ReportService } from './report.service';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongooseModule } from '@nestjs/mongoose';
import { Report, ReportSchema } from './schemas/report.schema';

describe('ReportService', () => {
  let service: ReportService;
  const mongod = new MongoMemoryServer();

  beforeEach(async () => {
    const uri = await mongod.getUri();

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(`${uri}`),
        MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }])
      ],
      providers: [ReportService],
    }).compile();

    service = module.get<ReportService>(ReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterAll(async () => {
    await mongod.stop();
  });
});
