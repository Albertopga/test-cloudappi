import React from "react";
import { isEmpty, toPairs } from "lodash";
import { Link } from "react-router-dom";

const Details = ({ user }) => {
  const { name, id, ...restUser } = user;

  return (
    <>
      <h5 className="card-title">
        ({id}) {name}
      </h5>
      {toPairs(restUser).map(([key, value]) => (
        <p className="card-text" key={key}>
          {value}
        </p>
      ))}
    </>
  );
};

const Info = ({ user }) => {
  const { name, id } = user;

  return (
    <>
      <h5 className="card-title">
        {" "}
        <Link to={`/${id}`}>
          ({id}) {name}
        </Link>
      </h5>
    </>
  );
};

const User = ({ user }) => {
  const { name, id, ...restUser } = user;

  return (
    <div className="card-body text-center">
      {isEmpty(restUser) ? <Info user={user} /> : <Details user={user} />}
    </div>
  );
};

export default User;
