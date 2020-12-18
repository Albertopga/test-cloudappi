import "./App.css";
import React from "react";
import { useState } from "react";
import { User } from "./components/user/user";
import UserService from "./services/UserService";
import MyHeader from "./components/navbar/myHeader";
import Footer from "./components/footer/footer";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(undefined);
  const [idUser, setIdUser] = useState(undefined);

  document.addEventListener("DOMContentLoaded", () => {
    preventEnter();
  });

  const preventEnter = () => {
    document.querySelectorAll("input").forEach((node) =>
      node.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
        }
      })
    );
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

  const searchUserById = (idUser) => {
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
  const setId = (eve) => {
    const value = eve.target.value;
    if (value === "") {
      setIdUser(undefined);
    } else {
      setIdUser(eve.target.value);
    }
  };

  return (
    <>
      <MyHeader search={search} setIdUser={setIdUser} />
      <Form inline className="justify-content-center my-5">
        <FormControl
          className="col-sm-2 "
          type="number"
          placeholder="empty or userId"
          onBlur={setId}
        />
        <Button variant="outline-success" onClick={search}>
          Search
        </Button>
      </Form>
      <div className="d-flex flex-row justify-content-center">
        {users && users.map((user) => <User key={user.id} user={user} />)}
        {error && <h3>User {error}</h3>}
      </div>
      <Footer />
    </>
  );
}

export default App;
