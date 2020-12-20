import React from "react";
import CreateUserForm from "../CreateUserForm/CreateUserForm";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const CreateUser = () => {
  return (
    <>
      <Header />
      <Link className="btn btn-outline-secondary my-4 mx-4" to={"/"}>
        Back to home
      </Link>
      <CreateUserForm />
      <Footer />
    </>
  );
};

export default CreateUser;
