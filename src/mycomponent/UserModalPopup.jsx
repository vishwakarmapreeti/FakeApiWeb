import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Userinformation = ({ show1, handleClose1, selectedUser }) => {
 
  return (
    <Modal show={show1} onHide={handleClose1} animation={false}>
      <Modal.Header closeButton1>
        <Modal.Title>User Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>
          <p>
            <strong>Name:</strong> {selectedUser?.name}
          </p>
          <p>
            <strong>UserName:</strong> {selectedUser?.username}
          </p>
          <p>
            <strong>Email:</strong> {selectedUser?.email}
          </p>

          <p>
            <strong>address:</strong> {selectedUser?.address?.street}
          </p>

          <p>
            <strong>City:</strong> {selectedUser?.address?.city}
          </p>
          <p>
            <strong>Phone:</strong> {selectedUser?.phone}
          </p>
          <p>
            <strong>Website:</strong> {selectedUser?.website}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose1}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose1}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Userinformation;
