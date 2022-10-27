import HomePage, { homePageLoader } from '../pages/home';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    loader: homePageLoader,
  },
];
