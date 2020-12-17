import React from "react";
import { toPairs } from "lodash";

//TODO: give style at user card

export const User = ({ user }) => {
  const { name, id, ...restUser } = user;

  return (
    <div className="card">
      <h1>
        ({id}) {name}
      </h1>
      <ul>
        {toPairs(restUser).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
