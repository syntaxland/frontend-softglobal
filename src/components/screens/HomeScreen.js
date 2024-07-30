// HomeScreen.js
import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AndriodImage from "../../images/andriod.jpg";
import IosImage from "../../images/ios.jpg";

const companies = [
  {
    name: "PaySofter",
    description:
      "Empowering seamless and secure global payments, PaySofter offers a softer payment experience for individuals and businesses alike.",
    url: "https://paysofter.com",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.jondebosco.paysofter",
    iosLink:
      "https://apps.apple.com/store/apps/details?id=com.jondebosco.paysofter",
  },
  {
    name: "SellAngle",
    description:
      "An innovative online marketplace, SellAngle provides a platform for sellers and buyers to connect, trade, and thrive in today's digital economy.",
    url: "https://sellangle.com",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.jondebosco.sellangle",
    iosLink:
      "https://apps.apple.com/store/apps/details?id=com.jondebosco.sellangle",
  },
  {
    name: "McDofShop",
    description:
      "Experience the convenience of online shopping with McDofShop, your go-to destination for a wide range of products, from building materials, electronics to fashion.",
    url: "https://mcdofshop.com",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.jondebosco.mcdofshop",
    iosLink:
      "https://apps.apple.com/store/apps/details?id=com.jondebosco.mcdofshop",
  },
];

const quotes = [
  "Empowering seamless and secure global payments.",
  "Connecting sellers and buyers to thrive in the digital economy.",
  "Your go-to destination for online shopping convenience.",
];

function HomeScreen({ history }) {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    centerMode: true,
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
          <div className="text-center">
            <hr />
            <h1 className="py-3">Welcome to Softglobal!</h1>
            <hr />
            <p>
              Discover our family of innovative companies, partners and
              experience a softer way of doing business.
            </p>
            <Button
              variant="primary"
              className="rounded"
              size="sm"
              onClick={() => history.push("/about")}
              disabled
            >
              Learn More
            </Button>
          </div>

          <hr />

          <div>
            <Slider {...settings}>
              {quotes.map((quote, index) => (
                <div key={index} className="quote-slide">
                  <p className="text-center py-2">
                    <i className="fas fa-quote-left"></i> {quote}{" "}
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>
              ))}
            </Slider>
          </div>

          <hr />
          <h1 className="py-3 text-center">Our Companies and Partners</h1>
          <hr />

          <Row>
            {companies.map((company, index) => (
              <Col key={index} md={4}>
                <Card className="mb-3 text-center">
                  <Card.Body>
                    <Card.Title>{company.name}</Card.Title>
                    <Card.Text>{company.description}</Card.Text>
                    <Button
                      variant="primary"
                      className="rounded w-100"
                      onClick={() => window.open(company.url, "_blank")}
                    >
                      Visit {company.name}
                    </Button>
                    <hr />
                    <div
                      onClick={() => window.open(company.androidLink, "_blank")}
                      style={{ cursor: "pointer" }}
                    >
                      <Card.Img
                        src={AndriodImage}
                        alt="Download on Android"
                        style={{ width: 180, height: 40, marginBottom: 10 }}
                      />
                    </div>
                    <div
                      // onClick={() => window.open(company.iosLink, "_blank")}
                      style={{ cursor: "pointer" }}
                    >
                      <Card.Img
                        src={IosImage}
                        alt="Download on iOS"
                        style={{ width: 180, height: 40 }}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
