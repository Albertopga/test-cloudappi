import React from "react";
import { User } from "../user/user";

/**
 * receive the search results and the errors, by the parent component and then displayed them.
 */
const ListResults = ({ users, error }) => {
  // TODO: tratar el mensaje de error dependiendo de la clase del error
  return (
    <div className="d-flex flex-row justify-content-center">
      {users && users.map((user) => <User key={user.id} user={user} />)}
      {error && <h3>User {error.message}</h3>}
    </div>
  );
};

export default ListResults;
