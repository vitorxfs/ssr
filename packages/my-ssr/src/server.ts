import express from 'express';
import path from 'path';

import routes from './routing';

interface Config {
  port: number;
  pagesDirectory: string;
}

const config = ({ port, pagesDirectory }: Config) => {
  const app = express();

  app.use(routes(pagesDirectory));

  app.listen(port, () => {
    console.log(`🌟 App running on port ${port}`);
  });
}

export default config;
