import React from "react";
import User from "../User/User";

/**
 * Receive the search results and the errors, by the parent component and then displayed them.
 */
const ListResults = ({ users, error }) => {
  const parseErrorMessages = () => {
    if (error) {
    }
  };

  return (
    <div className="d-flex flex-sm-wrap justify-content-center ">
      {users &&
        users.map((user) => (
          <User key={user.id} user={{ name: user.name, id: user.id }} />
        ))}
      {error && (
        <h5>
          {parseErrorMessages()} {error.message}
        </h5>
      )}
    </div>
  );
};

export default ListResults;
