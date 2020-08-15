import React from "react";
import { render, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByTestId } = render(<CheckoutForm/>)

    const checkoutHeading = getByTestId(/checkoutHeading/i)

    expect(checkoutHeading.textContent).toEqual("Checkout Form")
});

test("form shows success message on submit with form details", () => {
    
    const { getByTestId } = render(<CheckoutForm/>)

    const form = getByTestId(/checkout-button/i)

    expect(form.textContent).toEqual("Checkout");
});
