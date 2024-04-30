// SelectCurrency.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col } from "react-bootstrap";
import { selecteCurrency } from "../../redux/actions/settingsActions";
import { getUserProfile } from "../../redux/actions/userProfileActions";
import Loader from "../Loader";
import Message from "../Message";
import Select from "react-select";

const CURRENCY_CHOICES = [
  ["USD", "USD"],
  ["NGN", "NGN"],
];

function SelectCurrency({ history }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [dispatch, userInfo, history]);

  const selecteCurrencyState = useSelector(
    (state) => state.selecteCurrencyState
  );
  const { loading, success, error } = selecteCurrencyState;

  const userProfile = useSelector((state) => state.userProfile);
  const { profile } = userProfile;

  const [currency, setCurrency] = useState(profile?.selected_currency);

  const handleCurrencyChange = (selectedOption) => {
    const selectedCurrency = selectedOption.value;
    setCurrency(selectedCurrency);

    const currencyData = {
      currency: selectedCurrency,
    };
    dispatch(selecteCurrency(currencyData));
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col>
          {loading && <Loader />}
          {error && <Message variant="danger">{error}</Message>}
          {success && (
            <Message variant="success">
              {currency} selected successfully.
            </Message>
          )}
          <Form>
            <Form.Group controlId="currency">
              <Form.Group>
                <Select
                  options={CURRENCY_CHOICES.map(([value, label]) => ({
                    value,
                    label,
                  }))}
                  value={{ value: currency, label: currency }}
                  onChange={handleCurrencyChange}
                  placeholder="Select Currency"
                  className="rounded py-2 mb-2"
                  required
                />
              </Form.Group>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SelectCurrency;
