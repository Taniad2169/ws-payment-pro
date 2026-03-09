// ============================================================
//  WS Payment Pro — Vercel Backend Function
//  Handles Stripe charges securely server-side
//  Your SECRET key never touches the browser!
// ============================================================

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { paymentMethodId, amount, currency, description, customerName, customerEmail } = req.body;

  // Basic validation
  if (!paymentMethodId || !amount || amount < 1) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Create or find customer in Stripe
    let customer;
    const existingCustomers = await stripe.customers.list({ email: customerEmail, limit: 1 });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        name:  customerName,
        email: customerEmail,
        payment_method: paymentMethodId,
      });
    }

    // Create and confirm payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount:               Math.round(amount * 100), // convert to cents
      currency:             currency || 'usd',
      customer:             customer.id,
      payment_method:       paymentMethodId,
      description:          description || 'Payment',
      confirm:              true,
      automatic_payment_methods: {
        enabled:         true,
        allow_redirects: 'never',
      },
    });

    if (paymentIntent.status === 'succeeded') {
      return res.status(200).json({
        success: true,
        paymentIntentId: paymentIntent.id,
        amount: paymentIntent.amount,
      });
    } else {
      return res.status(400).json({ error: 'Payment not completed. Status: ' + paymentIntent.status });
    }

  } catch (err) {
    console.error('Stripe error:', err.message);
    return res.status(500).json({ error: err.message || 'Payment failed. Please try again.' });
  }
}