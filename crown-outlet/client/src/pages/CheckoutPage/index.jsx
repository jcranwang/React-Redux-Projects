import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CheckoutPage.scss";
import {
  getCartItems,
  getCartTotalPrice
} from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/CheckoutItem";
import StripeButton from "../../components/StripeButton";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  const renderItems = () => {
    return cartItems.map(item => <CheckoutItem key={item.id} item={item} />);
  };
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {renderItems()}
      <div className="total">TOTAL: {totalPrice}</div>
      <div className="test-warning">
        *Testing Mode: Please use following credit card info for testing*
        <br/>
        4242 4242 4242 4242 exp: 02/20 - cvv: 123
      </div>
      <StripeButton price={totalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
  totalPrice: getCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
