import { Endpoints, HttpClient } from "."
import { EnvConstants } from "../constants";
import { AuthResponse, LoginRequest } from "./types";

export const authenticationService = async (req: LoginRequest) => {
  const { data } = await HttpClient.post<AuthResponse>(Endpoints.auth, {
    grant_type: EnvConstants.GRANT_TYPE,
    client_id: EnvConstants.CLIENT_ID,
    client_secret: EnvConstants.CLIENT_SECRET,
    scope: EnvConstants.SCOPE,
    ...req,
  });

  return data;
}