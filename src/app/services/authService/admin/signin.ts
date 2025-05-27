import { httpClient } from "../../httpClient";

export interface SigninAdminParams {
  registration: string;
  password: string;
}

interface SigninResponse {
  access_token: string;
}

export async function signin(params: SigninAdminParams) {
  const { data } = await httpClient.post<SigninResponse>(
    "/auth/signin/admins",
    params
  );

  return data;
}
