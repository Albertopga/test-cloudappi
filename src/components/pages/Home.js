import React, { useState } from "react";
import ListResults from "../listResults/ListResults";
import SearchForm from "../searchForm/SearchForm";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(undefined);

  return (
    <>
      <SearchForm setError={setError} setUsers={setUsers} />
      <ListResults users={users} error={error} />
    </>
  );
};

export default Home;