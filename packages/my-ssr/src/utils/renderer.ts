import { renderToPipeableStream } from 'react-dom/server';
import { PageObj } from './readPagesFromDir';

interface Req {
  query: any;
  params: any;
}

interface Res extends NodeJS.WritableStream {
  setHeader: (header: string, value: string) => {};
  send: (value: any) => {};
}


export const renderer = (page: PageObj) => async (req: Req, res: Res) => {
  let ssr = undefined;
  if (page.getServerSideProps) {
    ssr = await page.getServerSideProps({ params: req.params });
  }

  const { pipe } = renderToPipeableStream(page.page({
    params: req.params,
    ssr: ssr,
  }), {
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    },
    onShellError(error) {
      res.setHeader('content-type', 'text/html');
      res.send('<h1>Something went wrong</h1>');
    },
    onError(err) {
      res.setHeader('content-type', 'text/html');
      res.send('<h1>Something went wrong</h1>');
    }
  });
}
