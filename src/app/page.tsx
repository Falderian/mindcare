"use client";
import React, { useEffect, useState } from "react";
import { Space } from "antd";
import axios from "axios";
import useNotify from "../hooks/useNotify";

const App: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const { notifyPromise } = useNotify();

  useEffect(() => {
    notifyPromise(axios.get("api/users"));
  }, [notifyPromise]);

  return (
    <Space direction="vertical">
      <h1>User List</h1>
      {error ? (
        <div style={{ color: "red" }}>Error: {error}</div>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}
    </Space>
  );
};

export default App;
