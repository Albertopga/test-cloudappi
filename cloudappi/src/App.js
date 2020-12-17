import "./App.css";
import React from "react";
import { useState } from "react";
import { User } from "./components/user";
import UserService from "./services/UserService";

function App() {
  const [users, setUsers] = useState([]);
  const [idUser, setIdeUser] = useState(undefined);
  const [error, setError] = useState(undefined);

  const setId = (eve) => {
    const value = eve.target.value;
    if (value === "") {
      setIdeUser(undefined);
    } else {
      setIdeUser(eve.target.value);
    }
  };

  const search = () => {
    if (idUser === undefined) {
      searchAllUsers();
    } else {
      searchUserById(idUser);
    }
  };

  const searchAllUsers = () => {
    UserService.getUsers().then((res) => {
      if (res.message === "success") {
        setUsers(res.data);
        setError(undefined);
      } else {
        setError(res.data);
        setUsers(undefined);
      }
    });
  };

  const searchUserById = () => {
    UserService.getUserById(idUser).then((res) => {
      if (res.message === "success") {
        setUsers([res.data]);
        setError(undefined);
      } else {
        setError(res.data);
        setUsers(undefined);
      }
    });
  };

  return (
    <div className="App">
      <input
        type={"number"}
        placeholder={"id number of empty to all"}
        onBlur={setId}
      />
      <button onClick={search}>Search users</button>
      {users && users.map((user) => <User key={user.id} user={user} />)}
      {error && <h1>User {error}</h1>}
    </div>
  );
}

export default App;
