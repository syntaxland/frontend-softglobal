// GetUsdAccountFundBalance.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import Message from "../Message";
import Loader from "../Loader";
import { getUserUsdAccountFundBalance } from "../../redux/actions/AccountFundActions";
import ToggleUsdAccountSettings from "../settings/ToggleUsdAccountSettings";
import FundUsdAccount from "./FundUsdAccount";
import { formatAmount } from "../FormatAmount";

const GetUsdAccountFundBalance = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const getUserUsdAccountFundBalanceState = useSelector(
    (state) => state.getUserUsdAccountFundBalanceState
  );
  const { loading, error, usdFundBalance } = getUserUsdAccountFundBalanceState;
  console.log("usdFundBalance:", usdFundBalance);

  const [showFundAccount, setShowFundAccount] = useState(false);

  const [showToggleUsdAccountSettings, setShowToggleUsdAccountSettings] =
    useState(false);

  const [showDisableAccountSettings, setShowDisableAccountSettings] =
    useState(false);

  const handleFundAccountOpen = () => {
    setShowFundAccount(true);
  };

  const handleFundAccountClose = () => {
    setShowFundAccount(false);
  };

  const handleToggleFundOpen = () => {
    setShowToggleUsdAccountSettings(true);
  };

  const handleDisableFundOpen = () => {
    setShowDisableAccountSettings(true);
  };

  const handleDisableFundClose = () => {
    setShowDisableAccountSettings(false);
  };

  const handleToggleFundClose = () => {
    setShowToggleUsdAccountSettings(false);
  };

  useEffect(() => {
    dispatch(getUserUsdAccountFundBalance());
  }, [dispatch]);

  const [accountFundVisible, setAccountFundVisible] = useState(false);
  const toggleAccountFundVisible = () => {
    setAccountFundVisible(!accountFundVisible);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Col>
            <Row>
              <Col>
                <h2 className="py-2">
                  <i className="fas fa-wallet"></i> Account Fund Wallet (USD)
                </h2>{" "}
                <strong>Staus:</strong>{" "}
                {usdFundBalance?.is_diabled ? (
                  <>
                    <span className="py-2">
                      <Button
                        variant="outline-transparent"
                        onClick={handleDisableFundOpen}
                        className="rounded"
                        size="sm"
                        title="Account Fund is currently disabled. Please contact support."
                      >
                        <i
                          className="fas fa-lock"
                          style={{ fontSize: "16px", color: "red" }}
                        ></i>{" "}
                        Disabled
                      </Button>
                    </span>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline-transparent"
                      onClick={handleToggleFundOpen}
                      className="rounded"
                      size="sm"
                      title="Set Account Fund active or locked."
                    >
                      {usdFundBalance?.is_active ? (
                        <>
                          <i
                            className="fas fa-lock-open"
                            style={{
                              fontSize: "16px",
                              color: "green",
                            }}
                          ></i>{" "}
                          Active
                        </>
                      ) : (
                        <>
                          <i
                            className="fas fa-lock text-warning"
                            style={{
                              fontSize: "16px",
                              // color: "yellow",
                            }}
                          ></i>{" "}
                          Locked
                        </>
                      )}
                    </Button>
                  </>
                )}
              </Col>

              <Modal show={showFundAccount} onHide={handleFundAccountClose}>
                <Modal.Header closeButton>
                  <Modal.Title className="text-center w-100 py-2">
                    Fund Account
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>{showFundAccount && <FundUsdAccount />}</Modal.Body>
              </Modal>

              <Modal
                show={showToggleUsdAccountSettings}
                onHide={handleToggleFundClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="text-center w-100 py-2">
                    Toggle Account Fund Status
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {showToggleUsdAccountSettings && <ToggleUsdAccountSettings />}
                </Modal.Body>
              </Modal>

              <Modal
                show={showDisableAccountSettings}
                onHide={handleDisableFundClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="text-center w-100 py-2">
                    Account Fund Disabled
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className="text-center  py-2">
                    Account Fund is currently disabled. Please contact support
                    for reactivation.
                  </p>
                </Modal.Body>
              </Modal>
            </Row>

            {/* <span>Balance: </span>
            <strong>{formatAmount(usdFundBalance?.balance)} USD</strong> */}

            <Row className="d-flex justify-content-center">
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <Form.Group>
                  <Form.Label>Balance: </Form.Label>
                  <Form.Control
                    className="text-center"
                    type={accountFundVisible ? "text" : "password"}
                    value={`${formatAmount(usdFundBalance?.balance)} USD`} 
                    disabled
                  />
                  <div>
                    <span>
                      <Button
                        variant="outline"
                        className="rounded"
                        size="sm"
                        onClick={toggleAccountFundVisible}
                      >
                        {accountFundVisible ? (
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
                    ></Button>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <div className="py-3">
              <Button
                variant="primary"
                onClick={handleFundAccountOpen}
                className="rounded"
              >
                Fund USD Account
              </Button>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default GetUsdAccountFundBalance;
