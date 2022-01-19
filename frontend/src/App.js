import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Create } from "./pages/Create";
import { Delete } from "./pages/Delete";
import { Get } from "./pages/Get";
import { List } from "./pages/List";
import { ListDeleted } from "./pages/ListDeleted";
import { Update } from "./pages/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ backgroundColor: "#BBBBBB", padding: "20px" }}>
          <Link to="/create">Create</Link> <Link to="/list">List</Link>{" "}
          <Link to="/listDeleted">Deleted</Link>
        </div>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/listDeleted" element={<ListDeleted />} />
          <Route path="/get/:name" element={<Get />} />
          <Route path="/update/:name" element={<Update />} />
          <Route path="/delete/:name" element={<Delete />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
