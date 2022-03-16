import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe('pk_test_51KdW3cL8Uq6oBZJkjiOukfpK2bvOuHUajRgUfxcNi3unRhcY53mSCttfLSlB5iDWjkPgy5slDzylyaoRhqLtgbgj00mzWkfaXO');

export default function CheckoutWrapper() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage/>
        </Elements>
    )
}