import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainsModule } from './domains/domains.module';
import { MongooseModule } from '@nestjs/mongoose';
import { configDotenv } from 'dotenv';

configDotenv();

if (!process.env.MONGO_CON_STR) {
  console.error('Mongo db connection url not provided!');
}

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [DomainsModule, MongooseModule.forRoot(process.env.MONGO_CON_STR)],
})
export class AppModule {}
