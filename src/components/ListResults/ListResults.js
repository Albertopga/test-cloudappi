import React from "react";
import User from "../User/User";
import { Redirect } from "react-router";

/**
 * Receive the search results and the errors, by the parent component and then displayed them.
 */
const ListResults = ({ users, error }) => {
  const parseUser = () => {
    if (users.length === 1) return <Redirect to={`find/${users[0].id}`} />;

    return users.map((user) => (
      <User key={user.id} user={{ name: user.name, id: user.id }} />
    ));
  };

  return (
    <div className="d-flex flex-sm-wrap justify-content-center ">
      {users && parseUser()}
      {error && <h5>{error.message}</h5>}
    </div>
  );
};

export default ListResults;
