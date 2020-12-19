import API from "./config";
import { APIError, NotFoundError } from "../errors";

/**
 * A number, or a string containing a number.
 * @typedef {{id: number, name: string, email: string }} User
 */

const UserService = {
  /**
   *
   * @return {Promise<User[]>}
   */
  async getUsers() {
    try {
      const response = await API.get("/users");
      return parseResult(response);
    } catch (e) {
      console.error(e.message);
      throw new APIError(e.message);
    }
  },

  /**
   *
   * @param {number} id
   * @return {Promise<User>}
   */
  async getUserById(id) {
    try {
      const response = await API.get(`/users/${id}`);
      return parseResult(response);
    } catch (e) {
      console.error(e.message);
      throw new APIError(e.message);
    }
  },
};

const parseResult = (response) => {
  if (!response) throw new APIError("not results");

  if (response.status === 200) return response.data;

  if (response.status === 404) throw new NotFoundError(response.statusText);

  console.error(`${response.status}, ${response.statusText}`);
  throw new APIError(response.statusText);
};

export default UserService;
