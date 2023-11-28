import { readdirSync } from 'fs';

export interface PageObj {
  name: string;
  page: (props?: any) => React.ReactNode;
  getServerSideProps?: (props?: any) => Promise<Record<string, any>>
}

export const readPagesFromDir = (path: string, namePath: string=''): PageObj[] => {
  const fileNames = readdirSync(path);

  return fileNames.flatMap((fileName) => {
    let pageName = fileName.split('.')[0];
    pageName = pageName === 'index' ? '' : pageName;

    if (fileName.split('.').length === 1) {
      return readPagesFromDir(`${path}/${fileName}`, `${namePath}/${pageName}`);
    }

    const page = require(`${path}/${fileName}`);

    return {
      name: `${namePath}/${pageName}`,
      page: page.default,
      getServerSideProps: page.getServerSideProps,
    };
  });
};
