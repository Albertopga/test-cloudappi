import React from "react";
import CreateUserForm from "../CreateUserForm/CreateUserForm";
import { Link } from "react-router-dom";

const CreateUser = () => {
  return (
    <>
      <Link className="btn btn-outline-secondary my-4 mx-4" to={"/"}>
        Back to home
      </Link>
      <CreateUserForm />
    </>
  );
};

export default CreateUser;
