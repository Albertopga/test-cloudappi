import React, { useState } from "react";
import UserService from "../../services/UserService";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import usePreventEntersOnInputs from "../../hooks/usePreventEntersOnInputs";
import { inRange } from "lodash";

/**
 *  Perform the search in the api and send the results to the parent
 */
const SearchForm = ({ setError, setUsers }) => {
  const [idUser, setIdUser] = useState(undefined);

  usePreventEntersOnInputs();

  const evalValue = (eve) => {
    if (!inRange(eve.charCode, 47, 58)) eve.preventDefault();
  };

  const setId = (eve) => {
    const value = eve.target.value;
    setIdUser(value || undefined);
  };

  const search = () => {
    searchUserById(idUser);
  };

  const searchAllUsers = () => {
    UserService.getUsers()
      .then((users) => {
        storeUsers(users);
      })
      .catch((err) => {
        console.log(err);
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
      <Button variant="outline-info" onClick={searchAllUsers}>
        Search All
      </Button>
      <Button className="mx-4" variant="outline-success" onClick={search}>
        Search By Id
      </Button>
      <FormControl
        className="col-sm-2 "
        type="number"
        placeholder="Type user Id"
        onBlur={setId}
        onKeyPress={evalValue}
      />
    </Form>
  );
};

export default SearchForm;
