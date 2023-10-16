This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Create a .env file which should have the following:

login into https://console.cloud.google.com/ and create OAuth 2.0 Client IDs
```
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
```

create a mongo db account. Use Atlas for free cloud hosting. Paste the cluster url.
Make sure you created an admin user. The admin user password should also be pased inside the url mongodb url.
```
MONGODB_URI=
```
create the newxt auth secret by running ```bash openssl rand -base64 32```
```
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_URL_INTERNAL="http://localhost:3000"
NEXTAUTH_SECRET=
```



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.