import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import User from "../User/User";
import { Link } from "react-router-dom";

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
      <Link className="btn btn-outline-success my-4 mx-4" to={"/"}>
        Back to home
      </Link>
      <div className="card">
        {error ? <h3>User {error.message}</h3> : <User user={user} />}
      </div>
    </>
  );
};

export default DetailUser;
