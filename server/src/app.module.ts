import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainsModule } from './domains/domains.module';
import { MongooseModule } from '@nestjs/mongoose';
import { configDotenv } from 'dotenv';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { EventsModule } from './events/events.module';
import { TeamsModule } from './teams/teams.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

configDotenv();

if (!process.env.MONGO_CON_STR) {
  console.error('Mongo db connection url not provided!');
}

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [
    DomainsModule,
    MongooseModule.forRoot(process.env.MONGO_CON_STR),
    UsersModule,
    BlogsModule,
    EventsModule,
    TeamsModule,
    AuthModule,
  ],
})
export class AppModule {}
