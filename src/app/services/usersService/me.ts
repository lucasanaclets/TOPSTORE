import { httpClient } from "../httpClient";

interface MeResponse {
  id: string;
  name: string;
}

export async function me() {
  const { data } = await httpClient.get<MeResponse>("auth/users/me");

  return data;
}
