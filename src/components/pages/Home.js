import React, { useState } from "react";
import ListResults from "../ListResults/ListResults";
import SearchForm from "../SearchForm/SearchForm";
import CreateUser from "./CreateUser";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(undefined);

  return (
    <>
      <SearchForm setError={setError} setUsers={setUsers} />
      <ListResults users={users} error={error} />
      <CreateUser />
    </>
  );
};

export default Home;
