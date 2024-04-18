import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51P5Ix2FU6mSlgK5VHmg90blNc166by70jmmPri5ggfDN5UdIuybBMRqong9n3jgeBrODlzJRqMUfq8vZaW1JUuAA00Hd3lVkGE"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}