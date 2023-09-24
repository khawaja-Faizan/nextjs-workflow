# Next.js Workflow

This repository is created to learn Next.js.

## Chapter #1

This Chapter is basically about how we create Nextjs application
and how to start it on our local machine.

To create the application write this command in terminal.

`npx create-next-app@latest`

Before your application starts building you will be asked a few questions, For this section I have choosen these answers.

`√ What is your project named? nextjs-workflow`

`√ Would you like to use TypeScript? ... Yes`

`√ Would you like to use ESLint? ... Yes`

`√ Would you like to use Tailwind CSS? ... Yes`

`√ Would you like to use "src/" directory? ... No`

`√ Would you like to use App Router? (recommended) ... Yes`

`√ Would you like to customize the default import alias? ... Yes`

`√ What import alias would you like configured? ... @/\*``

It will take some time to complete the process and your project will be ready to work on.

To run your application locally run this command inside your project.

`npm run dev`

## Chapter #2

In Chapter #2 We have created new files and learned a bit about routing between files and how next.js has a built-n file routing system.

`Layout.tsx`
We also looked into layout.tsx and how it can be used to customise the layout of every single page and how we can add different metadata for each page from within the layout file of that page.

`Loading.tsx`
Loading.tsx can also be created for a page and every time we will route to that page loader in the loading file will run while that page is getting rendered.

`Error.tsx`
Error Handling was also included in this chapter where a file called error.tsx can be created in a folder of a specific page and than that error can be triggered from with in the page in case the page thows some error.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
