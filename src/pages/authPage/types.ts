export interface LoginState {
  email: string,
  password: string
  isRemember: boolean
};

export interface ResponseData extends LoginState {
  id: number,
  role: String;
};

export type UserState = {
  user: ResponseData | null
};