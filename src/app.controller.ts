import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/calculate')
  calculate(@Query('a') a: number, @Query('b') b: number): number {
    return this.appService.calculate(Number(a), Number(b));
  }
}
