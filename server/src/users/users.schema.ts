import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class UserProfile {
  fullName: string;
  profilePic: string;
  bio: string;
  github: string;
  twitter: string;
  linkedin: string;
  insta: string;
}

@Schema()
export class User {
  @Prop({ required: true, index: true, unique: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  hashedPassword: string;

  @Prop({ required: true })
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
