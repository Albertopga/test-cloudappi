import API from "./config";

const UserService = {
  async getUsers() {
    try {
      const response = await API.get("/users");
      return parseResult(response);
    } catch (e) {
      return parseResult(e.response);
    }
  },

  async getUserById(id) {
    try {
      const response = await API.get(`/users/${id}`);
      return parseResult(response);
    } catch (e) {
      return parseResult(e.response);
    }
  },
};

const parseResult = (response) => {
  if (!response) return { data: "Request error", message: "error" };

  if (response.status === 200) {
    return { data: response.data, message: "success" };
  } else {
    console.log(
      `%c Error: ${response.status}, ${response.statusText}`,
      "background: #222; color: #bada55"
    );
    return { data: response.statusText, message: "error" };
  }
};

export default UserService;
