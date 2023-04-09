// @ts-ignore
import { BACKEND_URL } from "@env";

export const fetchLoginUser = async (value: any): Promise<any> => {
  try {
    const result = await fetch(`${BACKEND_URL}/user/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: value?.email, password: value?.password }),
    });
    const resultJSON = await result.json();
    return resultJSON;
  } catch (err) {
    console.log("[API]", "fetchLoginUser error:", err);
  }
};

// export const fetchUser = async (jwt: string) => {
//   try {
//     const result = await fetch(`${BACKEND}/user/profile`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `JWT ${jwt}`,
//       },
//     });
//     const resultJSON = await result.json();
//     return resultJSON;
//   } catch (err) {
//     console.log("[API]", "fetchUser error:", err);
//   }
// };
