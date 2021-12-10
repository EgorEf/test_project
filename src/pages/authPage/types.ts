export interface RequestData {
  email: string,
  password: string
}

export interface LoginState extends RequestData {
  isRemember: boolean
}

export interface ResponseData extends RequestData {
  id: number,
  role: string
}

export type UserState = {
  user: ResponseData | null
};
