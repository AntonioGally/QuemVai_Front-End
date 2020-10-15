import React from "react";

import Header from "../../FrontPage/Header";
import NavBar from "../../FrontPage/NavBar";
import ForgotPasswordForm from "../../FrontPage/ForgotPasswordForm";
import Footer from "../../FrontPage/Footer";

const ForgotPassword: React.FC = () => {
  return (
    <div>
      <Header />
      <NavBar />
    	<ForgotPasswordForm />
      <Footer />
    </div>
  );
};

export default ForgotPassword;
