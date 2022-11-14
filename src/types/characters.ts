enum GenderEnum {
  female = "female",
  male = "male",
  other = "n/a",
}

export interface Characters {
  name: string;
  height: string;
  gender: GenderEnum;
}
