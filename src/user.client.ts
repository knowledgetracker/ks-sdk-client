import axios from "axios";
import { USER_API_URL } from "./config";
export class UserClient {
  static async list() {
    let url = `${USER_API_URL}v1/users?role=U`;
    let response = await axios.get(url);
    return response.data;
  }
}
