import React, { useState } from "react";
import ListResults from "../ListResults/ListResults";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(undefined);

  return (
    <>
      <Header />
      <SearchForm setError={setError} setUsers={setUsers} />
      <ListResults users={users} error={error} />
      <Footer />
    </>
  );
};

export default Home;
