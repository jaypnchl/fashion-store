import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51LFzrmSJ1vwXXgg9ItCGDdvGWJRwiGRoLsxT1zJb4TrFXinMZfaKBnKtZeIT4SsqEqk0QPI90liAr5On1sTnsMLH00TG4IHoVB";

  const onToken = (token) => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="fashion-store"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
