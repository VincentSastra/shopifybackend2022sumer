import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Create } from "./pages/Create";
import { Get } from "./pages/Get";
import { List } from "./pages/List";
import { Update } from "./pages/Update";

function App() {
  return (
    <div className="App">
      <Router>
      <div style={{backgroundColor: "#BBBBBB", padding: "20px"}}>
          <Link to="/create">Create</Link>
          {" "}
          <Link to="/list">List</Link>
        </div>
        <Routes>
          <Route path="/list" element={List()} />
          <Route path="/get/:name" element={Get()} />
          <Route path="/update/:name" element={Update()} />
          <Route path="/create" element={Create()} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
