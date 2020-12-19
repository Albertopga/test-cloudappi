import React, { useState } from "react";
import UserService from "../../services/UserService";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import usePreventEntersOnInputs from "../../hooks/usePreventEntersOnInputs";

/**
 *  se encarga de realizar la búsqueda en la appi y de enviar al padre los usuarios/errores, para que los trate el padre
 */
const SearchForm = ({ setError, setUsers }) => {
  const [idUser, setIdUser] = useState(undefined);

  usePreventEntersOnInputs();

  const setId = (eve) => {
    const value = eve.target.value;
    setIdUser(value || undefined);
  };

  const search = () => {
    idUser ? searchUserById(idUser) : searchAllUsers();
  };

  const searchAllUsers = () => {
    UserService.getUsers()
      .then((users) => {
        storeUsers(users);
      })
      .catch((err) => {
        storeErrors(err);
      });
  };

  const searchUserById = (idUser) => {
    UserService.getUserById(idUser)
      .then((user) => {
        storeUsers([user]);
      })
      .catch((err) => {
        storeErrors(err);
      });
  };

  const storeErrors = (err) => {
    setError(err);
    setUsers(undefined);
  };

  const storeUsers = (users) => {
    setUsers(users);
    setError(undefined);
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
