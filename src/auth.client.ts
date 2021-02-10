import axios from "axios";
import { USER_API_URL } from "./config";
export class AuthClient {
  static async login(user: any) {
    let url = `${USER_API_URL}v1/users?role=U`;
    let response = await axios.post(url, user);
    return response.data;
  }
}
