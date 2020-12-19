import React, { useState } from "react";
import UserService from "../../services/UserService";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

/**
 *  se encarga de realizar la búsqueda en la appi y de enviar al padre los resultados/errores, para que los trate el padre
 */
const SearchForm = ({ setError, setUsers }) => {
  const [idUser, setIdUser] = useState(undefined);

  const setId = (eve) => {
    const value = eve.target.value;
    setIdUser(value === "" ? undefined : value);
  };

  const search = () => {
    if (idUser === undefined) {
      searchAllUsers();
    } else {
      searchUserById(idUser);
    }
  };

  //TODO: refactor for not repeat code
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

  return (
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
  );
};

export default SearchForm;
