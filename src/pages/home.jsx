import { useLoaderData } from 'react-router-dom';
import Page from '../comonents/Page';

export default function HomePage() {
  const { filename } = useLoaderData();

  return (
    <Page>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">Sunshine Scripts</h1>
        <p className="flex flex-col gap-1">
          <h2 className="text-xl">Global git ignore</h2>

          <code className="block">
            echo {filename} {'>>'} ~/.gitignore_global <br /> git config
            --global core.excludesfile ~/.gitignore_global
          </code>

          <a
            className="text-white underline"
            href="https://stackoverflow.com/questions/18393498/gitignore-all-the-ds-store-files-in-every-folder-and-subfolder"
          >
            Source
          </a>
        </p>
        <p className="flex flex-col gap-1">
          <h2 className="text-xl">Show hidden files</h2>
          <code className="block">ls -a</code>
        </p>
      </div>
    </Page>
  );
}

export const homePageLoader = () => {
  return {
    filename: '.DS_Store',
  };
};
