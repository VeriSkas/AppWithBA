export interface IAuthRequest {
  email: string;
  password: string;
  name?: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUserAuth;
}

export interface IUserAuth {
  email: string;
  id: string;
  name: string;
  token: string;
}
