import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { User } from "./components/user/user";

import MyHeader from "./components/navbar/myHeader";
import Footer from "./components/footer/footer";

import usePreventEntersOnDocumentLoaded from "./hooks/usePreventEntersOnDocumentLoaded";
import SearchForm from "./components/searchForm/searcForm";
import ListResults from "./components/listResults/listResults";

/**
 * renders the components of the app and have the single responsibility of the logic
 */
function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(undefined);

  usePreventEntersOnDocumentLoaded();

  return (
    <>
      <MyHeader />
      <SearchForm setError={setError} setUsers={setUsers} />
      <ListResults users={users} error={error} />
      <Footer />
    </>
  );
}

export default App;
