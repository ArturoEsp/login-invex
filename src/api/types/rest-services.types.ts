export type AuthRequest = {
  grant_type: string;
  client_id: string;
  client_secret: string;
  scope: string;
  username: string;
  password: string;
}

export type LoginRequest = {
  username: string;
  password: string;
}

export type AuthResponse = {
  access_token: string;
  scope: string;
  id_token: string;
}