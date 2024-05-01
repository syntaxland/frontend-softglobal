// HomeScreen.js
import React from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const companies = [
  {
    name: "PaySofter",
    description:
      "Empowering seamless and secure global payments, PaySofter offers a softer payment experience for individuals and businesses alike.",
    url: "https://www.paysofter.com",
  },
  {
    name: "SellAngle",
    description:
      "An innovative online marketplace, SellAngle provides a platform for sellers and buyers to connect, trade, and thrive in today's digital economy.",
    url: "https://www.sellangle.com",
  },
  {
    name: "McDofShop",
    description:
      "Experience the convenience of online shopping with McDofShop, your go-to destination for a wide range of products, from building materials, electronics to fashion.",
    url: "https://www.mcdofshop.com",
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
      <Row>
        <Col>
          <div className="text-center">
            <hr />
            <h1 className="py-3">Welcome to Softglobal!</h1>
            <hr />
            <p>
              Discover our family of innovative companies and experience a
              softer way of doing business.
            </p>
            <Button
              variant="primary"
              className="rounded"
              size="sm"
              onClick={() => history.push("/about")}
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

          <Row>
            {companies.map((company, index) => (
              <Col key={index} md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{company.name}</Card.Title>
                    <Card.Text>{company.description}</Card.Text>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open(company.url, "_blank")}
                    >
                      Visit {company.name}
                    </Button>
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
