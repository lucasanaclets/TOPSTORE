import { httpClient } from "../../httpClient";

export interface SigninUserParams {
  email: string;
  password: string;
}

interface SigninResponse {
  token_type: string;
  access_token: string;
}

export async function signin(params: SigninUserParams) {
  const { data } = await httpClient.post<SigninResponse>(
    "/auth/signin/users",
    params
  );

  return data;
}
