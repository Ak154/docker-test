import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/users/get-user-data"
      );
      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Table</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.age}</td>
                <td>{user.designation || "N/A"}</td>
                <td>{user.address || "N/A"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
