import React, { Component } from "react";

export default class Topbar extends Component {
  render() {
    return (
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
                  <a href="#">this@this.com</a>
                </div>
                <div className="top_bar_content ml-auto">
                  <div className="top_bar_user">
                    <div className="user_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg"
                        alt=""
                      ></img>
                    </div>
                    <div>
                      <a href="#">Register</a>
                    </div>
                    <div>
                      <a href="#">Sign in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
