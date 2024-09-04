import { useEffect, useState } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";


function App() {
  const [record, setRecord] = useState([]);
  const [userName, setuserName] = useState([]);
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => setRecord(data))
      .catch((err) => console.log(err));
  }, []);
  data.userId
  fetch("https://jsonplaceholder.typicode.com/users/"+data.userId)
  return (
    <div className="App">
      {/* <Button> dd</Button> */}
      
<Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
          <th>#</th>
            <th>ID</th>
            <th>Title</th>
            <th>userPost By Name</th>

          </tr>
        </thead>
        <tbody>
        {record.map((list) => (
            <tr key={list.id}>
              <td>{list.id}</td>
              <td>{list.title}</td>
              <td>{list.userId}</td>

            </tr>
          ))}
        </tbody>
   </Table>
    </div>
  );
}

export default App;
