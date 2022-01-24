export type TAuthRequest = {
  email: string,
  password: string
};

export type TAuthState = TAuthRequest & { isRemember: boolean };

export type UserInfo = {
  name: string,
  taxNumber: string
};

export type TUser = TAuthRequest & {
  id: number,
  role: string,
  info: UserInfo
};

export enum Roles {
  ADMIN = 'admin',
  USER = 'user'
}
