import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserProfile as UserProfileEntity } from './entities/user-profile.entity';

@Schema()
export class UserProfile extends UserProfileEntity {}

export enum URoles {
  lead = 'lead',
  colead = 'colead',
  advisor = 'advisor',
  domain_lead = 'domain_lead',
  core_member = 'core_member',
  contributor = 'contributor',
  participant = 'participant',
}

@Schema()
export class User {
  @Prop({ required: true, index: true, unique: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  hashedPassword: string;

  @Prop({
    required: true,
    enum: URoles,
    default: URoles.participant,
  })
  role: string;

  @Prop({ default: false })
  isSuperUser: boolean;
  // superusers can only be created by the server administrator

  @Prop({ default: false })
  isStaff: boolean;
  // only staff can access admin pages

  @Prop()
  profile: UserProfile;

  @Prop()
  joined: Date;

  @Prop()
  lastLogin: Date;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
