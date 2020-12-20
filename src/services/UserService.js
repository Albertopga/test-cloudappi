import API from "./config";
import { APIError, ConnectionFailure, NotFoundError } from "../errors";

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
      parseError(e);
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
      parseError(e, id);
    }
  },

  /**
   *
   * @param {{id: number, name: string, email: string }} User
   * @return {Promise<void>}
   */
  async addUser(user) {
    try {
      const response = await API.post("/users", user);
      return parseResult(response);
    } catch (e) {
      parseError(e);
    }
  },

  /**
   *
   * @param {number} id
   * @return {Promise<void>}
   */
  async deleteUserById(id) {
    try {
      const response = await API.delete(`/users/${id}`);
      parseResult(response);
    } catch (e) {
      parseError(e);
    }
  },
};

const parseResult = (response) => {
  if (!response) throw new APIError("not results");

  if (response.status === 200) return response.data;

  if (response.status === 404) throw new NotFoundError("Not found results");

  if (response.status === 201) return response.data;
};

const parseError = (error, id = undefined) => {
  if (!error.response) throw new ConnectionFailure("Fail to connect at api");

  if (error.response.status === 400)
    throw new APIError("To search by Id, need type a valid Id on input");

  if (error.response.status === 404)
    throw new APIError(`The user with id:${id} not exist`);
};

export default UserService;
