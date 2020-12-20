import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import React, { useState } from "react";
import UserService from "../../services/UserService";
import usePreventEntersOnInputs from "../../hooks/usePreventEntersOnInputs";
import { isEmpty } from "lodash";
import Swal from "sweetalert2";

const CreateUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  usePreventEntersOnInputs();

  const setValues = (eve) => {
    eve.target.name === "name"
      ? setName(eve.target.value)
      : setEmail(eve.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(email)) return true;

    Swal.fire({
      icon: "error",
      title: "Please enter a valid email",
    });
    return false;
  };

  const validateDat = () => {
    if (isEmpty(name))
      Swal.fire({
        icon: "error",
        title: "Name required",
      });
    return !isEmpty(name) && validateEmail();
  };

  const createUser = async () => {
    if (validateDat()) {
      const result = await UserService.addUser({ name: name, email: email });
      if (result) Swal.fire("Created user");
    }
  };

  return (
    <>
      <h5 className={"text-center"}>
        Complete the inputs to create a new User
      </h5>
      <Form inline className="justify-content-center my-5">
        <FormControl
          className="col-sm-2"
          type="text"
          name={"name"}
          placeholder="Name"
          value={name}
          onChange={setValues}
        />
        <FormControl
          className="col-sm-2 my-2"
          type="email"
          name={"email"}
          placeholder="Email"
          value={email}
          onChange={setValues}
        />
        <Button
          className="mx-4 "
          variant="outline-success"
          onClick={createUser}
        >
          Create new User
        </Button>
      </Form>
    </>
  );
};

export default CreateUserForm;
