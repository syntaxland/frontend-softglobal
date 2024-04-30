// HomeScreen.js
import React from "react";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const quotes = [
  "For a softer payment experience...",   
  "Softer Pays, Any Day!",
  "Globally Pay, Live Softer!",
  "Soft Pays, PaySofter Stays!",
  "Pay Smoother, Choose PaySofter!",
  "PaySofter.com: Global Payments, Softer Vibes!",
  "Your Softer Pay Companion!",
  "Smooth Payments, Sharp Results - Choose PaySofter!",
  "In the Symphony of Payments, PaySofter Sways.",
  "Pay Globally, Stay Softer!",
  "Softening Your Every Pay Day!",
  "Soft Pays, Bright Rays - It's PaySofter Always.",
  "PaySofter: Pay, Stay Soft!",
  "Softer Pays, Any Place!",
  "Where Transactions Meet Tranquility - PaySofter.",
  "Your Oasis for Softer Payments!",
  "Pay Bliss, Choose Softer!",
  "For Payments Clear, The Softer Frontier.",
  "Your Partner for Softer Payments!",
  "Every Pay, a Pleasure in Softness!",
  "Soften Payments, Go Global!",
  "In the World of Payments, PaySofter Plays.",
  "Crafted for Humans, Softened for You!",
  "Soft Solutions, Seamless Payments - PaySofter!",
  "Making Payments Painless - Welcome to PaySofter!",
  "Soften Your Wallet with PaySofter!",
  "Softer Pay, Swiftly Sway - PaySofter Every Day.",
  "Softer Pays, Brighter Days - PaySofter's Ways.",
  "Soft Pays, Brighter Arrays - PaySofter Stays.",
  "Your Pay Haven, Where Experiences Soften!",
  "Where Paying Feels Effortless.",
  "Ease into Payments with PaySofter!",
  "Smooth Pays, Brighter Days - PaySofter Stays.",
  "Soft on Process, Solid on Payments - PaySofter!",
  "Softly Pay, Swiftly Sway - PaySofter Every Day.",
  "Pay Easy, Live Softer!",
  "Your Transactions, Our Soft Touch - PaySofter.",
  "Softer Ways to Pay Every Day!",
  "Your Pay Haven, Where Experiences Soften!",
  "Global Pay, Softer Way!",
  "Where Transactions Meet Tranquility - PaySofter.",
  "PaySofter: Where Every Transaction Counts!",
  "Softening the Paying Experience - PaySofter Unleashed!",
  "Paying? Go Softer, Go Global!",
  "Soften Payments, Go Global!",
  "Pay Globally, Pay Softer!",
  "Your Oasis for Softer Payments!"
];

function HomeScreen({ history }) {
  // const dispatch = useDispatch(); 

  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // fade: true,
    focusOnSelect: true,
    centerMode: true,
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center">
            <hr />
            <h1 className="py-3">Your Softer Experience</h1>
            <hr />
            {/* <PromoProductScroll /> */}
            <span>
              {/* Although we know many SOFT ways of doing things and making
              payments, there's yet a SOFTER way of going about it. */}
              In the realm of SOFT ways of doing things, seamless transactions
              and convenient payments, there exists yet a SOFTER way of going
              about them at a level of sophistication beyond the ordinary.{" "}
            </span>
            <Button
              variant="primary"
              className="rounded"
              size="sm"
              onClick={() => history.push("/register")}
            >
              Create A Free Account <i className="fas fa-sign-in"></i>
            </Button>
          </div>

          <div className="text-center">
            <hr />
            <h1 className="py-3">Selling Point</h1>
            <hr />
            {/* <PromoProductScroll /> */}
            <span>
              {/* Wearied of never ending clause: "pay on delivery" between sellers
              and buyers and the mistrust that ensues? Paysofter Promise fills
              in this gap! With Paysofter Promise option, the payment made to a
              seller (using the buyer's funded Paysofter Account Fund) is
              escrowed or placed in custody until a specified condition between
              the buyer and seller is fulfilled.  */}
              {/* Tired of the persistent uncertainty surrounding the 'pay on
              delivery' scenarios between sellers and buyers, coupled with the
              resulting lack of trust? Paysofter Promise fills in this gap!
              Through the Paysofter Promise feature, payments made to a seller
              (utilizing the buyer's funded Paysofter Fund) are securely held in
              escrow until specified conditions agreed upon by both buyer and
              seller, are met. */}
              Fade up with the persistent uncertainty surrounding the 'pay on
              delivery' scenarios between sellers and buyers, coupled with the
              resulting lack of trust? Paysofter Promise fills in this gap! With
              Paysofter Promise, payments made to a seller (utilizing the
              buyer's funded Paysofter Account Fund) are securely held in escrow
              until specified conditions agreed upon by both the buyer and seller
              are met.
            </span>
            <Button
              variant="primary"
              className="rounded"
              size="sm"
              onClick={() => history.push("/register")}
            >
              Open A Free Account <i className="fas fa-sign-in"></i>
            </Button>
          </div>

          <div className="text-center">
            <hr />
            <h1 className="py-3">Our Distinctive Approach</h1>
            {/* <h1 className="py-3">Our Experience</h1> */}
            <hr />
            {/* <PromoProductScroll /> */}
            <span>
              {/* While asleep, Paysofter actively works for you. Active with work?
              Paysofter passively earns on your behalf rewarding your past
              endeavours... */}
              Even when you're asleep, Paysofter is actively working for you.
              Engrossed in your daily tasks? Paysofter effortlessly generates
              earnings on your behalf, rewarding your past endeavours...{" "}
            </span>
            <Button
              variant="primary"
              className="rounded"
              size="sm"
              onClick={() => history.push("/register")}
            >
              Register <i className="fas fa-sign-in"></i>
            </Button>
          </div>

          <div className="text-center">
            <hr />
            {/* <h1 className="py-3">Guiding You Every Step</h1> */}
            <h1 className="py-3">Holding Your Hands</h1>
            <hr />
            {/* <PromoProductScroll /> */}
            <span>
              {/* Here comes a system that rewards and gives credit points to every
              transaction payment effort... Don't have a Paysofter account?
              You're just about 3 minutes away! Sign up for a much softer
              payment experience. A gateway built for all humans! */}
              Here comes a system that recognizes and awards credit points for
              each transactional effort. Don't possess a Paysofter account yet?
              You're merely three minutes away! Embark on a journey towards a
              remarkably smoother and softer payment experience. A gateway
              crafted for every individual!"{" "}
            </span>
            <Button
              variant="primary"
              className="rounded"
              size="sm"
              onClick={() => history.push("/register")}
            >
              Sign up <i className="fas fa-sign-in"></i>
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
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
