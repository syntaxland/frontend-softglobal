// App.js
import "./App.css";
import React from "react";
// import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import OrderSuccessPage from "./components/OrderSuccessPage";
import HomeScreen from "./components/screens/HomeScreen";
// import ProductScreen from "./components/screens/ProductScreen";
// // import FavouritesScreen from "./components/profiles/FavouritesScreen";
// import SearchScreen from "./components/screens/SearchScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import LoginScreen from "./components/screens/LoginScreen";
import FundAccount from "./components/FundAccount/FundAccount";
// import CheckoutScreen from "./components/screens/CheckoutScreen";
// import PaymentScreen from "./components/screens/PaymentScreen";
// import ShipmentScreen from "./components/screens/ShipmentScreen";
// import ReviewScreen from "./components/screens/ReviewScreen";
// import AddReviewScreen from "./components/screens/AddReviewScreen";
// import EditReviewScreen from "./components/screens/EditReviewScreen";
import CreditPointRequestScreen from "./components/screens/CreditPointRequestScreen";

// import SendEmailOtp from "./components/emailOtp/SendEmailOtp";
import VerifyEmailOtpScreen from "./components/screens/VerifyEmailOtpScreen";
import TermsAndConditionScreen from "./components/screens/TermsAndConditionScreen";
import PrivacyPolicyScreen from "./components/screens/PrivacyPolicyScreen"; 
import DeleteAccountGuideScreen from "./components/screens/DeleteAccountGuideScreen";

// import ResendEmailOtp from "./components/emailOtp/ResendEmailOtp";
// import UserProfile from "./components/profiles/UserProfile";
// import DeleteAccount from "./components/profiles/DeleteAccount";
// import ChangePassword from "./components/profiles/ChangePassword";
// import ResetPasswordRequest from "./components/profiles/ResetPasswordRequest";
// import ResetPassword from "./components/profiles/ResetPassword";
// import Orders from "./components/profiles/Orders";
// import Payments from "./components/profiles/Payments";
import PaysofterPromise from "./components/profiles/PaysofterPromiseBuyer";
import Inbox from "./components/profiles/Inbox";

import ToggleAccountSettings from "./components/settings/ToggleAccountSettings";
import MaxWithdrawalSettings from "./components/settings/MaxWithdrawalSettings";
import Settings from "./components/settings/Settings";

import UserDashboard from "./components/profiles/UserDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import SellerDashboard from "./components/sellers/SellerDashboard";
import PaysofterPromiseSeller from "./components/sellers/PaysofterPromiseSeller";
import CreateSellerAccount from "./components/sellers/CreateSellerAccount";
import CreateBusinessStatus from "./components/sellers/CreateBusinessStatus";

import BusinessOwnerDetail from "./components/sellers/BusinessOwnerDetail";
import SellerBankAccount from "./components/sellers/SellerBankAccount";
import SellerBvn from "./components/sellers/SellerBvn";
import SellerPhoto from "./components/sellers/SellerPhoto";

// import PromiseMessage from "./components/promise/PromiseMessage";
import SellerPromiseMessage from "./components/promise/SellerPromiseMessage";
import BuyerPromiseMessage from "./components/promise/BuyerPromiseMessage";

import CreateSupportTicket from "./components/support/CreateSupportTicket";
import SupportTicket from "./components/support/SupportTicket";
import UserReplySupportTicket from "./components/support/UserReplySupportTicket";
import AdminReplySupportTicket from "./components/support/AdminReplySupportTicket";

import CreateFeedback from "./components/feedback/CreateFeedback";

function App() {
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  return (
    <Router>
      {/* <Router forceRefresh={true}> */}
      <Container fluid>
        {/* <section class="container-fliud"> */}
        <Header />
        <main className=" py-3">
          <Route exact path="/" component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/verify-email-otp" component={VerifyEmailOtpScreen} />
          <Route path="/fund-account" component={FundAccount} />
          <Route
            path="/credit-point-request/"
            component={CreditPointRequestScreen} 
          />
          <Route
            path="/terms-and-conditions"
            component={TermsAndConditionScreen}
          />
          <Route path="/privacy-policy" component={PrivacyPolicyScreen} />
          <Route path="/account-deletion-guide" component={DeleteAccountGuideScreen} />

          <Route path="/settings" component={Settings} />
          <Route path="/set-max-fund" component={MaxWithdrawalSettings} />
          <Route path="/toggle-fund" component={ToggleAccountSettings} />

          <Route path="/promise/buyer" component={PaysofterPromise} />
          <Route path="/promise/seller/" component={PaysofterPromiseSeller} />
          <Route
            path="/create-seller-account/"
            component={CreateSellerAccount}
          />
          <Route
            path="/create-business-status/"
            component={CreateBusinessStatus}
          />
          <Route path="/seller/details/" component={BusinessOwnerDetail} />
          <Route path="/seller/bank/" component={SellerBankAccount} />
          <Route path="/seller/bvn/" component={SellerBvn} />
          <Route path="/seller/photo/" component={SellerPhoto} />

          <Route
            path="/seller/promise/message/:id"
            component={SellerPromiseMessage}
          />
          <Route
            path="/buyer/promise/message/:id"
            component={BuyerPromiseMessage}
          />

          <Route path="/dashboard/users/" component={UserDashboard} />
          <Route path="/dashboard/sellers" component={SellerDashboard} />
          <Route path="/dashboard/admin" component={AdminDashboard} />

          <Route
            path="/create-support-ticket"
            component={CreateSupportTicket}
          />
          <Route
            path="/user-reply-support-ticket/:id"
            component={UserReplySupportTicket}
          />
          <Route
            path="/admin-reply-support-ticket/:id"
            component={AdminReplySupportTicket}
          />
          <Route path="/support/tickets/" component={SupportTicket} />

          <Route path="/create-feedback/" component={CreateFeedback} />
          <Route path="/inbox" component={Inbox} />
          {/* 
          <Route path="/products/search/:keyword" component={SearchScreen} />
          <Route path="/checkout" component={CheckoutScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipment/:id" component={ShipmentScreen} />
          <Route path="/send-email-otp" component={SendEmailOtp} />
          <Route path="/resend-email-otp" component={ResendEmailOtp} />
          <Route
            path="/order-success/:reference"
            component={OrderSuccessPage}
          />
          <Route path="/user/profile" component={UserProfile} />
          <Route path="/delete-account" component={DeleteAccount} />
          <Route path="/change-password" component={ChangePassword} />
          <Route
            path="/reset-password-request"
            component={ResetPasswordRequest}
          />
          <Route path="/reset-password/:token" component={ResetPassword} />
          <Route path="/orders" component={Orders} />
          <Route path="/payments" component={Payments} />
          
          <Route path="/review-list/:productId" component={ReviewScreen} />

          <Route path="/add-review/" component={AddReviewScreen} />
          <Route path="/edit-review/" component={EditReviewScreen} />


          */}
        </main>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
