import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'


const PUBLIC_KEY = "pk_test_51P5Ix2FU6mSlgK5VHmg90blNc166by70jmmPri5ggfDN5UdIuybBMRqong9n3jgeBrODlzJRqMUfq8vZaW1JUuAA00Hd3lVkGE"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
