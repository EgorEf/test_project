export interface RequestData {
  email: string,
  password: string
};

export interface LoginRequest extends RequestData {
  isRemember: boolean
};

export interface ResponseData extends RequestData {
  id: number,
  role: String;
};

export type UserState = {
  user: ResponseData | null
};