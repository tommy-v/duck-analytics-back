import { Controller, Post, Body, Get } from '@nestjs/common';
import { ReportService } from './report.service';
import { Report } from './schemas/report.schema';
import { CreateReportDto } from './dto/create-report.dto';
import { Types } from 'mongoose';

@Controller('Report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post('create')
  async createReportDto(@Body() createReportDto: CreateReportDto): Promise<Report> {
    return await this.reportService.create({
      ...createReportDto,
      food: Types.ObjectId(createReportDto.food)
    });
  } 

  @Get('all')
  async getAllReports(): Promise<Report[]> {
    return await this.reportService.getAllReports();
  }
}
