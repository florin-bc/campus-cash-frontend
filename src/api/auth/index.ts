import { LoginDetails, RegisterDetails } from "../../providers/AuthProvider";
// @ts-ignore
import { BACKEND } from "@env";
import { LoginResponse } from "../../providers/AuthProvider/types";
import { User } from "./types";

export const fetchLoginUser = async (
  user: LoginDetails
): Promise<LoginResponse | undefined> => {
  try {
    const result = await fetch(`${BACKEND}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), // body data type must match "Content-Type" header
    });
    const resultJSON = await result.json();
    return {
      accessToken: resultJSON?.accessToken,
      email: resultJSON?.user?.email,
      id: resultJSON?.user?.id,
      username: resultJSON?.user?.username,
    };
  } catch (err) {
    console.log("[API]", "fetchLoginUser error:", err);
  }
};

export const fetchRegisterUser = async (
  user: RegisterDetails
): Promise<User | undefined> => {
  try {
    const result = await fetch(`${BACKEND}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), // body data type must match "Content-Type" header
    });
    const resultJSON = await result.json();
    return resultJSON;
  } catch (err) {
    console.log("[API]", "fetchRegisterUser error:", err);
  }
};

export const fetchUser = async (jwt: string) => {
  try {
    const result = await fetch(`${BACKEND}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${jwt}`,
      },
    });
    const resultJSON = await result.json();
    return resultJSON;
  } catch (err) {
    console.log("[API]", "fetchUser error:", err);
  }
};
