export interface UserState {
  user: { email: string, id: string } | null;
  isAuth: boolean;
  token: string | null;
}
