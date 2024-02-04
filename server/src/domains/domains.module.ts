import { Module } from '@nestjs/common';
import { DomainsController } from './domains.controller';
import { ClubDomainsService } from './domains.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClubDomain, ClubDomainSchema } from './domains.schema';

@Module({
  providers: [ClubDomainsService],
  controllers: [DomainsController],
  imports: [
    MongooseModule.forFeature([
      { name: ClubDomain.name, schema: ClubDomainSchema },
    ]),
  ],
})
export class DomainsModule {}
