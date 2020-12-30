import React, { Component } from "react";
export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="main_nav">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="main_nav_content d-flex flex-row">
                  <div className="main_nav_menu">
                    <ul className="standard_dropdown main_nav_dropdown">
                      <li>
                        <a href="#">
                          Home<i className="fa fa-chevron-down"></i>
                        </a>
                      </li>
                      <li className="hassubs">
                        {" "}
                        <a href="#">
                          Laptop<i className="fa fa-chevron-down"></i>
                        </a>
                        <ul>
                          <li>
                            {" "}
                            <a href="#">
                              Lenovo<i className="fas fa-chevron-down"></i>
                            </a>
                            <ul>
                              <li>
                                <a href="#">
                                  Lenovo 1<i className="fas fa-chevron-down"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Lenovo 3<i className="fas fa-chevron-down"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Lenovo 2<i className="fas fa-chevron-down"></i>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              DELL<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              APPLE<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              HP<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="hassubs">
                        {" "}
                        <a href="#">
                          Featured Brands<i className="fas fa-chevron-down"></i>
                        </a>
                        <ul>
                          <li>
                            {" "}
                            <a href="#">
                              APPLE<i className="fas fa-chevron-down"></i>
                            </a>
                            <ul>
                              <li>
                                <a href="#">
                                  Laptop<i className="fas fa-chevron-down"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Mobiles<i className="fas fa-chevron-down"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Ipads<i className="fas fa-chevron-down"></i>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              Samsung<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Lenovo<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              DELL<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="hassubs">
                        {" "}
                        <a href="#">
                          Pages<i className="fas fa-chevron-down"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="shop.html">
                              Shop<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="product.html">
                              Product<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="blog.html">
                              Blog<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="blog_single.html">
                              Blog Post<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="regular.html">
                              Regular Post<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="cart.html">
                              Cart<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="contact.html">
                              Contact<i className="fas fa-chevron-down"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog.html">
                          Blog<i className="fas fa-chevron-down"></i>
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          Contact<i className="fas fa-chevron-down"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu_trigger_container ml-auto">
                    <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                      <div className="menu_burger">
                        <div className="menu_trigger_text">menu</div>
                        <div className="cat_burger menu_burger_inner">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
