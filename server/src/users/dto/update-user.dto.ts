import { UserProfile as UserProfileEntity } from '../entities/user-profile.entity';

class UserProfile extends UserProfileEntity {}

export class UpdateUserDto {
  profile: UserProfile;
}
