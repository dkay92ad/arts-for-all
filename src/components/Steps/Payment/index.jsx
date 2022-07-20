import React from "react";
import { useLocation } from "react-router-dom";
import { PaymentContainer } from "./styled";
import { STUDENT_PAYMENT_INFO, TEACHER_PAYMENT_INFO } from "../config";
import { routes } from "common/config";

const Payment = () => {
  const location = useLocation();
  const isStudent = location.pathname === `${routes.HOME}${routes.STUDENT}`;
  return (
    <PaymentContainer>
      <h4>{isStudent ? STUDENT_PAYMENT_INFO : TEACHER_PAYMENT_INFO}</h4>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="AZWHBJ3KWYU7L" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay
online!"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </PaymentContainer>
  );
};

export default Payment;
