import { useEffect, useState } from "react";
import "../App.css";
import Table from "react-bootstrap/Table";
import Example from "./PostModalPopup";

import Userinformation from "./UserModalPopup";

import "./postTable.css";

const PostTable = ({}) => {
  const [record, setRecord] = useState({ posts: [], users: [], photos: [] });
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);


  const [show, setShow] = useState(false); // For post modal
  const [show1, setShow1] = useState(false); // For user modal

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false); //for user model

  const userData = async () => {
    try {
      const [postsResponse, userResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts/"),
        fetch("https://jsonplaceholder.typicode.com/users/"),
        // fetch("https://jsonplaceholder.typicode.com/photos?albumId=5&&id=202"),
      ]);
      const posts = await postsResponse.json();
      const users = await userResponse.json();
      
      // const comments = await userComments.json();

      setRecord({ posts, users });
    
      // console.log({ posts, users, comments });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  //show the post modal
  const idClick = (list) => {
    setSelectedPost(list);
    setShow(true);
    console.log(list);
  };

  // show the user modal
  const nameClick = (list) => {
    const userName = record.users.find((item) => item.id === list.userId);
    setSelectedUser(userName);
    setShow1(true);
    console.log(userName);
  };

  // table
  return (
    <div
      className="App"
      style={{
        paddingLeft: "3%",
        paddingRight: "3%",
      }}
    >
      {/* <div>
        <img src={"https://via.placeholder.com/600/6a0f83"} alt="A placeholder image" />
      </div> */}

      <div className="outer-wrapper">
        <div className="table-wrapper">
          <Table striped bordered hover size="sm" id="post">
            <thead>
              <tr>
                <th>id</th>
                <th>Title</th>
                <th>User Post By Name</th>
              </tr>
            </thead>

            <tbody>
              {record.posts.map((list) => (
                <tr key={list.id}>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => idClick(list)}
                  >
                    {list.id}
                  </td>
                  <td>{list.title}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => nameClick(list)}
                  >
                    {record.users.find((item) => item.id === list.userId).name}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <Example
        show={show}
        handleClose={handleClose}
        selectedPost={selectedPost}
      
      />

      <Userinformation
        show1={show1}
        handleClose1={handleClose1}
        selectedUser={selectedUser}
      />

              
    </div>
  );
};

export default PostTable;
