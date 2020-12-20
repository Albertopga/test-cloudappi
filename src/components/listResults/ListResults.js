import React from "react";
import User from "../user/User";

/**
 * Receive the search results and the errors, by the parent component and then displayed them.
 */
const ListResults = ({ users, error }) => {
  return (
    <div className="d-flex flex-row  justify-content-center text-center">
      {users &&
        users.map((user) => (
          <User key={user.id} user={{ name: user.name, id: user.id }} />
        ))}
      {error && <h3>{error.message}</h3>}
    </div>
  );
};

export default ListResults;
