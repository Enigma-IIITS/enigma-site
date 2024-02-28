import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  MemberRoleD as MemberRoleDEntity,
  DomainRoleD as DomainRoleDEntity,
} from './entities/team.entity';

@Schema()
export class MemberRoleD extends MemberRoleDEntity {}

@Schema()
export class DomainRoleD extends DomainRoleDEntity {}

@Schema()
export class Teams {
  @Prop({ required: true, index: true, unique: true })
  academicYear: string;

  @Prop()
  leads: MemberRoleD[];

  @Prop()
  coleads: MemberRoleD[];

  @Prop()
  domains: DomainRoleD[];
}

export type TeamDocument = HydratedDocument<Teams>;
export const TeamSchema = SchemaFactory.createForClass(Teams);
