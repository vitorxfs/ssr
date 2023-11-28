# My-SSR

A study implementation of react server-side rendering with express, inspired by Next.js

## Structure

This project is structured as a monorepo

```
├── packages
│   └── my-ssr
└── projects
    └── my-project
        ├── pages
        └── index.ts
```

`my-ssr` contains the code for SSR
`my-project` uses `my-ssr` as a package

## Running Locally

To run this project locally, run

- `yarn install`
- `yarn dev:project`

Access it on `localhost:3001`
