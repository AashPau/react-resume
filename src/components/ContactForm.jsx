import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const ContactForm = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="shadow-lg p-5 rounded border w-75 mt-5 mb-5">
          <h2>Lets stay in touch</h2>
          <hr />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};