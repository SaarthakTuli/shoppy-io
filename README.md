# Shoppy

A <b>Full Stack Ecommerce Web App using <a href="https://nextjs.org/">Next JS<img src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original.svg" alt="nextjs" width="40" height="40" /></a> and <a href="https://www.sanity.io/">Sanity <img src="https://www.sanity.io/static/images/logo_rounded_square.png" alt="stripe" width="24" height="24" /></a></b>. It is <b>Fully Responsive</b> as uses <b><a href="https://www.sanity.io/">Stripe <img src="https://cdn.iconscout.com/icon/free/png-256/stripe-2-498440.png" alt="stripe" height="24" width="24" /></a></b> as the payment authentication.

## Deployment

You can run it locally using :-
```bash
npm run dev
```

To change and add data on the database use :-
```bash
cd sanity_shoppy

sanity start
```

but first youll need a `.env` file with the following :-
```code
NEXT_PUBLIC_SANITY_TOKEN = { Enter the Token you recieve on creating account }
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = { Enter the Publishable Key recieved on actiavting Stripe Account }
NEXT_PUBLIC_STRIPE_SECRET_KEY = { Enter the Secret Key from your Stripe Account }
```



## Showcase
The Website is live at :- 
<br />
[![Netlify Status](https://api.netlify.com/api/v1/badges/cc346e41-de48-4644-b9e1-03b7ff7f4a6d/deploy-status)](https://app.netlify.com/sites/shoppy-io/deploys)
<br />
https://shoppy-io.netlify.app/


## Preview

![3](./assets/3.jpg)

![2](./assets/2.jpg)

![1](./assets/1.jpg)



