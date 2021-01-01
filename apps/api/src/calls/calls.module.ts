import { Module } from '@nestjs/common';
import { CallsController } from './calls.controller';

@Module({
  controllers: [CallsController]
})
export class CallsModule {}
