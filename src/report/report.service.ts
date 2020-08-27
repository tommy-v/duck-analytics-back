import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report } from './schemas/report.schema';

@Injectable()
export class ReportService {
  constructor(@InjectModel(Report.name) private reportModel: Model<Report>) {}

  async create(dataReport: any): Promise<Report> {
    const newDataReport = new this.reportModel(dataReport);
    newDataReport.creationDate = new Date().toISOString();

    return await newDataReport.save();
  }

  async getAllReports(): Promise<Report[]> {
    return await this.reportModel.find().populate('food');
  }
}
