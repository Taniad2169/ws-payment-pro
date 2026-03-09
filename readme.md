# 💳 WS Payment Pro
### by [The WebSwan](https://thewebswan.com) · (415) 877-0687

> **Secure · Professional · Unlimited Transactions**  
> Accept Stripe & PayPal payments instantly — no monthly platform fees, no complicated setup.

---

## ✨ What You Get

- 💳 **Credit/Debit Card payments** via Stripe — auto-detects Visa, Mastercard, Amex, Discover
- 🅿️ **PayPal payments** — customers pay with PayPal balance, bank, or any card
- 🔒 **256-bit SSL encryption** — fully PCI compliant
- 📱 **Mobile responsive** — works beautifully on any device
- ♾️ **Unlimited transactions** — no per-month limits
- 🎨 **Fully branded** — your business name, logo, and colors
- ⚡ **Hosted FREE on Vercel** — no monthly hosting fees

---

## 🚀 Setup Instructions

### Step 1 — Edit Your Business Info

Open `index.html` and find the `CONFIG` block at the top. Edit these lines:

```javascript
const CONFIG = {
  businessName:  'Your Business Name',   // ← your business name
  businessPhone: '(000) 000-0000',        // ← your phone number
  logoEmoji:     '🏪',                    // ← your emoji or leave blank
  accentColor:   '#0d7377',              // ← your primary brand color
  accentSecond:  '#c9a84c',              // ← your secondary color
  currency:      'usd',                  // ← usd, cad, gbp, eur...
  successMsg:    'We will be in touch!', // ← message after payment
```

---

### Step 2 — Get Your Stripe Keys

1. Go to **[dashboard.stripe.com](https://dashboard.stripe.com)**
2. Click **Developers → API Keys**
3. Copy your **Publishable Key** — starts with `pk_live_...`
4. Paste it in `index.html` CONFIG:
```javascript
stripeKey: 'pk_live_...',
```
5. Copy your **Secret Key** — starts with `sk_live_...`
6. You will add this to Vercel in Step 4 — **NEVER paste it in the HTML file!**

---

### Step 3 — Get Your PayPal Client ID

1. Go to **[developer.paypal.com](https://developer.paypal.com)**
2. Click **My Apps & Credentials → Create App**
3. Copy your **Client ID**
4. Paste it in `index.html` CONFIG:
```javascript
paypalClientId: 'YOUR_PAYPAL_CLIENT_ID',
```

---

### Step 4 — Deploy to Vercel (FREE)

1. Push this folder to a **GitHub repository**
2. Go to **[vercel.com](https://vercel.com)** and sign in with GitHub
3. Click **"Add New Project"** → Import your repository
4. Before deploying, click **"Environment Variables"** and add:

| Name | Value |
|------|-------|
| `STRIPE_SECRET_KEY` | `sk_live_...` ← your Stripe secret key |

5. Click **Deploy** — your site will be live in under 2 minutes! ✅

---

### Step 5 — Your Free Domain

Vercel gives you a free domain automatically:
```
your-project-name.vercel.app
```
You can also connect a custom domain anytime for ~$10-15/year.

---

## 🧪 Test Before Going Live

Use Stripe's test keys and this test card to make sure everything works:

- **Card Number:** `4242 4242 4242 4242`
- **Expiry:** Any future date (e.g. `12/30`)
- **CVV:** Any 3 digits (e.g. `123`)
- **ZIP:** Any ZIP code (e.g. `90210`)

Switch to your live keys when you are ready to accept real payments.

---

## 📁 File Structure

```
ws-payment-pro/
  ├── index.html        ← payment form (edit CONFIG here)
  ├── vercel.json       ← Vercel configuration
  ├── package.json      ← Stripe dependency
  └── api/
      └── charge.js     ← backend charge function (no edits needed)
```

---

## 💰 How Payments Work

```
Customer fills form
        ↓
Clicks Pay Now
        ↓
Card token sent to Vercel backend
        ↓
Vercel charges Stripe securely
        ↓
Money goes to YOUR Stripe account 💰
        ↓
Success screen shown to customer ✅
```

**Your secret key never touches the browser** — it lives safely in Vercel's environment variables.

---

## 🛡️ Security

- ✅ All card data handled exclusively by Stripe — never stored on your server
- ✅ PCI-DSS compliant
- ✅ Secret key stored in Vercel environment variables — never in code
- ✅ HTTPS enforced automatically by Vercel
- ✅ Stripe's fraud detection included automatically

---

## 📞 Support

This product is sold and supported by **The WebSwan**

- 📱 **(415) 877-0687**
- 🌐 Maintenance plan available — contact for details

---

*WS Payment Pro — Built with 💙 by The WebSwan*