export interface ProfileData {
  basicInfo: ProfileBasicInfo;
  additionalInfo: ProfileAdditionalInfo;
}

export interface ProfileBasicInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export interface ProfileAdditionalInfo {
  baseTechnology: string;
  superhero?: string;
}
