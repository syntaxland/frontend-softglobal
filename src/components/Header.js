// Header.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { getUserProfile } from "../redux/actions/userProfileActions";
import { listSupportTicket } from "../redux/actions/supportActions";
import {
  getBuyerPromises,
  getSellerPromises,
} from "../redux/actions/PromiseActions";

import { getUserMessages } from "../redux/actions/messagingActions";
import { logout } from "../redux/actions/userActions";
import "./Header.css";
import logoImage from "../images/logo.png";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userProfile = useSelector((state) => state.userProfile);
  const { profile } = userProfile;

  const getUserMessagesState = useSelector(
    (state) => state.getUserMessagesState
  );
  const { messages } = getUserMessagesState;

  const msgCounted = messages?.reduce(
    (total, userMessages) => total + userMessages.msg_count,
    0
  );
  const getSellerPromiseState = useSelector(
    (state) => state.getSellerPromiseState
  );
  const { promises: sellerPromises } = getSellerPromiseState;

  const getBuyerPromiseState = useSelector(
    (state) => state.getBuyerPromiseState
  );
  const { promises: buyerPromises } = getBuyerPromiseState;

  const sellerMsgCounted = sellerPromises?.reduce(
    (total, userMessages) => total + userMessages.seller_msg_count,
    0
  );

  const buyerMsgCounted = buyerPromises?.reduce(
    (total, userMessages) => total + userMessages.buyer_msg_count,
    0
  );

  const listSupportTicketState = useSelector(
    (state) => state.listSupportTicketState
  );
  const { tickets } = listSupportTicketState;

  const supportMsgCounted = tickets?.reduce(
    (total, userMessages) => total + userMessages.user_msg_count,
    0
  );

  const [keyword, setKeyword] = useState("");
  const [greeting, setGreeting] = useState("");
  const [isAccountIdCopied, setIsAccountIdCopied] = useState(false);
  const [isSecurityCodeCopied, setIsSecurityCodeCopied] = useState(false);
  const [securityCodeVisible, setSecurityCodeVisible] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  const formatAccountID = (accountID) => {
    if (accountID) {
      return accountID.match(/.{1,4}/g).join("-");
    }
    return "";
  };

  const copyToClipboard = (text, setIsCopied) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const toggleSecurityCodeVisibility = () => {
    setSecurityCodeVisible(!securityCodeVisible);
  };

  useEffect(() => {
    // Determine the greeting based on the current hour
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting(`Good Morning!`);
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting(`Good Afternoon!`);
    } else {
      setGreeting(`Good Evening!`);
    }
  }, []);

  useEffect(() => {
    // Fetch user profile if userInfo is available
    if (userInfo) {
      dispatch(getUserProfile());
      dispatch(getUserMessages());
      dispatch(getSellerPromises());
      dispatch(getBuyerPromises());
      dispatch(listSupportTicket());
    }
  }, [dispatch, userInfo]);

  return (
    <header>
      <Row>
        <Col>
          <Navbar
            // bg="primary"
            variant="dark"
            className="custom-dark-blue"
            expand="md"
            sticky="top"
            style={{ backgroundColor: '#00BFFF' }}
          >
            <Container fluid>
              <Navbar.Brand as={Link} to="/">
                {/* <i className="fas fa-home" style={{ fontSize: "16px" }}></i>{" "} */}
                <img
                  src={logoImage}
                  alt="Softglobal"
                  style={{
                    maxHeight: "40px",
                    maxWidth: "80px",
                    height: "auto",
                    width: "auto",
                  }}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarCollapse" />
              <Navbar.Collapse id="navbarCollapse">
                <Form
                  className="searchBarContainer d-flex flex-grow-1 mt-2"
                  onSubmit={searchHandler}
                  inline={!userInfo}
                >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="mr-auto ml-auto rounded"
                    aria-label="Search"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    className="mr-auto ml-auto rounded"
                  >
                    <i
                      className="fas fa-search"
                      style={{ fontSize: "16px" }}
                    ></i>
                  </Button>
                </Form>

                <Nav className="mr-auto ml-auto">
                  {userInfo ? (
                    <Nav.Link as={Link} to="/dashboard/users">
                      <i
                        className="fas fa-dashboard"
                        style={{ fontSize: "16px" }}
                      ></i>{" "}
                      {/* Dashboard */}
                    </Nav.Link>
                  ) : (
                    <span>
                      {/* <Nav.Link as={Link} to="/login">
                        <i
                          className="fas fa-dashboard"
                          style={{ fontSize: "16px" }}
                        ></i>{" "}
                        Dashboard
                      </Nav.Link> */}
                    </span>
                  )}

                  <Nav.Link>
                    <i
                      className="fas fa-hand-peace"
                      style={{ fontSize: "16px" }}
                    ></i>{" "}
                    <span>{greeting}</span>
                  </Nav.Link>

                  {userInfo ? (
                    <div>
                      <NavDropdown
                        className="profile-dropdown custom-dropdown"
                        align="end"
                        title={
                          userInfo.first_name
                            ? userInfo.first_name.charAt(0).toUpperCase() +
                              userInfo.first_name.slice(1)
                            : ""
                        }
                      >
                        <>
                          <span>
                            <i className="fas fa-id-card"></i> Account ID:{" "}
                            {formatAccountID(profile.account_id)}
                          </span>

                          <Button
                            variant="outline"
                            className="rounded"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                profile.account_id,
                                setIsAccountIdCopied
                              )
                            }
                          >
                            {isAccountIdCopied ? (
                              <span>
                                <i className="fa fa-check"></i> Copied
                              </span>
                            ) : (
                              <span>
                                <i className="fa fa-copy"></i>
                              </span>
                            )}
                          </Button>

                          <NavDropdown.Divider />
                          <span>
                            <i className="fas fa-key"></i> Security Code:{" "}
                            {securityCodeVisible
                              ? profile.security_code
                              : "****"}
                            <Button
                              variant="outline"
                              className="rounded"
                              size="sm"
                              onClick={toggleSecurityCodeVisibility}
                            >
                              {securityCodeVisible ? (
                                <span>
                                  <i className="fa fa-eye-slash"></i> Hide
                                </span>
                              ) : (
                                <span>
                                  <i className="fa fa-eye"></i> Show
                                </span>
                              )}
                            </Button>
                          </span>
                          <Button
                            variant="outline"
                            className="rounded"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                profile.security_code,
                                setIsSecurityCodeCopied
                              )
                            }
                          >
                            {isSecurityCodeCopied ? (
                              <span>
                                <i className="fa fa-check"></i> Copied
                              </span>
                            ) : (
                              <span>
                                <i className="fa fa-copy"></i>
                              </span>
                            )}
                          </Button>

                          <NavDropdown.Divider />
                          {/* <Nav.Link
                            as={Link}
                            to="/dashboard/sellers"
                            className="dropdown-item"
                          >
                            {" "}
                            <i className="fas fa-dashboard"></i> Goto Seller
                            Dashboard{" "}
                          </Nav.Link> */}

                          <div>
                            {profile.is_seller ? (
                              <>
                                <Nav.Link as={Link} to="/dashboard/sellers">
                                  <i
                                    className="fas fa-dashboard"
                                    style={{ fontSize: "16px" }}
                                  ></i>{" "}
                                  Go to Seller Dashboard
                                </Nav.Link>
                              </>
                            ) : (
                              <>
                                <div>
                                  <Nav.Link
                                    as={Link}
                                    to="/create-seller-account"
                                  >
                                    <i
                                      className="fas fa-user"
                                      style={{ fontSize: "16px" }}
                                    ></i>{" "}
                                    Create Seller Account
                                  </Nav.Link>
                                </div>
                              </>
                            )}
                          </div>

                          <NavDropdown.Divider />

                          <div>
                            {userInfo ? (
                              <>
                                <Nav.Link as={Link} to="/inbox">
                                  <i
                                    className="fas fa-message"
                                    style={{ fontSize: "16px" }}
                                  ></i>{" "}
                                  Inbox{" "}
                                  {msgCounted +
                                    sellerMsgCounted +
                                    buyerMsgCounted >
                                    0 && (
                                    <span className="msg-counter">
                                      {msgCounted +
                                        sellerMsgCounted +
                                        buyerMsgCounted}
                                    </span>
                                  )}
                                </Nav.Link>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                          <NavDropdown.Divider />

                          <div>
                            <Nav.Link
                              as={Link}
                              to="/settings"
                              // className="dropdown-item"
                            >
                              {" "}
                              <i className="fas fa-gear"></i> Settings
                            </Nav.Link>
                          </div>
                          <NavDropdown.Divider />

                          <div>
                            {userInfo ? (
                              <>
                                <Nav.Link as={Link} to="/support/tickets/">
                                  <i
                                    className="fas fa-question-circle"
                                    style={{ fontSize: "16px" }}
                                  ></i>{" "}
                                  Support{" "}
                                  {supportMsgCounted > 0 && (
                                    <span className="msg-counter">
                                      {supportMsgCounted}
                                    </span>
                                  )}
                                </Nav.Link>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                          <NavDropdown.Divider />

                          <div>
                            {userInfo ? (
                              <>
                                <Nav.Link as={Link} to="/create-feedback/">
                                  <i
                                    className="fas fa-comment-dots"
                                    style={{ fontSize: "16px" }}
                                  ></i>{" "}
                                  Feedback
                                </Nav.Link>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                          <NavDropdown.Divider />

                          <div>
                            {profile.is_superuser || profile.is_staff ? (
                              <>
                                <Nav.Link as={Link} to="/dashboard/admin">
                                  <i
                                    className="fas fa-dashboard"
                                    style={{ fontSize: "16px" }}
                                  ></i>{" "}
                                  Admin
                                </Nav.Link>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                          <NavDropdown.Divider />
                        </>
                      </NavDropdown>
                    </div>
                  ) : (
                    <NavDropdown
                      title={
                        <i
                          className="fa fa-user-circle"
                          style={{ fontSize: "16px" }}
                        ></i>
                      }
                      className="profile-dropdown custom-dropdown"
                      align="end"
                    >
                      <Nav.Link
                        as={Link}
                        to="/register"
                        className="dropdown-item"
                      >
                        Register{" "}
                        <i
                          className="fa fa-sign-in"
                          style={{ fontSize: "16px" }}
                        ></i>
                      </Nav.Link>
                    </NavDropdown>
                  )}
                  {!userInfo ? (
                    <Nav.Link as={Link} to="/login">
                      Login{" "}
                      <i
                        className="fa fa-sign-in"
                        style={{ fontSize: "16px" }}
                      ></i>
                    </Nav.Link>
                  ) : (
                    <Nav.Link onClick={logoutHandler}>
                      Logout{" "}
                      <i
                        className="fas fa-sign-out-alt"
                        style={{ fontSize: "16px" }}
                      ></i>
                    </Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
