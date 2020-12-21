import React from "react";
import User from "../User/User";

/**
 * Receive the search results and the errors, by the parent component and then displayed them.
 */
const ListResults = ({ users, error }) => {
  const perseUser = () => {
    if (users.length === 1) return <User key={users[0].id} user={users[0]} />;

    return users.map((user) => (
      <User key={user.id} user={{ name: user.name, id: user.id }} />
    ));
  };

  return (
    <div className="d-flex flex-sm-wrap justify-content-center ">
      {users && perseUser()}
      {error && <h5>{error.message}</h5>}
    </div>
  );
};

export default ListResults;
