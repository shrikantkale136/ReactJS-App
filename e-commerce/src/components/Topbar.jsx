import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
export default class Topbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <header className="text-center">
          <div className="top_bar">
            <div className="container">
              <div className="row">
                <div className="col d-flex flex-row">
                  <div className="top_bar_contact_item">
                    <div className="top_bar_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png"
                        alt=""
                      ></img>
                    </div>
                    +92 123 456 789
                  </div>
                  <div className="top_bar_contact_item">
                    <div className="top_bar_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png"
                        alt=""
                      ></img>
                    </div>
                    <a href="#">support@lululemon.com</a>
                  </div>
                  <div className="top_bar_content ml-auto">
                    <div className="top_bar_user">
                      
                      <div >
                        <Form className="mr-4">
                          <Form.Group  controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="search" />
                          </Form.Group>
                        </Form>
                        
                      </div>
                      <div className="user_icon">
                        <img
                          src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg"
                          alt=""
                        ></img>
                      </div>
                      <div>
                        <a href="#" onClick={() => {
                            this.handleModal();
                          }}>Sign in</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Modal
          show={this.state.show}
          onHide={() => this.handleModal()}
          size="xs"
          aria-labelledby="contained-modal-title-vcenter"
        >
          {/* <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div class="login-form">
              <div class="main-div">
                <div class="panel">
                  <h2>Admin Login</h2>
                  <p>Please enter your email and password</p>
                </div>
                <form id="Login">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail"
                      placeholder="Email Address"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div class="forgot">
                    <a href="#">Forgot password?</a>
                  </div>
                  <Button variant="primary">
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button
              onClick={() => {
                this.handleModal();
              }}
            >
              Close
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}
