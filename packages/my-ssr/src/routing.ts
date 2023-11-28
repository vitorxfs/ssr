import { Router } from 'express';
import { readPagesFromDir } from './utils/readPagesFromDir';
import { renderer } from './utils/renderer';

const routes = (path: string) => {
  const router = Router();

  const pages = readPagesFromDir(path);

  pages.forEach((page) => {
    console.log(`⚡ rendering '${page.name}'`);

    router.get(`${page.name}`, renderer(page));
  });

  return router;
}

export default routes;
