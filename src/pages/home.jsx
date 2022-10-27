import { useLoaderData } from 'react-router-dom';
import Page from '../comonents/Page';

export default function HomePage() {
  const { filename } = useLoaderData();

  return (
    <Page>
      <h1 className="text-xl">Sunshine Scripts</h1>
      <h2 className="text-xl">Global git ignore</h2>

      <code className="block">
        echo {filename} {'>>'} ~/.gitignore_global <br /> git config --global
        core.excludesfile ~/.gitignore_global
      </code>

      <a
        className="text-white underline"
        href="https://stackoverflow.com/questions/18393498/gitignore-all-the-ds-store-files-in-every-folder-and-subfolder"
      >
        Source
      </a>
    </Page>
  );
}

export const homePageLoader = () => {
  return {
    filename: '.DS_Store',
  };
};
