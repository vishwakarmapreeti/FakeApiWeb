import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Example = ({ show, handleClose, selectedPost }) => {
  const [data, setData] = useState({ comments: [] });

  const comments = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );
      const data = await response.json();

      console.log(data);
      setData({comments:data});
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (selectedPost?.id != null) {
      comments(selectedPost.id);
    }
    console.log(selectedPost);
  }, [selectedPost]);
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Post Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>
          <p>
            <strong>Id:</strong> {selectedPost?.id}
          </p>
          <p>
            <strong>Title:</strong> {selectedPost?.title}
          </p>
          <p>
            <strong>Body:</strong> {selectedPost?.body}
          </p>
        </div>

        <div>
          {" "}
          <h3>comments: ({data.comments.length})</h3>
        </div>
        {data.comments.map((comment) => (
          <article class="card bg-light mb-3">
            <header>
              <a className="fw-semibold text-decoration-none">
                <strong>Name: </strong> {comment.name}
              </a>
            </header>
            <p className="card-body px-1">
              <strong>Comment: </strong> {comment.body}
            </p>

            <p className="card-email py-1">
              <strong>Email:</strong> {comment.email}
            </p>

            <footer className="card-footer bg-white border-0 py-1 px-3">
              <button
                type="button"
                className="btn btn-link btn-sm text-decoration-none ps-0"
              >
                <i className="bi bi-hand-thumbs-up me-1"></i>(3)
              </button>
              <button
                type="button"
                className="btn btn-link btn-sm text-decoration-none"
              >
                Reply
              </button>
              <button
                type="button"
                className="btn btn-light btn-sm border rounded-4 ms-2"
              >
                <i className="bi bi-check-circle-fill text-secondary"></i> Mark
                as answer
              </button>
            </footer>
          </article>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Example;
