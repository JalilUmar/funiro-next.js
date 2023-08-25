import { loadStripe, Stripe } from '@stripe/stripe-js'

export const checkOut = async ({ lineItem }: any) => {
    let stripePromise: any = Promise<Stripe | null>
    const publishableKey = process.env.NEXT_PUBLIC_API_KEY

    const getStripe = () => {
        if (!stripePromise && !!publishableKey) {
            stripePromise = loadStripe(publishableKey)
        }
        return stripePromise
    }

    const stripe = await getStripe()
    await stripe.redirectToCheckOut({
        mode: "payment",
        lineItem,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin
    })
}