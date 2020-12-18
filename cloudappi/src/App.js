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
      <Form inline>
        <FormControl
          type="number"
          placeholder="empty or userId"
          className="mr-sm-2"
          onBlur={setId}
        />
        <Button variant="outline-success" onClick={search}>
          Search
        </Button>
      </Form>
      <div className="App">
        {users && users.map((user) => <User key={user.id} user={user} />)}
        {error && <h1>User {error}</h1>}
      </div>
      <Footer />
    </>
  );
}

export default App;
