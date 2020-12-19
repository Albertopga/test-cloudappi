import React from "react";
import { toPairs } from "lodash";

//TODO: give style at user card

export const User = ({ user }) => {
  const { name, id, ...restUser } = user;

  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">id: {id}</h6>
        <h5 className="card-title">{name}</h5>
        {toPairs(restUser).map(([key, value]) => (
          <p className="card-text" key={key}>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};
