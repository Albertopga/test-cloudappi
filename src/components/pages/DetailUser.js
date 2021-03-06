import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import User from "../User/User";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DetailUser = (props) => {
  const idToSearch = props.match.params.id;

  const [user, setUser] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    searchUserById(idToSearch);
  }, [idToSearch]);

  const searchUserById = (idToSearch) => {
    UserService.getUserById(idToSearch)
      .then((result) => {
        setUser(result);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <>
      <Header />
      <Link className="btn btn-outline-secondary my-4 mx-4" to={"/"}>
        Back to home
      </Link>
      <div className="card">
        {error ? (
          <h3 className={"text-center"}>User {error.message}</h3>
        ) : (
          <User user={user} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default DetailUser;
