import React from "react";
import { useState } from "react";

import MyHeader from "./components/navbar/MyHeader";
import Footer from "./components/footer/Footer";

import usePreventEntersOnDocumentLoaded from "./hooks/usePreventEntersOnInputs";
import SearchForm from "./components/searchForm/SearchForm";
import ListResults from "./components/listResults/ListResults";

/**
 * renders the components of the app and holds the app state
 */
function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(undefined);

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
