import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Footer from "./Home/Footer";
import  "./Usertable.css";

function Usertable() {
  const [users, setUsers] = useState([]);

  const fetchUsersData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);
  return (
    <div className="outer-wrapper">
      <div className="wrapper-div">
    <div className="App" style={{paddingLeft:"3%",paddingRight:"3%"}}>
      <Table striped bordered hover size="sm" id="user">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>username</th>
            <th>phone</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
    </div>

  );
}

export default Usertable;
