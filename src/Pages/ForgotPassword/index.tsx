import React from "react";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import ForgotPasswordForm from "../../components/ForgotPasswordForm";
import Footer from "../../components/Footer";

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
