import config from '@vitorxfs/my-ssr';
import path from 'path';

config({
  pagesDirectory: path.join(__dirname, './pages'),
  port: 3001,
});
