import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";

export const dataContext = React.createContext();

function App() {
  const [fetchResult, setFetchResult] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/microsoft/WSL/issues?page=${page}&q=is%3Aissue+is%3Aopen`
    )
      .then((res) => res.json())
      .then((result) => {
        setFetchResult(result);
      });
  }, [setFetchResult]);
  return (
    <div>
      <dataContext.Provider value={fetchResult}>
        <List></List>
      </dataContext.Provider>
    </div>
  );
}

export default App;
