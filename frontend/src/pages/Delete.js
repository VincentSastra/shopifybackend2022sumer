import axios from "axios";
import React, { useState } from "react";
import { server_url } from "../constants";

export const Delete = (props) => {
  const [res, setResponse] = useState(null);

  const name = window.location.pathname.split("/").pop();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const data = ev.target.elements;
    console.log(data);
    axios
      .post(`${server_url}/catalogue/delete/${name}`, {
        deleteComment: data.deleteComment.value,
      })
      .then((res) => {
        console.log(res);
        setResponse(
          <div>
            {res.message}
            <br />
            {res.response.data}
          </div>
        );
      })
      .catch((err) => {
        setResponse(
          <div>
            {err.message}
            <br />
            {err.response.data}
          </div>
        );
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: {name}
        <br />
        Deletion Comment: <input type="text" id="deleteComment" />
        <br />
        <button type="submit">Submit</button>
      </form>
      Response:
      <br />
      {res}
    </div>
  );
};
