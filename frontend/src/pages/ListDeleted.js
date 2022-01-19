import React, { useEffect, useState } from "react";
import axios from "axios";
import { server_url } from "../constants";

export const ListDeleted = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    updateData();
  }, []);

  const updateData = () => {
    axios
      .get(`${server_url}/catalogue/deleted`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Delete Comment</th>
          <th>Restore</th>
        </tr>
        {data.map((row) => (
          <tr>
            <td>{row.name}</td>
            <td>{row.deleteComment}</td>
            <td>
              <button
                onClick={() => {
                  axios
                    .post(`${server_url}/catalogue/restore/${row.name}`)
                    .then(updateData);
                }}
              >
                Restore
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
